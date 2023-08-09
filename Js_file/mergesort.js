function mergeSort(arr) {
    if (arr == null) {
        return;
    }

    if (arr.length > 1) {
        var mid = parseInt(arr.length / 2);

        // Split left part
        var left = Array(mid).fill(0);
        for (i = 0; i < mid; i++) {
            left[i] = arr[i];
        }

        // Split right part
        var right = Array(arr.length - mid).fill(0);
        for (i = mid; i < arr.length; i++) {
            right[i - mid] = arr[i];
        }
        mergeSort(left);
        mergeSort(right);

        var i = 0;
        var j = 0;
        var k = 0;

        // Merge left and right arrays
        while (i < left.length && j < right.length) {
            if (left[i] < right[j]) {
                arr[k] = left[i];
                i++;
            } else {
                arr[k] = right[j];
                j++;
            }
            k++;
        }
        // Collect remaining elements
        while (i < left.length) {
            arr[k] = left[i];
            i++;
            k++;
            moves.push
        }
        while (j < right.length) {
            arr[k] = right[j];
            j++;
            k++;
        }

    }
}

