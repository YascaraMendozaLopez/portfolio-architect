import { ArrowStudentServiceIcon } from "../assets/icons/ArrowStudentService";

type ServiceItemProps = {
  number: string;
  title: string;
  description: string;
};

export default function ServiceItem({
  number,
  title,
  description
}: ServiceItemProps) {
  return (
    <div className="flex flex-col gap-4 justify-center w-[90%] mx-auto">

      <div className="relative flex items-start gap-4">
        <p className="text-accent-500 text-[clamp(2rem,3vw,4rem)] font-bold relative -top-4">
          {number}
        </p>
        <ArrowStudentServiceIcon size="h-8 absolute top-10 left-5 "/>

        <div className="flex flex-col gap-2">

          <div className="flex items-center gap-3">
            <h3 className="text-accent-500 text-[clamp(1.2rem,1.3vw,1.5rem)] font-bold">
              {title}
            </h3>
          </div>

          <p className="text-primary-50 text-[clamp(1rem,1.1vw,1.2rem)] max-w-fit lg:max-w-sm pl-5">
            {description}
          </p>

        </div>
      </div>

      <div className="w-auto h-px bg-accent-500 mt-2" />

    </div>
  );
}