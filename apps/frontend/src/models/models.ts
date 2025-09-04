export enum Level {
    Junior = "Junior",
    Mid = "Mid",
    Senior= "Senior",
}

export class QueryInfo {
    public level!: Level
    public company!: string;
    public jobTitle!: string;
    public questionCount!: number;
    
}

export type QnA = {
    question: string;
    answer: string;
};
