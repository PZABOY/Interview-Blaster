import type { QnA, QueryInfo } from "../../../models/models";
import { fetcherService } from "../../../Services/FetcherService";
import { Form } from "../Form/Form";
import { QuestionsAnswers } from "../QuestionsAnswers/QuestionsAnswers";
import { useState } from "react";



export function UiManager() {

    const [arr, setArr] = useState<QnA[]>([]);

    async function fetch(queryInfo: QueryInfo) {
        try {
            const arr = await fetcherService.getQnA(queryInfo);
            setArr(arr);
        }
        catch (err: any) {
            alert(err.message);
        }
    }

    return (
        <div className="UiManager">
            
            <Form gotIt={fetch}/>

            <QuestionsAnswers arr={arr} />

        </div>
    );

}
