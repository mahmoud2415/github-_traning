// ==========================================
// --- Zinger Gourmet Restaurant Code ---
// ==========================================

const branches = [
  {
    id: "ismailia",
    name: "فرع الإسماعيلية - شبين",
    phone: "01020805451",
    whatsapp: "201020805451",
    address: "الإسماعيلية - حي شبين الكوم - بجوار ميدان شبين",
    deliveryFee: 15,
    mapLink: "https://maps.google.com/?q=شبين+الكوم+الاسماعيلية"
  },
  {
    id: "faqous-manshiya",
    name: "فرع فاقوس - المنشية",
    phone: "01002552421",
    whatsapp: "201002552421",
    address: "فاقوس - حي المنشية - بجوار حلواني الأسطورة",
    deliveryFee: 15,
    mapLink: "https://www.google.com/maps/search/%D8%AD%D9%84%D9%88%D8%A7%D9%86%D9%8A%20%D8%A7%D9%84%D8%A3%D8%B3%D8%B7%D9%88%D8%B1%D8%A9/@30.73116373,31.79502818,17z?hl=ar"
  },
  {
    id: "faqous-kafr",
    name: "فرع فاقوس - كفر العدوى",
    phone: "01002552421",
    whatsapp: "201002552421",
    address: "فاقوس - كفر العدوى - داخل 9A Cafe & Food Court",
    deliveryFee: 15,
    mapLink: "https://www.google.com/maps/search/9A%20cafe%20and%20food%20court/@30.72620635,31.78810442,17z?hl=ar"
  },
  {
    id: "abukibir",
    name: "فرع أبو كبير",
    phone: "01020805451",
    whatsapp: "201020805451",
    address: "أبو كبير - شارع مصطفى كامل - خلف المحكمة",
    deliveryFee: 15,
    mapLink: "https://maps.google.com/?q=أبو+كبير+الشرقية"
  }
];

let selectedBranch = null;

// Main sections mapping for top scroll nav
const mainSections = [
  { id: "burgers", name: "برجر لحم", icon: "lunch_dining" },
  { id: "crepes", name: "الكريب", icon: "flatware" },
  { id: "pizza", name: "البيتزا", icon: "local_pizza" },
  { id: "pasta", name: "الباستا", icon: "restaurant" },
  { id: "rolls", name: "وتش رول", icon: "layers" },
  { id: "hawawshi", name: "حواوشي إيطالي", icon: "local_fire_department" },
  { id: "melted_cheese", name: "غرقانة جبنة", icon: "opacity" },
];

// Local menu images. If future files have descriptive names, the matcher below
// prefers the closest name before falling back to a stable category rotation.
const productImageBasePath = "assets/menu/";
const productImagePrefix = "zinger-menu-";
const fallbackProductImage =
  "premium_fast_food_menu_hero_image_for_zinger_gourmet_restaurant_brand..png";

function buildProductImage(number) {
  return `${productImageBasePath}${productImagePrefix}${String(number).padStart(3, "0")}.webp`;
}

function buildProductImages(start, end) {
  return Array.from({ length: end - start + 1 }, (_, index) =>
    buildProductImage(start + index),
  );
}

const imagesByCategory = {
  burgers: buildProductImages(1, 12),
  crepes: buildProductImages(13, 42),
  pizza: buildProductImages(43, 60),
  pasta: buildProductImages(61, 72),
  rolls: buildProductImages(73, 80),
  hawawshi: buildProductImages(81, 88),
  melted_cheese: buildProductImages(89, 96),
};

const allProductImages = Object.values(imagesByCategory).flat();

