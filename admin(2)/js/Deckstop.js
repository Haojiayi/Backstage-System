var pcpath=host()+'/static/img/company/'
function getcontent(){				
				var id=localStorage.getItem('id');
				$.ajax(host()+'/selectCompany',{
								data:{
									id:id,
						            
								},
								dataType:'json',//服务器返回json格式数据
								type:'post',//HTTP请求类型
								timeout:10000,//超时时间设置为10秒；              
								success:function(data){
									//服务器返回响应，根据响应结果，分析是否登录成功；
									var list=eval(data)
									document.getElementById('names').innerHTML=list['company'].name
									if(id!=1){
										$.each(list['company'],function(keys,ele){
											
											if(keys=='pcPath'||keys=='scPath'||keys=='blPath'){
												
												document.getElementById(keys).innerHTML='<img src='+pcpath+ele+'>'
											}else{
												document.getElementById(keys).innerHTML=ele
											}
											
										})
									}else{
										$('#collroot').hide()
									}
								},
								error:function(xhr,type,errorThrown){
									//异常处理；
									console.log(type);
								}
							});
//							alert("ss")
			};
