import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Card, CardBody, Breadcrumbs, BreadcrumbItem, Button, Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Input, useDisclosure } from "@heroui/react";
import { Icon } from "@iconify/react";

// Newsletter data for the newsletters page
const newsletterItems = [
  {
    id: "1",
    title: "Ежеквартальник по возврату активов",
    issue: "Выпуск 1",
    date: "15 января 2023 г.",
    image: "https://img.heroui.chat/image/book?w=800&h=400&u=1",
    summary: "Наш первый выпуск, посвящённый последним событиям в сфере международного возврата активов."
  },
  {
    id: "2",
    title: "Обзор судебных споров по мошенничеству",
    issue: "Выпуск 2",
    date: "22 марта 2023 г.",
    image: "https://img.heroui.chat/image/book?w=800&h=400&u=2",
    summary: "Разбор последних событий в судебных спорах о мошенничестве и стратегиях исполнения решений."
  },
  {
    id: "3",
    title: "Аналитика по банкротству",
    issue: "Выпуск 3",
    date: "10 мая 2023 г.",
    image: "https://img.heroui.chat/image/book?w=800&h=400&u=3",
    summary: "Фокус на процедурах банкротства как инструменте возврата активов и защиты кредиторов."
  },
  {
    id: "4",
    title: "Бюллетень по нормативному соответствию",
    issue: "Выпуск 4",
    date: "3 августа 2023 г.",
    image: "https://img.heroui.chat/image/book?w=800&h=400&u=4",
    summary: "Обновления о нормативных изменениях, влияющих на возврат активов и предотвращение финансовых преступлений."
  },
  {
    id: "5",
    title: "Обзор трансграничного исполнения",
    issue: "Выпуск 5",
    date: "17 октября 2023 г.",
    image: "https://img.heroui.chat/image/book?w=800&h=400&u=5",
    summary: "Рассмотрение стратегий исполнения судебных решений и приказов в нескольких юрисдикциях."
  },
  {
    id: "6",
    title: "Цифровые активы и тренды возврата",
    issue: "Выпуск 6",
    date: "5 декабря 2023 г.",
    image: "https://img.heroui.chat/image/book?w=800&h=400&u=6",
    summary: "Фокус на новых вызовах и решениях в возврате криптовалюты и цифровых активов."
  }
];

// Publication data for the publications page
const publicationItems = [
  {
    id: "1",
    title: "Трансграничный возврат активов: юридические стратегии и вызовы",
    author: "Jonathan P. Harrington",
    date: "8 февраля 2023 г.",
    image: "https://img.heroui.chat/image/book?w=800&h=400&u=11",
    summary: "Углублённый анализ юридических стратегий трансграничного возврата активов в сложных делах о мошенничестве."
  },
  {
    id: "2",
    title: "Снятие корпоративной вуали в офшорных юрисдикциях",
    author: "Elizabeth Chen",
    date: "17 апреля 2023 г.",
    image: "https://img.heroui.chat/image/book?w=800&h=400&u=12",
    summary: "Комплексный разбор развивающейся судебной практики по снятию корпоративной вуали в офшорных финансовых центрах."
  },
  {
    id: "3",
    title: "Возврат цифровых активов: правовые рамки и практические вызовы",
    author: "Marcus A. Williams",
    date: "22 июня 2023 г.",
    image: "https://img.heroui.chat/image/book?w=800&h=400&u=13",
    summary: "Разбор формирующихся правовых рамок возврата криптовалют и других цифровых активов в делах о мошенничестве."
  },
  {
    id: "4",
    title: "Стратегическое использование процедур банкротства при возврате активов",
    author: "Sophia Rodriguez",
    date: "14 августа 2023 г.",
    image: "https://img.heroui.chat/image/book?w=800&h=400&u=14",
    summary: "Анализ того, как процедуры банкротства могут использоваться в качестве эффективных инструментов в сложных сценариях возврата активов."
  },
  {
    id: "5",
    title: "Исполнение иностранных судебных решений на Каймановых островах",
    author: "Jonathan P. Harrington",
    date: "9 октября 2023 г.",
    image: "https://img.heroui.chat/image/book?w=800&h=400&u=15",
    summary: "Подробный анализ правовой базы и практических аспектов исполнения иностранных судебных решений на Каймановых островах."
  },
  {
    id: "6",
    title: "Раскрытие бенефициарного владения: последствия для возврата активов",
    author: "Elizabeth Chen",
    date: "3 декабря 2023 г.",
    image: "https://img.heroui.chat/image/book?w=800&h=400&u=16",
    summary: "Разбор того, как инициативы по прозрачности бенефициарного владения влияют на отслеживание активов и стратегии возврата."
  }
];

