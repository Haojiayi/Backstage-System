var id=localStorage.getItem('id');
var src=host()+"/static/img/staff/"
function staffmsg(display){
	
				$.ajax(host()+'/SelectStaffByCompany',{
								data:{
									companyId:id,    
								},
								dataType:'json',//服务器返回json格式数据
								type:'post',//HTTP请求类型
								timeout:10000,//超时时间设置为10秒；              
								success:function(data){
									var tableroot=document.getElementById('tableroot');
									//服务器返回响应，根据响应结果，分析是否登录成功；
									var list=eval(data)
									var datalist=eval(list['staff'])
									var resarr = Array('name','tel','companyId','photoPath','entryTime','type','id','leaveTime');
									$.each(datalist,function(i,elem){
										var tr=document.createElement('tr');
										var trhide=document.createElement('tr');
										var tdhide=document.createElement('td');
										var btntd=document.createElement("td");
										var input=document.createElement('input');
										var btn=document.createElement("input");
										input.setAttribute('type','checkbox');
										tdhide.appendChild(input)
										tdhide.setAttribute("class","display-none")
//											
//											$("#tdhide"+i).hide();

											$.each(resarr, function(index,ele) {
											var td=document.createElement('td');
											var value=elem[ele]
											if(ele=='photoPath'){
												value="<img src='"+src+elem[ele]+"'>";
											}
											btntd.appendChild(btn)
											td.innerHTML=value;
											tr.appendChild(td);
											tr.appendChild(tdhide)
											tr.appendChild(btntd)
										});
										input.setAttribute("value",elem.id)
										btn.setAttribute('type','button')
										btn.setAttribute('id',elem.id)
										btn.setAttribute('value','修改')
										btn.setAttribute("class","layui-btn layui-btn-lg")
										tr.appendChild(tdhide)
										tableroot.appendChild(tr);
											
									})
//								$('#tdhide').hide()
								},
								error:function(xhr,type,errorThrown){
									//异常处理；
									console.log(type);
									
								}
							});
}

//彈出添加框
function onaddstaff(){
var index=layer.open({
	type:2,
	admin:5,
	title:'职员添加',
	area:['60%','60%'],
	skin:"layui-layer-molv",
	content:"addstaff.html",
	id:"iframe2"
});
}
//刪除職員信息
function comfirdelet(){
			var str=""
			$.each($('input:checkbox'),function(index,ele){
                if(this.checked){
                str+=$(this).val()+";"    
                }
            
            }) 
            var laststr="" 
            laststr=str.substring(0,str.length-1)
					$.ajax(host()+'/deleteStaff',{
								data:{
									id:laststr,
								},
								dataType:'json',//服务器返回json格式数据
								type:'post',//HTTP请求类型
								timeout:10000,//超时时间设置为10秒；              
								success:function(data){
									alert("删除成功！")
								},
								error:function(xhr,type,errorThrown){
									//异常处理；
									console.log(type);
									
								}
							});
}
//修改职员信息
$('*').on("click","input[value=修改]",function(){
	var index=layer.open({
	type:2,
	admin:5,
	title:'职员添加',
	area:['60%','60%'],
	skin:"layui-layer-molv",
	content:"addstaff.html",
	id:"iframe2"
});
})