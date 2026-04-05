export type IconName = "sun" | "book" | "compass";

export interface Services {
  id: string;
  title: string;
  description: string;
  iconName: IconName;
}

export const services: Services[] = [
  {
    id: "burclar",
    title: "Günlük Burç Yorumları",
    description:
      "Gezegenlerin bugünkü konumu senin için ne fısıldıyor? Aşk, iş ve sağlık yorumlarını keşfet.",
    iconName: "sun",
  },
  {
    id: "tarot",
    title: "Tarot Rehberi",
    description: "Üç kartlık açılım ile geçmiş, şimdi ve geleceğin enerjilerini analiz et.",
    iconName: "book",
  },
  {
    id: "dogum-haritası",
    title: "Doğum Haritası",
    description:
      "Doğduğun andaki gökyüzü senin karakterini nasıl şekillendirdi? Derinlemesine analiz.",
    iconName: "compass",
  },
];
