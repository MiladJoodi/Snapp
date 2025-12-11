// Test data for the application

export interface Service {
  id: string
  title: string
  description: string
  icon: string
  href: string
}

export interface Benefit {
  id: string
  title: string
  description: string
  icon: string
}

export interface Restaurant {
  id: string
  name: string
  cuisine: string
  rating: number
  deliveryTime: string
  image: string
  minOrder: number
}

export interface Product {
  id: string
  name: string
  category: string
  price: number
  image: string
  inStock: boolean
}

export interface Flight {
  id: string
  from: string
  to: string
  date: string
  price: number
  airline: string
  duration: string
}

export interface BlogPost {
  id: string
  title: string
  excerpt: string
  content: string
  author: string
  date: string
  image: string
  category: string
}

export interface Career {
  id: string
  title: string
  department: string
  location: string
  type: string
  description: string
}

export interface Hotel {
  id: string
  name: string
  location: string
  rating: number
  price: number
  image: string
  amenities: string[]
}

export interface BusinessService {
  id: string
  title: string
  description: string
  icon: string
  features: string[]
}

export interface DriverBenefit {
  id: string
  title: string
  description: string
  icon: string
}

export interface DriverRequirement {
  id: string
  title: string
  description: string
  icon: string
}

export interface ClubBenefit {
  id: string
  title: string
  description: string
  icon: string
}

export const services: Service[] = [
  {
    id: "taxi",
    title: "تاکسی اینترنتی",
    description: "درخواست آنلاین خودرو",
    icon: "/icons/taxi.svg",
    href: "/services/taxi",
  },
  {
    id: "food",
    title: "سفارش آنلاین غذا",
    description: "سفارش غذا، نان و شیرینی با اسنپ",
    icon: "/icons/food.svg",
    href: "/services/food",
  },
  {
    id: "market",
    title: "سوپر مارکت آنلاین",
    description: "تهیه اقلام روزانه با اسنپ",
    icon: "/icons/Market-Orange-Final.png",
    href: "/services/market",
  },
  {
    id: "bike",
    title: "پیک موتوری",
    description: "حمل و نقل انواع بسته",
    icon: "/icons/bike.svg",
    href: "/services/bike",
  },
  {
    id: "pickup",
    title: "درخواست وانت",
    description: "حمل و نقل انواع بار",
    icon: "/icons/pickup.svg",
    href: "/services/pickup",
  },
  {
    id: "credit",
    title: "سرویس اعتباری",
    description: "خرید قسطی با اسنپ",
    icon: "/icons/Credit.svg",
    href: "/services/credit",
  },
  {
    id: "flight-domestic",
    title: "خرید بلیط هواپیما",
    description: "خرید بلیط پرواز داخلی",
    icon: "/icons/fdom-t.png",
    href: "/services/flights",
  },
  {
    id: "flight-international",
    title: "بلیط هواپیما خارجی",
    description: "خرید بلیط پرواز خارجی",
    icon: "/icons/intflight.svg",
    href: "/services/flights",
  },
  {
    id: "hotel",
    title: "رزرو هتل",
    description: "رزرو آنلاین هتل",
    icon: "/icons/hotel.svg",
    href: "/services/hotels",
  },
  {
    id: "bus",
    title: "بلیط اتوبوس",
    description: "گردشگری با اسنپ",
    icon: "/icons/bus.svg",
    href: "/services/bus",
  },
  {
    id: "train",
    title: "بلیط قطار",
    description: "گردشگری با اسنپ",
    icon: "/icons/train.svg",
    href: "/services/train",
  },
  {
    id: "shop",
    title: "فروشگاه",
    description: "فروشگاه اسنپ",
    icon: "/icons/shop.svg",
    href: "/services/shop",
  },
  {
    id: "doctor",
    title: "پزشک",
    description: "درمان با اسنپ",
    icon: "/icons/doctor.svg",
    href: "/services/doctor",
  },
  {
    id: "pharmacy",
    title: "داروخانه",
    description: "داروخانه آنلاین اسنپ",
    icon: "/icons/pharmacy.svg",
    href: "/services/pharmacy",
  },
  {
    id: "insurance",
    title: "بیمه",
    description: "خرید آنلاین بیمه با اسنپ",
    icon: "/icons/insdiscount.png",
    href: "/services/insurance",
  },
  {
    id: "moving",
    title: "اسباب‌کشی منزل",
    description: "خدمات اسباب کشی",
    icon: "/icons/moving.svg",
    href: "/services/moving",
  },
  {
    id: "driver",
    title: "ثبت نام راننده",
    description: "ثبت نام تاکسی اینترنتی اسنپ",
    icon: "/icons/driver.svg",
    href: "/driver-registration",
  },
  {
    id: "club",
    title: "اسنپ! ‌کلاب",
    description: "باشگاه مشتریان اسنپ!",
    icon: "/icons/club.svg",
    href: "/club",
  },
  {
    id: "charge",
    title: "خرید شارژ",
    description: "خرید آنلاین شارژ",
    icon: "/icons/wallet.png",
    href: "/services/charge",
  },
  {
    id: "internet",
    title: "خرید بسته اینترنت",
    description: "خرید بسته اینترنت",
    icon: "/icons/wallet.png",
    href: "/services/internet",
  },
  {
    id: "pro",
    title: "اسنپ پرو",
    description: "اشتراک حرفه‌ای اسنپ",
    icon: "/icons/Pro.png",
    href: "/pro",
  },
]

