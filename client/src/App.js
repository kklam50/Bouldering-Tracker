import './App.css';
import ResponsiveAppBar from './components/Navbar';
import {Route, Routes} from "react-router-dom";
import Home from "./pages/Home";
import Add from "./pages/Add";
import History from "./pages/History";
import Progress from "./pages/Progress";
import theme from './Theme';
import { ThemeProvider } from '@mui/material/styles';

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
      <ResponsiveAppBar />
        <div className="page-contents">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/add" element={<Add />} />
            <Route path="/history" element={<History />} />
            <Route path="/progress" element={<Progress />} />
          </Routes>
        </div>
      </ThemeProvider>
    </>
  );
}

export default App;
