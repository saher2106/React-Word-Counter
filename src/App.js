import './App.css';
import {useState,useRef} from 'react';

function App(props) {
  const textAreaRef = useRef();
  const [wordCount,setWordCount] = useState(0);

  const countWords = (e) => {
    const text = textAreaRef.current.value;
    setWordCount(text.split(" ").length);
  }

  return (
    <>
    <div className='box'>
    <center>
      <br />
      <h1>Responsive Paragraph Word Counter</h1>
      <br /><br /><br />
      <textarea id='cnt' rows='8' cols='40' placeholder='Write a paragraph' ref={textAreaRef} onChange={countWords}></textarea>
      <br /><br />
      <h2>Word Count : {wordCount}</h2>
      <br /><br />
    </center>
    </div>
    </>
  );
}

export default App;

