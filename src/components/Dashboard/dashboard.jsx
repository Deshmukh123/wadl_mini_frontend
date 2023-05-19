
// import React from 'react';

// const FileUpload = () => {
//   const handleUpload = async (event) => {
//     event.preventDefault();

//     const file = event.target.file.files[0];

//     if (file) {
//       try {
//         const formData = new FormData();
//         formData.append('file', file);

//         formData.append('parents', '1_5DZBMUohhSgv6YGdb7wLDTFzDkDhrKn');

//         const response = await fetch('https://www.googleapis.com/upload/drive/v3/files?uploadType=multipart', {
//           method: 'POST',
//           headers: {
//             append:('Access-Control-Allow-Origin', 'http://localhost:3000'),
//             append: ('Access-Control-Allow-Credentials', 'true')
//           //   Authorization: '',

//           },
//           body: formData,
//         });

//         if (response.ok) {
//           console.log('File uploaded successfully.');
//         } else {
//           console.error('Error uploading file:', response.statusText);
//         }
//       } catch (error) {
//         console.error('Error uploading file:', error);
//       }
//     } else {
//       console.log('No file selected.');
//     }
//   };

//   return (
//     <div>
//       <form onSubmit={handleUpload}>
//         <input type="file" name="file" />
//         <button type="submit">Upload</button>
//       </form>
//     </div>
//   );
// };

// export default FileUpload;


import React from "react";
import history from "../history";
// import Home from "./pages/Home";


// import Header from "../Header/Header";
import { Container, Row, Col } from "reactstrap";




// import "./notes.css";
const SE_URL = 'https://drive.google.com/drive/folders/1UCRwu-13aKUkmVzzDmP1CV8L5ZrzxGGl'
const OS_URL = 'https://drive.google.com/drive/folders/1pfbc6lawhZZnwAIwUetg8Cfe2WN9ntqN'
const CG_URL = 'https://drive.google.com/drive/folders/1_5DZBMUohhSgv6YGdb7wLDTFzDkDhrKn'
const PA_URL = 'https://drive.google.com/drive/folders/1IxDWaatUorSTNqzgv3yh2K5Yp0TX0Z'
const HTML_URL = 'https://drive.google.com/drive/folders/1ueix-sicE1D-eFzuketOZ07Z7l1K'
const DBMS_URL = 'https://drive.google.com/drive/folders/1LjgOTuI750QCTbyzu0wN3c2YNkFc2Z'





const Notes = () => {
  const back = (url) =>{

  }
  const downloadFileAtURL = (url) =>{
    const filename = url.split('/').pop();
    const aTag = document.createElement('a');
    aTag.href=url;
    aTag.setAttribute('download',filename);
    document.body.appendChild(aTag);
    aTag.click();
    aTag.remove();
  };
  return (
    <section>
      {/* <Header/> */}
      <Container>
        <Row>
            <div className="main">
            <buttonGroup>
                {/* <div className="btn1">
                  <button onClick={(event)=>{downloadFileAtURL(ADBMS_URL)}} class="button button1"> Download ADBMS Notes </button>
                </div>    */}
                <div className="btn1">
                    <button onClick={(event)=>{downloadFileAtURL(SE_URL)}} class="button button2">Upload Your SE Notes here   <i class="ri-upload-cloud-2-fill"></i> </button>
                  
                </div>
               <br></br> <div className="btn1">

                <button onClick={(event)=>{downloadFileAtURL(OS_URL)}} class="button button3">Upload your  OS Notes here <i class="ri-upload-cloud-2-line"></i></button>
                </div>
                <br></br><div className="btn1">

                <button onClick={(event)=>{downloadFileAtURL(DBMS_URL)}} class="button button4">  Upload your  DBMS Notes here </button> 
                </div>
                <br></br><div className="btn1">

                <button onClick={(event)=>{downloadFileAtURL(CG_URL)}} class="button button5">Upload Your CG Notes here</button>
                </div>
                <br></br><div className="btn1">

                <button onClick={(event)=>{downloadFileAtURL(PA_URL)}} class="button button6">Upload  your PA Notes here</button>
                </div>
                <br></br><div className="btn1">

                <button onClick={(event)=>{downloadFileAtURL(HTML_URL)}} class="button button7">Upload your HTML Notes here</button>
                </div>
                {/* <button onClick={(event)=>{downloadFileAtURL(CG_URL)}} class="button button5">Download CG Notes</button>&nbsp;&nbsp;&nbsp;
                <button onClick={(event)=>{downloadFileAtURL(PA_URL)}} class="button button6">Download PA Notes</button>&nbsp;&nbsp;&nbsp;
                <button onClick={(event)=>{downloadFileAtURL(HTML_URL)}} class="button button7">Download HTML Notes</button>&nbsp;&nbsp;&nbsp;&nbsp;
                <button onClick={(event)=>{downloadFileAtURL(CG_URL)}} class="button button5">Download CG Notes</button>&nbsp;&nbsp;&nbsp;
                <button onClick={(event)=>{downloadFileAtURL(PA_URL)}} class="button button6">Download PA Notes</button>&nbsp;&nbsp;&nbsp; */}
                {/* <button onClick={()=>{history.push('./App.js')}} class="button button6">LOGOUT</button>&nbsp;&nbsp;&nbsp; */}

              </buttonGroup>
            </div>  
            <div class="sub"></div>
        </Row>
      </Container>
    </section>
    
  );
};

export default Notes;
