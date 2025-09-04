import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
import "./QuestionsAnswers.css";
export function QuestionsAnswers({ arr }) {
    const [openIndex, setOpenIndex] = useState(null);
    return (_jsx("div", { className: "QuestionsAnswers", children: arr.map((item, index) => (_jsxs("div", { className: `qna-item ${openIndex === index ? "is-open" : ""}`, children: [_jsx("button", { className: "question", "aria-expanded": openIndex === index, onClick: () => setOpenIndex(openIndex === index ? null : index), children: item.question }), _jsx("p", { className: "answer", "data-open": openIndex === index, children: item.answer })] }, index))) }));
}
