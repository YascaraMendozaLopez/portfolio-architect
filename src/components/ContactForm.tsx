import { DropdownIcon } from "../assets/icons/DropdownIcon";
import { RightArrowWithCircleIcon } from "../assets/icons/RightArrowWithCircleIcon";

export const ContactForm = () => {
  return (
    <form className="bg-[#163832] p-6 md:p-8 rounded-xl shadow-2xl flex flex-col gap-5 w-full max-w-[500px] border border-[#3D524F]/30">
      <div className="flex flex-col gap-2">
        <label className="text-accent-500 text-[10px] md:text-xs font-bold uppercase tracking-widest">
          Nombre Completo
        </label>
        <input
          type="text"
          placeholder="Tu nombre"
          className="bg-[#102A26]/50 border border-[#3D524F] p-3 rounded-md text-white focus:border-accent-500 outline-none transition-all placeholder:text-white/20"
        />
      </div>

      <div className="flex flex-col gap-2">
        <label className="text-accent-500 text-[10px] md:text-xs font-bold uppercase tracking-widest">
          Correo Electrónico
        </label>
        <input
          type="email"
          placeholder="ejemplo@gmail.com"
          className="bg-[#102A26]/50 border border-[#3D524F] p-3 rounded-md text-white focus:border-accent-500 outline-none transition-all placeholder:text-white/20"
        />
      </div>

      <div className="flex flex-col gap-2">
        <label className="text-accent-500 text-[10px] md:text-xs font-bold uppercase tracking-widest">
          Ciudad/Provincia
        </label>
        <div className="relative">
          <select className="bg-[#102A26]/50 border border-[#3D524F] p-3 rounded-md text-white w-full appearance-none focus:border-accent-500 outline-none cursor-pointer relative z-10">
            <option
              value=""
              disabled
              selected
              className="bg-[#163832] text-white"
            >
              Elige tu ubicación
            </option>
            <option value="lp" className="bg-[#163832] text-white">
              La Paz
            </option>
            <option value="sc" className="bg-[#163832] text-white">
              Santa Cruz
            </option>
            <option value="pt" className="bg-[#163832] text-white">
              Potosí
            </option>
            <option value="cb" className="bg-[#163832] text-white">
              Cochabamba
            </option>
            <option value="or" className="bg-[#163832] text-white">
              Oruro
            </option>
            <option value="tj" className="bg-[#163832] text-white">
              Tarija
            </option>
            <option value="be" className="bg-[#163832] text-white">
              Beni
            </option>
            <option value="pa" className="bg-[#163832] text-white">
              Pando
            </option>
            <option value="ch" className="bg-[#163832] text-white">
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
          <select className="bg-[#102A26]/50 border border-[#3D524F] p-3 rounded-md text-white w-full appearance-none focus:border-accent-500 outline-none cursor-pointer relative z-10">
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
          className="bg-[#102A26]/50 border border-[#3D524F] p-3 rounded-md text-white focus:border-accent-500 outline-none resize-none transition-all placeholder:text-white/20 text-sm"
        />
      </div>

      <button className="w-full md:w-fit self-center bg-accent-500 text-[#102A26] font-bold py-3 px-10 rounded-xl flex items-center justify-center gap-3 hover:bg-accent-600 transition-all mt-4 group active:scale-95 shadow-lg">
        Enviar mensaje
        <RightArrowWithCircleIcon />
      </button>
    </form>
  );
};
