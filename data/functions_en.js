export default [
  {
    label: "sqrt",
    detail: "sqrt(number: number) -> number",
    documentation: `
Returns the square root of a number.

**Parameters:**
- \`number\` — value to compute the square root of.

**Returns:**
Square root of the input value.

**Example:**
\`\`\`lua
local r = sqrt(9)  -- 3
\`\`\`
`
  },
  {
    label: "mod",
    detail: "mod(a: number, b: number) -> number",
    documentation: `
Returns the remainder of dividing \`a\` by \`b\`.

**Parameters:**
- \`a\` — dividend.
- \`b\` — divisor.

**Returns:**
Remainder of the division.

**Example:**
\`\`\`lua
local r = mod(10, 3)  -- 1
\`\`\`
`
  },
  {
    label: "random",
    detail: "random(max: number) -> number",
    documentation: `
Returns a random integer from 0 to \`max - 1\`.

**Parameters:**
- \`max\` — upper bound (exclusive).

**Returns:**
Random integer in range [0, max-1].

**Example:**
\`\`\`lua
local r = random(5)  -- 0..4
\`\`\`
`
  },
  {
    label: "sleep",
    detail: "sleep(ticks: number) -> void",
    documentation: `
Pauses execution for a number of time segments (1 segment = 1/20 sec).

**Parameters:**
- \`ticks\` — number of segments to wait.

**Example:**
\`\`\`lua
sleep(20)  -- 1 second
\`\`\`
`
  },
  {
    label: "parse",
    detail: "parse(code: string) -> function",
    documentation: `
Compiles a string into a Lua function.

**Parameters:**
- \`code\` — string containing Lua code.

**Returns:**
A function that executes the provided code.

**Example:**
\`\`\`lua
parse("print(123)")()
\`\`\`
`
  },
  {
    label: "print",
    detail: "print(...values: any) -> void",
    documentation: `
Prints values to the game console.

**Example:**
\`\`\`lua
print("Hello", 123)
\`\`\`
`
  },
  {
    label: "print_to",
    detail: "print_to(filename: string, ...values: any) -> void",
    documentation: `
Writes values to a file.

**Parameters:**
- \`filename\` — target file.

**Example:**
\`\`\`lua
print_to("log.txt", "Start", 42)
\`\`\`
`
  },
  {
    label: "create_file",
    detail: "create_file(name: string) -> string",
    documentation: `
Creates a new file and returns its name.

**Parameters:**
- \`name\` — file name.

**Returns:**
File name.

**Example:**
\`\`\`lua
local f = create_file("data.txt")
\`\`\`
`
  },
  {
    label: "open_file",
    detail: "open_file(name: string) -> string",
    documentation: `
Opens an existing file.

**Parameters:**
- \`name\` — file name.

**Returns:**
File name.

**Example:**
\`\`\`lua
local f = open_file("data.txt")
\`\`\`
`
  },
  {
    label: "ERRORMESSAGE",
    detail: "ERRORMESSAGE(message: string) -> void",
    documentation: `
Shows an error message.

**Parameters:**
- \`message\` — text to display.

**Example:**
\`\`\`lua
ERRORMESSAGE("Something went wrong!")
\`\`\`
`
  },
  {
    label: "startThread",
    detail: "startThread(func: function, ...params: any) -> void",
    documentation: `
Starts a new script thread.

**Parameters:**
- \`func\` — function to run.
- \`params\` — parameters passed to the function.

**Example:**
\`\`\`lua
startThread(MyLoop, 10)
\`\`\`
`
  },
  {
    label: "doFile",
    detail: "doFile(path: string) -> void",
    documentation: `
Executes a Lua file.

**Parameters:**
- \`path\` — path to the script.

**Example:**
\`\`\`lua
doFile("/scripts/myscript.lua")
\`\`\`
`
  },
  {
    label: "GetDifficulty",
    detail: "GetDifficulty() -> number",
    documentation: `
Returns the current game difficulty level.

**Example:**
\`\`\`lua
local d = GetDifficulty()
\`\`\`
`
  },
  {
    label: "consoleCmd",
    detail: "consoleCmd(cmd: string) -> void",
    documentation: `
Executes a console command.

**Parameters:**
- \`cmd\` — command string.

**Example:**
\`\`\`lua
consoleCmd("add_gold 1000")
\`\`\`
`
  },
  {
    label: "SetGameVar",
    detail: "SetGameVar(name: string, value: string) -> void",
    documentation: `
Sets a global game variable.

**Parameters:**
- \`name\` — variable name.
- \`value\` — value to assign.

**Example:**
\`\`\`lua
SetGameVar("GOLD_AMOUNT", "5000")
\`\`\`
`
  },
  {
    label: "GetGameVar",
    detail: "GetGameVar(name: string) -> string",
    documentation: `
Returns the value of a global game variable.

**Parameters:**
- \`name\` — variable name.

**Returns:**
String value or empty string.

**Example:**
\`\`\`lua
local gold = GetGameVar("GOLD_AMOUNT")
\`\`\`
`
  },
  {
    label: "Save",
    detail: "Save(name: string) -> void",
    documentation: `
Saves the game.

**Parameters:**
- \`name\` — save name.

**Example:**
\`\`\`lua
Save("autosave")
\`\`\`
`
  },
  {
    label: "Load",
    detail: "Load(name: string) -> void",
    documentation: `
Loads a saved game.

**Parameters:**
- \`name\` — save name.

**Example:**
\`\`\`lua
Load("autosave")
\`\`\`
`
  },
  {
    label: "TutorialSetBlink",
    detail: "TutorialSetBlink(id: string, state: number) -> void",
    documentation: `
Enables or disables blinking highlight for a tutorial element.

**Parameters:**
- \`id\` — element ID.
- \`state\` — 1 = on, 0 = off.
`
  },
  {
    label: "TutorialMessageBox",
    detail: "TutorialMessageBox(id: string) -> void",
    documentation: `
Shows a tutorial message box.

**Parameters:**
- \`id\` — message ID.
`
  },
  {
    label: "IsTutorialMessageBoxOpen",
    detail: "IsTutorialMessageBoxOpen() -> boolean",
    documentation: `
Checks if a tutorial message box is currently open.
`
  },
  {
    label: "IsTutorialItemEnabled",
    detail: "IsTutorialItemEnabled(id: string) -> boolean",
    documentation: `
Checks if a tutorial item is enabled.

**Parameters:**
- \`id\` — item ID.
`
  },
  {
    label: "TutorialActivateHint",
    detail: "TutorialActivateHint(id: string) -> void",
    documentation: `
Activates a tutorial hint.

**Parameters:**
- \`id\` — hint ID.
`
  },
  {
    label: "GetCurrentPlayer",
    detail: "GetCurrentPlayer() -> number",
    documentation: `
Returns the ID of the player whose turn is currently active.

**Returns:**
Player ID (PLAYER_1..PLAYER_8).

**Example:**
\`\`\`lua
local p = GetCurrentPlayer()
\`\`\`
`
  },
  {
    label: "GetPlayerState",
    detail: "GetPlayerState(player: number) -> number",
    documentation: `
Returns the current state of a player.

**Parameters:**
- \`player\` — player ID.

**Returns:**
State ID (e.g., active, defeated, AI-controlled).
`
  },
  {
    label: "GetPlayerResource",
    detail: "GetPlayerResource(player: number, resource: number) -> number",
    documentation: `
Returns the amount of a specific resource owned by a player.

**Parameters:**
- \`player\` — player ID.
- \`resource\` — resource ID (WOOD, ORE, GOLD, etc).

**Returns:**
Resource amount.

**Example:**
\`\`\`lua
local gold = GetPlayerResource(PLAYER_1, GOLD)
\`\`\`
`
  },
  {
    label: "SetPlayerResource",
    detail: "SetPlayerResource(player: number, resource: number, amount: number) -> void",
    documentation: `
Sets the amount of a specific resource for a player.

**Parameters:**
- \`player\` — player ID.
- \`resource\` — resource ID.
- \`amount\` — new value.
`
  },
  {
    label: "SetPlayerStartResources",
    detail: "SetPlayerStartResources(player: number, wood: number, ore: number, mercury: number, crystal: number, sulfur: number, gem: number, gold: number) -> void",
    documentation: `
Sets the starting resources for a player.

**Parameters:**
- \`player\` — player ID.
- \`wood, ore, mercury, crystal, sulfur, gem, gold\` — resource amounts.
`
  },
  {
    label: "GetPlayerHeroes",
    detail: "GetPlayerHeroes(player: number) -> table<string>",
    documentation: `
Returns a list of hero names belonging to a player.

**Parameters:**
- \`player\` — player ID.

**Returns:**
Array of hero names.

**Example:**
\`\`\`lua
local heroes = GetPlayerHeroes(PLAYER_1)
\`\`\`
`
  },
  {
    label: "SetPlayerHeroesCountNotForHire",
    detail: "SetPlayerHeroesCountNotForHire(player: number, count: number) -> void",
    documentation: `
Sets how many heroes a player has that cannot be hired.

**Parameters:**
- \`player\` — player ID.
- \`count\` — number of locked heroes.
`
  },
  {
    label: "GetObjectOwner",
    detail: "GetObjectOwner(object: string) -> number",
    documentation: `
Returns the owner of a map object.

**Parameters:**
- \`object\` — object name.

**Returns:**
Player ID or -1 if unowned.
`
  },
  {
    label: "SetObjectOwner",
    detail: "SetObjectOwner(object: string, player: number) -> void",
    documentation: `
Sets the owner of a map object.

**Parameters:**
- \`object\` — object name.
- \`player\` — player ID.
`
  },
  {
    label: "IsObjectVisible",
    detail: "IsObjectVisible(player: number, object: string) -> boolean",
    documentation: `
Checks if an object is visible to a player.

**Parameters:**
- \`player\` — player ID.
- \`object\` — object name.
`
  },
  {
    label: "OpenCircleFog",
    detail: "OpenCircleFog(x: number, y: number, floor: number, radius: number, player: number) -> void",
    documentation: `
Reveals a circular area of the map for a player.

**Parameters:**
- \`x, y\` — coordinates.
- \`floor\` — floor ID.
- \`radius\` — reveal radius.
- \`player\` — player ID.
`
  },
  {
    label: "GetObjectiveState",
    detail: "GetObjectiveState(name: string, player: number = PLAYER_1) -> number",
    documentation: `
Returns the current state of an objective for a given player.

**Parameters:**
- \`name\` — objective ID.
- \`player\` — player ID (default PLAYER_1).

**Returns:**
State ID (e.g., NOT_ACTIVE, ACTIVE, COMPLETED).

**Example:**
\`\`\`lua
local state = GetObjectiveState("CAPTURE_CASTLE")
\`\`\`
`
  },
  {
    label: "SetObjectiveState",
    detail: "SetObjectiveState(name: string, state: number, player: number = PLAYER_1) -> void",
    documentation: `
Sets the state of an objective.

**Parameters:**
- \`name\` — objective ID.
- \`state\` — new state.
- \`player\` — player ID.

**Example:**
\`\`\`lua
SetObjectiveState("CAPTURE_CASTLE", OBJECTIVE_COMPLETED)
\`\`\`
`
  },
  {
    label: "GetObjectiveProgress",
    detail: "GetObjectiveProgress(name: string, player: number = PLAYER_1) -> number",
    documentation: `
Returns the progress value of an objective.

**Parameters:**
- \`name\` — objective ID.
- \`player\` — player ID.

**Returns:**
Progress value (0..100 or custom scale).
`
  },
  {
    label: "SetObjectiveProgress",
    detail: "SetObjectiveProgress(name: string, progress: number, player: number = PLAYER_1) -> void",
    documentation: `
Sets the progress value of an objective.

**Parameters:**
- \`name\` — objective ID.
- \`progress\` — new progress value.
- \`player\` — player ID.
`
  },
  {
    label: "IsObjectiveVisible",
    detail: "IsObjectiveVisible(name: string, player: number = PLAYER_1) -> boolean",
    documentation: `
Checks whether an objective is visible to a player.

**Parameters:**
- \`name\` — objective ID.
- \`player\` — player ID.

**Returns:**
true if visible, false otherwise.
`
  },
  {
    label: "SetObjectiveVisible",
    detail: "SetObjectiveVisible(name: string, visible: boolean, player: number = PLAYER_1) -> void",
    documentation: `
Shows or hides an objective for a player.

**Parameters:**
- \`name\` — objective ID.
- \`visible\` — true to show, false to hide.
- \`player\` — player ID.
`
  },
   {
    label: "HasBorderguardKey",
    detail: "HasBorderguardKey(player: number, key: number) -> boolean",
    documentation: `
Checks whether a player possesses a specific borderguard key.

**Parameters:**
- \`player\` — player ID.
- \`key\` — key ID.

**Returns:**
true if the player has the key.
`
  },
  {
    label: "GiveBorderguardKey",
    detail: "GiveBorderguardKey(player: number, key: number) -> void",
    documentation: `
Gives a borderguard key to a player.

**Parameters:**
- \`player\` — player ID.
- \`key\` — key ID.

**Example:**
\`\`\`lua
GiveBorderguardKey(PLAYER_1, KEY_RED)
\`\`\`
`
  },
  {
    label: "SetRegionBlocked",
    detail: "SetRegionBlocked(region: string, enabled: boolean, player: number = -1) -> void",
    documentation: `
Blocks or unblocks a region for a player.

**Parameters:**
- \`region\` — region name.
- \`enabled\` — true to block, false to unblock.
- \`player\` — player ID or -1 for all.
`
  },
  {
    label: "IsRegionBlocked",
    detail: "IsRegionBlocked(region: string, player: number) -> boolean",
    documentation: `
Checks whether a region is blocked for a player.

**Parameters:**
- \`region\` — region name.
- \`player\` — player ID.
`
  },
  {
    label: "GetObjectsInRegion",
    detail: "GetObjectsInRegion(region: string, type: number) -> table<string>",
    documentation: `
Returns a list of objects of a given type inside a region.

**Parameters:**
- \`region\` — region name.
- \`type\` — object type ID.

**Returns:**
Array of object names.
`
  },
  {
    label: "RegionToPoint",
    detail: "RegionToPoint(region: string) -> (number x, number y, number floor)",
    documentation: `
Returns the coordinates of a region's center.

**Parameters:**
- \`region\` — region name.

**Returns:**
x, y, floor.
`
  },
  {
    label: "IsObjectInRegion",
    detail: "IsObjectInRegion(object: string, region: string) -> boolean",
    documentation: `
Checks whether an object is inside a region.

**Parameters:**
- \`object\` — object name.
- \`region\` — region name.
`
  },
  {
    label: "OpenRegionFog",
    detail: "OpenRegionFog(player: number, region: string) -> void",
    documentation: `
Reveals an entire region for a player.

**Parameters:**
- \`player\` — player ID.
- \`region\` — region name.
`
  },
  {
    label: "SetAIPlayerAttractor",
    detail: "SetAIPlayerAttractor(object: string, player: number, priority: number) -> void",
    documentation: `
Sets an AI attractor for a player. The AI will consider the object more or less important.

**Parameters:**
- \`object\` — object name.
- \`player\` — player ID.
- \`priority\` — attraction priority (higher = more important).

**Example:**
\`\`\`lua
SetAIPlayerAttractor("GOLD_MINE_01", PLAYER_1, 10)
\`\`\`
`
  },
  {
    label: "SetAIHeroAttractor",
    detail: "SetAIHeroAttractor(object: string, hero: string, priority: number) -> void",
    documentation: `
Sets an AI attractor for a specific hero.

**Parameters:**
- \`object\` — object name.
- \`hero\` — hero name.
- \`priority\` — attraction priority.
`
  },
  {
    label: "EnableHeroAI",
    detail: "EnableHeroAI(hero: string, enable: boolean) -> void",
    documentation: `
Enables or disables AI control for a hero.

**Parameters:**
- \`hero\` — hero name.
- \`enable\` — true to enable AI, false to disable.

**Example:**
\`\`\`lua
EnableHeroAI("Findan", false)
\`\`\`
`
  },
  {
    label: "MoveHero",
    detail: "MoveHero(hero: string, x: number, y: number, floor: number = -1) -> void",
    documentation: `
Orders a hero to move to a specific tile.

**Parameters:**
- \`hero\` — hero name.
- \`x, y\` — coordinates.
- \`floor\` — floor ID (default -1 = current floor).

**Example:**
\`\`\`lua
MoveHero("Godric", 45, 22)
\`\`\`
`
  },
  {
    label: "CanMoveHero",
    detail: "CanMoveHero(hero: string, x: number, y: number, floor: number = -1) -> boolean",
    documentation: `
Checks whether a hero can move to a specific tile.

**Parameters:**
- \`hero\` — hero name.
- \`x, y\` — coordinates.
- \`floor\` — floor ID.

**Returns:**
true if movement is possible.
`
  },
  {
    label: "EnableAIHeroHiring",
    detail: "EnableAIHeroHiring(player: number, town: string, enable: boolean) -> void",
    documentation: `
Enables or disables AI hero hiring in a specific town.

**Parameters:**
- \`player\` — player ID.
- \`town\` — town name.
- \`enable\` — true to allow hiring.
`
  },
  {
    label: "GetHeroStats",
    detail: "GetHeroStats(hero: string, stat: number) -> number",
    documentation: `
Returns the value of a hero stat.

**Parameters:**
- \`hero\` — hero name.
- \`stat\` — stat ID (attack, defense, spellpower, knowledge, etc).

**Returns:**
Stat value.

**Example:**
\`\`\`lua
local atk = GetHeroStats("Findan", STAT_ATTACK)
\`\`\`
`
  },
  {
    label: "ChangeHeroStat",
    detail: "ChangeHeroStat(hero: string, stat: number, delta: number) -> void",
    documentation: `
Modifies a hero stat by a delta value.

**Parameters:**
- \`hero\` — hero name.
- \`stat\` — stat ID.
- \`delta\` — amount to add or subtract.
`
  },
  {
    label: "HasHeroSkill",
    detail: "HasHeroSkill(hero: string, skill: number) -> boolean",
    documentation: `
Checks whether a hero has a specific skill.

**Parameters:**
- \`hero\` — hero name.
- \`skill\` — skill ID.
`
  },
  {
    label: "GiveHeroSkill",
    detail: "GiveHeroSkill(hero: string, skill: number) -> boolean",
    documentation: `
Gives a skill to a hero.

**Parameters:**
- \`hero\` — hero name.
- \`skill\` — skill ID.

**Returns:**
true if successful.
`
  },
  {
    label: "KnowHeroSpell",
    detail: "KnowHeroSpell(hero: string, spell: number) -> void",
    documentation: `
Makes a hero know a spell.

**Parameters:**
- \`hero\` — hero name.
- \`spell\` — spell ID.
`
  },
  {
    label: "TeachHeroSpell",
    detail: "TeachHeroSpell(hero: string, spell: number) -> void",
    documentation: `
Teaches a spell to a hero (same as KnowHeroSpell).

**Parameters:**
- \`hero\` — hero name.
- \`spell\` — spell ID.
`
  },
  {
    label: "LevelUpHero",
    detail: "LevelUpHero(hero: string) -> boolean",
    documentation: `
Levels up a hero.

**Parameters:**
- \`hero\` — hero name.

**Returns:**
true if level-up happened.
`
  },
  {
    label: "GetHeroLevel",
    detail: "GetHeroLevel(hero: string) -> number",
    documentation: `
Returns the hero's level.

**Parameters:**
- \`hero\` — hero name.
`
  },
  {
    label: "IsHeroAlive",
    detail: "IsHeroAlive(hero: string) -> boolean",
    documentation: `
Checks whether a hero is alive.

**Parameters:**
- \`hero\` — hero name.
`
  },
  {
    label: "DeployReserveHero",
    detail: "DeployReserveHero(hero: string, x: number, y: number, floor: number = GROUND) -> void",
    documentation: `
Deploys a reserve hero onto the map.

**Parameters:**
- \`hero\` — hero name.
- \`x, y\` — coordinates.
- \`floor\` — floor ID.
`
  },
  {
    label: "UnreserveHero",
    detail: "UnreserveHero(hero: string) -> void",
    documentation: `
Removes a hero from reserve state.
`
  },
  {
    label: "CalcHeroMoveCost",
    detail: "CalcHeroMoveCost(hero: string, x: number, y: number, floor: number = -1) -> number",
    documentation: `
Calculates movement cost for a hero to reach a tile.

**Parameters:**
- \`hero\` — hero name.
- \`x, y\` — coordinates.
- \`floor\` — floor ID.

**Returns:**
Movement cost.
`
  },
  {
    label: "MoveHeroRealTime",
    detail: "MoveHeroRealTime(hero: string, x: number, y: number, floor: number = -1) -> void",
    documentation: `
Moves a hero in real-time mode.

**Parameters:**
- \`hero\` — hero name.
- \`x, y\` — coordinates.
- \`floor\` — floor ID.
`
  },
  {
    label: "GetHeroCreatures",
    detail: "GetHeroCreatures(hero: string, creature: number) -> number",
    documentation: `
Returns the number of creatures of a given type in hero's army.

**Parameters:**
- \`hero\` — hero name.
- \`creature\` — creature ID.
`
  },
  {
    label: "AddHeroCreatures",
    detail: "AddHeroCreatures(hero: string, creature: number, count: number) -> void",
    documentation: `
Adds creatures to hero's army.

**Parameters:**
- \`hero\` — hero name.
- \`creature\` — creature ID.
- \`count\` — number to add.
`
  },
  {
    label: "RemoveHeroCreatures",
    detail: "RemoveHeroCreatures(hero: string, creature: number, count: number) -> void",
    documentation: `
Removes creatures from hero's army.

**Parameters:**
- \`hero\` — hero name.
- \`creature\` — creature ID.
- \`count\` — number to remove.
`
  },
  {
    label: "GiveArtefact",
    detail: "GiveArtefact(hero: string, artifact: number, bind: number = 0) -> void",
    documentation: `
Gives an artifact to a hero.

**Parameters:**
- \`hero\` — hero name.
- \`artifact\` — artifact ID.
- \`bind\` — bind flag (0/1).
`
  },
  {
    label: "HasArtefact",
    detail: "HasArtefact(hero: string, artifact: number) -> boolean",
    documentation: `
Checks whether a hero has an artifact.

**Parameters:**
- \`hero\` — hero name.
- \`artifact\` — artifact ID.
`
  },
  {
    label: "RemoveArtefact",
    detail: "RemoveArtefact(hero: string, artifact: number) -> void",
    documentation: `
Removes an artifact from a hero.

**Parameters:**
- \`hero\` — hero name.
- \`artifact\` — artifact ID.
`
  },
  {
    label: "IsHeroLootable",
    detail: "IsHeroLootable(hero: string) -> boolean",
    documentation: `
Checks whether a hero can be looted after defeat.
`
  },
  {
    label: "SetHeroLootable",
    detail: "SetHeroLootable(hero: string, enable: boolean) -> void",
    documentation: `
Enables or disables hero lootability.
`
  },
  {
    label: "MarkObjectAsVisited",
    detail: "MarkObjectAsVisited(object: string, hero: string) -> void",
    documentation: `
Marks an object as visited by a hero.

**Parameters:**
- \`object\` — object name.
- \`hero\` — hero name.
`
  },
  {
    label: "GetHeroTown",
    detail: "GetHeroTown(hero: string) -> string",
    documentation: `
Returns the town associated with a hero.

**Parameters:**
- \`hero\` — hero name.
`
  },
  {
    label: "GetTownHero",
    detail: "GetTownHero(town: string) -> string",
    documentation: `
Returns the hero currently assigned to a town.

**Parameters:**
- \`town\` — town name.
`
  },
  {
    label: "GetObjectsFromPath",
    detail: "GetObjectsFromPath(hero: string, x: number, y: number, floor: number = -1) -> table<string>",
    documentation: `
Returns objects located on the hero's movement path.

**Parameters:**
- \`hero\` — hero name.
- \`x, y\` — destination.
- \`floor\` — floor ID.
`
  },
  {
    label: "GiveHeroWarMachine",
    detail: "GiveHeroWarMachine(hero: string, machine: number) -> void",
    documentation: `
Gives a war machine to a hero.

**Parameters:**
- \`hero\` — hero name.
- \`machine\` — war machine ID.
`
  },
  {
    label: "HasHeroWarMachine",
    detail: "HasHeroWarMachine(hero: string, machine: number) -> boolean",
    documentation: `
Checks whether a hero has a war machine.
`
  },
  {
    label: "RemoveHeroWarMachine",
    detail: "RemoveHeroWarMachine(hero: string, machine: number) -> boolean",
    documentation: `
Removes a war machine from a hero.

**Returns:**
true if removed.
`
  },
  {
    label: "StartCombat",
    detail: "StartCombat(hero: string, enemyHero: string, enemyCount: number, creature1: number, count1: number, creature2: number, count2: number, ..., script: string, finishCallback: string, flyby: string | nil) -> void",
    documentation: `
Starts a combat between heroes or against custom stacks.

**Parameters:**
- \`hero\` — attacker.
- \`enemyHero\` — defender or nil.
- \`enemyCount\` — number of enemy stacks.
- \`creatureX, countX\` — creature definitions.
- \`script\` — combat script XDB.
- \`finishCallback\` — function name.
- \`flyby\` — optional flyby scene.
`
  },
  {
    label: "SetHeroCombatScript",
    detail: "SetHeroCombatScript(hero: string, script: string) -> void",
    documentation: `
Assigns a combat script to a hero.
`
  },
  {
    label: "ResetHeroCombatScript",
    detail: "ResetHeroCombatScript(hero: string) -> void",
    documentation: `
Removes a combat script from a hero.
`
  },
  {
    label: "SiegeTown",
    detail: "SiegeTown(hero: string, townXDB: string, flyby: string | nil) -> void",
    documentation: `
Starts a siege battle.

**Parameters:**
- \`hero\` — attacker.
- \`townXDB\` — town object.
- \`flyby\` — optional flyby scene.
`
  },
  {
    label: "GetObjectPosition",
    detail: "GetObjectPosition(object: string) -> (number x, number y, number floor)",
    documentation: `
Returns the coordinates of an object on the map.

**Parameters:**
- \`object\` — object name.

**Returns:**
x, y, floor.
`
  },
  {
    label: "SetObjectPosition",
    detail: "SetObjectPosition(object: string, x: number, y: number, floor: number = -1) -> void",
    documentation: `
Moves an object to a new position.

**Parameters:**
- \`object\` — object name.
- \`x, y\` — coordinates.
- \`floor\` — floor ID.
`
  },
  {
    label: "IsObjectExists",
    detail: "IsObjectExists(object: string) -> boolean",
    documentation: `
Checks whether an object exists on the map.
`
  },
  {
    label: "IsObjectEnabled",
    detail: "IsObjectEnabled(object: string) -> boolean",
    documentation: `
Checks whether an object is enabled (visible/active).
`
  },
  {
    label: "SetObjectEnabled",
    detail: "SetObjectEnabled(object: string, enable: boolean) -> void",
    documentation: `
Enables or disables an object.
`
  },
  {
    label: "GetObjectNamesByType",
    detail: "GetObjectNamesByType(type: string) -> table<string>",
    documentation: `
Returns a list of object names that match a type substring.

**Parameters:**
- \`type\` — substring of object type.
`
  },
  {
    label: "AddObjectCreatures",
    detail: "AddObjectCreatures(object: string, creature: number, count: number) -> void",
    documentation: `
Adds creatures to an object (e.g., dwelling or garrison).
`
  },
  {
    label: "GetObjectCreatures",
    detail: "GetObjectCreatures(object: string, creature: number) -> number",
    documentation: `
Returns the number of creatures of a given type in an object.
`
  },
  {
    label: "RemoveObjectCreatures",
    detail: "RemoveObjectCreatures(object: string, creature: number, count: number) -> void",
    documentation: `
Removes creatures from an object.
`
  },
  {
    label: "SetObjectDwellingCreatures",
    detail: "SetObjectDwellingCreatures(object: string, creature: number, count: number) -> void",
    documentation: `
Sets the creature type and count for a dwelling.
`
  },
  {
    label: "GetObjectDwellingCreatures",
    detail: "GetObjectDwellingCreatures(object: string, creature: number) -> number",
    documentation: `
Returns the number of creatures available in a dwelling.
`
  },
  {
    label: "CreateArtifact",
    detail: "CreateArtifact(name: string, artifact: number, x: number, y: number, floor: number) -> void",
    documentation: `
Creates an artifact on the map.

**Parameters:**
- \`name\` — object name.
- \`artifact\` — artifact ID.
- \`x, y, floor\` — coordinates.
`
  },
  {
    label: "ShowFlyingSign",
    detail: "ShowFlyingSign(text: string, object: string, player: number = -1, time: number = 1.0) -> void",
    documentation: `
Shows a floating text sign above an object.

**Parameters:**
- \`text\` — text resource.
- \`object\` — object name.
- \`player\` — player ID.
- \`time\` — duration in seconds.
`
  },
  {
    label: "CreateMonster",
    detail: "CreateMonster(name: string, creature: number, count: number, x: number, y: number, floor: number, mood: number, courage: number) -> void",
    documentation: `
Creates a monster stack on the map.

**Parameters:**
- \`name\` — object name.
- \`creature\` — creature ID.
- \`count\` — number of units.
- \`mood\` — aggression.
- \`courage\` — courage level.
`
  },
  {
    label: "RemoveAllMonsters",
    detail: "RemoveAllMonsters(creature: number) -> void",
    documentation: `
Removes all monsters of a given type from the map.
`
  },
  {
    label: "GenerateMonsters",
    detail: "GenerateMonsters(creature: number, groupsMin: number, groupsMax: number, countMin: number, countMax: number) -> void",
    documentation: `
Generates random monster groups on the map.
`
  },
  {
    label: "QuestionBox",
    detail: "QuestionBox(text: string, callback: string) -> void",
    documentation: `
Shows a question dialog with a callback.

**Parameters:**
- \`text\` — text resource.
- \`callback\` — function name.
`
  },
  {
    label: "StartCutScene",
    detail: "StartCutScene(scene: string, callback: string | nil, save: string | nil) -> void",
    documentation: `
Starts a cutscene.

**Parameters:**
- \`scene\` — scene XDB.
- \`callback\` — function name.
- \`save\` — save name.
`
  },
  {
    label: "MessageBox",
    detail: "MessageBox(text: string, callback: string | nil, save: string | nil) -> void",
    documentation: `
Shows a message box.

**Parameters:**
- \`text\` — text resource.
- \`callback\` — function name.
- \`save\` — save name.
`
  },
  {
    label: "MoveCamera",
    detail: "MoveCamera(x: number, y: number, floor: number, zoom: number = 50, pitch: number = pi/2, yaw: number = 0, noZoom: number = 0, noRotate: number = 0) -> void",
    documentation: `
Moves the adventure map camera.

**Parameters:**
- \`x, y, floor\` — coordinates.
- \`zoom\` — zoom level.
- \`pitch\` — camera pitch.
- \`yaw\` — camera yaw.
`
  },
  {
    label: "RemoveObject",
    detail: "RemoveObject(object: string) -> void",
    documentation: `
Removes an object from the map.
`
  },
  {
    label: "StartDialogScene",
    detail: "StartDialogScene(scene: string, callback: string | nil, save: string | nil) -> void",
    documentation: `
Starts a dialog scene.

**Parameters:**
- \`scene\` — dialog scene XDB.
- \`callback\` — function name.
- \`save\` — save name.
`
  },
  {
    label: "StartDialogSceneInt",
    detail: "StartDialogSceneInt(scene: string, callback: string, save: string) -> void",
    documentation: `
Internal version of StartDialogScene.
`
  },
  {
    label: "StartCutSceneInt",
    detail: "StartCutSceneInt(scene: string, callback: string, save: string) -> void",
    documentation: `
Internal version of StartCutScene.
`
  },
  {
    label: "MessageBoxInt",
    detail: "MessageBoxInt(text: string, callback: string, save: string) -> void",
    documentation: `
Internal version of MessageBox.
`
  },
  { label: "Loose", detail: "Loose() -> void", documentation: "Triggers defeat for the player." },
  { label: "Win", detail: "Win() -> void", documentation: "Triggers victory for the player." },
  { label: "BlockGame", detail: "BlockGame() -> void", documentation: "Blocks game input." },
  { label: "UnblockGame", detail: "UnblockGame() -> void", documentation: "Unblocks game input." },
  { label: "ExitGame", detail: "ExitGame() -> void", documentation: "Exits the game." },
  {
    label: "GetDate",
    detail: "GetDate(id: number) -> number",
    documentation: "Returns date information (day, week, month)."
  },
  {
    label: "GetTerrainSize",
    detail: "GetTerrainSize() -> (number x, number y)",
    documentation: "Returns map size."
  },
  {
    label: "GetMaxFloor",
    detail: "GetMaxFloor() -> number",
    documentation: "Returns number of floors in the map."
  },
  {
    label: "IsTilePassable",
    detail: "IsTilePassable(x: number, y: number, floor: number = GROUND) -> boolean",
    documentation: "Checks if a tile is passable."
  },
  {
    label: "GetAllNames",
    detail: "GetAllNames(filter: number) -> table<string>",
    documentation: "Returns all object names matching a filter."
  },
  {
    label: "SetWarfogBehaviour",
    detail: "SetWarfogBehaviour(onLand: number, onSea: number) -> void",
    documentation: "Configures fog of war behavior."
  },
  {
    label: "Trigger",
    detail: "Trigger(type: number, ...) -> void",
    documentation: "Triggers an event."
  },
  {
    label: "Play3DSound",
    detail: "Play3DSound(sound: string, x: number, y: number, floor: number) -> number",
    documentation: "Plays a 3D positional sound."
  },
  {
    label: "Play2DSound",
    detail: "Play2DSound(sound: string) -> number",
    documentation: "Plays a 2D sound."
  },
  {
    label: "StopPlaySound",
    detail: "StopPlaySound(id: number) -> void",
    documentation: "Stops a playing sound."
  },
  {
    label: "SetCombatAmbientLight",
    detail: "SetCombatAmbientLight(light: string) -> void",
    documentation: "Sets ambient light for combat."
  },
  {
    label: "SetObjectFlashlight",
    detail: "SetObjectFlashlight(object: string, light: string) -> void",
    documentation: "Attaches a flashlight to an object."
  },
  {
    label: "SetAmbientLight",
    detail: "SetAmbientLight(floor: number, light: string, fade: boolean = false, time: number = 1) -> void",
    documentation: "Sets ambient light for a floor."
  },
  // ============================
  // 3.3.2 — Hooks
  // ============================
  {
    label: "DoPrepare",
    detail: "DoPrepare() -> boolean",
    documentation: `
Hook called before combat starts.

**Returns:**
true to continue, false to cancel.
`
  },
  {
    label: "DoStart",
    detail: "DoStart() -> boolean",
    documentation: `
Hook called at the start of combat.
`
  },
  {
    label: "UnitMove",
    detail: "UnitMove(unit: string) -> boolean",
    documentation: `
Hook called when a unit moves.

**Parameters:**
- \`unit\` — unit name.
`
  },
  {
    label: "UnitDeath",
    detail: "UnitDeath(unit: string) -> void",
    documentation: `
Hook called when a unit dies.

**Parameters:**
- \`unit\` — unit name.
`
  },

  // ============================
  // 3.3.3 — Combat control
  // ============================
  {
    label: "EnableDynamicBattleMode",
    detail: "EnableDynamicBattleMode(enable: boolean) -> void",
    documentation: "Enables or disables dynamic battle mode."
  },
  {
    label: "EnableAutoFinish",
    detail: "EnableAutoFinish(enable: boolean) -> void",
    documentation: "Enables or disables auto-finish of combat."
  },
  {
    label: "combatEnableFinish",
    detail: "combatEnableFinish(enable: boolean) -> void",
    documentation: "Same as EnableAutoFinish."
  },
  {
    label: "EnableCinematicCamera",
    detail: "EnableCinematicCamera(enable: boolean) -> void",
    documentation: "Enables cinematic camera mode."
  },
  {
    label: "SetControlMode",
    detail: "SetControlMode(side: number, mode: number) -> void",
    documentation: `
Sets control mode for a side.

**Parameters:**
- \`side\` — side ID.
- \`mode\` — control mode.
`
  },
  {
    label: "Finish",
    detail: "Finish(side: number) -> void",
    documentation: "Ends combat for a side."
  },
  {
    label: "Break",
    detail: "Break() -> void",
    documentation: "Breaks current combat action."
  },
  {
    label: "combatSetPause",
    detail: "combatSetPause(value: number, enable: boolean) -> void",
    documentation: "Pauses or unpauses combat."
  },
  {
    label: "showHighlighting",
    detail: "showHighlighting(show: boolean = true) -> void",
    documentation: "Shows or hides tile highlighting."
  },

  // ============================
  // 3.3.3 — Unit control
  // ============================
  {
    label: "SummonCreature",
    detail: "SummonCreature(side: number, creature: number, count: number, x: number = -1, y: number = -1) -> void",
    documentation: `
Summons a creature stack.

**Parameters:**
- \`side\` — side ID.
- \`creature\` — creature ID.
- \`count\` — number of units.
`
  },
  {
    label: "AddCreature",
    detail: "AddCreature(side: number, creature: number, count: number, x: number = -1, y: number = -1) -> void",
    documentation: "Adds a creature stack to the battlefield."
  },
  {
    label: "addUnit",
    detail: "addUnit(creature: number, side: number, x: number, y: number, count: number, name: string) -> void",
    documentation: "Adds a unit with a custom name."
  },
  {
    label: "removeUnit",
    detail: "removeUnit(name: string) -> void",
    documentation: "Removes a unit from the battlefield."
  },
  {
    label: "UnitCastAimedSpell",
    detail: "UnitCastAimedSpell(unit: string, spell: number, target: string) -> void",
    documentation: "Unit casts a spell on a target."
  },
  {
    label: "UnitCastGlobalSpell",
    detail: "UnitCastGlobalSpell(unit: string, spell: number) -> void",
    documentation: "Unit casts a global spell."
  },
  {
    label: "UnitCastAreaSpell",
    detail: "UnitCastAreaSpell(unit: string, spell: number, x: number, y: number) -> void",
    documentation: "Unit casts an area spell."
  },
  {
    label: "SetUnitManaPoints",
    detail: "SetUnitManaPoints(unit: string, points: number) -> void",
    documentation: "Sets unit mana."
  },
  {
    label: "GetUnitMaxManaPoints",
    detail: "GetUnitMaxManaPoints(unit: string) -> number",
    documentation: "Returns unit max mana."
  },
  {
    label: "GetUnitManaPoints",
    detail: "GetUnitManaPoints(unit: string) -> number",
    documentation: "Returns unit mana."
  },
  {
    label: "commandDefend",
    detail: "commandDefend(unit: string) -> void",
    documentation: "Orders a unit to defend."
  },
  {
    label: "commandDoSpell",
    detail: "commandDoSpell(unit: string, spell: number, x: number, y: number) -> void",
    documentation: "Orders a unit to cast a spell."
  },
  {
    label: "commandShot",
    detail: "commandShot(unit: string, target: string, noScene: boolean = false) -> void",
    documentation: "Orders a ranged attack."
  },
  {
    label: "commandMove",
    detail: "commandMove(unit: string, x: number, y: number, checkPath: boolean = false) -> void",
    documentation: "Orders a unit to move."
  },
  {
    label: "commandMoveAttack",
    detail: "commandMoveAttack(attacker: string, victim: string, x: number = -1, y: number = -1, checkPath: boolean = false) -> void",
    documentation: "Orders a move + attack."
  },
  {
    label: "commandDoSpecial",
    detail: "commandDoSpecial(unit: string, ability: number, x: number = -1, y: number = -1, checkPath: boolean = false) -> void",
    documentation: "Orders a unit to use a special ability."
  },
  {
    label: "displace",
    detail: "displace(unit: string, x: number, y: number) -> void",
    documentation: "Teleports a unit to a tile."
  },
  {
    label: "playAnimation",
    detail: "playAnimation(unit: string, anim: string, action: number = ONESHOT) -> void",
    documentation: "Plays a unit animation."
  },
  {
    label: "combatPlayEmotion",
    detail: "combatPlayEmotion(side: number, emotion: number) -> void",
    documentation: "Plays an emotion animation for a side."
  },
  {
    label: "RemoveAllUnits",
    detail: "RemoveAllUnits() -> void",
    documentation: "Removes all units from the battlefield."
  },
  {
    label: "setATB",
    detail: "setATB(unit: string, value: number) -> void",
    documentation: "Sets unit ATB value."
  },

  // ============================
  // 3.3.4 — Info functions
  // ============================
  {
    label: "GetUnits",
    detail: "GetUnits(side: number, type: number) -> table<string>",
    documentation: "Returns units of a given type for a side."
  },
  {
    label: "GetCreatureType",
    detail: "GetCreatureType(unit: string) -> number",
    documentation: "Returns creature ID of a unit."
  },
  {
    label: "pos",
    detail: "pos(unit: string) -> (number x, number y)",
    documentation: "Returns unit position."
  },
  {
    label: "combatStarted",
    detail: "combatStarted() -> boolean",
    documentation: "Checks if combat has started."
  },
  {
    label: "GetHeroName",
    detail: "GetHeroName(unit: string) -> string",
    documentation: "Returns the hero controlling a unit."
  },
  {
    label: "GetCreatureNumber",
    detail: "GetCreatureNumber(unit: string) -> number",
    documentation: "Returns number of creatures in a stack."
  },
  {
    label: "GetUnitPosition",
    detail: "GetUnitPosition(unit: string) -> (number x, number y)",
    documentation: "Returns unit tile coordinates."
  },
  {
    label: "exist",
    detail: "exist(unit: string) -> boolean",
    documentation: "Checks if a unit exists."
  },
  {
    label: "GetHost",
    detail: "GetHost(side: number) -> number",
    documentation: "Returns host type for a side."
  },
  {
    label: "GetUnitSide",
    detail: "GetUnitSide(unit: string) -> number",
    documentation: "Returns side ID of a unit."
  },
  {
    label: "GetUnitType",
    detail: "GetUnitType(unit: string) -> number",
    documentation: "Returns unit type ID."
  },
  {
    label: "GetWarMachineType",
    detail: "GetWarMachineType(unit: string) -> number",
    documentation: "Returns war machine type ID."
  },
  {
    label: "GetBuildingType",
    detail: "GetBuildingType(unit: string) -> number",
    documentation: "Returns building type ID (for siege objects)."
  },
  {
    label: "combatReadyPerson",
    detail: "combatReadyPerson() -> string",
    documentation: "Returns the next unit ready to act."
  },
  {
    label: "unitNames",
    detail: "unitNames() -> string",
    documentation: "Returns a string with all unit names."
  },
  {
    label: "postEvent",
    detail: "postEvent(event: string, a: number = -1, b: number = -1) -> void",
    documentation: "Posts a combat event."
  },
  {
    label: "CreatureHired",
    detail: "CreatureHired(creature: number, count: number) -> void",
    documentation: `
Hook called when a creature is hired in a town.

**Parameters:**
- \`creature\` — creature ID.
- \`count\` — number of units hired.

**Example:**
\`\`\`lua
function CreatureHired(id, count)
    print("Hired:", id, count)
end
\`\`\`
`
  },
  {
    label: "HeroHired",
    detail: "HeroHired(hero: string) -> void",
    documentation: `
Hook called when a hero is hired in a town.

**Parameters:**
- \`hero\` — hero name.

**Example:**
\`\`\`lua
function HeroHired(name)
    print("Hero hired:", name)
end
\`\`\`
`
  },
  {
    label: "GetTownBuildingLevel",
    detail: "GetTownBuildingLevel(town: string, building: number) -> number",
    documentation: `
Returns the current level of a building in a town.

**Parameters:**
- \`town\` — town name.
- \`building\` — building ID.

**Returns:**
Current building level.
`
  },
  {
    label: "GetTownBuildingLimitLevel",
    detail: "GetTownBuildingLimitLevel(town: string, building: number) -> number",
    documentation: `
Returns the maximum allowed level for a building in a town.

**Parameters:**
- \`town\` — town name.
- \`building\` — building ID.
`
  },
  {
    label: "GetTownBuildingMaxLevel",
    detail: "GetTownBuildingMaxLevel(town: string, building: number) -> number",
    documentation: `
Returns the absolute maximum level a building can reach.

**Parameters:**
- \`town\` — town name.
- \`building\` — building ID.
`
  },
  {
    label: "SetTownBuildingLimitLevel",
    detail: "SetTownBuildingLimitLevel(town: string, building: number, level: number) -> void",
    documentation: `
Sets the maximum allowed level for a building.

**Parameters:**
- \`town\` — town name.
- \`building\` — building ID.
- \`level\` — new limit.
`
  },
  {
    label: "TransformTown",
    detail: "TransformTown(town: string, townType: number) -> void",
    documentation: `
Transforms a town into another faction type.

**Parameters:**
- \`town\` — town name.
- \`townType\` — new town type ID.

**Example:**
\`\`\`lua
TransformTown("Town01", TOWN_NECROPOLIS)
\`\`\`
`
  },
  {
    label: "RazeTown",
    detail: "RazeTown(town: string) -> void",
    documentation: `
Destroys a town completely.

**Parameters:**
- \`town\` — town name.
`
  },
  {
    label: "SetPlayerTeam",
    detail: "SetPlayerTeam(player: number, team: number) -> void",
    documentation: `
Assigns a player to a team.

**Parameters:**
- \`player\` — player ID.
- \`team\` — team ID.
`
  },
  {
    label: "DenyAIHeroFlee",
    detail: "DenyAIHeroFlee(hero: string) -> void",
    documentation: `
Prevents a specific AI hero from fleeing in combat.

**Parameters:**
- \`hero\` — hero name.
`
  },
  {
    label: "DenyAIHeroesFlee",
    detail: "DenyAIHeroesFlee(player: number) -> void",
    documentation: `
Prevents all AI heroes of a player from fleeing.

**Parameters:**
- \`player\` — player ID.
`
  },
  {
    label: "SetAIHeroFleeControl",
    detail: "SetAIHeroFleeControl(hero: string, enable: boolean) -> void",
    documentation: `
Controls whether an AI hero is allowed to flee.

**Parameters:**
- \`hero\` — hero name.
- \`enable\` — true/false.
`
  },
  {
    label: "GetHeroSkillMastery",
    detail: "GetHeroSkillMastery(hero: string, skill: number) -> number",
    documentation: `
Returns mastery level of a hero's skill.

**Parameters:**
- \`hero\` — hero name.
- \`skill\` — skill ID.
`
  },
  {
    label: "RazeBuilding",
    detail: "RazeBuilding(town: string, building: number) -> void",
    documentation: `
Destroys a building in a town.

**Parameters:**
- \`town\` — town name.
- \`building\` — building ID.
`
  },
  {
    label: "CreateCaravan",
    detail: "CreateCaravan(source: string, target: string) -> void",
    documentation: `
Creates a caravan between two towns.

**Parameters:**
- \`source\` — source town.
- \`target\` — destination town.
`
  },
  {
    label: "SetObjectRotation",
    detail: "SetObjectRotation(object: string, rotation: number) -> void",
    documentation: `
Sets rotation angle for an object.

**Parameters:**
- \`object\` — object name.
- \`rotation\` — angle in degrees.
`
  },
  {
    label: "PlayVisualEffect",
    detail: "PlayVisualEffect(effect: string, x: number, y: number, floor: number) -> void",
    documentation: `
Plays a visual effect at a location.

**Parameters:**
- \`effect\` — effect XDB.
- \`x, y, floor\` — coordinates.
`
  },
  {
    label: "StopVisualEffects",
    detail: "StopVisualEffects(object: string) -> void",
    documentation: `
Stops all visual effects attached to an object.

**Parameters:**
- \`object\` — object name.
`
  },
  {
    label: "OpenPuzzleMap",
    detail: "OpenPuzzleMap(player: number) -> void",
    documentation: `
Opens the puzzle map for a player.

**Parameters:**
- \`player\` — player ID.
`
  },
  {
    label: "StartAdvMapDialog",
    detail: "StartAdvMapDialog(dialog: string, callback: string | nil) -> void",
    documentation: `
Starts an adventure map dialog.

**Parameters:**
- \`dialog\` — dialog XDB.
- \`callback\` — optional callback.
`
  }
];
