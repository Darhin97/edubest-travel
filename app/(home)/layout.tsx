"use client";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { useLenis } from "@/hooks/use-lenis";

type Props = {
  children?: React.ReactNode;
};

const HomePageLayout = ({ children }: Props) => {
  useLenis();
  return (
    <div className={"h-full"}>
      <Header />
      <main className={"min-h-[calc(100vh-74px)] bg-white"}>{children}</main>
      <Footer />
    </div>
  );
};

export default HomePageLayout;
