import Table from "../common/Table";
import {
  BUILDING_OVERVIEW_COLUMNS,
  BUILDING_OVERVIEW_ROWS,
  PROJECT_OVERVIEW_COLUMNS,
  PROJECT_OVERVIEW_ROWS,
} from "./constant";

const ProjectOverviewSection = () => {
  return (
    <div className="max-w-container pb-[32px] pc:pb-[48px] px-[16px] pc:px-[48px] bg-border-light-gray flex flex-col gap-[24px]">
      <h2 className="text-[32px] pc:text-[48px] text-purple">프로젝트 개요</h2>

      <div className="flex flex-col gap-[8px]">
        <h3 className="text-[22px]">프로젝트 개요</h3>
        <Table
          columns={PROJECT_OVERVIEW_COLUMNS}
          rows={PROJECT_OVERVIEW_ROWS}
        />
      </div>

      <div className="flex flex-col gap-[8px]">
        <h3 className="text-[22px]">건축규모</h3>
        <Table
          columns={BUILDING_OVERVIEW_COLUMNS}
          rows={BUILDING_OVERVIEW_ROWS}
        />
      </div>
    </div>
  );
};

export default ProjectOverviewSection;
