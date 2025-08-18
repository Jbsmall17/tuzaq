"use client";
import React, { useEffect, useState } from "react";
import AuthLayout from "../component/AuthLayout";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { ArrowRight, Check, Eye, EyeClosed } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

export default function Page() {
  const [isPaswordVisible, setIsPasswordVisible] = useState(false);
  const [isConfirmPasswordVisible, setIsConfirmPasswordVisible] = useState(false);
  const [step,setStep] = useState(1)

  const SignUpForm = () => {
    return (
        <div className="auth-width">
        <p className="text-center text-xl font-medium text-primary mb-3 md:mb-5">
          Create Your Tuzaq Account
        </p>
        <p className="text-center font-normal text-base">
          Start by creating your account
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
        <div className="space-y-3 mb-6 md:mb-8">
          <Label htmlFor="cPassword">Confirm Password</Label>
          <div className="relative">
            <Input
              id="cPassword"
              name="cPassword"
              className="w-full h-full py-2"
              type={!isConfirmPasswordVisible ? "password" : "text"}
              placeholder="Enter password"
            />
            <Eye
              className={
                !isConfirmPasswordVisible
                  ? "cursor-pointer absolute top-1/2 -translate-y-[50%] right-2"
                  : "hidden"
              }
              onClick={() =>
                setIsConfirmPasswordVisible(!isConfirmPasswordVisible)
              }
            />
            <EyeClosed
              className={
                isConfirmPasswordVisible
                  ? "cursor-pointer absolute top-1/2 -translate-y-[50%] right-2"
                  : "hidden"
              }
              onClick={() =>
                setIsConfirmPasswordVisible(!isConfirmPasswordVisible)
              }
            />
          </div>
        </div>
        <Button onClick={()=>setStep(2)} style={{boxShadow: "4px 4px black"}} variant={'secondary'} className="w-full cursor-pointer">
            Continue
            <ArrowRight className="inline" />
        </Button>
        <p className="mt-3 md:mt-5 mb-3 text-center">Don&apos;t have an account?</p>
        <Link href="/">
            <Button style={{boxShadow: "4px 4px black"}} className="w-2/4 block mx-auto cursor-pointer" variant={'outline'}>Log In</Button>
        </Link>
      </div>
    )
  }

  const CheckInbox = () => {
        const [seconds, setSeconds] = useState(60)
        const [isActive,setIsActive] = useState(true)
        
        const handleReset = () => {
          setSeconds(60)
          setIsActive(true)
        }

        useEffect(()=>{
          if(seconds == 0 || !isActive) return
          const timer = setInterval(()=>{
              setSeconds(prev =>{
                if(prev <= 1){
                  setIsActive(false)
                  clearTimeout(timer)
                  return 0
                }
                return prev - 1
              })
            },1000)
          return () => clearInterval(timer)
        },[seconds,isActive])
  
        const formatTime = (time: number) => {
          return time < 10 ? `0:0${time}s` : `00:${time}s`
        }
  
        return (
          <div className='auth-width'>
            <div className='relative w-[80px] h-auto mx-auto mb-3 md:mb-5'>
              <Image 
                src="/kite.svg"
                className='absolute top-0 right-0 -translate-y-[80%] translate-x-[80%]'
                width={130}
                height={110}
                alt="kite"
              />
              <Image 
                src="/inbox.svg"
                alt="inbox icon"
                className='w-full'
                width={80}
                height={100}
              />
            </div>
            <p className="text-center text-xl font-medium text-primary mb-3 md:mb-5">Check your Inbox</p>
            <p className='text-center font-normal text-base mb-2 md:mb-4'>
              we just sent a verfication mail to example@gmail.com<br />
              Please click the link in the meail to verify your account
            </p>
            {
                seconds > 0
                ? <p className='text-center mt-2 md:mt-4 font-medium'>{formatTime(seconds)}</p>
                : 
                <div className="flex flex-row justify-center items-center mt-3 md:mt-5 gap-3">
                    <span>Didn&apos;t get mail?</span>
                    <Button onClick={handleReset} style={{boxShadow: "4px 4px black"}} variant={"outline"} className="cursor-pointer w-[150px]">Resend</Button>
                </div>
            }
          </div>
        )
    }

    const ChooseRole = () => {

      const Role = ({role}:{role: string}) => {
        return (
          <div className="group flex flex-row justify-between items-center px-2 py-3 rounded-md border border-input hover:border-primary">
            <p>{role}</p>
            <div className="rounded-full size-4 border border-input group-hover:border-primary flex justify-center items-center">
              <div className="rounded-full size-2 bg-primary hidden group-hover:block"></div>
            </div>
          </div>
        )
      }

        return (
            <div className="w-full md:w-1/2">
              <p className="text-center text-xl font-medium text-primary mb-3 md:mb-5">Please, select your most suitable role</p>
              <div className="space-y-3 md:space-y-5 mb-3 md:mb-5">
                <Role role="Admin" />
                <Role role="Manager" />
                <Role role="Fuel attendent" />
              </div>
              <Button onClick={()=>setStep(4)} style={{boxShadow: "4px 4px black"}} variant={'secondary'} className="w-full md:w-1/2 cursor-pointer mx-auto block">
                Continue
                <ArrowRight className="inline" />
              </Button>
            </div>
        )
    }

    const UserInfo = () => {
      return (
        <div className="auth-width">
          <p className="text-center text-xl font-medium text-primary mb-3 md:mb-5">Tell us your name</p>
          <div className="space-y-3 mb-2 md:mb-4">
            <Label htmlFor="fname">First Name</Label>
            <Input id="fname" className="p-2" placeholder="Enter your first name"  />
          </div>
          <div className="space-y-3 mb-4 md:mb-6">
            <Label htmlFor="lname">Last Name</Label>
            <Input id="lname" className="p-2" placeholder="Enter your last name" />
          </div>
          <Button onClick={()=>setStep(5)} style={{boxShadow: "4px 4px black"}} variant={'secondary'} className="w-full cursor-pointer">
            Continue
            <ArrowRight className="inline" />
          </Button>
        </div>
      )
    }

    const PendingRequest = () => {
      return (
        <div className="auth-width flex flex-col items-center gap-2 md:gap-4">
          <Image
            src='/pending.svg'
            alt="access pending"
            width={160}
            height={180}
          />
          <p className="text-center text-xl font-medium text-primary">Access Pending</p>
          <p className="text-center text-sm">
            Your request is being reviewed. we will notify you once approved.
            Thank you for your patience
          </p>
        </div>
      )
    }    

    const SuccessfulRequest = () => {
      return (
        <div className="auth-width flex flex-col items-center gap-2 md:gap-4">
          <div className="mb-2 md:mb-3 mx-auto h-[180px] w-[180px] bg-white border-2 border-black rounded-full flex justify-center items-center">
            <Check className="text-primary size-24" />
          </div>
          <p className="text-center text-xl font-medium text-primary">Request accepted</p>
          <p className="text-center text-sm">Your request is successful, you can now log in</p>
          <Button onClick={()=> setStep(1)} style={{boxShadow: "4px 4px black"}} variant={'secondary'} className="w-full cursor-pointer">
            Continue
            <ArrowRight className="inline" />
          </Button>
        </div>
      )
    }

  return (
    <AuthLayout>
        {
            step == 1
            ? <SignUpForm />
            : step == 2
            ? <CheckInbox />
            : step == 3
            ? <ChooseRole />
            : step == 4
            ? <UserInfo />
            : step == 5
            ? <PendingRequest />
            : <SuccessfulRequest />
        }
    </AuthLayout>
  );
}
