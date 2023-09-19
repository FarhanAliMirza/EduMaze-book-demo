import { Fragment,  useRef } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import logo from "../logo.png";
import { useState, useEffect } from "react";
import LogoutButton from "./LogoutButton";
import LoginButton from "./LoginButton";
import { NavLink } from "react-router-dom";

    import { useAuth0 } from '@auth0/auth0-react';


const navigation = [
  { name: "Study Material", href: "#", current: true },
  { name: "Courses", href: "#", current: false },
  { name: "Subject", href: "#", current: false },
  { name: "About Us", href: "#", current: false },
];

const sub_navigation = [
  { name: "Study Material", href: "#" },
  { name: "Courses", href: "#" },
  { name: "Subject", href: "#" },
  { name: "About Us", href: "#" },
  { name: "Study Material", href: "#" },
  { name: "Courses", href: "#" },
  { name: "Subject", href: "#" },
  { name: "About Us", href: "#" },
  { name: "Study Material", href: "#" },
  { name: "Courses", href: "#" },
  { name: "Subject", href: "#" },
  { name: "About Us", href: "#" },
  { name: "Study Material", href: "#" },
  { name: "Courses", href: "#" },
  { name: "Subject", href: "#" },
  { name: "About Us", href: "#" },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Header() {

  const [userMetadata, setUserMetadata] = useState(null);

  const { user, isAuthenticated , getAccessTokenSilently} = useAuth0();


  useEffect(() => {
    const getUserMetadata = async () => {
      const domain = "{yourDomain}";
  
      try {
        const accessToken = await getAccessTokenSilently({
          authorizationParams: {
            audience: `https://${domain}/api/v2/`,
            scope: "read:current_user",
          },
        });
  
        const userDetailsByIdUrl = `https://${domain}/api/v2/users/${user.sub}`;
  
        const metadataResponse = await fetch(userDetailsByIdUrl, {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        });
  
        const { user_metadata } = await metadataResponse.json();
  
        setUserMetadata(user_metadata);
      } catch (e) {
        console.log(e.message);
      }
    };
  
    getUserMetadata();
  }, [getAccessTokenSilently, user?.sub]);



  const ref = useRef(null);



  let profileButton = <div>Profile Button</div>;


 

  if (isAuthenticated) {

    profileButton = (
      
      <Menu as="div" className="relative ml-3">
        <div>
          <Menu.Button className="relative flex rounded-full text-sm focus:outline-none border-transparent hover:border-transparent bg-transparent hover:bg-transparent ">
            <span className="absolute -inset-1.5" />
            <span className="sr-only">Open user menu</span>
            <img
              className="h-9 w-9 rounded-full"
             src={user.picture}
              alt=""
            />
          </Menu.Button>
        </div>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
            <Menu.Item>
              {({ active }) => (
                
                <a
                  href="#"
                  className={classNames(
                    active ? "bg-light-orange" : "",
                    "block px-4 py-2 text-sm text-gray-700"
                  )}
                >
                  <NavLink to="/profile">Profile</NavLink> 
                  
                  
                </a>
                
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <a
                  href="#"
                  className={classNames(
                    active ? "bg-light-orange" : "",
                    "block px-4 py-2 text-sm text-gray-700"
                  )}
                >
                  <NavLink to="/payments">Pay Fee</NavLink>
                </a>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <a
                  href="#"
                  className={classNames(
                    active ? "bg-light-orange" : "",
                    "block px-4 py-2 text-sm text-gray-700"
                  )}

                >
                  <LogoutButton/>
                </a>
              )}
            </Menu.Item>
          </Menu.Items>
        </Transition>
      </Menu>
     
    );
  } else if (!isAuthenticated){
    profileButton = (
      <button
        className="bg-edu-orange hover:bg-light-orange text-white rounded-xl px-3 py-2 text-sm font-medium"

      >
        <LoginButton/>
      </button>
    );
  }

  const slide = (shift) => {
    ref.current.scrollLeft += shift;
  };

  return (
    <Disclosure as="nav" className="">
      {({ open }) => (
        <>
          <div className="nav1 w-full">
            <div className="mx-auto max-w-7xl px-1 sm:px-6 lg:px-2">
              <div className="relative flex h-16 items-center justify-between">
                <div className="flex flex-1 items-center justify-between sm:items-stretch">
                  <div className=" flex items-center sm:hidden">
                    {/* Mobile menu button*/}
                    <Disclosure.Button className="relative inline-flex items-center justify-center border-transparent rounded-md text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none">
                      <span className="absolute -inset-0.5" />
                      <span className="sr-only">Open main menu</span>
                      {open ? (
                        <XMarkIcon
                          className="block h-6 w-6"
                          aria-hidden="true"
                        />
                      ) : (
                        <Bars3Icon
                          className="block h-6 w-6"
                          aria-hidden="true"
                        />
                      )}
                    </Disclosure.Button>
                  </div>
                  <div className="flex flex-shrink-0 items-center justify-center">
                    {/*Logo*/}
                    <img className="h-8 w-auto" src={logo} alt="EduMaze" />
                    <div className="pl-1 pt-1 font-bold text-white">
                      <span className="text-edu-orange">Edu</span>Maze
                    </div>
                  </div>
                  <div className="hidden sm:ml-6 sm:block justify-center">
                    {/*Navigation Items*/}
                    <div className="flex">
                      {navigation.map((item) => (
                        <a
                          key={item.name}
                          href={item.href}
                          className={classNames(
                            item.current
                              ? "font-extrabold text-edu-orange"
                              : "text-edu-orange hover:text-light-orange ",
                            "rounded-md px-3 py-2 text-sm font-medium"
                          )}
                          aria-current={item.current ? "page" : undefined}
                        >
                          {item.name}
                        </a>
                      ))}
                    </div>
                  </div>
                  <div className=" flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                    {/* Profile dropdown or login */}
                    {profileButton}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <Transition
            as={Fragment}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <Disclosure.Panel className="sm:hidden">
              <div className="space-y-1  px-2 pb-3 pt-2 text-center rounded-lg bg-[#1f1f1f] bg-opacity-10">
                {navigation.map((item) => (
                  <Disclosure.Button
                    key={item.name}
                    as="a"
                    href={item.href}
                    className={classNames(
                      item.current
                        ? "bg-gray-900 text-white"
                        : "text-gray-700 hover:bg-gray-700 hover:text-white",
                      "block rounded-md px-3 py-2 text-base font-medium"
                    )}
                    aria-current={item.current ? "page" : undefined}
                  >
                    {item.name}
                  </Disclosure.Button>
                ))}
              </div>
            </Disclosure.Panel>
          </Transition>
          <div className="nav2 w-full">
            <div className="mx-auto max-w-7xl px-1 sm:px-6 lg:px-2 flex">
              <div class="whitespace-nowrap overflow-x-scroll no-scrollbar">
                {/* <button class=" previous" onClick={() => slide(-50)}>
                <a>hello</a>
              </button> */}
                <ul>
                  {sub_navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className={classNames(
                        "text-white hover:text-light-orange px-3 py-2 text-sm font-light inline-block"
                      )}
                      aria-current={item.current ? "page" : undefined}
                    >
                      {item.name}
                    </a>
                  ))}
                </ul>
                {/* <button class="next" onClick={() => slide(+50)}>
                <a className="text-gray-900 hover:text-gray-500">hi</a>
              </button> */}
              </div>
            </div>
          </div>
        </>
      )}
    </Disclosure>
  );
}
