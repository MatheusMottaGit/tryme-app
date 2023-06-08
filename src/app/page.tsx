
export default function Home() {
  return (
    <main className="w-screen h-screen flex items-center">
      <div className="w-full flex flex-col gap-6 p-nav">
        <h1>Medium length hero headline goes here</h1>

        <span className="font-quicksand text-sm font-normal">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.
        </span>

        <button className="bg-orange rounded-full w-28 font-quicksand font-bold text-sm text-white p-3 shadow-xlarge">
          Start Looking
        </button>
      </div>

      <div></div>
    </main>
  )
}
