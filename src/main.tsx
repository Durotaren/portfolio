import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter } from 'react-router';
import { RouterProvider } from 'react-router/dom';
import { useOutletContext } from 'react-router';
import Home from './components/Home.tsx';
import Contacts from './components/Contacts.tsx';
import Projects from './components/Projects.tsx';
import Error from './components/Error.tsx';

import './index.css';
import App from './App.tsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <HomeWrapper />,
      },
      { path: 'contacts', element: <Contacts /> },
      { path: 'about', element: <Contacts /> },
      { path: 'projects', element: <Projects /> },
      { path: '*', element: <Error /> },
    ],
  },
]);

function HomeWrapper() {
  const { position, sliderRef, setIsDragging, dark } = useOutletContext<{
    position: number;
    sliderRef: React.RefObject<HTMLDivElement>;
    setIsDragging: React.Dispatch<React.SetStateAction<boolean>>;
    dark: boolean;
  }>();
  return (
    <Home
      position={position}
      sliderRef={sliderRef}
      setIsDragging={setIsDragging}
      dark={dark}
    />
  );
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
