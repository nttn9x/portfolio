import Header from "@me/components/header.component";

const skills = [
  {
    name: "WEB APPLICATION",
  },
  {
    name: "MOBILE",
  },
  {
    name: "TRAINING",
  },
];

export default function AboutPartTwo() {
  return (
    <>
      <div className="flex flex-col gap-4">
        <div className="mt-20 grid grid-cols-6 gap-4">
          <div className="col-start-2 col-span-4 ...">
            <div className="flex flex-col gap-4 mt-32">
              <Header title={"WHAT I DO"} />
            </div>
          </div>
        </div>

        <div>
          {skills.map((s, i) => (
            <div key={i} className="grid grid-cols-6 border-y border-gray-800">
              <div className="col-start-2 col-span-4 ... relative">
                <h2 className="heading-mask font-bold text-6xl tracking-widest z-10">
                  {s.name}
                </h2>
                <h2 className="font-bold absolute top-0 left-0 text-6xl tracking-widest opacity-20">
                  {s.name}
                </h2>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
