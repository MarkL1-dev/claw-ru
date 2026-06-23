import React, { useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { Card, CardBody, Breadcrumbs, BreadcrumbItem, Button, Divider, Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Input, useDisclosure } from "@heroui/react";
import { Icon } from "@iconify/react";

// Newsletter data with detailed content
const newsletters = [
  {
    id: "1",
    title: "Asset Recovery Quarterly",
    issue: "Issue 1",
    date: "January 15, 2023",
    image: "https://img.heroui.chat/image/book?w=800&h=400&u=1",
    summary: "Our inaugural newsletter covering recent developments in international asset recovery.",
    content: [
      {
        type: "intro",
        text: "Welcome to the inaugural issue of Asset Recovery Quarterly, where we explore recent developments and strategies in international asset recovery."
      },
      {
        type: "article",
        title: "Recent Developments in Cross-Border Asset Recovery",
        text: "This quarter has seen significant developments in the legal frameworks governing cross-border asset recovery. Courts in multiple jurisdictions have issued rulings that expand the tools available to practitioners seeking to recover misappropriated assets."
      },
      {
        type: "case_study",
        title: "Case Study: Multi-Jurisdictional Asset Recovery",
        text: "In a recent case, our team successfully recovered assets valued at $45 million that had been dispersed across five jurisdictions following a sophisticated fraud scheme."
      },
      {
        type: "legal_analysis",
        title: "Legal Analysis: Freezing Orders in Offshore Jurisdictions",
        text: "The effectiveness of freezing orders in offshore jurisdictions continues to evolve, with recent cases demonstrating both the power and limitations of these tools in asset recovery strategies."
      },
      {
        type: "upcoming",
        title: "Upcoming Events",
        items: [
          "International Asset Recovery Conference - March 15-17, 2023",
          "Webinar: Cryptocurrency Tracing Techniques - February 8, 2023",
          "Workshop: Effective Use of Norwich Pharmacal Orders - April 5, 2023"
        ]
      }
    ]
  },
  
  // ... other newsletter entries with content property added ...
  {
    id: "2",
    title: "Fraud Litigation Update",
    issue: "Issue 2",
    date: "March 22, 2023",
    image: "https://img.heroui.chat/image/book?w=800&h=400&u=2",
    summary: "Exploring recent developments in fraud litigation and enforcement strategies.",
    content: [
      {
        type: "intro",
        text: "This issue focuses on emerging trends in fraud litigation and innovative enforcement strategies across multiple jurisdictions."
      },
      {
        type: "article",
        title: "Trends in Fraud Litigation",
        text: "Recent court decisions have expanded the scope of liability for financial institutions in fraud cases, creating new opportunities for recovery."
      },
      {
        type: "case_study",
        title: "Case Study: Financial Institution Liability",
        text: "Our team recently secured a judgment against a financial institution that had failed to implement adequate anti-fraud measures, resulting in a $30 million recovery for our client."
      },
      {
        type: "legal_analysis",
        title: "Legal Analysis: Disclosure Orders Against Third Parties",
        text: "The use of disclosure orders against third parties continues to be a powerful tool in fraud investigations, with courts increasingly willing to grant broad disclosure powers."
      },
      {
        type: "upcoming",
        title: "Upcoming Events",
        items: [
          "Fraud Litigation Forum - May 10-12, 2023",
          "Webinar: Third-Party Liability in Fraud Cases - April 18, 2023",
          "Workshop: Effective Use of Disclosure Orders - June 7, 2023"
        ]
      }
    ]
  },
  {
    id: "3",
    title: "Insolvency Insights",
    issue: "Issue 3",
    date: "May 10, 2023",
    image: "https://img.heroui.chat/image/book?w=800&h=400&u=3",
    summary: "Focused on insolvency proceedings as a tool for asset recovery and creditor protection.",
    content: [
      {
        type: "intro",
        text: "This issue explores the strategic use of insolvency proceedings in asset recovery and creditor protection scenarios."
      },
      {
        type: "article",
        title: "Insolvency as an Asset Recovery Tool",
        text: "Insolvency proceedings can be a powerful tool for asset recovery, providing liquidators with broad powers to investigate and recover assets."
      },
      {
        type: "case_study",
        title: "Case Study: Cross-Border Insolvency",
        text: "In a recent case involving entities in multiple jurisdictions, our team used coordinated insolvency proceedings to recover assets for creditors."
      },
      {
        type: "legal_analysis",
        title: "Legal Analysis: Recognition of Foreign Insolvency Proceedings",
        text: "The recognition of foreign insolvency proceedings continues to evolve, with courts increasingly willing to cooperate across jurisdictions."
      },
      {
        type: "upcoming",
        title: "Upcoming Events",
        items: [
          "Insolvency Practitioners Forum - July 12-14, 2023",
          "Webinar: Cross-Border Insolvency Challenges - June 20, 2023",
          "Workshop: Asset Recovery in Insolvency - August 9, 2023"
        ]
      }
    ]
  },
  {
    id: "4",
    title: "Regulatory Compliance Bulletin",
    issue: "Issue 4",
    date: "August 3, 2023",
    image: "https://img.heroui.chat/image/book?w=800&h=400&u=4",
    summary: "Updates on regulatory changes affecting asset recovery and financial crime prevention.",
    content: [
      {
        type: "intro",
        text: "This issue provides updates on key regulatory changes affecting asset recovery and financial crime prevention strategies."
      },
      {
        type: "article",
        title: "Regulatory Developments in Financial Crime Prevention",
        text: "Recent regulatory changes have expanded reporting requirements and due diligence obligations for financial institutions."
      },
      {
        type: "case_study",
        title: "Case Study: Regulatory Investigation",
        text: "Our team recently represented a client in a regulatory investigation, successfully navigating complex compliance requirements."
      },
      {
        type: "legal_analysis",
        title: "Legal Analysis: Impact of Regulatory Changes on Asset Recovery",
        text: "New regulatory frameworks are creating both challenges and opportunities for asset recovery practitioners."
      },
      {
        type: "upcoming",
        title: "Upcoming Events",
        items: [
          "Regulatory Compliance Conference - September 18-20, 2023",
          "Webinar: AML Compliance Updates - August 22, 2023",
          "Workshop: Navigating Regulatory Investigations - October 11, 2023"
        ]
      }
    ]
  },
  {
    id: "5",
    title: "Cross-Border Enforcement Review",
    issue: "Issue 5",
    date: "October 17, 2023",
    image: "https://img.heroui.chat/image/book?w=800&h=400&u=5",
    summary: "Examining strategies for enforcing judgments and orders across multiple jurisdictions.",
    content: [
      {
        type: "intro",
        text: "This issue focuses on strategies and challenges in enforcing judgments and orders across multiple jurisdictions."
      },
      {
        type: "article",
        title: "Trends in Cross-Border Enforcement",
        text: "Recent developments have expanded the tools available for enforcing judgments across jurisdictions, particularly in offshore financial centers."
      },
      {
        type: "case_study",
        title: "Case Study: Enforcement of Foreign Judgment",
        text: "Our team recently secured the enforcement of a $100 million foreign judgment in a jurisdiction traditionally considered challenging for enforcement."
      },
      {
        type: "legal_analysis",
        title: "Legal Analysis: Enforcement Challenges in Offshore Jurisdictions",
        text: "Offshore jurisdictions present unique challenges for enforcement, requiring specialized strategies and local expertise."
      },
      {
        type: "upcoming",
        title: "Upcoming Events",
        items: [
          "Cross-Border Enforcement Symposium - November 15-17, 2023",
          "Webinar: Enforcement Strategies in Offshore Jurisdictions - October 25, 2023",
          "Workshop: Practical Approaches to Judgment Enforcement - December 6, 2023"
        ]
      }
    ]
  },
  {
    id: "6",
    title: "Digital Assets & Recovery Trends",
    issue: "Issue 6",
    date: "December 5, 2023",
    image: "https://img.heroui.chat/image/book?w=800&h=400&u=6",
    summary: "Focusing on emerging challenges and solutions in cryptocurrency and digital asset recovery.",
    content: [
      {
        type: "intro",
        text: "This issue explores the rapidly evolving landscape of digital asset recovery, including cryptocurrencies and other blockchain-based assets."
      },
      {
        type: "article",
        title: "Digital Asset Recovery Challenges",
        text: "The recovery of digital assets presents unique challenges, requiring specialized technical knowledge and innovative legal strategies."
      },
      {
        type: "case_study",
        title: "Case Study: Cryptocurrency Fraud Recovery",
        text: "Our team recently recovered digital assets valued at $15 million following a sophisticated cryptocurrency fraud scheme."
      },
      {
        type: "legal_analysis",
        title: "Legal Analysis: Proprietary Claims to Digital Assets",
        text: "Courts are increasingly recognizing proprietary claims to digital assets, creating new opportunities for recovery in fraud cases."
      },
      {
        type: "upcoming",
        title: "Upcoming Events",
        items: [
          "Digital Asset Recovery Forum - January 22-24, 2024",
          "Webinar: Blockchain Forensics for Lawyers - December 15, 2023",
          "Workshop: Legal Strategies for Cryptocurrency Recovery - February 8, 2024"
        ]
      }
    ]
  }
];

export const NewsletterDetailPage = () => {
  const { newsletterId } = useParams<{ newsletterId: string }>();
  const newsletter = newsletters.find(n => n.id === newsletterId);
  const navigate = useNavigate();
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [subscribeSuccess, setSubscribeSuccess] = useState(false);
  
  // Handle download PDF
  const handleDownloadPDF = () => {
    // In a real application, this would trigger a download
    // For this demo, we'll just show an alert
    alert(`Downloading PDF for ${newsletter?.title}`);
  };
  
  // Handle subscription
  const handleSubscribe = () => {
    if (!email) {
      onOpen();
      return;
    }
    
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setSubscribeSuccess(true);
      setEmail("");
      // Reset success message after 3 seconds
      setTimeout(() => setSubscribeSuccess(false), 3000);
    }, 1000);
  };
  
  if (!newsletter) {
    return (
      <div className="bg-background py-16">
        <div className="container mx-auto px-6">
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-4">Newsletter Not Found</h2>
            <p className="mb-8">The newsletter you are looking for does not exist.</p>
            <Button 
              as={Link} 
              to="/resources/newsletters" 
              color="primary"
              startContent={<Icon icon="lucide:arrow-left" />}
            >
              Return to Newsletters
            </Button>
          </div>
        </div>
      </div>
    );
  }
  
  return (
    <div className="bg-background py-16">
      <div className="container mx-auto px-6">
        <Breadcrumbs className="mb-8">
          <BreadcrumbItem>
            <Link to="/">Home</Link>
          </BreadcrumbItem>
          <BreadcrumbItem>
            <Link to="/resources/newsletters">Newsletters</Link>
          </BreadcrumbItem>
          <BreadcrumbItem>
            <span>{newsletter.title}</span>
          </BreadcrumbItem>
        </Breadcrumbs>
        
        <div className="flex flex-col md:flex-row gap-8">
          <div className="md:w-2/3">
            <Card className="border border-divider bg-content1">
              <CardBody className="p-6 gap-6">
                <div>
                  <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6">
                    <div>
                      <h1 className="text-2xl md:text-3xl font-bold">{newsletter.title}</h1>
                      <div className="flex items-center gap-4 mt-2">
                        <div className="flex items-center gap-1 text-sm text-foreground-600">
                          <Icon icon="lucide:bookmark" size={14} />
                          <span>{newsletter.issue}</span>
                        </div>
                        <div className="flex items-center gap-1 text-sm text-foreground-600">
                          <Icon icon="lucide:calendar" size={14} />
                          <span>{newsletter.date}</span>
                        </div>
                      </div>
                    </div>
                    <Button 
                      variant="flat" 
                      color="primary" 
                      startContent={<Icon icon="lucide:download" size={16} />}
                      onPress={handleDownloadPDF}
                    >
                      Download PDF
                    </Button>
                  </div>
                  
                  <div className="mb-8">
                    <img 
                      src={newsletter.image} 
                      alt={newsletter.title} 
                      className="w-full h-64 object-cover rounded-lg"
                    />
                  </div>
                  
                  {newsletter.content.map((section, index) => (
                    <div key={index} className="mb-8">
                      {section.type === "intro" ? (
                        <div className="bg-primary/5 p-6 rounded-lg border-l-4 border-primary">
                          <p className="text-lg italic mb-0">{section.text}</p>
                        </div>
                      ) : section.type === "article" ? (
                        <div>
                          <h2 className="text-xl font-semibold mb-3">{section.title}</h2>
                          <p>{section.text}</p>
                        </div>
                      ) : section.type === "case_study" ? (
                        <div className="bg-content2 p-6 rounded-lg">
                          <h2 className="text-xl font-semibold mb-3">{section.title}</h2>
                          <p className="mb-0">{section.text}</p>
                        </div>
                      ) : section.type === "legal_analysis" ? (
                        <div>
                          <h2 className="text-xl font-semibold mb-3">{section.title}</h2>
                          <p>{section.text}</p>
                        </div>
                      ) : section.type === "upcoming" ? (
                        <div>
                          <h2 className="text-xl font-semibold mb-3">{section.title}</h2>
                          <ul className="list-disc pl-6">
                            {section.items.map((item, i) => (
                              <li key={i} className="mb-2">{item}</li>
                            ))}
                          </ul>
                        </div>
                      ) : null}
                      
                      {index < newsletter.content.length - 1 && (
                        <Divider className="my-6" />
                      )}
                    </div>
                  ))}
                </div>
                
                <div className="flex justify-between items-center pt-4 border-t border-divider">
                  <Button 
                    as={Link} 
                    to="/resources/newsletters" 
                    variant="light" 
                    color="primary" 
                    startContent={<Icon icon="lucide:arrow-left" size={16} />}
                  >
                    Back to Newsletters
                  </Button>
                  <Button 
                    variant="flat" 
                    color="primary" 
                    endContent={<Icon icon="lucide:mail" size={16} />}
                    onPress={onOpen}
                  >
                    Subscribe to Updates
                  </Button>
                </div>
              </CardBody>
            </Card>
          </div>
          
          <div className="md:w-1/3">
            <div className="sticky top-24">
              <Card className="border border-divider bg-content1 mb-6">
                <CardBody className="p-6">
                  <h3 className="text-xl font-semibold mb-4">More Newsletters</h3>
                  <div className="flex flex-col gap-4">
                    {newsletters
                      .filter(n => n.id !== newsletterId)
                      .slice(0, 3)
                      .map(n => (
                        <Link key={n.id} to={`/newsletter/${n.id}`} className="group">
                          <div className="flex items-start gap-4">
                            <img 
                              src={n.image} 
                              alt={n.title} 
                              className="w-20 h-16 object-cover rounded"
                            />
                            <div>
                              <h4 className="font-medium group-hover:text-primary transition-colors">{n.title}</h4>
                              <p className="text-sm text-foreground-600">{n.issue} - {n.date}</p>
                            </div>
                          </div>
                        </Link>
                      ))}
                  </div>
                  <div className="mt-4">
                    <Button 
                      as={Link}
                      to="/resources/newsletters"
                      variant="light" 
                      color="primary" 
                      className="w-full"
                      endContent={<Icon icon="lucide:arrow-right" size={16} />}
                    >
                      View All Newsletters
                    </Button>
                  </div>
                </CardBody>
              </Card>
              
              <Card className="border border-divider bg-content1">
                <CardBody className="p-6">
                  <h3 className="text-xl font-semibold mb-4">Subscribe</h3>
                  <p className="text-foreground-600 mb-4">
                    Stay updated with our latest insights and legal developments in asset recovery and international law.
                  </p>
                  <div className="flex flex-col gap-4">
                    <Input
                      placeholder="Enter your email"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      startContent={<Icon icon="lucide:mail" className="text-default-400" />}
                      classNames={{
                        inputWrapper: "bg-content2"
                      }}
                    />
                    <Button 
                      color="primary" 
                      className="w-full"
                      endContent={<Icon icon="lucide:mail-plus" size={16} />}
                      isLoading={isSubmitting}
                      onPress={handleSubscribe}
                    >
                      Subscribe to Newsletter
                    </Button>
                    {subscribeSuccess && (
                      <p className="text-success text-sm text-center">Thank you for subscribing!</p>
                    )}
                  </div>
                </CardBody>
              </Card>
            </div>
          </div>
        </div>
      </div>
      
      {/* Subscription Modal */}
      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                Subscribe to Our Newsletter
              </ModalHeader>
              <ModalBody>
                <div className="flex items-center gap-4 mb-4 bg-primary/5 p-4 rounded-lg">
                  <Icon icon="lucide:info" className="text-primary text-xl" />
                  <p className="text-foreground-700">
                    Stay updated with our latest insights and legal developments in asset recovery and international law.
                  </p>
                </div>
                
                <Input
                  label="Email Address"
                  placeholder="Enter your email address"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
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
                    setIsSubmitting(true);
                    // Simulate API call
                    setTimeout(() => {
                      setIsSubmitting(false);
                      setSubscribeSuccess(true);
                      onClose();
                      // Reset success message after 3 seconds
                      setTimeout(() => setSubscribeSuccess(false), 3000);
                    }, 1000);
                  }}
                  isLoading={isSubmitting}
                >
                  Subscribe
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </div>
  );
};