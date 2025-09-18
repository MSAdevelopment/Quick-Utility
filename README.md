✅ Clean, simple, and easy!

🎲 Random & Boolean

✅ QU.RandomStr(length, loc) → Generates a random string (A-Z, a-z, 0-9).

✅ QU.RandomBool() → Returns a random boolean (true or false).

✅ QU.RandomHex(target) → Generates a random HEX color. Updates the target element if provided.

⏰ Date & Time

✅ QU.Date(locale, loc) → Returns the current date (supports localization).

✅ QU.Time(target) → Returns the current time. Can auto-update a DOM element.

❌ Persian Calendar Support → 📆 Planned, not implemented yet

✍️ String Manipulation

✅ QU.Case.upper(text) → Converts text to 🔠 UPPERCASE.

✅ QU.Case.lower(text) → Converts text to 🔡 lowercase.

✅ QU.Case.capitalize(text) → Capitalizes the 🔤 first letter.

✅ QU.Case.capitalizeWords(text) → Capitalizes the 📝 first letter of every word.

✅ QU.Reverse(text) → 🔄 Reverses a string.

✅ QU.Shuffle(text) → 🎲 Randomly shuffles characters.

✅ QU.Slugify(text) → 🌐 Converts text into a URL-friendly slug.

❌ QU.TrimAllSpaces(text) → ✂️ Planned

🔢 Number Utilities

✅ QU.Clamp(value, min, max) → 📏 Keeps a number within range.

✅ QU.Percent(part, total) → 📊 Calculates percentage.

❌ QU.RandomInt(min, max) → 🎲 Planned

🖥️ DOM Helpers

✅ QU.Remove(id) → 🗑️ Removes an element by ID.

✅ QU.TypeWriter({ texts, target, speed, pause, loop }) → ⌨️ Typewriter text animation.

✅QU.get(target id) → gets value or innerHTML of a tag automatic

✅QU.get(target , true) → you can set anything after QU.get like QU.get("myinp" , true).style.color = "red"

📦 Installation
<script src="QuickUtility.js"></script>

🛠️ Usage Examples
// Random string
QU.RandomStr(10);

// Uppercase conversion
QU.Case.upper("Quick Utility");

// Typewriter effect
QU.TypeWriter({ texts:["Quick Utility"], target:"demo", speed:100 });

🖼️ Example in DOM
QU.RandomStr(12, "output1");   // Displays in element with ID "output1"
QU.Date(undefined, "dateBox"); // Displays date in element with ID "dateBox"
