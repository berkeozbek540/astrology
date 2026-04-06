import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Credentials({
      credentials: {
        username: { label: "Kullanıcı Adı" },
        password: { label: "Şifre", type: "password" },
      },
      authorize: async (credentials) => {
        const username = credentials?.username;
        const password = credentials?.password;

        if (username === process.env.ADMIN_USERNAME && password === process.env.ADMIN_PASSWORD) {
          return { id: "1", name: "Admin" };
        }

        return null;
      },
    }),
  ],
  pages: {
    signIn: "/admin",
  },
});
