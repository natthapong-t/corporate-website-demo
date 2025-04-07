'use client';

import { Box, Flex, Image, Title } from '@mantine/core';
import { useResponsive } from '@/hooks/useResponsive';

const logos = ['BNN.png', 'comseven.png', 'UFUND.png'];

export function Carousel_Partner() {
  const { isMediumScreen } = useResponsive();

  return (
    <Flex gap={'md'} style={{ flexDirection: 'column', alignItems: 'center' }} mt={'4rem'}>
      <Title order={2} fz={isMediumScreen ? '1.2rem' : '1.65rem'} >พันธมิตรทางธุรกิจของเรา</Title>
      <Box
        style={{ overflow: 'hidden', whiteSpace: 'nowrap', width: '100%', flexDirection: 'row' }}
        display={'flex'}
      >
        <Box
          style={{
            display: 'flex',
            gap: '2rem',
            animation: 'scroll  30s  linear infinite',
          }}
        >
          {[...logos, ...logos, ...logos, ...logos, ...logos, ...logos].map((src, index) => (
            <Image
              key={index}
              src={src}
              alt={`Logo ${index}`}
              width={isMediumScreen ? 120 : 150}
              height={isMediumScreen ? 40 : 50}
              // style={{ filter: 'grayscale(100%)' }}
            />
          ))}
        </Box>

        {/* CSS Animation */}

        <style>
          {`
          @keyframes scroll {
            0% {
                transform: translateX(0%);
            }
            100% {
                transform: translateX(-100%);
            }
          }
        `}
        </style>
      </Box>
    </Flex>
  );
}
