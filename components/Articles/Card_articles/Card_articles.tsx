'use client';

import { IconArrowRight, IconDownload } from '@tabler/icons-react';
import { Anchor, Button, Card, Flex, Group, Image, Text } from '@mantine/core';
import { useResponsive } from '@/hooks/useResponsive';

type ArticleCardProps = {
  articleName: string;
  link: string;
  imageSrc: string;
  description: string;
  date: string;
};

export function Card_articles({
  articleName,
  link,
  imageSrc,
  description,
  date,
}: ArticleCardProps) {
  const { isXSmallScreen, isSmallScreen, isMediumScreen, isLargeScreen } = useResponsive();
  return (
    <Card component="a" href={link} p={'0'} radius="md" withBorder h={'auto'}>
      <Flex
        direction={'column'}
        justify={'flex-start'}
        align={'center'}
        // bg={'red'}
        h={'100%'}
      >
        <Card.Section>
          <Image
            src={imageSrc}
            alt="article image"
            fit="cover"
            h={'275px'}
            w={'100%'}
            draggable="false"
          />
        </Card.Section>

        <Flex
          gap={isSmallScreen ? 'xs' : 'md'}
          direction={'column'}
          w={'100%'}
          h={'auto'}
          p={isSmallScreen ? 'xs' : 'md'}
          // bg={'orange'}
        >
          <Flex
            direction={'column'}
            gap={isSmallScreen ? 0 : 'xs'}
            // bg={'yellow'}
          >
            <Text
              fw={'550'}
              ta={'left'}
              // fz={isXSmallScreen ? '0.7rem' : isSmallScreen ? '0.8rem' : '1rem'}
              lineClamp={2}
              w={'100%'}
            >
              {articleName}
            </Text>
            <Text c={'dimmed'} fz={isXSmallScreen ? '0.7rem' : isSmallScreen ? '0.8rem' : '1rem'}>
              {date}
            </Text>
            <Text
              ta={'left'}
              // fz={isXSmallScreen ? '0.7rem' : isSmallScreen ? '0.8rem' : '1rem'}
              lineClamp={3}
              w={'100%'}
            >
              {description}
            </Text>
          </Flex>

          {/* อ่านต่อ */}
          <Group
            // bg={'lime'}
            gap={'xs'}
            justify="flex-end"
          >
            <Text
              c={'#1F9B90'}
              // fz={isXSmallScreen ? '0.7rem' : isSmallScreen ? '0.8rem' : '1rem'}
              fw={'550'}
            >
              อ่านต่อ
            </Text>
            <IconArrowRight
              height={isXSmallScreen ? '16px' : isSmallScreen ? '20px' : 'auto'}
              color="#1F9B90"
            />
          </Group>
        </Flex>
      </Flex>
    </Card>
  );
}
