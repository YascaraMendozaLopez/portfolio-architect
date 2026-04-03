import { DropdownIcon } from "../assets/icons/DropdownIcon";
import { RightArrowWithCircleIcon } from "../assets/icons/RightArrowWithCircleIcon";

export const ContactForm = () => {
  return (
    <form className="bg-primary-500 p-8 rounded-xl shadow-2xl flex flex-col gap-5 w-full max-w-[500px]">
      <div className="flex flex-col gap-2">
        <label className="text-accent-500 text-sm font-bold uppercase tracking-wider">
          Nombre
        </label>
        <input
          type="text"
          placeholder="Tu nombre"
          className="bg-transparent border border-[#3D524F] p-3 rounded-md text-white focus:border-accent-500 outline-none transition-colors"
        />
      </div>

      <div className="flex flex-col gap-2">
        <label className="text-accent-500  text-sm font-bold uppercase tracking-wider">
          Correo Electrónico
        </label>
        <input
          type="email"
          placeholder="ejemplo@gmail.com"
          className="bg-transparent border border-[#3D524F] p-3 rounded-md text-white focus:border-accent-500 outline-none transition-colors"
        />
      </div>

      <div className="flex flex-col gap-2">
        <label className="text-accent-500 text-sm font-bold uppercase tracking-wider">
          Ciudad/Provincia
        </label>
        <div className="relative">
          <select className="bg-transparent border border-[#3D524F] p-3 rounded-md text-white w-full appearance-none focus:border-accent-500 outline-none cursor-pointer">
            <option value="" disabled selected>
              Elige tu ciudad/provincia
            </option>
            <option value="lp">La Paz</option>
            <option value="sc">Santa Cruz</option>
          </select>
          <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-accent-500">
            <DropdownIcon />
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <label className="text-[#C5A267] text-sm font-bold uppercase tracking-wider">
          Proyecto
        </label>
        <div className="relative">
          <select className="bg-transparent border border-[#3D524F] p-3 rounded-md text-white w-full appearance-none focus:border-[#C5A267] outline-none cursor-pointer">
            <option value="" disabled selected>
              Elige tu proyecto
            </option>
            <option value="web">Desarrollo Web</option>
            <option value="ads">Publicidad Digital</option>
          </select>
          <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-[#C5A267]">
            <DropdownIcon />
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <label className="text-[#C5A267] text-sm font-bold uppercase tracking-wider">
          Cuentame tu proyecto
        </label>
        <textarea
          placeholder="Describe brevemente lo que tienes en mente"
          rows={4}
          className="bg-transparent border border-[#3D524F] p-3 rounded-md text-white focus:border-[#C5A267] outline-none resize-none transition-colors"
        />
      </div>

      <button className="mx-auto w-[231px] h-[49px] bg-[#C5A267] text-[#102A26] font-bold py-4 px-6 rounded-xl flex items-center justify-center gap-3 hover:bg-[#b38f55] transition-all mt-2 group">
        Enviar mensaje
        <RightArrowWithCircleIcon />
      </button>
    </form>
  );
};
