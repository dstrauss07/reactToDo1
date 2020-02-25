import React, {Component} from 'react';
import { findRenderedComponentWithType } from 'react-dom/test-utils';
 class TodoItem extends Component{
  
  getStyle =() =>{
     return{
        backgroundColor:'#f4f4f4',
        padding:'10px',
        borderBottom: '1px #ccc dotted',
        textDecoration: this.props.todo.completed? 'line-through' : 'none'
      }
    }
  

  markComplete =(e) =>{


  }
  
  
  render(){
    const{id, title} =this.props.todo;

    return(
      <div>
      <p style={this.getStyle()}>
        <input type="checkbox" onChange={this.props.markComplete.bind(this,id)}/> {''}
        {title}
        <button onClick={this.props.delTodo.bind(this,id)}style={btnStyle}>x</button></p>
    </div>
    )

  }
}

const btnStyle ={
  background: '#ff0000',
  color:findRenderedComponentWithType,
  border:'none',
  padding:'5px 10px',
  borderRadius: '50%',
  cursor: 'pointer',
  float: 'right'
}


// TodoItem.propTypes ={
//   todos: PropTypes.object.isRequired
// }

export default TodoItem;