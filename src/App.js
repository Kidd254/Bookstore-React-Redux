import './App.css';
import { Provider } from 'react-redux';
import store from './redux/store';

function App() {
  return (
    <Provider store={store} />
  );
}

export default App;
