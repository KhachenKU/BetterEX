import React from 'react';
import NavBar from '../Theme/Tool/navBar';
import LoginReg from "./log-reg_page";
import { useSelector } from 'react-redux';
import ContactUs from '../Theme/Tool/contactUs';
import { useDispatch } from 'react-redux';
import { changeUserStateLogin, changeAdminStateLogin, changeUserStateLogout, changeAdminStateLogout } from '../actions';

function App() {
  const BGcolor = useSelector(state => state.BGcolor);
  const TXcolor = useSelector(state => state.TXcolor);
  const codeBGcolor = useSelector(state => state.codeBGcolor);
  const USERstate = useSelector(state => state.userstate);
  const ADMINstate = useSelector(state => state.adminstate);
  const dispatch = useDispatch();

  const onConfirm = (order) => {
    if(order == 1){
      dispatch(changeAdminStateLogin())
      return 1
    } else if(order == 2){
      dispatch(changeAdminStateLogout())
      dispatch(changeUserStateLogout())
      return 1
    } else if(order == 3){
      dispatch(changeUserStateLogin())
      return 1
    }
  }

  return (
    <div>
      <NavBar us={USERstate} ad={ADMINstate} logo="BetterExhibition" log={"log in"} bgcolor={BGcolor} txColor={TXcolor} /><br />
      <LoginReg us={USERstate} ad={ADMINstate} codeBGcolor={codeBGcolor} TXcolor={TXcolor} confirm={onConfirm} /><br />
      <ContactUs bgcolor={BGcolor} />
    </div>
  );
}

export default App;
