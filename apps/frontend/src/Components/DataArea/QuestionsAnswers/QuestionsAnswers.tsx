import { useState } from "react";
import type { QnA } from "../../../models/models";
import "./QuestionsAnswers.css";

type QuestionsAnswersProps = { arr: QnA[] };

export function QuestionsAnswers({ arr }: QuestionsAnswersProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="QuestionsAnswers">
      {arr.map((item, index) => (
        <div
          key={index}
          className={`qna-item ${openIndex === index ? "is-open" : ""}`}
        >
          <button
            className="question"
            aria-expanded={openIndex === index}
            onClick={() =>
              setOpenIndex(openIndex === index ? null : index)
            }
          >
            {item.question}
          </button>

          <p className="answer" data-open={openIndex === index}>
            {item.answer}
          </p>
        </div>
      ))}
    </div>
  );
}
