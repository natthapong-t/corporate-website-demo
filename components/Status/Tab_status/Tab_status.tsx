'use client';

import { IconDownload } from '@tabler/icons-react';
import { Button, Card, Flex, Image, SimpleGrid, Tabs, Text, Title } from '@mantine/core';
import { Accordion_status } from '@/components/Status/';
import { useResponsive } from '@/hooks/useResponsive';
import { FileCardGroup } from '../FileCard_status/FileCardGroup_status';
import classes from './Tab_status.module.css';

export function Tab_status() {
  const { isXSmallScreen, isSmallScreen, isMediumScreen, isLargeScreen } = useResponsive();
  const disclosureData = [
    {
      year: 'ปี 2567',
      title: 'แบบรายการเปิดเผยข้อมูล ประจำปี 2567 ของบริษัท ไอแคร์ ประกันภัย จำกัด (มหาชน)',
      content: (
        <FileCardGroup
          files={[
            {
              fileName: 'แบบรายการเปิดเผยข้อมูล (ปผว.2) ธันวาคม 2567',
              link: '/#',
            },
            {
              fileName: 'แบบรายการเปิดเผยข้อมูล (ปผว.2) พฤศจิกายน 2567',
              link: '/#',
            },
            {
              fileName: 'แบบรายการเปิดเผยข้อมูล (ปผว.2) ตุลาคม 2567',
              link: '/#',
            },
            {
              fileName: 'แบบรายการเปิดเผยข้อมูล (ปผว.2) กันยายน 2567',
              link: '/#',
            },
            {
              fileName: 'แบบรายการเปิดเผยข้อมูล (ปผว.2) สิงหาคม 2567',
              link: '/#',
            },
            {
              fileName: 'แบบรายการเปิดเผยข้อมูล (ปผว.2) กรกฎาคม 2567',
              link: '/#',
            },
            {
              fileName: 'แบบรายการเปิดเผยข้อมูล (ปผว.2) มิถุนายน 2567',
              link: '/#',
            },
            {
              fileName: 'แบบรายการเปิดเผยข้อมูล (ปผว.2) พฤษภาคม 2567',
              link: '/#',
            },
            {
              fileName: 'แบบรายการเปิดเผยข้อมูล (ปผว.2) เมษายน 2567',
              link: '/#',
            },
            {
              fileName: 'แบบรายการเปิดเผยข้อมูล (ปผว.2) มีนาคม 2567',
              link: '/#',
            },
            {
              fileName: 'แบบรายการเปิดเผยข้อมูล (ปผว.2) กุมภาพันธ์ 2567',
              link: '/#',
            },
            {
              fileName: 'แบบรายการเปิดเผยข้อมูล (ปผว.2) มกราคม 2567',
              link: '/#',
            },
          ]}
        />
      ),
    },
    {
      year: 'ปี 2566',
      title: 'แบบรายการเปิดเผยข้อมูล ประจำปี 2566 ของบริษัท ไอแคร์ ประกันภัย จำกัด (มหาชน)',
      content: (
        <FileCardGroup
          files={[
            {
              fileName: 'แบบรายการเปิดเผยข้อมูล (ปผว.2) ธันวาคม 2566',
              link: '/#',
            },
            {
              fileName: 'แบบรายการเปิดเผยข้อมูล (ปผว.2) พฤศจิกายน 2566',
              link: '/#',
            },
            {
              fileName: 'แบบรายการเปิดเผยข้อมูล (ปผว.2) ตุลาคม 2566',
              link: '/#',
            },
            {
              fileName: 'แบบรายการเปิดเผยข้อมูล (ปผว.2) กันยายน 2566',
              link: '/#',
            },
            {
              fileName: 'แบบรายการเปิดเผยข้อมูล (ปผว.2) สิงหาคม 2566',
              link: '/#',
            },
            {
              fileName: 'แบบรายการเปิดเผยข้อมูล (ปผว.2) กรกฎาคม 2566',
              link: '/#',
            },
            {
              fileName: 'แบบรายการเปิดเผยข้อมูล (ปผว.2) มิถุนายน 2566',
              link: '/#',
            },
            {
              fileName: 'แบบรายการเปิดเผยข้อมูล (ปผว.2) พฤษภาคม 2566',
              link: '/#',
            },
            {
              fileName: 'แบบรายการเปิดเผยข้อมูล (ปผว.2) เมษายน 2566',
              link: '/#',
            },
            {
              fileName: 'แบบรายการเปิดเผยข้อมูล (ปผว.2) มีนาคม 2566',
              link: '/#',
            },
            {
              fileName: 'แบบรายการเปิดเผยข้อมูล (ปผว.2) กุมภาพันธ์ 2566',
              link: '/#',
            },
            {
              fileName: 'แบบรายการเปิดเผยข้อมูล (ปผว.2) มกราคม 2566',
              link: '/#',
            },
          ]}
        />
      ),
    },
  ];
  const financialStatusData = [
    {
      year: 'ปี 2567',
      title: 'ฐานะการเงินและผลดำเนินงาน ประจำปี 2567 ของบริษัท ไอแคร์ ประกันภัย จำกัด (มหาชน)',
      content: (
        <FileCardGroup
          files={[
            {
              fileName: 'ข้อมูลฐานะการเงินและผลการดำเนินงาน ไตรมาส 3 ปี 2567',
              link: '/#',
            },
            {
              fileName: 'ข้อมูลฐานะการเงินและผลการดำเนินงาน ไตรมาส 2 ปี 2567',
              link: '/#',
            },
            {
              fileName: 'ข้อมูลฐานะการเงินและผลการดำเนินงาน ไตรมาส 1 ปี 2567',
              link: '/#',
            },
          ]}
        />
      ),
    },
    {
      year: 'ปี 2566',
      title: 'ฐานะการเงินและผลดำเนินงาน ประจำปี 2566 ของบริษัท ไอแคร์ ประกันภัย จำกัด (มหาชน)',
      content: (
        <FileCardGroup
          files={[
            {
              fileName: 'ข้อมูลฐานะการเงินและผลการดำเนินงานแบบ ปผว รายปี 2566',
              link: '/#',
            },
            {
              fileName: 'ข้อมูลฐานะการเงินและผลการดำเนินงาน ไตรมาส 3 ปี 2566',
              link: '/#',
            },
            {
              fileName: 'ข้อมูลฐานะการเงินและผลการดำเนินงาน ไตรมาส 2 ปี 2566',
              link: '/#',
            },
            {
              fileName: 'ข้อมูลฐานะการเงินและผลการดำเนินงาน ไตรมาส 1 ปี 2566',
              link: '/#',
            },
          ]}
        />
      ),
    },
    {
      year: 'ปี 2565',
      title: 'ฐานะการเงินและผลดำเนินงาน ประจำปี 2565 ของบริษัท ไอแคร์ ประกันภัย จำกัด (มหาชน)',
      content: (
        <FileCardGroup
          files={[
            {
              fileName: 'ข้อมูลฐานะการเงินและผลการดำเนินงานแบบ ปผว รายปี 2565',
              link: '/#',
            },
            {
              fileName: 'ข้อมูลฐานะการเงินและผลการดำเนินงาน ไตรมาส 3 ปี 2565',
              link: '/#',
            },
            {
              fileName: 'ข้อมูลฐานะการเงินและผลการดำเนินงาน ไตรมาส 2 ปี 2565',
              link: '/#',
            },
            {
              fileName: 'ข้อมูลฐานะการเงินและผลการดำเนินงาน ไตรมาส 1 ปี 2565',
              link: '/#',
            },
          ]}
        />
      ),
    },
    {
      year: 'ปี 2564',
      title: 'ฐานะการเงินและผลดำเนินงาน ประจำปี 2564 ของบริษัท ไอแคร์ ประกันภัย จำกัด (มหาชน)',
      content: (
        <FileCardGroup
          files={[
            {
              fileName: 'ข้อมูลฐานะการเงินและผลการดำเนินงานแบบ ปผว รายปี 2564',
              link: '/#',
            },
          ]}
        />
      ),
    },
    {
      year: 'ปี 2563',
      title: 'ฐานะการเงินและผลดำเนินงาน ประจำปี 2563 ของบริษัท ไอแคร์ ประกันภัย จำกัด (มหาชน)',
      content: (
        <FileCardGroup
          files={[
            {
              fileName: 'ข้อมูลฐานะการเงินและผลการดำเนินงานแบบ ปผว รายปี 2563',
              link: '/#',
            },
          ]}
        />
      ),
    },
    {
      year: 'ปี 2562',
      title: 'ฐานะการเงินและผลดำเนินงาน ประจำปี 2562 ของบริษัท ไอแคร์ ประกันภัย จำกัด (มหาชน)',
      content: (
        <FileCardGroup
          files={[
            {
              fileName: 'ข้อมูลฐานะการเงินและผลการดำเนินงานแบบ ปผว รายปี 2562',
              link: '/#',
            },
          ]}
        />
      ),
    },
  ];
  const financialStatementsData = [
    {
      year: 'ปี 2567',
      title: 'งบการเงิน ประจำปี 2567 ของบริษัท ไอแคร์ ประกันภัย จำกัด (มหาชน)',
      content: (
        <FileCardGroup
          files={[
            {
              fileName: 'งบการเงินไตรมาสที่ 3 ประจำปี 2567',
              link: '/#',
            },
            {
              fileName: 'งบการเงินไตรมาสที่ 2 ประจำปี 2567',
              link: '/#',
            },
            {
              fileName: 'งบการเงินไตรมาสที่ 1 ประจำปี 2567',
              link: '/#',
            },
          ]}
        />
      ),
    },
    {
      year: 'ปี 2566',
      title: 'งบการเงิน ประจำปี 2566 ของบริษัท ไอแคร์ ประกันภัย จำกัด (มหาชน)',
      content: (
        <FileCardGroup
          files={[
            {
              fileName: 'งบการเงินประจำปี 2566',
              link: '/#',
            },
            {
              fileName: 'ประกาศงบประจำปี 2566 วันที่ 7 พฤษภาคม 2567',
              link: '/#',
            },
            {
              fileName: 'ประกาศงบประจำปี 2566 วันที่ 6 พฤษภาคม 2567',
              link: '/#',
            },
            {
              fileName: 'ประกาศงบประจำปี 2566 วันที่ 5 พฤษภาคม 2567',
              link: '/#',
            },
            {
              fileName: 'งบการเงินไตรมาสที่ 3 ประจำปี 2566',
              link: '/#',
            },
            {
              fileName: 'งบการเงินไตรมาสที่ 2 ประจำปี 2566',
              link: '/#',
            },
            {
              fileName: 'งบการเงินไตรมาสที่ 1 ประจำปี 2566',
              link: '/#',
            },
          ]}
        />
      ),
    },
    {
      year: 'ปี 2565',
      title: 'งบการเงิน ประจำปี 2565 ของบริษัท ไอแคร์ ประกันภัย จำกัด (มหาชน)',
      content: (
        <FileCardGroup
          files={[
            {
              fileName: 'งบการเงินประจำปี 2565',
              link: '/#',
            },
            {
              fileName: 'งบการเงินไตรมาสที่ 3 ประจำปี 2565',
              link: '/#',
            },
            {
              fileName: 'งบการเงินไตรมาสที่ 2 ประจำปี 2565',
              link: '/#',
            },
            {
              fileName: 'งบการเงินไตรมาสที่ 1 ประจำปี 2565',
              link: '/#',
            },
          ]}
        />
      ),
    },
    {
      year: 'ปี 2564',
      title: 'งบการเงิน ประจำปี 2564 ของบริษัท ไอแคร์ ประกันภัย จำกัด (มหาชน)',
      content: (
        <FileCardGroup
          files={[
            {
              fileName: 'งบการเงินประจำปี 2564',
              link: '/#',
            },
          ]}
        />
      ),
    },
    {
      year: 'ปี 2563',
      title: 'งบการเงิน ประจำปี 2563 ของบริษัท ไอแคร์ ประกันภัย จำกัด (มหาชน)',
      content: (
        <FileCardGroup
          files={[
            {
              fileName: 'งบการเงินประจำปี 2563',
              link: '/#',
            },
          ]}
        />
      ),
    },
    {
      year: 'ปี 2562',
      title: 'งบการเงิน ประจำปี 2562 ของบริษัท ไอแคร์ ประกันภัย จำกัด (มหาชน)',
      content: (
        <FileCardGroup
          files={[
            {
              fileName: 'งบการเงินประจำปี 2562',
              link: '/#',
            },
          ]}
        />
      ),
    },
  ];
  return (
    <Flex w={'100%'} justify={'center'} px={isMediumScreen || isLargeScreen ? '16px' : '0'}>
      <Tabs
        classNames={{ list: classes.list }}
        defaultValue="first"
        variant="outline"
        radius="md"
        flex={1}
      >
        <Tabs.List w={'100%'}>
          <Tabs.Tab value="first" py={'1rem'} className="custom-tab" display={'flex'} flex={1}>
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
          <Tabs.Tab value="second" py={'1rem'} className="custom-tab" display={'flex'} flex={1}>
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
          <Tabs.Tab value="third" py={'1rem'} className="custom-tab" display={'flex'} flex={1}>
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
          py={'16px'}
          value="first"
          style={{
            borderLeft: 'solid 1px #dee2e6',
            borderRight: 'solid 1px #dee2e6',
            borderBottom: 'solid 1px #dee2e6',
            borderRadius: '0px 0px 16px 16px',
          }}
        >
          <Accordion_status data={disclosureData} />
        </Tabs.Panel>

        <Tabs.Panel
          py={'16px'}
          value="second"
          style={{
            borderLeft: 'solid 1px #dee2e6',
            borderRight: 'solid 1px #dee2e6',
            borderBottom: 'solid 1px #dee2e6',
            borderRadius: '0px 0px 16px 16px',
          }}
        >
          <Accordion_status data={financialStatusData} />
        </Tabs.Panel>

        <Tabs.Panel
          py={'16px'}
          value="third"
          style={{
            borderLeft: 'solid 1px #dee2e6',
            borderRight: 'solid 1px #dee2e6',
            borderBottom: 'solid 1px #dee2e6',
            borderRadius: '0px 0px 16px 16px',
          }}
        >
          <Accordion_status data={financialStatementsData} />
        </Tabs.Panel>
      </Tabs>
    </Flex>
  );
}
