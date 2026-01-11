

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


(() => {
  const items = document.querySelectorAll(".cbxmp-anim");
  const io = new IntersectionObserver(
    entries => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add("cbxmp-show");
          io.unobserve(e.target);
        }
      });
    },
    { threshold: 0.3 }
  );
  items.forEach(el => io.observe(el));
})();

(() => {
  const io = new IntersectionObserver(
    entries => {
      entries.forEach(e => {
        if (!e.isIntersecting) return;

        if (e.target.classList.contains("cbxmp-fade")) {
          e.target.classList.add("show-fade");
        }

        if (e.target.classList.contains("cbxmp-left")) {
          e.target.classList.add("show-left");
        }

        if (e.target.classList.contains("cbxmp-zoom")) {
          e.target.classList.add("show-zoom");
        }

        io.unobserve(e.target);
      });
    },
    { threshold: 0.3 }
  );

  document
    .querySelectorAll(".cbxmp-fade, .cbxmp-left, .cbxmp-zoom")
    .forEach(el => io.observe(el));
})();



/* ===== PARTICLE CŨ ===== */
document.querySelectorAll('.fxz_ptcWrap_sdA91').forEach(container => {
  for (let i = 0; i < 18; i++) {
    const dot = document.createElement('span');
    dot.style.left = Math.random() * 100 + '%';
    dot.style.animationDuration = 6 + Math.random() * 8 + 's';
    dot.style.opacity = Math.random();
    container.appendChild(dot);
  }
});

/* ===== CANVAS PARTICLE ===== */
function initFxzCanvas(canvasId) {
  const canvas = document.getElementById(canvasId);
  const ctx = canvas.getContext('2d');

  function resize() {
    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;
  }
  resize();
  window.addEventListener('resize', resize);

  const particles = Array.from({ length: 26 }, () => ({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    r: Math.random() * 2 + 1,
    s: Math.random() * 0.6 + 0.2
  }));

  function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particles.forEach(p => {
      p.y -= p.s;
      if (p.y < 0) p.y = canvas.height;
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fillStyle = 'rgba(0,200,255,0.6)';
      ctx.fill();
    });
    requestAnimationFrame(draw);
  }
  draw();
}

initFxzCanvas('fxzCanvasLeft');
initFxzCanvas('fxzCanvasRight');

/* ===== CHUỘT MOVE ===== */
const glow = document.querySelector('.fxz_mouse_glow');

document.addEventListener('mousemove', e => {
  glow.style.left = e.clientX + 'px';
  glow.style.top = e.clientY + 'px';

  document.querySelector('.fxz_left_zone').style.transform =
    `translateY(${e.clientY * 0.015}px)`;

  document.querySelector('.fxz_right_zone').style.transform =
    `translateY(${e.clientY * -0.015}px)`;
});



  const cards = document.querySelectorAll('.reveal');

  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const delay = entry.target.dataset.delay || 0;
          setTimeout(() => {
            entry.target.classList.add('active');
          }, delay);

          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.2 }
  );

  cards.forEach(card => observer.observe(card));

  (function () {
    "use strict";

    const gateRoot = document.getElementById("__cgx_gate_root__");
    const canvas = document.getElementById("__cgx_starfield_canvas__");
    if (!gateRoot || !canvas) return;

    const ctx = canvas.getContext("2d");

    let w = window.innerWidth;
    let h = window.innerHeight;
    canvas.width = w;
    canvas.height = h;

    const STAR_TOTAL = 360;
    const stars = [];

    function seedStars() {
        stars.length = 0;
        for (let i = 0; i < STAR_TOTAL; i++) {
            stars.push({
                x: Math.random() * w - w / 2,
                y: Math.random() * h - h / 2,
                z: Math.random() * w
            });
        }
    }

    function drawFrame() {
        ctx.clearRect(0, 0, w, h);

        for (let s of stars) {
            const scale = 180 / s.z;
            const px = s.x * scale + w / 2;
            const py = s.y * scale + h / 2;

            if (px > 0 && px < w && py > 0 && py < h) {
                const size = (1 - s.z / w) * 1.8;
                ctx.fillStyle = "#ffffff";
                ctx.fillRect(px, py, size, size);
            }

            s.z -= 4.2;
            if (s.z <= 0) s.z = w;
        }

        requestAnimationFrame(drawFrame);
    }

    function destroyGate() {
        gateRoot.classList.add("__cgx_exit__");

        document.removeEventListener("click", onClick);
        document.removeEventListener("keydown", onKey);

        setTimeout(() => {
            gateRoot.remove();
        }, 900);
    }

    function onClick() {
        destroyGate();
    }

    function onKey(e) {
        if (e.key === "Enter") destroyGate();
    }

    document.addEventListener("click", onClick);
    document.addEventListener("keydown", onKey);

    window.addEventListener("resize", () => {
        w = window.innerWidth;
        h = window.innerHeight;
        canvas.width = w;
        canvas.height = h;
        seedStars();
    });

    seedStars();
    drawFrame();

})();
