import React from "react";
import { Link } from "react-router-dom";
import { Card, CardBody, Breadcrumbs, BreadcrumbItem, Button } from "@heroui/react";
import { Icon } from "@iconify/react";

const caseStudies = [
  {
    id: "1",
    title: "Cross-Border Fraud Recovery",
    client: "International Investment Fund",
    image: "https://img.heroui.chat/image/finance?w=800&h=400&u=1",
    summary: "Successfully recovered $75 million in assets hidden across five jurisdictions following a complex investment fraud scheme.",
    description: "Our client, a major investment fund, fell victim to a sophisticated fraud scheme that resulted in the misappropriation of $75 million. The perpetrators had dispersed the assets across multiple jurisdictions, including the Cayman Islands, British Virgin Islands, Switzerland, Singapore, and the United Arab Emirates.",
    approach: [
      "Comprehensive forensic investigation to trace the flow of funds",
      "Strategic freezing orders obtained in multiple jurisdictions",
      "Coordination with local counsel and law enforcement agencies",
      "Innovative use of disclosure orders against financial institutions",
      "Negotiated settlements with third parties who had received funds"
    ],
    outcome: "Through coordinated legal action across five jurisdictions, we successfully recovered over 90% of the misappropriated assets within 18 months. The case established important precedents for cross-border asset recovery strategies.",
    testimonial: "The team's ability to coordinate complex legal strategies across multiple jurisdictions was impressive. Their tenacity and expertise were instrumental in recovering our assets.",
    relatedServices: ["asset-recovery", "fraud-litigation", "cross-border-enforcement"]
  },
  {
    id: "2",
    title: "Corporate Embezzlement Recovery",
    client: "Multinational Corporation",
    image: "https://img.heroui.chat/image/finance?w=800&h=400&u=2",
    summary: "Traced and recovered assets valued at $30 million misappropriated by former executives through a network of offshore entities.",
    description: "Our client discovered that several former executives had systematically embezzled approximately $30 million over a five-year period. The funds had been channeled through a complex network of offshore companies and trusts designed to conceal the ultimate beneficial ownership.",
    approach: [
      "Internal investigation to identify the full extent of the fraud",
      "Asset tracing across multiple jurisdictions",
      "Strategic use of Norwich Pharmacal orders to identify beneficial owners",
      "Freezing injunctions to preserve assets pending recovery",
      "Criminal referrals to support the civil recovery strategy"
    ],
    outcome: "We successfully recovered $27.5 million of the misappropriated funds and secured judgments against the former executives. The case resulted in significant improvements to the client's internal controls and governance procedures.",
    testimonial: "Beyond the impressive financial recovery, the team provided valuable insights that helped us strengthen our corporate governance and prevent future incidents.",
    relatedServices: ["asset-recovery", "fraud-litigation", "corporate-disputes"]
  },
  {
    id: "3",
    title: "International Fund Liquidation",
    client: "Fund Investors",
    image: "https://img.heroui.chat/image/finance?w=800&h=400&u=3",
    summary: "Acted as counsel to liquidators of a $500 million investment fund, successfully recovering assets for investors through complex litigation.",
    description: "Following the collapse of a $500 million investment fund due to fraudulent misrepresentation and mismanagement, we were appointed as counsel to the official liquidators. The fund's assets were spread across multiple jurisdictions, and there were competing claims from various creditor groups.",
    approach: [
      "Comprehensive review of fund documentation and transactions",
      "Strategic claims against fund directors, investment manager, and auditors",
      "Coordination of litigation in multiple jurisdictions",
      "Negotiation with major creditor groups",
      "Development of distribution strategy to maximize returns to investors"
    ],
    outcome: "Through a combination of litigation and settlements, we recovered approximately $350 million for distribution to investors. The case established important precedents regarding directors' duties and auditor liability in the context of investment funds.",
    testimonial: "The liquidation process was handled with remarkable efficiency, and the recovery exceeded our expectations given the complexity of the case.",
    relatedServices: ["insolvency-restructuring", "asset-recovery", "fraud-litigation"]
  },
  {
    id: "4",
    title: "Cryptocurrency Fraud Recovery",
    client: "Technology Investment Group",
    image: "https://img.heroui.chat/image/finance?w=800&h=400&u=4",
    summary: "Pioneered innovative legal strategies to recover digital assets worth $15 million following a sophisticated hack.",
    description: "Our client, a technology investment group, lost approximately $15 million in cryptocurrency assets through a sophisticated hack. The stolen assets had been transferred through multiple wallets and exchanges in an attempt to launder the proceeds.",
    approach: [
      "Blockchain forensic analysis to trace the movement of digital assets",
      "Innovative use of proprietary injunctions against 'persons unknown'",
      "Disclosure orders against cryptocurrency exchanges",
      "Coordination with law enforcement agencies across multiple jurisdictions",
      "Development of novel legal arguments regarding the property status of cryptocurrencies"
    ],
    outcome: "We successfully recovered approximately 80% of the stolen cryptocurrency through a combination of legal proceedings and negotiated settlements. The case established important precedents for the treatment of digital assets in recovery actions.",
    testimonial: "The team's understanding of both the legal and technical aspects of cryptocurrency was exceptional. They developed innovative strategies that resulted in a recovery we initially thought impossible.",
    relatedServices: ["asset-recovery", "fraud-litigation", "regulatory-compliance"]
  },
  {
    id: "5",
    title: "Arbitration Award Enforcement",
    client: "International Energy Company",
    image: "https://img.heroui.chat/image/finance?w=800&h=400&u=5",
    summary: "Successfully enforced a $200 million arbitration award against assets held in the Cayman Islands, overcoming complex jurisdictional challenges.",
    description: "Our client had obtained a $200 million arbitration award against a state-owned enterprise but faced significant challenges in enforcement. The debtor had restructured its assets to place them beyond reach, with significant holdings in Cayman Islands entities.",
    approach: [
      "Strategic recognition proceedings in the Cayman Islands",
      "Asset investigation to identify enforcement targets",
      "Receivership applications over Cayman Islands entities",
      "Coordination with counsel in parallel enforcement proceedings",
      "Negotiation strategy leveraging enforcement pressure"
    ],
    outcome: "Through strategic enforcement actions in the Cayman Islands, we successfully recovered the full amount of the arbitration award plus costs. The case established important precedents regarding the enforcement of arbitration awards against restructured corporate groups.",
    testimonial: "The team's strategic approach to enforcement and their deep understanding of Cayman Islands law were crucial to our successful recovery.",
    relatedServices: ["cross-border-enforcement", "asset-recovery", "corporate-disputes"]
  },
  {
    id: "6",
    title: "Shareholder Dispute Resolution",
    client: "Minority Shareholders",
    image: "https://img.heroui.chat/image/finance?w=800&h=400&u=6",
    summary: "Successfully represented minority shareholders in a dispute over corporate control, securing a favorable settlement that protected their investment.",
    description: "Our clients, minority shareholders in a privately held company, faced attempts by the majority shareholder to dilute their interests and divert corporate opportunities. The dispute involved complex corporate governance issues and allegations of breach of fiduciary duty.",
    approach: [
      "Comprehensive review of corporate documentation and transactions",
      "Strategic use of statutory minority shareholder protections",
      "Injunctive relief to prevent further prejudicial conduct",
      "Forensic accounting to identify diverted opportunities and assets",
      "Structured negotiation strategy to achieve favorable settlement"
    ],
    outcome: "We secured a settlement that included a buyout of our clients' shares at a significant premium to fair market value, as well as compensation for diverted opportunities. The case established important principles regarding the protection of minority shareholder rights in Cayman Islands companies.",
    testimonial: "The team's strategic approach transformed what seemed like a hopeless situation into a highly favorable outcome that exceeded our expectations.",
    relatedServices: ["corporate-disputes", "fraud-litigation", "regulatory-compliance"]
  }
];

