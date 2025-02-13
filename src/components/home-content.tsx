"use client"

import dynamic from "next/dynamic"

const LoginForm = dynamic(() => import("@/components/login-form"), { ssr: false })

export default function HomeContent() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <h1 className="text-4xl font-bold mb-8">Favorite Books App</h1>
      <LoginForm />
    </main>
  )
}

