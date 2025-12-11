import Image from "next/image"
import { services, benefits } from "@/lib/data"
import ServiceCard from "@/components/service-card"

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <header className="w-full flex">
        <div className="w-full md:w-2/3 lg:w-1/2 bg-[#21aa58] flex flex-col justify-center items-end text-white">
          <div className="w-full md:w-3/4 px-7 py-7">
            <h1 className="font-iran-bold2 text-2xl md:text-4xl text-right leading-[50px] md:leading-[60px] lg:leading-[50px]">
              تجربه‌ی زندگی راحت‌تر، سریع‌تر و به‌صرفه‌تر با سوپراپلیکیشن اسنپ!
            </h1>
            <p className="font-iran-light2 text-xl leading-[30px] my-3">
              از درخواست خودرو گرفته تا سفارش غذا، خرید سوپرمارکتی، خرید بلیط سفر، رزرو هتل و... را میتوانید با اسنپ
              انجام دهید.
            </p>

            <div className="hidden md:flex w-full justify-start gap-3">
              <input
                className="bg-transparent border-b outline-none py-1 flex-1"
                type="text"
                placeholder="09xx xxx xx xx"
              />
              <div className="bg-white text-[#21aa58] cursor-pointer font-iran-bold2 rounded-md px-5 py-2">
                ارسال لینک
              </div>
            </div>

            <div className="flex md:hidden cursor-pointer bg-white text-[#000000c2] font-iran-bold2 text-[2.5vw] rounded-md justify-center py-3">
              <a href="/download">دانلود اپلیکیشن اسنپ</a>
            </div>
            <div className="hidden md:inline-block border border-white text-[#ffffffc2] cursor-pointer font-iran-bold2 text-sm rounded-md justify-center mt-7 py-3 px-3">
              ورود به وب اپلیکیشن اسنپ
            </div>
          </div>
        </div>
        <Image
          className="hidden md:flex md:w-1/3 lg:w-1/2 object-cover"
          src="/intro_desktop.jpg"
          alt="اسنپ"
          width={800}
          height={600}
        />
      </header>

      {/* App Store Badges */}
      <div className="hidden md:flex md:flex-wrap justify-around items-center md:w-3/4 mx-auto my-20 gap-4">
        <Image
          src="market/direct-download-badge.png"
          alt="دانلود مستقیم"
          width={160}
          height={47}
          className="cursor-pointer hover:opacity-80"
        />
        <Image
          src="market/myketmarket.png"
          alt="مایکت"
          width={160}
          height={47}
          className="cursor-pointer hover:opacity-80"
        />
        <Image
          src="market/app_store.svg"
          alt="اپ استور"
          width={160}
          height={47}
          className="cursor-pointer hover:opacity-80"
        />
        <Image
          src="market/snapp-pwa.png"
          alt="وب اپلیکیشن"
          width={160}
          height={47}
          className="cursor-pointer hover:opacity-80"
        />
        <Image
          src="market/bazaar.png"
          alt="بازار"
          width={160}
          height={47}
          className="cursor-pointer hover:opacity-80"
        />
      </div>

      {/* Services Section */}
      <section className="w-full flex flex-wrap justify-center items-center bg-[#f2f5f8] py-10">
        <h1 className="font-iran-bold2 text-[20.3px] lg:text-[36px] text-[#000000ce] my-8 w-full text-center">
          یک اپلیکیشن، برای تمام نیازها
        </h1>
        <div className="w-3/4 flex flex-wrap justify-center items-start mx-auto gap-y-2">
          {services.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </section>

      {/* Slider Demo */}
      <section className="relative w-11/12 md:w-3/4 bg-white overflow-hidden rounded-xl mx-auto my-14 cursor-pointer">
        <Image
          className="w-full h-[200px] md:h-auto object-cover"
          src="/slider/Club.jpg"
          alt="اسنپ کلاب"
          width={1200}
          height={400}
        />
        <div className="flex justify-center items-center w-full bg-[#ffffff42] backdrop-blur-lg absolute bottom-0 z-10 left-0 h-[10px] py-3 gap-1">
          <span className="size-[10px] rounded-full bg-gray-500" />
          <span className="size-[10px] rounded-full bg-gray-500" />
          <span className="size-[10px] rounded-full bg-white" />
          <span className="size-[10px] rounded-full bg-gray-500" />
        </div>
      </section>

      {/* Super App Section */}
      <section className="w-full flex flex-col md:flex-row">
        <div className="flex w-full md:w-1/2">
          <Image
            className="object-cover w-full"
            src="/slider/super-app.jpg"
            alt="سوپر اپ"
            width={800}
            height={600}
          />
        </div>
        <div className="flex flex-col w-full md:w-1/2 items-start text-[#000000c3] p-7">
          <h3 className="font-iran-bold2 text-2xl mt-5">سوپر اپ اسنپ؛ پاسخی به تمام نیازها</h3>
          <p className="w-full md:w-2/3 font-iran-light2 mt-5 leading-relaxed">
            اسنپ، اولین تاکسی اینترنتی ایران، بعد از پنج سال فعالیت در حوزه‌ی تردد شهری، به یک سوپر‌اپ با خدمات متنوع
            تبدیل شد. سوپراپ اسنپ راه‌حلی جدید و ساده است که با استفاده از آن تنها با یک اپلیکیشن می‌توانید علاوه بر
            درخواست خودرو، موتور و وانت از خدمات متعددی از جمله سفارش غذا، پزشک و مشاور آنلاین، خرید از سوپرمارکت‌ها و
            فروشگاه‌ها، اسباب‌کشی، خرید بلیط (هواپیما، اتوبوس، قطار)، رزرو هتل، پرداخت قبض و خرید شارژ استفاده کنید.
          </p>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="w-full flex justify-center">
        <div className="w-full lg:w-2/3 flex flex-wrap md:flex-nowrap justify-center px-3 gap-6 mt-10">
          {benefits.map((benefit) => (
            <div key={benefit.id} className="w-full md:w-1/3">
              <div className="flex justify-center bg-[#f2f5f8] rounded-2xl p-4">
                <Image src={benefit.icon || "/placeholder.svg"} alt={benefit.title} width={210} height={190} />
              </div>
              <div className="flex flex-col items-center font-iran-bold2 mt-4 opacity-70">
                <h6>{benefit.title}</h6>
                <p className="font-iran-light2 text-[12px] mt-4 text-center px-4">{benefit.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Video & Driver Registration Section */}
      <section className="w-full bg-[#f2f5f8] flex flex-col items-center mt-20 py-10">
        <div className="w-full flex flex-col items-center text-center mt-5 px-4">
          <h2 className="font-iran-bold2 text-2xl md:text-4xl leading-tight opacity-70 mt-10">
            در کمتر از ۱۰ دقیقه ثبت‌نام کنید و به ناوگان اسنپ بپیوندید.
          </h2>
          <p className="font-iran-light2 leading-10 text-xl opacity-70 mt-10 max-w-3xl">
            بدون نیاز به مراجعه‌ی حضوری، از طریق این صفحه، تمام مراحل ثبت‌نام را اینترنتی انجام دهید
          </p>
          <a
            className="bg-[#00d170] w-[170px] h-[50px] flex justify-center items-center rounded-md font-iran-bold2 text-white hover:bg-[#00b85e] transition-colors mt-10"
            href="/driver-registration"
          >
            <button className="cursor-pointer">ثبت نام رانندگان</button>
          </a>
        </div>

        <div className="w-11/12 lg:w-3/4 flex mt-10">
          <video controls className="w-full rounded-lg" src="/jazbranandeh1.mp4" />
        </div>

        {/* Driver Benefits Grid */}
        <div className="w-full lg:w-3/4 flex mx-auto flex-wrap justify-between mb-10 px-4">
          {[
            {
              icon: "/icons/super_app_icon/more/180x100-income.png",
              title: "درآمد تضمینی + پاداش‌های ماهانه و هفتگی",
              desc: "با فعالیت در ناوگان اسنپ، علاوه بر کسب درآمد مستمر و امکان تسویه در لحظه می‌توانید با شرکت در طرح‌های تشویقی مختلف، درآمد خود را افزایش دهید.",
            },
            {
              icon: "/icons/super_app_icon/more/180x100-hour.png",
              title: "ساعت کاری دلخواه",
              desc: "فعالیت در ناوگان اسنپ محدودیت زمانی ندارد و می‌توانید فعالیت خود را در هر ساعت از شبانه‌روز و متناسب با برنامه‌ی زندگی‌تان شخصی‌سازی کنید.",
            },
            {
              icon: "/icons/super_app_icon/more/180x100-benefits.png",
              title: "مزایا و خدمات باشگاه رانندگان",
              desc: "در باشگاه رانندگان اسنپ می‌توانید از تسهیلات و خدمات متنوعی از جمله خدمات خودرویی، خدمات درمانی و همچنین خدمات رفاهی و آموزشی بهره‌مند شوید.",
            },
            {
              icon: "/icons/super_app_icon/more/180x100-carfix.png",
              title: "کارفیکس",
              desc: "باشگاه رانندگان اسنپ به‌تازگی سرویس جدید «اسنپ کارفیکس» را برای سهولت دسترسی کاربران راننده به انواع خدمات خودرویی راه‌اندازی کرده است.",
            },
            {
              icon: "/icons/super_app_icon/more/امنیت.svg",
              title: "امنیت سفر کاربران راننده در اسنپ",
              desc: "اسنپ با ارائه سرویس امنیت سفر در اپلیکیشن رانندگان و بهبود مستمر امکانات امنیتی این سرویس، تلاش می‌‌کند تجربه سفر با اسنپ برای کاربران راننده امن‌ و مطمئن باشد.",
            },
            {
              icon: "/icons/super_app_icon/more/پیام.svg",
              title: "پشتیبانی ۲۴ ساعته و سریع",
              desc: "تیم پشتیبانی اسنپ در تمامی ساعت‌های شبانه‌روز پاسخگوی سوال‌ها و مشکلات کاربران راننده است. بخش «پشتیبانی» در اپلیکیشن رانندگان، سریع‌ترین راه ارتباطی شما با تیم پشتیبانی اسنپ است",
            },
          ].map((item, idx) => (
            <div key={idx} className="w-full lg:w-[48%] bg-white rounded-xl flex lg:flex-row flex-col mt-7 px-9 py-10">
              <div className="w-full flex justify-center mb-5">
                <Image
                  className="lg:w-[120px] w-[80px] lg:h-[66px]"
                  src={item.icon || "/placeholder.svg"}
                  alt={item.title}
                  width={120}
                  height={66}
                />
              </div>
              <div className="opacity-80">
                <h2 className="font-iran-bold2">{item.title}</h2>
                <p className="font-iran-light2 text-sm my-8">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}
