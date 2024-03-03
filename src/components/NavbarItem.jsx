import Link from "next/link";
import { FaHome, FaInfo } from 'react-icons/fa';

export default function NavbarItem({ link }) {

const {Icon, title, path} = link;
  return (
     <Link href={path} className="hover:text-amber-600 transition-colors duration-150 text-gray-100">
        <span className="text-2xl sm:hidden">{Icon}</span>
        <span className="hidden uppercase font-normal sm:inline">{title}</span>
    </Link>
  )
}
