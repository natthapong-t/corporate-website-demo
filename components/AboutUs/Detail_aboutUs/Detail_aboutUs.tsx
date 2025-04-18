'use client';

import { Flex, Image, Text, Title } from '@mantine/core';
import { useResponsive } from '@/hooks/useResponsive';

export function Detail_aboutUs() {
  const { isMediumScreen, isSmallScreen, isLargeScreen } = useResponsive();

  const coreValueLogo = [
    { label: 'Innovation', imageSrc: '/AboutUs/corevalue/i.png' },
    { label: 'Customer', imageSrc: '/AboutUs/corevalue/c.png' },
    { label: 'Alliance', imageSrc: '/AboutUs/corevalue/a.png' },
    { label: 'Respect', imageSrc: '/AboutUs/corevalue/r.png' },
    { label: 'Excellent', imageSrc: '/AboutUs/corevalue/e.png' },
  ];
  return (
    <Flex w={'100%'} justify={'center'} px={isMediumScreen || isLargeScreen ? '16px' : '0'}>
      <Flex
        w={'100%'}
        direction={'column'}
        align={'left'}
        style={{ maxWidth: '1280px' }}
        gap={'2rem'}
      >
        <Flex
          direction={isMediumScreen ? 'column' : 'row'}
          w={'100%'}
          justify={'space-between'}
          style={{ maxWidth: '1280px' }}
        >
          <Image
            w={isMediumScreen ? '100%' : '50%'}
            fit="contain"
            radius="10px"
            src="/AboutUs/comsevenBuilding.png"
          />
          <Flex
            direction={'column'}
            gap={'md'}
            w={isMediumScreen ? '100%' : '50%'}
            justify={isMediumScreen ? 'flex-start' : 'center'}
            align={'left'}
            style={{ maxWidth: '1280px' }}
            pl={isMediumScreen ? '0' : 'xl'}
            py={isMediumScreen ? 'md' : '0'}
          >
            <Title order={2} fz={'1.65rem'}>
              ความเป็นมาของเรา
            </Title>
            <Text ta={'left'}>
              บริษัท ไอแคร์ ประกันภัย จำกัด (มหาชน) เป็นผู้ให้บริการเทคโนโลยีประกันภัยที่ครอบคลุม
              ทุกความต้องการ ไม่ว่าจะเป็นประกันสุขภาพ ทรัพย์สิน เดินทาง หรืออุปกรณ์ อิเล็กทรอนิกส์
              ด้วยบริการที่ง่ายและสะดวก เพื่อสร้างประสบการณ์ที่ดีที่สุดให้ลูกค้า
            </Text>
            <Text ta={'left'}>
              เราพร้อมใช้เทคโนโลยีเพื่อพัฒนาบริการที่ครอบคลุมทุกด้าน โดยได้รับการสนับสนุน จากบริษัท
              คอมเซเว่น จำกัด (มหาชน) ผู้ถือหุ้นหลักและผู้นำด้านเทคโนโลยีระดับประเทศ
            </Text>
            <Text ta={'left'}>
              พวกเราไม่ใช่แค่ผู้ให้บริการประกันภัยทั่วไป แต่เรามุ่งมั่นพัฒนานวัตกรรม
              เพื่อก้าวนำสู่บริษัทประกันภัยในใจคุณ
            </Text>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
}
