import React, { useState } from "react";
import {
  Box,
  Button,
  TextField,
  Typography,
  ToggleButton,
  ToggleButtonGroup,
  IconButton,
  useTheme,
  Paper,
  createTheme,
  ThemeProvider,
  CssBaseline,
} from "@mui/material";
import { Brightness4, Brightness7 } from "@mui/icons-material";

const AuthForm = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [mode, setMode] = useState("light");
  const theme = createTheme({
    palette: {
      mode,
      background: {
        default: mode === "dark" ? "#121212" : "#f5f5f5",
      },
    },
    transitions: {
      duration: {
        standard: 500,
      },
    },
  });

  const toggleTheme = () => {
    setMode((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
          backgroundColor: mode === "dark" ? "#0a0a0a" : "#e0e0e0",
          transition: "all 0.5s ease",
        }}
      >
        <Paper
          elevation={24}
          sx={{
            padding: 4,
            width: 360,
            backdropFilter: "blur(20px)",
            background: mode === "dark"
              ? "rgba(30,30,30,0.6)"
              : "rgba(255,255,255,0.6)",
            borderRadius: 4,
            boxShadow: "0 4px 30px rgba(0,0,0,0.1)",
            border: "1px solid rgba(255, 255, 255, 0.2)",
            transition: "all 0.5s ease",
          }}
        >
          <Box display="flex" justifyContent="space-between" alignItems="center">
            <Typography variant="h6" gutterBottom>
              Login to Your Account
            </Typography>
            <IconButton onClick={toggleTheme} color="inherit">
              {mode === "dark" ? <Brightness7 /> : <Brightness4 />}
            </IconButton>
          </Box>

          <ToggleButtonGroup
            value={isLogin ? "login" : "signup"}
            exclusive
            onChange={(_, val) => setIsLogin(val === "login")}
            fullWidth
            sx={{ mb: 2 }}
          >
            <ToggleButton value="login">Login</ToggleButton>
            <ToggleButton value="signup">Sign Up</ToggleButton>
          </ToggleButtonGroup>

          <form>
            {!isLogin && (
              <TextField
                label="Name"
                variant="outlined"
                margin="normal"
                fullWidth
              />
            )}
            <TextField
              label="Email"
              variant="outlined"
              margin="normal"
              fullWidth
              type="email"
            />
            <TextField
              label="Password"
              variant="outlined"
              margin="normal"
              fullWidth
              type="password"
            />
            <Button
              type="submit"
              variant="contained"
              fullWidth
              sx={{ mt: 2 }}
            >
              {isLogin ? "Login" : "Sign Up"}
            </Button>
          </form>
        </Paper>
      </Box>
    </ThemeProvider>
  );
};

export default AuthForm;