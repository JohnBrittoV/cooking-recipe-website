# Cooking Recipe Website
A modern recipe search application built with React, Vite, and Tailwind CSS. Users can search recipes, view detailed instructions, and manage favorites using local storage.

# Description
This project is a frontend application that demonstrates real-world React concepts such as component-based architecture, context API for state management, API integration, and responsive UI design.

Recipes are fetched dynamically from an external API and displayed in an intuitive and user-friendly interface.

# Live Demo
https://cooking-recipe-website-mu.vercel.app

# Features
Search recipes using ApI
Display recipes in a responsive grid
View detailed recipe information
Add/remove favorites
Store favorites using localStorage
Loading spinner for better UX
Fully responsive design

# Technology Used
React (Vite)
Tailwind CSS
Axios
React Context API
JavaScript (ES6+)

# Project Structure
```
src/
│
├── assets/               # Static files
│
├── components/           # Reusable UI components
│   ├── Banner.jsx
│   ├── Header.jsx
│   ├── Footer.jsx
│   └── Spinner.jsx
│
├── context/              # Global state management
│
├── pages/                # Page-level components
│   ├── Home.jsx
│   ├── SearchRecipe.jsx
│   ├── RecipeDetails.jsx
│   └── Favourites.jsx
│
├── App.jsx               # Main app component
├── main.jsx              # Entry point
└── index.css             # Global styles
```

# Installation
## Clone the repository
git clone https://github.com/JohnBrittoV/cooking-recipe-website.git

## Navigate to project
cd cooking-recipe-website

## Install dependencies
npm install

## Run project
npm run dev

# Usage 
Open the app in your browser
Search for recipes
Click on a recipe to view details
Add recipes to favorites
View saved recipes in the favorites page

# API Used
TheMealDB API
https://www.themealdb.com/

# Key Concepts Practiced
Component reusability
State management with Context API
API data fetching using Axios
Conditional rendering
Routing between pages

