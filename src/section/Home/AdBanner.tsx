// import { Box, Button, Stack, Typography } from "@mui/material";
// import React, { useEffect } from "react";
// import { Link } from "react-router-dom";
// import { productsData } from "../../data/allProductsData";

// import { useDispatch, useSelector } from "react-redux";
// import { AppDispatch, RootState } from "../../store/store";
// import { getAllProducts } from "../../store/Slices/productSlice";

// const AdBanner: React.FC = () => {
//     const dispatch = useDispatch<AppDispatch>();

//     useEffect(() => {
//         dispatch(getAllProducts());
//     }, [dispatch]);

//     const {loading,products, error,message} = useSelector(
//         (state: RootState) => state.product
//     );
//     console.log(products);
//     const product = products.find((item) => item.id === 17);

//     return (
//         <Box
//             sx={{
//                 maxWidth: "1300px",
//                 mx: "auto",
//                 pt: { xs: "120px", sm: "60px" },
//             }}
//         >
//             <Stack
//                 width={"100%"}
//                 height={"100%"}
//                 sx={{
//                     gap: { sx: "30px", sm: "30px", md: "80px" },
//                     display: "flex",
//                     flexDirection: {
//                         xs: "column-reverse",
//                         sm: "row",
//                         md: "row",
//                     },
//                     textAlign: { xs: "center", sm: "start" },
//                 }}
//             >
//                 <Box
//                     sx={{
//                         p: "0px 0px ",
//                         width: { xs: "100%", sm: "50%" },
//                         height: "auto",
//                         overflow: "hidden",
//                         pt: { xs: "20px", sm: "0px" },
//                     }}
//                 >
//                     <img
//                         src={product?.images[0]}
//                         alt=""
//                         style={{
//                             objectFit: "cover",
//                             width: "100%",
//                             height: "100%",
//                             display: "block",
//                         }}
//                     />
//                 </Box>
//                 <Box
//                     display={"flex"}
//                     alignItems={"center"}
//                     sx={{
//                         width: { xs: "100%", sm: "50%" },
//                         p: { xs: "0 50px", sm: "0" },
//                     }}
//                     height={"auto"}
//                 >
//                     <Stack
//                         spacing={3.75}
//                         sx={{ width: { xs: "100%", sm: "90%", md: "70%" } }}
//                     >
//                         <Typography
//                             variant="h5"
//                             fontWeight={"700"}
//                             fontSize={"16px"}
//                             color="#BDBDBD"
//                         >
//                             SUMMER 2025
//                         </Typography>
//                         <Typography
//                             variant="h2"
//                             fontWeight={"700"}
//                             fontSize={"40px"}
//                             lineHeight="50px"
//                             color="secondary"
//                         >
//                             {product?.title}
//                         </Typography>
//                         <Typography
//                             variant="h4"
//                             fontWeight={"400"}
//                             fontSize={"20px"}
//                             lineHeight="30px"
//                             color="gray"
//                         >
//                             {product?.descriptionSmall}
//                         </Typography>
//                         <Box
//                             sx={{
//                                 display: "flex",
//                                 flexDirection: { xs: "column", sm: "row" },
//                                 gap: { xs: "25px", sm: "10px" },
//                                 // justifyContent: "center",
//                                 // alignItems: "center",
//                             }}
//                         >
//                             <Link to={`/product/${product?.id}/detail`}>
//                                 <Button
//                                     sx={{
//                                         color: "#FFFFFF",
//                                         backgroundColor: "#2DC071",
//                                         p: "15px 40px",
//                                         whiteSpace: "nowrap",
//                                     }}
//                                 >
//                                     BUY NOW
//                                 </Button>
//                             </Link>
//                             <Link to={`/product/${product?.id}/detail`}>
//                                 <Button
//                                     variant="outlined"
//                                     sx={{
//                                         color: "#2DC071",
//                                         borderRadius: "5px",
//                                         border: "1px solid #2DC071",
//                                         p: "15px 40px",
//                                         whiteSpace: "nowrap",
//                                     }}
//                                 >
//                                     Read More
//                                 </Button>
//                             </Link>
//                         </Box>
//                     </Stack>
//                 </Box>
//             </Stack>
//         </Box>
//     );
// };

