//订单管理
var id=localStorage.getItem('id')
function manifestmsg(){
	
				$.ajax(host()+'/selectAllManifestBcGet',{
								data:{
									cid:id,
						            
								},
								dataType:'json',//服务器返回json格式数据
								type:'post',//HTTP请求类型
								timeout:10000,//超时时间设置为10秒；              
								success:function(data){
									var tableroot=document.getElementById('tableroot');
									//服务器返回响应，根据响应结果，分析是否登录成功；
									var list=eval(data)
									var datalist=eval(list['res'])
									var resarr = Array('id','prod_name','amount','place','originatorId','c_name','time','confirm');
									$.each(datalist,function(i,elem){
										var tr=document.createElement('tr');
										var tdhide=document.createElement("td");
										var btn=document.createElement("input");
										tdhide.appendChild(btn);

											$.each(resarr, function(index,ele) {
											var td=document.createElement('td');											
											td.innerHTML=elem[ele];
											tr.appendChild(td);	
											tr.appendChild(tdhide);
										if(elem['confirm']=='Y'){
											btn.setAttribute('class','layui-btn-disabled layui-btn')
											btn.setAttribute('value','已审批')
										}else{
											btn.setAttribute("class","layui-btn layui-btn-lg")
											btn.setAttribute('value','未审批')
										}
										});
										tableroot.appendChild(tr);
										tdhide.setAttribute('class','display-none');
										btn.setAttribute('id',elem.id);
										btn.setAttribute('type','button')
//										btn.innerHTML='审批';

									})

								},
								error:function(xhr,type,errorThrown){
									//异常处理；
									console.log(type);
									alert(xhr.readyState)
								}
							});
}
function onaddmanifest(){
var index=layer.open({
	type:2,
	admin:5,
	title:'订单添加',
	area:['60%','60%'],
	skin:"layui-layer-molv",
	content:"addmanifest.html"
});
localStorage.setItem('index',index)
}
//var getbtn=document.querySelectorAll("input.layui-btn.layui-btn-lg");
//$.each(getbtn, function(index,ele) {
//	var btn=ele
//});
//$('button').o
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