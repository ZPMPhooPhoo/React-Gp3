import React,{useState} from "react";
import "./App.css";
import Form from "./components/loginform";
import Logo from "./components/home/logo";
import Mvisual from "./components/home/visual";
import Footer from "./components/footer";
import Input from "./components/userinput";
import Email from "./components/email";
import Message from "./components/msg";
import Title1 from "./components/about/content1";
import Title2 from "./components/about/content2";

import ListMsg, { item } from "./components/listmsg";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Blog from "./pages/blog";
import About from "./pages/about";
import Contact from "./pages/contact";
import Error from "./pages/error";
import Home from "./pages/home";

import Menu from "./components/home/menu";
import BlogItemDetail from "./components/blog/blog_item_detail";
// const router= createBrowserRouter(
//   createRoutesFromElements(
//     <Route path="login" element={<Form/>}/>
//   )
// )


  /* <Routes>
<Route path="login" element={<Form />} />
</Routes> */

function App() {
  
  return (

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="home" element={<Home />} />
        <Route path="blog" element={<Blog />} >
          {/* <Route path=":id" element={<BlogItemDetail />} /> */}
        </Route>
        <Route path="contact" element={<Contact />} />
        <Route path="about" element={<About />} />
        <Route path="login" element={<Form />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>    
  );
}

export default App;
