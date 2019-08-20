var id=localStorage.getItem('id')
var username=localStorage.getItem('username');
function Storagemsg(){
	
				$.ajax(host()+'/selectAllProd',{
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
									var resarr = Array('p_id','p_name','stock','in_company','inTime','out_company','outTime');
									$.each(datalist,function(i,elem){
										var tr=document.createElement('tr');
											$.each(resarr, function(index,ele) {
											var td=document.createElement('td');											
											td.innerHTML=elem[ele];
											tr.appendChild(td);	
											td.setAttribute('name','gettd')
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
function search(pdname){
	
				$.ajax(host()+'/selectProdBN',{
								data:{
									id:id,
						            name:pdname
								},
								dataType:'json',//服务器返回json格式数据
								type:'post',//HTTP请求类型
								timeout:10000,//超时时间设置为10秒；              
								success:function(data){
									var tableroot=document.getElementById('tableroot');
									//服务器返回响应，根据响应结果，分析是否登录成功；
									var list=eval(data)
									var datalist=eval(list['result'])
									var resarr = Array('p_id','p_name','stock','in_company','inTime','out_company','outTime');
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
