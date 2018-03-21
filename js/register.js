// $(()=>{
// 	//复选框禁用
// 	$(":checkbox").click(e=>{
// 			var $cbn = $(e.target);
// 			$(":submit").prop("disabled",!$cbn.prop("checked"));
// 		})
// 	//表单验证
// 	$(".register").on("click",function(){
// 		var $form=$("form");
// 		// var $Name = $(".uname").val();
// 		// var $pwd = $(".upwd").val();
// 		// var reg=/^\d{8,16}$/;
// 		// var reg1 = /^\d{8}$/;
// 		// if (!reg.test($txtName.val())) {
// 		// 		$txtName.next().show(),
// 		// 		$txtName.next().html("用户名必须介于8~16位字符之间!");
// 		// }else{
// 		// 	$txtName.next().hide();
// 		// };
// 		// if (!reg.test($txtUpwd.val())) {
// 		// 		$txtUpwd.next().show(),
// 		// 		$txtUpwd.next().html("用户名必须介于8位字符之间!");
// 		// }else{
// 		// 		$txtUpwd.next().hide();
// 		// };
// 		$.post("data/login.php",$form.serialize())
// 			.then(text=>{
// 			if(text=="false"){
// 				alert("用户名或密码不正确!")
// 				location="index.html";
// 			}else{
// 				alert("登录成功!");
// 			}
// 		})

// 	})
// })

$(()=>{
	// 	//复选框禁用
	// $(":checkbox").click(e=>{
	// 		var $cbn = $(e.target);
	// 		$(":submit").prop("disabled",!$cbn.prop("checked"));
	// 	})
	// 获取焦点事件
	$(".uname").blur(e=>{
		 var  $txtName = $(e.target);
		 var reg=/^[a-z]{5,10}$/;
		 if (!reg.test($txtName.val())) {
				$txtName.next().show();
				$txtName.next().html("用户名必须介于6~10位字符之间!");
		}else{
				$txtName.next().show();
				$txtName.next().html("用户名格式正确");
		};
	})

	$(".upwd").blur(e=>{
		 var  $txtUpwd = $(e.target);
		 var reg1 = /^\d{3,10}$/;
		 if (!reg1.test($txtUpwd.val())) {
				$txtUpwd.next().show();
				$txtUpwd.next().html("密码必须介于6~10位数字之间!");
		}else{
				$txtUpwd.next().show();
				$txtUpwd.next().html("密码格式正确");
		};
	})


	$("#btn").click(()=>{
		var $form=$("form");
		var reg=/^[a-z]{5,10}$/;
		var reg1 = /^\d{3,10}$/;
		var $txtName = $(".uname");
		var $txtUpwd = $(".upwd");
		if (reg.test($txtName.val())&&reg1.test($txtUpwd.val())) {
			 $.post("data/login.php",$form.serialize())
				.then(text=>{
					console.log(text);
				if(text==false){
					// $form[0].reset();
					alert("用户名或密码不正确!")
				}else{
					alert("登录成功!");
					location="index.html";
				}
			})
		}
	});
	$(window).keyup(e=>{
		if(e.keyCode==13) $("#btn").click();
	})
});
// $(()=>{
// 	$("form").submit(function(){
// 		$.post("data/login.php")
// 				.then(text=>{
// 					console.log(text);
// 				if(text==false){
// 					$form[0].reset();
// 					alert("用户名或密码不正确!")
// 				}else{
// 					alert("登录成功!");
// 					location="index.html";
// 				}
// 			})
// 	});
// })