const circle = document.getElementById('inner-wheel');
let active = false;
let currentAngle = 0;
let startAngle = 0;
let rotationOrigin = { x: 0, y: 0 };

function calculateAngle(event) {
    const dx = event.clientX - rotationOrigin.x;
    const dy = event.clientY - rotationOrigin.y;
    return Math.atan2(dy, dx);
}

circle.addEventListener('touchstart', function (event) {
    const rect = circle.getBoundingClientRect();
    rotationOrigin.x = rect.left + rect.width / 2;
    rotationOrigin.y = rect.top + rect.height / 2;
    startAngle = calculateAngle(event.touches[0]) - currentAngle;
    active = true;
}, false);

circle.addEventListener('touchmove', function (event) {
    if (!active) return;
    event.preventDefault();
    const angle = calculateAngle(event.touches[0]);
    currentAngle = angle - startAngle;
    circle.style.transform = `rotate(${currentAngle}rad)`;
}, false);

circle.addEventListener('touchend', function (event) {
    active = false;
}, false);