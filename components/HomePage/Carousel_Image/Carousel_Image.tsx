'use client';

import React from 'react';
import { Carousel } from '@mantine/carousel';
import {
  BackgroundImage,
  Box,
  Button,
  Card,
  Center,
  Container,
  Flex,
  Grid,
  Image,
  Paper,
  SimpleGrid,
  Text,
  Title,
} from '@mantine/core';
import { useResponsive } from '@/hooks/useResponsive';
import classes from './Carousel_Image.module.css';

export function Carousel_Image() {
  const { isMediumScreen } = useResponsive();

  const data = [
    {
      image: '/carousel_image/carouselImage_car.svg',
      detail:
        'ด้วยประกันอุบัติเหตุที่ครอบคลุมทั้งจากการขี่รถจักรยานยนตการเดินทางที่จะคุ้มครองคุณตั้งแต่ออกจากบ้าน จนถึงบ้านอย่างปลอดภัย ',
      title: '"อุ่นใจทุกครั้งที่เดินทาง"',
      justifyText: 'flex-start', // Default position
    },
    {
      image: '/carousel_image/carouselImage_ship.svg',
      detail:
        'ด้วยประกันทางทะเลและขนส่งจากไอแคร์ประกันภัย คุ้มครองทุกการขนส่งทั้งทางบก ทะเล และอากาศ ให้ธุรกิจคุณปลอดภัย และมั่นคงทุกเส้นทาง',
      title: '"มั่นใจในทุกการขนส่ง"',
      justifyText: 'flex-end', // This slide's text will be at the bottom
    },
    {
      image: '/carousel_image/carouselImage_house2.svg',
      detail:
        'ไอแคร์ประกันภัยพร้อมดูแลทุกมุมของบ้านและทรัพย์สินของคุณ ไม่ว่าจะเป็นความเสี่ยงจากไฟไหม้ภัยธรรมชาติ หรือการโจรกรรม เราพร้อมคุ้มครองทั้งตัวบ้าน เครื่องใช้ภายใน และทรัพย์สินมีค่า',
      title: '"เพราะบ้านคือที่ที่สำคัญที่สุด"',
      justifyText: 'flex-start', // Default position
    },
  ];

  interface CardProps {
    image: string;
    detail: string;
    title: string;
    justifyText?: string; // New prop for text justification
  }

  function Card({ image, detail, title, justifyText = 'flex-start' }: CardProps) {
    return (
      <Flex
        p="2rem"
        style={{
          backgroundImage: `url(${image})`,
          borderRadius: '25px',
          border: '1px solid #dddddd',
        }}
        className={classes.card}
      >
        <Flex
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: justifyText, // Apply different justification
            height: '100%', // Ensure it takes full height for proper alignment
          }}
        >
          <Title className={classes.title} order={2} ta={'center'} fz={'1.2rem'}>
            {title}
          </Title>
          <Text className={classes.detail} ta={'center'}>
            {detail}
          </Text>
        </Flex>
      </Flex>
    );
  }

  const slides = data.map((item) => (
    <Carousel.Slide key={item.detail}>
      <Card {...item} />
    </Carousel.Slide>
  ));

  return (
    <Flex
      gap={'md'}
      align={'center'}
      justify={'center'}
      direction={'column'}
      w={'100%'}
      h={'100%'}
      hiddenFrom="sm"
      p={'16px'}
    >
      <Carousel
        withControls={false}

        classNames={classes}
        withIndicators
        loop
        w={'100%'}
        slideGap={'16px'}
        styles={{
          indicators: { bottom: '-1.5rem' },
          indicator: { background: '#A7A9AC', width: '10px', height: '10px' },
        }}
      >
        {slides}
      </Carousel>
    </Flex>
  );
}

