import { Flex } from '@mantine/core';
import { Footer, MyBreadcrumbs } from '@/components';
import { Hero_aboutUs } from '@/components/AboutUs/';
import { Hero_claim, List_claim } from '@/components/Claim/';
import { Hero_claim_property } from '@/components/Claim/Property/Hero_claim_property';

function claim() {
  const items = [
    { title: 'หน้าแรก', href: '/' },
    { title: 'การเคลม', href: '/claim' },
    { title: 'ประกันเกี่ยวกับทรัพย์สิน', href: '/claim/property' },
  ];

  return (
    <>
      <Hero_claim_property  />
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
          
        </Flex>
      </Flex>
      <Footer />
    </>
  );
}

export default claim;