// Transcribed Menu Data
const menuData = [
  // === BURGERS ===
  {
    id: 101,
    section: "burgers",
    name: "كلاسيك بيف برجر",
    image: "assets/menu_items/كلاسيك بيف برجر/WhatsApp Image 2026-08-02 at 1.58.49 AM.jpeg",
    images: [
      "assets/menu_items/كلاسيك بيف برجر/WhatsApp Image 2026-08-02 at 1.58.49 AM.jpeg"
    ],
    desc: "قطعة برجر + صوص تكساس + صوص رانش + كابوتشا + طماطم + خيار مخلل",
    sizes: [
      { name: "سنجل (200جم)", price: 180 },
      { name: "دبل (400جم)", price: 235 },
      { name: "تربل (600جم)", price: 365 },
    ],
  },
  {
    id: 102,
    section: "burgers",
    name: "برجر هالبينو",
    desc: "قطعة برجر + هالبينو + صوص تكساس + صوص رانش + كابوتشا + طماطم + خيار مخلل",
    sizes: [
      { name: "سنجل (200جم)", price: 180 },
      { name: "دبل (400جم)", price: 235 },
      { name: "تربل (600جم)", price: 365 },
    ],
  },
  {
    id: 103,
    image: "assets/menu_items/إكسترا مايل/WhatsApp Image 2026-08-02 at 1.51.11 AM.jpeg",
    images: [
          "assets/menu_items/إكسترا مايل/WhatsApp Image 2026-08-02 at 1.51.11 AM.jpeg"
    ],
    section: "burgers",
    name: "إكسترا مايل",
    desc: "قطعة برجر + موزاريلا تكساس + صوص جبنة + كابوتشا + طماطم + خيار مخلل",
    sizes: [
      { name: "سنجل (200جم)", price: 180 },
      { name: "دبل (400جم)", price: 235 },
      { name: "تربل (600جم)", price: 365 },
    ],
  },
  {
    id: 104,
    section: "burgers",
    name: "سوبر نايت برجر",
    desc: "قطعة برجر + شرائح شيدر + بيف بيكون + بصل مكرمل + مشوي + كابوتشا + طماطم + خيار مخلل",
    sizes: [
      { name: "سنجل (200جم)", price: 180 },
      { name: "دبل (400جم)", price: 235 },
      { name: "تربل (600جم)", price: 365 },
    ],
  },
  {
    id: 105,
    section: "burgers",
    name: "برجر تشيز فري",
    desc: "قطعة بيف + كوردن بلو تشيكن + بيف بيكون + تركي مدخن + صوص رانش + صوص شيدر مدخن + كابوتشا + طماطم + خيار مخلل",
    price: 340,
    sizes: [{ name: "تربل (600جم)", price: 340 }],
  },
  {
    id: 106,
    section: "burgers",
    name: "برجر كوردن بلو",
    desc: "قطعة بيف + كوردن بلو تشيكن + بيف بيكون + تركي مدخن + صوص رانش + صوص شيدر مدخن + كابوتشا + طماطم + خيار مخلل",
    sizes: [
      { name: "سنجل (200جم)", price: 160 },
      { name: "دبل (400جم)", price: 210 },
    ],
  },

  // === CREPES ===
  {
    id: 201,
    section: "crepes",
    name: "كريب مشكل جبن",
    desc: "ميكس أجبان زنجر الخاصة",
    sizes: [
      { name: "M", price: 100 },
      { name: "L", price: 120 },
      { name: "XL", price: 140 },
      { name: "رول", price: 155 },
    ],
  },
  {
    id: 202,
    image: "assets/menu_items/كريب بانية - تشيكن كرسبي/WhatsApp Image 2026-08-02 at 12.11.14 AM (1).jpeg",
    images: [
          "assets/menu_items/كريب بانية - تشيكن كرسبي/WhatsApp Image 2026-08-02 at 12.11.14 AM (1).jpeg",
          "assets/menu_items/كريب بانية - تشيكن كرسبي/WhatsApp Image 2026-08-02 at 12.11.14 AM.jpeg",
          "assets/menu_items/كريب بانية - تشيكن كرسبي/WhatsApp Image 2026-08-02 at 12.11.15 AM (1).jpeg",
          "assets/menu_items/كريب بانية - تشيكن كرسبي/WhatsApp Image 2026-08-02 at 12.11.15 AM (2).jpeg",
          "assets/menu_items/كريب بانية - تشيكن كرسبي/WhatsApp Image 2026-08-02 at 12.11.15 AM.jpeg"
    ],
    section: "crepes",
    name: "كريب بانية / تشيكن كرسبي",
    desc: "قطع بانيه مقرمش",
    sizes: [
      { name: "M", price: 80 },
      { name: "L", price: 95 },
      { name: "XL", price: 115 },
      { name: "رول", price: 130 },
    ],
  },
  {
    id: 203,
    section: "crepes",
    name: "كريب كرسبي ناجتس",
    desc: "قطع ناجتس دجاج ذهبية",
    sizes: [
      { name: "M", price: 95 },
      { name: "L", price: 105 },
      { name: "XL", price: 125 },
      { name: "رول", price: 135 },
    ],
  },
  {
    id: 204,
    image: "assets/menu_items/كريب سوبر كرانشي (زنجر)/WhatsApp Image 2026-08-02 at 12.10.21 AM (1).jpeg",
    images: [
          "assets/menu_items/كريب سوبر كرانشي (زنجر)/WhatsApp Image 2026-08-02 at 12.10.21 AM (1).jpeg",
          "assets/menu_items/كريب سوبر كرانشي (زنجر)/WhatsApp Image 2026-08-02 at 12.10.21 AM.jpeg",
          "assets/menu_items/كريب سوبر كرانشي (زنجر)/WhatsApp Image 2026-08-02 at 12.10.22 AM.jpeg"
    ],
    section: "crepes",
    name: "كريب سوبر كرانشي (زنجر)",
    desc: "صدور الدجاج الحارة المقرمشة",
    sizes: [
      { name: "M", price: 140 },
      { name: "L", price: 155 },
      { name: "XL", price: 170 },
      { name: "رول", price: 185 },
    ],
  },
  {
    id: 205,
    section: "crepes",
    name: "كريب زنجر سوبريم",
    desc: "زنجر مقرمش مع تركي مدخن وصوصات",
    sizes: [
      { name: "M", price: 145 },
      { name: "L", price: 155 },
      { name: "XL", price: 175 },
      { name: "رول", price: 185 },
    ],
  },
  {
    id: 206,
    section: "crepes",
    name: "كريب تشيكن باربيكيو",
    desc: "دجاج مقرمش مع صوص الباربيكيو المميز",
    sizes: [
      { name: "M", price: 145 },
      { name: "L", price: 155 },
      { name: "XL", price: 175 },
      { name: "رول", price: 185 },
    ],
  },
  {
    id: 207,
    image: "assets/menu_items/كريب تشيكن رانش/WhatsApp Image 2026-08-02 at 12.08.57 AM (1).jpeg",
    images: [
          "assets/menu_items/كريب تشيكن رانش/WhatsApp Image 2026-08-02 at 12.08.57 AM (1).jpeg",
          "assets/menu_items/كريب تشيكن رانش/WhatsApp Image 2026-08-02 at 12.08.57 AM (2).jpeg"
    ],
    section: "crepes",
    name: "كريب تشيكن رانش",
    desc: "صدور دجاج كرسبي مع صوص الرانش الغني",
    sizes: [
      { name: "M", price: 145 },
      { name: "L", price: 155 },
      { name: "XL", price: 175 },
      { name: "رول", price: 185 },
    ],
  },
  {
    id: 208,
    section: "crepes",
    name: "كريب تشيكن هالبينو",
    desc: "دجاج كرسبي مع شرائح هالبينو وصوص حار",
    sizes: [
      { name: "M", price: 145 },
      { name: "L", price: 160 },
      { name: "XL", price: 180 },
      { name: "رول", price: 185 },
    ],
  },
  {
    id: 209,
    section: "crepes",
    name: "كريب شيش فحم",
    desc: "شيش طاووق مشوي على الفحم متبل",
    sizes: [
      { name: "M", price: 160 },
      { name: "L", price: 175 },
      { name: "XL", price: 185 },
      { name: "رول", price: 195 },
    ],
  },
  {
    id: 210,
    section: "crepes",
    name: "كريب فاهيتا دجاج",
    desc: "فاهيتا دجاج جريل مع فلفل وبصل وبهارات",
    sizes: [
      { name: "M", price: 160 },
      { name: "L", price: 175 },
      { name: "XL", price: 185 },
      { name: "رول", price: 195 },
    ],
  },
  {
    id: 211,
    image: "assets/menu_items/كريب مكس فراخ/WhatsApp Image 2026-08-02 at 12.09.18 AM.jpeg",
    images: [
          "assets/menu_items/كريب مكس فراخ/WhatsApp Image 2026-08-02 at 12.09.18 AM.jpeg",
          "assets/menu_items/كريب مكس فراخ/WhatsApp Image 2026-08-02 at 12.09.19 AM (1).jpeg",
          "assets/menu_items/كريب مكس فراخ/WhatsApp Image 2026-08-02 at 12.09.19 AM (2).jpeg",
          "assets/menu_items/كريب مكس فراخ/WhatsApp Image 2026-08-02 at 12.09.19 AM (3).jpeg",
          "assets/menu_items/كريب مكس فراخ/WhatsApp Image 2026-08-02 at 12.09.19 AM.jpeg"
    ],
    section: "crepes",
    name: "كريب مكس فراخ",
    desc: "ميكس صدور وشيش طاووق وكرسبي",
    sizes: [
      { name: "M", price: 150 },
      { name: "L", price: 165 },
      { name: "XL", price: 185 },
      { name: "رول", price: 195 },
    ],
  },
  {
    id: 212,
    section: "crepes",
    name: "كريب مكس لحوم",
    desc: "ميكس برجر لحم وسجق وهوت دوج",
    sizes: [
      { name: "M", price: 150 },
      { name: "L", price: 165 },
      { name: "XL", price: 185 },
      { name: "رول", price: 195 },
    ],
  },
  {
    id: 213,
    section: "crepes",
    name: "كريب مكس مشكل",
    desc: "ميكس لحوم ودجاج متبل معاً",
    sizes: [
      { name: "M", price: 155 },
      { name: "L", price: 170 },
      { name: "XL", price: 185 },
      { name: "رول", price: 195 },
    ],
  },
  {
    id: 214,
    section: "crepes",
    name: "كريب شيش ع زنجر",
    desc: "شيش طاووق مشوي مع قطع زنجر حارة",
    sizes: [
      { name: "M", price: 160 },
      { name: "L", price: 175 },
      { name: "XL", price: 185 },
      { name: "رول", price: 195 },
    ],
  },
  {
    id: 215,
    section: "crepes",
    name: "كريب زنجر سبيشيال",
    desc: "زنجر حار مضاعف مع إضافات السعادة",
    sizes: [
      { name: "XL", price: 190 },
      { name: "رول", price: 205 },
    ],
  },
  {
    id: 216,
    section: "crepes",
    name: "كريب تشيكن بيكون",
    desc: "كرسبي مع بيف بيكون وصوص جبنة",
    sizes: [
      { name: "M", price: 160 },
      { name: "L", price: 175 },
      { name: "XL", price: 190 },
      { name: "رول", price: 205 },
    ],
  },
  {
    id: 217,
    section: "crepes",
    name: "كريب شيش على سوسيس",
    desc: "شيش مشوي مع قطع سوسيس",
    sizes: [
      { name: "M", price: 160 },
      { name: "L", price: 175 },
      { name: "XL", price: 180 },
      { name: "رول", price: 195 },
    ],
  },
  {
    id: 218,
    section: "crepes",
    name: "كريب زنجر ع بانية",
    desc: "ميكس زنجر حار وبانيه كلاسيك",
    sizes: [
      { name: "M", price: 140 },
      { name: "L", price: 155 },
      { name: "XL", price: 170 },
      { name: "رول", price: 185 },
    ],
  },
  {
    id: 219,
    section: "crepes",
    name: "كريب زنجر ع سوسيس",
    desc: "زنجر حار مع هوت دوج جريل",
    sizes: [
      { name: "M", price: 150 },
      { name: "L", price: 165 },
      { name: "XL", price: 180 },
      { name: "رول", price: 195 },
    ],
  },
  {
    id: 220,
    section: "crepes",
    name: "كريب زنجر ع بطاطس",
    desc: "زنجر حار مقرمش مع بطاطس بوم فريت",
    sizes: [
      { name: "M", price: 155 },
      { name: "L", price: 170 },
      { name: "XL", price: 180 },
      { name: "رول", price: 185 },
    ],
  },
  {
    id: 221,
    section: "crepes",
    name: "كريب سوسيس ع بانية",
    desc: "هوت دوج مع بانيه مقرمش",
    sizes: [
      { name: "M", price: 140 },
      { name: "L", price: 155 },
      { name: "XL", price: 170 },
      { name: "رول", price: 185 },
    ],
  },
  {
    id: 222,
    section: "crepes",
    name: "كريب بانية ع كفتة",
    desc: "بانيه مع كفتة مشوية على الفحم",
    sizes: [
      { name: "M", price: 120 },
      { name: "L", price: 135 },
      { name: "XL", price: 140 },
      { name: "رول", price: 155 },
    ],
  },
  {
    id: 223,
    section: "crepes",
    name: "كريب بانية ع بطاطس",
    desc: "بانيه مقرمش اقتصادي مع بطاطس",
    sizes: [
      { name: "M", price: 115 },
      { name: "L", price: 125 },
      { name: "XL", price: 135 },
      { name: "رول", price: 145 },
    ],
  },
  {
    id: 224,
    section: "crepes",
    name: "كريب برجر",
    desc: "برجر لحم بلدي مشوي",
    sizes: [
      { name: "M", price: 110 },
      { name: "L", price: 120 },
      { name: "XL", price: 135 },
      { name: "رول", price: 145 },
    ],
  },
  {
    id: 225,
    section: "crepes",
    name: "كريب سجق",
    desc: "سجق بلدي متبل جريل",
    sizes: [
      { name: "M", price: 110 },
      { name: "L", price: 120 },
      { name: "XL", price: 135 },
      { name: "رول", price: 145 },
    ],
  },
  {
    id: 226,
    section: "crepes",
    name: "كريب سوسيس",
    desc: "هوت دوج مقطع صوصات شرقية",
    sizes: [
      { name: "M", price: 110 },
      { name: "L", price: 120 },
      { name: "XL", price: 135 },
      { name: "رول", price: 145 },
    ],
  },
  {
    id: 227,
    section: "crepes",
    name: "كريب جمبري كرسبي",
    desc: "جمبري جامبو مقرمش لعشاق السي فود",
    sizes: [{ name: "XL", price: 230 }],
  },
  {
    id: 228,
    section: "crepes",
    name: "كريب كوردون بلو",
    desc: "رول دجاج محشو جبن وتركي مقلي",
    sizes: [
      { name: "M", price: 150 },
      { name: "L", price: 165 },
      { name: "XL", price: 185 },
      { name: "رول", price: 195 },
    ],
  },
  {
    id: 229,
    section: "crepes",
    name: "كريب كوردون بلو ع استربس",
    desc: "كوردون بلو غني مع قطع استربس كرسبي",
    sizes: [
      { name: "M", price: 160 },
      { name: "L", price: 175 },
      { name: "XL", price: 185 },
      { name: "رول", price: 195 },
    ],
  },
  {
    id: 230,
    section: "crepes",
    name: "كريب كوردون بلو ع شيش",
    desc: "كوردون بلو مع شيش طاووق جريل",
    sizes: [
      { name: "M", price: 160 },
      { name: "L", price: 175 },
      { name: "XL", price: 185 },
      { name: "رول", price: 195 },
    ],
  },
  {
    id: 231,
    section: "crepes",
    name: "كريب استربس",
    desc: "أصابع صدور دجاج مقرمشة حارة أو عادي",
    sizes: [
      { name: "M", price: 140 },
      { name: "L", price: 155 },
      { name: "XL", price: 170 },
      { name: "رول", price: 185 },
    ],
  },
  {
    id: 232,
    section: "crepes",
    name: "كريب بطاطس بوم فريت",
    desc: "بطاطس ذهبية مقرمشة غرقانة جبن",
    sizes: [
      { name: "M", price: 85 },
      { name: "L", price: 95 },
      { name: "XL", price: 115 },
      { name: "رول", price: 135 },
    ],
  },
  {
    id: 233,
    section: "crepes",
    name: "كريب تشيكن ناتشل",
    desc: "كرسبي مع خضروات وصوص رانش شيدر",
    sizes: [
      { name: "M", price: 155 },
      { name: "L", price: 170 },
      { name: "XL", price: 185 },
      { name: "رول", price: 195 },
    ],
  },
  {
    id: 234,
    section: "crepes",
    name: "كريب السعادة",
    desc: "صوص تكساس + مكس جبن + برجر + سوسيس",
    sizes: [
      { name: "M", price: 195 },
      { name: "L", price: 215 },
      { name: "XL", price: 225 },
      { name: "رول", price: 235 },
    ],
  },
  {
    id: 235,
    section: "crepes",
    name: "كريب ديناميت",
    desc: "صوص رانش + مكس جبن + بيبروني + استربس + شيش فحم",
    sizes: [
      { name: "M", price: 170 },
      { name: "L", price: 185 },
      { name: "XL", price: 205 },
      { name: "رول", price: 215 },
    ],
  },
  {
    id: 236,
    section: "crepes",
    name: "كريب نايتس",
    desc: "شيدر صوص + فرايد تشيكن + استربس + رومي مدخن",
    sizes: [
      { name: "M", price: 165 },
      { name: "L", price: 175 },
      { name: "XL", price: 185 },
      { name: "رول", price: 195 },
    ],
  },
  {
    id: 237,
    section: "crepes",
    name: "كريب جولي",
    desc: "صوص رانش + بانية + استربس + كوردون بلو",
    sizes: [
      { name: "M", price: 160 },
      { name: "L", price: 175 },
      { name: "XL", price: 185 },
      { name: "رول", price: 195 },
    ],
  },
  {
    id: 238,
    section: "crepes",
    name: "كريب ديفيلز",
    desc: "صوص باربيكيو + صدور جريل + فاهيتا فراخ + شيش فحم",
    sizes: [
      { name: "M", price: 160 },
      { name: "L", price: 180 },
      { name: "XL", price: 190 },
      { name: "رول", price: 200 },
    ],
  },
  {
    id: 239,
    section: "crepes",
    name: "كريب منستر",
    desc: "تكساس + برجر + بانية + هوت دوج + شيش فحم",
    sizes: [
      { name: "M", price: 160 },
      { name: "L", price: 175 },
      { name: "XL", price: 185 },
      { name: "رول", price: 195 },
    ],
  },
  {
    id: 240,
    section: "crepes",
    name: "كريب فانتازي",
    desc: "صوص باربيكيو + برجر بلدي + كفتة فحم + شيش فحم",
    sizes: [
      { name: "M", price: 185 },
      { name: "L", price: 205 },
      { name: "XL", price: 215 },
      { name: "رول", price: 235 },
    ],
  },

  // === PIZZA ===
  {
    id: 301,
    image: "assets/menu_items/بيتزا مارجريتا/WhatsApp Image 2026-08-02 at 12.10.02 AM.jpeg",
    images: [
          "assets/menu_items/بيتزا مارجريتا/WhatsApp Image 2026-08-02 at 12.10.02 AM.jpeg"
    ],
    section: "pizza",
    name: "بيتزا مارجريتا",
    desc: "صوص بيتزا، موزاريلا، ريحان وزعتر",
    sizes: [
      { name: "M", price: 130 },
      { name: "L", price: 160 },
      { name: "XL", price: 190 },
    ],
  },
  {
    id: 302,
    section: "pizza",
    name: "بيتزا خضروات جوليان",
    desc: "مشروم، فلفل ألوان، زيتون، طماطم وموزاريلا",
    sizes: [
      { name: "M", price: 130 },
      { name: "L", price: 160 },
      { name: "XL", price: 190 },
    ],
  },
  {
    id: 303,
    section: "pizza",
    name: "بيتزا مشروم",
    desc: "مشروم فريش، صوص طماطم وموزاريلا",
    sizes: [
      { name: "M", price: 130 },
      { name: "L", price: 160 },
      { name: "XL", price: 190 },
    ],
  },
  {
    id: 304,
    image: "assets/menu_items/بيتزا مكس جبن/WhatsApp Image 2026-08-02 at 12.10.38 AM.jpeg",
    images: [
          "assets/menu_items/بيتزا مكس جبن/WhatsApp Image 2026-08-02 at 12.10.38 AM.jpeg",
          "assets/menu_items/بيتزا مكس جبن/WhatsApp Image 2026-08-02 at 12.10.39 AM.jpeg"
    ],
    section: "pizza",
    name: "بيتزا مكس جبن",
    desc: "شيدر، رومي، كيري وموزاريلا غنية",
    sizes: [
      { name: "M", price: 160 },
      { name: "L", price: 185 },
      { name: "XL", price: 215 },
    ],
  },
  {
    id: 305,
    section: "pizza",
    name: "بيتزا كواترو فورماج",
    desc: "أربعة أنواع أجبان فاخرة بخلطة إيطالية",
    sizes: [
      { name: "M", price: 160 },
      { name: "L", price: 190 },
      { name: "XL", price: 220 },
    ],
  },
  {
    id: 306,
    section: "pizza",
    name: "بيتزا كرانشي رومي مدخن",
    desc: "قطع كرسبي مع شرائح رومي مدخن شيدر",
    sizes: [
      { name: "M", price: 160 },
      { name: "L", price: 190 },
      { name: "XL", price: 220 },
    ],
  },
  {
    id: 307,
    image: "assets/menu_items/بيتزا تشيكن باربيكيو/WhatsApp Image 2026-08-02 at 12.11.02 AM (1).jpeg",
    images: [
          "assets/menu_items/بيتزا تشيكن باربيكيو/WhatsApp Image 2026-08-02 at 12.11.02 AM (1).jpeg",
          "assets/menu_items/بيتزا تشيكن باربيكيو/WhatsApp Image 2026-08-02 at 12.11.02 AM.jpeg"
    ],
    section: "pizza",
    name: "بيتزا تشيكن باربيكيو",
    desc: "قطع دجاج متبلة بصوص الباربيكيو الغني",
    sizes: [
      { name: "M", price: 160 },
      { name: "L", price: 190 },
      { name: "XL", price: 220 },
    ],
  },
  {
    id: 308,
    section: "pizza",
    name: "بيتزا تشيكن تكساس",
    desc: "دجاج متبل مع صوص تكساس هالبينو",
    sizes: [
      { name: "M", price: 160 },
      { name: "L", price: 190 },
      { name: "XL", price: 220 },
    ],
  },
  {
    id: 309,
    section: "pizza",
    name: "بيتزا شيش باربيكيو",
    desc: "شيش طاووق مع صوص الباربيكيو وموزاريلا",
    sizes: [
      { name: "M", price: 160 },
      { name: "L", price: 190 },
      { name: "XL", price: 220 },
    ],
  },
  {
    id: 310,
    section: "pizza",
    name: "بيتزا تشيكن رانش",
    image: "assets/menu_items/بيتزا تشيكن رانش/WhatsApp Image 2026-08-02 at 12.11.25 AM (1).jpeg",
    images: [
      "assets/menu_items/بيتزا تشيكن رانش/WhatsApp Image 2026-08-02 at 12.11.25 AM (1).jpeg",
      "assets/menu_items/بيتزا تشيكن رانش/WhatsApp Image 2026-08-02 at 12.11.26 AM (1).jpeg",
      "assets/menu_items/بيتزا تشيكن رانش/WhatsApp Image 2026-08-02 at 12.11.26 AM (2).jpeg",
      "assets/menu_items/بيتزا تشيكن رانش/WhatsApp Image 2026-08-02 at 12.11.26 AM (3).jpeg",
      "assets/menu_items/بيتزا تشيكن رانش/WhatsApp Image 2026-08-02 at 12.11.26 AM.jpeg"
    ],
    desc: "صدور دجاج كرسبي مع صوص الرانش المفضل",
    sizes: [
      { name: "M", price: 160 },
      { name: "L", price: 190 },
      { name: "XL", price: 220 },
    ],
  },
  {
    id: 311,
    section: "pizza",
    name: "بيتزا صدور جريل",
    desc: "صدور دجاج مشوية على الجريل صحية وموزاريلا",
    sizes: [
      { name: "M", price: 165 },
      { name: "L", price: 195 },
      { name: "XL", price: 225 },
    ],
  },
  {
    id: 312,
    section: "pizza",
    name: "بيتزا سوبر سوبريم فراخ",
    desc: "قطع دجاج، خضار فريش، زيتون، وموزاريلا زيادة",
    sizes: [
      { name: "M", price: 165 },
      { name: "L", price: 195 },
      { name: "XL", price: 225 },
    ],
  },
  {
    id: 313,
    section: "pizza",
    name: "بيتزا سوبر سوبريم لحوم",
    desc: "لحم مفروم، بيبيروني، سجق، خضار وزيتون وموزاريلا",
    sizes: [
      { name: "M", price: 165 },
      { name: "L", price: 195 },
      { name: "XL", price: 225 },
    ],
  },
  {
    id: 314,
    section: "pizza",
    name: "بيتزا مكس فراخ",
    desc: "مزيج من قطع الشيش والكرسبي والصدور الجريل",
    sizes: [
      { name: "M", price: 165 },
      { name: "L", price: 195 },
      { name: "XL", price: 225 },
    ],
  },
  {
    id: 315,
    section: "pizza",
    name: "بيتزا مفروم",
    desc: "لحم مفروم متبل بخلطة شرقية وموزاريلا",
    sizes: [
      { name: "M", price: 160 },
      { name: "L", price: 190 },
      { name: "XL", price: 220 },
    ],
  },
  {
    id: 316,
    section: "pizza",
    name: "بيتزا سوسيس",
    desc: "هوت دوج مقطع خضروات وموزاريلا",
    sizes: [
      { name: "M", price: 160 },
      { name: "L", price: 190 },
      { name: "XL", price: 220 },
    ],
  },
  {
    id: 317,
    section: "pizza",
    name: "بيتزا ديب رانش",
    desc: "حواف محشوة أجبان مع صوص رانش على الوجه ودجاج",
    sizes: [
      { name: "M", price: 165 },
      { name: "L", price: 195 },
      { name: "XL", price: 225 },
    ],
  },
  {
    id: 318,
    section: "pizza",
    name: "بيتزا زنجر",
    desc: "قطع زنجر حارة كرسبي مع صوص هالبينو وجبنة",
    sizes: [
      { name: "M", price: 160 },
      { name: "L", price: 190 },
      { name: "XL", price: 220 },
    ],
  },
  {
    id: 319,
    section: "pizza",
    name: "بيتزا فراخ مكسيكي",
    desc: "دجاج، فلفل حار، بهارات مكسيكية حارة ولذيذة",
    sizes: [
      { name: "M", price: 165 },
      { name: "L", price: 195 },
      { name: "XL", price: 225 },
    ],
  },
  {
    id: 320,
    section: "pizza",
    name: "بيتزا فاهيتا",
    desc: "فاهيتا دجاج جريل خضروات بصل فلفل زيتون وجبنة",
    sizes: [
      { name: "M", price: 165 },
      { name: "L", price: 195 },
      { name: "XL", price: 225 },
    ],
  },
  {
    id: 321,
    section: "pizza",
    name: "بيتزا شيش فحم",
    desc: "قطع شيش مشوي فحم بنكهة الشواء المدخنة",
    sizes: [
      { name: "M", price: 165 },
      { name: "L", price: 195 },
      { name: "XL", price: 225 },
    ],
  },
  {
    id: 322,
    image: "assets/menu_items/بيتزا بيبيروني/WhatsApp Image 2026-08-02 at 12.11.40 AM.jpeg",
    images: [
          "assets/menu_items/بيتزا بيبيروني/WhatsApp Image 2026-08-02 at 12.11.40 AM.jpeg",
          "assets/menu_items/بيتزا بيبيروني/WhatsApp Image 2026-08-02 at 12.11.41 AM.jpeg"
    ],
    section: "pizza",
    name: "بيتزا بيبيروني",
    desc: "قطع بيبيروني لحم فاخرة غرقانة موزاريلا",
    sizes: [
      { name: "M", price: 160 },
      { name: "L", price: 190 },
      { name: "XL", price: 220 },
    ],
  },
  {
    id: 323,
    section: "pizza",
    name: "بيتزا تشيكن هالبينوش",
    desc: "دجاج مع شرائح هالبينو حار وصوص شيدر",
    sizes: [
      { name: "M", price: 165 },
      { name: "L", price: 195 },
      { name: "XL", price: 225 },
    ],
  },
  {
    id: 324,
    section: "pizza",
    name: "بيتزا تشيكن بيكون",
    desc: "دجاج كرسبي مع بيف بيكون وصوص رانش شيدر",
    sizes: [
      { name: "M", price: 165 },
      { name: "L", price: 195 },
      { name: "XL", price: 225 },
    ],
  },
  {
    id: 325,
    section: "pizza",
    name: "بيتزا تونة",
    desc: "قطع تونة فاخرة، بصل، فلفل ألوان وزيتون وجبنة",
    sizes: [
      { name: "M", price: 185 },
      { name: "L", price: 205 },
      { name: "XL", price: 245 },
    ],
  },
  {
    id: 326,
    section: "pizza",
    name: "بيتزا بسطرمة",
    desc: "بسطرمة بلدي مع موزاريلا وزيتون أخضر",
    sizes: [
      { name: "M", price: 195 },
      { name: "L", price: 225 },
      { name: "XL", price: 255 },
    ],
  },
  {
    id: 327,
    section: "pizza",
    name: "بيتزا جمبري",
    desc: "جمبري كرسبي أو جريل متبل وموزاريلا فصوص",
    sizes: [
      { name: "M", price: 195 },
      { name: "L", price: 225 },
      { name: "XL", price: 255 },
    ],
  },
  {
    id: 328,
    section: "pizza",
    name: "بيتزا سي رانش",
    desc: "جمبري، سبيط مع صوص رانش وجبنة موزاريلا",
    sizes: [
      { name: "M", price: 205 },
      { name: "L", price: 235 },
      { name: "XL", price: 265 },
    ],
  },
  {
    id: 329,
    section: "pizza",
    name: "بيتزا فور سيزون",
    desc: "أربعة أقسام (لحوم، دجاج، أجبان، خضروات) في بيتزا واحدة",
    sizes: [
      { name: "M", price: 205 },
      { name: "L", price: 235 },
      { name: "XL", price: 265 },
    ],
  },
  {
    id: 330,
    section: "pizza",
    name: "بيتزا بيف بيكون",
    desc: "شرائح بيف بيكون مدخن وموزاريلا وتكساس",
    sizes: [
      { name: "M", price: 180 },
      { name: "L", price: 220 },
      { name: "XL", price: 230 },
    ],
  },
  {
    id: 331,
    section: "pizza",
    name: "بيتزا ناشفيل",
    desc: "دجاج كرسبي مغطى بصوص ناشفيل الحار وشيدر",
    sizes: [
      { name: "M", price: 170 },
      { name: "L", price: 200 },
      { name: "XL", price: 230 },
    ],
  },
  {
    id: 332,
    section: "pizza",
    name: "بيتزا متر زرقاء",
    desc: "بيتزا عملاقة بطول متر تناسب اللمات والعائلات",
    sizes: [{ name: "XL", price: 550 }],
  },
  {
    id: 333,
    section: "pizza",
    name: "بيتزا بسطرمة كيري",
    desc: "بسطرمة بلدي غنية بقطع جبنة كيري وموزاريلا",
    sizes: [
      { name: "M", price: 190 },
      { name: "L", price: 220 },
      { name: "XL", price: 270 },
    ],
  },
  {
    id: 334,
    section: "pizza",
    name: "بيتزا سجق كيري",
    desc: "سجق بلدي مع قطع كيري كريمي وموزاريلا",
    sizes: [
      { name: "M", price: 170 },
      { name: "L", price: 200 },
      { name: "XL", price: 240 },
    ],
  },
  {
    id: 335,
    section: "pizza",
    name: "بيتزا سي فوود",
    desc: "جمبري وسبيط وتونة مع بهارات سي فود",
    sizes: [{ name: "L", price: 240 }],
  },

  // === PASTA ===
  {
    id: 401,
    section: "pasta",
    name: "باستا مكس جبن",
    desc: "مكرونة فرن غرقانة بصوص الأجبان الأربعة والموزاريلا",
    sizes: [
      { name: "M", price: 165 },
      { name: "L", price: 195 },
      { name: "XL", price: 215 },
    ],
  },
  {
    id: 402,
    section: "pasta",
    name: "باستا كرانشي رومي مدخن",
    desc: "مكرونة بقطع الدجاج كرسبي ورومي مدخن وشيدر",
    sizes: [
      { name: "M", price: 175 },
      { name: "L", price: 205 },
      { name: "XL", price: 225 },
    ],
  },
  {
    id: 403,
    section: "pasta",
    name: "باستا تشيكن فريش",
    desc: "مكرونة بصدور دجاج طازجة مشوية وصوص أبيض",
    sizes: [
      { name: "M", price: 175 },
      { name: "L", price: 205 },
      { name: "XL", price: 225 },
    ],
  },
  {
    id: 404,
    section: "pasta",
    name: "باستا تشيكن رانش",
    desc: "قطع كرسبي مع صوص رانش غني وموزاريلا سايحة",
    sizes: [
      { name: "M", price: 175 },
      { name: "L", price: 205 },
      { name: "XL", price: 225 },
    ],
  },
  {
    id: 405,
    section: "pasta",
    name: "باستا تشيكن باربيكيو",
    desc: "صدور دجاج بصوص الباربيكيو المميز وجبنة موزاريلا",
    sizes: [
      { name: "M", price: 175 },
      { name: "L", price: 205 },
      { name: "XL", price: 225 },
    ],
  },
  {
    id: 406,
    section: "pasta",
    name: "باستا تشيكن تكساس",
    desc: "قطع دجاج كرسبي مع صوص تكساس هالبينو شيدر",
    sizes: [
      { name: "M", price: 175 },
      { name: "L", price: 205 },
      { name: "XL", price: 225 },
    ],
  },
  {
    id: 407,
    section: "pasta",
    name: "باستا شيش فحم",
    desc: "مكرونة بقطع شيش طاووق مشوي على الفحم ونكهة مدخنة",
    sizes: [
      { name: "M", price: 175 },
      { name: "L", price: 205 },
      { name: "XL", price: 235 },
    ],
  },
  {
    id: 408,
    section: "pasta",
    name: "باستا مكس فراخ",
    desc: "ميكس صدور دجاج كرسبي وشيش جريل مع صوصات",
    sizes: [
      { name: "M", price: 175 },
      { name: "L", price: 205 },
      { name: "XL", price: 225 },
    ],
  },
  {
    id: 409,
    section: "pasta",
    name: "باستا سوبر سوبريم فراخ",
    desc: "دجاج، زيتون، فلفل ألوان، صوص أبيض وموزاريلا مغطاة",
    sizes: [
      { name: "M", price: 175 },
      { name: "L", price: 205 },
      { name: "XL", price: 225 },
    ],
  },
  {
    id: 410,
    section: "pasta",
    name: "باستا سوبر سوبريم لحوم",
    desc: "لحم مفروم، بيبيروني، هوت دوج متبل وجبن فرن",
    sizes: [
      { name: "M", price: 175 },
      { name: "L", price: 205 },
      { name: "XL", price: 225 },
    ],
  },
  {
    id: 411,
    section: "pasta",
    name: "باستا فاهيتا",
    desc: "مكرونة بفاهيتا دجاج جريل خضار وصوصات مكسيكية",
    sizes: [
      { name: "M", price: 175 },
      { name: "L", price: 205 },
      { name: "XL", price: 225 },
    ],
  },
  {
    id: 412,
    section: "pasta",
    name: "باستا تشيكن هالبينو",
    desc: "دجاج حار كرسبي مع قطع هالبينو شطة وصوص شيدر فرن",
    sizes: [
      { name: "M", price: 175 },
      { name: "L", price: 205 },
      { name: "XL", price: 225 },
    ],
  },
  {
    id: 413,
    section: "pasta",
    name: "باستا جمبري",
    desc: "مكرونة بجمبري جريل فصوص بصوص الكريمة الفاخرة",
    sizes: [
      { name: "M", price: 195 },
      { name: "L", price: 225 },
      { name: "XL", price: 255 },
    ],
  },

  // === SANDWICH ROLLS ===
  {
    id: 501,
    section: "rolls",
    name: "رول تشيكن تركي مدخن",
    desc: "رول ساندوتش زنجر مع تركي مدخن وموزاريلا",
    price: 180,
  },
  {
    id: 502,
    section: "rolls",
    name: "رول تشيكن رانش مدخن",
    desc: "رول دجاج كرسبي مع صوص رانش غني مدخن",
    price: 180,
  },
  {
    id: 503,
    section: "rolls",
    name: "رول شيش طاووق",
    desc: "رول محشو بقطع شيش جريل خضروات ثومية",
    price: 180,
  },
  {
    id: 504,
    section: "rolls",
    name: "رول زنجر حار",
    desc: "رول محشو بزنجر حار جداً وهالبينو وشيدر صوص",
    price: 180,
  },
  {
    id: 505,
    section: "rolls",
    name: "رول ميكس فراخ",
    desc: "رول غني بمزيج من أنواع الفراخ كرسبي وشيش",
    price: 190,
  },

  // === ITALIAN HAWAWSHI ===
  {
    id: 601,
    section: "hawawshi",
    name: "حواوشي كرانشي تركي مدخن",
    desc: "حواوشي إيطالي بعجينة مميزة وكرسبي وتركي",
    sizes: [
      { name: "M", price: 170 },
      { name: "L", price: 200 },
      { name: "XL", price: 230 },
    ],
  },
  {
    id: 602,
    section: "hawawshi",
    name: "حواوشي تشيكن رانش",
    desc: "عجينة إيطالية مخبوزة محشوة دجاج وصوص رانش جبن",
    sizes: [
      { name: "M", price: 170 },
      { name: "L", price: 200 },
      { name: "XL", price: 230 },
    ],
  },
  {
    id: 603,
    section: "hawawshi",
    name: "حواوشي مكس فراخ",
    desc: "حشوة كرسبي وشيش طاووق وجبن موزاريلا بالفرن",
    sizes: [
      { name: "M", price: 170 },
      { name: "L", price: 200 },
      { name: "XL", price: 230 },
    ],
  },
  {
    id: 604,
    section: "hawawshi",
    name: "حواوشي مفروم بلدي",
    desc: "لحم مفروم بلدي متبل على الطريقة الإيطالية بالجبنة",
    sizes: [
      { name: "M", price: 170 },
      { name: "L", price: 200 },
      { name: "XL", price: 230 },
    ],
  },

  // === MELTED CHEESE ===
  {
    id: 701,
    section: "melted_cheese",
    name: "غرقانة جبنة بطاطس",
    desc: "بطاطس مقلية غرقانة بصوص الجبنة الشيدر السايحة والموزاريلا",
    sizes: [
      { name: "M", price: 130 },
      { name: "L", price: 155 },
    ],
  },
  {
    id: 702,
    section: "melted_cheese",
    name: "غرقانة جبنة استربس",
    desc: "قطع استربس كرسبي غرقانة بصوص الشيدر والجبن السايحة",
    sizes: [
      { name: "M", price: 155 },
      { name: "L", price: 175 },
    ],
  },
  {
    id: 703,
    section: "melted_cheese",
    name: "غرقانة جبنة شيش طاووق",
    desc: "قطع شيش مشوية غارقة بالكامل في صوص الجبن الساخن",
    sizes: [
      { name: "M", price: 170 },
      { name: "L", price: 185 },
    ],
  },
  {
    id: 704,
    section: "melted_cheese",
    name: "غرقانة جبنة سوسيس",
    desc: "هوت دوج مقطع غرقان صوص شيدر سايح وموزاريلا بالفرن",
    sizes: [
      { name: "M", price: 130 },
      { name: "L", price: 155 },
    ],
  },
  {
    id: 705,
    section: "melted_cheese",
    name: "غرقانة جبنة تشيكن هالبينو",
    desc: "صدور دجاج كرسبي حارة مع هالبينو وغارقة بصوص الجبن",
    sizes: [
      { name: "M", price: 160 },
      { name: "L", price: 175 },
    ],
  },
  {
    id: 706,
    section: "melted_cheese",
    name: "غرقانة جبنة سوسيس ع شيش",
    desc: "ميكس هوت دوج وشيش مشوي غارقان في الجبنة السايحة",
    sizes: [
      { name: "M", price: 170 },
      { name: "L", price: 185 },
    ],
  },
  {
    id: 707,
    section: "melted_cheese",
    name: "غرقانة جبنة زنجر ع شيش",
    desc: "زنجر حار جداً وشيش طاووق مع فيضان صوص شيدر سايح",
    sizes: [
      { name: "M", price: 175 },
      { name: "L", price: 195 },
    ],
  },
  {
    id: 708,
    section: "melted_cheese",
    name: "غرقانة جبنة مكس لحوم",
    desc: "برجر وهوت دوج وسجق غارقة بالكامل بصوص الجبن الساخن",
    sizes: [
      { name: "M", price: 175 },
      { name: "L", price: 195 },
    ],
  },
];

