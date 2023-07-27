import TaxIcon from "@me/styles/img/projects/tax.png";
import PeakviseIcon from "@me/styles/img/projects/peakvise.png";
import UOBIcon from "@me/styles/img/projects/uob.png";
import CTRWowIcon from "@me/styles/img/projects/ctr_wow.png.webp";
import SitefluxIcon from "@me/styles/img/projects/siteflux.png";
import NerlosIcon from "@me/styles/img/projects/nerlos.png";
import InfinitikloudIcon from "@me/styles/img/projects/infinitikloud.webp";
import ParsleyIcon from "@me/styles/img/projects/myp.webp";

import Image from "next/image";

const projects = [
  {
    src: TaxIcon,
    title: "HCM Tax",
    link: "https://hcmtax.gov.vn",
  },
  {
    src: PeakviseIcon,
    title: "Peakvise",
    link: "https://peakvise.ch",
  },
  {
    src: CTRWowIcon,
    title: "CTRWow",
    link: "https://www.ctrwow.com",
  },
  {
    src: UOBIcon,
    title: "UOB Bank",
    link: "https://www.uobgroup.com/uobgroup/default.page",
  },
  {
    src: SitefluxIcon,
    title: "Siteflux",
    link: "https://aiflux.ai/siteflux",
  },
  {
    src: NerlosIcon,
    title: "Nerlos",
    link: "https://apps.apple.com/vn/app/nerlos/id1531683195",
  },
  {
    src: InfinitikloudIcon,
    title: "Infinitikloud",
    link: "https://www.infinitikloud.com",
  },
  {
    src: ParsleyIcon,
    title: "Parsley Health",
    link: "https://www.parsleyhealth.com",
  },
];

export default function Project() {
  return (
    <div id="projects" className="mt-20 flex flex-col gap-3">
      <span className="tracking-widest sticky top-0 md:relative bg-stone-950 text-secondary text-xs font-light tracking-widest opacity-50">
        Projects
      </span>
      Coming soon...
      {/* <div className="grid grid-cols-4 gap-1">
        {projects.map((p, i) => (
          <a
            key={i}
            href={p.link}
            target="_blank"
            className="bg-gray-900 h-36 flex items-center justify-center hover:bg-slate-50  grayscale hover:grayscale-0"
          >
            <div className="w-40 h-16 relative">
              <Image fill src={p.src} title={p.title} alt={p.title} />
            </div>
          </a>
        ))}
      </div> */}
    </div>
  );
}
