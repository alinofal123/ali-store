import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
} from "@headlessui/react";
import {
  Bars3Icon,
  ShoppingBagIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import StoreLogo from "../imgs/navbar-fotor-bg-remover-20240819232023.png";
import Guest from "../imgs/Guest.png";
import { IoIosSettings } from "react-icons/io";
import { json, Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { clear } from "../rtk/slices/Product-slice";
import Swal from "sweetalert2";

export default function Nbar() {
  const navigate = useNavigate();

  const dispatch = useDispatch();
  return (
    <Disclosure as="nav" className="bg-gray-800 w-auto sticky top-0 ">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            {/* Mobile menu button*/}
            <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
              <span className="absolute -inset-0.5" />
              <span className="sr-only">Open main menu</span>
              <Bars3Icon
                aria-hidden="true"
                className="block h-6 w-6 group-data-[open]:hidden"
              />
              <XMarkIcon
                aria-hidden="true"
                className="hidden h-6 w-6 group-data-[open]:block"
              />
            </DisclosureButton>
          </div>
          <img
            alt="logo"
            src={StoreLogo}
            title="Your Profile"
            className="pl-5 h-16 w-auto mx-5"
          />
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex flex-shrink-0 items-center"></div>
            <div className="hidden sm:ml-6 sm:block">
              <div className="flex space-x-4 text-center">
                {/* Categories */}
                <Link
                  to={"/"}
                  className="text-white font-bold hover:text-purple-500 flex justify-center ms-auto"
                >
                  Home
                </Link>
                <Menu as="div" className="relative ml-3">
                  <div>
                    <MenuButton className="relative flex rounded-full font-bold text-white hover:text-purple-500 bg-gray-800 text-sm focus:outline-none  mt-0.5 ">
                      <h1 className="">Categories</h1>
                    </MenuButton>
                  </div>
                  <MenuItems
                    transition
                    className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-slate-800 py-1 shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
                  >
                    <MenuItem>
                      <Link
                        onClick={() => dispatch(clear())}
                        to="/products"
                        className="block px-4 py-2 text-sm text-white hover:text-black data-[focus]:bg-gray-100"
                      >
                        All Productes
                      </Link>
                    </MenuItem>
                    <MenuItem>
                      <Link
                        onClick={() => dispatch(clear())}
                        to="/products?category=gaming"
                        className="block px-4 py-2 text-sm text-white hover:text-black data-[focus]:bg-gray-100"
                      >
                        Gaming
                      </Link>
                    </MenuItem>
                    <MenuItem>
                      <Link
                        onClick={() => dispatch(clear())}
                        to="/products?category=cameras"
                        className="block px-4 py-2 text-sm text-white hover:text-black data-[focus]:bg-gray-100"
                      >
                        Cameras
                      </Link>
                    </MenuItem>
                    <MenuItem>
                      <Link
                        onClick={() => dispatch(clear())}
                        to="/products?category=menclothes"
                        className="block px-4 py-2  text-sm text-white hover:text-black data-[focus]:bg-gray-100"
                      >
                        Men-clothes
                      </Link>
                    </MenuItem>
                    <MenuItem>
                      <Link
                        onClick={() => dispatch(clear())}
                        to="/products?category=womenclothes"
                        className="block px-4 py-2  text-sm text-white hover:text-black data-[focus]:bg-gray-100"
                      >
                        Women-clothes
                      </Link>
                    </MenuItem>
                  </MenuItems>
                </Menu>
              </div>
            </div>
          </div>
          <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            <Link
              to={"/cart"}
              type="button"
              title="cart"
              className="relative rounded-full bg-gray-800 p-1 -m-5 text-gray-400 hover:text-white focus:outline-none "
            >
              <ShoppingBagIcon aria-hidden="true" className="h-6 w-6 mx-5" />
            </Link>
            <Menu as="div" className="relative ml-3">
              <div>
                <MenuButton className="relative flex rounded-full font-bold text-gray-500 hover:text-gray-200 bg-gray-800 text-sm focus:outline-none  mt-0.5 ">
                  <h1 className="text-2xl">
                    <IoIosSettings />
                  </h1>
                </MenuButton>
              </div>
              <MenuItems
                transition
                className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-slate-800 py-1 shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
              >
                <MenuItem>
                  <Link
                    to={"/Profile"}
                    className="block px-4 py-2 text-sm text-white hover:text-black data-[focus]:bg-gray-100"
                  >
                    Your Profile
                  </Link>
                </MenuItem>

                {JSON.parse(localStorage.getItem("token")) && (
                  <MenuItem>
                    <Link
                      className="block px-4 py-2  text-sm text-white hover:text-black data-[focus]:bg-gray-100"
                      onClick={() => {
                        Swal.fire({
                          title: "Are You Sure You Want To Sign Out ?",
                          icon: "question",
                          showCancelButton: true,
                        }).then((data) =>
                          data.isConfirmed
                            ? (localStorage.removeItem("token"),
                              navigate("/login"))
                            : null
                        );
                      }}
                    >
                      Sign out
                    </Link>
                  </MenuItem>
                )}
              </MenuItems>
            </Menu>

            {/* Profile dropdown */}
            <Menu as="div" className="relative ml-3">
              <div>
                <Link
                  to={"/profile"}
                  className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none "
                >
                  <img
                    alt="logo"
                    src={Guest}
                    className="h-8 w-8 rounded-full bg-gray-500"
                  />
                </Link>
              </div>
            </Menu>
          </div>
        </div>
      </div>

      <DisclosurePanel className="sm:hidden">
        <div className="space-y-1 px-2 pb-3 pt-2">
          {/* small screen c */}
          <Link
            to={"/"}
            className="text-white font-bold hover:text-purple-500 flex justify-center ms-auto"
          >
            {" "}
            Home
          </Link>
          <Menu as="div" className="relative ml-3">
            <div>
              <MenuButton className="relative flex rounded-full font-bold text-white m-auto hover:text-purple-500 bg-gray-800 text-sm focus:outline-none  mt-0.5 ">
                <h1 className="">Categories</h1>
              </MenuButton>
            </div>
            <MenuItems
              transition
              className="absolute right-0 z-10 mt-3 w-48 origin-top-right rounded-md bg-slate-800 mr-36 overflow-hidden py-1 shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
            >
              <MenuItem>
                <Link
                  to={"/Profile"}
                  className="block px-4 py-2 text-sm text-white hover:text-black data-[focus]:bg-gray-100"
                >
                  Gaming
                </Link>
              </MenuItem>
              <MenuItem>
                <Link
                  to={"/Settings"}
                  className="block px-4 py-2 text-sm text-white hover:text-black data-[focus]:bg-gray-100"
                >
                  Cameras
                </Link>
              </MenuItem>
              <MenuItem>
                <Link className="block px-4 py-2  text-sm text-white hover:text-black data-[focus]:bg-gray-100">
                  Men-clothes
                </Link>
              </MenuItem>
              <MenuItem>
                <Link className="block px-4 py-2  text-sm text-white hover:text-black data-[focus]:bg-gray-100">
                  Women-clothes
                </Link>
              </MenuItem>
            </MenuItems>
          </Menu>
        </div>
      </DisclosurePanel>
    </Disclosure>
  );
}
