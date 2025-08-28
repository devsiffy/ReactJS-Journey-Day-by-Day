<h2>⚛️ React JS – A Daily Learning Journey 🚀</h2>

<h3>📅 Day 01</h3>

> _"The beginning is the most important part of the work."_

1.  **React App Setup**

    - Traditional setup using `create-react-app` (CRA)
    - Modern setup using `Vite` for faster builds
      <br />

2.  **Project Structure Essentials**

    - `node_modules` — why it's important but excluded from Git
    - `.gitignore` — managing untracked files like dependencies

---

<h3>📅 Day 02</h3>

> _"Don’t just use React — understand how it works."_

1.  **React App Setup Methods**

    - Create React App (CRA)
    - Vite Setup
      <br />

2.  **Core React & Project Structure**

    - JSX & Components
    - Virtual DOM - basics overview
    - Fragments
    - Rendering Flow (index.html → JSX)
    - Using CSS in React
      <br />

3.  **React Behavior & Limitations**

    - Single Page Application (SPA)
    - Mounting & Rendering
    - SEO Challenges
    - Server Side Rendering (SSR)
      <br />

4.  **Tools & Terminology**

    - Babel, Webpack, ESBuild
    - react-scripts, ReactDOM, CSR vs SSR

---

<h3>📅 Day 03</h3>

> _"To truly understand a tool, build a simpler version of it yourself."_

1.  **custom-react-app**

    - Understanding how React works
    - Creating our own render system (`customRender`)
    - Understanding our custom React element
      <br />

2.  **vite-react-app**

    - How JSX really works (behind the scenes)
    - What does `React.createElement()` do?
    - What is `React.render()` or `createRoot().render()`?
    - Why JSX allows only expressions (not if/else or loops)
      <br />

3.  **vite-react-app-2**

    - Discovering Hooks in React
    - Why were Hooks introduced?
    - What problems do Hooks solve?
    - How does `useState` work?
    - What makes React more powerful than classical JavaScript?

---

<h3>📅 Day 04</h3>

> _"React updates like magic — only where it matters, only when it matters."_

1. **Virtual DOM**

   - What is Virtual DOM?
   - Diffing and Updating the Real DOM
   - Limitations of Virtual DOM  
     <br />

2. **Fiber Architecture**

   - Why React Introduced Fiber
   - How Fiber Works (Fiber Tree, Linked List)
   - Benefits Over Virtual DOM
   - Supports Concurrent Features  
     <br />

3. **Reconciliation (Diffing)**

   - What is Reconciliation?
   - How React Finds Differences
   - Handling Lists with Keys
   - Fiber’s Role in Reconciliation

---

<h3>📅 Day 05</h3>

> _"Learning to write programs stretches your mind, and helps you think better."_

1. **Tailwind CSS Setup with Vite**

   - Integrating Tailwind with React via Vite
   - Docs Link: https://v3.tailwindcss.com/docs/guides/vite
     <br />

2. **Understanding Props in React**

   - Passing data from parent to child
   - Using props in functional components
   - Sending multiple values via a single prop
     <br />

3. **Understanding State Batching in Counter Component**
   - Updating state multiple times correctly
   - Differences between direct updates vs. functional updates

---

<h3>📅 Day 06</h3>

> _"Every project starts with ‘Hello World’ and ends with ‘Why isn’t this working?!’"_

1. **Background Changer App**
   - A simple React project built with `Vite` and styled using `Tailwind CSS`.
   - It lets users change the background color by clicking on color buttons.

---

<h3>📅 Day 07</h3>

> _"Build tools that save time and create delight—one line of code at a time."_

1. **Password Generator Project**

   - useState
   - useEffect
   - useRef
   - useCallback
   - Component Structure
     <br />

2. **Currency Converter Project**
   - useState
   - useEffect
   - useId
   - Custom Hook (Calling & Handling API)
   - Controlled Components
   - Reusable Components
   - Component Structure
   - Folder Structure

---

<h3>📅 Day 08</h3>

> _"Routing gives your React app a sense of structure and navigation—without the reloads."_

1. **React Router DOM**

   - Purpose and Benefits of Client-Side Routing
   - Creating a Multi-Page Feel in a Single-Page App
   - Installing `react-router-dom`
     <br />

2. **Creating Routes**

   - Approach 1: Route Array with `createBrowserRouter`
   - Approach 2: JSX-Based Routes with `createRoutesFromElements`
   - Using `<Route>` and `<RouterProvider>`  
     <br />

3. **Nested Routing & Layouts**

   - Creating a `Layout.jsx` Component
   - Using `<Outlet>` to Render Nested Pages
   - Shared Components like Header & Footer
   - Showing Loading State with `useNavigation()`  
     <br />

4. **Routing Tools**

   - Using `<Link>` for Basic Navigation
   - Styling Active Links with `<NavLink>` and Tailwind CSS
   - Creating Dynamic Paths using `:params`
   - Accessing URL Parameters with `useParams()`  
     <br />

