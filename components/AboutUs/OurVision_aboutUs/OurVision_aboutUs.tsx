'use client';

import { useResponsive } from '@/hooks/useResponsive';
import {
    Flex,
    Image,
    Text,
    Title
} from '@mantine/core';

export function OurVision_aboutUs() {
  const { isMediumScreen, isSmallScreen, isLargeScreen } = useResponsive();

  return (
    <Flex w={'100%'} justify={'center'} px={isMediumScreen || isLargeScreen ? '16px' : '0'}>
      <Flex
        direction={isMediumScreen ? 'column-reverse' : 'row'}
        w={'100%'}
        justify={'space-between'}
        maw={'1280px'}
        align={isMediumScreen ? 'center' : ''}
        gap={isMediumScreen ? 'md' : ''}
        //   bg={'red'}
      >
        <Flex
          // bg={'green'}
          direction={'column'}
          gap={'md'}
          w={isMediumScreen ? '100%' : '50%'}
          justify={isMediumScreen ? 'flex-start' : 'center'}
          align={'left'}
          maw={'1280px'}
          pl={isMediumScreen ? '0' : '0'}
          py={isMediumScreen ? 'md' : '0'}
        >
          <Title order={2} fz={'1.65rem'} visibleFrom="md">
            วิสัยทัศน์ของเรา
          </Title>
          <Text ta={isMediumScreen ? 'center' : 'left'}>
            วิสัยทัศน์ของเราคือการเป็นบริษัทประกันภัยที่มุ่งมั่นพัฒนานวัตกรรมอย่างต่อเนื่อง
            เพื่อนำเสนอบริการที่ตอบโจทย์ความต้องการของลูกค้าในทุกด้าน ด้วยความทันสมัยและความใส่ใจ
            เพื่อก้าวสู่การเป็นบริษัทประกันภัยที่อยู่ในใจของทุกคน
          </Text>
        </Flex>

        <Image
          src="/AboutUs/ourVision.svg"
          w={isMediumScreen ? '50%' : '50%'}
          fit="contain"
          //   bg={'blue'}
        />
        <Title order={2} fz={'1.65rem'} hiddenFrom="md">
          วิสัยทัศน์ของเรา
        </Title>
      </Flex>
    </Flex>
  );
}
