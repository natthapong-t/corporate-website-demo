'use client';

import { IconDownload, IconMessageCircle, IconPhoto, IconSettings } from '@tabler/icons-react';
import { Button, Card, Flex, Group, Image, SimpleGrid, Tabs, Text, Title } from '@mantine/core';
import { Accordion_status } from '@/components/Status/';
import { useResponsive } from '@/hooks/useResponsive';

function FileCard({ fileName }: { fileName: string }) {
  return (
    <Card pt={'xl'} radius="md" withBorder>
      <Card.Section style={{ justifyContent: 'center', display: 'flex' }} py={'xl'}>
        <Image src="/Status/file_logo.svg" alt="File logo" w={'75px'} h={'75px'} />
      </Card.Section>
      <Text ta={'center'}>{fileName}</Text>
      <Button
        color="myColor"
        variant="outline"
        fullWidth
        mt="md"
        radius="999"
        leftSection={<IconDownload />}
      >
        ดาวน์โหลด
      </Button>
    </Card>
  );
}

export function Tab_status() {
  const { isXSmallScreen, isSmallScreen, isMediumScreen, isLargeScreen } = useResponsive();
  const disclosureData = [
    {
      year: '2567',
      title: 'แบบรายการเปิดเผยข้อมูล ประจำปี 2567 ของบริษัท ไอแคร์ ประกันภัย จำกัด (มหาชน)',
      content: (
        <SimpleGrid cols={5}>
          <FileCard fileName="แบบรายการเปิดเผยข้อมูล (ปผว.2) สิงหาคม 2567" />
          <FileCard fileName="แบบรายการเปิดเผยข้อมูล (ปผว.2) กรกฎาคม 2567" />
        </SimpleGrid>
      ),
    },
    {
      year: '2566',
      title: 'แบบรายการเปิดเผยข้อมูล ประจำปี 2566 ของบริษัท ไอแคร์ ประกันภัย จำกัด (มหาชน)',
      content: (
        <SimpleGrid cols={5}>
          <FileCard fileName="แบบรายการเปิดเผยข้อมูล (ปผว.2) ธันวาคม 2566" />
          <FileCard fileName="แบบรายการเปิดเผยข้อมูล (ปผว.2) พฤศจิกายน 2566" />
        </SimpleGrid>
      ),
    },
  ];
  return (
    <Flex w={'100%'} justify={'center'} px={isMediumScreen || isLargeScreen ? '16px' : '0'}>
      <Tabs defaultValue="first" variant="outline" radius="md" flex={1}>
        <Tabs.List grow w={'100%'}>
          <Tabs.Tab value="first" py={'1rem'}>
            <Title
              ta={'center'}
              order={2}
              fz={isSmallScreen ? '0.8rem' : isMediumScreen ? '1rem' : '1.25rem'}
              textWrap="wrap"
              maw={isXSmallScreen ? '65' : isSmallScreen ? '90' : ''}
              lineClamp={3}
            >
              แบบรายการเปิดเผยข้อมูล
            </Title>
          </Tabs.Tab>
          <Tabs.Tab value="second">
            <Title
              ta={'center'}
              order={2}
              fz={isSmallScreen ? '0.8rem' : isMediumScreen ? '1rem' : '1.25rem'}
              textWrap="wrap"
              maw={isXSmallScreen ? '65' : isSmallScreen ? '90' : ''}
              lineClamp={3}
            >
              ฐานะการเงินและผลดำเนินงาน
            </Title>
          </Tabs.Tab>
          <Tabs.Tab value="third">
            <Title
              ta={'center'}
              order={2}
              fz={isSmallScreen ? '0.8rem' : isMediumScreen ? '1rem' : '1.25rem'}
              textWrap="wrap"
              maw={isXSmallScreen ? '65' : isSmallScreen ? '90' : ''}
              lineClamp={3}
            >
              งบการเงิน
            </Title>
          </Tabs.Tab>
        </Tabs.List>

        <Tabs.Panel
          p={'16px'}
          value="first"
          style={{
            borderLeft: 'solid 1px #dee2e6',
            borderRight: 'solid 1px #dee2e6',
            borderBottom: 'solid 1px #dee2e6',
          }}
        >
          <Accordion_status data={disclosureData} />
        </Tabs.Panel>

        <Tabs.Panel
          value="second"
          style={{
            borderLeft: 'solid 1px #dee2e6',
            borderRight: 'solid 1px #dee2e6',
            borderBottom: 'solid 1px #dee2e6',
          }}
        >
          Messages tab content
        </Tabs.Panel>

        <Tabs.Panel
          value="third"
          style={{
            borderLeft: 'solid 1px #dee2e6',
            borderRight: 'solid 1px #dee2e6',
            borderBottom: 'solid 1px #dee2e6',
          }}
        >
          Settings tab content
        </Tabs.Panel>
      </Tabs>
    </Flex>
  );
}
