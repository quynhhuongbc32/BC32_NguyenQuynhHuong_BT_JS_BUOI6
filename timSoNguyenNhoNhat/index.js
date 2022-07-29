function timSoNguyen () {
  let nhapSo = document.getElementById("nhapSo").value * 1;
  let sum = 0;
  let soNguyen = 0;

  while(sum < nhapSo){
      sum += soNguyen;
      if(sum < nhapSo){
		soNguyen++;
      }
  }
  document.getElementById("showInfoTotal").innerHTML = "Số nguyên nhỏ nhất là : " + soNguyen;
}