export default function Buttons({children}) {

    return(
        <>
       <button className="relative cursor-pointer opacity-90 hover:opacity-100 transition-opacity p-0.5 rounded-2xl bg-linear-to-t from-[#8122b0] to-[#dc98fd] active:scale-95">
        <span className="w-full h-full flex items-center gap-2 px-8 py-3 text-white rounded-[14px] bg-linear-to-t from-[#a62ce2] to-[#c045fc]">
        {children}
        </span>
       </button>
    </>
    )
}