import { enqueueSnackbar } from 'notistack';
import { useRef, useState } from 'react';
import './style.css'

export default function UploadInput() {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const handleFileSelect = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files && event.target.files[0];
    setSelectedFile(file)

    if (file?.type !== 'text/csv') {
      enqueueSnackbar('Only csv file accepted', {
        preventDuplicate: true,
        variant: 'warning'
      })
      return;
    }
    console.log('oi')


  };

  return (
    <>
      <div className="content-file container">
        <input
          type="file"
          accept=".csv"
          ref={fileInputRef}
          style={{ display: 'none' }}
          onChange={handleFileUpload}
        />
        <button className="buttonFile" onClick={handleFileSelect}>
          {selectedFile ? selectedFile.name : 'Select CSV File'}</button>

        <button
          onClick={() => handleFileUpload}
          disabled={!selectedFile}
          className="send-button">Upload File</button>
      </div>
    </>
  );
}
