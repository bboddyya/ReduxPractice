import { COMMENT_CREATE } from "./types";
import { errorOn } from "./actions";

const badWords = [
  "ниггер",
  "козел",
  "сука",
  "пидорас",
  "тварь",
  "дурак",
  "мудак",
  "падла",
  "чмо",
  "уебище",
  "ебан",
  "ебанное",
  "говно",
  "хуйня",
  "тварь",
  "скотина",
  "еблан",
  "конченный",
  "хуесос",
  "пизда",
];

export function spamFilter(store) {
  return function (next) {
    return function (action) {
      if (action.type === COMMENT_CREATE) {
        const hasBadWords = badWords.some((res) =>
          action.data.text.includes(res)
        );
        if (hasBadWords) {
          return store.dispatch(
            errorOn(
              "Просьба - не материтесь. Можете не в зоне группы материться друг на друга, но в группе, пожалуйста, не материться. Ну правда неприятно, если в группу заходишь, а там матом ВООБЩЕ ДОХРЕНА... ОУУУ  "
            )
          );
        }
      }
      return next(action);
    };
  };
}
