// import { Separator } from "@/components/ui/separator";
// import { ChevronsDownIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export const FooterSection = () => {
  return (
    <footer id="footer" className="container py-24 sm:py-32">
      <div className="p-10 bg-card border border-secondary rounded-2xl">
        <div className="grid grid-cols-2 md:grid-cols-4 xl:grid-cols-6 gap-x-12 gap-y-8">
          <div className="col-span-full xl:col-span-4 items-center flex flex-col md:flex-row gap-4 md:gap-8">
            <Link href="/" className="font-bold text-lg flex items-center ">
              <Image
                src="https://portfolio-v1-rho-orcin.vercel.app/_next/image?url=%2Fimages%2Favatar.jpg&w=256&q=75"
                alt="RadixLogo"
                width={40}
                height={40}
                className="rounded-full"
              />
              <span className="pl-2 lg:text-6xl md:text-3xl  font-black">Khalid Hossain Badhon</span>
              
            </Link>
          </div>

          <div className="flex flex-col gap-2">
            <h3 className="font-bold text-lg">Contact</h3>
            <div>
              <Link
                href="https://github.com/badhon252"
                className="opacity-60 hover:opacity-100"
              >
                Github
              </Link>
            </div>

            <div>
              <Link href="#" className="opacity-60 hover:opacity-100">
                Twitter
              </Link>
            </div>

            <div>
              <Link href="https://wa.me/8801605860143?text=Hello%20there!" className="opacity-60 hover:opacity-100"
              target="_blank" // opens in new tab
              rel="noopener noreferrer">
                WhatsApp
              </Link>
            </div>
          </div>

          {/* <div className="flex flex-col gap-2">
            <h3 className="font-bold text-lg">Platforms</h3>
            <div>
              <Link href="#" className="opacity-60 hover:opacity-100">
                iOS
              </Link>
            </div>

            <div>
              <Link href="#" className="opacity-60 hover:opacity-100">
                Android
              </Link>
            </div>

            <div>
              <Link href="#" className="opacity-60 hover:opacity-100">
                Web
              </Link>
            </div>
          </div> */}

          {/* <div className="flex flex-col gap-2">
            <h3 className="font-bold text-lg">Help</h3>
            <div>
              <Link href="#" className="opacity-60 hover:opacity-100">
                Contact Us
              </Link>
            </div>

            <div>
              <Link href="#" className="opacity-60 hover:opacity-100">
                FAQ
              </Link>
            </div>

            <div>
              <Link href="#" className="opacity-60 hover:opacity-100">
                Feedback
              </Link>
            </div>
          </div> */}

          <div className="flex flex-col gap-2">
            <h3 className="font-bold text-lg">Socials</h3>
            {/* <div>
              <Link href="#" className="opacity-60 hover:opacity-100">
                Twitch
              </Link>
            </div> */}

            <div>
              <Link href="#" className="opacity-60 hover:opacity-100">
                Discord
              </Link>
            </div>

            <div>
              <Link href="#" className="opacity-60 hover:opacity-100">
                LinkedIn
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
