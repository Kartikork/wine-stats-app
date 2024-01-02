// Utility functions

// Function to calculate the mean of an array of numbers
export function calculateMean(values) {
    // Sum all values in the array
    const sum = values.reduce((a, b) => a + b, 0);
    // Return the mean (sum divided by the number of values), rounded to 3 decimal places
    return Number((sum / values.length).toFixed(3));
}

// Function to calculate the median of an array of numbers
export function calculateMedian(values) {
    // Sort the values in ascending order
    const sortedValues = [...values].sort((a, b) => a - b);
    // Find the middle index
    const middleIndex = Math.floor(sortedValues.length / 2);

    // If the number of values is even, return the average of the two middle numbers
    if (sortedValues.length % 2 === 0) {
        return Number(((sortedValues[middleIndex - 1] + sortedValues[middleIndex]) / 2).toFixed(3));
    } else {
        // If the number of values is odd, return the middle number
        return Number(sortedValues[middleIndex].toFixed(3));
    }
}

// Function to calculate the mode of an array of numbers
export function calculateMode(values) {
    // Count the frequency of each value
    const counts = values.reduce((acc, value) => {
        acc[value] = (acc[value] || 0) + 1;
        return acc;
    }, {});

    let maxCount = 0;
    let modes = [];

    // Find the value(s) that appear most frequently
    for (const [value, count] of Object.entries(counts)) {
        if (count > maxCount) {
            modes = [Number(value)];
            maxCount = count;
        } else if (count === maxCount) {
            modes.push(Number(value));
        }
    }

    // Return the mode(s), rounded to 3 decimal places
    return modes.length > 1 ? [Number(modes[0].toFixed(3))] : modes.map(mode => Number(mode.toFixed(3)));
}