// export default AdBanner;

import { Box, Button, Skeleton, Stack, Typography } from "@mui/material";
import React, { useEffect } from "react";
import { Link } from "react-router-dom";

import { useSelector } from "react-redux";
import { RootState } from "../../store/store";

const AdBanner: React.FC = () => {
    

    const { loading, products} = useSelector(
        (state: RootState) => state.product
    );

    const product = products?.slice(17, 18)[0];
    console.log(product);

    return (
        <Box
            sx={{
                maxWidth: "1300px",
                mx: "auto",
                pt: { xs: "120px", sm: "60px" },
            }}
        >
            <Stack
                width={"100%"}
                height={"100%"}
                sx={{
                    gap: { sx: "30px", sm: "30px", md: "80px" },
                    display: "flex",
                    flexDirection: {
                        xs: "column-reverse",
                        sm: "row",
                        md: "row",
                    },
                    textAlign: { xs: "center", sm: "start" },
                }}
            >
                {/* IMAGE SECTION */}
                <Box
                    sx={{
                        p: "0px 0px ",
                        width: { xs: "100%", sm: "50%" },
                        height: "auto",
                        overflow: "hidden",
                        pt: { xs: "20px", sm: "0px" },
                    }}
                >
                    {loading ? (
                        <Skeleton
                            variant="rectangular"
                            width="100%"
                            height={300}
                            animation="wave"
                        />
                    ) : (
                        <img
                            src={product?.images[0]}
                            alt={product?.title}
                            style={{
                                objectFit: "cover",
                                width: "100%",
                                height: "100%",
                                display: "block",
                            }}
                        />
                    )}
                </Box>

                {/* CONTENT SECTION */}
                <Box
                    display={"flex"}
                    alignItems={"center"}
                    sx={{
                        width: { xs: "100%", sm: "50%" },
                        p: { xs: "0 50px", sm: "0" },
                    }}
                    height={"auto"}
                >
                    <Stack
                        spacing={3.75}
                        sx={{ width: { xs: "100%", sm: "90%", md: "70%" } }}
                    >
                        {loading ? (
                            <>
                                <Skeleton width="40%" height={30} />
                                <Skeleton width="100%" height={50} />
                                <Skeleton width="80%" height={30} />
                                <Skeleton width="60%" height={30} />
                            </>
                        ) : (
                            <>
                                <Typography
                                    variant="h5"
                                    fontWeight={"700"}
                                    fontSize={"16px"}
                                    color="#BDBDBD"
                                >
                                    SUMMER 2025
                                </Typography>
                                <Typography
                                    variant="h2"
                                    fontWeight={"700"}
                                    fontSize={"40px"}
                                    lineHeight="50px"
                                    color="secondary"
                                >
                                    {product?.title}
                                </Typography>
                                <Typography
                                    variant="h4"
                                    fontWeight={"400"}
                                    fontSize={"20px"}
                                    lineHeight="30px"
                                    color="gray"
                                >
                                    {product?.descriptionSmall}
                                </Typography>

                                {/* BUTTONS */}
                                <Box
                                    sx={{
                                        display: "flex",
                                        flexDirection: {
                                            xs: "column",
                                            sm: "row",
                                        },
                                        gap: { xs: "25px", sm: "10px" },
                                    }}
                                >
                                    <Link to={`/product/${product?.id}/detail`}>
                                        <Button
                                            sx={{
                                                color: "#FFFFFF",
                                                backgroundColor: "#2DC071",
                                                p: "15px 40px",
                                                whiteSpace: "nowrap",
                                            }}
                                        >
                                            BUY NOW
                                        </Button>
                                    </Link>
                                    <Link to={`/product/${product?.id}/detail`}>
                                        <Button
                                            variant="outlined"
                                            sx={{
                                                color: "#2DC071",
                                                borderRadius: "5px",
                                                border: "1px solid #2DC071",
                                                p: "15px 40px",
                                                whiteSpace: "nowrap",
                                            }}
                                        >
                                            Read More
                                        </Button>
                                    </Link>
                                </Box>
                            </>
                        )}
                    </Stack>
                </Box>
            </Stack>
        </Box>
    );
};

export default AdBanner;

