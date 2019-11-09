import React from 'react';
import Homepage from "./homepage";
import NavBar from "../Theme/Tool/navBar";
import { useSelector } from 'react-redux';

function iaun() {
    const BGcolor = () => {
        return useSelector(state => state.BGcolor);
    } 
    const TXcolor = () => {
        return useSelector(state => state.TXcolor);
    }
    const USERstate = () => {
        return useSelector(state => state.userstate);
    }
    const ADMINstate = () => {
        return useSelector(state => state.adminstate)
    }
    return(
        <div>
            <NavBar us={USERstate()} ad={ADMINstate()} logo="BetterExhibition" log={"log in"} bgcolor={BGcolor()} txColor={TXcolor()} />
            <Homepage/>
        </div>
    );
}

export default iaun