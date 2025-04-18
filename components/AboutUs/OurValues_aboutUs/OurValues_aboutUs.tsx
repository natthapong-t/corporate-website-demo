'use client';

import { Flex, Image, SimpleGrid, Text, Title } from '@mantine/core';
import { useResponsive } from '@/hooks/useResponsive';

export function OurValues_aboutUs() {
  const { isMediumScreen, isSmallScreen, isLargeScreen } = useResponsive();

  const coreValueLogo = [
    { label: 'Innovation', imageSrc: '/AboutUs/corevalue/i.png' },
    { label: 'Customer', imageSrc: '/AboutUs/corevalue/c.png' },
    { label: 'Alliance', imageSrc: '/AboutUs/corevalue/a.png' },
    { label: 'Respect', imageSrc: '/AboutUs/corevalue/r.png' },
    { label: 'Excellent', imageSrc: '/AboutUs/corevalue/e.png' },
  ];
  return (
    <Flex w={'100%'} justify={'center'} px={isMediumScreen || isLargeScreen ? '16px' : '0'}>
      <Flex
        w={'100%'}
        direction={'column'}
        align={'left'}
        style={{ maxWidth: '1280px' }}
        gap={'2rem'}
      >
        {/* ค่านิยมของเรา */}
        <Flex w={'100%'} justify={'center'} style={{ maxWidth: '1280px' }} gap={'2rem'}>
          <Flex direction={'column'} gap={'md'} justify={'center'} align={'center'} w={'100%'}>
            <Title order={2} fz={'1.65rem'}>
              ค่านิยมของเรา
            </Title>
            <SimpleGrid
              cols={isMediumScreen ? 1 : 5}
              spacing="xl"
              px={'0'}
              w={isMediumScreen ? '100%' : ''}
            >
              {coreValueLogo.map((coreValueLogo, index) => (
                <Flex
                  p={'1rem'}
                  flex={1}
                  key={index}
                  gap={'xs'}
                  w={'100%'}
                  h={isMediumScreen ? '20vh' : '25vh'}
                  bg={'#fafafa'}
                  direction={'column'}
                  align={'center'}
                  justify={'center'}
                  style={{
                    borderRadius: '10px',
                  }}
                >
                  <Image
                    w={isMediumScreen ? '8em' : '50%'}
                    radius="10px"
                    src={coreValueLogo.imageSrc}
                  />
                  <Text ta={'center'}>
                    <span style={{ color: '#1F9B90' }}>{coreValueLogo.label[0]}</span> ·{' '}
                    {coreValueLogo.label[0]}
                    {coreValueLogo.label.slice(1)}
                  </Text>
                </Flex>
              ))}
            </SimpleGrid>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
}
