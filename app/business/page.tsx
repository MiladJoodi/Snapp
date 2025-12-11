import { businessServices } from "@/lib/data"

export default function BusinessPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-l from-[#0d1e45] to-[#1a3564] text-white py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-center">اسنپ برای کسب و کارها</h1>
          <p className="text-xl text-center max-w-3xl mx-auto">
            راهکارهای حمل و نقل هوشمند برای کسب‌وکارها، با امکان مدیریت متمرکز و گزارش‌گیری دقیق
          </p>
        </div>
      </div>

      {/* Services Grid */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {businessServices.map((service) => (
            <div key={service.id} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-center text-5xl mb-4">{service.icon}</div>
              <h3 className="text-2xl font-bold mb-3 text-gray-800">{service.title}</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
              <ul className="space-y-2">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-gray-700">
                    <span className="text-[#21aa58] mt-1">✓</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Benefits Section */}
      <div className="bg-white py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">چرا اسنپ برای کسب‌وکار؟</h2>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { icon: "📊", title: "گزارش‌گیری دقیق", desc: "دسترسی به گزارش‌های جامع و تحلیلی" },
              { icon: "💰", title: "صرفه‌جویی در هزینه", desc: "کاهش تا ۳۰٪ هزینه‌های حمل و نقل" },
              { icon: "🎯", title: "مدیریت متمرکز", desc: "کنترل کامل از یک پنل واحد" },
              { icon: "⚡", title: "پشتیبانی ۲۴/۷", desc: "پشتیبانی اختصاصی برای کسب‌وکارها" },
            ].map((item) => (
              <div key={item.title} className="text-center">
                <div className="text-5xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-bold mb-2 text-gray-800">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="bg-gradient-to-l from-[#0d1e45] to-[#1a3564] rounded-3xl p-12 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">آماده همکاری با ما هستید؟</h2>
          <p className="text-xl mb-8">فرم زیر را تکمیل کنید تا کارشناسان ما با شما تماس بگیرند</p>
          <button className="bg-white text-[#0d1e45] px-8 py-4 rounded-full font-bold hover:bg-gray-100 transition-colors cursor-pointer">
            درخواست مشاوره
          </button>
        </div>
      </div>
    </div>
  )
}
