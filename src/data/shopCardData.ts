import {
    mensClothing,
    womensClothing,
    kidsCLothing,
    footwear,
    watches,
    beauty,
    handbags,
    jewellery,
    accessories,
} from "../assets";

interface ShopCardItems {
    id: number;
    image: string;
    heading: string;
}

export const shopCardItems: ShopCardItems[] = [
    {
        id: 1,
        image: beauty,
        heading: "Beauty",
    },
    {
        id: 2,
        image: jewellery,
        heading: "Jewellery",
    },
    {
        id: 3,
        image: mensClothing,
        heading: "Men’s Clothing",
    },
    {
        id: 4,
        image: watches,
        heading: "Watches",
    },
    {
        id: 5,
        image: womensClothing,
        heading: "Women’s Clothing",
    },
    {
        id: 6,
        image: handbags,
        heading: "Handbags",
    },
    {
        id: 7,
        image: footwear,
        heading: "Footwear",
    },
    {
        id: 8,
        image: kidsCLothing,
        heading: "Kid’s clothing",
    },
    {
        id: 9,
        image: accessories,
        heading: "Accessories",
    },
];
