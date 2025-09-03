Quick Utility (QU) Library

Quick Utility is a lightweight, fast, and practical JavaScript library designed to simplify common operations on strings, numbers, and dates. It’s perfect for developers who want to perform daily tasks like generating random strings, manipulating text, calculating percentages, or adding a typewriter effect with minimal code.

Key Features
Random & Boolean

QU.RandomStr(length, loc) – Generates a random string of the given length (A-Z, a-z, 0-9). Optionally outputs to a DOM element by specifying loc.

QU.RandomBool() – Returns a random boolean value (true or false).

QU.RandomHex(target) – Generates a random hex color. If target is provided, it updates the color of that DOM element.

Date & Time

QU.Date(locale, loc) – Returns the current date. Optionally localizes with locale and outputs to loc.

QU.Time(target) – Returns the current time. Can update a DOM element by specifying target.

String Manipulation

QU.Case.upper(text) – Converts text to uppercase.

QU.Case.lower(text) – Converts text to lowercase.

QU.Case.capitalize(text) – Capitalizes the first letter of the string.

QU.Case.capitalizeWords(text) – Capitalizes the first letter of each word.

QU.Reverse(text) – Reverses the string.

QU.Shuffle(text) – Randomly shuffles characters in a string.

QU.Slugify(text) – Converts text to a URL-friendly format.

Number Utilities

QU.Clamp(value, min, max) – Restricts a number to stay within min and max.

QU.Percent(part, total) – Calculates the percentage of part relative to total.

DOM Helpers

QU.Remove(id) – Removes a DOM element by its ID.

QU.TypeWriter({ texts, target, speed, pause, loop }) – Animates typing for an array of strings (texts) in a typewriter style. Parameters:

target – ID of the DOM element.

speed – typing speed in milliseconds.

pause – pause between words.

loop – if true, cycles indefinitely.

Installation

Include the library in your project:

<script src="QuickUtility.js"></script>


Then call its functions directly:

// Random string
QU.RandomStr(10);

// Uppercase conversion
QU.Case.upper("Quick Utility");

// Typewriter effect
QU.TypeWriter({ texts:["Quick Utility"], target:"demo", speed:100 });

Example Output in DOM

You can also output results to a specific element by providing its id in functions that support loc or target:

QU.RandomStr(12, "output1"); // Displays in element with ID "output1"
QU.Date(undefined, "dateBox"); // Displays date in element with ID "dateBox"
