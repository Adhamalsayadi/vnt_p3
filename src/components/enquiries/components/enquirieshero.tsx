export default function EnquiriesHero() {
  return (
    <div className="min-h-[223px] bg-bg-light flex flex-col justify-center items-center text-center p-[40px_20px]">
      <div className="relative mb-6">
        <h2 className="text-[48px] font-semibold text-dark mb-4">
          Updated enquires
        </h2>
        <svg
          className="w-[190px] h-[10px] absolute left-1/2 -translate-x-1/2 "
          width="135"
          height="6"
          viewBox="0 0 135 6"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0.5 3.30294C9.44312 0.867805 17.7854 0.902393 27.1266 0.902393C41.1942 0.902393 55.2457 1.23137 69.3104 1.37657C83.1155 1.51909 96.9166 1.34131 110.72 1.16913C118.274 1.0749 126.184 0.142749 133.721 0.650477C137.572 0.909901 126.087 1.672 122.247 2.02858C108.658 3.29036 94.942 3.83971 81.2774 4.04384C70.1797 4.20963 59.0806 4.36985 47.981 4.36985C43.8373 4.36985 39.6979 4.37867 35.5564 4.50321C33.8062 4.55583 31.5548 4.36282 29.8368 4.78475C29.8067 4.79215 34.9539 5.35091 35.9083 5.37748C43.3675 5.58509 50.8674 5.47827 58.3289 5.42193C66.1586 5.3628 74.0142 5.30896 81.8406 5.11076C84.7067 5.03818 93.2154 5.26468 90.4287 4.69584C87.5966 4.11773 83.882 4.67174 81.0135 4.76993C75.584 4.95578 69.9044 5.24622 64.4884 4.75511C53.7799 3.78409 86.0296 4.54111 96.7994 4.63656"
            stroke="#F3D45A"
            strokeLinecap="round"
          />
        </svg>
      </div>
      <p className="mt-3 text-[#717171] leading-[1.6] text-sm">
        Sharing your own needs or adding a price is
        <br /> an important step to help you.
      </p>
    </div>
  );
}