// Standard delicious extras
const commonExtras = [
  { name: "جبنة شيدر سايحة زياده", price: 15 },
  { name: "موتزاريلا إكسترا", price: 15 },
  { name: "صوص رانش", price: 15 },
  { name: "صوص تكساس حار", price: 15 },
  { name: "صوص باربيكيو", price: 15 },
  { name: "شرائح هالبينو حار", price: 10 },
];

// App State
let cart = [];
let currentItem = null;
let currentSelectedSize = null;
let currentSpiceLevel = "عادي";
let selectedExtras = [];
let orderType = "delivery"; // delivery or pickup
let searchQuery = "";
let menuRendered = false;
let pendingMenuRender = null;

// Helper function to normalize Arabic text for better search matching
function normalizeArabic(str) {
  if (!str) return "";
  return str
    .replace(/[أإآ]/g, "ا")
    .replace(/ة/g, "ه")
    .replace(/ى/g, "ي")
    .toLowerCase();
}

function filterMenu(query) {
  searchQuery = query.trim();
  scheduleMenuRender({ force: true });
}

function unlockPageScroll() {
  document.body.classList.remove("overflow-hidden");
  document.documentElement.classList.remove("overflow-hidden");
}

function lockPageScroll() {
  document.body.classList.add("overflow-hidden");
}

