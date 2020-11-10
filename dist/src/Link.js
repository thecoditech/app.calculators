"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable jsx-a11y/anchor-has-content */
const Link_1 = __importDefault(require("@material-ui/core/Link"));
const react_1 = __importDefault(require("react"));
const prop_types_1 = __importDefault(require("prop-types"));
const clsx_1 = __importDefault(require("clsx"));
const router_1 = require("next/router");
const link_1 = __importDefault(require("next/link"));
const NextComposed = react_1.default.forwardRef(function NextComposed(props, ref) {
    const { as, href, ...other } = props;
    return (<link_1.default href={href} as={as}>
      <a ref={ref} {...other}/>
    </link_1.default>);
});
NextComposed.propTypes = {
    as: prop_types_1.default.oneOfType([prop_types_1.default.string, prop_types_1.default.object]),
    href: prop_types_1.default.oneOfType([prop_types_1.default.string, prop_types_1.default.object]),
    prefetch: prop_types_1.default.bool,
};
// A styled version of the Next.js Link component:
// https://nextjs.org/docs/#with-link
function Link(props) {
    const { href, activeClassName = 'active', className: classNameProps, innerRef, naked, ...other } = props;
    const router = router_1.useRouter();
    const pathname = typeof href === 'string' ? href : href.pathname;
    const className = clsx_1.default(classNameProps, {
        [activeClassName]: router.pathname === pathname && activeClassName,
    });
    if (naked) {
        return <NextComposed className={className} ref={innerRef} href={href} {...other}/>;
    }
    return (<Link_1.default component={NextComposed} className={className} ref={innerRef} href={href} {...other}/>);
}
Link.propTypes = {
    activeClassName: prop_types_1.default.string,
    as: prop_types_1.default.oneOfType([prop_types_1.default.string, prop_types_1.default.object]),
    className: prop_types_1.default.string,
    href: prop_types_1.default.oneOfType([prop_types_1.default.string, prop_types_1.default.object]),
    innerRef: prop_types_1.default.oneOfType([prop_types_1.default.func, prop_types_1.default.object]),
    naked: prop_types_1.default.bool,
    onClick: prop_types_1.default.func,
    prefetch: prop_types_1.default.bool,
};
exports.default = react_1.default.forwardRef((props, ref) => <Link {...props} innerRef={ref}/>);
//# sourceMappingURL=Link.js.map