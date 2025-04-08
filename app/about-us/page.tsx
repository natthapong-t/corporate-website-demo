import React from 'react';
import { IconMailFilled, IconPhoneFilled } from '@tabler/icons-react';
import {
  Anchor,
  Breadcrumbs,
  Center,
  Container,
  Flex,
  Group,
  Image,
  SimpleGrid,
  Text,
  Title,
} from '@mantine/core';
import { Footer, MyBreadcrumbs } from '@/components';
import {
  ContactUs_aboutUs,
  Detail_aboutUs,
  OurMission_aboutUs,
  OurValues_aboutUs,
  OurVision_aboutUs,
} from '@/components/AboutUs/';
import Hero_aboutUs from '../../components/AboutUs/Hero/Hero_aboutUs';

function aboutUs() {
  const items = [
    { title: 'หน้าแรก', href: '/' },
    { title: 'เกี่ยวกับเรา', href: '/about-us' },
  ];

  return (
    <>
      <Hero_aboutUs />
      <Flex w={'100%'} justify={'center'}>
        <Flex
          w={'100%'}
          direction={'column'}
          align={'left'}
          maw={'1280px'}
          gap={'2rem'}
          pb={'2rem'}
        >
          <MyBreadcrumbs items={items} />
          <Detail_aboutUs />
          <OurValues_aboutUs />
          <OurVision_aboutUs />
          <OurMission_aboutUs />
          <ContactUs_aboutUs />
        </Flex>
      </Flex>
      <Footer />
    </>
  );
}

export default aboutUs;
