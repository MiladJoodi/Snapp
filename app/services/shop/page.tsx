import Image from "next/image"

export default function ShopPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="w-full bg-gradient-to-br from-[#14b8a6] to-[#0d9488] text-white py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="font-iran-bold2 text-4xl md:text-5xl mb-6">فروشگاه اسنپ</h1>
            <p className="font-iran-light2 text-xl max-w-2xl mx-auto leading-relaxed">
              خرید آنلاین انواع محصولات از برندهای معتبر با بهترین قیمت و ارسال رایگان
            </p>
          </div>
          <div className="max-w-2xl mx-auto bg-white rounded-2xl p-6">
            <input
              type="text"
              placeholder="جستجوی محصولات..."
              className="w-full px-6 py-4 border rounded-xl outline-none font-iran-light2 text-black text-lg"
            />
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="w-full py-16">
        <div className="container mx-auto px-4">
          <h2 className="font-iran-bold2 text-3xl mb-10 text-center">دسته‌بندی محصولات</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {[
              { icon: "📱", name: "موبایل و تبلت", count: "۱۲۰۰+" },
              { icon: "💻", name: "لپ‌تاپ و کامپیوتر", count: "۸۰۰+" },
              { icon: "🎧", name: "لوازم جانبی", count: "۱۵۰۰+" },
              { icon: "📷", name: "دوربین", count: "۳۰۰+" },
              { icon: "🎮", name: "بازی و سرگرمی", count: "۵۰۰+" },
              { icon: "👕", name: "پوشاک", count: "۲۰۰۰+" },
              { icon: "👟", name: "کفش و کیف", count: "۹۰۰+" },
              { icon: "💄", name: "آرایشی و بهداشتی", count: "۱۰۰۰+" },
              { icon: "🏠", name: "خانه و آشپزخانه", count: "۷۰۰+" },
              { icon: "📚", name: "کتاب و لوازم تحریر", count: "۶۰۰+" },
              { icon: "🎨", name: "هنر و صنایع دستی", count: "۴۰۰+" },
              { icon: "⚽", name: "ورزش و سفر", count: "۵۵۰+" },
            ].map((cat, idx) => (
              <div
                key={idx}
                className="bg-white rounded-xl p-6 text-center shadow-sm hover:shadow-md transition-shadow cursor-pointer border border-gray-100"
              >
                <div className="text-5xl mb-3">{cat.icon}</div>
                <h3 className="font-iran-bold2 text-sm mb-1">{cat.name}</h3>
                <p className="font-iran-light2 text-xs text-gray-500">{cat.count} محصول</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="w-full py-16 bg-[#f2f5f8]">
        <div className="container mx-auto px-4">
          <h2 className="font-iran-bold2 text-3xl mb-10 text-center">پیشنهادات ویژه</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                name: "گوشی موبایل سامسونگ A54",
                price: "۱۲,۵۰۰,۰۰۰",
                discount: "۲۰٪",
                image: "/placeholder.svg?height=300&width=300",
                rating: 4.5,
              },
              {
                name: "لپ‌تاپ لنوو IdeaPad",
                price: "۲۵,۰۰۰,۰۰۰",
                discount: "۱۵٪",
                image: "/placeholder.svg?height=300&width=300",
                rating: 4.7,
              },
              {
                name: "هدفون بی‌سیم سونی",
                price: "۳,۲۰۰,۰۰۰",
                discount: "۳۰٪",
                image: "/placeholder.svg?height=300&width=300",
                rating: 4.8,
              },
              {
                name: "ساعت هوشمند اپل واچ",
                price: "۱۸,۰۰۰,۰۰۰",
                discount: "۱۰٪",
                image: "/placeholder.svg?height=300&width=300",
                rating: 4.9,
              },
            ].map((product, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow"
              >
                <div className="relative">
                  <Image
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    width={300}
                    height={300}
                    className="w-full h-[250px] object-cover"
                  />
                  <span className="absolute top-3 right-3 bg-red-500 text-white px-3 py-1 rounded-full font-iran-bold2 text-sm">
                    {product.discount} تخفیف
                  </span>
                </div>
                <div className="p-4">
                  <h3 className="font-iran-bold2 text-lg mb-3 h-12">{product.name}</h3>
                  <div className="flex items-center gap-1 mb-3">
                    <span className="text-yellow-500">⭐</span>
                    <span className="font-iran-bold2 text-sm">{product.rating}</span>
                    <span className="font-iran-light2 text-xs text-gray-500">(۱۵۰ نظر)</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <div className="font-iran-bold2 text-[#14b8a6] text-xl">{product.price} تومان</div>
                    <button className="bg-[#14b8a6] text-white px-4 py-2 rounded-lg font-iran-bold2 text-sm hover:bg-[#0d9488] transition-colors cursor-pointer">
                      خرید
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="w-full py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { icon: "🚚", title: "ارسال رایگان", desc: "برای خریدهای بالای ۵۰۰ هزار تومان" },
              { icon: "↩️", title: "ضمانت بازگشت", desc: "تا ۷ روز ضمانت بازگشت کالا" },
              { icon: "✅", title: "اصالت کالا", desc: "۱۰۰٪ اصل و گارانتی معتبر" },
              { icon: "💳", title: "پرداخت امن", desc: "پرداخت اقساطی بدون بهره" },
            ].map((feature, idx) => (
              <div key={idx} className="text-center">
                <div className="w-20 h-20 bg-[#14b8a6] rounded-full flex items-center justify-center text-4xl mx-auto mb-4">
                  {feature.icon}
                </div>
                <h3 className="font-iran-bold2 text-xl mb-2">{feature.title}</h3>
                <p className="font-iran-light2 text-sm text-gray-600">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Brands */}
      <section className="w-full py-16 bg-[#f2f5f8]">
        <div className="container mx-auto px-4">
          <h2 className="font-iran-bold2 text-3xl mb-10 text-center">برندهای محبوب</h2>
          <div className="grid grid-cols-3 md:grid-cols-6 gap-6">
            {[
              "Apple",
              "Samsung",
              "Sony",
              "LG",
              "Xiaomi",
              "Huawei",
              "Nike",
              "Adidas",
              "Zara",
              "H&M",
              "Asus",
              "Dell",
            ].map((brand, idx) => (
              <div
                key={idx}
                className="bg-white rounded-xl p-6 flex items-center justify-center shadow-sm hover:shadow-md transition-shadow cursor-pointer"
              >
                <span className="font-iran-bold2 text-lg text-gray-700">{brand}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="w-full py-20 bg-gradient-to-br from-[#14b8a6] to-[#0d9488] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-iran-bold2 text-4xl mb-6">خرید آنلاین با بهترین تجربه</h2>
          <p className="font-iran-light2 text-xl mb-8 max-w-2xl mx-auto">
            هزاران محصول اصل با گارانتی معتبر، ارسال رایگان و تخفیف‌های ویژه در فروشگاه اسنپ
          </p>
          <button className="bg-white text-[#14b8a6] px-10 py-4 rounded-lg font-iran-bold2 text-lg hover:bg-gray-100 transition-colors cursor-pointer">
            مشاهده محصولات
          </button>
        </div>
      </section>
    </div>
  )
}
