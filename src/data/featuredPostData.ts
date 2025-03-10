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
