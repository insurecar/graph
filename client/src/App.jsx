import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CssBaseline, Container } from "@mui/material";

import { Home, Settings, Recommend } from "./pages";

import { Navigation } from "./components";

export const App = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  return (
    <BrowserRouter>
      <CssBaseline />
      <Navigation />
      <Container maxWidth="xl">
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/settings" element={<Settings />} />
          <Route path="/recomend" element={<Recommend />} />
        </Routes>
      </Container>
    </BrowserRouter>
  );
};
