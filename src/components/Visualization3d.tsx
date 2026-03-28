import { useState, useRef } from "react";
import { ArrowLeftRightIcon } from "../assets/icons/ArrowLeftRight";

type Slide = {
  video?: string;
  title: string;
  highligth: string;
  description: string;
};

const slides: Slide[] = [
  {
    video: "/videos/render1.webm",
    title: "Visualización ",
    highligth: "interior",
    description: "Video o tour interactivo del espacio. El cliente camina por el proyecto antes de construirlo."
  },
  {
    video: "/videos/render2.webm",
    title: "Render ",
    highligth: "fotorrealista",
    description: "Imagen estática de alta resolución. Para presentaciones, permisos y venta de proyectos."
  },
  {
    video: "/videos/render3.webm",
    title: "Recorridos ",
    highligth: "arquitectónicos",
    description: "Modelo 3D del proyecto para análisis de proporciones, sombras y relación con el entorno."
  }
];

export default function Visualization3D() {
  const [index, setIndex] = useState(0);
  const [rotate, setRotate] = useState({ x: 0, y: 0 });
  const videoRef = useRef<HTMLVideoElement>(null);

  const current = slides[index];

  const handleMove = (event: React.MouseEvent) => {
    const x = (event.clientY / window.innerHeight - 0.5) * 6;
    const y = (event.clientX / window.innerWidth - 0.5) * 6;
    setRotate({ x, y });
  };

  const changeSlide = (direction: number) => {
    setIndex((prev) => (prev + direction + slides.length) % slides.length);
  };

  return (
    <div
      onMouseMove={handleMove}
      className="relative h-screen overflow-hidden"
      style={{
        perspective: "1000px",
        transformStyle: "preserve-3d"
      }}
    >
      <video
        ref={videoRef}
        key={index}
        src={current.video}
        autoPlay
        muted
        playsInline
        onEnded={() => changeSlide(1)}
        className="absolute inset-0 w-full h-full object-cover z-10 opacity-20"
        style={{
          transform: "translateZ(-120px) scale(1.3)"
        }}
      />

      <div className="absolute inset-0 bg-linear-to-t from-primary-900 to-primary-400 pointer-events-none z-0 " />

      <div
        className="relative z-20 h-full flex items-end pl-12 pr-12 lg:p-0 lg:pl-32 pb-40 lg:pb-25"
        style={{
          transform: `
            rotateX(${rotate.x}deg)
            rotateY(${rotate.y}deg)
            translateZ(60px)
          `
        }}
      >
        <div className="w-fit backdrop-blur-md bg-primary-900/30 border border-white/10 p-8 mr-0 lg:mr-[50%] rounded-2xl shadow-[0_20px_60px_rgba(0,0,0,0.6)]">
          <p className="text-accent-500 uppercase text-[clamp(1rem,1.2vw,1.3rem)] mb-2">
            Visualización 3D
          </p>

          <h2 className="text-primary-50 text-[clamp(2rem,3vw,4.8rem)] leading-tight">
            {current.title}{" "}
            <span className="text-accent-500 italic">
              {current.highligth}
            </span>
          </h2>

          <p className="text-primary-50 text-[clamp(1.1rem,1.3vw,1.4rem)] mt-6 font-light">
            {current.description}
          </p>
        </div>
      </div>

      <div className="absolute bottom-6 lg:bottom-15 left-1/2 -translate-x-1/2 lg:left-auto lg:translate-x-0 lg:right-20 flex gap-6 z-30">
        <div
          onClick={() => changeSlide(-1)}
          className="flex justify-center items-center size-18 rounded-full backdrop-blur-md hover:bg-primary-900 transition cursor-pointer"
        >
          <ArrowLeftRightIcon
            size="size-14 rotate-180"
            primaryColor="var(--color-primary-50)"
          />
        </div>

        <div
          onClick={() => changeSlide(1)}
          className="flex justify-center items-center size-18 rounded-full backdrop-blur-md hover:bg-primary-900 transition cursor-pointer"
        >
          <ArrowLeftRightIcon
            size="size-14"
            primaryColor="var(--color-primary-50)"
          />
        </div>
      </div>
    </div>
  );
}