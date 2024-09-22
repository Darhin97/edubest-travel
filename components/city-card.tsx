import { Card, CardFooter } from "@/components/ui/card";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import Image from "next/image";

type Props = {
  image: string;
  title: string;
  description: string;
};

const CityCard = ({ image, title, description }: Props) => {
  return (
    <li className={"cities-grid-item list-none"}>
      <Card className={"cursor-pointer hover:shadow-sm flex flex-col gap-y-4"}>
        <div className={"w-full h-[290px] block relative"}>
          <Image src={image} alt={""} className={"object-cover w-full"} fill />
        </div>
        <div className={"px-2 md:px-6"}>
          <h4 className={"font-medium text-blue-500 capitalize"}>{title}</h4>
          <p className={"line-clamp-1 text-sm sm:text-base"}>
            {description}
            <span className={"lg:hidden "}>...</span>
          </p>
        </div>
        <CardFooter>
          <Link href={"#"} className={"flex items-center text-[#DC6400]"}>
            Read more <ChevronRight className={"size-4 ml-2 "} />
          </Link>
        </CardFooter>
      </Card>
    </li>
  );
};

export default CityCard;
