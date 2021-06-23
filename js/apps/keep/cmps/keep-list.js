import keepPreview from "./keep-preview.js"
export default {
    // props: ['keeps'],
    template: `
    <ul class="keep-list">
        <p>I am list component</p>
        <!-- <p>keep list will be rendered through keeps</p> -->
        <keep-preview></keep-preview>
        <p>keep details will be on keep-details page which i already made. But no routing yet</p>
        <!-- <li v-for="keep in keeps" :key="keep.id" class="keep-preview-container">
            <keep-preview :book="keep"/>
        
            <router-link :to="'/keep/'+keep.id">Details</router-link>
        </li> --> 
        
    </ul> 
    `,
    components: {
        keepPreview
    }

}

// import bookPreview from "./book-preview.js";

// export default {
//     props: ['books'],
//     template: `
//     <ul class="book-list">
//         <li v-for="book in books" :key="book.id" class="book-preview-container">
//             <book-preview :book="book"/>

//             <router-link :to="'/book/'+book.id">Details</router-link>
//         </li>
//     </ul>
//     `,

//     components: {
//         bookPreview
//     },
//     methods: {


//     }

// };