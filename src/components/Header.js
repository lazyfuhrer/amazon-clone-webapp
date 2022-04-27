import Image from "next/image";
import {
    MenuIcon,
    SearchIcon,
    ShoppingCartIcon,
} from "@heroicons/react/outline";
import { signIn, signOut, useSession } from "next-auth/client";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import { selectItems } from "../slices/cartSlice";

function Header() {
  const [session] = useSession();  
  const router = useRouter();
  const items = useSelector(selectItems);

  return (
    <header>
        {/* Top nav */}
        <div className="flex items-center bg-amazon_blue p-1 flex-grow py-2" >
            <div className="mt-2 flex items-center flex-grow sm:flex-grow-0" >
                <Image onClick={() => router.push("/")} src="https://links.papareact.com/f90" width={150} height={40} objectFit="contain" className="cursor-pointer" alt=""/>
            </div>

            {/* Search */}
            <div className="hidden sm:flex items-center h-10 rounded-md flex-grow cursor-pointer bg-yellow-400 hover:bg-yellow-500">
                <input className="p-2 h-full w-6 flex-grow flex-shrink rounded-l-md focus:outline-none px-4" type="text" />
                <SearchIcon className="h-12 p-4"/>
            </div>

            {/* Right */}
            <div className="text-white flex items-center text-xs space-x-6 mx-6 whitespace-nowrap">
                <div onClick={!session ? signIn : signOut} className="link">
                    <p>
                        {session ? `Hello, ${session.user.name}` : "Sign In"}
                    </p>
                    <p className="font-extrabold md:text-sm">Account & Lists</p>
                </div>

                <div className="link">
                    <p>Returns</p>
                    <p className="font-extrabold md:text-sm">& Orders</p>
                </div>

                <div onClick={() => router.push("/checkout")} className="relative link flex items-center">

                    <span className="absolute top-0 right-0 md:right-6 h-4 w-4 bg-yellow-400 text-center rounded-full text-black font-bold">{items.length}</span>

                    <ShoppingCartIcon className="h-10"/>
                    <p className="hidden md:inline font-extrabold md:text-sm mt-3">Cart</p>
                </div>
            </div>
        </div>

        {/* Bottom nav */}
        <div className="flex items-center space-x-3 p-2 pl-6 bg-amazon_blue-light text-white text-sm ">
            <p className="link flex items-center font-extrabold">
                <MenuIcon className="h-6 mr-1"/>
                All
            </p>
            <p className="link ">Prime Video</p>
            <p className="link ">Amazon Pay</p>
            <p className="link ">Gift Cards</p>
            <p className="link ">Buy Again</p>
            <p className="link hidden lg:inline-flex">Kindle eBooks</p>
            <p className="link hidden lg:inline-flex">Browsing History</p>
            <p className="link hidden lg:inline-flex">Grocery & Gourmet Foods</p>
            <p className="link hidden lg:inline-flex">Health, Household & Personal Care</p>
            <p className="link hidden lg:inline-flex">Gift Ideas</p>
            <p className="link hidden lg:inline-flex">Today's Deals</p>
            <p className="link hidden lg:inline-flex">Baby</p>
            <p className="link hidden lg:inline-flex">Electronics</p>
            <p className="link hidden lg:inline-flex">Prime Music</p>
            <p className="link hidden lg:inline-flex">Echo & Alexa</p>
        </div>
    </header>
  )
}

export default Header