import * as RadixDropdownMenu from '@radix-ui/react-dropdown-menu';

const DropdownMenu = ({ trigger, items }) => {
    return (
        <RadixDropdownMenu.Root>
            <RadixDropdownMenu.Trigger asChild>
                {trigger}
            </RadixDropdownMenu.Trigger>
            <RadixDropdownMenu.Content align="end" className="w-56 bg-white shadow-md">
                {items.map((item, index) => (
                    <RadixDropdownMenu.Item
                        key={index}
                        className="flex items-center p-2 hover:bg-gray-200 cursor-pointer"
                    >
                        {item.icon && <item.icon className="mr-2 h-4 w-4" />}
                        <span>{item.label}</span>
                    </RadixDropdownMenu.Item>
                ))}
            </RadixDropdownMenu.Content>
        </RadixDropdownMenu.Root>
    );
};

export default DropdownMenu;
