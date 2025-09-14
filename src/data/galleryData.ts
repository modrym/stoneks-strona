// Gallery configuration - easy to update with new images
// For placeholder images, using Unsplash with appropriate categories

// TypeScript interfaces
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

export const galleryCategories: GalleryCategory[] = [
  {
    id: 'nagrobki',
    name: 'Nagrobki',
    title: 'Nagrobki i Pomniki',
    description: 'Eleganckie nagrobki i pomniki wykonane z najwyższej jakości kamienia naturalnego.',
    buttonImage: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop&crop=center', // Cemetery/memorial stone
    images: [
      {
        src: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=600&fit=crop&crop=center',
        thumbnail: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=300&h=200&fit=crop&crop=center',
        caption: 'Elegancki nagrobek z czarnego granitu',
        title: 'Nagrobek granitowy',
        description: 'Elegancki nagrobek wykonany z najwyższej jakości czarnego granitu szwedzkiego. Precyzyjne wykończenie i trwałość na lata.',
        width: 800,
        height: 600
      },
      {
        src: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=600&fit=crop&crop=center',
        thumbnail: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=200&fit=crop&crop=center',
        caption: 'Pomnik z marmuru Carrara',
        title: 'Monument marmurowy',
        description: 'Klasyczny pomnik wykonany z białego marmuru Carrara. Ręcznie rzeźbione detale i ponadczasowy design.',
        width: 800,
        height: 600
      },
      {
        src: 'https://images.unsplash.com/photo-1548042159-6b08675df183?w=800&h=600&fit=crop&crop=center',
        thumbnail: 'https://images.unsplash.com/photo-1548042159-6b08675df183?w=300&h=200&fit=crop&crop=center',
        caption: 'Nagrobek rodzinny z granitu',
        title: 'Nagrobek rodzinny',
        description: 'Przestronny nagrobek rodzinny z wysokiej jakości granitu. Możliwość umieszczenia wielu inskrypcji.',
        width: 800,
        height: 600
      },
      {
        src: 'https://images.unsplash.com/photo-1573160103600-452d61b1cd67?w=800&h=600&fit=crop&crop=center',
        thumbnail: 'https://images.unsplash.com/photo-1573160103600-452d61b1cd67?w=300&h=200&fit=crop&crop=center',
        caption: 'Monument z piaskowca',
        title: 'Monument tradycyjny',
        description: 'Tradycyjny monument wykonany z piaskowca Istebna. Charakterystyczna faktura i naturalny kolor.',
        width: 800,
        height: 600
      },
      {
        src: 'https://images.unsplash.com/photo-1626197031507-c17099753214?w=800&h=600&fit=crop&crop=center',
        thumbnail: 'https://images.unsplash.com/photo-1626197031507-c17099753214?w=300&h=200&fit=crop&crop=center',
        caption: 'Klasyczny nagrobek z rzeźbą',
        title: 'Nagrobek artystyczny',
        description: 'Wyjątkowy nagrobek z elementami rzeźbiarskimi. Ręczne wykończenie przez doświadczonych mistrzów.',
        width: 800,
        height: 600
      },
      {
        src: 'https://images.unsplash.com/photo-1617622237197-d61f2fa89e3a?w=800&h=600&fit=crop&crop=center',
        thumbnail: 'https://images.unsplash.com/photo-1617622237197-d61f2fa89e3a?w=300&h=200&fit=crop&crop=center',
        caption: 'Nowoczesny nagrobek z granitu',
        title: 'Nagrobek nowoczesny',
        description: 'Minimalistyczny nagrobek w nowoczesnym stylu. Czysty design i wysokiej jakości materiał.',
        width: 800,
        height: 600
      }
    ]
  },
  {
    id: 'tablice',
    name: 'Tablice',
    title: 'Tablice Pamiątkowe',
    description: 'Tablice pamiątkowe i informacyjne wykonane z kamienia naturalnego.',
    buttonImage: 'https://images.unsplash.com/photo-1541746972996-4e0b0f93e586?w=400&h=300&fit=crop&crop=center', // Memorial plaques
    images: [
      {
        src: 'https://images.unsplash.com/photo-1541746972996-4e0b0f93e586?w=800&h=600&fit=crop&crop=center',
        thumbnail: 'https://images.unsplash.com/photo-1541746972996-4e0b0f93e586?w=300&h=200&fit=crop&crop=center',
        caption: 'Tablica pamiątkowa z marmuru',
        title: 'Tablica marmurowa',
        description: 'Elegancka tablica pamiątkowa wykonana z białego marmuru. Precyzyjny grawer i trwała konstrukcja.',
        width: 800,
        height: 600
      },
      {
        src: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop&crop=center',
        thumbnail: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=300&h=200&fit=crop&crop=center',
        caption: 'Tablica informacyjna z granitu',
        title: 'Tablica granitowa',
        description: 'Funkcjonalna tablica informacyjna z czarnego granitu. Odporna na warunki atmosferyczne.',
        width: 800,
        height: 600
      },
      {
        src: 'https://images.unsplash.com/photo-1586973029085-60e5b5c6cf3a?w=800&h=600&fit=crop&crop=center',
        thumbnail: 'https://images.unsplash.com/photo-1586973029085-60e5b5c6cf3a?w=300&h=200&fit=crop&crop=center',
        caption: 'Tablica z grawerem w kamieniu',
        title: 'Tablica grawerowana',
        description: 'Artystyczna tablica z precyzyjnym grawerem. Unikalne wykonanie w kamieniu naturalnym.',
        width: 800,
        height: 600
      },
      {
        src: 'https://images.unsplash.com/photo-1593642532973-d31b6557fa68?w=800&h=600&fit=crop&crop=center',
        thumbnail: 'https://images.unsplash.com/photo-1593642532973-d31b6557fa68?w=300&h=200&fit=crop&crop=center',
        caption: 'Tablica commemrative',
        title: 'Tablica commemoracyjna',
        description: 'Reprezentacyjna tablica commemoracyjna z piaskowca. Klasyczne wykonanie o wysokich walorach estetycznych.',
        width: 800,
        height: 600
      },
      {
        src: 'https://images.unsplash.com/photo-1609205170083-d8a2b2c5c5e7?w=800&h=600&fit=crop&crop=center',
        thumbnail: 'https://images.unsplash.com/photo-1609205170083-d8a2b2c5c5e7?w=300&h=200&fit=crop&crop=center',
        caption: 'Elegancka tablica z napisem',
        title: 'Tablica elegancka',
        description: 'Stylowa tablica z kunsztownym napisem. Połączenie tradycji z nowoczesnym designem.',
        width: 800,
        height: 600
      }
    ]
  },
  {
    id: 'inne-realizacje',
    name: 'Inne realizacje',
    title: 'Inne Realizacje',
    description: 'Różnorodne projekty kamieniarskie - blaty, schody, elewacje i więcej.',
    buttonImage: 'https://images.unsplash.com/photo-1503387837-b154d5074bd2?w=400&h=300&fit=crop&crop=center', // Stone work/architecture
    images: [
      {
        src: 'https://images.unsplash.com/photo-1503387837-b154d5074bd2?w=800&h=600&fit=crop&crop=center',
        thumbnail: 'https://images.unsplash.com/photo-1503387837-b154d5074bd2?w=300&h=200&fit=crop&crop=center',
        caption: 'Blat kuchenny z granitu',
        title: 'Blat granitowy',
        description: 'Nowoczesny blat kuchenny wykonany z granitu Kashmir White. Trwały, elegancki i łatwy w utrzymaniu.',
        width: 800,
        height: 600
      },
      {
        src: 'https://images.unsplash.com/photo-1560184897-ae75f418493e?w=800&h=600&fit=crop&crop=center',
        thumbnail: 'https://images.unsplash.com/photo-1560184897-ae75f418493e?w=300&h=200&fit=crop&crop=center',
        caption: 'Schody z piaskowca',
        title: 'Schody kamienne',
        description: 'Reprezentacyjne schody zewnętrzne z piaskowca Istebna. Antypoślizgowa powierzchnia i elegancki wygląd.',
        width: 800,
        height: 600
      },
      {
        src: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&h=600&fit=crop&crop=center',
        thumbnail: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=300&h=200&fit=crop&crop=center',
        caption: 'Elewacja z kamienia naturalnego',
        title: 'Elewacja kamienna',
        description: 'Wyjątkowa elewacja wykonana z kamienia naturalnego. Połączenie funkcjonalności z estetyką.',
        width: 800,
        height: 600
      },
      {
        src: 'https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?w=800&h=600&fit=crop&crop=center',
        thumbnail: 'https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?w=300&h=200&fit=crop&crop=center',
        caption: 'Parapety wewnętrzne z marmuru',
        title: 'Parapety marmurowe',
        description: 'Eleganckie parapety wewnętrzne z marmuru Rosa Beta. Doskonale komponują się z nowoczesnym wnętrzem.',
        width: 800,
        height: 600
      },
      {
        src: 'https://images.unsplash.com/photo-1615971677499-5467cbab01d0?w=800&h=600&fit=crop&crop=center',
        thumbnail: 'https://images.unsplash.com/photo-1615971677499-5467cbab01d0?w=300&h=200&fit=crop&crop=center',
        caption: 'Kominek z kamienia',
        title: 'Kominek kamienny',
        description: 'Stylowy kominek wykonany z kamienia naturalnego. Centralny punkt każdego salonu.',
        width: 800,
        height: 600
      },
      {
        src: 'https://images.unsplash.com/photo-1592928302636-c83cf1e1c887?w=800&h=600&fit=crop&crop=center',
        thumbnail: 'https://images.unsplash.com/photo-1592928302636-c83cf1e1c887?w=300&h=200&fit=crop&crop=center',
        caption: 'Ozdobne elementy z granitu',
        title: 'Elementy dekoracyjne',
        description: 'Unikatowe elementy ozdobne wykonane z granitu. Ręczne wykończenie o najwyższych standardach.',
        width: 800,
        height: 600
      },
      {
        src: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=800&h=600&fit=crop&crop=center',
        thumbnail: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=300&h=200&fit=crop&crop=center',
        caption: 'Posadzka z kamienia naturalnego',
        title: 'Posadzka kamienna',
        description: 'Wytrzymała posadzka z kamienia naturalnego. Idealna do pomieszczeń o dużym natężeniu ruchu.',
        width: 800,
        height: 600
      },
      {
        src: 'https://images.unsplash.com/photo-1600298881974-6be191ceeda1?w=800&h=600&fit=crop&crop=center',
        thumbnail: 'https://images.unsplash.com/photo-1600298881974-6be191ceeda1?w=300&h=200&fit=crop&crop=center',
        caption: 'Rzeźba w kamieniu',
        title: 'Rzeźba artystyczna',
        description: 'Wyjątkowa rzeźba wykonana w kamieniu przez doświadczonych mistrzów. Sztuka w najczystszej formie.',
        width: 800,
        height: 600
      }
    ]
  }
];

// Helper function to get category by id
export const getCategoryById = (id: string): GalleryCategory | undefined => {
  return galleryCategories.find(category => category.id === id);
};

// Helper function to get category names for navigation
export const getCategoryNames = (): CategorySummary[] => {
  return galleryCategories.map(category => ({
    id: category.id,
    name: category.name
  }));
};
