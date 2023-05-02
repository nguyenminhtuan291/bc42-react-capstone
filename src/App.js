import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./modules/Home/Home";
import MainLayout from "./layouts/MainLayout/MainLayout";
import MovieDetails from "./modules/MovieDetails/MovieDetails";
import Signin from "./modules/Auth/Signin/Signin";
import Signup from "./modules/Auth/Signup/Signup";
import AuthLayout from "./layouts/AuthLayout/AuthLayout";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="/movies/:movieId" element={<MovieDetails />} />
        </Route>

        <Route path="/" element={<AuthLayout />}>
          <Route path="/signin" element={<Signin/>} />
          <Route path="/signup" element={<Signup />} />
        </Route>

      </Routes>
    </BrowserRouter>
  );
}

export default App;
