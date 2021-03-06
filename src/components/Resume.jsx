import React from "react";
import resume from '../images/inna-resume.pdf'
import { Document, Page, pdfjs } from 'react-pdf'
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`

function Resume() {

  return(
    <div className='res' class="resume-pdf">
      <h1 className='resume-heading'>Resume</h1>
      <a href={resume} target="_blank" rel="noopener noreferrer" className="btn btn-info btn-lg resume-btn">Download</a>
      <Document
      file={resume}
      onLoadError={console.error}
      className='document'
      >
        <Page pageIndex={0}/>
      </Document>
    </div>
  )
}

export default Resume;