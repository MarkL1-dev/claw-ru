import React from "react";
import { Card, CardBody, CardFooter, Button } from "@heroui/react";
import { Icon } from "@iconify/react";
import { useNavigate } from "react-router-dom";

const team = [
  {
    name: "Jonathan P. Harrington",
    role: "Managing Partner",
    image: "https://img.heroui.chat/image/avatar?w=400&h=400&u=1",
    bio: "Over 25 years of experience in international asset recovery and complex commercial litigation.",
  },
  {
    name: "Elizabeth Chen",
    role: "Senior Partner",
    image: "https://img.heroui.chat/image/avatar?w=400&h=400&u=2",
    bio: "Specializes in cross-border insolvency and restructuring with expertise in Asian markets.",
  },
  {
    name: "Marcus A. Williams",
    role: "Partner",
    image: "https://img.heroui.chat/image/avatar?w=400&h=400&u=3", // Replace with HeroUI image service
    bio: "Focuses on fraud litigation and asset tracing across Caribbean and European jurisdictions.",
  },
  {
    name: "Sophia Rodriguez",
    role: "Partner",
    image: "https://img.heroui.chat/image/avatar?w=400&h=400&u=4", // Replace with HeroUI image service
    bio: "Expert in regulatory compliance and financial services litigation with government experience.",
  }
];

export const Team = () => {
  // Remove conditional check that's causing issues
  const navigate = useNavigate();
  
  const scrollToSection = (sectionId: string) => {
    // First navigate to home page if not already there
    if (window.location.pathname !== '/') {
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

  return (
    <section id="team" className="py-24 bg-content2 scroll-mt-20">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16">
          <div className="max-w-xl">
            <div className="inline-block bg-primary/10 px-4 py-2 rounded-md mb-4">
              <span className="text-primary font-semibold">Meet Our Experts</span>
            </div>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">Our Legal Team</h2>
            <p className="text-foreground-600 text-lg">
              Experienced attorneys with specialized knowledge in asset recovery and international law.
            </p>
          </div>
          <Button 
            variant="flat" 
            color="primary" 
            className="mt-6 md:mt-0"
            endContent={<Icon icon="lucide:arrow-right" size={16} />}
            onClick={() => scrollToSection('contact')}
          >
            Contact Our Team
          </Button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <Card key={index} className="border border-divider bg-content1 overflow-hidden hover:shadow-md transition-shadow duration-300">
              <div className="relative h-56 w-full overflow-hidden group">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className={`w-full h-full object-cover ${member.name === "Elizabeth Chen" ? "object-[center_15%]" : "object-top"} group-hover:scale-105 transition-transform duration-500`}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-4 w-full">
                    <div className="flex justify-center gap-4">
                      <Button 
                        isIconOnly 
                        size="sm" 
                        variant="flat" 
                        color="default" 
                        className="bg-white/20 backdrop-blur-md"
                      >
                        <Icon icon="lucide:linkedin" size={16} />
                      </Button>
                      <Button 
                        isIconOnly 
                        size="sm" 
                        variant="flat" 
                        color="default" 
                        className="bg-white/20 backdrop-blur-md"
                      >
                        <Icon icon="lucide:mail" size={16} />
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
              <CardBody className="gap-2 p-6">
                <h3 className="text-lg font-semibold">{member.name}</h3>
                <p className="text-primary text-sm font-medium">{member.role}</p>
                <p className="text-foreground-600 text-sm mt-2">{member.bio}</p>
              </CardBody>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};