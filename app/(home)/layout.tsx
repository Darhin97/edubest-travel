import Header from "@/components/header";

type Props = {
  children?: React.ReactNode;
};

const HomePageLayout = ({ children }: Props) => {
  return (
    <>
      <Header />
      <main style={{ height: "calc(100% - 74px)" }} className={"bg-slate-100"}>
        {children}
      </main>
    </>
  );
};

export default HomePageLayout;
