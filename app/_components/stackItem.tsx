"use client"

import { useEffect, useState } from "react"

import Image from "next/image"

import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
    DialogClose
} from "@/components/ui/dialog"

import { Button } from "@/components/ui/button"
import { AlertTriangle, Cross, FileWarning, Plus, ThumbsUp, WarehouseIcon, X } from "lucide-react"

type StackItemProps = {
    isSelected: boolean
    setIsSelected: (value: boolean) => void
    setSelectedId: (value: number) => void
    id: number
    src: string
    alt: string
    label: string
    tag1?: string
    tag2?: string
    tag3?: string
    tag4?: string
    tag5?: string
    tag6?: string
    description?: string
    advantage1?: string
    advantage2?: string
    advantage3?: string
    advantage4?: string
    advantage5?: string
    disadvantage1?: string
    disadvantage2?: string
    disadvantage3?: string
}

export const StackItem = ({
    isSelected,
    setIsSelected=() => {},
    setSelectedId,
    id,
    src, 
    alt, 
    label,
    tag1,
    tag2,
    tag3,
    tag4,
    tag5,
    tag6,
    description,
    advantage1,
    advantage2,
    advantage3,
    advantage4,
    advantage5,
    disadvantage1,
    disadvantage2,
    disadvantage3,
}: StackItemProps) => {
    const [stackSelected, setStackSelected] = useState(false)

    const handleClickTrue = () => {
        setSelectedId(id)
        setStackSelected(true)
        setIsSelected(true)
    }

    const handleClickFalse = () => {
        setSelectedId(id)
        setStackSelected(false)
        setIsSelected(false)
    }
    
    return (
        <Dialog>
            <div className="flex items-center justify-between bg-gray-100 border border-purple-400 shadow-md shadow-purple-300 rounded-md h-12 px-2 cursor-pointer box-animation">
                <DialogTrigger asChild>
                    <div className="flex items-center justify-start">
                        <Image
                            src={src}
                            alt={alt}
                            width={30}
                            height={30}            
                            />
                        <p className="px-2 text-2xl text-gray-700 font-normal">
                            {label}
                        </p>
                    </div>
                </DialogTrigger>
                {stackSelected && (
                    <X  
                    onClick={() => handleClickFalse()}
                    size={16} 
                    className=" text-gray-400 hover:text-gray-700" 
                    />
                )}
            </div>
            <DialogContent className="bg-gray-200">
                <DialogTitle className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                        <Image
                            src={src}
                            alt={alt}
                            width={24}
                            height={24}            
                            />
                        <h1 className="flex items-center justify-start text-3xl font-bold">{label}</h1>
                    </div>
                    <DialogClose>
                        <div className="flex gap-2 mr-4">
                            <Button 
                                onClick={() => handleClickTrue()}
                                variant="default" 
                                size="sm"
                                className="flex items-center justify-between text-sm gap-2 bg-black text-white"
                                >
                                <Plus size={18} />
                                Add to stack
                            </Button>

                            <Button 
                                onClick={() => handleClickFalse()}
                                variant="destructive" 
                                size="sm"
                                className="flex items-center justify-between text-sm gap-2 bg-red-500 text-white"
                                >
                                <X size={18} />
                                Remove
                            </Button>
                        </div>
                    </DialogClose>
                </DialogTitle>

                <DialogDescription className="flex items-center justify-start gap-2">
                    <div className="bg-gray-300 text-xs text-gray-700 rounded-full px-2">{tag1}</div>
                    <div className="bg-gray-300 text-xs text-gray-700 rounded-full px-2">{tag2}</div>
                    <div className="bg-gray-300 text-xs text-gray-700 rounded-full px-2">{tag3}</div>
                    <div className="bg-gray-300 text-xs text-gray-700 rounded-full px-2">{tag4}</div>
                    <div className="bg-gray-300 text-xs text-gray-700 rounded-full px-2">{tag5}</div>
                    <div className="bg-gray-300 text-xs text-gray-700 rounded-full px-2">{tag6}</div>
                </DialogDescription>

                <div>
                    <p className="text-sm text-gray-700">{description}</p>

                    <div className="flex items-center justify-start gap-1 pt-4">
                        <ThumbsUp color="green" size={12} />
                        <p className="font-bold text-base text-gray-700">Use it when</p>
                    </div>

                    <ul className="text-sm text-gray-700 pl-4 pt-4 space-y-2">
                        <li>{advantage1}</li>
                        <li>{advantage2}</li>
                        <li>{advantage3}</li>
                        <li>{advantage4}</li>
                    </ul>

                    <div className="flex items-center justify-start gap-1 pt-4">
                        <AlertTriangle color="red" size={14} />
                        <p className="font-bold text-base text-gray-700">Watch out</p>
                    </div>

                    <ul className="text-sm text-gray-700 pl-4 pt-4 space-y-2">
                        <li>{disadvantage1}</li>
                    </ul>
                </div>
            </DialogContent>
        </Dialog>
    )
}