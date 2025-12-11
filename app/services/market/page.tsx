import Image from "next/image"
import { products } from "@/lib/data"

export default function MarketPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="w-full bg-gradient-to-br from-[#00d170] to-[#00a85a] text-white py-20">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-3xl">
            <h1 className="font-iran-bold2 text-4xl md:text-5xl mb-6">سوپر مارکت آنلاین اسنپ</h1>
            <p className="font-iran-light2 text-xl mb-8 leading-relaxed">
              خرید آنلاین مواد غذایی، لبنیات، میوه و سبزیجات تازه با تحویل در کمتر از یک ساعت
            </p>
            <div className="flex gap-4">
              <input
                type="text"
                placeholder="جستجوی محصول..."
                className="flex-1 px-6 py-4 rounded-lg text-black font-iran-light2 outline-none"
              />
              <button className="bg-white text-[#00d170] px-8 py-4 rounded-lg font-iran-bold2 hover:bg-gray-100 transition-colors cursor-pointer">
                جستجو
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="w-full py-16 bg-[#f2f5f8]">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="bg-white rounded-2xl p-6 text-center shadow-md">
              <div className="text-4xl mb-3">🚚</div>
              <h3 className="font-iran-bold2 mb-2">تحویل سریع</h3>
              <p className="font-iran-light2 text-sm text-gray-600">تحویل در کمتر از ۱ ساعت</p>
            </div>
            <div className="bg-white rounded-2xl p-6 text-center shadow-md">
              <div className="text-4xl mb-3">✅</div>
              <h3 className="font-iran-bold2 mb-2">کیفیت تضمینی</h3>
              <p className="font-iran-light2 text-sm text-gray-600">محصولات تازه و باکیفیت</p>
            </div>
            <div className="bg-white rounded-2xl p-6 text-center shadow-md">
              <div className="text-4xl mb-3">💳</div>
              <h3 className="font-iran-bold2 mb-2">پرداخت آسان</h3>
              <p className="font-iran-light2 text-sm text-gray-600">پرداخت آنلاین و درب منزل</p>
            </div>
            <div className="bg-white rounded-2xl p-6 text-center shadow-md">
              <div className="text-4xl mb-3">🎁</div>
              <h3 className="font-iran-bold2 mb-2">تخفیف‌های ویژه</h3>
              <p className="font-iran-light2 text-sm text-gray-600">تخفیف‌های روزانه و هفتگی</p>
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="w-full py-16">
        <div className="container mx-auto px-4">
          <h2 className="font-iran-bold2 text-3xl mb-10 text-center">دسته‌بندی محصولات</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {[
              { name: "لبنیات", icon: "🥛", color: "bg-blue-50" },
              { name: "میوه", icon: "🍎", color: "bg-red-50" },
              { name: "سبزیجات", icon: "🥬", color: "bg-green-50" },
              { name: "گوشت و پروتئین", icon: "🥩", color: "bg-pink-50" },
              { name: "نانوایی", icon: "🍞", color: "bg-yellow-50" },
              { name: "نوشیدنی", icon: "🥤", color: "bg-purple-50" },
            ].map((category, idx) => (
              <div
                key={idx}
                className={`${category.color} rounded-2xl p-6 text-center cursor-pointer hover:shadow-lg transition-shadow`}
              >
                <div className="text-5xl mb-3">{category.icon}</div>
                <div className="font-iran-bold2">{category.name}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="w-full py-16 bg-[#f2f5f8]">
        <div className="container mx-auto px-4">
          <h2 className="font-iran-bold2 text-3xl mb-10 text-center">محصولات پرفروش</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {products.map((product) => (
              <div
                key={product.id}
                className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-shadow cursor-pointer"
              >
                <div className="relative">
                  <Image
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    width={200}
                    height={200}
                    className="w-full h-40 object-cover"
                  />
                  {!product.inStock && (
                    <div className="absolute inset-0 bg-black/50 bg-opacity-50 flex items-center justify-center">
                      <span className="text-white font-iran-bold2 bg-red-500 px-4 py-2 rounded-lg">ناموجود</span>
                    </div>
                  )}
                </div>
                <div className="p-4">
                  <h3 className="font-iran-bold2 mb-1">{product.name}</h3>
                  <p className="font-iran-light2 text-sm text-gray-600 mb-3">{product.category}</p>
                  <div className="flex justify-between items-center">
                    <span className="font-iran-bold2 text-[#00d170]">{product.price.toLocaleString()} تومان</span>
                    <button
                      className={`px-4 py-2 rounded-lg font-iran-bold2 text-sm ${
                        product.inStock
                          ? "bg-[#00d170] text-white hover:bg-[#00a85a] cursor-pointer"
                          : "bg-gray-300 text-gray-500 cursor-not-allowed"
                      }`}
                      disabled={!product.inStock}
                    >
                      افزودن
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-20 bg-gradient-to-br from-[#00d170] to-[#00a85a] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-iran-bold2 text-4xl mb-6">خرید مواد غذایی هیچ وقت این‌قدر آسان نبوده!</h2>
          <p className="font-iran-light2 text-xl mb-8 max-w-2xl mx-auto">
            با اپلیکیشن اسنپ، خریدهای روزانه خود را آنلاین انجام دهید و در منزل تحویل بگیرید
          </p>
          <button className="bg-white text-[#00d170] px-10 py-4 rounded-lg font-iran-bold2 text-lg hover:bg-gray-100 transition-colors cursor-pointer">
            شروع خرید
          </button>
        </div>
      </section>
    </div>
  )
}
