import { ArrowUpDownIcon } from "../assets/icons/ArrowUpDown";
import { WhatsappIcon } from "../assets/icons/Whatsapp";
import Button from "../ui/Button";

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

type Props = {
  project: Project;
  index: number;
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
};

export default function ProjectModal({
  project,
  index,
  onClose,
  onNext,
  onPrev,
}: Props) {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center">
      <div
        onClick={onClose}
        className="absolute inset-0 bg-black/80 backdrop-blur-sm"
      />

      <div
        className="
          relative z-10
          w-[95%] md:w-[90%]
          max-w-6xl
          h-[90vh] md:h-[75vh]
          rounded-2xl overflow-hidden
          grid grid-rows-[auto_1fr]
          md:grid-rows-1
          md:grid-cols-[56%_44%]
          bg-[radial-gradient(50%_50%_at_50%_50%,#0B2B26_0%,#051F20_100%)]
          shadow-[0px_8px_8px_rgba(0,0,0,0.25)]
        "
      >
        <div className="h-[220px] sm:h-[260px] md:h-full">
          <img
            src={project.image}
            className="w-full h-full object-cover opacity-25"
          />
        </div>

        <div
          className="
            relative
            p-6 sm:p-8 md:p-8
            flex flex-col
            min-h-0
            overflow-y-auto 
            text-white
          "
        >
          <span
            className="
              text-[50px] sm:text-[70px] md:text-[110px]
              md:ml-[5%]
              font-nunito italic
              text-primary-300
              leading-none
              mb-4
            "
          >
            {String(index + 1).padStart(2, "0")}
          </span>

          <div className="flex flex-col h-full min-h-0 md:px-6">
            <div className="space-y-7 md:space-y-6">
              <div className="space-y-3 md:space-y-4">
                <p className="text-accent-500 text-sm italic">
                  {project.category} — {project.year}
                </p>

                <h2 className="text-xl sm:text-2xl md:text-3xl font-nunito text-primary-50">
                  {project.title}
                </h2>

                <p className="text-primary-100 text-sm md:text-base leading-relaxed max-w-md">
                  {project.description}
                </p>
              </div>

              <div className="flex flex-wrap gap-4 md:gap-6">
                <span className="border border-accent-500 text-accent-500 px-4 py-1 text-sm font-nunito">
                  {project.location}
                </span>

                <span className="border border-accent-500 text-accent-500 px-4 py-1 text-sm font-nunito">
                  {project.year}
                </span>

                <span className="border border-accent-500 text-accent-500 px-4 py-1 text-sm font-nunito">
                  {project.area}
                </span>
              </div>

              <div className="h-[1px] bg-accent-500 w-full" />
            </div>

            <div className="mt-auto pt-8 md:pt-10 flex flex-col gap-6 pb-8">
              <div className="flex flex-col sm:flex-row justify-center gap-4 md:gap-18">
                <button
                  onClick={onPrev}
                  className="
                    cursor-pointer
                    group flex items-center justify-center gap-2
                    px-5 md:px-10 py-2
                    border border-primary-300
                    rounded-lg
                    text-xs md:text-sm
                    font-nunito font-bold text-primary-200
                    transition-all duration-300
                    hover:bg-white/10 hover:text-white hover:border-white
                  "
                >
                  <ArrowUpDownIcon
                    size="size-5 rotate-90"
                    primaryColor="currentColor"
                  />
                  Anterior
                </button>

                <button
                  onClick={onNext}
                  className="
                    cursor-pointer
                    group flex items-center justify-center gap-2
                    px-5 md:px-10 py-2
                    border border-primary-300
                    rounded-lg
                    text-xs md:text-sm
                    font-nunito font-bold text-primary-200
                    transition-all duration-300
                    hover:bg-white/10 hover:text-white hover:border-white
                  "
                >
                  Siguiente
                  <ArrowUpDownIcon
                    size="size-5 rotate-270"
                    primaryColor="currentColor"
                  />
                </button>
              </div>

              <Button
                text="¿Proyecto similar? — Hablemos"
                Icon={WhatsappIcon}
                whatsappMessage={`Hola, estoy interesado en un proyecto como ${project.title} en ${project.location}`}
                customClass="
                  w-full md:w-auto
                  bg-accent-500 text-accent-900
                  px-5 py-3 rounded-xl text-sm font-bold
                  flex items-center justify-center gap-2
                  transition-all duration-300 ease-out
                  hover:bg-primary-50
                  hover:shadow-[0_10px_25px_rgba(0,0,0,0.35)]
                  hover:-translate-y-1
                  active:scale-95
                "
              />
            </div>
          </div>
        </div>

        <button
          onClick={onClose}
          className="absolute top-4 right-4 hover:scale-110 transition cursor-pointer "
        >
          <img
            src="/images/close-circle-broken.svg"
            alt="Cerrar"
            className="w-8 h-8 md:w-10 md:h-10"
          />
        </button>
      </div>
    </div>
  );
}
