import Image from "next/image";

export default function WhyChooseSection() {
  const cardBaseClasses = "w-[318px] h-[104px] bg-bg-neutral flex items-center justify-start p-3 gap-3 text-sm rounded-custom absolute leading-[1.5]";

  return (
    <div className="mt-20 p-5 flex justify-center gap-8 min-h-[500px] relative">
      <div className="flex flex-col flex-1 relative justify-start">
        <div className={`${cardBaseClasses} right-0 top-0`}>
          <Image src={"/Server.png"} alt="server" width={24} height={24} />
          <span>Understand the market need <br /> and the available sources to <br />
          cover it..</span>
        </div>
        <div className={`${cardBaseClasses} left-0 top-[200px]`}>
          <Image
            src={"/Checked.png"}
            alt="Checked.png"
            width={24}
            height={24}
          />
          <span>Experience in executing typical <br /> and technical complex project.</span>
        </div>
      </div>
      <div className="flex justify-center flex-1">
        <Image
          src={"/choose.png"}
          alt="choose"
          width={434}
          height={416}
          className="object-contain"
        />
      </div>
      <div className="flex flex-col flex-1 relative justify-end">
        <div className={`${cardBaseClasses} right-0 top-0`}>
          <Image
            src={"/Lightning.png"}
            alt="Lightning.png"
            width={24}
            height={24}
          />
          <p>
            Strong and Long-term <br /> cooperation with the clients.
          </p>
        </div>
        <div className={`${cardBaseClasses} left-0 bottom-[40%]`}>
          <Image src={"/Group.png"} alt="Group.png" width={24} height={24} />
          <p>
            Efficient and effective system <br /> in management
          </p>
        </div>
        <div className={`${cardBaseClasses} right-0 bottom-0`}>
          <Image src={"/Award.png"} alt="Award.png" width={24} height={24} />
          <p>
            Highly experienced and <br />
            professionals personal.{" "}
          </p>
        </div>
      </div>
    </div>
  );
}
