var id=localStorage.getItem('id')
function addbatch(pro_img,prodtime,p_name,exptime,intro,man_id,amount){
					var formdata = new FormData();
					formdata.append("pro_img", pro_img);
					formdata.append("prodtime", prodtime)
					formdata.append("p_name", p_name)
					formdata.append("exptime", exptime)
					formdata.append('intro',intro)
					formdata.append('man_id',man_id)
					formdata.append('id',id)
					formdata.append('amount',amount)
	$.ajax(host()+'/addBatch',{
						data:formdata,
						contentType: false,
						processData: false,
						dataType:'json',//服务器返回json格式数据
						type:'post',//HTTP请求类型
						timeout:10000,//超时时间设置为10秒；      
						async: false,
						success:function(data){
								//服务器返回响应，根据响应结果，分析是否登录成功；
								var list=eval(data);
								if(list['errorcode']==0){

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
