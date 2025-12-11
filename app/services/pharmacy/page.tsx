import Image from "next/image"

export default function PharmacyPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="w-full bg-gradient-to-br from-[#22c55e] to-[#16a34a] text-white py-20">
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="flex-1">
              <h1 className="font-iran-bold2 text-4xl md:text-5xl mb-6">داروخانه آنلاین اسنپ</h1>
              <p className="font-iran-light2 text-xl mb-8 leading-relaxed">
                سفارش آنلاین دارو، مکمل و محصولات بهداشتی با ارسال سریع به درب منزل
              </p>
              <div className="bg-white rounded-2xl p-6 text-black">
                <div className="mb-4">
                  <label className="font-iran-bold2 block mb-2">جستجوی دارو</label>
                  <input
                    type="text"
                    placeholder="نام دارو یا محصول را وارد کنید"
                    className="w-full px-4 py-3 border rounded-lg outline-none font-iran-light2"
                  />
                </div>
                <div className="flex gap-3">
                  <button className="flex-1 bg-[#22c55e] text-white py-3 rounded-lg font-iran-bold2 hover:bg-[#16a34a] transition-colors cursor-pointer">
                    جستجو
                  </button>
                  <button className="flex-1 bg-gray-100 text-gray-700 py-3 rounded-lg font-iran-bold2 hover:bg-gray-200 transition-colors cursor-pointer">
                    آپلود نسخه
                  </button>
                </div>
              </div>
            </div>
            <div className="flex-1">
              <Image
                src="/online-pharmacy-medicine-delivery.png"
                alt="داروخانه آنلاین"
                width={600}
                height={500}
                className="rounded-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="w-full py-16">
        <div className="container mx-auto px-4">
          <h2 className="font-iran-bold2 text-3xl mb-10 text-center">دسته‌بندی محصولات</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {[
              { name: "داروهای عمومی", icon: "💊", count: "۵۰۰+" },
              { name: "مکمل‌ها", icon: "🧴", count: "۳۰۰+" },
              { name: "ویتامین", icon: "💪", count: "۲۰۰+" },
              { name: "محصولات کودک", icon: "👶", count: "۱۵۰+" },
              { name: "بهداشتی", icon: "🧼", count: "۴۰۰+" },
              { name: "آرایشی", icon: "💄", count: "۲۵۰+" },
              { name: "طبی", icon: "🩹", count: "۱۸۰+" },
              { name: "گیاهی", icon: "🌿", count: "۱۲۰+" },
              { name: "مراقبت پوست", icon: "✨", count: "۲۲۰+" },
              { name: "رژیم و لاغری", icon: "⚖️", count: "۱۰۰+" },
              { name: "دهان و دندان", icon: "🦷", count: "۹۰+" },
              { name: "دستگاه پزشکی", icon: "🩺", count: "۸۰+" },
            ].map((cat, idx) => (
              <div
                key={idx}
                className="bg-white rounded-xl p-6 text-center shadow-sm hover:shadow-md transition-shadow cursor-pointer border"
              >
                <div className="text-5xl mb-3">{cat.icon}</div>
                <h3 className="font-iran-bold2 text-sm mb-1">{cat.name}</h3>
                <p className="font-iran-light2 text-xs text-gray-500">{cat.count}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Products */}
      <section className="w-full py-16 bg-[#f2f5f8]">
        <div className="container mx-auto px-4">
          <h2 className="font-iran-bold2 text-3xl mb-10 text-center">محصولات پرفروش</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { name: "مولتی ویتامین کامل", price: "۲۸۵,۰۰۰", image: "/placeholder.svg?height=250&width=250" },
              { name: "ویتامین D3", price: "۱۲۰,۰۰۰", image: "/placeholder.svg?height=250&width=250" },
              { name: "کلسیم + منیزیم", price: "۱۵۰,۰۰۰", image: "/placeholder.svg?height=250&width=250" },
              { name: "امگا ۳", price: "۲۴۰,۰۰۰", image: "/placeholder.svg?height=250&width=250" },
            ].map((product, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow"
              >
                <Image
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  width={250}
                  height={250}
                  className="w-full h-[200px] object-cover"
                />
                <div className="p-4">
                  <h3 className="font-iran-bold2 text-lg mb-3">{product.name}</h3>
                  <div className="flex justify-between items-center">
                    <div className="font-iran-bold2 text-[#22c55e] text-xl">{product.price} تومان</div>
                    <button className="bg-[#22c55e] text-white px-4 py-2 rounded-lg font-iran-bold2 hover:bg-[#16a34a] transition-colors cursor-pointer">
                      خرید
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it Works */}
      <section className="w-full py-16">
        <div className="container mx-auto px-4">
          <h2 className="font-iran-bold2 text-3xl mb-10 text-center">نحوه سفارش</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: "۱", title: "جستجو کنید", desc: "دارو یا محصول مورد نیاز را جستجو کنید", icon: "🔍" },
              { step: "۲", title: "سبد خرید", desc: "محصولات را به سبد خرید اضافه کنید", icon: "🛒" },
              { step: "۳", title: "پرداخت", desc: "به صورت آنلاین پرداخت کنید", icon: "💳" },
              { step: "۴", title: "دریافت", desc: "محصولات را در منزل دریافت کنید", icon: "📦" },
            ].map((item, idx) => (
              <div key={idx} className="text-center relative">
                <div className="w-20 h-20 bg-[#22c55e] rounded-full flex items-center justify-center text-white text-4xl mx-auto mb-4">
                  {item.icon}
                </div>
                <div className="absolute top-10 right-0 left-0 h-0.5 bg-[#22c55e] -z-10 hidden md:block" />
                <div className="bg-[#22c55e] text-white w-8 h-8 rounded-full flex items-center justify-center font-iran-bold2 mx-auto mb-3">
                  {item.step}
                </div>
                <h3 className="font-iran-bold2 text-xl mb-2">{item.title}</h3>
                <p className="font-iran-light2 text-sm text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="w-full py-16 bg-[#f2f5f8]">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { icon: "✅", title: "محصولات اصل", desc: "تضمین اصالت کالا" },
              { icon: "🚚", title: "ارسال سریع", desc: "تحویل در کمتر از ۲ ساعت" },
              { icon: "👨‍⚕️", title: "مشاوره داروساز", desc: "مشاوره رایگان" },
              { icon: "🔒", title: "خرید امن", desc: "پرداخت کاملاً ایمن" },
            ].map((feature, idx) => (
              <div key={idx} className="bg-white rounded-xl p-6 text-center shadow-sm">
                <div className="text-5xl mb-3">{feature.icon}</div>
                <h3 className="font-iran-bold2 text-lg mb-2">{feature.title}</h3>
                <p className="font-iran-light2 text-sm text-gray-600">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="w-full py-20 bg-gradient-to-br from-[#22c55e] to-[#16a34a] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-iran-bold2 text-4xl mb-6">سلامتی خود را به ما بسپارید</h2>
          <p className="font-iran-light2 text-xl mb-8 max-w-2xl mx-auto">
            با داروخانه آنلاین اسنپ، داروهای خود را سریع، آسان و با اطمینان سفارش دهید
          </p>
          <button className="bg-white text-[#22c55e] px-10 py-4 rounded-lg font-iran-bold2 text-lg hover:bg-gray-100 transition-colors cursor-pointer">
            شروع خرید
          </button>
        </div>
      </section>
    </div>
  )
}
