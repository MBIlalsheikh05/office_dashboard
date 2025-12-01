import Sidebar from "@/components/layout/Sidebar.jsx";
import "./globals.css";
import Header from "@/components/layout/Header.jsx";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div
          style={{
            background: "var(--background)",
            color: "var(--foreground)",
            minHeight: "100vh",
          }}
        >
          <Header />

          {/* Sidebar on the left, content on the right */}
          <div className="flex">
            <Sidebar />

            <main className="flex-1 p-6">
              {children}
            </main>
          </div>
        </div>
      </body>
    </html>
  );
}
