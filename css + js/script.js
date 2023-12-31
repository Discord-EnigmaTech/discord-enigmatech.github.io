function scrollh() {
  $(".smooth a").on("click", function (event) {
    const hash = this.hash;
    const targetElement = $(hash);

    // Check if the target element exists
    if (targetElement.length) {
      event.preventDefault();

      if ("scrollBehavior" in document.documentElement.style) {
        // Native smooth scrolling
        targetElement[0].scrollIntoView({
          behavior: "smooth",
          block: "start",
          inline: "nearest",
        });
      } else {
        // Fallback for browsers that don't support smooth scrolling
        $("html, body").animate(
          {
            scrollTop: targetElement.offset().top,
          },
          800
        );
      }

      setTimeout(function () {
        window.location.hash = hash;
      }, 800);
    }
  });
}

scrollh();

$(".autoplay")
  .on("init", function (slick) {
    $(".slick-dots").on("click", function () {
      $(".autoplay").slick("slickPause");
    });
  })
  .slick({
    slidesToShow: 3,
    slidesToScroll: 3,
    dots: true,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },

      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });

$(".tes")
  .on("init", function (slick) {
    $(".slick-dots").on("click", function () {
      $(".tes").slick("slickPause");
    });
  })
  .slick({
    slidesToShow: 2,
    slidesToScroll: 2,
    dots: true,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });

//Snow from https://codepen.io/radum/pen/AqgObM

/*var particleCount = 300;
var particleMax = 1000;
var sky = document.querySelector("#section1");
var canvas = document.createElement("canvas");
var ctx = canvas.getContext("2d");
var width = sky.clientWidth;
var height = sky.clientHeight;
var i = 0;
var active = false;
var snowflakes = [];
var snowflake;

canvas.style.position = "absolute";
canvas.style.left = canvas.style.top = "0";

var Snowflake = function () {
  this.x = 0;
  this.y = 0;
  this.vy = 0;
  this.vx = 0;
  this.r = 0;

  this.reset();
};

Snowflake.prototype.reset = function () {
  this.x = Math.random() * width;
  this.y = Math.random() * -height;
  this.vy = 1 + Math.random() * 3;
  this.vx = 0.5 - Math.random();
  this.r = 1 + Math.random() * 2;
  this.o = 0.5 + Math.random() * 0.5;
};

function generateSnowFlakes() {
  snowflakes = [];
  for (i = 0; i < particleMax; i++) {
    snowflake = new Snowflake();
    snowflake.reset();
    snowflakes.push(snowflake);
  }
}

generateSnowFlakes();

function update() {
  ctx.clearRect(0, 0, width, height);

  if (!active) {
    return;
  }

  for (i = 0; i < particleCount; i++) {
    snowflake = snowflakes[i];
    snowflake.y += snowflake.vy;
    snowflake.x += snowflake.vx;

    ctx.globalAlpha = snowflake.o;
    ctx.beginPath();
    ctx.arc(snowflake.x, snowflake.y, snowflake.r, 0, Math.PI * 2, false);
    ctx.closePath();
    ctx.fill();

    if (snowflake.y > height) {
      snowflake.reset();
    }
  }

  requestAnimFrame(update);
}

function onResize() {
  width = sky.clientWidth;
  height = sky.clientHeight;
  canvas.width = width;
  canvas.height = height;
  ctx.fillStyle = "#FFF";

  var wasActive = active;
  active = width > 900;

  if (!wasActive && active) {
    requestAnimFrame(update);
  }
}

// shim layer with setTimeout fallback
window.requestAnimFrame = (function () {
  return (
    window.requestAnimationFrame ||
    window.webkitRequestAnimationFrame ||
    window.mozRequestAnimationFrame ||
    function (callback) {
      window.setTimeout(callback, 1000 / 60);
    }
  );
})();

onResize();
window.addEventListener("resize", onResize, false);

sky.appendChild(canvas);*/
