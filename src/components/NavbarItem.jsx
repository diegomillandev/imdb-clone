import Link from "next/link";

export default function NavbarItem({ link }) {
    const { Icon, title, path } = link;
    return (
        <Link href={path} className="hover:text-amber-400 transition-colors font-medium duration-150 dark:text-gray-200 dark:hover:text-amber-400">
            <span className="text-2xl sm:hidden">{Icon}</span>
            <span className="hidden uppercase font-normal sm:inline">{title}</span>
        </Link>
    )
}
