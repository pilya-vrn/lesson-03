import { Header } from "./components/Header/Header";
import { Content } from "./components/content/Content";
import { Footer } from "./components/footer/Footer";
import "./App.css"

export const App = () => (
  <div className="app-wrapper">
    <Header />
    <Content />
    <Footer />
  </div>
)
