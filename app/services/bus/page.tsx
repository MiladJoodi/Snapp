import Image from "next/image"

export default function BusPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="w-full bg-gradient-to-br from-[#3b82f6] to-[#1d4ed8] text-white py-20">
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="flex-1">
              <h1 className="font-iran-bold2 text-4xl md:text-5xl mb-6">خرید بلیط اتوبوس</h1>
              <p className="font-iran-light2 text-xl mb-8 leading-relaxed">
                رزرو آنلاین بلیط اتوبوس به تمام نقاط کشور با بهترین قیمت
              </p>
              <div className="bg-white rounded-2xl p-6 text-black">
                <div className="mb-4">
                  <label className="font-iran-bold2 block mb-2">مبدا</label>
                  <input
                    type="text"
                    placeholder="از کدام شهر"
                    className="w-full px-4 py-3 border rounded-lg outline-none font-iran-light2"
                  />
                </div>
                <div className="mb-4">
                  <label className="font-iran-bold2 block mb-2">مقصد</label>
                  <input
                    type="text"
                    placeholder="به کدام شهر"
                    className="w-full px-4 py-3 border rounded-lg outline-none font-iran-light2"
                  />
                </div>
                <div className="mb-6">
                  <label className="font-iran-bold2 block mb-2">تاریخ حرکت</label>
                  <input
                    type="text"
                    placeholder="۱۴۰۳/۱۰/۱۵"
                    className="w-full px-4 py-3 border rounded-lg outline-none font-iran-light2"
                  />
                </div>
                <button className="w-full bg-[#3b82f6] text-white py-4 rounded-lg font-iran-bold2 hover:bg-[#1d4ed8] transition-colors cursor-pointer">
                  جستجوی بلیط
                </button>
              </div>
            </div>
            <div className="flex-1">
              <Image src="/modern-intercity-bus.png" alt="اتوبوس" width={600} height={500} className="rounded-2xl" />
            </div>
          </div>
        </div>
      </section>

      {/* Popular Routes */}
      <section className="w-full py-16">
        <div className="container mx-auto px-4">
          <h2 className="font-iran-bold2 text-3xl mb-10 text-center">مسیرهای پرتردد</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { from: "تهران", to: "مشهد", price: "۱,۲۰۰,۰۰۰", time: "۱۲ ساعت" },
              { from: "تهران", to: "اصفهان", price: "۸۵۰,۰۰۰", time: "۷ ساعت" },
              { from: "تهران", to: "شیراز", price: "۱,۵۰۰,۰۰۰", time: "۱۴ ساعت" },
              { from: "تهران", to: "تبریز", price: "۱,۳۰۰,۰۰۰", time: "۱۰ ساعت" },
              { from: "مشهد", to: "اصفهان", price: "۱,۴۰۰,۰۰۰", time: "۱۳ ساعت" },
              { from: "شیراز", to: "اصفهان", price: "۷۰۰,۰۰۰", time: "۶ ساعت" },
            ].map((route, idx) => (
              <div key={idx} className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-shadow border">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="font-iran-bold2 text-xl">{route.from}</h3>
                    <div className="text-2xl my-2">→</div>
                    <h3 className="font-iran-bold2 text-xl">{route.to}</h3>
                  </div>
                  <div className="text-left">
                    <div className="font-iran-bold2 text-[#3b82f6] text-lg">{route.price} تومان</div>
                    <div className="font-iran-light2 text-sm text-gray-500 mt-2">زمان سفر: {route.time}</div>
                  </div>
                </div>
                <button className="w-full bg-[#3b82f6] text-white py-3 rounded-lg font-iran-bold2 hover:bg-[#1d4ed8] transition-colors cursor-pointer">
                  مشاهده و رزرو
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="w-full py-16 bg-[#f2f5f8]">
        <div className="container mx-auto px-4">
          <h2 className="font-iran-bold2 text-3xl mb-10 text-center">مزایای خرید بلیط از اسنپ</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="bg-white rounded-xl p-6 text-center">
              <div className="text-5xl mb-4">💺</div>
              <h3 className="font-iran-bold2 text-lg mb-2">انتخاب صندلی</h3>
              <p className="font-iran-light2 text-sm text-gray-600">صندلی دلخواه خود را انتخاب کنید</p>
            </div>
            <div className="bg-white rounded-xl p-6 text-center">
              <div className="text-5xl mb-4">🎫</div>
              <h3 className="font-iran-bold2 text-lg mb-2">بلیط الکترونیکی</h3>
              <p className="font-iran-light2 text-sm text-gray-600">نیازی به چاپ بلیط نیست</p>
            </div>
            <div className="bg-white rounded-xl p-6 text-center">
              <div className="text-5xl mb-4">💳</div>
              <h3 className="font-iran-bold2 text-lg mb-2">پرداخت آنلاین</h3>
              <p className="font-iran-light2 text-sm text-gray-600">پرداخت امن و سریع</p>
            </div>
            <div className="bg-white rounded-xl p-6 text-center">
              <div className="text-5xl mb-4">🔄</div>
              <h3 className="font-iran-bold2 text-lg mb-2">استرداد آسان</h3>
              <p className="font-iran-light2 text-sm text-gray-600">کنسلی بلیط بدون دردسر</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="w-full py-20 bg-gradient-to-br from-[#3b82f6] to-[#1d4ed8] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-iran-bold2 text-4xl mb-6">سفر خود را از همین حالا برنامه‌ریزی کنید</h2>
          <p className="font-iran-light2 text-xl mb-8 max-w-2xl mx-auto">
            با اسنپ بلیط اتوبوس خود را به راحتی رزرو کنید و از تخفیف‌های ویژه بهره‌مند شوید
          </p>
          <button className="bg-white text-[#3b82f6] px-10 py-4 rounded-lg font-iran-bold2 text-lg hover:bg-gray-100 transition-colors cursor-pointer">
            جستجوی بلیط
          </button>
        </div>
      </section>
    </div>
  )
}
