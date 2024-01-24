import { enqueueSnackbar } from 'notistack';
import { useRef, useState } from 'react';
import './style.css'
import { sendFile } from '../../services/requests/sendFileRequest';

export default function UploadInput() {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const handleFileSelection = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(event.target.files?.[0])
    const file = event.target.files?.[0];
    setSelectedFile(file || null);
  };

  const handleFileSelect = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleFileUpload = async () => {

    if (selectedFile?.type !== 'text/csv') {
      enqueueSnackbar('Only csv file accepted', {
        preventDuplicate: true,
        variant: 'warning'
      })
      return;
    }
    const formData = new FormData();
    formData.append('file', selectedFile);

    const response = await sendFile(formData);

    if (response.status !== 500) {
      enqueueSnackbar('File uploaded', {
        preventDuplicate: true,
        variant: 'success'
      })
      setSelectedFile(null)
      return
    }
    enqueueSnackbar('An error occur', {
      preventDuplicate: true,
      variant: 'error'
    })
    setSelectedFile(null)

  };
  console.log("dd", selectedFile === null)
  return (
    <>
      <div className="content-file container">
        <input
          type="file"
          accept=".csv"
          ref={fileInputRef}
          style={{ display: 'none' }}
          onChange={handleFileSelection}
        />
        <button className="buttonFile" onClick={handleFileSelect}>
          {selectedFile ? selectedFile.name : 'Select CSV File'}</button>

        <button
          onClick={handleFileUpload}
          disabled={selectedFile === null}
          className="send-button">Upload File</button>
      </div>
    </>
  );
}
