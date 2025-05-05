'use client';

import { Flex, Image, Text, Title } from '@mantine/core';
import { useResponsive } from '@/hooks/useResponsive';

export function Content_claim_property() {
  const { isMediumScreen, isSmallScreen, isLargeScreen } = useResponsive();

  return (
    <Flex w={'100%'} justify={'center'} px={isMediumScreen || isLargeScreen ? '16px' : '0'}>
      <Flex
        direction={isMediumScreen ? 'column' : 'row'}
        w={'100%'}
        justify={'space-between'}
        style={{ maxWidth: '1280px' }}
        align={isMediumScreen ? 'center' : ''}
        gap={isMediumScreen ? 'md' : ''}
        //   bg={'red'}
      >
        <Title order={2} fz={'1.65rem'} hiddenFrom="md">
          พันธกิจของเรา
        </Title>
        <Image
          src="/AboutUs/ourMission.svg"
          w={isMediumScreen ? '50%' : '50%'}
          fit="contain"
          //   bg={'blue'}
        />
        <Flex
          // bg={'green'}
          direction={'column'}
          gap={'md'}
          w={isMediumScreen ? '100%' : '50%'}
          justify={isMediumScreen ? 'flex-start' : 'center'}
          align={'left'}
          style={{ maxWidth: '1280px' }}
          pl={isMediumScreen ? '0' : '0'}
          py={isMediumScreen ? 'md' : '0'}
        >
          <Title order={2} fz={'1.65rem'} visibleFrom="md">
            พันธกิจของเรา
          </Title>
          <Text ta={isMediumScreen ? 'center' : 'left'}>
            พวกเรามุ่งเน้นการตอบสนองความต้องการของลูกค้าด้วยผลิตภัณฑ์ประกันภัยและบริการที่สะดวก
            รวดเร็ว ภายใต้กฎระเบียบและกฎหมายที่เกี่ยวข้อง
            เราพัฒนานวัตกรรมประกันภัยและระบบการจัดการที่มีประสิทธิภาพบนฐานข้อมูลขนาดใหญ่
            เพื่อเพิ่มประสิทธิภาพการดำเนินงานและคุณภาพบริการ พร้อมลดค่าใช้จ่าย นอกจากนี้
            เรายังเสริมสร้างสภาพแวดล้อมการทำงานที่ดี และพัฒนาพนักงานให้มีความรู้ ความสามารถ
            และคุณธรรม พร้อมมอบสวัสดิการที่เหมาะสม
          </Text>
        </Flex>
      </Flex>
    </Flex>
  );
}
