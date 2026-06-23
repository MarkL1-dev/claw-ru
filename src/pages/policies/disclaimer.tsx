import React from "react";
import { PolicyLayout } from "./policy-layout";
import { Icon } from "@iconify/react";

export const Disclaimer = () => {
  return (
    <PolicyLayout 
      title="Отказ от ответственности"
      lastUpdated="15 января 2024 г."
      policyPath="disclaimer"
    >
      <div className="bg-warning/10 p-6 rounded-lg mb-8 border-l-4 border-warning">
        <div className="flex items-start gap-4">
          <Icon icon="lucide:alert-triangle" className="text-warning text-xl mt-1 flex-shrink-0" />
          <p className="text-lg font-medium mb-0">
            Информация, представленная на этом веб-сайте, носит исключительно общий информационный характер, не является юридической консультацией и не создаёт отношений «адвокат — клиент».
          </p>
        </div>
      </div>
      
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-foreground border-b border-divider pb-2">Отказ от ответственности в отношении веб-сайта</h2>
        <p className="mb-4 leading-relaxed">
          Информация, предоставляемая юридической фирмой CLAW («мы», «нас» или «наш») на нашем веб-сайте («Сайт»), носит исключительно общий информационный характер. Вся информация на Сайте предоставляется добросовестно, однако мы не даём никаких заверений или гарантий любого рода, явных или подразумеваемых, относительно точности, достаточности, действительности, надёжности, доступности или полноты любой информации на Сайте.
        </p>

        <div className="bg-danger/10 p-6 rounded-lg my-6 border-l-4 border-danger">
          <p className="font-bold text-center mb-0">
            НИ ПРИ КАКИХ ОБСТОЯТЕЛЬСТВАХ МЫ НЕ НЕСЁМ ПЕРЕД ВАМИ ОТВЕТСТВЕННОСТИ ЗА ЛЮБЫЕ УБЫТКИ ИЛИ УЩЕРБ ЛЮБОГО РОДА, ПОНЕСЁННЫЕ В РЕЗУЛЬТАТЕ ИСПОЛЬЗОВАНИЯ САЙТА ИЛИ ОПОРЫ НА ЛЮБУЮ ИНФОРМАЦИЮ, ПРЕДОСТАВЛЕННУЮ НА САЙТЕ. ИСПОЛЬЗОВАНИЕ ВАМИ САЙТА И ОПОРА НА ЛЮБУЮ ИНФОРМАЦИЮ НА САЙТЕ ОСУЩЕСТВЛЯЮТСЯ ИСКЛЮЧИТЕЛЬНО НА ВАШ СОБСТВЕННЫЙ РИСК.
          </p>
        </div>
      </section>
      
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-foreground border-b border-divider pb-2">Отказ от профессиональной ответственности</h2>
        <div className="flex items-start gap-6 my-6">
          <div className="hidden md:flex items-center justify-center bg-primary/10 p-4 rounded-full flex-shrink-0">
            <Icon icon="lucide:scale" className="text-primary text-4xl" />
          </div>
          <div>
            <p className="mb-4 leading-relaxed">
              Сайт не может содержать и не содержит юридических консультаций. Юридическая информация предоставляется исключительно в общих информационных и образовательных целях и не заменяет профессиональную консультацию. Соответственно, прежде чем предпринимать какие-либо действия на основе такой информации, мы рекомендуем вам обратиться к соответствующим специалистам. Мы не оказываем никаких юридических консультаций.
            </p>
            <div className="bg-content2 p-4 rounded-lg border-l-4 border-primary my-4">
              <p className="font-medium mb-0">
                ИСПОЛЬЗОВАНИЕ ЛЮБОЙ ИНФОРМАЦИИ, СОДЕРЖАЩЕЙСЯ НА САЙТЕ, ИЛИ ОПОРА НА НЕЁ ОСУЩЕСТВЛЯЮТСЯ ИСКЛЮЧИТЕЛЬНО НА ВАШ СОБСТВЕННЫЙ РИСК.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-foreground border-b border-divider pb-2">Отсутствие отношений «адвокат — клиент»</h2>
        <div className="space-y-6">
          <div className="bg-content2 p-6 rounded-lg shadow-xs">
            <div className="flex items-start gap-4">
              <div className="bg-primary/10 p-2 rounded-full mt-1 flex-shrink-0">
                <Icon icon="lucide:users" className="text-primary" />
              </div>
              <p className="mb-0 leading-relaxed">
                Содержимое Сайта не предназначено для того, чтобы являться юридической консультацией или создавать отношения «адвокат — клиент», и не является таковым. Информация, содержимое и материалы, доступные на Сайте, носят исключительно общий информационный характер и не предназначены для использования в качестве основания для каких-либо действий.
              </p>
            </div>
          </div>
          
          <div className="bg-content2 p-6 rounded-lg shadow-xs">
            <div className="flex items-start gap-4">
              <div className="bg-primary/10 p-2 rounded-full mt-1 flex-shrink-0">
                <Icon icon="lucide:mail" className="text-primary" />
              </div>
              <p className="mb-0 leading-relaxed">
                <strong>Важно:</strong> обращение к нам через Сайт или отправка нам электронного письма не создаёт отношений «адвокат — клиент». До тех пор пока мы не согласимся представлять ваши интересы, всё, что вы нам отправляете, не будет конфиденциальным или защищённым адвокатской тайной.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-foreground border-b border-divider pb-2">Отказ от ответственности за внешние ссылки</h2>
        <div className="bg-content2 p-6 rounded-lg mb-4">
          <p className="mb-4 leading-relaxed">
            Сайт может содержать (или вы можете быть перенаправлены через Сайт) ссылки на другие веб-сайты или контент, принадлежащий третьим лицам или исходящий от них, либо ссылки на веб-сайты и материалы в баннерах или иной рекламе. Такие внешние ссылки нами не исследуются, не отслеживаются и не проверяются на точность, достаточность, действительность, надёжность, доступность или полноту.
          </p>
          <p className="mb-0 leading-relaxed font-medium">
            МЫ НЕ ГАРАНТИРУЕМ, НЕ ОДОБРЯЕМ, НЕ РУЧАЕМСЯ И НЕ ПРИНИМАЕМ НА СЕБЯ ОТВЕТСТВЕННОСТЬ ЗА ТОЧНОСТЬ ИЛИ НАДЁЖНОСТЬ ЛЮБОЙ ИНФОРМАЦИИ, ПРЕДЛАГАЕМОЙ СТОРОННИМИ ВЕБ-САЙТАМИ, ССЫЛКИ НА КОТОРЫЕ РАЗМЕЩЕНЫ НА САЙТЕ, ЛИБО ЛЮБЫМ ВЕБ-САЙТОМ ИЛИ МАТЕРИАЛОМ, ССЫЛКА НА КОТОРЫЙ РАЗМЕЩЕНА В ЛЮБОМ БАННЕРЕ ИЛИ ИНОЙ РЕКЛАМЕ.
          </p>
        </div>
      </section>
      
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-foreground border-b border-divider pb-2">Свяжитесь с нами</h2>
        <p className="mb-4 leading-relaxed">
          Если у вас есть вопросы по настоящему Отказу от ответственности, свяжитесь с нами:
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