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

import granitStrzegomski from '../assets/images/granit-strzegomski.jpg'
import granitImpala from '../assets/images/materials/granit-impala.jpg'
import granitKuruGrey from '../assets/images/materials/granit-kuru-grey.jpg'
import granitBohusRed from '../assets/images/materials/granit-bohus-red.jpg'
import granitBohusGrey from '../assets/images/materials/granit-bohus-grey.jpg'
import granitViscountWhite from '../assets/images/materials/granit-viscount-white.jpg'
import granitBiancoPerla from '../assets/images/materials/granit-bianco-perla.jpg'
import granitWarangal from '../assets/images/materials/granit-warangal.jpg'

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
  // Granity — najczęściej sprzedawane odmiany
  {
    id: 'granit-impala',
    name: 'Impala',
    category: 'granit',
    description: 'Ciemnoszary do prawie czarnego, drobnoziarnisty granit pochodzenia południowoafrykańskiego. Jednolita struktura z delikatnymi jaśniejszymi wtrętami. Wybierany chętnie na nagrobki i pomniki.',
    features: ['Głęboki ciemny odcień', 'Drobne, jednorodne ziarno', 'Wysoka trwałość'],
    image: granitImpala,
  },
  {
    id: 'granit-kuru-grey',
    name: 'Kuru Grey',
    category: 'granit',
    description: 'Fiński granit o średnioszarej, wyjątkowo jednorodnej barwie i drobnym ziarnie. Uniwersalny wybór — sprawdza się zarówno w kamieniarstwie nagrobkowym, jak i architektonicznym.',
    features: ['Jednorodna szarość', 'Drobnoziarnisty', 'Skandynawska jakość'],
    image: granitKuruGrey,
  },
  {
    id: 'granit-bohus-red',
    name: 'Bohus Red',
    category: 'granit',
    description: 'Szwedzki granit o intensywnej, czerwono-różowej barwie i gruboziarnistej strukturze z wyraźnie widocznymi kryształami. Klasyczny materiał na okazałe nagrobki i pomniki.',
    features: ['Wyrazista czerwień', 'Gruboziarnisty', 'Odporny na warunki atmosferyczne'],
    image: granitBohusRed,
  },
  {
    id: 'granit-bohus-grey',
    name: 'Bohus Grey',
    category: 'granit',
    description: 'Szwedzki granit o jasnoszarej barwie z ciepłym, różowo-beżowym odcieniem i gruboziarnistej strukturze. Elegancka alternatywa dla klasycznych szarych granitów.',
    features: ['Ciepły odcień szarości', 'Gruboziarnisty', 'Trwałość na dziesięciolecia'],
    image: granitBohusGrey,
  },
  {
    id: 'granit-viscount-white',
    name: 'Viscount White',
    category: 'granit',
    description: 'Indyjski granit o białej barwie z charakterystycznymi ciemnoszarymi żyłami przypominającymi marmur. Efektowny materiał na blaty i elementy dekoracyjne.',
    features: ['Marmuropodobne żyłkowanie', 'Wysoka odporność', 'Elegancki wygląd'],
    image: granitViscountWhite,
  },
  {
    id: 'granit-bianco-perla',
    name: 'Bianco Perla',
    category: 'granit',
    description: 'Jasny, kremowo-biały granit z delikatnym, drobnym kropkowaniem. Subtelny i elegancki — chętnie wybierany do nowoczesnych nagrobków i pomników rodzinnych.',
    features: ['Jasna, spokojna kolorystyka', 'Delikatna struktura', 'Uniwersalne zastosowanie'],
    image: granitBiancoPerla,
  },
  {
    id: 'granit-warangal',
    name: 'Warangal',
    category: 'granit',
    description: 'Indyjski granit o czarno-szarej barwie ze średnioziarnistą strukturą i wyraźnymi jasnymi kryształami. Popularny na nagrobki dzięki dobremu stosunkowi jakości do ceny.',
    features: ['Kontrastowy wygląd', 'Średnioziarnisty', 'Ekonomiczny wybór'],
    image: granitWarangal,
  },

  {
    id: 'granit-strzegomski',
    name: 'Granit Strzegomski',
    category: 'granit',
    description: 'Popularny polski granit o szarej barwie z drobnymi czarnymi i białymi kryształami. Doskonały do nagrobków i elementów architektonicznych.',
    features: ['Wysoka mrozoodporność', 'Niska nasiąkliwość', 'Łatwy w obróbce'],
    image: granitStrzegomski,
  },

  /* Odmiany zachowane dla referencji — obecnie nieużywane w ofercie
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
  */

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
