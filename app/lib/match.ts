import { CATEGORIES, categoryLabel } from "./options";
import { Filters, passes, sameAge } from "./filters";
import { CatalogItem } from "./types";

export const pairsOf = (category: string) =>
    CATEGORIES.find((c) => c.key === category)?.pairs ?? [];

function hsl(hex: string) {
    const r = parseInt(hex.slice(1, 3), 16) / 255;
    const g = parseInt(hex.slice(3, 5), 16) / 255;
    const b = parseInt(hex.slice(5, 7), 16) / 255;
    const mx = Math.max(r, g, b);
    const mn = Math.min(r, g, b);
    const l = (mx + mn) / 2;
    const d = mx - mn;
    let h = 0;
    let s = 0;
    if (d) {
        s = d / (1 - Math.abs(2 * l - 1));
        h =
            mx === r ? ((g - b) / d) % 6 : mx === g ? (b - r) / d + 2 : (r - g) / d + 4;
        h = (h * 60 + 360) % 360;
    }
    return { h, s, l };
}

type C = ReturnType<typeof hsl>;
const isEarth = (x: C) => x.h > 25 && x.h < 50 && x.s < 0.45 && x.l > 0.65;
const isNeutral = (x: C) =>
    x.s < 0.18 || x.l < 0.14 || x.l > 0.88 || isEarth(x);
const isNavy = (x: C) => x.h > 200 && x.h < 240 && x.l < 0.35 && x.s > 0.25;

// দুটো পোশাকের স্কোর (০–৯৮) ও কারণ
export function score(a: CatalogItem, b: CatalogItem, occasion: string) {
    const A = hsl(a.color);
    const B = hsl(b.color);
    let s: number;
    let reason: string;

    if ((isNavy(A) && isEarth(B)) || (isNavy(B) && isEarth(A))) {
        s = 95;
        reason = "নেভি ব্লুর সাথে বেইজ ক্লাসিক জুটি";
    } else {
        const na = isNeutral(A);
        const nb = isNeutral(B);
        if (na && nb) {
            s = 78;
            reason = "দুটোই নিউট্রাল রঙ, সাদামাটা কিন্তু নিরাপদ";
        } else if (na || nb) {
            s = 88;
            reason = "নিউট্রাল রঙ প্রায় সব রঙের সাথে মানায়";
        } else {
            let d = Math.abs(A.h - B.h);
            d = Math.min(d, 360 - d);
            if (d < 30) {
                s = 72;
                reason = "একই রঙের পরিবার, মোনোক্রোম লুক";
            } else if (d < 70) {
                s = 80;
                reason = "কাছাকাছি রঙ, শান্ত ও মানানসই";
            } else if (d >= 150) {
                s = 86;
                reason = "বিপরীত রঙ, চোখে পড়ার মতো কম্বিনেশন";
            } else {
                s = 58;
                reason = "রঙ দুটো একটু ঝগড়া করে, সাবধানে পরুন";
            }
        }
    }

    if (Math.abs(A.l - B.l) > 0.25) s += 4; // হালকা-গাঢ় বৈপরীত্য
    if (
        occasion !== "সব" &&
        a.occasions.includes(occasion) &&
        b.occasions.includes(occasion)
    )
        s += 3; // একই অনুষ্ঠানের জন্য মানানসই

    return { score: Math.min(98, s), reason };
}

export interface MatchGroup {
    category: string;
    label: string;
    list: { item: CatalogItem; score: number; reason: string }[];
}

// একটা পোশাকের সাথে কোন কোন পোশাক মানাবে, ক্যাটাগরি অনুযায়ী সাজানো
export function getMatches(
    base: CatalogItem,
    all: CatalogItem[],
    filters: Filters,
    perGroup = 3
): MatchGroup[] {
    return pairsOf(base.category)
        .map((cat) => ({
            category: cat,
            label: categoryLabel(cat),
            list: all
                .filter(
                    (i) => i.category === cat && passes(i, filters) && sameAge(base, i)
                )
                .map((i) => ({ item: i, ...score(base, i, filters.occasion) }))
                .sort((x, y) => y.score - x.score)
                .slice(0, perGroup),
        }))
        .filter((g) => g.list.length > 0);
}