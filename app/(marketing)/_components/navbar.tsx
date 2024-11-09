"use client"
import { useScrollTop } from "@/hooks/use-scroll-top"
import { ModeToggle } from "@/components/mode-toggle";
import { cn } from "@/lib/utils";
import { Logo } from "./logo";
import { useConvexAuth } from "convex/react";
import { Spinner } from "@/components/spinner";
import { Button } from "@/components/ui/button";
;
import { SignInButton, UserButton } from "@clerk/clerk-react";
import Link from "next/link";

export const Navbar = () => {
  const { isAuthenticated, isLoading } = useConvexAuth();
  const scrolled = useScrollTop();
  return (
    <>
      <div className={cn("z50 bg-background dark:bg-[#1F1F1F] fixed top-0 flex items-center w-full p-6", scrolled && "border-b shadow-sm")}>
        <Logo />
        <div className="md:ml-auto md:justify-end justify-between w-full flex items-center gap-x-2">
          {isLoading && (
            <div className="w-full flex items-end justify-center">
              <Spinner size="lg" />
            </div>
          )}
          {!isAuthenticated && !isLoading && (
            <>
              <SignInButton mode="modal">
                <Button variant="ghost" size="sm">
                  Log in
                </Button>
              </SignInButton>
              <SignInButton mode="modal">
                <Button size="sm">
                  Get Jotion free
                </Button>
              </SignInButton>
            </>
          )}
          {isAuthenticated && !isLoading &&
            (
              <>
                <Button variant="ghost" size="sm" asChild>
                  <Link href="/documents">
                    Enter Jotion
                  </Link>
                </Button>
                <UserButton afterSwitchSessionUrl="/" />
              </>
            )}
          <ModeToggle />
        </div>
      </div>
    </>
  )
}