import './App.css';
import store from './redux/store';
import { Provider } from 'react-redux';

function App() {
  return (
    <Provider store={store}>
  
    </Provider>
  );
}

export default App;
