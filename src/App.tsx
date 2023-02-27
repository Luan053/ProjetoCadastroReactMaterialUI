import { BrowserRouter } from "react-router-dom"
import { CssBaseline } from "@mui/material";
import { AppRoutes } from "./routes";
import { AppThemeProvider } from "./shared/contexts";


export const App = () => {
  return (
    <AppThemeProvider>
    <CssBaseline/>
    <BrowserRouter>
    <AppRoutes />
    </BrowserRouter>
    </AppThemeProvider>
  );
}