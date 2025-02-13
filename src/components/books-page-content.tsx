"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import dynamic from "next/dynamic"
import { useBookStore } from "@/lib/store"
import { ThemeToggle } from "@/components/theme-toggle"

const BookList = dynamic(() => import("@/components/book-list").then((mod) => mod.default), { ssr: false })
const AddBookForm = dynamic(() => import("@/components/add-book-form").then((mod) => mod.default), { ssr: false })

export default function BooksPageContent() {
  const router = useRouter()
  const [isAddingBook, setIsAddingBook] = useState(false)
  const { books } = useBookStore()

  useEffect(() => {
    const isLoggedIn = localStorage.getItem("isLoggedIn")
    if (!isLoggedIn) {
      router.push("/")
    }
  }, [router])

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn")
    router.push("/")
  }

  return (
    <main className="container mx-auto p-4 ">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">My Favorite  <span className="text-indigo-400">BooksHub</span></h1>
        <div className="flex items-center gap-4">
          <ThemeToggle />
          <button onClick={handleLogout} className="px-4 py-2 text-white bg-red-500 rounded-md hover:bg-red-600">
            Logout
          </button>
        </div>
      </div>
      {books.length === 0 ? <p className="text-center text-lg mb-4">You haven &#39;t added any books yet.</p> : <BookList />}
      {isAddingBook ? (
        <AddBookForm onClose={() => setIsAddingBook(false)} />
      ) : (
        <button
          onClick={() => setIsAddingBook(true)}
          className="mt-4 px-4 py-2 text-white bg-green-500 rounded-md hover:bg-green-600"
        >
          Add New Book
        </button>
      )}
    </main>
  )
}

