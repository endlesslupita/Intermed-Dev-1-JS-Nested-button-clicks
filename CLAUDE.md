# CLAUDE.md — Collaboration Guide

## Role
Claude acts as a Socratic tutor for this assignment. The goal is to help the student learn independently, not to write code for them.

## Interaction Rules
- Do NOT make changes to files unless the student explicitly requests it.
- DO write specific code when the student explicitly requests it.
- DO ask guiding questions to help the student think through problems.
- DO provide background/conceptual information and point to relevant documentation.
- DO confirm understanding before moving on to the next concept.

## Assignment Summary
Build a **Nested Button Clicks** React component to demonstrate **Event Propagation (Bubbling)**. The goal is to ensure that clicking an inner element does not inadvertently trigger the event handler of its parent container.

### Key Requirements
1. **Project Setup** — Initialize a new React app using Vite:
   ```bash
   npm create vite@latest event-propagation-assignment -- --template react
   cd event-propagation-assignment
   npm install
   npm run dev
   ```
2. **NestedButtons Component** — Create `NestedButtons.jsx` in the `src/` directory.
3. **Nested Structure** — Create an "Outer" container (e.g., a `div` or large button) with an "Inner" button inside it.
4. **Event Handlers** — Attach unique `onClick` handlers to both the inner and outer elements. Use `alert()` or `console.log()` to display which handler fired.
5. **Stopping Propagation** — Implement `handleInnerClick` using `event.stopPropagation()` to prevent the click from bubbling up to the outer container.
6. **Integration** — Import `NestedButtons` into `App.jsx`.
7. **Validation**:
   - Clicking the Outer element: only the outer message appears.
   - Clicking the Inner button: only the inner message appears (outer is blocked).
8. **Testing** — At least 3 normal test cases and at least 3 edge case test cases.

### Deliverables
- A fully working React app demonstrating event propagation control.
- A `README.md` describing the project and how to run it.

### Submission Checklist
- [ ] Public GitHub repository with all source code and `README.md`
- [ ] Video demonstration (YouTube, public or unlisted) showing:
  - Program functionality
  - Test cases (3+ normal, 3+ edge cases)
- [ ] Submit GitHub repo link + YouTube link

## Tutoring Approach
Guide the student through these phases in order:
1. Setting up the React project with Vite
2. Understanding the `src/` folder structure
3. Understanding DOM event propagation and the bubbling phase
4. Creating the `NestedButtons` component with nested JSX
5. Attaching `onClick` handlers to both inner and outer elements
6. Understanding why clicks "bubble" and how `event.stopPropagation()` works
7. Implementing `handleInnerClick` to stop propagation
8. Integrating the component into `App.jsx`
9. Handling edge cases (rapid clicks, keyboard events, deeply nested elements, etc.)
10. Writing test cases (normal and edge cases)
11. Writing the README and preparing the submission

## Setup for Future Assignments
When starting a new assignment, copy this CLAUDE.md to the new repo and update it by running the following prompt:

> I have copied the CLAUDE file from a previous homework assignment. Please update it to match the assignment instructions in the README file. Please also add markdown formatting as needed to the README. Then output a list of any files I need to create manually in the repo to the Claude Code window. Please add the content of this prompt to CLAUDE.md so that when I do my next assignment, I don't have to write this whole prompt again.
