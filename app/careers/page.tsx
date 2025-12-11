import { careers } from "@/lib/data"

export default function CareersPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-l from-[#21aa58] to-[#10c166] text-white py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-center">فرصت‌های شغلی</h1>
          <p className="text-xl text-center max-w-2xl mx-auto">
            به تیم اسنپ بپیوندید و در بزرگترین سوپراپلیکیشن ایران کار کنید
          </p>
        </div>
      </div>

      {/* Why Join Section */}
      <div className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">چرا اسنپ؟</h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div className="bg-white rounded-2xl p-8 shadow-lg text-center">
            <div className="text-5xl mb-4">🚀</div>
            <h3 className="text-xl font-bold mb-3 text-gray-800">رشد سریع</h3>
            <p className="text-gray-600 leading-relaxed">در یک محیط پویا و چالش‌برانگیز به سرعت رشد کنید</p>
          </div>
          <div className="bg-white rounded-2xl p-8 shadow-lg text-center">
            <div className="text-5xl mb-4">💰</div>
            <h3 className="text-xl font-bold mb-3 text-gray-800">حقوق رقابتی</h3>
            <p className="text-gray-600 leading-relaxed">دریافت حقوق و مزایای مناسب با بازار کار</p>
          </div>
          <div className="bg-white rounded-2xl p-8 shadow-lg text-center">
            <div className="text-5xl mb-4">🎯</div>
            <h3 className="text-xl font-bold mb-3 text-gray-800">تیم حرفه‌ای</h3>
            <p className="text-gray-600 leading-relaxed">همکاری با بهترین متخصصان صنعت فناوری</p>
          </div>
        </div>
      </div>

      {/* Open Positions */}
      <div className="bg-white py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">موقعیت‌های شغلی باز</h2>
          <div className="max-w-4xl mx-auto space-y-6">
            {careers.map((career) => (
              <div key={career.id} className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4">
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold mb-2 text-gray-800">{career.title}</h3>
                    <p className="text-gray-600 mb-4">{career.description}</p>
                    <div className="flex flex-wrap gap-3">
                      <span className="bg-[#21aa58] text-white px-3 py-1 rounded-full text-sm">
                        {career.department}
                      </span>
                      <span className="bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-sm">
                        {career.location}
                      </span>
                      <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm">{career.type}</span>
                    </div>
                  </div>
                  <button className="bg-[#21aa58] text-white px-6 py-3 rounded-lg hover:bg-[#1a8c47] transition-colors whitespace-nowrap cursor-pointer">
                    ارسال رزومه
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">مزایای کار در اسنپ</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {[
            { icon: "🏥", title: "بیمه تکمیلی", desc: "بیمه درمان برای شما و خانواده" },
            { icon: "🏖️", title: "مرخصی استعلاجی", desc: "مرخصی‌های سالانه مناسب" },
            { icon: "📚", title: "آموزش و توسعه", desc: "دوره‌های آموزشی رایگان" },
            { icon: "☕", title: "محیط دوستانه", desc: "فضای کاری راحت و صمیمی" },
            { icon: "🍽️", title: "ناهار رایگان", desc: "وعده‌های غذایی در محل کار" },
            { icon: "🎮", title: "تفریح و سرگرمی", desc: "امکانات تفریحی متنوع" },
            { icon: "💻", title: "تجهیزات مدرن", desc: "دسترسی به جدیدترین ابزارها" },
            { icon: "🚗", title: "سرویس ایاب و ذهاب", desc: "سرویس رفت و برگشت" },
          ].map((benefit, idx) => (
            <div key={idx} className="bg-white rounded-xl p-6 text-center shadow-md">
              <div className="text-4xl mb-3">{benefit.icon}</div>
              <h3 className="font-bold mb-2 text-gray-800">{benefit.title}</h3>
              <p className="text-sm text-gray-600">{benefit.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="bg-gradient-to-l from-[#21aa58] to-[#10c166] rounded-3xl p-12 text-center text-white">
            <h2 className="text-3xl font-bold mb-4">موقعیت مناسب پیدا نکردید؟</h2>
            <p className="text-xl mb-8">رزومه خود را برای ما ارسال کنید تا در فرصت‌های آینده با شما تماس بگیریم</p>
            <button className="bg-white text-[#21aa58] px-8 py-4 rounded-full font-bold hover:bg-gray-100 transition-colors cursor-pointer">
              ارسال رزومه عمومی
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
