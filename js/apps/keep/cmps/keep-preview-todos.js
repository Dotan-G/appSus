export default {
    props: ['keep'],
    template: `
    <div class="keep-preview-todos">
    <li v-for="todo in keep.info.todos" :key="todo.id" class="keep-todo-container">
        <p>Todos:</p>
        <p>Todo: {{todo.txt}}</p>
        <p>Done At: {{getDateFormat(todo.doneAt)}}</p>
        <p>-------------------------</p>


    </li>

    </div>
    `,
    computed: {

        gettest() {



        }


    },
    methods: {
        getDateFormat(tDate) {

            return tDate === null ? '' : new Date(tDate).toLocaleTimeString();
        }

    },

    components: {}
}