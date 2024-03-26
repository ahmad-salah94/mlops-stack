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
    experimentTracking_metadataStore,
    model_monitoring
} from "@/lib/data"

export const StackContainer = () => {
    return (
        <div>
            <ArcherContainer strokeColor="black">

                {/* First Row */}
                <div className="flex flex-row justify-between items-center pt-12 mx-auto w-[900px]">
                <ArcherElement 
                        id="Stack3" 
                        relations={[
                            {
                                targetId: "Stack5",
                                targetAnchor: "left",
                                sourceAnchor: "left",
                                style: { 
                                    strokeColor: "black",
                                    strokeWidth: 2,
                                },
                            },
                            {
                                targetId: "Stack4",
                                targetAnchor: "left",
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
                                stackType="stackStorage" 
                                stackHeading="Feature Store"
                                data={feature_store}
                                stackDescription="Description." 
                            />
                        </div>
                    </ArcherElement>
                    
                    
                    <ArcherElement 
                        id="Stack1" 
                        
                    >
                        <div>
                            <Stack 
                                stackType="stackStorage" 
                                stackHeading="experiment Tracking" 
                                data={experimentTracking_metadataStore}
                                stackDescription="Experiment tracking, often coupled with a metadata store, is a crucial component of the machine learning lifecycle. It involves recording and organizing data about each experiment run, including parameters, metrics, and outcomes. This systematic logging enables data scientists and ML engineers to compare different models, understand changes over time, and reproduce results. A metadata store, on the other hand, is a repository where this experiment-related data is kept. It contains details about the experiments, models, datasets, and their versions. Together, experiment tracking and metadata storage provide a structured framework for managing machine learning workflows, facilitating analysis and collaboration, and ensuring that ML projects are transparent, reproducible, and scalable."
                            />
                        </div>
                    </ArcherElement>

                    

                    <div />

                    <div />
                    
                </div>

                {/* Second Row */}
                <div className="flex flex-row justify-between items-center pt-20 mx-auto w-[900px]">



                    <ArcherElement 
                        id="Stack4" 
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
                                targetId: "Stack1",
                                targetAnchor: "left",
                                sourceAnchor: "top",
                                style: { 
                                    strokeColor: "black",
                                    strokeWidth: 2,
                                },
                            },
                            {
                                targetId: "Stack6",
                                targetAnchor: "left",
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

                    <ArcherElement 
                        id="Stack2"
                        relations={[
                            {
                                targetId: "Stack7",
                                targetAnchor: "left",
                                sourceAnchor: "right",
                                style: { 
                                    strokeColor: "black",
                                    strokeWidth: 2,
                                },
                            },
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

                    <ArcherElement 
                        id="Stack7" 
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
                                targetId: "Stack6",
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



                    <div />

                    <div />
                    
                </div>

                {/* Third Row */}
                <div className="flex flex-row justify-between items-center pt-32 mx-auto w-[900px]">
                    <div />
                    
                    <ArcherElement 
                        id="Stack5"
                        
                    >
                        <div>
                            <Stack 
                                stackType="stackBox" 
                                stackHeading="Model Serving" 
                                data={model_serving}
                                stackDescription="Model Serving refers to the process of deploying and making a machine learning model available for use in a production environment. This involves hosting the model in a way that it can receive input data, perform predictions or analyses, and return the results. Model serving can be implemented in various ways, including through RESTful APIs, batch processing, or streaming data pipelines. The choice of serving method depends on the requirements for latency, throughput, and scalability. Effective model serving ensures that models are accessible, reliable, and efficient, enabling real-time decision making and automation in applications."
                            />
                        </div>
                    </ArcherElement>

                    <ArcherElement 
                        id="Stack6" 
                        relations={[
                            {
                                targetId: "Stack10",
                                targetAnchor: "right",
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
                                stackHeading="Model Registry" 
                                data={model_registry}
                                stackDescription="A Model Registry is a centralized repository where machine learning models are stored, versioned, and managed throughout their lifecycle. It serves as a single source of truth for an organization's machine learning assets, allowing data scientists and engineers to collaboratively manage, track, and audit models. The registry typically supports version control, model metadata documentation, and stage transitions (e.g., from development to staging to production). This enables consistent deployment, monitoring, and governance of models, ensuring that only approved and vetted models are deployed in production environments."
                            />
                        </div>
                    </ArcherElement>

                    


                    
                </div>

                {/* Fourth Row */}
                <div className="flex flex-row justify-between items-center pt-12 mx-auto w-[900px]">
                <ArcherElement 
                        id="Stack9"
                        relations={[
                            {
                                targetId: "Stack5",
                                targetAnchor: "bottom",
                                sourceAnchor: "top",
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
                    <ArcherElement 
                        id="Stack10" 
                        relations={[
                            {
                                targetId: "Stack5",
                                targetAnchor: "right",
                                sourceAnchor: "top",
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
                                stackHeading="Data Analysis" 
                                data={data_analysis}
                                stackDescription="Description."
                            />
                        </div>
                    </ArcherElement>

                    <div />

                    <div />
                    
                </div>

                    

            </ArcherContainer>

            
        </div>
    )
}