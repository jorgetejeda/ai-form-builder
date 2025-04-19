import Header from "@/components/ui/header";
import FormGenerator from "./form-generator";

export default function Home() {
  return (
    <>
    <Header />
    <main className="min-h-screen flex flex-col items-center justify-between p-24">
      
      <FormGenerator />
    </main>
    </>
  );
}
