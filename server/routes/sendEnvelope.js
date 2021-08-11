const express = require("express");
const axios = require("axios");
const router = express.Router();

const createUser = require("../controllers/createUser");

router.post("/", async (req, res) => {
  const {
    accountID,
    username,
    password,
    integratorKey,
    documentBase64,
    docName,
    emailSubject,
    signerEmail,
    signerName,
  } = req.body;

  axios({
    method: "post",
    url: `https://demo.docusign.net/restapi/v2/accounts/${accountID}/envelopes`,
    headers: {
      "X-DocuSign-Authentication": JSON.stringify({
        Username: username,
        Password: password,
        IntegratorKey: integratorKey,
      }),
      "Content-Type": "application/json",
    },
    data: {
      recipients: {
        signers: [
          {
            email: signerEmail,
            name: signerName,
            recipientId: 1,
          },
        ],
      },
      emailSubject: emailSubject,
      documents: [
        {
          documentId: "1",
          name: docName,
          documentBase64: documentBase64,
        },
      ],
      status: "sent",
    },
  })
    .then((result) => {
      console.log(result.data);
      createUser(signerName).then((val) => {
        if (val) {
          res.status(result.status).json(result.data);
        } else {
          console.log("Creating user error !");
        }
      });
    })
    .catch((error) => {
      console.log(error);
      res.status(409).json({
        message: error.message,
      });
    });
});

module.exports = router;
