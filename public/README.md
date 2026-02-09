# Public Folder - Struktura za slike

Ovde ubacujete sve statičke resurse (slike, PDF-ove, itd.)

## 📁 Struktura foldera:

### `/flags/` - Zastave
Ubacite zastavu Srpskog pokreta Monarhista ovde:
- `monarhista-logo.png` ili `monarhista-logo.svg`
- Preporučena veličina: 400x300px ili veća (za retina displays)

### `/logos/` - Logoi
Dodatni logoi ili varijante:
- `logo-white.png` - beli logo (za tamnu pozadinu)
- `logo-color.png` - glavni logo

### `/images/` - Opšte slike
- Hero slike
- Slike za vesti i članke
- Background slike

### `/members/` - Slike članova predsedništva
Imenovati po šablonu: `ime-prezime.jpg`
Primer:
- `petar-petrovic.jpg`
- `marko-markovic.jpg`
Preporučena veličina: 400x400px (kvadrat)

## 🖼️ Kako koristiti slike u kodu:

### Next.js Image component (preporučeno):
```tsx
import Image from 'next/image';

<Image
  src="/logos/monarhista-logo.png"
  alt="Logo Srpskog pokreta Monarhista"
  width={300}
  height={200}
  priority // za hero slike
/>
```

### Standardni HTML img tag:
```tsx
<img src="/images/hero-image.jpg" alt="Opis slike" />
```

### Background slike u CSS:
```css
background-image: url('/images/background.jpg');
```

## 📏 Preporuke za slike:

- **Format:** JPG za fotografije, PNG za logoe sa transparencijom, SVG za vektorsku grafiku
- **Optimizacija:** Kompresujte slike pre upload-a (TinyPNG, ImageOptim)
- **Veličina:** Maksimum 2MB po slici
- **Dimenzije:** Minimum 1920px širina za hero slike
- **Називи fajlova:** Koristite kebab-case (npr. `predsednik-udruženja.jpg`)

## ✅ Primer strukture nakon dodavanja slika:

```
public/
├── flags/
│   └── monarhista-zastava.png
├── logos/
│   ├── logo-main.png
│   └── logo-white.png
├── images/
│   ├── hero-home.jpg
│   ├── tribunа-2025.jpg
│   └── background-pattern.svg
└── members/
    ├── petar-petrovic.jpg
    ├── ana-jovanovic.jpg
    └── marko-nikolic.jpg
```
