import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react';
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline';
import { asset } from '../../assets/frontend_assets/asset';
import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';

const navigation = [
  { name: 'Home', href: '/', current: false },
  { name: 'Contact', href: '/contact-us', current: false },
  { name: 'Admin', href: 'https://finalfoodadmin.vercel.app', current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export const FinalHeader = () => {
  const location = useLocation();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const closeDropdown = () => {
    setDropdownOpen(false);
  };

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <Disclosure as="nav" className="bg-gray-200">
      {({ open }) => (
        <>
          <div className="mb-10 mx-auto w-full h-full px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-32 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button */}
                <DisclosureButton className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </DisclosureButton>
              </div>
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex flex-shrink-0 items-center">
                  <Link to="/">
                  <img className="h-16 mr-14 sm:h-16 md:h-20 lg:h-24 xl:h-28 2xl:h-32 w-auto mx-auto" src={asset.logo} alt="logo" />
                  </Link>
                </div>
                <div className="hidden sm:ml-6 sm:block mt-6">
                  <div className="flex mt-5 space-x-4">
                    {navigation.map((item) => (
                      <Link
                        key={item.name}
                        to={item.href}
                        className={classNames(
                          location.pathname === item.href
                            ? 'bg-gray-100 text-gray-900'
                            : 'text-gray-900 hover:bg-gray-700 hover:text-white',
                          'rounded-md px-3 py-2 text-sm font-medium sm:mb-8'
                        )}
                        aria-current={location.pathname === item.href ? 'page' : undefined}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                {/* Cart */}
                <Link to="/cart" className="mr-3 relative rounded-full p-1 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                  <img src={asset.basket_icon} alt="Cart" className="w-9 h-9" />
                  <div className="absolute top-0 right-0 transform translate-x-2/3 -translate-y-2/3 bg-gray-800 rounded-full w-5 h-5 flex items-center justify-center text-white">
                    <span className="text-xs">{localStorage.getItem('cartCount')}</span>
                  </div>
                </Link>

                {/* Profile dropdown */}
                {localStorage.getItem('token') ? (
                  <div className="relative">
                    <img
                      className="inline-block h-12 w-12 rounded-full ring-2 ring-white cursor-pointer"
                      src="https://img.freepik.com/free-photo/3d-render-little-boy-with-eyeglasses-blue-shirt_1142-50994.jpg?t=st=1719131731~exp=1719135331~hmac=3fafbe69a3ff25a7b65a100312534e1e76bdf933c5db7b72ff2298512879a5e6&w=740"
                      alt="user"
                      onClick={toggleDropdown}
                    />
                    {dropdownOpen && (
                      <div className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-50">
                        <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                          <Link to="/profile" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Profile</Link>
                          <Link to="/settings" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Settings</Link>
                          <div className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" onClick={() => {
                            localStorage.clear();
                            window.location.href = '/';
                          }}>Sign Out</div>
                        </div>
                      </div>
                    )}
                  </div>
                ) : (
                  <Link to="/login">
                    <button className="sign-in">Sign in</button>
                  </Link>
                )}
              </div>
            </div>
          </div>

          <DisclosurePanel className="sm:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2">
              {navigation.map((item) => (
                <DisclosureButton
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    location.pathname === item.href ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                    'block rounded-md px-3 py-2 text-base font-medium'
                  )}
                  aria-current={location.pathname === item.href ? 'page' : undefined}
                >
                  {item.name}
                </DisclosureButton>
              ))}
            </div>
          </DisclosurePanel>
        </>
      )}
    </Disclosure>
  )
}
