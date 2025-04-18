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

export function HouseSection() {
  const [svgSize, setSvgSize] = useState<{ width: number; height: number } | null>(null);
  const { width } = useViewportSize();
  const { isMediumScreen, isLargeScreen } = useResponsive();

  useEffect(() => {
    const onGetSvg = async () => {
      try {
        const response = await fetch('/HouseSection.svg');
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
    <BackgroundImage
      src="/HouseSection.svg"
      style={{ zIndex: '-1', position: 'relative' }}
      visibleFrom="sm"
    >
      <Flex
        bg={''}
        h={dynamicHeight}
        align={'center'}
        justify={'end'}
        style={{ flexDirection: 'column', alignItems: 'center', gap: '2rem' }}
        mt={'-5%'}
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
          <Flex direction={'column'} gap={'md'} flex={1}>
            <Title order={2} fz={isMediumScreen ? '1.2rem' : '1.65rem'}>
              "เพราะบ้านคือที่ที่สำคัญที่สุด"
            </Title>
            <Text ta={'left'}>
              ไอแคร์ประกันภัยพร้อมดูแลทุกมุมของบ้านและทรัพย์สินของคุณ
              ไม่ว่าจะเป็นความเสี่ยงจากไฟไหม้ ภัยธรรมชาติ หรือการโจรกรรม เราพร้อมคุ้มครองทุกอย่าง
              ทั้งตัวบ้าน เครื่องใช้ภายใน และทรัพย์สินมีค่า
            </Text>
          </Flex>
          <Box w={'100%'} h={'100%'} flex={1}></Box>
        </Flex>
      </Flex>
    </BackgroundImage>
  );
}