export const CaseStudiesPage = () => {
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
            <span>Case Studies</span>
          </BreadcrumbItem>
        </Breadcrumbs>
        
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-block bg-primary/10 px-4 py-2 rounded-md mb-4">
            <span className="text-primary font-semibold">Success Stories</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Case Studies</h1>
          <p className="text-foreground-600 text-lg">
            Explore our successful asset recovery and litigation cases across multiple jurisdictions.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {caseStudies.map((caseStudy) => (
            <Card key={caseStudy.id} className="border border-divider bg-content1">
              <CardBody className="p-0">
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={caseStudy.image} 
                    alt={caseStudy.title} 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                    <div className="p-4">
                      <span className="text-white text-xs bg-primary px-2 py-1 rounded">Case Study</span>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{caseStudy.title}</h3>
                  <p className="text-sm text-foreground-500 mb-3">Client: {caseStudy.client}</p>
                  <p className="text-foreground-600 mb-4">{caseStudy.summary}</p>
                  <div className="flex justify-between items-center">
                    <Button 
                      as={Link}
                      to={`/case-study/${caseStudy.id}`}
                      variant="light" 
                      color="primary" 
                      size="sm"
                      endContent={<Icon icon="lucide:arrow-right" size={14} />}
                    >
                      Read Case Study
                    </Button>
                  </div>
                </div>
              </CardBody>
            </Card>
          ))}
        </div>
        
        <div className="mt-16 max-w-3xl mx-auto text-center">
          <Card className="border border-divider bg-content1 p-8">
            <div className="flex flex-col items-center gap-4">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                <Icon icon="lucide:briefcase" className="text-primary text-2xl" />
              </div>
              <h2 className="text-2xl font-bold">Need Help With Your Case?</h2>
              <p className="text-foreground-600">
                Our team of experienced attorneys specializes in complex asset recovery and litigation across multiple jurisdictions.
              </p>
              <div className="flex gap-4 mt-4">
                <Button 
                  as={Link}
                  to="/#contact"
                  color="primary"
                  endContent={<Icon icon="lucide:phone" size={16} />}
                >
                  Schedule a Consultation
                </Button>
                
                {/* Remove brochure button */}
                <Button 
                  as={Link}
                  to="/resources/publications"
                  variant="flat"
                  color="primary"
                  endContent={<Icon icon="lucide:file-text" size={16} />}
                >
                  View Publications
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};