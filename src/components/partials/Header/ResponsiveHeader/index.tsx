import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { headerMenus } from "../HeaderMenus";
import { MdMenu, MdClose } from "react-icons/md";
import { Flex } from "antd";

const ResponsiveHeader = () => {
  const [isOpenSidebar, setOpenSidebar] = useState(false);

  return (
    <nav className="py-3 px-4 lg:hidden block z-50">
      <div className="flex justify-between items-center">
        <Image
          src="/assets/images/logo.png"
          alt="logo"
          width={60}
          height={60}
        />

        <MdMenu
          onClick={() => setOpenSidebar(true)}
          className="cursor-pointer text-2xl text-neutral"
        />

        {/* Sidebar Menu */}
        <div
          className={`fixed inset-0 h-full w-full bg-neutral z-50 transform p-4 ${
            isOpenSidebar ? "translate-x-0" : "-translate-x-full"
          } transition-transform duration-300 ease-in-out`}
        >
          <Flex align="center" justify="space-between">
            <Image
              src="/assets/images/logo.png"
              alt="logo"
              width={60}
              height={60}
            />

            <MdClose
              onClick={() => setOpenSidebar(false)}
              className="cursor-pointer text-2xl text-accent"
            />
          </Flex>

          {/* Menu Items */}
          <div className="mt-4">
            {headerMenus?.map((menu) => (
              <Link
                key={menu.name}
                href={`${menu.link}`}
                className="block text-base text-accent hover:text-primary uppercase duration-300 py-2"
                onClick={() => setOpenSidebar(false)}
              >
                {menu.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default ResponsiveHeader;
