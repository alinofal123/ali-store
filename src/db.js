export const products = [
  {
    id: "1",
    title: "Canon R",
    price: 3000,
    description:
      "The Canon EOS R is the first full-frame mirrorless interchangeable-lens camera (MILC) produced by Canon. It was announced days after Nikon's first",
    category: "cameras",
    image: "https://m.media-amazon.com/images/I/71FnnYExdqL.jpg",
    rating: {
      rate: 4.7,
      count: 130,
    },
  },
  {
    id: "2",
    title: "Canon 5D",
    price: 700,
    description:
      "The Canon EOS 5D is a 12.7 megapixel digital single-lens reflex (DSLR) camera body produced by Canon. The EOS 5D was announced by Canon on 22 August 2005",
    category: "cameras",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/Canon_EOS_5D.jpg/450px-Canon_EOS_5D.jpg",
    rating: {
      rate: 5,
      count: 120,
    },
  },
  {
    id: "3",
    title: "Canon 6D",
    price: 1000,
    description:
      "released in November 2012, two months after the release of its main competitor, the Nikon D600.",
    category: "cameras",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVH65zmbUuHj0A9eoZC6qiJ_FuvPkou22TiA&usqp=CAU",
    rating: {
      rate: 4.5,
      count: 100,
    },
  },
  {
    id: "4",
    title: "gopro Hero 8",
    price: 900,
    description:
      "GoPro, Inc.[3] (marketed as GoPro and sometimes stylized as GoPRO) is an American technology company founded in 2002.",
    category: "cameras",
    image:
      "data:image/jpeg;base64,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",
    rating: {
      rate: 4.5,
      count: 100,
    },
  },
  {
    id: "5",
    title: "gopro Hero 5",
    price: 1500,
    description:
      "The best HERO camera we've ever made — HERO12 Black takes GoPro's best-in-class.",
    category: "cameras",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXn8T3YSnqEZPTOzFFpJdqLUrmEBRjlXRy0A&usqp=CAU",
    rating: {
      rate: 5,
      count: 200,
    },
  },
  {
    id: "6",
    title: "playstation 4",
    price: 500,
    description:
      "The PlayStation 4 (PS4) is a home video game console developed by Sony Interactive Entertainment. Announced as the successor to the PlayStation 3 in February 2013, it was launched on November 15, 2013",
    category: "electronics",
    image:
      "data:image/jpeg;base64,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",
    rating: {
      rate: 4.7,
      count: 300,
    },
  },
  {
    id: "7",
    title: "playstation 5",
    price: 1200,
    description:
      "The PlayStation 5 (PS5) is a home video game console developed by Sony Interactive Entertainment. It was announced as the successor to the PlayStation 4 in April 2019",
    category: "electronics",
    image:
      "https://i5.walmartimages.com/seo/Sony-PlayStation-5-Gaming-Console_b29e7500-cac2-4d1f-b4aa-5e0ebb3de124.c0b04249d968e2c1e5d25799b96ee0e3.jpeg?odnHeight=768&odnWidth=768&odnBg=FFFFFF",
    rating: {
      rate: 5,
      count: 120,
    },
  },
  {
    id: "8",
    title: "xbox one",
    price: 700,
    description:
      "The Xbox One is a home video game console developed by Microsoft. Announced in May 2013, it is the successor to Xbox 360 and the third console in the Xbox series.",
    category: "electronics",
    image:
      "https://imageio.forbes.com/blogs-images/gordonkelly/files/2016/11/Screenshot-2016-11-11-at-03.11.25-1200x849.jpg?height=503&width=711&fit=bounds",
    rating: {
      rate: 4.5,
      count: 100,
    },
  },
  {
    id: "9",
    title: "PsP",
    price: 900,
    description:
      "The PlayStation Portable[a] (PSP) is a handheld game console developed and marketed by Sony Computer Entertainment. ",
    category: "electronics",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Psp-1000.jpg/330px-Psp-1000.jpg",
    rating: {
      rate: 4.5,
      count: 100,
    },
  },
  {
    id: "10",
    title: "Nintendo Switch",
    price: 1500,
    description:
      "The Nintendo Switch[m] is a video game console developed by Nintendo and released worldwide in most regions on March 3, 2017",
    category: "electronics",
    image:
      "data:image/jpeg;base64,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",
    rating: {
      rate: 5,
      count: 200,
    },
  },
  {
    id: "11",
    title: "xbox 360",
    price: 400,
    description:
      "The Xbox 360 is a home video game console developed by Microsoft. As the successor to the original Xbox, it is the second console in the Xbox",
    category: "electronics",
    image:
      "data:image/jpeg;base64,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",
    rating: {
      rate: 5,
      count: 200,
    },
  },
  {
    id: "12",
    title: "VR",
    price: 2700,
    description:
      "Virtual reality (VR) is a simulated experience that employs 3D near-eye displays and pose tracking to give the user an immersive feel of a virtual world. Applications of virtual reality include",
    category: "electronics",
    image:
      "data:image/jpeg;base64,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REBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERB//2Q==",
    rating: {
      rate: 5,
      count: 200,
    },
  },
  {
    id: "13",
    title: "Black T-shirt",
    price: 30,
    description:
      "- Solid color short sleeve shirt - Round neckline- Chest graphic print",
    category: "menclothes",
    image:
      "https://imagescdn.thecollective.in/img/app/product/9/976650-12849369.jpg?w=500&auto=format",
    rating: {
      rate: 4.7,
      count: 130,
    },
  },
  {
    id: "14",
    title: "T-Shirt Supreme",
    price: 20,
    description: "T-Shirt Supreme Red Size XL International In Cotton",
    category: "menclothes",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfiaoY9H22J3Aiuv9LOXk9z5cP8t-SoLiQ9w&usqp=CAU",
    rating: {
      rate: 4.7,
      count: 130,
    },
  },
  {
    id: "15",
    title: "Good Vibes only T-shirt",
    price: 70,
    description: "Good Vibes only T-shirt,made from natural cotton",
    category: "womenclothes",
    image:
      "https://www.ifolor.fi/content/dam/ifolor/seasonal-product-pictures/Tshirt/14410021/Default/02.jpg.transform/q100/image.jpg?02.jpg",
    rating: {
      rate: 4.7,
      count: 130,
    },
  },
  {
    id: "16",
    title: "Out Of Your League T-Shirt",
    price: 20,
    description: "Out Of Your League T-Shirt Size XL International In Cotton",
    category: "womenclothes",
    image:
      "https://www.vivandlou.com/media/catalog/product/cache/2/image/1200x/9df78eab33525d08d6e5fb8d27136e95/p/a/pack-pk-leag24.png",
    rating: {
      rate: 4.7,
      count: 130,
    },
  },
  {
    id: "17",
    title: "Mom of Twins T-Shirt Club",
    price: 30,
    description:
      "- Mom of Twins T-Shirt Club - Round neckline- Chest graphic print- Fabric: 60% Combed Cotton; 40% Polyester- Material: 30 Single Jersey-Solid Reactive",
    category: "womenclothes",
    image:
      "https://i5.walmartimages.com/seo/Mama-Shirt-Momlife-T-shirt-Mom-Shirts-Cool-Mom-tee-Mothers-Day-Gift-Mommy-Shirt-Trendy-Mom-T-Shirts-Rainbow-Mama-Shirt-gift-for-mom_adf025a9-c7ee-4461-bd1a-f07f6144a304.570a2626d7fd5b14327b044b71e22ca2.jpeg?odnHeight=768&odnWidth=768&odnBg=FFFFFF",
    rating: {
      rate: 4.7,
      count: 130,
    },
  },
  {
    id: "18",
    title: "Twins T-Shirt",
    price: 20,
    description: "Twins T-Shirt Red Size XL International In Cotton",
    category: "womenclothes",
    image:
      "https://img.dadmomgift.com/uploads/Mama-Est-2021-Shirt-Mommy-T-Shirt-Classic-1679126697682.jpg",
    rating: {
      rate: 4.7,
      count: 130,
    },
  },
  {
    id: "19",
    title: "Illusion Long Sleeve ",
    price: 20,
    description:
      "Illusion Long Sleeve Gown With Beaded Scroll Detail | Mother Of The Bride Dresses | T.J.Maxx",
    category: "womenclothes",
    image:
      "https://i.pinimg.com/736x/a9/76/06/a9760668a7a7ef982f2bc00e22593f72.jpg",
    rating: {
      rate: 4.7,
      count: 130,
    },
  },
  {
    id: "20",
    title: "Naeem Khan",
    price: 20,
    description: "Naeem Khan - Raffia Palm Gown with Trompe L'Oeil Skirt",
    category: "womenclothes",
    image:
      "https://cdn11.bigcommerce.com/s-5zask1yt8t/products/13545/images/90906/13545__75401.1685960817.386.513.jpg?c=1",
    rating: {
      rate: 4.7,
      count: 130,
    },
  },
];
