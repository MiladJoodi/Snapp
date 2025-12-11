import Image from "next/image"
import { restaurants } from "@/lib/data"

export default function FoodPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="w-full bg-gradient-to-br from-[#ff6b35] to-[#ff8c42] text-white py-20">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-3xl">
            <h1 className="font-iran-bold2 text-4xl md:text-5xl mb-6">سفارش آنلاین غذا با اسنپ فود</h1>
            <p className="font-iran-light2 text-xl mb-8 leading-relaxed">
              از هزاران رستوران و فست‌فود در سراسر کشور سفارش دهید. تحویل سریع و قیمت مناسب با اسنپ فود
            </p>
            <div className="flex gap-4">
              <input
                type="text"
                placeholder="جستجوی رستوران یا غذا..."
                className="flex-1 px-6 py-4 rounded-lg text-black border border-orange-300 font-iran-light2 outline-none"
              />
              <button className="bg-white text-[#ff6b35] px-8 py-4 rounded-lg font-iran-bold2 hover:bg-gray-100 transition-colors cursor-pointer">
                جستجو
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="w-full py-16 bg-[#f2f5f8]">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 text-center shadow-md">
              <div className="text-4xl font-iran-bold2 text-[#ff6b35] mb-2">+۵۰۰۰</div>
              <div className="font-iran-light2 text-lg text-gray-600">رستوران فعال</div>
            </div>
            <div className="bg-white rounded-2xl p-8 text-center shadow-md">
              <div className="text-4xl font-iran-bold2 text-[#ff6b35] mb-2">۳۰ دقیقه</div>
              <div className="font-iran-light2 text-lg text-gray-600">میانگین زمان تحویل</div>
            </div>
            <div className="bg-white rounded-2xl p-8 text-center shadow-md">
              <div className="text-4xl font-iran-bold2 text-[#ff6b35] mb-2">۲۴/۷</div>
              <div className="font-iran-light2 text-lg text-gray-600">پشتیبانی آنلاین</div>
            </div>
          </div>
        </div>
      </section>

      {/* Restaurants Grid */}
      <section className="w-full py-16">
        <div className="container mx-auto px-4">
          <h2 className="font-iran-bold2 text-3xl mb-10 text-center">رستوران‌های محبوب</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {restaurants.map((restaurant) => (
              <div
                key={restaurant.id}
                className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-shadow cursor-pointer"
              >
                <Image
                  src={restaurant.image || "/placeholder.svg"}
                  alt={restaurant.name}
                  width={400}
                  height={250}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="font-iran-bold2 text-xl mb-2">{restaurant.name}</h3>
                  <p className="font-iran-light2 text-gray-600 mb-4">{restaurant.cuisine}</p>
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-2">
                      <span className="text-yellow-500">⭐</span>
                      <span className="font-iran-bold2">{restaurant.rating}</span>
                    </div>
                    <div className="font-iran-light2 text-gray-600">{restaurant.deliveryTime}</div>
                  </div>
                  <div className="mt-4 pt-4 border-t">
                    <span className="font-iran-light2 text-sm text-gray-500">
                      حداقل سفارش: {restaurant.minOrder.toLocaleString()} تومان
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="w-full py-16 bg-[#f2f5f8]">
        <div className="container mx-auto px-4">
          <h2 className="font-iran-bold2 text-3xl mb-10 text-center">دسته‌بندی غذاها</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {[
              { name: "فست فود", icon: "🍔" },
              { name: "غذای ایرانی", icon: "🍲" },
              { name: "پیتزا", icon: "🍕" },
              { name: "کباب", icon: "🥙" },
              { name: "دریایی", icon: "🦐" },
              { name: "کافی شاپ", icon: "☕" },
            ].map((category, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl p-6 text-center cursor-pointer hover:shadow-lg transition-shadow"
              >
                <div className="text-5xl mb-3">{category.icon}</div>
                <div className="font-iran-bold2">{category.name}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-20 bg-gradient-to-br from-[#ff6b35] to-[#ff8c42] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-iran-bold2 text-4xl mb-6">همین الان سفارش بده!</h2>
          <p className="font-iran-light2 text-xl mb-8 max-w-2xl mx-auto">
            با نصب اپلیکیشن اسنپ، از تخفیف‌های ویژه و پیشنهادات شگفت‌انگیز بهره‌مند شوید
          </p>
          <button className="bg-white text-[#ff6b35] px-10 py-4 rounded-lg font-iran-bold2 text-lg hover:bg-gray-100 transition-colors">
            <a href="/download">دانلود اپلیکیشن</a>
          </button>
        </div>
      </section>
    </div>
  )
}
