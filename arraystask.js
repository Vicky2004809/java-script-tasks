let arr = Number(prompt("Enter numbers separated by commas:"));
        let sum = 0;

        for(let i = 0; i < arr.length; i++) {
            sum += arr[i];
        }
        let average = sum / arr.length;
        console.log("Sum:",sum);
        console.log("Average:",average);