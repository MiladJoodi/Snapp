export default function ContactPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="w-full bg-gradient-to-br from-[#21aa58] to-[#1a8c47] text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-iran-bold2 text-4xl md:text-5xl mb-6">تماس با ما</h1>
          <p className="font-iran-light2 text-xl max-w-3xl mx-auto">ما همیشه آماده شنیدن نظرات و پیشنهادات شما هستیم</p>
        </div>
      </section>

      {/* Contact Form */}
      <section className="w-full py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h2 className="font-iran-bold2 text-2xl mb-6 text-center">فرم تماس</h2>
              <form className="space-y-6">
                <div>
                  <label className="font-iran-bold2 block mb-2">نام و نام خانوادگی</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 border rounded-lg outline-none font-iran-light2"
                    placeholder="نام خود را وارد کنید"
                  />
                </div>
                <div>
                  <label className="font-iran-bold2 block mb-2">شماره تماس</label>
                  <input
                    type="tel"
                    className="w-full px-4 py-3 border rounded-lg outline-none font-iran-light2"
                    placeholder="09xx xxx xx xx"
                  />
                </div>
                <div>
                  <label className="font-iran-bold2 block mb-2">ایمیل</label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 border rounded-lg outline-none font-iran-light2"
                    placeholder="example@email.com"
                  />
                </div>
                <div>
                  <label className="font-iran-bold2 block mb-2">موضوع</label>
                  <select className="w-full px-4 py-3 border rounded-lg outline-none font-iran-light2">
                    <option>پیشنهاد</option>
                    <option>انتقاد</option>
                    <option>سؤال</option>
                    <option>همکاری</option>
                  </select>
                </div>
                <div>
                  <label className="font-iran-bold2 block mb-2">پیام</label>
                  <textarea
                    rows={6}
                    className="w-full px-4 py-3 border rounded-lg outline-none font-iran-light2 resize-none"
                    placeholder="پیام خود را بنویسید..."
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-[#21aa58] text-white py-4 rounded-lg font-iran-bold2 hover:bg-[#1a8c47] transition-colors cursor-pointer"
                >
                  ارسال پیام
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="w-full py-20 bg-[#f2f5f8]">
        <div className="container mx-auto px-4">
          <h2 className="font-iran-bold2 text-3xl mb-12 text-center">راه‌های ارتباطی</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-white rounded-2xl p-8 text-center shadow-md">
              <div className="w-16 h-16 bg-[#21aa58] rounded-full flex items-center justify-center text-3xl mx-auto mb-4">
                📞
              </div>
              <h3 className="font-iran-bold2 text-xl mb-3">تلفن پشتیبانی</h3>
              <p className="font-iran-light2 text-gray-600">۱۶۱۶</p>
              <p className="font-iran-light2 text-sm text-gray-500 mt-2">۲۴ ساعته، ۷ روز هفته</p>
            </div>
            <div className="bg-white rounded-2xl p-8 text-center shadow-md">
              <div className="w-16 h-16 bg-[#21aa58] rounded-full flex items-center justify-center text-3xl mx-auto mb-4">
                📧
              </div>
              <h3 className="font-iran-bold2 text-xl mb-3">ایمیل</h3>
              <p className="font-iran-light2 text-gray-600">support@snapp.ir</p>
              <p className="font-iran-light2 text-sm text-gray-500 mt-2">پاسخگویی تا ۲۴ ساعت</p>
            </div>
            <div className="bg-white rounded-2xl p-8 text-center shadow-md">
              <div className="w-16 h-16 bg-[#21aa58] rounded-full flex items-center justify-center text-3xl mx-auto mb-4">
                📍
              </div>
              <h3 className="font-iran-bold2 text-xl mb-3">آدرس دفتر</h3>
              <p className="font-iran-light2 text-gray-600">تهران، خیابان ولیعصر</p>
              <p className="font-iran-light2 text-sm text-gray-500 mt-2">برج میلاد، طبقه ۲۵</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Link */}
      <section className="w-full py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-iran-bold2 text-3xl mb-6">سؤالی دارید؟</h2>
          <p className="font-iran-light2 text-xl text-gray-600 mb-8">
            شاید پاسخ سؤال شما در بخش سؤالات متداول موجود باشد
          </p>
          <a
            href="/faq"
            className="inline-block bg-[#21aa58] text-white px-8 py-4 rounded-lg font-iran-bold2 hover:bg-[#1a8c47] transition-colors"
          >
            مشاهده سؤالات متداول
          </a>
        </div>
      </section>
    </div>
  )
}
