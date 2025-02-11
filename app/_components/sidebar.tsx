"use client"

import { FileStack, Home, Package, Component, Notebook, Wrench, Percent, Castle, Video, Menu, X } from "lucide-react"
import Link from "next/link"
import { useState, FC } from "react"

interface SidebarLinkProps {
  href: string;
  icon: FC<{ className: string }>;
  children: React.ReactNode;
}

const SidebarLink: FC<SidebarLinkProps> = ({ href, icon: Icon, children }) => {
  const handleClick = () => {
    setIsOpen(false);
  };

  return (
    <Link 
      href={href} 
      className="flex items-center w-full h-14 md:h-12 px-3 mt-2 rounded hover:bg-gray-300"
      onClick={handleClick}
    >
      <Icon className="w-6 h-6 md:w-5 md:h-5" />
      <span className="ml-2 text-base md:text-sm font-medium">{children}</span>
    </Link>
  );
};

export const Sidebar = () => {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <>
            {/* Hamburger Menu Button - Only visible on mobile */}
            <button 
                className="fixed top-4 right-4 z-50 p-2 rounded bg-gray-100 md:hidden"
                onClick={() => setIsOpen(!isOpen)}
            >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>

            {/* Sidebar */}
            <div className={`
                fixed top-0 left-0 h-screen w-64 
                transform transition-transform duration-300 ease-in-out
                md:relative md:transform-none
                ${isOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"}
                flex flex-col items-center min-h-screen pt-4 
                overflow-hidden text-gray-700 bg-gray-100 
                shadow-lg md:shadow-none z-40
            `}>
                <Link href="/" className="flex items-center w-full px-3 mt-3">
                    <span className="ml-2 text-base md:text-sm font-bold">MLOps</span>
                </Link>

                <div className="w-full px-2">
                    <div className="flex flex-col items-center w-full mt-3 border-t border-gray-300">
                        {/* Your existing links */}
                        <SidebarLink href="/home" icon={Home}>Home</SidebarLink>
                        <SidebarLink href="/stackpage" icon={FileStack}>Stack Builder</SidebarLink>
                        <SidebarLink href="/component" icon={Component}>MLOps technical components</SidebarLink>
                        <SidebarLink href="/roles" icon={Notebook}>MLOps Roles</SidebarLink>
                        <SidebarLink href="/tools" icon={Wrench}>MLOps Tools</SidebarLink>
                        <SidebarLink href="/maturity-model" icon={Percent}>MLOps Maturity Model</SidebarLink>
                        <SidebarLink href="/Reference-Architecture" icon={Castle}>MLOps Reference-Architecture</SidebarLink>
                        <SidebarLink href="/videos" icon={Video}>Videos about MLOps</SidebarLink>
                    </div>
                </div>

                <div className="pb-40" />
            </div>

            {/* Overlay for mobile */}
            {isOpen && (
                <div 
                    className="fixed inset-0 bg-black bg-opacity-50 z-30 md:hidden"
                    onClick={() => setIsOpen(false)}
                />
            )}
        </>
    )
}