function scheduleMenuRender({ force = false } = {}) {
  if (!selectedBranch && !force) return;
  if (menuRendered && !force) return;
  if (pendingMenuRender) cancelAnimationFrame(pendingMenuRender);

  pendingMenuRender = requestAnimationFrame(() => {
    renderMenu();
    menuRendered = true;
    pendingMenuRender = null;
  });
}

function normalizeForImageMatching(str) {
  return normalizeArabic(str)
    .replace(/\.[a-z0-9]+$/i, "")
    .replace(/[_\-().]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function getSectionItemIndex(item) {
  return menuData
    .filter((menuItem) => menuItem.section === item.section)
    .findIndex((menuItem) => menuItem.id === item.id);
}

// Fetch image dynamically
function getProductImage(item) {
  if (item.image && item.image !== fallbackProductImage) return item.image;

  const searchableName = normalizeForImageMatching(
    `${item.section} ${item.name} ${item.desc || ""}`,
  );
  const matchingImage = allProductImages.find((imagePath) => {
    const fileName = decodeURIComponent(imagePath.split("/").pop() || "");
    const normalizedFileName = normalizeForImageMatching(fileName);
    return (
      normalizedFileName.length > 4 &&
      searchableName.includes(normalizedFileName)
    );
  });

  if (matchingImage) return matchingImage;

  const list = imagesByCategory[item.section];
  if (!list || list.length === 0) return fallbackProductImage;

  const index = getSectionItemIndex(item);
  return list[Math.max(index, 0) % list.length];
}

function getCartItemImage(item, index = 0) {
  if (item.productId) {
    const product = menuData.find((menuItem) => menuItem.id === item.productId);
    if (product) return getProductImage(product);
  }

  const productFromName = menuData.find((menuItem) =>
    item.name && item.name.includes(menuItem.name),
  );
  if (productFromName) return getProductImage(productFromName);

  if (item.image && item.image !== fallbackProductImage) return item.image;

  const list = imagesByCategory[item.section || "crepes"];
  return list && list.length > 0 ? list[index % list.length] : fallbackProductImage;
}

// 1. Render Categories Navigation Bar
function renderCategoriesNav() {
  const container = document.getElementById("categories-nav");
  if (!container) return;

  container.innerHTML = mainSections
    .map(
      (section, idx) => `
        <button id="nav-btn-${section.id}" 
                class="flex-shrink-0 flex items-center gap-2 px-6 py-3 rounded-full ${idx === 0 ? "bg-primary text-white font-bold shadow-md" : "bg-white border border-[#eae7e7] text-on-surface-variant hover:text-primary hover:bg-white"} transition-all" 
                onclick="scrollToCategory('${section.id}')">
            <span class="material-symbols-outlined text-xl">${section.icon}</span>
            <span>${section.name}</span>
        </button>
    `,
    )
    .join("");
}

// 2. Render all categories and their products on the page
function renderMenu() {
  const container = document.getElementById("dynamic-menu-container");
  if (!container) return;

  const normalizedQuery = normalizeArabic(searchQuery);
  let totalVisibleItems = 0;

  const sectionsHTML = mainSections
    .map((section) => {
      let sectionItems = menuData.filter((item) => item.section === section.id);

      // Filter by search query if present
      if (normalizedQuery) {
        sectionItems = sectionItems.filter(
          (item) =>
            normalizeArabic(item.name).includes(normalizedQuery) ||
            normalizeArabic(item.desc).includes(normalizedQuery),
        );
      }

      if (sectionItems.length === 0) return "";

      totalVisibleItems += sectionItems.length;

      const itemsHTML = sectionItems
        .map((item) => {
          let priceDisplay = "";
          if (item.sizes && item.sizes.length > 0) {
            const minPrice = Math.min(...item.sizes.map((s) => s.price));
            priceDisplay = `يبدأ من ${minPrice} ج.م`;
          } else {
            priceDisplay = `${item.price} ج.م`;
          }

          const imgFile = getProductImage(item);

          return `
                <div class="bg-white rounded-2xl overflow-hidden group flex flex-col justify-between cursor-pointer border border-[#eae7e7] hover:border-primary/50 hover:shadow-lg transition-all duration-300"
                     onclick='openCustomizationModal(${JSON.stringify(item)})'>
                    <div class="relative aspect-[4/3] overflow-hidden bg-gray-50">
                        <img class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                             src="${imgFile}" 
                             alt="${item.name}"
                             loading="lazy"
                             decoding="async"
                             onerror="this.onerror=null; this.src='${fallbackProductImage}'">
                    </div>
                    <div class="p-4 flex-1 flex flex-col justify-between gap-3">
                        <div>
                            <div class="flex justify-between items-start gap-2">
                                <h4 class="font-bold text-sm text-[#1c1b1b] leading-snug group-hover:text-primary transition-colors duration-300">${item.name}</h4>
                                <span class="font-bold text-primary text-sm whitespace-nowrap">${priceDisplay}</span>
                            </div>
                            <p class="text-xs text-on-surface-variant/80 line-clamp-2 leading-relaxed mt-1.5 min-h-[32px]">${item.desc || "وجبة زنجر المميزة بنكهتها الخاصة وقرمشتها الفريدة."}</p>
                        </div>
                        <div class="w-full py-2 bg-[#f0eded] rounded-xl flex items-center justify-center text-[#1c1b1b] text-xs font-bold gap-1 transition-all duration-300 group-hover:bg-primary group-hover:text-white">
                            <span>أضف للسلة</span>
                            <span class="material-symbols-outlined text-sm">shopping_cart</span>
                        </div>
                    </div>
                </div>
            `;
        })
        .join("");

      return `
            <section class="menu-section px-margin-mobile mt-10" id="${section.id}">
                <div class="flex items-center justify-between mb-6">
                    <h3 class="text-2xl font-extrabold border-r-4 border-primary pr-3 text-[#1c1b1b]">${section.name}</h3>
                </div>
                <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
                    ${itemsHTML}
                </div>
            </section>
        `;
    })
    .join("");

  if (totalVisibleItems === 0 && normalizedQuery) {
    container.innerHTML = `
            <div class="text-center text-on-surface-variant py-20 flex flex-col items-center gap-3">
                <span class="material-symbols-outlined text-6xl opacity-30 text-primary">search_off</span>
                <p class="text-lg font-bold text-[#1c1b1b]">ملقناش أكلة بالاسم ده! 🔍</p>
                <p class="text-xs">جرب تبحث بكلمة تانية زي (كريب، بيتزا، برجر)</p>
            </div>
        `;
  } else {
    container.innerHTML = sectionsHTML;
  }
}

// Smooth scroll to selected category section
function scrollToCategory(id) {
  const el = document.getElementById(id);
  if (el) {
    const offset = 140;
    const bodyRect = document.body.getBoundingClientRect().top;
    const elementRect = el.getBoundingClientRect().top;
    const elementPosition = elementRect - bodyRect;
    const offsetPosition = elementPosition - offset;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    });
  }
}

