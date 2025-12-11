import Image from "next/image"

export default function InsurancePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="w-full bg-gradient-to-br from-[#6366f1] to-[#4f46e5] text-white py-20">
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="flex-1">
              <h1 className="font-iran-bold2 text-4xl md:text-5xl mb-6">بیمه آنلاین اسنپ</h1>
              <p className="font-iran-light2 text-xl mb-8 leading-relaxed">
                خرید آنلاین بیمه شخص ثالث، بدنه، عمر، سفر و درمان با بهترین قیمت و تخفیف ویژه
              </p>
              <div className="bg-white rounded-2xl p-6 text-black">
                <h3 className="font-iran-bold2 text-xl mb-4">محاسبه قیمت بیمه</h3>
                <div className="mb-4">
                  <label className="font-iran-bold2 block mb-2 text-sm">نوع بیمه</label>
                  <select className="w-full px-4 py-3 border rounded-lg outline-none font-iran-light2">
                    <option>بیمه شخص ثالث</option>
                    <option>بیمه بدنه</option>
                    <option>بیمه عمر</option>
                    <option>بیمه سفر</option>
                    <option>بیمه درمان</option>
                  </select>
                </div>
                <button className="w-full bg-[#6366f1] text-white py-4 rounded-lg font-iran-bold2 hover:bg-[#4f46e5] transition-colors cursor-pointer">
                  دریافت قیمت
                </button>
              </div>
            </div>
            <div className="flex-1">
              <Image
                src="/insurance-protection-coverage-concept.jpg"
                alt="بیمه"
                width={600}
                height={500}
                className="rounded-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Insurance Types */}
      <section className="w-full py-16">
        <div className="container mx-auto px-4">
          <h2 className="font-iran-bold2 text-3xl mb-10 text-center">انواع بیمه</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "بیمه شخص ثالث",
                icon: "🚗",
                desc: "بیمه اجباری خودرو با پوشش کامل",
                features: ["پوشش خسارات مالی", "پوشش خسارات جانی", "تخفیف تا ۷۰٪"],
                color: "from-blue-500 to-blue-600",
              },
              {
                title: "بیمه بدنه",
                icon: "🛡️",
                desc: "پوشش خسارات وارد به خودرو",
                features: ["پوشش تصادف", "پوشش سرقت", "خسارات دیده"],
                color: "from-green-500 to-green-600",
              },
              {
                title: "بیمه عمر",
                icon: "❤️",
                desc: "تأمین آینده خانواده",
                features: ["سرمایه‌گذاری بلندمدت", "پوشش فوت", "وام قرض‌الحسنه"],
                color: "from-red-500 to-red-600",
              },
              {
                title: "بیمه سفر",
                icon: "✈️",
                desc: "پوشش کامل سفرهای خارجی",
                features: ["پوشش درمانی", "لغو پرواز", "گم شدن بار"],
                color: "from-purple-500 to-purple-600",
              },
              {
                title: "بیمه درمان",
                icon: "🏥",
                desc: "پوشش هزینه‌های درمان",
                features: ["بستری", "سرپایی", "دارو و آزمایش"],
                color: "from-cyan-500 to-cyan-600",
              },
              {
                title: "بیمه آتش‌سوزی",
                icon: "🔥",
                desc: "پوشش خسارات آتش‌سوزی",
                features: ["ساختمان", "محتویات", "مسئولیت مدنی"],
                color: "from-orange-500 to-orange-600",
              },
            ].map((insurance, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow border"
              >
                <div className={`bg-gradient-to-r ${insurance.color} text-white p-6 text-center`}>
                  <div className="text-6xl mb-3">{insurance.icon}</div>
                  <h3 className="font-iran-bold2 text-2xl">{insurance.title}</h3>
                </div>
                <div className="p-6">
                  <p className="font-iran-light2 text-gray-600 mb-4 text-center">{insurance.desc}</p>
                  <ul className="space-y-2 mb-6">
                    {insurance.features.map((feature, fidx) => (
                      <li key={fidx} className="font-iran-light2 text-sm flex items-center gap-2">
                        <span className="text-green-500">✓</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <button className="w-full bg-gray-100 text-gray-700 py-3 rounded-lg font-iran-bold2 hover:bg-gray-200 transition-colors cursor-pointer">
                    مشاهده جزئیات
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Us */}
      <section className="w-full py-16 bg-[#f2f5f8]">
        <div className="container mx-auto px-4">
          <h2 className="font-iran-bold2 text-3xl mb-10 text-center">چرا بیمه اسنپ؟</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { icon: "💰", title: "بهترین قیمت", desc: "مقایسه قیمت بیمه‌نامه‌ها" },
              { icon: "⚡", title: "صدور فوری", desc: "دریافت بیمه‌نامه در ۵ دقیقه" },
              { icon: "📱", title: "کاملاً آنلاین", desc: "بدون نیاز به مراجعه حضوری" },
              { icon: "🎁", title: "تخفیف ویژه", desc: "تخفیف تا ۷۰٪" },
            ].map((item, idx) => (
              <div key={idx} className="bg-white rounded-xl p-6 text-center shadow-sm">
                <div className="text-5xl mb-3">{item.icon}</div>
                <h3 className="font-iran-bold2 text-lg mb-2">{item.title}</h3>
                <p className="font-iran-light2 text-sm text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Steps */}
      <section className="w-full py-16">
        <div className="container mx-auto px-4">
          <h2 className="font-iran-bold2 text-3xl mb-10 text-center">مراحل خرید بیمه</h2>
          <div className="max-w-4xl mx-auto">
            <div className="space-y-6">
              {[
                { step: "۱", title: "انتخاب نوع بیمه", desc: "نوع بیمه مورد نظر خود را انتخاب کنید" },
                { step: "۲", title: "وارد کردن اطلاعات", desc: "اطلاعات مورد نیاز را وارد کنید" },
                { step: "۳", title: "مقایسه قیمت‌ها", desc: "قیمت‌های شرکت‌های مختلف را مقایسه کنید" },
                { step: "۴", title: "پرداخت و دریافت", desc: "پرداخت کنید و بیمه‌نامه را دریافت کنید" },
              ].map((step, idx) => (
                <div key={idx} className="flex gap-6 items-start bg-white p-6 rounded-xl shadow-sm">
                  <div className="w-12 h-12 bg-[#6366f1] text-white rounded-full flex items-center justify-center font-iran-bold2 text-xl flex-shrink-0">
                    {step.step}
                  </div>
                  <div>
                    <h3 className="font-iran-bold2 text-xl mb-2">{step.title}</h3>
                    <p className="font-iran-light2 text-gray-600">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Partners */}
      <section className="w-full py-16 bg-[#f2f5f8]">
        <div className="container mx-auto px-4">
          <h2 className="font-iran-bold2 text-3xl mb-10 text-center">شرکت‌های بیمه همکار</h2>
          <div className="grid grid-cols-3 md:grid-cols-6 gap-6">
            {[
              "ایران",
              "پاسارگاد",
              "دانا",
              "آسیا",
              "سامان",
              "البرز",
              "کارآفرین",
              "معلم",
              "سینا",
              "رازی",
              "ملت",
              "تجارت نو",
            ].map((company, idx) => (
              <div
                key={idx}
                className="bg-white rounded-xl p-6 flex items-center justify-center shadow-sm hover:shadow-md transition-shadow"
              >
                <span className="font-iran-bold2">{company}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="w-full py-20 bg-gradient-to-br from-[#6366f1] to-[#4f46e5] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-iran-bold2 text-4xl mb-6">آینده خود را بیمه کنید</h2>
          <p className="font-iran-light2 text-xl mb-8 max-w-2xl mx-auto">
            با خرید بیمه از اسنپ، از بهترین پوشش و قیمت‌ها بهره‌مند شوید
          </p>
          <button className="bg-white text-[#6366f1] px-10 py-4 rounded-lg font-iran-bold2 text-lg hover:bg-gray-100 transition-colors cursor-pointer">
            مشاوره رایگان
          </button>
        </div>
      </section>
    </div>
  )
}
