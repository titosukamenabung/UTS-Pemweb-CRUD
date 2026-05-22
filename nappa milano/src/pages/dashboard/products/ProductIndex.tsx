import { Link } from "react-router-dom";

export default function ProductIndex() {
  return (
    <div>
      <h1 className="mb-6 text-2xl font-semibold">Ini halaman Product</h1>

      <Link
        to="/dashboard/products/create"
        className="inline-block px-5 py-3 rounded-2xl font-medium bg-[#bfa27a] text-white hover:bg-[#a88c65] transition shadow-sm"
      >
        Create New
      </Link>
    </div>
  );
}