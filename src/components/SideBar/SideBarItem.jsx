import { LayoutDashboard, Headphones, Music, Archive, Package, ShoppingCart, DollarSign, LineChart } from 'lucide-react';
import { Button } from 'shadcdn';

const icons = {
    dashboard: LayoutDashboard,
    listeners: Headphones,
    shows: Music,
    archives: Archive,
    products: Package,
    orders: ShoppingCart,
    revenue: DollarSign,
    analytics: LineChart,
};

const SideBarItem = ({ icon, label }) => {
    const IconComponent = icons[icon];
    return (
        <li>
            <Button variant="ghost" className="w-full justify-start flex">
                <IconComponent className="mr-4 h-4 w-4" />
                {label}
            </Button>
        </li>
    );
};

export default SideBarItem;
