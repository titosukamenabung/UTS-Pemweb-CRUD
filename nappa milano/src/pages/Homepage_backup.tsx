import Header from "../components/Header";
import Button from "../components/ui/Button";
import { Collapse } from "../components/ui/Collapse";
import SpeakerCard from "../components/ui/SpeakerCard";
import { Card } from "../components/ui/Card";

function App() {
  const speakers = [
    {
      name: "Gail Sneakerss Black",
      price: 689000,
      imageUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSN31nsEtQ3LG7spygv6UCYcvgCmKgvhewgww&s",
    },
    {
      name: "Leis Slippers Black",
      price: 599000,
      imageUrl:
        "https://nappamilano.id/cdn/shop/files/ginee_20260216123623772_1518233279_600x600_crop_center.png?v=1771217507",
    },
    {
      name: "Damian Derby Brown",
      price: 889000,
      imageUrl:
        "https://nappamilano.id/cdn/shop/files/SLIDE1_c096b9c2-089d-42cf-9510-248775314e3a_800x.jpg?v=1757263862",
    },
    {
      name: "Pam Tassel Black (Women)",
      price: 559000,
      imageUrl:
        "https://nappamilano.id/cdn/shop/products/BlackTassel1RS_grande.png?v=1757264283",
    },
  ];

  const collapseItems = [
    {
      title: "Apa itu Nappa Milano?",
      description:
        "Nappa Milano dirancang untuk pria dan wanita yang mengutamakan kenyamanan dan gaya. Cocok digunakan oleh pelajar, pekerja, hingga profesional dalam berbagai kesempatan.",
    },
    {
      title: "Di mana saya bisa membeli produk Nappa Milano?",
      description:
        "Produk Nappa Milano tersedia secara online melalui website resmi kami serta marketplace seperti Shopee dan Tokopedia. Anda juga dapat menemukannya di beberapa toko retail pilihan.",
    },
    {
      title: "Siapa saja yang cocok menggunakan Nappa Milano?",
      description:
        "Nappa Milano dirancang untuk pria dan wanita yang mengutamakan kenyamanan dan gaya. Cocok digunakan oleh pelajar, pekerja, hingga profesional dalam berbagai kesempatan.",
    },
  ];

  const cardItems = [
    {
      title: "Gail Sneakerss Black",
      description:
        "Perkenalkan Gail, sepatu kets wanita pertama dari Nappa Milano—Sepatu untuk Setiap Wanita. Menggabungkan pesona retro dengan kenyamanan modern, Gail dirancang untuk setiap langkah perjalanan Anda.",
    },
    {
      title: " Leis Slippers Black",
      description:
        "Didesain dengan siluet ujung tertutup untuk tampilan yang rapi dan terstruktur. Sandal LEIS memiliki bagian atas dari kulit suede lembut dengan detail gesper yang dapat disesuaikan untuk kenyamanan dan keamanan. Sol dalam dari kulit domba menambah rasa halus dan empuk, sementara sol luar karet EVA yang ringan memberikan fleksibilitas dan daya tahan sehari-hari. Desain santai yang menyeimbangkan perlindungan, kenyamanan, dan kemudahan.",
    },
    {
      title: "Damian Derby Brown",
      description:
        "Sepatu Damian Derby menghadirkan siluet ramping yang dirancang untuk pria modern, menawarkan tampilan abadi dan elegan. Tersedia dalam warna hitam dan cokelat.",
    },
    {
      title: "Pam Tassel Black (Women)",
      description:
        "Sepatu loafer slip-on yang mudah dipakai dengan aksen rumbai yang manis. Sol luar tebal yang istimewa dan 2 pilihan warna yang cocok dengan warna kulit dan skema warna pakaian apa pun. Ini benar-benar item andalan Anda!",
    },
  ];

  return (
    <>
      <Header />

      <div className="max-w-6xl mx-auto">
        <section
          id="hero"
          className="py-10 flex gap-10 justify-between items-center "
        >
          <div className="w-2/3 flex flex-col gap-6">
            <img
              src="data:image/png;base64,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"
              alt=""
              className="w-96"
            />
            <p>
              Sesuai namanya, sepatu Nappa Milano dibuat dengan kulit berkualitas premium yang terkenal dengan teksturnya yang lembut (nappa). Gaya klasik abadi dipadukan dengan sentuhan mode terkini, sepatu kami adalah aksesori penting bagi pria dan wanita modern.
              Pendiri kami menyempurnakan keahlian pembuatan sepatu di Italia, lambang kualitas produk kulit terbaik. Oleh karena itu, Nappa Milano memahami struktur dan anatomi alas kaki yang nyaman.
            </p>

            <div className="flex gap-3">
              <Button label="Info Selengkapnya" variant="primary" />
              <Button label="Lihat Produk" variant="outline" />
            </div>
          </div>
          <div className="w-1/3">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnRg_4JK3kIbHRnwjIIwe17Qu0ERdSfzdKnw&s"
              alt=""
              className="w-80"
            />
          </div>
        </section>

        <section id="speaker" className="py-24">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 px-3">
            {speakers.map((speaker, index) => (
               <div
                key={index}
                className="bg-white shadow-lg rounded-xl p-4 flex flex-col"
               >
              <SpeakerCard
                name={speaker.name}
                price={speaker.price}
                imageUrl={speaker.imageUrl}
              />
              
               <Button
              label="Beli"
              variant="outline"
              className="mt-4 w-50 mx-auto"
            />

              </div>
            ))}
          </div>
        </section>
        <section>
          <h1 className="mx-auto font-bold text-5xl mb-0 mt-10 text-red-900">Detail Produk</h1>
          <div id="cards"
          className="py-10 grid grid-cols-1 md:grid-cols-2 gap-10 px-3">
          {cardItems.map((item, index) => (
            <Card key={index} className="w-full">
              <h3 className="text-2xl text-red-900 mb-4">{item.title}</h3>
              <p>{item.description}</p>
              <Button
                label="Info Selengkapnya"
                variant="primary"
                className="mt-4"
              />
            </Card>
             ))}
          </div>
        </section>

        <section id="collapse" className="py-24 flex flex-col gap-2 px-3">
          {collapseItems.map((item, index) => (
            <Collapse
              key={index}
              title={item.title}
              description={item.description}
            />
          ))}
        </section>
      </div>
    </>
  );
}

export default App;
