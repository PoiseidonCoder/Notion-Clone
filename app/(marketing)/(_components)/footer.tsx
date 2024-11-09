import { Button } from "@/components/ui/button"
import { Logo } from "./logo"

export const Footer = () => {
  return (
    <>
      <div className="flex items-center w-full p-6 bg-background z-50">
        <Logo />
        <div className="flex md:ml-auto w-full justify-between md:justify-end items-center gap-x-2 text-muted-foreground">
          <Button variant="ghost" size="sm">Privacy Policy</Button>
          <Button variant="ghost" size="sm">Term & Conditions</Button>
        </div>
      </div>
    </>
  )
}

