import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { ArrowUpRight, Check, ChevronDown, Plus } from "lucide-react";
import Image from "next/image";
import React from "react";

export default function page() {
  return (
    <main className="flex-1 main-padding overflow-x-hidden main-height">
      <div className="mb-3 md:mb-5 flex flex-col-reverse gap-4 sm:flex-row justify-between sm:items-center">
        <div className="space-y-4">
          <h1 className="hidden sm:block text-xl md:text-2xl text-primary mb-4 font-semibold">Sales</h1>
          <div className="flex flex-row gap-2 items-center">
            <p>New Consignment</p>
            <div className="h-0.25 w-[25px] bg-black"></div>
            <p>Today</p>
          </div>
        </div>
        <div className="flex flex-row gap-4 md:gap-6">
          <Button variant={"secondary"} className="box-shadow">
            <Plus />
            Log Sale
          </Button>
          <Button variant={"outline"} className="box-shadow">
            Go to summary page
          </Button>
        </div>
      </div>
      <div className="flex flex-row gap-4 overflow-y-auto scrollable-hidden">
        <Card className="shrink-0 w-[250px] py-3 gap-4">
          <CardHeader className="px-3">
            <div className="flex flex-row gap-3 items-center">
              <Image
                src="/oil_barrel.svg"
                alt="oil barrel"
                width={24}
                height={24}
              />
              <p className="font-medium">Tank 1</p>
            </div>
          </CardHeader>
          <CardContent className="px-3 space-y-4">
            <div className="flex flex-row justify-between items-center">
              <p className="text-muted-foreground">Nozzle 1</p>
              <p className="font-medium w-[25%] sm:w-auto">400L</p>
            </div>
            <div className="flex flex-row justify-between items-center">
              <p className="text-muted-foreground">Nozzle 1</p>
              <p className="font-medium w-[25%] sm:w-auto">400L</p>
            </div>
            <div className="flex flex-row justify-between items-center">
              <p className="font-medium">Total</p>
              <p className="font-medium w-[25%] sm:w-auto">400L</p>
            </div>
          </CardContent>
        </Card>
        <Card className="shrink-0 w-[250px] py-3 gap-4">
          <CardHeader className="px-3">
            <div className="flex flex-row gap-3 items-center">
              <Image
                src="/oil_barrel.svg"
                alt="oil barrel"
                width={24}
                height={24}
              />
              <p className="font-medium">Tank 1</p>
            </div>
          </CardHeader>
          <CardContent className="px-3 space-y-4">
            <div className="flex flex-row justify-between items-center">
              <p className="text-muted-foreground">Nozzle 1</p>
              <p className="font-medium w-[25%] sm:w-auto">400L</p>
            </div>
            <div className="flex flex-row justify-between items-center">
              <p className="text-muted-foreground">Nozzle 1</p>
              <p className="font-medium w-[25%] sm:w-auto">400L</p>
            </div>
            <div className="flex flex-row justify-between items-center">
              <p className="font-medium">Total</p>
              <p className="font-medium w-[25%] sm:w-auto">400L</p>
            </div>
          </CardContent>
        </Card>
        <Card className="shrink-0 w-[250px] py-3 gap-4">
          <CardHeader className="px-3">
            <div className="flex flex-row gap-3 items-center">
              <Image
                src="/oil_barrel.svg"
                alt="oil barrel"
                width={24}
                height={24}
              />
              <p className="font-medium">Tank 1</p>
            </div>
          </CardHeader>
          <CardContent className="px-3 space-y-4">
            <div className="flex flex-row justify-between items-center">
              <p className="text-muted-foreground">Nozzle 1</p>
              <p className="font-medium w-[25%] sm:w-auto">400L</p>
            </div>
            <div className="flex flex-row justify-between items-center">
              <p className="text-muted-foreground">Nozzle 1</p>
              <p className="font-medium w-[25%] sm:w-auto">400L</p>
            </div>
            <div className="flex flex-row justify-between items-center">
              <p className="font-medium">Total</p>
              <p className="font-medium w-[25%] sm:w-auto">400L</p>
            </div>
          </CardContent>
        </Card>
      </div>
      <div className="w-full overflow-x-scroll scrollable-hidden">
      <div className="sm:w-[900px] lg:w-full my-2 md:my-4">
        <div className="mb-3 md:mb-5 hidden sm:flex flex-row justify-between items-center">
          <p className="text-xl md:text-2xl font-semibold text-primary">History</p>
          <div className="flex flex-row gap-4">
            <div className="group relative flex flex-row gap-2 items-center">
              <Image
                src={'/tank-line2.svg'}
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
        <div className="flex flex-row">
          <p className="flex-1 font-medium shrink-0">Tank</p>
          <p className="flex-1 font-medium shrink-0 hidden sm:block">Selling price (NGN/L)</p>
          <p className="flex-1 font-medium shrink-0 hidden sm:block">Cost price (NGN/L)</p>
          <p className="flex-1 font-medium shrink-0 text-end sm:text-start">Volume sold(L)</p>
          <p className="flex-1 font-medium shrink-0 hidden sm:block">Price sold</p>
        </div>
        <div className="space-y-3">
        <div className="my-2 md:my-4 space-y-3">
          <div className="flex flex-row items-center justify-between">
            <div className="rounded-sm p-1 bg-[#d9d9d9]">21st March,2025</div>
            <div className="text-primary font-medium">
              View Summary
              <ArrowUpRight className="inline ml-2" />
            </div>
          </div>
          <div>
          <div className="flex flex-row items-center py-2 border-b-1 border-[#e5e5e5]">
            <p className="font-light text-black flex-1 shrink-0">Tank 1</p>
            <p className="font-light text-black flex-1 shrink-0 hidden sm:block">1000L</p>
            <p className="font-light text-black flex-1 shrink-0 hidden sm:block">999</p>
            <p className="font-light text-black flex-1 shrink-0 text-end sm:text-start">998</p>
            <p className="font-light text-black flex-1 shrink-0 hidden sm:block">150,000</p>
          </div>
          <div className="flex flex-row items-center py-2 border-b-1 border-[#e5e5e5]">
            <p className="font-light text-black flex-1 shrink-0">Tank 1</p>
            <p className="font-light text-black flex-1 shrink-0 hidden sm:block">1000L</p>
            <p className="font-light text-black flex-1 shrink-0 hidden sm:block">999</p>
            <p className="font-light text-black flex-1 shrink-0 text-end sm:text-start">998</p>
            <p className="font-light text-black flex-1 shrink-0 hidden sm:block">150,000</p>
          </div>
          <div className="flex flex-row items-center py-2 border-b-1 border-[#e5e5e5]">
            <p className="font-light text-black flex-1 shrink-0">Tank 1</p>
            <p className="font-light text-black flex-1 shrink-0 hidden sm:block">1000L</p>
            <p className="font-light text-black flex-1 shrink-0 hidden sm:block">999</p>
            <p className="font-light text-black flex-1 shrink-0 text-end sm:text-start">998</p>
            <p className="font-light text-black flex-1 shrink-0 hidden sm:block">150,000</p>
          </div>
          <div className="flex flex-row items-center py-2 border-b-1 border-[#e5e5e5]">
            <p className="font-light text-black flex-1 shrink-0 font-medium">Total</p>
            <div className="font-light text-black flex-1 shrink-0 hidden sm:block"><div className="h-[1.5px] w-[25px] bg-black"></div></div>
            <div className="font-light text-black flex-1 shrink-0 hidden sm:block"><div className="h-[1.5px] w-[25px] bg-black"></div></div>
            <p className="font-light text-black flex-1 shrink-0 text-end sm:text-start">998</p>
            <p className="font-light text-black flex-1 shrink-0 hidden sm:block">150,000</p>
          </div>
          </div>
        </div>
        <div className="my-2 md:my-4 space-y-3">
          <div className="flex flex-row items-center justify-between">
            <div className="rounded-sm p-1 bg-[#d9d9d9]">21st March,2025</div>
            <div className="text-primary font-medium">
              View Summary
              <ArrowUpRight className="inline ml-2" />
            </div>
          </div>
          <div>
          <div className="flex flex-row items-center py-2 border-b-1 border-[#e5e5e5]">
            <p className="font-light text-black flex-1 shrink-0">Tank 1</p>
            <p className="font-light text-black flex-1 shrink-0 hidden sm:block">1000L</p>
            <p className="font-light text-black flex-1 shrink-0 hidden sm:block">999</p>
            <p className="font-light text-black flex-1 shrink-0 text-end sm:text-start">998</p>
            <p className="font-light text-black flex-1 shrink-0 hidden sm:block">150,000</p>
          </div>
          <div className="flex flex-row items-center py-2 border-b-1 border-[#e5e5e5]">
            <p className="font-light text-black flex-1 shrink-0">Tank 1</p>
            <p className="font-light text-black flex-1 shrink-0 hidden sm:block">1000L</p>
            <p className="font-light text-black flex-1 shrink-0 hidden sm:block">999</p>
            <p className="font-light text-black flex-1 shrink-0 text-end sm:text-start">998</p>
            <p className="font-light text-black flex-1 shrink-0 hidden sm:block">150,000</p>
          </div>
          <div className="flex flex-row items-center py-2 border-b-1 border-[#e5e5e5]">
            <p className="font-light text-black flex-1 shrink-0">Tank 1</p>
            <p className="font-light text-black flex-1 shrink-0 hidden sm:block">1000L</p>
            <p className="font-light text-black flex-1 shrink-0 hidden sm:block">999</p>
            <p className="font-light text-black flex-1 shrink-0 text-end sm:text-start">998</p>
            <p className="font-light text-black flex-1 shrink-0 hidden sm:block">150,000</p>
          </div>
          <div className="flex flex-row items-center py-2 border-b-1 border-[#e5e5e5]">
            <p className="font-light text-black flex-1 shrink-0 font-medium">Total</p>
            <div className="font-light text-black flex-1 shrink-0 hidden sm:block"><div className="h-[1.5px] w-[25px] bg-black"></div></div>
            <div className="font-light text-black flex-1 shrink-0 hidden sm:block"><div className="h-[1.5px] w-[25px] bg-black"></div></div>
            <p className="font-light text-black flex-1 shrink-0 text-end sm:text-start">998</p>
            <p className="font-light text-black flex-1 shrink-0 hidden sm:block">150,000</p>
          </div>
          </div>
        </div>
        </div>
      </div>
      </div>
    </main>
  );
}
