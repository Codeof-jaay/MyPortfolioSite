
const Resume = () => {
  return (
  <div
      className="flex flex-col md:flex-row items-start gap-5 w-3xl mb-10 md:space-x-10" >
      <a className="w-full " href="/Resume.pdf" download style={{ textDecoration: 'none' }}>
      <button className="w-full px-1 py-3 md:py-6 text-lg font-medium text-center cursor-pointer bg-white/10 hover:bg-white/5 text-white/60 hover:text-white/80 transition-all border-2 border-white/20 backdrop-blur-xl hover:scale-x-105  hover:border-lavender/50 rounded-2xl shadow-[inset_0_0_10px_rgba(255,255,255,0.2),0_8px_32px_rgba(0,0,0,0.37)]" style={{}}>
        Download My Resume!
      </button>
      </a>
    </div>
  )
}

export default Resume