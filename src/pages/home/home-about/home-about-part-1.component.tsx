import Header from "@me/components/header.component";

export default function AboutPartOne() {
  return (
    <div className="grid grid-cols-6 gap-4">
      <div className="col-start-2 col-span-4 ...">
        <div className="flex flex-col gap-4 mt-32">
          <Header title={"ABOUT ME"} />

          <p>
            In 2010, just a little guy takes on an adventure as
            <span className="text-primary mx-1 font-medium hover:text-amber-600">
              Java Developer
            </span>
            for 5 years where I fight lots of big features and challenges. It is
            also fundamental to gain valuable knowledge and experience
            dramatically for my future.
          </p>

          <p>
            After that, I've tried to work new positions such as
            <span className="text-primary mx-1 font-medium hover:text-amber-600">
              Front-End | Back-End | Mobile Developer
            </span>
            which open my mind to have a big view of IT field and many amazing
            things coming at me.
          </p>

          <p>
            My main focus these days is building web application with
            <span className="text-primary mx-1 font-medium hover:text-amber-600">
              React | Angular.
            </span>
            Besides of that,
            <span className="text-primary mx-1 font-medium hover:text-amber-600">
              DevOps
            </span>
            is really important at the moment that's why I wanted to take a step
            on learning AWS Certified Solutions Architect.{" "}
            <span className="text-secondary opacity-50 text-sm ml-1 italic">
              (This page is hosted on AWS)
            </span>
          </p>

          <p>
            <span className="text-primary font-bold hover:text-amber-600">
              Fighting!!!
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}
