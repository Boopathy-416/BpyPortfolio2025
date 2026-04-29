import Linkdin from "../../public/assets/linkedin.png";

export default function UpdateCard() {
  const getUpdatedDate = () => {
    const today = new Date();
    today.setDate(today.getDate() - 11);

    const day = today.getDate();
    const month = today.getMonth() + 1;
    const year = today.getFullYear();

    return `${day}.${month}.${year}`;
  };

  return (
    <div
      className="absolute z-20 bottom-20 right-[42px] max-w-xs rounded bg-black text-white 
      shadow-[0_10px_50px_rgba(255,255,255,0.5)] p-4 hover:bg-[#ececec] hover:text-black transition-all duration-500"
    >
      <div className="flex justify-between items-start gap-2">
        <h2 className="text-xs md:text-sm font-bold leading-snug">
          Open to work | Meta Campaign | Digital Marketing Support | MERN Stack Developer |
          Passionate about UI/UX | Let's connect!
        </h2>

        {/* LinkedIn */}
        <a
          href="https://www.linkedin.com/in/boopathy-e/"
          target="_blank"
          rel="noopener noreferrer"
          className="cursor-pointer"
        >
          <img src={Linkdin} alt="LinkedIn" className="md:w-[50px] w-[40px] h-[auto]" />
        </a>
      </div>

      <p className="mt-2 text-xs tracking-wider">
        {getUpdatedDate()} last Updated
      </p>
    </div>
  );
}