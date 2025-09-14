"use client";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ArrowLeft,
  ArrowUpRight,
  Check,
  ChevronDown,
  ChevronRight,
  Download,
  EllipsisVertical,
  Plus,
} from "lucide-react";
import Image from "next/image";
import React, { useRef, useState } from "react";

export default function Page() {
  const [step, setStep] = useState(1);
  const mainRef = useRef<HTMLDivElement>(null);

  const handleScroll = () => {
    setStep(2);
    if (mainRef.current)
      mainRef.current.scrollTo({
        top: 0,
        behavior: "smooth",
      });
  };

  return (
    <main
      ref={mainRef}
      className="flex-1 main-padding overflow-x-hidden main-height"
    >
      {step === 1 ? (
        <div className="space-y-4">
          <div className="flex flex-col gap-3 lg:gap-0 lg:flex-row md:items-start justify-between">
            <h1 className="title">Offloads</h1>
            <div className="flex flex-col md:flex-row gap-4 md:gap-6 md:items-end">
              <Button variant={"secondary"} className="self-start box-shadow">
                <Plus />
                Log Offload
              </Button>
              <div className="hidden sm:flex flex-row gap-4">
                <div className="group relative flex flex-row gap-2 items-center">
                  <Image
                    src={"/tank-line2.svg"}
                    alt="tank line"
                    className="size-4"
                    width={16}
                    height={16}
                  />
                  <span className="text-sm">Filter by tank</span>
                  <ChevronDown className="size-3 text-muted-foreground" />
                  <div className="group-hover:block hidden absolute left-0 top-[100%] px-3 py-2 rounded-md bg-white w-[135px]">
                    <ul className="space-y-2">
                      <li className="group/item flex flex-row gap-3 items-center">
                        <div className="group-hover/item:bg-[#c6d9fe] flex justify-center items-center size-5 border border-black rounded-full bg-white">
                          <Check className="size-3" />
                        </div>
                        <p>All</p>
                      </li>
                      <li className="group/item flex flex-row gap-3 items-center">
                        <div className="group-hover/item:bg-[#c6d9fe] flex justify-center items-center size-5 border border-black rounded-full bg-white">
                          <Check className="size-3" />
                        </div>
                        <p>Tank 1</p>
                      </li>
                      <li className="group/item flex flex-row gap-3 items-center">
                        <div className="group-hover/item:bg-[#c6d9fe] flex justify-center items-center size-5 border border-black rounded-full bg-white">
                          <Check className="size-3" />
                        </div>
                        <p>Tank 2</p>
                      </li>
                      <li className="group/item flex flex-row gap-3 items-center">
                        <div className="group-hover/item:bg-[#c6d9fe] flex justify-center items-center size-5 border border-black rounded-full bg-white">
                          <Check className="size-3" />
                        </div>
                        <p>Tank 3</p>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="flex flex-row gap-2 items-center">
                  <Image
                    src={"/filter.svg"}
                    alt={"filter"}
                    className="size-4"
                    width={16}
                    height={16}
                  />
                  <p className="text-sm">Filter by price</p>
                  <ChevronDown className="size-3 text-muted-foreground" />
                </div>
                <div className="flex flex-row gap-2 items-center">
                  <Image
                    src={"/calendar.svg"}
                    alt="calendar"
                    className="size-4"
                    width={16}
                    height={16}
                  />
                  <span className="text-sm">This week</span>
                  <ChevronDown className="size-3 text-muted-foreground" />
                </div>
              </div>
            </div>
          </div>
          <div className="w-full overflow-x-scroll scrollable-hidden">
            <div className="sm:w-[900px] lg:w-full my-2 md:my-4">
              <div className="flex flex-row border-b-1 border-[#e5e5e5] pb-3">
                <p className="flex-1 font-medium shrink-0">Tank</p>
                <p className="flex-1 font-medium shrink-0 text-end sm:text-start">
                  LIters offloaded
                </p>
                <p className="flex-1 font-medium shrink-0 hidden sm:block">
                  Cost/Liter
                </p>
                <p className="flex-1 font-medium shrink-0 hidden sm:block">
                  Total Cost
                </p>
                <p className="flex-1 font-medium shrink-0 hidden sm:block">
                  Recorded by
                </p>
              </div>
              <div className="space-y-3">
                <div className="my-2 md:my-4 space-y-3">
                  <div className="flex flex-row items-center justify-between">
                    <div className="rounded-sm p-1 bg-[#d9d9d9]">
                      21st March,2025
                    </div>
                    <div
                      onClick={handleScroll}
                      className="text-primary font-medium"
                    >
                      View Summary
                      <ArrowUpRight className="inline ml-2" />
                    </div>
                  </div>
                  <div>
                    <div className="flex flex-row items-center py-2 border-b-1 border-[#e5e5e5]">
                      <p className="font-light text-black flex-1 shrink-0">
                        Tank 1
                      </p>
                      <p className="font-light text-black flex-1 shrink-0 text-end sm:text-start">
                        1000L
                      </p>
                      <p className="font-light text-black flex-1 shrink-0 hidden sm:block">
                        999
                      </p>
                      <p className="font-light text-black flex-1 shrink-0 hidden sm:block">
                        998
                      </p>
                      <p className="font-light text-black flex-1 shrink-0 hidden sm:flex justify-between items-center">
                        <span>Abdulhaqq</span>
                        <EllipsisVertical />
                      </p>
                    </div>
                    <div className="flex flex-row items-center py-2 border-b-1 border-[#e5e5e5]">
                      <p className="font-light text-black flex-1 shrink-0">
                        Tank 1
                      </p>
                      <p className="font-light text-black flex-1 shrink-0 text-end sm:text-start">
                        1000L
                      </p>
                      <p className="font-light text-black flex-1 shrink-0 hidden sm:block">
                        999
                      </p>
                      <p className="font-light text-black flex-1 shrink-0 hidden sm:block">
                        998
                      </p>
                      <p className="font-light text-black flex-1 shrink-0 hidden sm:flex justify-between items-center">
                        <span>Abdulhaqq</span>
                        <EllipsisVertical />
                      </p>
                    </div>
                    <div className="flex flex-row items-center py-2 border-b-1 border-[#e5e5e5]">
                      <p className="font-light text-black flex-1 shrink-0">
                        Tank 1
                      </p>
                      <p className="font-light text-black flex-1 shrink-0 text-end sm:text-start">
                        1000L
                      </p>
                      <p className="font-light text-black flex-1 shrink-0 hidden sm:block">
                        999
                      </p>
                      <p className="font-light text-black flex-1 shrink-0 hidden sm:block">
                        998
                      </p>
                      <p className="font-light text-black flex-1 shrink-0 hidden sm:flex justify-between items-center">
                        <span>Abdulhaqq</span>
                        <EllipsisVertical />
                      </p>
                    </div>
                    <div className="flex flex-row items-center py-2 border-b-1 border-[#e5e5e5]">
                      <p className="font-light text-black flex-1 shrink-0 font-medium">
                        Total
                      </p>
                      <p className="font-light text-black flex-1 shrink-0 text-end sm:text-start">
                        3000L
                      </p>
                      <div className="font-light text-black flex-1 shrink-0 hidden sm:block">
                        <div className="h-[1.5px] w-[25px] bg-black"></div>
                      </div>
                      <p className="font-light text-black flex-1 shrink-0 hidden sm:block">
                        998
                      </p>
                      <p className="font-light text-black flex-1 shrink-0 hidden sm:block"></p>
                    </div>
                  </div>
                </div>
                <div className="my-2 md:my-4 space-y-3">
                  <div className="flex flex-row items-center justify-between">
                    <div className="rounded-sm p-1 bg-[#d9d9d9]">
                      21st March,2025
                    </div>
                    <div
                      onClick={handleScroll}
                      className="text-primary font-medium"
                    >
                      View Summary
                      <ArrowUpRight className="inline ml-2" />
                    </div>
                  </div>
                  <div>
                    <div className="flex flex-row items-center py-2 border-b-1 border-[#e5e5e5]">
                      <p className="font-light text-black flex-1 shrink-0">
                        Tank 1
                      </p>
                      <p className="font-light text-black flex-1 shrink-0 text-end sm:text-start">
                        1000L
                      </p>
                      <p className="font-light text-black flex-1 shrink-0 hidden sm:block">
                        999
                      </p>
                      <p className="font-light text-black flex-1 shrink-0 hidden sm:block">
                        998
                      </p>
                      <p className="font-light text-black flex-1 shrink-0 hidden sm:flex justify-between items-center">
                        <span>Abdulhaqq</span>
                        <EllipsisVertical />
                      </p>
                    </div>
                    <div className="flex flex-row items-center py-2 border-b-1 border-[#e5e5e5]">
                      <p className="font-light text-black flex-1 shrink-0">
                        Tank 1
                      </p>
                      <p className="font-light text-black flex-1 shrink-0 text-end sm:text-start">
                        1000L
                      </p>
                      <p className="font-light text-black flex-1 shrink-0 hidden sm:block">
                        999
                      </p>
                      <p className="font-light text-black flex-1 shrink-0 hidden sm:block">
                        998
                      </p>
                      <p className="font-light text-black flex-1 shrink-0 hidden sm:flex justify-between items-center">
                        <span>Abdulhaqq</span>
                        <EllipsisVertical />
                      </p>
                    </div>
                    <div className="flex flex-row items-center py-2 border-b-1 border-[#e5e5e5]">
                      <p className="font-light text-black flex-1 shrink-0">
                        Tank 1
                      </p>
                      <p className="font-light text-black flex-1 shrink-0 text-end sm:text-start">
                        1000L
                      </p>
                      <p className="font-light text-black flex-1 shrink-0 hidden sm:block">
                        999
                      </p>
                      <p className="font-light text-black flex-1 shrink-0 hidden sm:block">
                        998
                      </p>
                      <p className="font-light text-black flex-1 shrink-0 hidden sm:flex justify-between items-center">
                        <span>Abdulhaqq</span>
                        <EllipsisVertical />
                      </p>
                    </div>
                    <div className="flex flex-row items-center py-2 border-b-1 border-[#e5e5e5]">
                      <p className="font-light text-black flex-1 shrink-0 font-medium">
                        Total
                      </p>
                      <p className="font-light text-black flex-1 shrink-0 text-end sm:text-start">
                        3000L
                      </p>
                      <div className="font-light text-black flex-1 shrink-0 hidden sm:block">
                        <div className="h-[1.5px] w-[25px] bg-black"></div>
                      </div>
                      <p className="font-light text-black flex-1 shrink-0 hidden sm:block">
                        998
                      </p>
                      <p className="font-light text-black flex-1 shrink-0 hidden sm:block"></p>
                    </div>
                  </div>
                </div>
                <div className="my-2 md:my-4 space-y-3">
                  <div className="flex flex-row items-center justify-between">
                    <div className="rounded-sm p-1 bg-[#d9d9d9]">
                      21st March,2025
                    </div>
                    <div
                      onClick={handleScroll}
                      className="text-primary font-medium"
                    >
                      View Summary
                      <ArrowUpRight className="inline ml-2" />
                    </div>
                  </div>
                  <div>
                    <div className="flex flex-row items-center py-2 border-b-1 border-[#e5e5e5]">
                      <p className="font-light text-black flex-1 shrink-0">
                        Tank 1
                      </p>
                      <p className="font-light text-black flex-1 shrink-0 text-end sm:text-start">
                        1000L
                      </p>
                      <p className="font-light text-black flex-1 shrink-0 hidden sm:block">
                        999
                      </p>
                      <p className="font-light text-black flex-1 shrink-0 hidden sm:block">
                        998
                      </p>
                      <p className="font-light text-black flex-1 shrink-0 hidden sm:flex justify-between items-center">
                        <span>Abdulhaqq</span>
                        <EllipsisVertical />
                      </p>
                    </div>
                    <div className="flex flex-row items-center py-2 border-b-1 border-[#e5e5e5]">
                      <p className="font-light text-black flex-1 shrink-0">
                        Tank 1
                      </p>
                      <p className="font-light text-black flex-1 shrink-0 text-end sm:text-start">
                        1000L
                      </p>
                      <p className="font-light text-black flex-1 shrink-0 hidden sm:block">
                        999
                      </p>
                      <p className="font-light text-black flex-1 shrink-0 hidden sm:block">
                        998
                      </p>
                      <p className="font-light text-black flex-1 shrink-0 hidden sm:flex justify-between items-center">
                        <span>Abdulhaqq</span>
                        <EllipsisVertical />
                      </p>
                    </div>
                    <div className="flex flex-row items-center py-2 border-b-1 border-[#e5e5e5]">
                      <p className="font-light text-black flex-1 shrink-0">
                        Tank 1
                      </p>
                      <p className="font-light text-black flex-1 shrink-0 text-end sm:text-start">
                        1000L
                      </p>
                      <p className="font-light text-black flex-1 shrink-0 hidden sm:block">
                        999
                      </p>
                      <p className="font-light text-black flex-1 shrink-0 hidden sm:block">
                        998
                      </p>
                      <p className="font-light text-black flex-1 shrink-0 hidden sm:flex justify-between items-center">
                        <span>Abdulhaqq</span>
                        <EllipsisVertical />
                      </p>
                    </div>
                    <div className="flex flex-row items-center py-2 border-b-1 border-[#e5e5e5]">
                      <p className="font-light text-black flex-1 shrink-0 font-medium">
                        Total
                      </p>
                      <p className="font-light text-black flex-1 shrink-0 text-end sm:text-start">
                        3000L
                      </p>
                      <div className="font-light text-black flex-1 shrink-0 hidden sm:block">
                        <div className="h-[1.5px] w-[25px] bg-black"></div>
                      </div>
                      <p className="font-light text-black flex-1 shrink-0 hidden sm:block">
                        998
                      </p>
                      <p className="font-light text-black flex-1 shrink-0 hidden sm:block"></p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <>
          <div className="mb-3 md:mb-5 flex flex-row justify-between">
            <div className="flex flex-row gap-4 items-center">
              <Button
                onClick={() => setStep(1)}
                variant={"outline"}
                className="box-shadow w-[75px]"
              >
                <ArrowLeft />
              </Button>
              <p className="title2">Offload Summary</p>
            </div>
            <Button variant={"outline"} className="hidden sm:flex box-shadow">
              <Download className="inline" />
              Download
            </Button>
            <Image
                src={"/filter2.svg"}
                alt="filter"
                width={24}
                height={24}
                className="inline sm:hidden"
            />
          </div>
          <div className="flex flex-row justify-between">
            <div className="mb-3 md:mb-5 flex flex-row items-center gap-2">
              <Image
                src={"/calendar.svg"}
                alt="calendar"
                width={16}
                height={16}
              />
              <span className="text-base font-medium">Today, January 2026</span>
              <ChevronDown className="text-muted-foreground size-4" />
            </div>
            <Download className="inline block sm:hidden" />
          </div>
          <div className="flex flex-col sm:flex-row gap-4 mb-3 md:mb-5">
            <Card className="w-full sm:w-[250px] shrink-0 py-4 gap-4">
              <CardHeader className="px-2 md:px-3 flex flex-row justify-between items-center text-[#787878]">
                <div className="flex flex-row items-center gap-3">
                  <div className="self-start shrink-0 bg-yellow-200 size-8 rounded-md flex justify-center items-center">
                    <Image
                      src="/tank-line.svg"
                      alt="tank line"
                      width={16}
                      height={16}
                    />
                  </div>
                  <CardTitle className="text-xs lg:text-sm">
                    Total liters sold
                  </CardTitle>
                </div>
                <ChevronRight className="size-5" />
              </CardHeader>
              <div className="flex flex-row sm:flex-col justify-between gap-4">
                <CardContent className="px-2 md:px-3">
                  <div className="flex flex-row gap-1 justify-center items-end">
                    <p className="text-2xl font-semibold">2,000.00</p>
                    <p className="text-sm">liters</p>
                  </div>
                </CardContent>
                {/* <CardFooter className="text-xs lg:text-sm px-2 md:-px-3 flex flex-row gap-2 lg:gap-3">
                  <p className="text-red-500">
                    <TrendingUp className="rotate-180 inline mr-1" />
                    -2.4%
                  </p>
                  <p>vs yesterday</p>
                </CardFooter> */}
              </div>
            </Card>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 md:gap-6 sm:w-[800px] lg:w-full">
            <Card className="py-4 gap-4 flex-1 hover:scale-105 hover:border hover:border-primary transition ease-linear">
              <CardHeader className="px-4 flex flex-row justify-between items-center">
                <div className="flex flex-row gap-2 items-center">
                  <Image
                    src="/oil_barrel.svg"
                    alt="oil barrel"
                    className="size-6"
                    width={16}
                    height={16}
                  />
                  <p className="text-base font-medium">Tank 1</p>
                </div>
                <EllipsisVertical />
              </CardHeader>
              <CardContent className="px-4 space-y-3">
                <div className="flex flex-row justify-between items-center">
                  <p className="text-muted-foreground">Liters offloaded</p>
                  <p className="text-black font-medium">400L</p>
                </div>
                <div className="flex flex-row justify-between items-center">
                  <p className="text-muted-foreground">Cost per liter</p>
                  <p className="text-black font-medium">NGN 8,000</p>
                </div>
                <div className="flex flex-row justify-between items-center">
                  <p className="text-muted-foreground">Total Cost</p>
                  <p className="text-black font-medium">800L</p>
                </div>
                <div className="flex flex-row justify-between items-center">
                  <p className="text-muted-foreground">Recorded by</p>
                  <p className="text-black font-medium">Gloria(Fuel attendant)</p>
                </div>
                <div className="flex flex-row justify-between items-center">
                  <p className="text-muted-foreground">Time recorded</p>
                  <p className="text-black font-medium">7:30am</p>
                </div>
              </CardContent>
              <CardFooter className="px-4 flex flex-row justify-between items-center text-sm">
                <p className="text-muted-foreground">Edited by</p>
                <p className="text-black font-medium">Adeyemi(Manager)</p>
              </CardFooter>
            </Card>
            <Card className="py-4 gap-4 flex-1 hover:scale-105 hover:border hover:border-primary transition ease-linear">
              <CardHeader className="px-4 flex flex-row justify-between items-center">
                <div className="flex flex-row gap-2 items-center">
                  <Image
                    src="/oil_barrel.svg"
                    alt="oil barrel"
                    className="size-6"
                    width={16}
                    height={16}
                  />
                  <p className="text-base font-medium">Tank 1</p>
                </div>
                <EllipsisVertical />
              </CardHeader>
              <CardContent className="px-4 space-y-3">
                <div className="flex flex-row justify-between items-center">
                  <p className="text-muted-foreground">Liters offloaded</p>
                  <p className="text-black font-medium">400L</p>
                </div>
                <div className="flex flex-row justify-between items-center">
                  <p className="text-muted-foreground">Cost per liter</p>
                  <p className="text-black font-medium">NGN 8,000</p>
                </div>
                <div className="flex flex-row justify-between items-center">
                  <p className="text-muted-foreground">Total Cost</p>
                  <p className="text-black font-medium">800L</p>
                </div>
                <div className="flex flex-row justify-between items-center">
                  <p className="text-muted-foreground">Recorded by</p>
                  <p className="text-black font-medium">Gloria(Fuel attendant)</p>
                </div>
                <div className="flex flex-row justify-between items-center">
                  <p className="text-muted-foreground">Time recorded</p>
                  <p className="text-black font-medium">7:30am</p>
                </div>
              </CardContent>
              <CardFooter className="px-4 flex flex-row justify-between items-center text-sm">
                <p className="text-muted-foreground">Edited by</p>
                <p className="text-black font-medium">Adeyemi(Manager)</p>
              </CardFooter>
            </Card>
            <Card className="py-4 gap-4 flex-1 hover:scale-105 hover:border hover:border-primary transition ease-linear">
              <CardHeader className="px-4 flex flex-row justify-between items-center">
                <div className="flex flex-row gap-2 items-center">
                  <Image
                    src="/oil_barrel.svg"
                    alt="oil barrel"
                    className="size-6"
                    width={16}
                    height={16}
                  />
                  <p className="text-base font-medium">Tank 1</p>
                </div>
                <EllipsisVertical />
              </CardHeader>
              <CardContent className="px-4 space-y-3">
                <div className="flex flex-row justify-between items-center">
                  <p className="text-muted-foreground">Liters offloaded</p>
                  <p className="text-black font-medium">400L</p>
                </div>
                <div className="flex flex-row justify-between items-center">
                  <p className="text-muted-foreground">Cost per liter</p>
                  <p className="text-black font-medium">NGN 8,000</p>
                </div>
                <div className="flex flex-row justify-between items-center">
                  <p className="text-muted-foreground">Total Cost</p>
                  <p className="text-black font-medium">800L</p>
                </div>
                <div className="flex flex-row justify-between items-center">
                  <p className="text-muted-foreground">Recorded by</p>
                  <p className="text-black font-medium">Gloria(Fuel attendant)</p>
                </div>
                <div className="flex flex-row justify-between items-center">
                  <p className="text-muted-foreground">Time recorded</p>
                  <p className="text-black font-medium">7:30am</p>
                </div>
              </CardContent>
              <CardFooter className="px-4 flex flex-row justify-between items-center text-sm">
                <p className="text-muted-foreground">Edited by</p>
                <p className="text-black font-medium">Adeyemi(Manager)</p>
              </CardFooter>
            </Card>
          </div>
        </>
      )}
    </main>
  );
}
