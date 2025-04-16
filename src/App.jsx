import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import DefaultLayout from "./layouts/DefaultLayout";
import About from "./pages/About";
import PostsList from "./pages/PostsLists";

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<DefaultLayout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/chi-siamo" element={<About />} />
            <Route path="/lista-post" element={<PostsList />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
