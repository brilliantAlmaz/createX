const tagList = document.querySelectorAll('.news-categories__list li')
const newsblockItem = document.querySelectorAll('.news-categories__row-item')
const newsblockItemCompanyNews = document.querySelectorAll('.news-categories__row-item#companyNews')
const newsblockItemInnovation = document.querySelectorAll('.news-categories__row-item#innovation')
const newsblockItemIndustryNews = document.querySelectorAll('.news-categories__row-item#industryNews')
const newsblockItemExpertTips = document.querySelectorAll('.news-categories__row-item#expertTips')
const newsblockItemMarketing = document.querySelectorAll('.news-categories__row-item#marketing')
tagList.forEach((item,index) => item.addEventListener('click', function(){
	if (index==0){
		for (let i=0; i<newsblockItem.length; i++){
			newsblockItem[i].style.display='block';
		}
	}
	else if (index==1){
		for (let i=0; i<newsblockItem.length; i++){
			newsblockItem[i].style.display='none';
		}
		for (let i=0; i<newsblockItemCompanyNews.length; i++){
			newsblockItemCompanyNews[i].style.display='block';
		}
	}
	else if (index==2){
		for (let i=0; i<newsblockItem.length; i++){
			newsblockItem[i].style.display='none';
		}
		for (let i=0; i<newsblockItemInnovation.length; i++){
			newsblockItemInnovation[i].style.display='block';
		}
	}
	else if (index==3){
		for (let i=0; i<newsblockItem.length; i++){
			newsblockItem[i].style.display='none';
		}
		for (let i=0; i<newsblockItemIndustryNews.length; i++){
			newsblockItemIndustryNews[i].style.display='block';
		}
	}
	else if (index==4){
		for (let i=0; i<newsblockItem.length; i++){
			newsblockItem[i].style.display='none';
		}
		for (let i=0; i<newsblockItemExpertTips.length; i++){
			newsblockItemExpertTips[i].style.display='block';
		}
	}
	else if (index==5){
		for (let i=0; i<newsblockItem.length; i++){
			newsblockItem[i].style.display='none';
		}
		for (let i=0; i<newsblockItemMarketing.length; i++){
			newsblockItemMarketing[i].style.display='block';
		}
	}
	//visualization of an active tag
	for (let i=0; i<tagList.length; i++){
		tagList[i].classList.remove('active')
	}
	item.classList.add('active')
}));

const footerBtn = document.querySelector('.footer__down-up');
const footerBtnUp =  document.querySelector('.footer__down-up .btn');
footerBtn.style.opacity='0';
footerBtn.style.zIndex='-1';
document.addEventListener('mousewheel',function(){
	if (window.pageYOffset >='500'){
		footerBtn.style.opacity='1';
		footerBtn.style.zIndex='50';
	}
	else{
		footerBtn.style.opacity='0';
		footerBtn.style.zIndex='-1';
	}
});

footerBtnUp.addEventListener('click', function(){
	window.scrollTo(0,0);
	footerBtn.style.opacity='0';
	footerBtn.style.zIndex='-1';
});
