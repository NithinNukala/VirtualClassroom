import './App.css';
import { Route,Routes} from "react-router-dom";
import Login from './Login/login';
import Dashboard from './Student/dash';
import Assign from './Student/components/assign';




function App() {
  return(
    <Routes>
      <Route path='/' exact element={<Login/>}/>
      <Route path='/student/dashboard' exact element={<Dashboard authorized={false}/>}/>
      <Route path='/assignments' exact element={<Assign/>}/>
    </Routes>
  )
}

export default App;
