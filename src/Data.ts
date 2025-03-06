
import featuredPost1 from "./assets/featured-post/featured-post-1.svg";
import featuredPost2 from "./assets/featured-post/featured-post-2.svg";
import featuredPost3 from "./assets/featured-post/featured-post-3.svg";

import heroFirst1 from "./assets/hero-1.jpg";
import heroFirst2 from "./assets/carousal-3.jpg";

import bestSeller1 from "./assets/productDatail/bestSeller1.svg";
import bestSeller2 from "./assets/productDatail/bestSeller2.svg";
import bestSeller3 from "./assets/productDatail/bestSeller3.svg";
import bestSeller4 from "./assets/productDatail/bestSeller4.svg";
import bestSeller5 from "./assets/productDatail/bestSeller5.svg";
import bestSeller6 from "./assets/productDatail/bestSeller6.svg";

import teamMember1 from "./assets/aboutUs/team-1-user-1.svg";
import teamMember2 from "./assets/aboutUs/team-1-user-2.svg";
import teamMember3 from "./assets/aboutUs/team-1-user-3.svg";

import mensClothing from "./assets/productListing/slider1.avif";
import kidsCLothing from "./assets/productListing/KidsClothing.webp";
import womensClothing from "./assets/productListing/slider6.avif";
import footwear from "./assets/productListing/footwear.webp";
import watches from "./assets/productListing/watches.jpeg";
import beauty from "./assets/productListing/beauty.jpeg";
import handbags from "./assets/productListing/handbags.jpeg";
import jewellery from "./assets/productListing/jewellery.webp";
import accessories from "./assets/productListing/Accessories.jpeg";

export interface Product {
    id: number;
    title: string;
    descriptionSmall: string;
    descriptionLong: string;
    price: number;
    retailPrice: number;
    images: string[];
    colors: string[];
    availability: boolean;
    reviewsText: string[];
    noOfReviews: number;
    rating: number;
    brand: string;
    category: string;
    additionalInformation: string;
}

interface FeaturedPostData {
    img: string;
    title: string;
    description: string;
    date: string;
    comments: string;
}

interface HeroFirst {
    img: string;
    content: object;
}

