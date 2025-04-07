'use client';

import { createTheme, MantineColorsTuple } from '@mantine/core';
import { IBM_Plex_Sans_Thai, Itim, Kanit, Noto_Sans_Thai, Trirong } from 'next/font/google';

const myColor: MantineColorsTuple = [
  '#0c3e3a',
  '#104e48',
  '#135d56',
  '#166d65',
  '#197c73',
  '#1c8c82',
  '#1F9B90', //main color
  '#35a59b',
  '#4cafa6',
  '#62b9b1',
];

const kanit = Kanit({
  subsets: ['latin'],
  weight: ['400', '700'],
});

const notoSansThai = Noto_Sans_Thai({
  subsets: ['latin'],
  weight: ['400', '700'],
});
const ibmPlexSansThai = IBM_Plex_Sans_Thai({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700'],
});
const itim = Itim({
  subsets: ['latin'],
  weight: ['400'],
});
const k2d = Trirong({
  subsets: ['latin'],
  weight: ['400'],
});

export const theme = createTheme({
  colors: {
    myColor,
  },
  primaryColor: 'myColor',
  fontFamily: ibmPlexSansThai.style.fontFamily,
  breakpoints: {
    xs: '301px',
    sm: '601px',
    md: '1025px',
    lg: '1025px',
    xl: '1025px',
  },
});
