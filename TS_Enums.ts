//enums khởi tạo giá trị đầu tiên ở [0] + thêm 1 ở mỗi giá trị bổ sung

enum Elementals {
    Fire="Fire",
    Water="Water",
    Light="Light",
    Dark="Dark"
}
console.log(Elementals);

enum StatusCodes {
    NotFound = 404,
    Success = 200,
    Accepted = 202,
    BadRequest = 400,
}
console.log(StatusCodes.Accepted);