const Linie = () => {
  return (
    <>
      <div className="relative h-96">
        <div className="absolute top-0 left-1/2 w-0.5 h-full bg-blue-300"></div>

        <div className="absolute top-0 left-1/2 w-16 h-16 border-t-4 border-l-4 border-dashed border-blue-300 rounded-full transform -translate-x-1/2 translate-y-1/2"></div>
        <div className="absolute top-[200px] left-1/2 w-16 h-16 border-t-4 border-l-4 border-dashed border-blue-300 rounded-full transform -translate-x-1/2 translate-y-1/2"></div>
        <div className="absolute top-16 left-1/2 w-0.5 h-40 bg-blue-300"></div>
      </div>
    </>
  );
};

export default Linie;
