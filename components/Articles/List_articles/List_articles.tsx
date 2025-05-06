'use client';

import { Flex, SimpleGrid, Stack, Text, Title } from '@mantine/core';
import { Card_articles } from '@/components/Articles';
import { useResponsive } from '@/hooks/useResponsive';

type CardInfo = {
  articleName: string;
  link: string;
  imageSrc: string;
  description: string;
  date: string;
};

type ArticlesCardListProps = {
  articles: CardInfo[];
};

export function List_articles({ articles }: ArticlesCardListProps) {
  const { isXSmallScreen, isSmallScreen, isMediumScreen, isLargeScreen } = useResponsive();
  return (
    <Flex
      w={'100%'}
      direction={'column'}
      px={isMediumScreen || isLargeScreen ? '16px' : '0'}
      gap={isSmallScreen? 'md' :  'xl'}
    >
      <Stack gap={isSmallScreen? '0' :  'xs'}>
        <Title order={2} fz={'1.65rem'} ta={'center'}>
          ข่าวสาร
        </Title>
        <Text fz={'1.25rem'} ta={'center'} c={'dimmed'}>
          ไม่พลาดข่าวใหม่ โปรโมชั่นและอื่น ๆ จากเรา
        </Text>
      </Stack>

      <SimpleGrid
        cols={isSmallScreen ? 1 : isMediumScreen ? 2 : 3}
        spacing={isMediumScreen ? 'xs' : 'lg'}
      >
        {articles.map((articles, idx) => (
          <Card_articles
            key={idx}
            articleName={articles.articleName}
            link={articles.link}
            imageSrc={articles.imageSrc}
            description={articles.description}
            date={articles.date}
          />
        ))}
      </SimpleGrid>
    </Flex>
  );
}
