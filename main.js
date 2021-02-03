

    function arrayPlusArray(arr1, arr2) {
        sum1 = 0;
        for(let i=0;i<arr1.length;i++) {
            sum1 += arr1[i]
        }
        sum2 = 0
        for(let i=0;i<arr2.length;i++) {
            sum2 += arr2[i]
        }
        return sum1 + sum2;
    }

    console.log(arrayPlusArray([1, 2, 3], [4, 5, 6]));

// trumpesnis pavyzdys
    const arrayPlusArray = (arr1, arr2) => [...arr1, ...arr2].reduce((a, b) => a + b, 0);