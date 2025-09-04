import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useForm } from "react-hook-form";
import { Level } from "../../../models/models";
import "./Form.css";
export function Form(props) {
    const { register, handleSubmit, formState } = useForm();
    const { isSubmitting } = formState;
    async function send(queryInfo) {
        await Promise.resolve(props.gotIt(queryInfo));
    }
    return (_jsx("div", { className: "Form", children: _jsxs("form", { onSubmit: handleSubmit(send), children: [_jsx("label", { children: "Level: " }), _jsxs("select", { defaultValue: "", ...register("level"), children: [_jsx("option", { disabled: true, value: "", children: "Chose Level..." }), _jsx("option", { value: Level.Junior, children: Level.Junior }), _jsx("option", { value: Level.Mid, children: Level.Mid }), _jsx("option", { value: Level.Senior, children: Level.Senior })] }), _jsx("label", { children: "Company name: " }), _jsx("input", { type: "text", placeholder: "Company name...", ...register("company") }), _jsx("label", { children: "Job title: " }), _jsx("input", { type: "text", placeholder: "Job title...", ...register("jobTitle") }), _jsx("label", { children: "Number of questions: " }), _jsx("input", { type: "number", placeholder: "Number of questions...", min: 1, max: 10, ...register("questionCount") }), _jsx("button", { type: "submit", "data-loading": isSubmitting, children: "\uD83D\uDE80" })] }) }));
}
