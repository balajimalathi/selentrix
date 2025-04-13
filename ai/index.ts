import { deepseek } from "@ai-sdk/deepseek";
import { wrapLanguageModel } from 'ai';
import { ragMiddleware } from "./rag-middleware";

export const customModel = wrapLanguageModel({
  model: deepseek("deepseek-chat", {}),
  middleware: ragMiddleware,
});
