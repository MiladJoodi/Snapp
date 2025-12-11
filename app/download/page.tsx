import Image from "next/image";

export default function DownloadPage() {
  return (
    <div className="min-h-screen bg-[#f2f5f8] flex flex-col items-center py-16">
      <h1 className="font-iran-bold2 text-4xl md:text-5xl text-[#21aa58] mb-8 text-center">دانلود اپلیکیشن اسنپ</h1>
      <p className="font-iran-light2 text-xl mb-10 text-center max-w-2xl">
        برای تجربه سریع‌تر و راحت‌تر خدمات اسنپ، اپلیکیشن را همین حالا دانلود کنید. با نصب اپلیکیشن، به تمامی سرویس‌های اسنپ دسترسی خواهید داشت.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
        {/* تصاویر مارکت‌ها و دانلود */}
        <div className="flex flex-col items-center">
          <Image src="/market/direct-download-badge.png" alt="دانلود مستقیم" width={160} height={47} className="rounded-lg shadow-md mb-4" />
          <span className="font-iran-light2">دانلود مستقیم</span>
        </div>
        <div className="flex flex-col items-center">
          <Image src="/market/myketmarket.png" alt="مایکت" width={160} height={47} className="rounded-lg shadow-md mb-4" />
          <span className="font-iran-light2">مایکت</span>
        </div>
        <div className="flex flex-col items-center">
          <Image src="/market/direct-download-badge.png" alt="اپ استور" width={160} height={47} className="rounded-lg shadow-md mb-4" />
          <span className="font-iran-light2">اپ استور</span>
        </div>
        <div className="flex flex-col items-center">
          <Image src="/market/bazaar.png" alt="بازار" width={160} height={47} className="rounded-lg shadow-md mb-4" />
          <span className="font-iran-light2">بازار</span>
        </div>
      </div>
      <div className="bg-white rounded-2xl p-8 shadow-md w-full max-w-xl text-center">
        <h2 className="font-iran-bold2 text-2xl mb-4 text-[#21aa58]">لینک دانلود اپلیکیشن اسنپ</h2>
        <a href="#" className="bg-[#21aa58] text-white px-8 py-4 rounded-lg font-iran-bold2 text-lg hover:bg-[#1a8c47] transition-colors inline-block">
          دانلود اپلیکیشن
        </a>
      </div>
    </div>
  );
}
