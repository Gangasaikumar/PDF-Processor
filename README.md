<<<<<<< HEAD
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
=======
# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default tseslint.config({
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

- Replace `tseslint.configs.recommended` to `tseslint.configs.recommendedTypeChecked` or `tseslint.configs.strictTypeChecked`
- Optionally add `...tseslint.configs.stylisticTypeChecked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and update the config:

```js
// eslint.config.js
import react from 'eslint-plugin-react'

export default tseslint.config({
  // Set the react version
  settings: { react: { version: '18.3' } },
  plugins: {
    // Add the react plugin
    react,
  },
  rules: {
    // other rules...
    // Enable its recommended rules
    ...react.configs.recommended.rules,
    ...react.configs['jsx-runtime'].rules,
  },
})
```
>>>>>>> master
