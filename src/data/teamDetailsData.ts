import { teamMember1, teamMember2, teamMember3 } from "../assets";

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
