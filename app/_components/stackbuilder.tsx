import { Stack } from "./stack"
import { StackContainer } from "./stackcontainer"

export const Stackbuilder = () => {
    return (
        <section className="mx-auto max-w-[1440px] px-6 lg:px-20 2xl:px-0 flex flex-col gap-20 py-10 pb-32 md:gap-28 lg:py-20 xl:flex-row relative">
            
            <div className="relative z-20 flex flex-1 flex-col items-centers justify-center">
        
                <h1 className="flex items-center justify-center text-[52px] font-[700] leading-[120%] lg:text-[70px] lg:font-[700] lg:leading-[120%]">Stack Builder</h1>

                <StackContainer />
                
            </div>
        </section>
    )
}