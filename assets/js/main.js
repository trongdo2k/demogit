

"use strict";

//===== Prealoder

window.onload = function () {
	window.setTimeout(fadeout, 500);
}

function fadeout() {
	document.querySelector('.preloader').style.opacity = '0';
	document.querySelector('.preloader').style.display = 'none';
}


/*=====================================
Sticky
======================================= */
window.onscroll = function () {
	var header_navbar = document.querySelector(".navbar-area");
	var sticky = header_navbar.offsetTop;

	if (window.pageYOffset > sticky) {
		header_navbar.classList.add("sticky");
	} else {
		header_navbar.classList.remove("sticky");
	}



	// show or hide the back-top-top button
	var backToTo = document.querySelector(".scroll-top");
	if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
		backToTo.style.display = "block";
	} else {
		backToTo.style.display = "none";
	}
};


// section menu active
function onScroll(event) {
	var sections = document.querySelectorAll('.page-scroll');
	var scrollPos = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;

	for (var i = 0; i < sections.length; i++) {
		var currLink = sections[i];
		var val = currLink.getAttribute('href');
		var refElement = document.querySelector(val);
		var scrollTopMinus = scrollPos + 73;
		if (refElement.offsetTop <= scrollTopMinus && (refElement.offsetTop + refElement.offsetHeight > scrollTopMinus)) {
			document.querySelector('.page-scroll').classList.remove('active');
			currLink.classList.add('active');
		} else {
			currLink.classList.remove('active');
		}
	}
};

window.document.addEventListener('scroll', onScroll);


//===== close navbar-collapse when a  clicked
let navbarToggler = document.querySelector(".navbar-toggler");
var navbarCollapse = document.querySelector(".navbar-collapse");

document.querySelectorAll(".page-scroll").forEach(e =>
	e.addEventListener("click", () => {
		navbarToggler.classList.remove("active");
		navbarCollapse.classList.remove('show')
	})
);
navbarToggler.addEventListener('click', function () {
	navbarToggler.classList.toggle("active");
});



// WOW active
new WOW().init();




// count down timer
const countDownClock = (number = 100, format = 'seconds') => {

	const d = document;
	const daysElement = d.querySelector('.days');
	const hoursElement = d.querySelector('.hours');
	const minutesElement = d.querySelector('.minutes');
	const secondsElement = d.querySelector('.seconds');
	let countdown;
	convertFormat(format);


	function convertFormat(format) {
		switch (format) {
			case 'seconds':
				return timer(number);
			case 'minutes':
				return timer(number * 60);
			case 'hours':
				return timer(number * 60 * 60);
			case 'days':
				return timer(number * 60 * 60 * 24);
		}
	}

	function timer(seconds) {
		const now = Date.now();
		const then = now + seconds * 1000;

		countdown = setInterval(() => {
			const secondsLeft = Math.round((then - Date.now()) / 1000);

			if (secondsLeft <= 0) {
				clearInterval(countdown);
				return;
			};

			displayTimeLeft(secondsLeft);

		}, 1000);
	}

	function displayTimeLeft(seconds) {
		daysElement.textContent = Math.floor(seconds / 86400);
		hoursElement.textContent = Math.floor((seconds % 86400) / 3600);
		minutesElement.textContent = Math.floor((seconds % 86400) % 3600 / 60);
		secondsElement.textContent = seconds % 60 < 10 ? `0${seconds % 60}` : seconds % 60;
	}
}


/*
	start countdown
	enter number and format
	days, hours, minutes or seconds
*/
countDownClock(90, 'days');

// Hamster follow SVG path
const hamster = document.querySelector(".hamster-js");
const path = document.getElementById("wavePath");
const pathLength = path.getTotalLength();

let t = 0; // 0 → 1 (progress)
const speed = 0.002; // adjust speed

function moveHamster() {
  t += speed;
  if (t > 1) t = 0; // loop

  const point = path.getPointAtLength(t * pathLength);
  hamster.style.transform = `translate(${point.x - 24}px, ${point.y - 24}px)`; 
  requestAnimationFrame(moveHamster);
}

moveHamster();


const algoHeaders = document.querySelectorAll('.algo-header');

algoHeaders.forEach(header => {
  header.addEventListener('click', () => {
    const body = header.nextElementSibling;

    if (body.style.maxHeight) {
      body.style.maxHeight = null;
      body.style.padding = '0 24px';
    } else {
      // Close other accordions
      document.querySelectorAll('.algo-body').forEach(b => {
        b.style.maxHeight = null;
        b.style.padding = '0 24px';
      });
      body.style.maxHeight = body.scrollHeight + 'px';
      body.style.padding = '16px 24px';
    }
  });
});

const canvas = document.getElementById("priceChart");
const ctx = canvas.getContext("2d");

canvas.width = canvas.offsetWidth;
canvas.height = 260;

let prices = Array.from({ length: 30 }, () => 60 + Math.random() * 40);

function drawLineChart() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    ctx.strokeStyle = "#ffd84d";
    ctx.lineWidth = 2;
    ctx.beginPath();

    prices.forEach((price, index) => {
        const x = (index / (prices.length - 1)) * canvas.width;
        const y = canvas.height - price * 2.5;
        index === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y);
    });

    ctx.stroke();
}

function updateChart() {
    prices.shift();
    prices.push(60 + Math.random() * 40);
    drawLineChart();
}

drawLineChart();
setInterval(updateChart, 1200);
const tones = document.querySelectorAll(".tone-switch span");
const preview = document.querySelector(".content-preview");

tones.forEach(tone => {
    tone.addEventListener("click", () => {
        tones.forEach(t => t.classList.remove("active"));
        tone.classList.add("active");

        if (tone.textContent === "Viral") {
            preview.textContent =
                "🚀 Introducing CheeratAI — redefining Web3 automation. AI meets alpha.";
        } else {
            preview.textContent =
                "We are pleased to announce CheeratAI, an AI-powered Web3 automation platform.";
        }
    });
});


// Allocation bar entrance animation
document.querySelectorAll(".seg").forEach((seg, i) => {
    seg.style.animation = "fadeIn 0.6s ease forwards";
    seg.style.animationDelay = `${i * 0.15}s`;
});

