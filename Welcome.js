import React, { Component } from 'react'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'


class Welcome extends Component {

  constructor(){

    super();

    this.state = {

      fname : '',
      lname : '',
      email : '',
      mobile : ''
    }
  }

  onChangeHandler =(event)=>{

         let myName = event.target.name;
         let myVlaue = event.target.value;

         this.setState({[myName] : myVlaue})


         if(myName === 'fname'){

          var pattern=/^([a-zA-Z ]){2,30}$/;
          if(!pattern.test(myVlaue)){

           this.setState({fname : 'First name is not valid'})
        
          }

        }

        if(myName === 'lname'){

          var pattern = /^([a-zA-Z]){2,30}/;
          if(!pattern.test(myVlaue)){

            this.setState({lname : 'Last name is not valid'})
          }
        }

        if(myName === 'email'){

          var emailPattern = /\S+@\S+\.\S+/;
          if(!emailPattern.test(myVlaue)){

            this.setState({email : 'Email is not valid'})
          }
        }
        if(myName === 'mobile'){

          if(!Number(myVlaue)){

            this.setState({mobile : 'Number is valid'})
          }
        }

        

  }
         
     

  render() {

    return (
      <div>
        
        <div className='container'>
            <div className='row'>
             <div className='col-lg-6'>
               <p>First Name : {this.state.fname}</p>
               <p>Last Name : {this.state.lname}</p>
               <p>Email : {this.state.email}</p>
               <p>Mobile : {this.state.mobile}</p>
               <form className='mt-5 pt-5'>

                <div className='form-group'>
                   <div className='input-group input-group-lg'>
                   <input onChange={this.onChangeHandler} name='fname' type='text' className='form-control form-control-lg' placeholder='Firstname'></input>
                   </div>
                </div>

                <div className='form-group'>
                   <div className='input-group input-group-lg'>
                   <input onChange={this.onChangeHandler}  name='lname' type='text' className='form-control form-control-lg' placeholder='Lastname'></input>
                   </div>
                </div>

                <div className='form-group'>
                   <div className='input-group input-group-lg'>
                   <input onChange={this.onChangeHandler}  name='email' type='email' className='form-control form-control-lg' placeholder='Email'></input>
                   </div>
                </div>


                <div className='form-group'>
                   <div className='input-group input-group-lg'>
                   <input onChange={this.onChangeHandler}  name='mobile' type='number' className='form-control form-control-lg' placeholder='Mobile'></input>
                   </div>
                </div>

                <input type='submit' value='Submit' className='btn-danger btn'></input>
             </form>
             </div>
            </div>
        </div>

      </div>
    )
  }
}
export default Welcome;


