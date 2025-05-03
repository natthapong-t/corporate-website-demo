'use client';

import React, { useEffect, useState } from 'react';
import { BackgroundImage, Box, Flex, Title } from '@mantine/core';
import { useViewportSize } from '@mantine/hooks';
import { Header } from '@/components/Header/Header';
import { useResponsive } from '@/hooks/useResponsive';

export function Hero_claim_property() {
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

    onGetSvg('/Claim/Property/Hero_claim_property.svg', setSvgSize);
    onGetSvg('/Claim/Hero_claim_mobile.svg', setMobileSvgSize);
  }, []);

  const dynamicHeight = svgSize ? (width * svgSize.height) / svgSize.width : 0;
  const mobileDynamicHeight = mobileSvgSize
    ? (width * mobileSvgSize.height) / mobileSvgSize.width
    : '100%';

  const backgroundImage = isSmallScreen
    ? '/Claim/Hero_claim_mobile.svg'
    : '/Claim/Property/Hero_claim_property.svg';
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
        h={heightValue}
        align={'center'}
        justify={'end'}
        style={{ flexDirection: 'column', alignItems: 'center', gap: '2rem' }}
        mt={isSmallScreen ? '0' : '0'}
      >
        <Flex
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
              flex={isSmallScreen ? 0 : 3}
              align={isSmallScreen ? 'center' : ''}
              justify={'center'}
              direction={'column'}
              h={isSmallScreen ? 'auto' : '100%'}
              px={isSmallScreen ? '16px' : '0'}
              mt={isSmallScreen ? '-2.53333rem' : 0}
            >
              <Title order={2} fz={isMediumScreen ? '1.2rem' : '2rem'}>
                การเคลม
              </Title>
              <Title order={1} fz={isMediumScreen ? '1.75rem' : '2.5rem'}>
                <span style={{ color: '#1F9B90' }}>ประกัน</span>เกี่ยวกับทรัพย์สิน
              </Title>
            </Flex>
          </Flex>
          <Box w={'100%'} h={'100%'} visibleFrom="sm" flex={1}></Box>
        </Flex>
      </Flex>
    </BackgroundImage>
  );
}
