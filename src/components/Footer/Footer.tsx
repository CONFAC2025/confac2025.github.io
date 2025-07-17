const Footer = () => {
  return (
    <footer
      className="max-w-container bg-purple p-[32px_16px] pc:p-[36px] flex flex-col gap-[40px]"
      aria-label="사이트 정보"
    >
      <p
        className="hidden pc:block text-[36px] text-white font-bold"
        aria-label="회사명"
      >
        온라인마케팅 (주)콘텐츠팩토리
      </p>

      <p
        className="text-[28px] pc:hidden text-white font-bold"
        aria-label="회사명"
      >
        온라인마케팅
        <br />
        (주)콘텐츠팩토리
      </p>

      {/* 연락처 및 사업자 정보 */}
      <address className="not-italic flex flex-col gap-[20px] text-[16px] text-white">
        <div>
          <strong>사업자등록번호: </strong>
          <span>418-86-03560</span>
        </div>

        <div>
          <strong>사업자주소: </strong>
          <span>충남 당진시 우강면 덕평로892-10</span>
        </div>

        <div>
          <strong>TEL: </strong>
          <span>010-5544-7400</span>
        </div>
      </address>
    </footer>
  );
};

export default Footer;
