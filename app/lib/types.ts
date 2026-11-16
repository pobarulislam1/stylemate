export type Gender = "m" | "f" | "u"; // ছেলে, মেয়ে, দুজনেরই

export interface CatalogItem {
    id: string;
    name: string;
    category: string; // যেমন "shirt"
    color: string; // hex, যেমন "#1f2f5c"
    gender: Gender;
    occasions: string[];
    seasons: string[]; // খালি = সব মৌসুম
    ageGroups: string[]; // খালি = তরুণ, প্রাপ্তবয়স্ক, প্রবীণ
    islamic: boolean;
    imageUrl: string; // খালি হলে আইকন দেখাবে
    published: boolean;
    createdAt: number;
}

export interface Category {
    key: string;
    label: string;
    pairs: string[]; // কোন কোন ক্যাটাগরির সাথে মিলিয়ে দেখাবে
}

export interface SeasonInfo {
    icon: string;
    tip: string;
    colors: string[];
}