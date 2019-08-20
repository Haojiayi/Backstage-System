


/**
 * 演示程序当前的 “注册/登录” 等操作，是基于 “本地存储” 完成的
 * 当您要参考这个演示程序进行相关 app 的开发时，
 * 请注意将相关方法调整成 “基于服务端Service” 的实现。
 **/
 

	/**
	 * 用户登录
	 **/
	
    function login(id,password){				
				$.ajax(host()+'/Login',{
								data:{
									id:id,
						            password:password
								},
								dataType:'json',//服务器返回json格式数据
								type:'post',//HTTP请求类型
								timeout:10000,//超时时间设置为10秒；              
								success:function(data){
									console.log(data)
									//服务器返回响应，根据响应结果，分析是否登录成功；
									var list=eval(data);
									if(list['errorCode']==0){
										alert('登陆成功')
										localStorage.setItem('username',list['msg'].name)
										localStorage.setItem('id',list['msg'].id)
										localStorage.setItem('type',list['msg'].type)
										window.location.href="index.html";
									
									}
								},
								error:function(xhr,type,errorThrown){
									//异常处理；
									console.log(type);
								}
							});
			};







window.onload=function action(){
			$('.top').fadeOut(0);
			$(".top").fadeIn(6000);

}


