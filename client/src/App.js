import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './components/Home'
import Signup from './components/Signup';
import Signin from './components/Signin';
import Admindashboard from './components/Admindashboard';
import Createnotes from './components/Createnotes'
import About from './components/About';
import Contact from './components/Contact';
import Coursedashboard from './components/Coursedashboard';
import Dashboardpanel from './components/Dashboardpanel';
import Mycourses from './components/Mycourses';
import Pdfuploader from './components/Pdfuploader';
import Notedashboard from './components/Notedashboard';
import Updateuser from './components/Updateuser';
function App() {
  return (
    <BrowserRouter>
      {/* <Navbar login={loginComponent} /> */}
      <Routes>
        <Route path="/https://main--glistening-douhua-811bf4.netlify.app/" element={<Home />} />
        <Route path="/https://main--glistening-douhua-811bf4.netlify.app/signup" element={<Signup />} />
        <Route path="/https://main--glistening-douhua-811bf4.netlify.app/signin" element={<Signin />} />
        <Route path='/https://main--glistening-douhua-811bf4.netlify.app/dashboard' element={<Admindashboard />} />
        <Route path='/https://main--glistening-douhua-811bf4.netlify.app/createnote' element={<Createnotes />} />
        <Route path='/https://main--glistening-douhua-811bf4.netlify.app/about' element={<About />} />
        <Route path='/https://main--glistening-douhua-811bf4.netlify.app/contact' element={<Contact />} />
        <Route path='/https://main--glistening-douhua-811bf4.netlify.app/coursedashboard' element={<Coursedashboard />} />
        <Route path='/https://main--glistening-douhua-811bf4.netlify.app/dashboardpanel' element={<Dashboardpanel />} />
        <Route path='/https://main--glistening-douhua-811bf4.netlify.app/mycourses' element={<Mycourses />} />
        <Route path='/https://main--glistening-douhua-811bf4.netlify.app/uploadpdf' element={<Pdfuploader />} />
        <Route path='/https://main--glistening-douhua-811bf4.netlify.app/notes' element={<Notedashboard />} />
        <Route path='/https://main--glistening-douhua-811bf4.netlify.app/updateuser' element={<Updateuser />} />
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
