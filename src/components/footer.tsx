import React from "react";
import { Link, Divider } from "@heroui/react";
import { Icon } from "@iconify/react";
import { Link as RouterLink } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="bg-content3 text-foreground-700 py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <Icon icon="lucide:scale" className="text-primary text-2xl" />
              <p className="font-semibold tracking-tight">CAYMAN RECOVERY</p>
            </div>
            <p className="text-sm mb-4">
              Специализированные юридические услуги по возврату активов, судебным спорам о мошенничестве и трансграничному исполнению решений.
            </p>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Услуги</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="#" color="foreground">Возврат активов</Link></li>
              <li><Link href="#" color="foreground">Судебные споры по мошенничеству</Link></li>
              <li><Link href="#" color="foreground">Банкротство и реструктуризация</Link></li>
              <li><Link href="#" color="foreground">Трансграничное исполнение решений</Link></li>
              <li><Link href="#" color="foreground">Корпоративные споры</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Быстрые ссылки</h3>
            <ul className="space-y-2 text-sm">
              <li><Link as={RouterLink} to="/" color="foreground">Главная</Link></li>
              <li><Link href="#services" color="foreground">Наши услуги</Link></li>
              <li><Link href="#team" color="foreground">Наша команда</Link></li>
              <li><Link href="#testimonials" color="foreground">Отзывы</Link></li>
              <li><Link href="#contact" color="foreground">Контакты</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Правовая информация</h3>
            <ul className="space-y-2 text-sm">
              <li><Link as={RouterLink} to="/policies/privacy-policy" color="foreground">Политика конфиденциальности</Link></li>
              <li><Link as={RouterLink} to="/policies/terms-of-service" color="foreground">Условия использования</Link></li>
              <li><Link as={RouterLink} to="/policies/cookie-policy" color="foreground">Политика использования файлов cookie</Link></li>
              <li><Link as={RouterLink} to="/policies/disclaimer" color="foreground">Отказ от ответственности</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-divider mt-10 pt-6 text-sm text-foreground-600">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p>© {new Date().getFullYear()} Cayman Recovery Law Firm. Все права защищены.</p>
            <p>Деятельность регулируется Ассоциацией практикующих юристов Каймановых островов</p>
          </div>
        </div>
      </div>
    </footer>
  );
};