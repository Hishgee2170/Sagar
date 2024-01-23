import {
  Header,
  Hero,
  About,
  Skills,
  Experience,
  Work,
} from "@/component/containers/index";
export default function Home() {
  return (
    <div className="w-[1440px] flex flex-col justify-center ">
        <Header />
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Work />
    </div>
    
  );
}
