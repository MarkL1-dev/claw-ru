import React from "react";
import { PolicyLayout } from "./policy-layout";
import { Icon } from "@iconify/react";

export const CookiePolicy = () => {
  return (
    <PolicyLayout 
      title="Политика использования файлов cookie"
      lastUpdated="15 января 2024 г."
      policyPath="cookie-policy"
    >
      <div className="bg-primary/5 p-6 rounded-lg mb-8 border-l-4 border-primary">
        <p className="text-lg font-medium mb-0">
          Настоящая Политика использования файлов cookie объясняет, как юридическая фирма CLAW использует файлы cookie и аналогичные технологии для распознавания вас при посещении нашего веб-сайта.
        </p>
      </div>
      
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-foreground border-b border-divider pb-2">Введение</h2>
        <p className="mb-4 leading-relaxed">
          Настоящая политика объясняет, что такое файлы cookie, зачем мы их используем и какие у вас есть права контролировать их использование нами. Мы используем файлы cookie, чтобы улучшать ваше взаимодействие с сайтом, анализировать его трафик и персонализировать контент.
        </p>
      </section>
      
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-foreground border-b border-divider pb-2">Что такое файлы cookie?</h2>
        <div className="flex items-start gap-6 my-6">
          <div className="hidden md:flex items-center justify-center bg-primary/10 p-4 rounded-full flex-shrink-0">
            <Icon icon="lucide:cookie" className="text-primary text-4xl" />
          </div>
          <div>
            <p className="mb-4 leading-relaxed">
              Файлы cookie — это небольшие файлы данных, которые размещаются на вашем компьютере или мобильном устройстве при посещении веб-сайта. Файлы cookie широко используются владельцами веб-сайтов, чтобы их сайты работали или работали более эффективно, а также для предоставления отчётной информации.
            </p>
            <p className="leading-relaxed">
              Файлы cookie, устанавливаемые владельцем веб-сайта (в данном случае — юридической фирмой CLAW), называются «основными файлами cookie». Файлы cookie, устанавливаемые сторонами, отличными от владельца веб-сайта, называются «сторонними файлами cookie». Сторонние файлы cookie позволяют предоставлять на веб-сайте или через него функции или возможности третьих сторон (например, рекламу, интерактивный контент и аналитику). Стороны, устанавливающие эти сторонние файлы cookie, могут распознавать ваш компьютер как при посещении данного веб-сайта, так и при посещении некоторых других веб-сайтов.
            </p>
          </div>
        </div>
      </section>
      
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-foreground border-b border-divider pb-2">Типы используемых нами файлов cookie</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-8">
          <div className="bg-content2 p-6 rounded-lg shadow-xs">
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-primary/10 p-2 rounded-full flex-shrink-0">
                <Icon icon="lucide:shield" className="text-primary" />
              </div>
              <h3 className="text-lg font-semibold m-0">Обязательные файлы cookie</h3>
            </div>
            <p className="m-0 leading-relaxed">
              Строго необходимы для предоставления вам услуг, доступных через наш веб-сайт, и для использования некоторых его функций, таких как доступ к защищённым разделам.
            </p>
          </div>
          
          <div className="bg-content2 p-6 rounded-lg shadow-xs">
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-primary/10 p-2 rounded-full flex-shrink-0">
                <Icon icon="lucide:settings" className="text-primary" />
              </div>
              <h3 className="text-lg font-semibold m-0">Функциональные файлы cookie</h3>
            </div>
            <p className="m-0 leading-relaxed">
              Используются для повышения производительности и функциональности нашего веб-сайта, но не являются обязательными для его использования.
            </p>
          </div>
          
          <div className="bg-content2 p-6 rounded-lg shadow-xs">
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-primary/10 p-2 rounded-full flex-shrink-0">
                <Icon icon="lucide:bar-chart" className="text-primary" />
              </div>
              <h3 className="text-lg font-semibold m-0">Аналитические файлы cookie</h3>
            </div>
            <p className="m-0 leading-relaxed">
              Собирают информацию, помогающую нам понять, как используется наш веб-сайт и насколько эффективны наши маркетинговые кампании.
            </p>
          </div>
        </div>
      </section>
      
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-foreground border-b border-divider pb-2">Как вы можете управлять файлами cookie?</h2>
        <div className="space-y-6">
          <div className="bg-content2 p-6 rounded-lg shadow-xs">
            <div className="flex items-start gap-4">
              <div className="bg-primary/10 p-2 rounded-full mt-1 flex-shrink-0">
                <Icon icon="lucide:sliders" className="text-primary" />
              </div>
              <div>
                <p className="font-medium mb-2">Настройки браузера</p>
                <p className="mb-0 leading-relaxed">
                  Вы можете настроить или изменить параметры вашего веб-браузера, чтобы принимать или отклонять файлы cookie. Если вы решите отклонить файлы cookie, вы всё равно сможете пользоваться нашим веб-сайтом, однако доступ к некоторым функциям может быть ограничен.
                </p>
              </div>
            </div>
          </div>
          
          <div className="bg-content2 p-6 rounded-lg shadow-xs">
            <div className="flex items-start gap-4">
              <div className="bg-primary/10 p-2 rounded-full mt-1 flex-shrink-0">
                <Icon icon="lucide:x-circle" className="text-primary" />
              </div>
              <div>
                <p className="font-medium mb-2">Ссылки для отказа</p>
                <p className="mb-0 leading-relaxed">
                  Большинство рекламных сетей предлагают способ отказаться от таргетированной рекламы. Если вы хотите узнать больше, посетите <a href="http://www.aboutads.info/choices/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">http://www.aboutads.info/choices/</a> или <a href="http://www.youronlinechoices.com" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">http://www.youronlinechoices.com</a>.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-foreground border-b border-divider pb-2">Свяжитесь с нами</h2>
        <p className="mb-4 leading-relaxed">
          Если у вас есть вопросы об использовании нами файлов cookie или других технологий, свяжитесь с нами:
        </p>

        <div className="bg-content2 p-6 rounded-lg border border-divider">
          <p className="font-semibold mb-2">CLAW — Юридическая фирма</p>
          <p className="mb-0">
            Elgin Avenue, Джорджтаун<br />
            Гранд-Кайман KY1-9000<br />
            Каймановы острова<br />
            Телефон: +1 (360) 804 8850<br />
            Email: <a href="mailto:privacy@clawfirm.com" className="text-primary hover:underline">privacy@clawfirm.com</a>
          </p>
        </div>
      </section>
    </PolicyLayout>
  );
};