import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function Card() {


  const[notes,addNotes]=useState([]);

  
  //calling this addNote from CreateArea as it is same
  function addNote(newNote){
    //adding it into array of objeccts
    addNotes((prevValue)=>{
      return [...prevValue,newNote]
    })
  }

  function handleDelete(id){
    addNotes((prevValue)=>{
      return prevValue.filter((value,idx)=>{
        return idx!=id
      })
    })
  }

  return (
    <div>
      <Header />
      <CreateArea  onAdd={addNote}/>
      {/* //iterate through notes and print it */}
      {notes.map((value,idx)=>{
        return <Note
        title={value.title}
        content={value.content}
        key={idx}
        id={idx}
        delete={handleDelete}
        />
      })}
      <Footer />
    </div>
  );
}

export default Card;
