export const Hero = () => {
  return (
    <div className="flex w-[1200px] h-[360px]">
      <div className=" flex w-[768px] gap[48px] h-[360px]">
        <div className="pl-[32px] pr-[48px] ">
          <div className="text-[60px] font-[700]">Hi, I'm Sagar</div>
          <div className="text-[16px] font-[400] text-[#4B5563] leading-[24px]">
            I'm a full stack developer (React.js & Node.js) with a focus on
            creating (and occasionally designing) exceptional digital
            experiences that are fast, accessible, visually appealing, and
            responsive. Even though I have been creating web applications for
            over 7 years, I still love it as if it was something new.
          </div>
          <div>
            <div className="flex">
              <img src="" alt="loc!" />
              <p>Ahmedabad, India</p>
            </div>
          </div>
          <div>
            <div className="flex">
              <img src="" alt="loc2!" />
              <p>Available for new projects</p>
            </div>
          </div>
          <div className="flex">
            <img src="#" alt="muur" />
            <img src="#" alt="twitter" />
            <img src="#" alt="figma" />
          </div>
        </div>
      </div>
      <div className="w-[400px] h-[360px] flex min-w-[384px] flex-column justify-center items-end flex-1 self-stretch ">
        <img
          className="flex-shrink-0 w-[280px] h-[320px]"
          src="https://s3-alpha-sig.figma.com/img/f85c/f455/11cd2ba02a83d564218d6500a134a91d?Expires=1706486400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=J6ilx-NOb63~KzVYyZfxx4qzRN~gm9QHjip~sIpK9MTVSZsX~huwLpZqpJyqW7GDTT8lB8QtBCj5-2PtU-Ygp48aaoTUuruT2gkBXQL~lHchh7pKMdkHIJrb2oMYnvdAYQNxOMjjUIF8HDscGx5Nt7iw4F0WHx0HmiLM~STQEdaUIw0hp1E28oW5KSCJTY9dpgSECxgzNyTUNroqNwgsE5X4gYOS6SIFW~iIc98LskU-vU9DVPo3dEzu2N-2Fz4UiQZedr6UAGezp4AEFbGvN6RWj7EetJyu7prBfAxtS4Q0dAi36VtSyse6uAVnFGuXHQ9Y83-~6UcTO1YSVEzzGQ__"
          alt=""
        />
      </div>
    </div>
  );
};
