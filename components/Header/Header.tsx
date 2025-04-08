'use client';

import Link from 'next/link';
import {
  IconBook,
  IconChartPie3,
  IconChevronDown,
  IconCode,
  IconCoin,
  IconFingerprint,
  IconNotification,
} from '@tabler/icons-react';
import {
  Anchor,
  BackgroundImage,
  Box,
  Burger,
  Button,
  Center,
  Collapse,
  Divider,
  Drawer,
  Flex,
  Group,
  HoverCard,
  ScrollArea,
  SimpleGrid,
  Text,
  ThemeIcon,
  UnstyledButton,
  useMantineTheme,
} from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { useResponsive } from '@/hooks/useResponsive';
import classes from './Header.module.css';

const mockdata = [
  {
    title: 'ร้องเรียน',
  },
  {
    title: 'ตรวจสอบ พ.ร.บ.',
  },
  {
    title: 'แก้ไข IMEI',
  },
  {
    title: 'รายชื่อโรงพยาบาล',
  },
  {
    title: 'ค้นหาอู่',
  },
  {
    title: 'Service Level Agreement (SLA)',
  },
];

export function Header() {
  const { isMediumScreen, isSmallScreen } = useResponsive();
  const [drawerOpened, { toggle: toggleDrawer, close: closeDrawer }] = useDisclosure(false);
  const [linksOpened, { toggle: toggleLinks }] = useDisclosure(false);
  const theme = useMantineTheme();

  const links = mockdata.map((item) => (
    <UnstyledButton className={classes.subLink} key={item.title}>
      <Group wrap="nowrap" align="flex-start">
        <Flex>
          <Text size="sm" visibleFrom="md">
            {item.title}
          </Text>
          <Text size="lg" hiddenFrom="md">
            {item.title}
          </Text>
        </Flex>
      </Group>
    </UnstyledButton>
  ));

  return (
    <Box w="100%">
      <Flex
        pos={'fixed'}
        w={'100%'}
        className={classes.header}
        justify={'center'}
        h={isMediumScreen ? '72px' : '78px'}
      >
        <Group justify="space-between" h="100%" w={'100%'} maw={'1280px'}>
          <Burger opened={drawerOpened} onClick={toggleDrawer} hiddenFrom="md" />
          <Anchor href="/" visibleFrom="md">
            <img src="logo_ici.png" alt="Logo" height="50" />
          </Anchor>
          <Group h="100%" gap={0} visibleFrom="md">
            <Link href="/" className={classes.link}>
              หน้าแรก
            </Link>
            <a href="#" className={classes.link}>
              ข่าวสาร
            </a>
            <a href="#" className={classes.link}>
              ฐานะทางการเงิน
            </a>
            <Link href="/about-us" className={classes.link}>
              เกี่ยวกับเรา
            </Link>
            <a href="#" className={classes.link}>
              เคลม
            </a>
            <HoverCard width={600} position="bottom" radius="md" shadow="md" withinPortal>
              <HoverCard.Target>
                <a href="#" className={classes.link}>
                  <Center inline>
                    <Box component="span" mr={5}>
                      บริการลูกค้า
                    </Box>
                    <IconChevronDown size={16} />
                  </Center>
                </a>
              </HoverCard.Target>

              <HoverCard.Dropdown style={{ overflow: 'hidden' }} w={250}>
                <SimpleGrid cols={1} spacing={0}>
                  {links}
                </SimpleGrid>
              </HoverCard.Dropdown>
            </HoverCard>
          </Group>

          <Button fw={'normal'}>ผลิตภัณฑ์</Button>
        </Group>
      </Flex>

      <Drawer
        opened={drawerOpened}
        onClose={closeDrawer}
        withCloseButton={false}
        size="75%"
        padding="xl"
        title={<img src="logo_ici.png" alt="Logo" height="50" />}
        hiddenFrom="md"
        zIndex={1000000}
      >
        <ScrollArea h={'100%'} mx="-md">
          <Flex h="100%" gap={'md'} justify="center" direction={'column'}>
            <Text component="a" href="/" className={classes.link}>
              หน้าแรก
            </Text>
            <Text component="a" href="#" className={classes.link}>
              ข่าวสาร
            </Text>
            <Text component="a" href="#" className={classes.link}>
              ฐานะทางการเงิน
            </Text>
            <Text component="a" href="/about-us" className={classes.link}>
              เกี่ยวกับเรา
            </Text>
            <Text component="a" href="#" className={classes.link}>
              เคลม
            </Text>
          </Flex>
          <UnstyledButton className={classes.link} onClick={toggleLinks} my={'md'} w={'100%'}>
            <Flex direction={'row'} w={'100%'} justify="space-between" align={'center'}>
              <Box component="span" mr={5}>
                บริการลูกค้า
              </Box>
              <IconChevronDown size={24} />
            </Flex>
          </UnstyledButton>
          <Collapse in={linksOpened} ml={'lg'}>
            {links}
          </Collapse>
        </ScrollArea>
      </Drawer>
    </Box>
  );
}
