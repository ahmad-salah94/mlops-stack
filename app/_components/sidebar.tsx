import { FileStack, Home, Package, Component, Notebook, Wrench, Percent, Castle, Video } from "lucide-react"
import Link from "next/link"

export const Sidebar = () => {
    return (
        <div className="flex flex-col items-center w-full md:w-64 min-h-screen pt-4 overflow-hidden text-gray-700 bg-gray-100 rounded">
            <Link href="/" className="flex items-center w-full px-3 mt-3">
                <span className="ml-2 text-base md:text-sm font-bold">MLOps</span>
            </Link>

            <div className="w-full px-2">
                <div className="flex flex-col items-center w-full mt-3 border-t border-gray-300">
                    <Link href="/home" className="flex items-center w-full h-14 md:h-12 px-3 mt-2 rounded hover:bg-gray-300">
                        <Home className="w-6 h-6 md:w-5 md:h-5" />
                        <span className="ml-2 text-base md:text-sm font-medium">Home</span>
                    </Link>
                    <Link href="/stackpage" className="flex items-center w-full h-14 md:h-12 px-3 mt-2 rounded hover:bg-gray-300">
                        <FileStack className="w-6 h-6 md:w-5 md:h-5" />
                        <span className="ml-2 text-base md:text-sm font-medium">Stack Builder</span>
                    </Link>
                    <Link href="/component" className="flex items-center w-full h-14 md:h-12 px-3 mt-2 rounded hover:bg-gray-300">
                        <Component className="w-6 h-6 md:w-5 md:h-5" />
                        <span className="ml-2 text-base md:text-sm font-medium">MLOps technical components</span>
                    </Link>
                    <Link href="/roles" className="flex items-center w-full h-14 md:h-12 px-3 mt-2 rounded hover:bg-gray-300">
                        <Notebook className="w-6 h-6 md:w-5 md:h-5" />
                        <span className="ml-2 text-base md:text-sm font-medium">MLOps Roles</span>
                    </Link>
                    <Link href="/tools" className="flex items-center w-full h-14 md:h-12 px-3 mt-2 rounded hover:bg-gray-300">
                        <Wrench className="w-6 h-6 md:w-5 md:h-5" />
                        <span className="ml-2 text-base md:text-sm font-medium">MLOps Tools</span>
                    </Link>
                    <Link href="/maturity-model" className="flex items-center w-full h-14 md:h-12 px-3 mt-2 rounded hover:bg-gray-300">
                        <Percent className="w-6 h-6 md:w-5 md:h-5" />
                        <span className="ml-2 text-base md:text-sm font-medium">MLOps Maturity Model</span>
                    </Link>
                    <Link href="/Reference-Architecture" className="flex items-center w-full h-14 md:h-12 px-3 mt-2 rounded hover:bg-gray-300">
                        <Castle className="w-6 h-6 md:w-5 md:h-5" />
                        <span className="ml-2 text-base md:text-sm font-medium">MLOps Reference-Architecture</span>
                    </Link>
                    <Link href="/videos" className="flex items-center w-full h-14 md:h-12 px-3 mt-2 rounded hover:bg-gray-300">
                        <Video className="w-6 h-6 md:w-5 md:h-5" />
                        <span className="ml-2 text-base md:text-sm font-medium">Videos about MLOps</span>
                    </Link>
                </div>
            </div>

            <div className="pb-40" />
            <div className="pb-40" />
            <div className="pb-40" />
            <div className="pb-40" />
        </div>
    )
}