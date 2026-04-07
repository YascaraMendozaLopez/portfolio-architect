import { useState, useEffect, useRef } from "react";
import { QuoteMarksIcon } from "../assets/icons/QuoteMarks";
import { ArrowUpDownIcon } from "../assets/icons/ArrowUpDown";

type Review = {
  text: string;
  author: string;
  year: string;
};

type ReviewProps = {
  reviews: Review[];
};

export default function ReviewsSlider({ reviews }: ReviewProps) {
  const [index, setIndex] = useState<number>(0);
  const [visibleCards, setVisibleCards] = useState<number>(3);
  const [cardHeight, setCardHeight] = useState<number>(0);

  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const updateCards = () => {
      if (window.innerWidth < 768) {
        setVisibleCards(2);
      } else {
        setVisibleCards(3);
      }
    };

    updateCards();
    window.addEventListener("resize", updateCards);

    return () => window.removeEventListener("resize", updateCards);
  }, []);

  useEffect(() => {
    if (cardRef.current) {
      const height = cardRef.current.offsetHeight;
      const gap = 56;
      setCardHeight(height + gap);
    }
  }, [reviews]);

  const handleScroll = (direction: number) => {
    setIndex((prev) => {
      let next = prev + direction;
      const maxIndex = Math.max(0, reviews.length - visibleCards);

      if (next < 0) next = 0;
      if (next > maxIndex) next = maxIndex;

      return next;
    });
  };

  return (
    <div className="relative w-full">
      <div className="h-[30rem] overflow-hidden relative">
        <div
          className="flex flex-col gap-14 transition-transform duration-500 ease-out will-change-transform"
          style={{
            transform: `translateY(-${index * cardHeight}px)`
          }}
        >
          {reviews.map((review, i) => {
            const isRight = i % 2 !== 0;

            return (
              <div
                key={i}
                ref={i === 0 ? cardRef : null}
                className={`
                  border border-accent-500 p-6 bg-accent-500/10 
                  flex gap-4 relative mx-6
                  ${isRight ? "ml-auto translate-x-6" : "-translate-x-6"}
                `}
              >
                <div className="w-8 h-0.5 bg-accent-500 mt-2"></div>

                <p className="text-primary-100 text-[clamp(1rem,1.1vw,1.2rem)] pr-16">
                  {review.text}
                  <span className="text-[clamp(0.9em,1vw,1.1rem)] text-primary-50 block mt-1 italic">
                    {review.author} — {review.year}
                  </span>
                </p>

                <div className="absolute right-6 top-6 opacity-80">
                  <QuoteMarksIcon size="size-14" />
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="justify-end gap-4 mt-6 flex">
        <div
          onClick={() => handleScroll(-1)}
          className="group cursor-pointer rotate-180 p-2 rounded-full bg-transparent hover:bg-primary-900/60 transition-all duration-300"
        >
          <ArrowUpDownIcon className="size-12  transform transition-all duration-300 ease-in-out group-hover:scale-110" />
        </div>

        <div
          onClick={() => handleScroll(1)}
          className="group cursor-pointer p-2 rounded-full bg-transparent hover:bg-primary-900/60 transition-all duration-300"
        >
          <ArrowUpDownIcon className="size-12 transform transition-all duration-300 ease-in-out group-hover:scale-110" />
        </div>
      </div>
    </div>
  );
}