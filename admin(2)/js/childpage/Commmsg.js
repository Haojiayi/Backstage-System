var id=localStorage.getItem('id')
function commsg(){
	
				$.ajax(host()+'/selectAllWarehouse',{
								data:{
									id:id,
						            
								},
								dataType:'json',//服务器返回json格式数据
								type:'post',//HTTP请求类型
								timeout:10000,//超时时间设置为10秒；              
								success:function(data){
									var tableroot=document.getElementById('tableroot');
									//服务器返回响应，根据响应结果，分析是否登录成功；
									var list=eval(data)
									var datalist=eval(list['result'])
									var resarr = Array('p_name','amount','prodtime','exptime','man_id');
									$.each(datalist,function(i,elem){
										var tr=document.createElement('tr');
											$.each(resarr, function(index,ele) {
											var td=document.createElement('td');											
											td.innerHTML=elem[ele];
											tr.appendChild(td);	
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
//添加弹出框
function onaddcomclick(){
var index=layer.open({
	type:2,
	admin:5,
	title:'商品添加',
	area:['60%','60%'],
	skin:"layui-layer-molv",
	content:"addcom.html"
});
}
