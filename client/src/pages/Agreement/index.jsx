import { useState } from "react";
import { useDropzone } from "react-dropzone";

import { getBase64 } from "./convertToBase64";
import "./agreement.scss";

const Agreement = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");

  const { acceptedFiles, getRootProps, getInputProps } = useDropzone({
    maxFiles: 1,
    accept: ".pdf, .docx",
  });

  const files = acceptedFiles.map((file) => (
    <li key={file.path}>
      {file.path} - {file.size} bytes
    </li>
  ));

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email, name);
    getBase64(acceptedFiles[0], (result) => {
      console.log(result);
    });
  };

  return (
    <div className="agreement">
      <h2>Agreement Portal using the DocuSign eSignature API</h2>
      <div className="agreement-content">
        <section className="dropContainer">
          <div {...getRootProps({ className: "dropzone" })}>
            <input {...getInputProps()} />
            <p>
              Drag 'n' drop the agreement file here, or click to select the file
            </p>
            <em>(Only .pdf and .docx files will be accepted)</em>
          </div>
          <aside>
            <h4>Selected File :</h4>
            <ul>{files}</ul>
          </aside>
        </section>
        <div className="submit-form">
          <form onSubmit={handleSubmit}>
            <label htmlFor="email">Signer Email</label>
            <input
              type="email"
              placeholder="Signer Email"
              id="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <label htmlFor="name">Signer Name</label>
            <input
              type="text"
              placeholder="Signer Name"
              id="name"
              required
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
            <button type="submit">Send Email</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Agreement;
