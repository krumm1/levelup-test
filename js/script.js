document.addEventListener("DOMContentLoaded", () => {
	const sliderContent = document.getElementById("slider-content");
	const prevBtn = document.getElementById("prev-btn");
	const nextBtn = document.getElementById("next-btn");
	const slidesLength = sliderContent.querySelectorAll("[data-slide]").length;
	let currentSlideIndex = 0;

	prevBtn.addEventListener("click", prevSlide);
	nextBtn.addEventListener("click", nextSlide);

	function prevSlide() {
		currentSlideIndex--;

		if (currentSlideIndex < 0) {
			currentSlideIndex = slidesLength - 1;
		}

		transformToIndex(currentSlideIndex);
	}

	function nextSlide() {
		currentSlideIndex++;

		if (currentSlideIndex === slidesLength) {
			currentSlideIndex = 0;
		}

		transformToIndex(currentSlideIndex);
	}

	function transformToIndex(index) {
		sliderContent.style.transform = `translateX(${-(100 * index)}%)`;
	}

	const timer = document.getElementById("timer");
	let deadline = new Date(Date.now() + 30 * 60 * 1000);

	renderTime();

	function renderTime() {
		const date = new Date();
		const diff = deadline - date;

		if (diff <= 0) {
			clearInterval(intervalId);
			return;
		}

		const countDown = new Date(diff);

		timer.innerText = getTimeText(
			countDown.getMinutes(),
			countDown.getSeconds()
		);
	}

	const intervalId = setInterval(renderTime, 1000);

	function getTimeText(min, sec) {
		return String(min).padStart(2, "0") + ":" + String(sec).padStart(2, "0");
	}

	const phoneInput = document.querySelector('input[type="tel"]');
	const trustedKeys = [
		"0",
		"1",
		"2",
		"3",
		"4",
		"5",
		"6",
		"7",
		"8",
		"9",
		"Enter",
		"Backspace",
		"Delete",
		"Tab",
		"ArrowLeft",
		"ArrowUp",
		"ArrowRight",
		"ArrowBottom",
	];

	phoneInput.addEventListener("keydown", (e) => {
		if (!trustedKeys.includes(e.key)) {
			e.preventDefault();
		}
	});
});
