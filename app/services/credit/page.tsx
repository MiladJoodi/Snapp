export default function CreditPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="w-full bg-gradient-to-br from-[#f59e0b] to-[#d97706] text-white py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="font-iran-bold2 text-4xl md:text-5xl mb-6">سرویس اعتباری اسنپ</h1>
            <p className="font-iran-light2 text-xl max-w-2xl mx-auto leading-relaxed">
              خرید اقساطی محصولات با بهترین شرایط، بدون ضامن و بدون چک
            </p>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="w-full py-16">
        <div className="container mx-auto px-4">
          <h2 className="font-iran-bold2 text-3xl mb-10 text-center">مزایای خرید اقساطی</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { icon: "🚫", title: "بدون ضامن", desc: "نیازی به معرفی ضامن نیست" },
              { icon: "📄", title: "بدون چک", desc: "بدون نیاز به چک و سفته" },
              { icon: "⚡", title: "تایید سریع", desc: "تایید در کمتر از ۵ دقیقه" },
              { icon: "💰", title: "اقساط راحت", desc: "پرداخت در ۶ تا ۲۴ ماه" },
            ].map((feature, idx) => (
              <div key={idx} className="bg-white rounded-xl p-6 text-center shadow-md border">
                <div className="text-5xl mb-3">{feature.icon}</div>
                <h3 className="font-iran-bold2 text-lg mb-2">{feature.title}</h3>
                <p className="font-iran-light2 text-sm text-gray-600">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it Works */}
      <section className="w-full py-16 bg-[#f2f5f8]">
        <div className="container mx-auto px-4">
          <h2 className="font-iran-bold2 text-3xl mb-10 text-center">نحوه استفاده</h2>
          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { step: "۱", title: "ثبت‌نام", desc: "ثبت‌نام و احراز هویت", icon: "📝" },
              { step: "۲", title: "دریافت اعتبار", desc: "دریافت سقف اعتباری", icon: "💳" },
              { step: "۳", title: "خرید کنید", desc: "خرید به صورت اقساطی", icon: "🛍️" },
            ].map((step, idx) => (
              <div key={idx} className="text-center">
                <div className="w-24 h-24 bg-[#f59e0b] rounded-full flex items-center justify-center text-4xl mx-auto mb-4">
                  {step.icon}
                </div>
                <div className="bg-[#f59e0b] text-white w-12 h-12 rounded-full flex items-center justify-center font-iran-bold2 text-xl mx-auto mb-3">
                  {step.step}
                </div>
                <h3 className="font-iran-bold2 text-xl mb-2">{step.title}</h3>
                <p className="font-iran-light2 text-gray-600">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="w-full py-16">
        <div className="container mx-auto px-4">
          <h2 className="font-iran-bold2 text-3xl mb-10 text-center">دسته‌بندی محصولات</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { name: "موبایل", icon: "📱" },
              { name: "لپ‌تاپ", icon: "💻" },
              { name: "لوازم خانگی", icon: "🏠" },
              { name: "دوچرخه", icon: "🚲" },
              { name: "ابزار", icon: "🔧" },
              { name: "صوتی و تصویری", icon: "📺" },
              { name: "پوشاک", icon: "👕" },
              { name: "ورزشی", icon: "⚽" },
            ].map((cat, idx) => (
              <div
                key={idx}
                className="bg-white rounded-xl p-6 text-center shadow-sm hover:shadow-md transition-shadow cursor-pointer border"
              >
                <div className="text-5xl mb-3">{cat.icon}</div>
                <h3 className="font-iran-bold2">{cat.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Terms */}
      <section className="w-full py-16 bg-[#f2f5f8]">
        <div className="container mx-auto px-4">
          <h2 className="font-iran-bold2 text-3xl mb-10 text-center">شرایط استفاده</h2>
          <div className="max-w-3xl mx-auto bg-white rounded-2xl p-8 shadow-md">
            <ul className="space-y-4 font-iran-light2">
              <li className="flex gap-3">
                <span className="text-[#f59e0b]">✓</span>
                <span>داشتن سن ۱۸ سال به بالا</span>
              </li>
              <li className="flex gap-3">
                <span className="text-[#f59e0b]">✓</span>
                <span>داشتن کارت ملی و شناسنامه معتبر</span>
              </li>
              <li className="flex gap-3">
                <span className="text-[#f59e0b]">✓</span>
                <span>داشتن حساب بانکی به نام خود</span>
              </li>
              <li className="flex gap-3">
                <span className="text-[#f59e0b]">✓</span>
                <span>عدم بدهی معوق بانکی</span>
              </li>
              <li className="flex gap-3">
                <span className="text-[#f59e0b]">✓</span>
                <span>احراز هویت موفق</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="w-full py-20 bg-gradient-to-br from-[#f59e0b] to-[#d97706] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-iran-bold2 text-4xl mb-6">همین الان اعتبار خود را دریافت کنید</h2>
          <p className="font-iran-light2 text-xl mb-8 max-w-2xl mx-auto">
            با سرویس اعتباری اسنپ، محصول مورد نیاز خود را به صورت اقساطی خریداری کنید
          </p>
          <button className="bg-white text-[#f59e0b] px-10 py-4 rounded-lg font-iran-bold2 text-lg hover:bg-gray-100 transition-colors cursor-pointer">
            درخواست اعتبار
          </button>
        </div>
      </section>
    </div>
  )
}
