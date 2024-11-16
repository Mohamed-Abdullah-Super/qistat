type Props = {
  children :  React.ReactNode
}

const CasePageLayout = ({ children }: Props) => {
  return (
    <main>
    <div className="grid grid-row-2 md:grid-row-2 relative items-center justify-items-center min-h-screen p-8 pb-20 gap-16"> 
      {children}
    </div>
    </main>
  )
}

export default CasePageLayout