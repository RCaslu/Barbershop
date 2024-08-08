"use client"

import exp from "constants"
import { useState } from "react"
import Header from "./_components/ui/header"
import { Input } from "./_components/ui/input"
import { Button } from "./_components/ui/button"
import { EyeIcon, FootprintsIcon, SearchIcon } from "lucide-react"
import Image from "next/image"
import { Card, CardContent } from "./_components/ui/card"
import { Badge, badgeVariants } from "./_components/ui/badge"
import { Avatar, AvatarImage, AvatarFallback } from "./_components/ui/avatar"
import { db } from "./_lib/prisma"
import BarbershopItem from "./_components/ui/barbershop-items"

const Home = async () => {
  const barbershops = await db.barbershop.findMany({})
  console.log({ barbershops })
  const popularBarbershops = await db.barbershop.findMany({
    orderBy: {
      name: "desc",
    },
  })

  return (
    <div>
      {/* HEADER */}
      <Header />
      <div className="p-5">
        <h2 className="text-xl font-bold">Olá, Rafael</h2>
        <p>Segunda, 5 de agosto</p>

        {/* BUSCA */}
        <div className="mt-6 flex items-center gap-2">
          <Input placeholder="Faça sua busca..." />
          <Button>
            <SearchIcon />
          </Button>
        </div>

        {/* Botões */}
        <div className="mt-6 flex gap-3 overflow-x-scroll [&::-webkit-scrollbar]:hidden">
          <Button className="gap-2" variant={"secondary"}>
            <Image src="/tesoura.png" width={16} height={16} /> Cabelo
          </Button>

          <Button className="gap-2" variant={"secondary"}>
            <Image src="/bigode.png" width={16} height={16} /> Cabelo
          </Button>

          <Button className="gap-2" variant={"secondary"}>
            <Image src="/acabamento.png" width={16} height={16} /> Acabamento
          </Button>

          <Button className="gap-2" variant={"secondary"}>
            <FootprintsIcon size={16} /> Pézinho
          </Button>

          <Button className="gap-2" variant={"secondary"}>
            <EyeIcon size={16} /> Sobrancelha
          </Button>
        </div>

        {/* BANNER */}
        <div className="relative mt-6 h-[150px] w-full">
          <Image
            alt="Banner 01 FSW Barber"
            src="/banner01.png"
            fill
            className="rounded-xl object-cover"
          />
        </div>

        {/* AGENDAMENTO */}
        <h2 className="mb-3 mt-6 text-xs font-bold uppercase text-gray-400">
          Agendamentos
        </h2>
        <Card>
          <CardContent className="flex justify-between rounded-xl p-0">
            {/* ESQUERDA */}
            <div className="flex flex-col gap-2 py-5 pl-5">
              <Badge className="w-fit">Confirmado</Badge>

              {/* TEXTO NOME DO PRODUTO */}
              <h3 className="font-semibold">Corte de cabelo</h3>

              {/* DIV DA FOTO E NOME */}
              <div className="flex items-center gap-2">
                <Avatar className="h-6 w-6">
                  <AvatarImage src="https://utfs.io/f/07842cfb-7b30-4fdc-accc-719618dfa1f2-17s.png" />
                  <AvatarFallback></AvatarFallback>
                </Avatar>
                <p className="text-sm">Barbearia FSW</p>
              </div>
            </div>

            {/* DIREITA */}
            <div className="flex flex-col items-center justify-center border-l-2 border-solid px-5">
              <p className="text-sm">Agosto</p>
              <p className="text-2xl">05</p>
              <p className="text-sm">20:00</p>
            </div>
          </CardContent>
        </Card>

        {/* RECOMENDADOS */}
        <h2 className="mb-3 mt-6 text-xs font-bold uppercase text-gray-400">
          Recomendados
        </h2>

        <div className="flex gap-4 overflow-auto [&::-webkit-scrollbar]:hidden">
          {barbershops.map((barbershop) => (
            <BarbershopItem key={barbershop.id} barbershop={barbershop} />
          ))}
        </div>

        {/* POPULARES */}
        <h2 className="mb-3 mt-6 text-xs font-bold uppercase text-gray-400">
          Populares
        </h2>

        <div className="flex gap-4 overflow-auto [&::-webkit-scrollbar]:hidden">
          {popularBarbershops.map((barbershop) => (
            <BarbershopItem key={barbershop.id} barbershop={barbershop} />
          ))}
        </div>
      </div>
      <footer>
        {/* CARD LÁ DE BAIXO */}
        <Card className="px-5 py-6">
          <CardContent>
            <p className="text-sm text-gray-400">
              @ 2023 Copyright <span className="font-bold">FSW Barber</span>
            </p>
          </CardContent>
        </Card>
      </footer>
    </div>
  )
}

export default Home
