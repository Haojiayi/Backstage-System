var cid=localStorage.getItem('id');
var usertype=localStorage.getItem('type');
if(usertype=='warehouse'){
	var type=1;
}
else{
	var type=0;
}
function showform(){
		$.ajax(host() + '/getAllwcs', {
		data: {
			type:type,
			cid:cid
		},
//		contentType: false,
//		processData: false,
		dataType: 'json', //服务器返回json格式数据
		type: 'post', //HTTP请求类型
//		async: false,
		success: function(data) {
			var list=eval(data);
			var companylist=list['company'];
			var stafflist=list['staff'];
			var companyroot=document.getElementById("company");
			var staffroot=document.getElementById("staff");
			var firstoption=document.createElement('option')
			firstoption.innerHTML="请选择公司"
			companyroot.appendChild(firstoption);

			$.each(companylist,function(index,elem){
				var option=document.createElement('option')

				companyroot.appendChild(option);
//				option.setAttribute('class',)
				option.value=elem;
				option.innerHTML=elem;

			})//公司下拉菜
				var firstoptions=document.createElement('option')
				staffroot.appendChild(firstoptions);
			$.each(stafflist, function(i,elem) {
				var options=document.createElement('option')

				staffroot.appendChild(options);
				options.value=elem;
				options.innerHTML=elem;
				firstoptions.innerHTML="请选择职员"
			});//职员下拉菜单

		},
		error: function(xhr, type, errorThrown) {
			//异常处理；
			console.log(type);
			alert("failed!!!");
			alert(xhr.readyState);
		}
	});
}//动态下拉列表
function addmanifestmsg(prode_name,cg_name,amount,place){
				$.ajax(host()+'/addManifest',{
						data:{
							cid:cid,
				            prod_name:prode_name,
				            cg_name:cg_name,
				            amount:amount,
				            place:place
						},
							dataType:'json',//服务器返回json格式数据
							type:'post',//HTTP请求类型
							timeout:10000,//超时时间设置为10秒；              
						success:function(data){
								//服务器返回响应，根据响应结果，分析是否登录成功；
								var list=eval(data);
								if(list['errorCode']==0){

//								layer.close(localStorage.getItem('index'))
								alert("添加成功");
									}else{
								layer.close(localStorage.getItem('index'))

									}
								},
						error:function(xhr,type,errorThrown){
									//异常处理；
									console.log(type);
								}
							});
}
