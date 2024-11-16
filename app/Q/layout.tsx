type Props = {
  children: React.ReactNode;
};

const KLayout = ({ children }: Props) => {
  return (
    <div className="flex h-screen md:pt-5">
      {children}
    </div>
  );
};

export default KLayout;
