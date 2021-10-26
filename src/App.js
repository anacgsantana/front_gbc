import "./App.css";

import Header from "./components/shared/Header/Header";
import Home from "./pages/Home/Home";
import Receitas from "./pages/Receitas/Receitas";
import Services from "./pages/Services/Services";
import Blog from "./pages/Blog/Blog";
import Member from "./pages/Member/Member";
import Register from "./pages/Register/Register";
import Footer from "./components/shared/Footer/Footer";

function App() {
  return (
    <div className="app">
      <Header />
      <Home />
      <Receitas />
      <Services />
      <Blog />
      <Member />
      <Register />
      <Footer />
    </div>
  );
}

export default App;
