var id=localStorage.getItem('id')
//分页
var page=1;
//首页
function firstpage(){
	page=1;
}
//上一页
function frontpage(){
	page=page-1;
	if(page<=1){
		page=1;
	}
	showlogistics();
}
//下一页
function afterpage(){
		page=page+1;
		var count=document.getElementById("pagecount").innerHTML;
		if(page>=count){
			page=count;
		}
	    showlogistics();
}
//跳转
function jump(){
    page=document.getElementById("jump").value;
	showlogistics();
}
//末页
function lastpage(){
	var count=document.getElementById("pagecount").innerHTML;
	page=count;
	showlogistics();
}
function showlogistics(){
				$.ajax(host()+'/selectAllLogistics',{
								data:{
									page:page,
									id:id,
									type:"g"
								},
								dataType:'json',//服务器返回json格式数据
								type:'post',//HTTP请求类型
								timeout:10000,//超时时间设置为10秒；              
								success:function(data){
									var tableroot=document.getElementById('tableroot');
									//服务器返回响应，根据响应结果，分析是否登录成功；
									var list=eval(data)
									var datalist=eval(list['result'])
									var resarr = Array('id','amount','startPlace','endPlace',
														'plateNum','driverId','time','comfirm');
									$.each(datalist,function(i,elem){
//										if(Object.keys(list['result']).length-1==i){
//												return false
//											}
										var tr=document.createElement('tr');
											$.each(resarr, function(index,ele) {
											var td=document.createElement('td');											
											td.innerHTML=elem[ele];
											tr.appendChild(td);	
											
											if(elem['confirm']=='Y'){
											btn.setAttribute('class','layui-btn-disabled layui-btn')
											btn.setAttribute('value','已审批')
										}else{
											btn.setAttribute("class","layui-btn layui-btn-lg")
											btn.setAttribute('value','未审批')
										}

										});	

										tableroot.appendChild(tr);	
									})

								},
								error:function(xhr,type,errorThrown){
									//异常处理；
									console.log(type);
									alert(xhr.readyState)
								}
							});	
}
function addmsg(){
var index=layer.open({
	type:2,
	admin:5,
	title:'职员添加',
	area:['60%','60%'],
	skin:"layui-layer-molv",
	content:"addLogistics.html"
});
}
//审批
$('*').on('click','input[value=未审批]',function(){
	var id=$(this)[0].id
	$.ajax(host()+'/updateManifest',{
		data:{
			id:id,
		},
		dataType:'json',//服务器返回json格式数据
								type:'post',//HTTP请求类型
								timeout:10000,//超时时间设置为10秒；              
								success:function(data){
//								alert("success")	
								document.getElementById(id).setAttribute('class','layui-btn-disabled layui-btn')
								document.getElementById(id).setAttribute('value','已审批')							
								document.getElementById(id).parentNode.previousElementSibling.innerHTML="Y"
//								location.reload()
								},
								error:function(xhr,type,errorThrown){
									//异常处理；
									console.log(type);
									alert(xhr.readyState)
								}
								
	});
	
});