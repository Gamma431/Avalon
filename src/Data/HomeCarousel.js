const carouseldata = [
  {
    id: 1,
    name: "Intel Core i5-12400F",
    img: "https://images.unsplash.com/photo-1760114333176-09b9116eedf8?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "6-Core Gaming Processor",
    price: 165,
    category: "CPU",
    rating: 4.7
  },
  {
    id: 2,
    name: "AMD Ryzen 5 5600",
    img: "https://images.unsplash.com/photo-1753097617151-b8994eb0bb3e?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Zen 3 Performance CPU",
    price: 150,
    category: "CPU",
    rating: 4.8
  },
  {
    id: 3,
    name: "NVIDIA RTX 3060",
    img: "https://images.unsplash.com/photo-1762838362452-fea83ce9c34c?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "12GB Gaming Graphics Card",
    price: 320,
    category: "GPU",
    rating: 4.6
  },
  {
    id: 4,
    name: "AMD Radeon RX 6700 XT",
    img: "https://images.unsplash.com/photo-1624701928517-44c8ac49d93c?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D  ",
    title: "High Performance GPU",
    price: 380,
    category: "GPU",
    rating: 4.7
  },
  {
    id: 5,
    name: "Corsair Vengeance 16GB DDR4",
    img: "https://images.unsplash.com/photo-1735446310927-a586c6e1d10a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzZ8fENvcnNhaXIlMjBWZW5nZWFuY2V8ZW58MHx8MHx8fDA%3D",
    title: "3200MHz Memory Kit",
    price: 55,
    category: "RAM",
    rating: 4.8
  },
  {
    id: 6,
    name: "Kingston Fury 32GB DDR4",
    img: "https://images.unsplash.com/photo-1669480380756-f82b044e8144?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "High Capacity RAM",
    price: 95,
    category: "RAM",
    rating: 4.7
  },
  {
    id: 7,
    name: "Samsung 970 EVO Plus 1TB",
    img: "https://images.unsplash.com/photo-1725085815038-279c8139c8a4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8c2Ftc3VuZyUyMHNzZHxlbnwwfHwwfHx8MA%3D%3D",
    title: "NVMe SSD Storage",
    price: 85,
    category: "SSD",
    rating: 4.9
  },
  {
    id: 8,
    name: "WD Blue 1TB HDD",
    img: "https://images.unsplash.com/photo-1653179767378-98bb414f9bfd?q=80&w=861&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Reliable Hard Drive",
    price: 45,
    category: "Storage",
    rating: 4.5
  },
  {
    id: 9,
    name: "ASUS B550 Motherboard",
    img: "https://images.unsplash.com/photo-1719945160947-0a71d470ea64?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGFzdXMlMjBiNTUwfGVufDB8fDB8fHww",
    price: 120,
    category: "Motherboard",
    rating: 4.6
  },
  {
    id: 10,
    name: "MSI Z690 Motherboard",
    img: "https://images.unsplash.com/photo-1726658045061-409d329466ab?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bXNpJTIwejY5MHxlbnwwfHwwfHx8MA%3D%3D",
    title: "Intel 12th Gen Board",
    price: 210,
    category: "Motherboard",
    rating: 4.7
  },
  {
    id: 11,
    name: "Corsair RM650 Power Supply",
    img: "https://images.unsplash.com/photo-1659856577105-c8ec1a364aa0?q=80&w=765&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "650W 80+ Gold PSU",
    price: 95,
    category: "PSU",
    rating: 4.8
  },
  {
    id: 12,
    name: "Cooler Master 750W PSU",
    img: "https://images.unsplash.com/photo-1726570210584-4739e96e0bbd?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "High Power Supply",
    price: 110,
    category: "PSU",
    rating: 4.6
  },
  {
    id: 13,
    name: "NZXT H510 Case",
    img: "https://images.unsplash.com/photo-1657311625426-065efb39dfbe?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Mid Tower PC Case",
    price: 80,
    category: "Case",
    rating: 4.7
  },
  {
    id: 14,
    name: "Lian Li PC-O11 Dynamic",
    img: "https://images.unsplash.com/photo-1736457833722-35cf6dd38deb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGxpYW4lMjBsaXxlbnwwfHwwfHx8MA%3D%3D",
    title: "Premium Gaming Case",
    price: 140,
    category: "Case",
    rating: 4.9
  },
  {
    id: 15,
    name: "Deepcool AK400 Cooler",
    img: "https://images.unsplash.com/photo-1751134519372-287b5a514425?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Air CPU Cooler",
    price: 35,
    category: "Cooling",
    rating: 4.6
  },
  {
    id: 16,
    name: "NZXT Kraken X53",
    img: "https://images.unsplash.com/photo-1644253058046-06bf9b4c2c44?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bnp4dHxlbnwwfHwwfHx8MA%3D%3D",
    title: "Liquid CPU Cooler",
    price: 130,
    category: "Cooling",
    rating: 4.8
  },
  {
    id: 17,
    name: "Gigabyte RTX 4070",
    img: "https://images.unsplash.com/photo-1706954867029-3798018ae194?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cnR4JTIwNDA3MHxlbnwwfHwwfHx8MA%3D%3D",
    title: "Next Gen GPU",
    price: 540,
    category: "GPU",
    rating: 4.8
  },
  {
    id: 18,
    name: "AMD Ryzen 7 5800X",
    img: "https://images.unsplash.com/photo-1611275484845-52a71f2b0a6a?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "8-Core Gaming CPU",
    price: 230,
    category: "CPU",
    rating: 4.7
  },
  {
    id: 19,
    name: "Samsung 980 Pro 2TB",
    img: "https://images.unsplash.com/photo-1734605022656-937e1cf0839d?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "High Speed NVMe SSD",
    price: 160,
    category: "SSD",
    rating: 4.9
  },
  {
    id: 20,
    name: "Corsair LL120 RGB Fans",
    img: "https://images.unsplash.com/photo-1597872200969-2b65d56bd16b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGNvcnNhaXJ8ZW58MHx8MHx8fDA%3D",
    title: "RGB Cooling Fans",
    price: 75,
    category: "Cooling",
    rating: 4.6
  }
];

export default function getCarouselData() {
  return carouseldata;
}