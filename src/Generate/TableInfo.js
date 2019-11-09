import React from 'react';
import './Generate.css';

class TableInfo extends React.Component{
    render(){
        return(
            <form id = 'table-info'>
            <table className='tableInfo'>
                <tbody>
                <tr>
                    <td style = {{textAlign: 'right'}}>Tel:  </td>    
                    <td><input type="text" name="Tel" class="form-control" id = 'Tel'/><br /></td>
                </tr>
                <tr>
                    <td style = {{textAlign: 'right'}}>Name:  </td>
                    <td><input type="text" name="Name" class="form-control" id = 'Name'/><br /></td>
                </tr>
                <tr>
                    <td style = {{textAlign: 'right'}}>Brand:  </td>
                    <td><input type="text" name="Brand" class="form-control" id ='Brand'/><br /></td>
                </tr>
                <tr>
                    <td style = {{textAlign: 'right'}}>Version:<t/></td>
                    <td><input type="text" name="Version" class="form-control" id = 'Version'/><br /></td>
                </tr>
                </tbody>
            </table>
            </form>
        );
    }
}

export default TableInfo;