"use client"

import Link from "next/link"
import Image from "next/image"
import { useState } from "react"

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <>
      <nav className="w-full md:h-[90px] flex border-b border-[#00000027] fixed z-[9999] top-0 bg-white">
        <div className="w-full h-[70px] md:w-4/5 md:h-[90px] m-auto flex justify-start items-center">
          <div className="w-full flex flex-nowrap md:hidden justify-between mx-5">
            <svg
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="25"
              fill="currentColor"
              className="bi bi-list cursor-pointer"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"
              />
            </svg>
            <Link href="/">
              <Image
                className="cursor-pointer"
                src="/snappTextLogo.svg"
                alt="اسنپ"
                width={80}
                height={30}
              />
            </Link>
          </div>

          <Link href="/" className="hidden md:flex cursor-pointer">
            <Image src="/snappTextLogo.svg" alt="اسنپ" width={100} height={40} />
          </Link>

          <ul className="hidden md:flex list-none justify-start items-center font-iran-light mx-7 h-[55px]">
            <li className="flex items-center relative cursor-default group px-4 py-1 text-black hover:text-[#21aa58]">
              سوپراپ اسنپ
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                fill="currentColor"
                className="bi bi-chevron-down mx-2"
                viewBox="0 0 16 16"
              >
                <path
                  fillRule="evenodd"
                  d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708"
                />
              </svg>
              <ul className="group-hover:flex hidden w-[170px] absolute top-6 list-none border border-[#0000002b] bg-white flex-col justify-start items-start font-iran-light rounded-lg text-black leading-9 pt-2 mt-2">
                <li className="flex items-center cursor-pointer px-4 py-1 hover:text-[#21aa58]">
                  <Link href="/services/taxi">درخواست تاکسی</Link>
                </li>
                <li className="flex items-center cursor-pointer px-4 py-1 hover:text-[#21aa58]">
                  <Link href="/services/bike">پیک موتوری</Link>
                </li>
                <li className="flex items-center cursor-pointer px-4 py-1 hover:text-[#21aa58]">
                  <Link href="/services/food">سفارش آنلاین غذا</Link>
                </li>
                <li className="flex items-center cursor-pointer px-4 py-1 hover:text-[#21aa58]">
                  <Link href="/services/market">سوپر مارکت</Link>
                </li>
                <li className="flex items-center cursor-pointer px-4 py-1 hover:text-[#21aa58]">
                  <Link href="/services/flights">رزرو بلیط هواپیما</Link>
                </li>
                <li className="flex items-center cursor-pointer px-4 py-1 hover:text-[#21aa58]">
                  <Link href="/services/train">رزرو بلیط قطار</Link>
                </li>
                <li className="flex items-center cursor-pointer px-4 py-1 hover:text-[#21aa58]">
                  <Link href="/services/bus">رزرو بلیط اتوبوس</Link>
                </li>
              </ul>
            </li>

             <li className="flex items-center relative cursor-default group px-4 py-1 text-black hover:text-[#21aa58]">
              خدمات
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                fill="currentColor"
                className="bi bi-chevron-down mx-2"
                viewBox="0 0 16 16"
              >
                <path
                  fillRule="evenodd"
                  d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708"
                />
              </svg>
              <ul className="group-hover:flex hidden w-[170px] absolute top-6 list-none border border-[#0000002b] bg-white flex-col justify-start items-start font-iran-light rounded-lg text-black leading-9 pt-2 mt-2">
                <li className="flex items-center cursor-pointer px-4 py-1 hover:text-[#21aa58]">
                  <Link href="/services/credit">سرویس اعتباری</Link>
                </li>
                <li className="flex items-center cursor-pointer px-4 py-1 hover:text-[#21aa58]">
                  <Link href="/services/doctor">اسنپ دکتر</Link>
                </li>
                <li className="flex items-center cursor-pointer px-4 py-1 hover:text-[#21aa58]">
                  <Link href="/services/hotels">رزرو هتل</Link>
                </li>
                <li className="flex items-center cursor-pointer px-4 py-1 hover:text-[#21aa58]">
                  <Link href="/services/insurance">خدمات بیمه</Link>
                </li>
                <li className="flex items-center cursor-pointer px-4 py-1 hover:text-[#21aa58]">
                  <Link href="/services/moving">اسباب‌کشی منزل</Link>
                </li>
                <li className="flex items-center cursor-pointer px-4 py-1 hover:text-[#21aa58]">
                  <Link href="/services/pharmacy">داروخانه آنلاین</Link>
                </li>
                <li className="flex items-center cursor-pointer px-4 py-1 hover:text-[#21aa58]">
                  <Link href="/services/pickup">وانت بار</Link>
                </li>
                <li className="flex items-center cursor-pointer px-4 py-1 hover:text-[#21aa58]">
                  <Link href="/services/shop">فروشگاه اسنپ</Link>
                </li>
              </ul>
            </li>

            <li className="cursor-pointer px-4 py-1 text-black hover:text-[#21aa58]">
              <Link href="/driver-registration">ثبت نام راننده اسنپ</Link>
            </li>
            <li className="cursor-pointer px-4 py-1 text-black hover:text-[#21aa58]">
              <Link href="/drivers-club">باشگاه رانندگان</Link>
            </li>
            <li className="cursor-pointer px-4 py-1 text-black hover:text-[#21aa58]">
              <Link href="/business">پنل سازمانی</Link>
            </li>
            <li className="cursor-pointer px-4 py-1 text-black hover:text-[#21aa58]">
              <Link href="/blog">بلاگ</Link>
            </li>
            <li className="flex items-center relative cursor-default group px-4 py-1 text-black hover:text-[#21aa58]">
              درباره اسنپ
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                fill="currentColor"
                className="bi bi-chevron-down mx-2"
                viewBox="0 0 16 16"
              >
                <path
                  fillRule="evenodd"
                  d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708"
                />
              </svg>
              <ul className="group-hover:flex hidden w-[170px] absolute z-[99] top-6 list-none border border-[#0000002b] bg-white flex-col justify-start items-start font-iran-light rounded-lg text-black leading-9 pt-2 mt-2">
                <li className="flex items-center cursor-pointer px-4 py-1 hover:text-[#21aa58]">
                  <Link href="/careers">فرصت های شغلی</Link>
                </li>
                <li className="flex items-center cursor-pointer px-4 py-1 hover:text-[#21aa58]">
                  <Link href="/about">درباره ی ما</Link>
                </li>
                <li className="flex items-center cursor-pointer px-4 py-1 hover:text-[#21aa58]">
                  <Link href="/contact">تماس با ما</Link>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div className={`${mobileMenuOpen ? "block" : "hidden"} w-full bg-[#00000028] text-xs absolute z-50 md:hidden`}>
        <div className="sm:w-1/2 w-full bg-white border border-[#00000027] h-screen">
          <ul className="list-none flex flex-col justify-start items-start font-iran-light px-7 mt-3 w-full">
            <li className="group flex flex-col items-center cursor-default font-iran-bold w-full my-4">
              <div className="flex justify-between w-full items-center">
                <span>سوپراپ اسنپ</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  fill="currentColor"
                  className="bi bi-chevron-down mx-2"
                  viewBox="0 0 16 16"
                >
                  <path
                    fillRule="evenodd"
                    d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708"
                  />
                </svg>
              </div>
            </li>
            <li className="flex items-center cursor-pointer py-1 w-full text-black hover:text-[#21aa58] my-2">
              <Link href="/driver-registration">ثبت نام راننده اسنپ</Link>
            </li>
            <li className="flex items-center cursor-pointer py-1 w-full text-black hover:text-[#21aa58] my-2">
              <Link href="/drivers-club">باشگاه رانندگان</Link>
            </li>
            <li className="flex items-center cursor-pointer py-1 w-full text-black hover:text-[#21aa58] my-2">
              <Link href="/business">پنل سازمانی</Link>
            </li>
            <li className="flex items-center cursor-pointer py-1 w-full text-black hover:text-[#21aa58] my-2">
              <Link href="/blog">بلاگ</Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  )
}
