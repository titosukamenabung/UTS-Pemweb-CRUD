export default function Biodata() {
  return (
    <div className="p-6">
      <div className="bg-[#f8f5f0] rounded-2xl shadow-md p-8 border border-[#e0d6c8] max-w-2xl">
        
        <h1 className="text-3xl font-bold text-[#3e2f1c] mb-6">
          Biodata Mahasiswa
        </h1>

        <div className="space-y-4 text-[#3e2f1c]">

          <div>
            <p className="font-semibold">Nama</p>
            <p>Ezra Tito Saleh</p>
          </div>

          <div>
            <p className="font-semibold">NIM</p>
            <p>24090076</p>
          </div>

          <div>
            <p className="font-semibold">Kelas</p>
            <p>TI 4C</p>
          </div>

          <div>
            <p className="font-semibold">Mata Kuliah</p>
            <p>Pemrograman Web 2</p>
          </div>

        </div>
      </div>
    </div>
  );
}