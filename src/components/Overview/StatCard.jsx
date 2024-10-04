import React from 'react';
import { Button, Card } from 'shadcdn';


const StatCard = ({ title, value }) => {
    return (
        <Card className="flex items-center justify-between p-4">
            <div>
                <h3 className="text-lg font-semibold">{title}</h3>
                <p className="text-2xl">{value}</p>
            </div>
            <Button className="text-blue-600">View Details</Button>
        </Card>
    );
};

export default StatCard;
