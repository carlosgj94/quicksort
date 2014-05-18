function invertP(array, a, b) {
    var tmp = array[a];
    array[a] = array[b];
    array[b] = tmp;
    return array;
}

function partitionP(array, first, last, pivot) {
    //Partition() moves all elements wich are less than the pivot to the first of the array
    var piv = array[pivot];
    array = invertP(array, pivot, last - 1);
    var aux = first;
    var ix;
    for (ix = first; ix < last - 1; ++ix) {
        if (array[ix] <= piv) {
            array = invertP(array, aux, ix);
            aux++;
        }
    }
    array = invertP(array, last - 1, aux);

    return aux;
}

function quicksortP(array, first, last) {
    //The quicksort() makes all the magic nigga!!!!!!.
    var lista_html='<h6><i style="background:rgba(26, 188, 156,0.5);">';
    for (var i = 0; i<array.length; i++){
        lista_html=lista_html+' '+array[i]+' | ';
    }
    lista_html=lista_html+'</i><br><br></h6>';

    var div = document.getElementById('canvas');
    div.innerHTML = div.innerHTML + lista_html;
    if (last - 1 > first) {
        var pivot = first + Math.floor(Math.random() * (last - first));

        pivot = partitionP(array, first, last, pivot);

        quicksortP(array, first, pivot);
        //console.log ("\t"+array+"\t"+first+"\t"+pivot);
        quicksortP(array, pivot + 1, last);
        //console.log ("\t"+array+"\t"+last+"\t"+pivot+1);
    }
    return array;
}

function quicksortI() {
    document.getElementById('canvas').innerHTML = '';
    var lista = $("#texto").val();
    lista = lista.split(" ");
    var array = [];
    for (var i = 0; i < lista.length; i++) {
        array[i] = parseInt(lista[i]);
    }
    var result = quicksortP(array, 0, lista.length);
    var div = document.getElementById('canvas');
    div.innerHTML ="<h5>El proceso de ordenación ha sido: </h5><br>" + div.innerHTML;
}
