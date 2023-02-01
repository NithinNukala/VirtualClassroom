import "./login.css";
// import { student } from "../Server";
// import {teacher,student} from "../Server/index";
// const axios=require("axios");

const Login=()=>{
    // axios.get('/login',(res,req)=>{
    //     if(req.body){
    //         window.location='http://localhost:3000/student/dashboard';
    //     }
    // })
    return(
        <div className="App">
      <form  action="http://localhost:5000/auth" method="post">
        <div className="details">
            <img className="icon" src="https://cdn-icons-png.flaticon.com/512/2480/2480303.png" alt="flaticon"/>
            <div className="root">
                <label for="User" className="okati">*Userid</label>
                <input type="email" name="Uid" placeholder="email-id" className="user" required />
                <label for="" className="edho">*Passsword</label>
                <input type="password" name="pw" placeholder="password" className="pass" required />
                <button onClick={myfunc}  type="submit" className="log">login</button> 
                   
            </div>
        </div>
     </form>
    <div className="image">
        <img src="https://images.pexels.com/photos/5407206/pexels-photo-5407206.jpeg?auto=compress&cs=tinysrgb&w=600" className="img" alt=""/>
    </div>
    </div>
    );
    function myfunc(){
        document.querySelector(".log").classList.add("click");
        setTimeout(function(){
            document.querySelector(".log").classList.remove("click");
        },200);
        window.location="http://localhost:3000/student/dashboard";
      }
    }


export default Login;
