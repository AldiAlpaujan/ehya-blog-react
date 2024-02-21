import { RouterProvider } from 'react-router-dom'
import router from './route'
import NavBarContextProvider from './context/NavBarContext';

const App = () => {
  return (
    <div className="font-opensans">
      <NavBarContextProvider>
        <RouterProvider router={router} />
      </NavBarContextProvider>
    </div>
  );
}

export default App;