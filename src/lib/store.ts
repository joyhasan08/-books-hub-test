import { create } from "zustand"

interface Book {
  id: string
  title: string
  author: string
  genre: string
}

interface BookStore {
  books: Book[]
  addBook: (book: Book) => void
  removeBook: (id: string) => void
}

export const useBookStore = create<BookStore>((set) => ({
  books: [],
  addBook: (book) => set((state) => ({ books: [...state.books, book] })),
  removeBook: (id) => set((state) => ({ books: state.books.filter((book) => book.id !== id) })),
}))

