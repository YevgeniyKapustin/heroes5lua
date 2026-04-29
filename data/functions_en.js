export default [
    {
        label: "GetGameVar",
        detail: "GetGameVar(name: string) -> string | nil",
        documentation: `
Returns the value of a general game variable.

**Parameters:**
- \`name\` — the name of the variable to read.

**Return:**
Value of the variable, or an empty string if it does not exist.

**Example:**
\`\`\`lua
local gold = GetGameVar("GOLD_AMOUNT")
\`\`\`
`
    }
];
