import React from "react";
import { Button } from "@heroui/react";
import { Icon } from "@iconify/react";
import { useNavigate } from "react-router-dom";

export const Hero = () => {
  const navigate = useNavigate();
  
  const handleContactClick = () => {
    navigate('/contact');
  };
  
  const handleConsultationClick = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative bg-content1 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src="https://img.heroui.chat/image/places?w=1920&h=1080&u=1"
          alt="Cayman Islands Skyline"
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-content1 to-transparent"></div>
      </div>
      
      <div className="container mx-auto px-6 py-24 md:py-32 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          <div className="max-w-3xl">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-foreground">
              Expert Asset Recovery & Legal Solutions
            </h1>
            <p className="text-lg md:text-xl text-foreground-600 mb-8 max-w-2xl">
              Specialized in complex financial recovery cases with over 25 years of experience in the Cayman Islands jurisdiction.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                color="primary" 
                size="lg" 
                className="font-medium"
                endContent={<Icon icon="lucide:arrow-right" />}
                onPress={handleConsultationClick}
              >
                Schedule a Consultation
              </Button>
              
              <Button 
                variant="bordered" 
                color="primary" 
                size="lg" 
                className="font-medium"
                startContent={<Icon icon="lucide:phone" />}
                onPress={handleContactClick}
              >
                Contact Us
              </Button>
            </div>
            
            <div className="mt-12 flex items-center gap-4">
              <div className="flex items-center gap-2">
                <Icon icon="lucide:check-circle" className="text-primary text-xl" />
                <span className="text-sm font-medium">Confidential Consultations</span>
              </div>
              <div className="h-4 border-r border-divider"></div>
              <div className="flex items-center gap-2">
                <Icon icon="lucide:check-circle" className="text-primary text-xl" />
                <span className="text-sm font-medium">Global Recovery Network</span>
              </div>
              <div className="h-4 border-r border-divider hidden md:block"></div>
              <div className="flex items-center gap-2 hidden md:flex">
                <Icon icon="lucide:check-circle" className="text-primary text-xl" />
                <span className="text-sm font-medium">Proven Results</span>
              </div>
            </div>
          </div>
          
          <div className="hidden lg:block relative h-full">
            <div className="absolute top-32 -right-12 lg:-right-24 xl:right-0">
              <img
                src="https://i.ibb.co/84664pYT/image-2025-10-29-09-56-12.png"
                alt="Courthouse Building"
                className="rounded-lg w-full max-w-md h-auto shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};