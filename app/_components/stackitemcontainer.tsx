"use client"

import { StackItem } from "./stackItem"

import { 
    data_analysis, 
    experimentation,
    feature_store,
    code_repository,
    ml_pipeline,
    model_registry,
    model_serving,
    metadata_store,
    model_monitoring
} from "@/lib/data"
 
type StackItemContainerProps = {
    StackHeading: string
    isSelected: boolean
    setIsSelected: (value: boolean) => void
    setSelectedId: (value: number) => void
}

export const StackItemContainer = ({ 
    StackHeading,
    isSelected,
    setIsSelected,
    setSelectedId,
}: StackItemContainerProps) => {
    return (
        <div className="flex flex-wrap gap-4">
            {StackHeading == "Data Analysis" && (
                <>
                    {data_analysis.map((stack) => (
                        <StackItem 
                            isSelected={isSelected}
                            setIsSelected={setIsSelected}
                            setSelectedId={setSelectedId}
                            key={stack.id}
                            id={stack.id}
                            src={stack.src} 
                            alt={stack.alt} 
                            label={stack.label}
                            tag1={stack.tag1}
                            tag2={stack.tag2}
                            tag3={stack.tag3}
                            description={stack.description}
                            advantage1={stack.advantage1}
                            advantage2={stack.advantage2}
                            advantage3={stack.advantage3}
                            disadvantage1={stack.disadvantage1}
                        />
                    ))}
                </>
            )}
            {StackHeading == "Experimentation" && (
                <>
                    {experimentation.map((stack) => (
                        <StackItem 
                            isSelected={isSelected}
                            setIsSelected={setIsSelected}
                            setSelectedId={setSelectedId}
                            key={stack.id}
                            id={stack.id}
                            src={stack.src} 
                            alt={stack.alt} 
                            label={stack.label}
                            tag1={stack.tag1}
                            tag2={stack.tag2}
                            tag3={stack.tag3}
                            description={stack.description}
                            advantage1={stack.advantage1}
                            advantage2={stack.advantage2}
                            advantage3={stack.advantage3}
                            disadvantage1={stack.disadvantage1}
                        />
                    ))}
                </>
            )}
            {StackHeading == "Feature Store" && (
                <>
                    {feature_store.map((stack) => (
                        <StackItem 
                            isSelected={isSelected}
                            setIsSelected={setIsSelected}
                            setSelectedId={setSelectedId}
                            key={stack.id}
                            id={stack.id}
                            src={stack.src} 
                            alt={stack.alt} 
                            label={stack.label}
                            tag1={stack.tag1}
                            tag2={stack.tag2}
                            tag3={stack.tag3}
                            description={stack.description}
                            advantage1={stack.advantage1}
                            advantage2={stack.advantage2}
                            advantage3={stack.advantage3}
                            disadvantage1={stack.disadvantage1}
                        />
                    ))}
                </>
            )}
            {StackHeading == "Code Repository" && (
                <>
                    {code_repository.map((stack) => (
                        <StackItem 
                            isSelected={isSelected}
                            setIsSelected={setIsSelected}
                            setSelectedId={setSelectedId}
                            key={stack.id}
                            id={stack.id}
                            src={stack.src} 
                            alt={stack.alt} 
                            label={stack.label}
                            tag1={stack.tag1}
                            tag2={stack.tag2}
                            tag3={stack.tag3}
                            description={stack.description}
                            advantage1={stack.advantage1}
                            advantage2={stack.advantage2}
                            advantage3={stack.advantage3}
                            disadvantage1={stack.disadvantage1}
                        />
                    ))}
                </>
            )}
            {StackHeading == "ML pipeline" && (
                <>
                    {ml_pipeline.map((stack) => (
                        <StackItem 
                            isSelected={isSelected}
                            setIsSelected={setIsSelected}
                            setSelectedId={setSelectedId}
                            key={stack.id}
                            id={stack.id}
                            src={stack.src} 
                            alt={stack.alt} 
                            label={stack.label}
                            tag1={stack.tag1}
                            tag2={stack.tag2}
                            tag3={stack.tag3}
                            description={stack.description}
                            advantage1={stack.advantage1}
                            advantage2={stack.advantage2}
                            advantage3={stack.advantage3}
                            disadvantage1={stack.disadvantage1}
                        />
                    ))}
                </>
            )}
            {StackHeading == "Model Registry" && (
                <>
                    {model_registry.map((stack) => (
                        <StackItem 
                            isSelected={isSelected}
                            setIsSelected={setIsSelected}
                            setSelectedId={setSelectedId}
                            key={stack.id}
                            id={stack.id}
                            src={stack.src} 
                            alt={stack.alt} 
                            label={stack.label}
                            tag1={stack.tag1}
                            tag2={stack.tag2}
                            tag3={stack.tag3}
                            description={stack.description}
                            advantage1={stack.advantage1}
                            advantage2={stack.advantage2}
                            advantage3={stack.advantage3}
                            disadvantage1={stack.disadvantage1}
                        />
                    ))}
                </>
            )}
            {StackHeading == "Model Serving" && (
                <>
                    {model_serving.map((stack) => (
                        <StackItem 
                            isSelected={isSelected}
                            setIsSelected={setIsSelected}
                            setSelectedId={setSelectedId}
                            key={stack.id}
                            id={stack.id}
                            src={stack.src} 
                            alt={stack.alt} 
                            label={stack.label}
                            tag1={stack.tag1}
                            tag2={stack.tag2}
                            tag3={stack.tag3}
                            description={stack.description}
                            advantage1={stack.advantage1}
                            advantage2={stack.advantage2}
                            advantage3={stack.advantage3}
                            disadvantage1={stack.disadvantage1}
                        />
                    ))}
                </>
            )}
            {StackHeading == "Metadata Store" && (
                <>
                    {metadata_store.map((stack) => (
                        <StackItem 
                            isSelected={isSelected}
                            setIsSelected={setIsSelected}
                            setSelectedId={setSelectedId}
                            key={stack.id}
                            id={stack.id}
                            src={stack.src} 
                            alt={stack.alt} 
                            label={stack.label}
                            tag1={stack.tag1}
                            tag2={stack.tag2}
                            tag3={stack.tag3}
                            description={stack.description}
                            advantage1={stack.advantage1}
                            advantage2={stack.advantage2}
                            advantage3={stack.advantage3}
                            disadvantage1={stack.disadvantage1}
                        />
                    ))}
                </>
            )}
            {StackHeading == "Model Monitoring" && (
                <>
                    {model_monitoring.map((stack) => (
                        <StackItem 
                            isSelected={isSelected}
                            setIsSelected={setIsSelected}
                            setSelectedId={setSelectedId}
                            key={stack.id}
                            id={stack.id}
                            src={stack.src} 
                            alt={stack.alt} 
                            label={stack.label}
                            tag1={stack.tag1}
                            tag2={stack.tag2}
                            tag3={stack.tag3}
                            description={stack.description}
                            advantage1={stack.advantage1}
                            advantage2={stack.advantage2}
                            advantage3={stack.advantage3}
                            disadvantage1={stack.disadvantage1}
                        />
                    ))}
                </>
            )}
            
        </div>
    )
}