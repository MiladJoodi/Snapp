export default function DriverRegistrationPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="w-full bg-gradient-to-br from-[#21aa58] to-[#1a8c47] text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="font-iran-bold2 text-4xl md:text-5xl mb-6">ثبت‌نام راننده اسنپ</h1>
            <p className="font-iran-light2 text-xl mb-8 leading-relaxed">
              به خانواده بزرگ رانندگان اسنپ بپیوندید و درآمد خود را افزایش دهید
            </p>
            <div className="bg-white bg-opacity-20 backdrop-blur-lg rounded-2xl p-6 inline-block">
              <p className="text-black text-2xl font-iran-bold2">ثبت‌نام در کمتر از ۱۰ دقیقه</p>
            </div>
          </div>
        </div>
      </section>

      {/* Registration Steps */}
      <section className="w-full py-20">
        <div className="container mx-auto px-4">
          <h2 className="font-iran-bold2 text-3xl mb-12 text-center">مراحل ثبت‌نام</h2>
          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {[
                {
                  step: "۱",
                  title: "تکمیل فرم اطلاعات شخصی",
                  desc: "اطلاعات شناسنامه‌ای و تماس خود را وارد کنید",
                },
                {
                  step: "۲",
                  title: "بارگذاری مدارک",
                  desc: "تصویر کارت ملی، گواهینامه و مدارک خودرو را آپلود کنید",
                },
                {
                  step: "۳",
                  title: "بررسی مدارک",
                  desc: "تیم ما مدارک شما را در کمترین زمان بررسی می‌کند",
                },
                {
                  step: "۴",
                  title: "شروع فعالیت",
                  desc: "پس از تأیید، می‌توانید فعالیت خود را شروع کنید",
                },
              ].map((item, idx) => (
                <div key={idx} className="flex gap-6 items-start bg-white rounded-2xl p-6 shadow-md">
                  <div className="w-16 h-16 bg-[#21aa58] rounded-full flex items-center justify-center text-white text-2xl font-iran-bold2 flex-shrink-0">
                    {item.step}
                  </div>
                  <div className="flex-1">
                    <h3 className="font-iran-bold2 text-xl mb-2">{item.title}</h3>
                    <p className="font-iran-light2 text-gray-600">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="w-full py-20 bg-[#f2f5f8]">
        <div className="container mx-auto px-4">
          <h2 className="font-iran-bold2 text-3xl mb-12 text-center">مزایای همکاری با اسنپ</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                icon: "💰",
                title: "درآمد بالا",
                desc: "درآمد تضمینی به علاوه پاداش‌های ماهانه و هفتگی",
              },
              {
                icon: "⏰",
                title: "ساعت کاری آزاد",
                desc: "خودتان تعیین کنید چه زمانی می‌خواهید کار کنید",
              },
              {
                icon: "💳",
                title: "تسویه آنی",
                desc: "امکان برداشت و تسویه حساب در لحظه",
              },
              {
                icon: "🎁",
                title: "طرح‌های تشویقی",
                desc: "شرکت در طرح‌های تشویقی و دریافت پاداش",
              },
              {
                icon: "🛡️",
                title: "بیمه رایگان",
                desc: "پوشش بیمه‌ای برای شما و مسافران",
              },
              {
                icon: "📚",
                title: "آموزش رایگان",
                desc: "دسترسی به دوره‌های آموزشی و کارگاه‌ها",
              },
            ].map((item, idx) => (
              <div key={idx} className="bg-white rounded-2xl p-6 text-center shadow-md">
                <div className="text-5xl mb-4">{item.icon}</div>
                <h3 className="font-iran-bold2 text-xl mb-3">{item.title}</h3>
                <p className="font-iran-light2 text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Registration Form */}
      <section className="w-full py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h2 className="font-iran-bold2 text-2xl mb-6 text-center">فرم ثبت‌نام</h2>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="font-iran-bold2 block mb-2">نام</label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 border rounded-lg outline-none font-iran-light2"
                      placeholder="نام خود را وارد کنید"
                    />
                  </div>
                  <div>
                    <label className="font-iran-bold2 block mb-2">نام خانوادگی</label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 border rounded-lg outline-none font-iran-light2"
                      placeholder="نام خانوادگی خود را وارد کنید"
                    />
                  </div>
                </div>
                <div>
                  <label className="font-iran-bold2 block mb-2">شماره موبایل</label>
                  <input
                    type="tel"
                    className="w-full px-4 py-3 border rounded-lg outline-none font-iran-light2"
                    placeholder="09xx xxx xx xx"
                  />
                </div>
                <div>
                  <label className="font-iran-bold2 block mb-2">کد ملی</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 border rounded-lg outline-none font-iran-light2"
                    placeholder="کد ملی ۱۰ رقمی"
                  />
                </div>
                <div>
                  <label className="font-iran-bold2 block mb-2">نوع خودرو</label>
                  <select className="w-full px-4 py-3 border rounded-lg outline-none font-iran-light2">
                    <option>سواری</option>
                    <option>وانت</option>
                    <option>موتورسیکلت</option>
                  </select>
                </div>
                <div>
                  <label className="font-iran-bold2 block mb-2">مدل خودرو</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 border rounded-lg outline-none font-iran-light2"
                    placeholder="مثال: پراید ۱۳۱"
                  />
                </div>
                <div>
                  <label className="font-iran-bold2 block mb-2">سال ساخت</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 border rounded-lg outline-none font-iran-light2"
                    placeholder="مثال: ۱۴۰۰"
                  />
                </div>
                <div className="flex items-center gap-3">
                  <input type="checkbox" id="terms" className="w-5 h-5 cursor-pointer" />
                  <label htmlFor="terms" className="font-iran-light2 cursor-pointer">
                    قوانین و مقررات را مطالعه کرده و می‌پذیرم
                  </label>
                </div>
                <button
                  type="submit"
                  className="w-full bg-[#21aa58] text-white py-4 rounded-lg font-iran-bold2 hover:bg-[#1a8c47] transition-colors cursor-pointer"
                >
                  ثبت‌نام و ادامه
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="w-full py-20 bg-[#f2f5f8]">
        <div className="container mx-auto px-4">
          <h2 className="font-iran-bold2 text-3xl mb-12 text-center">سؤالات متداول</h2>
          <div className="max-w-3xl mx-auto space-y-4">
            {[
              {
                q: "آیا نیاز به پرداخت هزینه‌ای برای ثبت‌نام دارم؟",
                a: "خیر، ثبت‌نام در اسنپ کاملاً رایگان است.",
              },
              {
                q: "چه مدارکی برای ثبت‌نام لازم است؟",
                a: "کارت ملی، گواهینامه، کارت خودرو و بیمه‌نامه خودرو مورد نیاز است.",
              },
              {
                q: "چقدر طول می‌کشد تا مدارکم تأیید شود؟",
                a: "معمولاً بررسی مدارک تا ۲۴ ساعت طول می‌کشد.",
              },
            ].map((item, idx) => (
              <div key={idx} className="bg-white rounded-xl p-6 shadow-md">
                <h3 className="font-iran-bold2 text-lg mb-3">{item.q}</h3>
                <p className="font-iran-light2 text-gray-600">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
