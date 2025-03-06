import { Visibility, VisibilityOff } from '@mui/icons-material'
import { Box, Button, Card, IconButton, InputAdornment, Stack, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
// import bgImage from "../../../assets/login-Signup-background.jpg"; 
import bgImage1 from "../../assets/login-Signup-background2.jpg"; 

const Login: React.FC = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  // Handle input change
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });

    // Clear errors when user starts typing
    setErrors({ ...errors, [e.target.name]: "" });
  };

  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const validationErrors = { username: "", email: "", password: "" };

    if (!formData.email) {
      validationErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      validationErrors.email = "Enter a valid email";
    }
    if (!formData.password) {
      validationErrors.password = "Password is required";
    } else if (formData.password.length < 8) {
      validationErrors.password = "Password must be at least 8 characters";
    }

    // If there are errors, update state and stop submission
    if (validationErrors.username || validationErrors.email || validationErrors.password) {
      setErrors(validationErrors);
      return;
    }

    // ✅ Form submitted successfully
    console.log("Form Data Submitted:", formData);
    alert("Form submitted successfully!");
    navigate("/");
  };

  return (
    <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center", height: "100vh",px:{xs:"20px",sm:"0px"},backgroundImage: `url(${bgImage1})`,
    backgroundSize: "cover",
    backgroundPosition: "bottom",
    backgroundRepeat: "no-repeat",}}>
      <Card sx={{ width: "400px", mx: "auto", boxShadow: "rgba(17, 17, 26, 0.3) 0px 4px 20px, rgba(17, 17, 26, 0.1) 0px 10px 50px, rgba(17, 17, 26, 0.1) 0px 16px 56px;", borderRadius: "10px", p: "60px 20px 30px 20px"}}>
        <form onSubmit={handleSubmit}>
          <Stack gap={"30px"}>
            <Typography variant='h1' color='secondary' textAlign={"center"} >Login</Typography>
            <TextField
              label="Email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              error={!!errors.email}
              helperText={errors.email}
              InputLabelProps={{
                style: { fontSize: "15px" },
              }}
              InputProps={{
                style: { fontSize: "15px" },
              }}
              fullWidth
            />
            <TextField
              label="Password"
              name="password"
              type={!showPassword ? "text" : "password"}
              value={formData.password}
              onChange={handleChange}
              error={!!errors.password}
              helperText={errors.password}
              InputLabelProps={{
                style: { fontSize: "15px" },
              }}
              fullWidth
              InputProps={{
                style: { fontSize: "15px" },
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton onClick={() => setShowPassword(!showPassword)} edge="end">
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
            <Button
              type="submit"
              sx={{
                color: "#FFFFFF",
                backgroundColor: "#23A6F0",
                p: "15px 40px",
                whiteSpace: "nowrap",
                textTransform: "none",
                fontSize: "15px",
                ":hover": { backgroundColor: "#1A8CD8" }
              }}
            >
              Login
            </Button>
            <Stack justifyContent={"center"} alignItems={"center"} direction={"row"} 
            sx={{gap:{xs:"5px",sm:"10px"}}}>
              <Typography variant='h6' color='gray'>Don't have an account?</Typography>
              <Link to="/signup" style={{ color: "#23A6F0" }}>Sign up</Link>
            </Stack>
          </Stack>
        </form>
      </Card>
    </Box >
  )
}

export default Login
