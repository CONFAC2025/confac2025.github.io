import { useRecentApplicants } from "../../hooks/useRecentApplicants";
import Table from "../common/Table";

const columns = [
  { key: "이름" as const, label: "이름" },
  { key: "연락처" as const, label: "연락처" },
  { key: "주소" as const, label: "주소" },
];

const ApplicantListSection = () => {
  const { data = [] } = useRecentApplicants();

  const maskPhone = (phone: string) =>
    phone.replace(
      /(\d{3})-(\d{2,4})-(\d{4})/,
      (_match: string, p1: string, _p2: string, p3: string) =>
        `${p1}-****-${p3}`
    );

  const maskedRows = data.map((row) => ({
    ...row,
    연락처: maskPhone(row.연락처),
  }));

  return (
    <div className="max-w-container pb-[32px] pc:pb-[48px] px-[16px] pc:px-[48px] bg-border-light-gray">
      <h2 className="text-[32px] pc:text-[48px] text-purple mb-[24px]">
        상담 신청자 리스트
      </h2>

      <Table columns={columns} rows={maskedRows} />
    </div>
  );
};

export default ApplicantListSection;
