import React,{Component} from 'react';
import HOTELS from '../../redux/state.js';
import Search from '../Search/Search.js'



function serachingFor(term) {
  return function (x) {
    return x.name.toLowerCase().includes(term.toLowerCase()) || !term;
  }
}

class Parent extends Component{
  constructor(props){
    super(props);
    this.state = {
      HOTELS : HOTELS,
      term:''
    }
    this.searchHandler = this.searchHandler.bind(this)
  }


searchHandler(event){
  this.setState({term:event.target.value})
}


  render(){
    return(
        <div>
          <form>
            <input type='text'
                    onChange={this.searchHandler}
            />
          </form>


          {
this.state.HOTELS.filter(serachingFor(this.state.term)).map(el =>{
      return(
          <div key={el.id}>
        <h2>{el.name}</h2>
          <img src={el.img} height='250px' width='450px'/>
      <div>
        <p>{el.description}</p>
      </div>


        <div>
          <b>{el.price}</b>
          <button>BTN</button>
        </div>
    </div>



              )
            })
          }
        </div>
    )
  }
}

export default Parent