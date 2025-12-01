export default function Sidebar() {
  return (
    <div className="h-screen w-60 bg-gray-900 text-white p-5 flex flex-col gap-6">
      <h2 className="text-xl font-bold">Dashboard</h2>

      <nav className="flex flex-col gap-4">
        <a href="/audit" className="hover:bg-gray-700 p-2 rounded">
          Audit
        </a>

        <a href="/logs" className="hover:bg-gray-700 p-2 rounded">
          Logs
        </a>

        <a href="/management" className="hover:bg-gray-700 p-2 rounded">
          Management
        </a>
      </nav>
    </div>
  );
}
