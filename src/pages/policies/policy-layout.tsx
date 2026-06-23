import React from "react";
import { Breadcrumbs, BreadcrumbItem, Link } from "@heroui/react";
import { Link as RouterLink } from "react-router-dom";

interface PolicyLayoutProps {
  children: React.ReactNode;
  title: string;
  lastUpdated: string;
  policyPath: string;
}

export const PolicyLayout: React.FC<PolicyLayoutProps> = ({ 
  children, 
  title, 
  lastUpdated,
  policyPath 
}) => {
  return (
    <div className="container mx-auto px-6 py-12">
      <Breadcrumbs className="mb-8">
        <BreadcrumbItem>
          <Link as={RouterLink} to="/">Home</Link>
        </BreadcrumbItem>
        <BreadcrumbItem>
          <span>{title}</span>
        </BreadcrumbItem>
      </Breadcrumbs>
      
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold mb-4">{title}</h1>
        <p className="text-sm text-foreground-600 mb-8">Last updated: {lastUpdated}</p>
        
        <div className="space-y-8">
          {children}
        </div>
      </div>
    </div>
  );
};