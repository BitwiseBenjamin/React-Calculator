# React Calculator App

## Project Overview

The React Calculator App is a simple calculator application built using React. It provides basic mathematical calculations and keeps a history of previous equations. The app includes error checking for input equations, removing extra operators, and validating equation correctness.

<img width="1030" alt="Screenshot 2023-06-11 at 2 37 24 PM" src="https://github.com/BitwiseBenjamin/React-Calculator/assets/114360780/62aef5ae-d111-44d2-88c6-a0332783eace">

## Installation

1. Ensure that you have Node.js and npm installed on your system.
2. Clone the repository or download the project files.
3. Open a terminal in the project directory.
4. Run the following command to install the dependencies: npm install

Once the dependencies are installed, start the application by running: npm start

This will launch the app in your default browser.

## Usage

Pressing buttons adds numbers and operators to the display. Then when pressing equals the displayed equation is evaluated and added to the history.

<img width="1021" alt="Screenshot 2023-06-11 at 2 40 54 PM" src="https://github.com/BitwiseBenjamin/React-Calculator/assets/114360780/7571595f-1a7a-48d8-b1c8-b0dc673b1746">


Pressing AC will clear the entire equation and pressing back will just clear the last character entered.

Hovering over the calculator title transforms it and changes its color, providing a visual feedback to the user.

<img width="1011" alt="Screenshot 2023-06-11 at 2 41 37 PM" src="https://github.com/BitwiseBenjamin/React-Calculator/assets/114360780/fd04dbf2-2ea4-4b6c-952f-fe97e2e6214b">


Hovering over the history section removes the numbers from the calculator using JQuery.

<img width="1026" alt="Screenshot 2023-06-11 at 2 42 26 PM" src="https://github.com/BitwiseBenjamin/React-Calculator/assets/114360780/36ee909b-1daf-41c7-a60b-256c4d5b0c1e">


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
<img width="394" alt="Screenshot 2023-06-11 at 2 43 28 PM" src="https://github.com/BitwiseBenjamin/React-Calculator/assets/114360780/c575f293-00a0-4586-b28b-5cfadf72ab51">

Redux
<img width="358" alt="Screenshot 2023-06-11 at 2 44 20 PM" src="https://github.com/BitwiseBenjamin/React-Calculator/assets/114360780/39649832-65c3-4ec9-a884-29da74061ed3">

Bootstrap
<img width="413" alt="Screenshot 2023-06-11 at 2 45 08 PM" src="https://github.com/BitwiseBenjamin/React-Calculator/assets/114360780/8c60df8a-62e6-4fdd-ade5-fed01f4b7af3">

jQuery
<img width="330" alt="Screenshot 2023-06-11 at 2 46 33 PM" src="https://github.com/BitwiseBenjamin/React-Calculator/assets/114360780/d0d426b8-954e-42a4-aa38-f8c6ff6c5554">

Sass
<img width="178" alt="Screenshot 2023-06-11 at 2 47 39 PM" src="https://github.com/BitwiseBenjamin/React-Calculator/assets/114360780/9fd31f5c-85b8-4e2b-a2d2-c0d6284988cf">


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
