import { TouristStats } from "./constant";

const TouristStatsSection = () => {
  return (
    <div className="max-w-container p-[32px] pc:p-[48px] bg-purple flex flex-col gap-[24px]">
      <h2 className="text-[32px] pc:text-[48px] text-white">
        동해시 관광객 현황
      </h2>

      <ul className="flex flex-col pc:flex-row gap-[24px]">
        {TouristStats.map(({ title, description }) => (
          <li
            key={title}
            className="flex flex-col items-center gap-[16px] w-full font-light rounded-[12px] bg-white p-[24px] text-center"
          >
            <p className="text-[28px] pc:text-[32px]">{title}</p>
            <p className="text-[16px] pc:text-[18px]">{description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TouristStatsSection;
