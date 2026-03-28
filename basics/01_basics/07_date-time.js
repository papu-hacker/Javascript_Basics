let day = new Date()

console.table([
    `normal: ${day}`,
    `String: ${day.toString()}`,
    `DateString: ${day.toDateString()}`,
    `ISOString: ${day.toISOString()}`,
    `JSON: ${day.toJSON()}`,
    `LocaleDateString: ${day.toLocaleDateString()}`,
    `LocaleString: ${day.toLocaleString()}`,
    `LocaleTimeString: ${day.toLocaleTimeString()}`,
    `TimeString: ${day.toTimeString()}`,
    `UTCString: ${day.toUTCString()}`
])
