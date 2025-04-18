'use client';

import React from 'react';
import { Carousel } from '@mantine/carousel';
import { Card, Center, Flex, Grid, Image, SimpleGrid, Text, Title } from '@mantine/core';
import { useResponsive } from '@/hooks/useResponsive';
import classes from './OurProduct.module.css';

export function OurProduct() {
  const { isMediumScreen, isLargeScreen } = useResponsive();

  const products = [
    { label: 'ประกันทรัพย์สิน', imageSrc: '/product_logo/building_logo.png' },
    { label: 'ประกันอุบัติเหตุ', imageSrc: '/product_logo/accident_logo.png' },
    { label: 'ประกันการเดินทาง', imageSrc: '/product_logo/travel_logo.png' },
    { label: 'ประกันความเสี่ยงภัยทุกชนิด', imageSrc: '/product_logo/factory_logo.png' },
    { label: 'ประกันทางทะเลและขนส่ง', imageSrc: '/product_logo/ship_logo.png' },
    { label: 'ประกันภัย พรบ.', imageSrc: '/product_logo/car_logo.png' },
    { label: 'ประกันเช่าจักรยานยนต์', imageSrc: '/product_logo/bike_logo.png' },
    { label: 'ประกันแรงงานต่างชาติ', imageSrc: '/product_logo/passport_logo.png' },
  ];

  return (
    <Flex
      gap={'md'}
      align={'center'}
      justify={'center'}
      direction={'column'}
      style={{ alignItems: 'center' }}
      mt={'3.5%'}
    >
      <Title order={2} fz={isMediumScreen ? '1.2rem' : '1.65rem'}>
        ผลิตภัณฑ์ของเรา
      </Title>

      {/* desktop version */}
      <SimpleGrid
        // bg={'red'}
        cols={4}
        w="100%"
        style={{ maxWidth: '1280px' }}
        spacing="xs"
        visibleFrom="md"
        px={isMediumScreen || isLargeScreen ? '16px' : '0'}
      >
        {products.map((product, index) => (
          <Flex
            key={index}
            gap={'xs'}
            w={'100%'}
            h={'25vh'}
            bg={'rgba(255, 255, 255, 0.6)'}
            direction={'column'}
            align={'center'}
            justify={'center'}
            style={{
              backdropFilter: 'blur(5px)',
              borderRadius: '10px',
              border: '1px solid #f2f2f2',
              boxShadow: '0px 4px 100px rgba(0, 0, 0, 0.05)',
            }}
          >
            <Image w={'70px'} radius="10px" src={product.imageSrc} />
            <Text ta={'center'}>{product.label}</Text>
          </Flex>
        ))}
      </SimpleGrid>

      {/* mobile version */}
      <Carousel
        withControls={false}
        classNames={classes}
        loop
        withIndicators
        hiddenFrom="md"
        w={'100%'}
        px={'16px'}
        styles={{
          indicators: { bottom: '-1.5rem' },
          indicator: { background: '#A7A9AC', width: '10px', height: '10px' },
        }}
      >
        <Carousel.Slide>
          <SimpleGrid cols={2} w="100%" spacing="xs">
            {products.slice(0, 4).map((product, index) => (
              <Flex
                key={index}
                gap={'xs'}
                w={'100%'}
                h={'12rem'}
                bg={'rgba(255, 255, 255, 0.6)'}
                direction={'column'}
                align={'center'}
                justify={'center'}
                style={{
                  backdropFilter: 'blur(5px)',
                  borderRadius: '10px',
                  border: '1px solid #f2f2f2',
                  boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.03)',
                }}
              >
                <Image w={'70px'} radius="10px" src={product.imageSrc} />
                <Text ta={'center'}>{product.label}</Text>
              </Flex>
            ))}
          </SimpleGrid>
        </Carousel.Slide>

        <Carousel.Slide>
          <SimpleGrid cols={2} w="100%" spacing="xs">
            {products.slice(-4).map((product, index) => (
              <Flex
                key={index}
                gap={'xs'}
                w={'100%'}
                h={'12rem'}
                bg={'rgba(255, 255, 255, 0.6)'}
                direction={'column'}
                align={'center'}
                justify={'center'}
                style={{
                  backdropFilter: 'blur(5px)',
                  borderRadius: '10px',
                  border: '1px solid #f2f2f2',
                  boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.03)',
                }}
              >
                <Image w={'70px'} radius="10px" src={product.imageSrc} />
                <Text ta={'center'}>{product.label}</Text>
              </Flex>
            ))}
          </SimpleGrid>
        </Carousel.Slide>
      </Carousel>
    </Flex>
  );
}
