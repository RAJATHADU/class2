import React,{useState} from "react";
import Address from "./sub/Address";
import Edu from "./sub/Edu"
import Personal from "./sub/Personal"

//Personal component
//Address
//Education [we can write the props in same component or create another components]

function Ex8(props){
    const [user,setUser]=useState({
        name:"rajatha",
        email:"rajatha@gmail.com",
        mobile:"12323456778",
        address:{
            city:"bangalore",
            zip:563242  
      },
      edu:{
        type:"Degree",
        title:"B.E",
        year:2023
      }
    })
    return(
        <div>
            <h1>Props in Functional Component</h1>
            <Personal fName={user.name} fEmail={user.email} fMobile={user.mobile}/>
            <Address fCity={user.address.city} fZip={user.address.zip}/>
            <Edu fType={user.edu.type} fTitle={user.edu.title} fYear={user.edu.year}/>
        </div>
    )
}

export default Ex8
