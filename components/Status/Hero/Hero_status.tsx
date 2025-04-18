'use client';

import React, { useEffect, useState } from 'react';
import { BackgroundImage, Box, Flex, Title } from '@mantine/core';
import { useViewportSize } from '@mantine/hooks';
import { useResponsive } from '@/hooks/useResponsive';
import { Header } from '../../Header/Header';

export function Hero_status() {
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

    onGetSvg('/Status/Hero_status.svg', setSvgSize);
    onGetSvg('/Status/Hero_status_mobile.svg', setMobileSvgSize);
  }, []);

  const dynamicHeight = svgSize ? (width * svgSize.height) / svgSize.width : 0;
  const mobileDynamicHeight = mobileSvgSize
    ? (width * mobileSvgSize.height) / mobileSvgSize.width
    : '100%';

  const backgroundImage = isSmallScreen
    ? '/Status/Hero_status_mobile.svg'
    : '/Status/Hero_status.svg';
  const heightValue = isSmallScreen ? mobileDynamicHeight : dynamicHeight;

  console.log('bg height = ' + dynamicHeight);
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
          style={isSmallScreen ? { maxWidth: '100%' } : { maxWidth: '1280px' }}
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
              mt={isSmallScreen ? '-2.53333rem' : 0}
            >
              <Title order={1} fz={isMediumScreen ? '1.75rem' : '2.5rem'}>
                <span style={{ color: '#1F9B90' }}>ฐานะ</span>ทางการเงิน
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
