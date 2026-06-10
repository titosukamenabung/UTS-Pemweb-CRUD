import { Link, Outlet, useNavigate } from "react-router-dom";
import { useAuthStore } from "../store/useAuthStore";

export default function DashboardLayout() {
  const logout = useAuthStore((state: any) => state.logout);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <div className="bg-[#f8f5f0] min-h-screen text-[#3e2f1c]">
      <aside className="fixed top-0 left-0 w-56 h-screen bg-[#e9dfd1] border-r border-[#c6a97a] flex flex-col justify-between p-6 shadow-md">
        <div>
          <h1 className="text-3xl font-bold tracking-wide text-center mb-2 text-[#000000]">
            Nappa Milano
          </h1>

          <p className="text-center text-[#7a6a58] text-sm mb-10">
            Timeless Elegance
          </p>

          <ul className="flex flex-col gap-4 w-full">
            <li>
              <Link
                to="/dashboard"
                className="block w-full p-4 rounded-2xl bg-white hover:bg-[#c6a97a] hover:text-white transition font-medium shadow-sm"
              >
                Dashboard
              </Link>
            </li>

            <li>
              <Link
                to="/dashboard/category"
                className="block w-full p-4 rounded-2xl bg-white hover:bg-[#c6a97a] hover:text-white transition font-medium shadow-sm"
              >
                Category
              </Link>
            </li>

            <li>
              <Link
                to="/dashboard/pembicara"
                className="block w-full p-4 rounded-2xl bg-white hover:bg-[#c6a97a] hover:text-white transition font-medium shadow-sm"
              >
                Pembicara
              </Link>
            </li>

            <li>
              <Link
                to="/dashboard/biodata"
                className="block w-full p-4 rounded-2xl bg-white hover:bg-[#c6a97a] hover:text-white transition font-medium shadow-sm"
              >
                biodata
              </Link>
            </li>
            <li>
              <Link
                to="/dashboard/users"
                className="block w-full p-4 rounded-2xl bg-white hover:bg-[#c6a97a] hover:text-white transition font-medium shadow-sm"
              >
                users
              </Link>
            </li>


            
            <li>
              <Link
                to="/dashboard/event"
                className="block w-full p-4 rounded-2xl bg-white hover:bg-[#c6a97a] hover:text-white transition font-medium shadow-sm"
              >
                Event
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <button
            type="button"
            onClick={handleLogout}
            className="w-full p-4 rounded-2xl font-bold bg-[#bfa27a] text-white hover:bg-[#a88c65] transition shadow-sm"
          >
            LogOut
          </button>
        </div>
      </aside>

      <main className="ml-56 min-h-screen p-10 bg-[#f8f5f0] overflow-y-auto">
        <Outlet />
      </main>
    </div>
  );
}