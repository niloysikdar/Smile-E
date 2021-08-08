import axios from "axios";

const AuthorizeDocusign = async (codeFromUrl) => {
  const obj = {
    code: codeFromUrl,
    grant_type: "authorization_code",
  };

  const data = Object.keys(obj)
    .map((key, index) => `${key}=${encodeURIComponent(obj[key])}`)
    .join("&");

  console.log(process.env.REACT_APP_ENCODED_KEYS);

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

export { AuthorizeDocusign };
