
function notification(){
    alert("Cảm ơn bạn đã phản hồi")
}
function pay(){
    alert("Cảm ơn bạn đã đặt hàng. Chúng tôi sẽ phản hồi cho bạn sớm nhất có thể")
}
function payment(code){
    var result = confirm("Bạn muốn mua hàng?" );
    if(result == true)
    {
    var code1 = code.id
    var name = prompt("Họ và tên");
    var phone = prompt("số điện thoại");
    var address = prompt("Địa chỉ");
    var color = prompt("Màu bạn muốn","màu giống hình");
    var number = prompt("Số lượng",1);
    alert("Họ và Tên: "+name+"\n"+"Số điện thoại: "+phone+"\n"+"Địa chỉ: "+address+"\n"+"Màu sảm phẩm: "+color+"\n"+"Số lượng: "+number+"\n"+"Mã sản phẩm: "+code1)
    }
}
function changeImage(obj){
    var path = obj.src
    var img = document.getElementById("mainImg")
    img.src = path
}
function changeImage1(obj){
    var path = obj.src
    var img = document.getElementById("mainImg1")
    img.src = path
}
function changeImage2(obj){
    var path = obj.src
    var img = document.getElementById("mainImg2")
    img.src = path
}
function changeImage3(obj){
    var path = obj.src
    var img = document.getElementById("mainImg3")
    img.src = path
}
function changeImage4(obj){
    var path = obj.src
    var img = document.getElementById("mainImg4")
    img.src = path
}
function changeImage5(obj){
    var path = obj.src
    var img = document.getElementById("mainImg5")
    img.src = path
}
function changeImage6(obj){
    var path = obj.src
    var img = document.getElementById("mainImg")
    img.src = path
}
function changeImage7(obj){
    var path = obj.src
    var img = document.getElementById("mainImg7")
    img.src = path
}
function changeImage8(obj){
    var path = obj.src
    var img = document.getElementById("mainImg8")
    img.src = path
}
function changeImage9(obj){
    var path = obj.src
    var img = document.getElementById("mainImg9")
    img.src = path
}
function changeImage10(obj){
    var path = obj.src
    var img = document.getElementById("mainImg10")
    img.src = path
}
function changeImage11(obj){
    var path = obj.src
    var img = document.getElementById("mainImg11")
    img.src = path
}
function changeImage12(obj){
    var path = obj.src
    var img = document.getElementById("mainImg12")
    img.src = path
}
function changeImage13(obj){
    var path = obj.src
    var img = document.getElementById("mainImg13")
    img.src = path
}
function changeImage14(obj){
    var path = obj.src
    var img = document.getElementById("mainImg14")
    img.src = path
}
function changeImage15(obj){
    var path = obj.src
    var img = document.getElementById("mainImg15")
    img.src = path
}
function changeImage16(obj){
    var path = obj.src
    var img = document.getElementById("mainImg16")
    img.src = path
}
function changeImage17(obj){
    var path = obj.src
    var img = document.getElementById("mainImg17")
    img.src = path
}
function zoomImg(obj){
    var img = obj.src
    var lightbox = document.getElementById("lightbox");
    var imagePlaceholder = document.getElementById("image-placeholder");
    imagePlaceholder.src = img;
    lightbox.style.display = 'block';
    var closeLightboxButton = document.getElementById("close-icon");
    closeLightboxButton.onclick = function() { 
     document.getElementById('lightbox').style.display = 'none';
    }
}
