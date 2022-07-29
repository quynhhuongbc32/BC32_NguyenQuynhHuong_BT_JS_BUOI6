function giaithua() {

    // B1: DOM và khởi tạo biến
    let nhapn = +document.getElementById("nhapn").value*1;
    
    let s = 1;
    let i = 1;
    // B2: Xử lý
    while(i <= nhapn) {
        for (i = 1; i <= nhapn; i++) {
        s *= i;
      }
    }
    // B3: Hiển thị
    document.getElementById('showInfoTotal').innerHTML = "Giai thừa của số bạn vừa nhập là: " + s;
    }

    