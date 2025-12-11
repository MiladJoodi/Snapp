export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="w-full bg-gradient-to-br from-[#21aa58] to-[#1a8c47] text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-iran-bold2 text-4xl md:text-5xl mb-6">درباره اسنپ</h1>
          <p className="font-iran-light2 text-xl max-w-3xl mx-auto leading-relaxed">
            اسنپ، اولین و بزرگترین سوپراپلیکیشن ایرانی که زندگی میلیون‌ها ایرانی را راحت‌تر کرده است
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="w-full py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-iran-bold2 text-3xl mb-8 text-center">داستان ما</h2>
            <div className="space-y-6 font-iran-light2 text-lg leading-relaxed text-gray-700">
              <p>
                اسنپ در سال ۱۳۹۳ با هدف ارائه خدمات تاکسی اینترنتی در ایران آغاز به کار کرد. ما با ایمان به این‌که فناوری
                می‌تواند زندگی مردم را بهتر کند، سفر خود را شروع کردیم.
              </p>
              <p>
                امروز اسنپ به یک سوپراپلیکیشن کامل تبدیل شده است که علاوه بر خدمات حمل‌ونقل، طیف گسترده‌ای از سرویس‌ها از
                جمله سفارش غذا، خرید مواد غذایی، رزرو بلیط، خدمات پزشکی و... را ارائه می‌دهد.
              </p>
              <p>
                ما افتخار می‌کنیم که با بیش از ۱۰ میلیون کاربر فعال و ۱۰۰ هزار راننده، بزرگترین پلتفرم خدمات شهری در
                ایران هستیم.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="w-full py-20 bg-[#f2f5f8]">
        <div className="container mx-auto px-4">
          <h2 className="font-iran-bold2 text-3xl mb-12 text-center">ارزش‌های ما</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-white rounded-2xl p-8 text-center shadow-md">
              <div className="w-20 h-20 bg-[#21aa58] rounded-full flex items-center justify-center text-4xl mx-auto mb-6">
                🎯
              </div>
              <h3 className="font-iran-bold2 text-xl mb-4">تمرکز بر کاربر</h3>
              <p className="font-iran-light2 text-gray-600 leading-relaxed">
                رضایت کاربران ما در اولویت اول قرار دارد و تمام تلاش ما برای ارائه بهترین تجربه است
              </p>
            </div>
            <div className="bg-white rounded-2xl p-8 text-center shadow-md">
              <div className="w-20 h-20 bg-[#21aa58] rounded-full flex items-center justify-center text-4xl mx-auto mb-6">
                💡
              </div>
              <h3 className="font-iran-bold2 text-xl mb-4">نوآوری</h3>
              <p className="font-iran-light2 text-gray-600 leading-relaxed">
                ما همواره به دنبال راه‌حل‌های نوآورانه برای حل مشکلات روزمره مردم هستیم
              </p>
            </div>
            <div className="bg-white rounded-2xl p-8 text-center shadow-md">
              <div className="w-20 h-20 bg-[#21aa58] rounded-full flex items-center justify-center text-4xl mx-auto mb-6">
                🤝
              </div>
              <h3 className="font-iran-bold2 text-xl mb-4">مسئولیت اجتماعی</h3>
              <p className="font-iran-light2 text-gray-600 leading-relaxed">
                ما به جامعه خود متعهد هستیم و تلاش می‌کنیم تأثیر مثبتی بر زندگی مردم بگذاریم
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="w-full py-20">
        <div className="container mx-auto px-4">
          <h2 className="font-iran-bold2 text-3xl mb-12 text-center">اسنپ در یک نگاه</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            <div className="text-center">
              <div className="text-5xl font-iran-bold2 text-[#21aa58] mb-3">+۱۰M</div>
              <div className="font-iran-light2 text-gray-600">کاربر فعال</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-iran-bold2 text-[#21aa58] mb-3">+۱۰۰K</div>
              <div className="font-iran-light2 text-gray-600">راننده</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-iran-bold2 text-[#21aa58] mb-3">+۵۰</div>
              <div className="font-iran-light2 text-gray-600">شهر</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-iran-bold2 text-[#21aa58] mb-3">+۲۰</div>
              <div className="font-iran-light2 text-gray-600">سرویس</div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="w-full py-20 bg-[#f2f5f8]">
        <div className="container mx-auto px-4">
          <h2 className="font-iran-bold2 text-3xl mb-12 text-center">تیم ما</h2>
          <p className="font-iran-light2 text-xl text-center text-gray-600 max-w-3xl mx-auto mb-12">
            تیم اسنپ از بهترین متخصصان صنعت فناوری در ایران تشکیل شده است. ما با تخصص، تجربه و اشتیاق برای ساخت بهترین
            خدمات تلاش می‌کنیم.
          </p>
          <div className="text-center">
            <a
              href="/careers"
              className="inline-block bg-[#21aa58] text-white px-8 py-4 rounded-lg font-iran-bold2 hover:bg-[#1a8c47] transition-colors"
            >
              به تیم ما بپیوندید
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
