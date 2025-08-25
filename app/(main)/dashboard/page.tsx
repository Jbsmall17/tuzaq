"use client"
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { ArrowLeft, ArrowRight, Check, Minus, Plus } from 'lucide-react'
import React, { useState } from 'react'

export default function Page() {
  const [step, setStep] = useState(1);
  const WelcomeComp = () => {
    return (
      <div className='auth-width'>
        <div className='mb-3 md:mb-5 py-3 text-white text-center bg-primary'>
          <p className='text-xl uppercase'>welcome, Abdulhaqq!</p>
        </div>
        <p className='font-medium text-xl text-center mb-2'>Set up your station</p>
        <p className='text-center text-base font-light mb-4 md:mb-6'>Set up your stations in just a few easy steps.</p>
         <Button onClick={() => setStep(2)} variant={'secondary'} className="box-shadow w-full cursor-pointer">
            Continue
            <ArrowRight className="inline" />
          </Button>
      </div>
    )
  }

  const BranchNameComp = () => {
    return (
      <div className='auth-width'>
        <p className='font-medium text-xl text-center mb-4 md:mb-6 text-primary'>Set up your branch</p>
        <div className='space-y-2 mb-3 md:mb-5'>
          <Label htmlFor='branchname'>Branch Name</Label>
          <Input id='branchname' placeholder='e.g ojota'/>
        </div>
        <Button onClick={() => setStep(3)} variant={'secondary'} className="box-shadow w-full cursor-pointer">
          Next
          <ArrowRight className="inline" />
        </Button>
      </div>
    )
  }

  const TankSetUp = () =>{
    const [tanks, setTanks] = useState(0)

    const addCount = () => {
      setTanks((prev) => {
        if(prev >= 3){
          return 3
        } 
        return prev + 1
      })
    }
    const removeCount = () =>{
      setTanks((prev)=>{
        if(prev <= 0){
          return 0
        }
        return prev - 1
      })
    }
    return (
      <div className='auth-width'>
        <p className='font-medium text-xl text-center mb-4 text-primary'>Set up your Branch</p>
        <p className='text-base text-center mb-4 md:mb-6'>How many tanks do you have?</p>
        <div className='flex items-center justify-between mb-6 md:mb-8'>
          <div onClick={removeCount} className={`cursor-pointer rounded-full size-8 flex-container ${tanks <= 0 ? 'bg-[#d9d9d9]' : 'bg-secondary'}`}>
            <Minus />
          </div>
          <span className='font-semibold text-2xl'>{tanks}</span>
          <div onClick={addCount} className={`cursor-pointer rounded-full size-8 flex-container ${tanks >=3 ? "bg-[#d9d9d9]" : 'bg-secondary'}`}>
            <Plus />
          </div>
        </div>
        <Button onClick={() => setStep(4)} className="box-shadow w-full cursor-pointer" variant={'secondary'}>
          Continue
          <ArrowRight className="inline" />
        </Button>
      </div>
    )
  }

  const TankForm = ({tankNum}:{tankNum:number}) => {
    return (
      <div className='w-full md:w-2/3 flex flex-row gap-4 md:gap-6 lg:gap-10'>
        <Button onClick={() => setStep(3)} className="hidden md:block w-[150px] box-shadow" variant={'outline'}>
          Previous
          <ArrowLeft className="inline" />
        </Button>
        <div className='flex-1'>
          <p className='font-medium text-center text-xl text-primary mb-4 md:mb-6'>Tank {tankNum}</p>
          <form className='space-y-3'>
            <div className='space-y-1'>
              <Label htmlFor={`tank-${tankNum}-name`}>Tank Name</Label>
              <Input id={`tank-${tankNum}-name`} placeholder='Tank Name' />
            </div>
            <div className='space-y-1'>
              <Label htmlFor={`tank-${tankNum}-capacity`}>Capacity</Label>
              <Input id={`tank-${tankNum}-capacity`} type='number' step={1} placeholder='0000' />
            </div>
            <div className='space-y-1'>
              <Label htmlFor={`tank-${tankNum}-dead-point`}>Dead point</Label>
              <Input id={`tank-${tankNum}-dead-point`} type='number' step={1} placeholder='0000' />
            </div>
            <div className='space-y-1'>
              <Label htmlFor={`tank-${tankNum}-nozzle`}>Nozzle numbers</Label>
              <Input id={`tank-${tankNum}-nozzle`} placeholder='0' />
            </div>
            <div className='mt-4 md:mt-6 lg:mt-8 flex flex-row justify-between'>
              <Button onClick={() => setStep(3)} type='button' className="block w-[100px] md:hidden box-shadow cursor-pointer" variant={'outline'}>
                Previous
                <ArrowLeft className="inline" />
              </Button>
              <Button onClick={() => setStep(5)} type='submit' className="box-shadow w-[100px] md:w-full cursor-pointer" variant={'secondary'}>
                Next
                <ArrowRight className="inline" />
              </Button>
            </div>
          </form>
        </div>
      </div>
    )
  }

  const SummaryComp = () => {
    const TankDetails = ({num, name, capacity, deadPoint, nozzle}:
      {num:number, name:string, capacity:number, deadPoint:number, nozzle:number}) => {
      return (
        <div className='text-[#787878] space-y-4'>
          <p className='font-medium text-[#030c35]'>Tank {num}</p>
          <div className='flex justify-between items-center'>
            <p>Tank Name</p>
            <p className='font-medium text-[#030c35]'>{name}</p>
          </div>
          <div className='flex justify-between items-center'>
            <p>Capacity</p>
            <p className='font-medium text-[#030c35]'>{capacity}</p>
          </div>
          <div className='flex justify-between items-center'>
            <p>Dead Point</p>
            <p className='font-medium text-[#030c35]'>{deadPoint}</p>
          </div>
          <div className='flex justify-between items-center'>
            <p>Nozzle Numbers</p>
            <p className='font-medium text-[#030c35]'>{nozzle}</p>
          </div>
        </div>
      )
    } 
    return (
      <div className='w-full px-2 sm:px-6 md:px-10 lg:px-16 xl:px-24 space-y-4 h-screen overflow-y-auto py-4'>
        <p className='font-medium text-xl text-primary'>Summary</p>
        <div className='text-base text-[#787878] flex justify-between items-center'>
          <p>Number of tanks</p>
          <p className='font-medium text-[#030c35]'>3</p>
        </div>
        <TankDetails num={1} name='Tank 1' capacity={1000} deadPoint={100} nozzle={2} />
        <TankDetails num={2} name='Tank 2' capacity={2000} deadPoint={200} nozzle={4} />
        <TankDetails num={3} name='Tank 3' capacity={3000} deadPoint={300} nozzle={6} />
        <div className='flex justify-between items-center mb-4 md:mb-6'>
          <Button onClick={() => setStep(4)} variant={'outline'} className='w-[100px] md:w-[150px] box-shadow cursor-pointer'>
            Go Back
            <ArrowLeft className="inline" />
          </Button>
          <Button onClick={() => setStep(6)} variant={'secondary'} className='w-[100px] md:w-[150px] box-shadow cursor-pointer'>
            Submit
            <ArrowRight className="inline" />
          </Button>
        </div>
      </div>
    )
  }

  const SuccessComp = () => {
    return (
      <div className="flex flex-col items-center gap-2 md:gap-4">
          <div className="mb-2 md:mb-3 mx-auto h-[180px] w-[180px] bg-white border-2 border-black rounded-full flex justify-center items-center">
            <Check className="text-primary size-24" />
          </div>
          <p className="text-center text-xl font-medium text-primary">Request accepted</p>
          <p className="text-center text-sm">Your request is successful, you can now log in</p>
          <Button onClick={()=> setStep(1)} variant={'secondary'} className="box-shadow w-full cursor-pointer">
            Continue
            <ArrowRight className="inline" />
          </Button>
        </div>
    )
  }

  return (
    <div className={`flex justify-center ${step > 1 ? 'items-start md:items-center' : 'items-center'} flex-1 h-screen auth-padding overflow-y-auto`}>
      {
        step === 1 ? 
        <WelcomeComp /> 
        : step == 2
        ? <BranchNameComp />
        : step == 3
        ? <TankSetUp />
        : step == 4
        ? <TankForm tankNum={1} />
        : step === 5
        ? <SummaryComp />
        : step === 6
        ? <SuccessComp />
        : null
      }
    </div>
  )
}
