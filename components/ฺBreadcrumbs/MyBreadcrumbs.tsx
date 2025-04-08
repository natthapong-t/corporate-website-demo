'use client';
import { useResponsive } from '@/hooks/useResponsive';
import { Anchor, Breadcrumbs } from '@mantine/core';

type BreadcrumbItem = {
  title: string;
  href?: string;
};

type MyBreadcrumbsProps = {
  items: BreadcrumbItem[];
};

export const MyBreadcrumbs = ({ items }: MyBreadcrumbsProps) => {
  const { isMediumScreen, isSmallScreen, isLargeScreen } = useResponsive();
  return (
    <Breadcrumbs separator="›" mt={'1rem'} px={isMediumScreen || isLargeScreen ? '16px' : '0'}>
      {items.map((item, index) => {
        const isLast = index === items.length - 1;
        return (
          <Anchor key={index} href={isLast ? undefined : item.href} c={isLast ? '' : '#A7A9AC'}>
            {item.title}
          </Anchor>
        );
      })}
    </Breadcrumbs>
  );
};
