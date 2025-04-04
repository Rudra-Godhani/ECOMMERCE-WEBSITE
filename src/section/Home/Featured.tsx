import {
    Box,
    Card,
    Container,
    Skeleton,
    Stack,
    Typography,
} from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";

const Featured: React.FC = () => {
    const {
        loading,
        products,
    } = useSelector((state: RootState) => state.product);

    const randomProducts = products
        ? [...products].sort(() => Math.random() - 0.5).slice(0, 8)
        : [];

    return (
        <Box
            sx={{
                p: "80px 0",
                pl: { xs: "35px", md: "0" },
                pr: { xs: "35px", md: "0" },
            }}
        >
            <Container maxWidth="lg" sx={{ margin: "auto", p: "0" }}>
                <Stack
                    sx={{
                        textAlign: "center",
                        p: { xs: "0px 20px 80px 20px", sm: "0px 0px 80px 0px" },
                    }}
                    spacing={1.25}
                >
                    <Typography
                        variant="h4"
                        color="gray"
                        fontWeight="400"
                        fontSize="20px"
                    >
                        Featured Products
                    </Typography>
                    <Typography
                        variant="h3"
                        color="secondary"
                        fontWeight="700"
                        fontSize="24px"
                    >
                        BESTSELLER PRODUCTS
                    </Typography>
                    <Typography variant="h6" color="gray" fontWeight="400">
                        Top Quality Products recommended for You
                    </Typography>
                </Stack>

                <Box
                    sx={{
                        display: "grid",
                        gridTemplateColumns:
                            "repeat(auto-fit, minmax(250px, 1fr))",
                        p: "0px 0px",
                        justifyContent: "center",
                        rowGap: "24px",
                        columnGap: "30px",
                    }}
                >
                    {loading
                        ? Array.from(new Array(8)).map((_, index) => (
                              <Card
                                  key={index}
                                  sx={{
                                      width: "100%",
                                      margin: "0 auto",
                                      transition: "all 0.3s ease",
                                  }}
                              >
                                  <Skeleton
                                      variant="rectangular"
                                      width="100%"
                                      height={300}
                                      animation="wave"
                                  />
                                  <Stack
                                      sx={{
                                          textAlign: "center",
                                          pt: "25px",
                                          pb: "35px",
                                          px: "10px",
                                      }}
                                      spacing={1.25}
                                  >
                                      <Skeleton
                                          variant="text"
                                          width="60%"
                                          height={30}
                                      />
                                      <Stack direction="row" spacing={0.75}>
                                          <Skeleton
                                              variant="text"
                                              width="40px"
                                              height={30}
                                          />
                                          <Skeleton
                                              variant="text"
                                              width="40px"
                                              height={30}
                                          />
                                      </Stack>
                                      <Stack direction="row" spacing={0.75}>
                                          {Array.from(new Array(3)).map(
                                              (_, i) => (
                                                  <Skeleton
                                                      key={i}
                                                      variant="circular"
                                                      width={25}
                                                      height={25}
                                                  />
                                              )
                                          )}
                                      </Stack>
                                  </Stack>
                              </Card>
                          ))
                        : randomProducts.map((product) => (
                              <Link
                                  key={product.id}
                                  to={`/product/${product.id}/detail`}
                              >
                                  <Card
                                      sx={{
                                          width: "100%",
                                          margin: "0 auto",
                                          transition: "all 0.3s ease",
                                          "&:hover": {
                                              transform: "scale(1.02)",
                                              boxShadow:
                                                  "0px 8px 20px rgba(0,0,0,0.2)",
                                          },
                                      }}
                                  >
                                      <Box
                                          sx={{
                                              p: "0px 0px",
                                              width: "100%",
                                              height: "auto",
                                              overflow: "hidden",
                                          }}
                                      >
                                          <img
                                              src={product.images[0]}
                                              alt={product.title}
                                              style={{
                                                  objectFit: "cover",
                                                  width: "100%",
                                                  height: "300px",
                                              }}
                                          />
                                      </Box>
                                      <Stack
                                          sx={{
                                              textAlign: "center",
                                              pt: "25px",
                                              pb: "35px",
                                              px: "10px",
                                          }}
                                          spacing={1.25}
                                      >
                                          <Typography
                                              variant="h5"
                                              color="secondary"
                                              fontWeight="700"
                                              fontSize="16px"
                                              textOverflow="ellipsis"
                                              whiteSpace="nowrap"
                                              overflow="hidden"
                                          >
                                              {product.title}
                                          </Typography>
                                          <Stack direction="row" spacing={0.75} justifyContent={"center"}>
                                              <Typography
                                                  variant="h5"
                                                  color="#BDBDBD"
                                                  fontWeight="700"
                                                  fontSize="16px"
                                              >
                                                  ${product.price}
                                              </Typography>
                                              <Typography
                                                  variant="h5"
                                                  color="darkGreen"
                                                  fontWeight="700"
                                                  fontSize="16px"
                                              >
                                                  ${product.retailPrice}
                                              </Typography>
                                          </Stack>
                                          <Stack direction="row" spacing={0.75} justifyContent={"center"}>
                                              {product.colors.map(
                                                  (color, index) => (
                                                      <Box
                                                          key={index}
                                                          width="25px"
                                                          height="25px"
                                                          sx={{
                                                              backgroundColor:
                                                                  color,
                                                              borderRadius:
                                                                  "50%",
                                                              border: "2px solid rgb(184, 180, 180)",
                                                          }}
                                                      />
                                                  )
                                              )}
                                          </Stack>
                                      </Stack>
                                  </Card>
                              </Link>
                          ))}
                </Box>
            </Container>
        </Box>
    );
};

export default Featured;

