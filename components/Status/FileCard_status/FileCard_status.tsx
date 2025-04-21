'use client';

import { IconDownload, IconMessageCircle, IconPhoto, IconSettings } from '@tabler/icons-react';
import { Button, Card, Flex, Group, Image, SimpleGrid, Tabs, Text, Title } from '@mantine/core';
import { Accordion_status } from '@/components/Status/';
import { useResponsive } from '@/hooks/useResponsive';

type FileCardProps = {
  fileName: string;
  link: string;
};

export function FileCard_status({ fileName, link }: FileCardProps) {
  const { isXSmallScreen, isSmallScreen, isMediumScreen, isLargeScreen } = useResponsive();
  return (
    <Card
      p={isSmallScreen ? '0.5rem' : ''}
      radius="md"
      withBorder
      style={{
        display: 'flex',
        flexDirection: isMediumScreen ? 'row' : 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
        gap: isMediumScreen ? '' : '1rem',
      }}
    >
      <Flex
        direction={isMediumScreen ? 'row' : 'column'}
        justify={isMediumScreen ? 'flex-start' : 'center'}
        align={'center'}
        gap={'xs'}
      >
        <Image
          src="/Status/file_logo.svg"
          alt="File logo"
          w={isMediumScreen ? '15%' : '75px'}
          h={isMediumScreen ? 'auto' : '75px'}
          draggable="false"
        />
        <Text
          ta={isMediumScreen ? 'left' : 'center'}
          fz={isXSmallScreen ? '0.7rem' : isSmallScreen ? '0.8rem' : '1rem'}
          lineClamp={isMediumScreen ? 2 : 3}
        >
          {fileName}
        </Text>
      </Flex>

      <Button
        px={isXSmallScreen ? '0.7rem' : '1rem'}
        component="a"
        href={link}
        target="_blank"
        color="myColor"
        variant="outline"
        w={isMediumScreen ? '' : '100%'}
        radius="999"
        leftSection={isMediumScreen ? '' : <IconDownload />}
      >
        <Text
          fz={isXSmallScreen ? '0.7rem' : isSmallScreen ? '0.8rem' : '1rem'}
          fw={'550'}
          visibleFrom="sm"
        >
          ดาวน์โหลด
        </Text>
        <IconDownload size={'1.5rem'} className="mantine-hidden-from-sm" />
      </Button>
    </Card>
  );
}
