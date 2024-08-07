"use client"

import exp from "constants"
import { useState } from "react"
import Header from "./_components/ui/header"
import { Input } from "./_components/ui/input"
import { Button } from "./_components/ui/button"
import { Icon, SearchIcon } from "lucide-react"
import Image from "next/image"

const Home = () => {
  return (
    <div>
      {/* header */}
      <Header />
      <div className="p-5">
        <h2 className="text-xl font-bold">Olá, Rafael</h2>
        <p>Segunda-feira, 05 de agosto</p>

        <div className="mt-6 flex items-center gap-2">
          <Input placeholder="Faça sua busca..." />
          <Button>
            <SearchIcon />
          </Button>
        </div>

        <div className="relative mt-6 h-[150px] w-full">
          <Image
            alt="Banner 01 FSW Barber"
            src="/banner01.png"
            fill
            className="rounded-xl"
          />
        </div>
      </div>
    </div>
  )
}

export default Home
