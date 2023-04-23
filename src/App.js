import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Login from "./pages/Login";
import Register from "./pages/Register";
import { useSelector } from "react-redux";
//import Protectedroute from "./Components/Protectedroute";
//import Publicroute from "./Components/Publicroute";
function App() {
  const {loading} = useSelector(state => state.alerts)
  return (
    <>
      <BrowserRouter>
      {loading ? (
      <spinner/>
      ) : (
        <Routes>
          <Route path="/"
           element={
            
              <HomePage />

            
           } />

          <Route path="/login" 
          element={
           
              <Login />

            
          
          } />
          <Route path="/register" 
          element={
            
              <Register />
              

           

          
          } />
        </Routes>
      )}
      </BrowserRouter>
    </>
  );
}

export default App;
