# PWA-TextEditor

![License](https://img.shields.io/badge/license-MIT-green)

## Description

**Just Another Text Editor (JATE)** is a Progressive Web Application (PWA) designed for creating and storing notes or code snippets with or without an internet connection. This application leverages modern web technologies such as IndexedDB for data persistence, Webpack for module bundling, and Workbox for service worker management, ensuring a seamless offline experience. Users can install the application directly from their browser for a native-like experience.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Features](#features)
- [Technology Stack](#technology-stack)
- [License](#license)
- [Contributing](#contributing)
- [Questions](#questions)
- [Screenshots](#screenshots)

## Installation

To set up the development environment, follow these steps:

1. **Clone the repository**:
    ```bash
    git clone https://github.com/yourusername/jate.git
    cd jate
    ```

2. **Install dependencies**:
    ```bash
    npm install
    ```

3. **Build the application**:
    ```bash
    npm run build
    ```

4. **Start the development server**:
    ```bash
    npm start
    ```

This will start the application on `http://localhost:3000`.

## Usage

Once the application is up and running, you can:

1. **Create Notes**: Type your notes or code snippets in the text editor provided.
2. **Auto-save**: The content is automatically saved when you click outside the editor.
3. **Offline Access**: You can access and use the editor even without an internet connection.
4. **PWA Installation**: Click on the "Install" button to add the application to your desktop or mobile device.

### Running Locally

To run the application locally, make sure to follow the installation steps above. Then, you can access the application at `http://localhost:3000`.

### Deployment

This application is deployed on Render. You can access the live version at:

**[JATE Live Application](Coming Sonn!)**

## Features

- **Offline Access**: The application is fully functional offline, thanks to IndexedDB and service worker caching.
- **PWA Installation**: Users can install the app on their device directly from the browser.
- **Data Persistence**: Notes are saved in IndexedDB, ensuring they are preserved across sessions.
- **Webpack Bundling**: All JavaScript, CSS, and image assets are bundled with Webpack, optimizing performance.
- **Service Worker**: Managed with Workbox, providing offline capabilities and fast loading times.

## Technology Stack

- **Frontend**:
  - HTML5, CSS3
  - JavaScript (ES6+)
  - Webpack, Babel
  - IndexedDB, Workbox
  - CodeMirror (Text Editor)

- **Backend**:
  - Node.js, Express.js
  - Render (for deployment)

## License

This project is licensed under the MIT License. See the [LICENSE](./LICENSE) file for more information.

## Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](https://github.com/yourusername/jate/issues).

## Questions
If you have any questions, please feel free to contact me!
    . Github: ICONN21
    . Email: ian.connor0921@gmail.com

