'use client';

import { IconArrowRight, IconDownload } from '@tabler/icons-react';
import { Anchor, Button, Card, Flex, Group, Image, Text } from '@mantine/core';
import { useResponsive } from '@/hooks/useResponsive';

type FileCardProps = {
  fileName: string;
  link: string;
  imageSrc: string;
  iconSrc: string;
};

export function Card_claim({ fileName, link, imageSrc, iconSrc }: FileCardProps) {
  const { isXSmallScreen, isSmallScreen, isMediumScreen, isLargeScreen } = useResponsive();
  return (
    <Card
      component="a"
      href={link}
      p={'0'}
      radius="md"
      withBorder
      // style={{
      //   display: 'flex',
      //   flexDirection: isMediumScreen ? 'row' : 'column',
      //   justifyContent: 'space-between',
      //   alignItems: 'center',
      //   gap: isMediumScreen ? '8px' : '1rem',
      // }}
    >
      <Flex direction={'row'} justify={'flex-start'} align={'center'} gap={'md'} h={200} pr={'md'}>
        <Image
          src={imageSrc}
          alt="claim Image"
          // w={isXSmallScreen ? '24px' : isSmallScreen ? '48px' : isMediumScreen ? '60px' : '75px'}
          // h={isXSmallScreen ? 'auto' : isSmallScreen ? 'auto' : isMediumScreen ? 'auto' : '75px'}
          h={'250px'}
          w={'auto'}
          draggable="false"
        />
        <Flex direction={'column'} justify={'space-between'} w={'100%'} h={'100%'} py={'md'}>
          <Flex direction={'column'}>
            <Image src={iconSrc} w={48}></Image>
            <Text
              fw={'550'}
              ta={'left'}
              fz={isXSmallScreen ? '0.7rem' : isSmallScreen ? '0.8rem' : '1rem'}
              lineClamp={isMediumScreen ? 2 : 3}
              pb={isMediumScreen ? '' : '1rem'}
              maw={isSmallScreen ? '200px' : isMediumScreen ? '' : '100%'}
              w={'100%'}
            >
              {fileName}
            </Text>
          </Flex>

          <Group>
            <Text
              c={'#1F9B90'}
              td="underline"
              fz={isXSmallScreen ? '0.7rem' : isSmallScreen ? '0.8rem' : '1rem'}
              fw={'550'}
              visibleFrom="sm"
            >
              ดูรายละเอียดการเคลม
            </Text>
            <IconArrowRight height={'auto'} color="#1F9B90" />
          </Group>
        </Flex>
      </Flex>
    </Card>
  );
}
