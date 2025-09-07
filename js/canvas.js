// Массив цветов для пузырей
const COLORS = ["75,123,236", "156,89,209", "34,197,94", "249,115,22"];
const BUBBLE_DENSITY = 100; // Количество пузырей

// Генерация случайного числа в диапазоне [start, finish]
function hasRandomNumber(start, finish) {
  return Math.floor(Math.random() * (finish - start + 1) + start);
}

// Генерация случайного цвета из массива
function hasRandomColor(colors) {
  return colors[hasRandomNumber(0, colors.length - 1)];
}

// Класс пузыря
class Bubble {
  constructor(canvas) {
    this.canvas = canvas;
    this.getCanvasSize();
    this.init();
  }

  // Получение размеров canvas
  getCanvasSize() {
    this.canvasWidth = this.canvas.clientWidth;
    this.canvasHeight = this.canvas.clientHeight;
  }

  // Инициализация параметров пузыря
  init() {
    this.color = hasRandomColor(COLORS);
    this.size = hasRandomNumber(3, 9);
    this.alpha = hasRandomNumber(5, 10) / 10;
    this.translateX = hasRandomNumber(0, this.canvasWidth);
    this.translateY = hasRandomNumber(0, this.canvasHeight);
    this.velocity = hasRandomNumber(20, 40);
    this.movementX = hasRandomNumber(-2, 2) / this.velocity;
    this.movementY = hasRandomNumber(1, 20) / this.velocity;
  }

  // Движение пузыря
  move() {
    this.translateX -= this.movementX;
    this.translateY -= this.movementY;

    // Если пузырь вышел за границы, переинициализировать его
    if (
      this.translateX < 0 ||
      this.translateY < 0 ||
      this.translateX > this.canvasWidth
    ) {
      this.init();
      this.translateY = this.canvasHeight;
    }
  }
}

// Класс фона canvas с пузырями
class CanvasBackground {
  constructor(id) {
    this.canvas = document.getElementById(id);
    this.ctx = this.canvas.getContext("2d");
    this.dpr = window.devicePixelRatio;
  }

  // Запуск анимации
  start() {
    this.canvasSize();
    this.generateBubbles();
    this.animate();
    // Обработка изменения размера окна
    window.addEventListener("resize", () => {
      this.canvasSize();
      this.generateBubbles();
    });
  }

  // Установка размеров canvas с учетом DPR
  canvasSize() {
    this.canvas.width = this.canvas.offsetWidth * this.dpr;
    this.canvas.height = this.canvas.offsetHeight * this.dpr;
    this.ctx.setTransform(this.dpr, 0, 0, this.dpr, 0, 0); // Исправлено: корректная установка трансформации
  }

  // Генерация пузырей
  generateBubbles() {
    this.bubbleList = [];
    for (let i = 0; i < BUBBLE_DENSITY; i++) {
      this.bubbleList.push(new Bubble(this.canvas));
    }
  }

  // Анимация пузырей
  animate() {
    // Очищаем canvas
    this.ctx.clearRect(0, 0, this.canvas.clientWidth, this.canvas.clientHeight);
    this.bubbleList.forEach((bubble) => {
      bubble.move();
      this.ctx.save(); // Сохраняем состояние контекста
      this.ctx.translate(bubble.translateX, bubble.translateY);
      this.ctx.beginPath();
      this.ctx.arc(0, 0, bubble.size, 0, Math.PI * 2);
      this.ctx.fillStyle = `rgba(${bubble.color},${bubble.alpha})`;
      this.ctx.fill();
      this.ctx.restore(); // Восстанавливаем состояние контекста
    });
    requestAnimationFrame(this.animate.bind(this));
  }
}

// Инициализация и запуск CanvasBackground
const canvasBackground = new CanvasBackground("orb-canvas");
canvasBackground.start();
