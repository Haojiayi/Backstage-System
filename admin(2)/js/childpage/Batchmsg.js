var id=localStorage.getItem('id')
var qrpicsrc=host()+'/static/QrCode_img/';
var brpicsrc=host()+'/static/BarCode_img/';

function batchmsg(){
	
				$.ajax(host()+'/selectBatchBs',{
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
									var resarr = Array('id','man_id','log_id','p_name','amount','intro','pc_name','time','mat_name','prodtime','exptime','pro_img','br_img','qr_img');
									$.each(datalist,function(i,elem){
										var tr=document.createElement('tr');
											$.each(resarr, function(index,ele) {
											var td=document.createElement('td');											
											
											tr.appendChild(td);	
											if(ele=='qr_img'||ele=='pro_img'){
												var img=document.createElement("img")
												td.appendChild(img)
												img.setAttribute('src',qrpicsrc+elem[ele])
											}else if(ele=='br_img'){
											
												var img2=document.createElement("img")
												td.appendChild(img2)
												img2.setAttribute('src',brpicsrc+elem[ele])												
											}
											else{
												td.innerHTML=elem[ele];
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
function onaddbatch(){
var index=layer.open({
	type:2,
	admin:5,
	title:'职员添加',
	area:['60%','60%'],
	skin:"layui-layer-molv",
	content:"addbatch.html"
});
}