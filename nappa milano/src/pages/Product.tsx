import Button from "../components/ui/Button";
import SpeakerCard from "../components/ui/SpeakerCard";
import { Card } from "../components/ui/Card";

export default function Product() {
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
        "https://nappamilano.id/cdn/shop/products/BlackTassel1RS_400x.png?v=1757264283",
    },
    {
      name: "Sam Tassel Black (Men)",
      price: 799000,
      imageUrl:
        "https://nappamilano.id/cdn/shop/products/BlackTassel2RS_1024x1024.png?v=1757264381",
    },
    {
      name: "Blake Penny Loafers Black",
      price: 779000,
      imageUrl:
        "https://nappamilano.id/cdn/shop/files/1_b6118863-3e9c-4293-89c5-4f5abab0067a_400x.jpg?v=1757263810",
    },
    {
      name: "Luz Buckle Strap Black (Men)",
      price: 559000,
      imageUrl:
        "https://nappamilano.id/cdn/shop/products/2_81a0ecec-6093-4a58-b228-2fdba7d72a78_400x.png?v=1757264220",
    },
    {
      name: "Yuri Penny Black (Unisex)",
      price: 559000,
      imageUrl:
        "https://nappamilano.id/cdn/shop/products/A3_5c42b2c7-c1d3-4a64-ab6a-49a25139ffea_400x.png?v=1757264399",
    },
    {
      name: "Gilly Tassel Maroon Women",
      price: 559000,
      imageUrl:
        "https://nappamilano.id/cdn/shop/products/Gilly_Tassel_Maroon_02_400x.png?v=1757263910",
    },
    {
      name: "Liv Ankle Strap Black (Women)",
      price: 559000,
      imageUrl:
        "https://nappamilano.id/cdn/shop/products/Nappa-Sendal-Catalog-Shadow2_400x.png?v=1757264202",
    },
    {
      name: "Gail Ballet Brown",
      price: 689000,
      imageUrl:
        "https://nappamilano.id/cdn/shop/files/ginee_20250630183851650_8562826871_400x.jpg?v=1757263882",
    },
    {
      name: "Gail Motion Brown",
      price: 689000,
      imageUrl:
        "https://nappamilano.id/cdn/shop/files/ginee_20250826164858519_1956048033_400x.jpg?v=1757263887",
    },
  ];

  const cardItems = [
    {
      title: "Gail Sneakerss Black",
      description:
        "Perkenalkan Gail, sepatu kets wanita pertama dari Nappa Milano—Sepatu untuk Setiap Wanita.",
    },
    {
      title: "Leis Slippers Black",
      description:
        "Sandal dengan desain rapi dan nyaman, dilengkapi kulit suede lembut dan sol ringan.",
    },
    {
      title: "Damian Derby Brown",
      description:
        "Sepatu formal pria dengan tampilan elegan dan desain klasik yang abadi.",
    },
    {
      title: "Pam Tassel Black (Women)",
      description:
        "Loafer wanita dengan aksen rumbai, nyaman dan cocok untuk berbagai outfit.",
    },
    {
      title: "Sam Tassel Black (Men)",
      description:
        "Loafer wanita dengan aksen rumbai, nyaman dan cocok untuk berbagai outfit.",
    },
    {
      title: "Blake Penny Loafers Black",
      description:
        "Loafer wanita dengan aksen rumbai, nyaman dan cocok untuk berbagai outfit.",
    },
    {
      title: "Luz Buckle Strap Black (Men)",
      description:
        "Loafer wanita dengan aksen rumbai, nyaman dan cocok untuk berbagai outfit.",
    },
    {
      title: "Yuri Penny Black (Unisex)",
      description:
        "Loafer wanita dengan aksen rumbai, nyaman dan cocok untuk berbagai outfit.",
    },
    {
      title: "Gilly Tassel Maroon Women",
      description:
        "Loafer wanita dengan aksen rumbai, nyaman dan cocok untuk berbagai outfit.",
    },
    {
      title: "Liv Ankle Strap Black (Women)",
      description:
        "Loafer wanita dengan aksen rumbai, nyaman dan cocok untuk berbagai outfit.",
    },
    {
      title: "Gail Ballet Brown",
      description:
        "Loafer wanita dengan aksen rumbai, nyaman dan cocok untuk berbagai outfit.",
    },
    {
      title: "Gail Motion Brown",
      description:
        "Loafer wanita dengan aksen rumbai, nyaman dan cocok untuk berbagai outfit.",
    },
  ];

  return (
    <div>
      <div className="max-w-6xl mx-auto">
        <section className="py-24">
          <h1 className="text-3xl font-bold text-center mb-10">
            Produk Kami
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 px-3">
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
          <h1 className="text-3xl font-bold text-center text-red-900 mb-10">
            Detail Produk
          </h1>

          <div className="py-10 grid grid-cols-1 md:grid-cols-3 gap-10 px-3">
            {cardItems.map((item, index) => (
              <Card key={index} className="w-full">
                <h3 className="text-xl text-red-900 mb-4">
                  {item.title}
                </h3>
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

      </div>
    </div>
  );
}