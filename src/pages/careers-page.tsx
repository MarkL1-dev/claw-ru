import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Card, CardBody, Breadcrumbs, BreadcrumbItem, Button, Accordion, AccordionItem, Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Input, Textarea, useDisclosure } from "@heroui/react";
import { Icon } from "@iconify/react";

const jobOpenings = [
  {
    title: "Senior Associate - Asset Recovery",
    location: "Grand Cayman",
    type: "Full-time",
    description: "We are seeking an experienced Senior Associate to join our Asset Recovery practice. The ideal candidate will have 5+ years of experience in complex financial litigation and asset tracing."
  },
  {
    title: "Associate - Fraud Litigation",
    location: "Grand Cayman",
    type: "Full-time",
    description: "An opportunity for a mid-level Associate to join our Fraud Litigation team. You will work directly with partners on high-profile international fraud cases."
  },
  {
    title: "Legal Assistant - Insolvency",
    location: "Grand Cayman",
    type: "Full-time",
    description: "Supporting our Insolvency practice, this role involves assisting attorneys with case management, document preparation, and client communications."
  },
  {
    title: "Business Development Manager",
    location: "Remote/Hybrid",
    type: "Full-time",
    description: "Lead our business development initiatives, focusing on expanding our client base across international markets and promoting our specialized legal services."
  }
];

