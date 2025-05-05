import { Flex } from '@mantine/core';
import { Footer, MyBreadcrumbs } from '@/components';
import { Hero_aboutUs } from '@/components/AboutUs/';
import { Hero_claim, List_claim } from '@/components/Claim/';
import { Content_claim_travel } from '@/components/Claim/Travel/Content_claim_travel';
import { Hero_claim_travel } from '@/components/Claim/Travel/Hero_claim_travel';

function claim() {
  const items = [
    { title: 'หน้าแรก', href: '/' },
    { title: 'การเคลม', href: '/claim' },
    { title: 'ประกันการเดินทาง', href: '/claim/travel' },
  ];

  return (
    <>
      <Hero_claim_travel />
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
          <Content_claim_travel />
        </Flex>
      </Flex>
      <Footer />
    </>
  );
}

export default claim;
