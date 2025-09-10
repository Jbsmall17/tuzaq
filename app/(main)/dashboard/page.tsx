"use client";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardAction,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  Check,
  ChevronRight,
  Minus,
  Plus,
  TrendingDown,
  TrendingUp,
} from "lucide-react";
import Image from "next/image";
import React, { useState } from "react";

export default function Page() {
  const [step, setStep] = useState(1);
  const tankData = [
    {
      id: 1,
      name: "Tank 1",
      sold: "1000L",
      left: "1000L",
      price: 100000,
      status: "Safe",
    },
    {
      id: 2,
      name: "Tank 2",
      sold: "1000L",
      left: "200L",
      price: 20000,
      status: "Safe",
    },
    {
      id: 3,
      name: "Tank 3",
      sold: "",
      left: "",
      price: 0,
      status: "Low",
    },
  ];

  const formatPrice = (price: number) => {
    return `NGN ${price.toLocaleString()}`;
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Safe":
        return "bg-green-500";
      case "Low":
        return "bg-red-500";
      default:
        return "bg-gray-500";
    }
  };

  const WelcomeComp = () => {
    return (
      <div className="auth-width">
        <div className="mb-3 md:mb-5 py-3 text-white text-center bg-primary">
          <p className="text-xl uppercase">welcome, Abdulhaqq!</p>
        </div>
        <p className="font-medium text-xl text-center mb-2">
          Set up your station
        </p>
        <p className="text-center text-base font-light mb-4 md:mb-6">
          Set up your stations in just a few easy steps.
        </p>
        <Button
          onClick={() => setStep(2)}
          variant={"secondary"}
          className="box-shadow w-full cursor-pointer"
        >
          Continue
          <ArrowRight className="inline" />
        </Button>
      </div>
    );
  };

  const BranchNameComp = () => {
    return (
      <div className="auth-width">
        <p className="font-medium text-xl text-center mb-4 md:mb-6 text-primary">
          Set up your branch
        </p>
        <div className="space-y-2 mb-3 md:mb-5">
          <Label htmlFor="branchname">Branch Name</Label>
          <Input id="branchname" placeholder="e.g ojota" />
        </div>
        <Button
          onClick={() => setStep(3)}
          variant={"secondary"}
          className="box-shadow w-full cursor-pointer"
        >
          Next
          <ArrowRight className="inline" />
        </Button>
      </div>
    );
  };

  const TankSetUp = () => {
    const [tanks, setTanks] = useState(0);

    const addCount = () => {
      setTanks((prev) => {
        if (prev >= 3) {
          return 3;
        }
        return prev + 1;
      });
    };
    const removeCount = () => {
      setTanks((prev) => {
        if (prev <= 0) {
          return 0;
        }
        return prev - 1;
      });
    };
    return (
      <div className="auth-width">
        <p className="font-medium text-xl text-center mb-4 text-primary">
          Set up your Branch
        </p>
        <p className="text-base text-center mb-4 md:mb-6">
          How many tanks do you have?
        </p>
        <div className="flex items-center justify-between mb-6 md:mb-8">
          <div
            onClick={removeCount}
            className={`cursor-pointer rounded-full size-8 flex-container ${
              tanks <= 0 ? "bg-[#d9d9d9]" : "bg-secondary"
            }`}
          >
            <Minus />
          </div>
          <span className="font-semibold text-2xl">{tanks}</span>
          <div
            onClick={addCount}
            className={`cursor-pointer rounded-full size-8 flex-container ${
              tanks >= 3 ? "bg-[#d9d9d9]" : "bg-secondary"
            }`}
          >
            <Plus />
          </div>
        </div>
        <Button
          onClick={() => setStep(4)}
          className="box-shadow w-full cursor-pointer"
          variant={"secondary"}
        >
          Continue
          <ArrowRight className="inline" />
        </Button>
      </div>
    );
  };

  const TankForm = ({ tankNum }: { tankNum: number }) => {
    return (
      <div className="w-full md:w-2/3 flex flex-row gap-4 md:gap-6 lg:gap-10">
        <Button
          onClick={() => setStep(3)}
          className="hidden md:block w-[150px] box-shadow"
          variant={"outline"}
        >
          Previous
          <ArrowLeft className="inline" />
        </Button>
        <div className="flex-1">
          <p className="font-medium text-center text-xl text-primary mb-4 md:mb-6">
            Tank {tankNum}
          </p>
          <form className="space-y-3">
            <div className="space-y-1">
              <Label htmlFor={`tank-${tankNum}-name`}>Tank Name</Label>
              <Input id={`tank-${tankNum}-name`} placeholder="Tank Name" />
            </div>
            <div className="space-y-1">
              <Label htmlFor={`tank-${tankNum}-capacity`}>Capacity</Label>
              <Input
                id={`tank-${tankNum}-capacity`}
                type="number"
                step={1}
                placeholder="0000"
              />
            </div>
            <div className="space-y-1">
              <Label htmlFor={`tank-${tankNum}-dead-point`}>Dead point</Label>
              <Input
                id={`tank-${tankNum}-dead-point`}
                type="number"
                step={1}
                placeholder="0000"
              />
            </div>
            <div className="space-y-1">
              <Label htmlFor={`tank-${tankNum}-nozzle`}>Nozzle numbers</Label>
              <Input id={`tank-${tankNum}-nozzle`} placeholder="0" />
            </div>
            <div className="mt-4 md:mt-6 lg:mt-8 flex flex-row justify-between">
              <Button
                onClick={() => setStep(3)}
                type="button"
                className="block w-[100px] md:hidden box-shadow cursor-pointer"
                variant={"outline"}
              >
                Previous
                <ArrowLeft className="inline" />
              </Button>
              <Button
                onClick={() => setStep(5)}
                type="submit"
                className="box-shadow w-[100px] md:w-full cursor-pointer"
                variant={"secondary"}
              >
                Next
                <ArrowRight className="inline" />
              </Button>
            </div>
          </form>
        </div>
      </div>
    );
  };

  const SummaryComp = () => {
    const TankDetails = ({
      num,
      name,
      capacity,
      deadPoint,
      nozzle,
    }: {
      num: number;
      name: string;
      capacity: number;
      deadPoint: number;
      nozzle: number;
    }) => {
      return (
        <div className="text-[#787878] space-y-4">
          <p className="font-medium text-[#030c35]">Tank {num}</p>
          <div className="flex justify-between items-center">
            <p>Tank Name</p>
            <p className="font-medium text-[#030c35]">{name}</p>
          </div>
          <div className="flex justify-between items-center">
            <p>Capacity</p>
            <p className="font-medium text-[#030c35]">{capacity}</p>
          </div>
          <div className="flex justify-between items-center">
            <p>Dead Point</p>
            <p className="font-medium text-[#030c35]">{deadPoint}</p>
          </div>
          <div className="flex justify-between items-center">
            <p>Nozzle Numbers</p>
            <p className="font-medium text-[#030c35]">{nozzle}</p>
          </div>
        </div>
      );
    };
    return (
      <div className="w-full px-2 sm:px-6 md:px-10 lg:px-16 xl:px-24 space-y-4 h-screen overflow-y-auto py-4">
        <p className="font-medium text-xl text-primary">Summary</p>
        <div className="text-base text-[#787878] flex justify-between items-center">
          <p>Number of tanks</p>
          <p className="font-medium text-[#030c35]">3</p>
        </div>
        <TankDetails
          num={1}
          name="Tank 1"
          capacity={1000}
          deadPoint={100}
          nozzle={2}
        />
        <TankDetails
          num={2}
          name="Tank 2"
          capacity={2000}
          deadPoint={200}
          nozzle={4}
        />
        <TankDetails
          num={3}
          name="Tank 3"
          capacity={3000}
          deadPoint={300}
          nozzle={6}
        />
        <div className="flex justify-between items-center mb-4 md:mb-6">
          <Button
            onClick={() => setStep(4)}
            variant={"outline"}
            className="w-[100px] md:w-[150px] box-shadow cursor-pointer"
          >
            Go Back
            <ArrowLeft className="inline" />
          </Button>
          <Button
            onClick={() => setStep(6)}
            variant={"secondary"}
            className="w-[100px] md:w-[150px] box-shadow cursor-pointer"
          >
            Submit
            <ArrowRight className="inline" />
          </Button>
        </div>
      </div>
    );
  };

  const SuccessComp = () => {
    return (
      <div className="flex flex-col items-center gap-2 md:gap-4">
        <div className="mb-2 md:mb-3 mx-auto h-[180px] w-[180px] bg-white border-2 border-black rounded-full flex justify-center items-center">
          <Check className="text-primary size-24" />
        </div>
        <p className="text-center text-xl font-medium text-primary">
          Request accepted
        </p>
        <p className="text-center text-sm">
          Your request is successful, you can now log in
        </p>
        <Button
          onClick={() => setStep(7)}
          variant={"secondary"}
          className="box-shadow w-full cursor-pointer"
        >
          Continue
          <ArrowRight className="inline" />
        </Button>
      </div>
    );
  };

  const MainContent = () => {
    return (
      <div className="flex-1 main-padding overflow-x-hidden main-height">
        <h1 className="title mb-2">Dashboard</h1>
        <p className="text-base font-medium">Updated last</p>
        <div className="flex flex-col lg:flex-row gap-4 justify-between lg:items-center mb-6 mt-2">
          <div className="flex flex-row gap-4 items-center">
            <div className="size-18 flex justify-center items-center border-[1.5px] border-primary rounded-full text-primary text-base font-medium">
              20
            </div>
            <div className="font-medium text-base">
              <p>Tue,</p>
              <p>December</p>
            </div>
          </div>
          <div className="flex flex-row gap-4 items-center font-medium">
            <Button className="box-shadow" variant={"secondary"}>
              <Plus className="font-semibold" />
              Log Sale
            </Button>
            <div className="text-sm flex flex-row px-1.5 py-2.5 rounded-md gap-4 bg-[#faf9f9]">
              <span>Fuel Price</span>
              <span>NGN 989</span>
            </div>
            <div className="text-sm hidden md:flex flex-row px-1.5 py-2.5 rounded-md gap-6 bg-[#faf9f9]">
              <span>Last offload</span>
              <span>24th, March 2025</span>
            </div>
          </div>
        </div>
        <div className="p-3 md:p-4 lg:p-5 border rounded-md overflow-y-auto scrollable-hidden flex flex-row gap-6 items-center mb-6">
          <div className="shrink-0 grid grid-cols-3 gap-4">
            <Card className="w-[250px] py-4 gap-4">
              <CardHeader className="flex flex-col">
                <div className="w-full flex flex-row justify-between">
                  <Image
                    src="/oil_barrel.svg"
                    alt="oil barrel"
                    width={24}
                    height={24}
                  />
                  <CardAction className="flex flex-row gap-2 text-primary">
                    <span>View report</span>
                    <ArrowUpRight />
                  </CardAction>
                </div>
                <CardTitle className="text-base font-semibold">
                  Tank 1
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center text-[#787878]">
                <p>Liters left</p>
                <p>
                  <span className="text-3xl font-semibold text-black">
                    6000
                  </span>{" "}
                  liters
                </p>
              </CardContent>
            </Card>
            <Card className="w-[250px] py-4 gap-4">
              <CardHeader className="flex flex-col">
                <div className="w-full flex flex-row justify-between">
                  <Image
                    src="/oil_barrel.svg"
                    alt="oil barrel"
                    width={24}
                    height={24}
                  />
                  <CardAction className="flex flex-row gap-2 text-primary">
                    <span>View report</span>
                    <ArrowUpRight />
                  </CardAction>
                </div>
                <CardTitle>Tank 1</CardTitle>
              </CardHeader>
              <CardContent className="text-center text-[#787878]">
                <p>Liters left</p>
                <p>
                  <span className="text-3xl font-semibold text-black">
                    6000
                  </span>{" "}
                  liters
                </p>
              </CardContent>
            </Card>
            <Card className="w-[250px] py-4 gap-4">
              <CardHeader className="flex flex-col">
                <div className="w-full flex flex-row justify-between">
                  <Image
                    src="/oil_barrel.svg"
                    alt="oil barrel"
                    width={24}
                    height={24}
                  />
                  <CardAction className="flex flex-row gap-2 text-primary">
                    <span>View report</span>
                    <ArrowUpRight />
                  </CardAction>
                </div>
                <CardTitle>Tank 1</CardTitle>
              </CardHeader>
              <CardContent className="text-center text-[#787878]">
                <p>Liters left</p>
                <p>
                  <span className="text-3xl font-semibold text-black">
                    6000
                  </span>{" "}
                  liters
                </p>
              </CardContent>
            </Card>
          </div>
          <div className="py-3 px-2 rounded-md border border-2 border-black border-dashed flex flex-col gap-2 items-center">
            <Plus />
            <p className="text-primary text-sm whitespace-nowrap">
              Log Offload
            </p>
          </div>
        </div>
        <div className="block sm:hidden space-y-4">
          <p className="text-base font-medium">Daily Tank Log</p>
          <div className="space-y-2 mb-4">
            <div className="rounded-md bg-white py-2 px-4">
              <p className="text-center text-xl font-semibold mb-3">Tank 1</p>
              <div className="space-y-3">
                <div className="flex flex-row justify-between items-center">
                  <p className="text-base text-muted-foreground">
                    Liters offloaded
                  </p>
                  <p className="text-base text-blue-500 font-medium w-[20%]">
                    1400L
                  </p>
                </div>
                <div className="flex flex-row justify-between items-center">
                  <p className="text-base text-muted-foreground">Liters sold</p>
                  <p className="text-base text-green-500 font-medium w-[20%]">
                    50L
                  </p>
                </div>
                <div className="flex flex-row justify-between items-center">
                  <p className="text-base text-muted-foreground">
                    Price per Liter
                  </p>
                  <p className="text-base text-black font-medium w-[20%]">
                    900 NGN
                  </p>
                </div>
                <div className="flex flex-row justify-between items-center">
                  <p className="text-base text-muted-foreground">Total Price</p>
                  <p className="text-base text-black font-medium w-[20%]">
                    50,000 NGN
                  </p>
                </div>
              </div>
            </div>
            <div className="rounded-md bg-white py-2 px-4">
              <p className="text-center text-xl font-semibold mb-3">Tank 2</p>
              <div className="space-y-3">
                <div className="flex flex-row justify-between items-center">
                  <p className="text-base text-muted-foreground">
                    Liters offloaded
                  </p>
                  <p className="text-base text-blue-500 font-medium w-[20%]">
                    1400L
                  </p>
                </div>
                <div className="flex flex-row justify-between items-center">
                  <p className="text-base text-muted-foreground">Liters sold</p>
                  <p className="text-base text-green-500 font-medium w-[20%]">
                    50L
                  </p>
                </div>
                <div className="flex flex-row justify-between items-center">
                  <p className="text-base text-muted-foreground">
                    Price per Liter
                  </p>
                  <p className="text-base text-black font-medium w-[20%]">
                    900 NGN
                  </p>
                </div>
                <div className="flex flex-row justify-between items-center">
                  <p className="text-base text-muted-foreground">Total Price</p>
                  <p className="text-base text-black font-medium w-[20%]">
                    50,000 NGN
                  </p>
                </div>
              </div>
            </div>
            <div className="rounded-md bg-white py-2 px-4">
              <p className="text-center text-xl font-semibold mb-3">Tank 3</p>
              <div className="space-y-3">
                <div className="flex flex-row justify-between items-center">
                  <p className="text-base text-muted-foreground">
                    Liters offloaded
                  </p>
                  <p className="text-base text-blue-500 font-medium w-[20%]">
                    1400L
                  </p>
                </div>
                <div className="flex flex-row justify-between items-center">
                  <p className="text-base text-muted-foreground">Liters sold</p>
                  <p className="text-base text-green-500 font-medium w-[20%]">
                    50L
                  </p>
                </div>
                <div className="flex flex-row justify-between items-center">
                  <p className="text-base text-muted-foreground">
                    Price per Liter
                  </p>
                  <p className="text-base text-black font-medium w-[20%]">
                    900 NGN
                  </p>
                </div>
                <div className="flex flex-row justify-between items-center">
                  <p className="text-base text-muted-foreground">Total Price</p>
                  <p className="text-base text-black font-medium w-[20%]">
                    50,000 NGN
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full scrollable-hidden overflow-auto flex flex-col-reverse sm:flex-row gap-4 md:gap-6">
          <div className="flex-1 space-y-4">
            <div className="space-y-4 hidden sm:block">
              <p className="text-xl font-medium">Daily Tank Log</p>
              <div>
                <Table className="bg-white rounded-md">
                  <TableHeader className="bg-[#eaf1ff]">
                    <TableRow>
                      <TableHead>Tank</TableHead>
                      <TableHead>Fuel Sold</TableHead>
                      <TableHead>Fuel Left</TableHead>
                      <TableHead>Price</TableHead>
                      <TableHead>Status</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {tankData.map((tank) => (
                      <TableRow key={tank.id}>
                        <TableCell>{tank.name}</TableCell>
                        <TableCell>
                          {tank.sold !== "" ? tank.sold : "—"}
                        </TableCell>
                        <TableCell>
                          {tank.left !== "" ? tank.left : "—"}
                        </TableCell>
                        <TableCell>
                          {tank.price !== 0 ? formatPrice(tank.price) : "—"}
                        </TableCell>
                        <TableCell>
                          <span
                            className={`size-3 rounded-full ${getStatusColor(
                              tank.status
                            )}`}
                          ></span>
                          <p>{tank.status}</p>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </div>
            <div className="space-y-4">
              <p className="text-base sm:text-xl font-medium">Statistics</p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Card className="flex-1 py-4 gap-4">
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
                    <div className="flex flex-row gap-1 items-end">
                      <p className="text-2xl font-semibold">2,000.00</p>
                      <p className="text-sm">liters</p>
                    </div>
                  </CardContent>
                  <CardFooter className="text-xs lg:text-sm px-2 md:-px-3 flex flex-row gap-2 lg:gap-3">
                    <p className="text-red-500">
                      <TrendingDown className="inline mr-1" />
                      -2.4%
                    </p>
                    <p>vs yesterday</p>
                  </CardFooter>
                  </div>
                </Card>
                <Card className="flex-1 py-4 gap-4">
                  <CardHeader className="px-2 md:px-3 flex flex-row justify-between items-center text-[#787878]">
                    <div className="flex flex-row items-center gap-3">
                      <div className="self-start shrink-0 bg-green-200 size-8 rounded-md flex justify-center items-center">
                        <TrendingUp className="text-green-500 size-4" />
                      </div>
                      <CardTitle className="text-xs lg:text-sm">
                        Total Profit
                      </CardTitle>
                    </div>
                    <ChevronRight className="size-5" />
                  </CardHeader>
                  <div className="flex flex-row sm:flex-col justify-between gap-4">
                  <CardContent className="px-2 md:px-3">
                    <div className="flex flex-row gap-1 items-end">
                      <p className="text-2xl font-semibold">150,000.00</p>
                      <p className="text-sm">NGN</p>
                    </div>
                  </CardContent>
                  <CardFooter className="text-xs lg:text-sm px-2 md:-px-3 flex flex-row gap-2 lg:gap-3">
                    <p className="text-green-500">
                      <TrendingUp className="inline mr-1" />
                      -2.4%
                    </p>
                    <p>vs yesterday</p>
                  </CardFooter>
                  </div>
                </Card>
                <Card className="flex-1 py-4 gap-4">
                  <CardHeader className="px-2 md:px-3 flex flex-row justify-between items-center text-[#787878]">
                    <div className="flex flex-row items-center gap-3">
                      <div className="self-start shrink-0 bg-purple-200 size-8 rounded-md flex justify-center items-center">
                        <Image
                          src="/bar.svg"
                          alt="tank line"
                          width={16}
                          height={16}
                        />
                      </div>
                      <CardTitle className="text-xs lg:text-sm">
                        Total Revenue
                      </CardTitle>
                    </div>
                    <ChevronRight className="size-5" />
                  </CardHeader>
                  <div className="flex flex-row sm:flex-col justify-between gap-4">
                  <CardContent className="px-2 md:px-3">
                    <div className="flex flex-row gap-1 items-end">
                      <p className="text-2xl font-semibold">50,000.00</p>
                      <p className="text-sm">NGN</p>
                    </div>
                  </CardContent>
                  <CardFooter className="text-xs lg:text-sm px-2 md:-px-3 flex flex-row gap-2 lg:gap-3">
                    <p className="text-red-500">
                      <TrendingDown className="inline mr-1" />
                      -1%
                    </p>
                    <p>vs yesterday</p>
                  </CardFooter>
                  </div>
                </Card>
              </div>
            </div>
          </div>
          <div className="space-y-4 w-full sm:w-[250px] lg:w-[275px] xl:w-[300px]">
            <p className="text-base sm:text-xl font-medium">
              Overall Performance
            </p>
            <div className="p-3 rounded-md bg-white">
              <div className="mb-4 md:mb-6 flex flex-row justify-between items-center gap-5">
                <Input 
                  type="date"
                />
                <p className="whitespace-nowrap">Vs last month</p>
              </div>
              <div className="space-y-4 mb-4">
                <div className="flex flex-row justify-between items-center">
                  <div className="space-y-1">
                    <p className="text-sm font-light">Total liters</p>
                    <p className="text-2xl font-medium">
                      500,000.00<span className="tect-sm font-linght">L</span>
                    </p>
                  </div>
                  <p className="text-base text-green-500">+2.4%</p>
                </div>
                <div className="flex flex-row justify-between items-center">
                  <div className="space-y-1">
                    <p className="text-sm font-light">Total sales</p>
                    <p className="text-2xl font-medium">
                      500,000.00<span className="text-sm font-light">NGN</span>
                    </p>
                  </div>
                  <p className="text-base text-green-500">+2.4%</p>
                </div>
                <div className="flex flex-row justify-between items-center">
                  <div className="text-sm font-light space-y-1">
                    <p>Total tank</p>
                    <p className="text-2xl font-medium">
                      500,000.00<span>L</span>
                    </p>
                  </div>
                  <p className="text-base text-green-500">+2.4%</p>
                </div>
                <div className="flex flex-row justify-between items-center">
                  <div className="text-sm font-light space-y-1">
                    <p>Total profit</p>
                    <p className="text-2xl font-medium">
                      500,000.00<span>NGN</span>
                    </p>
                  </div>
                  <p className="text-base text-red-500">-1%</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <>
      <div
        className={`${step < 7 ? "flex" : "hidden"} justify-center ${
          step > 1 ? "items-start md:items-center" : "items-center"
        } flex-1 auth-padding main-height`}
      >
        {step === 1 ? (
          <WelcomeComp />
        ) : step == 2 ? (
          <BranchNameComp />
        ) : step == 3 ? (
          <TankSetUp />
        ) : step == 4 ? (
          <TankForm tankNum={1} />
        ) : step === 5 ? (
          <SummaryComp />
        ) : step === 6 ? (
          <SuccessComp />
        ) : null}
      </div>
      {step >= 7 && <MainContent />}
    </>
  );
}
