import React from "react";
import { Card, CardBody } from "@heroui/react";
import { Icon } from "@iconify/react";
import { useNavigate } from "react-router-dom";

const testimonials = [
  {
    quote: "After our investment fund was defrauded of $4.2M through a complex offshore scheme, CLAW's team traced and recovered 87% of our assets within 9 months. Their knowledge of Cayman banking regulations and persistence made all the difference when other firms told us recovery was unlikely.",
    author: "James W., Investment Director, London",
    company: "Meridian Capital Partners"
  },
  {
    quote: "When our company faced a challenging insolvency involving assets across three jurisdictions, CLAW provided clear guidance that saved us significant time and resources. Their practical approach to cross-border proceedings helped us navigate complex legal hurdles that initially seemed insurmountable.",
    author: "Sarah K., General Counsel, New York",
    company: "Atlas Investment Group"
  },
  {
    quote: "Following a shareholder dispute that threatened our Hong Kong operations, CLAW's litigation team secured a favorable settlement that protected our business interests. Their responsiveness and strategic thinking throughout the 14-month process gave us confidence during an extremely stressful situation.",
    author: "Michael L., CEO, Hong Kong",
    company: "Pacific Rim Trading Ltd."
  }
];

export const Testimonials = () => {
  const navigate = useNavigate();
  
  return (
    <section id="testimonials" className="py-24 bg-content3 relative overflow-hidden scroll-mt-20">
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-background to-transparent"></div>
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-background to-transparent"></div>
      
      <div className="container mx-auto px-6 relative">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-block bg-primary/10 px-4 py-2 rounded-md mb-4">
            <span className="text-primary font-semibold">Success Stories</span>
          </div>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">Client Testimonials</h2>
          <p className="text-foreground-600 text-lg">
            What our clients say about our legal expertise and service.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border border-divider bg-content1 hover:shadow-md transition-shadow duration-300">
              <CardBody className="gap-6 p-8">
                <div className="flex justify-between items-center">
                  <Icon icon="lucide:quote" className="text-primary text-4xl" />
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Icon key={i} icon="lucide:star" className="text-secondary text-lg" />
                    ))}
                  </div>
                </div>
                <p className="text-foreground-600 italic text-lg leading-relaxed">"{testimonial.quote}"</p>
                <div className="flex flex-col gap-1 mt-4 pt-4 border-t border-divider">
                  <p className="text-sm font-medium">— {testimonial.author}</p>
                  <p className="text-xs text-foreground-500">{testimonial.company}</p>
                </div>
              </CardBody>
            </Card>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-sm text-foreground-500">
            Client names have been partially anonymized to protect confidentiality. Full case studies available upon request with appropriate NDAs.
          </p>
        </div>
      </div>
    </section>
  );
};