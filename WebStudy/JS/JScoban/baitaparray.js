let mang = [];
let so;
function nhap(params) {
   so = parseFloat(document.getElementById('input_so').value);
    
    // mang.push(so);    
}

function in_ra(params) {
//    document.write(mang); nen in ra 1 div vi neu dung write se xoa luon html
    for(let i = 0; i < so; i++){


        mang.push(Math.round(Math.random()*20));
        
    }
    let soLN = mang[0];
    for(let i = 0; i < mang.length;i++){
        if(soLN<mang[i]){
            soLN = mang[i];

        }
    }

    let soNN = mang[0];
    for(let i = 0; i < mang.length;i++){
        if(soNN>mang[i]){
            soNN = mang[i];

        }
    }

    let tong = 0;
    for(let i = 0; i < mang.length;i++){
        tong += mang[i]
    }

    

    document.getElementById("arr_el").innerHTML = mang;
    document.getElementById("max_id").innerHTML = soLN;
    document.getElementById("min_id").innerHTML = soNN;
    document.getElementById("total").innerHTML = tong;

}

function refreshPage(){
    window.location.reload();
} 
