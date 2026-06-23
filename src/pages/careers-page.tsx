import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Card, CardBody, Breadcrumbs, BreadcrumbItem, Button, Accordion, AccordionItem, Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Input, Textarea, useDisclosure } from "@heroui/react";
import { Icon } from "@iconify/react";

const jobOpenings = [
  {
    title: "Старший юрист — возврат активов",
    location: "Гранд-Кайман",
    type: "Полная занятость",
    description: "Мы ищем опытного старшего юриста в нашу практику возврата активов. Идеальный кандидат имеет более 5 лет опыта в сложных финансовых судебных спорах и отслеживании активов."
  },
  {
    title: "Юрист — судебные споры по мошенничеству",
    location: "Гранд-Кайман",
    type: "Полная занятость",
    description: "Возможность для юриста среднего уровня присоединиться к команде по судебным спорам о мошенничестве. Вы будете напрямую работать с партнёрами над громкими международными делами о мошенничестве."
  },
  {
    title: "Помощник юриста — банкротство",
    location: "Гранд-Кайман",
    type: "Полная занятость",
    description: "Поддержка нашей практики банкротства: помощь юристам в ведении дел, подготовке документов и коммуникации с клиентами."
  },
  {
    title: "Менеджер по развитию бизнеса",
    location: "Удалённо/гибрид",
    type: "Полная занятость",
    description: "Руководство инициативами по развитию бизнеса с фокусом на расширении клиентской базы на международных рынках и продвижении наших специализированных юридических услуг."
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
      alert("Пожалуйста, заполните все обязательные поля");
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
              <Link to="/">Главная</Link>
            </BreadcrumbItem>
            <BreadcrumbItem>
              <span>Карьера</span>
            </BreadcrumbItem>
          </Breadcrumbs>
          
          <div className="max-w-3xl mx-auto text-center mb-16">
            <div className="inline-block bg-primary/10 px-4 py-2 rounded-md mb-4">
              <span className="text-primary font-semibold">Присоединяйтесь к команде</span>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Карьера в CLAW</h1>
            <p className="text-foreground-600 text-lg">
              Присоединяйтесь к нашей команде юристов, стремящихся к совершенству в возврате активов и международном праве.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-bold mb-6">Открытые вакансии</h2>
              
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
                          Откликнуться
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
                  <h3 className="text-xl font-semibold">Почему CLAW?</h3>

                  <div className="flex items-start gap-3">
                    <div className="bg-primary/10 p-2 rounded-full mt-1">
                      <Icon icon="lucide:briefcase" className="text-primary" />
                    </div>
                    <div>
                      <p className="font-medium">Интересные задачи</p>
                      <p className="text-sm text-foreground-600">Работа над сложными международными делами с известными клиентами.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="bg-primary/10 p-2 rounded-full mt-1">
                      <Icon icon="lucide:trending-up" className="text-primary" />
                    </div>
                    <div>
                      <p className="font-medium">Карьерный рост</p>
                      <p className="text-sm text-foreground-600">Понятный путь для продвижения и профессионального развития.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="bg-primary/10 p-2 rounded-full mt-1">
                      <Icon icon="lucide:users" className="text-primary" />
                    </div>
                    <div>
                      <p className="font-medium">Культура сотрудничества</p>
                      <p className="text-sm text-foreground-600">Работа рядом с ведущими экспертами отрасли в поддерживающей среде.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="bg-primary/10 p-2 rounded-full mt-1">
                      <Icon icon="lucide:palm-tree" className="text-primary" />
                    </div>
                    <div>
                      <p className="font-medium">Жизнь на Каймановых островах</p>
                      <p className="text-sm text-foreground-600">Живите и работайте в одном из ведущих офшорных финансовых центров мира.</p>
                    </div>
                  </div>

                  <Button
                    color="primary"
                    className="w-full mt-4"
                    endContent={<Icon icon="lucide:mail" size={16} />}
                  >
                    Связаться с рекрутингом
                  </Button>
                </CardBody>
              </Card>
            </div>
          </div>
          
          <div className="mt-16">
            <h2 className="text-2xl font-bold mb-6">Часто задаваемые вопросы</h2>

            <Accordion variant="splitted" className="max-w-3xl">
              <AccordionItem key="1" title="Как проходит процесс отбора?">
                <p>
                  Наш процесс отбора обычно включает отправку резюме и сопроводительного письма, после чего следует первичный отборочный звонок. Затем подходящих кандидатов приглашают на собеседования с членами нашей команды и партнёрами. Финальный этап может включать кейс или практическое задание, относящееся к должности.
                </p>
              </AccordionItem>

              <AccordionItem key="2" title="Предлагаете ли вы стажировки или ученические договоры?">
                <p>
                  Да, мы предлагаем летние стажировки для студентов-юристов и позиции стажёров для подходящих кандидатов. Эти программы дают практический опыт работы с нашими юридическими командами над реальными делами и ценное понимание практики международного возврата активов и судебных споров.
                </p>
              </AccordionItem>

              <AccordionItem key="3" title="Какие квалификации вы ищете?">
                <p>
                  Для юридических позиций мы, как правило, требуем диплом о юридическом образовании аккредитованного учреждения и соответствующую квалификацию в нужной юрисдикции. Высоко ценится опыт в финансовых услугах, банкротстве или трансграничных судебных спорах. Для вспомогательных ролей мы ищем кандидатов с соответствующим опытом и высокой внимательностью к деталям.
                </p>
              </AccordionItem>

              <AccordionItem key="4" title="Предоставляете ли вы помощь с переездом?">
                <p>
                  Да, для некоторых позиций мы предоставляем помощь с переездом кандидатам, перебирающимся на Каймановы острова. Это может включать временное жильё, пособие на переезд, а также помощь с получением разрешения на работу и иными административными вопросами.
                </p>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </div>
      
      <section className="py-16 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">Подать заявку на вакансию</h2>
            
            <Card className="border border-divider bg-content1">
              <CardBody className="gap-6 p-8">
                <form 
                  action="https://formsubmit.co/inquiries@clawsolution.info" 
                  method="POST"
                  encType="multipart/form-data"
                  className="flex flex-col gap-5"
                >
                  {/* FormSubmit configuration fields */}
                  <input type="hidden" name="_subject" value="Отклик на вакансию — Юридическая фирма CLAW" />
                  <input type="hidden" name="_next" value={window.location.origin + "/careers?applied=true"} />
                  <input type="hidden" name="_captcha" value="false" />
                  <input type="hidden" name="_template" value="table" />
                  
                  {/* Existing form fields with name attributes added */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <Input
                      name="fullName"
                      label="Полное имя"
                      placeholder="Введите ваше полное имя"
                      isRequired
                      variant="bordered"
                    />
                    <Input
                      name="email"
                      label="Email"
                      placeholder="Введите ваш адрес электронной почты"
                      type="email"
                      isRequired
                      variant="bordered"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-sm font-medium">
                      Номер телефона <span className="text-danger">*</span>
                    </label>
                    <Input
                      name="phone"
                      label="Номер телефона"
                      placeholder="Введите ваш номер телефона"
                      variant="bordered"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-sm font-medium">
                      Резюме/CV <span className="text-danger">*</span>
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
                            {formData.resumeFile ? formData.resumeFile.name : "Загрузите ваше резюме"}
                          </p>
                          <p className="text-sm text-foreground-500">
                            {formData.resumeFile ? `${(formData.resumeFile.size / 1024 / 1024).toFixed(2)} МБ` : "PDF, DOC или DOCX до 5 МБ"}
                          </p>
                        </div>
                      </label>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-sm font-medium">
                      Сопроводительное письмо <span className="text-danger">*</span>
                    </label>
                    <Textarea
                      name="coverLetter"
                      label="Сопроводительное письмо"
                      placeholder="Расскажите, почему вас заинтересовала эта вакансия и почему вы подходите"
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
                      Отправить заявку
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