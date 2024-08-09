import { Card, CardContent } from "./card"

const Footer = () => {
  return (
    <footer>
      {/* CARD LÁ DE BAIXO */}
      <Card className="px-5 py-6">
        <CardContent>
          <p className="text-sm text-gray-400">
            @ 2023 Copyright <span className="font-bold">RCaslu</span>
          </p>
        </CardContent>
      </Card>
    </footer>
  )
}

export default Footer
