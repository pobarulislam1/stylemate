import { CatalogItem } from "./types";

export interface Filters {
    gender: "m" | "f";
    occasion: string; // "সব" বা অনুষ্ঠানের নাম
    season: string;
    age: string; // "সব" বা বয়সের নাম
    islamic: boolean;
}

const ADULT = ["তরুণ", "প্রাপ্তবয়স্ক", "প্রবীণ"];

export const agesOf = (i: CatalogItem) =>
    i.ageGroups.length ? i.ageGroups : ADULT;

export const kidOnly = (i: CatalogItem) =>
    agesOf(i).length === 1 && agesOf(i)[0] === "শিশু";

// শিশুর পোশাকের সাথে শিশুর পোশাক, বড়দের সাথে বড়দের
export const sameAge = (a: CatalogItem, b: CatalogItem) =>
    kidOnly(a) ? agesOf(b).includes("শিশু") : !kidOnly(b);

export function passes(i: CatalogItem, f: Filters) {
    if (i.gender !== "u" && i.gender !== f.gender) return false;
    if (f.occasion !== "সব" && !i.occasions.includes(f.occasion)) return false;
    if (i.seasons.length && !i.seasons.includes(f.season)) return false;
    if (f.age !== "সব" && !agesOf(i).includes(f.age)) return false;
    if (f.islamic && !i.islamic) return false;
    return true;
}

const rgb = (h: string) =>
    [1, 3, 5].map((p) => parseInt(h.slice(p, p + 2), 16));

// দুটো রঙ কাছাকাছি কি না (রঙ দিয়ে ফিল্টারের জন্য)
export function near(a: string, b: string) {
    const x = rgb(a);
    const y = rgb(b);
    return Math.hypot(x[0] - y[0], x[1] - y[1], x[2] - y[2]) < 70;
}

// নভেম্বর–ফেব্রুয়ারি শীত, মার্চ–মে গরম, জুন–অক্টোবর বর্ষা
export function currentSeason(): string {
    const m = new Date().getMonth();
    if (m >= 10 || m <= 1) return "শীত";
    if (m <= 4) return "গরম";
    return "বর্ষা";
}