export default {
    template: `
     <!-- <section v-if="book" class="book-details app-main"> -->
    <section class="keep-details">
        <p>keep-details:</p>

    </section>
    `
}

// import longText from "../cmps/long-text.js";
// import reviewAdd from "../cmps/review-add.js";
// import reviewList from "../cmps/review-list.js";
// import { bookService } from "../services/book-service.js";
// import { i18nService } from "../services/i18n-service.js";
// import { eventBus } from "../services/event-bus-service.js";


// export default {
//     template: `
//     <section v-if="book" class="book-details app-main">
//         <router-link to="/book">Back</router-link>
//         <!-- <button class="close-details" @click="$emit('close')">X</button> -->
//         <img v-if="isOnSale" class="sale" src="img/sale.png" width="300px">
//         <h2 class="title">{{book.title}}</h2>
//         <p>{{renderIsOldBook}}</p>
//         <p>Subtitle: {{book.subtitle}}</p>
//         <p>Authors: {{authorsToStr}}</p>
//         <p>Publish Date: {{book.publishedDate}}</p>
//         <p>{{getShortTxt}}</p>
//         <p>Pages: {{book.pageCount}}</p>
//         <p>Reading Duration: {{getReadingDuration}}</p>
//         <p>Category: {{categoryToStr}}</p>
//         <p>Language: {{book.language}}</p>
//         <img :src = "book.thumbnail">
//         <p>Title: {{book.title}}</p>
//         <p v-bind:class="toggleFonts">Price: {{getCurrency}}</p>
//         <button v-if="isShortDesc" v-on:click="showLongTxt">Read more...</button>
//         <long-text v-if="isLongTxt" :txt="book.description"/>
//         <p v-else>Book description: {{book.description}}</p>
//         <review-add @sentReview="addReview"></review-add>
//         <review-list :reviews="getBookReviews" @remove="removeReview" />
//     </section>
//     `,

//     data() {
//         return {
//             longTxtPressed: false,
//             book: null

//         };
//     },

//     created() {
//         // get id from route and use
//         const { bookId } = this.$route.params;
//         bookService.getBookById(bookId)
//             .then(book => this.book = book);
//     },

//     methods: {

//         showLongTxt() {
//             this.longTxtPressed = true;
//         },
//         addReview(review) {
//             console.log('add review')
//             bookService.addReview(this.book.id, review)
//                 .then(book => {
//                     this.book = book;
//                     const msg = {
//                         txt: 'Your review was successfully added!',
//                         type: 'success',
//                         linkTitle: 'Check this book out',
//                         link: '/book/' + this.book.id
//                     };
//                     eventBus.$emit('show-msg', msg);
//                 })
//                 .catch(err => {
//                     const msg = {
//                         txt: err,
//                         type: 'fail',
//                     };
//                     eventBus.$emit('show-msg', msg);
//                 })


//             // TODO:Continue
//         },
//         removeReview(reviewId) {
//             bookService.removeReview(this.book.id, reviewId)
//                 .then(book => {
//                     this.book = book;
//                 })
//         }
//     },

//     computed: {

//         authorsToStr() {
//             return this.book.authors.toString();
//         },
//         categoryToStr() {
//             return this.book.categories.toString();
//         },

//         getCurrency() {
//             return i18nService.getCurrency(this.book);
//         },

//         getReadingDuration() {
//             if (this.book.pageCount > 500) return 'Long reading';
//             else if (this.book.pageCount > 200) return 'Descent reading';
//             return 'Light reading';
//         },
//         renderIsOldBook() {
//             if (new Date().getFullYear() - this.book.publishedDate > 10) return 'Veteran Book'
//             else if (new Date().getFullYear() - this.book.publishedDate < 1) return 'new'
//             else return '';
//         },

//         toggleFonts() {
//             if (this.book.listPrice.amount > 150) return 'red-fonts'
//             else if (this.book.listPrice.amount < 20) return 'green-fonts'
//             return '';
//         },

//         isLongTxt() {
//             return this.longTxtPressed;
//         },


//         isOnSale() {
//             return this.book.listPrice.isOnSale;
//         },

//         getShortTxt() {
//             return this.book.description.substring(0, 99);
//         },

//         isShortDesc() {
//             return this.book.description.length >= 101;
//         },

//         getBookReviews() {
//             return this.book.reviews;
//         }


//     },
//     components: {
//         longText,
//         reviewAdd,
//         reviewList
//     }

// }