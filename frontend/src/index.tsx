import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';
import SongList from './components/SongList';
import { Provider } from 'react-redux';
import store from './redux/store';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const router = createBrowserRouter(
  createRoutesFromElements(
    <>
    <Route path="//" element={<SongList />} />
    <Route path="/genre" element={<SongList />} />,
    <Route path="/album" element={<SongList />} />,
    <Route path="/artist" element={<SongList />} />
    </>,
  )
);
function App() {
  return (
    <Provider store={store}>
      <RouterProvider router={router} />
      <ToastContainer />
    </Provider>
  );
}

const rootElement = document.getElementById('root');

if (rootElement) {
  ReactDOM.createRoot(rootElement).render(<App />);
}