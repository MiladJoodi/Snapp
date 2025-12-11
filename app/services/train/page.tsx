import Image from "next/image"

export default function TrainPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="w-full bg-gradient-to-br from-[#8b5cf6] to-[#6d28d9] text-white py-20">
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="flex-1">
              <h1 className="font-iran-bold2 text-4xl md:text-5xl mb-6">خرید بلیط قطار</h1>
              <p className="font-iran-light2 text-xl mb-8 leading-relaxed">
                رزرو آنلاین بلیط قطار به سراسر کشور با امکانات ویژه
              </p>
              <div className="bg-white rounded-2xl p-6 text-black">
                <div className="mb-4">
                  <label className="font-iran-bold2 block mb-2">ایستگاه مبدا</label>
                  <input
                    type="text"
                    placeholder="مثلاً تهران"
                    className="w-full px-4 py-3 border rounded-lg outline-none font-iran-light2"
                  />
                </div>
                <div className="mb-4">
                  <label className="font-iran-bold2 block mb-2">ایستگاه مقصد</label>
                  <input
                    type="text"
                    placeholder="مثلاً مشهد"
                    className="w-full px-4 py-3 border rounded-lg outline-none font-iran-light2"
                  />
                </div>
                <div className="mb-6">
                  <label className="font-iran-bold2 block mb-2">تاریخ سفر</label>
                  <input
                    type="text"
                    placeholder="۱۴۰۳/۱۰/۲۰"
                    className="w-full px-4 py-3 border rounded-lg outline-none font-iran-light2"
                  />
                </div>
                <button className="w-full bg-[#8b5cf6] text-white py-4 rounded-lg font-iran-bold2 hover:bg-[#6d28d9] transition-colors cursor-pointer">
                  جستجوی قطار
                </button>
              </div>
            </div>
            <div className="flex-1">
              <Image src="/modern-high-speed-train.png" alt="قطار" width={600} height={500} className="rounded-2xl" />
            </div>
          </div>
        </div>
      </section>

      {/* Train Types */}
      <section className="w-full py-16">
        <div className="container mx-auto px-4">
          <h2 className="font-iran-bold2 text-3xl mb-10 text-center">انواع قطار</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-[#fbbf24] to-[#f59e0b] text-white rounded-2xl p-8 text-center">
              <div className="text-5xl mb-4">🚄</div>
              <h3 className="font-iran-bold2 text-2xl mb-3">قطار فدک</h3>
              <p className="font-iran-light2 mb-4">سریع‌ترین قطار کشور با امکانات VIP</p>
              <ul className="text-sm space-y-2 text-right">
                <li>✓ صندلی راحت و قابل تنظیم</li>
                <li>✓ پذیرایی کامل</li>
                <li>✓ سیستم سرگرمی</li>
                <li>✓ اینترنت رایگان</li>
              </ul>
            </div>
            <div className="bg-gradient-to-br from-[#3b82f6] to-[#1d4ed8] text-white rounded-2xl p-8 text-center">
              <div className="text-5xl mb-4">🚅</div>
              <h3 className="font-iran-bold2 text-2xl mb-3">قطار سیر و سفر</h3>
              <p className="font-iran-light2 mb-4">راحت و اقتصادی برای سفرهای بین شهری</p>
              <ul className="text-sm space-y-2 text-right">
                <li>✓ صندلی مناسب</li>
                <li>✓ کوپه ۶ نفره</li>
                <li>✓ پذیرایی ساده</li>
                <li>✓ قیمت مناسب</li>
              </ul>
            </div>
            <div className="bg-gradient-to-br from-[#10b981] to-[#059669] text-white rounded-2xl p-8 text-center">
              <div className="text-5xl mb-4">🚆</div>
              <h3 className="font-iran-bold2 text-2xl mb-3">قطار حومه</h3>
              <p className="font-iran-light2 mb-4">برای سفرهای کوتاه و روزمره</p>
              <ul className="text-sm space-y-2 text-right">
                <li>✓ صندلی معمولی</li>
                <li>✓ حرکت مکرر</li>
                <li>✓ قیمت اقتصادی</li>
                <li>✓ مناسب شهرها</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Routes */}
      <section className="w-full py-16 bg-[#f2f5f8]">
        <div className="container mx-auto px-4">
          <h2 className="font-iran-bold2 text-3xl mb-10 text-center">مسیرهای محبوب</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { from: "تهران", to: "مشهد", duration: "۸ ساعت", price: "۱,۸۰۰,۰۰۰", trains: "۱۲ قطار" },
              { from: "تهران", to: "اصفهان", duration: "۵ ساعت", price: "۱,۲۰۰,۰۰۰", trains: "۸ قطار" },
              { from: "تهران", to: "تبریز", duration: "۱۲ ساعت", price: "۱,۶۰۰,۰۰۰", trains: "۶ قطار" },
              { from: "تهران", to: "یزد", duration: "۷ ساعت", price: "۱,۱۰۰,۰۰۰", trains: "۵ قطار" },
            ].map((route, idx) => (
              <div key={idx} className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-shadow">
                <div className="flex justify-between items-center mb-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-4">
                      <span className="font-iran-bold2 text-2xl">{route.from}</span>
                      <span className="text-3xl text-[#8b5cf6]">→</span>
                      <span className="font-iran-bold2 text-2xl">{route.to}</span>
                    </div>
                    <div className="flex gap-6 mt-3 font-iran-light2 text-sm text-gray-600">
                      <span>⏱️ {route.duration}</span>
                      <span>🚂 {route.trains}</span>
                    </div>
                  </div>
                  <div className="text-left">
                    <div className="font-iran-bold2 text-[#8b5cf6] text-xl">از {route.price}</div>
                    <div className="font-iran-light2 text-xs text-gray-500 mt-1">تومان</div>
                  </div>
                </div>
                <button className="w-full bg-[#8b5cf6] text-white py-3 rounded-lg font-iran-bold2 hover:bg-[#6d28d9] transition-colors mt-4 cursor-pointer">
                  مشاهده قطارها
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="w-full py-16">
        <div className="container mx-auto px-4">
          <h2 className="font-iran-bold2 text-3xl mb-10 text-center">چرا سفر با قطار؟</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { icon: "🌱", title: "سازگار با محیط زیست", desc: "کمترین آلودگی" },
              { icon: "💺", title: "راحتی بیشتر", desc: "فضای کافی برای حرکت" },
              { icon: "💰", title: "مقرون به صرفه", desc: "قیمت مناسب و اقتصادی" },
              { icon: "⏰", title: "دقت در زمان", desc: "حرکت به موقع" },
            ].map((item, idx) => (
              <div key={idx} className="text-center">
                <div className="text-6xl mb-4">{item.icon}</div>
                <h3 className="font-iran-bold2 text-lg mb-2">{item.title}</h3>
                <p className="font-iran-light2 text-sm text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="w-full py-20 bg-gradient-to-br from-[#8b5cf6] to-[#6d28d9] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-iran-bold2 text-4xl mb-6">تجربه سفری راحت و به یاد ماندنی</h2>
          <p className="font-iran-light2 text-xl mb-8 max-w-2xl mx-auto">
            بلیط قطار خود را همین حالا رزرو کنید و از تخفیف‌های ویژه بهره‌مند شوید
          </p>
          <button className="bg-white text-[#8b5cf6] px-10 py-4 rounded-lg font-iran-bold2 text-lg hover:bg-gray-100 transition-colors cursor-pointer">
            رزرو بلیط قطار
          </button>
        </div>
      </section>
    </div>
  )
}
