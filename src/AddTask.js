import React, {Component} from 'react';



 class AddTask extends Component{

   handleSubmit(event) {
     event.preventDefault();
     console.log(this.state.value);
     this.props.AddTask()
     this.setState({ value: ""});
   }

   constructor(props) {
     super(props);
     this.state={
       value:"",
     };
   }

   render() {
     return (
       <form onSubmit={(e) =>{
          e.preventDefault();
          this.props.addTask(this.state.value)
          this.setState({value: ""});
        }}>
         <div className="inputGroup">
           <label htmlFor="add"> Add task </label>
             <input
                  onChange={(e)=>{this.setState({value: e.target.value})}}
                  type="text"
                  className="form-control"
                  name="add"
                  id="add"
                  value={this.state.value}
              />
          </div>
         <button  className=" btn btn-primary"
                  type="submit" >Add Task</button>

       </form>
     );
   }
 };

export default AddTask;