// Carousel state variables
let currentModalImages = [];
let currentModalImageIndex = 0;

function renderModalCarousel(item) {
  const container = document.getElementById("modal-image-container");
  const slider = document.getElementById("modal-image-slider");
  const dotsContainer = document.getElementById("modal-image-dots");
  const prevBtn = document.getElementById("modal-prev-btn");
  const nextBtn = document.getElementById("modal-next-btn");

  if (!container || !slider) return;

  // Determine images
  let images = [];
  if (item.images && Array.isArray(item.images) && item.images.length > 0) {
    images = item.images;
  } else if (item.image) {
    images = [item.image];
  } else {
    // try fallback
    const img = getProductImage(item);
    if (img) {
      images = [img];
    }
  }

  currentModalImages = images;
  currentModalImageIndex = 0;

  if (images.length === 0) {
    container.classList.add("hidden");
    return;
  }

  container.classList.remove("hidden");

  // Render slider slides with snap-center for swiping
  slider.innerHTML = images
    .map(
      (img) => `
      <div class="w-full h-full flex-shrink-0 snap-center">
        <img class="w-full h-full object-cover" 
             src="${img}" 
             alt="${item.name}"
             onerror="this.onerror=null; this.src='${fallbackProductImage}'">
      </div>
    `,
    )
    .join("");

  // Reset scroll position to 0
  slider.scrollLeft = 0;

  // Attach scroll event listener for touch swiping (only once)
  if (!slider.dataset.listenerAttached) {
    slider.addEventListener("scroll", () => {
      const index = Math.round(slider.scrollLeft / slider.clientWidth);
      if (index !== currentModalImageIndex && index >= 0 && index < currentModalImages.length) {
        currentModalImageIndex = index;
        updateModalImageDots();
      }
    });
    slider.dataset.listenerAttached = "true";
  }

  if (images.length <= 1) {
    if (prevBtn) prevBtn.classList.add("hidden");
    if (nextBtn) nextBtn.classList.add("hidden");
    if (dotsContainer) dotsContainer.innerHTML = "";
  } else {
    if (prevBtn) prevBtn.classList.remove("hidden");
    if (nextBtn) nextBtn.classList.remove("hidden");

    // Render dots
    if (dotsContainer) {
      dotsContainer.innerHTML = images
        .map(
          (_, idx) => `
          <button onclick="showModalImage(${idx})" 
                  id="modal-dot-${idx}" 
                  class="w-2.5 h-2.5 rounded-full transition-all duration-300 ${idx === 0 ? "bg-white scale-125" : "bg-white/50"}" 
                  aria-label="عرض الصورة ${idx + 1}">
          </button>
        `,
        )
        .join("");
    }
  }
}

