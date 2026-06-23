import React from "react";
import { Breadcrumbs, BreadcrumbItem, Link } from "@heroui/react";
import { Link as RouterLink } from "react-router-dom";

export const PrivacyPolicy = () => {
  return (
    <div className="container mx-auto px-6 py-12">
      <Breadcrumbs className="mb-8">
        <BreadcrumbItem>
          <Link as={RouterLink} to="/">Главная</Link>
        </BreadcrumbItem>
        <BreadcrumbItem>
          <span>Политика конфиденциальности</span>
        </BreadcrumbItem>
      </Breadcrumbs>

      <h1 className="text-3xl font-bold mb-8">Политика конфиденциальности</h1>
      
      <div className="prose max-w-3xl mx-auto">
        <div className="bg-primary/5 p-6 rounded-lg mb-8 border-l-4 border-primary">
          <p className="text-lg font-medium mb-0">
            Настоящая Политика конфиденциальности объясняет, как юридическая фирма CLAW собирает, использует и защищает вашу персональную информацию.
          </p>
        </div>

        <p className="text-sm text-foreground-600 mb-8">Последнее обновление: {new Date().toLocaleDateString()}</p>
        
        <div className="space-y-8">
          <section>
            <h2 className="text-2xl font-semibold mb-4 text-foreground border-b border-divider pb-2">1. Введение</h2>
            <p className="mb-4 leading-relaxed">
              Юридическая фирма CLAW («мы», «нас» или «наш») стремится защищать вашу конфиденциальность.
              Настоящая Политика конфиденциальности объясняет, как мы собираем, используем, раскрываем и защищаем вашу информацию
              при посещении вами нашего веб-сайта или использовании наших услуг.
            </p>
          </section>
          
          <section>
            <h2 className="text-2xl font-semibold mb-4 text-foreground border-b border-divider pb-2">2. Какую информацию мы собираем</h2>
            <p className="mb-4 leading-relaxed">
              Мы можем собирать персональную информацию, которую вы добровольно предоставляете нам, когда вы:
            </p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li className="leading-relaxed">Связываетесь с нами через наш веб-сайт</li>
              <li className="leading-relaxed">Подписываетесь на нашу рассылку</li>
              <li className="leading-relaxed">Запрашиваете консультацию</li>
              <li className="leading-relaxed">Откликаетесь на вакансию</li>
            </ul>
          </section>
          
          <section>
            <h2 className="text-2xl font-semibold mb-4 text-foreground border-b border-divider pb-2">3. Как мы используем вашу информацию</h2>
            <p className="mb-4 leading-relaxed">
              Собранная информация может использоваться для того, чтобы:
            </p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li className="leading-relaxed">Предоставлять, обеспечивать работу и поддерживать наши услуги</li>
              <li className="leading-relaxed">Отвечать на ваши обращения и выполнять ваши запросы</li>
              <li className="leading-relaxed">Направлять вам административную информацию</li>
              <li className="leading-relaxed">Направлять вам маркетинговые и рекламные сообщения</li>
              <li className="leading-relaxed">Улучшать наш веб-сайт и услуги</li>
            </ul>
          </section>
          
          <section>
            <h2 className="text-2xl font-semibold mb-4 text-foreground border-b border-divider pb-2">4. Раскрытие вашей информации</h2>
            <p className="mb-4 leading-relaxed">
              Мы можем передавать вашу информацию:
            </p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li className="leading-relaxed">Нашим поставщикам услуг, которые оказывают услуги от нашего имени</li>
              <li className="leading-relaxed">Профессиональным консультантам, таким как юристы, аудиторы и страховщики</li>
              <li className="leading-relaxed">Государственным органам, когда это требуется по закону</li>
            </ul>
          </section>
          
          <section>
            <h2 className="text-2xl font-semibold mb-4 text-foreground border-b border-divider pb-2">5. Безопасность вашей информации</h2>
            <div className="bg-content2 p-5 rounded-lg">
              <p className="mb-0 leading-relaxed">
                Мы применяем надлежащие меры безопасности для защиты вашей персональной информации.
                Однако ни один способ передачи данных через интернет или электронного хранения не является на 100% безопасным.
              </p>
            </div>
          </section>
          
          <section>
            <h2 className="text-2xl font-semibold mb-4 text-foreground border-b border-divider pb-2">6. Ваши права</h2>
            <p className="mb-4 leading-relaxed">
              В зависимости от вашего местонахождения, вы можете обладать определёнными правами в отношении вашей персональной информации,
              включая право на доступ, исправление или удаление вашей персональной информации.
            </p>
          </section>
          
          <section>
            <h2 className="text-2xl font-semibold mb-4 text-foreground border-b border-divider pb-2">7. Изменения в настоящей Политике конфиденциальности</h2>
            <p className="mb-4 leading-relaxed">
              Мы можем время от времени обновлять нашу Политику конфиденциальности. Мы уведомим вас о любых изменениях,
              разместив новую Политику конфиденциальности на этой странице.
            </p>
          </section>
          
          <section>
            <h2 className="text-2xl font-semibold mb-4 text-foreground border-b border-divider pb-2">8. Свяжитесь с нами</h2>
            <p className="mb-4 leading-relaxed">
              Если у вас есть вопросы по настоящей Политике конфиденциальности, свяжитесь с нами:
            </p>
            <div className="bg-content2 p-6 rounded-lg border border-divider">
              <p className="font-semibold mb-2">CLAW — Юридическая фирма</p>
              <p className="mb-0">
                Email: privacy@clawsolution.info<br />
                Телефон: +1 (301) 558-8288<br />
                Адрес: Elgin Avenue, Джорджтаун, Гранд-Кайман KY1-9000, Каймановы острова
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};