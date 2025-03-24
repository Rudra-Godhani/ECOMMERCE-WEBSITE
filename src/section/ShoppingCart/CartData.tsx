import { ArrowForwardIos } from '@mui/icons-material';
import { Box, Paper, Stack, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom';
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import { decreaseQuantity, increaseQuantity, removeProductFromCart } from '../../store/Slices/CartSlice';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';

const CartData: React.FC = () => {
    const cartData = useSelector((state: RootState) => state.cart);
    const dispatch = useDispatch();

    const incQuantity = (id: string) => {
        dispatch(increaseQuantity(id));
    };

    const decQuantity = (id: string) => {
        dispatch(decreaseQuantity(id));
    };
  return (
      <Box>
          <Box>
              <Stack
                  maxWidth={"1050px"}
                  mx={"auto"}
                  py={"24px"}
                  direction={"row"}
                  gap={"15px"}
                  sx={{
                      justifyContent: { xs: "center", sm: "start" },
                      alignItems: { xs: "center", sm: "start" },
                      p: { xs: "50px 20px", lg: "50px 0px" },
                  }}
              >
                  <Link to="/">
                      <Typography
                          variant="h6"
                          color="secondary"
                          fontWeight={"700"}
                      >
                          Home
                      </Typography>
                  </Link>
                  <ArrowForwardIos fontSize="small" htmlColor="#BDBDBD" />
                  <Typography variant="h6" color="#BDBDBD" fontWeight={"700"}>
                      Cart
                  </Typography>
              </Stack>
          </Box>
          <Box textAlign={"center"} pb="40px">
              <Typography
                  variant="h1"
                  color="secondary"
                  sx={{
                      display: "inline-block",
                      borderBottom: "3px solid #E9E9E9",
                      paddingBottom: "20px",
                  }}
              >
                  Your Cart
              </Typography>
          </Box>
          <Box
              maxWidth={"1050px"}
              mx="auto"
              pb="40px"
              sx={{ p: { xs: "0 20px", lg: "0 0" } }}
          >
              <TableContainer
                  component={Paper}
                  elevation={0}
                  sx={{ overflowX: "auto", width: "100%" }}
              >
                  <Table sx={{ minWidth: 650 }} aria-label="simple table">
                      <TableHead sx={{ backgroundColor: "#FAFAFA" }}>
                          <TableRow>
                              <TableCell
                                  sx={{
                                      fontSize: "14px",
                                      color: "#737373",
                                      border: "none",
                                  }}
                              >
                                  Product
                              </TableCell>
                              <TableCell
                                  align="center"
                                  sx={{
                                      fontSize: "14px",
                                      color: "#737373",
                                      border: "none",
                                  }}
                              >
                                  Color
                              </TableCell>
                              <TableCell
                                  align="center"
                                  sx={{
                                      fontSize: "14px",
                                      color: "#737373",
                                      border: "none",
                                  }}
                              >
                                  Quantity
                              </TableCell>
                              <TableCell
                                  align="center"
                                  sx={{
                                      fontSize: "14px",
                                      color: "#737373",
                                      border: "none",
                                  }}
                              >
                                  Price
                              </TableCell>
                              <TableCell
                                  align="center"
                                  sx={{
                                      fontSize: "14px",
                                      color: "#737373",
                                      border: "none",
                                  }}
                              >
                                  Total Price
                              </TableCell>
                              <TableCell
                                  align="center"
                                  sx={{ border: "none" }}
                              ></TableCell>
                          </TableRow>
                      </TableHead>
                      <TableBody>
                          {cartData.length === 0 && (
                              <TableRow>
                                  <TableCell colSpan={6} align="center">
                                      <Typography
                                          variant="h2"
                                          color="textSecondary"
                                          mt={5}
                                          mb={5}
                                      >
                                          No items in cart 😔
                                      </Typography>
                                  </TableCell>
                              </TableRow>
                          )}
                          {cartData.length > 0 &&
                              cartData.map((item) => (
                                  <TableRow
                                      key={item.id}
                                      sx={{
                                          "&:last-child td, &:last-child th": {
                                              border: 0,
                                          },
                                      }}
                                  >
                                      <TableCell
                                          component="th"
                                          scope="row"
                                          align="left"
                                          sx={{ pl: "0px" }}
                                      >
                                          <Stack
                                              direction={"row"}
                                              alignItems={"center"}
                                              gap={"20px"}
                                          >
                                              <Box
                                                  sx={{
                                                      p: "0px 0px ",
                                                      width: "150px",
                                                      height: "120px",
                                                      overflow: "hidden",
                                                      borderRadius: "10px",
                                                  }}
                                              >
                                                  <img
                                                      src={item.image}
                                                      alt=""
                                                      style={{
                                                          objectFit: "cover",
                                                          width: "100%",
                                                          height: "100%",
                                                          display: "block",
                                                      }}
                                                  />
                                              </Box>
                                              <Stack>
                                                  <Typography
                                                      variant="h5"
                                                      fontWeight={"700"}
                                                      color="secondary"
                                                  >
                                                      {item.title}
                                                  </Typography>
                                              </Stack>
                                          </Stack>
                                      </TableCell>
                                      <TableCell align="center">
                                          <Box
                                              display="flex"
                                               justifyContent="center"
                                          >
                                              <Box
                                                  width={"25px"}
                                                  height={"25px"}
                                                  sx={{
                                                      backgroundColor:
                                                          item.color,
                                                      borderRadius: "50%",
                                                      border: "2px solid rgb(184, 180, 180)",
                                                  }}
                                              ></Box>
                                          </Box>
                                      </TableCell>
                                      <TableCell align="center">
                                          <Stack
                                              direction={"row"}
                                              gap="20px"
                                              justifyContent={"center"}
                                              alignItems={"center"}
                                          >
                                              <Box
                                                  sx={{ cursor: "pointer" }}
                                                  onClick={() =>
                                                      decQuantity(item.id)
                                                  }
                                              >
                                                  {item.quantity === 1 ? (
                                                      <DeleteOutlineIcon fontSize="small" />
                                                  ) : (
                                                      <RemoveIcon fontSize="small" />
                                                  )}
                                              </Box>
                                              <Typography
                                                  sx={{
                                                      fontSize: "16px",
                                                      color: "#252B42",
                                                      fontWeight: "700",
                                                  }}
                                              >
                                                  {item.quantity}
                                              </Typography>
                                              <Box
                                                  sx={{ cursor: "pointer" }}
                                                  onClick={() =>
                                                      incQuantity(item.id)
                                                  }
                                              >
                                                  <AddIcon fontSize="small" />
                                              </Box>
                                          </Stack>
                                      </TableCell>
                                      <TableCell
                                          align="center"
                                          sx={{
                                              fontSize: "16px",
                                              color: "#252B42",
                                              fontWeight: "700",
                                          }}
                                      >
                                          {item.price}
                                      </TableCell>
                                      <TableCell
                                          align="center"
                                          sx={{
                                              fontSize: "16px",
                                              color: "#252B42",
                                              fontWeight: "700",
                                          }}
                                      >
                                          {(item.price * item.quantity).toFixed(
                                              2
                                          )}
                                      </TableCell>
                                      <TableCell
                                          align="center"
                                          sx={{
                                              fontSize: "16px",
                                              color: "#252B42",
                                          }}
                                      >
                                          <Box
                                              sx={{ cursor: "pointer" }}
                                              onClick={() => {
                                                  console.log("hello");
                                                  dispatch(
                                                      removeProductFromCart(
                                                          item.id
                                                      )
                                                  );
                                              }}
                                          >
                                              X
                                          </Box>
                                      </TableCell>
                                  </TableRow>
                              ))}
                      </TableBody>
                  </Table>
              </TableContainer>
          </Box>
      </Box>
  );
}

export default CartData
