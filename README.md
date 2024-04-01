# Automated Discord Box Opener Script

This repository contains a JavaScript script designed to automate clicking actions within a web page. Specifically, it targets a button responsible for "opening a box" and simulates clicks at the center of the viewport before triggering the box opening. This script is particularly useful for interacting with web applications that require frequent manual input.

## Features

- **Simulate Mouse Events**: Generates mouse events (`mousedown`, `mouseup`, `click`) to simulate user interactions more realistically.
- **Center Clicking**: Identifies and clicks an element at the center of the viewport.
- **Automated Box Opening**: Searches for a button with a class containing "shinyButton_" and simulates a click event on it.
- **Periodic Execution**: Automatically initiates the box opening sequence every 5050 milliseconds.

## How to Use

### Running the Script in Chrome ( Usage Tutoriol: 

1. **Open your target web page (discord.com and come to lootbox page)** in Google Chrome where you wish to automate clicks.

2. **Open the Chrome Developer Tools** by right-clicking on the page and selecting `Inspect`, or by pressing `Ctrl+Shift+I` (`Cmd+Option+I` on macOS).

3. **Navigate to the Console tab** to access the JavaScript console.

4. **Copy the JavaScript code** provided in this repository.

5. **Paste the code into the console** at the bottom where it says `>`.

6. **Press Enter** to run the script. The script will immediately start executing, simulating clicks according to the defined logic.

### Stopping the Script

To stop the script from running, you can reload the web page or use the `clearInterval` function with the identifier returned by `setInterval`. If you did not capture the identifier, reloading the page is the simplest way to stop the script.

## Customization

Feel free to adjust the script according to your needs. For instance, you might want to change the class name used to find the button, modify the delay between actions, or customize the sequence of simulated mouse events.

## Disclaimer

This script is provided for educational purposes. Please use it responsibly and ensure that your actions comply with the terms of service of the web application you are interacting with.