export const productsData: Product[] = [
    {
        id: 1,
        title: "Nike Air Max 270",
        descriptionSmall: "Stylish and comfortable running shoes.",
        descriptionLong:
            "The Nike Air Max 270 features a large Air unit for ultimate comfort and a sleek design for a modern look.",
        price: 149.99,
        retailPrice: 180.0,
        images: [
            "https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg?auto=compress&cs=tinysrgb&w=600",
            "https://images.unsplash.com/photo-1460353581641-37baddab0fa2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fG5pa2UlMjBzaG91ZXN8ZW58MHx8MHx8fDA%3D",
            "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8bmlrZSUyMHNob3Vlc3xlbnwwfHwwfHx8MA%3D%3D",
        ],
        colors: ["#000000", "#FFFFFF", "#FF0000"],
        availability: true,
        reviewsText: [
            "Very comfortable and stylish!",
            "Perfect for running and casual wear.",
            "The cushioning is amazing, feels like walking on air.",
            "Love the color options, especially the red one!",
            "Durable and holds up well after months of use.",
            "A bit pricey, but the quality justifies it.",
            "Great traction, no slipping even on wet surfaces.",
            "My go-to shoes for both workouts and outings.",
        ],
        noOfReviews: 120,
        rating: 4.7,
        brand: "Nike",
        category: "Footwear",
        additionalInformation:
            "The Nike Air Max 270 is inspired by two iconic Air Max models: the Air Max 180 and Air Max 93. The shoe boasts the largest Air heel unit ever seen in a Nike sneaker, ensuring unparalleled comfort. The upper is crafted from lightweight mesh, making it breathable and perfect for all-day wear. Whether you're running, walking, or just making a style statement, the Air Max 270 delivers exceptional performance and aesthetics. The rubber outsole provides great traction, making it suitable for various surfaces.",
    },
    {
        id: 2,
        title: "Rolex Submariner",
        descriptionSmall: "Luxury diving watch with timeless design.",
        descriptionLong:
            "The Rolex Submariner is an iconic watch that combines elegance with performance, perfect for deep-sea adventures.",
        price: 10999.99,
        retailPrice: 12000.0,
        images: [
            "https://images.pexels.com/photos/364822/rolex-watch-time-luxury-364822.jpeg?auto=compress&cs=tinysrgb&w=600",
            "https://images.pexels.com/photos/364822/rolex-watch-time-luxury-364822.jpeg?auto=compress&cs=tinysrgb&w=600",
            "https://images.pexels.com/photos/4276458/pexels-photo-4276458.jpeg?auto=compress&cs=tinysrgb&w=600",
        ],
        colors: ["#000000", "#C0C0C0"],
        availability: true,
        reviewsText: [
            "Absolutely stunning and worth the investment.",
            "A masterpiece of craftsmanship.",
            "The precision is unmatched, keeps perfect time.",
            "Looks even better in person than in pictures.",
            "Perfect for diving and formal events alike.",
            "The bezel is so smooth to operate.",
            "Feels luxurious and durable on the wrist.",
            "An heirloom piece I’ll pass down.",
        ],
        noOfReviews: 85,
        rating: 4.9,
        brand: "Rolex",
        category: "Watches",
        additionalInformation:
            "The Rolex Submariner is one of the most recognizable timepieces in the world. Originally introduced in 1953, it has evolved into a symbol of luxury and precision. The watch is water-resistant up to 300 meters, featuring a unidirectional rotatable bezel with a ceramic insert for measuring diving time. The luminescent markers ensure visibility in low-light conditions. Crafted from Oystersteel, the case is corrosion-resistant, maintaining its shine for years. The automatic movement, powered by Rolex's Caliber 3235, guarantees reliability and accuracy. Whether for deep-sea exploration or an elegant evening out, the Submariner is the perfect companion.",
    },
    {
        id: 3,
        title: "Gucci GG Marmont Handbag",
        descriptionSmall: "Elegant leather handbag with GG logo.",
        descriptionLong:
            "The Gucci GG Marmont handbag features a soft structure, quilted leather, and the signature GG logo, perfect for any occasion.",
        price: 2399.99,
        retailPrice: 2700.0,
        images: [
            "https://images.unsplash.com/photo-1566150906772-1b8d20ca63cd?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aGFuZ2JhZ3xlbnwwfHwwfHx8MA%3D%3D",
            "https://images.pexels.com/photos/1204464/pexels-photo-1204464.jpeg?auto=compress&cs=tinysrgb&w=600",
            "https://images.pexels.com/photos/5650019/pexels-photo-5650019.jpeg?auto=compress&cs=tinysrgb&w=600",
        ],
        colors: ["#000000", "#F5F5DC", "#FF0000"],
        availability: true,
        reviewsText: [
            "Stylish and perfect for any outfit.",
            "High-quality leather and craftsmanship.",
            "The GG logo makes it stand out.",
            "Surprisingly spacious inside!",
            "The chain strap is so versatile.",
            "Feels luxurious every time I carry it.",
            "Worth every penny for the design.",
            "Gets compliments everywhere I go.",
        ],
        noOfReviews: 60,
        rating: 4.8,
        brand: "Gucci",
        category: "Handbags",
        additionalInformation:
            "The Gucci GG Marmont handbag is a timeless piece that exudes sophistication and elegance. The quilted chevron leather with the GG logo creates a striking aesthetic. Designed with an adjustable chain strap, the handbag can be worn as a shoulder bag or a crossbody. The interior features a microfiber lining with a suede-like finish, providing a luxurious touch. The secure flap closure ensures safety for your essentials. Perfect for day-to-night styling, this handbag is an ideal investment for fashion-forward individuals.",
    },
    {
        id: 4,
        title: "Chanel No. 5 Perfume",
        descriptionSmall: "Classic fragrance for women.",
        descriptionLong:
            "Chanel No. 5 is a timeless and elegant fragrance with floral and musky notes, perfect for any occasion.",
        price: 149.99,
        retailPrice: 180.0,
        images: [
            "https://images.pexels.com/photos/1666404/pexels-photo-1666404.jpeg?auto=compress&cs=tinysrgb&w=600",
            "https://images.pexels.com/photos/1830450/pexels-photo-1830450.jpeg?auto=compress&cs=tinysrgb&w=600",
            "https://images.pexels.com/photos/1557980/pexels-photo-1557980.jpeg?auto=compress&cs=tinysrgb&w=600",
        ],
        colors: ["#FFD700"],
        availability: true,
        reviewsText: [
            "A classic fragrance that never goes out of style.",
            "Love the scent, lasts all day.",
            "Elegant and sophisticated aroma.",
            "The floral notes are perfectly balanced.",
            "Feels luxurious with every spritz.",
            "My signature scent for years!",
            "The bottle design is so chic.",
            "A must-have for any perfume lover.",
        ],
        noOfReviews: 200,
        rating: 4.9,
        brand: "Chanel",
        category: "Beauty",
        additionalInformation:
            "Chanel No. 5 is one of the most iconic perfumes ever created. Launched in 1921, it features a complex blend of floral and aldehydic notes, creating a sophisticated and long-lasting scent. The fragrance opens with fresh citrus, followed by jasmine and rose, with a warm, musky base. The elegant glass bottle design enhances its timeless appeal.",
    },
    {
        id: 5,
        title: "Levi’s 501 Original Fit Jeans",
        descriptionSmall: "Iconic denim jeans with a classic fit.",
        descriptionLong:
            "Levi’s 501 jeans feature a straight leg, button fly, and durable denim fabric for a timeless and comfortable fit.",
        price: 69.99,
        retailPrice: 89.99,
        images: [
            "https://images.pexels.com/photos/52518/jeans-pants-blue-shop-52518.jpeg?auto=compress&cs=tinysrgb&w=600",
            "https://images.pexels.com/photos/981619/pexels-photo-981619.jpeg?auto=compress&cs=tinysrgb&w=600",
            "https://images.pexels.com/photos/1598507/pexels-photo-1598507.jpeg?auto=compress&cs=tinysrgb&w=600",
        ],
        colors: ["#0000FF", "#000000"],
        availability: true,
        reviewsText: [
            "Perfect fit and durable material.",
            "Classic jeans that never go out of style.",
            "Love the button fly, adds a retro vibe.",
            "Super comfortable for all-day wear.",
            "The denim quality is top-notch.",
            "Pairs well with everything in my wardrobe.",
            "Great value for the price.",
            "A timeless staple I keep coming back to.",
        ],
        noOfReviews: 150,
        rating: 4.6,
        brand: "Levi’s",
        category: "Men’s Clothing",
        additionalInformation:
            "The Levi’s 501 Original Fit Jeans are a staple in men's fashion. Introduced in 1873, these jeans offer a regular fit with a straight leg and a button fly. Crafted from high-quality denim, they provide durability and comfort. The versatile design makes them ideal for casual or semi-formal outfits.",
    },
    {
        id: 6,
        title: "Zara Floral Summer Dress",
        descriptionSmall: "Elegant floral dress for summer.",
        descriptionLong:
            "This Zara summer dress features a flowy fit, floral patterns, and lightweight fabric for a chic and comfortable look.",
        price: 49.99,
        retailPrice: 65.0,
        images: [
            "https://images.pexels.com/photos/985635/pexels-photo-985635.jpeg?auto=compress&cs=tinysrgb&w=600",
            "https://images.pexels.com/photos/2065195/pexels-photo-2065195.jpeg?auto=compress&cs=tinysrgb&w=600",
            "https://images.pexels.com/photos/291759/pexels-photo-291759.jpeg?auto=compress&cs=tinysrgb&w=600",
        ],
        colors: ["#FFC0CB", "#FFFFFF", "#FFFF00"],
        availability: true,
        reviewsText: [
            "Very comfortable and stylish!",
            "Perfect for running and casual wear.",
            "The cushioning is amazing, feels like walking on air.",
            "Love the color options, especially the red one!",
            "Durable and holds up well after months of use.",
            "A bit pricey, but the quality justifies it.",
            "Great traction, no slipping even on wet surfaces.",
            "My go-to shoes for both workouts and outings.",
        ],
        noOfReviews: 90,
        rating: 4.5,
        brand: "Zara",
        category: "Women’s Clothing",
        additionalInformation:
            "The Zara Floral Summer Dress is designed for comfort and elegance. Made from breathable fabric, this dress features a flattering A-line silhouette with floral prints. The lightweight material makes it ideal for warm weather, while the vibrant colors add a stylish touch.",
    },
    {
        id: 7,
        title: "Adidas Ultraboost 22",
        descriptionSmall: "High-performance running shoes.",
        descriptionLong:
            "The Adidas Ultraboost 22 offers superior cushioning, energy return, and a sleek design for optimal performance.",
        price: 180.0,
        retailPrice: 200.0,
        images: [
            "https://images.pexels.com/photos/812871/pexels-photo-812871.jpeg?auto=compress&cs=tinysrgb&w=600",
            "https://images.unsplash.com/photo-1551116198-01d550c9809c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8YWRkaWRhJTIwc2hvZXN8ZW58MHx8MHx8fDA%3D",
            "https://images.unsplash.com/photo-1609250291996-fdebe6020a8f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGFkZGlkYSUyMHNob2VzfGVufDB8fDB8fHww",
        ],
        colors: ["#000000", "#FFFFFF", "#0000FF"],
        availability: true,
        reviewsText: [
            "Super comfortable and great for running!",
            "Stylish and very lightweight.",
            "The Boost cushioning is a game-changer.",
            "Perfect fit, no break-in period needed.",
            "Excellent grip on all terrains.",
            "Boosts my running performance noticeably.",
            "Love the sleek design in white.",
            "Worth the investment for serious runners.",
        ],
        noOfReviews: 130,
        rating: 4.7,
        brand: "Adidas",
        category: "Footwear",
        additionalInformation:
            "The Adidas Ultraboost 22 is designed for runners who seek comfort and performance. Featuring Boost cushioning technology, these shoes provide energy return with every step. The Primeknit upper adapts to foot movement, ensuring a snug fit. The Continental rubber outsole delivers exceptional grip on various surfaces.",
    },
    {
        id: 8,
        title: "Cartier Love Bracelet",
        descriptionSmall: "Elegant gold bracelet with screw motif.",
        descriptionLong:
            "The Cartier Love Bracelet is a symbol of timeless love, crafted in 18K gold with a unique screw design.",
        price: 6900.0,
        retailPrice: 7500.0,
        images: [
            "https://images.pexels.com/photos/1191531/pexels-photo-1191531.jpeg?auto=compress&cs=tinysrgb&w=600",
            "https://images.pexels.com/photos/1191536/pexels-photo-1191536.jpeg?auto=compress&cs=tinysrgb&w=600",
            "https://images.pexels.com/photos/3641059/pexels-photo-3641059.jpeg?auto=compress&cs=tinysrgb&w=600",
        ],
        colors: ["#FFD700", "#B76E79"],
        availability: true,
        reviewsText: [
            "A beautiful piece, perfect for any occasion.",
            "Expensive but totally worth it!",
            "The screw design is so unique.",
            "Feels like a symbol of commitment.",
            "The gold finish is flawless.",
            "Pairs beautifully with any outfit.",
            "A luxury item that holds its value.",
            "The craftsmanship is impeccable.",
        ],
        noOfReviews: 75,
        rating: 4.8,
        brand: "Cartier",
        category: "Jewellery",
        additionalInformation:
            "The Cartier Love Bracelet was introduced in 1969 and remains one of the most iconic jewelry pieces. Featuring a distinctive screw motif, it's designed to symbolize everlasting love. Crafted in 18K gold, it includes a special screwdriver to lock and unlock the bracelet.",
    },
    {
        id: 9,
        title: "Ray-Ban Aviator Sunglasses",
        descriptionSmall: "Classic metal frame sunglasses.",
        descriptionLong:
            "Ray-Ban Aviator sunglasses offer a timeless design with UV protection lenses and a sleek metal frame.",
        price: 159.99,
        retailPrice: 180.0,
        images: [
            "https://images.pexels.com/photos/4223655/pexels-photo-4223655.jpeg?auto=compress&cs=tinysrgb&w=600",
            "https://images.pexels.com/photos/5333043/pexels-photo-5333043.jpeg?auto=compress&cs=tinysrgb&w=600",
            "https://images.pexels.com/photos/2703963/pexels-photo-2703963.jpeg?auto=compress&cs=tinysrgb&w=600",
        ],
        colors: ["#C0C0C0", "#000000", "#DAA520"],
        availability: true,
        reviewsText: [
            "Super stylish and great for sunny days!",
            "Excellent build quality and clarity.",
            "The UV protection is a huge plus.",
            "Love the classic aviator look.",
            "Lightweight and comfortable to wear.",
            "The gold frame adds a nice touch.",
            "Perfect for driving or outdoor adventures.",
            "A timeless accessory I’ll never tire of.",
        ],
        noOfReviews: 112,
        rating: 4.7,
        brand: "Ray-Ban",
        category: "Accessories",
        additionalInformation:
            "Originally developed for U.S. aviators in 1937, Ray-Ban Aviators are known for their lightweight metal frame and glare-reducing lenses. These sunglasses provide 100% UV protection and are perfect for outdoor activities.",
    },
    {
        id: 10,
        title: "Michael Kors Jet Set Tote",
        descriptionSmall: "Elegant designer handbag.",
        descriptionLong:
            "The Michael Kors Jet Set tote is a spacious and stylish bag, perfect for everyday essentials.",
        price: 199.99,
        retailPrice: 250.0,
        images: [
            "https://images.pexels.com/photos/21263499/pexels-photo-21263499/free-photo-of-woman-holding-a-silver-purse.jpeg?auto=compress&cs=tinysrgb&w=600",
            "https://images.pexels.com/photos/13347119/pexels-photo-13347119.jpeg?auto=compress&cs=tinysrgb&w=600",
            "https://images.pexels.com/photos/13347119/pexels-photo-13347119.jpeg?auto=compress&cs=tinysrgb&w=600",
        ],
        colors: ["#8B0000", "#F5DEB3", "#000000"],
        availability: true,
        reviewsText: [
            "Very spacious and stylish!",
            "Great quality leather and finishing.",
            "Fits my laptop and essentials perfectly.",
            "The saffiano leather looks so elegant.",
            "Love the color options, especially black.",
            "Sturdy and holds up well daily.",
            "A chic bag for work or travel.",
            "Fantastic deal for a designer tote.",
        ],
        noOfReviews: 140,
        rating: 4.6,
        brand: "Michael Kors",
        category: "Handbags",
        additionalInformation:
            "The Michael Kors Jet Set Tote is crafted from saffiano leather for durability and elegance. Featuring multiple compartments and a structured design, it’s ideal for both work and casual outings.",
    },
    {
        id: 11,
        title: "Armani Exchange Chronograph Watch",
        descriptionSmall: "Sleek and stylish men's watch.",
        descriptionLong:
            "This Armani Exchange watch features a stainless steel design, chronograph functionality, and a modern dial.",
        price: 179.99,
        retailPrice: 220.0,
        images: [
            "https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?auto=compress&cs=tinysrgb&w=600",
            "https://images.pexels.com/photos/125779/pexels-photo-125779.jpeg?auto=compress&cs=tinysrgb&w=600",
            "https://images.pexels.com/photos/2113994/pexels-photo-2113994.jpeg?auto=compress&cs=tinysrgb&w=600",
        ],
        colors: ["#1C1C1C", "#B0C4DE"],
        availability: true,
        reviewsText: [
            "Looks very elegant and premium.",
            "Great for both casual and formal wear.",
            "The chronograph feature is super useful.",
            "Stainless steel feels sturdy and high-quality.",
            "Love the modern dial design!",
            "Keeps time perfectly, no complaints.",
            "A stylish addition to my collection.",
            "Excellent value for the price.",
        ],
        noOfReviews: 98,
        rating: 4.7,
        brand: "Rolex",
        category: "Watches",
        additionalInformation:
            "The Armani Exchange Chronograph Watch is designed for the modern man. It features precise quartz movement, a water-resistant design, and a stylish stainless steel case, making it suitable for any occasion.",
    },
    {
        id: 12,
        title: "Nike Air Force 1",
        descriptionSmall: "Iconic low-top sneakers.",
        descriptionLong:
            "The Nike Air Force 1 offers premium leather, a timeless design, and all-day comfort.",
        price: 120.0,
        retailPrice: 150.0,
        images: [
            "https://images.pexels.com/photos/3490360/pexels-photo-3490360.jpeg?auto=compress&cs=tinysrgb&w=600",
            "https://images.pexels.com/photos/1478442/pexels-photo-1478442.jpeg?auto=compress&cs=tinysrgb&w=600",
            "https://images.pexels.com/photos/1598505/pexels-photo-1598505.jpeg?auto=compress&cs=tinysrgb&w=600",
        ],
        colors: ["#FFFFFF", "#000000", "#FFD700"],
        availability: true,
        reviewsText: [
            "Classic sneakers that go with everything.",
            "Super comfortable and durable.",
            "The leather quality is top-notch.",
            "Perfect for all-day wear without discomfort.",
            "Love the gold accent option!",
            "A must-have for sneaker fans.",
            "Still stylish after years of wear.",
            "Great support for casual outings.",
        ],
        noOfReviews: 250,
        rating: 4.8,
        brand: "Nike",
        category: "Footwear",
        additionalInformation:
            "The Nike Air Max 270 is inspired by two iconic Air Max models: the Air Max 180 and Air Max 93. The shoe boasts the largest Air heel unit ever seen in a Nike sneaker, ensuring unparalleled comfort. The upper is crafted from lightweight mesh, making it breathable and perfect for all-day wear. Whether you're running, walking, or just making a style statement, the Air Max 270 delivers exceptional performance and aesthetics. The rubber outsole provides great traction, making it suitable for various surfaces.",
    },
    {
        id: 13,
        title: "Fossil Leather Wallet",
        descriptionSmall: "Genuine leather wallet for men.",
        descriptionLong:
            "The Fossil leather wallet is crafted with premium materials, offering multiple card slots and RFID protection.",
        price: 49.99,
        retailPrice: 60.0,
        images: [
            "https://images.pexels.com/photos/1132269/pexels-photo-1132269.jpeg?auto=compress&cs=tinysrgb&w=600",
            "https://images.pexels.com/photos/4452373/pexels-photo-4452373.jpeg?auto=compress&cs=tinysrgb&w=600",
            "https://images.pexels.com/photos/4452643/pexels-photo-4452643.jpeg?auto=compress&cs=tinysrgb&w=600",
        ],
        colors: ["#8B4513", "#000000"],
        availability: true,
        reviewsText: [
            "High-quality leather, very durable.",
            "Compact and stylish.",
            "RFID protection gives me peace of mind.",
            "Fits all my cards perfectly.",
            "The brown leather looks so classy.",
            "Slim design but holds everything I need.",
            "Great stitching, feels premium.",
            "A fantastic everyday wallet.",
        ],
        noOfReviews: 85,
        rating: 4.6,
        brand: "Ray-Ban",
        category: "Accessories",
        additionalInformation:
            "The Fossil leather wallet is a perfect blend of style, functionality, and durability. Crafted from 100% genuine leather, it boasts a sleek and timeless design that complements any outfit. Designed with multiple card slots, an ID window, and a spacious cash compartment, it ensures you have ample storage for all your essentials. The wallet is also equipped with RFID-blocking technology, protecting your cards from unauthorized scanning and keeping your personal information secure. High-quality stitching enhances its durability, making it a long-lasting accessory.",
    },
    {
        id: 14,
        title: "Tissot PRX Automatic Watch",
        descriptionSmall: "Elegant Swiss automatic watch.",
        descriptionLong:
            "The Tissot PRX features a stainless steel bracelet, sapphire crystal, and automatic movement.",
        price: 649.99,
        retailPrice: 750.0,
        images: [
            "https://images.pexels.com/photos/47856/rolex-wrist-watch-clock-gmt-47856.jpeg?auto=compress&cs=tinysrgb&w=600",
            "https://images.pexels.com/photos/2078268/pexels-photo-2078268.jpeg?auto=compress&cs=tinysrgb&w=600",
            "https://images.pexels.com/photos/236915/pexels-photo-236915.jpeg?auto=compress&cs=tinysrgb&w=600",
        ],
        colors: ["#C0C0C0", "#4682B4"],
        availability: true,
        reviewsText: [
            "A stunning watch with a premium feel.",
            "Great value for a Swiss automatic watch.",
            "The sapphire crystal is so clear and durable.",
            "Love the automatic movement, no batteries!",
            "Sleek design, perfect for any occasion.",
            "The steel bracelet is comfortable and stylish.",
            "Accurate timekeeping every day.",
            "A true luxury piece at this price.",
        ],
        noOfReviews: 50,
        rating: 4.9,
        brand: "Titan",
        category: "Watches",
        additionalInformation:
            "The Tissot PRX Automatic Watch is a masterpiece of Swiss craftsmanship, combining vintage aesthetics with modern technology. Featuring a sleek stainless steel bracelet and case, it offers a refined yet sporty look suitable for both casual and formal occasions. The scratch-resistant sapphire crystal ensures durability and clarity, while the automatic movement provides precise timekeeping without the need for a battery. With a power reserve of up to 80 hours, this watch delivers exceptional performance.",
    },
    {
        id: 15,
        title: "Tom Ford Oud Wood Perfume",
        descriptionSmall: "Luxury fragrance for men.",
        descriptionLong:
            "Tom Ford's Oud Wood is a rich, exotic fragrance with notes of oud, sandalwood, and vanilla.",
        price: 250.0,
        retailPrice: 300.0,
        images: [
            "https://images.pexels.com/photos/1961792/pexels-photo-1961792.jpeg?auto=compress&cs=tinysrgb&w=600",
            "https://images.pexels.com/photos/1666405/pexels-photo-1666405.jpeg?auto=compress&cs=tinysrgb&w=600",
            "https://images.pexels.com/photos/264950/pexels-photo-264950.jpeg?auto=compress&cs=tinysrgb&w=600",
        ],
        colors: ["#8B4513", "#696969"],
        availability: true,
        reviewsText: [
            "Smells luxurious and lasts all day!",
            "Perfect for special occasions.",
            "The oud scent is rich and unique.",
            "Sandalwood adds such a warm touch.",
            "A little pricey but worth every cent.",
            "Gets compliments every time I wear it.",
            "Sophisticated and bold fragrance.",
            "My favorite Tom Ford scent by far.",
        ],
        noOfReviews: 77,
        rating: 4.8,
        brand: "Tom Ford",
        category: "Beauty",
        additionalInformation:
            "Tom Ford Oud Wood is a luxurious and sophisticated fragrance that exudes elegance and mystery. Crafted with rare and exotic ingredients, this scent is centered around the deep, smoky richness of oud, one of the most coveted perfume elements in the world. Complemented by creamy sandalwood and warm vanilla, it creates a perfectly balanced blend of woody and spicy accords. Hints of cardamom, amber, and tonka bean add depth, making it an alluring and long-lasting fragrance ideal for evening wear and special occasions.",
    },
    {
        id: 16,
        title: "Pandora Rose Gold Charm Bracelet",
        descriptionSmall: "Elegant rose gold bracelet.",
        descriptionLong:
            "The Pandora charm bracelet is crafted in rose gold-plated metal, allowing you to personalize it with charms.",
        price: 79.99,
        retailPrice: 100.0,
        images: [
            "https://images.pexels.com/photos/266621/pexels-photo-266621.jpeg?auto=compress&cs=tinysrgb&w=600",
            "https://images.pexels.com/photos/1191536/pexels-photo-1191536.jpeg?auto=compress&cs=tinysrgb&w=600",
            "https://images.pexels.com/photos/371285/pexels-photo-371285.jpeg?auto=compress&cs=tinysrgb&w=600",
        ],
        colors: ["#FFDAB9", "#D2691E"],
        availability: true,
        reviewsText: [
            "Love the quality and the charm options!",
            "Perfect gift for someone special.",
            "The rose gold finish is stunning.",
            "So easy to customize with charms.",
            "Feels lightweight yet durable.",
            "A beautiful piece for everyday wear.",
            "Matches everything in my wardrobe.",
            "Great value for a Pandora piece.",
        ],
        noOfReviews: 100,
        rating: 4.7,
        brand: "Pandora",
        category: "Jewellery",
        additionalInformation:
            "The Pandora Rose Gold Charm Bracelet is a stunning piece of jewelry that combines elegance with personalization. Crafted from high-quality rose gold-plated metal, it offers a warm, romantic glow that complements any style. Designed to be both timeless and versatile, this bracelet serves as the perfect foundation for your charm collection, allowing you to express your personality and cherished memories through Pandora’s wide range of charms.",
    },
    {
        id: 17,
        title: "Tommy Hilfiger Men's Polo Shirt",
        descriptionSmall: "Classic polo shirt with a timeless design.",
        descriptionLong:
            "This Tommy Hilfiger polo shirt is made from breathable cotton fabric and features the brand's iconic logo embroidery.",
        price: 49.99,
        retailPrice: 65.0,
        images: [
            "https://images.pexels.com/photos/30953662/pexels-photo-30953662/free-photo-of-stylish-man-in-double-breasted-suit-portrait.jpeg?auto=compress&cs=tinysrgb&w=600",
            "https://images.pexels.com/photos/297933/pexels-photo-297933.jpeg?auto=compress&cs=tinysrgb&w=600",
            "https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&w=600",
        ],
        colors: ["#0000FF", "#FFFFFF", "#FF0000"],
        availability: true,
        reviewsText: [
            "Great quality and fits perfectly!",
            "Comfortable and stylish for any occasion.",
            "The cotton fabric feels so soft.",
            "Love the logo embroidery detail.",
            "Perfect for casual Fridays at work.",
            "Breathable and great for warm weather.",
            "Washes well, no fading.",
            "A classic polo I’ll wear for years.",
        ],
        noOfReviews: 80,
        rating: 4.6,
        brand: "Levi’s",
        category: "Men’s Clothing",
        additionalInformation:
            "The Tommy Hilfiger Men's Polo Shirt is a wardrobe essential that blends classic style with everyday comfort. Crafted from soft, breathable cotton fabric, it ensures a lightweight and comfortable fit, making it perfect for casual outings, work, or weekend wear. The polo features a ribbed collar and cuffs, a two-button placket for an adjustable fit, and the brand’s iconic logo embroidery on the chest, adding a touch of signature style.",
    },
    {
        id: 18,
        title: "Michael Kors Leather Handbag",
        descriptionSmall: "Elegant and spacious handbag.",
        descriptionLong:
            "The Michael Kors leather handbag offers a sleek design, spacious interior, and premium craftsmanship.",
        price: 299.99,
        retailPrice: 350.0,
        images: [
            "https://images.pexels.com/photos/904350/pexels-photo-904350.jpeg?auto=compress&cs=tinysrgb&w=600",
            "https://images.pexels.com/photos/1381553/pexels-photo-1381553.jpeg?auto=compress&cs=tinysrgb&w=600",
            "https://images.pexels.com/photos/2334906/pexels-photo-2334906.jpeg?auto=compress&cs=tinysrgb&w=600",
        ],
        colors: ["#8B4513", "#000000"],
        availability: true,
        reviewsText: [
            "Looks amazing and holds all my essentials.",
            "High-quality leather and craftsmanship.",
            "The spacious interior is a lifesaver.",
            "Love the sleek brown finish.",
            "Perfect for work and casual outings.",
            "Durable stitching, feels luxurious.",
            "A stylish upgrade to my bag collection.",
            "Worth every penny for the quality.",
        ],
        noOfReviews: 70,
        rating: 4.8,
        brand: "Michael Kors",
        category: "Handbags",
        additionalInformation:
            "The Michael Kors Leather Handbag is a perfect blend of sophistication, functionality, and luxury. Crafted from high-quality genuine leather, it boasts a sleek and timeless design that complements any outfit, from casual to formal. The spacious interior provides ample room for all your essentials, featuring multiple compartments and pockets for effortless organization.",
    },
    {
        id: 19,
        title: "Armani Exchange Chronograph Watch",
        descriptionSmall: "Stylish watch with a modern design.",
        descriptionLong:
            "This Armani Exchange chronograph watch features a sleek stainless steel case, a durable strap, and multiple dials for precise timekeeping.",
        price: 199.99,
        retailPrice: 250.0,
        images: [
            "https://images.pexels.com/photos/437037/pexels-photo-437037.jpeg?auto=compress&cs=tinysrgb&w=600",
            "https://images.pexels.com/photos/1120275/pexels-photo-1120275.jpeg?auto=compress&cs=tinysrgb&w=600",
            "https://images.pexels.com/photos/277319/pexels-photo-277319.jpeg?auto=compress&cs=tinysrgb&w=600",
        ],
        colors: ["#808080", "#000000"],
        availability: true,
        reviewsText: [
            "Looks premium and keeps perfect time!",
            "A great watch at an affordable price.",
            "The chronograph dials are so functional.",
            "Sleek design, matches everything.",
            "The strap is durable and comfy.",
            "Love the stainless steel shine.",
            "Accurate and stylish every day.",
            "A fantastic addition to my wardrobe.",
        ],
        noOfReviews: 90,
        rating: 4.7,
        brand: "Titan",
        category: "Watches",
        additionalInformation:
            "The Armani Exchange Chronograph Watch is a perfect blend of modern style and precision engineering. Designed for the contemporary man, it features a sleek stainless steel case that exudes sophistication and durability. The watch is equipped with multiple sub-dials, offering precise chronograph functionality for measuring elapsed time, making it both stylish and practical.",
    },
    {
        id: 20,
        title: "MAC Matte Lipstick",
        descriptionSmall: "Long-lasting matte lipstick.",
        descriptionLong:
            "MAC's Matte Lipstick offers bold color, a smooth application, and a non-drying finish that lasts all day.",
        price: 19.99,
        retailPrice: 25.0,
        images: [
            "https://images.pexels.com/photos/2533266/pexels-photo-2533266.jpeg?auto=compress&cs=tinysrgb&w=600",
            "https://images.pexels.com/photos/90297/pexels-photo-90297.jpeg?auto=compress&cs=tinysrgb&w=600",
            "https://images.pexels.com/photos/850801/pexels-photo-850801.jpeg?auto=compress&cs=tinysrgb&w=600",
        ],
        colors: ["#FF1493", "#800000"],
        availability: true,
        reviewsText: [
            "Love the color and texture!",
            "Stays on all day without smudging.",
            "The matte finish is flawless.",
            "So easy to apply, no drying out.",
            "Bold shades that really pop!",
            "Comfortable wear for hours.",
            "A staple in my makeup bag.",
            "Perfect for day or night looks.",
        ],
        noOfReviews: 120,
        rating: 4.9,
        brand: "MAC",
        category: "Beauty",
        additionalInformation:
            "The MAC Matte Lipstick is a must-have beauty essential, offering intense, highly pigmented color with a smooth, velvety finish. Designed for all-day wear, its long-lasting formula glides effortlessly onto the lips, providing full coverage with just one swipe. Unlike many matte lipsticks, this formula is non-drying, ensuring a comfortable feel while maintaining a flawless, shine-free look.",
    },
    {
        id: 21,
        title: "Adidas Superstar Sneakers",
        descriptionSmall: "Iconic sneakers with a classic shell toe.",
        descriptionLong:
            "The Adidas Superstar features a leather upper, comfortable cushioning, and the signature shell toe for a timeless look.",
        price: 89.99,
        retailPrice: 110.0,
        images: [
            "https://images.pexels.com/photos/1070360/pexels-photo-1070360.jpeg?auto=compress&cs=tinysrgb&w=600",
            "https://images.pexels.com/photos/2529157/pexels-photo-2529157.jpeg?auto=compress&cs=tinysrgb&w=600",
            "https://images.pexels.com/photos/1102777/pexels-photo-1102777.jpeg?auto=compress&cs=tinysrgb&w=600",
        ],
        colors: ["#FFFFFF", "#000000"],
        availability: true,
        reviewsText: [
            "Perfect casual shoes with great comfort.",
            "Classic and stylish, love them!",
            "The shell toe is so iconic.",
            "Leather holds up well over time.",
            "Super comfy for long walks.",
            "Pairs with jeans or shorts perfectly.",
            "A retro vibe with modern comfort.",
            "My favorite Adidas sneakers yet.",
        ],
        noOfReviews: 150,
        rating: 4.7,
        brand: "Adidas",
        category: "Footwear",
        additionalInformation:
            "The Adidas Superstar Sneakers are a true icon in streetwear and sneaker culture, blending timeless style with everyday comfort. Featuring a premium leather upper, they provide durability and a sleek, polished look that pairs effortlessly with any outfit. The signature rubber shell toe adds both protection and a distinctive design element that has made these sneakers legendary for decades.",
    },
    {
        id: 22,
        title: "H&M Kids' Winter Jacket",
        descriptionSmall: "Warm and cozy jacket for kids.",
        descriptionLong:
            "This H&M winter jacket for kids provides warmth, comfort, and a stylish design, perfect for chilly days.",
        price: 39.99,
        retailPrice: 50.0,
        images: [
            "https://images.pexels.com/photos/30924461/pexels-photo-30924461/free-photo-of-child-walking-on-a-serene-beach-in-winter.jpeg?auto=compress&cs=tinysrgb&w=600",
            "https://images.pexels.com/photos/1476055/pexels-photo-1476055.jpeg?auto=compress&cs=tinysrgb&w=600",
            "https://images.pexels.com/photos/3933907/pexels-photo-3933907.jpeg?auto=compress&cs=tinysrgb&w=600",
        ],
        colors: ["#FFD700", "#800000"],
        availability: true,
        reviewsText: [
            "Keeps my child warm and looks great!",
            "Good quality at an affordable price.",
            "The fleece lining is so cozy.",
            "Perfect fit for my little one.",
            "Stylish design, kids love it!",
            "Handles snow and rain well.",
            "Easy to clean after playtime.",
            "A winter must-have for kids.",
        ],
        noOfReviews: 85,
        rating: 4.6,
        brand: "Zara",
        category: "Kid’s clothing",
        additionalInformation:
            "The H&M Kids' Winter Jacket is designed to keep your little one warm, cozy, and stylish during the colder months. Made with high-quality, insulated materials, it provides excellent warmth without feeling bulky. The soft, fleece-lined interior ensures maximum comfort, while the water-resistant outer layer helps protect against light rain and snow. ",
    },
    {
        id: 23,
        title: "Gucci Gold Bracelet",
        descriptionSmall: "Luxury bracelet with an elegant design.",
        descriptionLong:
            "The Gucci gold bracelet is crafted from fine gold, featuring an intricate pattern that exudes luxury and style.",
        price: 1299.99,
        retailPrice: 1500.0,
        images: [
            "https://images.pexels.com/photos/633661/pexels-photo-633661.jpeg?auto=compress&cs=tinysrgb&w=600",
            "https://images.pexels.com/photos/1306262/pexels-photo-1306262.jpeg?auto=compress&cs=tinysrgb&w=600",
            "https://images.pexels.com/photos/2371895/pexels-photo-2371895.jpeg?auto=compress&cs=tinysrgb&w=600",
        ],
        colors: ["#FFD700"],
        availability: true,
        reviewsText: [
            "A beautiful piece of jewelry.",
            "Absolutely stunning craftsmanship!",
            "The gold shines so elegantly.",
            "Perfect for special occasions.",
            "Feels luxurious and well-made.",
            "The pattern design is exquisite.",
            "A standout piece in my collection.",
            "Worth the investment for Gucci quality.",
        ],
        noOfReviews: 60,
        rating: 4.9,
        brand: "Gucci",
        category: "Jewellery",
        additionalInformation:
            "The Gucci Gold Bracelet is a timeless statement piece that embodies elegance, luxury, and exquisite craftsmanship. Made from fine gold, this bracelet showcases an intricate design that reflects Gucci’s signature attention to detail and sophistication. Whether worn alone for a minimalist touch or layered with other jewelry for a bold statement, it adds a refined charm to any outfit",
    },
    {
        id: 24,
        title: "Levi’s Women's Skinny Jeans",
        descriptionSmall: "Trendy and comfortable skinny jeans.",
        descriptionLong:
            "These Levi’s skinny jeans are made with stretchable denim for a perfect fit and stylish appeal.",
        price: 59.99,
        retailPrice: 75.0,
        images: [
            "https://images.pexels.com/photos/30958266/pexels-photo-30958266/free-photo-of-stylish-woman-with-colorful-purse-and-heels.jpeg?auto=compress&cs=tinysrgb&w=600",
            "https://images.pexels.com/photos/1557843/pexels-photo-1557843.jpeg?auto=compress&cs=tinysrgb&w=600",
            "https://images.pexels.com/photos/2285500/pexels-photo-2285500.jpeg?auto=compress&cs=tinysrgb&w=600",
        ],
        colors: ["#00008B", "#2F4F4F"],
        availability: true,
        reviewsText: [
            "Perfect fit and super comfortable!",
            "Love the quality and stretch.",
            "The dark wash looks so chic.",
            "Hugs my curves in all the right places.",
            "Great for casual or dressed-up looks.",
            "Durable denim that lasts.",
            "My favorite jeans for everyday wear.",
            "A classic Levi’s fit I adore.",
        ],
        noOfReviews: 110,
        rating: 4.7,
        brand: "Levi’s",
        category: "Women’s Clothing",
        additionalInformation:
            "The Levi’s Women’s Skinny Jeans offer the perfect blend of style, comfort, and versatility. Made from high-quality, stretchable denim, they provide a flattering fit that hugs your curves while allowing for effortless movement. Designed for all-day wear, these jeans feature a mid-rise or high-rise waist for a sleek silhouette and a classic five-pocket design for a timeless appeal.",
    },
    {
        id: 25,
        title: "Versace Eros Perfume",
        descriptionSmall: "Bold and captivating men's fragrance.",
        descriptionLong:
            "Versace Eros is a fresh and woody fragrance with hints of mint, vanilla, and cedarwood for a long-lasting scent.",
        price: 79.99,
        retailPrice: 100.0,
        images: [
            "https://images.pexels.com/photos/965992/pexels-photo-965992.jpeg?auto=compress&cs=tinysrgb&w=600",
            "https://images.pexels.com/photos/3910071/pexels-photo-3910071.jpeg?auto=compress&cs=tinysrgb&w=600",
            "https://images.pexels.com/photos/1961789/pexels-photo-1961789.jpeg?auto=compress&cs=tinysrgb&w=600",
        ],
        colors: ["#00CED1"],
        availability: true,
        reviewsText: [
            "Smells amazing and lasts all day.",
            "A must-have for any fragrance lover!",
            "The mint note is so refreshing.",
            "Vanilla adds a sweet, warm vibe.",
            "Perfect for date nights or events.",
            "Bold scent that stands out.",
            "Cedarwood gives it a masculine edge.",
            "Always get compliments wearing this.",
        ],
        noOfReviews: 95,
        rating: 4.8,
        brand: "Versace",
        category: "Beauty",
        additionalInformation:
            "Versace Eros is a bold and captivating fragrance that embodies confidence, passion, and masculinity. This fresh and woody scent opens with invigorating notes of mint, green apple, and lemon, creating an energizing first impression. The heart of the fragrance features warm hints of tonka bean, ambroxan, and geranium, adding depth and sensuality.",
    },
    {
        id: 26,
        title: "Cotton Kids T-Shirt",
        descriptionSmall: "Soft and breathable cotton t-shirt for kids.",
        descriptionLong:
            "This premium cotton t-shirt is lightweight, breathable, and perfect for everyday wear. Available in multiple colors and sizes.",
        price: 12.99,
        retailPrice: 19.99,
        images: [
            "https://cdn.pixabay.com/photo/2024/04/29/04/21/tshirt-8726721_1280.jpg",
            "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSB69V_oTDx5-BWwgPlcA9U1rw7FPhPk4zrXVL1lb0Z_1Ys-_QCYEzdB5M4S5P1Ec7brdIZwQpvhxoISO9DPEHhIDYlGmddNOUA2XocVqG501apwO4y8qTJ-iwLpsDMFAg3OarJNA&usqp=CAc",
            "https://cdn.pixabay.com/photo/2020/05/22/17/53/mockup-5206355_1280.jpg",
        ],
        colors: ["#FF5733", "#FFD700", "#00BFFF"],
        availability: true,
        reviewsText: [
            "Super cute and fits perfectly!",
            "Great quality denim, my child loves wearing these.",
            "Adjustable straps make it easy to get the right fit.",
            "Sturdy material, holds up to outdoor play.",
            "Stylish and practical—great combo!",
            "My kid gets compliments all the time in these.",
        ],
        noOfReviews: 58,
        rating: 4.6,
        brand: "KidWear",
        category: "Kid’s clothing",
        additionalInformation:
            "Made from 100% high-quality cotton, this t-shirt provides all-day comfort and durability. Perfect for school, play, or casual outings. The lightweight fabric ensures breathability, keeping your child cool even during active play. Its vibrant colors stay bright after multiple washes, thanks to the fade-resistant dye used in production. Machine washable and designed to withstand rough-and-tumble adventures.",
    },
    {
        id: 27,
        title: "Denim Overalls for Kids",
        descriptionSmall: "Stylish and durable denim overalls.",
        descriptionLong:
            "These classic denim overalls are perfect for kids, offering both style and comfort. Made with high-quality fabric and adjustable straps for the perfect fit.",
        price: 29.99,
        retailPrice: 39.99,
        images: [
            "https://cdn.pixabay.com/photo/2018/07/25/19/50/boy-3562120_1280.jpg",
            "https://cdn.pixabay.com/photo/2018/03/12/22/15/clothing-3221103_1280.jpg",
            "https://cdn.pixabay.com/photo/2020/07/28/15/54/toddler-5445519_1280.jpg",
        ],
        colors: ["#1E90FF"],
        availability: true,
        reviewsText: [
            "Super cute and fits perfectly!",
            "Great quality denim, my child loves wearing these.",
            "Adjustable straps make it easy to get the right fit.",
            "Sturdy material, holds up to outdoor play.",
            "Stylish and practical—great combo!",
            "My kid gets compliments all the time in these.",
        ],
        noOfReviews: 73,
        rating: 4.7,
        brand: "Little Denim Co.",
        category: "Kid’s clothing",
        additionalInformation:
            "Made with 100% denim cotton, these overalls feature adjustable straps and multiple pockets for added functionality. Ideal for outdoor activities and casual wear. The durable denim is pre-washed for a soft feel right out of the box, while reinforced stitching ensures longevity even with frequent use. Easy to clean and designed to maintain its shape and color over time.",
    },
    {
        id: 29,
        title: "Boys’ Cargo Pants",
        descriptionSmall: "Durable and stylish cargo pants for boys.",
        descriptionLong:
            "Made with soft yet durable fabric, these cargo pants are perfect for active kids. Features multiple pockets and an adjustable waistband for a snug fit.",
        price: 24.99,
        retailPrice: 34.99,
        images: [
            "https://images.pexels.com/photos/5560024/pexels-photo-5560024.jpeg?auto=compress&cs=tinysrgb&w=600",
            "https://images.pexels.com/photos/4492297/pexels-photo-4492297.jpeg?auto=compress&cs=tinysrgb&w=600",
            "https://images.pexels.com/photos/5560019/pexels-photo-5560019.jpeg?auto=compress&cs=tinysrgb&w=600",
        ],
        colors: ["#8B4513", "#2F4F4F"],
        availability: true,
        reviewsText: [
            "Super comfortable and stylish!",
            "Perfect for my son, fits great!",
            "The pockets are a huge hit with my kid!",
            "Durable enough for rough play, love these!",
            "Adjustable waist makes sizing so easy.",
            "Great quality for the price, highly recommend!",
        ],
        noOfReviews: 65,
        rating: 4.7,
        brand: "Adventure Kids",
        category: "Kid’s clothing",
        additionalInformation:
            "These cargo pants are made with premium cotton fabric, reinforced stitching for durability, and feature an elastic waistband for a secure fit. Ideal for casual and outdoor wear. The soft yet sturdy material ensures all-day comfort, while the multiple pockets provide ample storage for small treasures or essentials. Designed to withstand active lifestyles, the pants maintain their shape and color even after repeated washes. Machine washable and available in versatile earth-tone shades.",
    },
    {
        id: 30,
        title: "Girls’ Floral Dress",
        descriptionSmall: "Adorable floral dress for little girls.",
        descriptionLong:
            "This charming floral dress is lightweight, breathable, and perfect for any special occasion. Features a cute bow and ruffle details.",
        price: 27.99,
        retailPrice: 39.99,
        images: [
            "https://images.pexels.com/photos/3014853/pexels-photo-3014853.jpeg?auto=compress&cs=tinysrgb&w=600",
            "https://images.pexels.com/photos/1372138/pexels-photo-1372138.jpeg?auto=compress&cs=tinysrgb&w=600",
            "https://images.pexels.com/photos/1133721/pexels-photo-1133721.jpeg?auto=compress&cs=tinysrgb&w=600",
        ],
        colors: ["#FFC0CB", "#FF69B4"],
        availability: true,
        reviewsText: [
            "Such a beautiful dress! My daughter loves it.",
            "Perfect for birthday parties and family gatherings.",
            "The floral pattern is so pretty and vibrant.",
            "Light and comfy, great for warm weather.",
            "The bow detail is adorable—highly recommend!",
            "Washes easily and still looks brand new.",
        ],
        noOfReviews: 80,
        rating: 4.8,
        brand: "Little Bloom",
        category: "Kid’s clothing",
        additionalInformation:
            "Made with a soft and breathable cotton blend, this floral dress is designed for both comfort and style. Available in multiple sizes for toddlers and young girls. The lightweight fabric flows beautifully, making it ideal for twirling and play, while the delicate floral print adds a touch of elegance to any occasion. The ruffle details and bow are securely stitched for durability, and the dress is machine washable for easy care.",
    },
    {
        id: 31,
        title: "Men’s Slim Fit Jeans",
        descriptionSmall: "Classic slim fit jeans for men.",
        descriptionLong:
            "These Levi’s slim fit jeans offer a tailored look with stretch denim for all-day comfort. Perfect for casual or semi-formal occasions.",
        price: 49.99,
        retailPrice: 69.99,
        images: [
            "https://images.pexels.com/photos/1082529/pexels-photo-1082529.jpeg?auto=compress&cs=tinysrgb&w=600",
            "https://images.pexels.com/photos/7747328/pexels-photo-7747328.jpeg?auto=compress&cs=tinysrgb&w=600",
        ],
        colors: ["#000080", "#696969"],
        availability: true,
        reviewsText: [
            "Great fit and quality material!",
            "Love the stretch, very comfortable.",
            "Perfect for both work and weekends.",
            "Durable denim that doesn’t fade.",
            "Slim fit is spot on—looks sharp!",
            "Best jeans I’ve owned in years.",
        ],
        noOfReviews: 120,
        rating: 4.7,
        brand: "Levi’s",
        category: "Men’s Clothing",
        additionalInformation:
            "Crafted from premium denim with a hint of stretch, these Levi’s slim fit jeans provide a tailored silhouette without sacrificing comfort. The durable fabric is designed for all-day wear, offering flexibility for movement while maintaining a polished look. Ideal for casual outings or semi-formal events, these jeans resist wear and tear thanks to reinforced stitching. Machine washable, fade-resistant, and available in various sizes to suit every style.",
    },
    {
        id: 32,
        title: "Women’s Running Shoes",
        descriptionSmall: "Lightweight running shoes for women.",
        descriptionLong:
            "Designed for performance, these Adidas running shoes provide excellent cushioning and support for your daily runs or workouts.",
        price: 79.99,
        retailPrice: 99.99,
        images: [
            "https://images.pexels.com/photos/1598508/pexels-photo-1598508.jpeg?auto=compress&cs=tinysrgb&w=600",
            "https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg?auto=compress&cs=tinysrgb&w=600",
        ],
        colors: ["#FF4500", "#FFFFFF"],
        availability: true,
        reviewsText: [
            "Super comfy and stylish!",
            "Perfect for long runs.",
            "Great support for my feet.",
            "Lightweight and breathable—love them!",
            "Really boosts my workout performance.",
            "The cushioning is top-notch.",
        ],
        noOfReviews: 95,
        rating: 4.9,
        brand: "Adidas",
        category: "Footwear",
        additionalInformation:
            "Designed for performance, these Adidas running shoes feature a breathable mesh upper and a responsive Boost midsole for unparalleled comfort and energy return. Perfect for daily runs or intense workouts, the lightweight construction reduces fatigue, while the cushioned sole absorbs impact to protect your joints. The durable rubber outsole ensures excellent traction on various surfaces, and the shoes are available in multiple sizes to fit every runner’s needs.",
    },
    {
        id: 33,
        title: "Luxury Chronograph Watch",
        descriptionSmall: "Elegant chronograph watch for men.",
        descriptionLong:
            "This Rolex watch combines timeless design with precision engineering, featuring a stainless steel case and sapphire crystal.",
        price: 8500.0,
        retailPrice: 9500.0,
        images: [
            "https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?auto=compress&cs=tinysrgb&w=600",
            "https://images.pexels.com/photos/277390/pexels-photo-277390.jpeg?auto=compress&cs=tinysrgb&w=600",
        ],
        colors: ["#C0C0C0", "#000000"],
        availability: true,
        reviewsText: [
            "A masterpiece worth every penny.",
            "The quality is unmatched.",
            "Elegant design, keeps perfect time.",
            "Feels luxurious on the wrist.",
            "Best investment I’ve made in a watch.",
            "Stunning craftsmanship—love it!",
        ],
        noOfReviews: 45,
        rating: 4.9,
        brand: "Rolex",
        category: "Watches",
        additionalInformation:
            "This Rolex chronograph watch is a blend of timeless elegance and cutting-edge precision, featuring a stainless steel case and scratch-resistant sapphire crystal. Water-resistant up to 100 meters, it’s built for both style and durability. The intricate chronograph functions offer unmatched accuracy, while the polished finish elevates any outfit. Comes with a 5-year warranty and is designed to be a heirloom piece for generations.",
    },
    {
        id: 34,
        title: "Women’s Silk Saree",
        descriptionSmall: "Traditional silk saree for women.",
        descriptionLong:
            "This Fabindia silk saree features intricate handwoven patterns, perfect for festive occasions or cultural events.",
        price: 89.99,
        retailPrice: 120.0,
        images: [
            "https://images.pexels.com/photos/29819602/pexels-photo-29819602/free-photo-of-woman-in-traditional-indian-sari-walking-outdoors.jpeg?auto=compress&cs=tinysrgb&w=600",
            "https://images.pexels.com/photos/29351977/pexels-photo-29351977/free-photo-of-elegant-bride-in-traditional-indian-attire.jpeg?auto=compress&cs=tinysrgb&w=600",
        ],
        colors: ["#FFD700", "#FF4500"],
        availability: true,
        reviewsText: [
            "Beautiful design and comfortable fabric.",
            "Perfect for weddings!",
            "The silk feels so luxurious.",
            "Stunning patterns, got tons of compliments.",
            "Easy to drape and lightweight.",
            "A must-have for festive occasions.",
        ],
        noOfReviews: 65,
        rating: 4.6,
        brand: "Fabindia",
        category: "Women’s Clothing",
        additionalInformation:
            "Made from 100% pure silk, this Fabindia saree showcases intricate handwoven patterns that highlight traditional craftsmanship. Perfect for festive occasions or cultural events, its lightweight fabric drapes effortlessly, offering both elegance and comfort. The rich, vibrant colors resist fading, ensuring a lasting impression, while the soft texture feels luxurious against the skin. Dry clean only to maintain its pristine quality.",
    },
    {
        id: 35,
        title: "Men’s Casual Shirt",
        descriptionSmall: "Stylish casual shirt for men.",
        descriptionLong:
            "This Allen Solly shirt offers a relaxed fit with a modern design, ideal for everyday wear or casual outings.",
        price: 34.99,
        retailPrice: 49.99,
        images: [
            "https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg?auto=compress&cs=tinysrgb&w=600",
            "https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&w=600",
        ],
        colors: ["#4682B4", "#FFFFFF"],
        availability: true,
        reviewsText: [
            "Great quality and fit!",
            "Very versatile shirt.",
            "Comfortable for all-day wear.",
            "Love the modern design.",
            "Washes well, no shrinking.",
            "Perfect for casual outings.",
        ],
        noOfReviews: 88,
        rating: 4.5,
        brand: "Allen Solly",
        category: "Men’s Clothing",
        additionalInformation:
            "This Allen Solly casual shirt is crafted from a cotton-polyester blend, offering a relaxed fit with a modern twist for everyday versatility. Ideal for casual outings or laid-back office days, the breathable fabric ensures all-day comfort, while the tailored design keeps you looking sharp. The colors stay vibrant after multiple washes, and the shirt is machine washable for easy maintenance.",
    },
    {
        id: 36,
        title: "Designer Handbag",
        descriptionSmall: "Chic leather handbag for women.",
        descriptionLong:
            "This Gucci handbag is crafted from premium leather with gold-tone hardware, perfect for a sophisticated look.",
        price: 1200.0,
        retailPrice: 1500.0,
        images: [
            "https://images.pexels.com/photos/1152077/pexels-photo-1152077.jpeg?auto=compress&cs=tinysrgb&w=600",
            "https://images.pexels.com/photos/904350/pexels-photo-904350.jpeg?auto=compress&cs=tinysrgb&w=600",
        ],
        colors: ["#000000", "#8B4513"],
        availability: true,
        reviewsText: [
            "Absolutely stunning bag!",
            "Worth the investment.",
            "The leather quality is exceptional.",
            "Perfect size for daily use.",
            "Gold hardware adds a classy touch.",
            "Love the detachable strap feature.",
        ],
        noOfReviews: 50,
        rating: 4.8,
        brand: "Gucci",
        category: "Handbags",
        additionalInformation:
            "This Gucci handbag is crafted from premium leather, featuring gold-tone hardware for a sophisticated finish. With multiple compartments and a detachable shoulder strap, it’s as functional as it is stylish, perfect for work or evenings out. The supple leather ages beautifully, developing a unique patina over time, while the sturdy construction ensures durability. A timeless accessory designed to elevate any wardrobe.",
    },
    {
        id: 37,
        title: "Kids’ Sneakers",
        descriptionSmall: "Durable sneakers for kids.",
        descriptionLong:
            "These Nike sneakers are designed for active kids, with a lightweight build and cushioned sole for all-day play.",
        price: 39.99,
        retailPrice: 55.0,
        images: [
            "https://images.pexels.com/photos/48262/pexels-photo-48262.jpeg?auto=compress&cs=tinysrgb&w=600",
            "https://images.pexels.com/photos/2529147/pexels-photo-2529147.jpeg?auto=compress&cs=tinysrgb&w=600",
        ],
        colors: ["#FF0000", "#0000FF"],
        availability: true,
        reviewsText: [
            "My kids love these shoes!",
            "Great for running around.",
            "Super durable for active play.",
            "Bright colors they adore.",
            "Comfortable and lightweight.",
            "Holds up well after months of use.",
        ],
        noOfReviews: 75,
        rating: 4.7,
        brand: "Nike",
        category: "Kid’s clothing",
        additionalInformation:
            "These Nike sneakers are designed for active kids, featuring a breathable mesh upper and a cushioned rubber outsole for all-day comfort and support. The lightweight build allows for unrestricted movement, while the durable materials withstand rough play. Perfect for school or outdoor adventures, these sneakers offer excellent traction and vibrant colors that kids love. Easy to clean and built to last.",
    },
    {
        id: 38,
        title: "Women’s Perfume",
        descriptionSmall: "Elegant floral fragrance.",
        descriptionLong:
            "This Chanel perfume offers a luxurious blend of floral and woody notes, perfect for any occasion.",
        price: 129.99,
        retailPrice: 160.0,
        images: [
            "https://images.pexels.com/photos/264819/pexels-photo-264819.jpeg?auto=compress&cs=tinysrgb&w=600",
            "https://images.pexels.com/photos/932587/pexels-photo-932587.jpeg?auto=compress&cs=tinysrgb&w=600",
        ],
        colors: [],
        availability: true,
        reviewsText: [
            "Smells divine!",
            "Long-lasting scent.",
            "Perfect balance of floral and woody.",
            "Gets compliments every time I wear it.",
            "Elegant and sophisticated fragrance.",
            "Worth every penny for the quality.",
        ],
        noOfReviews: 110,
        rating: 4.9,
        brand: "Chanel",
        category: "Beauty",
        additionalInformation:
            "This Chanel perfume is a luxurious 50ml blend of floral and woody notes, with top notes of jasmine and rose for an elegant, timeless scent. Designed for all-day wear, its long-lasting formula lingers beautifully without overpowering, making it perfect for any occasion. The sophisticated fragrance is housed in a sleek bottle, offering a touch of luxury with every spritz. A must-have for fragrance lovers.",
    },
    {
        id: 39,
        title: "Men’s Sunglasses",
        descriptionSmall: "Stylish polarized sunglasses.",
        descriptionLong:
            "These Ray-Ban sunglasses feature polarized lenses and a sleek design, perfect for outdoor adventures.",
        price: 139.99,
        retailPrice: 179.99,
        images: [
            "https://images.pexels.com/photos/46710/pexels-photo-46710.jpeg?auto=compress&cs=tinysrgb&w=600",
            "https://images.pexels.com/photos/30925008/pexels-photo-30925008/free-photo-of-stylish-man-with-sunflower-by-urban-skyline.jpeg?auto=compress&cs=tinysrgb&w=600",
        ],
        colors: ["#000000", "#808080"],
        availability: true,
        reviewsText: [
            "Fantastic clarity and style.",
            "Great for driving.",
            "Polarized lenses are a game-changer.",
            "Sleek design, very sturdy.",
            "Perfect for sunny days outdoors.",
            "Love the UV protection!",
        ],
        noOfReviews: 90,
        rating: 4.8,
        brand: "Ray-Ban",
        category: "Accessories",
        additionalInformation:
            "These Ray-Ban sunglasses feature polarized, scratch-resistant lenses with full UV protection, ensuring crystal-clear vision and eye safety. Perfect for outdoor adventures or daily wear, the sleek design complements any style, while the lightweight frame offers all-day comfort. Built to last, these sunglasses resist wear and tear, making them a reliable choice for any season.",
    },
    {
        id: 40,
        title: "Charm Bracelet",
        descriptionSmall: "Customizable charm bracelet.",
        descriptionLong:
            "This Pandora bracelet allows you to add personal charms, crafted from sterling silver for a timeless look.",
        price: 69.99,
        retailPrice: 89.99,
        images: [
            "https://images.pexels.com/photos/266621/pexels-photo-266621.jpeg?auto=compress&cs=tinysrgb&w=600",
            "https://images.pexels.com/photos/2787341/pexels-photo-2787341.jpeg?auto=compress&cs=tinysrgb&w=600",
        ],
        colors: ["#C0C0C0"],
        availability: true,
        reviewsText: [
            "Love adding my own charms!",
            "Beautiful and sturdy.",
            "Perfect gift for any occasion.",
            "The silver shines so nicely.",
            "Adjustable fit is super convenient.",
            "A timeless piece I’ll cherish.",
        ],
        noOfReviews: 85,
        rating: 4.7,
        brand: "Pandora",
        category: "Jewellery",
        additionalInformation:
            "This Pandora charm bracelet is crafted from sterling silver, offering a customizable and timeless accessory for any jewelry lover. Its adjustable length ensures a perfect fit, while the durable design withstands daily wear. Add personal charms (sold separately) to tell your story, and enjoy the polished finish that retains its shine over time. A versatile piece that’s both elegant and meaningful.",
    },
    {
        id: 41,
        title: "Men’s Leather Watch",
        descriptionSmall: "Classic leather strap watch.",
        descriptionLong:
            "This Titan watch features a minimalist design with a genuine leather strap, ideal for formal or casual wear.",
        price: 89.99,
        retailPrice: 110.0,
        images: [
            "https://images.pexels.com/photos/3829441/pexels-photo-3829441.jpeg?auto=compress&cs=tinysrgb&w=600",
            "https://images.pexels.com/photos/236900/pexels-photo-236900.jpeg?auto=compress&cs=tinysrgb&w=600",
            "https://images.pexels.com/photos/2494608/pexels-photo-2494608.jpeg?auto=compress&cs=tinysrgb&w=600",
        ],
        colors: ["#8B4513", "#000000"],
        availability: true,
        reviewsText: [
            "Elegant and reliable.",
            "Great value for money.",
            "The leather strap feels premium.",
            "Perfect for both suits and casual outfits.",
            "Accurate timekeeping, love the simplicity.",
            "A timeless piece for my collection.",
        ],
        noOfReviews: 70,
        rating: 4.6,
        brand: "Titan",
        category: "Watches",
        additionalInformation:
            "This Titan watch combines minimalist elegance with reliable functionality, featuring a genuine leather strap and quartz movement for precise timekeeping. Water-resistant up to 50 meters, it’s built to withstand daily wear while maintaining its classic appeal. The soft leather molds comfortably to the wrist over time, and the sleek dial offers a sophisticated touch for both formal and casual settings. A durable, stylish accessory designed to last.",
    },
    {
        id: 42,
        title: "Women’s Blazer",
        descriptionSmall: "Chic tailored blazer for women.",
        descriptionLong:
            "This Zara blazer offers a sharp, tailored fit, perfect for professional settings or stylish evenings out.",
        price: 59.99,
        retailPrice: 79.99,
        images: [
            "https://images.pexels.com/photos/19303743/pexels-photo-19303743/free-photo-of-elegant-checked-blazer-on-display.jpeg?auto=compress&cs=tinysrgb&w=600",
            "https://images.pexels.com/photos/19638916/pexels-photo-19638916/free-photo-of-elegant-red-jacket-on-mannequin.jpeg?auto=compress&cs=tinysrgb&w=600",
            "https://images.pexels.com/photos/19014600/pexels-photo-19014600/free-photo-of-pink-womans-suit-jacket-on-a-mannequin.jpeg?auto=compress&cs=tinysrgb&w=600",
        ],
        colors: ["#000000", "#FFFFFF"],
        availability: true,
        reviewsText: [
            "Perfect fit and stylish!",
            "Great for work.",
            "Tailoring is spot on—looks expensive.",
            "Comfortable yet professional.",
            "Versatile for day or night wear.",
            "Love the sleek design!",
        ],
        noOfReviews: 60,
        rating: 4.5,
        brand: "Zara",
        category: "Women’s Clothing",
        additionalInformation:
            "This Zara blazer is crafted from a premium wool-blend fabric, offering a sharp, tailored fit that exudes confidence and style. Perfect for professional settings or chic evenings out, its structured design enhances your silhouette without compromising comfort. The fabric resists wrinkling, ensuring a polished look all day, while the versatile colors pair effortlessly with any outfit. Dry clean recommended to preserve its pristine quality.",
    },
    {
        id: 43,
        title: "Men’s Designer Sunglasses",
        descriptionSmall: "Luxury sunglasses for men.",
        descriptionLong:
            "These Tom Ford sunglasses feature a bold frame and premium lenses, offering both style and protection.",
        price: 299.99,
        retailPrice: 350.0,
        images: [
            "https://images.pexels.com/photos/701877/pexels-photo-701877.jpeg?auto=compress&cs=tinysrgb&w=600",
            "https://images.pexels.com/photos/343720/pexels-photo-343720.jpeg?auto=compress&cs=tinysrgb&w=600",
        ],
        colors: ["#000000", "#4B0082"],
        availability: true,
        reviewsText: [
            "Super cool design!",
            "High-quality lenses.",
            "Bold frame makes a statement.",
            "Perfect clarity in bright sunlight.",
            "Worth the price for the luxury feel.",
            "Stylish and durable—love them!",
        ],
        noOfReviews: 55,
        rating: 4.8,
        brand: "Tom Ford",
        category: "Accessories",
        additionalInformation:
            "These Tom Ford sunglasses feature polarized lenses with full UV protection, paired with a bold, premium frame for a striking look. Designed for both style and function, they offer exceptional clarity and eye protection in any light condition. The lightweight yet sturdy construction ensures all-day comfort, while the luxurious design elevates your everyday wear. A high-end accessory built to impress and endure.",
    },
    {
        id: 44,
        title: "Women’s Tote Bag",
        descriptionSmall: "Spacious tote bag for women.",
        descriptionLong:
            "This Michael Kors tote bag is made from premium leather, offering ample space and a chic design for daily use.",
        price: 199.99,
        retailPrice: 250.0,
        images: [
            "https://images.pexels.com/photos/1204459/pexels-photo-1204459.jpeg?auto=compress&cs=tinysrgb&w=600",
            "https://images.pexels.com/photos/1381553/pexels-photo-1381553.jpeg?auto=compress&cs=tinysrgb&w=600",
        ],
        colors: ["#8B4513", "#000000"],
        availability: true,
        reviewsText: [
            "Love the size and quality!",
            "Perfect for work and travel.",
            "The leather is so soft and durable.",
            "Spacious yet stylish.",
            "Zippered top keeps everything secure.",
            "A classy addition to my collection.",
        ],
        noOfReviews: 80,
        rating: 4.7,
        brand: "Michael Kors",
        category: "Handbags",
        additionalInformation:
            "This Michael Kors tote bag is crafted from premium leather, featuring internal pockets and a zippered top for secure, spacious storage. Ideal for daily use, its chic design seamlessly transitions from work to weekend adventures. The supple leather offers a luxurious feel that improves with age, while the sturdy construction ensures long-lasting durability. A versatile, elegant accessory designed to keep you organized in style.",
    },
    {
        id: 45,
        title: "Kids’ Ethnic Kurta",
        descriptionSmall: "Festive kurta for boys.",
        descriptionLong:
            "This Fabindia kurta is crafted from soft cotton, featuring traditional embroidery for special occasions.",
        price: 29.99,
        retailPrice: 39.99,
        images: [
            "https://images.pexels.com/photos/17015459/pexels-photo-17015459/free-photo-of-a-young-boy-in-a-traditional-outfit-posing-in-studio.jpeg?auto=compress&cs=tinysrgb&w=600",
            "https://images.pexels.com/photos/11494668/pexels-photo-11494668.jpeg?auto=compress&cs=tinysrgb&w=600",
        ],
        colors: ["#FFD700", "#008000"],
        availability: true,
        reviewsText: [
            "Perfect for festivals!",
            "Very comfortable fabric.",
            "The embroidery is beautiful.",
            "My son loves wearing this.",
            "Great fit for special occasions.",
            "Soft and breathable—highly recommend!",
        ],
        noOfReviews: 50,
        rating: 4.6,
        brand: "Fabindia",
        category: "Kid’s clothing",
        additionalInformation:
            "This Fabindia kurta is made from 100% soft cotton, adorned with traditional embroidery that adds a festive flair for boys aged 2-10. Perfect for special occasions, its breathable fabric ensures all-day comfort, while the vibrant colors and intricate detailing make it a standout piece. Lightweight and easy to wear, this kurta maintains its shape and softness even after multiple washes, offering both style and practicality.",
    },
    {
        id: 46,
        title: "Men’s Running Shoes",
        descriptionSmall: "High-performance running shoes.",
        descriptionLong:
            "These Nike shoes offer advanced cushioning and a lightweight design, ideal for serious runners.",
        price: 99.99,
        retailPrice: 130.0,
        images: [
            "https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg?auto=compress&cs=tinysrgb&w=600",
            "https://images.pexels.com/photos/1598508/pexels-photo-1598508.jpeg?auto=compress&cs=tinysrgb&w=600",
        ],
        colors: ["#0000FF", "#FFFFFF"],
        availability: true,
        reviewsText: [
            "Amazing support for long runs.",
            "Really lightweight!",
            "Perfect cushioning for my feet.",
            "Great traction on all surfaces.",
            "Boosts my running performance.",
            "Durable and stylish—love them!",
        ],
        noOfReviews: 100,
        rating: 4.8,
        brand: "Nike",
        category: "Footwear",
        additionalInformation:
            "These Nike running shoes feature a breathable mesh upper and a durable rubber sole, delivering advanced cushioning and a lightweight feel for serious runners. Designed for high performance, they provide exceptional support and energy return, reducing fatigue during long runs. The rugged outsole ensures superior traction on various terrains, while the sleek design adds a stylish edge. Built to last and enhance every stride.",
    },
    {
        id: 47,
        title: "Women’s Diamond Earrings",
        descriptionSmall: "Elegant diamond stud earrings.",
        descriptionLong:
            "These Pandora earrings feature sparkling diamonds set in sterling silver, perfect for any occasion.",
        price: 149.99,
        retailPrice: 189.99,
        images: [
            "https://images.pexels.com/photos/10976654/pexels-photo-10976654.jpeg?auto=compress&cs=tinysrgb&w=600",
            "https://images.pexels.com/photos/2849743/pexels-photo-2849743.jpeg?auto=compress&cs=tinysrgb&w=600",
            "https://images.pexels.com/photos/10983783/pexels-photo-10983783.jpeg?auto=compress&cs=tinysrgb&w=600",
        ],
        colors: ["#C0C0C0"],
        availability: true,
        reviewsText: [
            "Stunning and elegant!",
            "Perfect gift idea.",
            "The diamonds sparkle beautifully.",
            "Comfortable for all-day wear.",
            "Classy and timeless design.",
            "Love the hypoallergenic feature!",
        ],
        noOfReviews: 65,
        rating: 4.9,
        brand: "Pandora",
        category: "Jewellery",
        additionalInformation:
            "These Pandora earrings feature 0.2-carat sparkling diamonds set in hypoallergenic sterling silver, offering elegance for any occasion. The brilliant-cut stones catch the light effortlessly, adding a touch of luxury to your look, while the lightweight design ensures comfort throughout the day. Perfect for gifting or cherishing yourself, these studs are crafted to maintain their shine and withstand daily wear.",
    },
    {
        id: 48,
        title: "Men’s Formal Watch",
        descriptionSmall: "Sleek formal watch for men.",
        descriptionLong:
            "This Michael Kors watch features a stainless steel band and minimalist dial, ideal for business or formal settings.",
        price: 179.99,
        retailPrice: 220.0,
        images: [
            "https://images.pexels.com/photos/2919052/pexels-photo-2919052.jpeg?auto=compress&cs=tinysrgb&w=600",
            "https://images.pexels.com/photos/18271276/pexels-photo-18271276/free-photo-of-man-hands-over-golden-wristwatch.jpeg?auto=compress&cs=tinysrgb&w=600",
        ],
        colors: ["#C0C0C0", "#000000"],
        availability: true,
        reviewsText: [
            "Looks very professional.",
            "Great quality for the price.",
            "Sleek and stylish design.",
            "Perfect for business meetings.",
            "The steel band feels solid.",
            "Accurate and elegant—love it!",
        ],
        noOfReviews: 70,
        rating: 4.7,
        brand: "Michael Kors",
        category: "Watches",
        additionalInformation:
            "This Michael Kors formal watch features a stainless steel band and a minimalist dial, delivering a sleek, sophisticated look for business or formal settings. Water-resistant up to 50 meters and powered by quartz movement, it offers reliable precision and durability. The polished finish resists scratches, while the comfortable band ensures a secure fit all day. A refined accessory designed to elevate your professional style.",
    },
    {
        id: 49,
        title: "Women’s Casual Top",
        descriptionSmall: "Comfy casual top for women.",
        descriptionLong:
            "This Zara top is made from soft cotton, featuring a relaxed fit and trendy design for everyday wear.",
        price: 24.99,
        retailPrice: 35.0,
        images: [
            "https://images.pexels.com/photos/1462637/pexels-photo-1462637.jpeg?auto=compress&cs=tinysrgb&w=600",
            "https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=600",
        ],
        colors: ["#FFFFFF", "#FF69B4"],
        availability: true,
        reviewsText: [
            "Super cute and comfy!",
            "Perfect for casual days.",
            "Soft fabric, great fit.",
            "Love the trendy style.",
            "Washes well, no fading.",
            "A wardrobe staple!",
        ],
        noOfReviews: 85,
        rating: 4.6,
        brand: "Zara",
        category: "Women’s Clothing",
        additionalInformation:
            "This Zara casual top is crafted from 100% soft cotton, offering a relaxed fit and trendy design perfect for everyday wear. The breathable fabric keeps you comfortable all day, while the vibrant colors and modern cut add a stylish flair to your wardrobe. Machine washable and designed to resist shrinking or fading, this top is a versatile essential for effortless, laid-back looks.",
    },
    {
        id: 50,
        title: "Men’s Leather Belt",
        descriptionSmall: "Classic leather belt for men.",
        descriptionLong:
            "This Gucci belt is crafted from genuine leather with a polished buckle, perfect for both formal and casual looks.",
        price: 249.99,
        retailPrice: 300.0,
        images: [
            "https://images.pexels.com/photos/8539466/pexels-photo-8539466.jpeg?auto=compress&cs=tinysrgb&w=600",
            "https://images.pexels.com/photos/30755551/pexels-photo-30755551/free-photo-of-luxury-black-leather-belt-with-designer-logo-buckle.jpeg?auto=compress&cs=tinysrgb&w=600",
            "https://images.pexels.com/photos/71123/belts-leather-seam-sew-71123.jpeg?auto=compress&cs=tinysrgb&w=600",
        ],
        colors: ["#000000", "#8B4513"],
        availability: true,
        reviewsText: [
            "High-quality leather!",
            "Looks great with suits.",
            "The buckle is stunning.",
            "Perfect fit and durability.",
            "A luxury belt worth every penny.",
            "Versatile for any occasion.",
        ],
        noOfReviews: 60,
        rating: 4.8,
        brand: "Gucci",
        category: "Accessories",
        additionalInformation:
            "This Gucci belt is crafted from 100% genuine leather with a polished buckle, offering an adjustable fit for both formal and casual looks. The premium leather develops a rich patina over time, enhancing its timeless appeal, while the sturdy construction ensures long-lasting wear. Perfect for elevating any outfit, this belt combines luxury and functionality with a sleek, sophisticated design.",
    },
];

