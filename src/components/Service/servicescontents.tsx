interface Props {
  subCategories?: string[];
}

export default function ContentsServices({ subCategories = [] }: Props) {
  return (
    <div className="max-w-[1200px] mx-auto px-6 min-h-[450px] mb-[100px]">
      <div className="grid grid-cols-5 gap-5 items-start justify-between py-[30px]">
        {subCategories.map((sub) => (
          <button 
            key={sub}
            className="w-[200px] h-[75px] rounded-[10px] border-none bg-[#ebeef5] text-dark font-medium transition-all hover:bg-primary/20"
          >
            {sub}
          </button>
        ))}
      </div>
    </div>
  );
}
