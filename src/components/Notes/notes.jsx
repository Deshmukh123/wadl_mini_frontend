import React from "react";
import history from "../history";
// import Home from "./pages/Home";


// import Header from "../Header/Header";
import { Container, Row, Col } from "reactstrap";




import "./notes.css";
const drive_URL ='https://drive.google.com/drive/folders/1oRxqhHaS6kgNw9fn-R8CDjkuUq7rHnRl'
const SE_URL = 'http://localhost:3000/SE.pdf'
const OS_URL = 'http://localhost:3000/OS.pdf'
const CG_URL = 'http://localhost:3000/CG.pdf'
const PA_URL = 'http://localhost:3000/PA.pdf'
const HTML_URL = 'http://localhost:3000/HTML.pdf'
const DBMS_URL = 'http://localhost:3000/DBMS.pdf'





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
                    <button onClick={(event)=>{downloadFileAtURL(SE_URL)}} class="button button2">Download SE Notes</button>
                </div>
               <br></br> <div className="btn1">

                <button onClick={(event)=>{downloadFileAtURL(OS_URL)}} class="button button3">Download OS Notes</button>
                </div>
                <br></br><div className="btn1">

                <button onClick={(event)=>{downloadFileAtURL(DBMS_URL)}} class="button button4"> Download DBMS Notes </button> 
                </div>
                <br></br><div className="btn1">

                <button onClick={(event)=>{downloadFileAtURL(CG_URL)}} class="button button5">Download CG Notes</button>
                </div>
                <br></br><div className="btn1">

                <button onClick={(event)=>{downloadFileAtURL(PA_URL)}} class="button button6">Download PA Notes</button>
                </div>
                <br></br><div className="btn1">

                </div>
                 <br></br><div className="btn10">
                  <button onClick={(event)=>{downloadFileAtURL(drive_URL)}} class="button button8">Download Notes from drive</button>
                  </div>
                  <br></br>&nbsp;&nbsp;&nbsp;
               {/* <button onClick={(event)=>{downloadFileAtURL(PA_URL)}} class="button button6">Download PA Notes</button>&nbsp;&nbsp;&nbsp;
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
