import Image from "next/image"

export default function TaxiPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="w-full bg-gradient-to-br from-[#21aa58] to-[#1a8c47] text-white py-20">
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="flex-1">
              <h1 className="font-iran-bold2 text-4xl md:text-5xl mb-6">تاکسی اینترنتی اسنپ</h1>
              <p className="font-iran-light2 text-xl mb-8 leading-relaxed">
                درخواست آنلاین خودرو با بهترین قیمت. سریع، امن و راحت به مقصد برسید
              </p>
              <div className="bg-white rounded-2xl p-6 text-black">
                <div className="mb-4">
                  <label className="font-iran-bold2 block mb-2">مبدا (از کجا)</label>
                  <input
                    type="text"
                    placeholder="آدرس مبدا را وارد کنید"
                    className="w-full px-4 py-3 border rounded-lg outline-none font-iran-light2"
                  />
                </div>
                <div className="mb-6">
                  <label className="font-iran-bold2 block mb-2">مقصد (به کجا)</label>
                  <input
                    type="text"
                    placeholder="آدرس مقصد را وارد کنید"
                    className="w-full px-4 py-3 border rounded-lg outline-none font-iran-light2"
                  />
                </div>
                <button className="w-full bg-[#21aa58] text-white py-4 rounded-lg font-iran-bold2 hover:bg-[#1a8c47] transition-colors cursor-pointer">
                  درخواست خودرو
                </button>
              </div>
            </div>
            <div className="flex-1">
              <Image
                src="/services/taxi-car-ride-mobile-app.jpg"
                alt="تاکسی اینترنتی"
                width={600}
                height={500}
                className="rounded-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Service Types */}
      <section className="w-full py-16">
        <div className="container mx-auto px-4">
          <h2 className="font-iran-bold2 text-3xl mb-10 text-center">انواع سرویس</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                name: "اسنپ!",
                desc: "سرویس اقتصادی",
                price: "قیمت مناسب",
                icon: "🚗",
              },
              {
                name: "اسنپ بانو",
                desc: "سرویس بانوان",
                price: "امنیت بیشتر",
                icon: "👩",
              },
              {
                name: "اسنپ باکس",
                desc: "سرویس پرمیوم",
                price: "راحتی بیشتر",
                icon: "✨",
              },
              {
                name: "اسنپ تاکسی",
                desc: "تاکسی رسمی",
                price: "نرخ شهرداری",
                icon: "🚕",
              },
            ].map((service, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-shadow cursor-pointer border border-gray-100"
              >
                <div className="text-5xl mb-4 text-center">{service.icon}</div>
                <h3 className="font-iran-bold2 text-xl mb-2">{service.name}</h3>
                <p className="font-iran-light2 text-gray-600 mb-2">{service.desc}</p>
                <span className="text-[#21aa58] font-iran-bold2">{service.price}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="w-full py-16 bg-[#f2f5f8]">
        <div className="container mx-auto px-4">
          <h2 className="font-iran-bold2 text-3xl mb-10 text-center">مزایای استفاده از اسنپ</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 text-center">
              <div className="w-20 h-20 bg-[#21aa58] rounded-full flex items-center justify-center text-4xl mx-auto mb-4">
                ⚡
              </div>
              <h3 className="font-iran-bold2 text-xl mb-3">سرعت بالا</h3>
              <p className="font-iran-light2 text-gray-600 leading-relaxed">
                در کمتر از ۳ دقیقه خودرو در محل شما حاضر می‌شود
              </p>
            </div>
            <div className="bg-white rounded-2xl p-8 text-center">
              <div className="w-20 h-20 bg-[#21aa58] rounded-full flex items-center justify-center text-4xl mx-auto mb-4">
                💰
              </div>
              <h3 className="font-iran-bold2 text-xl mb-3">قیمت مناسب</h3>
              <p className="font-iran-light2 text-gray-600 leading-relaxed">
                بهترین قیمت بازار با امکان مقایسه و انتخاب
              </p>
            </div>
            <div className="bg-white rounded-2xl p-8 text-center">
              <div className="w-20 h-20 bg-[#21aa58] rounded-full flex items-center justify-center text-4xl mx-auto mb-4">
                🛡️
              </div>
              <h3 className="font-iran-bold2 text-xl mb-3">امنیت کامل</h3>
              <p className="font-iran-light2 text-gray-600 leading-relaxed">
                رانندگان راستی‌آزمایی شده و سیستم رهگیری مسیر
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="w-full py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-4xl font-iran-bold2 text-[#21aa58] mb-2">+۱۰۰ هزار</div>
              <div className="font-iran-light2 text-gray-600">راننده فعال</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-iran-bold2 text-[#21aa58] mb-2">+۵۰ شهر</div>
              <div className="font-iran-light2 text-gray-600">پوشش سراسری</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-iran-bold2 text-[#21aa58] mb-2">۲۴/۷</div>
              <div className="font-iran-light2 text-gray-600">خدمات شبانه‌روزی</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-iran-bold2 text-[#21aa58] mb-2">+۱۰ میلیون</div>
              <div className="font-iran-light2 text-gray-600">کاربر فعال</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-20 bg-gradient-to-br from-[#21aa58] to-[#1a8c47] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-iran-bold2 text-4xl mb-6">همین الان سفر خود را شروع کنید!</h2>
          <p className="font-iran-light2 text-xl mb-8 max-w-2xl mx-auto">
            با نصب اپلیکیشن اسنپ، به راحتی و با چند کلیک خودرو درخواست کنید
          </p>
          <button className="bg-white text-[#21aa58] px-10 py-4 rounded-lg font-iran-bold2 text-lg hover:bg-gray-100 transition-colors cursor-pointer">
            <a href="/download">دانلود اپلیکیشن</a>
          </button>
        </div>
      </section>
    </div>
  )
}
