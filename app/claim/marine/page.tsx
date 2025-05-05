import { Flex } from '@mantine/core';
import { Footer, MyBreadcrumbs } from '@/components';
import { Hero_aboutUs } from '@/components/AboutUs/';
import { Hero_claim, List_claim } from '@/components/Claim/';
import { Content_claim_marine } from '@/components/Claim/Marine/Content_claim_marine';
import { Hero_claim_marine } from '@/components/Claim/Marine/Hero_claim_marine';

function claim() {
  const items = [
    { title: 'หน้าแรก', href: '/' },
    { title: 'การเคลม', href: '/claim' },
    { title: 'ประกันทางทะเลและขนส่ง', href: '/claim/marine' },
  ];

  return (
    <>
      <Hero_claim_marine />
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
          <Content_claim_marine />
        </Flex>
      </Flex>
      <Footer />
    </>
  );
}

export default claim;
