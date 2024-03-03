import { NavbarItem } from '.';
import { navLinks } from '../utils/constants';

export default function Navbar() {
  return (
    <nav>
        <ul className='flex gap-4'>
            { navLinks && navLinks.map((link) => 
                <NavbarItem key={link.path} link={link} />
            )}
        </ul>
    </nav>
  )
}
