import React from 'react';
import { IconMailFilled, IconPhoneFilled } from '@tabler/icons-react';
import {
  Anchor,
  Breadcrumbs,
  Center,
  Container,
  Flex,
  Group,
  Image,
  SimpleGrid,
  Text,
  Title,
} from '@mantine/core';
import { Footer } from '@/components';
import Hero_aboutUs from '../../components/AboutUs/Hero/Hero_aboutUs';

function aboutUs() {
  const items = [
    { title: 'หน้าแรก', href: '/' },
    { title: 'เกี่ยวกับเรา', href: '/about-us' },
  ];

  const coreValueLogo = [
    { label: 'Innovation', imageSrc: '/AboutUs/corevalue/i.png' },
    { label: 'Customer', imageSrc: '/AboutUs/corevalue/c.png' },
    { label: 'Alliance', imageSrc: '/AboutUs/corevalue/a.png' },
    { label: 'Respect', imageSrc: '/AboutUs/corevalue/r.png' },
    { label: 'Excellent', imageSrc: '/AboutUs/corevalue/e.png' },
  ];

  return (
    <>
      <Hero_aboutUs />
      <Flex w={'100%'} justify={'center'}>
        <Flex w={'100%'} direction={'column'} align={'left'} maw={'1280px'} gap={'2rem'}>
          {/* breadcrumb */}
          <Breadcrumbs separator="›" mt={'1rem'}>
            {items.map((item, index) => {
              const isLast = index === items.length - 1;
              return (
                <Anchor
                  key={index}
                  href={isLast ? undefined : item.href}
                  c={isLast ? '' : '#A7A9AC'}
                >
                  {item.title}
                </Anchor>
              );
            })}
          </Breadcrumbs>

          {/* ความเป็นมาของเรา */}
          <Flex direction={'row'} w={'100%'} justify={'center'} maw={'1280px'} gap={'8rem'}>
            <Image display={Flex} radius="10px" src="/AboutUs/comsevenBuilding.png" />
            <Flex direction={'column'} gap={'md'} justify={'center'} align={'left'} maw={'1280px'}>
              <Title order={2} fz={'1.65rem'}>
                ความเป็นมาของเรา
              </Title>
              <Text ta={'left'}>
                บริษัท ไอแคร์ ประกันภัย จำกัด (มหาชน) เป็นผู้ให้บริการเทคโนโลยีประกันภัยที่ครอบคลุม
                ทุกความต้องการ ไม่ว่าจะเป็นประกันสุขภาพ ทรัพย์สิน เดินทาง หรืออุปกรณ์ อิเล็กทรอนิกส์
                ด้วยบริการที่ง่ายและสะดวก เพื่อสร้างประสบการณ์ที่ดีที่สุดให้ลูกค้า
              </Text>
              <Text ta={'left'}>
                เราพร้อมใช้เทคโนโลยีเพื่อพัฒนาบริการที่ครอบคลุมทุกด้าน โดยได้รับการสนับสนุน
                จากบริษัท คอมเซเว่น จำกัด (มหาชน) ผู้ถือหุ้นหลักและผู้นำด้านเทคโนโลยีระดับประเทศ
              </Text>
              <Text ta={'left'}>
                พวกเราไม่ใช่แค่ผู้ให้บริการประกันภัยทั่วไป แต่เรามุ่งมั่นพัฒนานวัตกรรม
                เพื่อก้าวนำสู่บริษัทประกันภัยในใจคุณ
              </Text>
            </Flex>
          </Flex>

          {/* ค่านิยมของเรา */}
          <Flex direction={'row'} w={'100%'} justify={'center'} maw={'1280px'} gap={'2rem'}>
            <Flex direction={'column'} gap={'md'} justify={'center'} align={'center'} w={'100%'}>
              <Title order={2} fz={'1.65rem'}>
                ค่านิยมของเรา
              </Title>
              <SimpleGrid cols={5} spacing="xl" visibleFrom="md" px={'0'}>
                {coreValueLogo.map((coreValueLogo, index) => (
                  <Flex
                    p={'1rem'}
                    flex={1}
                    key={index}
                    gap={'xs'}
                    w={'100%'}
                    h={'25vh'}
                    bg={'#fafafa'}
                    direction={'column'}
                    align={'center'}
                    justify={'center'}
                    style={{
                      borderRadius: '10px',
                    }}
                  >
                    <Image w={'50%'} radius="10px" src={coreValueLogo.imageSrc} />
                    <Text ta={'center'}>{coreValueLogo.label}</Text>
                  </Flex>
                ))}
              </SimpleGrid>
            </Flex>
          </Flex>

          {/* วิสัยทัศน์ของเรา */}
          <Flex direction={'row'} w={'100%'} justify={'center'} maw={'1280px'} gap={'8rem'}>
            <Flex
              direction={'column'}
              gap={'md'}
              justify={'center'}
              align={'left'}
              maw={'1280px'}
              flex={3}
            >
              <Title order={2} fz={'1.65rem'}>
                วิสัยทัศน์ของเรา
              </Title>
              <Text ta={'left'}>
                วิสัยทัศน์ของเราคือการเป็นบริษัทประกันภัยที่มุ่งมั่นพัฒนานวัตกรรมอย่างต่อเนื่อง
                เพื่อนำเสนอบริการที่ตอบโจทย์ความต้องการของลูกค้าในทุกด้าน
                ด้วยความทันสมัยและความใส่ใจ เพื่อก้าวสู่การเป็นบริษัทประกันภัยที่อยู่ในใจของทุกคน
              </Text>
            </Flex>
            <Image display={Flex} src="/AboutUs/ourVision.svg" flex={2} />
          </Flex>

          {/* พันธกิจของเรา */}
          <Flex direction={'row'} w={'100%'} justify={'center'} maw={'1280px'} gap={'8rem'}>
            <Image display={Flex} src="/AboutUs/ourMission.svg" flex={2} />
            <Flex
              direction={'column'}
              gap={'md'}
              justify={'center'}
              align={'left'}
              maw={'1280px'}
              flex={3}
            >
              <Title order={2} fz={'1.65rem'}>
                พันธกิจของเรา
              </Title>
              <Text ta={'left'}>
                พวกเรามุ่งเน้นการตอบสนองความต้องการของลูกค้าด้วยผลิตภัณฑ์ประกันภัยและบริการที่สะดวก
                รวดเร็ว ภายใต้กฎระเบียบและกฎหมายที่เกี่ยวข้อง
                เราพัฒนานวัตกรรมประกันภัยและระบบการจัดการที่มีประสิทธิภาพบนฐานข้อมูลขนาดใหญ่
                เพื่อเพิ่มประสิทธิภาพการดำเนินงานและคุณภาพบริการ พร้อมลดค่าใช้จ่าย นอกจากนี้
                เรายังเสริมสร้างสภาพแวดล้อมการทำงานที่ดี และพัฒนาพนักงานให้มีความรู้ ความสามารถ
                และคุณธรรม พร้อมมอบสวัสดิการที่เหมาะสม
              </Text>
            </Flex>
          </Flex>

          {/* ติดต่อเรา */}
          <Flex direction={'row'} w={'100%'} justify={'center'} maw={'1280px'} gap={'8rem'}>
            <Flex
              direction={'column'}
              gap={'md'}
              justify={'center'}
              align={'left'}
              maw={'1280px'}
              flex={3}
            >
              <Title order={2} fz={'1.65rem'}>
                ติดต่อเรา
              </Title>
              <Text ta={'left'}>
                บริษัท ไอแคร์ ประกันภัย จำกัด (มหาชน) สำนักงาน ตั้งอยู่ที่ 549/1 ชั้นที่ 1
                ถนนสรรพาวุธ แขวงบางนาใต้ เขตบางนา กรุงเทพมหานคร (10260)
              </Text>
              <Flex direction={'column'}>
                <Group gap={'xs'}>
                  <IconMailFilled />
                  <Text>0-2105-4689</Text>
                </Group>
                <Group gap={'xs'}>
                  <IconPhoneFilled />
                  <Text>ici@icare-insurance.com</Text>
                </Group>
              </Flex>
            </Flex>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1044.8954058693973!2d100.5955918689811!3d13.67518390088107!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30e2a1a58f76493d%3A0x598b54255a1dd29f!2z4Lia4Lij4Li04Lip4Lix4LiXIOC4hOC4reC4oeC5gOC4i-C5gOC4p-C5iOC4mSDguIjguLPguIHguLHguJQgKOC4oeC4q-C4suC4iuC4mSk!5e1!3m2!1sth!2sth!4v1742544990775!5m2!1sth!2sth"
              width={'35%'}
              height={'350px'}
              loading="lazy"
            ></iframe>
          </Flex>
        </Flex>
      </Flex>
      <Footer />
    </>
  );
}

export default aboutUs;
