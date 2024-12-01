import { Routes, Route, BrowserRouter } from "react-router-dom"
import './App.css';
import MainLayout from "./pages/MainLayout";
import Home from "./pages/Home";
import Launch from "./pages/Launch";
import Ranking from "./pages/Ranking";
import Agent from "./pages/Agent";
import Token from "./pages/Token";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<MainLayout />} path="/">
            <Route element={<Home />} path="" />
            <Route element={<Home />} path="home" />
            <Route element={<Launch />} path="launch" />
            <Route element={<Ranking />} path="ranking" />
            <Route element={<Agent />} path="agent" />
            <Route element={<Token />} path="token/:id" />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
