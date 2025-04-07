'use client';

import React, { useEffect, useState } from 'react';
import { IconArrowUpRight, IconExternalLink } from '@tabler/icons-react';
import Ship from '/CTASection.svg';
import {
  BackgroundImage,
  Box,
  Button,
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

export function CTASection() {
  const { isSmallScreen, isMediumScreen, isLargeScreen } = useResponsive();
  const [svgSize, setSvgSize] = useState<{ width: number; height: number } | null>(null);
  const { width } = useViewportSize();

  const backgroundImage = isSmallScreen ? '/CTASection_mobile.svg' : '/CTASection.svg';
  useEffect(() => {
    const onGetSvg = async () => {
      try {
        const response = await fetch('/CTASection.svg');
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
      src={backgroundImage}
      style={{
        zIndex: '0',
        position: 'relative',
        backgroundSize: 'contain',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        width: '100%',
      }}
      h={isSmallScreen ? '85vh' : dynamicHeight}
      // h={dynamicHeight}
    >
      <Flex
        h={'100%'}
        align={'center'}
        justify={'end'}
        style={{ flexDirection: 'column', alignItems: 'center' }}
        mt={isSmallScreen ? '1rem' : '-5%'}
      >
        <Flex
          gap={'md'}
          w={'100%'}
          h={'100%'}
          direction={'column'}
          align={'center'}
          justify={'center'}
        >
          <Title order={2} fz={isMediumScreen ? '1.2rem' : '1.65rem'} c={'#1F9B90'}>
            เริ่มสนใจประกันภัยของเราแล้วใช่ไหม?
          </Title>
          <Text fw={'normal'}>คลิกเพื่อดูผลิตภัณฑ์ประกันภัยอื่นๆของเรา</Text>

          <Button
            h={'2.5em'}
            pr={'xs'}
            pl={'md'}
            fz={isMediumScreen ? '1rem' : '1.25rem'}
            radius={10}
            fw={'normal'}
            style={isSmallScreen ? {} : { width: 'fit-content' }}
          >
            ผลิตภัณฑ์ทั้งหมด
            <IconArrowUpRight stroke={2} style={{ marginLeft: '8px' }} />
          </Button>
        </Flex>
      </Flex>
    </BackgroundImage>
  );
}


