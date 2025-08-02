import { FaPlus } from "react-icons/fa6";

type Props = {
  isOpen: boolean;
  onToggle: any;
  question: string;
  answer: string;
};

function FAQAccordion({ isOpen, onToggle, question, answer }: Props) {
  return (
    <button
      onClick={onToggle}
      className={`group flex w-full max-w-5xl flex-col items-center justify-between cursor-pointer border border-gray-200 px-4 py-6 text-xs transition-colors ${isOpen ? "bg-primary text-white" : ""}`}
    >
      <div className="flex w-full items-center justify-between text-start">
        <span className="text-sm font-semibold md:text-xl">{question}</span>
        <span
          className={`transform text-sm text-primary  transition-transform  md:text-xl ${isOpen ? "rotate-45 text-white" : "rotate-0"}`}
        >
          <FaPlus />
        </span>
      </div>
      <div
        className={`grid w-full justify-items-start overflow-hidden text-sm transition-all duration-300 ease-in-out md:text-base ${
          isOpen
            ? "mt-4 grid-rows-[1fr] opacity-100"
            : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="flex flex-col justify-items-start overflow-hidden">
          <span className="text-start">{answer}</span>
        </div>
      </div>
    </button>
  );
}

export default FAQAccordion;
