import React from "react";
import { Navbar as HeroNavbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button, Divider } from "@heroui/react";
import { Icon } from "@iconify/react";
import { useNavigate, useLocation, Link as RouterLink } from "react-router-dom";

export const Navbar = () => {
  // Update the document title when the component mounts
  React.useEffect(() => {
    // Set the document title
    document.title = "CLAW — Юридическая фирма | Специалисты по возврату активов";
    
    // Update title on page changes if needed
    return () => {
      // Clean up if necessary
    };
  }, []);

  const navigate = useNavigate();
  const location = useLocation();
  
  // Update scrollToSection function to handle both internal and external links
  const scrollToSection = (sectionId: string) => {
    // Check if we're trying to navigate to the contact page specifically
    if (sectionId === 'contact') {
      // Use direct navigation to contact page instead of scrolling
      navigate('/contact');
      return;
    }
    
    // For other sections, use the existing logic
    if (location.pathname !== '/') {
      navigate('/');
      // Give time for the route change to complete
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      // If already on home page, just scroll
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };
  
  // Check if a nav item should be active
  const isActive = (path: string) => {
    return location.pathname === path;
  };

  // Remove the resources dropdown state
  // const [isResourcesOpen, setIsResourcesOpen] = React.useState(false);
  
  return (
    <div className="w-full">
      {/* Top bar with contact info */}
      <div className="bg-primary text-white py-2 hidden md:block relative">
        <div className="container mx-auto px-6 flex justify-between items-center">
          {/* Removed bookmark element */}
          
          <div className="flex items-center gap-6 text-xs">
            <div className="flex items-center gap-2">
              <Icon icon="lucide:map-pin" size={14} />
              <span>Гранд-Кайман, Каймановы острова</span>
            </div>
          </div>
          
          <div className="flex justify-end items-center gap-6 text-xs">
            <div className="flex items-center gap-2">
              <Icon icon="lucide:phone" size={14} />
              <span>+1 (920) 212-9330</span>
            </div>
            <div className="flex items-center gap-2">
              <Icon icon="lucide:mail" size={14} />
              <span>inquiries@clawsolution.info</span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Main navbar with improved design */}
      <HeroNavbar 
        maxWidth="xl" 
        className="bg-content1 shadow-sm border-b border-divider py-3"
        height="5rem"
      >
        <NavbarBrand>
          <RouterLink to="/" className="flex items-center gap-3">
            <div className="bg-gradient-to-br from-primary to-primary-600 p-3 rounded-md shadow-sm flex items-center justify-center relative group">
              <div className="absolute inset-0 bg-white opacity-0 rounded-md group-hover:opacity-10 transition-opacity duration-300"></div>
              <Icon icon="lucide:scale" className="text-white text-2xl" />
            </div>
            <div>
              <p className="font-bold tracking-widest text-xl mb-0 leading-none">CLAW</p>
              <p className="text-xs text-foreground-500 tracking-wider">ЮРИДИЧЕСКАЯ ФИРМА</p>
            </div>
          </RouterLink>
        </NavbarBrand>
        
        <NavbarContent className="hidden lg:flex gap-8" justify="center">
          <NavbarItem isActive={isActive('/')}>
            <Link 
              href="#" 
              color="foreground" 
              className={`text-sm font-medium tracking-wide py-1 border-b-2 ${isActive('/') ? 'border-primary' : 'border-transparent'} hover:border-primary/50 transition-colors`}
              onClick={(e) => {
                e.preventDefault();
                navigate('/');
              }}
            >
              ГЛАВНАЯ
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link 
              href="#" 
              color="foreground" 
              className="text-sm font-medium tracking-wide py-1 border-b-2 border-transparent hover:border-primary/50 transition-colors"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('services');
              }}
            >
              УСЛУГИ
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link 
              href="#" 
              color="foreground" 
              className="text-sm font-medium tracking-wide py-1 border-b-2 border-transparent hover:border-primary/50 transition-colors"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('testimonials');
              }}
            >
              ОТЗЫВЫ
            </Link>
          </NavbarItem>
          
          {/* Remove the Resources dropdown menu */}
          {/* <NavbarItem>
            <div 
              className="relative"
              onMouseEnter={() => setIsResourcesOpen(true)}
              onMouseLeave={() => setIsResourcesOpen(false)}
            >
              <Link 
                href="#" 
                color="foreground" 
                className={`text-sm font-medium tracking-wide py-1 border-b-2 ${
                  location.pathname.includes('/resources') || 
                  location.pathname.includes('/case-studies') || 
                  location.pathname.includes('/careers') ? 
                  'border-primary' : 'border-transparent'
                } hover:border-primary/50 transition-colors flex items-center gap-1`}
                onClick={(e) => {
                  e.preventDefault();
                }}
              >
                РЕСУРСЫ
                <Icon icon="lucide:chevron-down" size={16} />
              </Link>
              
              {isResourcesOpen && (
                <div className="absolute top-full left-0 mt-1 bg-content1 shadow-md rounded-md py-2 min-w-[200px] z-50 border border-divider">
                  <Link 
                    as={RouterLink}
                    to="/case-studies"
                    className="block px-4 py-2 text-sm hover:bg-content2 transition-colors"
                    onClick={() => setIsResourcesOpen(false)}
                  >
                    Кейсы
                  </Link>
                  <Link 
                    as={RouterLink}
                    to="/resources/publications"
                    className="block px-4 py-2 text-sm hover:bg-content2 transition-colors"
                    onClick={() => setIsResourcesOpen(false)}
                  >
                    Юридические публикации
                  </Link>
                  <Link 
                    as={RouterLink}
                    to="/resources/newsletters"
                    className="block px-4 py-2 text-sm hover:bg-content2 transition-colors"
                    onClick={() => setIsResourcesOpen(false)}
                  >
                    Рассылки
                  </Link>
                  <Link 
                    as={RouterLink}
                    to="/resources/webinars"
                    className="block px-4 py-2 text-sm hover:bg-content2 transition-colors"
                    onClick={() => setIsResourcesOpen(false)}
                  >
                    Вебинары
                  </Link>
                  <Divider className="my-1" />
                  <Link 
                    as={RouterLink}
                    to="/careers"
                    className="block px-4 py-2 text-sm hover:bg-content2 transition-colors"
                    onClick={() => setIsResourcesOpen(false)}
                  >
                    Карьера
                  </Link>
                </div>
              )}
            </div>
          </NavbarItem> */}
        </NavbarContent>
        
        <NavbarContent justify="end">
          <NavbarItem>
            <Button 
              color="primary" 
              variant="flat" 
              className="font-medium px-6 py-5 shadow-sm hover:shadow-md transition-shadow"
              startContent={<Icon icon="lucide:phone" size={16} />}
              onClick={() => navigate('/contact')} // Direct navigation to contact page
              endContent={<span className="ml-1">→</span>}
            >
              КОНТАКТЫ
            </Button>
          </NavbarItem>
        </NavbarContent>
      </HeroNavbar>
    </div>
  );
};