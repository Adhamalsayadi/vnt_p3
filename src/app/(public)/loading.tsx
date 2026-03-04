export default function Loading() {
  return (
    <div className="fixed top-0 left-0 w-full h-screen bg-white flex flex-col items-center justify-center z-[9999]">
      <div className="flex gap-[10px] mb-5">
        <div className="w-[15px] h-[15px] bg-primary rounded-full animate-loading-bounce"></div>
        <div className="w-[15px] h-[15px] bg-primary rounded-full animate-loading-bounce delay-200"></div>
        <div className="w-[15px] h-[15px] bg-primary rounded-full animate-loading-bounce delay-400"></div>
      </div>
      <p className="text-lg font-semibold text-[#333]">V&T is loading...</p>
    </div>
  );
}
