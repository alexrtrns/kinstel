import React from 'react';
import { cn } from '@/lib/utils';

type ClickToCallLinkProps = {
  phoneNumber: string;
  children: React.ReactNode;
  className?: string;
};

export function ClickToCallLink({ phoneNumber, children, className }: ClickToCallLinkProps) {
  return (
    <a href={`tel:${phoneNumber}`} className={cn(className)}>
      {children}
    </a>
  );
}
