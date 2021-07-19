const slider = document.getElementById('slider');
const sliderBox = document.getElementById('slider-box');

class Slider {
	constructor(str) {
		this.str = str;
		this.shifted = 0;
	}

	shiftX(x) {
		sliderBox.style.transform = `translateX(${x}px)`;
	}


	init() {

		slider.ondragstart = () => false;                       //убираем по-умолчанию

		slider.onmousedown = (event) => {   //при нажатии 
			let beginX = event.clientX;


			slider.onmousemove = (event) => { //при перемещении
				
				let shiftX = beginX - event.clientX;
				shiftX = -shiftX * 0.8;

				shiftX = shiftX + this.shifted;
				
				this.shiftX(shiftX);
	
			}

		}

		document.onmouseup = () => {  // при отпускании ЛКМ - отмена 
			slider.onmousemove = false;
			this.shifted = sliderBox.style.transform.match(/-?\d+(.\d+)?/gm)[0]; //сколько сдвинул?
			this.shifted = parseInt(this.shifted);
		}
	}
}



const slider1 = new Slider();

slider1.init();
