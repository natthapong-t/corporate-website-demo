'use client';

import { IconDownload } from '@tabler/icons-react';
import { Anchor, Button, Card, Flex, Image, List, Text, Title } from '@mantine/core';
import { useResponsive } from '@/hooks/useResponsive';

export function Content_claim_bike() {
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
              <List.Item>แบบฟอร์มการเรียกร้องค่าสินไหมทดแทน</List.Item>
              <List.Item>
                ต้นฉบับ ชุดโอน หนังสือมอบอำนาจ, หนังสือรับรองบริษัท สำเนาบัตรประชาชน
                และสำเนาทะเบียนบ้านผู้มีอำนาจลงนาม (รับรองสำเนาถูกต้อง)
              </List.Item>
              <List.Item>
                ต้นฉบับ หนังสือมอบอำนาจให้ติดตามรถคืน, หนังสือสละสิทธิ์, หนังสือรับช่วงสิทธิ
              </List.Item>
              <List.Item>ต้นฉบับ สมุดคู่มือเล่มทะเบียน (แจ้งยกเลิกการใช้รถ)</List.Item>
              <List.Item>สำเนาสัญญาเช่าซื้อ, สำเนาการ์ดชำระค่าเช่าซื้อ</List.Item>
              <List.Item>กุญแจรถ</List.Item>
              <List.Item>ใบสำคัญการปิดบัญชี (หนี้คงค้างไม่รวมดอกเบี้ย)</List.Item>
              <List.Item>สำเนาหนังสือรับรองการเอาประกันภัย</List.Item>
              <List.Item>
                สำเนาบัตรประชาชน และสำเนาทะเบียนบ้านของผู้เช่าซื้อ พร้อมรับรองสำเนาถูกต้อง
              </List.Item>
              <List.Item>
                สำเนาบันทึกประจำวันข้อแจ้งเหตุเบื้องต้นและรับคำร้องทุกข์ลงเลขคดีอาญาแล้ว
              </List.Item>
              <List.Item>เอกสารอื่น ๆ ตามที่บริษัทร้องขอ</List.Item>
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
                ติดต่อฝ่ายสินไหมทางหมายเลขโทรศัพท์ 0-2105-4689 ต่อสินไหม 1102 หรือ 3401
              </List.Item>
              <List.Item>กรอกรายละเอียดแบบเรียกร้อง</List.Item>
              <List.Item>
                ส่งเอกสาร ทางไปรษณีย์ ที่ฝ่ายสินไหมทั่วไปตามที่อยู่ 549/1 ชั้นที่ 1 ถนนสรรพาวุธ
                แขวงบางนาใต้ เขตบางนา กรุงเทพมหานคร (10260)
              </List.Item>
              <List.Item>
                ส่งเอกสารผ่านทางอีเมล{' '}
                <Anchor
                  href="mailto:boonua.b@icare-insurance.com"
                  target="_blank"
                  underline="hover"
                >
                  boonua.b@icare-insurance.com
                </Anchor>{' '}
                หรือ{' '}
                <Anchor
                  href="mailto:pornpetch.c@icare-insurance.com"
                  target="_blank"
                  underline="hover"
                >
                  pornpetch.c@icare-insurance.com
                </Anchor>{' '}
              </List.Item>
            </List>
          </Flex>

          {/* ระยะเวลา */}
          <Flex
            direction={'column'}
            w={'100%'}
            align={'left'}
            style={{ maxWidth: '1280px' }}
            gap={'md'}
          >
            <Title order={3} fz={'1.25rem'}>
              ระยะเวลา
            </Title>
            <List withPadding w={'95%'}>
              <List.Item>
                ระยะเวลาการอนุมัติจ่ายค่าสินไหมทดแทนให้แก่ผู้เอาประกันภัยภายใน 15
                วันนับแต่วันที่บริษัท ได้ตกลงค่าสินไหมทดแทนเป็นที่ยุติแล้ว
                และบริษัทได้รับเอกสารแสดงความเสียหายที่ครบถ้วน
              </List.Item>
            </List>
          </Flex>

          {/* แบบฟอร์มเรียกร้องค่าสินไหม */}
          <Flex
            direction={'column'}
            w={'100%'}
            align={'left'}
            style={{ maxWidth: '1280px' }}
            gap={'md'}
          >
            <Title order={3} fz={'1.25rem'}>
              แบบฟอร์มเรียกร้องค่าสินไหม
            </Title>
            <Card
              w={isMediumScreen ? '100%' : '25%'}
              p={isSmallScreen ? '0.5rem' : ''}
              radius="md"
              withBorder
              style={{
                display: 'flex',
                flexDirection: isMediumScreen ? 'row' : 'column',
                justifyContent: 'space-between',
                alignItems: 'center',
                gap: isMediumScreen ? '8px' : '1rem',
              }}
            >
              <Flex
                direction={isMediumScreen ? 'row' : 'column'}
                justify={isMediumScreen ? 'flex-start' : 'center'}
                align={'center'}
                gap={'xs'}
              >
                <Image
                  src="/Status/file_logo.svg"
                  alt="File logo"
                  w={
                    isXSmallScreen
                      ? '24px'
                      : isSmallScreen
                        ? '48px'
                        : isMediumScreen
                          ? '60px'
                          : '75px'
                  }
                  h={
                    isXSmallScreen
                      ? 'auto'
                      : isSmallScreen
                        ? 'auto'
                        : isMediumScreen
                          ? 'auto'
                          : '75px'
                  }
                  draggable="false"
                />
                <Text
                  ta={isMediumScreen ? 'left' : 'center'}
                  fz={isXSmallScreen ? '0.7rem' : isSmallScreen ? '0.8rem' : '1rem'}
                  lineClamp={isMediumScreen ? 2 : 3}
                  pb={isMediumScreen ? '' : '1rem'}
                  maw={isSmallScreen ? '200px' : isMediumScreen ? '' : '100%'}
                  w={'100%'}
                  // h={isSmallScreen ? '2rem' : ''}
                  style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
                >
                  หนังสือเรียกร้องค่าสินไหมทดแทนสำหรับสินค้าเช่าซื้อ ประเภทรถจักรยานยนต์
                </Text>
              </Flex>

              <Button
                px={isXSmallScreen ? '0.7rem' : '1rem'}
                component="a"
                href={'#'}
                target="_blank"
                color="myColor"
                variant="outline"
                // width ของปุ่มไม่เท่ากันเพราะขนาดของ Text เวลาwrapเป็นสองบรรทัด ไม่รู้ทำไม
                w={isSmallScreen ? '50px' : isMediumScreen ? '120px' : '100%'}
                radius="999"
                leftSection={isMediumScreen ? '' : <IconDownload />}
              >
                <Text
                  fz={isXSmallScreen ? '0.7rem' : isSmallScreen ? '0.8rem' : '1rem'}
                  fw={'550'}
                  visibleFrom="sm"
                >
                  ดาวน์โหลด
                </Text>
                <IconDownload className="mantine-hidden-from-sm" width={'12px'} height={'auto'} />
              </Button>
            </Card>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
}
