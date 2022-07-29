function TinhS() {

// B1: DOM và khởi tạo biến
let nhapx = +document.getElementById("nhapx").value;
let nhapn = +document.getElementById("nhapn").value;

let S = 0;
// B2: Xử lý
for (i=1; i <= nhapn; i++) {
  S += Math.pow(nhapx,i)
}
// B3: Hiển thị
document.getElementById('showInfoTotal').innerHTML = "S= " + S;

}