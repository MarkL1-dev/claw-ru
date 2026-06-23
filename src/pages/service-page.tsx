import React, { useEffect } from "react";
import { useParams, useNavigate, Link as RouterLink } from "react-router-dom";
import { Button, Card, CardBody, Divider, Link } from "@heroui/react";
import { Icon } from "@iconify/react";
import { services } from "../components/services";

// Additional content for each service
const serviceDetails = {
  "asset-recovery": {
    heroImage: "https://images.unsplash.com/photo-1617203443952-6d2619f7ff4e?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170",
    subtitle: "Возврат активов в разных юрисдикциях",
    overview: "Практика возврата активов специализируется на розыске и возврате активов, которые были незаконно присвоены, скрыты или выведены в несколько юрисдикций. Мы применяем сложные методы расследования и стратегические юридические действия, чтобы выявить и обеспечить сохранность активов наших клиентов.",
    approach: [
      "Комплексные расследования по отслеживанию активов",
      "Стратегические приказы о замораживании и судебные запреты",
      "Взаимодействие с международными правоохранительными органами",
      "Возврат через гражданское и уголовное судопроизводство",
      "Урегулирование путём переговоров и альтернативное разрешение споров"
    ],
    caseStudies: [
      {
        title: "Возврат при трансграничном мошенничестве",
        description: "Успешно возвращены активы на сумму 75 млн долларов, скрытые в пяти юрисдикциях после сложной инвестиционно-мошеннической схемы."
      },
      {
        title: "Корпоративное хищение",
        description: "Отслежены и возвращены активы стоимостью 30 млн долларов, незаконно присвоенные бывшими руководителями через сеть офшорных компаний."
      }
    ],
    team: ["Jonathan P. Harrington", "Elizabeth Chen", "Marcus A. Williams"]
  },
  "fraud-litigation": {
    heroImage: "https://images.unsplash.com/photo-1505663912202-ac22d4cb3707?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170",
    // NOTE: Replace with Unsplash image using "courtroom" or "legal" keyword
    // Example: https://unsplash.com/photos/brown-wooden-gavel-on-brown-wooden-table-NIJuEQw0RKg
    subtitle: "Стратегические судебные процессы по сложным делам о мошенничестве",
    overview: "Команда по судебным спорам о мошенничестве обеспечивает комплексное юридическое представительство в сложных делах о мошенничестве — от первоначального расследования до судебного процесса и исполнения решений. Мы обладаем обширным опытом ведения дел о мошенничестве с высокими ставками, в которых участвуют несколько сторон и юрисдикций.",
    approach: [
      "Тщательное финансовое расследование и сбор доказательств",
      "Стратегическое планирование дела и оценка рисков",
      "Активное добивание обеспечительных мер",
      "Опытное представительство в суде",
      "Исполнение судебных решений в разных юрисдикциях"
    ],
    caseStudies: [
      {
        title: "Мошенничество инвестиционного фонда",
        description: "Успешно представляли интересы инвесторов в споре против управляющих фондом, исказивших инвестиционные стратегии, что привело к возврату 120 млн долларов."
      },
      {
        title: "Банковское мошенничество",
        description: "Получено судебное решение против бывших руководителей банка, организовавших сложную мошенническую схему, с возвратом 45 млн долларов финансовому учреждению."
      }
    ],
    team: ["Elizabeth Chen", "Marcus A. Williams", "Sophia Rodriguez"]
  },
  "insolvency-restructuring": {
    heroImage: "https://images.unsplash.com/photo-1483600516620-7254872369ae?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1171",
    subtitle: "Максимальный возврат средств в кризисных ситуациях",
    overview: "Практика банкротства и реструктуризации обеспечивает экспертное сопровождение процедур банкротства, ликвидации и корпоративной реструктуризации. Мы работаем над максимальным возвратом средств кредиторам, находя при этом прагматичные решения для проблемных компаний.",
    approach: [
      "Стратегическое планирование для проблемных компаний",
      "Представительство кредиторов, должников и арбитражных управляющих",
      "Трансграничные процедуры банкротства",
      "Корпоративная реструктуризация и реорганизация",
      "Продажа и приобретение проблемных активов"
    ],
    caseStudies: [
      {
        title: "Ликвидация международного фонда",
        description: "Выступали юрисконсультами ликвидаторов инвестиционного фонда объёмом 500 млн долларов, успешно вернув активы инвесторам через сложный судебный процесс."
      },
      {
        title: "Корпоративная реструктуризация",
        description: "Провели многонациональную корпорацию через сложный процесс реструктуризации, сохранив операционную деятельность и максимизировав возврат средств кредиторам."
      }
    ],
    team: ["Jonathan P. Harrington", "Elizabeth Chen", "Sophia Rodriguez"]
  },
  "cross-border-enforcement": {
    heroImage: "https://images.unsplash.com/photo-1462899006636-339e08d1844e?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170",
    subtitle: "Исполнение судебных решений в разных юрисдикциях",
    overview: "Команда по трансграничному исполнению специализируется на исполнении иностранных судебных решений и арбитражных постановлений на Каймановых островах и в других международных юрисдикциях. Мы ориентируемся в сложных правовых системах, чтобы решения наших клиентов признавались и исполнялись эффективно.",
    approach: [
      "Стратегическое планирование исполнения",
      "Признание иностранных судебных решений и арбитражных постановлений",
      "Сохранение и возврат активов",
      "Взаимодействие с местными юристами в нескольких юрисдикциях",
      "Урегулирование путём переговоров и альтернативные стратегии разрешения споров"
    ],
    caseStudies: [
      {
        title: "Исполнение арбитражного решения",
        description: "Успешно исполнили арбитражное решение на 200 млн долларов в отношении активов на Каймановых островах, преодолев сложные юрисдикционные препятствия."
      },
      {
        title: "Решение по нескольким юрисдикциям",
        description: "Координировали исполнение судебного решения на 85 млн долларов в пяти юрисдикциях, что привело к полному возврату средств клиенту."
      }
    ],
    team: ["Marcus A. Williams", "Jonathan P. Harrington", "Sophia Rodriguez"]
  },
  "corporate-disputes": {
    heroImage: "https://images.unsplash.com/photo-1630097208672-ffd0bc8ec8dc?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170",
    subtitle: "Разрешение сложных корпоративных конфликтов",
    overview: "Практика корпоративных споров сосредоточена на разрешении споров между акционерами, исков об ответственности директоров и вопросов корпоративного управления. Мы предоставляем стратегические консультации и представительство для защиты интересов клиентов и сохранения стоимости бизнеса.",
    approach: [
      "Стратегическое планирование разрешения споров",
      "Косвенные иски акционеров и прямые требования",
      "Судебные споры об ответственности директоров и должностных лиц",
      "Консультирование по корпоративному управлению",
      "Урегулирование путём переговоров и медиация"
    ],
    caseStudies: [
      {
        title: "Спор между акционерами",
        description: "Успешно представляли миноритарных акционеров в споре о корпоративном контроле, добившись выгодного урегулирования, защитившего их инвестиции."
      },
      {
        title: "Иск об ответственности директора",
        description: "Защищали директоров от обвинений в нарушении фидуциарных обязанностей, что привело к отклонению всех требований и возмещению судебных расходов."
      }
    ],
    team: ["Sophia Rodriguez", "Jonathan P. Harrington", "Elizabeth Chen"]
  },
  "regulatory-compliance": {
    heroImage: "https://images.unsplash.com/photo-1752697588939-cba91b0c78a8?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1171",
    subtitle: "Ориентирование в сложных нормативных системах",
    overview: "Практика нормативного соответствия предоставляет консультации по вопросам соблюдения требований и представительство в регуляторных расследованиях и разбирательствах. Мы помогаем клиентам ориентироваться в сложной нормативной среде Каймановых островов и международном финансовом регулировании.",
    approach: [
      "Консультирование по нормативному соответствию",
      "Внутренние расследования и оценка рисков",
      "Представительство в регуляторных расследованиях",
      "Переговоры с регулирующими органами",
      "Разработка и внедрение программ комплаенса"
    ],
    caseStudies: [
      {
        title: "Регуляторное расследование",
        description: "Успешно представляли финансовое учреждение в регуляторном расследовании, в результате чего не было применено мер воздействия, а репутационный ущерб оказался минимальным."
      },
      {
        title: "Внедрение программы комплаенса",
        description: "Разработали и внедрили комплексную программу комплаенса для многонациональной корпорации, обеспечив соблюдение требований Каймановых островов и международных норм."
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
        <h2 className="text-2xl font-bold mb-4">Услуга не найдена</h2>
        <p className="mb-8">Услуга, которую вы ищете, не существует.</p>
        <Button 
          as={RouterLink} 
          to="/" 
          color="primary"
          startContent={<Icon icon="lucide:arrow-left" />}
        >
          Вернуться на главную
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
                    <span className="text-primary font-semibold">Юридическая услуга</span>
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
                  Назад к услугам
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
                <h2 className="text-2xl md:text-3xl font-bold mb-6">Обзор</h2>
                <p className="text-foreground-600 mb-8 text-lg leading-relaxed">
                  {details.overview}
                </p>
              </div>
              
              <div className="bg-content1 border border-divider rounded-lg p-8 shadow-sm mb-10">
                <h2 className="text-2xl md:text-3xl font-bold mb-6">Наш подход</h2>
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
                <h2 className="text-2xl md:text-3xl font-bold mb-6">Кейсы</h2>
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
                  <h3 className="text-xl font-semibold mb-6">Свяжитесь с нами по теме «{service.title}»</h3>
                  <p className="text-foreground-600 mb-6">
                    Обсудите с нашей командой экспертов ваши задачи в области «{service.title.toLowerCase()}».
                  </p>
                  <Button 
                    color="primary" 
                    className="w-full mb-4 py-6"
                    endContent={<Icon icon="lucide:phone" size={16} />}
                    onClick={scrollToContact}
                  >
                    Записаться на консультацию
                  </Button>
                  <Button 
                    variant="flat" 
                    color="primary" 
                    className="w-full py-6"
                    endContent={<Icon icon="lucide:mail" size={16} />}
                    onClick={scrollToContact}
                  >
                    Написать нам
                  </Button>
                  
                  <Divider className="my-8" />
                  
                  <h3 className="text-lg font-semibold mb-6">Ключевые участники команды</h3>
                  <div className="space-y-5">
                    {details.team.map((member, index) => (
                      <div key={index} className="flex items-center gap-4 p-3 bg-content2 rounded-lg">
                        <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                          <Icon icon="lucide:user" className="text-primary" />
                        </div>
                        <div>
                          <span className="font-medium">{member}</span>
                          <p className="text-xs text-foreground-600">Эксперт в области «{service.title}»</p>
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  <Divider className="my-8" />
                  
                  <h3 className="text-lg font-semibold mb-6">Сопутствующие услуги</h3>
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
                <p className="font-medium">Позвоните нам</p>
                <p className="text-foreground-600">+1 (360) 512-4092</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};