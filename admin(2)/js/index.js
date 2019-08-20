function Limst(){
	var type=localStorage.getItem('type')	
	if(type=='warehouse'){
		$('#companymsg').hide();
		
		//仓库权限
	}
	if(type=='production'){
		$('#companymsg').hide()
		$('#deportmsg').hide()
		$('#deportcontroll').hide()
		
		//生产商权限
	}
	if(type=='manifest'){
		$('#companymsg').hide()
		$('#deportmsg').hide()
	}
}
