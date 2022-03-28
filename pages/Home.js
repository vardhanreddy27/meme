import React, { useState } from 'react';
import Image from 'next/image'

var body = null;

function Home() {
  const [inputValue, setInputValue] = React.useState("Edit text 1");
  const [inputValue1, setInputValue1] = React.useState("Edit text 2");

  const onChangeHandler = event => {
    setInputValue(event.target.value);
  };const onChangeHandler1 = event => {
    setInputValue1(event.target.value);
  };
  return (
    <div className='container p-5'> <div className="row align-items-center">
    <div className="col">
    <Image
      src="/no.jpg"
      alt="Picture of the 1st meme"
      width={500}
      height={300}
    />   </div>
   
    <div className="col">
    <Image
      src="/yes.jpg"
      alt="Picture of the 2nd meme"
      width={500}
      height={300}
    />  </div>
  </div>
  <div id="mydiv">
  <div id="mydivheader" ><h3>{inputValue}</h3></div> 
</div>
<div id="mydiv1">
  <div id="mydivheader1" ><h3>{inputValue1}</h3></div> 
</div>



<div className='row'> <div className='col text-center'><input
        type="text" className='mt-5'
        name="name"
        onChange={onChangeHandler}
        placeholder={inputValue}
      /></div><div className='col text-center'><input
      type="text" className='mt-5'
      name="name"
      onChange={onChangeHandler1}
      placeholder={inputValue1}
    /></div>
</div>

</div>
  )
}


if (typeof document !== 'undefined') {
  body = document.getElementsByTagName("body")[0];

dragElement(document.getElementById("mydiv"));

function dragElement(elmnt) {
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  if (document.getElementById(elmnt.id + "header")) {
    document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
  } else {
    elmnt.onmousedown = dragMouseDown;
  }

  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
    elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
  }

  function closeDragElement() {
    document.onmouseup = null;
    document.onmousemove = null;
  }
}}
if (typeof document !== 'undefined') {
  body = document.getElementsByTagName("body")[0];

dragElement(document.getElementById("mydiv1"));

function dragElement(elmnt) {
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  if (document.getElementById(elmnt.id + "header")) {
    document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
  } else {
    elmnt.onmousedown = dragMouseDown;
  }

  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
    elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
  }

  function closeDragElement() {
    document.onmouseup = null;
    document.onmousemove = null;
  }
}}

export default Home