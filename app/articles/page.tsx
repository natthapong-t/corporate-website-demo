'use client';

import { useEffect, useState } from 'react';
import { Flex, Pagination, Text } from '@mantine/core';
import { Footer, MyBreadcrumbs } from '@/components';
import { Hero_aboutUs } from '@/components/AboutUs/';
import { Hero_articles, List_articles } from '@/components/Articles/';
import { useResponsive } from '@/hooks/useResponsive';

function articles() {
  const { isMediumScreen, isSmallScreen, isLargeScreen } = useResponsive();
  const items = [
    { title: 'หน้าแรก', href: '/' },
    { title: 'ข่าวสาร', href: '/articles' },
  ];

  const articlesData = [
    {
      articleName: 'บริษัท ไอแคร์ ประกันภัย จำกัด (มหาชน) ผ่านการรับรองมาตรฐาน ISO/IEC 27001:2022',
      link: '/#',
      imageSrc: '/Articles/Thumbnail/1.png',
      description:
        'บริษัท ไอแคร์ ประกันภัย จำกัด (มหาชน) ผ่านการรับรองมาตรฐาน ISO/IEC 27001:2022 ยกระดับความปลอดภัยของข้อมูลลูกค้า บริษัท ไอแคร์ ประกันภัย จำกัด (มหาชน) ผู้ให้บริการประกันภัยชั้นนำในประเทศไทย สร้างมาตรฐานใหม่ในการบริหารจัดการความปลอดภัยของข้อมูล ด้วยการผ่านการรับรองมาตรฐาน ISO/IEC 27001:2022 ซึ่งเป็นมาตรฐานระดับสากลที่กำหนดแนวทางปฏิบัติสำหรับระบบบริหารจัดการความมั่นคงปลอดภัยสารสนเทศ โดยได้รับการตรวจประเมินจากบริษัท อัลฟ่าเซค จำกัด',
      date: '6 พฤษภาคม 2568',
    },
    {
      articleName:
        'บริษัท ไอแคร์ ประกันภัย จำกัด (มหาชน) มอบค่าสินไหมทดแทนตาม พ.ร.บ.คุ้มครองผู้ประสบภัยจากรถ จำนวน 500,000 บาท ให้แก่คุณธวัชชัย สำราญกิจ เมื่อวันที่ 24 สิงหาคม 2567',
      link: '/#',
      imageSrc: '/Articles/Thumbnail/2.png',
      description:
        'บริษัท ไอแคร์ ประกันภัย จำกัด (มหาชน) มอบค่าสินไหมทดแทนตาม พ.ร.บ.คุ้มครองผู้ประสบภัยจากรถ จำนวน 500,000 บาท ให้แก่คุณธวัชชัย สำราญกิจ เมื่อวันที่ 24 สิงหาคม 2567',
      date: '1 มกราคม 2568',
    },
    {
      articleName: 'COM7 แจ้งเพิ่มทุนบ.ย่อย "ไอแคร์ ประกันภัย" หลังทำรายการถือหุ้นรวม 86.17%',
      link: '/#',
      imageSrc: '/Articles/Thumbnail/3.png',
      description:
        'บริษัท คอมเซเว่น จำกัด (มหาชน) (“บริษัท”) ขอแจ้งให้ทราบว่า บริษัท ไอแคร์ ประกันภัย จำกัด (มหาชน) หรือเดิม ชื่อบริษัท พุทธธรรมประกันภัย จำกัด (มหาชน) ซึ่งเป็นบริษัทย่อยของบริษัท (ถือหุ้นโดยบริษัท คอมเซเว่น โฮลดิ้ง จำกัด) ',
      date: '5 ธันวาคม 2567',
    },
    {
      articleName: 'ทดสอบครับ',
      link: '/#',
      imageSrc: 'https://placehold.co/4000',
      description:
        'ทดสอบครับ ทดสอบครับ ทดสอบครับ ทดสอบครับ ทดสอบครับ ทดสอบครับ ทดสอบครับ ทดสอบครับ ทดสอบครับ ทดสอบครับ ทดสอบครับ ทดสอบครับ ทดสอบครับ ทดสอบครับ ทดสอบครับ ทดสอบครับ ทดสอบครับ ทดสอบครับ ทดสอบครับ ทดสอบครับ ทดสอบครับ ทดสอบครับ ทดสอบครับ ทดสอบครับ',
      date: '1 มีนาคม 1987',
    },
    {
      articleName: 'ทดสอบครับ',
      link: '/#',
      imageSrc: 'https://placehold.co/4000',
      description:
        'ทดสอบครับ ทดสอบครับ ทดสอบครับ ทดสอบครับ ทดสอบครับ ทดสอบครับ ทดสอบครับ ทดสอบครับ ทดสอบครับ ทดสอบครับ ทดสอบครับ ทดสอบครับ ทดสอบครับ ทดสอบครับ ทดสอบครับ ทดสอบครับ ทดสอบครับ ทดสอบครับ ทดสอบครับ ทดสอบครับ ทดสอบครับ ทดสอบครับ ทดสอบครับ ทดสอบครับ',
      date: '1 มีนาคม 1987',
    },
    {
      articleName: 'ทดสอบครับ',
      link: '/#',
      imageSrc: 'https://placehold.co/4000',
      description:
        'ทดสอบครับ ทดสอบครับ ทดสอบครับ ทดสอบครับ ทดสอบครับ ทดสอบครับ ทดสอบครับ ทดสอบครับ ทดสอบครับ ทดสอบครับ ทดสอบครับ ทดสอบครับ ทดสอบครับ ทดสอบครับ ทดสอบครับ ทดสอบครับ ทดสอบครับ ทดสอบครับ ทดสอบครับ ทดสอบครับ ทดสอบครับ ทดสอบครับ ทดสอบครับ ทดสอบครับ',
      date: '1 มีนาคม 1987',
    },
    {
      articleName: 'ทดสอบครับ',
      link: '/#',
      imageSrc: 'https://placehold.co/4000',
      description:
        'ทดสอบครับ ทดสอบครับ ทดสอบครับ ทดสอบครับ ทดสอบครับ ทดสอบครับ ทดสอบครับ ทดสอบครับ ทดสอบครับ ทดสอบครับ ทดสอบครับ ทดสอบครับ ทดสอบครับ ทดสอบครับ ทดสอบครับ ทดสอบครับ ทดสอบครับ ทดสอบครับ ทดสอบครับ ทดสอบครับ ทดสอบครับ ทดสอบครับ ทดสอบครับ ทดสอบครับ',
      date: '1 มีนาคม 1987',
    },
    {
      articleName: 'ทดสอบครับ',
      link: '/#',
      imageSrc: 'https://placehold.co/4000',
      description:
        'ทดสอบครับ ทดสอบครับ ทดสอบครับ ทดสอบครับ ทดสอบครับ ทดสอบครับ ทดสอบครับ ทดสอบครับ ทดสอบครับ ทดสอบครับ ทดสอบครับ ทดสอบครับ ทดสอบครับ ทดสอบครับ ทดสอบครับ ทดสอบครับ ทดสอบครับ ทดสอบครับ ทดสอบครับ ทดสอบครับ ทดสอบครับ ทดสอบครับ ทดสอบครับ ทดสอบครับ',
      date: '1 มีนาคม 1987',
    },
  ];

  const ITEMS_PER_PAGE = 6;
  const total = articlesData.length;
  const [activePage, setPage] = useState(1);

  const totalPages = Math.ceil(total / ITEMS_PER_PAGE);
  const displayedArticles = articlesData.slice(
    (activePage - 1) * ITEMS_PER_PAGE,
    activePage * ITEMS_PER_PAGE
  );

  const message = `กำลังแสดง ${ITEMS_PER_PAGE * (activePage - 1) + 1} – ${Math.min(total, ITEMS_PER_PAGE * activePage)} จาก ${total} รายการ`;
  useEffect(() => {
    window.scrollTo({ top: 300, behavior: 'smooth' });
  }, [activePage]);

  return (
    <>
      <Hero_articles />
      <Flex w={'100%'} justify={'center'}>
        <Flex
          w={'100%'}
          direction={'column'}
          align={'left'}
          style={{ maxWidth: '1280px' }}
          gap={'2rem'}
          pb={'2rem'}
          mt={'16px'}
        >
          <MyBreadcrumbs items={items} />
          <List_articles articles={displayedArticles} />
          <Flex justify= {isSmallScreen? 'center' : 'space-between'} align="center" w={'100%'} px={'16px'}>
            <Text c={'dimmed'} visibleFrom="sm">
              {message}
            </Text>
            <Pagination
              autoContrast
              color="#B7E8E3"
              value={activePage}
              onChange={setPage}
              total={totalPages}
              styles={{
                control: {
                  border: 'none',
                  boxShadow: 'none',
                },
              }}
            />
          </Flex>
        </Flex>
      </Flex>
      <Footer />
    </>
  );
}

export default articles;
