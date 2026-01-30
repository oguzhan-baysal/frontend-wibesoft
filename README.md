# SHOP.CO - E-Commerce Web Application

Modern ve responsive bir e-ticaret web uygulaması. Bu proje, Wibesoft Yazılım teknik değerlendirme görevi kapsamında geliştirilmiştir.

## Demo

Uygulama aşağıdaki ekranları içermektedir:

- **Ana Sayfa**: Ürün listeleme, hero banner, marka logoları
- **Ürün Detay**: Ürün bilgileri, renk/beden seçimi, sepete ekleme
- **Sepet**: Sepet yönetimi, adet güncelleme, toplam hesaplama

## Teknolojiler

| Teknoloji | Açıklama |
|-----------|----------|
| **Next.js 14** | React framework (App Router) |
| **TypeScript** | Tip güvenliği |
| **TailwindCSS** | UI styling |
| **TanStack Query v5** | API state yönetimi ve cache |
| **Zustand** | Global state yönetimi (Sepet) |
| **OpenAPI Codegen** | Otomatik API client oluşturma |
| **Axios** | HTTP client |

## Kurulum

### Gereksinimler

- Node.js 18+ 
- npm veya yarn

### Adımlar

1. **Repository'yi klonlayın**

```bash
git clone <repository-url>
cd frontend_task
```

2. **Bağımlılıkları yükleyin**

```bash
npm install
```

3. **Geliştirme sunucusunu başlatın**

```bash
npm run dev
```

4. **Tarayıcıda açın**

```
http://localhost:3000
```

## Proje Yapısı

```
src/
├── app/                    # Next.js App Router sayfaları
│   ├── page.tsx           # Ana sayfa
│   ├── products/[id]/     # Ürün detay sayfası
│   ├── cart/              # Sepet sayfası
│   ├── layout.tsx         # Root layout
│   └── providers.tsx      # React Query provider
├── components/
│   ├── layout/            # Header, Footer, TopBanner
│   ├── ui/                # Button, Rating, Spinner, etc.
│   ├── product/           # ProductCard, ProductGrid
│   ├── cart/              # CartItem, CartSummary
│   └── home/              # HeroSection
├── api/
│   └── generated/         # OpenAPI codegen çıktıları
├── store/
│   └── useCartStore.ts    # Zustand sepet store
├── lib/
│   └── utils.ts           # Yardımcı fonksiyonlar
└── types/
    └── index.ts           # TypeScript tipleri
```

## Özellikler

### Ürün Listeleme
- FakeStore API'den ürün verilerini çekme
- Loading skeleton ile yükleme durumu gösterimi
- Hata durumunda kullanıcı dostu mesaj ve yeniden deneme
- Responsive grid yapısı (4/3/2 kolon)

### Ürün Detay
- Büyük ürün görseli ve thumbnail'lar
- Renk ve beden seçimi
- Adet seçici
- Sepete ekleme fonksiyonu
- Yıldız rating gösterimi

### Sepet
- LocalStorage ile kalıcı sepet
- Adet artırma/azaltma
- Ürün silme
- Alt toplam, indirim ve toplam hesaplama
- Promo kodu alanı

### UI/UX
- Figma tasarımına uygun görsel tutarlılık
- Mobil uyumlu responsive tasarım
- Accessibility özellikleri (aria-labels, keyboard navigation)
- Smooth geçişler ve hover efektleri

## API

Uygulama [FakeStore API](https://fakestoreapi.com/) kullanmaktadır.

### Kullanılan Endpoint'ler

- `GET /products` - Tüm ürünleri listele
- `GET /products/{id}` - Tek ürün detayı

## Environment Variables

```env
NEXT_PUBLIC_API_URL=https://fakestoreapi.com
```

## Scripts

```bash
# Geliştirme sunucusu
npm run dev

# Production build
npm run build

# Production sunucusu
npm start

# Lint kontrolü
npm run lint

# API client oluşturma (OpenAPI)
npm run generate-api
```

## Varsayımlar ve Notlar

1. **API'de olmayan veriler**: Beden, renk ve bazı rating verileri API'de bulunmadığından statik/rastgele değerler kullanılmıştır.

2. **Sepet state'i**: Zustand persist middleware ile LocalStorage'da saklanmaktadır.

3. **İndirim hesaplaması**: Demo amaçlı olarak bazı ürünlerde %20 indirim uygulanmaktadır.

4. **Responsive breakpoints**: 
   - Mobile: < 640px
   - Tablet: 640px - 1024px
   - Desktop: > 1024px

## Lisans

Bu proje Wibesoft Yazılım teknik değerlendirmesi için hazırlanmıştır.
