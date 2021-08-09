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
  fileExtension,
  docName,
  emailSubject,
  signerEmail,
  signerName
) => {
  const data = {
    documents: [
      {
        documentBase64: documentBase64,
        documentId: 1234,
        fileExtension: fileExtension,
        name: docName,
      },
    ],
    emailSubject: emailSubject,
    recipients: {
      signers: [
        {
          email: signerEmail,
          name: signerName,
          recipientId: "1234",
        },
      ],
    },
    status: "sent",
  };

  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "*/*",
      Authorization: `Bearer ${process.env.REACT_APP_ACCESS_TOKEN}`,
    },
    data,
    url: `https://demo.docusign.net/restapi/v2.1/accounts/${process.env.REACT_APP_ACCOUNT_ID}/envelopes`,
  };

  const response = await axios(options);
  console.log(response);
};

export { AuthorizeDocusign, sendEnvelope };
