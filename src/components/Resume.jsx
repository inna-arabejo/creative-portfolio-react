import React from "react";
import resume from '../images/inna-resume.pdf'
import { Document, Page, pdfjs } from 'react-pdf'
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`

function Resume() {
  return(
    <div className='res'>
      <h2 className='heading'>Resume</h2>
      <Document
      file={resume}
      onLoadError={console.error}
      style={{ width: '100vw', height: 'auto'}}
      >
        <Page pageIndex={0}/>
      </Document>
    </div>
  )
}

export default Resume;