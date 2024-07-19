const daysContainer = document.getElementById('days');
const monthYearDisplay = document.getElementById('monthYear');
const prevMonthButton = document.getElementById('prevMonth');
const nextMonthButton = document.getElementById('nextMonth');

let date = new Date();

const renderCalendar = () => {
    const month = date.getMonth();
    const year = date.getFullYear();

    date.setDate(1);

    const firstDayIndex = date.getDay();
    const lastDayIndex = new Date(year, month + 1, 0).getDay();
    const prevLastDay = new Date(year, month, 0).getDate();
    const lastDay = new Date(year, month + 1, 0).getDate();

    const months = [
        'January', 'February', 'March', 'April', 'May', 'June',
        'July', 'August', 'September', 'October', 'November', 'December'
    ];

    monthYearDisplay.innerHTML = `${months[month]} ${year}`;

    let days = '';

    for (let x = firstDayIndex; x > 0; x--) {
        days += `<div class="prev-date">${prevLastDay - x + 1}</div>`;
    }

    for (let i = 1; i <= lastDay; i++) {
        if (i === new Date().getDate() && month === new Date().getMonth() && year === new Date().getFullYear()) {
            days += `<div class="today">${i}</div>`;
        } else {
            days += `<div>${i}</div>`;
        }
    }

    for (let j = 1; j <= (7 - lastDayIndex - 1); j++) {
        days += `<div class="next-date">${j}</div>`;
    }

    daysContainer.innerHTML = days;
};

prevMonthButton.addEventListener('click', () => {
    date.setMonth(date.getMonth() - 1);
    renderCalendar();
});

nextMonthButton.addEventListener('click', () => {
    date.setMonth(date.getMonth() + 1);
    renderCalendar();
});

renderCalendar();
