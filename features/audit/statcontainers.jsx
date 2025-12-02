// features/audit/statcontainers.jsx (The Feature Wrapper)

import React from 'react';
import { User, ShoppingBag, DollarSign, BarChart2 } from 'lucide-react';
// Import the single-card component from UI layer (named export)
import { StatCard } from '@/components/ui/statcard'; 

// NOTE: This component MUST accept data via props from the Audit Page.
export function StatContainers({ statsData }) {
    // If the page passed a `summary` object (auditData.summary), map it to exactly 4 cards
    const stats = statsData && typeof statsData === 'object'
        ? [
            { title: 'Active Users', value: statsData.activeUsers ?? '0', change: '+0%', icon: <User size={20} /> },
            { title: 'Total Events', value: statsData.totalEvents ?? '0', change: '+0%', icon: <BarChart2 size={20} /> },
            { title: 'Failed Logins', value: statsData.failedLogins ?? '0', change: '-0%', icon: <ShoppingBag size={20} /> },
            { title: 'Avg API Time', value: statsData.avgApiTime ?? 'N/A', change: '', icon: <DollarSign size={20} /> }
        ]
        : [
            { title: 'Users', value: '12,430', change: '+4.2%', icon: <User size={20} /> },
            { title: 'Sales', value: '$34,120', change: '+1.8%', icon: <DollarSign size={20} /> },
            { title: 'Orders', value: '1,204', change: '-0.4%', icon: <ShoppingBag size={20} /> },
            { title: 'Reports', value: '82', change: '+12%', icon: <BarChart2 size={20} /> }
        ];

    return (
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((s) => (
                <StatCard
                    key={s.title}
                    title={s.title}
                    value={s.value}
                    change={s.change}
                    icon={s.icon}
                />
            ))}
        </div>
    );
}