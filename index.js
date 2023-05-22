/**
 * bài tập 1:
 *
 * input: cho người dùng chọn khu vực và tự cho điểm chuẩn của năm
 *
 * bước 1: tạo ra value cho từng khu vực và đối tượng
 * bước 2: tạo biến cho điểm chuẩn, điểm 1, 2 và 3
 * bước 3: lấy dữ liệu người dùng
 * bước 4: dùng công thức rồi sau đó so sánh xem thử người dùng có đậu hay không
 *
 * output: hiển thị cho người dùng biết là đậu hay rớt
 */

function xetDiem() {
  var diemChuan = document.getElementById("txt-diem-chuan").value;
  var a = Number(document.getElementById("txt-khuvuc").value);
  var b = Number(document.getElementById("txt-doituong").value);
  var diem1 = Number(document.getElementById("txt-diem1").value);
  var diem2 = Number(document.getElementById("txt-diem2").value);
  var diem3 = Number(document.getElementById("txt-diem3").value);
  c = !0;
  if ((c = diem1 && diem2 && diem3)) {
    var v = diem1 + diem2 + diem3 + (a + b);
    document.getElementById("result1").innerText =
      v >= diemChuan ? `Bạn đã đậu: ${v}.` : `Bạn đã rớt: ${v}.`;
  } else {
    document.getElementById(
      "result1"
    ).innerText = `Bạn đã rớt do có một điểm 0.`;
  }
}
/**
 * Bài tập 2
 *
 * input: cho người dùng nhập họ tên và số kw mà người dùng sử dụng
 *
 * bước 1: tạo ra 2 biến cho tên và số kw
 * bước 2: xét từng mức người dùng sử dụng kw
 * bước 3: so sánh điều kiện theo từng bước nhảy từ 50 đến 100 đến 150 đến 200 rồi đến 350 cuối cùng là trên 350
 *
 * output: hiển thị số tiền người dùng phải đóng
 */
function tinhKw() {
  var hoTen = document.getElementById("txt-ho-ten").value;
  var soKw = Number(document.getElementById("txt-kw").value);
  var kw1 = 500,
    kw2 = 650,
    kw3 = 850,
    kw4 = 1100,
    kw5 = 1300;

  soKw > 0 && soKw <= 50
    ? (tongTien = soKw * kw1)
    : soKw > 50 && soKw <= 100
    ? (tongTien = 50 * kw1 + (soKw - 50) * kw2)
    : soKw > 100 && soKw <= 200
    ? (tongTien = 50 * kw1 + 50 * kw2 + (soKw - 100) * kw3)
    : soKw > 200 && soKw <= 350
    ? (tongTien = 50 * kw1 + 50 * kw2 + 100 * kw3 + (soKw - 200) * kw4)
    : soKw > 350
    ? (tongTien =
        50 * kw1 + 50 * kw2 + 100 * kw3 + 200 * kw4 + (soKw - 350) * kw_5)
    : alert("Người dùng nhập không hợp lệ!!!");

  tongTien = new Intl.NumberFormat("vn-VN").format(tongTien);
  document.getElementById(
    "result2"
  ).innerText = `Họ và Tên: ${hoTen}, Số tiền điện: ${tongTien} VNĐ.`;
}

/**
 * Bài tập 3:
 *
 * input: cho người dùng nhập tổng thu nhập của năm và những người đang phụ thuộc vào người dùng
 *
 * bước 1: tạo ra 3 biến
 * bước 2: tạo thuNhap = tổng thu nhập - 4000000 - 1600000 * với người phụ thuộc
 * bước 3: xét tổng thu nhập theo điều kiên để có thể tính được số tiền thuế của người dùng
 *
 * output: hiển thị ra số tiền người dùng cần đóng
 */

