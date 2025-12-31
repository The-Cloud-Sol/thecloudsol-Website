import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { 
  Menu, 
  X, 
  ChevronDown, 
  Building2, 
  Cloud, 
  Database, 
  Grid3x3, 
  Wrench,
  ArrowRight,
  Sparkles,
  Home,
  User,
  Mail,
  PhoneCall
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import logo from "@/assets/logo.png";
import { cn } from "@/lib/utils";

const services = [
  { 
    name: "Microsoft 365", 
    path: "/services/microsoft-365",
    icon: Building2,
    description: "Complete productivity suite",
    color: "text-blue-400",
    bgColor: "bg-blue-400"
  },
  { 
    name: "Microsoft Azure", 
    path: "/services/azure",
    icon: Cloud,
    description: "Enterprise cloud solutions",
    color: "text-cyan-400",
    bgColor: "bg-cyan-400"
  },
  { 
    name: "AWS Cloud", 
    path: "/services/aws",
    icon: Database,
    description: "Scalable cloud infrastructure",
    color: "text-orange-400",
    bgColor: "bg-orange-400"
  },
  { 
    name: "Google Workspace", 
    path: "/services/google-workspace",
    icon: Grid3x3,
    description: "Collaborative workspace tools",
    color: "text-green-400",
    bgColor: "bg-green-400"
  },
  { 
    name: "Custom Solutions", 
    path: "/services/specialized",
    icon: Wrench,
    description: "Tailored cloud solutions",
    color: "text-purple-400",
    bgColor: "bg-purple-400"
  },
];

const navigation = [
  { name: 'Home', path: '/', icon: Home },
  { name: 'About', path: '/about', icon: User },
  { name: 'Contact', path: '/contact', icon: Mail },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen]);

  const isActive = (path: string) => location.pathname === path;
  const isServicesActive = services.some(service => service.path === location.pathname);

  const getIconBgClass = (bgColor: string) => {
    const classes = {
      "bg-blue-400": "from-blue-500/20 to-blue-600/10 group-hover:from-blue-500/30 group-hover:to-blue-600/20",
      "bg-cyan-400": "from-cyan-500/20 to-cyan-600/10 group-hover:from-cyan-500/30 group-hover:to-cyan-600/20",
      "bg-orange-400": "from-orange-500/20 to-orange-600/10 group-hover:from-orange-500/30 group-hover:to-orange-600/20",
      "bg-green-400": "from-green-500/20 to-green-600/10 group-hover:from-green-500/30 group-hover:to-green-600/20",
      "bg-purple-400": "from-purple-500/20 to-purple-600/10 group-hover:from-purple-500/30 group-hover:to-purple-600/20",
    };
    return classes[bgColor as keyof typeof classes] || "from-slate-700/20 to-slate-800/10";
  };

  return (
    <header 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        scrolled ? "bg-slate-950/90 backdrop-blur-md border-b border-white/5 shadow-2xl" : "bg-transparent"
      )}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center group">
            <img 
              src={logo} 
              alt="The Cloud Sol" 
              className="h-9 w-auto transition-transform duration-300 group-hover:scale-105" 
            />
            <span className="ml-3 text-xl font-bold bg-gradient-to-r from-sky-300 via-cyan-300 to-white bg-clip-text text-transparent">
              The Cloud Sol
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={cn(
                  "flex items-center text-sm font-medium transition-colors duration-200 relative group",
                  isActive(item.path) 
                    ? "text-white" 
                    : "text-white/70 hover:text-white"
                )}
              >
                <item.icon className="w-4 h-4 mr-2" />
                {item.name}
                <span className={cn(
                  "absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-sky-400 to-cyan-400 transition-all duration-300",
                  isActive(item.path) ? "w-full" : "w-0 group-hover:w-full"
                )} />
              </Link>
            ))}

            <DropdownMenu>
              <DropdownMenuTrigger 
                className={cn(
                  "flex items-center text-sm font-medium transition-colors duration-200 group relative",
                  isServicesActive 
                    ? "text-white" 
                    : "text-white/70 hover:text-white"
                )}
              >
                <Wrench className="w-4 h-4 mr-2" />
                Services
                <ChevronDown className="ml-1 h-4 w-4 transition-transform duration-200 group-data-[state=open]:rotate-180" />
                <span className={cn(
                  "absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-sky-400 to-cyan-400 transition-all duration-300",
                  isServicesActive ? "w-full" : "w-0 group-hover:w-full"
                )} />
              </DropdownMenuTrigger>
              <DropdownMenuContent 
                align="center"
                sideOffset={20}
                className="p-2 min-w-[280px] border border-white/10 bg-slate-900/95 backdrop-blur-xl shadow-2xl rounded-xl overflow-hidden"
              >
                <div className="p-1 space-y-1">
                  {services.map((service) => {
                    const Icon = service.icon;
                    const active = isActive(service.path);
                    
                    return (
                      <DropdownMenuItem key={service.path} asChild>
                        <Link 
                          to={service.path}
                          className={cn(
                            "group relative flex items-center gap-3 p-3 rounded-lg transition-all duration-200 overflow-hidden",
                            active 
                              ? "bg-gradient-to-r from-slate-800/50 to-slate-800/30 border border-white/10"
                              : "hover:bg-slate-800/50 hover:border-white/5"
                          )}
                        >
                          <div className={`absolute inset-0 -z-10 bg-gradient-to-br ${getIconBgClass(service.bgColor)} opacity-60`} />
                          <div className={`p-2 rounded-lg bg-gradient-to-br ${getIconBgClass(service.bgColor)} border border-white/10 backdrop-blur-sm`}>
                            <Icon className={`h-4 w-4 ${service.color}`} />
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className={cn(
                              "font-medium text-sm transition-colors",
                              active ? "text-white" : "text-white/90 group-hover:text-white"
                            )}>
                              {service.name}
                            </div>
                            <div className={cn(
                              "text-xs mt-0.5 transition-colors",
                              active ? "text-sky-300/90" : "text-slate-400 group-hover:text-slate-300"
                            )}>
                              {service.description}
                            </div>
                          </div>
                          <ArrowRight className={cn(
                            "h-4 w-4 transition-all duration-300",
                            active ? "text-sky-400" : "text-slate-500 group-hover:text-sky-400 group-hover:translate-x-1"
                          )} />
                        </Link>
                      </DropdownMenuItem>
                    );
                  })}
                </div>
              </DropdownMenuContent>
            </DropdownMenu>

            <Button 
              asChild 
              className="group relative overflow-hidden bg-gradient-to-r from-sky-500 to-cyan-500 hover:from-sky-500/90 hover:to-cyan-500/90 text-white shadow-lg shadow-sky-500/20 hover:shadow-sky-500/30 transition-all duration-300"
            >
              <Link to="/quote" className="flex items-center">
                <span className="relative z-10 flex items-center">
                  <PhoneCall className="h-4 w-4 mr-2" />
                  Get a Quote
                </span>
                <span className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </Link>
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden items-center
          ">
            <Button 
              asChild 
              variant="ghost" 
              size="icon"
              className="lg:hidden text-white/80 hover:bg-white/10 hover:text-white"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <span>
                {mobileMenuOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </span>
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className={cn(
        "lg:hidden fixed inset-0 z-40 transition-all duration-300 ease-in-out",
        mobileMenuOpen ? "visible" : "invisible"
      )}>
        {/* Backdrop */}
        <div 
          className={cn(
            "absolute inset-0 bg-black/50 backdrop-blur-sm transition-opacity duration-300",
            mobileMenuOpen ? "opacity-100" : "opacity-0"
          )}
          onClick={() => setMobileMenuOpen(false)}
        />
        
        {/* Menu Panel */}
        <div className={cn(
          "absolute top-0 right-0 h-full w-full max-w-sm bg-slate-950/95 backdrop-blur-xl shadow-2xl transition-transform duration-300 ease-in-out transform",
          mobileMenuOpen ? "translate-x-0" : "translate-x-full"
        )}>
          <div className="flex flex-col h-full overflow-y-auto">
            {/* Fixed Header */}
            <div className={cn(
              "flex items-center justify-between p-6 border-b border-white/10 transition-all duration-300",
              scrolled ? "bg-slate-950/90 backdrop-blur-md" : "bg-transparent"
            )}>
              <Link to="/" className="flex items-center" onClick={() => setMobileMenuOpen(false)}>
                <img 
                  src={logo} 
                  alt="The Cloud Sol" 
                  className="h-8 w-auto" 
                />
                <span className="ml-2 text-xl font-bold bg-gradient-to-r from-sky-300 via-cyan-300 to-white bg-clip-text text-transparent">
                  The Cloud Sol
                </span>
              </Link>
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="p-2 rounded-md text-white/70 hover:text-white hover:bg-white/10 transition-colors"
              >
                <X className="h-6 w-6" />
              </button>
            </div>
            
            {/* Scrollable Content */}
            <nav className="flex-1 px-6 py-6 space-y-2">
              {navigation.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={cn(
                    "flex items-center px-4 py-3 rounded-lg text-base font-medium transition-colors",
                    isActive(item.path)
                      ? "bg-slate-800/50 text-white"
                      : "text-slate-300 hover:bg-slate-800/30 hover:text-white"
                  )}
                >
                  <item.icon className="w-5 h-5 mr-3" />
                  {item.name}
                </Link>
              ))}

              <div className="pt-2">
                <div className="px-4 mb-2 text-sm font-medium text-slate-400">Services</div>
                <div className="space-y-1">
                  {services.map((service) => {
                    const Icon = service.icon;
                    const active = isActive(service.path);
                    
                    return (
                      <Link
                        key={service.path}
                        to={service.path}
                        onClick={() => setMobileMenuOpen(false)}
                        className={cn(
                          "group flex items-center px-4 py-3 rounded-lg transition-all duration-200",
                          active
                            ? "bg-gradient-to-r from-slate-800/50 to-slate-800/30 text-white border border-white/10"
                            : "text-slate-300 hover:bg-slate-800/30 hover:text-white"
                        )}
                      >
                        <div className={`p-1.5 rounded-md ${active ? 'bg-white/10' : 'bg-slate-800/50'} mr-3`}>
                          <Icon className={`h-4 w-4 ${service.color}`} />
                        </div>
                        <div>
                          <div className="text-sm font-medium">{service.name}</div>
                          <div className="text-xs text-slate-400">{service.description}</div>
                        </div>
                      </Link>
                    );
                  })}
                </div>
              </div>
            </nav>

            {/* Fixed Footer */}
            <div className="p-6 pt-0 border-t border-white/10">
              <Button 
                asChild 
                className="w-full bg-gradient-to-r from-sky-500 to-cyan-500 hover:from-sky-500/90 hover:to-cyan-500/90 text-white shadow-lg shadow-sky-500/20 hover:shadow-sky-500/30 transition-all duration-300 h-12 text-base"
                onClick={() => setMobileMenuOpen(false)}
              >
                <Link to="/quote" className="flex items-center justify-center">
                  <PhoneCall className="h-5 w-5 mr-2" />
                  Get a Free Quote
                </Link>
              </Button>
              
              <div className="mt-6 pt-6 border-t border-white/10">
                <div className="flex items-center justify-center space-x-4">
                  <a href="tel:+1234567890" className="p-2 text-slate-400 hover:text-sky-400 transition-colors">
                    <PhoneCall className="h-5 w-5" />
                  </a>
                  <a href="mailto:info@thecloudsol.com" className="p-2 text-slate-400 hover:text-sky-400 transition-colors">
                    <Mail className="h-5 w-5" />
                  </a>
                </div>
                <p className="mt-4 text-center text-sm text-slate-500">
                  © {new Date().getFullYear()} The Cloud Sol. All rights reserved.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
