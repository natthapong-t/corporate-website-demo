import '../public/global.css';

import {
  Carousel_Image,
  Carousel_Partner,
  CarSection,
  CTASection,
  Hero,
  HouseSection,
  ManSection,
  OurProduct,
  ShipSection,
} from '@/components/HomePage';

import '@mantine/carousel/styles.css';

import { Footer, Header } from '@/components';

export default function HomePage() {
  return (
    <>
      <Hero />
      <Carousel_Partner />
      <OurProduct />
      <ManSection />
      <Carousel_Image />
      <CarSection />
      <ShipSection />
      <HouseSection />
      <CTASection />
      <Footer />
    </>
  );
}
