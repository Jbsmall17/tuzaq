"use client";
import AuthLayout from "./component/AuthLayout";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { ArrowRight, Eye, EyeClosed } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import Link from "next/link";
import { useMyContext } from "@/context";

export default function Home() {
  const [isPaswordVisible, setIsPasswordVisible] = useState(false);
  const {firstRender, setFirstRender} = useMyContext()

   useEffect(() => {
      setTimeout(()=>{
        setFirstRender(true);
      },1000)
    }, [firstRender]);

  return (
    <main className="relative">
      <div
        className={`${!firstRender ? "flex" : "hidden"} z-10 absolute w-full fade-off top-0 left-0 h-screen bg-primary flex-container`}
      >
        <p className="text-xl font-semibold text-primary-foreground">TUZAQ</p>
      </div>
      <AuthLayout>
        <div className="auth-width">
          <p className="text-center text-xl font-medium text-primary mb-3 md:mb-5">
            Hello, Welcome back!
          </p>
          <div className="space-y-3 mb-2 md:mb-4">
            <Label htmlFor="email">Email address</Label>
            <Input
              id="email"
              name="email"
              className="py-2"
              placeholder="example@email.com"
            />
          </div>
          <div className="space-y-3 mb-2 md:mb-4">
            <Label htmlFor="password">Password</Label>
            <div className="relative">
              <Input
                id="password"
                name="password"
                className="w-full h-full py-2"
                type={!isPaswordVisible ? "password" : "text"}
                placeholder="Enter password"
              />
              <Eye
                className={
                  !isPaswordVisible
                    ? "cursor-pointer absolute top-1/2 -translate-y-[50%] right-2"
                    : "hidden"
                }
                onClick={() => setIsPasswordVisible(!isPaswordVisible)}
              />
              <EyeClosed
                className={
                  isPaswordVisible
                    ? "cursor-pointer absolute top-1/2 -translate-y-[50%] right-2"
                    : "hidden"
                }
                onClick={() => setIsPasswordVisible(!isPaswordVisible)}
              />
            </div>
          </div>
          <div className="mb-2 md:mb-4">
            <Link href="/forgot-password" className="inline cursor-pointer">
              Forgot Password?
            </Link>
          </div>
          <Button
            style={{ boxShadow: "4px 4px black" }}
            variant={"secondary"}
            className="w-full"
          >
            Continue
            <ArrowRight className="inline" />
          </Button>
          <p className="mt-3 md:mt-5 mb-3 text-center">
            Don&apos;t have an account?
          </p>
          <Link href="/sign-up">
            <Button
              style={{ boxShadow: "4px 4px black" }}
              className="w-2/4 block mx-auto cursor-pointer"
              variant={"outline"}
            >
              Sign Up
            </Button>
          </Link>
        </div>
      </AuthLayout>
    </main>
  );
}
