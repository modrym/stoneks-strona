export interface Material {
  id: string;
  name: string;
  category: MaterialCategory;
  description: string;
  features: string[];
  image: string;
}

export type MaterialCategory = 'granit' | 'marmur' | 'piaskowiec' | 'kwarcyt' | 'bazalt';

export interface MaterialCategoryInfo {
  id: MaterialCategory;
  name: string;
  description: string;
}

export const materialCategories: MaterialCategoryInfo[] = [
  {
    id: 'granit',
    name: 'Granity',
    description: 'Niezwykle trwały kamień idealny na nagrobki, blaty i schody.',
  },
  {
    id: 'marmur',
    name: 'Marmury',
    description: 'Szlachetny kamień o eleganckim wyglądzie, ceniony w architekturze.',
  },
  {
    id: 'piaskowiec',
    name: 'Piaskowce',
    description: 'Naturalny kamień o ciepłej kolorystyce, doskonały na elewacje.',
  },
  {
    id: 'kwarcyt',
    name: 'Kwarcyty',
    description: 'Wyjątkowo twardy kamień o szlachetnym połysku.',
  },
  {
    id: 'bazalt',
    name: 'Bazalty',
    description: 'Ciemny, wulkaniczny kamień o dużej wytrzymałości.',
  },
];

