import { Collapse } from "../components/ui/Collapse";

export default function FAQ() {
  const faqItems = [
    {
      title: "Apa itu Nappa Milano?",
      description:
        "Nappa Milano adalah brand sepatu kulit premium yang menggabungkan kualitas material terbaik dengan desain elegan dan timeless, terinspirasi dari craftsmanship Italia.",
    },
    {
      title: "Apakah sepatu Nappa Milano menggunakan kulit asli?",
      description:
        "Ya, kami menggunakan bahan kulit premium (nappa leather) yang terkenal dengan teksturnya yang lembut, kuat, dan nyaman digunakan dalam jangka panjang.",
    },
    {
      title: "Apakah sepatu ini nyaman dipakai sehari-hari?",
      description:
        "Tentu. Setiap produk dirancang dengan memperhatikan anatomi kaki sehingga memberikan kenyamanan maksimal untuk aktivitas harian, baik formal maupun casual.",
    },
    {
      title: "Bagaimana cara memilih ukuran yang tepat?",
      description:
        "Kami menyediakan size chart pada setiap produk. Jika masih ragu, Anda bisa menghubungi customer service kami untuk rekomendasi ukuran yang paling sesuai.",
    },
    {
      title: "Apakah tersedia pengembalian atau penukaran produk?",
      description:
        "Ya, kami menyediakan layanan retur dan tukar ukuran sesuai dengan syarat & ketentuan yang berlaku demi memastikan kepuasan pelanggan.",
    },
    {
      title: "Di mana saya bisa membeli produk Nappa Milano?",
      description:
        "Produk kami tersedia di website resmi serta marketplace seperti Shopee dan Tokopedia.",
    },
    {
      title: "Berapa lama pengiriman produk?",
      description:
        "Waktu pengiriman biasanya berkisar 2–5 hari kerja tergantung lokasi pengiriman.",
    },
    {
      title: "Bagaimana cara merawat sepatu kulit?",
      description:
        "Gunakan pembersih khusus kulit, hindari air berlebih, dan simpan di tempat kering agar sepatu tetap awet dan terlihat seperti baru.",
    },
  ];

  return (
    <div className="bg-white">
      <section className="py-20 px-3 max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-red-900 mb-4">
          Frequently Asked Questions
        </h1>

        <p className="text-center text-gray-500 mb-10">
          Temukan jawaban atas pertanyaan yang paling sering ditanyakan
        </p>

        <div className="flex flex-col gap-4">
          {faqItems.map((item, index) => (
            <Collapse
              key={index}
              title={item.title}
              description={item.description}
            />
          ))}
        </div>

        {/* tambahan biar lebih hidup */}
        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-3">
            Masih punya pertanyaan lain?
          </p>
          <button className="px-6 py-2 border border-red-900 text-red-900 rounded-full hover:bg-red-900 hover:text-white transition">
            Hubungi Kami
          </button>
        </div>
      </section>
    </div>
  );
}