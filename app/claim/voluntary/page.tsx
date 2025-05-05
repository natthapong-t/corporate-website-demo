import { Flex } from '@mantine/core';
import { Footer, MyBreadcrumbs } from '@/components';
import { Hero_aboutUs } from '@/components/AboutUs/';
import { Hero_claim, List_claim } from '@/components/Claim/';
import { Content_claim_voluntary } from '@/components/Claim/Voluntary/Content_claim_voluntary';
import { Hero_claim_voluntary } from '@/components/Claim/Voluntary/Hero_claim_voluntary';

function claim() {
  const items = [
    { title: 'หน้าแรก', href: '/' },
    { title: 'การเคลม', href: '/claim' },
    {
      title: 'ประกันรถยนต์ภาคสมัครใจ',
      href: '/claim/voluntary',
    },
  ];

  return (
    <>
      <Hero_claim_voluntary />
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
          <Content_claim_voluntary />
        </Flex>
      </Flex>
      <Footer />
    </>
  );
}

export default claim;
