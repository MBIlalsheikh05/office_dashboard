"use client"
import React, {useEffect, useState} from "react"
import { Home, Settings, FileText, List,Bell, DollarSign, House, Info, Mail, ShoppingBag, ShoppingCart, User } from 'lucide-react'
import { usePathname } from "next/navigation"
import Link from 'next/link';

const ICONS = {
  Home,
  Settings,
  FileText,
  List,
  Bell, 
  DollarSign, 
  House, 
  Info, 
  Mail, 
  ShoppingBag, 
  ShoppingCart, 
  User
}

const Sidebar = () => {
  // const ICONS = [
  //   Home,
  //   Settings,
  //   FileText,
  //   List
  // ]

  const [SidebarItems, setsidebarItems] = useState([])
  const pathname = usePathname();

  useEffect(() => {
    // Set default sidebar items
    const defaultItems = [
      { name: "Audit", href: "/dashboard/audit", icon: "List" },
      { name: "Logs", href: "/dashboard/logs", icon: "FileText" },
      // { name: "Settings", href: "/dashboard/settings", icon: "Settings" },
      // { name: "Info", href: "/dashboard/info", icon: "Info" },
      // { name: "Mail", href: "/dashboard/mail", icon: "Mail" },
      // { name: "User", href: "/dashboard/user", icon: "User" }
    ];
    setsidebarItems(defaultItems);
  }, []);

  // If you want to fetch this data from an API endpoint instead, 
  // just replace "path" with the correct API route (e.g., "/api/sidebar" or similar).
// useEffect(() => {
//     fetch("data/data.json")
//     .then((res) => res.json())
//     .then((data) => setsidebarItems(data.SidebarItems))

return (
  <div className="relative z-10 transition-all duration-300 ease-in-out shrink-0 w-54 min-h-screen">
    <div className="h-full bg-[#1e1e1e] backdrop-blur-md p-4 flex flex-col border-r border-[#2f2f2f]">
      <nav className="mt-8 grow">
        {SidebarItems.map((item) => {
          const IconComponent = ICONS[item.icon];
          const isActive = pathname === item.href;
          const itemClass = `flex items-center p-4 text-sm font-medium rounded-lg hover:bg-[#2f2f2f] transition-colors mb-2 ${isActive ? "bg-[#2f2f2f]" : ""}`;
          return (
            <Link key={item.name} href={item.href} className={itemClass}>
              {IconComponent ? (
                <IconComponent size={20} style={{ minWidth: "20px" }} />
              ) : (
                <div style={{ width: 20, height: 20 }} />
              )}
              <span className="ml-4 whitespace-nowrap">{item.name}</span>
            </Link>
          );
        })}
      </nav>
    </div>
  </div>
);
}

export default Sidebar


