import { APIMessageComponentButtonInteraction } from "discord-api-types/v10";
import { BaseComponentContext } from "./ComponentContext.js";

export class ButtonContext<S = never> extends BaseComponentContext<S, APIMessageComponentButtonInteraction> {}
