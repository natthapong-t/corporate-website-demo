'use client';

import React, { useEffect, useState } from 'react';
import {
  BackgroundImage,
  Box,
  Card,
  Center,
  Flex,
  Grid,
  Image,
  SimpleGrid,
  Text,
  Title,
} from '@mantine/core';
import { useViewportSize } from '@mantine/hooks';
import { useResponsive } from '@/hooks/useResponsive';

export function CarSection() {
  const { isMediumScreen, isLargeScreen } = useResponsive();
  const [svgSize, setSvgSize] = useState<{ width: number; height: number } | null>(null);
  const { width } = useViewportSize();

  useEffect(() => {
    const onGetSvg = async () => {
      try {
        const response = await fetch('/CarSection.svg');
        const parser = new DOMParser();
        const svgText = await response.text();
        const doc = parser.parseFromString(svgText, 'image/svg+xml');
        const svgElement = doc.querySelector('svg');

        if (svgElement) {
          const width = parseFloat(svgElement.getAttribute('width') || '1920');
          const height = parseFloat(svgElement.getAttribute('height') || '1382');
          setSvgSize({ width, height });
        }
      } catch (error) {
        console.error('Error fetching SVG:', error);
      }
    };

    onGetSvg();
  }, []);
  const dynamicHeight = svgSize ? (width * svgSize.height) / svgSize.width : 0;

  return (
    <BackgroundImage src="/CarSection.svg" style={{ zIndex: '-1', position: 'relative' }} visibleFrom='sm'>
      <Flex
        bg={''}
        h={dynamicHeight}
        align={'center'}
        justify={'end'}
        style={{ flexDirection: 'column', alignItems: 'center'}}
        mt={'-5%'}
      >
        <Flex
          px={isMediumScreen || isLargeScreen ? '16px' : '0'}
          w={'100%'}
          h={'100%'}
          direction={'row'}
          align={'center'}
          justify={'space-around'}
          style={{ maxWidth: '1280px' }}        >
          <Flex direction={'column'} gap={'md'} flex={1}>
            <Title order={2} fz={isMediumScreen ? '1.2rem' : '1.65rem'}>
              "อุ่นใจทุกครั้งที่เดินทาง"
            </Title>
            <Text ta={'left'}>
              ด้วยประกันอุบัติเหตุ ที่ครอบคลุมทั้งจากการขี่รถจักรยานยนต์ และประกันภัยการเดินทาง
              ที่จะคุ้มครองคุณตั้งแต่ก้าวแรก ที่ออกจากบ้าน จนกระทั่งกลับถึงบ้านอย่างปลอดภัย
            </Text>
          </Flex>
          <Box bg={' '} w={'100%'} h={'100%'} flex={1} ></Box>
        </Flex>
      </Flex>
    </BackgroundImage>
  );
}