function tienThue() {
  var hoTen = document.getElementById("txt-ho-ten2").value;
  var thuNhapNam = Number(document.getElementById("txt-tong-thu-nhap").value);
  var nguoiPhuThuoc = Number(
    document.getElementById("txt-so-nguoi-phu-thuoc").value
  );
  thuNhap = thuNhapNam - 4e6 - 16e5 * nguoiPhuThuoc;
  tong = 0;
  thuNhapNam > 0 && thuNhapNam <= 6e7
    ? (tong = 0.05 * thuNhap)
    : thuNhapNam > 6e7 && thuNhapNam <= 12e7
    ? (tong = 0.1 * thuNhap)
    : thuNhapNam > 12e7 && thuNhapNam <= 21e7
    ? (tong = 0.15 * thuNhap)
    : thuNhapNam > 21e7 && thuNhapNam <= 384e6
    ? (tong = 0.2 * thuNhap)
    : thuNhapNam > 384e6 && thuNhapNam <= 624e6
    ? (tong = 0.25 * thuNhap)
    : thuNhapNam > 624e6 && thuNhapNam <= 96e7
    ? (tong = 0.3 * thuNhap)
    : thuNhapNam > 96e7
    ? (tong = 0.35 * thuNhap)
    : alert("Quá số tiền cho phép!!!");

  tong = new Intl.NumberFormat("vn-VN").format(tong);
  document.getElementById(
    "result3"
  ).innerText = `Họ và Tên: ${hoTen}, Tiền thuế: ${tong} VNĐ`;
}

/**
 * Bài tập 4
 *
 * input: cho người dùng lựa chọn mình là doanh nghiệp hay là người dùng cá nhân
 * và sau đó người dùng điền kinh đăng ký mà họ đang sử dụng
 *
 * bước 1: tạo 1 dropdown để người dùng có thể lựa chọn là doanh nghiệp hay cá nhân
 * bước 2: tạo ra 4 biến để lưu dữ liệu người dùng
 * bước 3: xét điều kiện nếu là doanh nghiệp thì phí hoá đơn là 15$, phí cơ bản là 75$ cho 10 đầu kết nối
 * mỗi kết nối thêm phụ phí là 5$ và thuê 1 kênh cao cấp là 50$
 * bước 4: xét điều kiện nếu là doanh nghiệp thì phí hoá đơn là 4.5$, phí cơ bản là 20.5$ và thuê 1 kênh cao cấp là 7.5$
 *
 * output: hiển thị số tiền người dùng phải thanh toán
 *
 */

function myOption() {
  var option = document.getElementById("txt-option").value;
  var option2 = Number(document.getElementById("txt-option2").value);
  switch (option) {
    case "0":
      document.getElementById("txt-option2").style.display = "none";
      break;
    case "1":
      document.getElementById("txt-option2").style.display = "none";
      break;
    case "2":
      document.getElementById("txt-option2").style.display = "block";
      break;
    default:
      document.getElementById("txt-option2").style.display = "none";
  }
}

function tienCap() {
  var maKhachHang = document.getElementById("txt-code").value;
  var soKenhCao = document.getElementById("txt-kenh-cao-cap").value;
  var option = document.getElementById("txt-option").value;
  var option2 = document.getElementById("txt-option2").value;
  tongCap = 0;
  if ("2" == option && option2 <= 10) {
    tongCap = 15 + 75 + soKenhCao * 50;
  } else if ("2" == option && option2 >= 10) {
    tongCap = 15 + 75 + soKenhCao * 50 + (option2 - 10) * 5;
  } else if ("1" == option && soKenhCao <= 10) {
    tongCap = 4.5 + 20.5 + soKenhCao * 7.5;
  } else if ("1" == option && soKenhCao >= 10) {
    tongCap = 4.5 + 20.5 + soKenhCao * 7.5 + (soKenhCao - 10) * 5;
  } else {
    return alert("Vui lòng chọn khách hàng!!");
  }
  tongCap = new Intl.NumberFormat("us-US").format(tongCap);
  document.getElementById(
    "result4"
  ).innerText = `Mã khách hàng: ${maKhachHang}; Tiền cáp: ${tongCap} USD`;
}
