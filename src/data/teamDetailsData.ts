import { teamMember1, teamMember2, teamMember3 } from "../assets";

interface TeamDetail {
    img: string;
    username: string;
    profession: string;
}

export const teamDetail: TeamDetail[] = [
    {
        img: teamMember1,
        username: "Ayushi Sharma",
        profession: "Frontend Developer",
    },
    {
        img: teamMember2,
        username: "Kruti Singh",
        profession: "Backend Developer",
    },
    {
        img: teamMember3,
        username: "Shivam Kumar",
        profession: "FullStack Developer",
    },
];
