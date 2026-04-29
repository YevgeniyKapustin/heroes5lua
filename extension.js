import {
    workspace,
    languages,
    CompletionItem,
    CompletionItemKind,
    Hover
} from 'vscode';

import constants_ru from "./data/constants_ru.js";
import constants_en from "./data/constants_en.js";
import functions_en from "./data/functions_en.js";
import functions_ru from "./data/functions_ru.js";

export function activate(context) {

    const config = workspace.getConfiguration("heroes5lua");
    const lang = config.get("language");

    const constants = lang === "ru" ? constants_ru : constants_en;
    const functions = lang === "ru" ? functions_ru : functions_en;

    console.log("Language selected:", lang);

    context.subscriptions.push(
        languages.registerCompletionItemProvider('heroes5lua', {
            provideCompletionItems() {
                return constants.map(c => {
                    const item = new CompletionItem(c.label);
                    item.kind = CompletionItemKind.Constant;
                    item.detail = c.detail;
                    item.documentation = c.documentation;
                    return item;
                });
            }
        })
    );

    context.subscriptions.push(
        languages.registerHoverProvider('heroes5lua', {
            provideHover(document, position) {
                const range = document.getWordRangeAtPosition(position);
                const word = document.getText(range);

                console.log("Hover word:", word);

                const constant = constants.find(c => c.label === word);
                if (constant) {
                    return new Hover(
                        `**${constant.label}** = ${constant.detail}\n\n${constant.documentation}`
                    );
                }
                    const func = functions.find(f => f.label === word);
                if (func) {
                    return new Hover(
                        `**${func.detail}**\n\n${func.documentation}`
                    );
                }
            }
        })
    );
}

export function deactivate() {}
