import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/header/index";
import Footer from "./components/footer/index";
import Homepage from "./components/homepage/index";
import About from "./components/about/index";
import ProductGrid from "./components/product-grid/index";
import Contact from "./components/contact/index";
import TermsofUse from "./components/tou/index";
import ProductPage from "./components/product-page/index";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />

        {/* Main Section */}
        <main>
          <Switch>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/contact">
              <Contact />
            </Route>
            <Route path="/tou">
              <TermsofUse />
            </Route>
            <Route path="/products/:id">
              <ProductPage />
            </Route>
            <Route path={["/", "/*"]}>
              <Homepage />
              <ProductGrid />
            </Route>
          </Switch>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
