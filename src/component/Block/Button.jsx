export default function Button({ name }) {
  return (
    <div className=" h-[28px] px-[20px] py-[4px] flex justify-center items-center rounded-[12px] bg-gray-200 text-sm not-italic font-medium leading-5 text-gray-600 ">
      {name}
    </div>
  );
}
