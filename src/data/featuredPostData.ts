import { featuredPost1, featuredPost2, featuredPost3 } from "../assets";

interface FeaturedPostData {
    img: string;
    title: string;
    description: string;
    date: string;
    comments: string;
}

export const featuredPostData: FeaturedPostData[] = [
    {
        img: featuredPost1,
        title: "Colorful Streets: A Vibrant Journey",
        description:
            "Explore lively streets filled with color and creativity — a true feast for the eyes!",
        date: "22 April 2023",
        comments: "20",
    },
    {
        img: featuredPost2,
        title: "The Charm of Vintage Vibes and Bold Colors",
        description:
            "From retro cars to vibrant homes, discover design like never before.",
        date: "15 march 2024",
        comments: "15",
    },
    {
        img: featuredPost3,
        title: "A Splash of Creativity: The Umbrella Art Experience",
        description:
            "Brighten your day with these colorful visuals that blend art, design, and culture.",
        date: "25 june 2024",
        comments: "24",
    },
];
