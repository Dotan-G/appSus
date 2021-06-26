import { mailsService } from "../services/mail-service.js"
import { eventBus } from "../services/event-bus-service.js"
import mailsList from "../cmps/mails-list.js"
import mailFunc from "../cmps/mail-functionality.js"
import mailSend from "../cmps/mail-send.js"
import mailDetails from "./mail-details.js"
import mailStarred from "./mail-starred.js"

export default {
    components: {
        mailsList,
        mailFunc,
        mailSend,
        mailDetails,
        mailStarred,
    },
    template: `
        <div v-if="mails" class="email-app">
            <div class="mails-container">
                <mail-func @compose="compose" @inbox="inbox" />
                <mails-list v-if="!isCompose && !isDetails"
                    :mails="mailsToShow" @filterBy="setFilter" 
                    @sortBy="setSort" @showBy="setShow" @openMail="details" @remove="remove" @toShow/>
                <mail-send  v-if="isCompose" @sentMail="sentMail" @mailsToShow />
                <!-- <mail-details v-if="isDetails" :mail="mail" @detailsClose="details" /> -->
                <router-view v-if="isDetails"></router-view>
            </div>
        </div>
    `,
    data() {
        return {
            mails: null,
            filterBy: null,
            isCompose: false,
            isDetails: false,
            mail: null,
            sortBy: 'NEW',
            showBy: 'ALL',
        }
    },
    methods: {
        loadMails() {
            mailsService.query()
                .then(mails => this.mails = mails)
        },
        compose() {
            this.$router.push('/mail')
                .catch((err) => { err })
            this.isDetails = false
            this.isCompose = !this.isCompose
        }, inbox() {
            this.$router.push('/mail')
                .catch((err) => { err })
            this.isDetails = false
            this.isCompose = false
        },
        details(mailId) {
            if (!mailId) return this.isDetails = !this.isDetails
            this.isDetails = !this.isDetails
            mailsService.getMailById(mailId)
                .then((mail) => this.mail = mail)
        },
        sentMail(mail) {
            this.compose()
            mailsService.addMail(mail)
                .then(() => {
                    console.log('why?')
                    this.loadMails()
                })
        },
        setFilter(filterBy) {
            this.filterBy = filterBy
        },
        setSort(sortBy) {
            this.sortBy = sortBy
        },
        setShow(showBy) {
            this.showBy = showBy
            let filterMails;
            return mailsService.query()
                .then((mails) => {
                    if (showBy === 'ALL') return this.mails = mails
                    if (showBy === 'READ') filterMails = mails.filter(mail => mail.isRead)
                    if (showBy === 'UNREAD') filterMails = mails.filter(mail => !mail.isRead)
                    return this.mails = filterMails
                })
        },
        remove(mailId) {
            mailsService.removeMail(mailId)
                .then(() => {
                    this.loadMails()
                })
        },

    },
    computed: {
        mailsToShow() {
            if (!this.filterBy) {
                if (this.sortBy === 'NEW') return mailsService.sortMails(this.mails)
                if (this.sortBy === 'OLD') return mailsService.sortMails(this.mails).reverse()
            }
            if (this.filterBy.filterBy === 'SUBJECT') {
                const searchStr = this.filterBy.searchText.toLowerCase()
                const mailsToShow = this.mails.filter((mail) => {
                    return (
                        mail.subject.toLowerCase().includes(searchStr)
                    );
                })
                if (this.sortBy === 'NEW') return mailsService.sortMails(mailsToShow)
                if (this.sortBy === 'OLD') return mailsService.sortMails(mailsToShow).reverse()
            }
            if (this.filterBy.filterBy === 'NAME') {
                const searchStr = this.filterBy.searchText.toLowerCase()
                const mailsToShow = this.mails.filter((mail) => {
                    return (
                        mail.name.toLowerCase().includes(searchStr)
                    );
                })
                if (this.sortBy === 'NEW') return mailsService.sortMails(mailsToShow)
                if (this.sortBy === 'OLD') return mailsService.sortMails(mailsToShow).reverse()
            }
            this.toShow()
        },
    },
    created() {
        eventBus.$on('close', () => {
            this.isDetails = false
            this.isCompose = false
        })
        this.loadMails()
    },
    destroyed() {
        eventBus.$off('close');
    }
}


// @starred="starred"
// starred() {
    // this.$router.push('/starred')
        // .catch((err) => { err })
    // this.isDetails = true
    // this.isCompose = false
// },