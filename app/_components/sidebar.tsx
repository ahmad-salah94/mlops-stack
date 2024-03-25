import { FileStack, Home, Package } from "lucide-react"
import Link from "next/link"

export const Sidebar = () => {
    return (
        <div className="flex flex-col items-center w-64 h-full pt-4 overflow-hidden text-gray-700 bg-gray-100 rounded">
            <Link href="/" className="flex items-center w-full px-3 mt-3">
                <span className="ml-2 text-sm font-bold">Stack Builder</span>
            </Link>

            <div className="w-full px-2">
                <div className="flex flex-col items-center w-full mt-3 border-t border-gray-300">
                    <Link href="/" className="flex items-center w-full h-12 px-3 mt-2 rounded hover:bg-gray-300">
                        <Home />
                        <span className="ml-2 text-sm font-medium">Home</span>
                    </Link>
                    <Link href="/stackpage" className="flex items-center w-full h-12 px-3 mt-2 rounded hover:bg-gray-300">
                        <FileStack />
                        <span className="ml-2 text-sm font-medium">Stack Builder</span>
                    </Link>
                    <Link href="/secondpage" className="flex items-center w-full h-12 px-3 mt-2 rounded hover:bg-gray-300">
                        <Package />
                        <span className="ml-2 text-sm font-medium">Second Page</span>
                    </Link>
                    <Link href="/thirdpage" className="flex items-center w-full h-12 px-3 mt-2 rounded hover:bg-gray-300">
                        <Package />
                        <span className="ml-2 text-sm font-medium">Third Page</span>
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