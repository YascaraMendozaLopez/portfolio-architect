import { useState, useRef } from "react";
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
  const [animating, setAnimating] = useState(false);
  const [direction, setDirection] = useState<"left" | "right">("right");

  const animate = (dir: "left" | "right", cb: () => void) => {
    setDirection(dir);
    setAnimating(true);
    setTimeout(() => {
      cb();
      setAnimating(false);
    }, 300);
  };

  const next = () => {
    animate("right", () => setActive((prev) => (prev + 1) % projects.length));
  };

  const prev = () => {
    animate("left", () =>
      setActive((prev) => (prev - 1 + projects.length) % projects.length)
    );
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
      prev !== null ? (prev + 1) % projects.length : null
    );
  };

  const prevModal = () => {
    setSelectedIndex((prev) =>
      prev !== null ? (prev - 1 + projects.length) % projects.length : null
    );
  };

  const getAnimClass = (index: number) => {
    if (!animating) return "opacity-100 translate-x-0 scale-100";
    if (index === 1) {
      return direction === "right"
        ? "opacity-0 translate-x-8 scale-95"
        : "opacity-0 -translate-x-8 scale-95";
    }
    if (index === 0) {
      return direction === "right"
        ? "opacity-60 -translate-x-4"
        : "opacity-60 translate-x-4";
    }
    if (index === 2) {
      return direction === "right"
        ? "opacity-60 translate-x-4"
        : "opacity-60 -translate-x-4";
    }
    return "";
  };

  return (
    <>
      <div className="relative flex flex-col items-center justify-center w-full">
        <div className="flex items-center justify-between sm:justify-center gap-4 lg:gap-[clamp(1rem,3vw,2rem)] w-full overflow-visible px-0">
          {visible.map((project, index) => {
            const isCenter = index === 1;
            const realIndex =
              (active - 1 + index + projects.length) % projects.length;

            return (
              <div
                key={`${project.id}-${active}`}
                onClick={() => setSelectedIndex(realIndex)}
                className={`relative flex justify-center items-center transition-all duration-300 ${getAnimClass(index)}`}
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
                        ? "w-[95%] h-[25rem] max-w-[280px] aspect-[3/4] md:w-[clamp(260px,22vw,320px)] md:h-[clamp(380px,30vw,380px)] shadow-[8px_16px_16px_rgba(0,0,0,0.5)] z-10"
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

        <div className="flex w-full justify-center lg:justify-around items-center gap-8 mt-[clamp(1.5rem,3vw,2.5rem)]">
          <div className="w-[60px] h-[60px] flex items-center justify-center overflow-visible mb-1">
            <button
              onClick={prev}
              className="cursor-pointer rotate-180 transition-all duration-300 transform-gpu hover:scale-105 active:scale-95"
            >
              <ArrowCircleRight />
            </button>
          </div>
          <div className="w-[60px] h-[60px] flex items-center justify-center">
            <button
              onClick={next}
              className="cursor-pointer transition-all duration-300 transform-gpu hover:scale-105 active:scale-95"
            >
              <ArrowCircleRight />
            </button>
          </div>
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