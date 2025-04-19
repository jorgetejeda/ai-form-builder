import Header from "@/components/ui/header";
import FormGenerator from "./form-generator";
import { SessionProvider } from "next-auth/react";


export default function Home() {
  return (
    <SessionProvider>
      <Header />
      <main className="min-h-screen flex flex-col items-center justify-between p-24">
        <FormGenerator />
      </main>
    </SessionProvider>
  );
}
