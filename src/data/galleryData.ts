// Gallery configuration

import realizacja01 from '../assets/images/gallery/realizacja-01.png'
import realizacja02 from '../assets/images/gallery/realizacja-02.png'
import realizacja03 from '../assets/images/gallery/realizacja-03.png'
import realizacja04 from '../assets/images/gallery/realizacja-04.png'
import realizacja05 from '../assets/images/gallery/realizacja-05.png'
import realizacja06 from '../assets/images/gallery/realizacja-06.png'
import realizacja07 from '../assets/images/gallery/realizacja-07.png'
import realizacja08 from '../assets/images/gallery/realizacja-08.png'
import realizacja09 from '../assets/images/gallery/realizacja-09.png'
import realizacja10 from '../assets/images/gallery/realizacja-10.png'
import realizacja11 from '../assets/images/gallery/realizacja-11.png'
import realizacja12 from '../assets/images/gallery/realizacja-12.png'
import realizacja13 from '../assets/images/gallery/realizacja-13.png'
import realizacja14 from '../assets/images/gallery/realizacja-14.png'
import realizacja15 from '../assets/images/gallery/realizacja-15.png'
import realizacja16 from '../assets/images/gallery/realizacja-16.png'
import realizacja17 from '../assets/images/gallery/realizacja-17.png'
import realizacja18 from '../assets/images/gallery/realizacja-18.png'
import realizacja19 from '../assets/images/gallery/realizacja-19.png'
import realizacja20 from '../assets/images/gallery/realizacja-20.png'
import realizacja21 from '../assets/images/gallery/realizacja-21.png'
import realizacja22 from '../assets/images/gallery/realizacja-22.png'
import realizacja23 from '../assets/images/gallery/realizacja-23.png'
import realizacja24 from '../assets/images/gallery/realizacja-24.png'
import realizacja25 from '../assets/images/gallery/realizacja-25.png'
import realizacja26 from '../assets/images/gallery/realizacja-26.png'
import realizacja27 from '../assets/images/gallery/realizacja-27.png'
import realizacja28 from '../assets/images/gallery/realizacja-28.png'
import realizacja29 from '../assets/images/gallery/realizacja-29.png'
import realizacja30 from '../assets/images/gallery/realizacja-30.png'
import realizacja31 from '../assets/images/gallery/realizacja-31.png'
import realizacja32 from '../assets/images/gallery/realizacja-32.png'
import realizacja33 from '../assets/images/gallery/realizacja-33.png'
import realizacja34 from '../assets/images/gallery/realizacja-34.png'
import realizacja35 from '../assets/images/gallery/realizacja-35.png'
import realizacja36 from '../assets/images/gallery/realizacja-36.png'
import realizacja37 from '../assets/images/gallery/realizacja-37.png'
import realizacja38 from '../assets/images/gallery/realizacja-38.png'
import realizacja39 from '../assets/images/gallery/realizacja-39.png'
import realizacja40 from '../assets/images/gallery/realizacja-40.png'
import realizacja41 from '../assets/images/gallery/realizacja-41.png'

export interface GalleryImage {
  src: string;
  thumbnail: string;
  caption: string;
  title: string;
  description: string;
  width: number;
  height: number;
}

export interface GalleryCategory {
  id: string;
  name: string;
  title: string;
  description: string;
  buttonImage: string;
  images: GalleryImage[];
}

export interface CategorySummary {
  id: string;
  name: string;
}

const nagrobkiImages = [
  realizacja01, realizacja02, realizacja03, realizacja04, realizacja05,
  realizacja06, realizacja07, realizacja08, realizacja09, realizacja10,
  realizacja11, realizacja12, realizacja13, realizacja14, realizacja15,
  realizacja16, realizacja17, realizacja18, realizacja19, realizacja20,
  realizacja21, realizacja22, realizacja23, realizacja24, realizacja25,
  realizacja26, realizacja27, realizacja28, realizacja29, realizacja30,
  realizacja31, realizacja32, realizacja33, realizacja34, realizacja35,
  realizacja36, realizacja37, realizacja38, realizacja39, realizacja40,
  realizacja41,
]

export const galleryCategories: GalleryCategory[] = [
  {
    id: 'nagrobki',
    name: 'Nagrobki',
    title: 'Nagrobki i Pomniki',
    description: 'Nasze realizacje - nagrobki pojedyncze, podwójne i rodzinne wykonane z najwyższej jakości granitu. Każdy projekt jest indywidualnie dopasowany do potrzeb klienta.',
    buttonImage: realizacja02,
    images: nagrobkiImages.map((src, i) => ({
      src,
      thumbnail: src,
      caption: `Realizacja ${i + 1}`,
      title: `Nagrobek — realizacja ${i + 1}`,
      description: 'Nagrobek wykonany przez Stone KS – Kamieniarstwo Smolarek. Precyzyjne wykończenie i wysokiej jakości granit.',
      width: 1536,
      height: 2048,
    })),
  },
]

export const getCategoryById = (id: string): GalleryCategory | undefined => {
  return galleryCategories.find(category => category.id === id);
};

export const getCategoryNames = (): CategorySummary[] => {
  return galleryCategories.map(category => ({
    id: category.id,
    name: category.name
  }));
};
