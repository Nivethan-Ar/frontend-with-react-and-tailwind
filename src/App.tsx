import LoopStudiosLandingPage from 'pages/loop-studios-landing';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Routes>
      <Route path="1" element={<LoopStudiosLandingPage />} />
    </Routes>
  );
}

export default App;
