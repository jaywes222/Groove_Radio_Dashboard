import { useState } from 'react';
import { Menu, Bell, Sun, Moon } from 'lucide-react'; 
import { Button } from 'shadcdn';

const Navbar = () => {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const [darkMode, setDarkMode] = useState(false);

    return (
        <div className="flex h-14 items-center border-b px-4 justify-between lg:justify-end">
            {/* Mobile Menu Button - Only visible on smaller screens */}
            <Button
                variant="ghost"
                size="icon"
                className="mr-4 lg:hidden" // Hidden on large screens
                onClick={() => setSidebarOpen(!sidebarOpen)}
            >
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle Menu</span>
            </Button>

            {/* Spacer on mobile to push the other items to the right */}
            <div className="flex-1 lg:hidden" />

            {/* Notification and Theme Toggle */}
            <div className="flex items-center space-x-4">
                <Button variant="ghost" size="icon">
                    <Bell className="h-5 w-5" />
                    <span className="sr-only">Notifications</span>
                </Button>

                <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => setDarkMode(!darkMode)}
                >
                    {darkMode ? (
                        <Sun className="h-5 w-5" />
                    ) : (
                        <Moon className="h-5 w-5" />
                    )}
                    <span className="sr-only">Toggle Theme</span>
                </Button>
            </div>
        </div>
    );
};

export default Navbar;
