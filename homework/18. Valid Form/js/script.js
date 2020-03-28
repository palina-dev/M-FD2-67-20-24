let form = document.forms.form,
    developers = document.form.developers,
    siteName = document.form.sitename,
    url = document.form.url,
    launchDate = document.form.launchdate,
    visitors = document.form.visitors,
    mail = document.form.mail,
    division = document.form.division,
    payment = document.form.payment,
    votes = document.form.votes,
    article = document.form.article;

// ошибки которые будет выводить
let fields = {
    developers : ['developers-err', 'Введите имя/имена разработчиков'],
    siteName : ['sitename-err', 'error'],
    url : ['url-err', 'error'],
    launchDate : ['launchdate-err', 'error'],
    visitors : ['visitors-err', 'error'],
    mail : ['mail-err', 'error'],
    division : ['division-err', 'error'],
    payment : ['payment-err', 'error'],
    votes : ['votes-err', 'error'],
    article : ['article-err', 'error'],
}

// функция проверки
function validateField(fieldItem) {
    switch(fieldItem.type) {
        case 'developers' : 
            if (!fieldItem || Number(fieldItem)) {
                fieldItem.classList.add('error');
                errorMessage
            }
    }
}

function errorMessage(fieldItem) {
    documnet.querySelector(`${fields[`${fieldItem.id}`][0]}`).textContent = `${fields.id[`${fieldItem.id}`][1]}`;
}