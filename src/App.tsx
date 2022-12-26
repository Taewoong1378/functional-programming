import './App.css';
import { list } from './lecture';

function App() {
  return (
    <>
      <h1>장바구니</h1>
      {list()}
    </>
  );
}

export default App;