export const materials: Material[] = [
  // Granity
  {
    id: 'granit-strzegomski',
    name: 'Granit Strzegomski',
    category: 'granit',
    description: 'Popularny polski granit o szarej barwie z drobnymi czarnymi i białymi kryształami. Doskonały do nagrobków i elementów architektonicznych.',
    features: ['Wysoka mrozoodporność', 'Niska nasiąkliwość', 'Łatwy w obróbce'],
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/Granite_stone_textures.jpg/600px-Granite_stone_textures.jpg',
  },
  {
    id: 'granit-szwedzki-czarny',
    name: 'Granit Szwedzki Czarny',
    category: 'granit',
    description: 'Elegancki, głęboko czarny granit z lekkim połyskiem. Jeden z najbardziej cenionych materiałów na nagrobki i pomniki.',
    features: ['Głęboka czarna barwa', 'Wysoki połysk', 'Niezwykła trwałość'],
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Granite_%28cut_%26_polished_surface%29.jpg/600px-Granite_%28cut_%26_polished_surface%29.jpg',
  },
  {
    id: 'granit-kashmir-white',
    name: 'Granit Kashmir White',
    category: 'granit',
    description: 'Jasny granit o kremowej barwie z subtelnymi przejściami kolorystycznymi. Idealny do blatów kuchennych i łazienkowych.',
    features: ['Jasna kolorystyka', 'Unikalne wzory', 'Odporność na plamy'],
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/Granite_Blanco_Cristal_-_es.jpg/600px-Granite_Blanco_Cristal_-_es.jpg',
  },
  {
    id: 'granit-himalaya-blue',
    name: 'Granit Himalaya Blue',
    category: 'granit',
    description: 'Wyjątkowy granit o niebiesko-szarej tonacji z charakterystycznymi żyłkami. Ceniony za swój niepowtarzalny wygląd.',
    features: ['Unikalna kolorystyka', 'Wysoka twardość', 'Efekt głębi'],
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/Granite_Azul_Platino_-_es.jpg/600px-Granite_Azul_Platino_-_es.jpg',
  },

  // Marmury
  {
    id: 'marmur-carrara',
    name: 'Marmur Carrara',
    category: 'marmur',
    description: 'Legendarny włoski marmur o białej barwie z delikatnymi szarymi żyłkami. Symbol luksusu i elegancji od wieków.',
    features: ['Biała barwa', 'Szlachetne żyłkowanie', 'Ponadczasowa elegancja'],
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d6/Carrara_marble.jpg/600px-Carrara_marble.jpg',
  },
  {
    id: 'marmur-nero-marquina',
    name: 'Marmur Nero Marquina',
    category: 'marmur',
    description: 'Hiszpański marmur o intensywnie czarnej barwie z kontrastowymi białymi żyłkami. Nadaje wnętrzom dramatyczny charakter.',
    features: ['Kontrastowy wygląd', 'Hiszpańska jakość', 'Wysoka dekoracyjność'],
    image: 'https://upload.wikimedia.org/wikipedia/commons/d/d8/Black_Marquina_Marble_Tiles.jpg',
  },
  {
    id: 'marmur-rosa-beta',
    name: 'Marmur Rosa Beta',
    category: 'marmur',
    description: 'Ciepły marmur o różowo-beżowej tonacji. Popularny wybór na parapety, posadzki i elementy dekoracyjne.',
    features: ['Ciepła kolorystyka', 'Dobra polerka', 'Uniwersalne zastosowanie'],
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Marble_Rosa_Portogallo_-_pt.jpg/600px-Marble_Rosa_Portogallo_-_pt.jpg',
  },

  // Piaskowce
  {
    id: 'piaskowiec-istebna',
    name: 'Piaskowiec Istebna',
    category: 'piaskowiec',
    description: 'Ceniony polski piaskowiec o ciepłej, piaskowej barwie. Doskonały na elewacje, ogrodzenia i elementy ogrodowe.',
    features: ['Naturalna ciepła barwa', 'Łatwa obróbka', 'Tradycyjny materiał'],
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Sandstone_Texture_%282650399847%29.jpg/600px-Sandstone_Texture_%282650399847%29.jpg',
  },
  {
    id: 'piaskowiec-radkow',
    name: 'Piaskowiec Radków',
    category: 'piaskowiec',
    description: 'Szlachetny piaskowiec ze Wzgórz Stołowych o jasnobeżowej barwie. Ceniony w budownictwie sakralnym i restauracji zabytków.',
    features: ['Jasnobeżowa barwa', 'Wysoka mrozoodporność', 'Historyczny materiał'],
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Sandstone_Texture_%282675049864%29.jpg/600px-Sandstone_Texture_%282675049864%29.jpg',
  },

  // Kwarcyty
  {
    id: 'kwarcyt-bianco',
    name: 'Kwarcyt Bianco',
    category: 'kwarcyt',
    description: 'Jasny kwarcyt o białej barwie z delikatnymi przejściami. Twardszy od granitu, idealny na blaty i posadzki.',
    features: ['Ekstremalnie twardy', 'Odporny na zarysowania', 'Niski współczynnik nasiąkliwości'],
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/Quartzite_1.jpg/600px-Quartzite_1.jpg',
  },
  {
    id: 'kwarcyt-verde',
    name: 'Kwarcyt Verde',
    category: 'kwarcyt',
    description: 'Efektowny zielony kwarcyt o żywej kolorystyce. Nadaje wnętrzom naturalny, soczysty charakter.',
    features: ['Intensywny kolor', 'Bardzo twarda powierzchnia', 'Odporność na chemikalia'],
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Azu_macau_rohplatte.jpg/600px-Azu_macau_rohplatte.jpg',
  },

  // Bazalty
  {
    id: 'bazalt-czarny',
    name: 'Bazalt Czarny',
    category: 'bazalt',
    description: 'Ciemny wulkaniczny kamień o jednorodnej strukturze. Wyjątkowo odporny na ścieranie, idealny na schody i posadzki.',
    features: ['Jednorodna struktura', 'Wysoka odporność na ścieranie', 'Antypoślizgowy'],
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bf/Basalt_36mw1041.jpg/600px-Basalt_36mw1041.jpg',
  },
  {
    id: 'bazalt-szary',
    name: 'Bazalt Szary',
    category: 'bazalt',
    description: 'Ciemnoszary bazalt o subtelnej fakturze. Doskonały materiał na nawierzchnie, kostki i elementy zewnętrzne.',
    features: ['Wulkaniczna twardość', 'Mrozoodporność', 'Minimalistyczny wygląd'],
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/Basalt%2C_Late_Pannonian%2C_Badacsony.jpg/600px-Basalt%2C_Late_Pannonian%2C_Badacsony.jpg',
  },
];

export const getMaterialsByCategory = (category: MaterialCategory): Material[] => {
  return materials.filter(m => m.category === category);
};
