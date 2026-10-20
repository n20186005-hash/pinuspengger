# Pinus Pengger Guide

Situs satu halaman berbahasa Indonesia untuk panduan kunjungan independen ke Hutan Pinus Pengger di Dlingo, Kabupaten Bantul, Daerah Istimewa Yogyakarta.

## Menjalankan secara lokal

Proyek ini menggunakan Node.js `22.13.0` dan pnpm `10.4.1`.

```bash
corepack pnpm install --frozen-lockfile
pnpm check
pnpm build
```

参考图片、品牌徽记与装饰图统一放在 `public/assets/`（例如 `public/assets/pinus-pengger-hand.webp`）。Astro 构建时会自动把 `public/` 原样复制到 `dist/`，因此 `dist/assets/` 直接可用，生产产物不依赖运行时图片外链，也不需要任何额外的复制脚本。

## Domain dan sitemap

Domain produksi sudah ditetapkan tetap di `astro.config.mjs` (`https://pinuspengger.com`), sehingga tag kanonik, URL absolut Open Graph, dan `sitemap-index.xml` selalu dihasilkan saat build. Untuk menimpa ke domain lain saat build, gunakan variabel `SITE_URL`:

```bash
SITE_URL=https://contoh-domain-anda.id pnpm build
```

Integrasi `@astrojs/sitemap` selalu aktif karena `site` selalu terdefinisi. Sitemap tidak menulis `lastmod` buatan. Pastikan `public/robots.txt` menunjuk ke `sitemap-index.xml` dan `public/_headers` mengirim HSTS serta header keamanan.

## Cloudflare Workers Static Assets

Proyek memakai Workers Static Assets melalui `wrangler.jsonc` di root. Konfigurasi tersebut berisi `name`, `compatibility_date`, dan `assets.directory` relatif terhadap file konfigurasi sendiri; tidak ada konfigurasi yang disalin ke `dist`, sehingga tidak terjadi penggandaan jalur seperti `dist/dist`.

```bash
pnpm deploy
```

## Sumber dan catatan editorial

Informasi ringkas dikompilasi dari [Peta Potensi Kabupaten Bantul](https://petapotensi.bantulkab.go.id/potensi-detail/hutan-pinus-pengger) serta sumber perjalanan publik yang dicantumkan pada halaman. Informasi operasional dapat berubah; pengunjung perlu mengonfirmasi ke pengelola sebelum berangkat.
