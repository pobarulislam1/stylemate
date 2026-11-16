import { CatalogItem, Gender } from "./types";

const U = "ভার্সিটি", O = "অফিস", E = "ঈদ", W = "বিয়ে";
const WIN = ["শীত"], HOT = ["গরম"], RAIN = ["বর্ষা"];
const ALL = ["শিশু", "তরুণ", "প্রাপ্তবয়স্ক", "প্রবীণ"];
const KID = ["শিশু"];
const SR = ["প্রাপ্তবয়স্ক", "প্রবীণ"];
const NOKID = ["শিশু", "তরুণ", "প্রাপ্তবয়স্ক"];

type Extra = Partial<Pick<CatalogItem, "seasons" | "ageGroups" | "islamic">>;

const item = (
    n: number,
    name: string,
    category: string,
    color: string,
    gender: Gender,
    occasions: string[],
    x: Extra = {}
): CatalogItem => ({
    id: `s${n}`,
    name,
    category,
    color,
    gender,
    occasions,
    seasons: [],
    ageGroups: [],
    islamic: false,
    imageUrl: "",
    published: true,
    createdAt: 1000 - n,
    ...x,
});

export const SAMPLE_ITEMS: CatalogItem[] = [
    item(1, "নেভি শার্ট", "shirt", "#1f2f5c", "m", [U, O]),
    item(2, "সাদা শার্ট", "shirt", "#f5f5f5", "m", [U, O, E]),
    item(3, "মেরুন শার্ট", "shirt", "#7a1f2b", "m", [U, E]),
    item(4, "হালকা সবুজ শার্ট", "shirt", "#a8d5ba", "m", [U, O], { seasons: ["গরম", "বর্ষা"] }),
    item(5, "বেইজ প্যান্ট", "pant", "#d8c3a0", "m", [U, O]),
    item(6, "কালো প্যান্ট", "pant", "#1c1c1c", "m", [U, O, E]),
    item(7, "নেভি প্যান্ট", "pant", "#22305a", "m", [O]),
    item(8, "সাদা পাঞ্জাবি", "panjabi", "#f4f1e8", "m", [E, W], { ageGroups: ALL, islamic: true }),
    item(9, "মেরুন পাঞ্জাবি", "panjabi", "#7a1f2b", "m", [E, W], { ageGroups: ALL, islamic: true }),
    item(10, "সবুজ পাঞ্জাবি", "panjabi", "#1f6b4f", "m", [E, W], { ageGroups: ALL, islamic: true }),
    item(11, "সাদা পায়জামা", "pajama", "#f4f4f4", "m", [E, W], { ageGroups: ALL, islamic: true }),
    item(12, "কালো পায়জামা", "pajama", "#1a1a1a", "m", [E, W], { ageGroups: ALL, islamic: true }),
    item(13, "লাল শাড়ি", "saree", "#b3202e", "f", [W, E], { ageGroups: SR }),
    item(14, "সবুজ শাড়ি", "saree", "#1f6b4f", "f", [W, E], { ageGroups: SR }),
    item(15, "কালো ব্লাউজ", "blouse", "#1a1a1a", "f", [W, E], { ageGroups: SR }),
    item(16, "সাদা ব্লাউজ", "blouse", "#f5f5f5", "f", [W, E], { ageGroups: SR }),
    item(17, "বাদামি জুতা", "shoes", "#6b4226", "u", [U, O, E], { islamic: true }),
    item(18, "কালো জুতা", "shoes", "#161616", "u", [O, E, W], { islamic: true }),
    item(19, "সাদা স্নিকার", "shoes", "#fafafa", "u", [U], { ageGroups: ["শিশু", "তরুণ"] }),
    item(20, "কালো জ্যাকেট", "jacket", "#222222", "u", [U, O], { seasons: WIN }),
    item(21, "ধূসর সোয়েটার", "jacket", "#9a9ea6", "u", [U, O], { seasons: WIN }),
    item(22, "বাদামি শাল", "jacket", "#8a5a3b", "f", [U, E, W], { seasons: WIN }),
    item(23, "হলুদ রেনকোট", "jacket", "#f2c230", "u", [U, O], { seasons: RAIN, ageGroups: NOKID }),
    item(24, "রুপালি ঘড়ি", "watch", "#c0c4cc", "u", [U, O, E, W]),
    item(25, "কালো ঘড়ি", "watch", "#2a2a2a", "m", [U, O]),
    item(26, "কালো সানগ্লাস", "glasses", "#151515", "u", [U, E], { seasons: HOT }),
    item(27, "লাল কুর্তি", "kurti", "#c22c3d", "f", [U, E]),
    item(28, "নীল কুর্তি", "kurti", "#2f5aa8", "f", [U, O]),
    item(29, "কালো সালোয়ার", "salwar", "#1a1a1a", "f", [U, O, E]),
    item(30, "নীল ওড়না", "orna", "#6aa3d9", "f", [U, O, E]),
    item(31, "কালো ব্যাগ", "bag", "#1a1a1a", "f", [U, O, E], { islamic: true }),
    item(32, "সোনালি গয়না", "jewel", "#d4a93c", "f", [E, W]),
    item(33, "সাদা জুব্বা", "jubba", "#f4f1e8", "m", [E, W, U], { islamic: true }),
    item(34, "সাদা টুপি", "topi", "#fafafa", "m", [E, W, U, O], { ageGroups: ALL, islamic: true }),
    item(35, "কালো বোরকা", "borka", "#161616", "f", [U, O, E], { islamic: true }),
    item(36, "নেভি বোরকা", "borka", "#1f2f5c", "f", [U, O, E], { islamic: true }),
    item(37, "সাদা হিজাব", "hijab", "#f6f6f6", "f", [U, O, E], { islamic: true }),
    item(38, "বেইজ হিজাব", "hijab", "#d8c3a0", "f", [U, O, E], { islamic: true }),
    item(39, "নীল টি-শার্ট", "shirt", "#3b82d6", "m", [U, E], { ageGroups: KID }),
    item(40, "নেভি হাফপ্যান্ট", "pant", "#2b3a67", "m", [U, E], { ageGroups: KID, seasons: ["গরম", "বর্ষা"] }),
    item(41, "গোলাপি ফ্রক", "kurti", "#f08cb0", "f", [U, E], { ageGroups: KID }),
    item(42, "সাদা লেগিংস", "salwar", "#f4f4f4", "f", [U, E], { ageGroups: KID }),
    item(43, "লাল স্নিকার", "shoes", "#d33a3a", "u", [U, E], { ageGroups: KID }),
];