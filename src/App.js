import { Provider } from 'react-redux';
import store from './store';
import Users from './components/fetchedUser';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Users />
      </Provider>
      ,
    </div>
  );
}

export default App;
