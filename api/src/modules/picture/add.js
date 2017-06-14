import $ from 'jquery'
import "../../../libs/jquery/jquery.form"

$(function(){
	$('.shangchuan').click(function(){
        $('.formfile').ajaxSubmit({
            type: 'post',
            url: 'http://localhost:7000/upload',
            success:function(data){
                console.log(data);
                $('#fqwe').val(data)
            },
            error:function(XmlHttpRequest,textStatus,errorThrown){
                console.log(XmlHttpRequest);
                console.log(textStatus);
                console.log(errorThrown);
            }
        })		
    })
})