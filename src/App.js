import React,{useRef,useState,useEffect} from 'react';
import './App.css';
import uploadfile from './services/api';

function App() {
  
  const [selectedFile, setSelectedFile] = useState(null);
  const [response, setResponse] = useState('');
  const fileInputRef = useRef();
  const onUploadClick = () => {
    fileInputRef.current.click();
  }
  useEffect(() => {
    const getImage= async()=>{
      if(selectedFile)
      {
        const data = new FormData();
        data.append('name',selectedFile.name)
        data.append('file',selectedFile);
        let response = await uploadfile(data);
        setResponse(response.path);
      }
      
    }
    getImage();
  },[selectedFile]);

  console.log(selectedFile);
  return (
    <div className="App">
      
      <div className= "container">
       
       <h1>Share Fast</h1>
       <h2>Upload & Share Download Link with Password</h2>
       <button className="btn" onClick={onUploadClick}>Upload File</button>
       <input type="file" id="file" style={{ display: "none" }} ref={fileInputRef} onChange={(e)=>setSelectedFile(e.target.files[0])}/>
       <a href={response} target='_blank' >{response}</a>
       </div>
      
      </div>
   
  );
}

export default App;
