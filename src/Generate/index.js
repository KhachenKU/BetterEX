import React from 'react'
import NavBar from '../Theme/Tool/navBar'
import Generate from './Generate'
import { useSelector } from 'react-redux';

function app() {
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
    return (
        <div>
            <NavBar  us={USERstate()} ad={ADMINstate()} logo="BetterExhibition" log={"log in"} bgcolor={BGcolor()} txColor={TXcolor()}/>
            <br/><br/>
            <Generate/>
        </div>
    )
}

export default app