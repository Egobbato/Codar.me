export const Card = ({ homeTeam, awayTeam, match }) => (
  <div className="rounded-xl border border-gray-300 p-4 space-y-4 text-center ">
    <span className="text-sm md:text-base text-gray-700 font-bold">
      {match.time}
    </span>

    <div className="flex space-x-4 justify-center items-center">
      <span className="uppercase">{homeTeam.slug}</span>
      <img src={`/imgs/bandeiras/${homeTeam.slug}.png`} />

      <input
        type="number"
        className=" bg-red-300/[0.2] w-[55px] h-[55px] text-red-700 text-xl text-center"
      />
      <span className=" text-red-500 font-bold">X</span>
      <input
        type="number"
        className="bg-red-300/[0.2] w-[55px] h-[55px] text-red-700 text-xl text-center"
      />

      <img src={`/imgs/bandeiras/${awayTeam.slug}.png`} />
      <span className="uppercase">{awayTeam.slug}</span>
    </div>
  </div>
);
