import { Flex } from '@mantine/core';
import { Footer, MyBreadcrumbs } from '@/components';
import { Hero_aboutUs } from '@/components/AboutUs/';
import { Hero_claim, List_claim } from '@/components/Claim/';
import { Content_claim_bike } from '@/components/Claim/Bike/Content_claim_bike';
import { Hero_claim_bike } from '@/components/Claim/Bike/Hero_claim_bike';

function claim() {
  const items = [
    { title: 'หน้าแรก', href: '/' },
    { title: 'การเคลม', href: '/claim' },
    {
      title: 'ประกันความเสียหายทางการเงินสำหรับสินค้าเช่าซื้อประเภทรถจักรยานยนต์',
      href: '/claim/bike',
    },
  ];

  return (
    <>
      <Hero_claim_bike />
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
          <Content_claim_bike />
        </Flex>
      </Flex>
      <Footer />
    </>
  );
}

export default claim;
