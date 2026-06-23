import React from "react";
import { Button } from "@heroui/react";
import { Icon } from "@iconify/react";
import { useNavigate } from "react-router-dom";

export const NotFound = () => {
  const navigate = useNavigate();
  
  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] px-4 text-center">
      <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center mb-6">
        <Icon icon="lucide:file-question" className="text-primary text-4xl" />
      </div>
      <h1 className="text-4xl font-bold mb-4">Страница не найдена</h1>
      <p className="text-foreground-600 mb-8 max-w-md">
        Страница, которую вы ищете, не существует или была перемещена.
      </p>
      <Button 
        color="primary" 
        size="lg"
        onPress={() => navigate("/")}
        startContent={<Icon icon="lucide:home" />}
      >
        Вернуться на главную
      </Button>
    </div>
  );
};