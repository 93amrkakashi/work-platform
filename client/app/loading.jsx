export default function Loading({text}) {
  return (
    <main dir="ltr" className="text-center">
      <div className="w-full min-h-[60vh] flex flex-col justify-center items-center m-auto">
        <div className="newtons-cradle m-b-10">
          <div className="newtons-cradle__dot"></div>
          <div className="newtons-cradle__dot"></div>
          <div className="newtons-cradle__dot"></div>
          <div className="newtons-cradle__dot"></div>
        </div>
        <div className="w-full text-6xl text-indigo-700 font-bold">
          {text ? text: "جارى التحميل"}
        </div>

      </div>
    </main>
  );
}
