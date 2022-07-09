const imagesMain = document.querySelectorAll('.slider .slider-line img');
const sliderLineMain = document.querySelector('.slider-line');
const sliderArrow = document.querySelectorAll('.slider-arrow');
const sliderNextMain = document.querySelector('.slider__button-right');
const sliderPrevMain = document.querySelector('.slider__button-left');
const body = document.querySelector('body');
const sliderContent = document.querySelector('.slider .container');
let count = -1;
let width;
let currentIndex = 0;
let previousIndex = imagesMain.length-1 ;
let time = 10000;
let idleSliderRoll;
function init(){
	width = body.clientWidth;
	height = body.clientHeight;
	sliderLineMain.style.width = width * imagesMain.length + 'px';
	imagesMain.forEach(function(item) { //imagesMain in slider
		item.style.height = height - 90 + 'px';
		item.style.width = width + 'px';
	})
	sliderArrow.forEach(item => { //arrows in slider
		item.style.top = (height - 48 - 90)/2 + 'px';
		item.style.transition = 'all 0s ease 0s';
	})
	rollSlider();
}
sliderPrevMain.addEventListener('click', function(){ //slide prev
	clearInterval(idleSliderRoll);
	imageTimeLine[previousIndex].style.transition = 'all 1s ease 0s';
	count--;
	if (count <0){
		count = imagesMain.length-1;
	}
	currentIndex=count;
	rollSlider();
	imageTimeNumber.forEach(item =>{
		item.style.color = 'rgba(255,255,255,0.6)';
	});
	imageTimeLine.forEach(item =>{
		item.style.width='0px';
	});
	imageTimeNumber[currentIndex].style.color = "rgba(255,255,255,1)";
	imageTimeLine[currentIndex].style.transition = `all ${time/1000}s linear 0s`;;
	imageTimeLine[currentIndex].style.width = imageTimeLineWidth[1].clientWidth + 'px';
	previousIndex=currentIndex;
	idleSliderRoll = setInterval(rollSliderIdle,time);
});

sliderNextMain.addEventListener('click', function(){ //slide next
	clearInterval(idleSliderRoll);
	imageTimeLine[previousIndex].style.transition = 'all 1s ease 0s';
	count++;
	if (count >= imagesMain.length){
		count = 0;
	}
	currentIndex=count;
	rollSlider();
	imageTimeNumber.forEach(item =>{
		item.style.color = 'rgba(255,255,255,0.6)';
	});
	imageTimeLine.forEach(item =>{
		item.style.width='0px';
	});
	imageTimeNumber[currentIndex].style.color = "rgba(255,255,255,1)";
	imageTimeLine[currentIndex].style.transition = `all ${time/1000}s linear 0s`;;
	imageTimeLine[currentIndex].style.width = imageTimeLineWidth[1].clientWidth + 'px';
	previousIndex=currentIndex;
	idleSliderRoll = setInterval(rollSliderIdle,time);
});


window.addEventListener("resize", init);
init();

//idle slider roll
idleSliderRoll = setInterval(rollSliderIdle,time);
const imageTimeNumber = document.querySelectorAll('.slider__time__list li p');
const imageTimeLine = document.querySelectorAll('.slider__time__list li span.active');
const imageTimeLineWidth = document.querySelectorAll('.slider__time__list li span');
function rollSliderIdle(){
	imageTimeLine[previousIndex].style.transition = 'all 1s ease 0s';
	count++;
	if (count >= imagesMain.length){
		count = 0;
	}
	currentIndex=count;
	rollSlider();
	imageTimeNumber.forEach(item =>{
		item.style.color = 'rgba(255,255,255,0.6)';
	});
	imageTimeLine.forEach(item =>{
		item.style.width='0px';
	});
	imageTimeNumber[currentIndex].style.color = "rgba(255,255,255,1)";
	imageTimeLine[currentIndex].style.transition = `all ${time/1000}s linear 0s`;
	imageTimeLine[currentIndex].style.width = imageTimeLineWidth[1].clientWidth + 'px';
	previousIndex=currentIndex;
}
function rollSlider(){ //slider roll function
	sliderLineMain.style.transform = 'translate(-'+ count * width + 'px)';
}
rollSliderIdle();

