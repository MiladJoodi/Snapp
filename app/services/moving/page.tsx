import Image from "next/image"

export default function MovingPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="w-full bg-gradient-to-br from-[#a855f7] to-[#9333ea] text-white py-20">
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="flex-1">
              <h1 className="font-iran-bold2 text-4xl md:text-5xl mb-6">اسباب‌کشی منزل اسنپ</h1>
              <p className="font-iran-light2 text-xl mb-8 leading-relaxed">
                اسباب‌کشی حرفه‌ای با کارگر مجرب، بسته‌بندی اصولی و بیمه کامل
              </p>
              <div className="bg-white rounded-2xl p-6 text-black">
                <div className="mb-4">
                  <label className="font-iran-bold2 block mb-2">آدرس فعلی</label>
                  <input
                    type="text"
                    placeholder="از کجا"
                    className="w-full px-4 py-3 border rounded-lg outline-none font-iran-light2"
                  />
                </div>
                <div className="mb-4">
                  <label className="font-iran-bold2 block mb-2">آدرس جدید</label>
                  <input
                    type="text"
                    placeholder="به کجا"
                    className="w-full px-4 py-3 border rounded-lg outline-none font-iran-light2"
                  />
                </div>
                <div className="mb-6">
                  <label className="font-iran-bold2 block mb-2">تعداد اتاق</label>
                  <select className="w-full px-4 py-3 border rounded-lg outline-none font-iran-light2">
                    <option>۱ اتاق</option>
                    <option>۲ اتاق</option>
                    <option>۳ اتاق</option>
                    <option>۴ اتاق و بیشتر</option>
                  </select>
                </div>
                <button className="w-full bg-[#a855f7] text-white py-4 rounded-lg font-iran-bold2 hover:bg-[#9333ea] transition-colors cursor-pointer">
                  درخواست اسباب‌کشی
                </button>
              </div>
            </div>
            <div className="flex-1">
              <Image
                src="/professional-moving-service-relocation.png"
                alt="اسباب‌کشی"
                width={350}
                height={250}
                className="rounded-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="w-full py-16">
        <div className="container mx-auto px-4">
          <h2 className="font-iran-bold2 text-3xl mb-10 text-center">خدمات اسباب‌کشی</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-md border-2 border-transparent hover:border-[#a855f7] transition-all">
              <div className="text-6xl text-center mb-4">📦</div>
              <h3 className="font-iran-bold2 text-2xl mb-3 text-center">اسباب‌کشی کامل</h3>
              <p className="font-iran-light2 text-gray-600 mb-4 text-center">
                اسباب‌کشی کامل منزل با کارگر، بسته‌بندی و حمل
              </p>
              <ul className="space-y-2 mb-6 font-iran-light2 text-sm">
                <li>✓ بسته‌بندی حرفه‌ای</li>
                <li>✓ کارگر مجرب</li>
                <li>✓ بیمه کامل اثاثیه</li>
                <li>✓ حمل با وانت یا کامیون</li>
              </ul>
              <button className="w-full bg-[#a855f7] text-white py-3 rounded-lg font-iran-bold2 hover:bg-[#9333ea] transition-colors cursor-pointer">
                انتخاب
              </button>
            </div>
            <div className="bg-gradient-to-br from-[#a855f7] to-[#9333ea] text-white rounded-2xl p-8 shadow-xl transform scale-105">
              <div className="text-6xl text-center mb-4">🚚</div>
              <h3 className="font-iran-bold2 text-2xl mb-3 text-center">فقط حمل</h3>
              <p className="font-iran-light2 mb-4 text-center">حمل اثاثیه بدون کارگر و بسته‌بندی</p>
              <ul className="space-y-2 mb-6 font-iran-light2 text-sm">
                <li>✓ حمل سریع</li>
                <li>✓ خودروی مناسب</li>
                <li>✓ راننده حرفه‌ای</li>
                <li>✓ قیمت اقتصادی</li>
              </ul>
              <button className="w-full bg-white text-[#a855f7] py-3 rounded-lg font-iran-bold2 hover:bg-gray-100 transition-colors cursor-pointer">
                محبوب‌ترین
              </button>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-md border-2 border-transparent hover:border-[#a855f7] transition-all">
              <div className="text-6xl text-center mb-4">👷</div>
              <h3 className="font-iran-bold2 text-2xl mb-3 text-center">فقط کارگر</h3>
              <p className="font-iran-light2 text-gray-600 mb-4 text-center">کارگر برای بارگیری و تخلیه اثاثیه</p>
              <ul className="space-y-2 mb-6 font-iran-light2 text-sm">
                <li>✓ کارگر حرفه‌ای</li>
                <li>✓ بارگیری و تخلیه</li>
                <li>✓ حمل داخل ساختمان</li>
                <li>✓ نرخ ساعتی</li>
              </ul>
              <button className="w-full bg-[#a855f7] text-white py-3 rounded-lg font-iran-bold2 hover:bg-[#9333ea] transition-colors cursor-pointer">
                انتخاب
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="w-full py-16 bg-[#f2f5f8]">
        <div className="container mx-auto px-4">
          <h2 className="font-iran-bold2 text-3xl mb-10 text-center">تعرفه خدمات</h2>
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl p-8 shadow-md">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <h3 className="font-iran-bold2 text-xl mb-4">براساس تعداد اتاق</h3>
                  {[
                    { rooms: "۱ اتاق", price: "۳,۵۰۰,۰۰۰" },
                    { rooms: "۲ اتاق", price: "۵,۵۰۰,۰۰۰" },
                    { rooms: "۳ اتاق", price: "۷,۵۰۰,۰۰۰" },
                    { rooms: "۴+ اتاق", price: "۱۰,۰۰۰,۰۰۰+" },
                  ].map((item, idx) => (
                    <div key={idx} className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
                      <span className="font-iran-bold2">{item.rooms}</span>
                      <span className="font-iran-light2 text-[#a855f7]">از {item.price} تومان</span>
                    </div>
                  ))}
                </div>
                <div className="space-y-4">
                  <h3 className="font-iran-bold2 text-xl mb-4">خدمات اضافی</h3>
                  {[
                    { service: "بسته‌بندی", price: "۵۰۰,۰۰۰" },
                    { service: "کارگر اضافه", price: "۳۰۰,۰۰۰" },
                    { service: "باربری اضافه", price: "۸۰۰,۰۰۰" },
                    { service: "بیمه اضافی", price: "۲۰۰,۰۰۰" },
                  ].map((item, idx) => (
                    <div key={idx} className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
                      <span className="font-iran-bold2">{item.service}</span>
                      <span className="font-iran-light2 text-[#a855f7]">{item.price} تومان</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="w-full py-16">
        <div className="container mx-auto px-4">
          <h2 className="font-iran-bold2 text-3xl mb-10 text-center">فرآیند اسباب‌کشی</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { step: "۱", icon: "📝", title: "ثبت درخواست", desc: "اطلاعات را وارد کنید" },
              { step: "۲", icon: "💰", title: "دریافت قیمت", desc: "قیمت نهایی را ببینید" },
              { step: "۳", icon: "📦", title: "بسته‌بندی", desc: "اثاثیه بسته‌بندی می‌شود" },
              { step: "۴", icon: "🚚", title: "حمل و تحویل", desc: "انتقال به آدرس جدید" },
            ].map((step, idx) => (
              <div key={idx} className="text-center">
                <div className="w-20 h-20 bg-[#a855f7] rounded-full flex items-center justify-center text-white text-3xl mx-auto mb-4">
                  {step.icon}
                </div>
                <div className="bg-[#a855f7] text-white w-10 h-10 rounded-full flex items-center justify-center font-iran-bold2 mx-auto mb-3">
                  {step.step}
                </div>
                <h3 className="font-iran-bold2 text-lg mb-2">{step.title}</h3>
                <p className="font-iran-light2 text-sm text-gray-600">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="w-full py-16 bg-[#f2f5f8]">
        <div className="container mx-auto px-4">
          <h2 className="font-iran-bold2 text-3xl mb-10 text-center">چرا اسباب‌کشی اسنپ؟</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { icon: "🛡️", title: "بیمه کامل", desc: "بیمه تمام اثاثیه" },
              { icon: "👷", title: "کارگر مجرب", desc: "کارگران حرفه‌ای" },
              { icon: "📦", title: "بسته‌بندی اصولی", desc: "با مواد استاندارد" },
              { icon: "⏰", title: "سرویس‌دهی سریع", desc: "در کمترین زمان" },
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
      <section className="w-full py-20 bg-gradient-to-br from-[#a855f7] to-[#9333ea] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-iran-bold2 text-4xl mb-6">اسباب‌کشی را به ما بسپارید</h2>
          <p className="font-iran-light2 text-xl mb-8 max-w-2xl mx-auto">
            با اسباب‌کشی اسنپ، راحت و بی‌دغدغه به خانه جدیدتان نقل مکان کنید
          </p>
          <button className="bg-white text-[#a855f7] px-10 py-4 rounded-lg font-iran-bold2 text-lg hover:bg-gray-100 transition-colors cursor-pointer">
            درخواست اسباب‌کشی
          </button>
        </div>
      </section>
    </div>
  )
}
