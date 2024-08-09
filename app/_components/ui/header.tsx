import { MenuIcon } from "lucide-react"
import { Button } from "./button"
import { Card, CardContent } from "./card"
import Image from "next/image"
import Link from "next/link"
import { Sheet, SheetContent, SheetTrigger } from "./sheet"
import SidebarSheet from "./sidebar-sheet"

const Header = () => {
  return (
    <Card>
      <CardContent className="flex flex-row items-center justify-between p-5">
        <Link href="/">
          <Image alt="FSW Barber" src="/logo.png" height={18} width={120} />
        </Link>

        <Sheet>
          <SheetTrigger asChild>
            <Button
              size="icon"
              variant="outline"
              className="absolute right-4 top-4"
            >
              <MenuIcon />
            </Button>
          </SheetTrigger>
          <SheetContent className="overflow-y-auto">
            <SidebarSheet />
          </SheetContent>
        </Sheet>
      </CardContent>
    </Card>
  )
}

export default Header
