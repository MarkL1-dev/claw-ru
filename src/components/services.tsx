import React from "react";
import { Card, CardBody, CardFooter, Button } from "@heroui/react";
import { Icon } from "@iconify/react";
import { useNavigate } from "react-router-dom";

export const services = [
  {
    icon: "lucide:briefcase",
    title: "Возврат активов",
    description: "Специализируемся на розыске и возврате незаконно присвоенных активов в различных юрисдикциях с помощью стратегических юридических действий.",
    id: "asset-recovery"
  },
  {
    icon: "lucide:shield",
    title: "Судебные споры по мошенничеству",
    description: "Комплексное юридическое представительство в сложных делах о мошенничестве — от расследования до судебного процесса и исполнения решений.",
    id: "fraud-litigation"
  },
  {
    icon: "lucide:landmark",
    title: "Банкротство и реструктуризация",
    description: "Экспертное сопровождение процедур банкротства, ликвидации и корпоративной реструктуризации для максимального возврата средств.",
    id: "insolvency-restructuring"
  },
  {
    icon: "lucide:globe",
    title: "Трансграничное исполнение решений",
    description: "Исполнение иностранных судебных решений и арбитражных постановлений на Каймановых островах и в международных юрисдикциях.",
    id: "cross-border-enforcement"
  },
  {
    icon: "lucide:building",
    title: "Корпоративные споры",
    description: "Разрешение споров между акционерами, исков об ответственности директоров и вопросов корпоративного управления.",
    id: "corporate-disputes"
  },
  {
    icon: "lucide:file-text",
    title: "Соответствие нормативным требованиям",
    description: "Консультации по вопросам нормативного соответствия и представительство в регуляторных расследованиях и разбирательствах.",
    id: "regulatory-compliance"
  }
];

export const Services = () => {
  const navigate = useNavigate();
  
  const handleServiceClick = (serviceId: string) => {
    navigate(`/services/${serviceId}`);
  };

  return (
    <section id="services" className="py-20 bg-background scroll-mt-20">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16">
          <div className="max-w-xl">
            <div className="inline-block bg-primary/10 px-4 py-2 rounded-md mb-4">
              <span className="text-primary font-semibold">Наша экспертиза</span>
            </div>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">Наши юридические услуги</h2>
            <p className="text-foreground-600 text-lg">
              Комплексные юридические решения для сложных дел по возврату финансовых активов на Каймановых островах и по всему миру.
            </p>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Card key={index} className="border border-divider bg-content1 hover:shadow-md transition-shadow duration-300">
              <CardBody className="gap-4 p-6">
                <div className="w-16 h-16 rounded-md bg-primary/10 flex items-center justify-center p-3">
                  <Icon icon={service.icon} className="text-primary text-3xl w-full h-full" />
                </div>
                <h3 className="text-xl font-semibold">{service.title}</h3>
                <p className="text-foreground-600">{service.description}</p>
              </CardBody>
              <CardFooter className="px-6 pb-6 pt-0">
                <Button 
                  variant="light" 
                  color="primary" 
                  endContent={<Icon icon="lucide:arrow-right" size={16} />}
                  onPress={() => handleServiceClick(service.id)}
                >
                  Подробнее
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};