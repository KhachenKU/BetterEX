import React from 'react';
import NavBar from '../Theme/Tool/navBar';
import { useSelector } from 'react-redux';
import {ProfileUser} from "./components/edit_profileuser/profile_user"
// import {ImageUpload} from "./components/edit_profileuser/imgupload"



function App() {
  const BGcolor = useSelector(state => state.BGcolor);
  const TXcolor = useSelector(state => state.TXcolor);
  return (
    <div>
    <NavBar logo="BetterExhibition" log={"log in"} bgcolor={BGcolor} txColor={TXcolor} />
    <ProfileUser/>
    {/* <ImageUpload/> */}
  </div>
  );
}

export default App;
