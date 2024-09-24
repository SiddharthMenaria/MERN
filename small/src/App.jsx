import React from 'react';
import Touchme, { Husain } from './Touchme';
export default function App() {
  const styles = { color: 'white', backgroundColor: 'black', marginLeft: '100px', };
  let firstName='abc';
  function App(){
    const [firstName,setFirstName]= useState("abc");
  }
  const handleClick = () => {
    firstName = 'xyz';
    console.log(firstName);

  }
  return (
    <div>
       
    </div>
  );
}