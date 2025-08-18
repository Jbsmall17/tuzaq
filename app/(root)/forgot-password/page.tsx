"use client";
import React, { useEffect, useState } from "react";
import AuthLayout from "../component/AuthLayout";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ArrowRight, Check, Eye, EyeClosed } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Page() {
  const [step, setStep] = useState(1);
  const VerifyUser = () => {
    return (
      <div className="auth-width">
        <p className="text-center text-xl font-medium text-primary mb-3 md:mb-5">
          Reset Password
        </p>
        <p className="text-black text-center font-normal mb-2 md:mb-4">
          Enter your mail registered with Tuzaq
        </p>
        <div className="space-y-3">
          <Label htmlFor="email">Email address</Label>
          <Input
            id="email"
            name="email"
            className="py-2"
            placeholder="example@email.com"
          />
          <Button
            onClick={() => setStep(2)}
            style={{ boxShadow: "4px 4px black" }}
            variant={"secondary"}
            className="w-full cursor-pointer"
          >
            Continue
            <ArrowRight className="inline" />
          </Button>
        </div>
      </div>
    );
  };
  const CheckInbox = () => {
    const [seconds, setSeconds] = useState(60);
    const [isActive, setIsActive] = useState(true);
    useEffect(() => {
      if (seconds == 0 || !isActive) return;
      const timer = setInterval(() => {
        setSeconds((prev) => {
          if (prev <= 1) {
            setIsActive(false);
            clearTimeout(timer);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
      return () => clearInterval(timer);
    }, [seconds, isActive]);

    const formatTime = (time: number) => {
      return time < 10 ? `0:0${time}s` : `00:${time}s`;
    };

    return (
      <div className="auth-width">
        <div className="relative w-[80px] h-auto mx-auto mb-3 md:mb-5">
          <Image
            src="/kite.svg"
            className="absolute top-0 right-0 -translate-y-[80%] translate-x-[80%]"
            width={130}
            height={110}
            alt="kite"
          />
          <Image
            src="/inbox.svg"
            alt="inbox icon"
            className="w-full"
            width={80}
            height={100}
          />
        </div>
        <p className="text-center text-xl font-medium text-primary mb-3 md:mb-5">
          Check your Inbox
        </p>
        <p className="text-center font-normal text-base mb-2 md:mb-4">
          we just sent a verfication mail to example@gmail.com
          <br />
          Please click the link in the meail to verify your account
        </p>
        <Button
          onClick={() => setStep(3)}
          style={{ boxShadow: "4px 4px black" }}
          variant={"secondary"}
          className="w-full cursor-pointer"
        >
          Go to mail app
          <ArrowRight className="inline" />
        </Button>
        {seconds > 0 ? (
          <p className="text-center mt-2 md:mt-4 font-medium">
            {formatTime(seconds)}
          </p>
        ) : (
          <div className="flex flex-row justify-center items-center mt-2 md:mt-4  gap-3">
            <span>Didn&apos;t get mail?</span>
            <Button
              style={{ boxShadow: "4px 4px black" }}
              variant={"outline"}
              className="cursor-pointer w-[150px]"
            >
              Resend
            </Button>
          </div>
        )}
      </div>
    );
  };

  const ResetPassword = () => {
    const [isNewPaswordVisible, setIsNewPasswordVisible] = useState(false);
    const [isConfirmPasswordVisible, setIsConfirmPasswordVisible] =
      useState(false);
    return (
      <div className="auth-width">
        <p className="text-center text-xl font-medium text-primary mb-3 md:mb-5">
          Reset Password
        </p>
        <div className="space-y-3 mb-2 md:mb-4">
          <Label htmlFor="newPassword">New Password</Label>
          <div className="relative">
            <Input
              id="newPassword"
              name="newPassword"
              className="w-full h-full py-2"
              type={!isNewPaswordVisible ? "password" : "text"}
              placeholder="Enter password"
            />
            <Eye
              className={
                !isNewPaswordVisible
                  ? "cursor-pointer absolute top-1/2 -translate-y-[50%] right-2"
                  : "hidden"
              }
              onClick={() => setIsNewPasswordVisible(!isNewPaswordVisible)}
            />
            <EyeClosed
              className={
                isNewPaswordVisible
                  ? "cursor-pointer absolute top-1/2 -translate-y-[50%] right-2"
                  : "hidden"
              }
              onClick={() => setIsNewPasswordVisible(!isNewPaswordVisible)}
            />
          </div>
        </div>
        <div className="space-y-3 mb-4 md:mb-6">
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
        <Button
          onClick={() => setStep(4)}
          style={{ boxShadow: "4px 4px black" }}
          variant={"secondary"}
          className="w-full cursor-pointer"
        >
          Continue
          <ArrowRight className="inline" />
        </Button>
      </div>
    );
  };
  const ResetSuccessful = () => {
    return (
      <div className="auth-width">
        <div className="mb-2 md:mb-3 mx-auto h-[180px] w-[180px] bg-white border-2 border-black rounded-full flex justify-center items-center">
          <Check className="text-primary size-24" />
        </div>
        <p className="text-center text-xl font-medium text-primary mb-2 md:mb-3">
          Reset Successful
        </p>
        <p className="text-center font-normal text-base mb-1 md:mb-2">
          Password reset was successful
        </p>

        <Button
          onClick={() => setStep(4)}
          style={{ boxShadow: "4px 4px black" }}
          variant={"secondary"}
          className="w-full cursor-pointer"
          asChild
        >
          <Link href="/">
          Continue
          <ArrowRight className="inline" />
          </Link>
        </Button>
      </div>
    );
  };

  return (
    <AuthLayout>
      {step == 1 ? (
        <VerifyUser />
      ) : step == 2 ? (
        <CheckInbox />
      ) : step == 3 ? (
        <ResetPassword />
      ) : (
        <ResetSuccessful />
      )}
    </AuthLayout>
  );
}
