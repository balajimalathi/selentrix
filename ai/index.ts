// import { openai } from "@ai-sdk/openai";
import { deepseek } from "@ai-sdk/deepseek";
import { wrapLanguageModel } from 'ai';
import { ragMiddleware } from "./rag-middleware";

export const customModel = wrapLanguageModel({
  model: deepseek("gpt-4o"),
  middleware: ragMiddleware,
});
