export default function DashboardIndex() {
  return (
    <div className="space-y-12 bg-[#f8f5f0] text-[#3e2f1c] min-h-screen p-6">
      <div
        className="h-80 rounded-3xl p-10 flex flex-col justify-end bg-cover bg-center shadow-lg border border-[#d8c3a5]"
        style={{
          backgroundImage:
            "url('https://ucarecdn.com/2761c19c-3782-4396-8403-fc45603bb311/-/format/auto/-/preview/3000x3000/-/quality/lighter/Banner.jpg')",
        }}
      ></div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="bg-white rounded-3xl p-8 shadow-md border border-[#e5d7c3]">
          <p className="text-sm text-[#7a6a58]">
            Collections
          </p>

          <h2 className="text-4xl font-bold mt-3 text-[#8b6f47]">
            12
          </h2>
        </div>

        <div className="bg-white rounded-3xl p-8 shadow-md border border-[#e5d7c3]">
          <p className="text-sm text-[#7a6a58]">
            Products
          </p>

          <h2 className="text-4xl font-bold mt-3 text-[#8b6f47]">
            248
          </h2>
        </div>

        <div className="bg-white rounded-3xl p-8 shadow-md border border-[#e5d7c3]">
          <p className="text-sm text-[#7a6a58]">
            Events
          </p>

          <h2 className="text-4xl font-bold mt-3 text-[#8b6f47]">
            6
          </h2>
        </div>
      </div>

      <div>
        <h2 className="text-3xl font-semibold mb-6 text-[#120e08]">
          New Arrivals
        </h2>

        <div className="flex gap-8 overflow-x-auto pb-4">
          <img
            src="https://nappamilano.id/cdn/shop/files/ginee_20260216123623772_1518233279_400x.png?v=1771217507"
            className="w-80 h-72 object-cover rounded-3xl hover:scale-105 transition duration-300 shadow-md border border-[#e5d7c3]"
            alt="Luxury Handbag"
          />

          <img
            src="https://nappamilano.id/cdn/shop/files/ginee_20260216123923195_2482951998_400x.jpg?v=1771217384"
            className="w-80 h-72 object-cover rounded-3xl hover:scale-105 transition duration-300 shadow-md border border-[#e5d7c3]"
            alt="Designer Bag"
          />

          <img
            src="https://nappamilano.id/cdn/shop/files/ginee_20260216124225357_3602647971_400x.png?v=1771217318"
            className="w-80 h-72 object-cover rounded-3xl hover:scale-105 transition duration-300 shadow-md border border-[#e5d7c3]"
            alt="Premium Footwear"
          />

          <img
            src="https://nappamilano.id/cdn/shop/files/ginee_20260216124110443_8474997821_400x.jpg?v=1771217275"
            className="w-80 h-72 object-cover rounded-3xl hover:scale-105 transition duration-300 shadow-md border border-[#e5d7c3]"
            alt="Luxury Fashion"
          />

          <img
            src="https://nappamilano.id/cdn/shop/files/ginee_20260216123825278_6588370859_400x.png?v=1771217455"
            className="w-80 h-72 object-cover rounded-3xl hover:scale-105 transition duration-300 shadow-md border border-[#e5d7c3]"
            alt="Elegant Accessories"
          />
        </div>
      </div>

      <div>
        <h2 className="text-3xl font-semibold mb-6 text-[#151009]">
          Best Sellers
        </h2>

        <div className="flex gap-8 overflow-x-auto pb-4">
          <img
            src="https://nappamilano.id/cdn/shop/files/1_b914cbb0-664d-4f81-ad50-c4c7b99d4ffe_400x.jpg?v=1757263891"
            className="w-80 h-72 object-cover rounded-3xl hover:scale-105 transition duration-300 shadow-md border border-[#e5d7c3]"
            alt="Best Seller 1"
          />

          <img
            src="https://nappamilano.id/cdn/shop/products/NP32_400x.png?v=1757264266"
            className="w-80 h-72 object-cover rounded-3xl hover:scale-105 transition duration-300 shadow-md border border-[#e5d7c3]"
            alt="Best Seller 2"
          />

          <img
            src="https://nappamilano.id/cdn/shop/files/1_6986e15c-0577-443a-b9d6-33a9db8b9705_400x.jpg?v=1756196658"
            className="w-80 h-72 object-cover rounded-3xl hover:scale-105 transition duration-300 shadow-md border border-[#e5d7c3]"
            alt="Best Seller 3"
          />

          <img
            src="https://nappamilano.id/cdn/shop/products/Blake_Brogues_Brown_02_400x.png?v=1757263807"
            className="w-80 h-72 object-cover rounded-3xl hover:scale-105 transition duration-300 shadow-md border border-[#e5d7c3]"
            alt="Best Seller 4"
          />

          <img
            src="https://nappamilano.id/cdn/shop/products/BlackTassel2RS_400x.png?v=1757264381"
            className="w-80 h-72 object-cover rounded-3xl hover:scale-105 transition duration-300 shadow-md border border-[#e5d7c3]"
            alt="Best Seller 5"
          />
        </div>
      </div>
    </div>
  );
}