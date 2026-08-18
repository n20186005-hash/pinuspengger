# Pinus Pengger Guide

Situs satu halaman berbahasa Indonesia untuk panduan kunjungan independen ke Hutan Pinus Pengger di Dlingo, Kabupaten Bantul, Daerah Istimewa Yogyakarta.

## Menjalankan secara lokal

Proyek ini menggunakan Node.js `22.13.0` dan pnpm `10.4.1`.

```bash
corepack pnpm install --frozen-lockfile
pnpm check
pnpm build
```

ZIP 解压后请保留 `content-based-site/` 与同级的 `webdev-static-assets/pinus-pengger-delivery/` 目录关系。构建脚本会将其中已压缩的照片、品牌徽记和装饰图复制到 `dist/assets/`，因此生产产物不依赖运行时图片外链。

## Domain dan sitemap

Satu-satunya konfigurasi domain berada di `SITE_URL` pada `astro.config.mjs`. Biarkan kosong sebelum domain tersedia; build tetap berhasil dan tag absolut akan dihilangkan. Saat domain sudah tersedia, gunakan misalnya:

```bash
SITE_URL=https://contoh-domain-anda.id pnpm build
```

Integrasi `@astrojs/sitemap` hanya aktif ketika `SITE_URL` diatur. Sitemap tidak menulis `lastmod` buatan.

## Cloudflare Workers Static Assets

Proyek memakai Workers Static Assets melalui `wrangler.jsonc` di root. Konfigurasi tersebut berisi `name`, `compatibility_date`, dan `assets.directory` relatif terhadap file konfigurasi sendiri; tidak ada konfigurasi yang disalin ke `dist`, sehingga tidak terjadi penggandaan jalur seperti `dist/dist`.

```bash
pnpm deploy
```

## Sumber dan catatan editorial

Informasi ringkas dikompilasi dari [Peta Potensi Kabupaten Bantul](https://petapotensi.bantulkab.go.id/potensi-detail/hutan-pinus-pengger) serta sumber perjalanan publik yang dicantumkan pada halaman. Informasi operasional dapat berubah; pengunjung perlu mengonfirmasi ke pengelola sebelum berangkat.
