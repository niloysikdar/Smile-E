import axios from "axios";

const AuthorizeDocusign = async (codeFromUrl) => {
  const obj = {
    code: codeFromUrl,
    grant_type: "authorization_code",
  };

  const data = Object.keys(obj)
    .map((key, index) => `${key}=${encodeURIComponent(obj[key])}`)
    .join("&");

  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
      Accept: "*/*",
      Authorization: `Basic ${process.env.REACT_APP_ENCODED_KEYS}`,
    },
    data,
    url: "https://account-d.docusign.com/oauth/token",
  };

  const response = await axios(options);
  console.log(response);
};

const sendEnvelope = async (
  documentBase64,
  docName,
  emailSubject,
  signerEmail,
  signerName
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
  };

  const result = await axios.post("http://localhost:5000/create", data);
  console.log(result.data);
};

export { AuthorizeDocusign, sendEnvelope };
