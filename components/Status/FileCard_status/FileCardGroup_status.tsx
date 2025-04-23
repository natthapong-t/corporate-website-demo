'use client';

import { SimpleGrid } from '@mantine/core';
import { useResponsive } from '@/hooks/useResponsive';
import { FileCard_status } from './FileCard_status';

type FileInfo = {
  fileName: string;
  link: string;
};

type FileCardGroupProps = {
  files: FileInfo[];
};

export function FileCardGroup({ files }: FileCardGroupProps) {
  const { isXSmallScreen, isSmallScreen, isMediumScreen, isLargeScreen } = useResponsive();
  return (
    <SimpleGrid cols={isMediumScreen ? 1 : isLargeScreen ? 4 : 5} spacing={ isMediumScreen?'xs' :'lg'}>
      {files.map((file, idx) => (
        <FileCard_status key={idx} fileName={file.fileName} link={file.link} />
      ))}
    </SimpleGrid>
  );
}
