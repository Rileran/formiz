(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{61:function(n,t,e){"use strict";e.r(t);e(0);var r=e(63),i=e(72),s=e(69),a=e(70),o=e(71),c='\n// 2. Create a form with multi steps & fields\nconst MyForm = () => {\n  const myForm = useForm()\n  const [isLoading, setIsLoading] = React.useState(false)\n  const submitForm = (values) => {\n    setIsLoading(true)\n\n    setTimeout(() => {\n      setIsLoading(false)\n      alert(JSON.stringify(values))\n      myForm.invalidateFields({\n        email: \'You can display an error after an API call\',\n      })\n      const step = myForm.getFieldStepName(\'email\')\n      myForm.goToStep(step)\n    }, 1000)\n  }\n  return (\n    <Formiz onValidSubmit={submitForm} connect={myForm}>\n      <form\n        noValidate\n        onSubmit={myForm.submit}\n        className="demo-form"\n        style={{ minHeight: \'16rem\' }}\n      >\n        <div className="demo-form__tabs">\n          {myForm.steps.map(step => (\n            <button\n              key={step.name}\n              className={`demo-form__tab ${step.name === myForm.currentStep.name ? \'is-active\' : \'\'}`}\n              type="button"\n              onClick={() => myForm.goToStep(step.name)}\n            >\n              {!step.isValid && step.isSubmitted && (\n                <small className="mr-2">⚠️</small>\n              )}\n              { step.label }\n            </button>\n          ))}\n        </div>\n\n        <div className="demo-form__content">\n          <FormizStep name="step1" label="Step A">\n            '.concat(Object(a.a)(!0),'\n          </FormizStep>\n          <FormizStep name="step2" label="Step B">\n            ').concat(Object(o.a)(!0),'\n          </FormizStep>\n        </div>\n\n        <div className="demo-form__footer">\n          <div\n            className="ml-auto"\n            style={{ minWidth: \'6rem\' }}\n          >\n            <button\n              className="demo-button is-primary"\n              type="submit"\n              disabled={isLoading || (!myForm.isValid && myForm.isSubmitted)}\n            >\n              {isLoading ? \'Loading...\' : \'Submit\'}\n            </button>\n          </div>\n        </div>\n      </form>\n    </Formiz>\n  )\n}\n'),u="\n".concat(s.a,"\n").concat(c,"\nrender(\n  <MyForm />\n)\n");function p(){return(p=Object.assign||function(n){for(var t=1;t<arguments.length;t++){var e=arguments[t];for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r])}return n}).apply(this,arguments)}function l(n,t){if(null==n)return{};var e,r,i=function(n,t){if(null==n)return{};var e,r,i={},s=Object.keys(n);for(r=0;r<s.length;r++)e=s[r],t.indexOf(e)>=0||(i[e]=n[e]);return i}(n,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(n);for(r=0;r<s.length;r++)e=s[r],t.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(n,e)&&(i[e]=n[e])}return i}e.d(t,"frontMatter",function(){return S}),e.d(t,"rightToc",function(){return j}),e.d(t,"default",function(){return f});var S={id:"multi-tabs",title:"Multi Tabs Form"},j=[],_={rightToc:j},d="wrapper";function f(n){var t=n.components,e=l(n,["components"]);return Object(r.b)(d,p({},_,e,{components:t,mdxType:"MDXLayout"}),Object(r.b)(i.a,{code:u,mdxType:"CodePreview"}))}f.isMDXComponent=!0},69:function(n,t,e){"use strict";e.d(t,"a",function(){return r});var r="\n// 1. Create a reusable field\nconst MyField = (props) => {\n  const {\n    errorMessage,\n    id,\n    isValid,\n    isPristine,\n    isSubmitted,\n    resetKey,\n    setValue,\n    value,\n  } = useField(props)\n  const { label, type, isRequired } = props\n  const [isFocused, setIsFocused] = React.useState(false);\n  const showError = !isValid && (!isPristine || isSubmitted)\n\n  return (\n    <div className={`demo-form-group ${(showError && !isFocused) ? 'is-error' : ''}`}>\n      <label\n        className=\"demo-label\"\n        htmlFor={id}\n      >\n        { label }\n        {isRequired && ' *'}\n      </label>\n      <input\n        key={resetKey}\n        id={id}\n        type={type || 'text'}\n        defaultValue={value}\n        className=\"demo-input\"\n        onChange={e => setValue(e.target.value)}\n        onFocus={() => setIsFocused(true)}\n        onBlur={() => setIsFocused(false)}\n        aria-invalid={!isValid}\n        aria-describedby={!isValid ? `${id}-error` : null}\n      />\n      {showError && (\n        <div id={`${id}-error`} className=\"demo-form-feedback\">\n          { errorMessage }\n        </div>\n      )}\n    </div>\n  )\n}\n"},70:function(n,t,e){"use strict";e.d(t,"a",function(){return r});var r=function(n){return'\n            <MyField\n              name="name"\n              label="Name"\n              isRequired="Name is required"\n              '.concat(n?'defaultValue="Hailey Terry"':"",'\n            />\n\n            <MyField\n              name="nickname"\n              label="Nickname"\n              ').concat(n?'defaultValue="hailey"':"","\n            />\n")}},71:function(n,t,e){"use strict";e.d(t,"a",function(){return r});var r=function(n){return'\n            <MyField\n              name="email"\n              label="Email"\n              type="email"\n              isRequired="Email is required"\n              validations={[\n                {\n                  rule: validations.isEmail(),\n                  message: \'Not a valid email\',\n                }\n              ]}\n              '.concat(n?'defaultValue="hailey@company.com"':"",'\n            />\n\n            <MyField\n              name="password"\n              label="Password"\n              type="password"\n            />\n            <MyField\n              name="passwordConfirm"\n              label="Confirm password"\n              type="password"\n              validations={[\n                {\n                  rule: (value, values) => values.password === value,\n                  message: \'Passwords do not match\',\n                }\n              ]}\n            />\n')}},72:function(n,t,e){"use strict";var r={};e.r(r),e.d(r,"isEmail",function(){return pn}),e.d(r,"isNotEmptyArray",function(){return un}),e.d(r,"isNotEmptyString",function(){return cn}),e.d(r,"isRequired",function(){return on});var i=e(0),s=e.n(i),a=e(6),o=e.n(a),c=e(479),u=e(68),p=e.n(u);function l(n){return(l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(n){return typeof n}:function(n){return n&&"function"==typeof Symbol&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n})(n)}function S(n){return(S="function"==typeof Symbol&&"symbol"==l(Symbol.iterator)?function(n){return l(n)}:function(n){return n&&"function"==typeof Symbol&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":l(n)})(n)}function j(n,t,e){return t in n?Object.defineProperty(n,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):n[t]=e,n}function _(){return(_=Object.assign||function(n){for(var t=1;t<arguments.length;t++){var e=arguments[t];for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r])}return n}).apply(this,arguments)}function d(n,t){var e=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable})),e.push.apply(e,r)}return e}function f(n){for(var t=1;t<arguments.length;t++){var e=null!=arguments[t]?arguments[t]:{};t%2?d(e,!0).forEach(function(t){j(n,t,e[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(e)):d(e).forEach(function(t){Object.defineProperty(n,t,Object.getOwnPropertyDescriptor(e,t))})}return n}function m(n,t){if(null==n)return{};var e,r,i=function(n,t){if(null==n)return{};var e,r,i={},s=Object.keys(n);for(r=0;r<s.length;r++)e=s[r],t.indexOf(e)>=0||(i[e]=n[e]);return i}(n,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(n);for(r=0;r<s.length;r++)e=s[r],t.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(n,e)&&(i[e]=n[e])}return i}function y(n,t){return h(n)||function(n,t){var e=[],r=!0,i=!1,s=void 0;try{for(var a,o=n[Symbol.iterator]();!(r=(a=o.next()).done)&&(e.push(a.value),!t||e.length!==t);r=!0);}catch(n){i=!0,s=n}finally{try{r||null==o.return||o.return()}finally{if(i)throw s}}return e}(n,t)||b()}function g(n){return function(n){if(Array.isArray(n)){for(var t=0,e=new Array(n.length);t<n.length;t++)e[t]=n[t];return e}}(n)||E(n)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function h(n){if(Array.isArray(n))return n}function E(n){if(Symbol.iterator in Object(n)||"[object Arguments]"===Object.prototype.toString.call(n))return Array.from(n)}function b(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}function v(n){var t=function(n,t){if("object"!=l(n)||null===n)return n;var e=n[Symbol.toPrimitive];if(void 0!==e){var r=e.call(n,t);if("object"!=l(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(n)}(n,"string");return"symbol"==l(t)?t:String(t)}var x=s.a.createContext(),P=function(){return Object(i.useContext)(x)},O=function(n){var t=n.children,e=n.onStateChange,r=Object(i.useMemo)(function(){return Math.random().toString(36).substr(2,9)},[]),a=Object(i.useRef)({id:r,resetKey:0,isValid:!0,isSubmitted:!1,initialStepName:null,navigatedStepName:null,steps:[],fields:[]}),o=Object(i.useRef)(!1),c=Object(i.useRef)(null),u=y(Object(i.useState)(a.current),2),p=u[0],l=u[1];Object(i.useEffect)(function(){return o.current=!0,function(){o.current=!1}},[]);var S=Object(i.useCallback)(function(n){a.current=n(a.current),clearTimeout(c.current),c.current=setTimeout(function(){o.current&&l(a.current)})},[a,c,l]);return Object(i.useEffect)(function(){e(a.current)},[a.current]),s.a.createElement(x.Provider,{value:{state:p,dispatch:S}},t)};O.propTypes={children:o.a.node.isRequired,onStateChange:o.a.func},O.defaultProps={onStateChange:function(){}};var C=function(n){return n&&"object"===S(n)&&n.constructor===Object},B=function(n){return Object.keys(n).reduce(function(n,t){return w(t,n)},n)},w=function(n,t){if(n.indexOf(".")<0&&n.indexOf("[")<0)return t;var e,r=t[n],i=t||{},s=(i[n],m(i,[n].map(v))),a=h(e=n.split("."))||E(e)||b(),o=a[0],c=a.slice(1);if(o.match(/\[([0-9]*)\]$/g)){var u=y(o.split(/(\[|\])/g),3),p=u[0],l=u[2],S=t[p]||[];if(c.length){var _=f({},t[p]&&C(t[p][l])?t[p][l]:{},j({},c.join("."),r));S[l]=B(_)}else S[l]=r;return f({},s,j({},p,S))}var d=f({},C(t[o])?t[o]:{},j({},c.join("."),r));return f({},s,j({},o,B(d)))},M=function(n){var t=(n||[]).filter(function(n){return n.isActive}).reduce(function(n,t){return f({},n,j({},t.name,t.value))},{});return B(t)},N=function(n,t){return(t||[]).filter(function(t){return t.step===n})},T=function(n,t){var e=function(n,t){return(t||[]).find(function(t){return t.name===n})}(n,t);if(!e)return[];var r=(e.validations||[]).map(function(n){return n.rule&&!n.rule(e.value,M(t))?n.message:"___FIELD_IS_VALID___"}).filter(function(n){return"___FIELD_IS_VALID___"!==n});return e.externalError?[e.externalError].concat(g(r)):r},F=function(n,t){return(t||[]).find(function(t){return t.name===n})||{}},G=function(n){return n.navigatedStepName||n.initialStepName},k=function(n,t){return(t||[]).findIndex(function(t){return t.name===n})||0},V=function(n){return(n||[]).sort(function(n,t){return n.order-t.order}).sort(function(n,t){return n.index-t.index})},L=function(){return function(n){var t=(n.fields||[]).map(function(t){return f({},t,{errors:T(t.name,n.fields)})}),e=t.every(function(n){return!n.errors.length}),r=(n.steps||[]).map(function(n){return f({},n,{isValid:N(n.name,t).every(function(n){return!n.errors.length})})});return f({},n,{fields:t,steps:r,isValid:e})}},A=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:function(){},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:function(){},e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:function(){};return function(r){var i=(r.steps||[]).map(function(n){return f({},n,{isSubmitted:!0})}),s=M(r.fields);n(s);var a=f({},r,{steps:i,isSubmitted:!0});return(a=L()(a)).isValid?t(s):e(s),a}},I=function(n){return function(t){var e=(t.steps||[]).find(function(t){return t.name===n});if(!e||!e.name)return t;var r=f({},t,{navigatedStepName:e.name});return L()(r)}},D=function(n){return function(t){var e=(t.steps||[])[n]||{};return I(e.name)(t)}},H=function(){return function(n){var t=n.steps,e=(t||[]).length,r=G(n),i=k(r,t),s=e>0?i+1:0;return D(s=s>e-1?i:s)(n)}},K={children:o.a.node,autoForm:o.a.bool,onSubmit:o.a.func,onValidSubmit:o.a.func,onInvalidSubmit:o.a.func,onValid:o.a.func,onInvalid:o.a.func,onChange:o.a.func,connect:o.a.shape({__connect__:o.a.func})},R={children:"",autoForm:!1,onSubmit:function(){},onValidSubmit:function(){},onInvalidSubmit:function(){},onValid:function(){},onInvalid:function(){},onChange:function(){},connect:{__connect__:function(){}}},z=function(n){var t=n.children,e=n.autoForm,r=n.onSubmit,a=n.onValidSubmit,o=n.onInvalidSubmit,c=n.onValid,u=n.onInvalid,p=n.onChange,l=n.connect,S=P(),j=S.state,_=S.dispatch,d=j.id,y=j.fields,h=j.isValid,E=j.isSubmitted,b=j.steps,v=Object(i.useMemo)(function(){return M(y)},[y]),x=(b||[]).length,O=G(j),C=F(O,b),B=k(O,b),w=function(n){return{name:n.name,label:n.label,isValid:n.isValid,isVisited:n.isVisited,isSubmitted:n.isSubmitted,index:n.index}};p(v),h?c():u();var N=function(n){n&&n.preventDefault(),_(A(r,a,o))},T=function(n){n&&n.preventDefault(),_(function(n){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:function(){},e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:function(){},r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:function(){};return function(i){var s=i.steps.find(function(t){return t.name===n})||{},a=i.steps.filter(function(t){return t.name!==n}),o=V([].concat(g(a),[f({},s,{isSubmitted:!0})])),c=f({},i,{steps:o});return s.isValid?(c.navigatedStepName===(c=H()(c)).navigatedStepName&&(c=A(t,e,r)(c)),c):c}}(O,r,a,o))};return Object(i.useEffect)(function(){l.__connect__({id:d,submit:N,isValid:h,isSubmitted:E,values:v,invalidateFields:function(n){_(function(n){return function(t){var e=t.fields.map(function(t){var e=n[t.name];return e?f({},t,{externalError:e}):t}),r=f({},t,{fields:e});return L()(r)}}(n))},reset:function(){_(function(n){var t=(n.fields||[]).map(function(n){n.externalError;var t=m(n,["externalError"]);return f({},t,{isPristine:!0,value:t.defaultValue})}),e=(n.steps||[]).map(function(n){return f({},n,{isSubmitted:!1,isVisited:!1})}),r=f({},n,{fields:t,steps:e,isSubmitted:!1,navigatedStepName:n.initialStepName,resetKey:n.resetKey+1});return L()(r)})},currentStep:w(C),steps:(b||[]).map(w),isStepValid:C.isValid,isStepSubmitted:C.isSubmitted,isFirstStep:0===B,isLastStep:B===x-1,submitStep:T,getFieldStepName:function(n){return function(n,t){var e=y.find(function(t){return t.name===n});if(e&&e.isActive)return e.step}(n)},nextStep:function(){_(H())},prevStep:function(){_(function(n){var t=n.steps,e=G(n),r=k(e,t)-1;return D(r=r<0?0:r)(n)})},goToStep:function(n){_(I(n))}})},[_,JSON.stringify(l.__connect__),JSON.stringify(N),JSON.stringify(T),d,h,E,JSON.stringify(v),JSON.stringify(b),JSON.stringify(y),JSON.stringify(C),B,x]),e?s.a.createElement("form",{onSubmit:N},t):t};z.propTypes=K,z.defaultProps=R;var J=new Error("A <FormizStep> always needs a `name` attribute."),W={as:o.a.oneOfType([o.a.func,o.a.string,o.a.shape({$$typeof:o.a.symbol,render:o.a.func}),o.a.arrayOf(o.a.oneOfType([o.a.func,o.a.string,o.a.shape({$$typeof:o.a.symbol,render:o.a.func})]))]),children:o.a.oneOfType([o.a.node,o.a.func]),name:o.a.string.isRequired,label:o.a.node,order:o.a.number,style:o.a.oneOfType([o.a.object,o.a.array])},q={as:"div",children:"",label:"",order:0,style:{}},$=function(n){var t=n.as,e=n.children,r=n.name,a=n.label,o=n.order,c=n.style,u=m(n,["as","children","name","label","order","style"]);if(!r)throw J;var p,l=P(),S=l.state,j=l.dispatch,d=G(S),y=F(d,S.steps),h=d===r;return y.name&&!y.isVisited&&h&&j((p=d,function(n){var t=n.steps.find(function(n){return n.name===p})||{},e=n.steps.filter(function(n){return n.name!==p}),r=V([].concat(g(e),[f({},t,{isVisited:!0})]));return f({},n,{steps:r})})),Object(i.useEffect)(function(){return j(function(n){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"";return function(r){var i=r.steps.find(function(t){return t.name===n})||{},s=r.steps.filter(function(t){return t.name!==n}),a=V([].concat(g(s),[f({},i,{name:n,label:e,order:t,isValid:!0,isVisited:!1,isSubmitted:!1})])).map(function(n,t){return f({},n,{index:t})}),o=f({},r,{steps:a,initialStepName:a.length?a[0].name:null});return L()(o)}}(r,o,a)),function(){j(function(n){return function(t){var e=t.steps.filter(function(t){return t.name!==n}),r=f({},t,{steps:V(e)});return L()(r)}}(r))}},[r,o]),"function"==typeof e?e({isActive:h}):s.a.createElement(t,_({style:f({},c,{display:h?null:"none"})},u),e)};$.propTypes=W,$.defaultProps=q;var U=s.a.createContext(),X=function(n){var t=n.children,e=n.name;return s.a.createElement(U.Provider,{value:e},t)};X.propTypes={children:o.a.node.isRequired,name:o.a.string},X.defaultProps={name:null};var Y=function(){var n,t,e=y(Object(i.useState)({id:null,submit:function(){},isValid:!0,isSubmitted:!1,values:{},invalidateFields:function(){},reset:function(){},currentStep:{},steps:[],isStepValid:!0,isStepSubmitted:!1,isFirstStep:!0,isLastStep:!0,submitStep:function(){},getFieldStepName:function(){},nextStep:function(){},prevStep:function(){},goToStep:function(){}}),2),r=e[0],s=e[1],a=(n=r,t=Object(i.useRef)(),Object(i.useEffect)(function(){t.current=n},[n]),t.current);return f({},r,{__connect__:function(n){n!==a&&s(n)}})},Z=new Error("A Formiz field always needs to be in a `<Formiz>` component."),Q=new Error("A Formiz field always needs a `name` attribute."),nn=(o.a.any,o.a.string,o.a.bool,o.a.string,o.a.func,o.a.arrayOf(o.a.shape({rule:o.a.func,message:o.a.string})),function(n){return n||""===n?{rule:function(n){return!!n||0===n},message:!0!==n?n:""}:{}}),tn=function(n){var t=n.defaultValue,e=n.isRequired,r=n.keepValue,s=n.name,a=n.onChange,o=n.validations,c=void 0===o?[]:o;if(!s)throw Q;var u=P(),p=Object(i.useContext)(U);if(!u)throw Z;var l=u.state,S=u.dispatch;Object(i.useEffect)(function(){return S(function(n){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},e=t.value,r=void 0===e?null:e,i=t.step,s=void 0===i?null:i,a=t.validations,o=void 0===a?[]:a;return function(t){var e=t.fields.find(function(t){return t.name===n})||{},i=t.fields.filter(function(t){return t.name!==n}),a=[].concat(g(i),[f({},e,{name:n,value:e.value||r,defaultValue:r,isActive:!0,isPristine:!0,step:s,validations:o,errors:[]})]),c=f({},t,{fields:a});return L()(c)}}(s,{value:t,step:p,validations:c})),function(){S(function(n,t){return function(e){var r=e.fields.find(function(t){return t.name===n});if(!r)return e;var i=e.fields.filter(function(t){return t.name!==n}),s=t?[].concat(g(i),[f({},r,{isActive:!1})]):i,a=f({},e,{fields:s});return L()(a)}}(s,r))}},[S,s,p,r]),Object(i.useEffect)(function(){var n=[nn(e)];S(function(n,t){return function(e){var r=e.fields.find(function(t){return t.name===n});if(!r)return e;var i=e.fields.filter(function(t){return t.name!==n}),s=[].concat(g(i),[f({},r,{validations:t})]),a=f({},e,{fields:s});return L()(a)}}(s,[].concat(n,g(c))))},[S,s,JSON.stringify(c),JSON.stringify(e)]);var j=l.fields.find(function(n){return n.name===s}),_=j?(j.errors||[]).filter(function(n){return!!n}):[],d=F(p,l.steps),y=d.name?d.isSubmitted:l.isSubmitted;return{id:"".concat(l.id,"-").concat(s),resetKey:l.resetKey,value:j?j.value:null,errorMessages:_,errorMessage:_[0],isValid:!j||!j.errors.length,isPristine:!j||j.isPristine,isSubmitted:y,setValue:function(n){S(function(n,t){return function(e){var r=e.fields.find(function(t){return t.name===n});if(!r)return e;var i=e.fields.filter(function(t){return t.name!==n}),s=(r.externalError,m(r,["externalError"])),a=[].concat(g(i),[f({},s,{value:t,isPristine:!1})]),o=f({},e,{fields:a});return L()(o)}}(s,n)),a&&a(n)}}},en=function(n){return s.a.createElement(O,null,s.a.createElement(z,n))};en.propTypes=K,en.defaultProps=R;var rn=function(n){var t=n.name,e=n.order,r=m(n,["name","order"]);return s.a.createElement(X,{name:t},s.a.createElement($,_({},r,{name:t,order:e})))};rn.propTypes=W,rn.defaultProps=q;var sn=function(n){return"string"==typeof n||n instanceof String},an=/^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i,on=function(){return function(n){return!!n||0===n}},cn=function(){return function(n){return!!sn(n)&&!!(n||"").match(/^(?!\s*$).+/)}},un=function(){return function(n){return t=n,!!Array.isArray(t)&&!!(n||[]).length;var t}},pn=function(){return function(n){return null==n||!!sn(n)&&(!n||an.test(n))}};e.d(t,"a",function(){return ln});var ln=function(n){var t=n.code;return s.a.createElement(c.d,{code:t.trim(),scope:{React:s.a,Formiz:en,FormizStep:rn,useForm:Y,useField:tn,validations:r},theme:p.a,noInline:!0},s.a.createElement("div",{className:"relative mx-4 xxl:mx-0 z-20 shadow-lg rounded-lg overflow-hidden bg-white"},s.a.createElement(c.c,null)),s.a.createElement(c.b,null),s.a.createElement("div",{className:"relative z-10 xxl:-mx-20 -mt-6 px-2 pb-2 pt-10 rounded-lg overflow-hidden",style:{background:"#011627"}},s.a.createElement(c.a,null)))};ln.propTypes={code:o.a.string.isRequired}},78:function(n,t,e){var r={"./Binary_Property/ASCII.js":79,"./Binary_Property/ASCII_Hex_Digit.js":80,"./Binary_Property/Alphabetic.js":81,"./Binary_Property/Any.js":82,"./Binary_Property/Assigned.js":83,"./Binary_Property/Bidi_Control.js":84,"./Binary_Property/Bidi_Mirrored.js":85,"./Binary_Property/Case_Ignorable.js":86,"./Binary_Property/Cased.js":87,"./Binary_Property/Changes_When_Casefolded.js":88,"./Binary_Property/Changes_When_Casemapped.js":89,"./Binary_Property/Changes_When_Lowercased.js":90,"./Binary_Property/Changes_When_NFKC_Casefolded.js":91,"./Binary_Property/Changes_When_Titlecased.js":92,"./Binary_Property/Changes_When_Uppercased.js":93,"./Binary_Property/Dash.js":94,"./Binary_Property/Default_Ignorable_Code_Point.js":95,"./Binary_Property/Deprecated.js":96,"./Binary_Property/Diacritic.js":97,"./Binary_Property/Emoji.js":98,"./Binary_Property/Emoji_Component.js":99,"./Binary_Property/Emoji_Modifier.js":100,"./Binary_Property/Emoji_Modifier_Base.js":101,"./Binary_Property/Emoji_Presentation.js":102,"./Binary_Property/Extended_Pictographic.js":103,"./Binary_Property/Extender.js":104,"./Binary_Property/Grapheme_Base.js":105,"./Binary_Property/Grapheme_Extend.js":106,"./Binary_Property/Hex_Digit.js":107,"./Binary_Property/IDS_Binary_Operator.js":108,"./Binary_Property/IDS_Trinary_Operator.js":109,"./Binary_Property/ID_Continue.js":110,"./Binary_Property/ID_Start.js":111,"./Binary_Property/Ideographic.js":112,"./Binary_Property/Join_Control.js":113,"./Binary_Property/Logical_Order_Exception.js":114,"./Binary_Property/Lowercase.js":115,"./Binary_Property/Math.js":116,"./Binary_Property/Noncharacter_Code_Point.js":117,"./Binary_Property/Pattern_Syntax.js":118,"./Binary_Property/Pattern_White_Space.js":119,"./Binary_Property/Quotation_Mark.js":120,"./Binary_Property/Radical.js":121,"./Binary_Property/Regional_Indicator.js":122,"./Binary_Property/Sentence_Terminal.js":123,"./Binary_Property/Soft_Dotted.js":124,"./Binary_Property/Terminal_Punctuation.js":125,"./Binary_Property/Unified_Ideograph.js":126,"./Binary_Property/Uppercase.js":127,"./Binary_Property/Variation_Selector.js":128,"./Binary_Property/White_Space.js":129,"./Binary_Property/XID_Continue.js":130,"./Binary_Property/XID_Start.js":131,"./General_Category/Cased_Letter.js":132,"./General_Category/Close_Punctuation.js":133,"./General_Category/Connector_Punctuation.js":134,"./General_Category/Control.js":135,"./General_Category/Currency_Symbol.js":136,"./General_Category/Dash_Punctuation.js":137,"./General_Category/Decimal_Number.js":138,"./General_Category/Enclosing_Mark.js":139,"./General_Category/Final_Punctuation.js":140,"./General_Category/Format.js":141,"./General_Category/Initial_Punctuation.js":142,"./General_Category/Letter.js":143,"./General_Category/Letter_Number.js":144,"./General_Category/Line_Separator.js":145,"./General_Category/Lowercase_Letter.js":146,"./General_Category/Mark.js":147,"./General_Category/Math_Symbol.js":148,"./General_Category/Modifier_Letter.js":149,"./General_Category/Modifier_Symbol.js":150,"./General_Category/Nonspacing_Mark.js":151,"./General_Category/Number.js":152,"./General_Category/Open_Punctuation.js":153,"./General_Category/Other.js":154,"./General_Category/Other_Letter.js":155,"./General_Category/Other_Number.js":156,"./General_Category/Other_Punctuation.js":157,"./General_Category/Other_Symbol.js":158,"./General_Category/Paragraph_Separator.js":159,"./General_Category/Private_Use.js":160,"./General_Category/Punctuation.js":161,"./General_Category/Separator.js":162,"./General_Category/Space_Separator.js":163,"./General_Category/Spacing_Mark.js":164,"./General_Category/Surrogate.js":165,"./General_Category/Symbol.js":166,"./General_Category/Titlecase_Letter.js":167,"./General_Category/Unassigned.js":168,"./General_Category/Uppercase_Letter.js":169,"./Script/Adlam.js":170,"./Script/Ahom.js":171,"./Script/Anatolian_Hieroglyphs.js":172,"./Script/Arabic.js":173,"./Script/Armenian.js":174,"./Script/Avestan.js":175,"./Script/Balinese.js":176,"./Script/Bamum.js":177,"./Script/Bassa_Vah.js":178,"./Script/Batak.js":179,"./Script/Bengali.js":180,"./Script/Bhaiksuki.js":181,"./Script/Bopomofo.js":182,"./Script/Brahmi.js":183,"./Script/Braille.js":184,"./Script/Buginese.js":185,"./Script/Buhid.js":186,"./Script/Canadian_Aboriginal.js":187,"./Script/Carian.js":188,"./Script/Caucasian_Albanian.js":189,"./Script/Chakma.js":190,"./Script/Cham.js":191,"./Script/Cherokee.js":192,"./Script/Common.js":193,"./Script/Coptic.js":194,"./Script/Cuneiform.js":195,"./Script/Cypriot.js":196,"./Script/Cyrillic.js":197,"./Script/Deseret.js":198,"./Script/Devanagari.js":199,"./Script/Dogra.js":200,"./Script/Duployan.js":201,"./Script/Egyptian_Hieroglyphs.js":202,"./Script/Elbasan.js":203,"./Script/Elymaic.js":204,"./Script/Ethiopic.js":205,"./Script/Georgian.js":206,"./Script/Glagolitic.js":207,"./Script/Gothic.js":208,"./Script/Grantha.js":209,"./Script/Greek.js":210,"./Script/Gujarati.js":211,"./Script/Gunjala_Gondi.js":212,"./Script/Gurmukhi.js":213,"./Script/Han.js":214,"./Script/Hangul.js":215,"./Script/Hanifi_Rohingya.js":216,"./Script/Hanunoo.js":217,"./Script/Hatran.js":218,"./Script/Hebrew.js":219,"./Script/Hiragana.js":220,"./Script/Imperial_Aramaic.js":221,"./Script/Inherited.js":222,"./Script/Inscriptional_Pahlavi.js":223,"./Script/Inscriptional_Parthian.js":224,"./Script/Javanese.js":225,"./Script/Kaithi.js":226,"./Script/Kannada.js":227,"./Script/Katakana.js":228,"./Script/Kayah_Li.js":229,"./Script/Kharoshthi.js":230,"./Script/Khmer.js":231,"./Script/Khojki.js":232,"./Script/Khudawadi.js":233,"./Script/Lao.js":234,"./Script/Latin.js":235,"./Script/Lepcha.js":236,"./Script/Limbu.js":237,"./Script/Linear_A.js":238,"./Script/Linear_B.js":239,"./Script/Lisu.js":240,"./Script/Lycian.js":241,"./Script/Lydian.js":242,"./Script/Mahajani.js":243,"./Script/Makasar.js":244,"./Script/Malayalam.js":245,"./Script/Mandaic.js":246,"./Script/Manichaean.js":247,"./Script/Marchen.js":248,"./Script/Masaram_Gondi.js":249,"./Script/Medefaidrin.js":250,"./Script/Meetei_Mayek.js":251,"./Script/Mende_Kikakui.js":252,"./Script/Meroitic_Cursive.js":253,"./Script/Meroitic_Hieroglyphs.js":254,"./Script/Miao.js":255,"./Script/Modi.js":256,"./Script/Mongolian.js":257,"./Script/Mro.js":258,"./Script/Multani.js":259,"./Script/Myanmar.js":260,"./Script/Nabataean.js":261,"./Script/Nandinagari.js":262,"./Script/New_Tai_Lue.js":263,"./Script/Newa.js":264,"./Script/Nko.js":265,"./Script/Nushu.js":266,"./Script/Nyiakeng_Puachue_Hmong.js":267,"./Script/Ogham.js":268,"./Script/Ol_Chiki.js":269,"./Script/Old_Hungarian.js":270,"./Script/Old_Italic.js":271,"./Script/Old_North_Arabian.js":272,"./Script/Old_Permic.js":273,"./Script/Old_Persian.js":274,"./Script/Old_Sogdian.js":275,"./Script/Old_South_Arabian.js":276,"./Script/Old_Turkic.js":277,"./Script/Oriya.js":278,"./Script/Osage.js":279,"./Script/Osmanya.js":280,"./Script/Pahawh_Hmong.js":281,"./Script/Palmyrene.js":282,"./Script/Pau_Cin_Hau.js":283,"./Script/Phags_Pa.js":284,"./Script/Phoenician.js":285,"./Script/Psalter_Pahlavi.js":286,"./Script/Rejang.js":287,"./Script/Runic.js":288,"./Script/Samaritan.js":289,"./Script/Saurashtra.js":290,"./Script/Sharada.js":291,"./Script/Shavian.js":292,"./Script/Siddham.js":293,"./Script/SignWriting.js":294,"./Script/Sinhala.js":295,"./Script/Sogdian.js":296,"./Script/Sora_Sompeng.js":297,"./Script/Soyombo.js":298,"./Script/Sundanese.js":299,"./Script/Syloti_Nagri.js":300,"./Script/Syriac.js":301,"./Script/Tagalog.js":302,"./Script/Tagbanwa.js":303,"./Script/Tai_Le.js":304,"./Script/Tai_Tham.js":305,"./Script/Tai_Viet.js":306,"./Script/Takri.js":307,"./Script/Tamil.js":308,"./Script/Tangut.js":309,"./Script/Telugu.js":310,"./Script/Thaana.js":311,"./Script/Thai.js":312,"./Script/Tibetan.js":313,"./Script/Tifinagh.js":314,"./Script/Tirhuta.js":315,"./Script/Ugaritic.js":316,"./Script/Vai.js":317,"./Script/Wancho.js":318,"./Script/Warang_Citi.js":319,"./Script/Yi.js":320,"./Script/Zanabazar_Square.js":321,"./Script_Extensions/Adlam.js":322,"./Script_Extensions/Ahom.js":323,"./Script_Extensions/Anatolian_Hieroglyphs.js":324,"./Script_Extensions/Arabic.js":325,"./Script_Extensions/Armenian.js":326,"./Script_Extensions/Avestan.js":327,"./Script_Extensions/Balinese.js":328,"./Script_Extensions/Bamum.js":329,"./Script_Extensions/Bassa_Vah.js":330,"./Script_Extensions/Batak.js":331,"./Script_Extensions/Bengali.js":332,"./Script_Extensions/Bhaiksuki.js":333,"./Script_Extensions/Bopomofo.js":334,"./Script_Extensions/Brahmi.js":335,"./Script_Extensions/Braille.js":336,"./Script_Extensions/Buginese.js":337,"./Script_Extensions/Buhid.js":338,"./Script_Extensions/Canadian_Aboriginal.js":339,"./Script_Extensions/Carian.js":340,"./Script_Extensions/Caucasian_Albanian.js":341,"./Script_Extensions/Chakma.js":342,"./Script_Extensions/Cham.js":343,"./Script_Extensions/Cherokee.js":344,"./Script_Extensions/Common.js":345,"./Script_Extensions/Coptic.js":346,"./Script_Extensions/Cuneiform.js":347,"./Script_Extensions/Cypriot.js":348,"./Script_Extensions/Cyrillic.js":349,"./Script_Extensions/Deseret.js":350,"./Script_Extensions/Devanagari.js":351,"./Script_Extensions/Dogra.js":352,"./Script_Extensions/Duployan.js":353,"./Script_Extensions/Egyptian_Hieroglyphs.js":354,"./Script_Extensions/Elbasan.js":355,"./Script_Extensions/Elymaic.js":356,"./Script_Extensions/Ethiopic.js":357,"./Script_Extensions/Georgian.js":358,"./Script_Extensions/Glagolitic.js":359,"./Script_Extensions/Gothic.js":360,"./Script_Extensions/Grantha.js":361,"./Script_Extensions/Greek.js":362,"./Script_Extensions/Gujarati.js":363,"./Script_Extensions/Gunjala_Gondi.js":364,"./Script_Extensions/Gurmukhi.js":365,"./Script_Extensions/Han.js":366,"./Script_Extensions/Hangul.js":367,"./Script_Extensions/Hanifi_Rohingya.js":368,"./Script_Extensions/Hanunoo.js":369,"./Script_Extensions/Hatran.js":370,"./Script_Extensions/Hebrew.js":371,"./Script_Extensions/Hiragana.js":372,"./Script_Extensions/Imperial_Aramaic.js":373,"./Script_Extensions/Inherited.js":374,"./Script_Extensions/Inscriptional_Pahlavi.js":375,"./Script_Extensions/Inscriptional_Parthian.js":376,"./Script_Extensions/Javanese.js":377,"./Script_Extensions/Kaithi.js":378,"./Script_Extensions/Kannada.js":379,"./Script_Extensions/Katakana.js":380,"./Script_Extensions/Kayah_Li.js":381,"./Script_Extensions/Kharoshthi.js":382,"./Script_Extensions/Khmer.js":383,"./Script_Extensions/Khojki.js":384,"./Script_Extensions/Khudawadi.js":385,"./Script_Extensions/Lao.js":386,"./Script_Extensions/Latin.js":387,"./Script_Extensions/Lepcha.js":388,"./Script_Extensions/Limbu.js":389,"./Script_Extensions/Linear_A.js":390,"./Script_Extensions/Linear_B.js":391,"./Script_Extensions/Lisu.js":392,"./Script_Extensions/Lycian.js":393,"./Script_Extensions/Lydian.js":394,"./Script_Extensions/Mahajani.js":395,"./Script_Extensions/Makasar.js":396,"./Script_Extensions/Malayalam.js":397,"./Script_Extensions/Mandaic.js":398,"./Script_Extensions/Manichaean.js":399,"./Script_Extensions/Marchen.js":400,"./Script_Extensions/Masaram_Gondi.js":401,"./Script_Extensions/Medefaidrin.js":402,"./Script_Extensions/Meetei_Mayek.js":403,"./Script_Extensions/Mende_Kikakui.js":404,"./Script_Extensions/Meroitic_Cursive.js":405,"./Script_Extensions/Meroitic_Hieroglyphs.js":406,"./Script_Extensions/Miao.js":407,"./Script_Extensions/Modi.js":408,"./Script_Extensions/Mongolian.js":409,"./Script_Extensions/Mro.js":410,"./Script_Extensions/Multani.js":411,"./Script_Extensions/Myanmar.js":412,"./Script_Extensions/Nabataean.js":413,"./Script_Extensions/Nandinagari.js":414,"./Script_Extensions/New_Tai_Lue.js":415,"./Script_Extensions/Newa.js":416,"./Script_Extensions/Nko.js":417,"./Script_Extensions/Nushu.js":418,"./Script_Extensions/Nyiakeng_Puachue_Hmong.js":419,"./Script_Extensions/Ogham.js":420,"./Script_Extensions/Ol_Chiki.js":421,"./Script_Extensions/Old_Hungarian.js":422,"./Script_Extensions/Old_Italic.js":423,"./Script_Extensions/Old_North_Arabian.js":424,"./Script_Extensions/Old_Permic.js":425,"./Script_Extensions/Old_Persian.js":426,"./Script_Extensions/Old_Sogdian.js":427,"./Script_Extensions/Old_South_Arabian.js":428,"./Script_Extensions/Old_Turkic.js":429,"./Script_Extensions/Oriya.js":430,"./Script_Extensions/Osage.js":431,"./Script_Extensions/Osmanya.js":432,"./Script_Extensions/Pahawh_Hmong.js":433,"./Script_Extensions/Palmyrene.js":434,"./Script_Extensions/Pau_Cin_Hau.js":435,"./Script_Extensions/Phags_Pa.js":436,"./Script_Extensions/Phoenician.js":437,"./Script_Extensions/Psalter_Pahlavi.js":438,"./Script_Extensions/Rejang.js":439,"./Script_Extensions/Runic.js":440,"./Script_Extensions/Samaritan.js":441,"./Script_Extensions/Saurashtra.js":442,"./Script_Extensions/Sharada.js":443,"./Script_Extensions/Shavian.js":444,"./Script_Extensions/Siddham.js":445,"./Script_Extensions/SignWriting.js":446,"./Script_Extensions/Sinhala.js":447,"./Script_Extensions/Sogdian.js":448,"./Script_Extensions/Sora_Sompeng.js":449,"./Script_Extensions/Soyombo.js":450,"./Script_Extensions/Sundanese.js":451,"./Script_Extensions/Syloti_Nagri.js":452,"./Script_Extensions/Syriac.js":453,"./Script_Extensions/Tagalog.js":454,"./Script_Extensions/Tagbanwa.js":455,"./Script_Extensions/Tai_Le.js":456,"./Script_Extensions/Tai_Tham.js":457,"./Script_Extensions/Tai_Viet.js":458,"./Script_Extensions/Takri.js":459,"./Script_Extensions/Tamil.js":460,"./Script_Extensions/Tangut.js":461,"./Script_Extensions/Telugu.js":462,"./Script_Extensions/Thaana.js":463,"./Script_Extensions/Thai.js":464,"./Script_Extensions/Tibetan.js":465,"./Script_Extensions/Tifinagh.js":466,"./Script_Extensions/Tirhuta.js":467,"./Script_Extensions/Ugaritic.js":468,"./Script_Extensions/Vai.js":469,"./Script_Extensions/Wancho.js":470,"./Script_Extensions/Warang_Citi.js":471,"./Script_Extensions/Yi.js":472,"./Script_Extensions/Zanabazar_Square.js":473,"./index.js":474,"./unicode-version.js":475};function i(n){var t=s(n);return e(t)}function s(n){if(!e.o(r,n)){var t=new Error("Cannot find module '"+n+"'");throw t.code="MODULE_NOT_FOUND",t}return r[n]}i.keys=function(){return Object.keys(r)},i.resolve=s,n.exports=i,i.id=78}}]);