export default {
    props: ['mail'],
    template: `
        <section class="mail-details">
            <span>{{mail.name}}</span>
            <span>{{mail.subject}}</span>
            <span>{{mail.body}}</span>
            <span>{{mail.realTime}}</span>
        </section>
    `,
    data() {
        return {}
    },
    methods: {},
    computed: {},
    created() { },
    destroyed() { }
}