# CineBook - Movie Ticket Booking

I am learning **React** by building a movie ticket booking website called **CineBook**.

The goal is to make a real app step by step: navbar, pages, movie list, seats, and booking. I type the code myself so I understand each piece.

## What this app will do

Users will be able to:

- Browse movies on the Home page
- Read about the site on the About page
- Reach out on the Contact page
- Later: pick a movie, choose seats, and book tickets

## Current progress

**Step 1 - Navbar (done)**

- Logo: **CineBook**
- Links: **Home**, **About**, **Contact**
- Styled with a dark bar and yellow hover color

The links do not change pages yet. That is the next step.

## What I have learned in React

### Components

A component is a function that returns UI. `NavBar` is one piece of the page. `App` is the main component that puts pieces together.

### JSX

The HTML-looking code inside `return (...)` is JSX. React turns it into real elements in the browser.

### `className` instead of `class`

In JSX you write `className="navbar"` because `class` already belongs to JavaScript.

### Import and export

- `export default NavBar` shares the component from its file
- `App.tsx` imports it and renders `<NavBar />`

### Parent and child

`App` is the parent. `NavBar` is the child. Later, Home / About / Contact pages will also be children of `App`.

### Fragments

`<>...</>` wraps elements without adding an extra HTML tag.

### CSS with a component

`import './NavBar.css'` loads styles for the navbar. `display: flex` puts the logo on the left and the links on the right.

### File names must match exactly

The file is `NavBar.tsx`. The import must be `'./components/NavBar'`, and the tag must be `<NavBar />`.

`Navbar` and `NavBar` are different to TypeScript. That mismatch caused an error even though Windows still found the file.

### Semantic HTML still matters

- `<nav>` means this is navigation
- `<ul>` / `<li>` is a list of links
- `<a href="#home">` is a link (pages come next)

## Project files so far

```
src/
  App.tsx                 → main app, renders the navbar
  components/
    NavBar.tsx            → navbar component
    NavBar.css            → navbar styles
  main.tsx                → starts React and mounts App
```

## How to run

```bash
npm install
npm run dev
```

Then open the local URL (usually `http://localhost:5173`).

## Next learning steps

1. Home, About, and Contact pages
2. Clicking navbar links to switch pages
3. A movie list on Home
4. Seat selection
5. Booking a ticket

## Stack

- React 19
- TypeScript
- Vite
