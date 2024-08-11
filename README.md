# PDF Processor

A React-based web application that allows users to upload multiple PDF files, preview them, and perform operations such as merging them into a single PDF or zipping them into a single ZIP file. The application also includes features for specifying custom output file names, viewing upload progress, and managing files in a user-friendly interface.

## Features

- **Drag & Drop Upload:** Users can drag and drop PDF files or select them from their file system.
- **PDF Previews:** Preview uploaded PDF files directly in the browser before performing any operations.
- **Merge PDFs:** Merge multiple uploaded PDF files into a single PDF document.
- **Zip PDFs:** Zip multiple uploaded PDF files into a single ZIP file.
- **Custom File Naming:** Specify custom names for the merged PDF or the zipped file.
- **File Management:** Easily remove individual files from the upload list before processing.
- **Progress Tracking:** Real-time progress tracking for merging or zipping operations.
- **Clear All:** Automatically clear the file list after merging or zipping is complete.

## Tech Stack

- **React**: Frontend framework for building the user interface.
- **TypeScript**: Type-safe language for writing JavaScript code.
- **react-pdf**: Library for rendering PDFs in the browser.
- **pdf-lib**: Library for manipulating PDF documents.
- **JSZip**: Library for creating and managing ZIP files.
- **FileSaver.js**: Library for saving files on the client side.

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/pdf-processor.git
   cd pdf-processor
