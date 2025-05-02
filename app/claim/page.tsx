import { Flex } from '@mantine/core';
import { Footer, MyBreadcrumbs } from '@/components';
import { Hero_aboutUs } from '@/components/AboutUs/';
import { Hero_claim, List_claim } from '@/components/Claim/';

function claim() {
  const items = [
    { title: 'หน้าแรก', href: '/' },
    { title: 'การเคลม', href: '/claim' },
  ];

  return (
    <>
      <Hero_claim />
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
          <List_claim
            claims={[
              {
                claimName: 'ประกันเกี่ยวกับทรัพย์สิน',
                link: '/claim/negus',
                imageSrc: '/Claim/claimProperty.png',
                iconSrc: '/Claim/claimPropertyIcon.svg',
              },
              {
                claimName: 'ประกันการเดินทาง',
                link: '/claim/2',
                imageSrc: '/Claim/claimTravel.png',
                iconSrc: '/Claim/claimTravelIcon.svg',
              },
              {
                claimName: 'ประกันอุบัติเหตุ',
                link: '/claim/3',
                imageSrc: '/Claim/claimAccident.png',
                iconSrc: '/Claim/claimAccidentIcon.svg',
              },
              {
                claimName: 'ประกันทางทะเลและขนส่ง',
                link: '/claim/4',
                imageSrc: '/Claim/claimMarine.png',
                iconSrc: '/Claim/claimMarineIcon.png',
              },
              {
                claimName: 'ประกันความเสี่ยงภัยทุกชนิด',
                link: '/claim/5',
                imageSrc: '/Claim/claimAllRisk.png',
                iconSrc: '/Claim/claimAllRiskIcon.png',
              },
              {
                claimName: 'ประกันความเสียหายทางการเงินสำหรับสินค้าเช่าซื้อประเภทรถจักรยานยนต์',
                link: '/claim/6',
                imageSrc: '/Claim/claimBike.png',
                iconSrc: '/Claim/claimBikeIcon.png',
              },
              {
                claimName: 'ประกันรถยนต์ภาคสมัครใจ',
                link: '/claim/7',
                imageSrc: '/Claim/claimVoluntary.png',
                iconSrc: '/Claim/claimVoluntaryIcon.png',
              },
              {
                claimName: 'ประกันรถยนต์ภาคบังคับ (ประกันภัย พรบ.)',
                link: '/claim/8',
                imageSrc: '/Claim/claimCompulsory.png',
                iconSrc: '/Claim/claimCompulsoryIcon.png',
              },
              {
                claimName: 'ประกันสุขภาพและอุบัติเหตุกลุ่มแบบพิเศษ สำหรับชาวต่างชาติที่เข้ามาทำงานในประเทศไทย',
                link: '/claim/9',
                imageSrc: '/Claim/claimForeigner.png',
                iconSrc: '/Claim/claimForeignerIcon.png',
              },
            ]}
          />
        </Flex>
      </Flex>
      <Footer />
    </>
  );
}

export default claim;
