"use strict";

// блок, куда будут добавляться параграфы
const statDiv = document.querySelector(".main__stat");

// Создайте пустой массив с именем grades и заполните массив случайными оценками от 1 до 100 для 12 студентов. Для генерации случайных оценок, используйте функцию Math.random().

let grades = [];
for (let i = 1, t = 13; i < t; i++) {
  grades.push(Math.round(Math.random() * 100));
}
let text = `Оценки студентов: ${grades}`;
console.log(text);
// создаем новый абзац
let newText = document.createElement("p");
newText.className = "main__stat-paragrath";
newText.textContent = text;
statDiv.append(newText);

// Рассчитайте и выведите средний балл студентов, используя методы массивов.
let sum = 0;
grades.forEach((num) => {
  sum += num;
});
text = `Средний бал студентов: ${Math.floor(sum / grades.length)}`;
console.log(text);
newText = document.createElement("p");
newText.className = "main__stat-paragrath";
newText.textContent = text;
statDiv.append(newText);

// Найдите и выведите максимальный балл среди студентов, используя соответствующий метод массива.
let maxNum = Math.max(...grades);
text = `Максимальный балл: ${maxNum}`;
console.log(text);
newText = document.createElement("p");
newText.className = "main__stat-paragrath";
newText.textContent = text;
statDiv.append(newText);

// Найдите и выведите минимальный балл среди студентов, используя соответствующий метод массива.
let minNum = Math.min(...grades);
text = `Минимальный балл: ${minNum}`;
console.log(text);
newText = document.createElement("p");
newText.className = "main__stat-paragrath";
newText.textContent = text;
statDiv.append(newText);

// Посчитайте и выведите количество студентов, получивших положительную оценку (балл выше или равен 60). Используйте метод массива, который фильтрует оценки и оставляет только те, которые соответствуют заданному условию. Затем посчитайте количество оставшихся оценок и выведите результат.
let newGrage = grades.filter((el) => el >= 60);
text = `${newGrage.length} успешных студентов: ${newGrage}`;
console.log(`Успешные студенты: ${newGrage}`);
console.log(`Количество успешных студентов: ${newGrage.length}`);
newText = document.createElement("p");
newText.className = "main__stat-paragrath";
newText.textContent = text;
statDiv.append(newText);

// Посчитайте и выведите количество студентов, получивших отрицательную оценку (балл ниже 60). Используйте аналогичный подход, как в предыдущем шаге.
let newGrageN = grades.filter((el) => el < 60);
text = `${newGrageN.length} неуспевающих студентов: ${newGrageN}`;
console.log(`Неуспевающие студенты: ${newGrageN}`);
console.log(`Количество неуспевающих студентов: ${newGrageN.length}`);
newText = document.createElement("p");
newText.className = "main__stat-paragrath";
newText.textContent = text;
statDiv.append(newText);

// Преобразуйте числовые оценки в формат буквенных оценок A/B/C/D/E, используя следующие правила:
// Если оценка находится в диапазоне от 80 до 100, преобразуйте её в "A"
// Если оценка находится в диапазоне от 60 до 79, преобразуйте её в "B"
// Если оценка находится в диапазоне от 40 до 59, преобразуйте её в "C"
// Если оценка находится в диапазоне от 20 до 39, преобразуйте её в "D"
// Если оценка ниже 20, преобразуйте её в "E"
newGrage = grades.map((num) => {
  return num >= 80 && num <= 100
    ? "A"
    : num >= 60 && num <= 79
    ? "B"
    : num >= 40 && num <= 59
    ? "C"
    : num >= 20 && num <= 39
    ? "D"
    : "E";
});
text = `Оценки студентов: ${newGrage}`;
console.log(`Оценки студентов: ${newGrage}`);
newText = document.createElement("p");
newText.className = "main__stat-paragrath";
newText.textContent = text;
statDiv.append(newText);
