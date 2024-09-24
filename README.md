# Full Stack Database Application

This project is a full-stack web application built using JavaScript (React framework) on the frontend and MySQL for the backend database. It includes a complete CRUD system and demonstrates the integration of a MySQL database with a React-based UI. The application features React routing with Axios for API requests and offers functionality across all stages of development, from database setup to frontend interactions.

## Features
- **MySQL Integration**: Fully functional MySQL database with schema setup script included.
- **CRUD Operations**: Supports Create, Read, Update, and Delete operations.
- **React Frontend**: Built with React, using Axios for API requests and React Router for navigation.
- **API Communication**: Interfaces with backend APIs for dynamic data handling.
- **Custom SQL Setup**: Script included to build the database schema from scratch.

## Installation Guide

Follow the instructions below to set up and run the project locally.

### Prerequisites
- **Node.js**: Make sure Node.js is installed. You can download it from [here](https://nodejs.org/).
- **MySQL Server**: Install MySQL Server from [this link](https://dev.mysql.com/downloads/installer/). Ensure the username and password are both set to `admin`, and the SQL hostname is set to `localhost` (default settings).

### Steps to Set Up

1. **Navigate to the Project Directory**:
    Open a terminal and point it to the folder where the project is located. If you're not sure how to do this, use the following commands (run one at a time):
    ```bash
    cd %HOMEPATH%
    cd Downloads
    cd FEDatabase
    cd FEDatabase
    ```

2. **Download Node.js Installer**:
    Run the following command to download and install Node.js:
    ```bash
    powershell -NoExit -ExecutionPolicy Bypass -File install.ps1
    ```
    After running the command, close the current terminal.

3. **Install Node.js**:
    Locate and run the `node.msi` installer that was downloaded to install Node.js.

4. **Set Up MySQL**:
    - Install MySQL from the installer [here](https://dev.mysql.com/downloads/installer/).
    - During setup, set both the username and password to `admin`.
    - Ensure your MySQL hostname is `localhost` (this is default).
    - Do not modify the default port (3306).
    - Run the included `.sql` file to create the necessary tables.

5. **Verify Node.js Installation**:
    Open another terminal and point it to the root directory of the `FEDatabase` folder using the same commands as before. Then, check if Node.js is properly installed by running:
    ```bash
    npm -v
    ```
    If you see a version number, Node.js is installed. If there is an error, reinstall Node.js using the installer.

6. **Install Dependencies**:
    Run the following command to install all necessary dependencies for the project:
    ```bash
    powershell -NoExit -ExecutionPolicy Bypass -File installDependencies.ps1
    ```

7. **Start the Application**:
    In separate terminal windows, start the app and the Node server. These processes must run simultaneously:
    - In the first terminal window, run:
      ```bash
      powershell -NoExit -ExecutionPolicy Bypass -File startApp.ps1
      ```
    - In the second terminal window, run:
      ```bash
      powershell -NoExit -ExecutionPolicy Bypass -File startNode.ps1
      ```

8. **Run in Chromium Browsers**:
    - This app must be run in Chromium-based browsers (Google Chrome or Microsoft Edge) for best compatibility.
    - Open your browser and navigate to `http://localhost:3000`.

### MySQL Troubleshooting
- If you encounter an error regarding MySQL authentication, try running the following command:
    ```bash
    ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'password';
    ```
    Replace `'root'` with your MySQL username and `'password'` with your password.

## Project Overview
This project was developed as the final project for the CS 2300 Introduction to Database and Filesystems course. It covers all stages of development, from setting up the database to building a fully functional frontend interface. This project greatly improved my knowledge of full-stack development, API integration, and database management.
