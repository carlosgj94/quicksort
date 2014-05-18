
function invert (array, a, b){
	var tmp = array[a];
	array[a] = array[b];
	array[b] = tmp;
	return array;
}

function partition (array, first, last, pivot) {
	//Partition() moves all elements wich are less than the pivot to the first of the array
	var piv = array[pivot];
	array = invert(array, pivot, last-1);
	var aux = first;
	var ix;
	for (ix=first; ix<last-1; ++ix) {
		if (array[ix]<=piv) {
			array =invert(array, aux, ix);
			aux++;
		}
	}
	array = invert (array, last-1, aux);

	return aux;
}

function quicksort(array, first, last){
	//The quicksort() makes all the magic nigga!!!!!!. 
	if(last-1>first) {
		var pivot=first+Math.floor(Math.random()*(last-first));

		pivot=partition(array, first, last, pivot);

		quicksort(array, first, pivot);
		//console.log ("\t"+array+"\t"+first+"\t"+pivot);
		quicksort(array, pivot+1, last);
		//console.log ("\t"+array+"\t"+last+"\t"+pivot+1);
	}
	return array;
}
