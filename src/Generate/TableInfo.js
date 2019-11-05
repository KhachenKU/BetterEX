import React from 'react';
import './Generate.css';

class TableInfo extends React.Component{
    render(){
        return(
            <form id = 'table-info'>
            <table className='tableInfo'>
                <tbody>
                <tr>
                    <td style = {{textAlign: 'right'}}>Tel:</td>    
                    <td><input type="text" name="Tel" className="textbox" id = 'Tel'/><br /></td>
                </tr>
                <tr>
                    <td style = {{textAlign: 'right'}}>Name:</td>
                    <td><input type="text" name="Name" className="textbox" id = 'Name'/><br /></td>
                </tr>
                <tr>
                    <td style = {{textAlign: 'right'}}>Brand:</td>
                    <td><input type="text" name="Brand" className="textbox" id ='Brand'/><br /></td>
                </tr>
                <tr>
                    <td style = {{textAlign: 'right'}}>Version:</td>
                    <td><input type="text" name="Version" className="textbox" id = 'Version'/><br /></td>
                </tr>
                </tbody>
            </table>
            </form>
        );
    }
}

export default TableInfo;