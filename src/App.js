import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "./pages/Home/Home"
import Blogs from "./pages/Blogs/Blogs"
import BlogDetail from "./pages/BlogDetail/BlogDetail"
import Contact from "./pages/Contact/Contact"
import About from "./pages/About/About"
import Layout from "./Layout/Layout"

const App = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/blog/:slug" element={<BlogDetail />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Layout>
    </Router>
  )
}

export default App
