//tab
$('.web .portfolio-menu p').on('click',function(){
    let index = $('.web .portfolio-menu p').index(this);
    $('.web .portfolio-menu p').removeClass('on');
    $('.web .portfolio-menu p:eq('+ index +')').addClass('on');
    $('.portfolio-content .portfolioWrap').removeClass('on');
    $('.portfolio-content .portfolioWrap:eq('+ index +')').addClass('on');
})