function updateModalImageDots() {
  const dotsContainer = document.getElementById("modal-image-dots");
  if (dotsContainer) {
    for (let i = 0; i < currentModalImages.length; i++) {
      const dot = document.getElementById(`modal-dot-${i}`);
      if (dot) {
        if (i === currentModalImageIndex) {
          dot.className = "w-2.5 h-2.5 rounded-full transition-all duration-300 bg-white scale-125";
        } else {
          dot.className = "w-2.5 h-2.5 rounded-full transition-all duration-300 bg-white/50";
        }
      }
    }
  }
}

function showModalImage(index) {
  if (currentModalImages.length <= 1) return;
  
  // Wrap index
  currentModalImageIndex = (index + currentModalImages.length) % currentModalImages.length;
  
  const slider = document.getElementById("modal-image-slider");
  if (slider) {
    const targetLeft = currentModalImageIndex * slider.clientWidth;
    slider.scrollTo({ left: targetLeft, behavior: "smooth" });
  }
}

function prevModalImage() {
  showModalImage(currentModalImageIndex - 1);
}

function nextModalImage() {
  showModalImage(currentModalImageIndex + 1);
}

// 3. Customization Modal Functions
function openCustomizationModal(item) {
  currentItem = item;
  selectedExtras = [];
  currentSpiceLevel = "عادي";

  // Render Image Carousel
  renderModalCarousel(item);

  // Set Name
  document.getElementById("modal-item-name").innerText = item.name;

  // Build Sizes
  const sizesSection = document.getElementById("modal-sizes-section");
  const sizesContainer = document.getElementById("modal-sizes-container");

  if (item.sizes && item.sizes.length > 0) {
    sizesSection.classList.remove("hidden");
    currentSelectedSize = item.sizes[0]; // default to first size

    sizesContainer.innerHTML = item.sizes
      .map(
        (sz, idx) => `
            <button onclick="setSize(${idx})" 
                    id="size-btn-${idx}" 
                    class="size-option-btn py-3 rounded-xl border ${idx === 0 ? "modal-choice-active active" : "modal-choice"} text-sm font-bold transition-all">
                ${sz.name} (${sz.price} ج.م)
            </button>
        `,
      )
      .join("");
  } else {
    sizesSection.classList.add("hidden");
    currentSelectedSize = null;
  }

  // Build Spice (Hidden for sweet crepes or non-food items if applicable, but Zinger is mostly savory, so we keep it)
  const spicySection = document.getElementById("modal-spicy-section");
  if (
    item.section === "pizza" ||
    item.section === "crepes" ||
    item.section === "burgers" ||
    item.section === "rolls" ||
    item.section === "hawawshi" ||
    item.section === "melted_cheese"
  ) {
    spicySection.classList.remove("hidden");
    setSpiceLevel("عادي");
  } else {
    spicySection.classList.add("hidden");
  }

  // Build Extras
  const extrasSection = document.getElementById("modal-extras-section");
  const extrasContainer = document.getElementById("modal-extras-container");

  if (item.section !== "extras") {
    extrasSection.classList.remove("hidden");
    extrasContainer.innerHTML = commonExtras
      .map(
        (extra, idx) => `
            <label class="flex items-center justify-between gap-3 p-4 bg-white border border-[#e4beb4] rounded-xl cursor-pointer hover:bg-[#fff7f4] hover:border-primary/60 transition-colors shadow-sm">
                <span class="text-sm font-bold text-[#1c1b1b]">${extra.name} (+${extra.price} ج.م)</span>
                <input class="w-5 h-5 rounded border-gray-300 bg-white text-primary focus:ring-primary cursor-pointer" 
                       type="checkbox" 
                       onchange="toggleExtra(${idx}, this.checked)"/>
            </label>
        `,
      )
      .join("");
  } else {
    extrasSection.classList.add("hidden");
  }

  // Update Initial price display
  updateModalPrice();

  // Show Overlay and Modal
  const overlay = document.getElementById("custom-modal-overlay");
  const modal = document.getElementById("custom-modal");

  overlay.classList.remove("hidden");
  setTimeout(() => overlay.classList.add("opacity-100"), 10);
  modal.classList.remove("translate-y-full");
  document.body.classList.add("overflow-hidden");
}

function closeCustomization() {
  const overlay = document.getElementById("custom-modal-overlay");
  const modal = document.getElementById("custom-modal");

  overlay.classList.remove("opacity-100");
  modal.classList.add("translate-y-full");
  setTimeout(() => overlay.classList.add("hidden"), 300);
  document.body.classList.remove("overflow-hidden");
}

function setSize(idx) {
  if (!currentItem || !currentItem.sizes) return;
  currentSelectedSize = currentItem.sizes[idx];

  // Toggle active classes
  document.querySelectorAll(".size-option-btn").forEach((btn, i) => {
    if (i === idx) {
      btn.className =
        "size-option-btn py-3 rounded-xl border modal-choice-active active text-sm font-bold transition-all";
    } else {
      btn.className =
        "size-option-btn py-3 rounded-xl border modal-choice text-sm font-bold transition-all";
    }
  });

  updateModalPrice();
}

function setSpiceLevel(level) {
  currentSpiceLevel = level;
  const normalBtn = document.getElementById("spice-btn-normal");
  const spicyBtn = document.getElementById("spice-btn-spicy");
  if (!normalBtn || !spicyBtn) return;

  if (level === "عادي") {
    normalBtn.className =
      "spice-btn py-3 rounded-xl border modal-choice-active text-sm font-bold active transition-all";
    spicyBtn.className =
      "spice-btn py-3 rounded-xl border modal-choice text-sm font-bold transition-all";
  } else {
    spicyBtn.className =
      "spice-btn py-3 rounded-xl border modal-choice-active text-sm font-bold active transition-all";
    normalBtn.className =
      "spice-btn py-3 rounded-xl border modal-choice text-sm font-bold transition-all";
  }
}

function toggleExtra(idx, isChecked) {
  const extra = commonExtras[idx];
  if (isChecked) {
    selectedExtras.push(extra);
  } else {
    selectedExtras = selectedExtras.filter((e) => e.name !== extra.name);
  }
  updateModalPrice();
}

function calculateCurrentTotalPrice() {
  if (!currentItem) return 0;
  let basePrice = currentSelectedSize
    ? currentSelectedSize.price
    : currentItem.price || 0;
  let extrasPrice = selectedExtras.reduce((sum, e) => sum + e.price, 0);
  return basePrice + extrasPrice;
}

function updateModalPrice() {
  const totalPrice = calculateCurrentTotalPrice();
  document.getElementById("modal-item-price").innerText = totalPrice + " ج.م";
}

function addToCartFromModal() {
  if (!currentItem) return;

  // Construct name with options
  let finalName = currentItem.name;
  if (currentSelectedSize) {
    finalName += ` (${currentSelectedSize.name})`;
  }
  if (currentSpiceLevel !== "عادي") {
    finalName += ` (${currentSpiceLevel})`;
  }
  if (selectedExtras.length > 0) {
    const extraNames = selectedExtras.map((e) => e.name).join(", ");
    finalName += ` + [${extraNames}]`;
  }

  const finalPrice = calculateCurrentTotalPrice();
  const uniqueId = Date.now() + Math.random();

  // Check if duplicate configuration already in cart
  const existing = cart.find(
    (i) => i.name === finalName && i.price === finalPrice,
  );
  if (existing) {
    existing.qty++;
    existing.image = existing.image || getProductImage(currentItem);
    existing.productId = existing.productId || currentItem.id;
  } else {
    cart.push({
      id: uniqueId,
      productId: currentItem.id,
      name: finalName,
      price: finalPrice,
      qty: 1,
      section: currentItem.section,
      image: getProductImage(currentItem),
    });
  }

  updateCartUI();
  closeCustomization();

  // Animate cart badge
  const badge = document.getElementById("cart-badge");
  badge.classList.remove("scale-0");
  badge.classList.add("scale-100", "animate-bounce");
  setTimeout(() => badge.classList.remove("animate-bounce"), 1000);
}

// 4. Cart Drawer Functions
function toggleCart() {
  const overlay = document.getElementById("cart-drawer-overlay");
  const drawer = document.getElementById("cart-drawer");

  if (drawer.classList.contains("translate-x-[-100%]")) {
    overlay.classList.remove("hidden");
    setTimeout(() => overlay.classList.add("opacity-100"), 10);
    drawer.classList.remove("translate-x-[-100%]");
    updateCartUI();
    document.body.classList.add("overflow-hidden");
  } else {
    overlay.classList.remove("opacity-100");
    drawer.classList.add("translate-x-[-100%]");
    setTimeout(() => overlay.classList.add("hidden"), 300);
    document.body.classList.remove("overflow-hidden");
  }
}

function setOrderType(type) {
  orderType = type;
  const delBtn = document.getElementById("type-delivery-btn");
  const pickBtn = document.getElementById("type-pickup-btn");
  const addressField = document.getElementById("address-field");
  const deliveryFeeContainer = document.getElementById(
    "delivery-fee-container",
  );

  const activeClass =
    "flex-1 py-2.5 bg-primary-container text-on-primary font-extrabold text-xs rounded-xl flex items-center justify-center gap-1 transition-all duration-300 shadow-md";
  const inactiveClass =
    "flex-1 py-2.5 text-gray-400 hover:text-white font-extrabold text-xs rounded-xl flex items-center justify-center gap-1 transition-all duration-300";

  if (type === "delivery") {
    if (delBtn) delBtn.className = activeClass;
    if (pickBtn) pickBtn.className = inactiveClass;
    if (addressField) addressField.classList.remove("hidden");
    if (deliveryFeeContainer) deliveryFeeContainer.classList.remove("hidden");
  } else {
    if (pickBtn) pickBtn.className = activeClass;
    if (delBtn) delBtn.className = inactiveClass;
    if (addressField) addressField.classList.add("hidden");
    if (deliveryFeeContainer) deliveryFeeContainer.classList.add("hidden");
  }

  updateCartUI();
}

