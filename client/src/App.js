import { useMemo } from "react";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import { useSelector } from "react-redux";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { themeSettings } from "theme";
import Dashboard from "scenes/dashboard";
import Layout from "scenes/layout";

function App() {
  const mode = useSelector((state) => state.global.mode);   //add dark mode from state folder
  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);
  return (
    <div className="app">
      <BrowserRouter>
        <ThemeProvider theme = {theme}>
          <CssBaseline/>
          <Routes>
            <Route element = {<Layout/>}>  // any route within this component will always have the layout component which will have the navbar and sidebar, they will be on every single page
              <Route path = "/dashboard" element = {<Dashboard/>}/>
              <Route path = "/" element = {<Navigate to = "/dashboard" replace/>}/>
            </Route>
          </Routes>
        </ThemeProvider>
      </BrowserRouter>
    </div>
    );
}

export default App;
