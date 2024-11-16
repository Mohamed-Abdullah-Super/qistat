type Props = {
  params: {
    caseId: string;
  };
};

const Kpage = async ({ params }: Props) => {
  const { caseId } = await params;
  return (
    <main className="flex flex-col m-auto items-center sm:items-start">
      <h1>Case ID is {caseId}</h1>
    </main>
  );
};

export default Kpage;
