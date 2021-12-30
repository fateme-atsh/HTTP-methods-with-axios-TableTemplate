import { BrowserRouter as Router,Routes, Route } from 'react-router-dom';
import AddNewUser from "./component/AddNewUser";
import IndexPageLayout from './component/IndexPageLayout';



function Layout() {
  return (
    <div className="App">
      <Router>
      
        <Routes>
          <Route path="/home" element={<IndexPageLayout/>}/>
          <Route path="/new" element={<AddNewUser/>}/>
        </Routes>
        
      </Router>
    </div>
  );
}

export default Layout;
