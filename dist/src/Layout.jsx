"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const AppBar_1 = __importDefault(require("@material-ui/core/AppBar"));
const Container_1 = __importDefault(require("@material-ui/core/Container"));
const Divider_1 = __importDefault(require("@material-ui/core/Divider"));
const Drawer_1 = __importDefault(require("@material-ui/core/Drawer"));
const IconButton_1 = __importDefault(require("@material-ui/core/IconButton"));
const styles_1 = require("@material-ui/core/styles");
const List_1 = __importDefault(require("@material-ui/core/List"));
const ListItem_1 = __importDefault(require("@material-ui/core/ListItem"));
const ListItemIcon_1 = __importDefault(require("@material-ui/core/ListItemIcon"));
const ListItemText_1 = __importDefault(require("@material-ui/core/ListItemText"));
const Toolbar_1 = __importDefault(require("@material-ui/core/Toolbar"));
const Typography_1 = __importDefault(require("@material-ui/core/Typography"));
const AllInclusive_1 = __importDefault(require("@material-ui/icons/AllInclusive"));
const Functions_1 = __importDefault(require("@material-ui/icons/Functions"));
const ChevronLeft_1 = __importDefault(require("@material-ui/icons/ChevronLeft"));
const ChevronRight_1 = __importDefault(require("@material-ui/icons/ChevronRight"));
const Menu_1 = __importDefault(require("@material-ui/icons/Menu"));
const clsx_1 = __importDefault(require("clsx"));
const link_1 = __importDefault(require("next/link"));
const react_1 = __importStar(require("react"));
const Copyleft_1 = __importDefault(require("./Copyleft"));
const drawerWidth = 240;
const useStyles = styles_1.makeStyles((theme) => styles_1.createStyles({
    root: {
        display: 'flex',
    },
    appBar: {
        zIndex: theme.zIndex.drawer + 1,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
    },
    appBarShift: {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    menuButton: {
        marginRight: 36,
    },
    hide: {
        display: 'none',
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
        whiteSpace: 'nowrap',
    },
    drawerOpen: {
        width: drawerWidth,
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    drawerClose: {
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        overflowX: 'hidden',
        width: theme.spacing(7) + 1,
        [theme.breakpoints.up('sm')]: {
            width: theme.spacing(9) + 1,
        },
    },
    toolbar: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        padding: theme.spacing(0, 1),
        // necessary for content to be below app bar
        ...theme.mixins.toolbar,
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
    },
}));
const navLinks = [
    {
        link: '/health/bmi',
        text: 'BMI'
    },
    {
        link: '/business/vat-number',
        text: 'VAT Number'
    },
    {
        link: '/converters/data-storage',
        text: 'Data Storage'
    },
    // {
    //   link: '/converters/electricity-magnetism',
    //   text: 'Electricity Magnetism'
    // },
    {
        link: '/converters/energy',
        text: 'Energy'
    },
    {
        link: '/converters/force',
        text: 'Force'
    },
    {
        link: '/converters/length',
        text: 'Length'
    },
    // {
    //   link: '/converters/liquid-volume',
    //   text: 'Liquid Volume'
    // },
    {
        link: '/converters/mass',
        text: 'Mass'
    },
    {
        link: '/converters/power',
        text: 'Power'
    },
    {
        link: '/converters/pressure',
        text: 'Pressure'
    },
    {
        link: '/converters/surface-area',
        text: 'Surface Area'
    },
    {
        link: '/converters/temperature',
        text: 'Temperature'
    },
    {
        link: '/converters/time',
        text: 'Time'
    },
    {
        link: '/converters/volume',
        text: 'Volume'
    },
];
const Layout = ({ children }) => {
    const classes = useStyles();
    const theme = styles_1.useTheme();
    const [open, setOpen] = react_1.useState(true);
    const handleDrawerOpen = () => {
        setOpen(true);
    };
    const handleDrawerClose = () => {
        setOpen(false);
    };
    return (<>
      <AppBar_1.default position="fixed" className={clsx_1.default(classes.appBar, {
        [classes.appBarShift]: open,
    })}>
        <Toolbar_1.default>
          <IconButton_1.default color="inherit" aria-label="open drawer" onClick={handleDrawerOpen} edge="start" className={clsx_1.default(classes.menuButton, {
        [classes.hide]: open,
    })}>
            <Menu_1.default />
          </IconButton_1.default>
          <Typography_1.default variant="h6" noWrap>
            <IconButton_1.default color="inherit">
              <AllInclusive_1.default />
            </IconButton_1.default>
            Calculators
          </Typography_1.default>
        </Toolbar_1.default>
      </AppBar_1.default>
      <Drawer_1.default variant="permanent" className={clsx_1.default(classes.drawer, {
        [classes.drawerOpen]: open,
        [classes.drawerClose]: !open,
    })} classes={{
        paper: clsx_1.default({
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open,
        }),
    }}>
        <div className={classes.toolbar}>
          <IconButton_1.default onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? <ChevronRight_1.default /> : <ChevronLeft_1.default />}
          </IconButton_1.default>
        </div>
        <Divider_1.default />
        <List_1.default>
          {navLinks.map(({ link, text }, index) => (<link_1.default href={link} passHref key={index}>
              <ListItem_1.default button>
                <ListItemIcon_1.default>
                  <Functions_1.default />
                </ListItemIcon_1.default>
                <ListItemText_1.default primary={text}/>
              </ListItem_1.default>
            </link_1.default>))}
        </List_1.default>
      </Drawer_1.default>

      <main className={classes.content}>
        <div className={classes.toolbar}/>
        <Container_1.default maxWidth="sm">
          <>
            {children}
          </>
        </Container_1.default>
      </main>

      
      <footer>
        <Typography_1.default variant="h6" align="center" gutterBottom>Calculators</Typography_1.default>
        <Typography_1.default variant="subtitle1" align="center" color="textSecondary" component="p">
          Compute what you want
        </Typography_1.default>
        <Copyleft_1.default />
      </footer>
      
    </>);
};
exports.default = Layout;
//# sourceMappingURL=Layout.jsx.map