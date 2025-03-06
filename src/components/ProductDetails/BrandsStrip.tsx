import { Box } from "@mui/material";
import React from "react";
import Marquee from "react-fast-marquee";
import faBrands1 from "../../assets/productDatail/fa-brands-1.svg";
import faBrands2 from "../../assets/productDatail/fa-brands-2.svg";
import faBrands3 from "../../assets/productDatail/fa-brands-3.svg";
import faBrands4 from "../../assets/productDatail/fa-brands-4.svg";
import faBrands5 from "../../assets/productDatail/fa-brands-5.svg";
import faBrands6 from "../../assets/productDatail/fa-brands-6.svg";

const BrandsStrip: React.FC = () => {
    const style = {
        padding: "80px 0px",
    };
    return (
        // <Box sx={{ backgroundColor: "#FAFAFA" }}>
        //     <Box
        //         maxWidth="1050px"
        //         sx={{
        //             display: "grid",
        //             gridTemplateColumns: { xs: "1fr", sm: "repeat(3, 1fr)", md: "repeat(6, 1fr)" },
        //             gap: "30px",
        //             px: { xs: "10px", sm: "0px" },
        //             justifyItems: "center"
        //         }}
        //         mx="auto"
        //     >
        //         {[faBrands1, faBrands2, faBrands3, faBrands4, faBrands5, faBrands6].map((brand, index) => (
        //             <Box key={index} sx={{ width: "103px", height: "60px" }}>
        //                 <img src={brand} width="100%" height="100%" style={{ objectFit: "contain" }} />
        //             </Box>
        //         ))}
        //     </Box>

        // </Box>

        <Box sx={{ backgroundColor: "#FAFAFA" }}>
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
    );
};

export default BrandsStrip;
