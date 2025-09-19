"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { useMyContext } from "@/context";
import { ChevronRight, MoveLeft, Search } from "lucide-react";
import Image from "next/image";
import React, {useState } from "react";

const data = [
    {
     name: "Gloria Edet",
     email: "Gloria@gmail.com"   
    },
    {
     name: "Gloria Edet",
     email: "Gloria@gmail.com"   
    }
]

const existngUsersData = [
    {
        name: "Gloria Edet",
        status: "Online"
    },
    {
        name: "Gloria Edet",
        status: "Last seen yesterday"
    },
    {
        name: "Gloria Edet",
        status: "Last seen yesterday"
    }
]


export default function Page() {
  const {usersStep, setUsersStep} = useMyContext()
  const [role, setRole] = useState("Admin")
  const [status, setStatus] = useState("Online")

  const showRoleDetails = (role: string) =>{
    setUsersStep(1)
    setRole(role)
  }

  const formatStatus = (status: string) =>{
    switch(status){
        case "Online":
            return `bg-green-500`;
        case "Last seen yesterday":
            return `bg-blue-500`;
        default:
            return `bg-grey-500`
        }
    }


  const Role = ({ icon, role,handleRoleDetails }: {icon:string; role: string,handleRoleDetails: ()=> void }) => {
    return (
      <div onClick={handleRoleDetails} className="flex justify-between items-center p-4 rounded-md border border-muted-foreground">
        <div className="flex items-center gap-3">
          <Image 
            src={icon}
            alt={`${role}'s image`}
            width={24}
            height={24}
            />
          <p>{role}</p>
        </div>
        <ChevronRight className="size-4" />
      </div>
    );
  };

  const RoleDetails = ({role}:{role: string}) =>{

    const Request = ({name, email}:{name: string, email: string}) =>{
        const url = role == 'Admin' ? "/admin.svg" : role == "Manager" ? "/manager.svg" : "/attendant.svg"
        return (
            <div className="py-4 px-4 md:px-6 rounded-md border border-muted-forground flex flex-col sm:flex-row gap-2 sm:gap-0 justify-between sm:items-center">
                <div className="flex flex-row items-center gap-4">
                    <div className="flex flex-row items-center gap-2">
                    <div className="p-1.5 rounded-sm bg-[#e5e5e5]">
                    <Image
                        src={url}
                        alt="image"
                        width={24}
                        height={24}
                    />
                    </div>
                    <p className="text-base text-black">{name}</p>
                    </div>
                    <p className="text-base text-muted-foreground">{email}</p>
                </div>
                <div className="flex flex-row gap-4 items-center">
                    <Button variant={'secondary'} className="flex-1 sm:w-[125px] box-shadow">Accept</Button>
                    <Button variant={'outline'} className="flex-1 sm:w-[125px] box-shadow">Decline</Button>
                </div>
            </div>
        )
    }

    const User = ({name, status}:{name: string, status: string}) =>{
        const url = role == 'Admin' ? "/admin.svg" : role == "Manager" ? "/manager.svg" : "/attendant.svg"
        return (
            <div onClick={() => {setUsersStep(2); setStatus(status)}} className="py-4 px-4 md:px-6 rounded-md border border-muted-forground flex flex-row justify-between items-center">
                <div className="flex flex-row items-center gap-3">
                    <div className="p-1.5 rounded-sm bg-[#e5e5e5]">
                    <Image
                        src={url}
                        alt="image"
                        width={24}
                        height={24}
                    />
                    </div>
                    <p>{name}</p>
                </div>
                <div className="w-[200px] md:w-[300px] flex flex-row justify-between items-center">
                    <div className="text-muted-foreground flex flex-row gap-2 items-center">
                        <div className={`size-2 rounded-full ${formatStatus(status)}`}></div>
                        <p className="text-sm">{status}</p>
                    </div>
                    <ChevronRight className="size-4 text-muted-foreground" />
                </div>
            </div>
        )
    }

    return (
        <>
            <div className="flex flex-row justify-between items-center">
                <div className="flex flex-row items-center gap-4">
                    <Button 
                        variant={'outline'}
                        className="w-[40px] sm:w-[48px] md:w-[64px] box-shadow"
                        onClick={()=> setUsersStep(0)}
                    >
                        <MoveLeft />  
                    </Button>
                    <p className="text-xl sm:text-2xl text-primary font-semibold">{role}</p>
                </div>
                <div className="flex flex-col sm:flex-row gap-4 items-end sm:items-center">
                    <span className="text-sm text-base underline font-medium">Edit access</span>
                    <div className="relative">
                        <Search className="absolute left-4 top-2 size-4 text-muted-foreground" />
                        <Input className="w-[200px] sm:w-full pl-8 rounded-full" type="text" />
                    </div>
                </div>
            </div>
            <p className="text-muted-foreground text-xl">Requests</p>
            <div className="space-y-3">
            {
                data.map((item,idx)=>(
                    <Request
                        key={idx} 
                        name={item.name}
                        email={item.email}
                    />
                ))
            }
            </div>
            <p className="text-muted-foreground text-xl">Existing users</p>
            <div className="space-y-3">
                {
                    existngUsersData.map(({name,status}, idx)=>(
                        <User 
                            key={idx}
                            name={name}
                            status={status}
                        />
                    ))
                }
            </div>
        </>
    )
  }

  const UserDetails = ({role, status}: {role: string, status: string}) =>{
    const url = role == 'Admin' ? "/admin.svg" : role == "Manager" ? "/manager.svg" : "/attendant.svg"
    return (
        <div className="flex flex-row divide-x-2 md:w-[800px] lg:w-full">
            <div className="hidden md:block flex-1 pr-4 md:pr-6 space-y-6 sm:space-y-8 lg:space-y-10">
                <div className="flex flex-row justify-between items-center">
                    <div className="flex flex-row items-center gap-4">
                        <Button 
                            variant={'outline'}
                            className="w-[64px] box-shadow"
                            onClick={()=> setUsersStep(1)}
                        >
                            <MoveLeft />  
                        </Button>
                        <p className="text-xl sm:text-2xl text-primary font-semibold">{role}</p>
                    </div>
                    <span className="text-sm text-base underline font-medium">Edit access</span>
                </div>
                <div className="space-y-4 sm:space-y-6 lg:space-y-8">
                <div className="flex flex-row items-center gap-3">
                    <div className="p-1.5 rounded-sm bg-[#e5e5e5]">
                        <Image
                            src={url}
                            alt={`${role}'s icon`}
                            width={24}
                            height={24}
                        />
                    </div>
                    <p className="text-xl font-medium">Gloria Edet</p>
                    <div className={`size-2 rounded-full ${formatStatus(status)}`}></div>
                    <p className="text-muted-foreground text-sm">{status}</p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2 text-base">
                        <p className="text-muted-foreground">First Name</p>
                        <p className="text-black font-medium">Adeyemi</p>
                    </div>
                    <div className="space-y-2 text-base">
                        <p className="text-muted-foreground">Last Name</p>
                        <p className="text-black font-medium">Hanson</p>
                    </div>
                    <div className="space-y-2 text-base">
                        <p className="text-muted-foreground">Email address</p>
                        <p className="text-black font-medium">Adeyemi@gmail.com</p>
                    </div>
                    <div className="space-y-2 text-base">
                        <p className="text-muted-foreground">Role</p>
                        <p className="text-black font-medium">Manager</p>
                    </div>
                </div>
                </div>
                <div>
                    <Button
                        variant={'outline'}
                        className="box-shadow w-[150px]"
                    >
                        Remove User
                    </Button>
                </div>
            </div>
            <div className="flex-1 pl-4 md:pl-6 space-y-6 sm:space-y-8 lg:space-y-10">
                <div  className="flex justify-between items-center md:hidden">
                    <div className="flex flex-row items-center gap-4">
                        <Button 
                            variant={'outline'}
                            className="w-[40px] sm:w-[48px] box-shadow"
                            onClick={()=> setUsersStep(1)}
                        >
                            <MoveLeft />  
                        </Button>
                        <p className="text-base sm:text-2xl text-primary font-semibold">Gloria Edet</p>
                    </div>
                    <span className="text-sm text-base underline font-medium">Edit access</span>
                </div>
                <div className="flex flex-row justify-between items-center">
                    <p>Activity log</p>
                    <div className="relative">
                        <Search className="absolute pl-4 top-1 size-8" />
                        <Input className="rounded-full pl-10 text-black text-sm" placeholder="Search Anything" />
                    </div>
                </div> 
                <div className="space-y-4">
                    <div className="space-y-2">
                        <p className="inline-block p-1.5 text-black bg-[#d1ddf3] rounded-sm text-sm">21st March,2025</p>
                        <Table>
                            <TableHeader>
                                <TableRow>
                                    <TableHead>Time</TableHead>
                                    <TableHead className="text-center">Action</TableHead>
                                    <TableHead>Description</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                <TableRow className="border-0">
                                    <TableCell>7:30am</TableCell>
                                    <TableCell className="text-center">Offloaded fuel</TableCell>
                                    <TableCell>8000L to Tank 2</TableCell>
                                </TableRow>
                                <TableRow className="border-0">
                                    <TableCell>7:30am</TableCell>
                                    <TableCell className="text-center">Recorded daily sale</TableCell>
                                    <TableCell>N1,200,000</TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </div>
                    <div className="space-y-2">
                        <p className="inline-block p-1.5 text-black bg-[#d1ddf3] rounded-sm text-sm">21st March,2025</p>
                        <Table>
                            <TableHeader>
                                <TableRow>
                                    <TableHead>Time</TableHead>
                                    <TableHead className="text-center">Action</TableHead>
                                    <TableHead>Description</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                <TableRow className="border-0">
                                    <TableCell>7:30am</TableCell>
                                    <TableCell className="text-center">Offloaded fuel</TableCell>
                                    <TableCell>8000L to Tank 2</TableCell>
                                </TableRow>
                                <TableRow className="border-0">
                                    <TableCell>7:30am</TableCell>
                                    <TableCell className="text-center">Recorded daily sale</TableCell>
                                    <TableCell>N1,200,000</TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </div>
                </div>       
            </div>
        </div>
    )
  }

  return (
    <main className="flex-1 main-padding overflow-x-hidden main-height">
      <div className="space-y-4 overflow-y-auto scrollable-hidden">
        {usersStep == 0 ? (
          <>
            <h1 className="title">Users</h1>
            <div className="space-y-3">
                <Role
                    icon="/admin.svg"
                    role="Admin"
                    handleRoleDetails={() => showRoleDetails("Admin")}
                />
                <Role
                    icon="/manager.svg"
                    role="Manager"
                    handleRoleDetails={() => showRoleDetails("Manager")}
                />
                <Role
                    icon='/attendant.svg' 
                    role="Fuel Attendant"
                    handleRoleDetails={() => showRoleDetails("Fuel Attendant")}
                />
            </div>
          </>
        ) : usersStep == 1 ? (
          <>
            <RoleDetails
                role={role}
            />
          </>
        )
        : (
            <>
            <UserDetails 
                role={role} 
                status={status}
            />
            </>
        )}
      </div>
    </main>
  );
}
