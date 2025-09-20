// Carousel configuration for the main page hero section
// Easy to update with new slides and content

// Import images
import nagrobki from '../assets/images/carousel/nagrobki.jpg'
import schody from '../assets/images/carousel/schody.jpg'
import tradycja from '../assets/images/carousel/tradycja.jpg'

// TypeScript interfaces
export interface CarouselSlide {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  ctaText: string;
  ctaLink: string;
  backgroundClass: string;
  imageUrl: string;
  imageAlt: string;
}

export const carouselSlides: CarouselSlide[] = [
  {
    id: 1,
    title: "Mistrzowskie Nagrobki",
    subtitle: "Z szacunkiem dla pamięci",
    description: "Tworzymy unikalne pomniki i nagrobki z najszlachetniejszych kamieni naturalnych",
    ctaText: "Zobacz realizacje",
    ctaLink: "#projects",
    backgroundClass: "bg-gradient-to-br from-granite-900 via-granite-800 to-granite-900",
    imageUrl: nagrobki,
    imageAlt: "Nagrobki na Cmentarzu Powązkowskim w Warszawie"
  },
  {
    id: 2,
    title: "Architektura w Kamieniu",
    subtitle: "Ponadczasowe rozwiązania",
    description: "Schody, elewacje, parapety - elementy, które przetrwają wieki",
    ctaText: "Poznaj więcej",
    ctaLink: "#about",
    backgroundClass: "bg-gradient-to-br from-granite-800 via-stone-700 to-granite-900",
    imageUrl: schody,
    imageAlt: "Schody z kamienia na zewnątrz budynku"
  },
  {
    id: 3,
    title: "Tradycja Przekazywana Pokoleniami",
    subtitle: "Od 1999 roku z pasją",
    description: "Rodzinna firma z wieloletnim doświadczeniem w obróbce kamienia naturalnego",
    ctaText: "Nasze historia",
    ctaLink: "#about",
    backgroundClass: "bg-gradient-to-br from-stone-800 via-granite-700 to-stone-900",
    imageUrl: tradycja,
    imageAlt: "Warsztat kamieniarski"
  }
];

// Helper function to get slide by id
export const getSlideById = (id: number): CarouselSlide | undefined => {
  return carouselSlides.find(slide => slide.id === id);
};

// Helper function to get total slides count
export const getSlidesCount = (): number => {
  return carouselSlides.length;
};