export const brands: string[] = [
    "Zara",
    "Nike",
    "Levi’s",
    "Rolex",
    "Titan",
    "Adidas",
    "Gucci",
    "Chanel",
    "Ray-Ban",
    "Pandora",
    "Tom Ford",
    "Michael Kors",
    "Allen Solly",
    "Fabindia",
];

export const categories: string[] = [
    "Men’s Clothing",
    "Kid’s clothing",
    "Women’s Clothing",
    "Footwear",
    "Watches",
    "Beauty",
    "Handbags",
    "Jewellery",
    "Accessories",
];

export const featuredPostData: FeaturedPostData[] = [
    {
        img: featuredPost1,
        title: "Loudest à la Madison #1 (L'integral)",
        description:
            "We focus on ergonomics and meeting you where you work.It's only a keystroke away.",
        date: "22 April 2021",
        comments: "10",
    },
    {
        img: featuredPost2,
        title: "Loudest à la Madison #1 (L'integral)",
        description:
            "We focus on ergonomics and meeting you where you work.It's only a keystroke away.",
        date: "22 April 2021",
        comments: "10",
    },
    {
        img: featuredPost3,
        title: "Loudest à la Madison #1 (L'integral)",
        description:
            "We focus on ergonomics and meeting you where you work.It's only a keystroke away.",
        date: "22 April 2021",
        comments: "10",
    },
];

