import React from "react";
import { Card, CardBody, Input, Textarea, Button, Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, useDisclosure } from "@heroui/react";
import { Icon } from "@iconify/react";

// Update props to accept standalone mode
export const Contact = ({ standalone = false }: { standalone?: boolean }) => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  
  const [formData, setFormData] = React.useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      onOpen();
    }, 1500);
  };

  return (
    <section id="contact" className={`py-20 ${standalone ? 'bg-background' : 'bg-content2'} scroll-mt-20`}>
      {/* Rest of component remains the same */}
      
      <div className="container mx-auto px-6 relative">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-block bg-primary/10 px-4 py-2 rounded-md mb-4">
            <span className="text-primary font-semibold">Get In Touch</span>
          </div>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">Contact Us</h2>
          <p className="text-foreground-600 text-lg">
            Schedule a confidential consultation with our legal experts.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          <div className="lg:col-span-7">
            <Card className="border border-divider bg-content1 shadow-md">
              <CardBody className="gap-6 p-8">
                <h3 className="text-xl font-semibold">Send Us a Message</h3>
                <form 
                  onSubmit={handleSubmit}
                  className="flex flex-col gap-5"
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <Input
                      name="name"
                      label="Full Name"
                      placeholder="Enter your full name"
                      value={formData.name}
                      onValueChange={(value) => handleChange("name", value)}
                      isRequired
                      startContent={<Icon icon="lucide:user" className="text-default-400" />}
                      classNames={{
                        inputWrapper: "bg-content2"
                      }}
                    />
                    <Input
                      name="email"
                      label="Email"
                      placeholder="Enter your email address"
                      type="email"
                      value={formData.email}
                      onValueChange={(value) => handleChange("email", value)}
                      isRequired
                      startContent={<Icon icon="lucide:mail" className="text-default-400" />}
                      classNames={{
                        inputWrapper: "bg-content2"
                      }}
                    />
                  </div>
                  <Input
                    name="phone"
                    label="Phone Number"
                    placeholder="Enter your phone number"
                    value={formData.phone}
                    onValueChange={(value) => handleChange("phone", value)}
                    startContent={<Icon icon="lucide:phone" className="text-default-400" />}
                    classNames={{
                      inputWrapper: "bg-content2"
                    }}
                  />
                  <Textarea
                    name="message"
                    label="Message"
                    placeholder="How can we assist you?"
                    value={formData.message}
                    onValueChange={(value) => handleChange("message", value)}
                    minRows={4}
                    isRequired
                    classNames={{
                      inputWrapper: "bg-content2"
                    }}
                  />
                  <div className="mt-2">
                    <Button 
                      type="submit" 
                      color="primary" 
                      className="w-full py-6"
                      endContent={<Icon icon="lucide:send" />}
                      isLoading={isSubmitting}
                      isDisabled={isSubmitting}
                    >
                      Submit Inquiry
                    </Button>
                  </div>
                </form>
              </CardBody>
            </Card>
          </div>
          
          <div className="lg:col-span-5">
            <Card className="border border-divider bg-content1 h-full shadow-md">
              <CardBody className="gap-8 p-8">
                <div>
                  <h3 className="text-xl font-semibold mb-6 flex items-center">
                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center mr-3">
                      <Icon icon="lucide:building" className="text-primary" />
                    </div>
                    Our Office
                  </h3>
                  <div className="flex flex-col gap-5 pl-11">
                    <div className="flex items-start gap-3">
                      <div className="bg-primary/10 p-2 rounded-full mt-1">
                        <Icon icon="lucide:map-pin" className="text-primary" />
                      </div>
                      <div>
                        <p className="font-medium">CLAW Law Firm</p>
                        <p className="text-foreground-600">
                          Elgin Avenue, George Town<br />
                          Grand Cayman KY1-9000<br />
                          Cayman Islands
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <div className="bg-primary/10 p-2 rounded-full mt-1">
                        <Icon icon="lucide:phone" className="text-primary" />
                      </div>
                      <div>
                        <p className="font-medium">Phone</p>
                        <p className="text-foreground-600">+1 (920) 212-9330</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <div className="bg-primary/10 p-2 rounded-full mt-1">
                        <Icon icon="lucide:mail" className="text-primary" />
                      </div>
                      <div>
                        <p className="font-medium">Email</p>
                        <p className="text-foreground-600">inquiries@clawsolution.info</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="border-t border-divider pt-8">
                  <h3 className="text-xl font-semibold mb-6 flex items-center">
                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center mr-3">
                      <Icon icon="lucide:clock" className="text-primary" />
                    </div>
                    Office Hours
                  </h3>
                  <div className="flex flex-col gap-3 pl-11">
                    <div className="flex justify-between">
                      <span className="text-foreground-600">Monday - Friday</span>
                      <span className="font-medium">9:00 AM - 5:30 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-foreground-600">Saturday - Sunday</span>
                      <span className="font-medium">Closed</span>
                    </div>
                    <p className="text-foreground-600 mt-2 italic">
                      Consultations by appointment only. Virtual meetings available for international clients.
                    </p>
                  </div>
                </div>
              </CardBody>
            </Card>
          </div>
        </div>
      </div>
      
      {/* Success Modal */}
      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                <div className="flex items-center gap-2">
                  <Icon icon="lucide:check-circle" className="text-success text-2xl" />
                  <span>Message Sent Successfully</span>
                </div>
              </ModalHeader>
              <ModalBody>
                <p>
                  Thank you for contacting CLAW Law Firm. Your message has been received.
                </p>
                <p>
                  Our team will review your inquiry and get back to you as soon as possible,
                  typically within 1-2 business days.
                </p>
              </ModalBody>
              <ModalFooter>
                <Button color="primary" onPress={onClose}>
                  Close
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </section>
  );
};