import { Flex } from '@mantine/core';
import { Footer, MyBreadcrumbs } from '@/components';
import { Hero_aboutUs } from '@/components/AboutUs/';
import { Hero_claim, List_claim } from '@/components/Claim/';
import { Content_claim_foreigner } from '@/components/Claim/Foreigner/Content_claim_foreigner';
import { Hero_claim_foreigner } from '@/components/Claim/Foreigner/Hero_claim_foreigner';

function claim() {
  const items = [
    { title: 'หน้าแรก', href: '/' },
    { title: 'การเคลม', href: '/claim' },
    {
      title: 'ประกันสุขภาพและอุบัติเหตุกลุ่มแบบพิเศษสำหรับชาวต่างชาติที่เข้ามาทำงานในประเทศไทย',
      href: '/claim/foreigner',
    },
  ];

  return (
    <>
      <Hero_claim_foreigner />
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
          <Content_claim_foreigner />
        </Flex>
      </Flex>
      <Footer />
    </>
  );
}

export default claim;
