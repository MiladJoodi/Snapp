import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";

const blogPosts = [
	{
		id: 1,
		title: "راهنمای استفاده از اسنپ فود برای اولین بار",
		excerpt:
			"در این مقاله به شما آموزش می‌دهیم که چگونه برای اولین بار از سرویس اسنپ فود استفاده کنید و بهترین رستوران‌ها را پیدا کنید.",
		image: "/city-transportation-tips.jpg",
		date: "1404/09/10",
		author: "مریم رضایی",
		category: "آموزش",
	},
	{
		id: 2,
		title: "ترفندهای استفاده بهتر از سوپر اپ اسنپ",
		excerpt:
			"در این مقاله با ترفندهای کاربردی برای استفاده بهتر و سریع‌تر از سوپر اپ اسنپ آشنا می‌شوید.",
		image: "/driver-club-benefits.jpg",
		date: "1404/09/08",
		author: "علی محمدی",
		category: "ترفندها",
	},
	{
		id: 3,
		title: "چگونه در اسنپ راننده شویم؟",
		excerpt: "راهنمای کامل ثبت‌نام و شروع به کار به عنوان راننده در ناوگان اسنپ.",
		image: "/hotel-near-shrine.jpg",
		date: "1404/09/05",
		author: "سارا احمدی",
		category: "راهنما",
	},
	{
		id: 4,
		title: "۵ رستوران برتر تهران در اسنپ فود",
		excerpt: "معرفی بهترین رستوران‌های تهران که می‌توانید از طریق اسنپ فود سفارش دهید.",
		image: "/beach-resort-hotel.png",
		date: "1404/08/30",
		author: "رضا شریفی",
		category: "معرفی",
	},
	{
		id: 5,
		title: "راهنمای رزرو هتل با اسنپ تریپ",
		excerpt: "در این مقاله با مراحل رزرو هتل از طریق اسنپ تریپ آشنا می‌شوید.",
		image: "/flight-booking-guide.jpg",
		date: "1404/08/28",
		author: "نگار موسوی",
		category: "سفر",
	},
	{
		id: 6,
		title: "چطور از باشگاه رانندگان اسنپ استفاده کنیم؟",
		excerpt: "آشنایی با مزایای باشگاه رانندگان و نحوه عضویت در آن.",
		image: "/driver-club-benefits.jpg",
		date: "1404/08/25",
		author: "امیرحسین قاسمی",
		category: "مزایا",
	},
];

export default function BlogPage() {
	return (
		<section className="w-full flex flex-col items-center py-10 bg-[#f2f5f8] min-h-screen">
			<h1 className="font-iran-bold2 text-3xl text-[#21aa58] mb-8">بلاگ اسنپ</h1>
			<div className="w-full max-w-3xl flex flex-col gap-8">
				{blogPosts.map((post) => (
					<Card key={post.id} className="w-full shadow-lg border border-gray-200">
						<CardHeader className="flex items-start flex-row gap-4">
							<img
								src={post.image}
								alt={post.title}
								className="w-24 h-24 object-cover rounded-lg border"
							/>
							<div className="flex-1">
								<CardTitle className="text-xl text-[#21aa58] cursor-pointer">
									{post.title}
								</CardTitle>
								<div className="text-xs text-gray-500 mt-1 flex gap-2">
									<span>تاریخ: {post.date}</span>
									<span>نویسنده: {post.author}</span>
									<span>دسته‌بندی: {post.category}</span>
								</div>
							</div>
						</CardHeader>
						<CardContent>
							<CardDescription>{post.excerpt}</CardDescription>
						</CardContent>
					</Card>
				))}
			</div>
		</section>
	);
}
