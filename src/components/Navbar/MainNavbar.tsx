import {
    AppBar,
    Badge,
    Box,
    Drawer,
    IconButton,
    List,
    ListItem,
    ListItemText,
    styled,
    Toolbar,
    Typography,
} from "@mui/material";
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import SearchIcon from "@mui/icons-material/Search";
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
    const StyledToolebar = styled(Toolbar)(({ theme }) => ({
        display: "flex",
        padding: "12px 0px 8px 0px",
        gap: "40px",
        margin: "0px 30px",
        [theme.breakpoints.down("md")]: {
            gap: "0px",
            margin: "0px 15px",
        },
    }));

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
                <StyledToolebar>
                    <Link to="/">
                        <Typography
                            variant="h3"
                            color="secondary"
                            sx={{
                                fontSize: "1.5rem",
                                width: "187px",
                                padding: {
                                    xs: "13px 10px 13px 0",
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
                        {/* Desktop Navigation */}
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
                                <NavLink
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
                                </NavLink>
                                {isAuthenticated ? (
                                    <NavLink
                                        to="/profile"
                                        style={{
                                            textDecoration: "none",
                                            color: "#23A6F0",
                                        }}
                                    >
                                        Profile
                                    </NavLink>
                                ) : (
                                    <>
                                        <NavLink
                                            to="/login"
                                            style={{
                                                textDecoration: "none",
                                                color: "#23A6F0",
                                            }}
                                        >
                                            Login
                                        </NavLink>{" "}
                                        /
                                        <NavLink
                                            to="/signup"
                                            style={{
                                                textDecoration: "none",
                                                color: "#23A6F0",
                                            }}
                                        >
                                            Register
                                        </NavLink>
                                    </>
                                )}
                            </Box>
                            <IconButton>
                                <SearchIcon
                                    htmlColor="#23A6F0"
                                />
                            </IconButton>
                            <NavLink
                                to="/shopping-cart"
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
                            </NavLink>
                            <NavLink
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
                            </NavLink>
                        </Box>
                    </Box>

                    {/* Hamburger Icon for Mobile */}
                    <Box
                        sx={{
                            flexGrow: 1,
                            display: { xs: "flex", md: "none" },
                            justifyContent: "flex-end",
                        }}
                    >
                        <IconButton size="large" onClick={handleDrawerOpen}>
                            <MenuIcon htmlColor="#000000" />
                        </IconButton>
                    </Box>
                </StyledToolebar>

                {/* Drawer for Mobile Menu */}
                <Drawer
                    anchor="right"
                    open={drawerOpen}
                    onClose={handleDrawerClose}
                >
                    <Box sx={{ width: 250, p: 2 }}>
                        {/* Close Button */}
                        <IconButton sx={{ mb: 2 }} onClick={handleDrawerClose}>
                            <CloseIcon htmlColor="#000000" />
                        </IconButton>

                        {/* Drawer Menu List */}
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