export const ResourcePage = () => {
  const { resourceType } = useParams<{ resourceType: string }>();
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [selectedWebinar, setSelectedWebinar] = useState<number | null>(null);
  
  // Function to handle webinar access request
  const handleWebinarAccess = (webinarId: number) => {
    setSelectedWebinar(webinarId);
    onOpen();
  };
  
  const resourceTitles: Record<string, string> = {
    "publications": "Юридические публикации",
    "newsletters": "Рассылки и обновления",
    "webinars": "Вебинары и мероприятия"
  };

  const title = resourceTitles[resourceType || ""] || "Ресурсы";
  
  return (
    <div className="bg-background py-16">
      <div className="container mx-auto px-6">
        <Breadcrumbs className="mb-8">
          <BreadcrumbItem>
            <Link to="/">Главная</Link>
          </BreadcrumbItem>
          <BreadcrumbItem>
            <span>Ресурсы</span>
          </BreadcrumbItem>
          <BreadcrumbItem>
            <span>{title}</span>
          </BreadcrumbItem>
        </Breadcrumbs>
        
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-block bg-primary/10 px-4 py-2 rounded-md mb-4">
            <span className="text-primary font-semibold">Ресурсы</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold mb-4">{title}</h1>
          <p className="text-foreground-600 text-lg">
            Знакомьтесь с нашими последними материалами, статьями и ресурсами по возврату активов и международному праву.
          </p>
          
          {/* Remove brochure download button for publications page */}
          {resourceType === "publications" && (
            <div className="mt-6">
              <div className="inline-flex items-center gap-2 bg-content2 px-4 py-2 rounded-md">
                <Icon icon="lucide:file-text" className="text-primary" />
                <span className="text-foreground-700">Наши юридические публикации доступны ниже</span>
              </div>
            </div>
          )}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {resourceType === "newsletters" ? (
            // Updated newsletter cards with links to individual pages
            newsletterItems.map((item) => (
              <Card key={item.id} className="border border-divider bg-content1">
                <CardBody className="p-0">
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={item.image} 
                      alt={item.title} 
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-4 left-4 bg-primary text-white text-xs font-medium px-2 py-1 rounded">
                      {item.issue}
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                    <p className="text-foreground-600 mb-4">{item.summary}</p>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-foreground-500">
                        {item.date}
                      </span>
                      <Button 
                        as={Link}
                        to={`/newsletter/${item.id}`}
                        variant="light" 
                        color="primary" 
                        size="sm"
                        endContent={<Icon icon="lucide:arrow-right" size={14} />}
                      >
                        Подробнее
                      </Button>
                    </div>
                  </div>
                </CardBody>
              </Card>
            ))
          ) : resourceType === "publications" ? (
            // New publication cards with links to individual pages
            publicationItems.map((item) => (
              <Card key={item.id} className="border border-divider bg-content1">
                <CardBody className="p-0">
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={item.image} 
                      alt={item.title} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                    <p className="text-sm text-foreground-500 mb-3">Автор: {item.author} • {item.date}</p>
                    <p className="text-foreground-600 mb-4">{item.summary}</p>
                    <div className="flex justify-between items-center">
                      <Button 
                        as={Link}
                        to={`/publication/${item.id}`}
                        variant="light" 
                        color="primary" 
                        size="sm"
                        endContent={<Icon icon="lucide:arrow-right" size={14} />}
                      >
                        Читать статью
                      </Button>
                    </div>
                  </div>
                </CardBody>
              </Card>
            ))
          ) : (
            // Updated webinar cards with special access handling
            [1, 2, 3, 4, 5, 6].map((item) => (
              <Card key={item} className="border border-divider bg-content1">
                <CardBody className="p-6 gap-4">
                  <div className="w-12 h-12 rounded-md bg-primary/10 flex items-center justify-center">
                    <Icon icon="lucide:video" className="text-primary text-xl" />
                  </div>
                  <h3 className="text-xl font-semibold">
                    {`Вебинар, сессия ${item}`}
                  </h3>
                  <p className="text-foreground-600">
                    {`Запись вебинара, на котором обсуждаются ключевые аспекты международных судебных споров и стратегий возврата активов.`}
                  </p>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-foreground-500">
                      {new Date(2023, item % 12, item + 10).toLocaleDateString("ru-RU", {
                        year: "numeric",
                        month: "long",
                        day: "numeric"
                      })}
                    </span>
                    <Button 
                      variant="light" 
                      color="primary" 
                      size="sm"
                      endContent={<Icon icon="lucide:arrow-right" size={14} />}
                      onPress={() => handleWebinarAccess(item)}
                    >
                      Запросить доступ
                    </Button>
                  </div>
                </CardBody>
              </Card>
            ))
          )}
        </div>
      </div>
      
      {/* Webinar Access Modal */}
      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                Запрос доступа к вебинару
              </ModalHeader>
              <ModalBody>
                <div className="flex items-center gap-4 mb-4 bg-primary/5 p-4 rounded-lg">
                  <Icon icon="lucide:info" className="text-primary text-xl" />
                  <p className="text-foreground-700">
                    Доступ к вебинару предоставляется по специальной ссылке, отправляемой на вашу электронную почту. Пожалуйста, укажите адрес электронной почты, чтобы запросить доступ.
                  </p>
                </div>

                <p className="mb-4">
                  Вы запросили доступ к <span className="font-semibold">сессии вебинара {selectedWebinar}</span>. Наша команда проверит ваши данные и направит вам ссылку доступа в течение 24 часов.
                </p>

                <Input
                  label="Адрес электронной почты"
                  placeholder="Введите ваш адрес электронной почты"
                  type="email"
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
                    onClose();
                    // Here you would typically handle the form submission
                  }}
                >
                  Отправить запрос
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </div>
  );
};