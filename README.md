# Coders Boutique - Job Listing App 💼

A modern, responsive job listing application built using **React.js** and **Bootstrap 5**. Users can search, filter, and view detailed job listings with smooth routing and clean UI.

---

## 🚀 Features

- 🔍 **Search Bar**  
  Search jobs by **job title** or **company name**  
  ➤ If the input is invalid, a message appears: _"Oops! We couldn't find any job listings that match your
  search. Try adjusting your filters or check back later for
  new opportunities!"_

- 🎯 **Filter by Job Type**  
  Select from dropdown: `All`, `Full-time`, `Part-time`, `Remote`, `Contract`

- 📦 **Job Cards**

  - Built with Bootstrap
  - Clicking a card opens detailed job page (using React Router)
  - Each card has an **Apply** button — it also opens the detailed page

- 🌐 **Routing with React Router**  
  Seamless navigation to job details page using dynamic route: `/jobs/:id`

- 📱 **Responsive UI**  
  Mobile-friendly layout using Bootstrap Grid and responsive components

- 🎨 **UI Enhancements**  
  Background image, transparent cards, hover effects, and icons (Bootstrap Icons)

---

## 🛠 Tech Stack

- ⚛️ React.js (Functional Components + Hooks)
- 📦 React Router DOM
- 🎨 Bootstrap 5 + Bootstrap Icons
- 🖼️ Custom CSS for styling
- 🔗 Deployed on Vercel (Live link below)

---

## 📂 Folder Structure

my-app/
├── public/
│ └── background.png
├── src/
│ ├── Components/
│ │ ├── Filter.js
│ │ ├── JobCard.js
│ │ ├── JobDetails.js
│ │ ├── JobListing.js
│ │ └── Buttons.js
│ ├── App.js
│ ├── App.css
│ └── index.js
├── package.json
└── README.md

## 🔗 Live Demo

[Click here to view live](https://job-listing-alpha-orpin.vercel.app/)
