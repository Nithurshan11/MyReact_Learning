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
- `MovieCard` receives that data through **props**

**useState / hooks (done)**

- Movies are stored in **state** with `useState`
- Starting data lives in `initialMovies`
- **Clear movies** sets the list to `[]`
- **Reset movies** puts `initialMovies` back
- The page shows `Total movies: {movies.length}` and updates when state changes

**Book button (done)**

- Each `MovieCard` has a **BOOK Now** button
- Clicking it calls a function prop: `onBook`
- `App` stores the chosen title in `bookedMovie` state
- The page shows `you Booked: ...` after a click

**Pages + navbar navigation (done — learned today)**

- Page components: `Home`, `About`, `Contact`
- `App` keeps `page` state: `'home' | 'about' | 'contact'`
- Navbar uses `onNavigate` to change the page
- Movie list UI moved into `Home` (props from `App`)
- Booking state stays in `App`, so it survives page switches

Still to do: seat selection, full booking flow (and later real URL routing if needed).

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
| **TypeScript `type`** | Define what kind of data something should contain | `MovieCardProps`, `HomeProps`, `Movie` |
| **CSS per component** | Styles next to the component | `NavBar.css`, `Footer.css`, `MovieCard.css` |
| **Git / GitHub** | Save and upload code | commit, push, `pull --rebase` |
| **Hook** | Special React function that starts with `use` | `useState` |
| **`useState`** | Store data that can change and re-render the UI | `const [movies, setMovies] = useState(...)` |
| **State** | Current value React remembers | `movies` |
| **Setter** | Function that updates state | `setMovies([])` / `setMovies(initialMovies)` |
| **`onClick`** | Run a function when a button is clicked | Clear / Reset / BOOK Now |
| **Event handler** | Function tied to a user action | `handleClear`, `handleReset`, `handleBook` |
| **Callback prop** | Parent passes a function to the child | `onBook={handleBook}` |
| **Function prop type** | TypeScript type for a function prop | `onBook: (movieName: string) => void` |
| **Multiple state** | More than one `useState` in one component | `movies` + `bookedMovie` + `page` |
| **Conditional render** | Show UI only when a condition is true | `bookedMovie !== '' && (...)` / `page === 'home' && ...` |
| **Page components** | Separate screens of the app | `Home`, `About`, `Contact` |
| **Page state** | Remember which screen is active | `const [page, setPage] = useState('home')` |
| **`onNavigate`** | Callback to switch pages from navbar | `props.onNavigate('about')` |
| **`preventDefault`** | Stop the browser default link jump | `e.preventDefault()` on nav clicks |
| **Lift state up** | Keep shared data in the parent | movies + bookedMovie + page in `App` |
| **Props parameter** | Function must receive `props` to use them | `function NavBar(props: NavBarProps)` |

Not learned yet: React Router (URL routing), seat selection, full booking flow.

## What I have learned in React (details)

### 1. Components

A component is a function that returns UI. I built:

- `NavBar` — top navigation (switches pages)
- `Footer` — bottom section
- `MovieCard` — one reusable movie card
- `Home` — movie list page
- `About` — about page
- `Contact` — contact page
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

In TypeScript, `type` is used to define what kind of data something should contain.

Example:

```tsx
type MovieCardProps = {
  name: string;
  rating: number;
  actors: string[];
  gender: string;
  onBook: (movieName: string) => void;
};
```

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

### 16. Hooks and `useState`

A **hook** is a special React function. Names start with `use`.

I imported it like this:

```tsx
import { useState } from 'react';
```

Then inside `App`:

```tsx
const [movies, setMovies] = useState(initialMovies);
```

- `initialMovies` = starting data (normal array)
- `movies` = current state value (what the UI shows)
- `setMovies` = function to change that value

When I call `setMovies(...)`, React updates the data and **re-renders** the page.

### 17. Updating state with buttons

```tsx
function handleClear() {
  setMovies([]);
}

function handleReset() {
  setMovies(initialMovies);
}
```

```tsx
<button onClick={handleClear}>Clear Movies</button>
<button onClick={handleReset}>Reset Movies</button>
```

- **Clear** → empty array → 0 cards
- **Reset** → put the original 4 movies back
- `{movies.length}` updates automatically because it reads from state

### 18. Props vs state (simple rule)

- **Props** = data sent into a child (parent → child)
- **State** = data owned by a component that can change over time

`MovieCard` still uses **props**. `App` now owns the movie list as **state**.

### 19. Book button and callback props

The **BOOK Now** button is inside `MovieCard`, but the “which movie did I book?” memory lives in `App`.

So `App` passes a **function** as a prop:

```tsx
<MovieCard
  ...
  onBook={handleBook}
/>
```

