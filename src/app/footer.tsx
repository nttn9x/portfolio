export default function Footer() {
  return (
    <div className="footer text-secondary h-44 mt-44 flex justify-center items-center mt-20">
      Built with
      <a
        href="https://nextjs.org/"
        className="text-primary mx-1"
        target="_blank"
      >
        Next.js
      </a>
      and
      <a
        href="https://tailwindcss.com/"
        className="text-primary  mx-1"
        target="_blank"
      >
        Tailwind CSS
      </a>
      , deployed with
      <a href="https://aws.amazon.com/" className="text-primary  mx-1">
        AWS
      </a>
    </div>
  );
}