export const benefits: Benefit[] = [
  {
    id: "easy",
    title: "آسان",
    description:
      "برای استفاده از هر کدام از خدمات سوپر‌اپ اسنپ کافی است وارد اپلیکیشن اسنپ شوید و روی آیکون مورد نظر بزنید.",
    icon: "/icons/super_app_icon/210x190-easy.png",
  },
  {
    id: "fast",
    title: "سریع",
    description:
      "قرار گرفتن خدمات مختلف در یک پلت‌فرم به صرفه‌جویی در زمان کمک می‌کند. سوپراپ اسنپ پاسخی سریع به نیازهای روزمره‌ی شماست.",
    icon: "/icons/super_app_icon/210x190-fast.png",
  },
  {
    id: "affordable",
    title: "به صرفه",
    description:
      "سوپراپ اسنپ علاوه بر زمان در هزینه‌های شما نیز صرفه‌جویی می‌کند تا بهترین خدمات را با قیمتی منطقی دریافت کنید.",
    icon: "/icons/super_app_icon/210x190-eco.png",
  },
]

export const restaurants: Restaurant[] = [
  {
    id: "1",
    name: "رستوران سنتی شیراز",
    cuisine: "غذای ایرانی",
    rating: 4.5,
    deliveryTime: "30-40 دقیقه",
    image: "/services/food/persian-traditional-restaurant-food.jpg",
    minOrder: 50000,
  },
  {
    id: "2",
    name: "پیتزا ایتالیانو",
    cuisine: "فست فود",
    rating: 4.8,
    deliveryTime: "20-30 دقیقه",
    image: "/services/food/italian-pizza-restaurant.jpg",
    minOrder: 80000,
  },
  {
    id: "3",
    name: "سوشی بار توکیو",
    cuisine: "غذای ژاپنی",
    rating: 4.7,
    deliveryTime: "35-45 دقیقه",
    image: "/services/food/japanese-sushi-restaurant.png",
    minOrder: 120000,
  },
  {
    id: "4",
    name: "برگر هاوس",
    cuisine: "فست فود",
    rating: 4.3,
    deliveryTime: "25-35 دقیقه",
    image: "/services/food/american-burger-restaurant.jpg",
    minOrder: 60000,
  },
  {
    id: "5",
    name: "کافه رستوران آرزو",
    cuisine: "کافی شاپ",
    rating: 4.6,
    deliveryTime: "15-25 دقیقه",
    image: "/services/food/modern-cafe-coffee-shop.jpg",
    minOrder: 40000,
  },
  {
    id: "6",
    name: "کباب سرای رضا",
    cuisine: "غذای ایرانی",
    rating: 4.9,
    deliveryTime: "30-40 دقیقه",
    image: "/services/food/persian-kebab-restaurant.jpg",
    minOrder: 70000,
  },
]

