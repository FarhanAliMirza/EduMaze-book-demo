import "./App.css";
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom';
import Header from "./components/Header";
import Home from "./Home";
import { useAuth0 } from "@auth0/auth0-react";
import Profile from "./pages/Profile";
import Payment from "./pages/Payment";


function App() {
  const { isLoading, error } = useAuth0();
  return (


    <>
     
    {error && <p>Authentication Error</p>}
      {!error && isLoading && <p>Loading...</p>}
      {!error && !isLoading && (
    <Router>
    <div>
      <div className="coloredbg">
        <Header />
        
        <Routes>
          <Route index element = {<Home />}/> 
          <Route path="/profile" element={<Profile/>}/>
          <Route path="/payments" element={<Payment/>}/>
        </Routes>
  
      </div>
     
    </div>

    </Router>
    )}
    
    </>
  );
}

export default App;
