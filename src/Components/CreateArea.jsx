import React, { useState } from "react";

function CreateArea(props) {

  //get input changes
  const [note,setNote]=useState({
    title:"",
    content:""
  })


  function handleContent(event){
    //value has inp value name has identifier
    const{name,value}=event.target
    setNote((prevValue)=>{
      //used spread to save both title and content
      return{ ...prevValue,
        //name attribute of the input field is "title", then [name]: value is equivalent to "title": value. If name is "content", then [name]: value is equivalent to "content": value.
        [name]:value
      }
    })
  }

  function handleSubmitNote(event){
    //calling addNote and sending note to Card to add
    event.preventDefault();
    props.onAdd(note);
    //clear note input
    setNote({
      title:"",
      content:""
    })
    
    
  }


  return (
    <div>
      <form>
        <input onChange={handleContent}value={note.title} name="title" placeholder="Title" />
        <textarea onChange={handleContent}value={note.content} name="content" placeholder="Take a note..." rows="3" />
        <button onClick={handleSubmitNote}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
