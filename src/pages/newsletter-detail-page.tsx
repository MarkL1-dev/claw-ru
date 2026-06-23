import React, { useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { Card, CardBody, Breadcrumbs, BreadcrumbItem, Button, Divider, Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Input, useDisclosure } from "@heroui/react";
import { Icon } from "@iconify/react";

// Newsletter data with detailed content
const newsletters = [
  {
    id: "1",
    title: "Ежеквартальник по возврату активов",
    issue: "Выпуск 1",
    date: "15 января 2023 г.",
    image: "https://img.heroui.chat/image/book?w=800&h=400&u=1",
    summary: "Наш первый выпуск, посвящённый последним событиям в сфере международного возврата активов.",
    content: [
      {
        type: "intro",
        text: "Добро пожаловать в первый выпуск «Ежеквартальника по возврату активов», где мы разбираем последние события и стратегии в области международного возврата активов."
      },
      {
        type: "article",
        title: "Последние события в трансграничном возврате активов",
        text: "В этом квартале произошли значимые изменения в правовых рамках, регулирующих трансграничный возврат активов. Суды в нескольких юрисдикциях вынесли решения, расширяющие набор инструментов для специалистов, добивающихся возврата незаконно присвоенных активов."
      },
      {
        type: "case_study",
        title: "Кейс: возврат активов в нескольких юрисдикциях",
        text: "В недавнем деле наша команда успешно вернула активы стоимостью 45 млн долларов, рассредоточенные по пяти юрисдикциям после изощрённой мошеннической схемы."
      },
      {
        type: "legal_analysis",
        title: "Юридический анализ: приказы о замораживании в офшорных юрисдикциях",
        text: "Эффективность приказов о замораживании в офшорных юрисдикциях продолжает развиваться, и недавние дела демонстрируют как силу, так и ограничения этих инструментов в стратегиях возврата активов."
      },
      {
        type: "upcoming",
        title: "Предстоящие мероприятия",
        items: [
          "Международная конференция по возврату активов — 15–17 марта 2023 г.",
          "Вебинар: методы отслеживания криптовалюты — 8 февраля 2023 г.",
          "Семинар: эффективное использование приказов Norwich Pharmacal — 5 апреля 2023 г."
        ]
      }
    ]
  },
  
  // ... other newsletter entries with content property added ...
  {
    id: "2",
    title: "Обзор судебных споров по мошенничеству",
    issue: "Выпуск 2",
    date: "22 марта 2023 г.",
    image: "https://img.heroui.chat/image/book?w=800&h=400&u=2",
    summary: "Разбор последних событий в судебных спорах о мошенничестве и стратегиях исполнения решений.",
    content: [
      {
        type: "intro",
        text: "Этот выпуск посвящён формирующимся тенденциям в судебных спорах о мошенничестве и инновационным стратегиям исполнения решений в нескольких юрисдикциях."
      },
      {
        type: "article",
        title: "Тенденции в судебных спорах о мошенничестве",
        text: "Недавние судебные решения расширили объём ответственности финансовых учреждений в делах о мошенничестве, создавая новые возможности для возврата."
      },
      {
        type: "case_study",
        title: "Кейс: ответственность финансового учреждения",
        text: "Недавно наша команда добилась судебного решения против финансового учреждения, не внедрившего надлежащие меры по борьбе с мошенничеством, что привело к возврату 30 млн долларов нашему клиенту."
      },
      {
        type: "legal_analysis",
        title: "Юридический анализ: приказы о раскрытии информации в отношении третьих лиц",
        text: "Использование приказов о раскрытии информации в отношении третьих лиц остаётся мощным инструментом в расследованиях мошенничества, и суды всё чаще готовы предоставлять широкие полномочия по раскрытию."
      },
      {
        type: "upcoming",
        title: "Предстоящие мероприятия",
        items: [
          "Форум по судебным спорам о мошенничестве — 10–12 мая 2023 г.",
          "Вебинар: ответственность третьих лиц в делах о мошенничестве — 18 апреля 2023 г.",
          "Семинар: эффективное использование приказов о раскрытии информации — 7 июня 2023 г."
        ]
      }
    ]
  },
  {
    id: "3",
    title: "Аналитика по банкротству",
    issue: "Выпуск 3",
    date: "10 мая 2023 г.",
    image: "https://img.heroui.chat/image/book?w=800&h=400&u=3",
    summary: "Фокус на процедурах банкротства как инструменте возврата активов и защиты кредиторов.",
    content: [
      {
        type: "intro",
        text: "Этот выпуск посвящён стратегическому использованию процедур банкротства в сценариях возврата активов и защиты кредиторов."
      },
      {
        type: "article",
        title: "Банкротство как инструмент возврата активов",
        text: "Процедуры банкротства могут быть мощным инструментом возврата активов, наделяя ликвидаторов широкими полномочиями по расследованию и возврату активов."
      },
      {
        type: "case_study",
        title: "Кейс: трансграничное банкротство",
        text: "В недавнем деле с участием компаний в нескольких юрисдикциях наша команда использовала скоординированные процедуры банкротства для возврата активов кредиторам."
      },
      {
        type: "legal_analysis",
        title: "Юридический анализ: признание иностранных процедур банкротства",
        text: "Признание иностранных процедур банкротства продолжает развиваться, и суды всё чаще готовы к сотрудничеству между юрисдикциями."
      },
      {
        type: "upcoming",
        title: "Предстоящие мероприятия",
        items: [
          "Форум арбитражных управляющих — 12–14 июля 2023 г.",
          "Вебинар: вызовы трансграничного банкротства — 20 июня 2023 г.",
          "Семинар: возврат активов при банкротстве — 9 августа 2023 г."
        ]
      }
    ]
  },
  {
    id: "4",
    title: "Бюллетень по нормативному соответствию",
    issue: "Выпуск 4",
    date: "3 августа 2023 г.",
    image: "https://img.heroui.chat/image/book?w=800&h=400&u=4",
    summary: "Обновления о нормативных изменениях, влияющих на возврат активов и предотвращение финансовых преступлений.",
    content: [
      {
        type: "intro",
        text: "Этот выпуск содержит обновления о ключевых нормативных изменениях, влияющих на стратегии возврата активов и предотвращения финансовых преступлений."
      },
      {
        type: "article",
        title: "Нормативные изменения в предотвращении финансовых преступлений",
        text: "Недавние нормативные изменения расширили требования к отчётности и обязанности по проверке благонадёжности для финансовых учреждений."
      },
      {
        type: "case_study",
        title: "Кейс: регуляторное расследование",
        text: "Недавно наша команда представляла клиента в регуляторном расследовании, успешно справившись со сложными требованиями комплаенса."
      },
      {
        type: "legal_analysis",
        title: "Юридический анализ: влияние нормативных изменений на возврат активов",
        text: "Новые нормативные рамки создают как вызовы, так и возможности для специалистов по возврату активов."
      },
      {
        type: "upcoming",
        title: "Предстоящие мероприятия",
        items: [
          "Конференция по нормативному соответствию — 18–20 сентября 2023 г.",
          "Вебинар: обновления комплаенса в сфере ПОД/ФТ — 22 августа 2023 г.",
          "Семинар: прохождение регуляторных расследований — 11 октября 2023 г."
        ]
      }
    ]
  },
  {
    id: "5",
    title: "Обзор трансграничного исполнения",
    issue: "Выпуск 5",
    date: "17 октября 2023 г.",
    image: "https://img.heroui.chat/image/book?w=800&h=400&u=5",
    summary: "Рассмотрение стратегий исполнения судебных решений и приказов в нескольких юрисдикциях.",
    content: [
      {
        type: "intro",
        text: "Этот выпуск посвящён стратегиям и вызовам исполнения судебных решений и приказов в нескольких юрисдикциях."
      },
      {
        type: "article",
        title: "Тенденции в трансграничном исполнении",
        text: "Недавние изменения расширили набор инструментов для исполнения судебных решений в разных юрисдикциях, особенно в офшорных финансовых центрах."
      },
      {
        type: "case_study",
        title: "Кейс: исполнение иностранного судебного решения",
        text: "Недавно наша команда добилась исполнения иностранного судебного решения на 100 млн долларов в юрисдикции, традиционно считавшейся сложной для исполнения."
      },
      {
        type: "legal_analysis",
        title: "Юридический анализ: трудности исполнения в офшорных юрисдикциях",
        text: "Офшорные юрисдикции создают уникальные трудности для исполнения, требуя специализированных стратегий и местной экспертизы."
      },
      {
        type: "upcoming",
        title: "Предстоящие мероприятия",
        items: [
          "Симпозиум по трансграничному исполнению — 15–17 ноября 2023 г.",
          "Вебинар: стратегии исполнения в офшорных юрисдикциях — 25 октября 2023 г.",
          "Семинар: практические подходы к исполнению судебных решений — 6 декабря 2023 г."
        ]
      }
    ]
  },
  {
    id: "6",
    title: "Цифровые активы и тренды возврата",
    issue: "Выпуск 6",
    date: "5 декабря 2023 г.",
    image: "https://img.heroui.chat/image/book?w=800&h=400&u=6",
    summary: "Фокус на новых вызовах и решениях в возврате криптовалюты и цифровых активов.",
    content: [
      {
        type: "intro",
        text: "Этот выпуск посвящён быстро развивающейся сфере возврата цифровых активов, включая криптовалюты и другие активы на основе блокчейна."
      },
      {
        type: "article",
        title: "Вызовы возврата цифровых активов",
        text: "Возврат цифровых активов сопряжён с уникальными вызовами, требующими специализированных технических знаний и инновационных юридических стратегий."
      },
      {
        type: "case_study",
        title: "Кейс: возврат при криптовалютном мошенничестве",
        text: "Недавно наша команда вернула цифровые активы стоимостью 15 млн долларов после изощрённой криптовалютной мошеннической схемы."
      },
      {
        type: "legal_analysis",
        title: "Юридический анализ: вещные требования на цифровые активы",
        text: "Суды всё чаще признают вещные требования на цифровые активы, создавая новые возможности для возврата в делах о мошенничестве."
      },
      {
        type: "upcoming",
        title: "Предстоящие мероприятия",
        items: [
          "Форум по возврату цифровых активов — 22–24 января 2024 г.",
          "Вебинар: блокчейн-форензика для юристов — 15 декабря 2023 г.",
          "Семинар: юридические стратегии возврата криптовалюты — 8 февраля 2024 г."
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
    alert(`Скачивание PDF: ${newsletter?.title}`);
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
            <h2 className="text-2xl font-bold mb-4">Рассылка не найдена</h2>
            <p className="mb-8">Рассылка, которую вы ищете, не существует.</p>
            <Button
              as={Link}
              to="/resources/newsletters"
              color="primary"
              startContent={<Icon icon="lucide:arrow-left" />}
            >
              Вернуться к рассылкам
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
            <Link to="/">Главная</Link>
          </BreadcrumbItem>
          <BreadcrumbItem>
            <Link to="/resources/newsletters">Рассылки</Link>
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
                      Скачать PDF
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
                    Назад к рассылкам
                  </Button>
                  <Button
                    variant="flat"
                    color="primary"
                    endContent={<Icon icon="lucide:mail" size={16} />}
                    onPress={onOpen}
                  >
                    Подписаться на обновления
                  </Button>
                </div>
              </CardBody>
            </Card>
          </div>
          
          <div className="md:w-1/3">
            <div className="sticky top-24">
              <Card className="border border-divider bg-content1 mb-6">
                <CardBody className="p-6">
                  <h3 className="text-xl font-semibold mb-4">Другие рассылки</h3>
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
                      Все рассылки
                    </Button>
                  </div>
                </CardBody>
              </Card>
              
              <Card className="border border-divider bg-content1">
                <CardBody className="p-6">
                  <h3 className="text-xl font-semibold mb-4">Подписка</h3>
                  <p className="text-foreground-600 mb-4">
                    Будьте в курсе наших последних материалов и правовых событий в области возврата активов и международного права.
                  </p>
                  <div className="flex flex-col gap-4">
                    <Input
                      placeholder="Введите ваш email"
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
                      Подписаться на рассылку
                    </Button>
                    {subscribeSuccess && (
                      <p className="text-success text-sm text-center">Спасибо за подписку!</p>
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
                Подпишитесь на нашу рассылку
              </ModalHeader>
              <ModalBody>
                <div className="flex items-center gap-4 mb-4 bg-primary/5 p-4 rounded-lg">
                  <Icon icon="lucide:info" className="text-primary text-xl" />
                  <p className="text-foreground-700">
                    Будьте в курсе наших последних материалов и правовых событий в области возврата активов и международного права.
                  </p>
                </div>

                <Input
                  label="Адрес электронной почты"
                  placeholder="Введите ваш адрес электронной почты"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  variant="bordered"
                  className="mb-2"
                />

                <Input
                  label="Полное имя"
                  placeholder="Введите ваше полное имя"
                  variant="bordered"
                  className="mb-2"
                />

                <Input
                  label="Компания/организация"
                  placeholder="Введите вашу компанию или организацию"
                  variant="bordered"
                />
              </ModalBody>
              <ModalFooter>
                <Button color="default" variant="light" onPress={onClose}>
                  Отмена
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
                  Подписаться
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </div>
  );
};