"use client"

import { useState } from "react"
import { useBookStore } from "@/lib/store"
import { motion, AnimatePresence } from "framer-motion"

export default function BookList() {
  const { books, removeBook } = useBookStore()
  const [filter, setFilter] = useState("")
  const [sortBy, setSortBy] = useState("title")

  const filteredBooks = books
    .filter(
      (book) =>
        book.title.toLowerCase().includes(filter.toLowerCase()) ||
        book.author.toLowerCase().includes(filter.toLowerCase()) ||
        book.genre.toLowerCase().includes(filter.toLowerCase()),
    )
    .sort((a, b) => a[sortBy].localeCompare(b[sortBy]))

  return (
    <div className="space-y-4">
      <div className="flex flex-col md:flex-row gap-4 ">
        <input
          type="text"
          placeholder="Filter books..."
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          className="px-2 py-2 border rounded-md md:max-w-sm text-black"
        />
        <select
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
          className="px-2 py-2 border rounded-md md:w-[180px] text-black"
        >
          <option value="title">Title</option>
          <option value="author">Author</option>
          <option value="genre">Genre</option>
        </select>
      </div>
      <AnimatePresence>
       <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-4 min-w-max ">
       {filteredBooks.map((book) => (
          <motion.div
            key={book.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="bg-white p-4 rounded-lg shadow flex justify-between items-center min-w-max"
          >
            <div>
              <h3 className="font-semibold text-gray-900 text-xl py-2">{book.title}</h3>
              <p className="text-sm text-gray-600">by {book.author}</p>
              <p className="text-sm text-gray-600">Genre: {book.genre}</p>
            </div>
            <button
              onClick={() => removeBook(book.id)}
              className="px-4 py-2 text-white bg-red-500 rounded-md hover:bg-red-600"
            >
              Remove
            </button>
          </motion.div>
        ))}
       </div>
      </AnimatePresence>
    </div>
  )
}

