function addlogisticsmsg(companyName,nextCompanyName,name,amount,plateNum) {
	var formdata = new FormData();
	var CompanyName = localStorage.getItem("username");
	formdata.append("companyName", companyName);
	formdata.append("nextCompanyName", nextCompanyName);
	formdata.append("name", name)
	formdata.append("amount", amount)
	formdata.append("plateNum", plateNum)
	$.ajax(host() + '/addLogistics', {
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