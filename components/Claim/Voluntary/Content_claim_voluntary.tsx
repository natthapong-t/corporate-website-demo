'use client';

import { IconDownload } from '@tabler/icons-react';
import { Anchor, Button, Card, Flex, Image, List, Text, Title } from '@mantine/core';
import { useResponsive } from '@/hooks/useResponsive';

export function Content_claim_voluntary() {
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
              <List.Item>ใบเคลมฟอร์ม/บันทึกความเสียหาย</List.Item>
              <List.Item>สำเนาใบขับขี่ของผู้ขับขี่ ณ วันที่เกิดเหตุ</List.Item>
              <List.Item>สำเนาหน้าตารางกรมธรรม์</List.Item>
              <List.Item>สำเนาบัตรประชาชนผู้เอาประกัน</List.Item>
              <List.Item>สำเนาทะเบียนรถ</List.Item>
              <List.Item>
                รูปถ่ายและเอกสารอื่นๆ เช่น กรณีบาดเจ็บต้องมีใบรับรองแพทย์และใบเสร็จรับเงินต้นฉบับ
                หรือแบบฟอร์มการเรียกร้องสินไหม
              </List.Item>
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
              <List.Item>
                ขั้นตอนการเคลม
                <List w={'90%'}>
                  <List.Item>โทรแจ้งอุบัติเหตุที่ศูนย์รับแจ้งเหตุ เบอร์ 02-480-9921</List.Item>
                  <List.Item>
                    กรณีมีคู่กรณี
                    ทางบริษัทจะส่งเจ้าหน้าที่ออกไปตรวจสอบช่วยเหลือและบันทึกความเสียหายที่เกิดขึ้น
                  </List.Item>
                  <List.Item>
                    นำเอกสารบันทึกความเสียหายหรือเลขอุบัติเหตุ ติดต่ออู่หรือศูนย์ในเครือ
                  </List.Item>
                  <List.Item>บริษัทประกันภัยอนุมัติการซ่อม</List.Item>
                  <List.Item>อู่หรือศูนย์ติดต่อลูกค้าเพื่อนัดหมายเข้าซ่อม</List.Item>
                </List>
              </List.Item>
              <List.Item>
                ขั้นตอนการแจ้งเคลม
                <List w={'90%'}>
                  <List.Item>แจ้งทะเบียนหรือเลขกรมธรรม์</List.Item>
                  <List.Item>แจ้งวัน เวลา และสถานที่เกิดอุบัติเหตุ</List.Item>
                  <List.Item>แจ้งลักษณะการเกิดเหตุและความเสียหาย</List.Item>
                  <List.Item>กรณีมีคู่กรณี ต้องแจ้งทะเบียนรถคู่กรณี ยี่ห้อรถ ฯลฯ</List.Item>
                  <List.Item>
                    กรณีมีคนเจ็บหลังจากแจ้งเหตุแล้วให้โทรแจ้งเจ้าหน้าที่ตำรวจที่เบอร์ 191
                  </List.Item>
                </List>
              </List.Item>
            </List>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
}
