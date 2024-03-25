"use client"

import { useEffect, useState } from "react"

import Image from "next/image"

type StackContentProps = {
    stackHeading: string
    data: { src: string; alt: string; label: string }[]
    isSelected: boolean
    selectedId: number
}

export const StackContent = ({ 
    stackHeading,
    data,
    isSelected,
    selectedId 
}: StackContentProps) => {
    const [selectedIds, setSelectedIds] = useState<number[]>([selectedId])

    useEffect(() => {
        if (selectedId !== 0 && isSelected) {
            setSelectedIds(prevIds => {
                const newIds = prevIds.filter(id => id !== 0);
                if (!newIds.includes(selectedId)) {
                    return [...newIds, selectedId];
                }
                return newIds;
            });
        } else if (selectedId === 0 && !isSelected && selectedIds.length === 1 && selectedIds[0] === 0) {
            // Do nothing if selectedId is 0, isSelected is false, and selectedIds only contains 0
        } else if (selectedId !== 0 && !isSelected) {
            setSelectedIds(prevIds => prevIds.filter(id => id !== selectedId));
        } else {
            // Remove duplicates manually
            const uniqueIds = selectedIds.filter((id, index) => selectedIds.indexOf(id) === index);
            setSelectedIds(uniqueIds);
        }
    }, [isSelected, selectedId])

    useEffect(() => {
        if (selectedIds.length === 0) setSelectedIds([0])
    }, [selectedIds])

    let content = selectedIds.map((value, index) => (
        <div key={index}>
            {value != 0 && (
                <div className="flex flex-row">
                    <Image
                        src={data[value-1].src}
                        alt={data[value-1].alt}
                        width={30}
                        height={30}
                    />
                    <p className="px-2 text-2xl text-gray-700 font-normal">
                        {data[value-1].label}
                    </p>
                </div>
            )} {value == 0 && (
                <div className="flex">
                    <p className="px-2 text-2xl text-gray-700 font-normal">-</p>
                </div>
            )}
        </div>
    ))

    return (
        <div className="flex flex-col items-center justify-center py-4 gap-y-2">
            {content}
        </div>
    )
}