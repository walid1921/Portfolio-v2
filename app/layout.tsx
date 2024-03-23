import "./globals.css";
import { Nunito } from "next/font/google";

const font = Nunito({ subsets: ["latin"] });

export const metadata = {
  title: "Walid | Personal Portfolio",
  description: "Walid is a full-stack developer based in Germany.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${font.className} bg-[#131313] text-[#bbb]`}>
        <div className="h-[100vh] flex items-center gap-10 lg:w-[60%]">
          <div className="flex flex-col items-center  justify-center text-[26px]  md:text-[52px] xl:text-6xl  sm:pl-[8px] md:w-[100%] z-10 gap-4 bg-[rgba(114,114,114,.2)] backdrop-blur-sm xl:border-r-[1px] border-[rgba(114,114,114,.4)] h-[100%] dot-blur">
          <div className='flex flex-col xl:items-start gap-8 px-[20px]'>
            <h2 className='font-medium bg-gradient-to-r from-white to-[#a5a5a5] bg-clip-text text-transparent text-center lg:text-start'>
              Hello. I'm Walid.
            </h2>

            <h2 className='font-medium bg-gradient-to-r from-[#58ffb4] to-[#289061] bg-clip-text text-transparent md:mb-8 text-center lg:text-start'>
              A Full-Stack Web Developer
            </h2>
            <p className=' text-[#bbbbbb] text-lg md:text-2xl max-w-[700px] lg:text-start text-center'>
              Digital Craftsman deeply passionate about delivering exceptional
              experiences with Passion, Precision, and Artistry
            </p>

            {/* <div className='center gap-6 mt-10'>
              <div onClick={showWindowHandler}>
                <Btn />
              </div>

              <button
                className={`sec-btn ${
                  !darkMode
                    ? 'border-white hover:bg-[rgba(114,114,114,.2)] backdrop-blur-md border-[0.1px] border-[rgba(114, 114, 114, 0.703) text-[#bbb] hover:text-white'
                    : 'hover:text-white '
                }`}
                onClick={downloadCV}
              >
                <BsCloudDownloadFill size={18} />
                Download CV
              </button>
            </div> */}
          </div>
          </div>
        </div>
        <div className=""></div>
        {children}
      </body>
    </html>
  );
}
