import { GrowthPotentials } from "./constant";

const GrowthPotentialSection = () => {
  return (
    <div className="max-w-container p-[32px] pc:p-[48px] bg-purple flex flex-col gap-[24px]">
      <h2 className="text-[32px] pc:text-[48px] text-white">향후 성장동력</h2>

      <ul className="flex flex-col pc:flex-row gap-[24px]">
        {GrowthPotentials.map(({ list, title }) => (
          <li
            key={title}
            className="flex flex-col gap-[24px] w-full text-white"
          >
            <h3 className="text-[28px] font-light">{title}</h3>

            <ul className="list-disc list-inside">
              {list.map(({ title, content }) => (
                <li
                  key={title}
                  className="list-disc text-[14px] pc:text-[18px]"
                >
                  <span className="font-medium">{`${title}: `}</span>
                  <span className="font-light">{content}</span>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default GrowthPotentialSection;