function updateCartUI() {
  localStorage.setItem("cart", JSON.stringify(cart));

  const badge = document.getElementById("cart-badge");
  const totalQty = cart.reduce((sum, i) => sum + i.qty, 0);

  if (totalQty > 0) {
    badge.innerText = totalQty;
    badge.classList.remove("scale-0");
    badge.classList.add("scale-100");
  } else {
    badge.classList.remove("scale-100");
    badge.classList.add("scale-0");
  }

  const container = document.getElementById("cart-items");
  const form = document.getElementById("order-form");
  const cartFooter = document.getElementById("cart-footer");

  if (cart.length === 0) {
    container.innerHTML = `
            <div class="text-center text-on-surface-variant py-16 flex flex-col items-center gap-3">
                <span class="material-symbols-outlined text-5xl opacity-40">shopping_basket</span>
                <p class="italic text-sm">السلة فارغة حالياً.. اطلب زنجر ودلع نفسك! 😋</p>
            </div>
        `;
    form.classList.add("hidden");
    cartFooter.classList.add("hidden");
    return;
  }

  form.classList.remove("hidden");
  cartFooter.classList.remove("hidden");

  container.innerHTML = cart
    .map((item, index) => {
      const imgFile = getCartItemImage(item, index);

      return `
            <div class="p-4 bg-white rounded-2xl animate-fade-in-up space-y-3 border border-[#eae7e7] shadow-sm">
                <!-- Top Part: Thumbnail, Name & Price -->
                <div class="flex items-start gap-3">
                    <div class="w-14 h-14 rounded-xl overflow-hidden flex-shrink-0 border border-gray-200 bg-gray-50">
                        <img src="${imgFile}" alt="" class="w-full h-full object-cover" loading="lazy" decoding="async" onerror="this.onerror=null; this.src='${fallbackProductImage}'"/>
                    </div>
                    <div class="flex-1 text-right min-w-0">
                        <h5 class="text-xs font-bold text-[#1c1b1b] leading-relaxed mb-1 break-words">${item.name}</h5>
                        <span class="text-xs text-primary font-extrabold">${item.price} ج.م</span>
                    </div>
                </div>
                <!-- Bottom Part: Quantity Controls & Delete -->
                <div class="flex items-center justify-between pt-2.5 border-t border-[#f0eded]">
                    <div class="flex items-center gap-3 bg-[#f0eded] rounded-xl px-2.5 py-1">
                        <button onclick="changeQty(${index}, -1)" class="w-6 h-6 flex items-center justify-center text-primary font-extrabold hover:bg-gray-200 rounded transition-all">-</button>
                        <span class="text-sm font-bold text-[#1c1b1b] w-4 text-center">${item.qty}</span>
                        <button onclick="changeQty(${index}, 1)" class="w-6 h-6 flex items-center justify-center text-green-600 font-extrabold hover:bg-gray-200 rounded transition-all">+</button>
                    </div>
                    <button onclick="removeFromCart(${index})" class="text-gray-400 hover:text-red-500 hover:bg-red-50/50 w-8 h-8 rounded-full flex items-center justify-center transition-all">
                        <span class="material-symbols-outlined text-xl">delete</span>
                    </button>
                </div>
            </div>
        `;
    })
    .join("");

  const subtotal = cart.reduce((acc, item) => acc + item.price * item.qty, 0);
  document.getElementById("subtotal").innerText = subtotal + " ج.م";

  const branchDeliveryFee = selectedBranch ? selectedBranch.deliveryFee : 15;
  const deliveryFee = orderType === "delivery" ? branchDeliveryFee : 0;
  document.getElementById("delivery-fee").innerText = deliveryFee + " ج.م";
  document.getElementById("total-price").innerText =
    subtotal + deliveryFee + " ج.م";
}

function changeQty(index, delta) {
  if (index < 0 || index >= cart.length) return;
  cart[index].qty += delta;
  if (cart[index].qty <= 0) {
    cart.splice(index, 1);
  }
  updateCartUI();
}

function removeFromCart(index) {
  if (index < 0 || index >= cart.length) return;
  cart.splice(index, 1);
  updateCartUI();
}

// 5. Checkout function
function checkout() {
  if (cart.length === 0) {
    alert("السلة فارغة! 🛒");
    return;
  }

  const nameInput = document.getElementById("cust-name");
  const phoneInput = document.getElementById("cust-phone");
  const addressInput = document.getElementById("cust-address");
  const noteInput = document.getElementById("order-note");

  const name = nameInput ? nameInput.value.trim() : "";
  const phone = phoneInput ? phoneInput.value.trim() : "";
  const address = addressInput ? addressInput.value.trim() : "";
  const note = noteInput ? noteInput.value.trim() : "";

  if (!name) {
    alert("من فضلك اكتب اسمك بالكامل لخدمتك بشكل أفضل 👤");
    return;
  }
  if (!phone) {
    alert("من فضلك اكتب رقم الموبايل للتواصل 📞");
    return;
  }
  // Egyptian phone regex: starting with 010, 011, 012, or 015 followed by 8 digits
  const egPhoneRegex = /^01[0125]\d{8}$/;
  if (!egPhoneRegex.test(phone)) {
    alert(
      "من فضلك اكتب رقم موبايل مصري صحيح مكون من 11 رقماً ويبدأ بـ (010, 011, 012, 015) 🇪🇬",
    );
    return;
  }
  if (orderType === "delivery" && !address) {
    alert("من فضلك اكتب العنوان بالتفصيل لتوصيل طلبك سريعاً 🛵");
    return;
  }

  const activeBranchName = selectedBranch ? selectedBranch.name : "غير محدد";

  // Prepare message
  let msg = `*طلب جديد من موقع مطعم زنجر* 🍔🛒%0a`;
  msg += `*الفرع المختـار:* ${activeBranchName}%0a`;
  msg += `---------------------------%0a`;
  msg += `👤 *الاسم:* ${name}%0a`;
  msg += `📱 *رقم الهاتف:* ${phone}%0a`;
  msg += `🛵 *نوع الطلب:* ${orderType === "delivery" ? "توصيل للمنزل" : "استلام من الفرع"}%0a`;

  if (orderType === "delivery") {
    msg += `📍 *العنوان:* ${address}%0a`;
  }
  if (note) {
    msg += `📝 *ملاحظات:* ${note}%0a`;
  }

  msg += `---------------------------%0a`;
  msg += `*🧾 الطلبات:*%0a`;

  let subtotal = 0;
  cart.forEach((item) => {
    const itemTotal = item.price * item.qty;
    subtotal += itemTotal;
    msg += `▪️ ${item.name} (x${item.qty}) - ${itemTotal} ج.م%0a`;
  });

  const branchDeliveryFee = selectedBranch ? selectedBranch.deliveryFee : 15;
  const deliveryFee = orderType === "delivery" ? branchDeliveryFee : 0;
  const finalTotal = subtotal + deliveryFee;

  msg += `---------------------------%0a`;
  msg += `💰 *المجموع الفرعي:* ${subtotal} ج.م%0a`;
  if (orderType === "delivery") {
    msg += `🛵 *خدمة التوصيل:* ${deliveryFee} ج.م%0a`;
  }
  msg += `💵 *الإجمالي النهائي:* ${finalTotal} ج.م%0a`;
  msg += `---------------------------%0a`;

  const branchWa = selectedBranch ? selectedBranch.whatsapp : "201020805451";
  window.open(`https://wa.me/${branchWa}?text=${msg}`, "_blank");
}

// 6. Branch Info Modal
function showBranches() {
  const overlay = document.getElementById("branch-modal-overlay");
  const modal = document.getElementById("branch-modal");
  if (!overlay || !modal) return;

  // Populate branch modal text
  const modalTitle = document.getElementById("branch-modal-title-text");
  const modalContent = document.getElementById("branch-modal-body-content");
  if (selectedBranch) {
    if (modalTitle) modalTitle.innerText = selectedBranch.name;
    if (modalContent) {
      modalContent.innerHTML = `
        <div class="p-4 bg-gray-50 border border-gray-100 rounded-2xl text-right">
          <p class="font-bold text-[#1c1b1b] mb-1">
            <span class="material-symbols-outlined text-primary text-base align-middle ml-1">location_on</span>
            العنوان بالتفصيل:
          </p>
          <p class="text-[#5b4039] text-xs mb-3">${selectedBranch.address}</p>
          <p class="text-primary text-xs font-semibold">📞 أرقام الدليفري والتواصل:</p>
          <ul class="text-[#5b4039] text-xs space-y-1 mt-1 pr-3 list-disc">
            <li>${selectedBranch.phone}</li>
          </ul>
          <a href="${selectedBranch.mapLink}" target="_blank" class="mt-4 block text-center py-2 bg-primary text-white font-bold text-xs rounded-xl hover:bg-primary-container transition-all">
            افتح في خرائط جوجل 🗺️
          </a>
        </div>
      `;
    }
  }

  overlay.classList.remove("hidden");
  modal.classList.remove("hidden");

  setTimeout(() => {
    overlay.classList.add("opacity-100");
    modal.classList.remove("scale-95", "opacity-0");
  }, 10);
  document.body.classList.add("overflow-hidden");
}

function closeBranches() {
  const overlay = document.getElementById("branch-modal-overlay");
  const modal = document.getElementById("branch-modal");
  if (!overlay || !modal) return;

  overlay.classList.remove("opacity-100");
  modal.classList.add("scale-95", "opacity-0");

  setTimeout(() => {
    overlay.classList.add("hidden");
    modal.classList.add("hidden");
  }, 300);
  document.body.classList.remove("overflow-hidden");
}

// 7. Dynamic Scroll Highlighting and scroll-to-hide header
let lastScrollTop = 0;
window.addEventListener(
  "scroll",
  () => {
    // 7a. Highlighting logic
    let currentActive = "";
    mainSections.forEach((section) => {
      const el = document.getElementById(section.id);
      if (el) {
        const rect = el.getBoundingClientRect();
        // Highlight when section is visible near the top
        if (rect.top <= 180) {
          currentActive = section.id;
        }
      }
    });

    if (currentActive) {
      mainSections.forEach((section) => {
        const btn = document.getElementById(`nav-btn-${section.id}`);
        if (btn) {
          if (section.id === currentActive) {
            btn.className =
              "flex-shrink-0 flex items-center gap-2 px-6 py-3 rounded-full bg-primary text-white font-bold shadow-md transition-all";
          } else {
            btn.className =
              "flex-shrink-0 flex items-center gap-2 px-6 py-3 rounded-full bg-white border border-[#eae7e7] text-on-surface-variant hover:text-primary hover:bg-white transition-all";
          }
        }
      });
    }

    // 7b. Scroll-to-hide header & show-on-up-scroll logic
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    if (scrollTop < 0) return; // avoid iOS bounce behavior

    const header = document.querySelector("header");
    const categoriesNav =
      document.getElementById("categories-nav")?.parentElement; // nav container

    if (scrollTop > lastScrollTop && scrollTop > 100) {
      // Scrolling down: hide header, set nav sticky top-0
      if (header) header.style.transform = "translateY(-100%)";
      if (categoriesNav) categoriesNav.style.top = "0px";
    } else {
      // Scrolling up: show header, set nav sticky top-16 (64px)
      if (header) header.style.transform = "translateY(0)";
      if (categoriesNav) categoriesNav.style.top = "64px";
    }
    lastScrollTop = scrollTop;
  },
  { passive: true },
);

// === PWA Install Logic ===
let deferredPrompt;
const installBanner = document.getElementById("pwa-install-banner");

// Check if running on iOS
function isiOS() {
  return /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
}

// Check if app is already running in standalone mode (installed)
function isStandalone() {
  return (
    window.matchMedia("(display-mode: standalone)").matches ||
    window.navigator.standalone
  );
}

