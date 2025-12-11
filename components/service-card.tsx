import Image from "next/image"
import Link from "next/link"
import type { Service } from "@/lib/data"

interface ServiceCardProps {
  service: Service
}

export default function ServiceCard({ service }: ServiceCardProps) {
  return (
    <div className="w-1/3 flex justify-center items-center">
      <Link
        href={service.href}
        className="w-3/4 h-[150px] md:h-auto bg-white rounded-2xl flex lg:flex-row flex-col shadow py-3 px-2 items-center hover:shadow-lg transition-shadow"
      >
        <Image
          className="rounded-xl flex lg:justify-center"
          src={service.icon || "/placeholder.svg"}
          width={65}
          height={65}
          alt={service.title}
        />
        <div className="flex flex-col justify-center lg:items-start text-center lg:text-right mx-3">
          <h3 className="font-iran-bold2">{service.title}</h3>
          <p className="font-iran-light2 hidden md:flex text-sm">{service.description}</p>
        </div>
      </Link>
    </div>
  )
}