export const CareersPage = () => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [selectedJob, setSelectedJob] = useState<typeof jobOpenings[0] | null>(null);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    coverLetter: "",
    resumeFile: null as File | null,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  
  // Handle opening the application modal
  const handleApplyNow = (job: typeof jobOpenings[0]) => {
    setSelectedJob(job);
    onOpen();
  };
  
  // Handle form input changes
  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };
  
  // Handle file upload
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // Fix: Add null check before accessing files
    if (e.target && e.target.files && e.target.files.length > 0) {
      setFormData(prev => ({ ...prev, resumeFile: e.target.files![0] }));
    }
  };
  
  // Handle form submission
  const handleSubmit = () => {
    if (!formData.fullName || !formData.email) {
      alert("Please fill in all required fields");
      return;
    }
    
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      
      // Reset form after successful submission
      setTimeout(() => {
        setSubmitSuccess(false);
        setFormData({
          fullName: "",
          email: "",
          phone: "",
          coverLetter: "",
          resumeFile: null,
        });
      }, 3000);
    }, 1500);
  };

  return (
    <div>
      <div className="bg-background py-16">
        <div className="container mx-auto px-6">
          <Breadcrumbs className="mb-8">
            <BreadcrumbItem>
              <Link to="/">Home</Link>
            </BreadcrumbItem>
            <BreadcrumbItem>
              <span>Careers</span>
            </BreadcrumbItem>
          </Breadcrumbs>
          
          <div className="max-w-3xl mx-auto text-center mb-16">
            <div className="inline-block bg-primary/10 px-4 py-2 rounded-md mb-4">
              <span className="text-primary font-semibold">Join Our Team</span>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Careers at CLAW</h1>
            <p className="text-foreground-600 text-lg">
              Join our team of legal professionals dedicated to excellence in asset recovery and international law.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-bold mb-6">Current Openings</h2>
              
              <div className="space-y-6">
                {jobOpenings.map((job, index) => (
                  <Card key={index} className="border border-divider bg-content1">
                    <CardBody className="p-6">
                      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                        <div>
                          <h3 className="text-xl font-semibold">{job.title}</h3>
                          <div className="flex items-center gap-4 mt-2">
                            <div className="flex items-center gap-1 text-sm text-foreground-600">
                              <Icon icon="lucide:map-pin" size={14} />
                              <span>{job.location}</span>
                            </div>
                            <div className="flex items-center gap-1 text-sm text-foreground-600">
                              <Icon icon="lucide:clock" size={14} />
                              <span>{job.type}</span>
                            </div>
                          </div>
                        </div>
                        <Button 
                          color="primary" 
                          variant="flat"
                          endContent={<Icon icon="lucide:arrow-right" size={16} />}
                          onPress={() => handleApplyNow(job)}
                        >
                          Apply Now
                        </Button>
                      </div>
                      <p className="mt-4 text-foreground-600">{job.description}</p>
                    </CardBody>
                  </Card>
                ))}
              </div>
            </div>
            
            <div>
              <Card className="border border-divider bg-content1 sticky top-24">
                <CardBody className="p-6 gap-6">
                  <h3 className="text-xl font-semibold">Why Join CLAW?</h3>
                  
                  <div className="flex items-start gap-3">
                    <div className="bg-primary/10 p-2 rounded-full mt-1">
                      <Icon icon="lucide:briefcase" className="text-primary" />
                    </div>
                    <div>
                      <p className="font-medium">Challenging Work</p>
                      <p className="text-sm text-foreground-600">Work on complex international cases with high-profile clients.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="bg-primary/10 p-2 rounded-full mt-1">
                      <Icon icon="lucide:trending-up" className="text-primary" />
                    </div>
                    <div>
                      <p className="font-medium">Career Growth</p>
                      <p className="text-sm text-foreground-600">Clear path for advancement and professional development.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="bg-primary/10 p-2 rounded-full mt-1">
                      <Icon icon="lucide:users" className="text-primary" />
                    </div>
                    <div>
                      <p className="font-medium">Collaborative Culture</p>
                      <p className="text-sm text-foreground-600">Work alongside industry-leading experts in a supportive environment.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="bg-primary/10 p-2 rounded-full mt-1">
                      <Icon icon="lucide:palm-tree" className="text-primary" />
                    </div>
                    <div>
                      <p className="font-medium">Cayman Lifestyle</p>
                      <p className="text-sm text-foreground-600">Enjoy living and working in one of the world's premier offshore financial centers.</p>
                    </div>
                  </div>
                  
                  <Button 
                    color="primary" 
                    className="w-full mt-4"
                    endContent={<Icon icon="lucide:mail" size={16} />}
                  >
                    Contact Recruiting
                  </Button>
                </CardBody>
              </Card>
            </div>
          </div>
          
          <div className="mt-16">
            <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>
            
            <Accordion variant="splitted" className="max-w-3xl">
              <AccordionItem key="1" title="What is the application process?">
                <p>
                  Our application process typically involves submitting your resume and cover letter, followed by an initial screening call. Qualified candidates will then be invited for interviews with our team members and partners. The final stage may include a case study or practical assessment relevant to the position.
                </p>
              </AccordionItem>
              
              <AccordionItem key="2" title="Do you offer internships or training contracts?">
                <p>
                  Yes, we offer summer internships for law students and articling positions for qualified candidates. These programs provide hands-on experience working with our legal teams on actual cases, giving participants valuable insights into the practice of international asset recovery and litigation.
                </p>
              </AccordionItem>
              
              <AccordionItem key="3" title="What qualifications do you look for?">
                <p>
                  For attorney positions, we typically require a law degree from an accredited institution and relevant jurisdictional qualifications. Experience in financial services, insolvency, or cross-border litigation is highly valued. For support roles, we look for candidates with relevant experience and a strong attention to detail.
                </p>
              </AccordionItem>
              
              <AccordionItem key="4" title="Do you offer relocation assistance?">
                <p>
                  Yes, for certain positions we offer relocation assistance to candidates moving to the Cayman Islands. This may include temporary accommodation, moving allowance, and assistance with work permits and other administrative requirements.
                </p>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </div>
      
      <section className="py-16 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">Apply for a Position</h2>
            
            <Card className="border border-divider bg-content1">
              <CardBody className="gap-6 p-8">
                <form 
                  action="https://formsubmit.co/inquiries@clawsolution.info" 
                  method="POST"
                  encType="multipart/form-data"
                  className="flex flex-col gap-5"
                >
                  {/* FormSubmit configuration fields */}
                  <input type="hidden" name="_subject" value="Career Application - CLAW Law Firm" />
                  <input type="hidden" name="_next" value={window.location.origin + "/careers?applied=true"} />
                  <input type="hidden" name="_captcha" value="false" />
                  <input type="hidden" name="_template" value="table" />
                  
                  {/* Existing form fields with name attributes added */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <Input
                      name="fullName"
                      label="Full Name"
                      placeholder="Enter your full name"
                      isRequired
                      variant="bordered"
                    />
                    <Input
                      name="email"
                      label="Email"
                      placeholder="Enter your email address"
                      type="email"
                      isRequired
                      variant="bordered"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-sm font-medium">
                      Phone Number <span className="text-danger">*</span>
                    </label>
                    <Input
                      name="phone"
                      label="Phone Number"
                      placeholder="Enter your phone number"
                      variant="bordered"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-sm font-medium">
                      Resume/CV <span className="text-danger">*</span>
                    </label>
                    <div className="border-2 border-dashed border-divider rounded-lg p-4 text-center">
                      <input
                        type="file"
                        id="resume-upload"
                        className="hidden"
                        accept=".pdf,.doc,.docx"
                        onChange={handleFileChange}
                      />
                      <label htmlFor="resume-upload" className="cursor-pointer">
                        <div className="flex flex-col items-center gap-2">
                          <Icon icon="lucide:upload-cloud" className="text-primary text-3xl" />
                          <p className="font-medium">
                            {formData.resumeFile ? formData.resumeFile.name : "Upload your resume"}
                          </p>
                          <p className="text-sm text-foreground-500">
                            {formData.resumeFile ? `${(formData.resumeFile.size / 1024 / 1024).toFixed(2)} MB` : "PDF, DOC, or DOCX up to 5MB"}
                          </p>
                        </div>
                      </label>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-sm font-medium">
                      Cover Letter <span className="text-danger">*</span>
                    </label>
                    <Textarea
                      name="coverLetter"
                      label="Cover Letter"
                      placeholder="Tell us why you're interested in this position and what makes you a good fit"
                      value={formData.coverLetter}
                      onValueChange={(value) => handleInputChange("coverLetter", value)}
                      minRows={4}
                      variant="bordered"
                    />
                  </div>
                  
                  <div className="mt-2">
                    <Button 
                      type="submit" 
                      color="primary" 
                      className="w-full"
                      isLoading={isSubmitting}
                    >
                      Submit Application
                    </Button>
                  </div>
                </form>
              </CardBody>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};