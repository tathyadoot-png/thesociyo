export default function MenuFooter() {
  return (
    <div
      className="
        flex
        flex-col
        gap-8
        border-t
        border-white/10
        pt-8
        md:flex-row
        md:items-end
        md:justify-between
      "
    >
      <div>
        <p
          className="
            text-xs
            uppercase
             
            text-white/35
          "
        >
          Bhopal · Est. 2018
        </p>
      </div>

      <div className="text-right">
        <p
          className="
            text-xs
            uppercase
             
            text-[#fe0000]
          "
        >
          Start Conversation
        </p>
      </div>
    </div>
  );
}