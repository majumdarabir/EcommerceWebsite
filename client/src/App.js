import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './components/Home'
import Signup from './components/Signup';
import Signin from './components/Signin';
import Admindashboard from './components/Admindashboard';

function App() {
  return (
    <BrowserRouter>
        {/* <Navbar login={loginComponent} /> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/signin" element={<Signin />} />
          <Route path='/dashboard' element={<Admindashboard/>}/>
          {/* <Route path="/signup" element={<Signup />} />
          // <Route path="/signin" element={<Signin />} />
          <Route path="/createpost" element={<Createpost />} />
          <Route exact path="/Profile" element={<Profie />} />
          <Route path="/profile/:userid" element={<UserProfie />}></Route>
          <Route path="/followingpost" element={<MyFolliwngPost />} /> */}
        </Routes>
        {/* <ToastContainer />

        {modalOpen && <Modal setModalOpen={setModalOpen}></Modal>} */}


    </BrowserRouter>
  );
}

export default App;
