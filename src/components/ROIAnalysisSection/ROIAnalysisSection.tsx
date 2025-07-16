const ROIAnalysisSection = () => {
  return (
    <div className="max-w-container p-[32px] pc:p-[48px] bg-purple flex flex-col gap-[24px]">
      <h2 className="text-[48px] hidden pc:block text-white">
        실제 수익률 분석 <span>(제공 자료 기준)</span>
      </h2>

      <h2 className="text-[32px] pc:hidden text-white">
        실제 수익률 분석
        <br />
        <span>(제공 자료 기준)</span>
      </h2>

      <div className="overflow-x-auto rounded-[12px]">
        <table className="min-w-[800px] w-full text-left text-sm bg-white">
          <thead className="bg-light-purple1 text-sm font-light">
            <tr>
              <th className="px-4 py-3">Name</th>
              <th className="px-4 py-3">ALT.1 시나리오 (가동률 65% 기준)</th>
              <th className="px-4 py-3">ALT.2 시나리오 (가동률 45% 기준)</th>
            </tr>
          </thead>
          <tbody className="text-[15px] font-light">
            {[
              ["분양가", "395,000,000원", "395,000,000원"],
              ["담보대출 (60%)", "237,000,000원", "237,000,000원"],
              ["대출이자 (5%)", "11,850,000원", "11,850,000원"],
              ["연매출 (예상)", "106,600,000원", "72,600,000원"],
              ["실투자금", "158,000,000원", "158,000,000원"],
              ["운영경비", "42,640,000원", "29,040,000원"],
              ["연간 순수익", "52,110,000원", "31,710,000원"],
              ["투자 수익률", "33%", "20%"],
            ].map(([name, alt1, alt2], idx) => (
              <tr
                key={name}
                className={idx % 2 === 0 ? "bg-white" : "bg-gray-50"}
              >
                <td className="px-4 py-3 font-medium">{name}</td>
                <td className="px-4 py-3">{alt1}</td>
                <td className="px-4 py-3">{alt2}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ROIAnalysisSection;
