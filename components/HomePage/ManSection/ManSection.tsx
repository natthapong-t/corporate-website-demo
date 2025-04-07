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

export function ManSection() {
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

    onGetSvg('/ManSection2.svg', setSvgSize);
    onGetSvg('/ManSection_MobileBG.svg', setMobileSvgSize);
  }, []);

  const dynamicHeight = svgSize ? (width * svgSize.height) / svgSize.width : 0;
  const mobileDynamicHeight = mobileSvgSize
    ? (width * mobileSvgSize.height) / mobileSvgSize.width
    : '100%';

  const backgroundImage = isSmallScreen ? '/ManSection_MobileBG.svg' : '/ManSection2.svg';
  const heightValue = isSmallScreen ? mobileDynamicHeight : dynamicHeight;

  console.log('man section bg height = ' + dynamicHeight);
  console.log('mobile man section bg height = ' + mobileDynamicHeight);
  console.log('heightValue = ' + heightValue);
  return (
    <BackgroundImage
      // bg={'red'}
      mt={isSmallScreen ? '-30%' : '-16%'}
      src={backgroundImage}
      style={{
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        width: '100%',
        height: heightValue,
      }}
    >
      <Flex
        // bg={'rgba(84, 255, 246, 0.6)'}
        h={heightValue}
        align={'center'}
        justify={'end'}
        style={{ flexDirection: 'column', alignItems: 'center' }}
      >
        <Flex
          // bg={'green'}
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
          <Image src={'/ManSection_Character.svg'} hiddenFrom="sm" w={'50%'} h={'auto'}></Image>
          <Box w={'100%'} h={'100%'} visibleFrom="sm" flex={1}></Box>
          <Flex direction={'column'} h={'100%'} flex={isSmallScreen ? 0 : 1}>
            <Flex
              visibleFrom="sm"
              flex={1}
              // bg={'yellow'}
            ></Flex>
            <Flex
              // bg={'indigo'}
              flex={isSmallScreen ? 0 : 3}
              align={isSmallScreen ? 'center' : ''}
              justify={'center'}
              direction={'column'}
              h={isSmallScreen ? 'auto' : '100%'}
              gap={isSmallScreen || isMediumScreen ? 'sm' : 'md'}
              px={isSmallScreen ? '16px' : '0'}
            >
              <Title
                order={2}
                ta={isSmallScreen ? 'center' : 'left'}
                fz={isMediumScreen ? '1.2rem' : '1.65rem'}
              >
                "ทันสมัย ใส่ใจทุกความต้องการ"
              </Title>
              <Text
                ta={isSmallScreen ? 'center' : 'left'}
                lineClamp={isSmallScreen ? 3 : isMediumScreen ? 4 : 0}
              >
                ด้วยความเชี่ยวชาญทางเทคโนโลยีและการประกันภัย
                เรามุ่งมั่นออกแบบประกันที่ตอบโจทย์ความต้องการที่หลากหลายของลูกค้า
                โดยคุณจะได้สัมผัสประสบการณ์ใหม่ที่ออกแบบมาเพื่อคุณโดยเฉพาะ
              </Text>
              <Button
                fullWidth={isSmallScreen}
                h={'2.5em'}
                px={'xl'}
                fz={isMediumScreen ? '1rem' : '1.25rem'}
                radius={999}
                fw={'normal'}
                style={isSmallScreen ? {} : { width: 'fit-content' }}
              >
                เกี่ยวกับเรา
              </Button>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </BackgroundImage>
  );
}
