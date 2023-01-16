import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Navigation } from "./components";
import { Home, Settings, Recommend } from "./pages";

import { CssBaseline, Container, Box } from "@mui/material";

export const App = () => {
  return (
    <BrowserRouter>
      <CssBaseline />
      <Navigation />

      <Box
        sx={{
          backgroundColor: (theme) => theme?.palette?.grey[100],
        }}
      >
        <Container maxWidth="xl">
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/settings" element={<Settings />} />
            <Route path="/recomend" element={<Recommend />} />
          </Routes>
        </Container>
      </Box>
    </BrowserRouter>
  );
};
