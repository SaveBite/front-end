"use client";
interface Props {
  id: string;
  error?: boolean;
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
}

const Input = ({ id, error = false, value, setValue }: Props) => {
  return (
    <>
      <input
        value={value}
        type="text"
        className={`px-[12px] py-[26px] border-[1px] ${
          error ? "border-error-500" : "border-black-200"
        } rounded-sm  w-[300px] lg:w-[500px] outline-none caret-primary-500`}
        name={id}
        id={id}
        onChange={(e) => setValue(e.target.value)}
      />
      {error && (
        <span className="text-error-400 font-[400] title2">
          Please Complete this required field.
        </span>
      )}
    </>
  );
};

export default Input;
