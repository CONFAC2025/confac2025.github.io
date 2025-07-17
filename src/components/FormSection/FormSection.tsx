import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { useRecentApplicants } from "../../hooks/useRecentApplicants";
import {
  formatPhoneNumber,
  GOOGLE_SHEET_SCRIPT_URL,
  GoogleSheetFormSchema,
  type GoogleSheetFormValues,
} from "./formSchema";

const FormSection = () => {
  const { refetch } = useRecentApplicants();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting, isValid },
  } = useForm<GoogleSheetFormValues>({
    resolver: yupResolver(GoogleSheetFormSchema),
  });

  const onSubmit = async (data: GoogleSheetFormValues) => {
    const formData = new FormData();
    formData.append("이름", data.이름);
    formData.append("연락처", data.연락처);
    formData.append("주소", data.주소);

    try {
      // Google Apps Script Web App으로 POST 요청
      console.log(formData);
      await fetch(GOOGLE_SHEET_SCRIPT_URL, { method: "POST", body: formData });

      reset(); // 입력값 초기화
      await refetch(); // 최근 신청자 목록 새로고침
    } catch (err) {
      console.error("제출 오류:", err);
    }
  };

  return (
    <div className="max-w-container py-[32px] pc:py-[48px] px-[16px] pc:px-[140px] bg-border-light-gray flex flex-col pc:flex-row gap-[24px] pc:gap-[10px]">
      <div className="flex flex-col gap-[24px] w-full">
        <h2 className="text-[32px] pc:text-[48px] text-purple">상담 신청 폼</h2>

        <div className="w-full">
          <p>폼을 작성하신뒤, 상담신청하기 버튼을 눌러주세요.</p>
          <p>전화 상담을 원하신다면, 전화걸기 버튼을 눌러주세요</p>
        </div>
      </div>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col gap-[24px] w-full"
      >
        <InputField
          label="이름"
          name="이름"
          placeholder="이름을 입력하세요"
          register={register("이름")}
          error={errors.이름?.message}
        />

        <InputField
          label="연락처"
          name="연락처"
          type="tel"
          placeholder="010-1234-1234"
          register={{
            ...register("연락처"),
            onChange: (e: React.ChangeEvent<HTMLInputElement>) => {
              const formatted = formatPhoneNumber(e.target.value);
              e.target.value = formatted;
              register("연락처").onChange(e);
            },
          }}
          error={errors.연락처?.message}
          maxLength={13}
        />

        <InputField
          label="주소"
          name="주소"
          placeholder="주소를 입력하세요"
          register={register("주소")}
          error={errors.주소?.message}
        />

        <div className="flex gap-[24px] items-center cursor-pointer">
          <button
            type="submit"
            disabled={isSubmitting || !isValid}
            className="p-[14px_16px_12px_16px] bg-purple text-white rounded-[4px] leading-4.5 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
          >
            상담 신청하기
          </button>

          <button
            type="button"
            onClick={() => (window.location.href = "tel:1811-1854")}
            className="p-[14px_16px_12px_16px] bg-white text-purple border-[1px] border-purple rounded-[4px] leading-4.5 cursor-pointer"
          >
            전화 걸기
          </button>
        </div>
      </form>
    </div>
  );
};

export default FormSection;

interface InputFieldProps {
  label: string;
  name: string;
  type?: "text" | "email" | "tel" | "password" | "number";
  placeholder?: string;
  error?: string;
  register?: any;
  maxLength?: number;
}

const InputField = ({
  label,
  name,
  type = "text",
  placeholder,
  error,
  register,
  maxLength,
}: InputFieldProps) => {
  return (
    <fieldset>
      <label htmlFor={name} className="block text-sm text-ground-900 mb-2">
        {label}
      </label>

      <input
        id={name}
        type={type}
        placeholder={placeholder}
        maxLength={maxLength}
        className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple bg-white ${
          error ? "border-red-500" : "border-gray-300"
        }`}
        {...register}
      />

      {error && <p className="mt-1 text-sm text-red-600">{error}</p>}
    </fieldset>
  );
};
