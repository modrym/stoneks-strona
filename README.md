# StoneKS - Strona internetowa firmy kamieniarskiej

Profesjonalna strona internetowa dla firmy kamieniarskiej StoneKS, wykonana w React z wykorzystaniem Vite i Tailwind CSS.

## Funkcjonalności

- 📱 Responsywny design dostosowany do wszystkich urządzeń
- 🎨 Nowoczesny design z wykorzystaniem Tailwind CSS
- 🖼️ Karuzela z przykładowymi realizacjami (Swiper.js)
- 📧 Funkcjonalny formularz kontaktowy
- 🏢 Sekcja "O nas" z informacjami o firmie
- 📞 Szczegółowe informacje kontaktowe
- ⚡ Szybkie ładowanie dzięki Vite

## Technologie

- **React 18** - Framework UI
- **Vite** - Build tool i dev server
- **Tailwind CSS** - Framework CSS
- **Swiper.js** - Biblioteka do karuzeli
- **Lucide React** - Ikony

## Instalacja i uruchomienie

1. **Zainstaluj zależności:**
   ```bash
   npm install
   ```

2. **Uruchom serwer deweloperski:**
   ```bash
   npm run dev
   ```

3. **Zbuduj wersję produkcyjną:**
   ```bash
   npm run build
   ```

4. **Podgląd wersji produkcyjnej:**
   ```bash
   npm run preview
   ```

## Struktura projektu

```
src/
├── components/           # Komponenty React
│   ├── Header.jsx       # Nagłówek z nawigacją
│   ├── Hero.jsx         # Sekcja główna
│   ├── About.jsx        # O firmie
│   ├── ProjectsCarousel.jsx  # Karuzela realizacji
│   ├── ContactForm.jsx  # Formularz kontaktowy
│   └── Footer.jsx       # Stopka
├── App.jsx              # Główny komponent aplikacji
├── main.jsx             # Punkt wejścia React
└── index.css            # Style globalne i Tailwind
```

## Personalizacja

### Zmiana kolorów
Kolory można dostosować w pliku `tailwind.config.js` w sekcji `theme.extend.colors`.

### Dodanie zdjęć
1. Dodaj zdjęcia do folderu `public/images/`
2. Zastąp placeholdery w komponentach odpowiednimi ścieżkami do zdjęć

### Zmiana treści
Edytuj komponenty w folderze `src/components/` aby dostosować:
- Informacje kontaktowe
- Opisy usług
- Przykładowe realizacje
- Dane firmy

### Logo
Zastąp placeholder logo w komponencie `Header.jsx` odpowiednim plikiem graficznym.

## Wdrożenie

Strona może być wdrożona na dowolnym hostingu obsługującym statyczne pliki, np:
- Netlify
- Vercel
- GitHub Pages
- Firebase Hosting

Po wykonaniu `npm run build` pliki gotowe do wdrożenia znajdą się w folderze `dist/`.

## Wsparcie

W przypadku pytań lub problemów, skontaktuj się z zespołem deweloperskim.
