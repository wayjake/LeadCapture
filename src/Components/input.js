import React, { Component } from 'react';


const inputForm = (props) => {

   let items = props.data.map(function(field) {
       if (field.type === "date"){
           return <div></div>
       }
       if (field.type === "container"){
           return field
       }
       if (field.type === "freeResponse"){
           return field
       }
       if (field.type === "question"){
            return field
       }  
       if (field.type === "select"){
            return field
       }      
    })
   

    console.log('this is:', items)
  return (
      <div>hello</div>
      
    
  );
};

export default FormField;