5. **Data Loading with Loaders**

   - Fetching Data Before Page Render
   - Using `loader` Functions in Routes
   - Accessing Preloaded Data with `useLoaderData()`

---

<h3>📅 Day 09</h3>

> _"Every bug is a step closer to mastery."_

1. **Context API: Approach 1 (Basics)**

   - Share data between components without passing props
   - Setup context files inside src/context
   - Manage state and provide data using a context provider
   - Wrap components in the provider to access shared data
     <br />

2. **Context API: Approach 2 (Theme Switcher)**

   - Use context to manage light/dark theme globally
   - Create context and custom hook for theme control
   - Use a toggle button to switch themes
   - Apply theme styles using CSS classes (Tailwind CSS)
     <br />

3. **Context API: Todo App + LocalStorage**

   - Manage todo list data globally with context
   - Organize code with context and components
   - Use localStorage to save todos across sessions
   - Components update and display todos using shared context

---

<h3>📅 Day 10</h3>

> _"State is the heartbeat of your app — manage it well, and everything flows."_

1. **State Management Basics & History**

   - Purpose and importance of managing state
   - Why we need state management
   - Flux architecture and one-way data flow
   - Introduction and improvements of Redux
     <br />

2. **Redux Ecosystem**

   - Redux core concepts
   - React Redux integration (hooks like `useDispatch`, `useSelector`)
   - Redux Toolkit for simplified usage
     <br />

3. **Core Building Blocks**

   - Store, Reducers, and Slices
   - `configureStore` and `createSlice`
   - Reducer parameters: `state` and `action`
     <br />

4. **Supporting Utilities**

   - `Provider` component for store access
   - `nanoid` for generating unique IDs

---

<h3>📅 Day 11</h3>

> _"Now building a full-fledged Blog Website with backend & database support using ReactJS and Appwrite."_

1. **Starting Mega Project: Blog Website**

   - Introduction to Full-Stack Blog Application Development
   - Focus on ReactJS as the Frontend Framework
     <br />

2. **Backend-as-a-Service: Appwrite**

   - Handling Backend Functionality
   - Database Integration and Management
     <br />

3. **Other's Pre-requisites**

   - Using `TinyMCE` for Rich Text Editing in React
   - Implementing `html-react-parser` to Render Stored HTML Content
   - Using `React Hook Form` for Efficient Form Management
   - Managing Environment Variables

---

<h3>📅 Day 12</h3>

> _"Building smart means building for flexibility and future growth."_

1. **Creating Vite App & Appwrite Integration**

   - Creating vite app & setup tailwind css
   - Creaing appwrite account
   - Creating database and storage bucket
   - AuthService class for signup, login, logout, and user management
     <br />

2. **Environment & Configuration Setup**

   - Creating `.env` file for storing secrets (with `VITE_` prefix)
   - Setting up `config.js` to manage environment variables centrally
     <br />

3. **Package Installation**

   - `appwrite`, `react-router-dom`
   - `react-redux`, `@reduxjs/toolkit`, `react-hook-form`
   - `@tinymce/tinymce-react`, `html-react-parser`
     <br />

4. **Code Architecture Best Practices**
   - Concept of Vendor Lock-in
   - Using service classes to isolate backend logic and ensure flexibility

---

<h3>📅 Day 13</h3>

> _"Build the foundation well, and scaling becomes effortless."_

1. **Appwrite Service Class**

   - Continued backend integration using Appwrite
   - New file: `src/appwrite/utils.js`
   - Define and export a `Service` class instance
   - Initializes Appwrite client with core properties:
     - `databases`: handles blog post operations
     - `bucket`: handles file storage
       <br />

2. **Post Management (CRUD)**

   - Methods:
     - `createPost`
     - `updatePost`
     - `deletePost`
     - `getPost`
     - `getPosts`
   - Blog post fields: `title`, `slug`, `content`, `featuredImage`, `status`, `userId`
     <br />

3. **File Management**

   - Methods:
     - `uploadFile`
     - `deleteFile`
     - `getFilePreview`

---

<h3>📅 Day 14</h3>

> _"State management and clean component structure are keys to building scalable apps."_

1. **Redux Integration**

   - Setting up `store.js` with `configureStore`
   - Creating `authSlice` with `login` and `logout` reducers
   - Wrapping `App` with `Provider` for store access
     <br />

2. **Routing Setup**

   - Using `BrowserRouter` to enable routing
   - Navigating with `useNavigate`
   - Routing-aware components like `Link`
     <br />

3. **Component Architecture & Authentication Logic**

   - Reusable components: `Header`, `Footer`, `Container`, `Input`, `Button`, `LogoutBtn`, `Logo`
   - Barrel export using `index.js` for simplified imports
   - Login status check on app load using `useEffect` and `authService`
   - Conditional rendering based on authentication state
   - Logout functionality with Redux dispatch