Inside the card:

```tsx
<button onClick={() => props.onBook(props.name)}>
  BOOK Now
</button>
```

Flow:

1. User clicks **BOOK Now**
2. Child calls `props.onBook(props.name)`
3. Parent runs `handleBook(movieName)`
4. Parent updates state with `setBookedMovie(movieName)`
5. UI shows the booked movie message

This is called a **callback prop** — the child calls back to the parent.

### 20. Multiple pieces of state

One component can use `useState` more than once:

```tsx
const [movies, setMovies] = useState(initialMovies);
const [bookedMovie, setBookedMovie] = useState('');
```

- `movies` → list of cards
- `bookedMovie` → name of the movie the user booked

### 21. Conditional rendering

Show the booking message only after someone clicks Book:

```tsx
{bookedMovie !== '' && (
  <p>you Booked: {bookedMovie}</p>
)}
```

If `bookedMovie` is still `''`, nothing is shown.

### 22. Page components (learned today)

I created three page components:

- `Home` — movies, clear/reset, book message
- `About` — short text about CineBook
- `Contact` — email and phone

`App` decides which one to show.

### 23. Page state + switching screens

```tsx
const [page, setPage] = useState('home');

function handleNavigate(nextpage: string) {
  setPage(nextpage);
}
```

```tsx
{page === 'home' && <Home ... />}
{page === 'about' && <About />}
{page === 'contact' && <Contact />}
```

### 24. Navbar `onNavigate` + `preventDefault`

```tsx
<a
  href="#about"
  onClick={(e) => {
    e.preventDefault();
    props.onNavigate('about');
  }}
>
  About
</a>
```

- `onNavigate` is a callback prop (same idea as `onBook`)
- `e.preventDefault()` stops the `#about` link from jumping the page

### 25. Lift state up

Movies, booked movie, and current page live in `App`.

That way:

- switching Home → About → Home does not lose the booking
- `Home` only displays data; `App` owns the data

### 26. `type` must match how you use the data

In TypeScript, `type` is used to define what kind of data something should contain.

If `bookedMovie` is one movie name, type it as `string`, not `string[]`.  
Comparing `string[]` to `''` causes a TypeScript error.

## Mistakes I fixed (important learning)

### 1. `movie` vs `movies` inside `.map()`

Inside `.map((movie) => ...)`, I must use **`movie`** (one item), not **`movies`** (the whole array).

Using `movies.actors` made `actors` become `undefined`, then `.join()` crashed and the page went blank.

### 2. Empty file on disk

If `MovieCard.tsx` is open in the editor but not saved, the real file can be **0 bytes**. Vite loads the empty file, the import fails, and the page goes blank. Always **save** (`Ctrl + S`).

### 3. Import casing

`Navbar` and `NavBar` look the same on Windows, but TypeScript treats them as different names.

### 4. `props` not received (NavBar)

I defined `type NavBarProps`, but wrote `function NavBar()` with no parameter.

Then `props.onNavigate(...)` failed with **Cannot find name 'props'**.

Fix:

```tsx
function NavBar(props: NavBarProps) {
```

### 5. `string[]` vs `string`

I typed `bookedMovies: string[]` but compared it to `''`.

Arrays and strings have no overlap, so TypeScript error.

Fix: use `bookedMovie: string` for one movie name.

### 6. Missing `}` on a function

I forgot to close `handleNavigate` before `return`.

Then the `return` was inside `handleNavigate`, and `App` looked broken.

Every `function ... {` needs a matching `}` before the next function or `return`.

### 7. `onClick` needs `{ }` for multiple lines

Wrong:

```tsx
onClick={(e) =>
  e.preventDefault();
  props.onNavigate('about');
}
```

Right:

```tsx
onClick={(e) => {
  e.preventDefault();
  props.onNavigate('about');
}}
```

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
  App.tsx                 → page state + movies + bookedMovie; shows one page
  App.css                 → main section / grid / Clear-Reset buttons
  main.tsx                → starts React and mounts App
  components/
    NavBar.tsx            → navbar + onNavigate
    NavBar.css            → navbar styles
    Footer.tsx            → footer component
    Footer.css            → footer styles
    Home.tsx              → home page (movie list)
    About.tsx             → about page
    Contact.tsx           → contact page
    MovieCard.tsx         → movie card + BOOK Now (onBook callback)
    MovieCard.css         → movie card styles
```

## How to run

```bash
npm install
npm run dev
```

Then open the local URL (usually `http://localhost:5173`).

## Next learning steps

1. Seat selection
2. Booking a ticket (movie + seats summary)
3. Optional later: React Router for real URLs

## Stack

- React 19
- TypeScript
- Vite
