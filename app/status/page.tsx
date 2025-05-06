import { Footer, MyBreadcrumbs } from '@/components';
import { Hero_status, Tab_status } from '@/components/Status/';
import { Flex } from '@mantine/core';

function status() {
  const items = [
    { title: 'หน้าแรก', href: '/' },
    { title: 'ฐานะทางการเงิน', href: '/status' },
  ];

  return (
    <>
      <Hero_status />
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
          <Tab_status />
        </Flex>
      </Flex>
      <Footer />
    </>
  );
}

export default status;
