"use client";
import { Fragment, useState} from "react";
import { Dialog,Transition } from "@headlessui/react";
import Link from "next/link";
import { usePathname} from "next/navigation";
import { FaChrome } from "react-icons/fa6";
import { IoHomeOutline } from "react-icons/io5";
import { FaXmark } from "react-icons/fa6";
import { IoReorderThreeOutline } from "react-icons/io5";
import { FaMobileAlt } from "react-icons/fa";

function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
}

export default function Sidebar({ logo, companyInfo }) {
    const pathname = usePathname();

    const [open, setOpen] = useState(false);
    const navigation = [
        {
            name: "Home",
            href: "/",
            icon: IoHomeOutline,
            current: pathname === "/",
        },
    ];

    const [sidebarOpen, setSidebarOpen] = useState(false);

    return (
        <>
            <div>
                <Transition.Root show={sidebarOpen} as={Fragment}>
                    <Dialog
                        as="div"
                        className="relative z-50 lg:hidden"
                        onClose={setSidebarOpen}
                    >
                        <Transition.Child
                            as={Fragment}
                            enter="transition-opacity ease-linear duration-300"
                            enterFrom="opacity-0"
                            enterTo="opacity-100"
                            leave="transition-opacity ease-linear duration-300"
                            leaveFrom="opacity-100"
                            leaveTo="opacity-0"
                        >
                            <div className="fixed inset-0 bg-gray-900/80" />
                        </Transition.Child>

                        <div className="fixed inset-0 flex ">
                            <Transition.Child
                                as={Fragment}
                                enter="transition ease-in-out duration-300 transform"
                                enterFrom="-translate-x-full"
                                enterTo="translate-x-0"
                                leave="transition ease-in-out duration-300 transform"
                                leaveFrom="translate-x-0"
                                leaveTo="-translate-x-full"
                            >
                                <Dialog.Panel className="relative mr-16 flex w-full max-w-[280px] flex-1">
                                    <Transition.Child
                                        as={Fragment}
                                        enter="ease-in-out duration-300"
                                        enterFrom="opacity-0"
                                        enterTo="opacity-100"
                                        leave="ease-in-out duration-300"
                                        leaveFrom="opacity-100"
                                        leaveTo="opacity-0"
                                    >
                                        <div className="absolute left-full top-0 flex w-16 justify-center pt-5">
                                            <button
                                                type="button"
                                                className="-m-2.5 p-2.5"
                                                onClick={() => setSidebarOpen(false)}
                                            >
                                                <span className="sr-only">Close sidebar</span>
                                                <FaXmark
                                                    className="h-6 w-6 text-white"
                                                    aria-hidden="true"
                                                />
                                            </button>
                                        </div>
                                    </Transition.Child>
                                  
                                    <div className="flex grow flex-col gap-y-5 overflow-y-auto bg-black px-6 pb-4">
                                        <div className="flex h-16 shrink-0 items-center relative right-2.5">
                                            <p className="text-[#4D8FAC] text-3xl font-semibold">DataNeuron</p>
                                        </div>
                                        <nav className="flex flex-1 flex-col">
                                            <ul role="list" className="flex flex-1 flex-col gap-y-7">
                                                <li>
                                                    <ul role="list" className="-mx-2 space-y-1">
                                                        {navigation.map((item) => (
                                                            <li key={item.name}>
                                                                <Link
                                                                    href={item.href}
                                                                    className={classNames(
                                                                        item.current
                                                                            ? "bg-[#404040] text-white text-sm"
                                                                            : item.href === ""
                                                                                ? "text-[#A7A7A7]"
                                                                                : "text-white hover:text-white text-md hover:bg-[#404040]",
                                                                        "group flex gap-x-3 rounded-md p-2 text-sm leading-6 "
                                                                    )}
                                                                >
                                                                    <item.icon
                                                                        className={classNames(
                                                                            item.current
                                                                                ? "text-white"
                                                                                : item.href === ""
                                                                                    ? "text-[#A7A7A7]"
                                                                                    : "text-white group-hover:text-white",
                                                                            "h-6 w-6 shrink-0"
                                                                        )}
                                                                        aria-hidden="true"
                                                                    />
                                                                    {item.name}
                                                                </Link>
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </li>


                                            </ul>
                                        </nav>
                                    </div>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </Dialog>
                </Transition.Root>

                <div className="hidden lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:w-[280px] lg:flex-col">

                    <div className="flex grow flex-col gap-y-5 overflow-y-auto border-r border-gray-200 bg-black px-6 pb-4">
                        <div className="flex h-16 shrink-0 items-center relative right-2.5">
                            <p className="text-[#4D8FAC] text-3xl font-semibold">DataNeuron</p>
                        </div>
                        <nav className="flex flex-1 flex-col">
                            <ul role="list" className="flex flex-1 flex-col gap-y-7">
                                <li>
                                    <ul role="list" className="-mx-2 space-y-1">
                                        {navigation.map((item) => (
                                            <li key={item.name}>
                                                <Link
                                                    href={item.href}
                                                    className={classNames(
                                                        item.current
                                                            ? "bg-[#404040] text-white text-md"
                                                            : item.href === ""
                                                                ? "text-[#A7A7A7]"
                                                                : "text-white hover:text-white text-md hover:bg-[#404040]",
                                                        "group flex gap-x-3 rounded-md p-2 text-sm leading-6 "
                                                    )}
                                                >
                                                    <item.icon
                                                        className={classNames(
                                                            item.current
                                                                ? "text-white"
                                                                : item.href === ""
                                                                    ? "text-[#A7A7A7]"
                                                                    : "text-white group-hover:text-white",
                                                            "h-6 w-6 shrink-0"
                                                        )}
                                                        aria-hidden="true"
                                                    />
                                                    {item.name}
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                </li>


                            </ul>
                        </nav>
                    </div>
                </div>

                <div className="lg:w-[280px]">
                    <div className="sticky top-0 z-40 flex h-16 shrink-0 items-center gap-x-4 bg-white px-4 sm:gap-x-6 sm:px-6 lg:px-8">
                        <button
                            type="button"
                            className="-m-2.5 p-2.5 text-gray-700 lg:hidden"
                            onClick={() => setSidebarOpen(true)}
                        >
                            <span className="sr-only">Open sidebar</span>
                            <IoReorderThreeOutline className="h-6 w-6" aria-hidden="true" />
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}