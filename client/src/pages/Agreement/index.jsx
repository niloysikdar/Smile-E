import { useState } from "react";
import { useDropzone } from "react-dropzone";
import swal from "sweetalert";

import { sendEnvelope } from "../../api";
import { getBase64 } from "./convertToBase64";
import "./agreement.scss";

const ADMIN_USERNAME = process.env.REACT_APP_ADMIN_USERNAME;
const ADMIN_PASSWORD = process.env.REACT_APP_ADMIN_PASSWORD;

const Agreement = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [docName, setDocName] = useState("");
  const [emailSubject, setEmailSubject] = useState("");
  const [signerEmail, setSignerEmail] = useState("");
  const [signerName, setSignerName] = useState("");

  const isUserLoggedIn = localStorage.getItem("isLoggedIn");
  // const isUserLoggedIn = true;

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
    console.log(docName, emailSubject, signerEmail, signerName);
    getBase64(acceptedFiles[0], (result) => {
      sendEnvelope(result, docName, emailSubject, signerEmail, signerName).then(
        (res) => {
          clearFields();
          if (res.status === 201) {
            swal("Success", "Agreement Sent Successfully !", "success");
          } else {
            swal("Error", "Failed to send the Agreement !", "error");
          }
        }
      );
    });
  };

  const handleSignIn = (e) => {
    e.preventDefault();
    if (username === ADMIN_USERNAME && password === ADMIN_PASSWORD) {
      localStorage.setItem("isLoggedIn", true);
      localStorage.setItem("username", username);
      localStorage.setItem("password", password);
      window.location.reload();
    } else {
      swal("Error", "Invalid Admin Username or Password !", "error");
    }
  };

  const clearFields = () => {
    setDocName("");
    setEmailSubject("");
    setSignerEmail("");
    setSignerName("");
  };

  return (
    <div className="agreement">
      <h2>E-Agreement Portal</h2>
      <div className="agreement-content">
        {isUserLoggedIn && (
          <section className="dropContainer">
            <div {...getRootProps({ className: "dropzone" })}>
              <input {...getInputProps()} />
              <p>
                Drag 'n' drop the agreement file here, or click to select the
                file
              </p>
              <em>(Only .pdf or .docx file will be accepted)</em>
            </div>
            <aside>
              <h4>Selected File :</h4>
              <ul>{files}</ul>
            </aside>
          </section>
        )}
        <div className="submit-form">
          {!isUserLoggedIn ? (
            <>
              <p>Authenticate with your Admin DocuSign Account</p>

              <form onSubmit={handleSignIn}>
                <label htmlFor="username">Admin Username</label>
                <input
                  type="email"
                  id="username"
                  required
                  placeholder="Admin Username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />

                <label htmlFor="password">Admin Password</label>
                <input
                  type="password"
                  id="password"
                  required
                  placeholder="Admin Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />

                <button type="submit" className="docusign-login">
                  Sign In with DocuSign
                </button>
              </form>
            </>
          ) : (
            <form onSubmit={handleSubmit}>
              <p>Agreement Details :</p>
              <label htmlFor="docname">Document Name</label>
              <input
                type="text"
                placeholder="Document Name"
                id="docname"
                required
                value={docName}
                onChange={(e) => setDocName(e.target.value)}
              />

              <label htmlFor="emailsubject">Email Subject</label>
              <textarea
                type="text"
                placeholder="Email Subject"
                id="emailsubject"
                required
                value={emailSubject}
                onChange={(e) => setEmailSubject(e.target.value)}
              />

              <label htmlFor="email">Signer Email</label>
              <input
                type="email"
                placeholder="Signer Email"
                id="email"
                required
                value={signerEmail}
                onChange={(e) => setSignerEmail(e.target.value)}
              />

              <label htmlFor="name">Signer Name</label>
              <input
                type="text"
                placeholder="Signer Name"
                id="name"
                required
                value={signerName}
                onChange={(e) => setSignerName(e.target.value)}
              />
              <button type="submit">Send Agreement</button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default Agreement;
