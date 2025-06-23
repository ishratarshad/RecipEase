# RecipEase

## Team Members
- Ishrat Arshad
- Shithila Urshi
- Bonnie Lei
- Angela Yu

---

## Project Description

RecipEase is a personalized recipe recommendation website for individuals with dietary restrictions, allergies, or food preferences. Users simply input their needs, and RecipEase returns a curated list of recipes tailored to their lifestyle. Each recipe includes:

- Ingredient list
- Preparation steps
- Step-by-step instructional videos (if available)

The goal is to make cooking safe, enjoyable, and stress-free — one plate at a time.

---

## Motivation

Finding meals that align with allergies or dietary restrictions can be overwhelming. We've experienced the frustration of scrolling endlessly, checking ingredients, and still feeling unsure. RecipEase is built to take that stress away — helping users find meals that match their needs while offering peace of mind.

---

## Technologies & Tools

| Tool         | Purpose                                                       |
|--------------|---------------------------------------------------------------|
| JavaScript   | Handle interactivity and user input                           |
| HTML5 & CSS3 | Build website structure and design                            |
| React.js     | Manage UI state, routing, and dynamic rendering               |
| Postman      | Test API endpoints and ensure smooth backend communication    |

---

## Timeline

| Week | Milestone                                  |
|------|---------------------------------------------|
| 1    | Team formed                                 |
| 2    | Project idea and proposal completed         |
| 3    | HTML/CSS frontend layout                    |
| 4    | JavaScript and DOM functionality            |
| 5    | Add videos, filters, polish UI              |
| 6    | Debugging and testing                       |
| 7    | Final presentation                          |

---

## Planned Features

- [x] Input form for dietary preferences
- [x] Render recipes with title, ingredients, instructions
- [ ] Filter recipes based on user input
- [ ] Embed instructional videos if available
- [ ] Save favorite recipes using localStorage
- [ ] Connect to a real recipe API (e.g., Spoonacular)
- [ ] Polish UI for mobile, accessibility, and usability

---

## 1. Clone the GitHub repository
Open a terminal (Command Prompt or PowerShell for Windows, Terminal app for macOS):
  git clone https://github.com/ishratarshad/RecipEase.git
  cd RecipEase/client

## 2. Install Node.js and npm
Windows: Download and install from https://nodejs.org/en/download
macOS: Use the same link, or if they use Homebrew:
  brew install node

## To verify it installed:
  node -v
  npm -v

## 3. Install project dependencies
Inside the client folder:
  npm install

## 4. Create a .env file
## Still in the client folder:
  echo REACT_APP_SPOONACULAR_KEY=1cce3f15d36641499cad99a0741a462f > .env

## macOS:
echo "REACT_APP_SPOONACULAR_KEY=1cce3f15d36641499cad99a0741a462f" > .env
## This key allows the app to fetch recipes from Spoonacular.

## 6. Start the React app

## Once the key is set up:
  npm start
## This will open the app in your browser at:
http://localhost:3000

## Optional: If You Have Issues Running npm start on Windows
## If you get an error like “running scripts is disabled,” run this once in PowerShell as admin:
  Set-ExecutionPolicy -Scope CurrentUser -ExecutionPolicy Bypass -Force
## Then try:
  npm start

