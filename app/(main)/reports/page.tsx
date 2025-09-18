"use client"
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { ChartConfig, ChartContainer, ChartLegend, ChartLegendContent, ChartTooltip, ChartTooltipContent } from '@/components/ui/chart'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import {ChevronDown, TrendingUp, TriangleAlert } from 'lucide-react'
import React from 'react'
import { Bar, BarChart, CartesianGrid, XAxis } from 'recharts'

const chartData = [
  { month: "January", sales: 186, revenue: 80 },
  { month: "February", sales: 305, revenue: 200 },
  { month: "March", sales: 237, revenue: 120 },
  { month: "April", sales: 73, revenue: 190 },
  { month: "May", sales: 209, revenue: 130 },
  { month: "June", sales: 214, revenue: 140 },
]

const chartConfig = {
  sales: {
    label: "Sales",
    color: "var(--chart-1)",
  },
  revenue: {
    label: "Revenue",
    color: "var(--chart-2)",
  },
} satisfies ChartConfig

const tableData = [
  {
    name: "Tank 1",
    sold: "1400L",
    offloaded: "2000L",
    efficiency: "90%",
    date: "June 5, 2025"
  },
  {
    name: "Tank 2",
    sold: "1400L",
    offloaded: "2000L",
    efficiency: "90%",
    date: "June 5, 2025"
  },
  {
    name: "Tank 2",
    sold: "1400L",
    offloaded: "2000L",
    efficiency: "90%",
    date: "June 5, 2025"
  }
]

