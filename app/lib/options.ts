import { Category, SeasonInfo } from "./types";

const C = (key: string, label: string, pairs: string[]): Category => ({
    key,
    label,
    pairs,
});

export const CATEGORIES: Category[] = [
    C("shirt", "শার্ট", ["pant", "shoes", "jacket", "watch", "glasses"]),
    C("pant", "প্যান্ট", ["shirt", "shoes", "jacket"]),
    C("panjabi", "পাঞ্জাবি", ["pajama", "shoes", "topi", "watch", "jacket"]),
    C("pajama", "পায়জামা", ["panjabi", "jubba", "shoes"]),
    C("saree", "শাড়ি", ["blouse", "shoes", "bag", "jewel", "jacket"]),
    C("blouse", "ব্লাউজ", ["saree", "shoes", "jewel"]),
    C("kurti", "কুর্তি/ফ্রক", ["salwar", "orna", "shoes", "bag", "jewel", "jacket"]),
    C("salwar", "সালোয়ার/লেগিংস", ["kurti", "orna", "shoes"]),
    C("orna", "ওড়না", ["kurti", "salwar"]),
    C("jacket", "জ্যাকেট/সোয়েটার/রেনকোট", ["shirt", "pant", "kurti", "saree", "shoes"]),
    C("watch", "ঘড়ি", ["shirt", "panjabi"]),
    C("glasses", "সানগ্লাস", ["shirt", "panjabi", "kurti"]),
    C("bag", "ব্যাগ", ["saree", "kurti", "borka"]),
    C("jewel", "গয়না", ["saree", "kurti"]),
    C("jubba", "জুব্বা", ["topi", "pajama", "shoes"]),
    C("topi", "টুপি", ["jubba", "panjabi"]),
    C("borka", "বোরকা", ["hijab", "shoes", "bag"]),
    C("hijab", "হিজাব", ["borka", "kurti"]),
    C("shoes", "জুতা", ["shirt", "pant", "panjabi", "saree", "kurti", "borka", "jubba"]),
];

export const categoryLabel = (key: string) =>
    CATEGORIES.find((c) => c.key === key)?.label ?? key;

export const OCCASIONS = ["ভার্সিটি", "অফিস", "ঈদ", "বিয়ে"];

export const AGES: [string, string][] = [
    ["শিশু", "শিশু (০–১২)"],
    ["তরুণ", "তরুণ (১৩–২৫)"],
    ["প্রাপ্তবয়স্ক", "প্রাপ্তবয়স্ক (২৬–৫৯)"],
    ["প্রবীণ", "প্রবীণ (৬০+)"],
];

export const SEASONS = ["শীত", "গরম", "বর্ষা"];

export const SEASON_INFO: Record<string, SeasonInfo> = {
    শীত: {
        icon: "❄️",
        tip: "শীতে গাঢ় রঙ ও লেয়ারিং: শার্টের উপর সোয়েটার বা জ্যাকেট, নিচে ফুল প্যান্ট।",
        colors: ["#1f2f5c", "#7a1f2b", "#5b6b3a", "#222222", "#8a5a3b"],
    },
    গরম: {
        icon: "☀️",
        tip: "গরমে হালকা রঙ ও সুতির পোশাক। রোদে সানগ্লাস সাথে রাখুন।",
        colors: ["#fbfbfb", "#8fb8de", "#a8d5ba", "#f0d46a", "#d8c3a0"],
    },
    বর্ষা: {
        icon: "🌧️",
        tip: "বর্ষায় দ্রুত শুকায় এমন পোশাক, গাঢ় রঙের নিচের অংশ, সাথে রেনকোট।",
        colors: ["#f2c230", "#2e6fd0", "#1f6b4f", "#1b1b1b", "#d8c3a0"],
    },
};