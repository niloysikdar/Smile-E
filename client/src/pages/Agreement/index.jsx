import { useState } from "react";
import { useDropzone } from "react-dropzone";
import { Link } from "react-router-dom";

import { AuthorizeDocusign, sendEnvelope } from "../../api";
import { getBase64 } from "./convertToBase64";
import "./agreement.scss";

const INTEGRATION_KEY = process.env.REACT_APP_INTEGRATION_KEY;
const linkurl = `https://account-d.docusign.com/oauth/auth?response_type=code&scope=signature&client_id=${INTEGRATION_KEY}&redirect_uri=http://localhost/`;

const Agreement = () => {
  const [uriCode, setUriCode] = useState("");

  const [docName, setDocName] = useState("");
  const [emailSubject, setEmailSubject] = useState("");
  const [signerEmail, setSignerEmail] = useState("");
  const [signerName, setSignerName] = useState("");

  const isUserLoggedIn = localStorage.getItem("isLoggedIn");
  // const isUserLoggedIn = false;

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
      sendEnvelope(
        result,
        "pdf",
        docName,
        emailSubject,
        signerEmail,
        signerName
      );
    });
  };

  const handleSignIn = (e) => {
    e.preventDefault();
    // const codeFromUrl = uriCode.split("=")[1];
    // console.log(codeFromUrl);
    // AuthorizeDocusign(codeFromUrl);
    localStorage.setItem("isLoggedIn", true);
    localStorage.setItem("access_token", process.env.REACT_APP_ACCESS_TOKEN);
    window.location.reload();
  };

  return (
    <div className="agreement">
      <h2>Agreement Portal using the DocuSign eSignature API</h2>
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
              {/* <p>
                Click the Authenticate button and paste the redirect url below
                and then press Sign In
              </p> */}
              <p>
                Click the Authenticate button to Authenticate with DocuSign
                Account
              </p>
              {/* <Link
                to={{ pathname: linkurl }}
                className="docusign-login"
                target="_blank"
              >
                Authenticate
              </Link> */}
              {/* <form onSubmit={handleSignIn}>
                <input
                  type="text"
                  required
                  placeholder="Redirect URI"
                  value={uriCode}
                  onChange={(e) => setUriCode(e.target.value)}
                />
                <button type="submit" className="docusign-login">
                  Sign In with DocuSign
                </button>
              </form> */}
              <button className="docusign-login" onClick={handleSignIn}>
                Sign In with DocuSign
              </button>
            </>
          ) : (
            <form onSubmit={handleSubmit}>
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
              <button type="submit">Send Email</button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default Agreement;
