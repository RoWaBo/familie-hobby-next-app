/* This example requires Tailwind CSS v2.0+ */
import { Disclosure } from '@headlessui/react'
import { MenuIcon, XIcon, ScissorsIcon } from '@heroicons/react/outline'
import MyLink from './MyLink'
const navigation = [
  { name: 'Forside', href: '/' },
  { name: 'Produkter', href: '/produkter' },
  { name: 'Kontakt', href: '/kontakt' },
]

const NavBar = () => {
  return (
    <Disclosure as="nav" className="bg-white shadow-sm">
      {({ open }) => (
        <>
          <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
            <div className="relative flex items-center justify-between h-16">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-black hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex-1 flex items-center justify-center h-full sm:items-stretch sm:justify-start">
                <div className="flex-shrink-0 flex items-center">
                  <ScissorsIcon height={35} className="text-primary mr-3" />
                  <h1 className="text-lg text-gray-600">Kreativ Familie Hobby</h1>
                </div>
                <div className="hidden sm:block ml-auto">
                  <div className="flex space-x-4 h-full">
                    {navigation.map((item) => (
                      <MyLink
                        key={item.name}
                        href={item.href}
                      >
                        {item.name}
                      </MyLink>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigation.map((item) => (
                <Disclosure.Button className="flex w-full">
                  <MyLink key={item.name} href={item.href}>
                    {item.name}
                  </MyLink>
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}

export default NavBar
