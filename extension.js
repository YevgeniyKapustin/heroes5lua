import {
    workspace,
    languages,
    CompletionItem,
    CompletionItemKind,
    Hover,
    MarkdownString
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
                const items = [];

                for (const c of constants) {
                    const item = new CompletionItem(c.label);
                    item.kind = CompletionItemKind.Constant;
                    item.detail = c.detail;
                    item.documentation = c.documentation;
                    items.push(item);
                }

                for (const f of functions) {
                    const item = new CompletionItem(f.label);
                    item.kind = CompletionItemKind.Function;
                    item.detail = f.detail;
                    item.documentation = f.documentation;
                    items.push(item);
                }

                return items;
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
                    const md = new MarkdownString(`**${constant.label}** = ${constant.detail}\n\n${constant.documentation}`);
                    md.isTrusted = true;
                    return new Hover(md);
                }

                const func = functions.find(f => f.label === word);
                if (func) {
                    const md = new MarkdownString(`**${func.detail}**\n\n${func.documentation}`);
                    md.isTrusted = true;
                    return new Hover(md);
                }
            }
        })
    );
}

export function deactivate() {}
