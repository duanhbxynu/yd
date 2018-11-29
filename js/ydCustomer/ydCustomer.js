//select2单选
$(function(){
	$("#belongStore").select2();
});
//开始时间和结束时间
laydate({
	elem: '#startTimes',
	event: 'focus' 
});
laydate({
	elem: '#endTimes',
	event: 'focus' 
});
 $(function(){
    $("#creatCustomers").validate();
});
