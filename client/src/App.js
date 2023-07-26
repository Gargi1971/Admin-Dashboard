import { CssBaseline, ThemeProvider } from "@mui/material";
import { createTheme } from "theme";
import { useSelector } from "react-redux";
import { themeSettings } from "theme";

function App() {
  const mode = useSelector((state) => state.global.mode);   //add dark mode from state folder
  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);
  return <div className="app"></div>
  
}

export default App;
