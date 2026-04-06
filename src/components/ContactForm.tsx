import { useState } from "react";
import { DropdownIcon } from "../assets/icons/DropdownIcon";
import { RightArrowWithCircleIcon } from "../assets/icons/RightArrowWithCircleIcon";
import Button from "../ui/Button";
import emailjs from "@emailjs/browser";
import { success } from "astro:schema";
import { EmailSuccessIcon } from "../assets/icons/EmailSuccess";
import { EmailErrorIcon } from "../assets/icons/EmailError";

export const ContactForm = () => {
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const handleSubmit = (e: any) => {
    e.preventDefault();

    const form = e.currentTarget;

    emailjs.sendForm(
      import.meta.env.PUBLIC_EMAILJS_SERVICE_ID,
      import.meta.env.PUBLIC_EMAILJS_TEMPLATE_ID,
      form,
      import.meta.env.PUBLIC_EMAILJS_PUBLIC_KEY
    )
    .then(() => {
      setStatus("success");
      form.reset();
    })
    .catch(() => {
      setStatus("error");
    });
  };
  return (
    <form onSubmit={handleSubmit} className="bg-primary-500 p-6 md:p-8 rounded-xl shadow-xl flex flex-col gap-5 w-full max-w-[500px] ">
      <div className="flex flex-col gap-2">
        <label className="text-accent-500 text-[10px] md:text-xs font-bold uppercase tracking-widest">
          Nombre Completo
        </label>
        <input
          type="text"
          name="name"
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
          name="email"
          placeholder="ejemplo@gmail.com"
          className="bg-accent-500/5 border border-primary-300 p-3 rounded-md text-white focus:border-accent-500 outline-none transition-all placeholder:text-accent-500/50"
        />
      </div>

      <div className="flex flex-col gap-2">
        <label className="text-accent-500 text-[10px] md:text-xs font-bold uppercase tracking-widest">
          Ciudad/Provincia
        </label>
        <div className="relative">
          <select name="location" defaultValue="" className="bg-accent-500/5 border border-primary-300 p-3 rounded-md text-primary-50 w-full appearance-none focus:border-accent-500 outline-none cursor-pointer relative z-10">
            <option
              value=""
              disabled
              className="bg-primary-500 text-accent-500 "
            >
              Elige tu ubicación
            </option>
            <option value="La Paz" className="bg-primary-500 text-primary-50">
              La Paz
            </option>
            <option value="Santa Cruz" className="bg-primary-500 text-primary-50">
              Santa Cruz
            </option>
            <option value="Potosí" className="bg-primary-500 text-primary-50">
              Potosí
            </option>
            <option value="Cochabamba" className="bg-primary-500 text-primary-50">
              Cochabamba
            </option>
            <option value="Oruro" className="bg-primary-500 text-primary-50">
              Oruro
            </option>
            <option value="Tarija" className="bg-primary-500 text-primary-50">
              Tarija
            </option>
            <option value="Beni" className="bg-primary-500 text-primary-50">
              Beni
            </option>
            <option value="Pando" className="bg-primary-500 text-primary-50">
              Pando
            </option>
            <option value="Chuquisaca" className="bg-primary-500 text-primary-50">
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
          <select name="service" defaultValue="" className="bg-accent-500/5 border border-primary-300 p-3 rounded-md text-primary-50 w-full appearance-none focus:border-accent-500 outline-none cursor-pointer relative z-10">
            <option
              value=""
              disabled
              className="bg-primary-500 text-primary-50"
            >
              ¿Qué necesitas?
            </option>
            <option value="planos" className="bg-primary-500 text-primary-50">
              Diseño de Planos
            </option>
            <option value="relevamiento" className="bg-primary-500 text-primary-50">
              Plano de Relevamiento
            </option>
            <option value="lote" className="bg-primary-500 text-primary-50">
              Plano de Lote
            </option>
            <option value="avaluo" className="bg-primary-500 text-primary-50">
              Avalúo de Propiedades
            </option>
            <option value="otros" className="bg-primary-500 text-primary-50">
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
          name="message"
          className="bg-accent-500/5 border border-primary-300 p-3 rounded-md text-primary-50 focus:border-accent-500 outline-none resize-none transition-all placeholder:text-accent-500/50 text-sm"
        />
      </div>
      <Button
        customClass="z-20 flex items-center justify-center gap-4 rounded-xl px-8 py-3 w-fit text-[clamp(1rem,1.1vw,1.2rem)] mx-auto font-bold shadow-xl bg-accent-500 text-accent-800  hover:bg-primary-50 hover:shadow-[2px_3px_2px_rgb(0,0,0,0.5)] transition-all duration-300 hover:scale-105 cursor-pointer mt-4"
        text="Enviar mensaje"
        IconRight={RightArrowWithCircleIcon}
        iconColor='var(--color-accent-800)'
        type="submit"
      />
      {status !== "idle" && (
        <div className="fixed inset-0 z-9999 flex items-center justify-center bg-primary-900 backdrop-blur-2xl">
          
          <div className="bg-primary-500 border border-accent-500/30 rounded-2xl py-8 px-4 lg:px-16 w-fit mx-4 text-center shadow-2xl">
            <div className="w-fit mx-auto my-4">
              {status === "success" ? <EmailSuccessIcon/> : <EmailErrorIcon/> }
            </div>
            <h3 className="text-xl font-semibold text-primary-50 mb-2">
              {status === "success" ? "Mensaje enviado" : "Error al enviar"}
            </h3>

            <p className="text-primary-100/70 text-sm mb-6">
              {status === "success"
                ? "Te responderé lo antes posible."
                : "Intenta nuevamente en unos segundos."}
            </p>

            <button
              onClick={() => setStatus("idle")}
              className="bg-accent-500 text-accent-900 px-6 py-2 rounded-lg font-medium hover:bg-primary-50 hover:shadow-[2px_4px_2px_rgb(0,0,0,0.5)] transition-all duration-300  text-center hover:scale-105 cursor-pointer"
            >
              Cerrar
            </button>

          </div>
        </div>
      )}
    </form>
    
  );
};
