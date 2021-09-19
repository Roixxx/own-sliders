const slider = document.getElementById('slider');
const sliderBox = document.getElementById('slider-box');
let maxShift = slider.offsetWidth - sliderBox.offsetWidth;

const prevSlideBtn = document.getElementById('prevSlide');
const nextSlideBtn = document.getElementById('nextSlide');


class Slider {
	constructor() {
		this.shifted = 0;
		this.slowing = 0.9;
	}

	shiftX(x) {
		sliderBox.style.transform = `translateX(${x}px)`;
	}

	slideToNext() {
		let activeSlide = sliderBox.querySelector('.active');
		console.log(activeSlide)
	}


	init() {

		slider.ondragstart = () => false;      //убираем по-умолчанию

		slider.onmousedown = (event) => {   //при нажатии 
			let beginX = event.clientX;

			slider.onmousemove = (event) => { //при перемещении
				
				let shiftX = (event.clientX - beginX) * this.slowing;
				shiftX += this.shifted;

				if (shiftX <= 0 && shiftX > maxShift) {
					this.shiftX(shiftX);
				}
			}
		}

		document.onmouseup = () => {  // при отпускании ЛКМ - отмена 
			slider.onmousemove = false;
			this.shifted = sliderBox.style.transform.match(/-?\d+(.\d+)?/gm)[0]; //сколько сдвинул?
			this.shifted = parseInt(this.shifted);
		}

		nextSlideBtn.onclick = e => {
			this.slideToNext();
			console.log('s')
		}
	}
}



const slider = new Slider();

slider.init();
