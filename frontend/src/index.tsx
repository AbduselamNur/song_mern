import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';
import SongList from './components/SongList';
import { Provider } from 'react-redux';
import store from './redux/store';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="//" element={<SongList />} />
  )
);
function App() {
  return (
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  );
}

const rootElement = document.getElementById('root');

if (rootElement) {
  ReactDOM.createRoot(rootElement).render(<App />);
}