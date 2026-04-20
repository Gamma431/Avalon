const product = [
  {
    id: 1,
    name: "Intel Core i9-13900K",
    img: "https://media.ldlc.com/r1600/ld/products/00/05/98/23/LD0005982301.jpg",
    title: "24-Core Desktop Processor",
    price: 589,
    category: "CPU",
    rating: 4.8
  },
  {
    id: 2,
    name: "Intel Core i7-13700K",
    img: "https://www.binarylogic.com.bd/images/product_image/13700-cpu-core-i7-intel-13th-gen-price.webp",
    title: "16-Core Gaming CPU",
    price: 399,
    category: "CPU",
    rating: 4.7
  },
  {
    id: 3,
    name: "Intel Core i5-13600K",
    img: "https://famberzbuilt.in/product/1841268197839813.webp",
    title: "14-Core Mid-Range CPU",
    price: 289,
    category: "CPU",
    rating: 4.9
  },
  {
    id: 4,
    name: "Intel Core i9-12900K",
    img: "https://www.scan.co.uk/images/products/xlarge/3390555-xl-b.jpg",
    title: "16-Core High Performance",
    price: 449,
    category: "CPU",
    rating: 4.6
  },
  {
    id: 5,
    name: "AMD Ryzen 9 7950X",
    img: "https://i5.walmartimages.com/asr/040a737f-6021-42f0-ae10-5a92ad5fb5c6.f5182fe2ba7aada30c40474a30c56be6.jpeg?odnHeight=768&odnWidth=768&odnBg=FFFFFF",
    title: "16-Core Zen 4 CPU",
    price: 549,
    category: "CPU",
    rating: 4.9
  },
  {
    id: 6,
    name: "AMD Ryzen 7 7800X3D",
    img: "https://www.amd.com/content/dam/amd/en/images/products/processors/ryzen/2505503-ryzen-7-7800x3d.jpg",
    title: "8-Core Gaming CPU with 3D Cache",
    price: 449,
    category: "CPU",
    rating: 4.9
  },
  {
    id: 7,
    name: "AMD Ryzen 5 7600X",
    img: "https://m.media-amazon.com/images/I/51m7L9bQI8L.jpg",
    title: "6-Core Zen 4 Processor",
    price: 249,
    category: "CPU",
    rating: 4.7
  },
  {
    id: 8,
    name: "AMD Ryzen 9 5900X",
    img: "https://assetsio.gnwcdn.com/amd-ryzen-9-5900x-box.jpg?width=690&quality=85&format=jpg&dpr=3&auto=webp",
    title: "12-Core Zen 3 CPU",
    price: 349,
    category: "CPU",
    rating: 4.8
  },
  {
    id: 9,
    name: "Intel Core i3-13100",
    img: "https://down-id.img.susercontent.com/file/id-11134207-7rasc-m37hksz68igf43",
    title: "4-Core Budget CPU",
    price: 149,
    category: "CPU",
    rating: 4.5
  },
  {
    id: 10,
    name: "AMD Ryzen 7 5700X",
    img: "https://www.pcguide.com/wp-content/uploads/2023/11/5700X-4.jpg",
    title: "8-Core Mid-Range CPU",
    price: 199,
    category: "CPU",
    rating: 4.7
  },
  {
    id: 11,
    name: "NVIDIA RTX 4090",
    img: "https://www.pcworld.com/wp-content/uploads/2025/06/Nvidia-GeForce-RTX-4090-1.jpg?quality=50&strip=all&w=1024",
    title: "24GB Flagship GPU",
    price: 1599,
    category: "GPU",
    rating: 4.9
  },
  {
    id: 12,
    name: "NVIDIA RTX 4080",
    img: "https://www.reviews.org/app/uploads/2022/11/rtx4080rtx-4080.jpg",
    title: "16GB High-End GPU",
    price: 1199,
    category: "GPU",
    rating: 4.8
  },
  {
    id: 13,
    name: "NVIDIA RTX 4070 Ti",
    img: "https://assetsio.gnwcdn.com/Nvidia-GeForce-RTX-4070-Ti-MSI-Suprim-X-12G-(3).JPG?width=1600&height=900&fit=crop&quality=100&format=png&enable=upscale&auto=webp",
    title: "12GB Performance GPU",
    price: 799,
    category: "GPU",
    rating: 4.7
  },
  {
    id: 14,
    name: "NVIDIA RTX 4070",
    img: "https://cdn.arstechnica.net/wp-content/uploads/2023/04/IMG_0984.jpeg",
    title: "12GB Mid-Range GPU",
    price: 549,
    category: "GPU",
    rating: 4.7
  },
  {
    id: 15,
    name: "NVIDIA RTX 4060 Ti",
    img: "https://www.pcworld.com/wp-content/uploads/2025/06/DSC02130.jpg?quality=50&strip=all&w=1024",
    title: "8GB Budget GPU",
    price: 399,
    category: "GPU",
    rating: 4.6
  },
  {
    id: 16,
    name: "AMD Radeon RX 7900 XTX",
    img: "https://www.slashgear.com/img/gallery/amd-rx-7900-xt-graphics-card-review-the-price-of-4k-gaming/intro-1677259098.jpg",
    title: "24GB Flagship AMD GPU",
    price: 999,
    category: "GPU",
    rating: 4.8
  },
  {
    id: 17,
    name: "AMD Radeon RX 7900 XT",
    img: "https://www.techpowerup.com/review/asrock-radeon-rx-7900-xt-phantom-gaming-white/images/title.jpg",
    title: "20GB High-End GPU",
    price: 899,
    category: "GPU",
    rating: 4.7
  },
  {
    id: 18,
    name: "AMD Radeon RX 7800 XT",
    img: "https://m.media-amazon.com/images/I/71nJL5i5h3L.jpg",
    title: "16GB Mid-Range GPU",
    price: 499,
    category: "GPU",
    rating: 4.7
  },
  {
    id: 19,
    name: "AMD Radeon RX 7700 XT",
    img: "https://m.media-amazon.com/images/I/61-D5GncsNL._AC_UF1000,1000_QL80_.jpg",
    title: "12GB Performance GPU",
    price: 449,
    category: "GPU",
    rating: 4.6
  },
  {
    id: 20,
    name: "NVIDIA RTX 3060 12GB",
    img: "https://images.nvidia.com/aem-dam/Solutions/geforce/ampere/rtx-3060-ti/geforce-rtx-3060-ti-product-gallery-full-screen-3840-1-bl.jpg",
    title: "Popular Budget GPU",
    price: 299,
    category: "GPU",
    rating: 4.5
  },
  {
    id: 21,
    name: "Corsair Vengeance 32GB DDR5",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBX_0cKdLLRYFwmiZX2ME1mHwPvJKAzXqBlw&s",
    title: "6000MHz RGB RAM",
    price: 119,
    category: "RAM",
    rating: 4.8
  },
  {
    id: 22,
    name: "G.Skill Trident Z5 RGB 32GB",
    img: "https://img.overclockers.co.uk/images/MEM-GSK-01359/31e20fe3d04b8a24e55740d8d506a1e0.jpg",
    title: "DDR5 6400MHz Memory",
    price: 129,
    category: "RAM",
    rating: 4.9
  },
  {
    id: 23,
    name: "Kingston Fury Beast 32GB",
    img: "https://mtech.am/assets/images/a3/a38208_Sev-2.webp",
    title: "DDR5 5600MHz Kit",
    price: 99,
    category: "RAM",
    rating: 4.7
  },
  {
    id: 24,
    name: "Corsair Vengeance LPX 16GB",
    img: "https://m.media-amazon.com/images/I/71jGZ9WpjTL.jpg",
    title: "DDR4 3600MHz RAM",
    price: 49,
    category: "RAM",
    rating: 4.7
  },
  {
    id: 25,
    name: "Team Group T-Force Delta RGB 32GB",
    img: "https://m.media-amazon.com/images/I/81ov4cFmdaL.jpg",
    title: "RGB DDR5 6000MHz",
    price: 109,
    category: "RAM",
    rating: 4.7
  },
  {
    id: 26,
    name: "Crucial RAM 16GB DDR4",
    img: "https://www.bhphotovideo.com/images/fb/crucial_cp2k16g60c36u5w_pro_ddr5_ram_32gb_1826529.jpg",
    title: "3200MHz Budget RAM",
    price: 39,
    category: "RAM",
    rating: 4.6
  },
  {
    id: 27,
    name: "Samsung 990 Pro 1TB",
    img: "https://shop.acssllc.ae/wp-content/uploads/2024/10/Samsung-990-PRO-2TB-SSD-2.png.webp",
    title: "PCIe 4.0 NVMe SSD",
    price: 89,
    category: "SSD",
    rating: 4.9
  },
  {
    id: 28,
    name: "WD Black 1TB",
    img: "https://www.scan.co.uk/images/products/xlarge/3448873-xl-a.jpg",
    title: "High Speed Gaming SSD",
    price: 149,
    category: "SSD",
    rating: 4.8
  },
  {
    id: 29,
    name: "Samsung 980 Pro 2TB",
    img: "https://eldorado.am/media/catalog/product/cache/b636eac9f5e866652b5cbe8cee86d97c/s/a/samsung_ssd_m.2_nvme_980_pro_1tb.jpg",
    title: "NVMe SSD with Heatsink",
    price: 159,
    category: "SSD",
    rating: 4.8
  },
  {
    id: 30,
    name: "Crucial P5 Plus 1TB",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxGxHJ0cEVZAcHt2E6bXDQUuvfi5FddbTtCw&s",
    title: "PCIe 4.0 Internal SSD",
    price: 79,
    category: "SSD",
    rating: 4.7
  },
  {
    id: 31,
    name: "Kingston KC3000 1TB",
    img: "https://www.mtech.am/assets/images/46/46b882_KC3000-2.png",
    title: "High Performance NVMe",
    price: 84,
    category: "SSD",
    rating: 4.7
  },
  {
    id: 32,
    name: "Seagate FireCuda 530 1TB",
    img: "https://m.media-amazon.com/images/I/61kdV+Nig5L.jpg",
    title: "PS5 Compatible SSD",
    price: 99,
    category: "SSD",
    rating: 4.8
  },
  {
    id: 33,
    name: "ASUS ROG Strix Z790-E",
    img: "https://i5.walmartimages.com/asr/9ffd25a1-760b-4d4b-8d11-4540eb40d5c7.83d5b3556058acb05aa4c058cc91aa0c.jpeg?odnHeight=768&odnWidth=768&odnBg=FFFFFF",
    title: "Intel Z790 Motherboard",
    price: 399,
    category: "Motherboard",
    rating: 4.8
  },
  {
    id: 34,
    name: "MSI MPG B650 Carbon WiFi",
    img: "https://cdn.cs.1worldsync.com/29/25/292569d6-18e0-4c17-a489-f545d3bdc46b.jpg",
    title: "AMD B650 Motherboard",
    price: 299,
    category: "Motherboard",
    rating: 4.7
  },
  {
    id: 35,
    name: "Gigabyte Z790 Aorus Elite",
    img: "https://i.ebayimg.com/images/g/-M0AAOSwKrNmIPid/s-l400.jpg",
    title: "Intel Z790 Gaming Board",
    price: 249,
    category: "Motherboard",
    rating: 4.7
  },
  {
    id: 36,
    name: "ASUS TUF Gaming B650-Plus",
    img: "https://gfx3.senetic.com/akeneo-catalog/0/5/b/1/05b1dcd2f3d5b82ea7279e999a0a9b5abf140fa0_1754407_90MB1BY0_M0EAY0_image5.jpg",
    title: "AMD B650 Durability",
    price: 199,
    category: "Motherboard",
    rating: 4.7
  },
  {
    id: 37,
    name: "MSI PRO Z790-A WiFi",
    img: "https://m.media-amazon.com/images/I/81+w9dj258L.jpg",
    title: "Intel Z790 Pro Board",
    price: 229,
    category: "Motherboard",
    rating: 4.6
  },
  {
    id: 38,
    name: "ASRock B760M Steel Legend",
    img: "https://www.trippodo.com/754114-medium_default/asrock-b760m-steel-legend-wifi-intel-b760-lga-1700-micro-atx.jpg",
    title: "Micro-ATX Motherboard",
    price: 149,
    category: "Motherboard",
    rating: 4.6
  },
  {
    id: 39, 
    name: "Corsair RM1000x 1000W",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsXZ23FJItevvD3c9oD1q5pZ-JJ0fAMxWjyw&s",
    title: "1000W 80+ Gold PSU",
    price: 189,
    category: "PSU",
    rating: 4.9
  },
  {
    id: 40,
    name: "Seasonic Focus GX-850",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGk-iSMaQHmD38Sae04oQ4vvA2o6-LaJdd6w&s",
    title: "850W 80+ Gold Modular",
    price: 149,
    category: "PSU",
    rating: 4.8
  },
  {
    id: 42,
    name: "Corsair RM750e 750W",
    img: "https://www.techpowerup.com/review/corsair-rm-750-2019/images/box_front.jpg",
    title: "750W 80+ Gold PSU",
    price: 99,
    category: "PSU",
    rating: 4.7
  },
  {
    id: 43,
    name: "be quiet! Pure Power 12 M 750W",
    img: "https://www.bequiet.com/volumes/pim/powersupply/purepower/purepower12m/360/750W/001.jpg",
    title: "750W Quiet PSU",
    price: 109,
    category: "PSU",
    rating: 4.7
  },
  {
    id: 44,
    name: "Thermaltake Toughpower GF3 750W",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFxBd9-AS5AyEE6p9W-_M1QW6JaBmL1tHO_g&s",
    title: "ATX 3.0 Compatible PSU",
    price: 119,
    category: "PSU",
    rating: 4.6
  },
  {
    id: 45,
    name: "Lian Li O11 Dynamic EVO",
    img: "https://lian-li.com/wp-content/uploads/2023/12/O11DERGB-006.jpg",
    title: "ATX Gaming Case White",
    price: 169,
    category: "Case",
    rating: 4.9
  },
  {
    id: 46,
    name: "Corsair 5000D Airflow",
    img: "https://www.pcstudio.in/wp-content/uploads/2025/01/CORSAIR-5000D-AIRFLOW-MID-TOWER-CASE-WHITE-3-1.webp",
    title: "High Airflow Case",
    price: 149,
    category: "Case",
    rating: 4.8
  },
  {
    id: 47,
    name: "NZXT H9 Flow",
    img: "https://www.bhphotovideo.com/images/fb/nzxt_cm_h91fw_01_h9_flow_mid_tower_atx_1765774.jpg",
    title: "Dual Chamber Case",
    price: 159,
    category: "Case",
    rating: 4.8
  },
  {
    id: 48,
    name: "Fractal Design Meshify 2",
    img: "https://i.pcmag.com/imagery/reviews/06f5MfWzU93fWsaiKwq5MUy-1.jpg",
    title: "Mesh Front Panel Case",
    price: 139,
    category: "Case",
    rating: 4.8
  },
  {
    id: 49,
    name: "Phanteks Eclipse G500A",
    img: "https://m.media-amazon.com/images/I/81JDiPfS3ML.jpg",
    title: "High Airflow Case",
    price: 129,
    category: "Case",
    rating: 4.7
  },
  {
    id: 50,
    name: "Cooler Master MasterBox TD500",
    img: "https://pcinq.com/wp-content/uploads/2022/06/Masterbox-TD500-Mesh_Front.webp",
    title: "Mesh Front ARGB Case",
    price: 99,
    category: "Case",
    rating: 4.7
  },
  {
    id: 51,
    name: "NZXT Kraken Elite 360 RGB",
    img: "https://www.awd-it.co.uk/media/catalog/product/1/7/1723071798-kraken-elite-360-rgb-hero-black.png?optimize=high&bg-color=255,255,255&fit=bounds&height=&width=&canvas=:&format=jpeg",
    title: "360mm Liquid Cooler",
    price: 279,
    category: "Cooling",
    rating: 4.9
  },
  {
    id: 52,
    name: "Corsair iCUE H150i Elite",
    img: "https://static.webx.pk/files/19643/Images/corsair-h150i-elite-capellix-xt-cooler-price-in-pakistan-1-19643-0-211123085032851.jpg",
    title: "360mm RGB AIO",
    price: 199,
    category: "Cooling",
    rating: 4.8
  },
  {
    id: 53,
    name: "Deepcool LT720 360mm",
    img: "https://www.pcstudio.in/wp-content/uploads/2025/01/Deepcool-LT720-360mm-Liquid-Cooler-Black-1-1.webp",
    title: "High Performance AIO",
    price: 139,
    category: "Cooling",
    rating: 4.8
  },
  {
    id: 54,
    name: "Noctua NH-D15",
    img: "https://m.media-amazon.com/images/I/91t48GBv8TL.jpg",
    title: "Premium Air Cooler",
    price: 109,
    category: "Cooling",
    rating: 4.9
  },
  {
    id: 55,
    name: "Cooler Master Hyper 212",
    img: "https://files.coolermaster.com/og-image/hyper-212-rgb-black-1200x630.jpg",
    title: "Budget Air Cooler",
    price: 49,
    category: "Cooling",
    rating: 4.6
  },
  {
    id: 56,
    name: "Arctic Liquid Freezer II 280",
    img: "https://i.ebayimg.com/images/g/DykAAOSw6DZj3P~P/s-l1200.png",
    title: "280mm AIO Cooler",
    price: 99,
    category: "Cooling",
    rating: 4.8
  },
  {
    id: 57,
    name: "Samsung 870 EVO 1TB",
    img: "https://i.pcmag.com/imagery/reviews/06N8mXjD6vcyuSSKbRObIDV-3.fit_lim.size_1050x.png",
    title: "2.5 Inch SATA SSD",
    price: 69,
    category: "Storage",
    rating: 4.7
  },
  {
    id: 58,
    name: "WD Blue 2TB HDD",
    img: "https://techzone.lk/wp-content/uploads/2023/04/wd-2tb-blue-1.jpg",
    title: "Internal Hard Drive",
    price: 69,
    category: "Storage",
    rating: 4.6
  },
  {
    id: 59,
    name: "Seagate BarraCuda 4TB",
    img: "https://m.media-amazon.com/images/I/713+86COo+L.jpg",
    title: "Desktop Hard Drive",
    price: 89,
    category: "Storage",
    rating: 4.6
  },    
  {
    id: 72,
    name: "Noctua NF-A12x25 PWM",
    img: "https://tpucdn.com/review/noctua-nf-a12x25-g2-pwm-fan/images/title.jpg",
    title: "120mm | Premium Quiet Fan",
    price: 32,
    category: "Case Fan",
    rating: 4.9
  },
  {
    id: 73,
    name: "Corsair ML120 Pro RGB",
    img: "https://bermorzone.com.ph/wp-content/uploads/2023/09/ml120-rgb-elite-6500884cac3f2-e1694533838108.webp",
    title: "120mm | Magnetic Levitation | RGB",
    price: 29,
    category: "Case Fan",
    rating: 4.8
  },
  {
    id: 74,
    name: "be quiet! Silent Wings 4 120mm",
    img: "https://www.bequiet.com/volumes/pim/fans/silentwings/silentwings4/xr/120mm/001.jpg",
    title: "120mm | High Airflow | Ultra Quiet",
    price: 24,
    category: "Case Fan",
    rating: 4.8
  },
  {
    id: 75,
    name: "Lian Li UNI FAN SL-INF 120",
    img: "https://lian-li.com/wp-content/uploads/2022/06/uni_fan_inf-photo-04.jpg",
    title: "120mm | Daisy-Chain | Infinity Mirror RGB",
    price: 29,
    category: "Case Fan",
    rating: 4.9
  },
  {
    id: 76,
    name: "Arctic P12 PWM PST",
    img: "https://media.ldlc.com/r1600/ld/products/00/05/96/69/LD0005966952.jpg",
    title: "120mm | Pressure-Optimized | PST Daisy Chain",
    price: 9,
    category: "Case Fan",
    rating: 4.7
  },
  {
    id: 77,
    name: "Phanteks T30-120",
    img: "https://m.media-amazon.com/images/I/71Qr-efGWvL.jpg",
    title: "120mm | 30mm Thick | Extreme Performance",
    price: 28,
    category: "Case Fan",
    rating: 4.9
  },
  {
    id: 78,
    name: "Cooler Master MasterFan SF120M",
    img: "https://files.coolermaster.com/og-image/masterfan-sf120m-argb-1200x630.jpg",
    title: "120mm | Interchangeable Corners | ARGB",
    price: 20,
    category: "Case Fan",
    rating: 4.6
  },
  {
    id: 79,
    name: "NZXT F120 RGB Duo",
    img: "https://www.vedantcomputers.com/image/cache/catalog/assets/product/nzxt/case-fan/rf-d12tf-b1/rf-d12tf-b1-1-800x800.JPG",
    title: "120mm | Dual-Sided RGB Rings",
    price: 24,
    category: "Case Fan",
    rating: 4.7
  },
  {
    id: 80,
    name: "Thermaltake SWAFAN EX12",
    img: "https://thermaltakeusa.com/cdn/shop/files/swafanex_w1.jpg?v=1691179989",
    title: "120mm | Swappable Blades | Magnetic RGB",
    price: 27,
    category: "Case Fan",
    rating: 4.7
  },

  {
    id: 84,
    name: "Apple MacBook Pro 14 M3",
    img: "https://s.list.am/g/200/92322200.webp",
    title: "M3 Chip | 14.2-inch Liquid Retina XDR | 16GB RAM | 512GB SSD",
    price: 1599,
    category: "Notebook",
    rating: 4.9
  },
  {
    id: 85,
    name: "Apple MacBook Air 13 M3",
    img: "https://macfinder.co.uk/wp-content/smush-webp/2023/02/img-MacBook-Air-13-Inch-99681-scaled-1250x1250.jpg.webp",
    title: "M3 Chip | 13.6-inch Liquid Retina | 8GB RAM | 256GB SSD",
    price: 1099,
    category: "Notebook",
    rating: 4.8
  },
  {
    id: 86,
    name: "Dell XPS 15 9530",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQ7PZqj4NDd7mUEZ00Fv4gqhqQmFNQhZRiow&s",
    title: "Intel Core i9-13900H | RTX 4060 | 15.6-inch OLED | 32GB RAM",
    price: 1999,
    category: "Notebook",
    rating: 4.7
  },
  {
    id: 87,
    name: "ASUS ROG Zephyrus G14",
    img: "https://cdn.electronyat.qa/_next/image?url=https%3A%2F%2Fbackend.electronyat.qa%2Fmedia%2Fcatalog%2Fproduct%2Fcache%2F518e522bac1df92102d4b2a1c65a4531%2Fg%2Fa%2Fga402nu-i7161g_1-100.jpg&w=3840&q=90",
    title: "Ryzen 9 7940HS | RTX 4060 | 14-inch QHD+ 165Hz | 16GB RAM",
    price: 1399,
    category: "Notebook",
    rating: 4.8
  },
  {
    id: 88,
    name: "Lenovo ThinkPad X1 Carbon Gen 12",
    img: "https://media.wired.com/photos/66074b80512b41886b088ef2/master/w_1600%2Cc_limit/Lenovo-X1-Carbon-Gen-12-angled-Offwhite-Background-SOURCE-Lenovo.jpg",
    title: "Intel Core Ultra 7 | 14-inch 2.8K OLED | 16GB RAM | 512GB SSD",
    price: 1799,
    category: "Notebook",
    rating: 4.8
  },
  {
    id: 89,
    name: "HP Spectre x360 14",
    img: "https://cdn.mos.cms.futurecdn.net/yF22kh5kVxM2dt2npcp8BG.jpg",
    title: "Intel Core Ultra 7 | 13.5-inch 2.8K OLED Touch | 16GB RAM | 1TB SSD",
    price: 1449,
    category: "Notebook",
    rating: 4.7
  },
  {
    id: 90,
    name: "Microsoft Surface Laptop Studio 2",
    img: "https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/FL1B-BB-00?qlt=90&wid=1253&hei=705&extendN=0.12,0.12,0.12,0.12&bgc=FFFFFFFF&fmt=jpg",
    title: "Intel Core i7-13800H | RTX 4050 | 14.4-inch 120Hz | 16GB RAM",
    price: 1999,
    category: "Notebook",
    rating: 4.6
  },
  {
    id: 91,
    name: "Razer Blade 14",
    img: "https://m.media-amazon.com/images/I/712g5R0vkbL.jpg",
    title: "Ryzen 9 7940HS | RTX 4070 | 14-inch QHD+ 240Hz | 16GB RAM",
    price: 2199,
    category: "Notebook",
    rating: 4.7
  },
  {
    id: 92,
    name: "Acer Swift Go 14",
    img: "https://www.smartbox.am/webroot/myfiles/images/83312546.jpg",
    title: "Intel Core Ultra 5 | 14-inch 2.8K OLED | 8GB RAM | 512GB SSD",
    price: 799,
    category: "Notebook",
    rating: 4.5
  },
  {
    id: 93,
    name: "ASUS Zenbook 14X OLED",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnZbssVbxe8wgDuGrl6CV6-q1ULqvfa1POjA&s",
    title: "Intel Core i7-13700H | 14.5-inch 2.8K 120Hz OLED | 16GB RAM | 1TB SSD",
    price: 1199,
    category: "Notebook",
    rating: 4.7
  },
  {
    id: 94,
    name: "Samsung Galaxy Book3 Ultra",
    img: "https://www.thebarcodewarehouse.co.uk/Images/Product/Default/xlarge/Galaxy-Book3-Ultra-Front.jpg",
    title: "Intel Core i9-13900H | RTX 4070 | 16-inch AMOLED | 32GB RAM",
    price: 2299,
    category: "Notebook",
    rating: 4.6
  },
  {
    id: 95,
    name: "Lenovo Legion Pro 5",
    img: "https://images.fravega.com/f1000/ff887d9fb23f51ce462c08bb5d15467f.jpg",
    title: "Ryzen 7 7745HX | RTX 4060 | 16-inch QHD+ 165Hz | 16GB RAM | 1TB SSD",
    price: 1299,
    category: "Notebook",
    rating: 4.7
  },
  {
    id: 96,
    name: "Logitech MX Master 3S",
    img: "https://www.istudio.store/cdn/shop/files/logitech_mx_master_3s_-_graphite_097855175359.webp?v=1716795724&width=823",
    title: "Wireless Performance Mouse | 8K DPI | Quiet Clicks",
    price: 99,
    category: "Peripheral",
    rating: 4.9
  },
  {
    id: 97,
    name: "Razer DeathAdder V3 Pro",
    img: "https://vega.am/image/cache/catalog/1HRACH/2020/2021/2025/Hulis/Mknik/DeathAdder%20V3%20Pro%20(Black)%20(RZ01-04630100-R3G1)%20(2)-2000x1500.jpg",
    title: "Wireless Gaming Mouse | 30K Optical Sensor | 63g",
    price: 149,
    category: "Peripheral",
    rating: 4.8
  },
  {
    id: 98,
    name: "Logitech G502 X Plus",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPaz8BNH9Dm8a61oEeHLRrPgg80AVmMqHPDw&s",
    title: "Wireless RGB Gaming Mouse | LIGHTFORCE Switches | 13 Buttons",
    price: 139,
    category: "Peripheral",
    rating: 4.8
  },
  {
    id: 99,
    name: "Keychron K2 Pro",
    img: "https://keychron.in/wp-content/uploads/2023/02/Keychron-K2-Pro-QMK-VIA-Wireless-Mechanical-Keyboard-for-Mac-Windows-PBT-keycaps-PCB-screw-in-stabilizer-hot-swappable-red-switch_7f3edd88-59f3-4516-b953-05cdc3d3bece.jpg",
    title: "75% Wireless Mechanical Keyboard | Hot-swappable | QMK/VIA",
    price: 99,
    category: "Peripheral",
    rating: 4.7
  },
  {
    id: 100,
    name: "Logitech MX Mechanical",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCO5Wx4_DvEknSNCg6wJZfCDl3LBFMEp63KQ&s",
    title: "Full-size Wireless Keyboard | Tactile Quiet Switches | Backlit",
    price: 129,
    category: "Peripheral",
    rating: 4.7
  },
  {
    id: 101,
    name: "Corsair K100 RGB",
    img: "https://media.officedepot.com/images/f_auto,q_auto,e_sharpen,h_450/products/8767997/8767997_o51_cn_11069321/8767997",
    title: "Optical-Mechanical Gaming Keyboard | OPX Switches | iCUE Wheel",
    price: 199,
    category: "Peripheral",
    rating: 4.8
  },
  {
    id: 102,
    name: "Razer BlackWidow V4 Pro",
    img: "https://mail.mtech.am/assets/images/57/57034c_Razer-BlackWidow-V4-Pro-75--Orange-Switch--1.jpg",
    title: "Full-size Gaming Keyboard | Yellow Switches | Command Dial",
    price: 179,
    category: "Peripheral",
    rating: 4.7
  },
  {
    id: 103,
    name: "SteelSeries Apex Pro TKL",
    img: "https://s3.us-east-1.amazonaws.com/product-image-bucket-prod-us/784123-Product-1-I-638610175222476904.jpg",
    title: "OmniPoint 2.0 Adjustable Switches | OLED Screen",
    price: 189,
    category: "Peripheral",
    rating: 4.9
  },
  {
    id: 104,
    name: "LG UltraGear 27GR95QE",
    img: "https://media.us.lg.com/transform/ecomm-PDPGallery-1100x730/5a674e43-680c-4027-933c-bd71ee8d94ac/Monitor_27GR95QE-B_gallery_02_5000x5000?io=transform:fill,width:1536",
    title: "27-inch OLED 240Hz | 0.03ms Response | G-Sync Compatible",
    price: 899,
    category: "Peripheral",
    rating: 4.8
  },
  {
    id: 105,
    name: "Dell UltraSharp U2723QE",
    img: "https://i.dell.com/is/image/DellContent/content/dam/ss2/product-images/dell-client-products/peripherals/monitors/u-series/u2723qe/spi/ng/monitor-u2723qe-campaign-hero-504x350-ng.psd?fmt=jpg&wid=504&hei=350",
    title: "27-inch 4K IPS Black | USB-C Hub | 90W PD",
    price: 649,
    category: "Peripheral",
    rating: 4.8
  },
  {
    id: 47,
    name: "Samsung Odyssey Neo G8",
    img: "https://www.starpromotionlb.com/wp-content/uploads/2023/08/LC34G55TWWMXZN.jpg",
    title: "32-inch 4K 240Hz | Mini-LED | 1000R Curve | HDR2000",
    price: 1299,
    category: "Peripheral",
    rating: 4.7
  },
  {
    id: 48,
    name: "ASUS ROG Swift PG32UQX",
    img: "https://image.ceneostatic.pl/data/products/172453102/a7dbe15c-e6d8-4848-a369-25d7cb0e285e_i-asus-26-5-rog-swift-oled-pg27aqdp-90lm0a20b01a70.jpg",
    title: "32-inch 4K 144Hz | Mini-LED | G-Sync Ultimate | HDR1400",
    price: 2499,
    category: "Peripheral",
    rating: 4.6
  },
  {
    id: 49,
    name: "Sony WH-1000XM5",
    img: "https://vega.am/image/cache/catalog/1HRACH/2020/2021/2024/Noyember/Akanjakal/WH-1000XM5%20(Black)%20(3)-2000x1500.jpg",
    title: "Wireless Noise Canceling Headphones | 30hr Battery | LDAC",
    price: 399,
    category: "Peripheral",
    rating: 4.9
  },
  {
    id: 50,
    name: "SteelSeries Arctis Nova Pro Wireless",
    img: "https://www.maxgaming.com/bilder/artiklar/zoom/21610_1.jpg?m=1759911631",
    title: "Dual Wireless Gaming Headset | Hot-swappable Batteries | ANC",
    price: 349,
    category: "Peripheral",
    rating: 4.8
  },
  {
    id: 51,
    name: "Logitech G Pro X 2 Lightspeed",
    img: "https://gplay.bg/UserFiles/Product/gallery_1/gallery-1-pro-x-2-lightspeed-gaming-headset-white.png?block&cache&w=1000&h=1000",
    title: "Wireless Gaming Headset | Graphene Drivers | 50hr Battery",
    price: 249,
    category: "Peripheral",
    rating: 4.8
  },
  {
    id: 52,
    name: "HyperX Cloud III Wireless",
    img: "https://m.media-amazon.com/images/I/71A6q5UaPFL.jpg",
    title: "Wireless Gaming Headset | 120hr Battery | DTS Headphone:X",
    price: 169,
    category: "Peripheral",
    rating: 4.7
  },
  {
    id: 53,
    name: "Elgato Stream Deck MK.2",
    img: "https://www.maxgaming.com/bilder/artiklar/zoom/19148_1.jpg?m=1681890358",
    title: "15 Macro Keys | Customizable LCD Buttons | Hotkey Station",
    price: 149,
    category: "Peripheral",
    rating: 4.9
  },
  {
    id: 57,
    name: "Elgato Wave:3",
    img: "https://res.cloudinary.com/elgato-pwa/image/upload/v1752061178/2025/Color%20Drop/ATF/Wave:3/Wave-3-Olive-Green-ATF-Main.jpg",
    title: "USB Condenser Mic | Clipguard Anti-distortion | Capacitive Mute",
    price: 149,
    category: "Peripheral",
    rating: 4.7
  },
  {
    id: 58,
    name: "Shure MV7",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKSLGS2jov9By3VbXG_Ktw5895oJtUz6vn-g&s",
    title: "Dynamic USB/XLR Microphone | Voice Isolation | Touch Panel",
    price: 249,
    category: "Peripheral",
    rating: 4.9
  },
]


export default function getProductscd() {
  const shuffled = [...product].sort(() => Math.random() - 0.4);
  return shuffled;
}