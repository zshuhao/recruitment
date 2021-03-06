import Vue from 'vue'
import {
    Button,
    Container,
    Header,
    Aside,
    Main,
    Row,
    Col,
    Menu,
    MenuItem,
    Submenu,
    Dropdown,
    DropdownMenu,
    DropdownItem,
    Form,
    FormItem,
    Input,
    Select,
    Option,
    ButtonGroup,
    Table,
    TableColumn,
    Dialog,
    Pagination,
    MessageBox,
    Message,
    Loading,
    Breadcrumb,
    BreadcrumbItem,
    Tag,
    Card,
    Tree,
    RadioButton,
    Popconfirm,
    Popover,
    Drawer,
    Divider,
    Badge,
    Scrollbar,
    Avatar,
    checkboxGroup,
    checkbox,
    tabs,
    tabPane,
    Radio,
    RadioGroup,
    DatePicker
} from 'element-ui'

// Vue.prototype.$ELEMENT = { size: 'small' }

Vue.use(DatePicker)
Vue.use(Radio)
Vue.use(RadioGroup)
Vue.use(tabs)
Vue.use(tabPane)
Vue.use(Button)
Vue.use(Container)
Vue.use(Header)
Vue.use(Aside)
Vue.use(Main)
Vue.use(Row)
Vue.use(Col)
Vue.use(Menu)
Vue.use(MenuItem)
Vue.use(Submenu)
Vue.use(Dropdown)
Vue.use(DropdownMenu)
Vue.use(DropdownItem)
Vue.use(Form)
Vue.use(FormItem)
Vue.use(Input)
Vue.use(Select)
Vue.use(Option)
Vue.use(ButtonGroup)
Vue.use(Table)
Vue.use(TableColumn)
Vue.use(Dialog)
Vue.use(Pagination)
Vue.use(Loading.directive)
Vue.use(Breadcrumb)
Vue.use(BreadcrumbItem)
Vue.use(Tag)
Vue.use(Card)
Vue.use(Tree)
Vue.use(RadioButton)
Vue.use(Popconfirm)
Vue.use(Popover)
Vue.use(Drawer)
Vue.use(Divider)
Vue.use(Badge)
Vue.use(Scrollbar)
Vue.use(Avatar)
Vue.use(checkboxGroup)
Vue.use(checkbox)

Vue.prototype.$msgbox = MessageBox
Vue.prototype.$alert = MessageBox.alert
Vue.prototype.$confirm = MessageBox.confirm
Vue.prototype.$prompt = MessageBox.prompt
Vue.prototype.$message = Message
