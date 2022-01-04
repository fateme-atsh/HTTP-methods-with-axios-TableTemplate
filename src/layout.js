import { BrowserRouter as Router,Routes, Route } from 'react-router-dom';
import AddNewUser from "./component/AddNewUser";
import IndexPageLayout from './component/IndexPageLayout';
import LocalStorageContextProvider from './context/LocalStorageContest';



function Layout() {
  return (
    <div className="App">
      <Router>
      <LocalStorageContextProvider>
        <Routes>
          <Route path="/home" element={<IndexPageLayout/>}/>
          <Route path="/new" element={<AddNewUser/>}/>
        </Routes>
        </LocalStorageContextProvider>
      </Router>
    </div>
  );
}

export default Layout;
