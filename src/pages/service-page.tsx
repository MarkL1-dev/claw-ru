import React, { useEffect } from "react";
import { useParams, useNavigate, Link as RouterLink } from "react-router-dom";
import { Button, Card, CardBody, Divider, Link } from "@heroui/react";
import { Icon } from "@iconify/react";
import { services } from "../components/services";

// Additional content for each service
const serviceDetails = {
  "asset-recovery": {
    heroImage: "https://images.unsplash.com/photo-1617203443952-6d2619f7ff4e?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170",
    subtitle: "Recovering Assets Across Jurisdictions",
    overview: "Our Asset Recovery practice specializes in tracing and recovering assets that have been misappropriated, hidden, or transferred across multiple jurisdictions. We employ sophisticated investigative techniques and strategic legal action to identify and secure assets for our clients.",
    approach: [
      "Comprehensive asset tracing investigations",
      "Strategic freezing orders and injunctions",
      "Coordination with international law enforcement",
      "Recovery through civil and criminal proceedings",
      "Negotiated settlements and alternative dispute resolution"
    ],
    caseStudies: [
      {
        title: "Cross-Border Fraud Recovery",
        description: "Successfully recovered $75 million in assets hidden across five jurisdictions following a complex investment fraud scheme."
      },
      {
        title: "Corporate Embezzlement",
        description: "Traced and recovered assets valued at $30 million misappropriated by former executives through a network of offshore entities."
      }
    ],
    team: ["Jonathan P. Harrington", "Elizabeth Chen", "Marcus A. Williams"]
  },
  "fraud-litigation": {
    heroImage: "https://images.unsplash.com/photo-1505663912202-ac22d4cb3707?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170",
    // NOTE: Replace with Unsplash image using "courtroom" or "legal" keyword
    // Example: https://unsplash.com/photos/brown-wooden-gavel-on-brown-wooden-table-NIJuEQw0RKg
    subtitle: "Strategic Litigation for Complex Fraud Cases",
    overview: "Our Fraud Litigation team provides comprehensive legal representation in complex fraud cases, from initial investigation through to litigation and enforcement. We have extensive experience in handling high-stakes fraud matters involving multiple parties and jurisdictions.",
    approach: [
      "Thorough forensic investigation and evidence gathering",
      "Strategic case planning and risk assessment",
      "Aggressive pursuit of interim remedies",
      "Experienced trial advocacy",
      "Enforcement of judgments across jurisdictions"
    ],
    caseStudies: [
      {
        title: "Investment Fund Fraud",
        description: "Successfully represented investors in litigation against fund managers who had misrepresented investment strategies, resulting in a $120 million recovery."
      },
      {
        title: "Banking Fraud",
        description: "Obtained judgment against former bank executives who had orchestrated a sophisticated fraud scheme, recovering $45 million for the financial institution."
      }
    ],
    team: ["Elizabeth Chen", "Marcus A. Williams", "Sophia Rodriguez"]
  },
  "insolvency-restructuring": {
    heroImage: "https://images.unsplash.com/photo-1483600516620-7254872369ae?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1171",
    subtitle: "Maximizing Recovery in Distressed Situations",
    overview: "Our Insolvency & Restructuring practice provides expert guidance through insolvency proceedings, liquidations, and corporate restructuring. We work to maximize recovery for creditors while finding pragmatic solutions for distressed businesses.",
    approach: [
      "Strategic planning for distressed businesses",
      "Representation of creditors, debtors, and insolvency practitioners",
      "Cross-border insolvency proceedings",
      "Corporate restructuring and reorganization",
      "Distressed asset sales and acquisitions"
    ],
    caseStudies: [
      {
        title: "International Fund Liquidation",
        description: "Acted as counsel to liquidators of a $500 million investment fund, successfully recovering assets for investors through complex litigation."
      },
      {
        title: "Corporate Restructuring",
        description: "Guided a multinational corporation through a complex restructuring process, preserving business operations and maximizing creditor recovery."
      }
    ],
    team: ["Jonathan P. Harrington", "Elizabeth Chen", "Sophia Rodriguez"]
  },
  "cross-border-enforcement": {
    heroImage: "https://images.unsplash.com/photo-1462899006636-339e08d1844e?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170",
    subtitle: "Enforcing Judgments Across Jurisdictions",
    overview: "Our Cross-Border Enforcement team specializes in the enforcement of foreign judgments and arbitral awards in the Cayman Islands and other international jurisdictions. We navigate complex legal frameworks to ensure our clients' judgments are recognized and enforced effectively.",
    approach: [
      "Strategic enforcement planning",
      "Recognition of foreign judgments and awards",
      "Asset preservation and recovery",
      "Coordination with local counsel in multiple jurisdictions",
      "Negotiated settlements and alternative resolution strategies"
    ],
    caseStudies: [
      {
        title: "Arbitration Award Enforcement",
        description: "Successfully enforced a $200 million arbitration award against assets held in the Cayman Islands, overcoming complex jurisdictional challenges."
      },
      {
        title: "Multi-Jurisdictional Judgment",
        description: "Coordinated the enforcement of a $85 million judgment across five jurisdictions, resulting in full recovery for our client."
      }
    ],
    team: ["Marcus A. Williams", "Jonathan P. Harrington", "Sophia Rodriguez"]
  },
  "corporate-disputes": {
    heroImage: "https://images.unsplash.com/photo-1630097208672-ffd0bc8ec8dc?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170",
    subtitle: "Resolving Complex Corporate Conflicts",
    overview: "Our Corporate Disputes practice focuses on the resolution of shareholder disputes, director liability claims, and corporate governance matters. We provide strategic advice and representation to protect our clients' interests and preserve business value.",
    approach: [
      "Strategic dispute resolution planning",
      "Shareholder derivative actions and direct claims",
      "Director and officer liability litigation",
      "Corporate governance advisory",
      "Negotiated settlements and mediation"
    ],
    caseStudies: [
      {
        title: "Shareholder Dispute",
        description: "Successfully represented minority shareholders in a dispute over corporate control, securing a favorable settlement that protected their investment."
      },
      {
        title: "Director Liability Claim",
        description: "Defended directors against claims of breach of fiduciary duty, resulting in dismissal of all claims and recovery of legal costs."
      }
    ],
    team: ["Sophia Rodriguez", "Jonathan P. Harrington", "Elizabeth Chen"]
  },
  "regulatory-compliance": {
    heroImage: "https://images.unsplash.com/photo-1752697588939-cba91b0c78a8?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1171",
    subtitle: "Navigating Complex Regulatory Frameworks",
    overview: "Our Regulatory Compliance practice provides advisory services on regulatory compliance and representation in regulatory investigations and proceedings. We help clients navigate the complex regulatory landscape of the Cayman Islands and international financial regulations.",
    approach: [
      "Regulatory compliance advisory",
      "Internal investigations and risk assessments",
      "Representation in regulatory investigations",
      "Negotiation with regulatory authorities",
      "Compliance program development and implementation"
    ],
    caseStudies: [
      {
        title: "Regulatory Investigation",
        description: "Successfully represented a financial institution in a regulatory investigation, resulting in no enforcement action and minimal reputational impact."
      },
      {
        title: "Compliance Program Implementation",
        description: "Developed and implemented a comprehensive compliance program for a multinational corporation, ensuring adherence to Cayman Islands and international regulations."
      }
    ],
    team: ["Sophia Rodriguez", "Marcus A. Williams", "Elizabeth Chen"]
  }
};

