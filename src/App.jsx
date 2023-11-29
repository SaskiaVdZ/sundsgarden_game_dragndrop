import "./index.css";
import { BrowserRouter as Router } from "react-router-dom";

import { Header } from './components/Header'
import { Footer } from "./components/Footer";
import { HomePage } from "./pages/HomePage";
import routes from './routes/routes';


function App() {
  return (
    <>
      <Router>
        <Header />
        {routes}
        <Footer />
      </Router>


    </>
  );
}

export default App;
