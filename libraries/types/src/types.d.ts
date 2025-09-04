export declare enum Level {
    Junior = "Junior",
    Mid = "Mid",
    Senior = "Senior"
}
export declare class QueryInfo {
    level: Level;
    company: string;
    jobTitle: string;
    questionCount: number;
}
export type Prompt = {
    systemContent: string;
    userContent: string;
};
