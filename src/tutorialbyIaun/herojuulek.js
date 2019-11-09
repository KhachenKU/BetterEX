import React from 'react';
import {storage,db} from '../firebase';

class herojuulek extends React.Component{
    constructor(props){
        super(props);
    }

    yedsod = (e) => {
        e.preventDefault();
        let hee = document.querySelector('#kuay');
        db.collection('User').doc(hee.name.value).set({
            name: hee.name.value,
            email: hee.email.value,
            company: hee.company.value,
            downloadkey: '',
            downloadstatus: ''
        })
    }

    love = (hentai) => {
        let neen = document.querySelector('#hero');
        let heenana = document.getElementById('test');

        let abc = document.createElement('li');
        let def = document.createElement('span');
        let ghi = document.createElement('span');
        let jkl = document.createElement('span');

        abc.setAttribute('data-id',hentai.id);
        def.textContent = 'Company:' + hentai.data().company;
        ghi.textContent = 'Name:' + hentai.data().name;
        jkl.textContent = 'Email:' + hentai.data().email;

        heenana.textContent = 'neen : ' + hentai.data().name;
        abc.appendChild(def);
        abc.appendChild(ghi);
        abc.appendChild(jkl);

        neen.appendChild(abc);
    }

    doohee = (event) => {
        event.preventDefault();
        db.collection('User').get().then(docs => {
                docs.forEach(doc => {
                        // this.love(doc);
                        if(doc.data().rank == 'admin' && doc.id == email){

                        }
                    }
                )
        })
    }

    render(){

        return(
            <form id = 'kuay'>
                <input type = 'text' name = 'name' ></input><br />
                <input type = 'text' name = 'email'></input><br />
                <input type = 'text' name = 'company'></input><br />
                <button onClick = {this.yedsod}>Yahoooo</button><br />
                <button onClick = {this.doohee}>Hellloooo</button><br />
                <ul id = 'hero'>
                    <li>Hello</li>
                    <li>Nahee</li>
                </ul>
                <span id = 'test'></span>

            </form>
        );
    }
}

export default herojuulek;