export const ServicePage = () => {
  const { serviceId } = useParams();
  const navigate = useNavigate();
  
  const scrollToContact = () => {
    navigate('/');
    setTimeout(() => {
      const contactSection = document.getElementById('contact');
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  const service = services.find(s => s.id === serviceId);
  const details = serviceId ? serviceDetails[serviceId as keyof typeof serviceDetails] : null;
  
  useEffect(() => {
    // Scroll to top when page loads
    window.scrollTo(0, 0);
  }, [serviceId]);
  
  if (!service || !details) {
    return (
      <div className="container mx-auto px-6 py-20 text-center">
        <h2 className="text-2xl font-bold mb-4">Service Not Found</h2>
        <p className="mb-8">The service you are looking for does not exist.</p>
        <Button 
          as={RouterLink} 
          to="/" 
          color="primary"
          startContent={<Icon icon="lucide:arrow-left" />}
        >
          Return to Home
        </Button>
      </div>
    );
  }

  return (
    <div>
      {/* Hero Section */}
      <section className="relative">
        <div className="h-[500px] w-full relative overflow-hidden">
          <img 
            src={details.heroImage} 
            alt={service.title} 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent"></div>
        </div>
        <div className="container mx-auto px-6 relative -mt-32">
          <Card className="border border-divider bg-content1 shadow-md">
            <CardBody className="p-8 md:p-12">
              <div className="flex flex-col md:flex-row items-start md:items-center gap-6 mb-8">
                <div className="w-24 h-24 rounded-lg bg-primary/10 flex items-center justify-center border border-divider p-4">
                  <Icon icon={service.icon} className="text-primary text-5xl w-full h-full" />
                </div>
                <div>
                  <div className="inline-block bg-primary/10 px-4 py-2 rounded-md mb-3">
                    <span className="text-primary font-semibold">Legal Service</span>
                  </div>
                  <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold">{service.title}</h1>
                  <p className="text-foreground-600 text-lg mt-2">{details.subtitle}</p>
                </div>
              </div>
              
              <div className="flex flex-col gap-2 mb-6">
                <Button 
                  as={RouterLink} 
                  to="/" 
                  variant="light" 
                  color="primary" 
                  startContent={<Icon icon="lucide:arrow-left" size={16} />}
                  className="self-start"
                >
                  Back to Services
                </Button>
              </div>
            </CardBody>
          </Card>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            <div className="lg:col-span-2">
              <div className="bg-content1 border border-divider rounded-lg p-8 shadow-sm mb-10">
                <h2 className="text-2xl md:text-3xl font-bold mb-6">Overview</h2>
                <p className="text-foreground-600 mb-8 text-lg leading-relaxed">
                  {details.overview}
                </p>
              </div>
              
              <div className="bg-content1 border border-divider rounded-lg p-8 shadow-sm mb-10">
                <h2 className="text-2xl md:text-3xl font-bold mb-6">Our Approach</h2>
                <div className="space-y-5 mb-8">
                  {details.approach.map((item, index) => (
                    <div key={index} className="flex items-start gap-4">
                      <div className="bg-primary/10 p-3 rounded-full mt-1">
                        <Icon icon="lucide:check" className="text-primary" />
                      </div>
                      <p className="text-foreground-600 text-lg">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="bg-content1 border border-divider rounded-lg p-8 shadow-sm">
                <h2 className="text-2xl md:text-3xl font-bold mb-6">Case Studies</h2>
                <div className="space-y-8">
                  {details.caseStudies.map((caseStudy, index) => (
                    <Card key={index} className="border border-divider bg-content2">
                      <CardBody className="p-6">
                        <div className="flex items-center gap-4 mb-4">
                          <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                            <Icon icon="lucide:file-text" className="text-primary" />
                          </div>
                          <h3 className="text-xl font-semibold">{caseStudy.title}</h3>
                        </div>
                        <p className="text-foreground-600 text-lg">{caseStudy.description}</p>
                      </CardBody>
                    </Card>
                  ))}
                </div>
              </div>
            </div>
            
            <div>
              <Card className="border border-divider bg-content1 sticky top-24 shadow-md">
                <CardBody className="p-8">
                  <h3 className="text-xl font-semibold mb-6">Contact Us About {service.title}</h3>
                  <p className="text-foreground-600 mb-6">
                    Speak with our team of experts about your {service.title.toLowerCase()} needs.
                  </p>
                  <Button 
                    color="primary" 
                    className="w-full mb-4 py-6"
                    endContent={<Icon icon="lucide:phone" size={16} />}
                    onClick={scrollToContact}
                  >
                    Schedule a Consultation
                  </Button>
                  <Button 
                    variant="flat" 
                    color="primary" 
                    className="w-full py-6"
                    endContent={<Icon icon="lucide:mail" size={16} />}
                    onClick={scrollToContact}
                  >
                    Email Us
                  </Button>
                  
                  <Divider className="my-8" />
                  
                  <h3 className="text-lg font-semibold mb-6">Key Team Members</h3>
                  <div className="space-y-5">
                    {details.team.map((member, index) => (
                      <div key={index} className="flex items-center gap-4 p-3 bg-content2 rounded-lg">
                        <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                          <Icon icon="lucide:user" className="text-primary" />
                        </div>
                        <div>
                          <span className="font-medium">{member}</span>
                          <p className="text-xs text-foreground-600">Expert in {service.title}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  <Divider className="my-8" />
                  
                  <h3 className="text-lg font-semibold mb-6">Related Services</h3>
                  <div className="space-y-3">
                    {services
                      .filter(s => s.id !== serviceId)
                      .slice(0, 3)
                      .map((s, index) => (
                        <Button 
                          key={index}
                          as={RouterLink}
                          to={`/services/${s.id}`}
                          variant="flat" 
                          color="primary" 
                          className="w-full justify-start py-6"
                          startContent={<Icon icon={s.icon} size={18} className="text-primary" />}
                        >
                          {s.title}
                        </Button>
                      ))}
                  </div>
                </CardBody>
              </Card>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-6">
          <div className="mt-8 flex flex-col md:flex-row gap-6 items-center justify-center">
            <div className="flex items-center gap-3">
              <div className="bg-primary/10 p-2 rounded-full">
                <Icon icon="lucide:phone" className="text-primary" />
              </div>
              <div>
                <p className="font-medium">Call Us</p>
                <p className="text-foreground-600">+1 (360) 512-4092</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};