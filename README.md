# CineBook - Movie Ticket Booking

I am learning **React** by building a movie ticket booking website called **CineBook**.

The goal is to make a real app step by step: navbar, footer, movie cards, pages, seats, and booking. I type the code myself so I understand each piece.

## What this app will do

Users will be able to:

- Browse movies on the Home page
- Read about the site on the About page
- Reach out on the Contact page
- Later: pick a movie, choose seats, and book tickets

## Current progress

**Navbar (done)**

- Logo: **CineBook**
- Links: **Home**, **About**, **Contact**

**Footer (done)**

- Logo, links, and copyright text

**Movie cards (done)**

- 4 movie cards shown with `.map()`
- Each card shows: name, rating, genre, and actors
- Data comes from a `movies` array in `App.tsx`
- `MovieCard` receives that data through **props**

Still to do: real page navigation, `useState`, seat selection, booking.

## Topics I have learned (checklist)

| Topic | What it means | Where I used it |
|-------|---------------|-----------------|
| **Component** | A function that returns UI | `NavBar`, `Footer`, `MovieCard`, `App` |
| **JSX** | HTML-like code inside React | every component `return` |
| **Props** | Data sent from parent → child | `App` sends movie data into `MovieCard` |
| **Array** | A list of values in `[ ]` | `movies` array, `actors` array |
| **Object** | One item with fields like `name`, `rating` | each movie inside the array |
| **List + `.map()`** | Loop an array and show UI for each item | 4 movie cards from `movies.map(...)` |
| **`key`** | Unique id for each list item | `key={movie.id}` |
| **`.join()`** | Turn an array into one string | `actors.join(', ')` |
| **Import / export** | Share code between files | `export default` + `import` |
| **Parent / child** | One component renders another | `App` → `NavBar`, `MovieCard`, `Footer` |
| **Fragment `<>`** | Wrapper with no extra HTML tag | around navbar + main + footer |
| **`className`** | CSS class name in JSX | `className="movie-card"` |
| **TypeScript type** | Describe the shape of props | `MovieCardProps` |
| **CSS per component** | Styles next to the component | `NavBar.css`, `Footer.css`, `MovieCard.css` |
| **Git / GitHub** | Save and upload code | commit, push, `pull --rebase` |

Not learned yet: **`useState`**, **hooks**, page routing.

## What I have learned in React (details)

### 1. Components

A component is a function that returns UI. I built:

- `NavBar` — top navigation
- `Footer` — bottom section
- `MovieCard` — one reusable movie card
- `App` — parent that puts everything together

### 2. JSX

The HTML-looking code inside `return (...)` is JSX. React turns it into real elements in the browser.

### 3. `className` instead of `class`

In JSX you write `className="navbar"` because `class` already belongs to JavaScript.

### 4. Import and export

- `export default MovieCard` shares the component from its file
- `App.tsx` imports components and renders them like `<NavBar />`, `<MovieCard />`, `<Footer />`

### 5. Parent and child

`App` is the parent. `NavBar`, `MovieCard`, and `Footer` are children.

### 6. Fragments

`<>...</>` wraps elements without adding an extra HTML tag.

### 7. CSS with a component

Each component can have its own CSS file, for example:

- `import './NavBar.css'`
- `import './Footer.css'`
- `import './MovieCard.css'`

### 8. File names must match exactly

The file is `NavBar.tsx`. The import must be `'./components/NavBar'`, and the tag must be `<NavBar />`.

`Navbar` and `NavBar` are different to TypeScript.

### 9. Props

Props are data passed from parent to child.

Example:

```tsx
<MovieCard
  name={movie.name}
  rating={movie.rating}
  gender={movie.gender}
  actors={movie.actors}
/>
```

Inside `MovieCard`, I read them as `props.name`, `props.rating`, and so on.

I also learned to define a TypeScript type for props (`MovieCardProps`) so each prop has a clear type.

### 10. Array

An **array** holds many items in order, written with `[ ]`.

I used two kinds:

- `movies` — array of movie objects (4 movies)
- `actors` — array of strings, like `["Christian Bale", "Heath Ledger"]`

### 11. Object

Each movie is an **object** with fields:

```tsx
{
  id: 1,
  name: "The Dark Knight",
  rating: 9.0,
  gender: "Action",
  actors: ["Christian Bale", "Heath Ledger", "Aaron Eckhart"],
}
```

### 12. List and `.map()`

To show many cards, I loop the array with `.map()` and return one component per item:

```tsx
{movies.map((movie) => (
  <MovieCard key={movie.id} ... />
))}
```

- `movies` = the full array
- `movie` = one item in that loop

### 13. `key` in lists

React needs a unique `key` for each item in a list, like `key={movie.id}`.

### 14. `.join()`

Actors are a string array. `.join(', ')` turns them into readable text:

`"Christian Bale, Heath Ledger, Aaron Eckhart"`

### 15. Semantic HTML

- `<nav>` means navigation
- `<footer>` means the page footer
- `<main>` means the main content
- `<ul>` / `<li>` is a list of links

## Mistakes I fixed (important learning)

### 1. `movie` vs `movies` inside `.map()`

Inside `.map((movie) => ...)`, I must use **`movie`** (one item), not **`movies`** (the whole array).

Using `movies.actors` made `actors` become `undefined`, then `.join()` crashed and the page went blank.

### 2. Empty file on disk

If `MovieCard.tsx` is open in the editor but not saved, the real file can be **0 bytes**. Vite loads the empty file, the import fails, and the page goes blank. Always **save** (`Ctrl + S`).

### 3. Import casing

`Navbar` and `NavBar` look the same on Windows, but TypeScript treats them as different names.

## Git and GitHub (what I learned)

- `git init`, `git add .`, `git commit`, `git push` to upload code
- If push is rejected because GitHub has commits I do not have locally, run:

```bash
git pull --rebase origin main
git push
```

That means: take GitHub changes first, put my commits on top, then push.

## Project files so far

```
src/
  App.tsx                 → main app, movies array, maps cards
  App.css                 → main section / grid layout
  main.tsx                → starts React and mounts App
  components/
    NavBar.tsx            → navbar component
    NavBar.css            → navbar styles
    Footer.tsx            → footer component
    Footer.css            → footer styles
    MovieCard.tsx         → one movie card (props)
    MovieCard.css         → movie card styles
```

## How to run

```bash
npm install
npm run dev
```

Then open the local URL (usually `http://localhost:5173`).

## Next learning steps

1. `useState` hook (store movies in state)
2. Home, About, and Contact pages
3. Clicking navbar links to switch pages
4. Seat selection
5. Booking a ticket

## Stack

- React 19
- TypeScript
- Vite
