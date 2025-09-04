import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { fetcherService } from "../../../Services/FetcherService";
import { Form } from "../Form/Form";
import { QuestionsAnswers } from "../QuestionsAnswers/QuestionsAnswers";
import { useState } from "react";
export function UiManager() {
    const [arr, setArr] = useState([]);
    async function fetch(queryInfo) {
        try {
            const arr = await fetcherService.getQnA(queryInfo);
            setArr(arr);
        }
        catch (err) {
            alert(err.message);
        }
    }
    return (_jsxs("div", { className: "UiManager", children: [_jsx(Form, { gotIt: fetch }), _jsx(QuestionsAnswers, { arr: arr })] }));
}
