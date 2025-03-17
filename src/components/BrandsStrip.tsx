import { Box } from "@mui/material";
import React from "react";
import Marquee from "react-fast-marquee";
import {
    faBrands1,
    faBrands2,
    faBrands3,
    faBrands4,
    faBrands5,
    faBrands6,
} from "../assets";

const BrandsStrip: React.FC = () => {
    const style = {
        padding: "80px 0px",
    };
    return (
        <Box sx={{ backgroundColor: "#FAFAFA" }}>
            <Box maxWidth={"1050px"} mx={"auto"}>
                <Marquee style={style}>
                    <img
                        src={faBrands1}
                        alt="loading"
                        style={{ padding: "0 25px" }}
                    />
                    <img
                        src={faBrands2}
                        alt="loading"
                        style={{ padding: "0 25px" }}
                    />
                    <img
                        src={faBrands3}
                        alt="loading"
                        style={{ padding: "0 25px" }}
                    />
                    <img
                        src={faBrands4}
                        alt="loading"
                        style={{ padding: "0 25px" }}
                    />
                    <img
                        src={faBrands5}
                        alt="loading"
                        style={{ padding: "0 25px" }}
                    />
                    <img
                        src={faBrands6}
                        alt="loading"
                        style={{ padding: "0 25px" }}
                    />
                    <img
                        src={faBrands1}
                        alt="loading"
                        style={{ padding: "0 25px" }}
                    />
                    <img
                        src={faBrands2}
                        alt="loading"
                        style={{ padding: "0 25px" }}
                    />
                    <img
                        src={faBrands3}
                        alt="loading"
                        style={{ padding: "0 25px" }}
                    />
                    <img
                        src={faBrands4}
                        alt="loading"
                        style={{ padding: "0 25px" }}
                    />
                    <img
                        src={faBrands5}
                        alt="loading"
                        style={{ padding: "0 25px" }}
                    />
                    <img
                        src={faBrands6}
                        alt="loading"
                        style={{ padding: "0 25px" }}
                    />
                </Marquee>
            </Box>
        </Box>
    );
};

export default BrandsStrip;
