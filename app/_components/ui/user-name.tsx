"use client"

import { useSession } from "next-auth/react"

const UserDisplayName = () => {
  const { data, status } = useSession()

  const now = new Date()

  const monthIndex = now.getMonth() + 1
  const monthNames = [
    "Janeiro",
    "Fevereiro",
    "Março",
    "Abril",
    "Maio",
    "Junho",
    "Julho",
    "Agosto",
    "Setembro",
    "Outubro",
    "Novembro",
    "Dezembro",
  ]

  const monthName = monthNames[monthIndex]
  const day = now.getDate()
  const indiceDia = now.getDay()
  const nomesDias = [
    "Domingo",
    "Segunda-feira",
    "Terça-feira",
    "Quarta-feira",
    "Quinta-feira",
    "Sexta-feira",
    "Sábado",
  ]
  const nomeDia = nomesDias[indiceDia]

  if (status === "loading") {
    return <p>Loading...</p>
  }

  return (
    <div>
      {data?.user ? (
        <div>
          <h2 className="text-xl font-bold">Olá, {data?.user?.name}!</h2>
          <p>
            {nomeDia}, {day} de {monthName}.
          </p>
        </div>
      ) : (
        <>
          <div>
            <h2 className="text-xl font-bold">Olá, Usuário!</h2>
            <p>
              {nomeDia}, {day} de {monthName}.
            </p>
          </div>
        </>
      )}
    </div>
  )
}

export default UserDisplayName
