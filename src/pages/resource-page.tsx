import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Card, CardBody, Breadcrumbs, BreadcrumbItem, Button, Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Input, useDisclosure } from "@heroui/react";
import { Icon } from "@iconify/react";

// Newsletter data for the newsletters page
const newsletterItems = [
  {
    id: "1",
    title: "Asset Recovery Quarterly",
    issue: "Issue 1",
    date: "January 15, 2023",
    image: "https://img.heroui.chat/image/book?w=800&h=400&u=1",
    summary: "Our inaugural newsletter covering recent developments in international asset recovery."
  },
  {
    id: "2",
    title: "Fraud Litigation Update",
    issue: "Issue 2",
    date: "March 22, 2023",
    image: "https://img.heroui.chat/image/book?w=800&h=400&u=2",
    summary: "Exploring recent developments in fraud litigation and enforcement strategies."
  },
  {
    id: "3",
    title: "Insolvency Insights",
    issue: "Issue 3",
    date: "May 10, 2023",
    image: "https://img.heroui.chat/image/book?w=800&h=400&u=3",
    summary: "Focused on insolvency proceedings as a tool for asset recovery and creditor protection."
  },
  {
    id: "4",
    title: "Regulatory Compliance Bulletin",
    issue: "Issue 4",
    date: "August 3, 2023",
    image: "https://img.heroui.chat/image/book?w=800&h=400&u=4",
    summary: "Updates on regulatory changes affecting asset recovery and financial crime prevention."
  },
  {
    id: "5",
    title: "Cross-Border Enforcement Review",
    issue: "Issue 5",
    date: "October 17, 2023",
    image: "https://img.heroui.chat/image/book?w=800&h=400&u=5",
    summary: "Examining strategies for enforcing judgments and orders across multiple jurisdictions."
  },
  {
    id: "6",
    title: "Digital Assets & Recovery Trends",
    issue: "Issue 6",
    date: "December 5, 2023",
    image: "https://img.heroui.chat/image/book?w=800&h=400&u=6",
    summary: "Focusing on emerging challenges and solutions in cryptocurrency and digital asset recovery."
  }
];

// Publication data for the publications page
const publicationItems = [
  {
    id: "1",
    title: "Cross-Border Asset Recovery: Legal Strategies and Challenges",
    author: "Jonathan P. Harrington",
    date: "February 8, 2023",
    image: "https://img.heroui.chat/image/book?w=800&h=400&u=11",
    summary: "An in-depth analysis of legal strategies for cross-border asset recovery in complex fraud cases."
  },
  {
    id: "2",
    title: "Piercing the Corporate Veil in Offshore Jurisdictions",
    author: "Elizabeth Chen",
    date: "April 17, 2023",
    image: "https://img.heroui.chat/image/book?w=800&h=400&u=12",
    summary: "A comprehensive examination of the evolving jurisprudence on corporate veil piercing in offshore financial centers."
  },
  {
    id: "3",
    title: "Digital Asset Recovery: Legal Frameworks and Practical Challenges",
    author: "Marcus A. Williams",
    date: "June 22, 2023",
    image: "https://img.heroui.chat/image/book?w=800&h=400&u=13",
    summary: "Exploring the emerging legal frameworks for recovering cryptocurrencies and other digital assets in fraud cases."
  },
  {
    id: "4",
    title: "Strategic Use of Insolvency Proceedings in Asset Recovery",
    author: "Sophia Rodriguez",
    date: "August 14, 2023",
    image: "https://img.heroui.chat/image/book?w=800&h=400&u=14",
    summary: "Analyzing how insolvency proceedings can be leveraged as effective tools in complex asset recovery scenarios."
  },
  {
    id: "5",
    title: "Enforcement of Foreign Judgments in the Cayman Islands",
    author: "Jonathan P. Harrington",
    date: "October 9, 2023",
    image: "https://img.heroui.chat/image/book?w=800&h=400&u=15",
    summary: "A detailed analysis of the legal framework and practical considerations for enforcing foreign judgments in the Cayman Islands."
  },
  {
    id: "6",
    title: "Beneficial Ownership Disclosure: Implications for Asset Recovery",
    author: "Elizabeth Chen",
    date: "December 3, 2023",
    image: "https://img.heroui.chat/image/book?w=800&h=400&u=16",
    summary: "Examining how beneficial ownership transparency initiatives impact asset tracing and recovery strategies."
  }
];

