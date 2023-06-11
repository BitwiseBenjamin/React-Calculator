# React Calculator App

## Project Overview

The React Calculator App is a simple calculator application built using React. It provides basic mathematical calculations and keeps a history of previous equations. The app includes error checking for input equations, removing extra operators, and validating equation correctness.

## Installation

1. Ensure that you have Node.js and npm installed on your system.
2. Clone the repository or download the project files.
3. Open a terminal in the project directory.
4. Run the following command to install the dependencies: npm install

Once the dependencies are installed, start the application by running: npm start

This will launch the app in your default browser.

## Usage

Hovering over the calculator title transforms it and changes its color, providing a visual feedback to the user.

Hovering over the history section removes the numbers from the calculator, improving visibility and focus.

## Project Structure

The project structure is organized as follows:
markdown
Copy code
- src/
  - redux/
    - [Redux-related files]
  - components/
    - [Component files]
  - styles/
    - [Sass files]
  - index.js
- public/
  - index.html
  - manifest.json

The src/ directory contains the main source code of the application.
The src/redux/ directory contains the Redux-related files, including actions, reducers, and the store configuration.
The src/components/ directory holds the various components used in the application.
The src/styles/ directory contains the Sass files for styling the components.
The public/ directory contains the main HTML file index.html and the web app manifest file manifest.json.


## Technologies Used

React
Redux
Bootstrap
jQuery
Sass


## Key Dependencies

Here are the main dependencies used in this project:

{
  "dependencies": {
    "@reduxjs/toolkit": "^1.9.5",
    "bootstrap": "^5.3.0",
    "jquery": "^3.7.0",
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "react-redux": "^8.0.7",
    "web-vitals": "^2.1.4"
  }
}

## Contributing
Contributions to this project are currently not accepted. However, if you encounter any issues or have suggestions, feel free to create an issue in the project repository.

## License
This project is currently not licensed.
