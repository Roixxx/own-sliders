const slider = document.getElementById('slider');
const sliderBox = document.getElementById('slider-box');

class Slider {
	constructor(str) {
		this.str = str;
	}

	init() {

		sliderBox.ondragstart = () => false; //убираем по-умолчанию

		sliderBox.onmousedown = (event) => {   //при нажатии 
			let beginX = event.clientX - sliderBox.getBoundingClientRect().left;


			sliderBox.onmousemove = (event) => { //при перемещении
				let shift = beginX - (event.clientX - sliderBox.getBoundingClientRect().left);
				shift = -shift * 0.5;


				sliderBox.style.transform = `translateX(${shift}px)`;
			}

		}

		document.onmouseup = () => {  // при отпускании ЛКМ - отмена 
			sliderBox.onmousemove = false;
		}

	}
}



const slider1 = new Slider();

slider1.init();
