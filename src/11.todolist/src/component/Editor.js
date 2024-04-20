import { useState, useRef } from 'react';
import './Editor.css';

const Editor = (props) => {
  const [content, setContent] = useState("");
  const contentRef = useRef();

  return (
    <div className="Editor">
      <input value={content} ref={contentRef} onChange={(e)=>{setContent(e.target.value)}} placeholder="TodoList 추가" />
      <button onClick={()=>{ 
        if(content == "") {
          contentRef.current.focus();
          return;
        }
        props.onCreate(content)
        setContent("")
        }}>추가</button>
    </div>
  )
}

export default Editor;