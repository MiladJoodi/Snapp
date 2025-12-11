import Link from "next/link"
import { clubBenefits } from "@/lib/data"

export default function ClubPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-l from-[#21aa58] to-[#10c166] text-white py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-center">باشگاه مشتریان اسنپ</h1>
          <p className="text-xl text-center max-w-2xl mx-auto">
            با استفاده از خدمات اسنپ، امتیاز جمع کنید و از تخفیف‌ها و جوایز ویژه بهره‌مند شوید
          </p>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">مزایای عضویت در باشگاه</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {clubBenefits.map((benefit) => (
            <div key={benefit.id} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-5xl mb-4">{benefit.icon}</div>
              <h3 className="text-xl font-bold mb-3 text-gray-800">{benefit.title}</h3>
              <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Membership Levels */}
      <div className="bg-white py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">سطوح عضویت</h2>
          <div className="grid md:grid-cols-4 gap-6">
            {["برنزی", "نقره‌ای", "طلایی", "پلاتینیوم"].map((level, idx) => (
              <div
                key={level}
                className={`rounded-2xl p-6 text-center ${
                  idx === 0
                    ? "bg-orange-100 border-2 border-orange-300"
                    : idx === 1
                      ? "bg-gray-100 border-2 border-gray-300"
                      : idx === 2
                        ? "bg-yellow-100 border-2 border-yellow-300"
                        : "bg-purple-100 border-2 border-purple-300"
                }`}
              >
                <h3 className="text-2xl font-bold mb-3">{level}</h3>
                <p className="text-4xl font-bold mb-4">{(idx + 1) * 500}</p>
                <p className="text-sm text-gray-600">امتیاز مورد نیاز</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="bg-gradient-to-l from-[#21aa58] to-[#10c166] rounded-3xl p-12 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">همین حالا عضو شوید!</h2>
          <p className="text-xl mb-8">با اولین سفر خود، عضویت در باشگاه را شروع کنید</p>
          <Link
            href="/services/taxi"
            className="inline-block bg-white text-[#21aa58] px-8 py-4 rounded-full font-bold hover:bg-gray-100 transition-colors"
          >
            شروع سفر
          </Link>
        </div>
      </div>
    </div>
  )
}
