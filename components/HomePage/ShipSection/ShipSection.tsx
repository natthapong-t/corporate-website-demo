'use client';

import React, { useEffect, useState } from 'react';
import Ship from '/ShipSection.svg';
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

export function ShipSection() {
  const { isMediumScreen, isLargeScreen, isXLargeScreen } = useResponsive();
  const [svgSize, setSvgSize] = useState<{ width: number; height: number } | null>(null);
  const { width } = useViewportSize();

  useEffect(() => {
    const onGetSvg = async () => {
      try {
        const response = await fetch('/ShipSection.svg');
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

  console.log('ship height = ' + dynamicHeight);
  return (
    <BackgroundImage
      visibleFrom="sm"
      src="/ShipSection.svg"
      style={{ zIndex: '0', position: 'relative' }}
      h={dynamicHeight}
    >
      <Flex
        h={'100%'}
        align={'center'}
        justify={'end'}
        style={{ flexDirection: 'column', alignItems: 'center' }}
        mt={isXLargeScreen ? '-8.5%' : '-7.6%'}
      >
        <Flex
          w={'100%'}
          h={'100%'}
          direction={'row'}
          align={'center'}
          justify={'space-around'}
          style={{ maxWidth: '1280px' }}
          px={isMediumScreen || isLargeScreen ? '16px' : '0'}
        >
          <Box w={'100%'} h={'100%'} flex={1}></Box>
          <Flex direction={'column'} gap={'md'} flex={1}>
            <Title order={2} fz={isMediumScreen ? '1.2rem' : '1.65rem'}>
              "มั่นใจในทุกการขนส่ง"
            </Title>
            <Text ta={'left'}>
              ด้วยประกันภัยทางทะเลและขนส่งจากไอแคร์ประกันภัย ไม่ว่าจะขนส่งทางบก ทางทะเล ทางอากาศ
              ทางรถยนต์ รถไฟ เรือ และเครื่องบิน ประกันพร้อมให้ ความคุ้มครองเมื่อเกิดความเสียหายใด ๆ
              ในระหว่างการขนส่ง คุ้มครอง ธุรกิจการค้าขายระหว่างประเทศให้คุณอุ่นใจเสมอ
            </Text>
          </Flex>
        </Flex>
      </Flex>
    </BackgroundImage>
  );
}
