const testimonialsContainer = document.querySelector('.testimonial-container ')
const testimonial = document.querySelector('.testimonial')
const userImage = document.querySelector('.user-image')
const userName = document.querySelector('.username')
const role = document.querySelector('.role')

const testimonials = [
    {
        name: 'Irum Zaidi',
        position: 'Software Engineer',
        photo: './assets/uifaces-cartoon-image.jpg',
        text: "I have had these headphones for about a month now, and I could not be happier with my purchase. The noise-cancelling feature is excellent, making my commute so much more peaceful. The sound quality is top-notch, with crisp highs and deep bass. They are also really comfortable to wear for long periods. The battery life is impressive, lasting me through multiple days of use without needing a recharge. Overall, I highly recommend these headphones to anyone in the market for a premium audio experience"
    },
    {
        name: 'Jafar Zaidi',
        position: 'Software Engineer',
        photo: './assets/uifaces-cartoon-image (1).jpg',
        text: "I have had these headphones for about a month now, and I could not be happier with my purchase. The noise-cancelling feature is excellent, making my commute so much more peaceful. The sound quality is top-notch, with crisp highs and deep bass. They are also really comfortable to wear for long periods. The battery life is impressive, lasting me through multiple days of use without needing a recharge. Overall, I highly recommend these headphones to anyone in the market for a premium audio experience"
    },
    {
        name: 'Tabish Zaidi',
        position: 'Software Engineer',
        photo: './assets/uifaces-cartoon-image (2).jpg',
        text: "I have had these headphones for about a month now, and I could not be happier with my purchase. The noise-cancelling feature is excellent, making my commute so much more peaceful. The sound quality is top-notch, with crisp highs and deep bass. They are also really comfortable to wear for long periods. The battery life is impressive, lasting me through multiple days of use without needing a recharge. Overall, I highly recommend these headphones to anyone in the market for a premium audio experience"
    },
    {
        name: 'Hira Zaidi',
        position: 'Software Engineer',
        photo: './assets/uifaces-cartoon-image (3).jpg',
        text: "I have had these headphones for about a month now, and I could not be happier with my purchase. The noise-cancelling feature is excellent, making my commute so much more peaceful. The sound quality is top-notch, with crisp highs and deep bass. They are also really comfortable to wear for long periods. The battery life is impressive, lasting me through multiple days of use without needing a recharge. Overall, I highly recommend these headphones to anyone in the market for a premium audio experience"
    },
    {
        name: 'Zahra Zaidi',
        position: 'Software Engineer',
        photo: './assets/uifaces-cartoon-image (4).jpg',
        text: "I have had these headphones for about a month now, and I could not be happier with my purchase. The noise-cancelling feature is excellent, making my commute so much more peaceful. The sound quality is top-notch, with crisp highs and deep bass. They are also really comfortable to wear for long periods. The battery life is impressive, lasting me through multiple days of use without needing a recharge. Overall, I highly recommend these headphones to anyone in the market for a premium audio experience"
    },
]

let idx = 1

function updateTestimonial () {
    const {name, position, photo, text} =  testimonials[idx]
    // console.log(testimonials[1]);

    testimonial.innerHTML = text
    userImage.src = photo
    userName.innerHTML = name
    role.innerHTML = position

    idx++ 

    if( idx > testimonials.length - 1) {
        idx = 0
    }
}


// 10s in style sheet in progress-bar class
setInterval(updateTestimonial, 10000)