import React from 'react';
import { Button, Card, CardBody } from "@heroui/react";
import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";

const SimpleBrochure: React.FC = () => {
  return (
    <div className="min-h-screen bg-background py-16">
      <div className="container mx-auto px-6">
        <Card className="max-w-2xl mx-auto border border-divider">
          <CardBody className="p-8 flex flex-col items-center gap-6">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
              <Icon icon="lucide:file-text" className="text-primary text-2xl" />
            </div>
            
            <div className="text-center">
              <h1 className="text-2xl font-bold mb-2">CLAW Law Firm Brochure</h1>
              <p className="text-foreground-600">
                Our comprehensive brochure is available for direct download in PDF format.
              </p>
            </div>
            
            <div className="w-full max-w-md bg-content2 rounded-lg p-6">
              <div className="flex items-center gap-4 mb-4">
                <Icon icon="lucide:info" className="text-primary" />
                <p className="text-sm text-foreground-700">
                  The brochure contains detailed information about our services, team, and expertise in the Cayman Islands legal system.
                </p>
              </div>
              
              <Button 
                color="primary"
                className="w-full font-medium"
                startContent={<Icon icon="lucide:download" />}
                as="a"
                href="/brochures/CLAW-Law-Firm-Brochure.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Download Brochure (PDF)
              </Button>
              
              <p className="text-xs text-center text-foreground-500 mt-3">
                PDF format • 2.4 MB • Updated June 2023
              </p>
            </div>
            
            <Button
              as={Link}
              to="/"
              variant="light"
              color="default"
              startContent={<Icon icon="lucide:arrow-left" />}
            >
              Return to Homepage
            </Button>
          </CardBody>
        </Card>
      </div>
    </div>
  );
};

export default SimpleBrochure;