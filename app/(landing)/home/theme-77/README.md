# Theme 77: Neon Gradient Art Deco

## Konsep & Filosofi Desain

Theme 77 menggabungkan kemewahan klasik Art Deco dengan sentuhan neon dan gradien modern. Setiap elemen menampilkan pola geometris, simetri, dan warna-warna neon yang berani (ungu, pink, cyan) untuk menciptakan landing page yang elegan, futuristik, dan sangat visual.

- **Art Deco:** Simetri, garis tegas, pola geometris, dan kemewahan era 1920-an.
- **Neon Gradient:** Efek gradien neon yang dinamis, memberikan nuansa modern dan hidup.
- **Animasi:** Floating, sweep, pulse, dan spin untuk menghidupkan elemen.

## Komponen

1. **art-deco-hero.tsx**
   - Hero section dengan judul besar, tombol aksi, dan dekorasi sudut Art Deco.
2. **neon-features.tsx**
   - Grid fitur dengan ikon, gradien neon, dan border animasi.
3. **gradient-services.tsx**
   - Showcase layanan dengan kartu simetris dan efek sweep.
4. **deco-showcase.tsx**
   - Galeri showcase desain Art Deco dengan grid dan tombol aksi.
5. **neon-pricing.tsx**
   - Pricing table dengan highlight "Most Popular" dan animasi neon.
6. **art-deco-contact.tsx**
   - Form kontak, info, dan social links dengan dekorasi Art Deco.

## Animasi & Efek Khusus

- **.animate-art-deco-gear**: Rotasi pola gear Art Deco.
- **.animate-art-deco-flow**: Gradien bergerak diagonal.
- **.animate-art-deco-float**: Floating halus pada elemen dekoratif.
- **.animate-art-deco-ray**: Efek sinar neon berputar.
- **.animate-art-deco-sweep**: Sweep border animasi pada hover.
- **.animate-neon-pulse**: Efek pulse neon pada border dan ikon.
- **.animate-neon-bars**: Loading bar neon.
- **.animate-neon-spin**: Rotasi ikon/geometri.
- **.animate-neon-particle**: Partikel neon bergerak.
- **.animate-neon-border**: Border neon berdenyut.
- **.animate-neon-scanlines**: Scanlines neon pada background.
- **.animate-neon-atmosphere**: Efek glow atmosfer neon.

## Implementasi Teknis

- Semua komponen di-lazy-load dengan fallback animasi custom.
- CSS animasi ditambahkan di `globals.css`.
- Komponen terintegrasi di home page dan template switcher.
- Responsif dan mendukung dark mode.

## Use Case & Kustomisasi

- Cocok untuk startup, agensi kreatif, event, atau produk digital yang ingin tampil beda.
- Mudah diubah warna neon, pola, dan animasi via Tailwind dan CSS custom.
- Setiap section dapat diatur urutan/visibility-nya sesuai kebutuhan.

## Performance & Accessibility

- Lazy loading untuk semua komponen utama.
- Animasi dioptimalkan agar tidak mengganggu performa.
- Kontras warna tinggi, tombol besar, dan form aksesibel.

## Future Enhancement

- Menambah variasi pola Art Deco SVG.
- Opsi tema warna neon lain (biru, hijau, kuning).
- Integrasi animasi interaktif pada hover/click.

## Struktur File

```
app/(landing)/home/theme-77/
├── components/
│   ├── art-deco-hero.tsx
│   ├── neon-features.tsx
│   ├── gradient-services.tsx
│   ├── deco-showcase.tsx
│   ├── neon-pricing.tsx
│   └── art-deco-contact.tsx
├── index.tsx
└── README.md
```

---

**Theme 77: Neon Gradient Art Deco** — Perpaduan kemewahan klasik dan neon modern untuk landing page yang benar-benar berbeda. 