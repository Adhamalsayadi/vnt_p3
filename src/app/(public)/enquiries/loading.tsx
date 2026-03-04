export default function Loading() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] py-20">
      <div className="flex gap-2.5 mb-5">
        <div className="w-4 h-4 bg-primary rounded-full animate-loading-bounce"></div>
        <div className="w-4 h-4 bg-primary rounded-full animate-loading-bounce [animation-delay:0.2s]"></div>
        <div className="w-4 h-4 bg-primary rounded-full animate-loading-bounce [animation-delay:0.4s]"></div>
      </div>
      <h2 className="text-2xl font-bold text-dark mb-2">Finding Enquiries</h2>
      <p className="text-text-light">Please wait while we fetch the latest enquiries for you...</p>
    </div>
  );
}