export const heroFirstData: HeroFirst[] = [
    {
        img: heroFirst1,
        content: {
            subtitle: "SUMMER 2020",
            title: "NEW COLLECTION",
            description:
                "We know how large objects will act, but things on a small scale.",
        },
    },
    {
        img: heroFirst2,
        content: {
            subtitle: "SUMMER 2020",
            title: "NEW COLLECTION",
            description:
                "We know how large objects will act, but things on a small scale.",
        },
    },
];

interface FooterData {
    city: string;
    street: string;
    no: string;
    mobileNo: string;
    fax: string;
}
export const footerData: FooterData[] = [
    {
        city: "Paris",
        street: "1901 Thorn ridge Cir. ",
        no: "75000 Paris",
        mobileNo: "+451 215 215 ",
        fax: "+451 215 215",
    },
    {
        city: "New York",
        street: "2715 Ash Dr. San Jose, ",
        no: "75000 Paris",
        mobileNo: "+451 215 215 ",
        fax: "+451 215 215",
    },
    {
        city: "Berlin",
        street: "4140 Parker Rd. ",
        no: "75000 Paris",
        mobileNo: "+451 215 215 ",
        fax: "+451 215 215",
    },
    {
        city: "London",
        street: "3517 W. Gray St. Utica, ",
        no: "75000 Paris",
        mobileNo: "+451 215 215 ",
        fax: "+451 215 215",
    },
];

