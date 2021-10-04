<!-- PROJECT LOGO -->
<br />
<p align="center">
    <img src="https://bit.ly/3or4eng" alt="Logo" width="75%">

  <h1 align="center">Smile-E</h1>

  <h3 align="center">
    A one-stop solution for an easy, digital, and trusted flow of agreement for NGOs using eSignature
    <br />
    <br />
    <a href="https://github.com/niloysikdar/Smile-E">View Demo</a>
    ·
    <a href="https://github.com/niloysikdar/Smile-E/issues">Report Bug</a>
    ·
    <a href="https://github.com/niloysikdar/Smile-E/issues">Request Feature</a>
  </h3>
</p>

<!-- TABLE OF CONTENTS -->
<details open="open">
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->

## About The Project

### A one-stop solution for an easy, digital, and trusted flow of agreement for NGOs using eSignature.

### Also it has a dedicated Dashboard section to showcase the NGOs’ past works for easy fundraising.

### Built With

- [React](https://reactjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Node.js](https://nodejs.org/en/)
- [JavaScript](https://www.javascript.com/)
- [MongoDB](https://www.mongodb.com/)
- [Express.js](https://expressjs.com/)
- [Sass](https://sass-lang.com/)
- [DocuSign](https://developers.docusign.com/)

<!-- GETTING STARTED -->

## Getting Started

To get a local copy up and running follow these simple steps.

### Prerequisites

**_We strictly use [yarn](https://yarnpkg.com/) for managing the packages/dependencies of the React app. You need to install [yarn](https://yarnpkg.com/) to successfully run this project locally._**

- npm

  ```sh
  npm install npm@latest -g
  ```

- yarn
  ```sh
  npm install -g yarn
  ```

### Installation

1.  Fork the project first

2.  Clone the forked repo
    ```sh
    git clone https://github.com/your_name/Smile-E.git
    ```
3.  Go to `server` directory, create a `.env` file and install the packages using

    ```sh
    CONNECTION_URL = "MongoDB URL"
    ```

    ```sh
    cd server
    npm install
    ```

    Run the `server` locally using

    ```sh
    npm start
    ```

4.  Go to `client` directory, create a `.env` file

    ```sh
    REACT_APP_INTEGRATION_KEY = "DocuSign Integration Key"
    REACT_APP_ACCOUNT_ID = "DocuSign Account Id"
    REACT_APP_ADMIN_USERNAME  = "DocuSign Account Username"
    REACT_APP_ADMIN_PASSWORD = "DocuSign Account Password"
    ```

    Install the packages using

    ```sh
    yarn
    ```

    or

    ```sh
    yarn install
    ```

5.  Run the app in the development mode using

    ```sh
    yarn start
    ```

    Open [http://localhost:3000](http://localhost:3000) to view it in the browser.
    The page will reload if you make edits.\
     You will also see any lint errors in the console.

<!-- ROADMAP -->

## Roadmap

See the [open issues](https://github.com/niloysikdar/Smile-E/issues) for a list of proposed features (and known issues). Feel free to raise new issues.

<!-- CONTRIBUTING -->

## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch ( `git checkout -b feature/AmazingFeature` )
3. Add your Changes ( `git add .` )
4. Commit your Changes ( `git commit -m 'Add some AmazingFeature'` )
5. Push to the Branch ( `git push origin feature/AmazingFeature` )
6. Open a Pull Request

<!-- LICENSE -->

## License

Distributed under the **BSD 3-Clause License**. See [`LICENSE`](https://github.com/niloysikdar/Smile-E/blob/main/LICENSE) for more information.
