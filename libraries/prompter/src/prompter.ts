import { Prompt, QueryInfo } from "@pza/types";

class Prompter { 

  public getQuestionPrompt(queryInfo: QueryInfo): Prompt {
    const systemContent =
      "You are an expert software engineer interviewing candidates. Ask only technical questions relevant to the specified role and company. Ask exactly the requested number of questions. Provide concise, technically correct model answers. Do not ask behavioral or opinion-based questions. Output must be valid JSON only—no prose, no markdown, no extra text.";

    const userContent = `Write exactly ${queryInfo.questionCount} technical interview questions for a ${queryInfo.level} ${queryInfo.jobTitle} role at ${queryInfo.company}.

Return ONLY a valid JSON array (no markdown fences, no trailing commas, no extra text) with this shape:
[
  { "question": "your question 1...", "answer": "your answer 1..." },
  { "question": "your question 2...", "answer": "your answer 2..." }
]

Requirements:
- Array length must be exactly ${queryInfo.questionCount}.
- Questions: specific, unambiguous, and practical for real-world work on this role (APIs, architecture, data structures/algorithms as relevant, debugging, performance, security, testing).
- Prefer scenario-based questions that require reasoning over memorization.
- Cover a mix of easy/medium/hard difficulty and different subtopics of the role.
- Answers: concise (1–4 sentences) or minimal inline code when appropriate (no markdown code fences).
- Use double quotes for all keys and strings; escape quotes inside strings.
- Do not fabricate proprietary or internal details about the company.
- Do not include any text before or after the JSON.`;

    return { systemContent, userContent };
  }

}

export const prompter = new Prompter();
