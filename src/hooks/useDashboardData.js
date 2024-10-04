import { useEffect, useState } from 'react';

const useDashboardData = () => {
    const [data, setData] = useState({
        sales: {},
        orders: {},
        inventory: {},
    });
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // Static data
    const staticData = {
        sales: {
            total: 5000,
            trends: [2890, 3200, 4500, 3800, 4200, 5100] // Monthly revenue for Jan to Jun
        },
        orders: {
            active: 15,
            upcomingShows: 3,
            songRequests: 25,
            overview: [5, 10, 15]
        },
        inventory: {
            stock: 120,
            overview: [50, 30, 40]
        },
        listeners: [
            { hour: "00:00", listeners: 1200 },
            { hour: "04:00", listeners: 800 },
            { hour: "08:00", listeners: 2500 },
            { hour: "12:00", listeners: 3700 },
            { hour: "16:00", listeners: 3200 },
            { hour: "20:00", listeners: 2800 },
        ],
        productPerformance: [
            { name: "T-Shirts", sales: 450 },
            { name: "Mugs", sales: 270 },
            { name: "Vinyl Records", sales: 180 },
            { name: "Stickers", sales: 120 },
            { name: "Posters", sales: 90 },
        ],
        revenueBreakdown: [
            { name: "Ads", value: 45000 },
            { name: "Subscriptions", value: 30000 },
            { name: "Merchandise", value: 15000 },
            { name: "Donations", value: 5000 },
        ],
    };

    useEffect(() => {
        const fetchData = () => {
            try {
                // Set the static data directly
                setData(staticData);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    return { data, loading, error };
};

export default useDashboardData;
