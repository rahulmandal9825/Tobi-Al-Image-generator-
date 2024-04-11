"use client";
import {SignedIn, SignedOut, UserButton} from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import {navLinks} from "../constants/index";
import {usePathname} from "next/navigation";
import {Button} from "./ui/button";

const Sidebar =  () => {
    const pathname = usePathname();
    

    return (
        <aside className="sidebar w-[300px]  ">
            <div className="flex size-full flex-col gap-4">
                <Link href="/" className="sidebar-logo">
                    <Image alt="logo" src="/logo.png" width={300} height={100} />
                </Link>

                <nav className="sidebar-nav">
                    <SignedIn>
                        <div className="sidebar-nav_elements  ">
                            {navLinks.slice(0, 6).map((link) => {
                                const isActive = link.route === pathname;
                                return (
                                    <div
                                        key={link.route}
                                        className={` flex-2  w-full py-3 p-2 rounded-lg ${
                                            isActive ? " bg-orange-400 text-white" : "text-black"
                                        }`}
                                    >
                                        <Link href={link.route} className="flex gap-2">
                                            <Image
                                                alt="logo"
                                                src={link.icon}
                                                width={20}
                                                height={20}
                                                className={`${isActive && " brightness-200"}`}
                                            />
                                            <h2 className=" ">{link.label}</h2>
                                        </Link>
                                    </div>
                                );
                            })}
                        </div>
                        <div className="sidebar-nav_elements pb-5  ">
                            <div className="bg-orange-400 h-1 rounded-xl w-full"> </div>
                            {navLinks.slice(6).map((link) => {
                                const isActive = link.route === pathname;
                                return (
                                    <div
                                        key={link.route}
                                        className={` flex-2  w-full py-3 p-2 mt-2 rounded-lg  ${
                                            isActive ? " bg-orange-400 text-white" : "text-black"
                                        }`}
                                    >
                                        <Link href={link.route} className="flex gap-2">
                                            <Image
                                                alt="logo"
                                                src={link.icon}
                                                width={20}
                                                height={20}
                                                className={`${isActive && " brightness-200"}`}
                                            />
                                            <h1>{link.label}</h1>
                                        </Link>
                                    </div>
                                );
                            })}
                            <li className="flex-center cursor-pointer"></li>
                            <UserButton afterSignOutUrl="/" showName />
                        </div>
                    </SignedIn>

                    <SignedOut>
                        <Button asChild>
                            <Link href="/sign-in">Login</Link>
                        </Button>
                    </SignedOut>
                </nav>
            </div>
        </aside>
    );
};

export default Sidebar;
