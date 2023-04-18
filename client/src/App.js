import './App.css';
import ResponsiveAppBar from './components/Navbar';
import {Route, Routes} from "react-router-dom";
import Home from "./pages/Home";
import Add from "./pages/Add";
import Progress from "./pages/Progress";
import Climb from "./pages/Climb";
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
            <Route path="/progress" element={<Progress />} />
            <Route path="/climb/:id" element={<Climb />} />
          </Routes>
        </div>
      </ThemeProvider>
    </>
  );
}

export default App;
