import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ChevronRight } from "lucide-react";
import Image from "next/image";
import React from "react";

export default function Page() {
  return (
    <main className="flex-1 main-padding overflow-x-hidden main-height">
      <div className="space-y-4">
        <h1 className="title">Tank Overview</h1>
        <div className="overflow-y-auto scrollable-hidden flex flex-col sm:flex-row gap-4 mb-3 md:mb-5">
            <Card className="w-full sm:w-[235px] shrink-0 py-4 gap-2">
                <CardHeader className="flex flex-row justify-between items-center text-[#787878]">
                    <div className="flex flex-row items-center gap-3">
                        <div className="self-start shrink-0 bg-yellow-200 size-8 rounded-md flex justify-center items-center">
                            <Image
                                src="/tank-line.svg"
                                alt="tank line"
                                width={16}
                                height={16}
                            />
                        </div>
                        <CardTitle className="whitespace-nowrap text-sm lg:text-base font-medium">
                            Total fuel in tanks
                        </CardTitle>
                    </div>
                </CardHeader>
                <div className="flex flex-row sm:flex-col justify-between gap-4">
                    <CardContent>
                        <p className="text-2xl lg:text-3xl font-semibold text-center">
                            12,500L
                        </p>
                    </CardContent>
                </div>
            </Card>
            <Card className="w-full sm:w-[235px] shrink-0 py-4 gap-2">
                <CardHeader className="flex flex-row justify-between items-center text-[#787878]">
                    <div className="flex flex-row items-center gap-3">
                        <div className="self-start shrink-0 bg-pink-200 size-8 rounded-md flex justify-center items-center">
                            <Image
                                src="/tank-line3.svg"
                                alt="tank line"
                                width={16}
                                height={16}
                            />
                        </div>
                        <CardTitle className="whitespace-nowrap text-sm lg:text-base font-medium">
                            Total Deadstock
                        </CardTitle>
                    </div>
                </CardHeader>
                <div className="flex flex-row sm:flex-col justify-between gap-4">
                    <CardContent>
                        <p className="text-2xl lg:text-3xl font-semibold text-center">
                            12,500L
                        </p>
                    </CardContent>
                </div>
            </Card>
            <Card className="w-full sm:w-[235px] shrink-0 py-4 gap-2">
                <CardHeader className="flex flex-row justify-between items-center text-[#787878]">
                    <div className="flex flex-row items-center gap-3">
                        <div className="self-start shrink-0 bg-blue-200 size-8 rounded-md flex justify-center items-center">
                            <Image
                                src="/sales.svg"
                                alt="tank line"
                                width={16}
                                height={16}
                            />
                        </div>
                        <CardTitle className="whitespace-nowrap text-sm lg:text-base font-medium">
                            Today's sales
                        </CardTitle>
                    </div>
                </CardHeader>
                <div className="flex flex-row sm:flex-col justify-between gap-4">
                    <CardContent>
                        <p className="text-2xl lg:text-3xl font-semibold text-center">
                            1800L
                        </p>
                    </CardContent>
                </div>
            </Card>
            <Card className="w-full sm:w-[235px] shrink-0 py-4 gap-2">
                <CardHeader className="flex flex-row justify-between items-center text-[#787878]">
                    <div className="flex flex-row items-center gap-3">
                        <div className="self-start shrink-0 bg-green-200 size-8 rounded-md flex justify-center items-center">
                            <Image
                                src="/low.svg"
                                alt="tank line"
                                width={16}
                                height={16}
                            />
                        </div>
                        <CardTitle className="whitespace-nowrap text-sm lg:text-base font-medium">
                            Low Tank
                        </CardTitle>
                    </div>
                </CardHeader>
                <div className="flex flex-row sm:flex-col justify-between gap-4">
                    <CardContent>
                        <p className="text-2xl lg:text-3xl font-semibold text-center">
                            1/3
                        </p>
                    </CardContent>
                </div>
            </Card>
        </div>
        <div className="w-full overflow-y-auto scrollable-hidden py-4">
            <div className="flex flex-col sm:flex-row gap-4 md:gap-6 sm:w-[800px] lg:w-full">
                <Card className="flex-1 py-4 gap-4">
                    <CardHeader className="text-center text-xl font-medium">
                        Tank 1
                    </CardHeader>
                    <CardContent className="space-y-3">
                        <div className="flex justify-center">
                            <Image
                                src={'/tank.svg'}
                                alt="tank image"
                                width={250}
                                height={150}
                            />
                        </div>
                        <div className="flex flex-row gap-4 items-center justify-center">
                            <div className="flex flex-row items-center gap-2">
                                <div className="h-5 w-1 bg-muted-foreground"></div>
                                <span className="text-muted-foreground">Good fuel</span>
                            </div>
                            <div className="flex flex-row items-center gap-2">
                                <div className="h-5 w-1 bg-secondary"></div>
                                <span className="text-muted-foreground">Dead end</span>
                            </div>
                        </div>
                        <div className="space-y-3">
                            <div className="flex flex-row justify-between items-center">
                                <p className="text-muted-foreground">Liters left</p>
                                <p className="text-black font-medium">6000L</p>
                            </div>
                            <div className="flex flex-row justify-between items-center">
                                <p className="text-muted-foreground">Dead stock</p>
                                <p className="text-black font-medium">2000L</p>
                            </div>
                            <div className="flex flex-row justify-between items-center">
                                <p className="text-muted-foreground">Last offloaded</p>
                                <p className="text-black font-medium">26th May, 2025</p>
                            </div>
                            <div className="flex flex-row justify-between items-center">
                                <p className="text-muted-foreground">Status</p>
                                <p className="text-black font-medium flex flex-row items-center">
                                    <span className="block size-3 bg-green-500 rounded-full mr-3"></span>
                                    <span>safe</span>
                                </p>
                            </div>
                        </div>
                    </CardContent>
                </Card>
                <Card className="flex-1 py-4 gap-4">
                    <CardHeader className="text-center text-xl font-medium">
                        Tank 1
                    </CardHeader>
                    <CardContent className="space-y-3">
                        <div className="flex justify-center">
                            <Image
                                src={'/tank.svg'}
                                alt="tank image"
                                width={250}
                                height={150}
                            />
                        </div>
                        <div className="flex flex-row gap-4 items-center justify-center">
                            <div className="flex flex-row items-center gap-2">
                                <div className="h-5 w-1 bg-muted-foreground"></div>
                                <span className="text-muted-foreground">Good fuel</span>
                            </div>
                            <div className="flex flex-row items-center gap-2">
                                <div className="h-5 w-1 bg-secondary"></div>
                                <span className="text-muted-foreground">Dead end</span>
                            </div>
                        </div>
                        <div className="space-y-3">
                            <div className="flex flex-row justify-between items-center">
                                <p className="text-muted-foreground">Liters left</p>
                                <p className="text-black font-medium">6000L</p>
                            </div>
                            <div className="flex flex-row justify-between items-center">
                                <p className="text-muted-foreground">Dead stock</p>
                                <p className="text-black font-medium">2000L</p>
                            </div>
                            <div className="flex flex-row justify-between items-center">
                                <p className="text-muted-foreground">Last offloaded</p>
                                <p className="text-black font-medium">26th May, 2025</p>
                            </div>
                            <div className="flex flex-row justify-between items-center">
                                <p className="text-muted-foreground">Status</p>
                                <p className="text-black font-medium flex flex-row items-center">
                                    <span className="block size-3 bg-green-500 rounded-full mr-3"></span>
                                    <span>safe</span>
                                </p>
                            </div>
                        </div>
                    </CardContent>
                </Card>
                <Card className="flex-1 py-4 gap-4">
                    <CardHeader className="text-center text-xl font-medium">
                        Tank 1
                    </CardHeader>
                    <CardContent className="space-y-3">
                        <div className="flex justify-center">
                            <Image
                                src={'/tank.svg'}
                                alt="tank image"
                                width={250}
                                height={150}
                            />
                        </div>
                        <div className="flex flex-row gap-4 items-center justify-center">
                            <div className="flex flex-row items-center gap-2">
                                <div className="h-5 w-1 bg-muted-foreground"></div>
                                <span className="text-muted-foreground">Good fuel</span>
                            </div>
                            <div className="flex flex-row items-center gap-2">
                                <div className="h-5 w-1 bg-secondary"></div>
                                <span className="text-muted-foreground">Dead end</span>
                            </div>
                        </div>
                        <div className="space-y-3">
                            <div className="flex flex-row justify-between items-center">
                                <p className="text-muted-foreground">Liters left</p>
                                <p className="text-black font-medium">6000L</p>
                            </div>
                            <div className="flex flex-row justify-between items-center">
                                <p className="text-muted-foreground">Dead stock</p>
                                <p className="text-black font-medium">2000L</p>
                            </div>
                            <div className="flex flex-row justify-between items-center">
                                <p className="text-muted-foreground">Last offloaded</p>
                                <p className="text-black font-medium">26th May, 2025</p>
                            </div>
                            <div className="flex flex-row justify-between items-center">
                                <p className="text-muted-foreground">Status</p>
                                <p className="text-black font-medium flex flex-row items-center">
                                    <span className="block size-3 bg-red-500 rounded-full mr-3"></span>
                                    <span>Low</span>
                                </p>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
      </div>
    </main>
  );
}
