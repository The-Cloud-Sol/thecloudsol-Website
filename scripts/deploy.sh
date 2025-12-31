#!/bin/bash

# Production deployment script for The Cloud Sol website
# This script handles the complete deployment process

set -e  # Exit on any error

# Configuration
ENVIRONMENT=${1:-production}
BUILD_DIR="dist"
BACKUP_DIR="backups"
TIMESTAMP=$(date +%Y%m%d_%H%M%S)
LOG_FILE="deploy_${ENVIRONMENT}_${TIMESTAMP}.log"

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Logging function
log() {
    echo -e "${BLUE}[$(date +'%Y-%m-%d %H:%M:%S')]${NC} $1" | tee -a "$LOG_FILE"
}

error() {
    echo -e "${RED}[ERROR]${NC} $1" | tee -a "$LOG_FILE"
    exit 1
}

success() {
    echo -e "${GREEN}[SUCCESS]${NC} $1" | tee -a "$LOG_FILE"
}

warning() {
    echo -e "${YELLOW}[WARNING]${NC} $1" | tee -a "$LOG_FILE"
}

# Check if required tools are installed
check_dependencies() {
    log "Checking dependencies..."
    
    command -v node >/dev/null 2>&1 || error "Node.js is not installed"
    command -v npm >/dev/null 2>&1 || error "npm is not installed"
    
    NODE_VERSION=$(node --version | cut -d'v' -f2)
    REQUIRED_NODE_VERSION="18.0.0"
    
    if [ "$(printf '%s\n' "$REQUIRED_NODE_VERSION" "$NODE_VERSION" | sort -V | head -n1)" != "$REQUIRED_NODE_VERSION" ]; then
        error "Node.js version $NODE_VERSION is too old. Required: >= $REQUIRED_NODE_VERSION"
    fi
    
    success "Dependencies check passed"
}

# Clean previous builds
clean_build() {
    log "Cleaning previous builds..."
    
    if [ -d "$BUILD_DIR" ]; then
        rm -rf "$BUILD_DIR"
        log "Removed existing build directory"
    fi
    
    if [ -d "node_modules/.cache" ]; then
        rm -rf node_modules/.cache
        log "Cleaned cache directory"
    fi
    
    success "Build cleanup completed"
}

# Install dependencies
install_dependencies() {
    log "Installing dependencies..."
    
    if [ "$ENVIRONMENT" = "production" ]; then
        npm ci --production=false || error "Failed to install dependencies"
    else
        npm ci || error "Failed to install dependencies"
    fi
    
    success "Dependencies installed"
}

# Run tests and quality checks
run_tests() {
    log "Running tests and quality checks..."
    
    # Linting
    npm run lint || error "Linting failed"
    success "Linting passed"
    
    # Type checking
    npm run type-check || error "Type checking failed"
    success "Type checking passed"
    
    # Unit tests (if available)
    if npm run test >/dev/null 2>&1; then
        npm run test || error "Unit tests failed"
        success "Unit tests passed"
    else
        warning "No unit tests found, skipping"
    fi
    
    success "All quality checks passed"
}

# Build the application
build_app() {
    log "Building application for $ENVIRONMENT..."
    
    # Set environment variables
    export NODE_ENV=$ENVIRONMENT
    export VITE_APP_URL=${VITE_APP_URL:-"https://thecloudsol.com"}
    export VITE_API_URL=${VITE_API_URL:-"https://api.thecloudsol.com"}
    
    # Build command
    if [ "$ENVIRONMENT" = "production" ]; then
        npm run build || error "Build failed"
    else
        npm run build:dev || error "Build failed"
    fi
    
    # Check if build was successful
    if [ ! -d "$BUILD_DIR" ]; then
        error "Build directory not found"
    fi
    
    if [ ! -f "$BUILD_DIR/index.html" ]; then
        error "Build output incomplete - index.html not found"
    fi
    
    success "Application built successfully"
}

