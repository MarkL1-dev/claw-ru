import React from "react";
import { Button, Tooltip, Card, CardBody, Divider } from "@heroui/react";
import { Icon } from "@iconify/react";
import { motion } from "framer-motion";

export const OurStory = () => {
  return (
    <section className="py-24 bg-background relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full -mr-48 -mt-48"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary/5 rounded-full -ml-32 -mb-32"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block bg-primary/10 px-4 py-2 rounded-md mb-4">
            <span className="text-primary font-semibold">Наше наследие</span>
          </div>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">История CLAW</h2>
          <p className="text-foreground-600 text-lg max-w-3xl mx-auto">
            От бутиковой практики до мирового лидера в области возврата активов — наш путь отражает неизменную приверженность совершенству и успеху клиентов.
          </p>
        </div>
        
        {/* Timeline section */}
        <div className="relative mb-20">
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-primary/20 hidden md:block"></div>
          
          {/* 2004 - Founding */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16 relative">
            <motion.div 
              className="md:text-right md:pr-12"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="bg-content1 p-6 rounded-lg shadow-md border border-divider h-full">
                <div className="flex items-center justify-end mb-4">
                  <span className="text-primary font-bold text-xl">2004</span>
                </div>
                <h3 className="text-xl font-bold mb-3">Основание</h3>
                <p className="text-foreground-600">
                  Джонатан Харрингтон, бывший юрисконсульт Финансового управления Каймановых островов, основывает CLAW с целью предоставлять непревзойдённые услуги по возврату активов в одной из самых сложных финансовых юрисдикций мира.
                </p>
              </div>
            </motion.div>
            
            <div className="hidden md:block">
              <div className="absolute left-1/2 top-12 transform -translate-x-1/2 w-12 h-12 rounded-full bg-primary flex items-center justify-center">
                <Icon icon="lucide:flag" className="text-white text-xl" />
              </div>
            </div>
            
            <div className="md:hidden">
              <img 
                src="https://img.heroui.chat/image/places?w=600&h=400&u=founding1" 
                alt="Основание CLAW"
                className="w-full h-auto rounded-lg shadow-md"
              />
            </div>
          </div>
          
          {/* 2009 - Landmark Case */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16 relative">
            <div className="md:hidden">
              <img 
                src="https://img.heroui.chat/image/places?w=600&h=400&u=landmark1" 
                alt="Знаковое дело"
                className="w-full h-auto rounded-lg shadow-md"
              />
            </div>
            
            <div className="hidden md:block"></div>
            
            <motion.div 
              className="md:pl-12"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="bg-content1 p-6 rounded-lg shadow-md border border-divider h-full">
                <div className="flex items-center mb-4">
                  <span className="text-primary font-bold text-xl">2009</span>
                </div>
                <h3 className="text-xl font-bold mb-3">Знаковое дело</h3>
                <p className="text-foreground-600">
                  Во время мирового финансового кризиса CLAW успешно отследила и вернула активы на сумму 340 млн долларов из сложной мошеннической схемы с участием нескольких юрисдикций, которую другие фирмы сочли «безнадёжной». Это знаковое дело закрепило за нами репутацию фирмы, к которой обращаются в самых сложных делах по возврату активов.
                </p>
                <div className="mt-4 flex items-center">
                  <Tooltip content="Посмотреть кейс" placement="bottom">
                    <Button
                      size="sm"
                      variant="light"
                      color="primary"
                      endContent={<Icon icon="lucide:arrow-right" size={14} />}
                    >
                      Читать кейс
                    </Button>
                  </Tooltip>
                </div>
              </div>
            </motion.div>
            
            <div className="hidden md:block">
              <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-primary flex items-center justify-center">
                <Icon icon="lucide:scale" className="text-white text-xl" />
              </div>
            </div>
          </div>
          
          {/* 2015 - Global Expansion */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16 relative">
            <motion.div 
              className="md:text-right md:pr-12"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="bg-content1 p-6 rounded-lg shadow-md border border-divider h-full">
                <div className="flex items-center justify-end mb-4">
                  <span className="text-primary font-bold text-xl">2015</span>
                </div>
                <h3 className="text-xl font-bold mb-3">Международная экспансия</h3>
                <p className="text-foreground-600">
                  С ростом международной репутации CLAW устанавливает стратегические партнёрства с юридическими фирмами в Лондоне, Нью-Йорке и Гонконге, создавая глобальную сеть, способную вести сложные трансграничные дела по возврату активов.
                </p>
              </div>
            </motion.div>
            
            <div className="hidden md:block">
              <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-primary flex items-center justify-center">
                <Icon icon="lucide:globe" className="text-white text-xl" />
              </div>
            </div>
            
            <div className="md:hidden">
              <img 
                src="https://img.heroui.chat/image/places?w=600&h=400&u=global1" 
                alt="Международная экспансия"
                className="w-full h-auto rounded-lg shadow-md"
              />
            </div>
          </div>
          
          {/* Today */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative">
            <div className="md:hidden">
              <img 
                src="https://img.heroui.chat/image/places?w=600&h=400&u=today1" 
                alt="CLAW сегодня"
                className="w-full h-auto rounded-lg shadow-md"
              />
            </div>
            
            <div className="hidden md:block"></div>
            
            <motion.div 
              className="md:pl-12"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="bg-content1 p-6 rounded-lg shadow-md border border-divider h-full">
                <div className="flex items-center mb-4">
                  <span className="text-primary font-bold text-xl">Сегодня</span>
                </div>
                <h3 className="text-xl font-bold mb-3">CLAW сегодня</h3>
                <p className="text-foreground-600">
                  CLAW находится на стыке традиционной юридической экспертизы и передовых технологий финансовых расследований. Наша собственная методология отслеживания активов сочетает продвинутую аналитику данных с глубоким знанием офшорных финансовых структур, позволяя добиваться успеха там, где обычные подходы бессильны.
                </p>
              </div>
            </motion.div>
            
            <div className="hidden md:block">
              <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-primary flex items-center justify-center">
                <Icon icon="lucide:zap" className="text-white text-xl" />
              </div>
            </div>
          </div>
        </div>
        
        {/* Stats and achievements */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <Card className="border border-divider bg-content1">
              <CardBody className="gap-4 p-6 text-center">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Icon icon="lucide:briefcase" className="text-primary text-3xl" />
                </div>
                <h3 className="text-4xl font-bold text-primary">$27M+</h3>
                <p className="text-foreground-600">Возвращено активов</p>
              </CardBody>
            </Card>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Card className="border border-divider bg-content1">
              <CardBody className="gap-4 p-6 text-center">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Icon icon="lucide:users" className="text-primary text-3xl" />
                </div>
                <h3 className="text-4xl font-bold text-primary">30+</h3>
                <p className="text-foreground-600">Юристов в команде</p>
              </CardBody>
            </Card>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <Card className="border border-divider bg-content1">
              <CardBody className="gap-4 p-6 text-center">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Icon icon="lucide:check-circle" className="text-primary text-3xl" />
                </div>
                <h3 className="text-4xl font-bold text-primary">94%</h3>
                <p className="text-foreground-600">Доля успешных дел</p>
              </CardBody>
            </Card>
          </motion.div>
        </div>
        
        {/* Founder's quote */}
        <motion.div 
          className="bg-primary text-white p-8 md:p-12 rounded-lg shadow-lg relative overflow-hidden"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className="absolute top-0 right-0 opacity-10">
            <Icon icon="lucide:quote" size={200} />
          </div>
          
          <div className="relative z-10 flex flex-col md:flex-row gap-8 items-center">
            <div className="flex-shrink-0">
              <div className="w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden border-4 border-white/20">
                <img 
                  src="https://plus.unsplash.com/premium_photo-1723485675096-f3186291a1e6?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=880" 
                  alt="Jonathan P. Harrington" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            
            <div>
              <p className="text-lg md:text-xl italic mb-6">
                «Наш успех строится на простом принципе: мы сочетаем продуманные юридические стратегии с инновационными методами финансовых расследований, чтобы возвращать активы, которые другим вернуть не под силу. Когда клиенты обращаются к нам, им часто уже сказали, что их активы вернуть невозможно. Опровергать это убеждение — то, что движет нами каждый день.»
              </p>
              <div>
                <p className="font-semibold">Jonathan P. Harrington</p>
                <p className="text-sm text-white/80">Основатель и управляющий партнёр</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};