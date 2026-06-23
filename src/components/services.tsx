import React from "react";
import { Card, CardBody, CardFooter, Button } from "@heroui/react";
import { Icon } from "@iconify/react";
import { useNavigate } from "react-router-dom";

export const services = [
  {
    icon: "lucide:briefcase",
    title: "Asset Recovery",
    description: "Specialized in tracing and recovering misappropriated assets across multiple jurisdictions with strategic legal action.",
    id: "asset-recovery"
  },
  {
    icon: "lucide:shield",
    title: "Fraud Litigation",
    description: "Comprehensive legal representation in complex fraud cases, from investigation to litigation and enforcement.",
    id: "fraud-litigation"
  },
  {
    icon: "lucide:landmark",
    title: "Insolvency & Restructuring",
    description: "Expert guidance through insolvency proceedings, liquidations, and corporate restructuring to maximize recovery.",
    id: "insolvency-restructuring"
  },
  {
    icon: "lucide:globe",
    title: "Cross-Border Enforcement",
    description: "Enforcement of foreign judgments and arbitral awards in the Cayman Islands and international jurisdictions.",
    id: "cross-border-enforcement"
  },
  {
    icon: "lucide:building",
    title: "Corporate Disputes",
    description: "Resolution of shareholder disputes, director liability claims, and corporate governance matters.",
    id: "corporate-disputes"
  },
  {
    icon: "lucide:file-text",
    title: "Regulatory Compliance",
    description: "Advisory services on regulatory compliance and representation in regulatory investigations and proceedings.",
    id: "regulatory-compliance"
  }
];

export const Services = () => {
  const navigate = useNavigate();
  
  const handleServiceClick = (serviceId: string) => {
    navigate(`/services/${serviceId}`);
  };

  return (
    <section id="services" className="py-20 bg-background scroll-mt-20">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16">
          <div className="max-w-xl">
            <div className="inline-block bg-primary/10 px-4 py-2 rounded-md mb-4">
              <span className="text-primary font-semibold">Our Expertise</span>
            </div>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">Our Legal Services</h2>
            <p className="text-foreground-600 text-lg">
              Comprehensive legal solutions tailored to complex financial recovery cases in the Cayman Islands and worldwide.
            </p>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Card key={index} className="border border-divider bg-content1 hover:shadow-md transition-shadow duration-300">
              <CardBody className="gap-4 p-6">
                <div className="w-16 h-16 rounded-md bg-primary/10 flex items-center justify-center p-3">
                  <Icon icon={service.icon} className="text-primary text-3xl w-full h-full" />
                </div>
                <h3 className="text-xl font-semibold">{service.title}</h3>
                <p className="text-foreground-600">{service.description}</p>
              </CardBody>
              <CardFooter className="px-6 pb-6 pt-0">
                <Button 
                  variant="light" 
                  color="primary" 
                  endContent={<Icon icon="lucide:arrow-right" size={16} />}
                  onPress={() => handleServiceClick(service.id)}
                >
                  Learn More
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};