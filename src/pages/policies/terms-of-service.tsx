import React from "react";
import { PolicyLayout } from "./policy-layout";
import { Icon } from "@iconify/react";

export const TermsOfService = () => {
  return (
    <PolicyLayout 
      title="Условия использования"
      lastUpdated="15 января 2024 г."
      policyPath="terms-of-service"
    >
      <div className="bg-primary/5 p-6 rounded-lg mb-8 border-l-4 border-primary">
        <p className="text-lg font-medium mb-0">
          Настоящие Условия использования представляют собой юридически обязывающее соглашение между вами и юридической фирмой CLAW. Получая доступ к нашему сайту, вы соглашаетесь соблюдать эти условия.
        </p>
      </div>
      
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-foreground border-b border-divider pb-2">Согласие с условиями</h2>
        <p className="mb-4 leading-relaxed">
          Настоящие Условия использования представляют собой юридически обязывающее соглашение, заключаемое между вами — лично или от имени юридического лица («вы») — и юридической фирмой CLAW («мы», «нас» или «наш») в отношении вашего доступа к веб-сайту и его использования, а также к любым иным медиаформам, медиаканалам, мобильным веб-сайтам или мобильным приложениям, связанным с ним, ссылающимся на него или иным образом с ним соединённым (совместно — «Сайт»).
        </p>

        <div className="flex items-center gap-4 p-4 bg-warning/10 rounded-lg my-6 border-l-4 border-warning">
          <Icon icon="lucide:alert-triangle" className="text-warning text-xl" />
          <p className="m-0 leading-relaxed">
            Вы соглашаетесь, что, получая доступ к Сайту, вы прочитали, поняли и согласны соблюдать все настоящие Условия использования. Если вы не согласны со всеми настоящими Условиями использования, вам прямо запрещается использовать Сайт, и вы обязаны немедленно прекратить его использование.
          </p>
        </div>
      </section>
      
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-foreground border-b border-divider pb-2">Права интеллектуальной собственности</h2>
        <div className="relative pl-6 border-l-2 border-primary/30 my-6">
          <p className="leading-relaxed">
            Если не указано иное, Сайт является нашей собственностью, и весь исходный код, базы данных, функциональность, программное обеспечение, дизайн веб-сайта, аудио, видео, текст, фотографии и графика на Сайте (совместно — «Контент»), а также содержащиеся в нём товарные знаки, знаки обслуживания и логотипы («Знаки») принадлежат нам или контролируются нами либо лицензированы нам и защищены законами об авторском праве и товарных знаках, а также различными иными правами интеллектуальной собственности и законами о недобросовестной конкуренции Соединённых Штатов, международными законами об авторском праве и международными конвенциями.
          </p>
        </div>
        <p className="leading-relaxed">
          Контент и Знаки предоставляются на Сайте «КАК ЕСТЬ» исключительно для вашего ознакомления и личного использования. За исключением случаев, прямо предусмотренных настоящими Условиями использования, никакая часть Сайта и никакой Контент или Знаки не могут быть скопированы, воспроизведены, агрегированы, повторно опубликованы, загружены, размещены, публично показаны, закодированы, переведены, переданы, распространены, проданы, лицензированы или иным образом использованы в любых коммерческих целях без нашего прямого предварительного письменного разрешения.
        </p>
      </section>
      
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-foreground border-b border-divider pb-2">Заверения пользователя</h2>
        <p className="mb-4 leading-relaxed">
          Используя Сайт, вы заверяете и гарантируете, что:
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
          <div className="bg-content2 p-5 rounded-lg">
            <div className="flex items-start gap-3">
              <div className="bg-primary/10 p-1 rounded-full mt-1 flex-shrink-0">
                <Icon icon="lucide:check" className="text-primary" />
              </div>
              <p className="m-0 leading-relaxed">Вся предоставляемая вами регистрационная информация будет правдивой, точной, актуальной и полной</p>
            </div>
          </div>
          
          <div className="bg-content2 p-5 rounded-lg">
            <div className="flex items-start gap-3">
              <div className="bg-primary/10 p-1 rounded-full mt-1 flex-shrink-0">
                <Icon icon="lucide:check" className="text-primary" />
              </div>
              <p className="m-0 leading-relaxed">Вы будете поддерживать точность такой информации и своевременно обновлять её при необходимости</p>
            </div>
          </div>
          
          <div className="bg-content2 p-5 rounded-lg">
            <div className="flex items-start gap-3">
              <div className="bg-primary/10 p-1 rounded-full mt-1 flex-shrink-0">
                <Icon icon="lucide:check" className="text-primary" />
              </div>
              <p className="m-0 leading-relaxed">Вы обладаете правоспособностью и соглашаетесь соблюдать настоящие Условия использования</p>
            </div>
          </div>
          
          <div className="bg-content2 p-5 rounded-lg">
            <div className="flex items-start gap-3">
              <div className="bg-primary/10 p-1 rounded-full mt-1 flex-shrink-0">
                <Icon icon="lucide:check" className="text-primary" />
              </div>
              <p className="m-0 leading-relaxed">Вы не являетесь несовершеннолетним в юрисдикции, в которой проживаете</p>
            </div>
          </div>
          
          <div className="bg-content2 p-5 rounded-lg">
            <div className="flex items-start gap-3">
              <div className="bg-primary/10 p-1 rounded-full mt-1 flex-shrink-0">
                <Icon icon="lucide:check" className="text-primary" />
              </div>
              <p className="m-0 leading-relaxed">Вы не будете получать доступ к Сайту с помощью автоматизированных или не-человеческих средств</p>
            </div>
          </div>
          
          <div className="bg-content2 p-5 rounded-lg">
            <div className="flex items-start gap-3">
              <div className="bg-primary/10 p-1 rounded-full mt-1 flex-shrink-0">
                <Icon icon="lucide:check" className="text-primary" />
              </div>
              <p className="m-0 leading-relaxed">Вы не будете использовать Сайт в любых незаконных или несанкционированных целях</p>
            </div>
          </div>
        </div>
      </section>
      
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-foreground border-b border-divider pb-2">Запрещённые действия</h2>
        <p className="mb-4 leading-relaxed">
          Вы не вправе получать доступ к Сайту или использовать его в каких-либо целях, кроме тех, для которых мы предоставляем Сайт. Сайт не может использоваться в связи с любой коммерческой деятельностью, за исключением той, которая прямо одобрена или утверждена нами.
        </p>
        <p className="mb-4 leading-relaxed">
          Как пользователь Сайта, вы соглашаетесь не:
        </p>
        <ol className="list-decimal pl-6 space-y-3 mb-4">
          <li className="leading-relaxed">Систематически извлекать данные или иной контент с Сайта для создания или составления, прямо или косвенно, коллекции, подборки, базы данных или каталога без нашего письменного разрешения.</li>
          <li className="leading-relaxed">Осуществлять любое несанкционированное использование Сайта, включая сбор имён пользователей и/или адресов электронной почты пользователей электронными или иными средствами с целью рассылки незапрошенных писем, либо создание учётных записей пользователей автоматизированными средствами или под ложным предлогом.</li>
          <li className="leading-relaxed">Использовать Сайт для рекламы или предложения товаров и услуг к продаже.</li>
          <li className="leading-relaxed">Обходить, отключать или иным образом вмешиваться в функции безопасности Сайта, включая функции, которые предотвращают или ограничивают использование или копирование любого Контента либо устанавливают ограничения на использование Сайта и/или содержащегося в нём Контента.</li>
          <li className="leading-relaxed">Осуществлять несанкционированное фреймирование Сайта или размещение ссылок на него.</li>
          <li className="leading-relaxed">Обманывать, вводить в заблуждение нас и других пользователей, в частности в любых попытках узнать конфиденциальную информацию учётной записи, такую как пароли пользователей.</li>
        </ol>
      </section>
      
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-foreground border-b border-divider pb-2">Свяжитесь с нами</h2>
        <p className="mb-4 leading-relaxed">
          Чтобы урегулировать жалобу в отношении Сайта или получить дополнительную информацию об использовании Сайта, свяжитесь с нами:
        </p>

        <div className="bg-content2 p-6 rounded-lg border border-divider">
          <p className="font-semibold mb-2">CLAW — Юридическая фирма</p>
          <p className="mb-0">
            Elgin Avenue, Джорджтаун<br />
            Гранд-Кайман KY1-9000<br />
            Каймановы острова<br />
            Телефон: +1 (345) 555-0123<br />
            Email: <a href="mailto:legal@clawfirm.com" className="text-primary hover:underline">legal@clawfirm.com</a>
          </p>
        </div>
      </section>
    </PolicyLayout>
  );
};