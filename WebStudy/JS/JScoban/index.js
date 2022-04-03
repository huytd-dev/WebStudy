// function in_ra(){
//     let so = document.getElementById("input_so").value;
//     if(so % 2 == 0){
//         document.getElementById('ket_qua').innerHTML = 'Day la so chan';
//     }else{
//         document.getElementById('ket_qua').innerHTML = 'Day la so le';

//     }
// }


let mang = [];
function nhap(params) {
    let so = parseFloat(document.getElementById('input_so').value);
    
    mang.push(so);    
}

function in_ra(params) {
//    document.write(mang); nen in ra 1 div vi neu dung write se xoa luon html

    document.getElementById("ket_qua").innerHTML = "ket qua = " +mang;

}