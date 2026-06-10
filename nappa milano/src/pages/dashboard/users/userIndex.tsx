import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

type User = {
  id: number;
  name: string;
  email: string;
};

export default function UserIndex() {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  const [success, setSuccess] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const fetchUsers = async () => {
    try {
      const response = await fetch("http://localhost:3000/auth");

      if (!response.ok) {
        throw new Error("Gagal mengambil data");
      }

      const data = await response.json();
      setUsers(data.data);
    } catch (err) {
      setError("Gagal memuat data user");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id: number) => {
    const konfirmasi = confirm("Yakin ingin menghapus user ini?");
    if (!konfirmasi) return;

    try {
      const response = await fetch(`http://localhost:3000/auth/${id}`, {
        method: "DELETE",
      });

      const result = await response.json();

      if (!response.ok) {
        setError(result.message || "Gagal menghapus user");
        setTimeout(() => setError(null), 3000);
        return;
      }

      setSuccess("User berhasil dihapus!");
      setTimeout(() => setSuccess(null), 3000);
      fetchUsers();
    } catch (err) {
      console.error(err);
      setError("Terjadi kesalahan saat menghapus");
      setTimeout(() => setError(null), 3000);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div>
      <h1 className="mb-6 text-2xl font-semibold text-[#3e2f1c]">
        Users
      </h1>

      <Link
        to="/dashboard/users/create"
        className="inline-block px-5 py-3 rounded-2xl font-medium bg-[#bfa27a] text-white hover:bg-[#a88c65] transition shadow-sm mb-6"
      >
        Create New
      </Link>

      {success && (
        <div className="mb-4 px-5 py-3 rounded-2xl bg-green-100 text-green-700 border border-green-300 font-medium">
          {success}
        </div>
      )}

      {error && (
        <div className="mb-4 px-5 py-3 rounded-2xl bg-red-100 text-red-700 border border-red-300 font-medium">
          {error}
        </div>
      )}

      {loading && (
        <div className="px-5 py-3 rounded-2xl bg-[#f8f5f0] border border-[#e0d6c8] text-[#7a6a58] font-medium">
          Memuat data...
        </div>
      )}

      {!loading && (
        <div className="flex flex-wrap gap-4">
          {users.length === 0 ? (
            <div className="w-full px-6 py-6 bg-[#f8f5f0] border border-[#e0d6c8] rounded-2xl text-center text-[#7a6a58]">
              Belum ada user
            </div>
          ) : (
            users.map((item) => (
              <div
                key={item.id}
                className="w-72 px-6 py-4 bg-[#f8f5f0] border border-[#e0d6c8] rounded-2xl shadow-sm text-[#3e2f1c] hover:shadow-md transition"
              >
                <p className="font-semibold">{item.name}</p>
                <p className="text-sm text-[#7a6a58]">{item.email}</p>

                <div className="flex gap-2 mt-4">
                  <Link
                    to={`/dashboard/users/edit/${item.id}`}
                    className="px-4 py-2 rounded-xl bg-blue-600 text-white text-sm hover:bg-blue-700"
                  >
                    Edit
                  </Link>

                  <button
                    onClick={() => handleDelete(item.id)}
                    className="px-4 py-2 rounded-xl bg-red-600 text-white text-sm hover:bg-red-700"
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
      )}
    </div>
  );
}