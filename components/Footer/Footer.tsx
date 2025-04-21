'use client';

import {
  IconBrandInstagram,
  IconBrandTwitter,
  IconBrandYoutube,
  IconMailFilled,
  IconPhoneFilled,
} from '@tabler/icons-react';
import {
  ActionIcon,
  Anchor,
  Container,
  Divider,
  Flex,
  Group,
  Image,
  Stack,
  Text,
  TextInput,
} from '@mantine/core';
import { useResponsive } from '@/hooks/useResponsive';

const data = [
  {
    title: 'ผลิตภัณฑ์',
    links: [
      { label: 'ประกันทรัพย์สิน', link: '#' },
      { label: 'ประกันอุบัติเหตุ', link: '#' },
      { label: 'ประกันการเดินทาง', link: '#' },
      { label: 'ประกันความเสี่ยงภัยทุกชนิด', link: '#' },
      { label: 'ประกันทางทะเลและขนส่ง', link: '#' },
      { label: 'ประกันภัย พรบ.', link: '#' },
      { label: 'ประกันภัยเช่าจักรยานยนต์', link: '#' },
      { label: 'ประกันภัยชาวต่างชาติ', link: '#' },
    ],
  },
  {
    title: 'เคลม',
    links: [
      { label: 'สินไหมทั่วไป', link: '#' },
      { label: 'สินไหมรถยนต์', link: '#' },
      { label: 'แจ้งเคลม พ.ร.บ.', link: '#' },
      { label: 'แจ้งเคลมภาคสมัครใจ', link: '#' },
    ],
  },
  {
    title: 'บริการลูกค้า',
    links: [
      { label: 'ร้องเรียน', link: '#' },
      { label: 'ตรวจสอบ พ.ร.บ.', link: '#' },
      { label: 'แก้ไข IMEI', link: '#' },
      { label: 'รายชื่อโรงพยาบาล', link: '#' },
      { label: 'ค้นหาอู่', link: '#' },
      { label: 'คำนวณราคา', link: '#' },
      { label: 'คำถามที่พบบ่อย', link: '#' },
    ],
  },
  {
    title: 'บริษัท',
    links: [
      { label: 'เกี่ยวกับเรา', link: '#' },
      { label: 'ฐานะการเงิน', link: '#' },
      { label: 'นโยบายความเป็นส่วนตัว', link: '#' },
    ],
  },
];

export function Footer() {
  const { isMediumScreen, isLargeScreen, isSmallScreen } = useResponsive();
  const groups = data.map((group) => {
    const links = group.links.map((link, index) => (
      <Anchor<'a'> key={index} component="a" href={link.link} c="dimmed">
        {link.label}
      </Anchor>
    ));

    return (
      <Flex direction={'column'} key={group.title} gap={'xs'}>
        <Text mt={isMediumScreen ? '1rem' : 0} fw={'bold'}>
          {group.title}
        </Text>
        {links}
      </Flex>
    );
  });

  return (
    <Flex direction={'column'} gap={'xl'} align={'center'}>
      <Flex
        w={'100%'}
        direction={isMediumScreen ? 'column-reverse' : 'column'}
        gap={isMediumScreen ? 'xs' : 'xl'}
        style={{ maxWidth: '1280px' }}
        px={isMediumScreen || isLargeScreen ? '16px' : '0'}
      >
        <Divider w={'100%'} my="sm" visibleFrom="md" />
        <Flex
          justify={'space-between'}
          w={'100%'}
          direction={isMediumScreen ? 'column' : 'row'}
          className="SEO"
        >
          {groups}

          {/* subscribe  */}
          {/* <Flex
            my={isMediumScreen ? 'md' : ''}
            direction={'column'}
            p={'lg'}
            style={{ borderRadius: '10px', border: '1px solid #f2f2f2' }}
            h={'fit-content'}
            w={'fit-content'}
          >
            <Text fw={'bold'}>ติดตามข่าวสาร</Text>
            <TextInput
              label="ลงทะเบียนรับข่าวสารใหม่ ๆ จากทางเรา"
              placeholder="กรอกอีเมล"
              styles={{
                label: { color: '#868E96', marginBottom: '4px' },
              }}
            />
          </Flex> */}
        </Flex>
        <Divider w={'100%'} my="sm" />
        <Flex
          className="iCareDetail"
          justify={'space-between'}
          direction={isMediumScreen ? 'column' : 'row'}
          mb={'xl'}
          h={'100%'}
        >
          <Flex direction={'column'} align={'start'} gap={'sm'}>
            <Anchor href="/" style={{ display: 'inline-block' }}>
              <Image src="logo_ici.png" alt="Logo" w={'60%'} maw={'500px'}/>
              {/* it used to be <img> with height={'90'} just in case its broken */}
            </Anchor>

            <Flex direction={'column'}>
              <Text fw={'bold'}>บริษัท ไอแคร์ ประกันภัย จำกัด (มหาชน)</Text>
              <Text c="dimmed">
                549/1 ชั้นที่ 1 ถนนสรรพาวุธ แขวงบางนาใต้ เขตบางนา กรุงเทพมหานคร (10260)
              </Text>
            </Flex>

            <Flex direction={'column'} c={'dimmed'}>
              <Group gap={'xs'}>
                <IconMailFilled />
                <Text>0-2105-4689</Text>
              </Group>
              <Group gap={'xs'}>
                <IconPhoneFilled />
                <Text>ici@icare-insurance.com</Text>
              </Group>
            </Flex>
          </Flex>
          <iframe
            style={{ marginTop: isMediumScreen ? '1rem' : '0', borderRadius: '10px' }}
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1044.8954058693973!2d100.5955918689811!3d13.67518390088107!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30e2a1a58f76493d%3A0x598b54255a1dd29f!2z4Lia4Lij4Li04Lip4Lix4LiXIOC4hOC4reC4oeC5gOC4i-C5gOC4p-C5iOC4mSDguIjguLPguIHguLHguJQgKOC4oeC4q-C4suC4iuC4mSk!5e1!3m2!1sth!2sth!4v1742544990775!5m2!1sth!2sth"
            width={isMediumScreen ? '100%' : '25%'}
            loading="lazy"
          ></iframe>
        </Flex>
        <Divider w={'100%'} my="sm" hiddenFrom="md" />
      </Flex>
    </Flex>
  );
}