interface BestSellerProductsData {
    img: string;
    title: string;
    description: string;
    price: string;
    retailPrice: string;
}

export const bestSellerProductsData: BestSellerProductsData[] = [
    {
        img: bestSeller1,
        title: "Pink Plate",
        description: "Durable, good Quality Plate",
        price: "$16.48",
        retailPrice: "$6.48",
    },
    {
        img: bestSeller2,
        title: "Yellow T-shirt",
        description: "Premium Quality T-shirt",
        price: "$16.48",
        retailPrice: "$6.48",
    },
    {
        img: bestSeller3,
        title: "Yellow T-shirt",
        description: "Premium Quality T-shirt",
        price: "$16.48",
        retailPrice: "$6.48",
    },
    {
        img: bestSeller4,
        title: "Yellow T-shirt",
        description: "Premium Quality T-shirt",
        price: "$16.48",
        retailPrice: "$6.48",
    },
    {
        img: bestSeller5,
        title: "Yellow T-shirt",
        description: "Premium Quality T-shirt",
        price: "$16.48",
        retailPrice: "$6.48",
    },
    {
        img: bestSeller6,
        title: "Yellow T-shirt",
        description: "Premium Quality T-shirt",
        price: "$16.48",
        retailPrice: "$6.48",
    },
    {
        img: bestSeller1,
        title: "Yellow T-shirt",
        description: "Premium Quality T-shirt",
        price: "$16.48",
        retailPrice: "$6.48",
    },
    {
        img: bestSeller2,
        title: "Yellow T-shirt",
        description: "Premium Quality T-shirt",
        price: "$16.48",
        retailPrice: "$6.48",
    },
];

