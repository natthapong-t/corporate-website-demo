import { useMediaQuery } from '@mantine/hooks';

export function useResponsive() {
  const isXSmallScreen = useMediaQuery('(max-width: 400px)');
  const isSmallScreen = useMediaQuery('(max-width: 600px)');
  const isMediumScreen = useMediaQuery('(max-width: 1024px)');
  const isLargeScreen = useMediaQuery('(max-width: 1280px)');
  const isXLargeScreen = useMediaQuery('(min-width: 1921px)');

  return { isXSmallScreen, isSmallScreen, isMediumScreen, isLargeScreen, isXLargeScreen };
}
