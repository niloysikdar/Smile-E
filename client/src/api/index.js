import axios from "axios";

const sendEnvelope = async (
  documentBase64,
  docName,
  emailSubject,
  signerEmail,
  signerName,
  role
) => {
  const data = {
    accountID: process.env.REACT_APP_ACCOUNT_ID,
    username: localStorage.getItem("username"),
    password: localStorage.getItem("password"),
    integratorKey: process.env.REACT_APP_INTEGRATION_KEY,
    documentBase64: documentBase64,
    docName: docName,
    emailSubject: emailSubject,
    signerEmail: signerEmail,
    signerName: signerName,
    role: role,
  };

  const result = await axios.post("http://localhost:5000/create", data);
  return result;
};

export { sendEnvelope };
