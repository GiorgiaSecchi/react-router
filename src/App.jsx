import { BrowserRouter, Routes, Route } from "react-router-dom";

//pages
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import DefaultLayout from "./layouts/DefaultLayout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route Component={DefaultLayout}>
          <Route path="/" Component={HomePage} />
          <Route path="/about" Component={AboutPage} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
