import Image from "next/image"

export default function DoctorPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="w-full bg-gradient-to-br from-[#06b6d4] to-[#0891b2] text-white py-20">
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="flex-1">
              <h1 className="font-iran-bold2 text-4xl md:text-5xl mb-6">مشاوره پزشکی آنلاین</h1>
              <p className="font-iran-light2 text-xl mb-8 leading-relaxed">
                دریافت مشاوره از بهترین پزشکان و متخصصان به صورت آنلاین، در هر زمان و مکان
              </p>
              <div className="bg-white rounded-2xl p-6 text-black">
                <h3 className="font-iran-bold2 text-xl mb-4">نوبت آنلاین</h3>
                <div className="mb-4">
                  <label className="font-iran-bold2 block mb-2">تخصص مورد نیاز</label>
                  <select className="w-full px-4 py-3 border rounded-lg outline-none font-iran-light2">
                    <option>عمومی</option>
                    <option>قلب و عروق</option>
                    <option>اطفال</option>
                    <option>داخلی</option>
                    <option>روانپزشک</option>
                    <option>پوست و مو</option>
                  </select>
                </div>
                <button className="w-full bg-[#06b6d4] text-white py-4 rounded-lg font-iran-bold2 hover:bg-[#0891b2] transition-colors cursor-pointer">
                  جستجوی پزشک
                </button>
              </div>
            </div>
            <div className="flex-1">
              <Image
                src="/online-medical-consultation-doctor.png"
                alt="پزشک آنلاین"
                width={600}
                height={500}
                className="rounded-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="w-full py-16">
        <div className="container mx-auto px-4">
          <h2 className="font-iran-bold2 text-3xl mb-10 text-center">خدمات پزشکی</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-md text-center border-2 border-transparent hover:border-[#06b6d4] transition-all">
              <div className="text-6xl mb-4">👨‍⚕️</div>
              <h3 className="font-iran-bold2 text-2xl mb-3">مشاوره آنلاین</h3>
              <p className="font-iran-light2 text-gray-600 mb-6 leading-relaxed">
                مشاوره تصویری یا صوتی با پزشکان متخصص در زمینه‌های مختلف
              </p>
              <ul className="text-right font-iran-light2 text-sm space-y-2 mb-6">
                <li>✓ دسترسی ۲۴ ساعته</li>
                <li>✓ بدون نیاز به مراجعه حضوری</li>
                <li>✓ صرفه‌جویی در وقت و هزینه</li>
              </ul>
              <button className="bg-[#06b6d4] text-white px-6 py-3 rounded-lg font-iran-bold2 hover:bg-[#0891b2] transition-colors cursor-pointer">
                شروع مشاوره
              </button>
            </div>
            <div className="bg-gradient-to-br from-[#06b6d4] to-[#0891b2] text-white rounded-2xl p-8 text-center shadow-xl transform scale-105">
              <div className="text-6xl mb-4">📋</div>
              <h3 className="font-iran-bold2 text-2xl mb-3">نسخه الکترونیک</h3>
              <p className="font-iran-light2 mb-6 leading-relaxed">
                دریافت نسخه الکترونیکی و سفارش دارو به صورت آنلاین
              </p>
              <ul className="text-right font-iran-light2 text-sm space-y-2 mb-6">
                <li>✓ نسخه دیجیتال معتبر</li>
                <li>✓ ارسال مستقیم به داروخانه</li>
                <li>✓ پیگیری آسان</li>
              </ul>
              <button className="bg-white text-[#06b6d4] px-6 py-3 rounded-lg font-iran-bold2 hover:bg-gray-100 transition-colors cursor-pointer">
                دریافت نسخه
              </button>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-md text-center border-2 border-transparent hover:border-[#06b6d4] transition-all">
              <div className="text-6xl mb-4">🏥</div>
              <h3 className="font-iran-bold2 text-2xl mb-3">آزمایش در منزل</h3>
              <p className="font-iran-light2 text-gray-600 mb-6 leading-relaxed">
                نمونه‌گیری و انجام آزمایش در منزل با کیفیت بالا
              </p>
              <ul className="text-right font-iran-light2 text-sm space-y-2 mb-6">
                <li>✓ نمونه‌گیری در منزل</li>
                <li>✓ نتایج آنلاین</li>
                <li>✓ مشاوره پس از آزمایش</li>
              </ul>
              <button className="bg-[#06b6d4] text-white px-6 py-3 rounded-lg font-iran-bold2 hover:bg-[#0891b2] transition-colors cursor-pointer">
                درخواست آزمایش
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Specialties */}
      <section className="w-full py-16 bg-[#f2f5f8]">
        <div className="container mx-auto px-4">
          <h2 className="font-iran-bold2 text-3xl mb-10 text-center">تخصص‌های پزشکی</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {[
              { name: "عمومی", icon: "🩺" },
              { name: "قلب و عروق", icon: "❤️" },
              { name: "اطفال", icon: "👶" },
              { name: "زنان", icon: "👩‍⚕️" },
              { name: "داخلی", icon: "🏥" },
              { name: "روانپزشک", icon: "🧠" },
              { name: "پوست و مو", icon: "💆" },
              { name: "چشم", icon: "👁️" },
              { name: "دندان", icon: "🦷" },
              { name: "گوش و حلق", icon: "👂" },
              { name: "ارتوپد", icon: "🦴" },
              { name: "تغذیه", icon: "🥗" },
            ].map((spec, idx) => (
              <div
                key={idx}
                className="bg-white rounded-xl p-6 text-center shadow-sm hover:shadow-md transition-shadow cursor-pointer"
              >
                <div className="text-4xl mb-3">{spec.icon}</div>
                <h4 className="font-iran-bold2 text-sm">{spec.name}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="w-full py-16">
        <div className="container mx-auto px-4">
          <h2 className="font-iran-bold2 text-3xl mb-10 text-center">مزایای مشاوره آنلاین</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { icon: "⏰", title: "دسترسی ۲۴/۷", desc: "در هر زمان و مکان" },
              { icon: "💰", title: "صرفه‌جویی", desc: "کاهش هزینه‌ها" },
              { icon: "🔒", title: "حفظ حریم خصوصی", desc: "محرمانه و امن" },
              { icon: "📱", title: "راحتی", desc: "بدون مراجعه حضوری" },
            ].map((feature, idx) => (
              <div key={idx} className="text-center">
                <div className="w-20 h-20 bg-[#06b6d4] rounded-full flex items-center justify-center text-4xl mx-auto mb-4">
                  {feature.icon}
                </div>
                <h3 className="font-iran-bold2 text-xl mb-2">{feature.title}</h3>
                <p className="font-iran-light2 text-sm text-gray-600">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="w-full py-20 bg-gradient-to-br from-[#06b6d4] to-[#0891b2] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-iran-bold2 text-4xl mb-6">سلامتی خود را جدی بگیرید</h2>
          <p className="font-iran-light2 text-xl mb-8 max-w-2xl mx-auto">
            همین حالا با بهترین پزشکان مشاوره کنید و از خدمات پزشکی آنلاین اسنپ بهره‌مند شوید
          </p>
          <button className="bg-white text-[#06b6d4] px-10 py-4 rounded-lg font-iran-bold2 text-lg hover:bg-gray-100 transition-colors cursor-pointer">
            شروع مشاوره آنلاین
          </button>
        </div>
      </section>
    </div>
  )
}
