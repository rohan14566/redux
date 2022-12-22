import React,{useState}from 'react'
import { useDispatch,useSelector } from 'react-redux'
import {Addata} from './dataSlice'


function Data() {
   const data=useSelector((state)=>state.Data.info);
   const [name,setName]=useState('');
   const [age,setAge]=useState();
   const [course,setCourse]=useState('');
   const [rating,setRating]=useState();

   const dispatch=useDispatch();

  return (
    <>
    <div>
    <lable>name:</lable><input type='text' placeholder='name' onChange={(e)=>setName(e.target.value)}/>
    <lable>age:</lable> <input type='number' placeholder='age' onChange={(e)=>setAge(e.target.value)}/><br/><br/>
    <lable>course:</lable> <input type='text' placeholder='course' onChange={(e)=>setCourse(e.target.value)}/>
    <lable>rating:</lable> <input type='number' placeholder='rating' onChange={(e)=>setRating(e.target.value)}/><br/><br/>
    <button onClick={()=>dispatch(Addata({name:name,age:age,course:course,rating:rating}))}>submit</button>
      <div>
    {
       data.map((item) => 
      (<h3>
         name:{item.name} |
           age: {item.age} |
           course: {item.course} |
           rating: {item.rating}
      </h3>)
   )
      
}
</div>
</div>

    </>
  )
}

export default Data