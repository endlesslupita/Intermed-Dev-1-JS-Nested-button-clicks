# Intermed-Dev-1-JS-Nested-button-clicks

**Assignment: Nested Button Clicks**

## Overview

In this assignment, you will develop a React component consisting of nested elements to demonstrate the concept of **Event Propagation** (commonly known as "Bubbling"). Your goal is to ensure that an interaction with an inner element does not inadvertently trigger the logic of its parent container.

> **Note:** While this assignment can be completed using Vite or Expo, the instructions below are specifically tailored for Vite.

---

## 🎯 Objective

- Understand the lifecycle of a DOM event and the bubbling phase.
- Implement the `event.stopPropagation()` method within a React functional component.
- Control UI feedback by isolating event handlers in nested JSX structures.

---

## 🛠 Assignment Details

### 1. Setup Your React Environment

We will use Vite for this project. Vite uses a modern development server that utilizes WebSockets (WS) to provide instant feedback as you code, similar to the "Fast Refresh" experience in CRA.

**Initialize the project:**
```bash
npm create vite@latest event-propagation-assignment -- --template react
```

**Navigate to the project folder:**
```bash
cd event-propagation-assignment
```

**Install Dependencies:**
```bash
npm install
```

**Launch the Development Server:**
```bash
npm run dev
```

> **Note:** Ensure you name your files with the `.jsx` extension to allow Vite to process the JavaScript XML correctly.

---

### 2. Create the NestedButtons Component

In the `src` directory, create a new file named `NestedButtons.jsx`.

**Design Requirements:**
- **Nested Structure:** Create an "Outer" container (like a `div` or a large button) and place an "Inner" button inside it.
- **Event Handlers:** Attach unique `onClick` handlers to both the inner and outer elements.
- **Feedback:** Use `alert()` or `console.log()` to display a message indicating which handler was fired.

---

### 3. Stopping Propagation

- **The Task:** Implement the `handleInnerClick` function.
- **The Logic:** Use the event object (often passed as `e`) to call the method that prevents the click event from "bubbling" up to the outer container.

---

### 4. Integration

Import the `NestedButtons` component into your main `App.jsx` file.

**Validation Tasks:**
- Click the **Outer** element: Verify only the outer message appears.
- Click the **Inner** button: Verify that only the inner message appears and the outer one is successfully blocked.

---

## 📚 Relevant Study Material & Exercises

Review these resources on W3Schools to master the mechanics of event handling:

| Topic | W3Schools Link | Key Concept |
|-------|---------------|-------------|
| React Events | [React Events Tutorial](https://www.w3schools.com/react/react_events.asp) | Handling user interactions in React. |
| JS Propagation | [event.stopPropagation()](https://www.w3schools.com/jsref/event_stoppropagation.asp) | Preventing parent notification of events. |
| Event Quiz | [React Events Exercise](https://www.w3schools.com/react/exercise.asp?filename=exercise_events1) | Test your event handler syntax. |
| JS Bubbling | [Bubbling vs Capturing](https://www.w3schools.com/js/js_htmldom_eventlistener.asp) | Understanding how events move through the DOM. |

---

## 📬 Assignment Submission

Once you have completed the assignment, please prepare the following for submission:

### GitHub Repository
- Push your program to a new GitHub repository.
- Ensure that your repository is **public** so that it can be accessed and reviewed.
- Your repository should include all source code files and a `README.md` file that briefly describes the project and how to run it.

### Demonstration
Provide a video demonstrating your program in action. The demonstration should include:
- Show the program's functionality.
- Present test cases and demonstrate that you are passing those cases.
  - At least **3 normal test cases**
  - At least **3 edge case test cases**

### Submission
- Submit the link to your GitHub repository.
- Include a link to your video demonstration (YouTube link — public or unlisted).