interface TeamDetail {
    img: string;
    username: string;
    profession: string;
}

export const teamDetail: TeamDetail[] = [
    {
        img: teamMember1,
        username: "Namita Thapar",
        profession: "Frontend Developer",
    },
    {
        img: teamMember2,
        username: "Vineeta Singh",
        profession: "Backend Developer",
    },
    {
        img: teamMember3,
        username: "Piyush Bansal",
        profession: "FullStack Developer",
    },
];

interface ShopCardItems {
    id: number;
    image: string;
    heading: string;
}

export const shopCardItems: ShopCardItems[] = [
    {
        id: 1,
        image: mensClothing,
        heading: "MEN'S CLOTHING"
    },
    {
        id: 2,
        image: womensClothing,
        heading: "WOMEN'S CLOTHING"
    },
    {
        id: 3,
        image: footwear,
        heading: "Footwear"
    },
    {
        id: 4,
        image: watches,
        heading: "Watches"
    },
    {
        id: 5,
        image: beauty,
        heading: "Beauty"
    },
    {
        id: 6,
        image: kidsCLothing,
        heading: "KIDS' CLOTHING"
    },
    {
        id: 7,
        image: handbags,
        heading: "Handbags"
    },
    {
        id: 8,
        image: jewellery,
        heading: "Jewellery"
    },
    {
        id: 9,
        image: accessories,
        heading: "Accessories"
    },
];
