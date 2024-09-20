import { Button } from "@/components/ui/button";
import Link from "next/link";
import { cn } from "@/lib/utils";

type NavButtonProps = {
  href: string;
  label: string;
  isActive?: boolean;
};
const NavButton = ({ href, label, isActive }: NavButtonProps) => {
  return (
    <Button
      asChild
      size="sm"
      variant="outline"
      className={cn(
        "w-full lg:w-auto justify-between font-normal hover:bg-blue-500/20 hover:text-black border-none focus-visible:ring-offset-0 focus-visible:ring-transparent outline-none text-black focus:bg-blue-500/30 transition",
        isActive ? "bg-blue-500/10 text-black" : "bg-transparent",
      )}
    >
      <Link href={href}>{label}</Link>
    </Button>
  );
};

export default NavButton;
