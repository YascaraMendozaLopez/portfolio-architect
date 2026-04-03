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
    description: "Residencia de 420 m² bajo principios bioclimáticos.",
  },
  {
    id: 2,
    image: "/images/slide-three.png",
    category: "Residencia",
    year: "2023",
    title: "Residencia Moderna",
    location: "Potosí",
    area: "380 m²",
    description: "Proyecto moderno con enfoque en iluminación natural...",
  },
  {
    id: 3,
    image: "/images/slide-one.png",
    category: "Residencia",
    year: "2024",
    title: "Casa Minimalista",
    location: "Oruro",
    area: "450 m²",
    description: "Diseño minimalista con integración al entorno natural.",
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
        <div className="flex items-center justify-between md:justify-center gap-0 md:gap-[clamp(1rem,3vw,2rem)] w-full overflow-visible px-0">
          {visible.map((project, index) => {
            const isCenter = index === 1;

            const realIndex =
              (active - 1 + index + projects.length) % projects.length;

            return (
              <div
                key={project.id}
                onClick={() => setSelectedIndex(realIndex)}
                className="relative flex justify-center items-center transition-all duration-500"
              >
                {!isCenter && (
                  <div className="block md:hidden w-[100%] max-w-[50px] aspect-[1/7] opacity-80 scale-90">
                    <div className="w-full h-full overflow-hidden">
                      <img
                        src={project.image}
                        className="w-full h-full object-cover object-center"
                      />
                    </div>
                  </div>
                )}

                <div
                  className={`
                    relative
                    ${
                      isCenter
                        ? "w-[100%] max-w-[300px] aspect-[3/4] md:w-[clamp(260px,22vw,320px)] md:h-[clamp(380px,30vw,380px)] shadow-[8px_16px_16px_rgba(0,0,0,0.5)] z-10"
                        : "hidden md:block w-[clamp(220px,18vw,300px)] h-[clamp(20px,18vw,280px)] opacity-80"
                    }
                  `}
                >
                  <div className="w-full h-full overflow-hidden">
                    <img
                      src={project.image}
                      className="w-full h-full object-cover object-center"
                    />
                  </div>

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
                    <>
                      <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(255,255,255,0)_0%,rgba(11,43,38,0.85)_85%)]" />

                      <div className="absolute bottom-4 left-4 text-white">
                        <p className="text-[clamp(11px,1vw,13px)] text-accent-500 italic">
                          {project.category} — {project.year}
                        </p>

                        <h3 className="text-[clamp(16px,1.5vw,20px)] font-nunito">
                          {project.title}
                        </h3>

                        <p className="text-[clamp(11px,1vw,13px)] italic">
                          {project.location} {project.area}
                        </p>
                      </div>
                    </>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        <div className="flex justify-center items-center gap-8 md:gap-180 mt-[clamp(1.5rem,3vw,2.5rem)]">
          <button
            onClick={prev}
            className="rotate-180 transition hover:scale-110 active:scale-95 p-2 md:p-0"
          >
            <ArrowCircleRight />
          </button>

          <button
            onClick={next}
            className="transition hover:scale-110 active:scale-95 p-2 md:p-0"
          >
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
