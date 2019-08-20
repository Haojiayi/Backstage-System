function addstaffmsg(name, type, tel, fileobj) {
	var formdata = new FormData();
	var CompanyName = localStorage.getItem("username");
	formdata.append("name", name);
	formdata.append("photo", fileobj);
	formdata.append("tel", tel)
	formdata.append("type", type)
	formdata.append("CompanyName", CompanyName)
	$.ajax(host() + '/addStaff', {
		data: formdata,
		contentType: false,
		processData: false,
		dataType: 'json', //服务器返回json格式数据
		type: 'post', //HTTP请求类型
		async: false,
		success: function(data) {
			alert("添加成功");
			window.parent.document.getElementById("iframe2").setAttribute('style','display: none;');

		},
		error: function(xhr, type, errorThrown) {
			//异常处理；
			console.log(type);
			alert("failed!!!");
			alert(xhr.readyState);
		}
	});

}

function closewindow() {
	var index = parent.layer.getFrameIndex(window.name); //先得到当前iframe层的索引
	parent.layer.close(index); //再执行关闭 
}