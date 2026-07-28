import type { APIBasePollAnswer, APIPollMedia, RESTAPIPoll } from "discord-api-types/v10";
import { PollLayoutType } from "discord-api-types/v10";

/**
 * Builds a poll to attach to a message. Polls support up to 10 answers
 * and a duration of up to 32 days (defaults to 24 hours).
 */
export class PollBuilder {
  public data: Partial<RESTAPIPoll> = {};
  public readonly answers: APIBasePollAnswer[] = [];

  public constructor(question?: string) {
    if (question !== undefined) this.setQuestion(question);
  }

  /**
   * Sets the poll's question (max 300 characters)
   */
  public setQuestion(question: string | APIPollMedia): this {
    this.data.question = typeof question === "string" ? { text: question } : question;
    return this;
  }

  /**
   * Adds answers to this poll (max 10, text max 55 characters each)
   */
  public addAnswers(...answers: (string | APIPollMedia)[]): this {
    for (const answer of answers) {
      this.answers.push({ poll_media: typeof answer === "string" ? { text: answer } : answer });
    }

    return this;
  }

  /**
   * Sets how long the poll stays open, in hours (max 768 = 32 days, defaults to 24)
   */
  public setDuration(hours: number): this {
    this.data.duration = hours;
    return this;
  }

  /**
   * Sets whether users can select multiple answers
   */
  public setAllowMultiselect(allowMultiselect = true): this {
    this.data.allow_multiselect = allowMultiselect;
    return this;
  }

  /**
   * Sets the poll's layout type
   */
  public setLayoutType(layoutType: PollLayoutType): this {
    this.data.layout_type = layoutType;
    return this;
  }

  public toJSON(): RESTAPIPoll {
    if (this.answers.length < 1 || this.answers.length > 10) {
      throw new RangeError("A poll must have between 1 and 10 answers.");
    }

    // eslint-disable-next-line @typescript-eslint/consistent-type-assertions
    return { ...this.data, answers: this.answers } as RESTAPIPoll;
  }
}
