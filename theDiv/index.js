function theDiv () {
    let nhapDiv = document.getElementById("nhapDiv").value * 1;

    let result = "";
    let i ;
    for( i = 1; i <= nhapDiv; i++){
        if(i % 2 === 0){
            result += "<div class='bg-danger text-white p-2 my-2'> div là số chẵn " + "</div>"  
        }else{
            result += "<div class='bg-primary text-white p-2 my-2'> div là số lẻ " + "</div>"  
        }

    }

    document.getElementById("showInfoTotal").innerHTML = result;
}