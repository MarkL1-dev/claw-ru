import React, { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { Card, CardBody, Breadcrumbs, BreadcrumbItem, Button, Divider, Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Input, Textarea, useDisclosure } from "@heroui/react";
import { Icon } from "@iconify/react";

// Publication data with detailed content
const publications = [
  {
    id: "1",
    title: "Cross-Border Asset Recovery: Legal Strategies and Challenges",
    author: "Jonathan P. Harrington",
    date: "February 8, 2023",
    image: "https://img.heroui.chat/image/book?w=800&h=400&u=11",
    summary: "An in-depth analysis of legal strategies for cross-border asset recovery in complex fraud cases.",
    content: [
      "Cross-border asset recovery presents unique challenges that require specialized legal strategies and a deep understanding of multiple jurisdictions. This article explores the key legal tools and approaches that have proven effective in complex international fraud cases.",
      "One of the most critical aspects of cross-border asset recovery is the ability to obtain and enforce freezing orders across multiple jurisdictions. Recent developments in case law have expanded the reach of such orders, particularly in cases involving sophisticated attempts to conceal assets through complex corporate structures.",
      "The use of disclosure orders against third parties, particularly financial institutions, has become increasingly important in tracing the flow of misappropriated assets. Courts in major financial centers have shown a growing willingness to grant such orders in support of foreign proceedings, creating new opportunities for recovery practitioners.",
      "Coordination between legal teams in different jurisdictions remains essential to successful recovery efforts. The development of effective coordination protocols and the strategic sequencing of legal actions across jurisdictions can significantly enhance the chances of successful recovery.",
      "Looking ahead, the increasing digitization of assets and financial transactions presents both challenges and opportunities for asset recovery practitioners. While digital assets can be more difficult to trace, advances in blockchain analytics and the development of specialized legal tools are creating new avenues for recovery."
    ]
  },
  {
    id: "2",
    title: "Piercing the Corporate Veil in Offshore Jurisdictions",
    author: "Elizabeth Chen",
    date: "April 17, 2023",
    image: "https://img.heroui.chat/image/book?w=800&h=400&u=12",
    summary: "A comprehensive examination of the evolving jurisprudence on corporate veil piercing in offshore financial centers.",
    content: [
      "The doctrine of corporate veil piercing has undergone significant evolution in offshore financial centers in recent years. This article examines the current state of the law and identifies emerging trends that have important implications for asset recovery practitioners.",
      "Traditionally, offshore jurisdictions have maintained strict adherence to the principle of corporate separateness, making it difficult to pierce the corporate veil even in cases involving fraud or other wrongdoing. However, recent decisions in key offshore financial centers suggest a growing willingness to look beyond corporate formalities in appropriate cases.",
      "The Cayman Islands, in particular, has seen important developments in this area. Recent decisions have expanded the circumstances in which the corporate veil may be pierced, particularly in cases involving fraud, the evasion of existing obligations, or the abuse of corporate structures for improper purposes.",
      "Similar trends can be observed in other offshore jurisdictions, including the British Virgin Islands and Bermuda. While the specific tests applied may vary, there is a common thread of increased judicial willingness to prevent the abuse of corporate structures for fraudulent purposes.",
      "For asset recovery practitioners, these developments create new opportunities to pursue assets held through complex corporate structures. However, successful veil-piercing arguments still require careful preparation and a thorough understanding of the specific requirements in each relevant jurisdiction."
    ]
  },
  {
    id: "3",
    title: "Digital Asset Recovery: Legal Frameworks and Practical Challenges",
    author: "Marcus A. Williams",
    date: "June 22, 2023",
    image: "https://img.heroui.chat/image/book?w=800&h=400&u=13",
    summary: "Exploring the emerging legal frameworks for recovering cryptocurrencies and other digital assets in fraud cases.",
    content: [
      "The recovery of digital assets, particularly cryptocurrencies, presents unique legal and practical challenges that require specialized approaches. This article examines the emerging legal frameworks for digital asset recovery and offers practical guidance for practitioners in this rapidly evolving field.",
      "One of the fundamental challenges in digital asset recovery is establishing legal ownership or proprietary claims to cryptocurrencies and other blockchain-based assets. Recent court decisions in major jurisdictions have increasingly recognized cryptocurrencies as property capable of being owned, creating a foundation for recovery claims.",
      "Tracing digital assets through blockchain networks requires specialized forensic techniques that differ significantly from traditional asset tracing methods. The pseudonymous nature of many blockchain transactions creates challenges, but the immutable record of transactions also provides opportunities for effective tracing when combined with appropriate legal tools.",
      "The use of proprietary injunctions against 'persons unknown' has emerged as a particularly valuable tool in cryptocurrency fraud cases. Such injunctions, combined with disclosure orders against cryptocurrency exchanges, can be effective in freezing and ultimately recovering misappropriated digital assets.",
      "Looking ahead, the increasing regulation of cryptocurrency exchanges and other digital asset service providers is likely to create new opportunities for asset recovery. As these entities become subject to more stringent know-your-customer and anti-money laundering requirements, the ability to identify the beneficial owners of digital assets will improve."
    ]
  },
  {
    id: "4",
    title: "Strategic Use of Insolvency Proceedings in Asset Recovery",
    author: "Sophia Rodriguez",
    date: "August 14, 2023",
    image: "https://img.heroui.chat/image/book?w=800&h=400&u=14",
    summary: "Analyzing how insolvency proceedings can be leveraged as effective tools in complex asset recovery scenarios.",
    content: [
      "Insolvency proceedings can be powerful tools in asset recovery strategies, providing liquidators with broad powers to investigate transactions, pursue claims, and recover assets for the benefit of creditors. This article explores the strategic use of insolvency proceedings in complex asset recovery scenarios.",
      "One of the key advantages of insolvency proceedings is the ability of liquidators to step into the shoes of the insolvent entity and pursue claims that might otherwise be difficult to bring. This includes claims against former directors, claims to avoid fraudulent transfers, and claims against third parties who may have assisted in the dissipation of assets.",
      "Cross-border insolvency frameworks, such as the UNCITRAL Model Law on Cross-Border Insolvency, have significantly enhanced the effectiveness of insolvency-based recovery strategies in international cases. The recognition of foreign insolvency proceedings in multiple jurisdictions can facilitate coordinated recovery efforts across borders.",
      "The strategic timing of insolvency filings can be critical to successful recovery outcomes. In some cases, it may be advantageous to commence proceedings in a particular jurisdiction first, based on factors such as the location of assets, the availability of specific legal remedies, or the approach of local courts to particular issues.",
      "While insolvency proceedings offer significant advantages, they also come with potential challenges, including costs, time frames, and the need to consider the interests of all creditors. Careful planning and coordination between legal teams in relevant jurisdictions is essential to maximize the effectiveness of this approach."
    ]
  },
  {
    id: "5",
    title: "Enforcement of Foreign Judgments in the Cayman Islands",
    author: "Jonathan P. Harrington",
    date: "October 9, 2023",
    image: "https://img.heroui.chat/image/book?w=800&h=400&u=15",
    summary: "A detailed analysis of the legal framework and practical considerations for enforcing foreign judgments in the Cayman Islands.",
    content: [
      "The enforcement of foreign judgments in the Cayman Islands is a critical consideration in international asset recovery strategies, particularly given the jurisdiction's significance as a global financial center. This article provides a detailed analysis of the legal framework and practical considerations for enforcement.",
      "The Cayman Islands' approach to the enforcement of foreign judgments is based primarily on common law principles, as the jurisdiction is not a party to any bilateral or multilateral enforcement treaties. Under the common law, a foreign judgment may be enforced if it is final and conclusive, rendered by a court of competent jurisdiction, and for a definite sum of money.",
      "Recent case law has clarified and in some respects expanded the circumstances in which foreign judgments may be enforced in the Cayman Islands. The courts have shown a willingness to adopt a pragmatic approach, particularly in cases involving fraud or other wrongdoing.",
      "Practical considerations for enforcement include the identification of assets within the jurisdiction, the potential need for interim relief to preserve assets pending enforcement, and strategic decisions regarding the timing and sequencing of enforcement actions in relation to other recovery efforts.",
      "Looking ahead, potential legislative reforms may further enhance the framework for enforcement of foreign judgments in the Cayman Islands. Practitioners should monitor developments in this area, as they may create new opportunities for effective cross-border enforcement strategies."
    ]
  },
  {
    id: "6",
    title: "Beneficial Ownership Disclosure: Implications for Asset Recovery",
    author: "Elizabeth Chen",
    date: "December 3, 2023",
    image: "https://img.heroui.chat/image/book?w=800&h=400&u=16",
    summary: "Examining how beneficial ownership transparency initiatives impact asset tracing and recovery strategies.",
    content: [
      "Beneficial ownership transparency initiatives have gained significant momentum globally in recent years, with important implications for asset tracing and recovery strategies. This article examines how these developments are changing the landscape for asset recovery practitioners.",
      "The establishment of beneficial ownership registers in key jurisdictions, including many offshore financial centers, represents a fundamental shift in the availability of information about the ultimate owners of corporate entities. While access to these registers varies across jurisdictions, they generally provide new avenues for identifying assets held through corporate structures.",
      "Recent regulatory developments, such as the Corporate Transparency Act in the United States and the expansion of the UK's register of overseas entities, are further enhancing transparency and creating new opportunities for asset tracing. These measures are particularly significant given the importance of these jurisdictions in the global financial system.",
      "For asset recovery practitioners, these developments necessitate a reassessment of traditional approaches to asset tracing. The strategic use of beneficial ownership information, combined with traditional investigative techniques and legal tools, can significantly enhance the effectiveness of recovery efforts.",
      "Looking ahead, the trend toward greater beneficial ownership transparency is likely to continue, with potential for further expansion of registers and increased information sharing between jurisdictions. Asset recovery practitioners should stay abreast of these developments and adapt their strategies accordingly."
    ]
  }
];

export const PublicationDetailPage = () => {
  const { publicationId } = useParams<{ publicationId: string }>();
  const publication = publications.find(p => p.id === publicationId);
  const navigate = useNavigate();
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [email, setEmail] = useState("");
  const [shareMessage, setShareMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [shareSuccess, setShareSuccess] = useState(false);
  
  // Handle share article
  const handleShareArticle = () => {
    if (!email) {
      alert("Please enter an email address");
      return;
    }
    
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setShareSuccess(true);
      setEmail("");
      setShareMessage("");
      // Reset success message after 3 seconds
      setTimeout(() => setShareSuccess(false), 3000);
    }, 1000);
  };
  
  if (!publication) {
    return (
      <div className="bg-background py-16">
        <div className="container mx-auto px-6">
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-4">Publication Not Found</h2>
            <p className="mb-8">The publication you are looking for does not exist.</p>
            <Button 
              as={Link} 
              to="/resources/publications" 
              color="primary"
              startContent={<Icon icon="lucide:arrow-left" />}
            >
              Return to Publications
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
            <Link to="/resources/publications">Publications</Link>
          </BreadcrumbItem>
          <BreadcrumbItem>
            <span>{publication.title}</span>
          </BreadcrumbItem>
        </Breadcrumbs>
        
        <div className="flex flex-col md:flex-row gap-8">
          <div className="md:w-2/3">
            <Card className="border border-divider bg-content1">
              <CardBody className="p-6 gap-6">
                <div>
                  <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6">
                    <div>
                      <h1 className="text-2xl md:text-3xl font-bold">{publication.title}</h1>
                      <div className="flex items-center gap-4 mt-2">
                        <div className="flex items-center gap-1 text-sm text-foreground-600">
                          <Icon icon="lucide:user" size={14} />
                          <span>{publication.author}</span>
                        </div>
                        <div className="flex items-center gap-1 text-sm text-foreground-600">
                          <Icon icon="lucide:calendar" size={14} />
                          <span>{publication.date}</span>
                        </div>
                      </div>
                    </div>
                    <Button 
                      variant="flat" 
                      color="primary" 
                      startContent={<Icon icon="lucide:share-2" size={16} />}
                      onPress={onOpen}
                    >
                      Share Article
                    </Button>
                  </div>
                  
                  <div className="mb-8">
                    <img 
                      src={publication.image} 
                      alt={publication.title} 
                      className="w-full h-64 object-cover rounded-lg"
                    />
                  </div>
                  
                  <div className="prose max-w-none" dangerouslySetInnerHTML={{ __html: publication.content }} />
                  
                  <div className="flex flex-wrap gap-2 mt-8">
                    {publication.tags.map((tag, index) => (
                      <span 
                        key={index} 
                        className="bg-primary/10 text-primary text-xs px-3 py-1 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="flex justify-between items-center pt-4 border-t border-divider">
                  <Button 
                    as={Link} 
                    to="/resources/publications" 
                    variant="light" 
                    color="primary" 
                    startContent={<Icon icon="lucide:arrow-left" size={16} />}
                  >
                    Back to Publications
                  </Button>
                  <Button 
                    variant="flat" 
                    color="primary" 
                    endContent={<Icon icon="lucide:download" size={16} />}
                  >
                    Download PDF
                  </Button>
                </div>
              </CardBody>
            </Card>
          </div>
          
          <div className="md:w-1/3">
            <div className="sticky top-24">
              <Card className="border border-divider bg-content1 mb-6">
                <CardBody className="p-6">
                  <h3 className="text-xl font-semibold mb-4">About the Author</h3>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                      <Icon icon="lucide:user" className="text-primary text-2xl" />
                    </div>
                    <div>
                      <h4 className="font-medium">{publication.author}</h4>
                      <p className="text-sm text-foreground-600">Partner, CLAW Law Firm</p>
                    </div>
                  </div>
                  <p className="text-foreground-600 text-sm">
                    Specializing in complex cross-border litigation and asset recovery with over 15 years of experience in international financial centers.
                  </p>
                  <Button 
                    variant="light" 
                    color="primary" 
                    className="w-full mt-4"
                    endContent={<Icon icon="lucide:arrow-right" size={16} />}
                  >
                    View Profile
                  </Button>
                </CardBody>
              </Card>
              
              <Card className="border border-divider bg-content1 mb-6">
                <CardBody className="p-6">
                  <h3 className="text-xl font-semibold mb-4">Related Publications</h3>
                  <div className="flex flex-col gap-4">
                    {publications
                      .filter(p => p.id !== publicationId)
                      .slice(0, 2)
                      .map(p => (
                        <Link key={p.id} to={`/publication/${p.id}`} className="group">
                          <div className="flex items-start gap-4">
                            <img 
                              src={p.image} 
                              alt={p.title} 
                              className="w-20 h-16 object-cover rounded"
                            />
                            <div>
                              <h4 className="font-medium group-hover:text-primary transition-colors">{p.title}</h4>
                              <p className="text-sm text-foreground-600">{p.author}</p>
                            </div>
                          </div>
                        </Link>
                      ))}
                  </div>
                  <div className="mt-4">
                    <Button 
                      as={Link}
                      to="/resources/publications"
                      variant="light" 
                      color="primary" 
                      className="w-full"
                      endContent={<Icon icon="lucide:arrow-right" size={16} />}
                    >
                      View All Publications
                    </Button>
                  </div>
                </CardBody>
              </Card>
              
              <Card className="border border-divider bg-content1">
                <CardBody className="p-6">
                  <h3 className="text-xl font-semibold mb-4">Need Legal Assistance?</h3>
                  <p className="text-foreground-600 mb-4">
                    Contact our team of experts for a consultation on your asset recovery or litigation needs.
                  </p>
                  <Button 
                    as={Link}
                    to="/#contact"
                    color="primary" 
                    className="w-full"
                    endContent={<Icon icon="lucide:phone" size={16} />}
                  >
                    Schedule a Consultation
                  </Button>
                </CardBody>
              </Card>
            </div>
          </div>
        </div>
      </div>
      
      {/* Share Article Modal */}
      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                Share Article
              </ModalHeader>
              <ModalBody>
                <div className="flex items-center gap-4 mb-4 bg-primary/5 p-4 rounded-lg">
                  <Icon icon="lucide:share-2" className="text-primary text-xl" />
                  <p className="text-foreground-700">
                    Share this article with colleagues or clients via email.
                  </p>
                </div>
                
                <Input
                  label="Recipient Email"
                  placeholder="Enter recipient's email address"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  variant="bordered"
                  className="mb-4"
                />
                
                <Textarea
                  label="Message (Optional)"
                  placeholder="Add a personal message"
                  value={shareMessage}
                  onValueChange={setShareMessage}
                  variant="bordered"
                  minRows={3}
                />
              </ModalBody>
              <ModalFooter>
                <Button color="default" variant="light" onPress={onClose}>
                  Cancel
                </Button>
                <Button 
                  color="primary"
                  onPress={handleShareArticle}
                  isLoading={isSubmitting}
                >
                  Send
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </div>
  );
};