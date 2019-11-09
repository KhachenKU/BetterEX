import React from 'react';
import NavBar from './../Theme/Tool/navBar';
import Contact from './../Theme/Tool/contactUs';
import EditMenu from './../Theme/Tool/editMenu';
import {useSelector} from 'react-redux';
import Form from './Form';
export default function Selected()  {
    
    const BGcolor = useSelector(state => state.BGcolor);
    const TXcolor = useSelector(state => state.TXcolor);
    const USERstate = useSelector(state => state.userstate);
  const ADMINstate = useSelector(state => state.adminstate);
    let Get = [];
    
    console.log(Get)
    return (
        <div>
      <NavBar us={USERstate} ad={ADMINstate} logo="BetterExhibition" log={"log in"} bgcolor={BGcolor} txColor={TXcolor} />
      <EditMenu page="product" bgcolor={BGcolor} />
            <Form bgcolor={BGcolor} />
            <div>
                <Contact bgcolor={BGcolor} />
            </div>
        </div>
    );
}