import './App.css';
import {BrowserRouter,Routes,Route } from 'react-router-dom';

import Navbar from './Components/Navbar';
import Entry from './Components/Entry';
import Scndsection from './Components/Scndsection';
import Aswinport from './Components/Aswinport';
import Profile from './Components/Profile';
import Projects from './Components/Projects';
function App() {
  return (
 <>
<BrowserRouter>
<Routes>
<Route path='/navbar' element={<Navbar/>}/>
<Route path='/entry' element={<Entry/>}/>
<Route path='/second' element={<Scndsection/>}/>
<Route path='/' element={<Aswinport/>}/>


<Route path="/profile" element={<Profile/>}/>
<Route path="/projects" element={<Projects/>}/>


</Routes>
</BrowserRouter>

 </>
  );
}

export default App;
