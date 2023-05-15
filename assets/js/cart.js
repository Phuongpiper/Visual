

$(document).ready(function() {
    cart();
function cart(){
    var total = 0;
    var item = localStorage.getItem("cart");
    var cartData = JSON.parse(item);
    var data='';
    if(cartData != null && cartData.length != 0){
       for( let i = 0 ; i <cartData.length;i++){
        data += '<li class="pr-cart-item cart-item">'+
                        '<div class="product-image">'+
                            '<figure><img class="img-prd card-img rounded-0 img-fluid" src="'+cartData[i].productImg+'" alt=""></figure>'+
                        '</div>'+
                        '<div class="product-name">'+
                            '<a class="content-product-h3 productName" href="#">'+cartData[i].productName+'</a>'+
                        '</div>'+
                       ' <div class="quantity">'+
                            '<div class="quantity-input">'+
                               ' <input type="number" name="product-quantity" class="cartQuantity" value="1" >'+									
                                '<input type="hidden" class="productID" value="'+cartData[i].productID+'" disabled>'+
                            '</div>'+
                        '</div>'+
                        '<div class="price-field sub-total"><p class="productPrice price" id="price">'+cartData[i].productPrice+'</p></div>'+
                        '<div class="delete">'+
                         '   <a href="#" class="btn btn-delete" title="">'+
                          '      <span>Delete from your cart</span>'+
                             '   <i  data-id="'+cartData[i].productID+'" class="fa fa-times-circle remove" aria-hidden="true"></i>'+
                          '  </a>   </div></li>';
                         
        document.getElementById("cart-items").innerHTML  = data;
        
            var $cartQuantity = document.querySelector(".cartQuantity")
           if($cartQuantity != 1){
                total +=parseFloat(cartData[i].productPrice * $cartQuantity.value);
           }else{
                total += parseFloat(cartData[i].productPrice * cartData[i].productQua);
           }
       }
       
   
    document.getElementById("product-total").innerHTML  = total.toLocaleString('it-IT', {style : 'currency', currency : 'VND'});
    }else{
        document.getElementById("cart-items").innerHTML = '<li class="pr-cart-item cart-item">Hãy thêm sản phẩm vào giỏ hàng </li>'
        document.getElementById("product-total").innerHTML = '0Đ'
        document.getElementById("order").style = 'display:none;'
    }
  
    $(document).ready(function() {
        $('.remove').click(function() {
                var id = $(this).data("id") // will return the number 123
    
                var cartItem = localStorage.getItem("cart");
                var cartData = JSON.parse(cartItem);

                for (key in cartData) {
                    if (id == cartData[key].productID) {
                        cartData.splice(key, 1);
                    }
                }
                if(cartData != null){
                    localStorage.setItem("cart", JSON.stringify(cartData));
                }
                cart();
            })
    })
      
	}
   
   

    var order = document.getElementById("order");
    order.onclick = function () {
        Swal.fire({
        title: 'Bạn Có Chắc Chắn Muốn Mua Hàng?',
        showDenyButton: true,
        showCancelButton: true,
        confirmButtonText: 'Chấp Nhận',
        denyButtonText: `Suy Nghĩ Lại`,
        }).then((result) => {
      
        if (result.isConfirmed) {
            localStorage.removeItem("cart");
            window.location.replace("http://127.0.0.1:5500/index.html");
            setTimeout(function(){
                window.location.reload(1);
                }, 3000);
        } else if (result.isDenied) {
            Swal.fire('Tiếp Tục Mua Sắm', '', 'info')
        }
        })
    }
    function updatecart() {
        var cart_item = document.getElementsByClassName("cart-items")[0];
        var cart_rows = cart_item.getElementsByClassName("cart-row");
        var total = 0;
        for (var i = 0; i < cart_rows.length; i++) {
          var cart_row = cart_rows[i]
          var price_item = cart_row.getElementsByClassName("cart-price ")[0]
          var quantity_item = cart_row.getElementsByClassName("cart-quantity-input")[0]
          var price = parseFloat(price_item.innerText)// chuyển một chuổi string sang number để tính tổng tiền.
          var quantity = quantity_item.value // lấy giá trị trong thẻ input
          total = total + (price * quantity)
          total = new Intl.NumberFormat('de-DE').format(total);
        }
        document.getElementsByClassName("cart-total-price")[0].innerText = total + ' VNĐ'
       
      }
});


