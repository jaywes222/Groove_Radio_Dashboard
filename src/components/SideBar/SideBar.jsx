import React, { useState } from 'react';
import { ScrollArea, Avatar, AvatarFallback, AvatarImage, Button } from 'shadcdn';
import { Radio, LogOut, Settings } from 'lucide-react';
import SideBarItem from './SideBarItem';
import DropdownMenu from './DropDownMenu';

const SideBar = () => {
    const [sidebarOpen, setSidebarOpen] = useState(false);

    const sidebarItems = [
        { icon: 'dashboard', label: 'Dashboard' },
        { icon: 'listeners', label: 'Listeners' },
        { icon: 'shows', label: 'Shows' },
        { icon: 'archives', label: 'Archives' },
        { icon: 'products', label: 'Products' },
        { icon: 'orders', label: 'Orders' },
        { icon: 'revenue', label: 'Revenue' },
        { icon: 'analytics', label: 'Analytics' },
    ];

    const dropdownItems = [
        { icon: Settings, label: 'Settings' },
        { icon: LogOut, label: 'Log out' },
    ];

    return (
        <aside className={`fixed inset-y-0 left-0 z-50 w-64 transform border-r bg-muted/40 transition-transform duration-200 ease-in-out lg:translate-x-0 ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'}`}>
            <div className="flex h-full flex-col">
                <div className="flex h-14 items-center border-b px-4">
                    <Radio className="h-6 w-6 text-primary" />
                    <span className="ml-2 text-lg font-semibold">Groove Radio</span>
                </div>
                <ScrollArea className="flex-1">
                    <nav className="p-2">
                        <ul className="space-y-1">
                            {sidebarItems.map((item, index) => (
                                <SideBarItem key={index} icon={item.icon} label={item.label} />
                            ))}
                        </ul>
                    </nav>
                </ScrollArea>
                <div className="border-t p-4">
                    <DropdownMenu
                        trigger={
                            <Button variant="ghost" className="w-full justify-start flex">
                                <Avatar className="h-14 w-14">
                                    <AvatarImage src="https://via.placeholder.com/150" alt="User" />
                                    <AvatarFallback>DJ</AvatarFallback>
                                </Avatar>
                                <span className="ml-4 font-bold">DJ Awesome</span>
                            </Button>
                        }
                        items={dropdownItems}
                    />
                </div>
            </div>
        </aside>
    );
};

export default SideBar;
