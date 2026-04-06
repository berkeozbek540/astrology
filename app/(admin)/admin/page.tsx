"use client";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Eye, EyeOff } from "lucide-react";
import { useState } from "react";
import { loginAction } from "./actions";

const AdminPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(formData: FormData) {
    const result = await loginAction(formData);
    if (result?.error) setError(result.error);
  }
  return (
    <div className="flex min-h-screen items-center justify-center bg-kahve p-8">
      <div className="w-full max-w-[450px] rounded-4xl border border-white/10 bg-white/5 p-12 shadow-2xl backdrop-blur-md">
        <h2 className="text-2xl font-bold text-white/90 uppercase tracking-[0.25em] text-center mb-12">
          Yönetici Paneli
        </h2>
        <div className="space-y-10">
          <form className="space-y-8" action={handleSubmit}>
            {error && (
              <p className="bg-red-400 text-white text-center p-4 rounded-xl text-xl">{error}</p>
            )}
            <div className="space-y-1">
              <label
                htmlFor="username"
                className="block text-[11px] font-bold tracking-[0.25em] text-white/50 uppercase">
                Kullanıcı Adı
              </label>
              <Input
                id="username"
                name="username"
                type="text"
                className="h-auto border-0 border-b border-white/20 bg-transparent px-0 py-2 text-white rounded-none focus-visible:ring-0 focus-visible:border-bej transition-colors"
              />
            </div>
            <div className="space-y-1">
              <label
                htmlFor="password"
                className="block text-[11px] font-bold tracking-[0.25em] text-white/50 uppercase">
                Şifre
              </label>
              <div className="relative group">
                <Input
                  id="password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  className="h-auto border-0 border-b border-white/20 bg-transparent px-0 py-2 pr-10 text-white rounded-none focus-visible:ring-0 focus-visible:border-bej transition-colors w-full"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-0 bottom-2 text-white/40 hover:text-bej transition-colors focus:outline-none hover:cursor-pointer">
                  {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                </button>
              </div>
            </div>
            <Button
              type="submit"
              className="w-full h-14 rounded-2xl bg-bej hover:bg-altin hover:text-white text-gray-800 font-bold tracking-[0.15em] uppercase transition-all duration-300 hover:cursor-pointer">
              Giriş Yap
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AdminPage;
