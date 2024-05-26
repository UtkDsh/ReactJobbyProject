import { useState } from 'react';
import './index.css'
import {useNavigate} from 'react-router-dom'
import Cookies from 'js-cookie'


const Login =  () => {


  const token=Cookies.get("jwtToken")

  const navigate=useNavigate();

  const[allValues,setValue]=useState({
    username:"",password:"",
    showErrorMsg:false,
    errorMsg:""
  })


  const onSubmitUSerDetails= async (event)=>{
        event.preventDefault();

        const url="https://apis.ccbp.in/login";

        const userDetails={
          username: allValues.username,
          password: allValues.password
        }

        
        
        const options = {
          method: 'POST',
          body: JSON.stringify(userDetails),
        }
        
        
        const response= await fetch(url,options);
        let fetchData= await response.json();
        console.log(response);
        // console.log(fetchData.jwt_token);
        console.log(fetchData);


        if(response.ok===true)
          {
            setValue({...allValues,showErrorMsg:false,errorMsg:""});
            Cookies.set("jwtToken",fetchData.jwt_token)
            navigate("/");
          }
          else
          {
            setValue({...allValues,showErrorMsg:true,errorMsg:fetchData.error_mesg});
          }


          useEffect(() => {
            if(token!==undefined)
              {
                navigate("/")
              }
          }
        , [])
        


  }

  const onChangeUserName=(event)=>{
    // console.log(event.target.value);

    setValue({...allValues,username:event.target.value});

  }

  const onChangePassword=(event)=>{

    // console.log(event.target.value);

    setValue({...allValues,password:event.target.value});
  }



  




  return (
    <>
      <div className="my-cont ">
        <form onSubmit={onSubmitUSerDetails} className="w-25 bg-light p-4 rounded">
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">User Name</label>
            <input
              value={allValues.username}
              type="text"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              onChange={onChangeUserName}
            />
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputPassword1">Password</label>
            <br></br>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
              onChange={onChangePassword}
              value={allValues.password}
            />
          </div>

          <button type="submit" className="btn btn-primary">
            Submit
          </button>
          <br />
          {allValues.showErrorMsg ?(<p className='text-danger'>{allValues.errorMsg}</p>):null}

        </form>
      </div>
    </>
  );
};

export default Login;
