
 // Define the function to calculate the minimum cost
function calculateMinCost() {
    let ropeLengthsInput = document.getElementById("rope-lengths");
    let result = document.getElementById("result");

    // Parse the input value into an array of integers
    let inputText = ropeLengthsInput.value;
    let ropeLengths = inputText.split(',').map(Number);

    let totalCost = 0;

    // Sort the array in ascending order
    ropeLengths.sort((a, b) => a - b);

    while (ropeLengths.length > 1) {
        // Take the two shortest ropes
        const rope1 = ropeLengths.shift();
        const rope2 = ropeLengths.shift();

        // Merge the two ropes and update the total cost
        const currentCost = rope1 + rope2;
        totalCost += currentCost;

        // Insert the merged rope back into the sorted array
        ropeLengths.push(currentCost);

        // Re-sort the array (or you can use a binary insertion
        // to maintain the sorted order more efficiently)
        ropeLengths.sort((a, b) => a - b);
    }

    // Display the result
    result.innerText = `Minimum cost to connect ropes: ${totalCost}`;
}

  