export const products: Product[] = [
  {
    id: "1",
    name: "شیر کم چرب پگاه",
    category: "لبنیات",
    price: 35000,
    image: "/services/products/milk-carton.jpg",
    inStock: true,
  },
  {
    id: "2",
    name: "برنج هاشمی",
    category: "خواربار",
    price: 180000,
    image: "/services/products/rice-bag.jpg",
    inStock: true,
  },
  {
    id: "3",
    name: "روغن مایع",
    category: "خواربار",
    price: 95000,
    image: "/services/products/cooking-oil-bottle.jpg",
    inStock: true,
  },
  {
    id: "4",
    name: "ماست کاله",
    category: "لبنیات",
    price: 28000,
    image: "/services/products/yogurt-container.jpg",
    inStock: true,
  },
  {
    id: "5",
    name: "نان تست",
    category: "نانوایی",
    price: 15000,
    image: "/services/products/toast-bread.jpg",
    inStock: true,
  },
  {
    id: "6",
    name: "سیب قرمز",
    category: "میوه",
    price: 45000,
    image: "/services/products/red-apples.png",
    inStock: true,
  },
  {
    id: "7",
    name: "گوجه فرنگی",
    category: "سبزیجات",
    price: 25000,
    image: "/services/products/ripe-tomatoes.png",
    inStock: true,
  },
  {
    id: "8",
    name: "مرغ منجمد",
    category: "پروتئین",
    price: 120000,
    image: "/services/products/frozen-chicken.jpg",
    inStock: false,
  },
]

export const flights: Flight[] = [
  {
    id: "1",
    from: "تهران",
    to: "مشهد",
    date: "1403/10/15",
    price: 2500000,
    airline: "ایران ایر",
    duration: "1 ساعت 15 دقیقه",
  },
  {
    id: "2",
    from: "تهران",
    to: "اصفهان",
    date: "1403/10/16",
    price: 1800000,
    airline: "ماهان",
    duration: "1 ساعت",
  },
  {
    id: "3",
    from: "تهران",
    to: "شیراز",
    date: "1403/10/17",
    price: 2200000,
    airline: "قشم ایر",
    duration: "1 ساعت 30 دقیقه",
  },
  {
    id: "4",
    from: "تهران",
    to: "کیش",
    date: "1403/10/18",
    price: 2800000,
    airline: "آسمان",
    duration: "1 ساعت 45 دقیقه",
  },
]

export const blogPosts: BlogPost[] = [
  {
    id: "1",
    title: "راهنمای کامل استفاده از اسنپ",
    excerpt: "همه چیز درباره نحوه استفاده از سرویس‌های مختلف اسنپ",
    content: "اسنپ یک سوپراپلیکیشن است که خدمات متنوعی را ارائه می‌دهد...",
    author: "Milad Joodi",
    date: "1403/09/15",
    image: "/snapp-app-guide.jpg",
    category: "راهنما",
  },
  {
    id: "2",
    title: "۱۰ نکته برای صرفه‌جویی در سفرهای شهری",
    excerpt: "با این نکات می‌توانید در هزینه‌های حمل و نقل خود صرفه‌جویی کنید",
    content: "استفاده هوشمندانه از تاکسی آنلاین می‌تواند به شما کمک کند...",
    author: "Milad Joodi",
    date: "1403/09/10",
    image: "/city-transportation-tips.jpg",
    category: "اقتصاد",
  },
  {
    id: "3",
    title: "آشنایی با اسنپ فود و مزایای آن",
    excerpt: "چگونه با اسنپ فود غذای مورد علاقه خود را سفارش دهیم",
    content: "اسنپ فود یکی از بزرگترین سرویس‌های سفارش آنلاین غذا در ایران است...",
    author: "Milad Joodi",
    date: "1403/09/05",
    image: "/online-food-delivery.jpg",
    category: "غذا",
  },
  {
    id: "4",
    title: "باشگاه رانندگان اسنپ و مزایای عضویت",
    excerpt: "مزایای عضویت در باشگاه رانندگان اسنپ را بشناسید",
    content: "باشگاه رانندگان اسنپ امکانات ویژه‌ای برای رانندگان فراهم می‌کند...",
    author: "Milad Joodi",
    date: "1403/08/28",
    image: "/driver-club-benefits.jpg",
    category: "رانندگان",
  },
  {
    id: "5",
    title: "نحوه رزرو بلیط هواپیما با اسنپ",
    excerpt: "راهنمای گام به گام رزرو بلیط پرواز داخلی و خارجی",
    content: "رزرو بلیط هواپیما با اسنپ بسیار ساده و سریع است...",
    author: "Milad Joodi",
    date: "1403/08/20",
    image: "/flight-booking-guide.jpg",
    category: "سفر",
  },
  {
    id: "6",
    title: "اسنپ مارکت؛ سوپرمارکت در جیب شما",
    excerpt: "خرید مواد غذایی و اقلام روزمره با اسنپ مارکت",
    content: "با اسنپ مارکت می‌توانید تمام نیازهای روزانه خود را به راحتی تهیه کنید...",
    author: "Milad Joodi",
    date: "1403/08/15",
    image: "/online-supermarket-shopping.jpg",
    category: "خرید",
  },
]

