import './styles/App.css';
import Cover from "./components/Cover";
import Info from "./components/Info";
import Partners from './components/Partners';

function Home() {
  return (
    <div className="Home">
      <Cover/>
      <Info />
      <Partners />
    </div>
  );
}

export default Home;
