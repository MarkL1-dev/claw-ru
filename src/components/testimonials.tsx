import React from "react";
import { Card, CardBody } from "@heroui/react";
import { Icon } from "@iconify/react";
import { useNavigate } from "react-router-dom";

const testimonials = [
  {
    quote: "После того как наш инвестиционный фонд лишился $4,2 млн в результате сложной офшорной мошеннической схемы, команда CLAW отследила и вернула 87% наших активов в течение 9 месяцев. Их знание банковского законодательства Каймановых островов и настойчивость сыграли решающую роль, когда другие фирмы говорили, что возврат маловероятен.",
    author: "Джеймс У., инвестиционный директор, Лондон",
    company: "Meridian Capital Partners"
  },
  {
    quote: "Когда наша компания столкнулась со сложной процедурой банкротства с активами в трёх юрисдикциях, CLAW дала чёткие рекомендации, которые сэкономили нам значительное время и ресурсы. Их практичный подход к трансграничным разбирательствам помог нам преодолеть сложные юридические препятствия, которые поначалу казались непреодолимыми.",
    author: "Сара К., главный юрисконсульт, Нью-Йорк",
    company: "Atlas Investment Group"
  },
  {
    quote: "После акционерного спора, угрожавшего нашей деятельности в Гонконге, судебная команда CLAW добилась выгодного урегулирования, защитившего наши деловые интересы. Их оперативность и стратегическое мышление на протяжении всего 14-месячного процесса придавали нам уверенности в крайне напряжённой ситуации.",
    author: "Майкл Л., генеральный директор, Гонконг",
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
            <span className="text-primary font-semibold">Истории успеха</span>
          </div>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">Отзывы клиентов</h2>
          <p className="text-foreground-600 text-lg">
            Что наши клиенты говорят о нашей юридической экспертизе и сервисе.
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
            Имена клиентов частично анонимизированы для защиты конфиденциальности. Полные кейсы предоставляются по запросу при условии подписания соответствующих соглашений о неразглашении.
          </p>
        </div>
      </div>
    </section>
  );
};