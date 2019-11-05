import React from 'react';
import './Product.css';
import NavBar from '../Theme/Tool/navBar';
import TableProduct from './TableProduct';
import { Row, Col } from 'reactstrap';
import { Table } from '@material-ui/core';
import { useSelector } from 'react-redux';

function Product(){
    const BGcolor = useSelector(state => state.BGcolor);
    const TXcolor = useSelector(state => state.TXcolor);
    return (
        <div>
            <NavBar logo="BetterExhibition" log={"log in"} bgcolor={BGcolor} txColor={TXcolor} />
            <div className='page'>
                <div><TableProduct /></div>
            </div>
        </div>
    );
}

export { Product };