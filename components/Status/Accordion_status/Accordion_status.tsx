'use client';

import { IconPlus } from '@tabler/icons-react';
import { Accordion, Flex, Stack, Text } from '@mantine/core';
import { useResponsive } from '@/hooks/useResponsive';
import classes from './Accordion_status.module.css';

type DisclosureData = {
  year: string;
  title: string;
  content: React.ReactNode;
};

type AccordionStatusProps = {
  data: DisclosureData[];
};

export function Accordion_status({ data }: AccordionStatusProps) {
  const { isXSmallScreen, isSmallScreen, isMediumScreen, isLargeScreen } = useResponsive();

  const items = data.map((item) => (
    <Accordion.Item key={item.year} value={item.year}>
      <Accordion.Control>
        <Stack gap={0}>
          <Text fw={600} size="md">
            {item.year}
          </Text>
          <Text size="sm" c="dimmed">
            {item.title}
          </Text>
        </Stack>
      </Accordion.Control>
      <Accordion.Panel>{item.content}</Accordion.Panel>
    </Accordion.Item>
  ));

  return (
    <Flex w={'100%'} justify={'center'} px={isMediumScreen || isLargeScreen ? '16px' : '0'}>
      <Accordion
        variant="separated"
        radius="md"
        w={'100%'}
        classNames={{ chevron: classes.chevron }}
        chevron={<IconPlus className={classes.icon} />}
        defaultValue={items[0].key}
      >
        {items}
      </Accordion>
    </Flex>
  );
}
