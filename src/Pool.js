import './styles/App.css';
import './styles/Pool.css'
import PoolHeader from './components/PoolHeader';
import PoolOption from './components/PoolOption';
import PoolActions from './components/PoolActions';

function Pool() {
  return (
    <div className="Pool">
        <PoolHeader />
        <PoolOption/>
        <PoolActions />
    </div>
  );
}

export default Pool;