import { Fragment, useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import CartModal from "./components/productOverlay/ProductModal";

const App = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <Fragment>
    <Switch>
      <Route path='/' exact>
        <Home />
      </Route>
      <Route path='/shop' exact>
        <Shop />
      </Route>
    </Switch>

    </Fragment>
  );
};
export default App;
