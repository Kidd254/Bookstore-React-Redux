import { Provider } from 'react-redux';
import store from './redux/store';
import RouterNav from './Router';

function App() {
  return (
    <Provider store={store}>
      <RouterNav />
    </Provider>
  );
}

export default App;
