import Image from "next/image"
import { hotels } from "@/lib/data"

export default function HotelsPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="w-full bg-gradient-to-br from-[#ec4899] to-[#db2777] text-white py-20">
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="flex-1">
              <h1 className="font-iran-bold2 text-4xl md:text-5xl mb-6">رزرو هتل اسنپ</h1>
              <p className="font-iran-light2 text-xl mb-8 leading-relaxed">
                رزرو آنلاین بهترین هتل‌های ایران با قیمت مناسب و تخفیف‌های ویژه
              </p>
              <div className="bg-white rounded-2xl p-6 text-black">
                <div className="mb-4">
                  <label className="font-iran-bold2 block mb-2">شهر مقصد</label>
                  <input
                    type="text"
                    placeholder="به کدام شهر سفر می‌کنید؟"
                    className="w-full px-4 py-3 border rounded-lg outline-none font-iran-light2"
                  />
                </div>
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div>
                    <label className="font-iran-bold2 block mb-2 text-sm">تاریخ ورود</label>
                    <input
                      type="text"
                      placeholder="۱۴۰۳/۱۰/۲۵"
                      className="w-full px-4 py-3 border rounded-lg outline-none font-iran-light2 text-sm"
                    />
                  </div>
                  <div>
                    <label className="font-iran-bold2 block mb-2 text-sm">تاریخ خروج</label>
                    <input
                      type="text"
                      placeholder="۱۴۰۳/۱۰/۲۸"
                      className="w-full px-4 py-3 border rounded-lg outline-none font-iran-light2 text-sm"
                    />
                  </div>
                </div>
                <button className="w-full bg-[#ec4899] text-white py-4 rounded-lg font-iran-bold2 hover:bg-[#db2777] transition-colors cursor-pointer">
                  جستجوی هتل
                </button>
              </div>
            </div>
            <div className="flex-1">
              <Image src="/luxury-five-star-hotel.jpg" alt="هتل" width={600} height={500} className="rounded-2xl" />
            </div>
          </div>
        </div>
      </section>

      {/* Hotels List */}
      <section className="w-full py-16">
        <div className="container mx-auto px-4">
          <h2 className="font-iran-bold2 text-3xl mb-10 text-center">بهترین هتل‌ها</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {hotels.map((hotel) => (
              <div
                key={hotel.id}
                className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow"
              >
                <Image
                  src={hotel.image || "/placeholder.svg"}
                  alt={hotel.name}
                  width={400}
                  height={250}
                  className="w-full h-[200px] object-cover"
                />
                <div className="p-6">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="font-iran-bold2 text-xl">{hotel.name}</h3>
                    <div className="flex items-center gap-1 bg-[#fbbf24] text-white px-2 py-1 rounded">
                      <span className="font-iran-bold2 text-sm">{hotel.rating}</span>
                      <span>⭐</span>
                    </div>
                  </div>
                  <p className="font-iran-light2 text-gray-600 mb-4 flex items-center gap-2">
                    <span>📍</span>
                    {hotel.location}
                  </p>
                  <div className="mb-4">
                    <div className="flex flex-wrap gap-2">
                      {hotel.amenities.slice(0, 3).map((amenity, idx) => (
                        <span key={idx} className="text-xs bg-gray-100 px-3 py-1 rounded-full font-iran-light2">
                          {amenity}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="flex justify-between items-center pt-4 border-t">
                    <div>
                      <div className="font-iran-light2 text-xs text-gray-500">هر شب از</div>
                      <div className="font-iran-bold2 text-[#ec4899] text-xl">{hotel.price.toLocaleString()} تومان</div>
                    </div>
                    <button className="bg-[#ec4899] text-white px-6 py-2 rounded-lg font-iran-bold2 hover:bg-[#db2777] transition-colors cursor-pointer">
                      رزرو
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="w-full py-16 bg-[#f2f5f8]">
        <div className="container mx-auto px-4">
          <h2 className="font-iran-bold2 text-3xl mb-10 text-center">مزایای رزرو هتل از اسنپ</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { icon: "💎", title: "بهترین قیمت", desc: "تضمین پایین‌ترین قیمت" },
              { icon: "⚡", title: "رزرو آنی", desc: "تایید سریع رزرو" },
              { icon: "🎁", title: "تخفیف ویژه", desc: "تخفیف‌های انحصاری" },
              { icon: "🔒", title: "پرداخت امن", desc: "پرداخت کاملاً ایمن" },
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

      {/* Popular Destinations */}
      <section className="w-full py-16">
        <div className="container mx-auto px-4">
          <h2 className="font-iran-bold2 text-3xl mb-10 text-center">مقاصد محبوب</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { city: "تهران", hotels: "۲۵۰+ هتل", image: "/placeholder.svg?height=200&width=300" },
              { city: "مشهد", hotels: "۱۸۰+ هتل", image: "/placeholder.svg?height=200&width=300" },
              { city: "اصفهان", hotels: "۱۵۰+ هتل", image: "/placeholder.svg?height=200&width=300" },
              { city: "شیراز", hotels: "۱۲۰+ هتل", image: "/placeholder.svg?height=200&width=300" },
              { city: "کیش", hotels: "۱۰۰+ هتل", image: "/placeholder.svg?height=200&width=300" },
              { city: "تبریز", hotels: "۹۰+ هتل", image: "/placeholder.svg?height=200&width=300" },
              { city: "رشت", hotels: "۷۰+ هتل", image: "/placeholder.svg?height=200&width=300" },
              { city: "قشم", hotels: "۶۰+ هتل", image: "/placeholder.svg?height=200&width=300" },
            ].map((dest, idx) => (
              <div key={idx} className="relative rounded-xl overflow-hidden cursor-pointer group">
                <Image
                  src={dest.image || "/placeholder.svg"}
                  alt={dest.city}
                  width={300}
                  height={200}
                  className="w-full h-[150px] object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-4 text-white">
                  <h3 className="font-iran-bold2 text-xl">{dest.city}</h3>
                  <p className="font-iran-light2 text-sm">{dest.hotels}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="w-full py-20 bg-gradient-to-br from-[#ec4899] to-[#db2777] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-iran-bold2 text-4xl mb-6">سفری به یادماندنی را تجربه کنید</h2>
          <p className="font-iran-light2 text-xl mb-8 max-w-2xl mx-auto">
            با رزرو هتل از اسنپ، از بهترین قیمت‌ها و تخفیف‌های ویژه بهره‌مند شوید
          </p>
          <button className="bg-white text-[#ec4899] px-10 py-4 rounded-lg font-iran-bold2 text-lg hover:bg-gray-100 transition-colors cursor-pointer">
            جستجوی هتل
          </button>
        </div>
      </section>
    </div>
  )
}