export default function page() {
  return (
    <main className="flex-1 main-padding overflow-x-hidden main-height">
      <div className="space-y-4">
        <div className='space-y-2'>
            <h1 className='title'>Report</h1>
            <p className='text-muted-foreground text-base'>Updated till 20th of May</p>
        </div>
        <div className="w-full overflow-y-auto scrollable-hidden py-4">
        <div className='flex flex-col md:flex-row gap-4 md:gap-6 md:w-[800px] lg:w-full'>
            <div className='flex-1 space-y-2'>
                <p className='text-xl font-medium'>Key Insight</p>
                <div className='p-1.5 lg:p-2 space-y-3 rounded-md border-2 border-dashed border-primary'>
                    <p className='text-sm lg:text-base'>
                        <TriangleAlert className='inline mr-4' />
                        Tank 3 in near deadstock needs offload
                    </p>
                    <p className='text-sm lg:text-base'>
                        <TrendingUp className='inline mr-4 text-green-500' />
                        Sales increased by 10% compared to last week
                    </p>
                </div>
                <p className='text-xl font-medium'>Overview performance</p>
                <Card className='py-4 gap-4 bg-[#faf9f9]'>
                    <CardHeader className='px-4'>
                        <div className='flex flex-row items-center gap-3'>
                        <div className='text-sm p-2 border border-black rounded-full flex flex-row items-center gap-2'>
                            <p>This week</p>
                            <ChevronDown className='size-5' />
                        </div>
                        <p className='text-sm'>Vs</p>
                        <div className='text-sm p-2 border border-black rounded-full flex flex-row items-center gap-2'>
                            <p>Last week</p>
                            <ChevronDown className='size-5' />
                        </div>
                        </div>
                    </CardHeader>
                    <CardContent className='px-4 space-y-2'>
                        <div className='bg-white p-2 lg:p-2.5 rounded-md flex flex-row justify-between items-center'>
                            <div className='space-y-1'>
                              <p className='text-sm'>Total liter</p>
                              <p className='text-xl font-medium'>500.00<span className='text-xs'>L</span></p>
                            </div>
                            <p className='text-base text-green-500'>+2.4%</p>
                        </div>
                        <div className='bg-white p-2 lg:p-2.5 rounded-md flex flex-row justify-between items-center'>
                            <div className='space-y-1'>
                              <p className='text-sm'>Total sales</p>
                              <p className='text-xl font-medium'>500,000.00<span className='text-xs'>NGN</span></p>
                            </div>
                            <p className='text-base text-green-500'>+2.4%</p>
                        </div>
                        <div className='bg-white p-2 lg:p-2.5 rounded-md flex flex-row justify-between items-center'>
                            <div className='space-y-1'>
                              <p className='text-sm'>Total profit</p>
                              <p className='text-xl font-medium'>500,000.00<span className='text-xs'>NGN</span></p>
                            </div>
                            <p className='text-base text-red-500'>-1%</p>
                        </div>
                        <div className='bg-white p-2 lg:p-2.5 rounded-md flex flex-row justify-between items-center'>
                            <div className='space-y-1'>
                              <p className='text-sm'>Total offload</p>
                              <p className='text-xl font-medium'>500.00<span className='text-xs'>L</span></p>
                            </div>
                            <p className='text-base text-green-500'>-1%</p>
                        </div>
                        <div className='bg-white p-2 lg:p-2.5 rounded-md flex flex-row justify-between items-center'>
                            <div className='space-y-1'>
                              <p className='text-sm'>Total revenue</p>
                              <p className='text-xl font-medium'>500,000.00<span className='text-xs'>L</span></p>
                            </div>
                            <p className='text-base text-green-500'>-1%</p>
                        </div>
                        <div className='bg-white p-2 lg:p-2.5 rounded-md flex flex-row justify-between items-center'>
                            <div className='space-y-1'>
                              <p className='text-sm'>Total tank</p>
                              <p className='text-xl font-medium'>Tank 1</p>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </div>
            <div className='flex-1 space-y-2'>
              <p className='text-xl font-medium'>Sales vs Revenue</p>
              <Card className='py-4 gap-4'>
                <CardHeader className='px-4'>
                  <div className='flex flex-row justify-between items-center flex-wrap'>
                    <p className='text-base sm:text-xl font-medium'>N2,000,000.00</p>
                    <div className='flex flex-row items-center gap-4'>
                      <div className='flex flex-row items-center gap-2'>
                        <div className='size-3 rounded-full bg-primary'></div>
                        <p className='text-xs'>Sales</p>
                      </div>
                      <div className='flex flex-row items-center gap-2'>
                        <div className='size-3 rounded-full bg-[#d1ddf3]'></div>
                        <p className='text-xs'>Revenue</p>
                      </div>
                    </div>
                    <input
                      type='date'
                      className='hidden lg:inline border-[1.5px] border-primary rounded-md p-1 w-[150px]'
                    />
                  </div>
                  <div className='inline lg:hidden text-end'>
                    <input
                      type='date'
                      className='border-[1.5px] border-primary rounded-md p-1 w-[150px]'
                    />
                  </div>
                </CardHeader>
                <CardContent>
                  <ChartContainer config={chartConfig}>
                    <BarChart accessibilityLayer data={chartData}>
                      <CartesianGrid vertical={false} />
                      <XAxis
                        dataKey="month"
                        tickLine={false}
                        tickMargin={10}
                        axisLine={false}
                        tickFormatter={(value) => value.slice(0, 3)}
                      />
                      <ChartTooltip 
                        content={<ChartTooltipContent hideLabel />} 
                      />
                      <ChartLegend content={<ChartLegendContent />} />
                      <Bar
                        dataKey="sales"
                        stackId="a"
                        fill="var(--color-sales)"
                        radius={[0, 0, 4, 4]}
                      />
                      <Bar
                        dataKey="revenue"
                        stackId="a"
                        fill="var(--color-revenue)"
                        radius={[4,4,0, 0]}
                      />
                    </BarChart>
                  </ChartContainer>
                </CardContent>
              </Card>
              <p className='text-xl font-medium'>Tank Overview</p>
              <Card className='py-4 gap-4'>
                <CardHeader className='px-4'>
                  <div className='flex flex-row justify-between items-end'>
                    <div className='space-y-2'>
                      <p className='text-sm text-muted-foreground'>Total liters</p>
                      <p className='text-xl font-medium'>2,000.00 <span className='text-xs font-medium'>L</span></p>
                    </div>
                    <div className='p-1.5 rounded-md border border-primary'>
                      This week
                      <ChevronDown className='inline ml-3 size-4' />
                    </div>
                  </div>
                </CardHeader>
                <CardContent className='px-4'>
                  <Table className='rounded-md'>
                    <TableHeader className='bg-primary text-white'>
                      <TableRow>
                        <TableHead className='text-white rounded-tl-md rounded-bl-md'>Tank</TableHead>
                        <TableHead className='text-white'>Litres sold</TableHead>
                        <TableHead className='text-white'>Offloaded</TableHead>
                        <TableHead className='text-white'>Efficiency</TableHead>
                        <TableHead className='text-white rounded-tr-md rounded-br-md'>Last offload</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {
                        tableData.map((data,idx)=>(
                          <TableRow className='border-0' key={idx}>
                            <TableCell>{data.name}</TableCell>
                            <TableCell>{data.sold}</TableCell>
                            <TableCell>{data.offloaded}</TableCell>
                            <TableCell>{data.efficiency}</TableCell>
                            <TableCell>{data.date}</TableCell>
                          </TableRow>
                        ))
                      }             
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>

            </div>
        </div>
        </div>
      </div>
    </main>
  )
}
