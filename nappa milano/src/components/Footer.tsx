export default function Footer() {
  return (
    <footer className="bg-gray-100 py-16 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16">

        {/* LEFT */}
        <div className="flex flex-col items-center">
          <h2 className="text-sm tracking-widest font-semibold mb-6 text-center">
            ABOUT NAPPA MILANO
          </h2>

          <div className="text-left max-w-md">
            <p className="text-gray-600 leading-relaxed mb-6">
              As the name suggests, Nappa Milano shoes are made with
              premium quality leather famous for its soft texture (nappa).
              Classic timeless style combined with a touch of the latest 
              fashion, our shoes are the quintessential accessories for 
              modern men and women
            </p>

            <p className="text-gray-600 leading-relaxed">
              Our founding father perfected the skill of shoemaking in 
              Italy, the epitome of quality leatherwear. Therefore, Nappa 
              Milano understands the structure and the anatomy of a 
              comfortable footwear
            </p>
          </div>
        </div>

        {/* RIGHT */}
        <div className="flex flex-col items-center">
          <h2 className="text-sm tracking-widest font-semibold mb-6 text-center">
            HELP CENTER
          </h2>

          <ul className="text-left space-y-3 text-gray-600">
            <li>About Us</li>
            <li>How to Order</li>
            <li>Size Chart</li>
            <li>Information & Promotion</li>
            <li>Store</li>
            <li>FREE Return & Exchange</li>
            <li>Contact Us</li>
          </ul>
        </div>

      </div>
    </footer>
  );
}