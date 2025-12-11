import Image from "next/image"

export default function BikePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="w-full bg-gradient-to-br from-[#ff6b35] to-[#f7931e] text-white py-20">
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="flex-1">
              <h1 className="font-iran-bold2 text-4xl md:text-5xl mb-6">پیک موتوری اسنپ</h1>
              <p className="font-iran-light2 text-xl mb-8 leading-relaxed">
                ارسال سریع و مطمئن بسته‌ها و مدارک شما در کمترین زمان ممکن
              </p>
              <div className="bg-white rounded-2xl p-6 text-black">
                <div className="mb-4">
                  <label className="font-iran-bold2 block mb-2">مبدا (از کجا)</label>
                  <input
                    type="text"
                    placeholder="آدرس فرستنده"
                    className="w-full px-4 py-3 border rounded-lg outline-none font-iran-light2"
                  />
                </div>
                <div className="mb-6">
                  <label className="font-iran-bold2 block mb-2">مقصد (به کجا)</label>
                  <input
                    type="text"
                    placeholder="آدرس گیرنده"
                    className="w-full px-4 py-3 border rounded-lg outline-none font-iran-light2"
                  />
                </div>
                <button className="w-full bg-[#ff6b35] text-white py-4 rounded-lg font-iran-bold2 hover:bg-[#f7931e] transition-colors cursor-pointer">
                  درخواست پیک
                </button>
              </div>
            </div>
            <div className="flex-1">
              <Image
                src="/services/motorcycle-delivery-courier.png"
                alt="پیک موتوری"
                width={400}
                height={250}
                className="rounded-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="w-full py-16">
        <div className="container mx-auto px-4">
          <h2 className="font-iran-bold2 text-3xl mb-10 text-center">مزایای پیک موتوری اسنپ</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 text-center shadow-md">
              <div className="w-20 h-20 bg-[#ff6b35] rounded-full flex items-center justify-center text-4xl mx-auto mb-4">
                🏍️
              </div>
              <h3 className="font-iran-bold2 text-xl mb-3">ارسال فوری</h3>
              <p className="font-iran-light2 text-gray-600 leading-relaxed">
                بسته شما در کمتر از ۳۰ دقیقه به مقصد می‌رسد
              </p>
            </div>
            <div className="bg-white rounded-2xl p-8 text-center shadow-md">
              <div className="w-20 h-20 bg-[#ff6b35] rounded-full flex items-center justify-center text-4xl mx-auto mb-4">
                📦
              </div>
              <h3 className="font-iran-bold2 text-xl mb-3">ایمن و مطمئن</h3>
              <p className="font-iran-light2 text-gray-600 leading-relaxed">بیمه کامل بسته و رهگیری لحظه‌ای مسیر</p>
            </div>
            <div className="bg-white rounded-2xl p-8 text-center shadow-md">
              <div className="w-20 h-20 bg-[#ff6b35] rounded-full flex items-center justify-center text-4xl mx-auto mb-4">
                💵
              </div>
              <h3 className="font-iran-bold2 text-xl mb-3">قیمت رقابتی</h3>
              <p className="font-iran-light2 text-gray-600 leading-relaxed">بهترین قیمت برای ارسال بسته‌های شما</p>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="w-full py-16 bg-[#f2f5f8]">
        <div className="container mx-auto px-4">
          <h2 className="font-iran-bold2 text-3xl mb-10 text-center">کاربردهای پیک موتوری</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { icon: "📄", title: "ارسال مدارک" },
              { icon: "🍕", title: "سفارش غذا" },
              { icon: "🎁", title: "ارسال هدیه" },
              { icon: "💊", title: "دارو و درمان" },
              { icon: "🔑", title: "کلید و کارت" },
              { icon: "📱", title: "گوشی و لوازم" },
              { icon: "👔", title: "لباس و پوشاک" },
              { icon: "📚", title: "کتاب و مجله" },
            ].map((item, idx) => (
              <div
                key={idx}
                className="bg-white rounded-xl p-6 text-center shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="text-4xl mb-3">{item.icon}</div>
                <h4 className="font-iran-bold2">{item.title}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="w-full py-16">
        <div className="container mx-auto px-4">
          <h2 className="font-iran-bold2 text-3xl mb-10 text-center">تعرفه ارسال</h2>
          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white border-2 border-gray-200 rounded-2xl p-6 hover:border-[#ff6b35] transition-colors">
              <h3 className="font-iran-bold2 text-2xl mb-2 text-center">تا ۵ کیلومتر</h3>
              <div className="text-center text-3xl font-iran-bold2 text-[#ff6b35] my-4">۲۵,۰۰۰ تومان</div>
              <ul className="font-iran-light2 text-sm space-y-2">
                <li>✓ ارسال معمولی</li>
                <li>✓ بیمه تا ۵۰۰ هزار تومان</li>
                <li>✓ پشتیبانی ۲۴ ساعته</li>
              </ul>
            </div>
            <div className="bg-gradient-to-br from-[#ff6b35] to-[#f7931e] text-white rounded-2xl p-6 transform scale-105 shadow-xl">
              <h3 className="font-iran-bold2 text-2xl mb-2 text-center">۵ تا ۱۰ کیلومتر</h3>
              <div className="text-center text-3xl font-iran-bold2 my-4">۴۵,۰۰۰ تومان</div>
              <ul className="font-iran-light2 text-sm space-y-2">
                <li>✓ ارسال سریع</li>
                <li>✓ بیمه تا ۱ میلیون تومان</li>
                <li>✓ پشتیبانی ۲۴ ساعته</li>
              </ul>
            </div>
            <div className="bg-white border-2 border-gray-200 rounded-2xl p-6 hover:border-[#ff6b35] transition-colors">
              <h3 className="font-iran-bold2 text-2xl mb-2 text-center">بیش از ۱۰ کیلومتر</h3>
              <div className="text-center text-3xl font-iran-bold2 text-[#ff6b35] my-4">۶۵,۰۰۰+ تومان</div>
              <ul className="font-iran-light2 text-sm space-y-2">
                <li>✓ ارسال فوری</li>
                <li>✓ بیمه تا ۲ میلیون تومان</li>
                <li>✓ پشتیبانی ۲۴ ساعته</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="w-full py-20 bg-gradient-to-br from-[#ff6b35] to-[#f7931e] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-iran-bold2 text-4xl mb-6">بسته خود را همین الان ارسال کنید!</h2>
          <p className="font-iran-light2 text-xl mb-8 max-w-2xl mx-auto">
            سریع، ایمن و مقرون به صرفه - پیک موتوری اسنپ همیشه در کنار شماست
          </p>
          <button className="bg-white text-[#ff6b35] px-10 py-4 rounded-lg font-iran-bold2 text-lg hover:bg-gray-100 transition-colors cursor-pointer">
            درخواست پیک موتوری
          </button>
        </div>
      </section>
    </div>
  )
}
