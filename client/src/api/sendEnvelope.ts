import axios from 'axios';
import { BASEURL } from './baseURL';

export const sendEnvelope = async (
  documentBase64: string,
  docName: string,
  emailSubject: string,
  signerEmail: string,
  signerName: string,
  role: string,
) => {
  const data = {
    accountID: process.env.REACT_APP_ACCOUNT_ID,
    username: localStorage.getItem('username'),
    password: localStorage.getItem('password'),
    integratorKey: process.env.REACT_APP_INTEGRATION_KEY,
    documentBase64: documentBase64,
    docName: docName,
    emailSubject: emailSubject,
    signerEmail: signerEmail,
    signerName: signerName,
    role: role,
  };

  const result = await axios.post(`${BASEURL}/create`, data);
  return result;
};
