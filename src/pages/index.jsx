import { Header, Hero, About, Skills } from "@/component/containers/index";
export default function Home() {
  return (
    <div className="flex flex-wrap justify-center ">
      <Header />
      <Hero />
      <About />
      <Skills />
    </div>
  );
}
