import HomePage from "./(landing)/home";
import Navbar from "@/components/layout/navbar";

export default async function Home() {
  return (
    <>
      <Navbar />
      <HomePage />
    </>
  );
}
