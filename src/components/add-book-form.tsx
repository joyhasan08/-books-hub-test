"use client"

import { useState } from "react"
import { useBookStore } from "@/lib/store"

export default function AddBookForm({ onClose }: { onClose: () => void }) {
  const [title, setTitle] = useState("")
  const [author, setAuthor] = useState("")
  const [genre, setGenre] = useState("")
  const { addBook } = useBookStore()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (title && author && genre) {
      addBook({ id: Date.now().toString(), title, author, genre })
      onClose()
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4 bg-white p-4 rounded-lg shadow mt-4">
      <div className="space-y-2">
        <label htmlFor="title" className="block text-sm font-medium text-black">
          Title
        </label>
        <input
          id="title"
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
          className="w-full px-3 py-2 border rounded-md text-black "
          placeholder="Enter the title of the book"
        />
      </div>
      <div className="space-y-2">
        <label htmlFor="author" className="block text-sm font-medium  text-black ">
          Author
        </label>
        <input
          id="author"
          type="text"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          required
          className="w-full px-3 py-2 border rounded-md text-black "
          placeholder="Enter the name of the author"
        />
      </div>
      <div className="space-y-2">
        <label htmlFor="genre" className="block text-sm font-medium text-black">
          Genre
        </label>
        <select
          id="genre"
          value={genre}
          onChange={(e) => setGenre(e.target.value)}
          required
          className="w-full px-3 py-2 border rounded-md text-black"
        >
          <option value="">Select a genre</option>
          <option value="fiction">Fiction</option>
          <option value="non-fiction">Non-Fiction</option>
          <option value="mystery">Mystery</option>
          <option value="sci-fi">Science Fiction</option>
          <option value="fantasy">Fantasy</option>
        </select>
      </div>
      <div className="flex justify-end gap-2">
        <button
          type="button"
          onClick={onClose}
          className="px-4 py-2 text-gray-700 bg-gray-200 rounded-md hover:bg-gray-300"
        >
          Cancel
        </button>
        <button type="submit" className="px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600">
          Add Book
        </button>
      </div>
    </form>
  )
}

