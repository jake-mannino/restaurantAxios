import React from 'react';
import axios from 'axios';
export default class ItemList extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            List: [],
            //item
        }
    }
    componentDidMount() {
      let apiURL = 'http://awesomeincbootcampapi-ianrios529550.codeanyapp.com:3000/public/api/menu/items/42'
      let this_= this;
       axios.get(apiURL)
            .then(function (response) {
                this_.setState({ List: response.data })
            })
            .catch(function (error) {
                console.log(error);
            });
    }
    componentDidUpdate() {
        window.localStorage.setItem('menuItems', JSON.stringify(this.state.List));
    }
    render() {
        return (
            <ul>
                {this.state.List.map((element, index)=> <li key={index}>{element.name}</li>)}
            </ul>
        )
    }
}
 // let mapHelper = (List, index) => {
//key={index}, menu={List}

//name
//description
//ids line







// function Items(props) {  
//     <div class="card">
//         <h2>props.items.name</h2>
//     </div>
// }

//componentDidMount
//componentDidUpdate


//axios helper
//slice



//items.id