export const careers: Career[] = [
  {
    id: "1",
    title: "توسعه‌دهنده فرانت‌اند ارشد",
    department: "فناوری",
    location: "تهران",
    type: "تمام وقت",
    description: "به دنبال یک توسعه‌دهنده فرانت‌اند با تجربه برای پیوستن به تیم فناوری ما هستیم.",
  },
  {
    id: "2",
    title: "مدیر محصول",
    department: "محصول",
    location: "تهران",
    type: "تمام وقت",
    description: "فردی با تجربه در مدیریت محصول برای هدایت تیم‌های توسعه محصول نیاز داریم.",
  },
  {
    id: "3",
    title: "طراح رابط کاربری",
    department: "طراحی",
    location: "تهران",
    type: "تمام وقت",
    description: "طراح خلاق با مهارت در طراحی رابط و تجربه کاربری برای اپلیکیشن‌های موبایل و وب.",
  },
  {
    id: "4",
    title: "متخصص داده کاوی",
    department: "داده",
    location: "تهران",
    type: "تمام وقت",
    description: "تحلیلگر داده با تجربه در استخراج بینش‌های کسب‌وکار از داده‌های بزرگ.",
  },
  {
    id: "5",
    title: "کارشناس پشتیبانی مشتری",
    department: "پشتیبانی",
    location: "تهران",
    type: "پاره وقت",
    description: "فرد صبور و خوش‌برخورد برای پاسخگویی به سوالات و مشکلات مشتریان.",
  },
  {
    id: "6",
    title: "توسعه‌دهنده بک‌اند",
    department: "فناوری",
    location: "تهران",
    type: "تمام وقت",
    description: "توسعه‌دهنده بک‌اند با تجربه در Node.js و Microservices.",
  },
]

export const hotels: Hotel[] = [
  {
    id: "1",
    name: "هتل پنج ستاره اسپیناس پالاس",
    location: "تهران",
    rating: 4.8,
    price: 3500000,
    image: "/luxury-five-star-hotel.jpg",
    amenities: ["وای فای رایگان", "استخر", "سالن ورزشی", "رستوران"],
  },
  {
    id: "2",
    name: "هتل عباسی اصفهان",
    location: "اصفهان",
    rating: 4.9,
    price: 2800000,
    image: "/traditional-persian-hotel.jpg",
    amenities: ["وای فای رایگان", "باغ سنتی", "رستوران", "کافی شاپ"],
  },
  {
    id: "3",
    name: "هتل چمران شیراز",
    location: "شیراز",
    rating: 4.5,
    price: 1800000,
    image: "/modern-hotel.png",
    amenities: ["وای فای رایگان", "پارکینگ", "رستوران"],
  },
  {
    id: "4",
    name: "هتل درویشی مشهد",
    location: "مشهد",
    rating: 4.6,
    price: 2200000,
    image: "/hotel-near-shrine.jpg",
    amenities: ["وای فای رایگان", "نزدیک به حرم", "رستوران", "پارکینگ"],
  },
  {
    id: "5",
    name: "هتل ساحلی کیش",
    location: "کیش",
    rating: 4.7,
    price: 4200000,
    image: "/beach-resort-hotel.png",
    amenities: ["وای فای رایگان", "استخر", "دسترسی به ساحل", "اسپا"],
  },
  {
    id: "6",
    name: "هتل لاله پارک تبریز",
    location: "تبریز",
    rating: 4.4,
    price: 1500000,
    image: "/park-hotel-building.jpg",
    amenities: ["وای فای رایگان", "پارکینگ", "رستوران"],
  },
]

