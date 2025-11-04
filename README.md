# RecipEase:
## Project Description:

RecipEase is a personalized recipe recommendation website for individuals with dietary restrictions, allergies, or food preferences. Users simply input their needs, and RecipEase returns a curated list of recipes tailored to their lifestyle. Each recipe includes:

- Ingredient list
- Preparation steps
- Step-by-step instructional videos (if available)

The goal is to make cooking safe, enjoyable, and stress-free— one plate at a time!

---

## Motivation:

Finding meals that align with allergies or dietary restrictions can be overwhelming. We've experienced the frustration of scrolling endlessly, checking ingredients, and still feeling unsure. RecipEase is built to take that stress away— helping users find meals that match their needs while offering peace of mind.

---

## Technologies & Tools:

| Tool         | Purpose                                                       |
|--------------|---------------------------------------------------------------|
| JavaScript   | Handle interactivity and user input                           |
| HTML5 & CSS3 | Build website structure and design                            |
| React.js     | Manage UI state, routing, and dynamic rendering               |
| Postman      | Test API endpoints and ensure smooth backend communication    |

---


## Planned Features:

- [x] Input form for dietary preferences
- [x] Render recipes with title, ingredients, instructions
- [x] Filter recipes based on user input
- [x] Embed instructional videos if available
- [x] Save favorite recipes using localStorage
- [x] Connect to API Spoonacular
- [x] Polish UI for mobile, accessibility, and usability

---

## Figma:
https://www.figma.com/design/XrG6Q5IUHZZ9C4puD7xpmK/RecipEase-UI?node-id=0-1&t=psd1WFFSgdRitMSl-0

---
## How to Run Locally:

## 1. Clone the GitHub repository:

Open a terminal (Command Prompt or PowerShell for Windows, Terminal app for macOS) and run:

  git clone https://github.com/ishratarshad/RecipEase.git
  
  cd RecipEase/client

## 2. Install Node.js and npm

Windows: Download and install from https://nodejs.org/en/download

macOS: Use the same link

Or, if you use Homebrew: brew install node

### To verify it is installed:
  
  node -v
  
  npm -v

## 3. Install project dependencies:
Make sure you are in the RecipEase folder

Run: cd client, then npm install

## 4. Create a .env file:

Make sure you are in the client folder now



This key allows the app to fetch recipes from Spoonacular.

## 6. Start the React app:

### Once the key is set up:

  Run: npm start
  
This will open the app in your browser at: http://localhost:3000

### If you get an error  “running scripts is disabled,” run this once in PowerShell (make sure you run Powershell as administrator):

  Set-ExecutionPolicy -Scope CurrentUser -ExecutionPolicy Bypass -Force
 
Then run:  npm start


