
# React Counter App 🚀

A simple Counter Application built using React.js and the `useState` Hook. This project demonstrates state management, component communication using props, and event handling in React.

## 📌 Features

- Increment Counter (+)
- Decrement Counter (-)
- Reset Counter (0)
- Real-time UI updates using React State
- Component-based architecture
- Props used to pass data and functions between components

## 🛠️ Technologies Used

- React.js
- JavaScript (ES6+)
- JSX
- CSS

## 📂 Project Structure

```
src/
│
├── App.jsx
├── App.css
│
├── Increment.jsx
├── Decrement.jsx
├── Reset.jsx
│
└── main.jsx
```
SCREENSHOT
<img width="1920" height="1080" alt="image" src="https://github.com/user-attachments/assets/d0f2c233-9b14-4571-bf23-55afde2b9f30" />

## 📖 How It Works

The application uses React's `useState` Hook to store and update the counter value.

```jsx
const [count, setCount] = useState(0);
```

### Increment Component

Increases the counter value by 1.

```jsx
setCount(count + 1);
```

### Decrement Component

Decreases the counter value by 1.

```jsx
setCount(count - 1);
```

### Reset Component

Resets the counter value back to 0.

```jsx
setCount(0);
```

## 🎯 Concepts Practiced

- React Functional Components
- useState Hook
- Props
- Event Handling
- State Management
- Component Reusability

## 🚀 Installation

1. Clone the repository

```bash
git clone https://github.com/your-username/react-counter-app.git
```

2. Navigate to project folder

```bash
cd react-counter-app
```

3. Install dependencies

```bash
npm install
```

4. Start the development server

```bash
npm run dev
```

## 📸 Output

- Initial Counter Value: **0**
- Click **Increment** → Counter increases.
- Click **Decrement** → Counter decreases.
- Click **Reset** → Counter returns to **0**.

## 📚 Learning Outcome

This project helped me understand:

- How React State works
- Why `useState` is important
- Passing data through Props
- Updating UI dynamically
- Component-based development in React

## 👨‍💻 Author

**Chandana BM**

Aspiring React & JavaScript Developer 🚀

---

⭐ If you like this project, give it a star on GitHub!
