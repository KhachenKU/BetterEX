import React from 'react';
import NavBar from '../Theme/Tool/navBar';
import { useSelector } from 'react-redux';
import {DownloadUser} from "./components/download/download_user"


function App() {
  const BGcolor = useSelector(state => state.BGcolor);
  const TXcolor = useSelector(state => state.TXcolor);
  const USERstate = useSelector(state => state.userstate);
  const ADMINstate = useSelector(state => state.adminstate);
  return (
    <div>
    <NavBar us={USERstate} ad={ADMINstate} logo="BetterExhibition" log={"log in"} bgcolor={BGcolor} txColor={TXcolor} />
    <DownloadUser/>
  </div>
  );
}

export default App;