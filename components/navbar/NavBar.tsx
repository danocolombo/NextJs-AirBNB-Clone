import React from 'react';
import NavSearch from '@/components/navbar/NavSearch';
import LinksDropdown from '@/components/navbar/LinksDropdown';
import DarkMode from '@/components/navbar/DarkMode';
import Logo from '@/components/navbar/Logo';

function NavBar() {
    return (
        <nav className='border-b'>
            <div className='container flex flex-col sm:flex-row sm:justify-between sm:items-center flex-wrap gap-4 py-8'>
                <Logo />
                <NavSearch />
                <div className='flex gap-4 items-center'>
                    <DarkMode />
                    <LinksDropdown />
                </div>
            </div>
        </nav>
    );
}

export default NavBar;