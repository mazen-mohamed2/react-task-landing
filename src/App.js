
import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Suspense, lazy } from 'react';
import Loader from './components/Loader';


const Landing  = lazy(()=> import('./page/Landing'))

function App() {
  return (
    <>
   
    <Routes>
    <Route path='/' element={
     <Suspense fallback={<Loader/>}>
      <Landing /> 
     </Suspense>}/>
    </Routes>
    </>
  );
}

export default App;
