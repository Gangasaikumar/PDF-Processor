import React, { useState } from 'react';
import { useDropzone } from 'react-dropzone';
import { PDFDocument } from 'pdf-lib';
import JSZip from 'jszip';
import { saveAs } from 'file-saver';

const PdfProcessor: React.FC = () => {
  const [pdfFiles, setPdfFiles] = useState<File[]>([]);
  const [isProcessing, setIsProcessing] = useState<boolean>(false);
  const [progress, setProgress] = useState<number>(0);
  const [fileName, setFileName] = useState<string>('output');

  const onDrop = (acceptedFiles: File[]) => {
    setPdfFiles([...pdfFiles, ...acceptedFiles]);
  };

  const removeFile = (index: number) => {
    setPdfFiles(pdfFiles.filter((_, i) => i !== index));
  };

  const clearAll = () => {
    setPdfFiles([]);
    setProgress(0);
    setIsProcessing(false);
    setFileName('output'); // Reset the file name to default
  };

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: '.pdf',
    multiple: true,
  });

  const mergePdfs = async () => {
    setIsProcessing(true);
    const mergedPdf = await PDFDocument.create();
    for (let i = 0; i < pdfFiles.length; i++) {
      const file = pdfFiles[i];
      const pdfBytes = await file.arrayBuffer();
      const pdf = await PDFDocument.load(pdfBytes);
      const copiedPages = await mergedPdf.copyPages(pdf, pdf.getPageIndices());
      copiedPages.forEach(page => mergedPdf.addPage(page));
      setProgress(Math.round(((i + 1) / pdfFiles.length) * 100));
    }
    const mergedPdfBytes = await mergedPdf.save();
    saveAs(new Blob([mergedPdfBytes]), `${fileName}.pdf`);
    clearAll();
  };

  const zipPdfs = async () => {
    setIsProcessing(true);
    const zip = new JSZip();
    for (let i = 0; i < pdfFiles.length; i++) {
      const file = pdfFiles[i];
      zip.file(`${i + 1}_${file.name}`, file);
      setProgress(Math.round(((i + 1) / pdfFiles.length) * 100));
    }
    const zipBlob = await zip.generateAsync({ type: 'blob' });
    saveAs(zipBlob, `${fileName}.zip`);
    clearAll();
  };

  return (
    <div>
      <div {...getRootProps({ className: 'dropzone' })}>
        <input {...getInputProps()} />
        <p>Drag & drop PDF files here, or click to select files</p>
      </div>

      <div className="file-grid">
        {pdfFiles.map((file, index) => (
          <div key={index} className="file-item">
            <span>{file.name}</span>
            <button onClick={() => removeFile(index)}>Remove</button>
          </div>
        ))}
      </div>

      {pdfFiles.length > 0 && (
        <div className="file-name-input">
          <label htmlFor="fileName">Save as:</label>
          <input
            type="text"
            id="fileName"
            value={fileName}
            onChange={(e) => setFileName(e.target.value)}
            placeholder="Enter file name"
          />
        </div>
      )}

      {pdfFiles.length > 0 && (
        <div className="actions">
          <button onClick={mergePdfs} disabled={isProcessing}>
            Merge PDFs
          </button>
          <button onClick={zipPdfs} disabled={isProcessing}>
            Zip PDFs
          </button>
        </div>
      )}

      {isProcessing && (
        <div className="progress-bar">
          <div className="progress" style={{ width: `${progress}%` }}></div>
        </div>
      )}
    </div>
  );
};

export default PdfProcessor;
