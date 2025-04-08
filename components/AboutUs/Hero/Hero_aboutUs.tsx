'use client';

import React, { useEffect, useRef, useState } from 'react';
import Lottie from 'lottie-react';
import {
  BackgroundImage,
  Box,
  Button,
  Card,
  Center,
  Flex,
  Grid,
  Image,
  rgba,
  SimpleGrid,
  Text,
  Title,
} from '@mantine/core';
import { useViewportSize } from '@mantine/hooks';
import { useResponsive } from '@/hooks/useResponsive';
import { Header } from '../../Header/Header';

function Hero_aboutUs() {
  const { isMediumScreen, isSmallScreen, isLargeScreen } = useResponsive();
  const [svgSize, setSvgSize] = useState<{ width: number; height: number } | null>(null);
  const [mobileSvgSize, setMobileSvgSize] = useState<{ width: number; height: number } | null>(
    null
  );
  const { width } = useViewportSize();

  useEffect(() => {
    const onGetSvg = async (
      svgPath: string,
      setSize: React.Dispatch<React.SetStateAction<{ width: number; height: number } | null>>
    ) => {
      try {
        const response = await fetch(svgPath);
        const parser = new DOMParser();
        const svgText = await response.text();
        const doc = parser.parseFromString(svgText, 'image/svg+xml');
        const svgElement = doc.querySelector('svg');

        if (svgElement) {
          const width = parseFloat(svgElement.getAttribute('width') || '');
          const height = parseFloat(svgElement.getAttribute('height') || '');
          setSize({ width, height });
        }
      } catch (error) {
        console.error(`Error fetching SVG (${svgPath}):`, error);
      }
    };

    onGetSvg('/AboutUs/Hero_aboutUs.svg', setSvgSize);
    onGetSvg('/AboutUs/Hero_aboutUs_mobile.svg', setMobileSvgSize);
  }, []);

  const dynamicHeight = svgSize ? (width * svgSize.height) / svgSize.width : 0;
  const mobileDynamicHeight = mobileSvgSize
    ? (width * mobileSvgSize.height) / mobileSvgSize.width
    : '100%';

  const backgroundImage = isSmallScreen
    ? '/AboutUs/Hero_aboutUs_mobile.svg'
    : '/AboutUs/Hero_aboutUs.svg';
  const heightValue = isSmallScreen ? mobileDynamicHeight : dynamicHeight;

  console.log('bg height = ' + dynamicHeight);
  //   console.log('mobile man section bg height = ' + mobileDynamicHeight);
  return (
    <BackgroundImage
      src={backgroundImage}
      style={{
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        width: '100%',
        height: heightValue,
      }}
    >
      <Header />
      <Flex
        // bg={'cyan'}
        h={heightValue}
        align={'center'}
        justify={'end'}
        style={{ flexDirection: 'column', alignItems: 'center', gap: '2rem' }}
        mt={isSmallScreen ? '0' : '0'}
      >
        <Flex
          // bg={'red'}
          gap={isSmallScreen ? 'sm' : ''}
          px={isMediumScreen || isLargeScreen ? '16px' : '0'}
          pb={isSmallScreen ? '10%' : ''}
          w={'100%'}
          h={'100%'}
          direction={isSmallScreen ? 'column' : 'row'}
          align={'center'}
          justify={isSmallScreen ? 'flex-end' : 'space-around'}
          maw={isSmallScreen ? '100%' : '1280px'}
        >
          <Flex direction={'column'} h={'100%'} flex={isSmallScreen ? 1 : 1} justify={'center'}>
            <Flex
              // bg={'indigo'}
              flex={isSmallScreen ? 0 : 3}
              align={isSmallScreen ? 'center' : ''}
              justify={'center'}
              direction={'column'}
              h={isSmallScreen ? 'auto' : '100%'}
              px={isSmallScreen ? '16px' : '0'}
               mt={isSmallScreen ? '-1rem' : 0}
            >
              <Title order={2} fz={isMediumScreen ? '1.2rem' : '2rem'}>
                เกี่ยวกับเรา
              </Title>
              <Title order={1} fz={isMediumScreen ? '1.75rem' : '2.5rem'}>
                <span style={{ color: '#1F9B90' }}>ไอแคร์</span> ประกันภัย
              </Title>
            </Flex>
          </Flex>
          <Box
            w={'100%'}
            h={'100%'}
            visibleFrom="sm"
            flex={1}
            // bg={'blue'}
          ></Box>
        </Flex>
      </Flex>
    </BackgroundImage>
  );
}

export default Hero_aboutUs;
