import {
  LinkedinIcon,
  FacebookIcon,
  XIcon,
  InstagramIcon,
  YoutubeIcon,
} from "lucide-react";
import Button from "@/components/ui/button";

export default function ContactHero() {
  const socialIconClasses =
    "p-2 rounded-md transition-colors hover:bg-white/10 cursor-pointer w-[40px] h-[40px]";

  return (
    <div className="max-w-[1200px] mx-auto px-6">
      <div className="flex relative min-h-[862px]">
        <div className="w-[334px] bg-bg-dark rounded-custom text-white py-10">
          <div className="p-[40px_24px]">
            <h1 className="text-[18px] font-semibold mb-6 capitalize">
              contact us
            </h1>
            <svg
              className="mb-8"
              width="72"
              height="16"
              viewBox="0 0 72 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M46.8762 0.272285C25.1525 2.23232 17.639 2.88558 12.4531 3.25308C3.42874 3.90643 1.83622 4.2331 2.32623 5.49895C3.22457 7.82665 11.5956 7.78582 41.7719 5.29478C49.9387 4.6006 57.493 4.06976 58.5138 4.06976C63.4956 4.02893 63.5364 -1.23857 46.8762 0.272285ZM45.6511 8.15332C43.1603 8.35749 8.94141 11.5834 6.49137 11.8284C-0.368735 12.4409 -1.308 12.9309 1.42788 14.6868C5.22544 17.096 39.1177 12.4817 60.8006 11.8692C70.8865 11.5834 71.9482 11.3792 71.3765 9.95002C70.6007 7.74498 60.0247 7.00981 45.6511 8.15332Z"
                fill="#F3D45A"
              />
            </svg>
            <div className="flex flex-col gap-5">
              <FacebookIcon className={socialIconClasses} />
              <XIcon className={socialIconClasses} />
              <LinkedinIcon className={socialIconClasses} />
              <YoutubeIcon className={socialIconClasses} />
              <InstagramIcon className={socialIconClasses} />
            </div>
          </div>
        </div>
        <form
          className="w-[800px] bg-white absolute left-[20%] top-[5%] p-8 rounded-custom shadow-[0_10px_30px_rgba(0,0,0,0.15)] flex flex-col items-start min-h-[500px] z-10"
          aria-label="Contact form"
        >
          <h4 className="font-medium text-primary mb-4 text-xl capitalize">
            contact us
          </h4>
          <div className="flex gap-6 justify-between w-full mb-6">
            <div className="flex flex-col flex-1">
              <label
                htmlFor="contact-name"
                className="block my-3 text-2xl font-medium text-text"
              >
                Name
              </label>
              <input
                id="contact-name"
                name="name"
                type="text"
                autoComplete="name"
                className="w-full h-[45px] p-3 bg-bg-blue border border-border-light rounded-lg text-sm transition-all focus:outline-none focus:border-primary focus:bg-white focus:shadow-[0_0_0_3px_rgba(243,212,90,0.1)]"
              />
            </div>
            <div className="flex flex-col flex-1">
              <label
                htmlFor="contact-email"
                className="block my-3 text-2xl font-medium text-text"
              >
                Email
              </label>
              <input
                id="contact-email"
                name="email"
                type="email"
                autoComplete="email"
                className="w-full h-[45px] p-3 bg-bg-blue border border-border-light rounded-lg text-sm transition-all focus:outline-none focus:border-primary focus:bg-white focus:shadow-[0_0_0_3px_rgba(243,212,90,0.1)]"
              />
            </div>
          </div>
          <div className="w-full">
            <label
              htmlFor="contact-message"
              className="block my-3 text-2xl font-medium text-text"
            >
              Content
            </label>
            <textarea
              id="contact-message"
              name="message"
              className="w-full h-[200px] p-3 bg-bg-blue border border-border-light rounded-lg text-sm transition-all focus:outline-none focus:border-primary focus:bg-white focus:shadow-[0_0_0_3px_rgba(243,212,90,0.1)] resize-none"
            ></textarea>
          </div>
          <Button
            type="submit"
            size="lg"
            className="w-[184px] mt-6 text-xl capitalize"
          >
            send message
          </Button>
        </form>
      </div>
    </div>
  );
}
