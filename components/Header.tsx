import Image from "next/image";
import React from "react";
import logo from "../public/reddit-logo.png";
import {
  ArrowRightOnRectangleIcon,
  Bars3Icon,
  ChevronDownIcon,
  HomeIcon,
  MagnifyingGlassIcon,
  UserMinusIcon,
} from "@heroicons/react/24/solid";
import {
  ChatBubbleLeftEllipsisIcon,
  BellIcon,
  VideoCameraIcon,
  GlobeAltIcon,
  SparklesIcon,
  PlusIcon,
  SpeakerWaveIcon,
} from "@heroicons/react/24/outline";
import { signIn, signOut, useSession } from "next-auth/react";

export const Header = () => {
  //access session data, rename data to session
  const { data: session } = useSession();
  return (
    <div className="sticky top-0 z-50 flex bg-white px-4 py-2 shadow-sm">
      {/* Logo */}
      <div className="relative h-10 w-20 flex-shrink-0 cursor-pointer">
        <Image objectFit="contain" src={logo} layout="fill" />
      </div>
      {/* Home */}
      <div className="mx-7 flex items-center gap-x-2 xl:min-w-[300px]">
        <HomeIcon className="h-5 w-5" />
        <p className="ml-2 hidden flex-1 lg:inline">Home</p>
        <ChevronDownIcon className="h-5 w-5" />
      </div>
      {/* Search Bar */}
      <form className="flex flex-1 items-center rounded-sm border border-gray-200 bg-gray-100 px-3 py-1 ">
        <MagnifyingGlassIcon className="h-6 w-6 text-gray-400" />
        <input
          className="flex-1 bg-transparent outline-none"
          type="text"
          placeholder="Search Reddit"
        />
        <button type="submit" hidden />
      </form>
      {/* Menu - hidden but show on large screen (lg:inline-flex)*/}
      <div className="mx-5 hidden items-center gap-2 text-gray-500 lg:inline-flex">
        <SparklesIcon className="icon" />
        <GlobeAltIcon className="icon" />
        <VideoCameraIcon className="icon" />
        <hr className="h-10 border border-gray-100" />
        <ChatBubbleLeftEllipsisIcon className="icon" />
        <BellIcon className="icon" />
        <PlusIcon className="icon" />
        <SpeakerWaveIcon className="icon" />
      </div>
      {/* Hidden on large screen */}
      <div className="ml-5 flex items-center lg:hidden">
        <Bars3Icon className="icon" />
      </div>

      {/*Sign In/Out Button 
         First check if user is signin. session === true*/}
      {session ? (
        <div
          onClick={() => {
            signOut();
          }}
          className="hidden cursor-pointer items-center gap-x-2 border border-gray-100 hover:bg-gray-100 lg:flex"
        >
          <UserMinusIcon className="icon flex-shrink-0" />

          <div className="flex1 text-xs">
            <p className="truncate">{session?.user?.name}</p>
            <p className="text-gray-500">Sign Out</p>
          </div>

          <ChevronDownIcon className="h-5 flex-shrink-0 text-gray-400" />
        </div>
      ) : (
        <div
          onClick={() => {
            signIn();
          }}
          className="hidden cursor-pointer items-center gap-x-2 border border-gray-100 lg:flex"
        >
          <ArrowRightOnRectangleIcon className="icon flex-shrink-0" />
          <p className="icon text-gray-500">Sign In</p>
        </div>
      )}
    </div>
  );
};
