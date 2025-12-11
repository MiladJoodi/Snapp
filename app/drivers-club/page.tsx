import Link from "next/link"

export default function DriversClubPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-l from-[#ff6b35] to-[#ff8c42] text-white py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-center">باشگاه رانندگان اسنپ</h1>
          <p className="text-xl text-center max-w-2xl mx-auto">امتیازات و پاداش‌های ویژه برای رانندگان وفادار اسنپ</p>
        </div>
      </div>

      {/* Benefits Grid */}
      <div className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">مزایای باشگاه رانندگان</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              icon: "🎁",
              title: "جوایز نقدی",
              desc: "دریافت پاداش نقدی بر اساس عملکرد و امتیاز شما",
            },
            {
              icon: "⭐",
              title: "امتیاز ویژه",
              desc: "کسب امتیاز با هر سفر و استفاده در خدمات اسنپ",
            },
            {
              icon: "🏆",
              title: "مسابقات ماهانه",
              desc: "شرکت در مسابقات و دریافت جوایز ویژه",
            },
            {
              icon: "📱",
              title: "تخفیف‌های ویژه",
              desc: "تخفیف در تمام خدمات اسنپ برای رانندگان",
            },
            {
              icon: "🎓",
              title: "آموزش رایگان",
              desc: "دوره‌های آموزشی برای ارتقای مهارت رانندگی",
            },
            {
              icon: "💼",
              title: "بیمه رانندگان",
              desc: "پوشش بیمه‌ای اختصاصی برای رانندگان فعال",
            },
          ].map((benefit, idx) => (
            <div key={idx} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-5xl text-center mb-4">{benefit.icon}</div>
              <h3 className="text-xl font-bold mb-3 text-gray-800">{benefit.title}</h3>
              <p className="text-gray-600 leading-relaxed">{benefit.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Levels Section */}
      <div className="bg-white py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">سطوح عضویت باشگاه</h2>
          <div className="grid md:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {[
              { level: "برنزی", points: 1000, color: "from-orange-400 to-orange-600" },
              { level: "نقره‌ای", points: 3000, color: "from-gray-400 to-gray-600" },
              { level: "طلایی", points: 7000, color: "from-yellow-400 to-yellow-600" },
              { level: "پلاتینیوم", points: 15000, color: "from-purple-400 to-purple-600" },
            ].map((tier) => (
              <div
                key={tier.level}
                className={`bg-gradient-to-br ${tier.color} rounded-2xl p-6 text-white text-center shadow-lg`}
              >
                <h3 className="text-2xl font-bold mb-4">{tier.level}</h3>
                <div className="text-4xl font-bold mb-2">{tier.points}</div>
                <p className="text-sm opacity-90">امتیاز مورد نیاز</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* How to Join */}
      <div className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">چگونه عضو شویم؟</h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div className="text-center">
            <div className="w-20 h-20 bg-[#21aa58] rounded-full flex items-center justify-center text-3xl text-white mx-auto mb-4">
              ۱
            </div>
            <h3 className="text-xl font-bold mb-3 text-gray-800">ثبت‌نام کنید</h3>
            <p className="text-gray-600">ابتدا به عنوان راننده اسنپ ثبت‌نام کنید</p>
          </div>
          <div className="text-center">
            <div className="w-20 h-20 bg-[#21aa58] rounded-full flex items-center justify-center text-3xl text-white mx-auto mb-4">
              ۲
            </div>
            <h3 className="text-xl font-bold mb-3 text-gray-800">فعال باشید</h3>
            <p className="text-gray-600">با انجام سفرها امتیاز جمع کنید</p>
          </div>
          <div className="text-center">
            <div className="w-20 h-20 bg-[#21aa58] rounded-full flex items-center justify-center text-3xl text-white mx-auto mb-4">
              ۳
            </div>
            <h3 className="text-xl font-bold mb-3 text-gray-800">جایزه بگیرید</h3>
            <p className="text-gray-600">از امتیازات و پاداش‌های خود استفاده کنید</p>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="container mx-auto px-4 py-16">
        <div className="bg-gradient-to-l from-[#ff6b35] to-[#ff8c42] rounded-3xl p-12 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">هنوز راننده اسنپ نیستید؟</h2>
          <p className="text-xl mb-8">همین حالا ثبت‌نام کنید و از مزایا بهره‌مند شوید</p>
          <Link
            href="/driver-registration"
            className="inline-block bg-white text-[#ff6b35] px-8 py-4 rounded-full font-bold hover:bg-gray-100 transition-colors"
          >
            ثبت‌نام راننده
          </Link>
        </div>
      </div>
    </div>
  )
}
