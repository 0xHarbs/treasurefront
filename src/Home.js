import './styles/App.css';
import Cover from "./components/Cover";
import Info from "./components/Info";
import Panels from './components/Panels';
import Testimonials from './components/Testimonials';
import Join from './components/Join';

function Home() {
  return (
    <div className="Home">
      <Cover/>
      <Info />
      <Panels />
      <Testimonials />
      <Join />
    </div>
  );
}

export default Home;
