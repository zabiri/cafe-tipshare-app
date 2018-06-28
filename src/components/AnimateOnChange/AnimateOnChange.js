
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importStar(require("react"));
const events = {
    start: ['animationstart', 'webkitAnimationStart', 'mozAnimationStart', 'oanimationstart', 'MSAnimationStart'],
    end: ['animationend', 'webkitAnimationEnd', 'mozAnimationEnd', 'oanimationend', 'MSAnimationEnd'],
    startRemoved: [],
    endRemoved: []
};

class AnimateOnChange extends react_1.Component {
    constructor(props) {
        super(props);
        this.state = { animating: false, clearAnimationClass: false };
        this.animationStart = this.animationStart.bind(this);
        this.animationEnd = this.animationEnd.bind(this);
        this.setElementRef = (ref) => {
            this.elm = ref;
        };
    }
    componentDidMount() {
        this.addEventListener('start', this.elm, this.animationStart);
        this.addEventListener('end', this.elm, this.animationEnd);
    }
    componentWillUnmount() {
        this.removeEventListeners('start', this.elm, this.animationStart);
        this.removeEventListeners('end', this.elm, this.animationEnd);
    }
    addEventListener(type, elm, eventHandler) {
        // until an event has been triggered bind them all
        events[type].map(event => {
            // console.log(`adding ${event}`)
            // @ts-ignore
            elm.addEventListener(event, eventHandler);
        });
    }
    removeEventListeners(type, elm, eventHandler) {
        events[type].map(event => {
            // console.log(`removing ${event}`)
            // @ts-ignore
            elm.removeEventListener(event, eventHandler);
        });
    }
    updateEvents(type, newEvent) {
        // console.log(`updating ${type} event to ${newEvent}`)
        events[type + 'Removed'] = events[type].filter(e => e !== newEvent);
        events[type] = [newEvent];
    }
    animationStart(e) {
        if (events['start'].length > 1) {
            this.updateEvents('start', e.type);
            this.removeEventListeners('startRemoved', this.elm, this.animationStart);
        }
        this.setState({ animating: true, clearAnimationClass: false });
    }
    animationEnd(e) {
        if (events['end'].length > 1) {
            this.updateEvents('end', e.type);
            this.removeEventListeners('endRemoved', this.elm, this.animationStart);
        }
        // send separate, animation state change will not render
        this.setState({ clearAnimationClass: true }); // renders
        this.setState({ animating: false, clearAnimationClass: false });
        if (typeof this.props.onAnimationEnd === 'function') {
            this.props.onAnimationEnd();
        }
    }
    shouldComponentUpdate(nextProps, nextState) {
        if (this.state.animating !== nextState.animating) {
            // do not render on animation change
            return false;
        }
        return true;
    }
    render() {
        let className = this.props.baseClassName;
        if (this.props.animate && !this.state.clearAnimationClass) {
            className += ` ${this.props.animationClassName}`;
        }
        let Tag = this.props.customTag || 'span';
        return react_1.default.createElement(Tag, { ref: this.setElementRef, className: className }, this.props.children);
    }
}
exports.default = AnimateOnChange;