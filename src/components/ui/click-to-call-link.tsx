import React from 'react';
import { Phone } from 'lucide-react';
import { cn } from '@/lib/utils';

type ClickToCallLinkProps = {
  phoneNumber: string;
  children: React.ReactNode;
  className?: string;
};

export function ClickToCallLink({ phoneNumber, children, className }: ClickToCallLinkProps) {
  return (
    <a href={`tel:${phoneNumber}`} className={cn('inline-flex items-center gap-2', className)}>
      <Phone className="h-4 w-4" />
      {children}
    </a>
  );
}
