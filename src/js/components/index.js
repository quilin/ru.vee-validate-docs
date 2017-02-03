import CodeBlock from './CodeBlock.vue';
import CodeExample from './CodeExample.vue';
import Note from './Note.vue';
import AnimatedButton from './AnimatedButton.vue';

// Examples.
import DelayExample from './examples/Delay.vue';
import BasicExample from './examples/Basic.vue';
import LocaleExample from './examples/Locale.vue';
import RejectExample from './examples/FileReject.vue';
import ScopeExample from './examples/Scopes.vue';
import DataExample from './examples/Data.vue';
import EventExample from './examples/Event.vue';
import CouponExample from './examples/Coupon.vue';
import RadioButtonsExample from './examples/RadioButtons.vue';
import CheckboxExample from './examples/Checkbox.vue';
import FlagsExample from './examples/Flags.vue';
import SelectorsExample from './examples/Selectors.vue';
import ComponentExample from './examples/Component.vue';
import EventBusExample from './examples/EventBusParent.vue';


export default (Vue) => {
    Vue.component(AnimatedButton.name, AnimatedButton);
    Vue.component(CodeBlock.name, CodeBlock);
    Vue.component(CodeExample.name, CodeExample);
    Vue.component(Note.name, Note);
    Vue.component(BasicExample.name, BasicExample);
    Vue.component(DelayExample.name, DelayExample);
    Vue.component(LocaleExample.name, LocaleExample);
    Vue.component(RejectExample.name, RejectExample);
    Vue.component(ScopeExample.name, ScopeExample);
    Vue.component(DataExample.name, DataExample);
    Vue.component(EventExample.name, EventExample);
    Vue.component(CouponExample.name, CouponExample);
    Vue.component(RadioButtonsExample.name, RadioButtonsExample);
    Vue.component(CheckboxExample.name, CheckboxExample);
    Vue.component(FlagsExample.name, FlagsExample);
    Vue.component(ComponentExample.name, ComponentExample);
    Vue.component(EventBusExample.name, EventBusExample);
    Vue.component(SelectorsExample.name, SelectorsExample);
};
