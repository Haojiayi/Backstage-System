var $ = layui.$, //jquery
    element = layui.element, //元素操作
    form = layui.form, //表单
    table = layui.table, //数据表格
    laypage = layui.laypage, //分页
    laytpl = layui.laytpl, //模板引擎
    layer = layui.layer, //弹出层
    laydate = layui.laydate, //时间日期
    upload = layui.upload,//上传
    carousel = layui.carousel,//轮播图
    util = layui.util;//工具

//隐藏左侧菜单
//$('.layui-tab-tool').on('click', function () {
//  if ($(this).hasClass("open")) {
//      $(".layui-side").animate({ 'left': -200 }, 300);
//      $(".layui-body").animate({ 'left': 0 }, 300);
//      $(".layui-footer").animate({ 'left': 0 }, 300);
//      $(this).removeClass("open");
//      $(this).attr("title", "展开");
//      $(this).children("i").removeClass("fa-chevron-left");
//      $(this).children("i").addClass("fa-chevron-right");
//  } else {
//      $(".layui-side").animate({ 'left': 0 }, 300);
//      $(".layui-body").animate({ 'left': 200 }, 300);
//      $(".layui-footer").animate({ 'left': 200 }, 300);
//      $(this).addClass("open");
//      $(this).attr("title", "收起");
//      $(this).children("i").removeClass("fa-chevron-right");
//      $(this).children("i").addClass("fa-chevron-left");
//  }
//});

//左侧菜单
$(".layui-side-scroll .layui-nav-item").click(function (event) {
    $(this).children('.layui-side .layui-nav-item').slideToggle();
});
$(".layui-side .layui-nav-item").click(function (event) {
    event.stopPropagation();
    $(".layui-side .layui-nav-item").removeClass('layui-nav-itemed');
    if ($(this).children("dl").length > 0) {
        $(this).addClass('layui-nav-itemed');
    }
  
}); 
//左侧菜单点击事件
element.on('nav(leftNav)', function (elem) {
    //var currentTabCount = $('.layui-tab[lay-filter=\'main-tab\']').children('.layui-tab-title').children('li').length;
    //if (currentTabCount > 8) {
    //    layer.msg("为了系统的流畅度，只能同时打开8个选项卡。");
    //    return;
    //}

//  var icon = $(elem).children('a').children('i').attr('data-icon');   //icon图标
    var url = elem[0].attributes['data-url'].value;   //页面url
    var id = elem[0].attributes['data-id'].value;     //tab唯一Id
    var title = elem[0].innerHTML          //菜单名称
    
    if (title == "首页") {
        element.tabChange('main-tab', 0);
        return;
    }
    if (url == undefined) return;
    var tabTitleDiv = $('.layui-tab[lay-filter=\'main-tab\']').children('.layui-tab-title');
    var exist = tabTitleDiv.find('li[lay-id=' + id + ']');
    //当前tab是否存在
    if (exist.length > 0) {
        element.tabChange('main-tab', id);
        $('#' + id).attr('src', url);
    } else {
        if (typeof (icon) != "undefined") {
            title = "<i class=\"fa " + icon + "\"></i>" + title;
        }
        element.tabAdd('main-tab', { 
        	title: title, 
        	content: '<iframe id="' + id + '" src="' + url + '" class="layui-tab-iframe"></iframe>', 
        	id: id });
        element.tabChange('main-tab', id);
    }
});

//弹出层
var Dialog = {
    Confirm: function (text, url, data) {
        debugger
        layer.confirm(text, {
            icon: 3, btn: ['确定', '取消']
        }, function (index) {
            var postindex = layer.load(1);
            $.post(url, data, function (result) {
                layer.close(postindex);
                //状态state 信息message
                if (result.state == 0) {
                    layer.msg(result.message, { icon: 6 });
                } else { 
                    layer.msg(result.message, { icon: 5 });
                }
            });
        });
    },
    ErrorMsg: function (value) {
        //错误提示 
        layer.msg(value, { icon: 5, time: 2000 });
    },
    SucMsg: function (value) {
        //成功提示    
        layer.msg(value, { icon: 6, time: 2000 });
    },
    Open: function (title, url, width, height) {
        //弹出层
        if (title == null || title == '') {
            title = false;
        };
        if (width > $(window).width()) {
            width = ($(window).width() - 150);
        }
        if (height > $(window).height()) {
            height = ($(window).height() - 100);
        }
        var index = layer.open({
            title: title,
            type: 2,
            content: url,
            area: [width + 'px', height + 'px'],
            resize: false,
            end: function () {
                //关闭时刷新
                $('#btn-refresh').click();
            }
        });
    }
};
