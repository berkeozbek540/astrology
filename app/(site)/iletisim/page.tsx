"use client";
import { Card } from "@/components/ui/card";
import Link from "next/link";
import Image from "next/image";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { toast } from "sonner";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";

const contactSchema = z.object({
  name: z.string().min(2, "İsim en az 2 karakter olmalı"),
  email: z.email("Geçerli bir email girin"),
  message: z.string().min(10, "Mesaj en az 10 karakter olmalı"),
});

type ContactFormData = z.infer<typeof contactSchema>;

const page = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) throw new Error();

      toast.success("Mesajınız iletildi, en kısa sürede dönüş yapılacak.");
      reset();
    } catch {
      toast.error("Bir hata oluştu, lütfen tekrar deneyin.");
    } finally {
      setIsSubmitting(false);
    }
  };
  return (
    <div className="container mx-auto p-8 mb-8">
      <div className="flex flex-col justify-center items-center">
        <span className="text-altin font-bold text-sm">İLETİŞİM</span>
        <h1 className="text-6xl ">Bize Ulaşın</h1>
        <span className="w-16 h-0.5 bg-altin my-4"></span>
        <p className="text-lg text-gray-500">
          Sorularınız veya seans talepleriniz için mesaj bırakabilirsiniz
        </p>
        <div className="flex justify-center mt-8"></div>
      </div>
      <Card className="w-full md:w-2/3 mx-auto p-6">
        <div className="md:grid md:grid-cols-3 gap-8">
          <div className="col-span-1 border-r border-gray-200 pr-6">
            <h2 className="text-2xl font-bold mb-4">İletişim Bilgileri</h2>
            <p className="text-gray-500">
              Yıldızların rehberliğinde bir yolculuğa çıkmak için bize her zaman yazabilirsiniz.
            </p>
            <div className="flex items-center gap-3 my-4">
              <span className="text-altin">✦</span>
              <span className="text-sm">Bireysel Doğum Haritası Analizi</span>
            </div>
            <div className="flex items-center gap-3 my-4">
              <span className="text-altin">✦</span>
              <span className="text-sm">Yıllık Öngörü & Transitler</span>
            </div>
            <div className="flex flex-col">
              <span className="text-altin font-bold">Sosyal Medya</span>
              <div className="flex gap-4 my-4">
                <Link href="https://www.instagram.com/astrolog.melistezcan/" target="_blank">
                  <Image
                    src="/icons/social/instagram.svg"
                    alt="Instagram"
                    width={24}
                    height={24}
                    className="w-10 h-10 rounded-full bg-bej p-2 transition-transform duration-200 hover:scale-110 hover:bg-kahve"
                  />
                </Link>
                <Link href="https://wa.me/905545153251" target="_blank">
                  <Image
                    src="/icons/social/whatsapp.svg"
                    alt="Whatsapp"
                    width={24}
                    height={24}
                    className="w-10 h-10 rounded-full bg-bej p-2 transition-transform duration-200 hover:scale-110 hover:bg-kahve"
                  />
                </Link>
              </div>
            </div>
          </div>
          <div className="col-span-2">
            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4 mt-4 md:mt-0">
              <div>
                <Label htmlFor="name" className="text-sm font-medium mb-1 text-slate-500">
                  İsim Soyisim
                </Label>
                <Input
                  placeholder="İsim Soyisim"
                  {...register("name")}
                  className="border-altin/80 py-6 px-4 focus-visible:ring-altin"
                />
                {errors.name && <p className="text-red-400 text-xs mt-1">{errors.name.message}</p>}
              </div>

              <div>
                <Label htmlFor="email" className="text-sm font-medium mb-1 text-slate-500">
                  E-Posta
                </Label>
                <Input
                  placeholder="E-Posta"
                  type="email"
                  {...register("email")}
                  className="border-altin/80 py-6 px-4 focus-visible:ring-altin"
                />
                {errors.email && (
                  <p className="text-red-400 text-xs mt-1">{errors.email.message}</p>
                )}
              </div>
              <div>
                <Label htmlFor="message" className="text-sm font-medium mb-1 text-slate-500">
                  Mesaj
                </Label>
                <Textarea
                  placeholder="Mesajınız..."
                  rows={5}
                  {...register("message")}
                  className="border-altin/80 py-6 px-4 focus-visible:ring-altin resize-none"
                />
                {errors.message && (
                  <p className="text-red-400 text-xs mt-1">{errors.message.message}</p>
                )}
              </div>
              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full p-8 bg-koyu text-krem hover:bg-kahve transition-colors duration-200">
                {isSubmitting ? "Gönderiliyor..." : "Mesaj Gönder"}
              </Button>
            </form>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default page;
