'use client';

import Link from 'next/link';
import { usePostHog } from 'posthog-js/react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

interface GalleryButtonProps {
  href: string;
  taskTitle?: string;
  taskCategory?: string;
  route?: string;
  caseTitle?: string;
  caseId?: string;
  variant?: 'example' | 'userCase' | 'tryNow';
  children: React.ReactNode;
  className?: string;
  size?: 'default' | 'sm' | 'lg' | 'icon';
}

export function GalleryButton({ 
  href, 
  taskTitle, 
  taskCategory, 
  route, 
  caseTitle, 
  caseId, 
  variant = 'example',
  children,
  className,
  size = 'lg'
}: GalleryButtonProps) {
  const posthog = usePostHog();

  const handleClick = () => {
    if (variant === 'example' && taskTitle && taskCategory && route) {
      posthog.capture('gallery_try_example_clicked', {
        task_title: taskTitle,
        task_category: taskCategory,
        route: route
      });
    } else if (variant === 'userCase' && caseTitle && caseId) {
      posthog.capture('gallery_user_published_clicked', {
        case_title: caseTitle,
        case_id: caseId
      });
    } else if (variant === 'tryNow') {
      posthog.capture('gallery_try_it_now_clicked', { route: '/agent' });
    }
  };

  return (
    <Button
      variant="ghost"
      className={className}
      size={size}
      onClick={handleClick}
    >
      <a href={`${location.pathname.replace('/gallery', '')}${href}`} className="flex items-center justify-center w-full gap-2">
        {children}
      </a>
    </Button>
  );
} 