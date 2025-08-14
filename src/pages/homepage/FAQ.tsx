import { useState } from 'react';
import FAQAccordion from '../../components/ui/FAQAccordion';

type TFaq = {
  question: string;
  answer: string;
};

const FAQQuestions: TFaq[] = [
  {
    question: 'How do I book a hiking tour?',
    answer:
      'To book a tour, choose the hiking trail, select your date and group size, and complete the booking process online. Once your payment is confirmed, you’ll receive an email with your booking details and itinerary.',
  },
  {
    question: 'What is the cancellation policy for hiking tours?',
    answer:
      'For a full refund, cancellations must be made at least 48 hours before the tour. Cancellations within 48 hours are non-refundable. Please review our full cancellation policy for details.',
  },
  {
    question: 'Do I need prior hiking experience?',
    answer:
      'Our trails vary in difficulty. We offer beginner-friendly routes as well as challenging trails. Please check each trail’s difficulty level and consult with us if you’re unsure which trail is best for you.',
  },
  {
    question: 'What should I bring for the hike?',
    answer:
      'For most hikes, we recommend comfortable hiking boots, water, sunscreen, and snacks. We’ll provide a full packing list based on your selected trail with your booking confirmation.',
  },
  {
    question: 'Can I reschedule my hike?',
    answer:
      'Yes, you can reschedule up to 48 hours in advance, subject to availability. To reschedule, contact our support team for assistance.',
  },
  {
    question: 'Are pets allowed on the hikes?',
    answer:
      'Pets are allowed on some trails, but restrictions apply. Please check the specific trail details or contact us to confirm if pets are permitted on your chosen route.',
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleToggle = (index: number | null) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div id="faq" className="grid justify-center px-4 py-40 md:px-8">
      <div className="flex flex-col gap-y-10">
        <h2 className="text-xl font-semibold md:text-5xl">
          Frequently Asked Questions
        </h2>
        <div className="flex flex-col">
          {FAQQuestions.map((faq, index) => (
            <FAQAccordion
              key={index}
              isOpen={openIndex === index}
              onToggle={() => handleToggle(index)}
              question={faq.question}
              answer={faq.answer}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
