document.addEventListener("DOMContentLoaded", () => { //auto detect invalid date 

    //declare variable tha recieve date value 
    const getDay = document.getElementById('day-input');
    const getMonth = document.getElementById('month-input');
    const getYear = document.getElementById('year-input');

    // handle day input
    getDay.addEventListener('input', function () {

        if (getDay.value > 31) {
            getDay.nextElementSibling.setAttribute('data-show-message', 'true')
            getDay.nextElementSibling.innerHTML = "Must be a valid day";
            getDay.parentElement.classList.add('error');
            getMonth.parentElement.classList.add('error');
            getYear.parentElement.classList.add('error');
        } else {
            getDay.nextElementSibling.setAttribute('data-show-message', 'false')
            getDay.parentElement.classList.remove('error');
            getMonth.parentElement.classList.remove('error');
            getYear.parentElement.classList.remove('error');
        }
    })

    //handle month input 
    getMonth.addEventListener('input', function () {

        if (getMonth.value > 12) {
            getMonth.nextElementSibling.setAttribute('data-show-message', 'true')
            getMonth.nextElementSibling.innerHTML = "Must be a valid month";
            getDay.parentElement.classList.add('error');
            getMonth.parentElement.classList.add('error');
            getYear.parentElement.classList.add('error');
        } else {
            getMonth.nextElementSibling.setAttribute('data-show-message', 'false')
            getDay.parentElement.classList.remove('error');
            getMonth.parentElement.classList.remove('error');
            getYear.parentElement.classList.remove('error');
        }
    })

    //handle year input 
    getYear.addEventListener('input', function () {

        let getCurrentYear = new Date();

        if (getYear.value > getCurrentYear.getFullYear()) {
            getYear.nextElementSibling.setAttribute('data-show-message', 'true')
            getYear.nextElementSibling.innerHTML = "Must be in the past";
            getDay.parentElement.classList.add('error');
            getMonth.parentElement.classList.add('error');
            getYear.parentElement.classList.add('error');
        } else {
            getYear.nextElementSibling.setAttribute('data-show-message', 'false')
            getDay.parentElement.classList.remove('error');
            getMonth.parentElement.classList.remove('error');
            getYear.parentElement.classList.remove('error');
        }
    })


    // Handle Submit button
    const submitBtn = document.getElementById('submit-btn');

    submitBtn.addEventListener('click', function () {

        //create variable that contain date value
        day = getDay.value;
        month = getMonth.value;
        year = getYear.value;

        // Checking that the values are not empty
        if (!day) {
            getDay.nextElementSibling.setAttribute('data-show-message', 'true')
            getDay.nextElementSibling.innerHTML = "This field is required";
            getDay.parentElement.classList.add('error');
        } else {
            getDay.nextElementSibling.setAttribute('data-show-message', 'false')
        }

        if (!month) {
            getMonth.nextElementSibling.setAttribute('data-show-message', 'true')
            getMonth.nextElementSibling.innerHTML = "This field is required";
            getMonth.parentElement.classList.add('error');
        } else {
            getMonth.nextElementSibling.setAttribute('data-show-message', 'false')
        }

        if (!year) {
            getYear.nextElementSibling.setAttribute('data-show-message', 'true')
            getYear.nextElementSibling.innerHTML = "This field is required";
            getYear.parentElement.classList.add('error');
        } else {
            getYear.nextElementSibling.setAttribute('data-show-message', 'false')
        }

        // To ensures that the code following these validation will not working
        if (!day || !month || !year) {
            return;
        }

        // Check valid date
        let date = new Date(year, month - 1, day);
        let currentDate = new Date();
        if (!(date.getFullYear() == year && date.getMonth() == month - 1 && date.getDate() == day) || date > currentDate) {
            getDay.nextElementSibling.setAttribute('data-show-message', 'true')
            getDay.nextElementSibling.innerHTML = "Must be a valid date";
            getMonth.nextElementSibling.innerHTML = "";
            getYear.nextElementSibling.innerHTML = "";
            getDay.parentElement.classList.add('error');
            getMonth.parentElement.classList.add('error');
            getYear.parentElement.classList.add('error');
            return;
        }

        let ageDay = 0;
        let ageMonth = 0;
        let ageYear = currentDate.getFullYear() - date.getFullYear();


        if (currentDate < new Date(currentDate.getFullYear(), month - 1, day)) {
            ageYear = ageYear - 1;
            ageMonth = currentDate.getMonth() + 1;
            ageDay = currentDate.getDate();
        } else { //currentDate > input date
            if (currentDate.getMonth() + 1 === month) {
                ageMonth = 0;
                ageDay = currentDate.getDate() - day;
            } else {
                ageMonth = (currentDate.getMonth() + 1) - month;
                if (currentDate.getDate() < day) {
                    ageMonth = ageMonth - 1;
                    age_day = currentData.getDate() + new Date(currentData.getFullYear(), currentData.getMonth(), 0).getDate() - day;
                } else {
                    ageDay = currentDate.getDate() - day;
                }
            }
        }

        const yearDisplay = document.getElementById('years')
        const monthDisplay = document.getElementById('months')
        const dayDisplay = document.getElementById('days')

        yearDisplay.innerText = ageYear;
        monthDisplay.innerText = ageMonth;
        dayDisplay.innerText = ageDay;
    })
})