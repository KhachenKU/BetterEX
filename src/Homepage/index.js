import React from 'react';
import Homepage from "./App";
import NavBar from "../Theme/Tool/navBar";
import { useSelector } from 'react-redux';

function iaun() {
    const BGcolor = () => {
        return useSelector(state => state.BGcolor);
    } 
    const TXcolor = () => {
        return useSelector(state => state.TXcolor);
    }
    
    return(
        <div>
            <NavBar logo="BetterExhibition" log={"log in"} bgcolor={BGcolor()} txColor={TXcolor()} />
            <Homepage/>
        </div>
    );
}

export default iaun