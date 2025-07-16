const Header = () => {
  return (
    <header
      className="bg-purple"
      role="banner"
      aria-label="동해 다온스테이 헤더"
    >
      <div className="mx-auto h-[48px] w-full max-w-container flex items-center text-white">
        <a
          className="flex items-center gap-[10px] ml-[16px] pc:ml-[48px]"
          href="/"
          aria-label="동해 다온스테이 홈페이지로 이동"
        >
          <span
            className="material-symbols-rounded w-[24px] h-[24px]"
            aria-label="홈 아이콘"
            role="img"
          >
            family_home
          </span>
          <h1 className="text-[22px]">
            <span className="sr-only">홈페이지 제목: </span>
            동해 다온스테이
          </h1>
        </a>
      </div>
    </header>
  );
};

export default Header;
