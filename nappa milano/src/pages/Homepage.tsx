import { Link } from "react-router-dom"
import Button from "../components/ui/Button";

export default function Homepage() {
    return (
        <div>
            <section className="h-[400px]">
              <img
                src="https://ucarecdn.com/2761c19c-3782-4396-8403-fc45603bb311/-/format/auto/-/preview/3000x3000/-/quality/lighter/Banner.jpg"
                className="w-full h-full object-cover"
              />
            </section>


            <section className="py-20">
              <h2 className="text-3xl font-bold text-center mb-10">
                Best Seller
              </h2>

              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-white shadow p-4 rounded-xl text-center">
                  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSN31nsEtQ3LG7spygv6UCYcvgCmKgvhewgww&s" 
                  className="w-full mb-4" />
                  <h3 className="font-semibold">Gail Sneakers</h3>
                  <p>Rp 689.000</p>
                </div>

                <div className="bg-white shadow p-4 rounded-xl text-center">
                  <img src="https://nappamilano.id/cdn/shop/files/ginee_20260216123623772_1518233279_600x600_crop_center.png?v=1771217507" 
                  className="w-full mb-4" />
                  <h3 className="font-semibold">Leis Slippers</h3>
                  <p>Rp 599.000</p>
                </div>

                <div className="bg-white shadow p-4 rounded-xl text-center">
                  <img src="https://nappamilano.id/cdn/shop/products/BlackTassel2RS_1024x1024.png?v=1757264381" 
                  className="w-full mb-4" />
                  <h3 className="font-semibold">Sam Tassel Black</h3>
                  <p>Rp 799.000</p>
                </div>
              </div>
            </section>

            <section className="h-[400px]">
              <img
                src="https://ucarecdn.com/b646867a-120c-4ef9-83c8-cbe4860560b7/-/format/auto/-/preview/3000x3000/-/quality/lighter/Lookbook%20Banner%20sam%20pam.png"
                className="w-full h-full object-cover"
              />
            </section>

            <section className="py-20 bg-gray-100">
              <h2 className="text-3xl font-bold text-center mb-10">
                Kenapa Nappa Milano?
              </h2>

              <div className="grid md:grid-cols-3 gap-6 text-center">
                <div>
                  <h3 className="font-semibold text-lg">Premium Leather</h3>
                  <p>Kulit berkualitas tinggi dan tahan lama</p>
                </div>

                <div>
                  <h3 className="font-semibold text-lg">Comfortable</h3>
                  <p>Dirancang sesuai anatomi kaki</p>
                </div>

                <div>
                  <h3 className="font-semibold text-lg">Timeless Style</h3>
                  <p>Desain klasik yang selalu relevan</p>
                </div>
              </div>
            </section>

 
            <section className="py-20 text-center">
              <h2 className="text-3xl font-bold mb-6">
                Temukan Sepatu Favoritmu
              </h2>

              <Link to="/product">
                <Button label="Lihat Semua Produk" variant="primary" />
              </Link>
            </section>
           
        </div>
    )
}