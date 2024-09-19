type Props = {
    children?: React.ReactNode;
};

const HomePageLayout = ({children}:Props) => {
    return (
        <>
          <main className={'px-3 lg:px-14'}>{children}</main>
        </>
    );
};

export default HomePageLayout;