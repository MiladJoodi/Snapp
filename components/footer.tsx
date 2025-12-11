import Link from "next/link"
import Image from "next/image"

export default function Footer() {
  return (
    <footer>
      <div className="w-full flex justify-center items-center flex-col mt-20 px-1">
        <ul className="flex flex-wrap justify-center font-iran-light2 leading-10 gap-4">
          <li>
            <Link href="/careers" className="hover:text-[#21aa58]">
              فرصت های شغلی
            </Link>
          </li>
          <li>
            <Link href="/blog" className="hover:text-[#21aa58]">
              بلاگ
            </Link>
          </li>
          <li>
            <Link href="/terms" className="hover:text-[#21aa58]">
              شرایط و قوانین
            </Link>
          </li>
          <li>
            <Link href="/business" className="hover:text-[#21aa58]">
              پنل سازمانی
            </Link>
          </li>
          <li>
            <Link href="/faq" className="hover:text-[#21aa58]">
              سوالات متداول
            </Link>
          </li>
          <li>
            <Link href="/drivers-club" className="hover:text-[#21aa58]">
              باشگاه رانندگان
            </Link>
          </li>
          <li>
            <Link href="/driver-registration" className="hover:text-[#21aa58]">
              ثبت نام راننده اسنپ
            </Link>
          </li>
          <li>
            <Link href="/about" className="hover:text-[#21aa58]">
              درباره ما
            </Link>
          </li>
          <li>
            <Link href="/contact" className="hover:text-[#21aa58]">
              تماس با ما
            </Link>
          </li>
        </ul>
      </div>

      <ul className="flex justify-center mt-5 gap-2">
        <li className="cursor-pointer hover:opacity-70">
          <svg width="32" height="32" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
            <g fill="none" fillRule="evenodd">
              <path
                stroke="#323232"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                d="M25.6 12.5c0 8.4-4.8 14.4-13.2 14.4-4.8 0-6.7-2.5-8.4-4.8m0 0l3.6-1.2c-4-4-4.3-10-1.2-14.4 1.5 2.7 4.2 5.2 7.2 6 .1-3.5 2.5-6 6-6 2.4 0 3.8.9 4.8 2.4H28l-2.4 3.6"
              />
              <path d="M0 32V0h32v32z" />
            </g>
          </svg>
        </li>
        <li className="cursor-pointer hover:opacity-70">
          <svg width="32" height="32" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
            <g fill="none" fillRule="evenodd">
              <path
                stroke="#323232"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                d="M10 4h12a6 6 0 016 6v12a6 6 0 01-6 6H10a6 6 0 01-6-6V10a6 6 0 016-6h0z"
              />
              <path
                stroke="#323232"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                d="M22.6 9c-.2 0-.5.2-.5.4a.5.5 0 10.5-.4M19.4 12.6a4.8 4.8 0 11-6.8 6.8 4.8 4.8 0 016.8-6.8"
              />
              <path d="M0 32V0h32v32z" />
            </g>
          </svg>
        </li>
        <li className="cursor-pointer hover:opacity-70">
          <svg width="32" height="32" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
            <g fill="none" fillRule="evenodd">
              <g stroke="#323232" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5">
                <path d="M15.7 22.5L13 25.2a.9.9 0 01-1.5-.4l-1.8-6" />
                <path d="M18.8 14.6l-5.2 4.7c-.5.5-.5 1.3 0 1.7l7.2 5.3c.7.5 1.8.2 2-.7L26.2 9a1 1 0 00-1.4-1.2l-20.7 8a.7.7 0 000 1.3l5.5 1.7" />
              </g>
              <path d="M0 32V0h32v32z" />
            </g>
          </svg>
        </li>
      </ul>

      <div className="flex justify-center mt-7 mb-10 gap-2">
        <Image
          src="/namad/download.png"
          width={130}
          height={130}
          alt="نماد"
          className="cursor-pointer hover:opacity-80"
        />
        <Image
          src="/namad/logo.png"
          width={130}
          height={130}
          alt="نماد"
          className="cursor-pointer hover:opacity-80"
        />
        <Image
          src="/namad/namad.png"
          width={130}
          height={130}
          alt="نماد"
          className="cursor-pointer hover:opacity-80"
        />
      </div>

      <div className="flex justify-center mb-10">
        <div className="w-[60%] flex flex-col items-center bg-[#21aa58] text-white rounded-2xl py-5">
          <p className="mt-3 font-iran-bold2">Developed by Milad Joodi</p>
          <ul className="flex gap-6 my-5 font-iran-light2">
            <li>
              <a href="https://www.linkedin.com/in/joodi/" target="_blank" rel="noopener noreferrer" className="hover:underline">
                Linkedin
              </a>
            </li>
            <li>
              <a href="https://github.com/MiladJoodi/Snapp" target="_blank" rel="noopener noreferrer" className="hover:underline">
                Github
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  )
}
