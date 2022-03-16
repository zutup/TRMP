import Vue from 'vue'
import showUploadFileBox from '../components/system/file/box/uploadFile/index.js'
import 
{ 
    Button,
    Menu,
    Submenu,
    MenuItem, 
    Form, 
    FormItem,
    Input,
    Message,
    Container,
    Header,
    Main,
    Aside,
    Breadcrumb,
    BreadcrumbItem, 
    Carousel,
    CarouselItem,
    Select,
    Option,
    Col,
    DatePicker,
    TimePicker,
    Switch,
    Radio,
    Checkbox,
    Card,
    Popover,
    Table,
    TableColumn,
    Divider,
    ColorPicker,
    Image,
    Pagination,
    MessageBox,
    Upload,
    Timeline,
    TimelineItem,
    Dialog,
    CheckboxGroup,
    Row,
    Autocomplete,
    Progress,
    Tooltip,
    Backtop,
    Dropdown,
    DropdownItem,
    DropdownMenu,
    Avatar
} from 'element-ui'


Vue.prototype.$confirm = MessageBox.confirm
Vue.prototype.$prompt = MessageBox.prompt
Vue.prototype.$uploadFile = showUploadFileBox

Vue.use(Button)
Vue.use(Backtop)
Vue.use(Progress)
Vue.use(Dropdown)
Vue.use(Avatar)
Vue.use(DropdownItem)
Vue.use(DropdownMenu)
Vue.use(Tooltip)
Vue.use(Autocomplete)
Vue.use(CheckboxGroup)
Vue.use(Form)
Vue.use(FormItem)
Vue.use(Input)
Vue.use(Container)
Vue.use(Header)
Vue.use(Main)
Vue.use(Menu)
Vue.use(Submenu)
Vue.use(MenuItem)
Vue.use(Aside)
Vue.use(Breadcrumb)
Vue.use(BreadcrumbItem)
Vue.use(Carousel)
Vue.use(CarouselItem)
Vue.use(Select)
Vue.use(Option)
Vue.use(Col)
Vue.use(DatePicker)
Vue.use(TimePicker)
Vue.use(Switch)
Vue.use(Radio)
Vue.use(Checkbox)
Vue.use(Card)
Vue.use(Popover)
Vue.use(Table)
Vue.use(TableColumn)
Vue.use(Divider)
Vue.use(ColorPicker)
Vue.use(Image)
Vue.use(Pagination)
Vue.use(Upload)
Vue.use(Timeline)
Vue.use(TimelineItem)
Vue.use(Dialog)
Vue.use(Row)
Vue.prototype.$message = Message
