
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
    descriptionLong: string[];
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
        descriptionLong: [
            "The Nike Air Max 270 features a large Air unit for unmatched comfort and a sleek, modern design perfect for running or casual everyday wear.",
            "Drawing inspiration from Air Max 180 and 93, it blends retro style with advanced cushioning, ideal for athletes and fashion-forward individuals alike.",
            "Its lightweight mesh upper ensures breathability, while vibrant colors and a durable outsole provide traction and a bold look on any surface.",
        ],
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
        descriptionLong: [
            "The Rolex Submariner combines elegance and performance, designed for deep-sea diving with a timeless aesthetic that suits both adventure and sophisticated events perfectly.",
            "Introduced in 1953, it offers 300-meter water resistance, a ceramic bezel, and Oystersteel build, ensuring durability and precision for any dive.",
            "Luminescent markers and the Caliber 3235 movement provide visibility and accuracy, making this luxury watch an iconic choice for all occasions.",
        ],
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
        descriptionLong: [
            "The Gucci GG Marmont handbag showcases soft quilted leather and the signature GG logo, offering a chic, versatile style for any occasion or outfit.",
            "Designed with an adjustable chain strap, it shifts from shoulder bag to crossbody, blending luxury with practicality and ample interior space.",
            "Crafted from premium materials, this timeless piece delivers sophistication and durability, elevating your look for daily use or special moments effortlessly.",
        ],
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
        descriptionLong: [
            "Chanel No. 5 delivers a timeless floral and musky scent, blending elegance and sophistication to elevate any occasion with its long-lasting aroma.",
            "Launched in 1921, it opens with citrus, followed by jasmine and rose, housed in an iconic bottle that exudes classic luxury.",
            "This fragrance balances fresh top notes with a warm, musky base, making it a signature choice for perfume lovers everywhere.",
        ],
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
        descriptionLong: [
            "Levi’s 501 jeans offer a straight-leg fit, button fly, and durable denim, delivering timeless style and comfort for casual wear or everyday outfits.",
            "Since 1873, these jeans provide a regular fit with high-quality fabric, ensuring lasting durability and versatility for any fashion-forward wardrobe.",
            "With their iconic design and sturdy build, they pair effortlessly with anything, making them a classic staple for all occasions.",
        ],
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
        descriptionLong: [
            "The Zara Floral Summer Dress features a flowy fit, vibrant floral patterns, and lightweight fabric, offering chic comfort for warm days or casual outings.",
            "With an A-line silhouette, it provides breathability and elegance, making it a perfect choice for summer events or relaxed stylish moments.",
            "Its bright colors and soft material create an effortless, fashionable look, ideal for pairing with sandals or accessories anywhere.",
        ],
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
        descriptionLong: [
            "Adidas Ultraboost 22 offers superior cushioning and energy return with a sleek design, crafted for runners seeking peak performance and comfort every day.",
            "Featuring Boost technology and a Primeknit upper, it molds to your foot, delivering a lightweight, snug fit for any run.",
            "The Continental rubber outsole ensures exceptional grip on all terrains, combining durability and style for athletes or casual wearers alike.",
        ],
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
        descriptionLong: [
            "The Cartier Love Bracelet, made in 18K gold, features a unique screw motif, symbolizing timeless love and elegance for any occasion or wearer.",
            "Introduced in 1969, it comes with a screwdriver to lock, offering a luxurious blend of commitment and bold, iconic design.",
            "Its flawless gold finish and distinctive style make it a cherished piece, ideal for gifting or keeping as a keepsake.",
        ],
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
        descriptionLong: [
            "Ray-Ban Aviator sunglasses feature a classic metal frame and UV-protective lenses, offering timeless style and clear vision for outdoor activities or daily wear.",
            "Designed in 1937 for U.S. aviators, they provide lightweight comfort and glare reduction, perfect for driving or enjoying sunny days anywhere.",
            "With sleek lines and versatile color options, these durable shades deliver a cool, iconic look suitable for any occasion or outfit.",
        ],
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
        descriptionLong: [
            "The Michael Kors Jet Set Tote offers a spacious, stylish design with saffiano leather, perfect for carrying essentials to work or casual outings daily.",
            "Featuring multiple compartments and a structured shape, it combines elegance and utility, making it ideal for busy lifestyles or travel needs.",
            "Crafted with premium materials, this chic tote elevates any outfit, providing durability and a designer touch for fashion-conscious individuals everywhere.",
        ],
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
        descriptionLong: [
            "This Armani Exchange watch features a stainless steel design with chronograph functionality and a modern dial, perfect for both casual and formal occasions.",
            "Crafted for precision, it blends sleek aesthetics with quartz movement, offering a durable, stylish timepiece that enhances any outfit effortlessly.",
            "Its bold design and reliable performance make it a standout accessory, delivering sophistication and utility for the modern man daily.",
        ],
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
        descriptionLong: [
            "The Nike Air Force 1 offers premium leather and a timeless low-top design, ensuring all-day comfort for casual wear or stylish street looks.",
            "With its iconic silhouette and cushioned sole, it delivers durability and support, making it a favorite for sneaker enthusiasts everywhere.",
            "This classic shoe blends heritage style with modern comfort, perfect for pairing with jeans or shorts for any occasion.",
        ],
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
        descriptionLong: [
            "The Fossil leather wallet is crafted with premium materials, featuring multiple card slots and RFID protection for secure, stylish storage every day.",
            "Made from genuine leather, it offers a sleek design with durable stitching, ensuring longevity and a timeless look for any occasion.",
            "Its compact yet spacious layout keeps essentials organized, blending functionality with elegance for the modern man on the go.",
        ],
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
        descriptionLong: [
            "The Tissot PRX features a stainless steel bracelet, sapphire crystal, and automatic movement, blending Swiss precision with a stylish design for all occasions.",
            "Its vintage-inspired look and scratch-resistant crystal offer durability and elegance, making it a reliable choice for watch enthusiasts everywhere.",
            "With an 80-hour power reserve, this automatic timepiece ensures accurate timekeeping, combining sophistication with functionality for daily wear.",
        ],
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
        descriptionLong: [
            "Tom Ford Oud Wood is a rich, exotic fragrance with oud, sandalwood, and vanilla notes, offering a luxurious scent for sophisticated occasions.",
            "This bold blend features smoky oud and creamy sandalwood, creating a warm, long-lasting aroma that captivates with every spritz.",
            "Hints of cardamom and amber add depth, making it an alluring choice for evening wear or special moments anywhere.",
        ],
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
        descriptionLong: [
            "The Pandora charm bracelet, crafted in rose gold-plated metal, lets you personalize it with charms, adding a touch of elegance to any style.",
            "Its warm rose gold finish offers a romantic glow, making it a versatile piece for daily wear or special occasions alike.",
            "Designed for customization, this durable bracelet blends timeless beauty with personal expression, perfect for gifting or cherishing yourself.",
        ],
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
        descriptionLong: [
            "This Tommy Hilfiger polo shirt is made from breathable cotton with iconic logo embroidery, offering timeless style and comfort for any casual occasion.",
            "Its soft fabric and ribbed collar ensure a lightweight, relaxed fit, perfect for work, weekends, or warm-weather outings effortlessly.",
            "Featuring a two-button placket and classic design, it blends signature branding with versatility, making it a wardrobe essential for men.",
        ],
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
        descriptionLong: [
            "The Michael Kors leather handbag offers a sleek design and spacious interior, crafted with premium materials for elegance and functionality in daily use.",
            "Its high-quality leather and multiple compartments provide ample storage, making it perfect for work, travel, or casual outings effortlessly.",
            "This timeless piece combines sophisticated style with durable craftsmanship, ensuring a luxurious accessory that complements any outfit beautifully.",
        ],
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
        descriptionLong: [
            "This Armani Exchange chronograph watch features a sleek stainless steel case, durable strap, and multiple dials for precise timekeeping and modern style.",
            "Designed with sub-dials for functionality, it offers a sophisticated look that pairs effortlessly with casual or formal outfits every day.",
            "Its robust build and contemporary design make it a reliable, fashionable accessory for the modern man seeking elegance and utility.",
        ],
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
        descriptionLong: [
            "MAC Matte Lipstick offers bold, pigmented color with smooth application and a non-drying finish, ensuring a flawless look that lasts all day long.",
            "Its velvety texture glides on effortlessly, providing full coverage and a shine-free matte effect, perfect for day or night wear.",
            "This lipstick delivers intense shades and comfort, making it a beauty essential for creating striking lip looks anytime.",
        ],
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
        "descriptionLong": [
            "The Adidas Superstar features a leather upper, comfy cushioning, and signature shell toe, delivering a timeless look for casual wear or street style.",
            "With its durable rubber toe and sleek design, it offers support and a retro vibe, loved by sneaker fans worldwide.",
            "This iconic shoe blends heritage aesthetics with modern comfort, making it a versatile choice for any outfit or occasion."
        ],
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
        "descriptionLong": [
            "This H&M winter jacket for kids provides warmth and comfort with a stylish design, perfect for keeping little ones cozy on chilly days.",
            "Featuring insulated materials and a fleece lining, it ensures excellent protection against cold weather, ideal for playtime or outings.",
            "Its water-resistant outer layer and vibrant colors make it a practical, fashionable choice for kids during winter months."
        ],
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
        "descriptionLong": [
            "The Gucci gold bracelet is crafted from fine gold, featuring an intricate pattern that exudes luxury and style for any occasion or outfit.",
            "Its exquisite design and premium materials make it a timeless piece, perfect for adding sophistication to your jewelry collection effortlessly.",
            "This elegant bracelet showcases Gucci’s signature craftsmanship, offering a bold yet refined accessory that elevates your look beautifully."
        ],
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
        "descriptionLong": [
            "These Levi’s skinny jeans are made with stretchable denim, offering a perfect fit and stylish appeal for casual or dressed-up looks every day.",
            "Designed with a flattering silhouette, they hug your curves comfortably, blending timeless Levi’s quality with modern fashion for any occasion.",
            "The flexible fabric and classic five-pocket style ensure durability and versatility, making them a wardrobe staple for women everywhere."
        ],
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
        "descriptionLong": [
            "Versace Eros is a fresh, woody fragrance with mint, vanilla, and cedarwood notes, offering a bold, long-lasting scent for confident men everywhere.",
            "Its invigorating blend of green apple and tonka bean creates a sensual aroma, perfect for date nights or special occasions.",
            "This captivating perfume balances freshness with warmth, delivering a masculine edge that stands out and lingers all day long."
        ],
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
        "descriptionLong": [
            "This premium cotton t-shirt is lightweight and breathable, designed for kids’ everyday wear with a soft feel, available in vibrant colors and various sizes.",
            "Crafted from high-quality cotton, it ensures all-day comfort and durability, perfect for school, play, or casual outings with a fade-resistant finish.",
            "The versatile design and multiple color options make this t-shirt a wardrobe staple, keeping kids cool and stylish during any activity."
        ],
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
        "descriptionLong": [
            "These classic denim overalls offer kids style and comfort, made with high-quality fabric and adjustable straps for a perfect fit every day.",
            "Designed for active kids, they feature durable denim and multiple pockets, blending practicality with a timeless look for casual wear or playtime.",
            "Pre-washed for softness, these overalls ensure lasting comfort and sturdiness, making them ideal for outdoor adventures or everyday fun."
        ],
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
        "descriptionLong": [
            "Made with soft, durable fabric, these cargo pants are perfect for active boys, featuring multiple pockets and an adjustable waistband for comfort.",
            "Designed for rough play, they offer a snug fit with reinforced stitching, ideal for outdoor adventures or casual everyday wear.",
            "The versatile earth-tone shades and spacious pockets make these pants a stylish, practical choice for boys on the go."
        ],
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
        "descriptionLong": [
            "This charming floral dress is lightweight and breathable, featuring a cute bow and ruffle details, perfect for any special occasion or celebration.",
            "Crafted with a soft cotton blend, it offers comfort and style, making it ideal for twirling and play on warm days.",
            "The vibrant floral print and delicate design add elegance, ensuring your little girl shines at parties or family gatherings."
        ],
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
        "descriptionLong": [
            "These Levi’s slim fit jeans offer a tailored look with stretch denim, ensuring all-day comfort for casual or semi-formal occasions effortlessly.",
            "Crafted with premium fabric, they provide flexibility and durability, blending a polished silhouette with Levi’s timeless style for any wardrobe.",
            "The slim design and fade-resistant denim make these jeans a versatile choice, perfect for work, weekends, or nights out."
        ],
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
        "descriptionLong": [
            "Designed for performance, these Adidas running shoes offer excellent cushioning and support, perfect for daily runs or intense workouts with style.",
            "Featuring a breathable mesh upper and Boost midsole, they provide lightweight comfort and energy return, enhancing every stride effortlessly.",
            "The durable rubber outsole ensures superior traction, making these shoes ideal for runners seeking both function and fashion daily."
        ],
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
        "descriptionLong": [
            "This Rolex watch combines timeless design with precision engineering, featuring a stainless steel case and sapphire crystal for lasting elegance.",
            "Built for sophistication, it offers chronograph functions and water resistance, making it a luxurious choice for formal or daily wear.",
            "The polished finish and accurate movement ensure this heirloom piece stands out, perfect for those who value style and quality."
        ],
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
        "descriptionLong": [
            "This Fabindia silk saree features intricate handwoven patterns, offering a luxurious feel and perfect elegance for festive occasions or cultural events.",
            "Crafted from pure silk, it drapes beautifully with vibrant colors, showcasing traditional craftsmanship that enhances any special moment effortlessly.",
            "The lightweight fabric and rich detailing make this saree a timeless choice, ideal for celebrations or cherished gatherings anywhere."
        ],
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
        "descriptionLong": [
            "This Allen Solly shirt offers a relaxed fit with a modern design, perfect for everyday wear or casual outings with effortless style.",
            "Made from a breathable cotton blend, it ensures all-day comfort and versatility, ideal for laid-back days or informal settings.",
            "The trendy cut and vibrant colors make this shirt a wardrobe essential, blending fashion with practicality for any occasion."
        ],
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
        "descriptionLong": [
            "This Gucci handbag is crafted from premium leather with gold-tone hardware, offering a chic design perfect for a sophisticated look daily.",
            "Featuring multiple compartments and a detachable strap, it blends luxury with function, ideal for work or evening outings effortlessly.",
            "The supple leather and sturdy build ensure lasting elegance, making this handbag a timeless addition to any stylish wardrobe."
        ],
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
        "descriptionLong": [
            "These Nike sneakers are designed for active kids, featuring a lightweight build and cushioned sole, perfect for all-day play or school.",
            "With a breathable mesh upper and durable outsole, they offer comfort and support, ideal for outdoor adventures or daily wear.",
            "The vibrant colors and sturdy design ensure these sneakers withstand rough play, keeping kids stylish and comfortable always."
        ],
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
        "descriptionLong": [
            "This Chanel perfume offers a luxurious blend of floral and woody notes, perfect for any occasion with a timeless, elegant scent.",
            "Featuring jasmine and rose top notes, it delivers a sophisticated aroma that lingers beautifully, ideal for day or night wear.",
            "The sleek bottle houses a long-lasting formula, making this fragrance a must-have for those seeking refined luxury daily."
        ],
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
        "descriptionLong": [
            "These Ray-Ban sunglasses feature polarized lenses and a sleek design, offering style and protection, perfect for outdoor adventures or daily use.",
            "With full UV protection and glare reduction, they ensure clear vision, making them ideal for driving or sunny days anywhere.",
            "The lightweight frame and durable build provide all-day comfort, blending timeless fashion with functionality for any occasion."
        ],
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
        "descriptionLong": [
            "This Pandora bracelet allows you to add personal charms, crafted from sterling silver for a timeless, elegant look suitable for any occasion.",
            "Its adjustable design and polished finish offer comfort and style, making it perfect for daily wear or gifting someone special.",
            "Built to last, this customizable piece blends durability with beauty, letting you create a unique story with every charm added."
        ],
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
        "descriptionLong": [
            "This Titan watch features a minimalist design with a genuine leather strap, ideal for formal or casual wear with timeless appeal.",
            "Powered by quartz movement, it offers precise timekeeping and durability, perfect for elevating your style in any setting effortlessly.",
            "The soft leather and sleek dial ensure comfort and sophistication, making this watch a versatile accessory for daily use."
        ],
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
        "descriptionLong": [
            "This Zara blazer offers a sharp, tailored fit, perfect for professional settings or stylish evenings out with a modern, confident look.",
            "Crafted from a wool-blend fabric, it ensures comfort and structure, ideal for all-day wear without wrinkling or losing shape.",
            "The versatile design and sleek lines make this blazer a wardrobe must-have, elevating any outfit effortlessly anywhere."
        ],
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
        "descriptionLong": [
            "These Tom Ford sunglasses feature a bold frame and premium lenses, offering both style and protection for a striking look daily.",
            "With polarized lenses and UV coverage, they ensure clarity and safety, perfect for outdoor activities or bold fashion statements.",
            "The sturdy yet lightweight design delivers luxury and comfort, making these sunglasses a standout accessory for any occasion."
        ],
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
        "descriptionLong": [
            "This Michael Kors tote bag is made from premium leather, offering ample space and a chic design for daily use or travel.",
            "Featuring internal pockets and a zippered top, it blends style with practicality, perfect for work or weekend adventures effortlessly.",
            "The durable leather and elegant look ensure this tote remains a timeless accessory, keeping you organized in sophisticated style."
        ],
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
        "descriptionLong": [
            "This Fabindia kurta is crafted from soft cotton, featuring traditional embroidery, perfect for boys during special occasions or festive celebrations.",
            "Lightweight and breathable, it offers all-day comfort with vibrant colors, making it ideal for cultural events or family gatherings.",
            "The intricate detailing and durable fabric ensure this kurta stands out, blending style and tradition for young wearers."
        ],
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
        "descriptionLong": [
            "These Nike shoes offer advanced cushioning and a lightweight design, ideal for serious runners seeking performance and comfort during every workout.",
            "Featuring a breathable mesh upper and durable sole, they provide support and traction, perfect for long runs or varied terrains.",
            "The sleek look and energy-return technology enhance your stride, making these shoes a top choice for active lifestyles."
        ],
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
        "descriptionLong": [
            "These Pandora earrings feature sparkling diamonds set in sterling silver, offering a timeless elegance perfect for any occasion or outfit.",
            "With brilliant-cut stones and a hypoallergenic finish, they ensure comfort and shine, ideal for daily wear or gifting someone special.",
            "The lightweight design and durable craftsmanship make these studs a luxurious addition, enhancing your style effortlessly every day."
        ],
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
        "descriptionLong": [
            "This Michael Kors watch features a stainless steel band and minimalist dial, ideal for business or formal settings with sleek sophistication.",
            "Powered by quartz movement, it offers precise timekeeping and durability, perfect for professionals seeking style and reliability daily.",
            "The polished finish and comfortable fit make this watch a refined choice, elevating your look for any occasion effortlessly."
        ],
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
        "descriptionLong": [
            "This Zara top is made from soft cotton, featuring a relaxed fit and trendy design, perfect for everyday wear or casual outings.",
            "The breathable fabric and modern cut offer all-day comfort, making it an ideal choice for laid-back days or errands.",
            "With vibrant colors and a versatile style, this top is a wardrobe staple, blending fashion with ease effortlessly."
        ],
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
        "descriptionLong": [
            "This Gucci belt is crafted from genuine leather with a polished buckle, perfect for both formal and casual looks with timeless style.",
            "The premium leather offers durability and a rich patina, making it an adjustable, luxurious accessory for any wardrobe effortlessly.",
            "Designed with sturdy construction and sleek elegance, this belt elevates your outfit, blending function with high-end fashion daily."
        ],
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
