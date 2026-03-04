export default function AboutHero() {
  return (
    <div className="min-h-[223px] bg-bg-light flex flex-col justify-center items-center text-center p-[40px_20px] relative">
      <h1 className="text-[48px] font-semibold text-dark mb-4 relative">
        About <span>Us</span>
        <svg
          className="absolute top-[2px] right-[0.2%] pointer-events-none"
          width="117"
          height="83"
          viewBox="0 0 117 83"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M48.6528 16.167C39.5177 18.4689 31.3275 24.5423 23.9632 30.1973C14.8126 37.224 2.83495 47.9062 1.16029 60.0485C-0.514026 72.1883 11.2525 78.3202 21.3284 80.5895C38.831 84.5314 59.4597 79.7603 75.1966 71.8002C88.748 64.9455 103.075 54.7177 111.109 41.5095C116.265 33.0325 118.422 21.6947 112.166 13.2209C104.375 2.66715 91.0457 0.0906774 78.661 1.25764C56.1557 3.37821 34.8316 13.3942 14.3996 22.3195"
            stroke="#F3D45A"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      </h1>
      <p className="text-[18px] text-text-muted leading-[1.6] font-normal max-w-2xl px-6">
        Your supporting procurement partner to help with your enquiries in
        professional and standardized
      </p>
    </div>
  );
}
