import { Navbar } from "./components/Navbar";
import { Home } from "./components/Home";
import { HomeExtend } from "./components/HomeExtend";
import { Footer } from "./components/Footer";

function App() {
  return (
    <div className="bg-slate-300">
      <Navbar />
      <Home />
      <HomeExtend />
      <Footer />
    </div>
  );
}

export default App;
