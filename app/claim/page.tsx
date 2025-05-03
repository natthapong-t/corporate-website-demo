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
                link: '/claim/property',
                imageSrc: '/Claim/claimProperty.png',
                iconSrc: '/Claim/claimPropertyIcon.svg',
              },
              {
                claimName: 'ประกันการเดินทาง',
                link: '/claim/travel',
                imageSrc: '/Claim/claimTravel.png',
                iconSrc: '/Claim/claimTravelIcon.svg',
              },
              {
                claimName: 'ประกันอุบัติเหตุ',
                link: '/claim/accident',
                imageSrc: '/Claim/claimAccident.png',
                iconSrc: '/Claim/claimAccidentIcon.svg',
              },
              {
                claimName: 'ประกันทางทะเลและขนส่ง',
                link: '/claim/marine',
                imageSrc: '/Claim/claimMarine.png',
                iconSrc: '/Claim/claimMarineIcon.png',
              },
              {
                claimName: 'ประกันความเสี่ยงภัยทุกชนิด',
                link: '/claim/allrisk',
                imageSrc: '/Claim/claimAllRisk.png',
                iconSrc: '/Claim/claimAllRiskIcon.png',
              },
              {
                claimName: 'ประกันความเสียหายทางการเงินสำหรับสินค้าเช่าซื้อประเภทรถจักรยานยนต์',
                link: '/claim/bike',
                imageSrc: '/Claim/claimBike.png',
                iconSrc: '/Claim/claimBikeIcon.png',
              },
              {
                claimName: 'ประกันรถยนต์ภาคสมัครใจ',
                link: '/claim/voluntary',
                imageSrc: '/Claim/claimVoluntary.png',
                iconSrc: '/Claim/claimVoluntaryIcon.png',
              },
              {
                claimName: 'ประกันรถยนต์ภาคบังคับ (ประกันภัย พรบ.)',
                link: '/claim/compulsory',
                imageSrc: '/Claim/claimCompulsory.png',
                iconSrc: '/Claim/claimCompulsoryIcon.png',
              },
              {
                claimName: 'ประกันสุขภาพและอุบัติเหตุกลุ่มแบบพิเศษ สำหรับชาวต่างชาติที่เข้ามาทำงานในประเทศไทย',
                link: '/claim/foreigner',
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
