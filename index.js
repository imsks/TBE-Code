/**
 * Day 15/15 | Error Handling
 */

try {
    throw new Error("Something went wrong")
} catch (e) {
    console.log(e.message)
}
