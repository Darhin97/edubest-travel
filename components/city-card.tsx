import { Card } from "@/components/ui/card";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import CldImage from "@/components/cld-image";

type Props = {
  image: string;
  title: string;
  description: string;
  href?: string;
};

const CityCard = ({ image, title, description, href }: Props) => {
  return (
    <li className={"cities-grid-item list-none group drop-shadow-lg"}>
      <Card className={" hover:shadow-sm flex flex-col gap-y-4"}>
        <div className={"w-full h-[290px] block relative overflow-hidden"}>
          <CldImage
            src={image}
            alt={""}
            className={
              "object-cover w-full scale-100 group-hover:scale-105 transition overflow-hidden"
            }
            fill
          />
        </div>
        <div className={"px-4"}>
          <h4 className={"font-medium text-blue-500 capitalize"}>{title}</h4>
          <p className={"line-clamp-1 text-sm sm:text-base"}>
            {description}
            <span className={"lg:hidden "}>...</span>
          </p>
        </div>
        <div className={"p-4 group/link w-1/2 cursor-pointer"}>
          <Link
            href={href ?? ""}
            className={
              "flex items-center text-[#DC6400] group-hover/link:text-blue-500 "
            }
          >
            Read more
            <ChevronRight
              className={
                "size-4 ml-2 group-hover/link:translate-x-0.5 transition"
              }
            />
          </Link>
        </div>
      </Card>
    </li>
  );
};

export default CityCard;
