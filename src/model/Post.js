// src/model/Post.js

import mongoose from 'mongoose';

const PostSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    content: { type: String, required: true }, // HTML content from React-Quill
    slug: { type: String, required: true, unique: true }, // SEO-friendly slug
  },
  { timestamps: true } // auto adds createdAt, updatedAt
);

// Use existing model if already compiled (important during dev)
export default mongoose.models.Post || mongoose.model('Post', PostSchema);
