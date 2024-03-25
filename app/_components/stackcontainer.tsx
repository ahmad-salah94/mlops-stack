"use client"

import { ArcherContainer, ArcherElement } from "react-archer"
import { Stack } from "./stack"

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

export const StackContainer = () => {
    return (
        <div>
            <ArcherContainer strokeColor="black">

                {/* First Row */}
                <div className="flex flex-row justify-between items-center pt-12 mx-auto w-[900px]">
                    <ArcherElement 
                        id="Stack1" 
                        relations={[
                            {
                                targetId: "Stack2",
                                targetAnchor: "left",
                                sourceAnchor: "right",
                                style: { 
                                    strokeColor: "black",
                                    strokeWidth: 2,
                                },
                            },
                            {
                                targetId: "Stack3",
                                targetAnchor: "top",
                                sourceAnchor: "bottom",
                                style: { 
                                    strokeColor: "black",
                                    strokeWidth: 2,
                                },
                            }
                        ]}
                    >
                        <div>
                            <Stack 
                                stackType="stackBox" 
                                stackHeading="Data Analysis" 
                                data={data_analysis}
                                stackDescription="Description."
                            />
                        </div>
                    </ArcherElement>

                    <ArcherElement 
                        id="Stack2"
                        relations={[
                            {
                                targetId: "Stack4",
                                targetAnchor: "top",
                                sourceAnchor: "bottom",
                                style: { 
                                    strokeColor: "black",
                                    strokeWidth: 2,
                                },
                            },
                        ]}
                    >
                        <div>
                            <Stack 
                                stackType="stackBox" 
                                stackHeading="Experimentation" 
                                data={experimentation}
                                stackDescription="Description."
                            />
                        </div>
                    </ArcherElement>

                    <div />

                    <div />
                    
                </div>

                {/* Second Row */}
                <div className="flex flex-row justify-between items-center pt-20 mx-auto w-[900px]">
                    <ArcherElement 
                        id="Stack3" 
                        relations={[
                            {
                                targetId: "Stack1",
                                targetAnchor: "bottom",
                                sourceAnchor: "top",
                                style: { 
                                    strokeColor: "black",
                                    strokeWidth: 2,
                                },
                            },
                            {
                                targetId: "Stack5",
                                targetAnchor: "top",
                                sourceAnchor: "bottom",
                                style: { 
                                    strokeColor: "black",
                                    strokeWidth: 2,
                                },
                            },
                            {
                                targetId: "Stack7",
                                targetAnchor: "top",
                                sourceAnchor: "bottom",
                                style: { 
                                    strokeColor: "black",
                                    strokeWidth: 2,
                                },
                            }
                        ]}
                    >
                        <div>
                            <Stack 
                                stackType="stackStorage" 
                                stackHeading="Feature Store"
                                data={feature_store}
                                stackDescription="Description." 
                            />
                        </div>
                    </ArcherElement>

                    <ArcherElement 
                        id="Stack4" 
                        relations={[
                            {
                                targetId: "Stack5",
                                targetAnchor: "top",
                                sourceAnchor: "bottom",
                                style: { 
                                    strokeColor: "black",
                                    strokeWidth: 2,
                                },
                            }
                        ]}
                    >
                        <div>
                            <Stack 
                                stackType="stackStorage" 
                                stackHeading="Code Repository" 
                                data={code_repository}
                                stackDescription="Description."
                            />
                        </div>
                    </ArcherElement>

                    <div />

                    <div />
                    
                </div>

                {/* Third Row */}
                <div className="flex flex-row justify-between items-center pt-32 mx-auto w-[900px]">
                    <div />
                    
                    <ArcherElement 
                        id="Stack5"
                        relations={[
                            {
                                targetId: "Stack6",
                                targetAnchor: "left",
                                sourceAnchor: "right",
                                style: { 
                                    strokeColor: "black",
                                    strokeWidth: 2,
                                },
                            },
                            {
                                targetId: "Stack8",
                                targetAnchor: "top",
                                sourceAnchor: "bottom",
                                style: { 
                                    strokeColor: "black",
                                    strokeWidth: 2,
                                },
                            }
                        ]}
                    >
                        <div>
                            <Stack 
                                stackType="stackBox" 
                                stackHeading="ML pipeline" 
                                data={ml_pipeline}
                                stackDescription="Description."
                            />
                        </div>
                    </ArcherElement>

                    <ArcherElement 
                        id="Stack6" 
                        relations={[
                            {
                                targetId: "Stack7",
                                targetAnchor: "left",
                                sourceAnchor: "right",
                                style: { 
                                    strokeColor: "black",
                                    strokeWidth: 2,
                                },
                            }
                        ]}
                    >
                        <div>
                            <Stack 
                                stackType="stackStorage" 
                                stackHeading="Model Registry" 
                                data={model_registry}
                                stackDescription="Description."
                            />
                        </div>
                    </ArcherElement>

                    <ArcherElement 
                        id="Stack7" 
                        relations={[
                            {
                                targetId: "Stack9",
                                targetAnchor: "top",
                                sourceAnchor: "bottom",
                                style: { 
                                    strokeColor: "black",
                                    strokeWidth: 2,
                                },
                            }
                        ]}
                    >
                        <div>
                            <Stack 
                                stackType="stackBox" 
                                stackHeading="Model Serving" 
                                data={model_serving}
                                stackDescription="Description."
                            />
                        </div>
                    </ArcherElement>
                    
                </div>

                {/* Fourth Row */}
                <div className="flex flex-row justify-between items-center pt-20 mx-auto w-[900px]">
                    
                    
                    <ArcherElement id="Stack8" >
                        <div>
                            <Stack 
                                stackType="stackStorage" 
                                stackHeading="Metadata Store" 
                                data={metadata_store}
                                stackDescription="Description."
                            />
                        </div>
                    </ArcherElement>

                    <div />

                    <ArcherElement 
                        id="Stack9"
                        relations={[
                            {
                                targetId: "Stack5",
                                targetAnchor: "bottom",
                                sourceAnchor: "left",
                                style: { 
                                    strokeColor: "black",
                                    strokeWidth: 2,
                                },
                            }
                        ]}
                    >
                        <div>
                            <Stack 
                                stackType="stackBox" 
                                stackHeading="Model Monitoring" 
                                data={model_monitoring}
                                stackDescription="Description."
                            />
                        </div>
                    </ArcherElement>
                    
                </div>

            </ArcherContainer>
        </div>
    )
}