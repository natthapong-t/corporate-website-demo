'use client';

import { Flex, SimpleGrid, Title } from '@mantine/core';
import { Card_claim } from '@/components/Claim';
import { useResponsive } from '@/hooks/useResponsive';

type CardInfo = {
  claimName: string;
  link: string;
  imageSrc: string;
  iconSrc: string;
};

type ClaimCardListProps = {
  claims: CardInfo[];
};

export function List_claim({ claims }: ClaimCardListProps) {
  const { isXSmallScreen, isSmallScreen, isMediumScreen, isLargeScreen } = useResponsive();
  return (
    <Flex w={'100%'} direction={'column'} px={isMediumScreen || isLargeScreen ? '16px' : '0'}>
      <SimpleGrid cols={isMediumScreen ? 1 : 2} spacing={isMediumScreen ? 'xs' : 'lg'}>
        {claims.map((claims, idx) => (
          <Card_claim key={idx} fileName={claims.claimName} link={claims.link} imageSrc={claims.imageSrc} iconSrc={claims.iconSrc} />
        ))}
      </SimpleGrid>
    </Flex>
  );
}
