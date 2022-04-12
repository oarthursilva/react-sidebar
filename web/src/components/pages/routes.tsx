import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Landscape from './Landing';

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Landscape />} />
      </Routes>
    </BrowserRouter>
  );
}
