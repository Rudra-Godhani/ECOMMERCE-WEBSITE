import {
    AppBar,
    Badge,
    Box,
    Drawer,
    IconButton,
    List,
    ListItem,
    ListItemText,
    Toolbar,
    Typography,
} from "@mui/material";
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";

const pages = [
    { name: "Home", link: "/" },
    { name: "Shop", link: "/product/listing" },
    { name: "About", link: "/about-us" },
    { name: "Contact", link: "/contact-us" },
];

const MainNavbar: React.FC = () => {

    const [drawerOpen, setDrawerOpen] = useState<boolean>(false);

    const handleDrawerOpen = () => {
        setDrawerOpen(true);
    };

    const handleDrawerClose = () => {
        setDrawerOpen(false);
    };

    const { wishListItems } = useSelector((state: RootState) => state.wishList);
    const { isAuthenticated } = useSelector((state: RootState) => state.user);

    const MobilePages = [
        { name: "Home", link: "/" },
        { name: "Shop", link: "/product/listing" },
        { name: "About", link: "/about-us" },
        { name: "Contact", link: "/contact-us" },
        ...(isAuthenticated
            ? [{ name: "Profile", link: "/profile" }]
            : [
                  { name: "Login", link: "/login" },
                  { name: "Signup", link: "/signup" },
              ]),
    ];

    const { cartItems } = useSelector((state: RootState) => state.cart);

    return (
        <>
            <AppBar
                position="sticky"
                sx={{ top: 0, color: "#ffffff", backgroundColor: "#FFFFFF" }}
            >
                <Toolbar
                    sx={{
                        display: "flex",
                        padding: "12px 0px 8px 0px",
                        gap: { xs: "5px", md: "40px" },
                        margin: { xs: "0px 15px", md: "0px 30px" },
                    }}
                >
                    <Link to="/">
                        <Typography
                            variant="h3"
                            color="secondary"
                            sx={{
                                fontSize: "1.5rem",
                                width: "100%",
                                padding: {
                                    xs: "13px 0px 13px 0",
                                    sm: "13px 10px 13px 0",
                                    md: "13px 28px 13px 0",
                                },
                                cursor: "pointer",
                                fontWeight: "700",
                            }}
                        >
                            PrimePicks
                        </Typography>
                    </Link>

                    <Box
                        sx={{
                            display: "flex",
                            justifyContent: {
                                xs: "flex-end",
                                md: "space-between",
                            },
                            alignItems: "center",
                            width: "100%",
                        }}
                    >
                        <Box
                            sx={{
                                gap: "15px",
                                display: { xs: "none", md: "flex" },
                            }}
                        >
                            {pages.map((page, index) => (
                                <NavLink
                                    to={page.link}
                                    key={index}
                                    style={({ isActive }) => ({
                                        color: isActive ? "#252B42" : "#737373",
                                        fontWeight: isActive ? "700" : "normal",
                                        textDecoration: "none",
                                        cursor: "pointer",
                                        paddingBottom: "4px",
                                        borderBottom: isActive
                                            ? "2px solid #252B42"
                                            : "none",
                                    })}
                                >
                                    {page.name}
                                </NavLink>
                            ))}
                        </Box>

                        {/* Icons */}
                        <Box
                            sx={{
                                display: "flex",
                                alignItems: "center",
                                color: "#23A6F0",
                            }}
                        >
                            <Box
                                sx={{
                                    display: { xs: "none", md: "flex" },
                                    margin: "0 15px",
                                    alignItems: "center",
                                }}
                            >
                                <Link
                                    to={`${
                                        isAuthenticated ? "/profile" : "/login"
                                    } `}
                                >
                                    <PermIdentityIcon
                                        fontSize="small"
                                        sx={{
                                            alignItems: "center",
                                            mt: "6px",
                                        }}
                                        htmlColor="#23A6F0"
                                    />
                                </Link>
                                {isAuthenticated ? (
                                    <Link
                                        to="/profile"
                                        style={{
                                            textDecoration: "none",
                                            color: "#23A6F0",
                                        }}
                                    >
                                        Profile
                                    </Link>
                                ) : (
                                    <>
                                        <Link
                                            to="/login"
                                            style={{
                                                textDecoration: "none",
                                                color: "#23A6F0",
                                            }}
                                        >
                                            Login
                                        </Link>{" "}
                                        /
                                        <Link
                                            to="/signup"
                                            style={{
                                                textDecoration: "none",
                                                color: "#23A6F0",
                                            }}
                                        >
                                            Register
                                        </Link>
                                    </>
                                )}
                            </Box>
                            <Link
                                to="/shopping-cart/checkout"
                                style={{
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    color: "#23A6F0",
                                }}
                            >
                                <Badge
                                    badgeContent={cartItems?.length}
                                    color="success"
                                    sx={{ mr: "10px" }}
                                >
                                    <ShoppingCartIcon
                                        sx={{
                                            cursor: "pointer",
                                            m: "0px 5px 0px 15px",
                                        }}
                                    />
                                </Badge>
                            </Link>
                            <Link
                                to="/wishlist"
                                style={{
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    color: "#23A6F0",
                                }}
                            >
                                <Badge
                                    badgeContent={wishListItems?.length}
                                    color="success"
                                    sx={{ mr: "10px" }}
                                >
                                    <FavoriteBorderIcon
                                        sx={{
                                            cursor: "pointer",
                                            m: "0px 5px 0px 15px",
                                        }}
                                    />
                                </Badge>
                            </Link>
                        </Box>
                    </Box>

                    <Box
                        sx={{
                            flexGrow: 1,
                            display: { xs: "flex", md: "none" },
                            justifyContent: "flex-end",
                        }}
                    >
                        <IconButton size="medium" onClick={handleDrawerOpen}>
                            <MenuIcon htmlColor="#000000" />
                        </IconButton>
                    </Box>
                </Toolbar>

                <Drawer
                    anchor="right"
                    open={drawerOpen}
                    onClose={handleDrawerClose}
                >
                    <Box sx={{ width: 250, p: 2 }}>
                        <IconButton sx={{ mb: 2 }} onClick={handleDrawerClose}>
                            <CloseIcon htmlColor="#000000" />
                        </IconButton>

                        <List>
                            {MobilePages.map((page, index) => (
                                <ListItem
                                    key={index}
                                    onClick={handleDrawerClose}
                                    sx={{
                                        display: "flex",
                                        justifyContent: "center",
                                        alignItems: "center",
                                    }}
                                >
                                    <NavLink
                                        to={page.link}
                                        style={({ isActive }) => ({
                                            display: "block",
                                            color: isActive
                                                ? "#252B42"
                                                : "#737373",
                                            fontWeight: isActive
                                                ? "700"
                                                : "normal",
                                            textDecoration: "none",
                                            cursor: "pointer",
                                            paddingBottom: "4px",
                                            borderBottom: isActive
                                                ? "2px solid #252B42"
                                                : "none",
                                            textAlign: "center",
                                        })}
                                    >
                                        <ListItemText
                                            primary={page.name}
                                            primaryTypographyProps={{
                                                sx: {
                                                    fontSize: "20px",
                                                },
                                            }}
                                        />
                                    </NavLink>
                                </ListItem>
                            ))}
                        </List>
                    </Box>
                </Drawer>
            </AppBar>
        </>
    );
};

export default MainNavbar;
