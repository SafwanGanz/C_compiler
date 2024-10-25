# C/C++ Code Compiler

Welcome to the **C/C++ Code Compiler** project! This compiler allows you to run C/C++ code seamlessly in your environment. Below are the instructions for installation on both Android (using Termux) and Windows.

## Table of Contents
- [Installation on Android (Termux)](#installation-on-android-termux)
- [Installation on Windows](#installation-on-windows)
- [Usage](#usage)

---

## Installation on Android (Termux)

Follow these steps to set up the compiler on your Android device using Termux:

1. **Install Termux**  
   Download and install [Termux](https://f-droid.org/en/packages/com.termux/) from the F-Droid repository.

2. **Open Termux**  
   Launch the Termux app.

3. **Update and Upgrade Packages**  
   Run the following commands to update and upgrade existing packages:
   ```bash
   pkg update && pkg upgrade

4. **Install Git**  
   Run the following command to install git
   ```bash
   pkg install git
   
5. **Clone the repository**
   Clone the C/C++ compiler repository:
   ```bash
   git clone https://github.com/SafwanGanz/C_compiler.git

6. **Navigate to the Project Directory**
   Change to the project directory:
   ```bash
   cd C_compiler
   
7. **Npm (Node package Manager) Install**  
   Install the necessary Node.js packages:
   ```bash
   npm install

8. **Start The Server**
   After installing Dependencies:
   ```bash
   npm start