export const ResourcePage = () => {
  const { resourceType } = useParams<{ resourceType: string }>();
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [selectedWebinar, setSelectedWebinar] = useState<number | null>(null);
  
  // Function to handle webinar access request
  const handleWebinarAccess = (webinarId: number) => {
    setSelectedWebinar(webinarId);
    onOpen();
  };
  
  const resourceTitles: Record<string, string> = {
    "publications": "Legal Publications",
    "newsletters": "Newsletters & Updates",
    "webinars": "Webinars & Events"
  };
  
  const title = resourceTitles[resourceType || ""] || "Resources";
  
  return (
    <div className="bg-background py-16">
      <div className="container mx-auto px-6">
        <Breadcrumbs className="mb-8">
          <BreadcrumbItem>
            <Link to="/">Home</Link>
          </BreadcrumbItem>
          <BreadcrumbItem>
            <span>Resources</span>
          </BreadcrumbItem>
          <BreadcrumbItem>
            <span>{title}</span>
          </BreadcrumbItem>
        </Breadcrumbs>
        
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-block bg-primary/10 px-4 py-2 rounded-md mb-4">
            <span className="text-primary font-semibold">Resources</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold mb-4">{title}</h1>
          <p className="text-foreground-600 text-lg">
            Access our latest insights, articles, and resources related to asset recovery and international law.
          </p>
          
          {/* Remove brochure download button for publications page */}
          {resourceType === "publications" && (
            <div className="mt-6">
              <div className="inline-flex items-center gap-2 bg-content2 px-4 py-2 rounded-md">
                <Icon icon="lucide:file-text" className="text-primary" />
                <span className="text-foreground-700">Access our legal publications below</span>
              </div>
            </div>
          )}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {resourceType === "newsletters" ? (
            // Updated newsletter cards with links to individual pages
            newsletterItems.map((item) => (
              <Card key={item.id} className="border border-divider bg-content1">
                <CardBody className="p-0">
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={item.image} 
                      alt={item.title} 
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-4 left-4 bg-primary text-white text-xs font-medium px-2 py-1 rounded">
                      {item.issue}
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                    <p className="text-foreground-600 mb-4">{item.summary}</p>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-foreground-500">
                        {item.date}
                      </span>
                      <Button 
                        as={Link}
                        to={`/newsletter/${item.id}`}
                        variant="light" 
                        color="primary" 
                        size="sm"
                        endContent={<Icon icon="lucide:arrow-right" size={14} />}
                      >
                        Read More
                      </Button>
                    </div>
                  </div>
                </CardBody>
              </Card>
            ))
          ) : resourceType === "publications" ? (
            // New publication cards with links to individual pages
            publicationItems.map((item) => (
              <Card key={item.id} className="border border-divider bg-content1">
                <CardBody className="p-0">
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={item.image} 
                      alt={item.title} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                    <p className="text-sm text-foreground-500 mb-3">By {item.author} • {item.date}</p>
                    <p className="text-foreground-600 mb-4">{item.summary}</p>
                    <div className="flex justify-between items-center">
                      <Button 
                        as={Link}
                        to={`/publication/${item.id}`}
                        variant="light" 
                        color="primary" 
                        size="sm"
                        endContent={<Icon icon="lucide:arrow-right" size={14} />}
                      >
                        Read Article
                      </Button>
                    </div>
                  </div>
                </CardBody>
              </Card>
            ))
          ) : (
            // Updated webinar cards with special access handling
            [1, 2, 3, 4, 5, 6].map((item) => (
              <Card key={item} className="border border-divider bg-content1">
                <CardBody className="p-6 gap-4">
                  <div className="w-12 h-12 rounded-md bg-primary/10 flex items-center justify-center">
                    <Icon icon="lucide:video" className="text-primary text-xl" />
                  </div>
                  <h3 className="text-xl font-semibold">
                    {`Webinar Session ${item}`}
                  </h3>
                  <p className="text-foreground-600">
                    {`A recorded webinar session discussing key aspects of international litigation and asset recovery strategies.`}
                  </p>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-foreground-500">
                      {new Date(2023, item % 12, item + 10).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "long",
                        day: "numeric"
                      })}
                    </span>
                    <Button 
                      variant="light" 
                      color="primary" 
                      size="sm"
                      endContent={<Icon icon="lucide:arrow-right" size={14} />}
                      onPress={() => handleWebinarAccess(item)}
                    >
                      Request Access
                    </Button>
                  </div>
                </CardBody>
              </Card>
            ))
          )}
        </div>
      </div>
      
      {/* Webinar Access Modal */}
      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                Webinar Access Request
              </ModalHeader>
              <ModalBody>
                <div className="flex items-center gap-4 mb-4 bg-primary/5 p-4 rounded-lg">
                  <Icon icon="lucide:info" className="text-primary text-xl" />
                  <p className="text-foreground-700">
                    Webinar access is provided via a special link sent to your email. Please enter your email address to request access.
                  </p>
                </div>
                
                <p className="mb-4">
                  You've requested access to <span className="font-semibold">Webinar Session {selectedWebinar}</span>. Our team will verify your credentials and send you the access link within 24 hours.
                </p>
                
                <Input
                  label="Email Address"
                  placeholder="Enter your email address"
                  type="email"
                  variant="bordered"
                  className="mb-2"
                />
                
                <Input
                  label="Full Name"
                  placeholder="Enter your full name"
                  variant="bordered"
                  className="mb-2"
                />
                
                <Input
                  label="Company/Organization"
                  placeholder="Enter your company or organization"
                  variant="bordered"
                />
              </ModalBody>
              <ModalFooter>
                <Button color="default" variant="light" onPress={onClose}>
                  Cancel
                </Button>
                <Button 
                  color="primary"
                  onPress={() => {
                    onClose();
                    // Here you would typically handle the form submission
                  }}
                >
                  Submit Request
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </div>
  );
};