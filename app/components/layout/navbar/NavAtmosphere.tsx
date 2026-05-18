export default function NavAtmosphere() {
  return (
    <>
      <div
        className="
          absolute
          left-[-10rem]
          top-[-10rem]
          h-[20rem]
          w-[20rem]
          rounded-full
          bg-[#18090B] 
          blur-3xl
        "
      />

      <div
        className="
          absolute
          right-[-10rem]
          top-[-10rem]
          h-[20rem]
          w-[20rem]
          rounded-full
          bg-white/5
          blur-3xl
        "
      />
    </>
  );
}