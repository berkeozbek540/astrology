export interface ZodiacSign {
  id: string;
  slug: string;
  name: string;
  iconName: string;
  element: "ateş" | "toprak" | "hava" | "su";
  planet: string;
  dates: string;
}

export const zodiacSigns: ZodiacSign[] = [
  {
    id: "aries",
    slug: "koc",
    name: "Koç",
    iconName: "/icons/zodiac/koc.svg",
    element: "ateş",
    planet: "Mars",
    dates: "21 Mart - 19 Nisan",
  },
  {
    id: "taurus",
    slug: "boga",
    name: "Boğa",
    iconName: "/icons/zodiac/boga.svg",
    element: "toprak",
    planet: "Venüs",
    dates: "20 Nisan - 20 Mayıs",
  },
  {
    id: "gemini",
    slug: "ikizler",
    name: "İkizler",
    iconName: "/icons/zodiac/ikizler.svg",
    element: "hava",
    planet: "Merkür",
    dates: "21 Mayıs - 20 Haziran",
  },
  {
    id: "cancer",
    slug: "yengec",
    name: "Yengeç",
    iconName: "/icons/zodiac/yengec.svg",
    element: "su",
    planet: "Ay",
    dates: "21 Haziran - 22 Temmuz",
  },
  {
    id: "leo",
    slug: "aslan",
    name: "Aslan",
    iconName: "/icons/zodiac/aslan.svg",
    element: "ateş",
    planet: "Güneş",
    dates: "23 Temmuz - 22 Ağustos",
  },
  {
    id: "virgo",
    slug: "basak",
    name: "Başak",
    iconName: "/icons/zodiac/basak.svg",
    element: "toprak",
    planet: "Merkür",
    dates: "23 Ağustos - 22 Eylül",
  },
  {
    id: "libra",
    slug: "terazi",
    name: "Terazi",
    iconName: "/icons/zodiac/terazi.svg",
    element: "hava",
    planet: "Venüs",
    dates: "23 Eylül - 22 Ekim",
  },
  {
    id: "scorpio",
    slug: "akrep",
    name: "Akrep",
    iconName: "/icons/zodiac/akrep.svg",
    element: "su",
    planet: "Plüton",
    dates: "23 Ekim - 21 Kasım",
  },
  {
    id: "sagittarius",
    slug: "yay",
    name: "Yay",
    iconName: "/icons/zodiac/yay.svg",
    element: "ateş",
    planet: "Jüpiter",
    dates: "22 Kasım - 21 Aralık",
  },
  {
    id: "capricorn",
    slug: "oglak",
    name: "Oğlak",
    iconName: "/icons/zodiac/oglak.svg",
    element: "toprak",
    planet: "Satürn",
    dates: "22 Aralık - 19 Ocak",
  },
  {
    id: "aquarius",
    slug: "kova",
    name: "Kova",
    iconName: "/icons/zodiac/kova.svg",
    element: "hava",
    planet: "Uranüs",
    dates: "20 Ocak - 18 Şubat",
  },
  {
    id: "pisces",
    slug: "balik",
    name: "Balık",
    iconName: "/icons/zodiac/balik.svg",
    element: "su",
    planet: "Neptün",
    dates: "19 Şubat - 20 Mart",
  },
];
