import { Flex } from '@mantine/core';
import { Footer, MyBreadcrumbs } from '@/components';
import { Hero_aboutUs } from '@/components/AboutUs/';
import { Hero_claim, List_claim } from '@/components/Claim/';
import { Content_claim_allrisk } from '@/components/Claim/AllRisk/Content_claim_allrisk';
import { Hero_claim_allrisk } from '@/components/Claim/AllRisk/Hero_claim_allrisk';

function claim() {
  const items = [
    { title: 'หน้าแรก', href: '/' },
    { title: 'การเคลม', href: '/claim' },
    { title: 'ประกันความเสี่ยงภัยทุกชนิด', href: '/claim/allrisk' },
  ];

  return (
    <>
      <Hero_claim_allrisk />
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
          <Content_claim_allrisk />
        </Flex>
      </Flex>
      <Footer />
    </>
  );
}

export default claim;
