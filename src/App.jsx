import { useState } from 'react';
import './App.css'
import {check, checkSync} from 'recheck'

export default function App() {

  let key = '(a+)+$';
  
  const handleCheck = ()=>{
    let source = `\\{\\{${key}\\.`
    console.log("1");
     const diagnostics =  checkSync(source, "");
    console.log(diagnostics.status);

    if (diagnostics.status === 'safe'){
       return;
    }
    else{
      throw new Error('The regular expression is vulnerable to ReDoS attacks.')
    }
  }
  handleCheck();
  
  return (
    <>
      <h1>ReDoS Checker</h1>
    </>
  )
}
