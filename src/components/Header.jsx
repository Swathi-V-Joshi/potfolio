const sliders = [
  "/image/one.png",
  "/image/two.png",
  "/image/api.png",
  "/image/knldge.png",
];
const icons = [
  "/image/lowh1.png",
  "/image/lowh2.png",
  "/image/lowh3.png",
  "/image/lowh4.png",
];
function Header() {
  return (
    <div>
      <header
        className="shadow bg-fixed py-4"
        style={{
          background: "linear-gradient(120deg, black, rgb(2, 17, 41), black)",
        }}
      >
        <div className="px-28 mt-10">
          <span className="text-slate-600 text-2xl">
            I'm{" "}
            <span
              className="text-4xl font-serif text-white font-thin leading-10"
              style={{ textShadow: "1px 1px 3px white" }}
            >
              Swathi V Joshi,{" "}
              <span
                className="text-slate-600 text-2xl"
                style={{ textShadow: "0px 0px 0px" }}
              >
                And I'm a
              </span>
              <br />
              Full-Stack Developer
              <br />
              <span
                className="text-slate-700 text-sm font-Milonga tracking-wide"
                style={{ textShadow: "0px 0px 0px" }}
              >
                Crafting creative and functional websites....
              </span>
            </span>
          </span>
          <br />
          <div className="flex">
            <button className="bg-slate-700 mr-5 rounded p-2 mt-10 text-white">
              Know More
            </button>
            <button className="bg-slate-700 rounded p-2 mt-10 text-white">
              Resume
            </button>
          </div>
        </div>
        <div className="mx-auto max-w-xs h-28 sm:px-6 lg:px-8">
          <div className="flex justify-center bg-slate-950 overflow-hidden shadow-lg shadow-slate-900 rounded-full sm:p-0 xs:p-0">
            <div className="flex w-full animate-slideShow">
              {sliders.map((s, index) => (
                <img
                  key={index}
                  className="p-12 object-cover" // Set equal width and height
                  src={s}
                  alt={`Slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Header;
