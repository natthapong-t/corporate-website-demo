'use client';

import { IconDownload } from '@tabler/icons-react';
import { Anchor, Button, Card, Flex, Image, List, Text, Title } from '@mantine/core';
import { useResponsive } from '@/hooks/useResponsive';

export function Content_claim_compulsory() {
  const { isMediumScreen, isSmallScreen, isLargeScreen, isXSmallScreen } = useResponsive();

  return (
    <Flex w={'100%'} justify={'center'} px={isMediumScreen || isLargeScreen ? '16px' : '0'}>
      <Flex
        direction={'column'}
        w={'100%'}
        justify={'space-between'}
        style={{ maxWidth: '1280px' }}
        align={'center'}
        gap={'xl'}
        // bg={'red'}
      >
        <Title
          order={2}
          fz={'1.65rem'}
          // fz={isXSmallScreen ? '1.4rem' : '1.65rem'}
          ta={'center'}
        >
          วิธีดำเนินการและระยะเวลาที่ใช้
        </Title>

        <Flex
          gap={'xl'}
          direction={'column'}
          w={'100%'}
          align={'left'}
          style={{ maxWidth: '1280px' }}
          pl={isMediumScreen ? '0' : '0'}
        >
          {/* เอกสารที่ต้องใช้ */}
          <Flex
            direction={'column'}
            w={'100%'}
            align={'left'}
            style={{ maxWidth: '1280px' }}
            gap={'md'}
          >
            <Title order={3} fz={'1.25rem'}>
              เอกสารที่ต้องใช้
            </Title>
            <List withPadding w={'95%'}>
              <List.Item>ภาพหลักฐานรถที่เกิดอุบัติเหตุ</List.Item>
              <List.Item>บัตรประชาชนประกัน</List.Item>
              <List.Item>สำเนาทะเบียนรถ</List.Item>
            </List>
          </Flex>

          {/* ขั้นตอนการดำเนินการ */}
          <Flex
            direction={'column'}
            w={'100%'}
            align={'left'}
            style={{ maxWidth: '1280px' }}
            gap={'md'}
          >
            <Title order={3} fz={'1.25rem'}>
              ขั้นตอนการดำเนินการ
            </Title>
            <List withPadding w={'95%'}>
              <List.Item>จดทะเบียนรถหรือถ่ายภาพรถคันที่เกิดอุบัติเหตุ</List.Item>
              <List.Item>รีบนำผู้บาดเจ็บส่งโรงพยาบาลที่ใกล้ที่สุด</List.Item>
              <List.Item>
                แจ้งบริษัทกลางฯ 1791 หรือศูนย์รับแจ้ง 24 ชั่วโมง 02-4809921 หรือแจ้งตำรวจ
              </List.Item>
              <List.Item>
                ให้แสดงบัตรประชาชน และแจ้งข้อมูลทะเบียนรถ
                คันที่ก่อเหตุที่ทำให้ได้รับความเสียหายนั้นแก่โรงพยาบาล
              </List.Item>
              <List.Item>
                สิทธิของผู้ประสบภัยจากรถ จะได้รับการคุ้มครองตาม พ.ร.บ. หากรถคันที่เกิดเหตุมีประกัน
                ผู้บาดเจ็บไม่ต้องสำรองจ่ายค่ารักษาพยาบาล
              </List.Item>
              <List.Item>
                สอบถามข้อมูลความคุ้มครองของ พ.ร.บ. ติดต่อ Call Center บริษัทกลางฯ โทร. 1791 และ
                ศูนย์รับแจ้ง 24 ชั่วโมง 02-4809921
              </List.Item>
            </List>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
}