window.addEventListener("beforeinstallprompt", (e) => {
  e.preventDefault();
  deferredPrompt = e;
  if (installBanner && !localStorage.getItem("pwa-dismissed")) {
    setTimeout(() => {
      installBanner.classList.remove("-translate-y-40", "opacity-0");
    }, 2000);
  }
});

function triggerPwaInstall() {
  if (deferredPrompt) {
    deferredPrompt.prompt();
    deferredPrompt.userChoice.then((choiceResult) => {
      if (choiceResult.outcome === "accepted") {
        console.log("User accepted the install prompt");
      } else {
        console.log("User dismissed the install prompt");
      }
      deferredPrompt = null;
      dismissPwaInstall();
    });
  }
}

function dismissPwaInstall() {
  if (installBanner) {
    installBanner.classList.add("-translate-y-40", "opacity-0");
    localStorage.setItem("pwa-dismissed", "true");
  }
}

// Branch Selection Functions
function handleBranchCardKey(event, branchId) {
  if (event.target !== event.currentTarget) return;
  if (event.key !== "Enter" && event.key !== " ") return;
  event.preventDefault();
  selectBranch(branchId);
}

function selectBranch(branchId) {
  const branch = branches.find(b => b.id === branchId);
  if (!branch) return;

  selectedBranch = branch;
  localStorage.setItem("selectedBranchId", branchId);
  unlockPageScroll();

  const landingPage = document.getElementById("branch-landing-page");
  const mainLayout = document.getElementById("main-app-layout");

  if (mainLayout) {
    mainLayout.style.display = "block";
    mainLayout.classList.remove("hidden");
    requestAnimationFrame(() => {
      mainLayout.classList.remove("opacity-0");
    });
  }

  updateBranchUI();
  scheduleMenuRender();

  if (landingPage) {
    landingPage.classList.add("opacity-0", "pointer-events-none");
    setTimeout(() => {
      landingPage.style.display = "none";
    }, 250);
  }
}

function showBranchAddress(branchId) {
  const branch = branches.find(b => b.id === branchId);
  if (!branch) return;

  const modalTitle = document.getElementById("landing-branch-modal-title");
  const modalText = document.getElementById("landing-branch-modal-text");
  const modalPhoneList = document.getElementById("landing-branch-modal-phones");
  const overlay = document.getElementById("landing-branch-modal-overlay");
  const modal = document.getElementById("landing-branch-modal");

  if (modalTitle) modalTitle.innerText = branch.name;
  if (modalText) modalText.innerText = branch.address;
  if (modalPhoneList) {
    modalPhoneList.innerHTML = `
      <li class="flex items-center gap-2">
        <span class="material-symbols-outlined text-sm text-primary">call</span>
        <span>الخط الساخن والدليفري: <a href="tel:${branch.phone}" class="underline font-bold text-primary">${branch.phone}</a></span>
      </li>
      <li class="flex items-center gap-2 mt-2">
        <span class="material-symbols-outlined text-sm text-[#25D366]">chat</span>
        <span>الطلب عبر واتساب: <a href="https://wa.me/${branch.whatsapp}" target="_blank" class="underline font-bold text-[#25D366]">${branch.phone}</a></span>
      </li>
      <li class="mt-4 pt-4 border-t border-white/10">
        <a href="${branch.mapLink}" target="_blank" class="w-full text-center py-2.5 bg-primary text-white font-bold text-xs rounded-xl hover:bg-primary-container transition-all flex items-center justify-center gap-1.5">
          <span class="material-symbols-outlined text-sm">map</span>
          <span>افتح الموقع في خرائط جوجل 🗺️</span>
        </a>
      </li>
    `;
  }

  if (overlay && modal) {
    overlay.classList.remove("hidden");
    modal.classList.remove("hidden");
    setTimeout(() => {
      overlay.classList.add("opacity-100");
      modal.classList.remove("scale-95", "opacity-0");
    }, 10);
  }
}

function closeLandingBranchModal() {
  const overlay = document.getElementById("landing-branch-modal-overlay");
  const modal = document.getElementById("landing-branch-modal");
  if (!overlay || !modal) return;

  overlay.classList.remove("opacity-100");
  modal.classList.add("scale-95", "opacity-0");
  setTimeout(() => {
    overlay.classList.add("hidden");
    modal.classList.add("hidden");
  }, 300);
}

function changeBranch() {
  localStorage.removeItem("selectedBranchId");
  selectedBranch = null;
  window.scrollTo({ top: 0, behavior: "auto" });
  unlockPageScroll();

  const landingPage = document.getElementById("branch-landing-page");
  const mainLayout = document.getElementById("main-app-layout");

  if (landingPage) {
    landingPage.style.display = "block";
    landingPage.classList.add("opacity-0");
    landingPage.scrollTop = 0;
    setTimeout(() => {
      landingPage.classList.remove("opacity-0", "pointer-events-none");
    }, 20);
  }

  if (mainLayout) {
    mainLayout.classList.add("opacity-0");
    setTimeout(() => {
      mainLayout.style.display = "none";
    }, 250);
  }

}

function updateBranchUI() {
  if (!selectedBranch) return;

  const activeBranchNameEl = document.getElementById("active-branch-name");
  if (activeBranchNameEl) {
    activeBranchNameEl.innerText = selectedBranch.name;
  }

  const heroBranchNameEl = document.getElementById("hero-branch-name");
  if (heroBranchNameEl) {
    heroBranchNameEl.innerText = selectedBranch.name;
  }

  const callLinks = document.querySelectorAll(".branch-call-link");
  callLinks.forEach(link => {
    link.href = `tel:${selectedBranch.phone}`;
  });

  const branchAddressEl = document.getElementById("branch-address-text");
  if (branchAddressEl) {
    branchAddressEl.innerText = selectedBranch.address;
  }

  const footerBranchPhoneEl = document.getElementById("footer-branch-phone");
  if (footerBranchPhoneEl) {
    footerBranchPhoneEl.innerText = selectedBranch.phone;
    footerBranchPhoneEl.parentElement.href = `tel:${selectedBranch.phone}`;
  }
  const footerBranchAddressEl = document.getElementById("footer-branch-address");
  if (footerBranchAddressEl) {
    footerBranchAddressEl.innerText = selectedBranch.address;
  }
  const footerBranchMapLinkEl = document.getElementById("footer-branch-map-link");
  if (footerBranchMapLinkEl) {
    footerBranchMapLinkEl.href = selectedBranch.mapLink;
  }

  updateCartUI();
}

function initBranchSelector() {
  const savedBranchId = localStorage.getItem("selectedBranchId");
  if (savedBranchId) {
    const branch = branches.find(b => b.id === savedBranchId);
    if (branch) {
      selectedBranch = branch;
      updateBranchUI();
      const landingPage = document.getElementById("branch-landing-page");
      const mainLayout = document.getElementById("main-app-layout");
      if (landingPage) landingPage.style.display = "none";
      if (mainLayout) {
        mainLayout.style.display = "block";
        mainLayout.classList.remove("hidden");
        mainLayout.classList.remove("opacity-0");
      }
      unlockPageScroll();
      return;
    }
  }

  const landingPage = document.getElementById("branch-landing-page");
  const mainLayout = document.getElementById("main-app-layout");
  if (landingPage) {
    landingPage.style.display = "block";
    landingPage.classList.remove("opacity-0", "pointer-events-none");
  }
  if (mainLayout) {
    mainLayout.style.display = "none";
    mainLayout.classList.add("opacity-0");
  }
  unlockPageScroll();
}

function initCustomModalDrag() {
  const modal = document.getElementById("custom-modal");
  const overlay = document.getElementById("custom-modal-overlay");
  const scrollContainer = document.getElementById("modal-scroll-container");

  if (!modal || !overlay) return;

  let startY = 0;
  let currentY = 0;
  let isDragging = false;

  modal.addEventListener("touchstart", (e) => {
    const target = e.target;
    // Don't drag if user is touching interactive items
    if (
      target.closest("button") || 
      target.closest("input") || 
      target.closest("label") ||
      target.closest("#modal-image-dots") ||
      target.closest("#modal-prev-btn") ||
      target.closest("#modal-next-btn")
    ) {
      return;
    }

    // If touching inside scroll container, only drag if scrolled to top
    if (scrollContainer && scrollContainer.contains(target) && scrollContainer.scrollTop > 0) {
      return;
    }

    startY = e.touches[0].clientY;
    currentY = startY;
    isDragging = true;
    
    modal.style.transition = "none";
    overlay.style.transition = "none";
  }, { passive: true });

  modal.addEventListener("touchmove", (e) => {
    if (!isDragging) return;

    currentY = e.touches[0].clientY;
    const deltaY = currentY - startY;
    const dragDistance = Math.max(0, deltaY);

    if (dragDistance > 0) {
      if (e.cancelable) e.preventDefault();
      
      modal.style.transform = `translateY(${dragDistance}px)`;
      const progress = Math.max(0, 1 - dragDistance / modal.offsetHeight);
      overlay.style.opacity = progress.toString();
    } else {
      modal.style.transform = "";
      overlay.style.opacity = "";
    }
  }, { passive: false });

  modal.addEventListener("touchend", () => {
    if (!isDragging) return;
    isDragging = false;

    modal.style.transition = "";
    overlay.style.transition = "";

    const deltaY = currentY - startY;

    if (deltaY > 120) {
      modal.style.transform = "translateY(100%)";
      overlay.style.opacity = "0";
      closeCustomization();
      setTimeout(() => {
        modal.style.transform = "";
        overlay.style.opacity = "";
      }, 300);
    } else {
      modal.style.transform = "translateY(0)";
      overlay.style.opacity = "1";
      setTimeout(() => {
        modal.style.transform = "";
        overlay.style.opacity = "";
      }, 300);
    }
  });
}

// Initialization
document.addEventListener("DOMContentLoaded", () => {
  initBranchSelector();
  renderCategoriesNav();
  initCustomModalDrag();
  if (selectedBranch) {
    scheduleMenuRender();
  }
  updateCartUI();

  // Register Service Worker
  if ("serviceWorker" in navigator) {
    navigator.serviceWorker
      .register("sw.js")
      .then((reg) =>
        console.log("Service Worker registered successfully!", reg.scope),
      )
      .catch((err) => console.log("Service Worker registration failed:", err));
  }

  // Show iOS Safari installation banner if on iOS, not installed, and not dismissed
  if (
    isiOS() &&
    !isStandalone() &&
    installBanner &&
    !localStorage.getItem("pwa-dismissed")
  ) {
    const bannerTitle = installBanner.querySelector("h4");
    const bannerDesc = installBanner.querySelector("p");
    const installBtn = installBanner.querySelector("button");

    if (bannerTitle && bannerDesc && installBtn) {
      bannerTitle.innerText = "ثبت التطبيق على الآيفون! 🍏";
      bannerDesc.innerHTML =
        "اضغط على زر المشاركة <span class='material-symbols-outlined text-xs align-middle'>ios_share</span> ثم اختر *إضافة للشاشة الرئيسية*.";
      installBtn.classList.add("hidden");
    }

    setTimeout(() => {
      installBanner.classList.remove("-translate-y-40", "opacity-0");
    }, 3000);
  }
});
