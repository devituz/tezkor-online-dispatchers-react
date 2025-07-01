import React, { useState } from "react";
import {
  Box,
  Button,
  TextField,
  Typography,
  InputAdornment,
  IconButton,
} from "@mui/material";
import PhoneIcon from "@mui/icons-material/Phone";
import LockIcon from "@mui/icons-material/Lock";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";
import { login } from "../../api/login";
import { usePost } from "../../hooks";

export default function Login() {

  const navigate = useNavigate()
  const [showPassword, setShowPassword] = React.useState(false);
  const [password, setPassword] = React.useState("");
  const [isPasswordFocused, setIsPasswordFocused] = React.useState(false);
  
  const [phone, setPhone] = React.useState("");
  const [isFocused, setIsFocused] = React.useState(false);
  const showPrefix = isFocused || phone.length > 0;

  const showPasswordLabel = isPasswordFocused || password.length > 0;

  const { mutate: postData, data, error, loading } = usePost();

  const handleTogglePassword = () => {
    setShowPassword((show) => !show);
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await login({ phone, password });
      console.log("respone",response);
      localStorage.setItem("token", response.token); 
      navigate("/dashboard");
    } catch (error) {
      toast.error(error.message || "Login failed");
    }
  };
  
  return (
    <Box
      sx={{
        minHeight: "100vh",
        bgcolor: "#f1e9f9",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Box
        sx={{
          p: 4,
          borderRadius: 3,
          bgcolor: "white",
          boxShadow: 3,
          width: 500,
        }}
      >
        <Typography
          variant="h5"
          fontWeight="bold"
          color="#6c39cb"
          mb={4}
          textAlign="center"
        >
          Tezkor online dispatcher
        </Typography>
        {/* phone Input */}
        <TextField
          fullWidth
          variant="outlined"
          label="Telefon raqam"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          InputLabelProps={{
            shrink: showPrefix,
          }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <PhoneIcon sx={{ color: "#6c39cb", mr: 2 }} />
                {showPrefix && (
                  <Typography
                    sx={{ color: "#000", fontSize: "0.95rem", mr: 0.5 }}
                  >
                    +998
                  </Typography>
                )}
              </InputAdornment>
            ),
          }}
          sx={{
            mb: 3,
            "& .MuiInputLabel-root": {
              color: "#6c39cb",
              marginLeft: "30px",
            },
            "& .MuiOutlinedInput-root": {
              borderRadius: "12px",
              "& fieldset": {
                borderColor: "#6c39cb",
              },
              "&:hover fieldset": {
                borderColor: "#7e3ff2",
              },
              "&.Mui-focused fieldset": {
                borderColor: "#7e3ff2",
              },
              "& .MuiInputBase-input": {
                marginRight: 0,
              },
            },
          }}
        />
        {/* password  */}
        <TextField
          fullWidth
          variant="outlined"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          onFocus={() => setIsPasswordFocused(true)}
          onBlur={() => setIsPasswordFocused(false)}
          InputLabelProps={{
            shrink: showPasswordLabel,
          }}
          type={showPassword ? "text" : "password"}
          label="Parol"
          sx={{
            mb: 3,
            "& .MuiInputLabel-root": {
              color: "#6c39cb",
              marginLeft: "30px",
            },
            "& .MuiOutlinedInput-root": {
              "& fieldset": {
                borderColor: "#6c39cb",
              },
              "&:hover fieldset": {
                borderColor: "#7e3ff2",
              },
              "&.Mui-focused fieldset": {
                borderColor: "#7e3ff2",
              },
              borderRadius: "12px",
            },
          }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <LockIcon sx={{ color: "#6c39cb" }} />
                {showPrefix && <Typography></Typography>}
              </InputAdornment>
            ),
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  onClick={handleTogglePassword}
                  edge="end"
                  sx={{ color: "#6c39cb" }}
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
        {/* submit */}
        <Button
          fullWidth
          variant="contained"
          onClick={handleLogin}
          disabled={loading}
          sx={{
            bgcolor: "#6c39cb",
            "&:hover": { bgcolor: "#743be0" },
            textTransform: "none",
            fontSize: "19px",
            borderRadius: "10px",
          }}
        >
          {loading ? "Yuklanmoqda..." : "Kirish"}
        </Button>
        
      </Box>
    </Box>
  );
}
