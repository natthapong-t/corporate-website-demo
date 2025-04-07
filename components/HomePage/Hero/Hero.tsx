'use client';

import { useEffect, useState } from 'react';
import { IconAt, IconSearch } from '@tabler/icons-react';
import cx from 'clsx';
import {
  BackgroundImage,
  Box,
  Button,
  Center,
  Container,
  Flex,
  Image,
  Overlay,
  Paper,
  Select,
  Stack,
  Text,
  TextInput,
  Title,
  useMantineTheme,
} from '@mantine/core';
import { useMediaQuery, useViewportSize } from '@mantine/hooks';
import City from '@/assets/City.svg';
import heroBackground from '@/assets/hero.svg';
import { useResponsive } from '@/hooks/useResponsive';
import { Header } from '../../Header/Header';
import classes from './Hero.module.css';

export function Hero() {
  const icon = <IconSearch size={16} />;
  const [svgSize, setSvgSize] = useState<{ width: number; height: number } | null>(null);
  const { width } = useViewportSize();

  useEffect(() => {
    const onGetSvg = async () => {
      try {
        const response = await fetch('/hero.svg');
        const parser = new DOMParser();
        const svgText = await response.text();
        const doc = parser.parseFromString(svgText, 'image/svg+xml');
        const svgElement = doc.querySelector('svg');

        if (svgElement) {
          const width = parseFloat(svgElement.getAttribute('width') || '0');
          const height = parseFloat(svgElement.getAttribute('height') || '0');
          setSvgSize({ width, height });
        }
      } catch (error) {
        console.error('Error fetching SVG:', error);
      }
    };

    onGetSvg();
  }, []);
  const dynamicHeight = svgSize ? (width * svgSize.height) / svgSize.width : 0;
  const { isMediumScreen } = useResponsive();
  const mih = isMediumScreen ? 450 : 450;

  let gap = 'md';
  if (isMediumScreen) {
    gap = 'sm';
  }

  // console.log('hero height = ' + dynamicHeight);
  return (
    <Box>
      <BackgroundImage
        // bg={'#dddddd'}
        h={dynamicHeight}
        mih={'450px'}
        src="/hero.svg"
        style={{
          zIndex: 2,
          backgroundPosition: 'top center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <Header />

        <Flex
          // bg={'rgba(255, 0, 0, 0.2)'}
          h={dynamicHeight} // 78 is the height of the header
          mih={mih }
          align={'center'}
          justify={'center'}
          style={{ flexDirection: 'column', position: 'relative' }}
        >
          <Stack align="center" gap={gap} mt={isMediumScreen ? '0' : 0}>
            <Title order={1} fz={isMediumScreen ? '1.75rem' : '2.5rem'}>
              <span style={{ color: '#1F9B90' }}>ไอแคร์</span> ประกันภัย
            </Title>
            <Title order={2} fz={isMediumScreen ? '1.2rem' : '2rem'}>
              ประกันที่ใส่ใจ ใกล้ชิดทุกความต้องการ
            </Title>
            <Stack align="center" gap={0}>
              <Text w={'100%'} ta={'center'} fz={'1rem'} maw={600} px={'16px'}>
                ทำให้การประกันภัยเป็นเรื่องง่ายและรวดเร็ว ด้วยประกันภัยที่ออกแบบมาด้วยความใส่ใจ
                ให้คุณลืมความยุ่งยากในแบบเดิม ๆ แล้วมาสัมผัสประสบการณ์ใหม่ในการประกันภัยกับเรา
              </Text>
            </Stack>
            <Button
              h={'2.5em'}
              px={'xl'}
              fz={isMediumScreen ? '1rem' : '1.25rem'}
              radius={999}
              fw={'normal'}
              style={{ width: 'fit-content' }}
              onClick={() => console.log(heroBackground)}
            >
              ค้นหาประกันที่ใช่สำหรับคุณ
            </Button>
          </Stack>

          <Paper
            shadow="md"
            p="xs"
            radius="999"
            style={{
              position: 'absolute', // ทำให้ลอยขึ้นมาจากพื้นหลัง
              bottom: '-2rem', // ปรับให้ครึ่งหนึ่งของแถบอยู่บนพื้นขาว
              left: '50%',
              transform: 'translateX(-50%)',
              display: 'flex',
              maxWidth: '650px',
              zIndex: 10, // ให้ลอยอยู่เหนือพื้นหลัง
              width: '95%',
              justifyContent: 'space-between',
            }}
          >
            <TextInput
              radius="999"
              size="md"
              w="100%"
              maw={600}
              leftSectionPointerEvents="none"
              leftSection={<IconSearch size={18} />}
              placeholder="กรุณาระบุเลขรับแจ้งเคลม"
              // placeholder="กรุณาระบุเลขรับแจ้งเคลม เช่น ICI-2403000004"

              styles={{
                input: {
                  paddingLeft: '3rem',
                  border: 'none',
                  boxShadow: 'none',
                  // backgroundColor: 'transparent',
                },
              }}
            />

            <Button radius="999" size="md" fw={500} w={'auto'}>
              <Text w={'3rem'}>ค้นหา</Text>
            </Button>
          </Paper>
        </Flex>
      </BackgroundImage>
    </Box>
  );
}