//main work portfolio
const sliderPrevMainWork = document.querySelector('.work__portfolio-slider__arrow-left');
const sliderNextMainWork = document.querySelector('.work__portfolio-slider__arrow-right');
const sliderLineMainWork = document.querySelector('.work__portfolio-slider-line');
const blockMainWork = document.querySelector('.work__portfolio-slider-line .work__portfolio-slider-line__item');
let blockMainWorkQ = document.querySelectorAll('.work__portfolio-slider-line .work__portfolio-slider-line__item');
let blockMainWorkWidth = blockMainWork.clientWidth;
let countMainWork = 0;
let transformMainWork;
sliderNextMainWork.addEventListener('click', function(){
	if (countMainWork<blockMainWorkQ.length - 3 ){
		countMainWork++;
		transformMainWork =countMainWork * (blockMainWorkWidth + 30);
		rollSliderMainWork();
	}
});
sliderPrevMainWork.addEventListener('click', function(){
	if (countMainWork>0){
		countMainWork--;
	}
	else{
		countMainWork=0;
	}
	transformMainWork = countMainWork * (blockMainWorkWidth + 30);
	rollSliderMainWork();
});
function rollSliderMainWork(){
	sliderLineMainWork.style.transform = 'translate(-'+ transformMainWork + 'px)';
	//next button animation
	if (countMainWork-1==blockMainWorkQ.length - 3 -1 ){
		sliderNextMainWork.classList.remove('active');
	}
	else{
		sliderNextMainWork.classList.add('active');
	}
	//previous button animation
	if (countMainWork==0){
		sliderPrevMainWork.classList.remove('active');
	}
	else{
		sliderPrevMainWork.classList.add('active');
	}
}
const sliderPrevMainFeedback = document.querySelector('.support__feedback__slider-line__item__row__arrow-row .left');
const sliderNextMainFeedback = document.querySelector('.support__feedback__slider-line__item__row__arrow-row .right');
const sliderLineMainFeedback = document.querySelector('.support__feedback__slider-line');
const blockMainFeedback = document.querySelector('.support__feedback__slider-line__item');
const blockMainFeedbackQ = document.querySelectorAll('.support__feedback__slider-line__item');
let blockMainFeedbackWidth = blockMainFeedback.clientWidth;
let countMainFeedback = 0;
let transformMainFeedback;
sliderPrevMainFeedback.addEventListener('click',function(){
	if (countMainFeedback>0){
		countMainFeedback--;
		transformMainFeedback = countMainFeedback * (blockMainFeedbackWidth);
		rollSliderMainFeedback();
	}
	else{
		countMainFeedback=blockMainFeedbackQ.length-1;
		transformMainFeedback = countMainFeedback * (blockMainFeedbackWidth);
		rollSliderMainFeedback();
	}
	
});
sliderNextMainFeedback.addEventListener('click',function(){
	if (countMainFeedback<blockMainFeedbackQ.length-1){
		countMainFeedback++;
		transformMainFeedback =countMainFeedback * blockMainFeedbackWidth;
		rollSliderMainFeedback();
	}
	else{
		countMainFeedback=0;
		transformMainFeedback = countMainFeedback * (blockMainFeedbackWidth);
		rollSliderMainFeedback();
	}
});

function rollSliderMainFeedback(){
	sliderLineMainFeedback.style.transform = 'translate(-'+ transformMainFeedback + 'px)';
}

//circles fact
let radius;
let circumference;
let offset
function setProgress(percent,index){
	offset = circumference - percent/100 * circumference;
	circle[index].style.strokeDashoffset = offset;
}
const circle = document.querySelectorAll('.facts__circle');
//first circle
radius = circle[0].r.baseVal.value;
circumference = 2 * Math.PI * radius;
circle[0].style.strokeDasharray = `${circumference} ${circumference}`;
circle[0].style.strokeDashoffset = circumference;
setProgress(90,0);
//second circle
radius = circle[1].r.baseVal.value;
circumference = 2 * Math.PI * radius;
circle[1].style.strokeDasharray = `${circumference} ${circumference}`;
circle[1].style.strokeDashoffset = circumference;
setProgress(75,1);
//third circle
radius = circle[2].r.baseVal.value;
circumference = 2 * Math.PI * radius;
circle[2].style.strokeDasharray = `${circumference} ${circumference}`;
circle[2].style.strokeDashoffset = circumference;
setProgress(86,2);
//forth circle
radius = circle[3].r.baseVal.value;
circumference = 2 * Math.PI * radius;
circle[3].style.strokeDasharray = `${circumference} ${circumference}`;
circle[3].style.strokeDashoffset = circumference;
setProgress(100,3);

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
