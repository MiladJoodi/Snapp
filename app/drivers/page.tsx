import { driverBenefits, driverRequirements } from "@/lib/data"

export default function DriversPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-l from-[#ff6b35] to-[#ff8c42] text-white py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-center">راننده اسنپ شوید</h1>
          <p className="text-xl text-center max-w-2xl mx-auto">
            با پیوستن به اسنپ، درآمد خود را افزایش دهید و مالک زمان خود باشید
          </p>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">مزایای راننده اسنپ</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {driverBenefits.map((benefit) => (
            <div key={benefit.id} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-5xl mb-4">{benefit.icon}</div>
              <h3 className="text-xl font-bold mb-3 text-gray-800">{benefit.title}</h3>
              <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Requirements Section */}
      <div className="bg-white py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">شرایط ثبت‌نام</h2>
          <div className="max-w-3xl mx-auto">
            <div className="grid md:grid-cols-2 gap-6">
              {driverRequirements.map((req) => (
                <div key={req.id} className="flex items-start gap-4 bg-gray-50 p-6 rounded-xl">
                  <div className="text-3xl">{req.icon}</div>
                  <div>
                    <h3 className="font-bold text-lg mb-2 text-gray-800">{req.title}</h3>
                    <p className="text-gray-600">{req.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Income Calculator */}
      <div className="container mx-auto px-4 py-16">
        <div className="bg-gradient-to-l from-[#21aa58] to-[#10c166] rounded-3xl p-12 text-white">
          <h2 className="text-3xl font-bold mb-6 text-center">محاسبه درآمد تقریبی</h2>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="bg-white/20 backdrop-blur rounded-2xl p-6 text-center">
              <p className="text-4xl font-bold mb-2">۵-۸ میلیون</p>
              <p className="text-lg">درآمد ماهانه (پاره‌وقت)</p>
            </div>
            <div className="bg-white/20 backdrop-blur rounded-2xl p-6 text-center">
              <p className="text-4xl font-bold mb-2">۱۰-۱۵ میلیون</p>
              <p className="text-lg">درآمد ماهانه (تمام‌وقت)</p>
            </div>
            <div className="bg-white/20 backdrop-blur rounded-2xl p-6 text-center">
              <p className="text-4xl font-bold mb-2">۲۰+ میلیون</p>
              <p className="text-lg">درآمد ماهانه (حرفه‌ای)</p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="bg-white rounded-3xl p-12 text-center shadow-xl">
          <h2 className="text-3xl font-bold mb-4 text-gray-800">همین حالا ثبت‌نام کنید!</h2>
          <p className="text-xl mb-8 text-gray-600">فرآیند ثبت‌نام تنها ۱۰ دقیقه زمان می‌برد</p>
          <button className="bg-gradient-to-l from-[#ff6b35] to-[#ff8c42] text-white px-8 py-4 rounded-full font-bold hover:shadow-lg transition-all">
            شروع ثبت‌نام
          </button>
        </div>
      </div>
    </div>
  )
}
