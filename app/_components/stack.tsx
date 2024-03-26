"use client"

import { useState } from "react"

import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"

import { StackContent } from "./stackcontent"
import { StackItemContainer } from "./stackitemcontainer"

type StackProps = {
    stackType: "stackBox" | "stackStorage"
    stackHeading: string
    data: { src: string; alt: string; label: string }[]
    stackDescription?: string
}

export const Stack = ({
    stackType,
    stackHeading,
    data,
    stackDescription
}: StackProps ) => {
    const [isSelected, setIsSelected] = useState(false)
    const [selectedId, setSelectedId] = useState<number>(0)

    return (
        <Dialog>
            <DialogTrigger>

                <div className="relative group">
                    {/* Stack Box */}
                    {stackType == "stackBox" && (

                        <div className="flex flex-col w-[230px] border border-gray-600 rounded-md shadow-md hover:border-blue-500 hover:shadow-blue-500 active:shadow-blue-500 cursor-pointer box-animation">

                            {/* Stack Heading Section */}
                            <div className="flex items-center justify-start px-2 py-2 text-gray-600 group-active:text-blue-500 font-normal uppercase text-base text-ellipsis bg-blue-100 rounded-t-md overflow-hidden border-b border-b-gray-600">{stackHeading}</div>

                            {/* Stack Content Section */}
                            <div>
                                <StackContent 
                                    stackHeading={stackHeading}
                                    data={data}
                                    isSelected={isSelected}
                                    selectedId={selectedId}
                                />
                            </div>
                        </div>

                    )}
                    
                    {stackType == "stackStorage" && (

                        <div className="flex flex-col w-[230px] border border-gray-600 rounded-3xl shadow-md hover:border-yellow-500 hover:shadow-yellow-500 active:shadow-yellow-500 cursor-pointer box-animation">

                            {/* Stack Heading Section */}
                            <div className="flex items-center justify-start px-4 py-2 text-gray-600 group-active:text-yellow-500 font-normal uppercase text-base text-ellipsis bg-yellow-100 -z-10 rounded-t-3xl overflow-hidden border-b border-b-gray-600">{stackHeading}</div>

                            {/* Stack Content Section */}
                            <div>
                                <StackContent 
                                    stackHeading={stackHeading}
                                    data={data}
                                    isSelected={isSelected} 
                                    selectedId={selectedId}
                                />
                            </div>
                        </div>

                    )}
                </div>

            </DialogTrigger>
            <DialogContent className="bg-gray-200 w-[900px]">
                <DialogTitle>
                    <h1 className="flex items-center justify-start text-2xl font-bold">{stackHeading}</h1>
                </DialogTitle>
                
                <DialogDescription>
                    <p>{stackDescription}</p>
                </DialogDescription>
                
                <StackItemContainer 
                    StackHeading={stackHeading} 
                    isSelected={isSelected}
                    setIsSelected={setIsSelected}
                    setSelectedId={setSelectedId}
                />
            </DialogContent>
        </Dialog>
    )
}