


type sectionTowColProps = {
  children: React.ReactNode;
};

const SectionTowCol = ({ children }: sectionTowColProps) => {
  return (
    <div className="relative h-screen w-full ">
      <div className="container flex flex-col gap-28 md:grid md:grid-cols-2 md:grid-rows-1 items-center h-full w-full ">
        {children}
      </div>
    </div>
  );
};

export default SectionTowCol;
