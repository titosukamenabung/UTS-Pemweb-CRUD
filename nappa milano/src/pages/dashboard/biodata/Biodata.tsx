// @ts-ignore
import Tito from "../../../assets/tito.jpeg";

export default function BiodataIndex() {
  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-2xl font-bold text-[#3e2f1c]">
          Biodata Mahasiswa
        </h1>
      </div>

      <div className="flex flex-col md:flex-row gap-6">

        {/* Profile Card */}
        <div className="w-full md:w-1/3 bg-[#f8f5f0] rounded-2xl shadow-sm border border-[#e0d6c8] overflow-hidden flex justify-center">
          <div className="flex flex-col pb-8 px-6 py-8 justify-center items-center">

            <img
              src={Tito}
              alt="Profile"
              className="w-32 h-32 rounded-full border-4 border-white shadow-md bg-white mb-4 object-cover"
            />

            <h2 className="text-xl font-bold text-[#3e2f1c]">
              Ezra Tito Saleh
            </h2>

            <span className="text-sm font-medium bg-[#efe7dc] text-[#6b4c2f] px-3 py-1 rounded-full mt-2 border border-[#d6c7b2]">
              D4 Teknik Informatika
            </span>

            <span className="text-sm font-medium bg-[#efe7dc] text-[#6b4c2f] px-3 py-1 rounded-full mt-2 border border-[#d6c7b2]">
              Universitas Harkat Negeri
            </span>

          </div>
        </div>

        {/* Detail */}
        <div className="w-full md:w-2/3 bg-[#f8f5f0] rounded-2xl shadow-sm border border-[#e0d6c8] p-8">
          <h3 className="text-lg font-bold text-[#3e2f1c] border-b border-[#d6c7b2] pb-4 mb-6">
            Informasi Detail
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-6 gap-x-8">

            <div className="flex flex-col">
              <span className="text-sm text-[#7a6a58] mb-1">
                Nama Lengkap
              </span>
              <span className="font-semibold text-[#3e2f1c]">
                Ezra Tito Saleh
              </span>
            </div>

            <div className="flex flex-col">
              <span className="text-sm text-[#7a6a58] mb-1">
                NIM
              </span>
              <span className="font-semibold text-[#3e2f1c]">
                24090076
              </span>
            </div>

            <div className="flex flex-col">
              <span className="text-sm text-[#7a6a58] mb-1">
                Program Studi
              </span>
              <span className="font-semibold text-[#3e2f1c]">
                D4 Teknik Informatika
              </span>
            </div>

            <div className="flex flex-col">
              <span className="text-sm text-[#7a6a58] mb-1">
                Project
              </span>
              <span className="font-semibold text-[#3e2f1c]">
                Nappa Milano Event Management
              </span>
            </div>

            <div className="flex flex-col sm:col-span-2 mt-2">
              <span className="text-sm text-[#7a6a58] mb-2">
                Tentang Saya
              </span>

              <p className="text-[#5e5245] text-sm leading-relaxed bg-[#efe7dc] p-4 rounded-xl border border-[#d6c7b2]">
                Saya adalah mahasiswa D4 Teknik Informatika yang membuat
                website Event Management Nappa Milano menggunakan React,
                Express, Prisma, dan Supabase. Website ini digunakan untuk
                mengelola data event, kategori event, dan pembicara secara
                digital.
              </p>

            </div>

          </div>
        </div>

      </div>
    </div>
  );
}