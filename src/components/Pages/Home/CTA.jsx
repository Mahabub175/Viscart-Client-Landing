const CTA = () => {
  return (
    <section
      style={{ backgroundImage: `url('/cta.png')` }}
      className="bg-cover bg-no-repeat bg-center my-container text-white my-10 lg:my-20 p-20 lg:p-32 xxl:p-44 rounded-xl relative"
    >
      <div className="flex flex-col lg:flex-row justify-between items-center gap-10 text-center lg:text-start">
        <h2 className="text-3xl lg:text-5xl font-bold">
          Build Your <span className="text-violet-200">E-Commerce</span> Empire
          <br className="hidden lg:block" /> Today!
        </h2>
        <button className="bg-white text-primary hover:bg-primary hover:text-white duration-300 px-20 py-4 rounded-xl text-lg font-bold">
          Start Now!
        </button>
      </div>
    </section>
  );
};

export default CTA;
