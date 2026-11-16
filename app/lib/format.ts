// ইংরেজি অঙ্ককে বাংলা অঙ্কে (৪৩) রূপান্তর
export const bn = (n: number | string) =>
    String(n).replace(/\d/g, (d) => "০১২৩৪৫৬৭৮৯"[Number(d)]);