export const businessServices: BusinessService[] = [
  {
    id: "1",
    title: "سفرهای کاری",
    description: "مدیریت سفرهای کاری کارکنان با پنل اختصاصی",
    icon: "🚖",
    features: ["گزارش‌گیری دقیق", "مدیریت هزینه‌ها", "تخصیص بودجه"],
  },
  {
    id: "2",
    title: "حمل بار سازمانی",
    description: "ارسال مرسولات و بسته‌های سازمانی",
    icon: "📦",
    features: ["پیگیری آنلاین", "تحویل اکسپرس", "بیمه محموله"],
  },
  {
    id: "3",
    title: "سفارش غذای سازمانی",
    description: "سفارش غذا برای جلسات و رویدادهای شرکتی",
    icon: "🍽️",
    features: ["سفارش گروهی", "برنامه‌ریزی قبلی", "فاکتور یکجا"],
  },
  {
    id: "4",
    title: "خرید سازمانی",
    description: "تهیه لوازم اداری و نیازهای روزمره",
    icon: "🛒",
    features: ["تخفیف ویژه", "اعتبار ماهانه", "خرید عمده"],
  },
  {
    id: "5",
    title: "پنل مدیریتی",
    description: "پنل جامع برای مدیریت تمام سرویس‌ها",
    icon: "📊",
    features: ["داشبورد تحلیلی", "گزارش‌های ماهانه", "کنترل هزینه"],
  },
  {
    id: "6",
    title: "پشتیبانی اختصاصی",
    description: "تیم پشتیبانی ویژه کسب‌وکارها",
    icon: "🎧",
    features: ["پشتیبانی ۲۴/۷", "مدیر حساب اختصاصی", "پاسخگویی سریع"],
  },
]

export const driverBenefits: DriverBenefit[] = [
  {
    id: "1",
    title: "درآمد بالا",
    description: "کسب درآمد مناسب با انعطاف‌پذیری کامل در ساعت کاری",
    icon: "💰",
  },
  {
    id: "2",
    title: "انعطاف در زمان",
    description: "خودتان تصمیم بگیرید کی و چقدر کار کنید",
    icon: "⏰",
  },
  {
    id: "3",
    title: "پشتیبانی ۲۴/۷",
    description: "تیم پشتیبانی اسنپ همیشه در کنار شماست",
    icon: "🎧",
  },
  {
    id: "4",
    title: "بیمه رایگان",
    description: "بیمه تکمیلی برای رانندگان فعال",
    icon: "🏥",
  },
  {
    id: "5",
    title: "پاداش و جوایز",
    description: "دریافت پاداش با افزایش تعداد سفرها",
    icon: "🎁",
  },
  {
    id: "6",
    title: "آموزش رایگان",
    description: "دوره‌های آموزشی برای بهبود مهارت‌ها",
    icon: "📚",
  },
]

export const driverRequirements: DriverRequirement[] = [
  {
    id: "1",
    title: "گواهینامه معتبر",
    description: "داشتن گواهینامه پایه دوم یا یک",
    icon: "🪪",
  },
  {
    id: "2",
    title: "خودرو مناسب",
    description: "خودرو با مدل بالاتر از سال ۱۳۹۰",
    icon: "🚗",
  },
  {
    id: "3",
    title: "سن مناسب",
    description: "حداقل ۱۸ سال سن داشته باشید",
    icon: "👤",
  },
  {
    id: "4",
    title: "بدون سابقه کیفری",
    description: "عدم سوء پیشینه کیفری",
    icon: "✅",
  },
]

export const clubBenefits: ClubBenefit[] = [
  {
    id: "1",
    title: "تخفیف در سفرها",
    description: "تا ۲۰٪ تخفیف در تمام سفرهای تاکسی",
    icon: "🚖",
  },
  {
    id: "2",
    title: "پاداش سفارش غذا",
    description: "کسب امتیاز با هر سفارش و استفاده در سفارش‌های بعدی",
    icon: "🍕",
  },
  {
    id: "3",
    title: "اولویت در خدمات",
    description: "دریافت اولویت در پیدا کردن راننده و تحویل سفارش",
    icon: "⭐",
  },
  {
    id: "4",
    title: "جوایز ماهانه",
    description: "قرعه‌کشی ماهانه با جوایز نقدی و غیرنقدی",
    icon: "🎁",
  },
  {
    id: "5",
    title: "پیشنهادات ویژه",
    description: "دسترسی به تخفیف‌های انحصاری اعضای باشگاه",
    icon: "💎",
  },
  {
    id: "6",
    title: "خدمات VIP",
    description: "پشتیبانی اختصاصی و خدمات ویژه برای اعضای پلاتینیوم",
    icon: "👑",
  },
]
