import { useState } from "react";
import { ArrowCircleRight } from "../assets/icons/ArrowCircleRight";
import ProjectModal from "./ProjectModal";

type Project = {
  id: number;
  image: string;
  category: string;
  year: string;
  title: string;
  location: string;
  area: string;
  description: string;
};

const projects: Project[] = [
  {
    id: 1,
    image: "/images/slide-two.png",
    category: "Residencia",
    year: "2023",
    title: "Casa calle La Paz",
    location: "La Paz",
    area: "420 m²",
    description:
      "Residencia de 420 m² bajo principios bioclimáticos. Cantera gris, madera de encino y vidrio de piso a techo...",
  },
  {
    id: 2,
    image: "/images/slide-three.png",
    category: "Residencia",
    year: "2023",
    title: "Residencia Moderna",
    location: "Potosí",
    area: "380 m²",
    description:
      "Proyecto moderno con enfoque en iluminación natural y espacios abiertos. lo que buscábamos para nuestro proyecto en Potosí.",
  },
  {
    id: 3,
    image: "/images/slide-one.png",
    category: "Residencia",
    year: "2024",
    title: "Casa Minimalista",
    location: "Oruro",
    area: "450 m²",
    description:
      "Diseño minimalista con integración al entorno natural. lo que buscábamos para nuestro proyecto en Oruro.",
  },
];

export default function ProjectSlider() {
  const [active, setActive] = useState(0);
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const next = () => {
    setActive((prev) => (prev + 1) % projects.length);
  };

  const prev = () => {
    setActive((prev) => (prev - 1 + projects.length) % projects.length);
  };

  const getVisible = () => {
    return [
      projects[(active - 1 + projects.length) % projects.length],
      projects[active],
      projects[(active + 1) % projects.length],
    ];
  };

  const visible = getVisible();
  const selected = selectedIndex !== null ? projects[selectedIndex] : null;

  const nextModal = () => {
    setSelectedIndex((prev) =>
      prev !== null ? (prev + 1) % projects.length : null,
    );
  };

  const prevModal = () => {
    setSelectedIndex((prev) =>
      prev !== null ? (prev - 1 + projects.length) % projects.length : null,
    );
  };

  return (
    <>
      <div className="relative flex flex-col items-center justify-center w-full">
        <button
          onClick={prev}
          className="hidden md:mt-53 md:block absolute left-6 md:left-30 z-30 rotate-180 top-1/2 -translate-y-1/2 transition-all duration-300 hover:scale-110"
        >
          <ArrowCircleRight />
        </button>

        <button
          onClick={next}
          className="hidden md:mt-53 md:block absolute right-6 md:right-30 z-30 top-1/2 -translate-y-1/2 transition-all duration-300 hover:scale-110"
        >
          <ArrowCircleRight />
        </button>

        <div className="flex items-center justify-center gap-4 md:gap-8 w-full">
          {visible.map((project, index) => {
            const isCenter = index === 1;
            const realIndex =
              (active - 1 + index + projects.length) % projects.length;

            return (
              <div
                key={project.id}
                onClick={() => setSelectedIndex(realIndex)}
                className={`
                  relative overflow-hidden transition-all duration-500 cursor-pointer

                  ${
                    isCenter
                      ? "w-[90%] max-w-[420px] h-[620px] md:w-[315px] md:h-[320px] shadow-[8px_16px_16px_rgba(0,0,0,0.5)] z-10"
                      : "hidden md:block w-[315px] h-[280px]"
                  }
                `}
              >
                <img
                  src={project.image}
                  className="w-full h-full object-cover"
                />
                {!isCenter && (
                  <div
                    className={`
                      absolute inset-0
                      ${
                        index === 0
                          ? "bg-[linear-gradient(90deg,rgba(245,240,232,1)_8%,rgba(245,240,232,0.8)_25%,rgba(245,240,232,0)_100%)]"
                          : "bg-[linear-gradient(270deg,rgba(245,240,232,1)_8%,rgba(245,240,232,0.8)_25%,rgba(245,240,232,0)_100%)]"
                      }
                    `}
                  />
                )}

                {isCenter && (
                  <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(255,255,255,0)_0%,rgba(11,43,38,0.85)_85%)]" />
                )}

                {isCenter && (
                  <div className="absolute bottom-4 left-4 text-white">
                    <p className="text-[12px] text-accent-500 font-nunito italic">
                      {project.category} — {project.year}
                    </p>

                    <h3 className="text-[18px] font-nunito text-primary-50">
                      {project.title}
                    </h3>

                    <p className="text-[12px] text-primary-100 font-nunito italic">
                      {project.location} {project.area}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <div className="flex md:hidden gap-6 mt-6">
          <button
            onClick={prev}
            className="rotate-180 transition hover:scale-110"
          >
            <ArrowCircleRight />
          </button>

          <button onClick={next} className="transition hover:scale-110">
            <ArrowCircleRight />
          </button>
        </div>
      </div>

      {selected && selectedIndex !== null && (
        <ProjectModal
          key={selectedIndex}
          project={selected}
          index={selectedIndex}
          onClose={() => setSelectedIndex(null)}
          onNext={nextModal}
          onPrev={prevModal}
        />
      )}
    </>
  );
}
