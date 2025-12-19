# 📝 Todo-List with TanStack Query

A clean and modern **Todo Management Application** built with **React**, **Vite**, **Tailwind CSS**, **Ant Design**, and **TanStack Query**. The app works with a real REST API and supports full CRUD operations, image uploads, filtering, and detailed views.

---

## 🚀 Tech Stack

* **React** – UI library
* **Vite** – Fast build tool
* **Tailwind CSS** – Styling
* **Ant Design** – Modals, inputs, checkboxes
* **TanStack Query (React Query)** – Server state management
* **React Router** – Navigation

---

## ✨ Features

### ✅ Todos

* Fetch todos from API
* Create a new todo (with image)
* Edit todo (name, description, status)
* Delete todo
* Toggle active / inactive status
* Upload multiple images
* Delete images
* Search todos by name
* Filter todos by status (all / active / inactive)
* View detailed todo page

### 📂 Categories

* Fetch categories
* Add category
* Edit category
* Delete category
* Category details page

---

## 📁 Project Structure

```bash
src/
├── pages/
│   ├── home.jsx
│   ├── todos.jsx
│   ├── infoTodos.jsx
│   ├── category.jsx
│   └── infoCategory.jsx
│
├── services/
│   ├── todos.js
│   └── category.js
│
├── layout.jsx
├── App.jsx
├── main.jsx
├── index.css
```

---

## 🔗 API Used

```
https://to-dos-api.softclub.tj/api/to-dos
https://to-dos-api.softclub.tj/api/categories
```

Images:

```
https://to-dos-api.softclub.tj/images/{imageName}
```

---

## ⚙️ Installation & Run

```bash
npm install
npm run dev
```

The app will start at:

```
http://localhost:5173
```

---

## 🧠 State Management

Server state is fully handled by **TanStack Query**:

* `useQuery` for fetching data
* `useMutation` for add / edit / delete
* `invalidateQueries` for auto refetch

This keeps the app fast, clean, and predictable.

---

## 🎨 UI & UX

* Responsive layout
* Modern cards and grids
* Clean spacing and typography
* Smooth hover & transition effects
* User-friendly modals

