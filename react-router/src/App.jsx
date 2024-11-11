import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import { useState } from "react";
import Post from "./components/Post";
import ErrorPage from "./components/ErrorPage";

export default function App() {
  const [data, setData] = useState(null);

  console.log(data);

  const array = ["one", "two", "three"]

  return (
    <BrowserRouter
      future={{
        v7_startTransition: true,
        v7_relativeSplatPath: true
      }}
    >
      <Routes>
        <Route path="/" element={<Home setData={setData} array={array} />} />
        <Route path="/about" element={<About array={array} />} />
        <Route path="/contact" element={<Contact array={array} />} />
        <Route path="/post/:postId" element={<Post />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  )
}