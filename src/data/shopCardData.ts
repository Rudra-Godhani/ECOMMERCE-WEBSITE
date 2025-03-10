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
        image: mensClothing,
        heading: "MEN'S CLOTHING",
    },
    {
        id: 2,
        image: womensClothing,
        heading: "WOMEN'S CLOTHING",
    },
    {
        id: 3,
        image: footwear,
        heading: "Footwear",
    },
    {
        id: 4,
        image: watches,
        heading: "Watches",
    },
    {
        id: 5,
        image: beauty,
        heading: "Beauty",
    },
    {
        id: 6,
        image: kidsCLothing,
        heading: "KIDS' CLOTHING",
    },
    {
        id: 7,
        image: handbags,
        heading: "Handbags",
    },
    {
        id: 8,
        image: jewellery,
        heading: "Jewellery",
    },
    {
        id: 9,
        image: accessories,
        heading: "Accessories",
    },
];
