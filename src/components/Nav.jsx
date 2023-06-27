import { useState, useEffect } from "react";
import logoWhite from "../assets/icons/logo_white.png";
import logoColor from "../assets/icons/logo_color.png";
import { Link } from "react-scroll";
import { Disclosure, Menu } from "@headlessui/react";
import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/react/20/solid";

export const NavBar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [navItems, setNavItems] = useState([
    { id: 1, title: "Home", link: "Home", activeLink: true },
    { id: 2, title: "Skills", link: "Skills", activeLink: false },
    { id: 3, title: "Experience", link: "Experience", activeLink: false },
    { id: 4, title: "Projects", link: "Projects", activeLink: false },
    { id: 5, title: "Contact", link: "Contact", activeLink: false },
  ]);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const onUpdateActiveLink = (value) => {
    const updatedNavItems = navItems.map((item) => {
      if (item.id === value) {
        return { ...item, activeLink: true };
      } else {
        return { ...item, activeLink: false };
      }
    });
    setNavItems(updatedNavItems);
  };

  const classNames = (...classes) => {
    return classes.filter(Boolean).join(" ");
  };

  return (
    <>
      <nav
        className={`${
          scrolled ? "bg-black" : "bg-transparent"
        } navbar md:block hidden`}
      >
        <div className="flex items-center flex-row gap-5 justify-between">
          <Link to="Home">
            <img
              src={scrolled ? logoWhite : logoColor}
              alt="Logo"
              className="w-10 h-10 ml-10"
            />
          </Link>
          <ul className="ms-auto flex gap-10 mr-12">
            {navItems.map((item) => (
              <li key={item.id} className=" hover:cursor-pointer">
                <Link
                  key={item.id}
                  to={item.link}
                  className={`${
                    item.activeLink
                      ? " text-transparent font-bold bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"
                      : "text-white"
                  } font-semibold text-xl`}
                  onClick={() => onUpdateActiveLink(item.id)}
                >
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      <Disclosure
        as="nav"
        className={`${
          scrolled ? "bg-black" : "bg-transparent"
        } navbar block md:hidden`}
      >
        {({ open }) => (
          <>
            <div className="flex justify-between">
              <Link to="Home">
                <img
                  src={scrolled ? logoWhite : logoColor}
                  alt="Logo"
                  className="w-10 h-10 ml-10"
                />
              </Link>
              <div className="mr-5">
                <Disclosure.Button
                  className={`${
                    scrolled ? "bg-white" : "bg-purple-900"
                  } inline-flex items-center justify-center rounded-md  p-2 focus:outline-none focus:ring-2  focus:ring-offset-2 focus:ring-offset-gray-100 duration-300`}
                >
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon
                      className={`block h-6 w-6  ${
                        scrolled
                          ? "bg-white text-black"
                          : "bg-purple-900 text-white"
                      } `}
                      aria-hidden="true"
                    />
                  ) : (
                    <Bars3Icon
                      className={`block h-6 w-6  ${
                        scrolled
                          ? "bg-white text-black"
                          : "bg-purple-900 text-white"
                      } `}
                      aria-hidden="true"
                    />
                  )}
                </Disclosure.Button>
              </div>
            </div>
            <Disclosure.Panel className="md:hidden">
              <div className="space-y-1 px-2 pb-3 pt-2 sm:px-3">
                {navItems.map((item) => (
                  <Disclosure.Button
                    key={item.id}
                    as={Link}
                    to={item.link}
                    className={classNames(
                      item.activeLink
                        ? "bg-white text-gray-900"
                        : "text-gray-100 hover:bg-white hover:text-black",
                      "block rounded-md px-3 py-2 ml-5 text-base font-bold hover:cursor-pointer"
                    )}
                    onClick={() => onUpdateActiveLink(item.id)}
                    aria-current={item.activeLink ? "page" : undefined}
                  >
                    {item.title}
                  </Disclosure.Button>
                ))}
              </div>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
    </>
  );
};
