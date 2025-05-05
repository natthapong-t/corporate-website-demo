import { Flex } from '@mantine/core';
import { Footer, MyBreadcrumbs } from '@/components';
import { Hero_aboutUs } from '@/components/AboutUs/';
import { Hero_claim, List_claim } from '@/components/Claim/';
import { Content_claim_accident } from '@/components/Claim/Accident/Content_claim_accident';
import { Hero_claim_accident } from '@/components/Claim/Accident/Hero_claim_accident';

function claim() {
  const items = [
    { title: 'หน้าแรก', href: '/' },
    { title: 'การเคลม', href: '/claim' },
    { title: 'ประกันอุบัติเหตุ', href: '/claim/accident' },
  ];

  return (
    <>
      <Hero_claim_accident />
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
          <Content_claim_accident />
        </Flex>
      </Flex>
      <Footer />
    </>
  );
}

export default claim;
