import Image from "next/image"

export default function PickupPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="w-full bg-gradient-to-br from-[#f97316] to-[#ea580c] text-white py-20">
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="flex-1">
              <h1 className="font-iran-bold2 text-4xl md:text-5xl mb-6">وانت بار اسنپ</h1>
              <p className="font-iran-light2 text-xl mb-8 leading-relaxed">
                حمل و نقل بار و اثاثیه منزل با وانت و کامیونت در سراسر شهر
              </p>
              <div className="bg-white rounded-2xl p-6 text-black">
                <div className="mb-4">
                  <label className="font-iran-bold2 block mb-2">آدرس بارگیری</label>
                  <input
                    type="text"
                    placeholder="از کجا بار بارگیری شود"
                    className="w-full px-4 py-3 border rounded-lg outline-none font-iran-light2"
                  />
                </div>
                <div className="mb-4">
                  <label className="font-iran-bold2 block mb-2">آدرس تخلیه</label>
                  <input
                    type="text"
                    placeholder="به کجا بار تحویل داده شود"
                    className="w-full px-4 py-3 border rounded-lg outline-none font-iran-light2"
                  />
                </div>
                <div className="mb-6">
                  <label className="font-iran-bold2 block mb-2">نوع وانت</label>
                  <select className="w-full px-4 py-3 border rounded-lg outline-none font-iran-light2">
                    <option>وانت نیسان</option>
                    <option>وانت مزدا</option>
                    <option>کامیونت</option>
                  </select>
                </div>
                <button className="w-full bg-[#f97316] text-white py-4 rounded-lg font-iran-bold2 hover:bg-[#ea580c] transition-colors cursor-pointer">
                  درخواست وانت
                </button>
              </div>
            </div>
            <div className="flex-1">
              <Image
                src="/pickup-truck-cargo-transport.png"
                alt="وانت بار"
                width={600}
                height={500}
                className="rounded-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Vehicle Types */}
      <section className="w-full py-16">
        <div className="container mx-auto px-4">
          <h2 className="font-iran-bold2 text-3xl mb-10 text-center">انواع خودرو</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-md border-2 border-gray-200 hover:border-[#f97316] transition-all">
              <div className="text-6xl mb-4 text-center">🚚</div>
              <h3 className="font-iran-bold2 text-2xl mb-3 text-center">وانت نیسان</h3>
              <ul className="font-iran-light2 text-sm space-y-3">
                <li>✓ ظرفیت: تا ۸۰۰ کیلوگرم</li>
                <li>✓ ابعاد: ۲ × ۱.۵ متر</li>
                <li>✓ مناسب: اثاثیه خانه</li>
                <li>✓ قیمت: از ۱۵۰,۰۰۰ تومان</li>
              </ul>
              <button className="w-full mt-6 bg-[#f97316] text-white py-3 rounded-lg font-iran-bold2 hover:bg-[#ea580c] transition-colors cursor-pointer">
                انتخاب
              </button>
            </div>
            <div className="bg-gradient-to-br from-[#f97316] to-[#ea580c] text-white rounded-2xl p-8 shadow-xl transform scale-105">
              <div className="text-6xl mb-4 text-center">🚛</div>
              <h3 className="font-iran-bold2 text-2xl mb-3 text-center">وانت مزدا</h3>
              <ul className="font-iran-light2 text-sm space-y-3">
                <li>✓ ظرفیت: تا ۱۲۰۰ کیلوگرم</li>
                <li>✓ ابعاد: ۲.۵ × ۱.۷ متر</li>
                <li>✓ مناسب: بارهای سنگین</li>
                <li>✓ قیمت: از ۲۰۰,۰۰۰ تومان</li>
              </ul>
              <button className="w-full mt-6 bg-white text-[#f97316] py-3 rounded-lg font-iran-bold2 hover:bg-gray-100 transition-colors cursor-pointer">
                محبوب‌ترین
              </button>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-md border-2 border-gray-200 hover:border-[#f97316] transition-all">
              <div className="text-6xl mb-4 text-center">🚐</div>
              <h3 className="font-iran-bold2 text-2xl mb-3 text-center">کامیونت</h3>
              <ul className="font-iran-light2 text-sm space-y-3">
                <li>✓ ظرفیت: تا ۲۰۰۰ کیلوگرم</li>
                <li>✓ ابعاد: ۳.۵ × ۲ متر</li>
                <li>✓ مناسب: اسباب‌کشی</li>
                <li>✓ قیمت: از ۳۵۰,۰۰۰ تومان</li>
              </ul>
              <button className="w-full mt-6 bg-[#f97316] text-white py-3 rounded-lg font-iran-bold2 hover:bg-[#ea580c] transition-colors cursor-pointer">
                انتخاب
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="w-full py-16 bg-[#f2f5f8]">
        <div className="container mx-auto px-4">
          <h2 className="font-iran-bold2 text-3xl mb-10 text-center">خدمات ویژه</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: "👷", title: "کارگر همراه", desc: "برای بارگیری و تخلیه" },
              { icon: "📦", title: "بسته‌بندی", desc: "بسته‌بندی حرفه‌ای" },
              { icon: "🛡️", title: "بیمه بار", desc: "بیمه کامل محموله" },
              { icon: "📍", title: "رهگیری مسیر", desc: "پیگیری لحظه‌ای" },
            ].map((service, idx) => (
              <div
                key={idx}
                className="bg-white rounded-xl p-6 text-center shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="text-5xl mb-3">{service.icon}</div>
                <h3 className="font-iran-bold2 text-lg mb-2">{service.title}</h3>
                <p className="font-iran-light2 text-sm text-gray-600">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="w-full py-16">
        <div className="container mx-auto px-4">
          <h2 className="font-iran-bold2 text-3xl mb-10 text-center">کاربردهای وانت بار</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              "🏠 اسباب‌کشی منزل",
              "🛋️ حمل مبلمان",
              "🏪 حمل کالای تجاری",
              "🏗️ مصالح ساختمانی",
              "🌿 گل و گیاه",
              "📺 لوازم الکترونیکی",
              "🎨 لوازم اداری",
              "🎁 محموله‌های بزرگ",
            ].map((use, idx) => (
              <div
                key={idx}
                className="bg-white rounded-xl p-4 text-center shadow-sm border hover:border-[#f97316] transition-colors"
              >
                <span className="font-iran-bold2 text-sm">{use}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="w-full py-20 bg-gradient-to-br from-[#f97316] to-[#ea580c] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-iran-bold2 text-4xl mb-6">حمل بار شما با اطمینان کامل</h2>
          <p className="font-iran-light2 text-xl mb-8 max-w-2xl mx-auto">
            با وانت بار اسنپ بارهای خود را سریع، ایمن و با قیمت مناسب جابه‌جا کنید
          </p>
          <button className="bg-white text-[#f97316] px-10 py-4 rounded-lg font-iran-bold2 text-lg hover:bg-gray-100 transition-colors cursor-pointer">
            درخواست وانت بار
          </button>
        </div>
      </section>
    </div>
  )
}