# Optimize build output
optimize_build() {
    log "Optimizing build output..."
    
    # Compress assets (if gzip is available)
    if command -v gzip >/dev/null 2>&1; then
        find "$BUILD_DIR" -type f \( -name "*.js" -o -name "*.css" -o -name "*.html" \) -exec gzip -k {} \;
        log "Compressed static assets"
    fi
    
    # Generate build info
    cat > "$BUILD_DIR/build-info.json" << EOF
{
  "buildTime": "$(date -u +%Y-%m-%dT%H:%M:%SZ)",
  "environment": "$ENVIRONMENT",
  "gitCommit": "$(git rev-parse HEAD)",
  "gitBranch": "$(git rev-parse --abbrev-ref HEAD)",
  "nodeVersion": "$(node --version)",
  "npmVersion": "$(npm --version)"
}
EOF
    
    success "Build optimization completed"
}

# Backup existing deployment (if exists)
backup_existing() {
    if [ "$ENVIRONMENT" = "production" ] && [ -d "/var/www/thecloudsol.com" ]; then
        log "Creating backup of existing deployment..."
        
        mkdir -p "$BACKUP_DIR"
        cp -r "/var/www/thecloudsol.com" "$BACKUP_DIR/thecloudsol.com_$TIMESTAMP"
        
        # Keep only last 5 backups
        cd "$BACKUP_DIR"
        ls -t | tail -n +6 | xargs -r rm -rf
        
        success "Backup created"
    fi
}

# Deploy to server
deploy_to_server() {
    log "Deploying to $ENVIRONMENT server..."
    
    case $ENVIRONMENT in
        "production")
            DEPLOY_PATH="/var/www/thecloudsol.com"
            ;;
        "staging")
            DEPLOY_PATH="/var/www/staging.thecloudsol.com"
            ;;
        *)
            error "Unknown environment: $ENVIRONMENT"
            ;;
    esac
    
    # Create deploy directory if it doesn't exist
    sudo mkdir -p "$DEPLOY_PATH"
    
    # Copy files to deploy directory
    sudo cp -r "$BUILD_DIR"/* "$DEPLOY_PATH/"
    
    # Set correct permissions
    sudo chown -R www-data:www-data "$DEPLOY_PATH"
    sudo chmod -R 755 "$DEPLOY_PATH"
    
    # Restart web server
    if command -v systemctl >/dev/null 2>&1; then
        sudo systemctl reload nginx || sudo systemctl restart nginx
        log "Web server restarted"
    fi
    
    success "Deployment completed"
}

# Run smoke tests
run_smoke_tests() {
    log "Running smoke tests..."
    
    # Test if the site is accessible
    SITE_URL=${VITE_APP_URL:-"https://thecloudsol.com"}
    
    if command -v curl >/dev/null 2>&1; then
        HTTP_STATUS=$(curl -s -o /dev/null -w "%{http_code}" "$SITE_URL")
        
        if [ "$HTTP_STATUS" = "200" ]; then
            success "Site is accessible (HTTP $HTTP_STATUS)"
        else
            error "Site is not accessible (HTTP $HTTP_STATUS)"
        fi
    else
        warning "curl not available, skipping smoke tests"
    fi
    
    success "Smoke tests completed"
}

# Rollback function
rollback() {
    log "Rolling back deployment..."
    
    if [ -d "$BACKUP_DIR/thecloudsol.com_$TIMESTAMP" ]; then
        sudo rm -rf "/var/www/thecloudsol.com"
        sudo mv "$BACKUP_DIR/thecloudsol.com_$TIMESTAMP" "/var/www/thecloudsol.com"
        sudo chown -R www-data:www-data "/var/www/thecloudsol.com"
        sudo systemctl reload nginx
        
        success "Rollback completed"
    else
        error "No backup found for rollback"
    fi
}

# Main deployment function
deploy() {
    log "Starting deployment to $ENVIRONMENT..."
    
    check_dependencies
    clean_build
    install_dependencies
    run_tests
    build_app
    optimize_build
    backup_existing
    deploy_to_server
    run_smoke_tests
    
    success "Deployment to $ENVIRONMENT completed successfully!"
}

# Handle script arguments
case "${1:-}" in
    "deploy")
        deploy
        ;;
    "rollback")
        rollback
        ;;
    "test")
        check_dependencies
        run_tests
        ;;
    *)
        echo "Usage: $0 {deploy|rollback|test} [environment]"
        echo "Environments: production, staging"
        echo "Default environment: production"
        exit 1
        ;;
esac

log "Deployment process completed. Log file: $LOG_FILE"
