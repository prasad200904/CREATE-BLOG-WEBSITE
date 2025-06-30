# 📝 Create Blog Website

A full-stack blog platform built with **Next.js 15**, **MongoDB Atlas**, and **Tailwind CSS** (optional), deployed on **Vercel**. Users can create, view, edit, and delete blog posts with authentication and admin access.

## 🚀 Live Demo

🔗 [Visit the Live Blog](https://create-blog-website.vercel.app/)

---

## 📁 Project Structure

src/
├── app/
│ ├── posts/ # All posts page + single post pages
│ ├── admin/ # Admin post create/edit
│ ├── login/ # Login route
│ ├── layout.js # Shared layout (Navbar, background image)
│ └── page.js # Homepage
├── components/
│ └── Navbar.jsx # Navigation bar
├── lib/
│ └── dbConnect.js # MongoDB connection logic
├── model/
│ └── Post.js # Mongoose schema for blog posts

yaml
Copy
Edit

---

## 🧠 Features

- 🔐 Token-based authentication
- 📄 Create, Edit, View, Delete blog posts
- 🖼️ Background image with overlay text on every page
- 🧾 Admin-only access to post management
- ☁️ MongoDB Atlas for database
- 🚀 Deployed on [Vercel](https://vercel.com)

---

## ⚙️ Setup Instructions

1. **Clone the repository**:

```bash
git clone https://github.com/prasad200904/CREATE-BLOG-WEBSITE.git
cd CREATE-BLOG-WEBSITE
Install dependencies:

bash
Copy
Edit
npm install
Create .env.local file:

env
Copy
Edit
MONGODB_URI=your_mongodb_atlas_connection_string
Run the dev server:

bash
Copy
Edit
npm run dev
Visit http://localhost:3000

📦 API Routes
Method	Endpoint	Description
GET	/api/posts/all	Get all blog posts
POST	/api/posts/create	Create a new post
DELETE	/api/posts/delete/:id	Delete a post
PUT	/api/posts/edit/:id	Edit a post

🛡️ Admin Access
Only authenticated users with a token authenticated (stored in cookies) can:

Create Post /admin/create

Edit Post /admin/edit/:slug

📸 Screenshot

🧑‍💻 Author
Name: V Durga Prasad

College: Potti Sriramulu College of Engineering and Technology

GitHub: @prasad200904

📜 License
This project is licensed for learning and internship purposes. Feel free to use and modify with attribution.

yaml
Copy
Edit

---

### ✅ How to Use This

1. Save the above content as a file named `README.md` in the **root** of your project.
2. Commit & push to GitHub:

```bash
git add README.md
git commit -m "Add project README"
git push origin main
