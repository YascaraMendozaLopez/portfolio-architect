import { DropdownIcon } from "../assets/icons/DropdownIcon";
import { RightArrowWithCircleIcon } from "../assets/icons/RightArrowWithCircleIcon";
import Button from "../ui/Button";

export const ContactForm = () => {
  return (
    <form className="bg-primary-500 p-6 md:p-8 rounded-xl shadow-xl flex flex-col gap-5 w-full max-w-[500px] ">
      <div className="flex flex-col gap-2">
        <label className="text-accent-500 text-[10px] md:text-xs font-bold uppercase tracking-widest">
          Nombre Completo
        </label>
        <input
          type="text"
          placeholder="Tu nombre"
          className="bg-accent-500/5 border border-primary-300 p-3 rounded-md text-white focus:border-accent-500 outline-none transition-all placeholder:text-accent-500/50"
        />
      </div>

      <div className="flex flex-col gap-2">
        <label className="text-accent-500 text-[10px] md:text-xs font-bold uppercase tracking-widest">
          Correo Electrónico
        </label>
        <input
          type="email"
          placeholder="ejemplo@gmail.com"
          className="bg-accent-500/5 border border-primary-300 p-3 rounded-md text-white focus:border-accent-500 outline-none transition-all placeholder:text-accent-500/50"
        />
      </div>

      <div className="flex flex-col gap-2">
        <label className="text-accent-500 text-[10px] md:text-xs font-bold uppercase tracking-widest">
          Ciudad/Provincia
        </label>
        <div className="relative">
          <select className="bg-accent-500/5 border border-primary-300 p-3 rounded-md text-primary-50 w-full appearance-none focus:border-accent-500 outline-none cursor-pointer relative z-10">
            <option
              value=""
              disabled
              selected
              className="bg-primary-500 text-accent-500 "
            >
              Elige tu ubicación
            </option>
            <option value="lp" className="bg-primary-500 text-primary-50">
              La Paz
            </option>
            <option value="sc" className="bg-primary-500 text-primary-50">
              Santa Cruz
            </option>
            <option value="pt" className="bg-primary-500 text-primary-50">
              Potosí
            </option>
            <option value="cb" className="bg-primary-500 text-primary-50">
              Cochabamba
            </option>
            <option value="or" className="bg-primary-500 text-primary-50">
              Oruro
            </option>
            <option value="tj" className="bg-primary-500 text-primary-50">
              Tarija
            </option>
            <option value="be" className="bg-primary-500 text-primary-50">
              Beni
            </option>
            <option value="pa" className="bg-primary-500 text-primary-50">
              Pando
            </option>
            <option value="ch" className="bg-primary-500 text-primary-50">
              Chuquisaca
            </option>
          </select>
          <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-accent-500 z-20">
            <DropdownIcon />
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <label className="text-accent-500 text-[10px] md:text-xs font-bold uppercase tracking-widest">
          Servicio de Interés
        </label>
        <div className="relative">
          <select className="bg-accent-500/5 border border-primary-300 p-3 rounded-md text-primary-50 w-full appearance-none focus:border-accent-500 outline-none cursor-pointer relative z-10">
            <option
              value=""
              disabled
              selected
              className="bg-[#163832] text-white"
            >
              ¿Qué necesitas?
            </option>
            <option value="planos" className="bg-[#163832] text-white">
              Diseño de Planos
            </option>
            <option value="relevamiento" className="bg-[#163832] text-white">
              Plano de Relevamiento
            </option>
            <option value="lote" className="bg-[#163832] text-white">
              Plano de Lote
            </option>
            <option value="avaluo" className="bg-[#163832] text-white">
              Avalúo de Propiedades
            </option>
            <option value="otros" className="bg-[#163832] text-white">
              Otros Proyectos
            </option>
          </select>
          <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-accent-500 z-20">
            <DropdownIcon />
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <label className="text-accent-500 text-[10px] md:text-xs font-bold uppercase tracking-widest">
          Cuéntame tu proyecto
        </label>
        <textarea
          placeholder="Describe brevemente lo que tienes en mente"
          rows={3}
          className="bg-accent-500/5 border border-primary-300 p-3 rounded-md text-priamry-50 focus:border-accent-500 outline-none resize-none transition-all placeholder:text-accent-500/50 text-sm"
        />
      </div>
      <Button
        customClass="z-20 flex items-center justify-center gap-4 rounded-xl px-8 py-3 w-fit text-[clamp(1rem,1.1vw,1.2rem)] mx-auto font-bold shadow-xl bg-accent-500 text-accent-800  hover:bg-primary-50 hover:shadow-[2px_3px_2px_rgb(0,0,0,0.5)] transition-all duration-300 hover:scale-105 cursor-pointer mt-4"
        text="Enviar mensaje"
        IconRight={RightArrowWithCircleIcon}
        iconColor='var(--color-accent-800)'
      />
    </form>
  );
};
