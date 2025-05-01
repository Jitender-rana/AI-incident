# AI Safety Incident Dashboard

A lightweight web app to **create**, **filter**, and **sort** AI-related incidents based on severity and date.  
Built with **React**, **TypeScript**, **TailwindCSS**, and **SCSS Modules** for styling.

---

## 🚀 Features

- Create new incidents using a modal form.
- Filter incidents based on severity (Low, Medium, High).
- Sort incidents by newest or oldest report date.
- Modal prevents submission of empty title/description.
- Responsive and minimal UI with TailwindCSS and custom SCSS.

---

## 🛠️ Installation and Setup

1. **Clone the Repository**

```bash
git clone <your-repo-url>
cd <your-project-folder>
```

2. **Install Dependencies**

```bash
npm install
```

or if you're using Yarn:

```bash
yarn install
```

3. **Start the Development Server**

```bash
npm run dev
```

or

```bash
yarn dev
```

The app will be available at:

```
http://localhost:5173
```

---

## 🧩 Project Structure

| Folder | Purpose |
| :--- | :--- |
| `/components` | Reusable UI components like `Input`, `Button`, `IncidentCard`, `CreatecontentModal` |
| `/styles` | SCSS modules for modular styling |
| `/icons` | All SVG icons like `Plus`, `CrossIcon`, `Filter` |
| `/pages` | Main pages (`Incident.tsx` to display the dashboard) |
| `/types` | Common TypeScript types (optional) |

---

## ⚙️ How It Works

- The **Incident** page displays a list of incidents.
- The **Create Incident** button opens a modal to add a new incident.
- Title, description, and severity are mandatory to create an incident.
- Once submitted, the new incident appears immediately in the list.
- You can **filter** incidents by severity and **sort** them by newest/oldest.
- Form validation ensures that empty fields are not allowed.

---

## 📦 Built With

- React 18
- TypeScript
- SCSS Modules
- TailwindCSS
- Vite or Next.js (depending on your setup)

---

## 📄 Available Scripts

| Script | Purpose |
| :--- | :--- |
| `npm run dev` | Run the development server |
| `npm run build` | Build the app for production |
| `npm run preview` | Preview the production build |

---

## ✨ Future Improvements

- Add toast notifications (for success/error).
- Persist incidents using LocalStorage or backend database.
- Add mobile responsiveness improvements.
- Add delete and edit functionality for incidents.

---

## 🤝 Contribution

Pull requests are welcome! Feel free to open issues or suggest improvements.

---

## 📜 License

This project is licensed under the [MIT License](LICENSE).

---
