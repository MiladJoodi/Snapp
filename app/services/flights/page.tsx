import { flights } from "@/lib/data"

export default function FlightsPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="w-full bg-gradient-to-br from-[#4a90e2] to-[#357abd] text-white py-20">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="font-iran-bold2 text-4xl md:text-5xl mb-6">خرید بلیط هواپیما</h1>
            <p className="font-iran-light2 text-xl mb-8 leading-relaxed">
              رزرو آنلاین بلیط پرواز داخلی و خارجی با بهترین قیمت و پشتیبانی ۲۴ ساعته
            </p>
          </div>
        </div>
      </section>

      {/* Search Form */}
      <section className="w-full py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="font-iran-bold2 block mb-2">مبدا</label>
                <select className="w-full px-4 py-3 border rounded-lg outline-none font-iran-light2 cursor-pointer">
                  <option>تهران (IKA)</option>
                  <option>مشهد (MHD)</option>
                  <option>اصفهان (IFN)</option>
                  <option>شیراز (SYZ)</option>
                </select>
              </div>
              <div>
                <label className="font-iran-bold2 block mb-2">مقصد</label>
                <select className="w-full px-4 py-3 border rounded-lg outline-none font-iran-light2 cursor-pointer">
                  <option>مشهد (MHD)</option>
                  <option>تهران (IKA)</option>
                  <option>کیش (KIH)</option>
                  <option>شیراز (SYZ)</option>
                </select>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="font-iran-bold2 block mb-2">تاریخ رفت</label>
                <input
                  type="text"
                  placeholder="۱۴۰۳/۱۰/۱۵"
                  className="w-full px-4 py-3 border rounded-lg outline-none font-iran-light2 cursor-pointer"
                />
              </div>
              <div>
                <label className="font-iran-bold2 block mb-2">تاریخ برگشت (اختیاری)</label>
                <input
                  type="text"
                  placeholder="۱۴۰۳/۱۰/۲۰"
                  className="w-full px-4 py-3 border rounded-lg outline-none font-iran-light2 cursor-pointer"
                />
              </div>
            </div>
            <button className="w-full bg-[#4a90e2] text-white py-4 rounded-lg font-iran-bold2 hover:bg-[#357abd] transition-colors cursor-pointer">
              جستجوی پرواز
            </button>
          </div>
        </div>
      </section>

      {/* Available Flights */}
      <section className="w-full py-16 bg-[#f2f5f8]">
        <div className="container mx-auto px-4">
          <h2 className="font-iran-bold2 text-3xl mb-10 text-center">پرواز‌های موجود</h2>
          <div className="max-w-4xl mx-auto space-y-6">
            {flights.map((flight) => (
              <div key={flight.id} className="bg-white rounded-2xl shadow-md p-6 hover:shadow-xl transition-shadow">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
                  <div className="flex-1">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 bg-[#4a90e2] rounded-full flex items-center justify-center text-white text-xl">
                        ✈️
                      </div>
                      <div>
                        <h3 className="font-iran-bold2 text-lg">{flight.airline}</h3>
                        <p className="font-iran-light2 text-sm text-gray-600">پرواز مستقیم</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-8">
                      <div className="text-center">
                        <div className="font-iran-bold2 text-2xl">{flight.from}</div>
                        <div className="font-iran-light2 text-sm text-gray-600">۱۴:۰۰</div>
                      </div>
                      <div className="flex-1">
                        <div className="border-t-2 border-dashed relative">
                          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white px-2">
                            <span className="font-iran-light2 text-xs text-gray-600">{flight.duration}</span>
                          </div>
                        </div>
                      </div>
                      <div className="text-center">
                        <div className="font-iran-bold2 text-2xl">{flight.to}</div>
                        <div className="font-iran-light2 text-sm text-gray-600">۱۵:۱۵</div>
                      </div>
                    </div>
                  </div>
                  <div className="text-center md:text-left">
                    <div className="font-iran-bold2 text-2xl text-[#4a90e2] mb-2">
                      {flight.price.toLocaleString()} تومان
                    </div>
                    <button className="bg-[#4a90e2] text-white px-6 py-3 rounded-lg font-iran-bold2 hover:bg-[#357abd] transition-colors cursor-pointer">
                      انتخاب و خرید
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
          <h2 className="font-iran-bold2 text-3xl mb-10 text-center">مزایای خرید بلیط از اسنپ</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="bg-white rounded-2xl p-6 text-center shadow-md">
              <div className="text-4xl mb-3">💳</div>
              <h3 className="font-iran-bold2 mb-2">پرداخت آسان</h3>
              <p className="font-iran-light2 text-sm text-gray-600">پرداخت آنلاین امن</p>
            </div>
            <div className="bg-white rounded-2xl p-6 text-center shadow-md">
              <div className="text-4xl mb-3">📱</div>
              <h3 className="font-iran-bold2 mb-2">بلیط الکترونیکی</h3>
              <p className="font-iran-light2 text-sm text-gray-600">دریافت فوری بلیط</p>
            </div>
            <div className="bg-white rounded-2xl p-6 text-center shadow-md">
              <div className="text-4xl mb-3">🎫</div>
              <h3 className="font-iran-bold2 mb-2">کنسلی رایگان</h3>
              <p className="font-iran-light2 text-sm text-gray-600">کنسلی طبق قوانین</p>
            </div>
            <div className="bg-white rounded-2xl p-6 text-center shadow-md">
              <div className="text-4xl mb-3">📞</div>
              <h3 className="font-iran-bold2 mb-2">پشتیبانی ۲۴/۷</h3>
              <p className="font-iran-light2 text-sm text-gray-600">پشتیبانی شبانه‌روزی</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-20 bg-gradient-to-br from-[#4a90e2] to-[#357abd] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-iran-bold2 text-4xl mb-6">سفر خود را با اسنپ شروع کنید!</h2>
          <p className="font-iran-light2 text-xl mb-8 max-w-2xl mx-auto">رزرو آنلاین بلیط هواپیما با چند کلیک ساده</p>
          <button className="bg-white text-[#4a90e2] px-10 py-4 rounded-lg font-iran-bold2 text-lg hover:bg-gray-100 transition-colors cursor-pointer">
            جستجوی پرواز
          </button>
        </div>
      </section>
    </div>
  )
}
