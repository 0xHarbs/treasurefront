import './styles/App.css';
import './styles/Pool.css'
import PoolHeader from './components/PoolHeader';
import PoolOption from './components/PoolOption';

function Pool() {
  return (
    <div className="Pool">
        <PoolHeader />
        <PoolOption/>
    </div>
  );
}

export default Pool;