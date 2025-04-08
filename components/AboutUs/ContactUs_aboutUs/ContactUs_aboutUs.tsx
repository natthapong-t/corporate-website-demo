'use client';

import { IconMailFilled, IconPhoneFilled } from '@tabler/icons-react';
import { Flex, Group, Image, Text, Title } from '@mantine/core';
import { useResponsive } from '@/hooks/useResponsive';

export function ContactUs_aboutUs() {
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
            ติดต่อเรา
          </Title>
          <Text ta={isMediumScreen ? 'center' : 'left'}>
            บริษัท ไอแคร์ ประกันภัย จำกัด (มหาชน) สำนักงาน ตั้งอยู่ที่ 549/1 ชั้นที่ 1 ถนนสรรพาวุธ
            แขวงบางนาใต้ เขตบางนา กรุงเทพมหานคร (10260)
          </Text>
          <Flex direction={'column'} visibleFrom="md">
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
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1044.8954058693973!2d100.5955918689811!3d13.67518390088107!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30e2a1a58f76493d%3A0x598b54255a1dd29f!2z4Lia4Lij4Li04Lip4Lix4LiXIOC4hOC4reC4oeC5gOC4i-C5gOC4p-C5iOC4mSDguIjguLPguIHguLHguJQgKOC4oeC4q-C4suC4iuC4mSk!5e1!3m2!1sth!2sth!4v1742544990775!5m2!1sth!2sth"
          width={isMediumScreen ? '100%' : '35%'}
          height={'350px'}
          loading="lazy"
          style={{
            borderRadius: '10px',
          }}
        ></iframe>
        <Title order={2} fz={'1.65rem'} hiddenFrom="md">
            ติดต่อเรา
          </Title>
      </Flex>
    </Flex>
  );
}
