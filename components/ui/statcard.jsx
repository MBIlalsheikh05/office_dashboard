"use client"

import React from "react";

// RECOMMENDATION: Export the reusable piece as StatCard 
export const StatCard = ({ title, value, change, icon }) => {
    return (
        <div className="bg-[#161616] p-4 rounded-lg flex items-center space-x-4 border border-transparent hover:border-blue-500 transition-colors">
            <div className="p-3 bg-[#292929] rounded-md text-zinc-200">
                {icon}
            </div>
            <div>
                <div className="text-xs text-zinc-400">{title}</div>
                <div className="text-lg font-semibold text-white">{value}</div>
                {/* Logic for color-coding the change */}
                {change && 
                    <div className={`text-sm ${change.startsWith('+') ? 'text-emerald-400' : 'text-rose-400'}`}>
                        {change}
                    </div>
                }
            </div>
        </div>
    )
}