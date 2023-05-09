import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import App from './App';
import UseBooleanComponent from './components/useBoolean';
import UseToogleComponent from './components/useToggle';
import UseEventListener from './components/useEventListener';
import UseCounter from './components/useCounter';
import UseReducer from './components/useCounter';

const router = createBrowserRouter([
  {
    path: '/',
    element: <div>Hello world!</div>,
  },
]);

export default router;
