import Button from "@/component/Block/Button";
import AboutText from "../Block/AboutText";
export const About = () => {
  return (
    <div className="flex justify-between items-start self-stretch w-[1440px] h-[962px] px-[80px] py-[96px] bg-gray-50">
      <div className="flex py-[32px] flex-col items-center gap-[48px] flex-1">
        <Button name={"About me"} />
        <div className="flex items-start gap-[48px] self-stretch flex-wrap">
          <div className="flex min-w-[444px]flex-col items-start flex-1 self-stretch">
            {" "}
            <img
              className="w-[400px] h-[480px] "
              src="https://s3-alpha-sig.figma.com/img/8781/bda6/7a25952db5724f48492cd455a6e81952?Expires=1706486400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=iD776LocC9a2IKsEEOaYst01NN5Lo3uvEsPe-g-xHHCoZ3YH2nTx6vngudPrjvMx9V8fPVT4IK3s3nj1Myeef6xBPc9vfd3E4iP1c2fe7QC-nBR2k~YbfdlJNFiyDEEFAXF6TtkbM5EehR2t8RehwXWG5DL-QW2AgEX4WhHCUHTCwg8YVAk0fK5PiQ2zyyV9zL0bfPyOdcr7ihc1WFlz7Tdf-PKy6ukX3mjD0Vo2wuGgontjFSSetothS6hfcwSOXmbzezxEO4NmD29qL1pCYvp2iVoFU~lu0h6JaoLlT3hc0LVsjWRZdSiwGHT0XXpjzdYHAbrDM70dMS1aH~n-hw__"
              alt=""
            />
          </div>
          <div className="flex min-w-[444px] flex-col items-start flex-1 self-stretch gap-[24px]">
            <div className="text-Gray-900  font-inter font-semibold text-2xl leading-9 tracking-tight">
              Curious about me? Here you have it:
            </div>
            <div className="flex flex-col items-start gap-[16px] self-stretch">
              <AboutText
                text={
                  "I began my journey as a web developer in 2015, and since then, I've continued to grow and evolve as a developer, taking on new challenges and learning the latest technologies along the way. Now, in my early thirties, 7 years after starting my web development journey, I'm building cutting-edge web applications using modern technologies such as Next.js, TypeScript, Nestjs, Tailwindcss, Supabase and much more."
                }
              />
              <AboutText
                text={
                  "I began my journey as a web developer in 2015, and since then, I've continued to grow and evolve as a developer, taking on new challenges and learning the latest technologies along the way. Now, in my early thirties, 7 years after starting my web development journey, I'm building cutting-edge web applications using modern technologies such as Next.js, TypeScript, Nestjs, Tailwindcss, Supabase and much more."
                }
              />
              <AboutText
                text={
                  "I am very much a progressive thinker and enjoy working on products end to end, from ideation all the way to development."
                }
              />
              <AboutText
                text={
                  "When I'm not in full-on developer mode, you can find me hovering around on twitter or on indie hacker, witnessing the journey of early startups or enjoying some free time. You can follow me on Twitter where I share tech-related bites and build in public, or you can follow me on GitHub."
                }
              />
              <AboutText text={"Finally, some quick bits about me."} />
              <div className="flex items-start gap-[18px] self-stretch">
                <div>
                  <AboutText text={"* B.E. in Computer Engineering"} />
                  <AboutText text={"* Full time freelancer"} />
                </div>
                <div>
                  <AboutText text={"* Avid learner"} />
                  <AboutText text={"* Aspiring indie hacker"} />
                </div>
              </div>
              <AboutText
                text={
                  "One last thing, I'm available for freelance work, so feel free to reach out and say hello! I promise I don't bite 😉"
                }
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
