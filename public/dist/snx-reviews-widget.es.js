!function(){"use strict";try{if("undefined"!=typeof document){var t=document.createElement("style");t.id="snx-reviews-widget-styles",t.appendChild(document.createTextNode('.yarl__fullsize{height:100%;width:100%}.yarl__relative{position:relative}.yarl__portal{bottom:0;left:0;opacity:0;overflow:hidden;position:fixed;right:0;top:0;transition:opacity var(--yarl__fade_animation_duration,.25s) var(--yarl__fade_animation_timing_function,ease);z-index:var(--yarl__portal_zindex,9999)}.yarl__portal_open{opacity:1}.yarl__container{background-color:var(--yarl__container_background_color,var(--yarl__color_backdrop,#000));bottom:0;left:0;outline:none;overflow:hidden;overscroll-behavior:var(--yarl__controller_overscroll_behavior,contain);position:absolute;right:0;top:0;touch-action:var(--yarl__controller_touch_action,none);-webkit-user-select:none;-moz-user-select:none;user-select:none}.yarl__carousel{align-content:center;align-items:stretch;display:flex;flex:0 0 auto;height:100%;justify-content:center;opacity:var(--yarl__pull_opacity,1);transform:translate(var(--yarl__swipe_offset,0),var(--yarl__pull_offset,0));width:calc(100% + (var(--yarl__carousel_slides_count) - 1)*(100% + var(--yarl__carousel_spacing_px, 0)*1px + var(--yarl__carousel_spacing_percent, 0)*1%))}.yarl__carousel_with_slides{-moz-column-gap:calc(var(--yarl__carousel_spacing_px, 0)*1px + 100/(var(--yarl__carousel_slides_count)*100 + (var(--yarl__carousel_slides_count) - 1)*var(--yarl__carousel_spacing_percent, 0))*var(--yarl__carousel_spacing_percent, 0)*1%);column-gap:calc(var(--yarl__carousel_spacing_px, 0)*1px + 100/(var(--yarl__carousel_slides_count)*100 + (var(--yarl__carousel_slides_count) - 1)*var(--yarl__carousel_spacing_percent, 0))*var(--yarl__carousel_spacing_percent, 0)*1%)}.yarl__flex_center{align-content:center;align-items:center;display:flex;justify-content:center}.yarl__slide{flex:1;overflow:hidden;padding:calc(var(--yarl__carousel_padding_px, 0)*1px + 100/(var(--yarl__carousel_slides_count)*100 + (var(--yarl__carousel_slides_count) - 1)*var(--yarl__carousel_spacing_percent, 0))*var(--yarl__carousel_padding_percent, 0)*1%);position:relative}[dir=rtl] .yarl__slide{--yarl__direction:-1}.yarl__slide_image{max-height:100%;max-width:100%;-o-object-fit:contain;object-fit:contain;touch-action:var(--yarl__controller_touch_action,none);-moz-user-select:none;user-select:none;-webkit-user-select:none;-webkit-touch-callout:none}.yarl__slide_image_cover{height:100%;-o-object-fit:cover;object-fit:cover;width:100%}.yarl__slide_image_loading{opacity:0}@media screen and (min-width:800px){.yarl__slide_wrapper:not(.yarl__slide_wrapper_interactive) .yarl__slide_image{-webkit-backface-visibility:hidden;-webkit-transform:translateZ(0);-webkit-transform-style:preserve-3d}}.yarl__slide_placeholder{left:50%;line-height:0;position:absolute;top:50%;transform:translate(-50%) translateY(-50%)}.yarl__slide_loading{animation:yarl__delayed_fadein 1s linear;color:var(--yarl__slide_icon_loading_color,var(--yarl__color_button,hsla(0,0%,100%,.8)))}.yarl__slide_loading line{animation:yarl__stroke_opacity 1s linear infinite}.yarl__slide_loading line:first-of-type{animation-delay:-1.875s}.yarl__slide_loading line:nth-of-type(2){animation-delay:-1.75s}.yarl__slide_loading line:nth-of-type(3){animation-delay:-1.625s}.yarl__slide_loading line:nth-of-type(4){animation-delay:-1.5s}.yarl__slide_loading line:nth-of-type(5){animation-delay:-1.375s}.yarl__slide_loading line:nth-of-type(6){animation-delay:-1.25s}.yarl__slide_loading line:nth-of-type(7){animation-delay:-1.125s}.yarl__slide_loading line:nth-of-type(8){animation-delay:-1s}.yarl__slide_error{color:var(--yarl__slide_icon_error_color,red);height:var(--yarl__slide_icon_error_size,48px);width:var(--yarl__slide_icon_error_size,48px)}@media (prefers-reduced-motion){.yarl__portal,.yarl__slide{transition:unset}.yarl__slide_loading,.yarl__slide_loading line{animation:unset}}.yarl__toolbar{bottom:auto;display:flex;justify-content:flex-end;left:auto;padding:var(--yarl__toolbar_padding,8px);position:absolute;right:0;top:0}[dir=rtl] .yarl__toolbar{bottom:auto;left:0;right:auto;top:0}.yarl__icon{height:var(--yarl__icon_size,32px);width:var(--yarl__icon_size,32px)}.yarl__button{-webkit-appearance:none;-moz-appearance:none;appearance:none;background-color:var(--yarl__button_background_color,transparent);border:var(--yarl__button_border,0);color:var(--yarl__color_button,hsla(0,0%,100%,.8));cursor:pointer;filter:var(--yarl__button_filter,drop-shadow(2px 2px 2px rgba(0,0,0,.8)));line-height:0;margin:var(--yarl__button_margin,0);outline:none;padding:var(--yarl__button_padding,8px);-webkit-tap-highlight-color:transparent}.yarl__button:focus{color:var(--yarl__color_button_active,#fff)}.yarl__button:focus:not(:focus-visible){color:var(--yarl__color_button,hsla(0,0%,100%,.8))}.yarl__button:focus-visible{color:var(--yarl__color_button_active,#fff)}@media (hover:hover){.yarl__button:focus-visible:hover,.yarl__button:focus:hover,.yarl__button:hover{color:var(--yarl__color_button_active,#fff)}}.yarl__button:disabled{color:var(--yarl__color_button_disabled,hsla(0,0%,100%,.4));cursor:default}.yarl__navigation_next,.yarl__navigation_prev{padding:var(--yarl__navigation_button_padding,24px 16px);position:absolute;top:50%;transform:translateY(-50%)}.yarl__navigation_prev{left:0}[dir=rtl] .yarl__navigation_prev{left:unset;right:0;transform:translateY(-50%) rotate(180deg)}.yarl__navigation_next{right:0}[dir=rtl] .yarl__navigation_next{left:0;right:unset;transform:translateY(-50%) rotate(180deg)}.yarl__no_scroll{height:100%;overflow:hidden;overscroll-behavior:none}@keyframes yarl__delayed_fadein{0%{opacity:0}80%{opacity:0}to{opacity:1}}@keyframes yarl__stroke_opacity{0%{stroke-opacity:1}to{stroke-opacity:.125}}/*! tailwindcss v4.1.13 | MIT License | https://tailwindcss.com */@layer properties{@supports (((-webkit-hyphens:none)) and (not (margin-trim:inline))) or ((-moz-orient:inline) and (not (color:rgb(from red r g b)))){*,:before,:after,::backdrop{--tw-space-y-reverse:0;--tw-border-style:solid;--tw-gradient-position:initial;--tw-gradient-from:#0000;--tw-gradient-via:#0000;--tw-gradient-to:#0000;--tw-gradient-stops:initial;--tw-gradient-via-stops:initial;--tw-gradient-from-position:0%;--tw-gradient-via-position:50%;--tw-gradient-to-position:100%;--tw-leading:initial;--tw-font-weight:initial;--tw-tracking:initial;--tw-shadow:0 0 #0000;--tw-shadow-color:initial;--tw-shadow-alpha:100%;--tw-inset-shadow:0 0 #0000;--tw-inset-shadow-color:initial;--tw-inset-shadow-alpha:100%;--tw-ring-color:initial;--tw-ring-shadow:0 0 #0000;--tw-inset-ring-color:initial;--tw-inset-ring-shadow:0 0 #0000;--tw-ring-inset:initial;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-offset-shadow:0 0 #0000;--tw-blur:initial;--tw-brightness:initial;--tw-contrast:initial;--tw-grayscale:initial;--tw-hue-rotate:initial;--tw-invert:initial;--tw-opacity:initial;--tw-saturate:initial;--tw-sepia:initial;--tw-drop-shadow:initial;--tw-drop-shadow-color:initial;--tw-drop-shadow-alpha:100%;--tw-drop-shadow-size:initial;--tw-backdrop-blur:initial;--tw-backdrop-brightness:initial;--tw-backdrop-contrast:initial;--tw-backdrop-grayscale:initial;--tw-backdrop-hue-rotate:initial;--tw-backdrop-invert:initial;--tw-backdrop-opacity:initial;--tw-backdrop-saturate:initial;--tw-backdrop-sepia:initial;--tw-duration:initial}}}@layer theme{:root,:host{--tw-font-sans:ui-sans-serif,system-ui,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji";--tw-font-mono:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace;--tw-color-red-50:oklch(97.1% .013 17.38);--tw-color-red-200:oklch(88.5% .062 18.334);--tw-color-red-600:oklch(57.7% .245 27.325);--tw-color-red-700:oklch(50.5% .213 27.518);--tw-color-red-800:oklch(44.4% .177 26.899);--tw-color-amber-50:oklch(98.7% .022 95.277);--tw-color-amber-100:oklch(96.2% .059 95.617);--tw-color-amber-200:oklch(92.4% .12 95.746);--tw-color-amber-400:oklch(82.8% .189 84.429);--tw-color-amber-500:oklch(76.9% .188 70.08);--tw-color-amber-700:oklch(55.5% .163 48.998);--tw-color-amber-900:oklch(41.4% .112 45.904);--tw-color-green-50:oklch(98.2% .018 155.826);--tw-color-green-500:oklch(72.3% .219 149.579);--tw-color-emerald-50:oklch(97.9% .021 166.113);--tw-color-emerald-200:oklch(90.5% .093 164.15);--tw-color-emerald-500:oklch(69.6% .17 162.48);--tw-color-emerald-700:oklch(50.8% .118 165.612);--tw-color-emerald-800:oklch(43.2% .095 166.913);--tw-color-blue-500:oklch(62.3% .214 259.815);--tw-color-blue-600:oklch(54.6% .245 262.881);--tw-color-slate-50:oklch(98.4% .003 247.858);--tw-color-slate-100:oklch(96.8% .007 247.896);--tw-color-slate-200:oklch(92.9% .013 255.508);--tw-color-slate-300:oklch(86.9% .022 252.894);--tw-color-slate-400:oklch(70.4% .04 256.788);--tw-color-slate-500:oklch(55.4% .046 257.417);--tw-color-slate-600:oklch(44.6% .043 257.281);--tw-color-slate-700:oklch(37.2% .044 257.287);--tw-color-slate-800:oklch(27.9% .041 260.031);--tw-color-slate-900:oklch(20.8% .042 265.755);--tw-color-gray-500:oklch(55.1% .027 264.364);--tw-color-black:#000;--tw-color-white:#fff;--tw-spacing:.25rem;--tw-container-md:28rem;--tw-container-lg:32rem;--tw-container-2xl:42rem;--tw-container-3xl:48rem;--tw-text-xs:.75rem;--tw-text-xs--line-height:calc(1/.75);--tw-text-sm:.875rem;--tw-text-sm--line-height:calc(1.25/.875);--tw-text-base:1rem;--tw-text-base--line-height: 1.5 ;--tw-text-lg:1.125rem;--tw-text-lg--line-height:calc(1.75/1.125);--tw-text-xl:1.25rem;--tw-text-xl--line-height:calc(1.75/1.25);--tw-text-2xl:1.5rem;--tw-text-2xl--line-height:calc(2/1.5);--tw-text-5xl:3rem;--tw-text-5xl--line-height:1;--tw-font-weight-light:300;--tw-font-weight-normal:400;--tw-font-weight-medium:500;--tw-font-weight-semibold:600;--tw-font-weight-bold:700;--tw-tracking-tight:-.025em;--tw-tracking-wide:.025em;--tw-leading-tight:1.25;--tw-leading-relaxed:1.625;--tw-radius-sm:.25rem;--tw-radius-md:.375rem;--tw-radius-lg:.5rem;--tw-radius-xl:.75rem;--tw-radius-2xl:1rem;--tw-radius-3xl:1.5rem;--tw-drop-shadow-sm:0 1px 2px #00000026;--tw-animate-pulse:pulse 2s cubic-bezier(.4,0,.6,1)infinite;--tw-blur-sm:8px;--tw-blur-md:12px;--tw-default-transition-duration:.15s;--tw-default-transition-timing-function:cubic-bezier(.4,0,.2,1);--tw-default-font-family:var(--tw-font-sans);--tw-default-mono-font-family:var(--tw-font-mono)}}@layer base{*,:after,:before,::backdrop{box-sizing:border-box;border:0 solid;margin:0;padding:0}::file-selector-button{box-sizing:border-box;border:0 solid;margin:0;padding:0}html,:host{-webkit-text-size-adjust:100%;-moz-tab-size:4;tab-size:4;line-height:1.5;font-family:var(--tw-default-font-family,ui-sans-serif,system-ui,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji");font-feature-settings:var(--tw-default-font-feature-settings,normal);font-variation-settings:var(--tw-default-font-variation-settings,normal);-webkit-tap-highlight-color:transparent}hr{height:0;color:inherit;border-top-width:1px}abbr:where([title]){-webkit-text-decoration:underline dotted;text-decoration:underline dotted}h1,h2,h3,h4,h5,h6{font-size:inherit;font-weight:inherit}a{color:inherit;-webkit-text-decoration:inherit;text-decoration:inherit}b,strong{font-weight:bolder}code,kbd,samp,pre{font-family:var(--tw-default-mono-font-family,ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace);font-feature-settings:var(--tw-default-mono-font-feature-settings,normal);font-variation-settings:var(--tw-default-mono-font-variation-settings,normal);font-size:1em}small{font-size:80%}sub,sup{vertical-align:baseline;font-size:75%;line-height:0;position:relative}sub{bottom:-.25em}sup{top:-.5em}table{text-indent:0;border-color:inherit;border-collapse:collapse}:-moz-focusring{outline:auto}progress{vertical-align:baseline}summary{display:list-item}ol,ul,menu{list-style:none}img,svg,video,canvas,audio,iframe,embed,object{vertical-align:middle;display:block}img,video{max-width:100%;height:auto}button,input,select,optgroup,textarea{font:inherit;font-feature-settings:inherit;font-variation-settings:inherit;letter-spacing:inherit;color:inherit;opacity:1;background-color:#0000;border-radius:0}::file-selector-button{font:inherit;font-feature-settings:inherit;font-variation-settings:inherit;letter-spacing:inherit;color:inherit;opacity:1;background-color:#0000;border-radius:0}:where(select:is([multiple],[size])) optgroup{font-weight:bolder}:where(select:is([multiple],[size])) optgroup option{padding-inline-start:20px}::file-selector-button{margin-inline-end:4px}::placeholder{opacity:1}@supports (not ((-webkit-appearance:-apple-pay-button))) or (contain-intrinsic-size:1px){::placeholder{color:currentColor}@supports (color:color-mix(in lab,red,red)){::placeholder{color:color-mix(in oklab,currentcolor 50%,transparent)}}}textarea{resize:vertical}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-date-and-time-value{min-height:1lh;text-align:inherit}::-webkit-datetime-edit{display:inline-flex}::-webkit-datetime-edit-fields-wrapper{padding:0}::-webkit-datetime-edit{padding-block:0}::-webkit-datetime-edit-year-field{padding-block:0}::-webkit-datetime-edit-month-field{padding-block:0}::-webkit-datetime-edit-day-field{padding-block:0}::-webkit-datetime-edit-hour-field{padding-block:0}::-webkit-datetime-edit-minute-field{padding-block:0}::-webkit-datetime-edit-second-field{padding-block:0}::-webkit-datetime-edit-millisecond-field{padding-block:0}::-webkit-datetime-edit-meridiem-field{padding-block:0}::-webkit-calendar-picker-indicator{line-height:1}:-moz-ui-invalid{box-shadow:none}button,input:where([type=button],[type=reset],[type=submit]){-webkit-appearance:button;-moz-appearance:button;appearance:button}::file-selector-button{-webkit-appearance:button;-moz-appearance:button;appearance:button}::-webkit-inner-spin-button{height:auto}::-webkit-outer-spin-button{height:auto}[hidden]:where(:not([hidden=until-found])){display:none!important}}@layer components;@layer utilities{.tw\\:absolute{position:absolute}.tw\\:relative{position:relative}.tw\\:inset-0{inset:calc(var(--tw-spacing)*0)}.tw\\:mx-auto{margin-inline:auto}.tw\\:mt-1{margin-top:calc(var(--tw-spacing)*1)}.tw\\:mt-3{margin-top:calc(var(--tw-spacing)*3)}.tw\\:mt-4{margin-top:calc(var(--tw-spacing)*4)}.tw\\:mt-8{margin-top:calc(var(--tw-spacing)*8)}.tw\\:-mr-1{margin-right:calc(var(--tw-spacing)*-1)}.tw\\:mr-1{margin-right:calc(var(--tw-spacing)*1)}.tw\\:mr-2{margin-right:calc(var(--tw-spacing)*2)}.tw\\:mb-1{margin-bottom:calc(var(--tw-spacing)*1)}.tw\\:mb-2{margin-bottom:calc(var(--tw-spacing)*2)}.tw\\:mb-3{margin-bottom:calc(var(--tw-spacing)*3)}.tw\\:mb-4{margin-bottom:calc(var(--tw-spacing)*4)}.tw\\:mb-5{margin-bottom:calc(var(--tw-spacing)*5)}.tw\\:mb-6{margin-bottom:calc(var(--tw-spacing)*6)}.tw\\:mb-8{margin-bottom:calc(var(--tw-spacing)*8)}.tw\\:ml-1{margin-left:calc(var(--tw-spacing)*1)}.tw\\:ml-3{margin-left:calc(var(--tw-spacing)*3)}.tw\\:block{display:block}.tw\\:flex{display:flex}.tw\\:grid{display:grid}.tw\\:hidden{display:none}.tw\\:inline-flex{display:inline-flex}.tw\\:h-1\\.5{height:calc(var(--tw-spacing)*1.5)}.tw\\:h-2{height:calc(var(--tw-spacing)*2)}.tw\\:h-4{height:calc(var(--tw-spacing)*4)}.tw\\:h-5{height:calc(var(--tw-spacing)*5)}.tw\\:h-6{height:calc(var(--tw-spacing)*6)}.tw\\:h-8{height:calc(var(--tw-spacing)*8)}.tw\\:h-10{height:calc(var(--tw-spacing)*10)}.tw\\:h-12{height:calc(var(--tw-spacing)*12)}.tw\\:h-16{height:calc(var(--tw-spacing)*16)}.tw\\:h-18{height:calc(var(--tw-spacing)*18)}.tw\\:h-full{height:100%}.tw\\:w-1\\.5{width:calc(var(--tw-spacing)*1.5)}.tw\\:w-2{width:calc(var(--tw-spacing)*2)}.tw\\:w-4{width:calc(var(--tw-spacing)*4)}.tw\\:w-4\\/6{width:66.6667%}.tw\\:w-5{width:calc(var(--tw-spacing)*5)}.tw\\:w-5\\/6{width:83.3333%}.tw\\:w-8{width:calc(var(--tw-spacing)*8)}.tw\\:w-12{width:calc(var(--tw-spacing)*12)}.tw\\:w-16{width:calc(var(--tw-spacing)*16)}.tw\\:w-18{width:calc(var(--tw-spacing)*18)}.tw\\:w-20{width:calc(var(--tw-spacing)*20)}.tw\\:w-24{width:calc(var(--tw-spacing)*24)}.tw\\:w-32{width:calc(var(--tw-spacing)*32)}.tw\\:w-48{width:calc(var(--tw-spacing)*48)}.tw\\:w-full{width:100%}.tw\\:max-w-2xl{max-width:var(--tw-container-2xl)}.tw\\:max-w-3xl{max-width:var(--tw-container-3xl)}.tw\\:max-w-lg{max-width:var(--tw-container-lg)}.tw\\:max-w-md{max-width:var(--tw-container-md)}.tw\\:min-w-0{min-width:calc(var(--tw-spacing)*0)}.tw\\:flex-1{flex:1}.tw\\:flex-shrink{flex-shrink:1}.tw\\:flex-shrink-0{flex-shrink:0}.tw\\:animate-pulse{animation:var(--tw-animate-pulse)}.tw\\:cursor-pointer{cursor:pointer}.tw\\:list-inside{list-style-position:inside}.tw\\:list-disc{list-style-type:disc}.tw\\:appearance-none{-webkit-appearance:none;-moz-appearance:none;appearance:none}.tw\\:grid-cols-1{grid-template-columns:repeat(1,minmax(0,1fr))}.tw\\:grid-cols-2{grid-template-columns:repeat(2,minmax(0,1fr))}.tw\\:grid-cols-3{grid-template-columns:repeat(3,minmax(0,1fr))}.tw\\:flex-col{flex-direction:column}.tw\\:flex-nowrap{flex-wrap:nowrap}.tw\\:flex-wrap{flex-wrap:wrap}.tw\\:items-center{align-items:center}.tw\\:items-start{align-items:flex-start}.tw\\:justify-between{justify-content:space-between}.tw\\:justify-center{justify-content:center}.tw\\:justify-end{justify-content:flex-end}.tw\\:gap-0\\.5{gap:calc(var(--tw-spacing)*.5)}.tw\\:gap-1{gap:calc(var(--tw-spacing)*1)}.tw\\:gap-1\\.5{gap:calc(var(--tw-spacing)*1.5)}.tw\\:gap-2{gap:calc(var(--tw-spacing)*2)}.tw\\:gap-3{gap:calc(var(--tw-spacing)*3)}.tw\\:gap-4{gap:calc(var(--tw-spacing)*4)}.tw\\:gap-6{gap:calc(var(--tw-spacing)*6)}.tw\\:gap-8{gap:calc(var(--tw-spacing)*8)}:where(.tw\\:space-y-1>:not(:last-child)){--tw-space-y-reverse:0;margin-block-start:calc(calc(var(--tw-spacing)*1)*var(--tw-space-y-reverse));margin-block-end:calc(calc(var(--tw-spacing)*1)*calc(1 - var(--tw-space-y-reverse)))}:where(.tw\\:space-y-2>:not(:last-child)){--tw-space-y-reverse:0;margin-block-start:calc(calc(var(--tw-spacing)*2)*var(--tw-space-y-reverse));margin-block-end:calc(calc(var(--tw-spacing)*2)*calc(1 - var(--tw-space-y-reverse)))}:where(.tw\\:space-y-4>:not(:last-child)){--tw-space-y-reverse:0;margin-block-start:calc(calc(var(--tw-spacing)*4)*var(--tw-space-y-reverse));margin-block-end:calc(calc(var(--tw-spacing)*4)*calc(1 - var(--tw-space-y-reverse)))}.tw\\:truncate{text-overflow:ellipsis;white-space:nowrap;overflow:hidden}.tw\\:overflow-hidden{overflow:hidden}.tw\\:rounded{border-radius:.25rem}.tw\\:rounded-2xl{border-radius:var(--tw-radius-2xl)}.tw\\:rounded-3xl{border-radius:var(--tw-radius-3xl)}.tw\\:rounded-full{border-radius:3.40282e38px}.tw\\:rounded-lg{border-radius:var(--tw-radius-lg)}.tw\\:rounded-md{border-radius:var(--tw-radius-md)}.tw\\:rounded-sm{border-radius:var(--tw-radius-sm)}.tw\\:rounded-xl{border-radius:var(--tw-radius-xl)}.tw\\:border{border-style:var(--tw-border-style);border-width:1px}.tw\\:border-t{border-top-style:var(--tw-border-style);border-top-width:1px}.tw\\:border-b{border-bottom-style:var(--tw-border-style);border-bottom-width:1px}.tw\\:border-none{--tw-border-style:none;border-style:none}.tw\\:border-emerald-200\\/50{border-color:var(--tw-color-emerald-200)}@supports (color:color-mix(in lab,red,red)){.tw\\:border-emerald-200\\/50{border-color:color-mix(in oklab,var(--tw-color-emerald-200)50%,transparent)}}.tw\\:border-red-200{border-color:var(--tw-color-red-200)}.tw\\:border-slate-100{border-color:var(--tw-color-slate-100)}.tw\\:border-slate-200\\/30{border-color:var(--tw-color-slate-200)}@supports (color:color-mix(in lab,red,red)){.tw\\:border-slate-200\\/30{border-color:color-mix(in oklab,var(--tw-color-slate-200)30%,transparent)}}.tw\\:border-slate-200\\/40{border-color:var(--tw-color-slate-200)}@supports (color:color-mix(in lab,red,red)){.tw\\:border-slate-200\\/40{border-color:color-mix(in oklab,var(--tw-color-slate-200)40%,transparent)}}.tw\\:border-slate-200\\/50{border-color:var(--tw-color-slate-200)}@supports (color:color-mix(in lab,red,red)){.tw\\:border-slate-200\\/50{border-color:color-mix(in oklab,var(--tw-color-slate-200)50%,transparent)}}.tw\\:border-white\\/20{border-color:var(--tw-color-white)}@supports (color:color-mix(in lab,red,red)){.tw\\:border-white\\/20{border-color:color-mix(in oklab,var(--tw-color-white)20%,transparent)}}.tw\\:bg-black\\/60{background-color:var(--tw-color-black)}@supports (color:color-mix(in lab,red,red)){.tw\\:bg-black\\/60{background-color:color-mix(in oklab,var(--tw-color-black)60%,transparent)}}.tw\\:bg-emerald-500{background-color:var(--tw-color-emerald-500)}.tw\\:bg-red-50{background-color:var(--tw-color-red-50)}.tw\\:bg-slate-50\\/80{background-color:var(--tw-color-slate-50)}@supports (color:color-mix(in lab,red,red)){.tw\\:bg-slate-50\\/80{background-color:color-mix(in oklab,var(--tw-color-slate-50)80%,transparent)}}.tw\\:bg-slate-100,.tw\\:bg-slate-100\\/60{background-color:var(--tw-color-slate-100)}@supports (color:color-mix(in lab,red,red)){.tw\\:bg-slate-100\\/60{background-color:color-mix(in oklab,var(--tw-color-slate-100)60%,transparent)}}.tw\\:bg-slate-200{background-color:var(--tw-color-slate-200)}.tw\\:bg-slate-300{background-color:var(--tw-color-slate-300)}.tw\\:bg-transparent{background-color:#0000}.tw\\:bg-white\\/95{background-color:var(--tw-color-white)}@supports (color:color-mix(in lab,red,red)){.tw\\:bg-white\\/95{background-color:color-mix(in oklab,var(--tw-color-white)95%,transparent)}}.tw\\:bg-gradient-to-br{--tw-gradient-position:to bottom right in oklab;background-image:linear-gradient(var(--tw-gradient-stops))}.tw\\:bg-gradient-to-r{--tw-gradient-position:to right in oklab;background-image:linear-gradient(var(--tw-gradient-stops))}.tw\\:from-amber-50\\/90{--tw-gradient-from:var(--tw-color-amber-50)}@supports (color:color-mix(in lab,red,red)){.tw\\:from-amber-50\\/90{--tw-gradient-from:color-mix(in oklab,var(--tw-color-amber-50)90%,transparent)}}.tw\\:from-amber-50\\/90{--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position),var(--tw-gradient-from)var(--tw-gradient-from-position),var(--tw-gradient-to)var(--tw-gradient-to-position))}.tw\\:from-emerald-50{--tw-gradient-from:var(--tw-color-emerald-50);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position),var(--tw-gradient-from)var(--tw-gradient-from-position),var(--tw-gradient-to)var(--tw-gradient-to-position))}.tw\\:from-slate-100{--tw-gradient-from:var(--tw-color-slate-100);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position),var(--tw-gradient-from)var(--tw-gradient-from-position),var(--tw-gradient-to)var(--tw-gradient-to-position))}.tw\\:from-slate-100\\/80{--tw-gradient-from:var(--tw-color-slate-100)}@supports (color:color-mix(in lab,red,red)){.tw\\:from-slate-100\\/80{--tw-gradient-from:color-mix(in oklab,var(--tw-color-slate-100)80%,transparent)}}.tw\\:from-slate-100\\/80{--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position),var(--tw-gradient-from)var(--tw-gradient-from-position),var(--tw-gradient-to)var(--tw-gradient-to-position))}.tw\\:to-amber-100\\/70{--tw-gradient-to:var(--tw-color-amber-100)}@supports (color:color-mix(in lab,red,red)){.tw\\:to-amber-100\\/70{--tw-gradient-to:color-mix(in oklab,var(--tw-color-amber-100)70%,transparent)}}.tw\\:to-amber-100\\/70{--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position),var(--tw-gradient-from)var(--tw-gradient-from-position),var(--tw-gradient-to)var(--tw-gradient-to-position))}.tw\\:to-green-50{--tw-gradient-to:var(--tw-color-green-50);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position),var(--tw-gradient-from)var(--tw-gradient-from-position),var(--tw-gradient-to)var(--tw-gradient-to-position))}.tw\\:to-slate-200{--tw-gradient-to:var(--tw-color-slate-200);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position),var(--tw-gradient-from)var(--tw-gradient-from-position),var(--tw-gradient-to)var(--tw-gradient-to-position))}.tw\\:to-slate-200\\/80{--tw-gradient-to:var(--tw-color-slate-200)}@supports (color:color-mix(in lab,red,red)){.tw\\:to-slate-200\\/80{--tw-gradient-to:color-mix(in oklab,var(--tw-color-slate-200)80%,transparent)}}.tw\\:to-slate-200\\/80{--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position),var(--tw-gradient-from)var(--tw-gradient-from-position),var(--tw-gradient-to)var(--tw-gradient-to-position))}.tw\\:fill-amber-400{fill:var(--tw-color-amber-400)}.tw\\:object-cover{object-fit:cover}.tw\\:p-1\\.5{padding:calc(var(--tw-spacing)*1.5)}.tw\\:p-3{padding:calc(var(--tw-spacing)*3)}.tw\\:p-4{padding:calc(var(--tw-spacing)*4)}.tw\\:p-6{padding:calc(var(--tw-spacing)*6)}.tw\\:px-1{padding-inline:calc(var(--tw-spacing)*1)}.tw\\:px-2{padding-inline:calc(var(--tw-spacing)*2)}.tw\\:px-2\\.5{padding-inline:calc(var(--tw-spacing)*2.5)}.tw\\:px-4{padding-inline:calc(var(--tw-spacing)*4)}.tw\\:py-0\\.5{padding-block:calc(var(--tw-spacing)*.5)}.tw\\:py-1{padding-block:calc(var(--tw-spacing)*1)}.tw\\:py-1\\.5{padding-block:calc(var(--tw-spacing)*1.5)}.tw\\:py-2\\.5{padding-block:calc(var(--tw-spacing)*2.5)}.tw\\:py-3{padding-block:calc(var(--tw-spacing)*3)}.tw\\:py-3\\.5{padding-block:calc(var(--tw-spacing)*3.5)}.tw\\:py-4{padding-block:calc(var(--tw-spacing)*4)}.tw\\:py-8{padding-block:calc(var(--tw-spacing)*8)}.tw\\:pt-4{padding-top:calc(var(--tw-spacing)*4)}.tw\\:pr-4{padding-right:calc(var(--tw-spacing)*4)}.tw\\:pb-3{padding-bottom:calc(var(--tw-spacing)*3)}.tw\\:pl-0{padding-left:calc(var(--tw-spacing)*0)}.tw\\:text-center{text-align:center}.tw\\:text-left{text-align:left}.tw\\:text-right{text-align:right}.tw\\:text-2xl{font-size:var(--tw-text-2xl);line-height:var(--tw-leading,var(--tw-text-2xl--line-height))}.tw\\:text-5xl{font-size:var(--tw-text-5xl);line-height:var(--tw-leading,var(--tw-text-5xl--line-height))}.tw\\:text-base{font-size:var(--tw-text-base);line-height:var(--tw-leading,var(--tw-text-base--line-height))}.tw\\:text-lg{font-size:var(--tw-text-lg);line-height:var(--tw-leading,var(--tw-text-lg--line-height))}.tw\\:text-sm{font-size:var(--tw-text-sm);line-height:var(--tw-leading,var(--tw-text-sm--line-height))}.tw\\:text-xl{font-size:var(--tw-text-xl);line-height:var(--tw-leading,var(--tw-text-xl--line-height))}.tw\\:text-xs{font-size:var(--tw-text-xs);line-height:var(--tw-leading,var(--tw-text-xs--line-height))}.tw\\:text-\\[9px\\]{font-size:9px}.tw\\:leading-none{--tw-leading:1;line-height:1}.tw\\:leading-relaxed{--tw-leading:var(--tw-leading-relaxed);line-height:var(--tw-leading-relaxed)}.tw\\:leading-tight{--tw-leading:var(--tw-leading-tight);line-height:var(--tw-leading-tight)}.tw\\:font-bold{--tw-font-weight:var(--tw-font-weight-bold);font-weight:var(--tw-font-weight-bold)}.tw\\:font-light{--tw-font-weight:var(--tw-font-weight-light);font-weight:var(--tw-font-weight-light)}.tw\\:font-medium{--tw-font-weight:var(--tw-font-weight-medium);font-weight:var(--tw-font-weight-medium)}.tw\\:font-normal{--tw-font-weight:var(--tw-font-weight-normal);font-weight:var(--tw-font-weight-normal)}.tw\\:font-semibold{--tw-font-weight:var(--tw-font-weight-semibold);font-weight:var(--tw-font-weight-semibold)}.tw\\:tracking-tight{--tw-tracking:var(--tw-tracking-tight);letter-spacing:var(--tw-tracking-tight)}.tw\\:tracking-wide{--tw-tracking:var(--tw-tracking-wide);letter-spacing:var(--tw-tracking-wide)}.tw\\:break-words{overflow-wrap:break-word}.tw\\:hyphens-auto{-webkit-hyphens:auto;hyphens:auto}.tw\\:whitespace-nowrap{white-space:nowrap}.tw\\:text-amber-500{color:var(--tw-color-amber-500)}.tw\\:text-amber-700{color:var(--tw-color-amber-700)}.tw\\:text-amber-900{color:var(--tw-color-amber-900)}.tw\\:text-blue-500{color:var(--tw-color-blue-500)}.tw\\:text-blue-600{color:var(--tw-color-blue-600)}.tw\\:text-emerald-700{color:var(--tw-color-emerald-700)}.tw\\:text-emerald-800{color:var(--tw-color-emerald-800)}.tw\\:text-gray-500{color:var(--tw-color-gray-500)}.tw\\:text-green-500{color:var(--tw-color-green-500)}.tw\\:text-red-600{color:var(--tw-color-red-600)}.tw\\:text-red-700{color:var(--tw-color-red-700)}.tw\\:text-red-800{color:var(--tw-color-red-800)}.tw\\:text-slate-300{color:var(--tw-color-slate-300)}.tw\\:text-slate-400,.tw\\:text-slate-400\\/70{color:var(--tw-color-slate-400)}@supports (color:color-mix(in lab,red,red)){.tw\\:text-slate-400\\/70{color:color-mix(in oklab,var(--tw-color-slate-400)70%,transparent)}}.tw\\:text-slate-500{color:var(--tw-color-slate-500)}.tw\\:text-slate-600{color:var(--tw-color-slate-600)}.tw\\:text-slate-700{color:var(--tw-color-slate-700)}.tw\\:text-slate-800{color:var(--tw-color-slate-800)}.tw\\:text-slate-900{color:var(--tw-color-slate-900)}.tw\\:text-white{color:var(--tw-color-white)}.tw\\:uppercase{text-transform:uppercase}.tw\\:opacity-50{opacity:.5}.tw\\:opacity-100{opacity:1}.tw\\:shadow-lg{--tw-shadow:0 10px 15px -3px var(--tw-shadow-color,#0000001a),0 4px 6px -4px var(--tw-shadow-color,#0000001a);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.tw\\:shadow-sm{--tw-shadow:0 1px 3px 0 var(--tw-shadow-color,#0000001a),0 1px 2px -1px var(--tw-shadow-color,#0000001a);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.tw\\:ring-1{--tw-ring-shadow:var(--tw-ring-inset,)0 0 0 calc(1px + var(--tw-ring-offset-width))var(--tw-ring-color,currentcolor);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.tw\\:ring-2{--tw-ring-shadow:var(--tw-ring-inset,)0 0 0 calc(2px + var(--tw-ring-offset-width))var(--tw-ring-color,currentcolor);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.tw\\:shadow-amber-200\\/25{--tw-shadow-color:var(--tw-color-amber-200)}@supports (color:color-mix(in lab,red,red)){.tw\\:shadow-amber-200\\/25{--tw-shadow-color:color-mix(in oklab,color-mix(in oklab,var(--tw-color-amber-200)25%,transparent)var(--tw-shadow-alpha),transparent)}}.tw\\:shadow-slate-200\\/20{--tw-shadow-color:var(--tw-color-slate-200)}@supports (color:color-mix(in lab,red,red)){.tw\\:shadow-slate-200\\/20{--tw-shadow-color:color-mix(in oklab,color-mix(in oklab,var(--tw-color-slate-200)20%,transparent)var(--tw-shadow-alpha),transparent)}}.tw\\:ring-amber-200\\/40{--tw-ring-color:var(--tw-color-amber-200)}@supports (color:color-mix(in lab,red,red)){.tw\\:ring-amber-200\\/40{--tw-ring-color:color-mix(in oklab,var(--tw-color-amber-200)40%,transparent)}}.tw\\:ring-white\\/50{--tw-ring-color:var(--tw-color-white)}@supports (color:color-mix(in lab,red,red)){.tw\\:ring-white\\/50{--tw-ring-color:color-mix(in oklab,var(--tw-color-white)50%,transparent)}}.tw\\:drop-shadow-sm{--tw-drop-shadow-size:drop-shadow(0 1px 2px var(--tw-drop-shadow-color,#00000026));--tw-drop-shadow:drop-shadow(var(--tw-drop-shadow-sm));filter:var(--tw-blur,)var(--tw-brightness,)var(--tw-contrast,)var(--tw-grayscale,)var(--tw-hue-rotate,)var(--tw-invert,)var(--tw-saturate,)var(--tw-sepia,)var(--tw-drop-shadow,)}.tw\\:backdrop-blur-md{--tw-backdrop-blur:blur(var(--tw-blur-md));-webkit-backdrop-filter:var(--tw-backdrop-blur,)var(--tw-backdrop-brightness,)var(--tw-backdrop-contrast,)var(--tw-backdrop-grayscale,)var(--tw-backdrop-hue-rotate,)var(--tw-backdrop-invert,)var(--tw-backdrop-opacity,)var(--tw-backdrop-saturate,)var(--tw-backdrop-sepia,);backdrop-filter:var(--tw-backdrop-blur,)var(--tw-backdrop-brightness,)var(--tw-backdrop-contrast,)var(--tw-backdrop-grayscale,)var(--tw-backdrop-hue-rotate,)var(--tw-backdrop-invert,)var(--tw-backdrop-opacity,)var(--tw-backdrop-saturate,)var(--tw-backdrop-sepia,)}.tw\\:backdrop-blur-sm{--tw-backdrop-blur:blur(var(--tw-blur-sm));-webkit-backdrop-filter:var(--tw-backdrop-blur,)var(--tw-backdrop-brightness,)var(--tw-backdrop-contrast,)var(--tw-backdrop-grayscale,)var(--tw-backdrop-hue-rotate,)var(--tw-backdrop-invert,)var(--tw-backdrop-opacity,)var(--tw-backdrop-saturate,)var(--tw-backdrop-sepia,);backdrop-filter:var(--tw-backdrop-blur,)var(--tw-backdrop-brightness,)var(--tw-backdrop-contrast,)var(--tw-backdrop-grayscale,)var(--tw-backdrop-hue-rotate,)var(--tw-backdrop-invert,)var(--tw-backdrop-opacity,)var(--tw-backdrop-saturate,)var(--tw-backdrop-sepia,)}.tw\\:transition-all{transition-property:all;transition-timing-function:var(--tw-ease,var(--tw-default-transition-timing-function));transition-duration:var(--tw-duration,var(--tw-default-transition-duration))}.tw\\:transition-colors{transition-property:color,background-color,border-color,outline-color,text-decoration-color,fill,stroke,--tw-gradient-from,--tw-gradient-via,--tw-gradient-to;transition-timing-function:var(--tw-ease,var(--tw-default-transition-timing-function));transition-duration:var(--tw-duration,var(--tw-default-transition-duration))}.tw\\:transition-opacity{transition-property:opacity;transition-timing-function:var(--tw-ease,var(--tw-default-transition-timing-function));transition-duration:var(--tw-duration,var(--tw-default-transition-duration))}.tw\\:duration-200{--tw-duration:.2s;transition-duration:.2s}.tw\\:duration-300{--tw-duration:.3s;transition-duration:.3s}.tw\\:disabled\\:cursor-not-allowed:disabled{cursor:not-allowed}.tw\\:disabled\\:opacity-50:disabled{opacity:.5}@media (min-width:40rem){.tw\\:sm\\:mx-0{margin-inline:calc(var(--tw-spacing)*0)}.tw\\:sm\\:mt-10{margin-top:calc(var(--tw-spacing)*10)}.tw\\:sm\\:mb-10{margin-bottom:calc(var(--tw-spacing)*10)}.tw\\:sm\\:flex{display:flex}.tw\\:sm\\:hidden{display:none}.tw\\:sm\\:inline{display:inline}.tw\\:sm\\:h-4{height:calc(var(--tw-spacing)*4)}.tw\\:sm\\:h-14{height:calc(var(--tw-spacing)*14)}.tw\\:sm\\:h-18{height:calc(var(--tw-spacing)*18)}.tw\\:sm\\:h-\\[14px\\]{height:14px}.tw\\:sm\\:w-4{width:calc(var(--tw-spacing)*4)}.tw\\:sm\\:w-14{width:calc(var(--tw-spacing)*14)}.tw\\:sm\\:w-18{width:calc(var(--tw-spacing)*18)}.tw\\:sm\\:w-\\[14px\\]{width:14px}.tw\\:sm\\:grid-cols-3{grid-template-columns:repeat(3,minmax(0,1fr))}.tw\\:sm\\:grid-cols-4{grid-template-columns:repeat(4,minmax(0,1fr))}.tw\\:sm\\:flex-row{flex-direction:row}.tw\\:sm\\:justify-start{justify-content:flex-start}.tw\\:sm\\:gap-2{gap:calc(var(--tw-spacing)*2)}.tw\\:sm\\:gap-10{gap:calc(var(--tw-spacing)*10)}.tw\\:sm\\:p-6{padding:calc(var(--tw-spacing)*6)}.tw\\:sm\\:p-8{padding:calc(var(--tw-spacing)*8)}.tw\\:sm\\:px-3{padding-inline:calc(var(--tw-spacing)*3)}.tw\\:sm\\:py-2{padding-block:calc(var(--tw-spacing)*2)}.tw\\:sm\\:pl-11{padding-left:calc(var(--tw-spacing)*11)}.tw\\:sm\\:text-left{text-align:left}.tw\\:sm\\:text-base{font-size:var(--tw-text-base);line-height:var(--tw-leading,var(--tw-text-base--line-height))}.tw\\:sm\\:text-lg{font-size:var(--tw-text-lg);line-height:var(--tw-leading,var(--tw-text-lg--line-height))}.tw\\:sm\\:text-xl{font-size:var(--tw-text-xl);line-height:var(--tw-leading,var(--tw-text-xl--line-height))}.tw\\:sm\\:text-\\[8px\\]{font-size:8px}}@media (min-width:48rem){.tw\\:md\\:grid-cols-4{grid-template-columns:repeat(4,minmax(0,1fr))}}@media (min-width:64rem){.tw\\:lg\\:grid-cols-5{grid-template-columns:repeat(5,minmax(0,1fr))}}@media (min-width:80rem){.tw\\:xl\\:grid-cols-6{grid-template-columns:repeat(6,minmax(0,1fr))}}}.snx-reviews-widget{isolation:isolate;contain:layout style paint;box-sizing:border-box;width:100%;font-family:var(--font-inter,Inter,-apple-system,BlinkMacSystemFont,"Segoe UI",system-ui,sans-serif);color:#1e293b;background:0 0;border:none;margin:0;padding:1rem;font-size:16px;line-height:1.5;display:block;position:relative}@media screen and (min-width:640px){.snx-reviews-widget{padding:1.5rem}}.snx-reviews-widget *,.snx-reviews-widget :before,.snx-reviews-widget :after{box-sizing:border-box}.snx-reviews-widget h1,.snx-reviews-widget h2,.snx-reviews-widget h3,.snx-reviews-widget h4,.snx-reviews-widget h5,.snx-reviews-widget h6{font-size:inherit;font-weight:inherit;margin:0}.snx-reviews-widget ol:not([class]),.snx-reviews-widget ul:not([class]),.snx-reviews-widget menu:not([class]){margin:0;padding:0;list-style:none}.snx-reviews-widget img{max-width:100%}.snx-reviews-widget button{cursor:pointer;font-family:inherit}.snx-reviews-widget a{color:inherit;-webkit-text-decoration:inherit;text-decoration:inherit}.widget-card{background-color:#fffffff2;border:1px solid #94a3b84d;border-radius:1rem;width:100%;position:relative;box-shadow:0 1px 2px #00000003,0 1px 3px #00000005,inset 0 0 0 1px #ffffff0d}.widget-card:hover{background-color:#fff;border-color:#94a3b866;box-shadow:0 2px 4px -1px #00000005,0 4px 8px -2px #00000005}@media screen and (hover:none) and (pointer:coarse){.snx-reviews-widget .widget-card:hover{background-color:#fffffff2!important;border-color:#94a3b84d!important;box-shadow:0 1px 2px #00000003,0 1px 3px #00000005!important}}.widget-summary{background:linear-gradient(135deg,#fffbebf2,#fef9c3e6,#fffffff2);border:1px solid #fbbf244d;border-radius:1.5rem;position:relative;box-shadow:0 1px 3px #b4530908,0 4px 12px #b4530905}.widget-button{color:#fff;cursor:pointer;background-color:#0f172a;border-radius:1rem;padding:.75rem 1.5rem;font-weight:500;transition:background-color .2s,box-shadow .2s;box-shadow:0 1px 2px #0000000d,0 4px 8px #0000000a}.widget-button:hover{background-color:#1e293b;box-shadow:0 2px 4px #00000012,0 6px 12px #0000000f}.widget-badge{color:#334155;background-color:#f8fafcf2;border:1px solid #e2e8f066;border-radius:9999px;align-items:center;padding:.25rem .5rem;font-size:.75rem;font-weight:500;display:inline-flex;box-shadow:0 1px 2px #00000003}.widget-spacing-lg>:not(:last-child){margin-bottom:1.5rem}@media screen and (min-width:640px){.snx-reviews-widget .widget-spacing-lg>:not(:last-child){margin-bottom:2rem!important}}@keyframes fadeInUp{0%{opacity:0;transform:translateY(20px)}to{opacity:1;transform:translateY(0)}}@keyframes shimmer{0%{background-position:-200% 0}to{background-position:200% 0}}.animate-fade-in-up{animation:.5s ease-out fadeInUp}.loading-shimmer{background:linear-gradient(90deg,#f1f5f9,#e2e8f0,#f1f5f9) 0 0/200% 100%;animation:1.5s infinite shimmer}.image-skeleton{background:linear-gradient(90deg,#f1f5f9,#e2e8f0,#f1f5f9) 0 0/200% 100%;border-radius:.5rem;animation:1.5s infinite shimmer}.image-fade-in{opacity:0;transition:opacity .3s ease-in-out}.image-fade-in.loaded{opacity:1}.pagination-button{cursor:pointer;border:1px solid #0000;border-radius:.5rem;justify-content:center;align-items:center;padding:.5rem .75rem;font-size:.875rem;font-weight:500;transition:all .2s ease-in-out;display:inline-flex}.pagination-button:disabled{opacity:.5;cursor:not-allowed}.pagination-button-default{color:#475569;background-color:#0000}.pagination-button-default:hover:not(:disabled){color:#0f172a;background-color:#f8fafc}.pagination-button-active{color:#fff;background-color:#0f172a}.pagination-nav-button{color:#475569;background-color:#0000}.pagination-nav-button:hover:not(:disabled){color:#0f172a;background-color:#f8fafc}.pagination-ellipsis{color:#94a3b8;justify-content:center;align-items:center;padding:.5rem;display:flex}.scrollbar-hide{-ms-overflow-style:none;scrollbar-width:none}.scrollbar-hide::-webkit-scrollbar{display:none}@property --tw-space-y-reverse{syntax:"*";inherits:false;initial-value:0}@property --tw-border-style{syntax:"*";inherits:false;initial-value:solid}@property --tw-gradient-position{syntax:"*";inherits:false}@property --tw-gradient-from{syntax:"<color>";inherits:false;initial-value:#0000}@property --tw-gradient-via{syntax:"<color>";inherits:false;initial-value:#0000}@property --tw-gradient-to{syntax:"<color>";inherits:false;initial-value:#0000}@property --tw-gradient-stops{syntax:"*";inherits:false}@property --tw-gradient-via-stops{syntax:"*";inherits:false}@property --tw-gradient-from-position{syntax:"<length-percentage>";inherits:false;initial-value:0%}@property --tw-gradient-via-position{syntax:"<length-percentage>";inherits:false;initial-value:50%}@property --tw-gradient-to-position{syntax:"<length-percentage>";inherits:false;initial-value:100%}@property --tw-leading{syntax:"*";inherits:false}@property --tw-font-weight{syntax:"*";inherits:false}@property --tw-tracking{syntax:"*";inherits:false}@property --tw-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --tw-shadow-color{syntax:"*";inherits:false}@property --tw-shadow-alpha{syntax:"<percentage>";inherits:false;initial-value:100%}@property --tw-inset-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --tw-inset-shadow-color{syntax:"*";inherits:false}@property --tw-inset-shadow-alpha{syntax:"<percentage>";inherits:false;initial-value:100%}@property --tw-ring-color{syntax:"*";inherits:false}@property --tw-ring-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --tw-inset-ring-color{syntax:"*";inherits:false}@property --tw-inset-ring-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --tw-ring-inset{syntax:"*";inherits:false}@property --tw-ring-offset-width{syntax:"<length>";inherits:false;initial-value:0}@property --tw-ring-offset-color{syntax:"*";inherits:false;initial-value:#fff}@property --tw-ring-offset-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --tw-blur{syntax:"*";inherits:false}@property --tw-brightness{syntax:"*";inherits:false}@property --tw-contrast{syntax:"*";inherits:false}@property --tw-grayscale{syntax:"*";inherits:false}@property --tw-hue-rotate{syntax:"*";inherits:false}@property --tw-invert{syntax:"*";inherits:false}@property --tw-opacity{syntax:"*";inherits:false}@property --tw-saturate{syntax:"*";inherits:false}@property --tw-sepia{syntax:"*";inherits:false}@property --tw-drop-shadow{syntax:"*";inherits:false}@property --tw-drop-shadow-color{syntax:"*";inherits:false}@property --tw-drop-shadow-alpha{syntax:"<percentage>";inherits:false;initial-value:100%}@property --tw-drop-shadow-size{syntax:"*";inherits:false}@property --tw-backdrop-blur{syntax:"*";inherits:false}@property --tw-backdrop-brightness{syntax:"*";inherits:false}@property --tw-backdrop-contrast{syntax:"*";inherits:false}@property --tw-backdrop-grayscale{syntax:"*";inherits:false}@property --tw-backdrop-hue-rotate{syntax:"*";inherits:false}@property --tw-backdrop-invert{syntax:"*";inherits:false}@property --tw-backdrop-opacity{syntax:"*";inherits:false}@property --tw-backdrop-saturate{syntax:"*";inherits:false}@property --tw-backdrop-sepia{syntax:"*";inherits:false}@property --tw-duration{syntax:"*";inherits:false}@keyframes pulse{50%{opacity:.5}}')),document.head.appendChild(t)}}catch(r){console.error("vite-plugin-css-injected-by-js",r)}}();
function getDefaultExportFromCjs(x) {
  return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, "default") ? x["default"] : x;
}
var jsxRuntime = { exports: {} };
var reactJsxRuntime_production_min = {};
var react = { exports: {} };
var react_production_min = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var hasRequiredReact_production_min;
function requireReact_production_min() {
  if (hasRequiredReact_production_min) return react_production_min;
  hasRequiredReact_production_min = 1;
  var l = Symbol.for("react.element"), n = Symbol.for("react.portal"), p = Symbol.for("react.fragment"), q = Symbol.for("react.strict_mode"), r = Symbol.for("react.profiler"), t = Symbol.for("react.provider"), u = Symbol.for("react.context"), v = Symbol.for("react.forward_ref"), w = Symbol.for("react.suspense"), x = Symbol.for("react.memo"), y = Symbol.for("react.lazy"), z = Symbol.iterator;
  function A(a) {
    if (null === a || "object" !== typeof a) return null;
    a = z && a[z] || a["@@iterator"];
    return "function" === typeof a ? a : null;
  }
  var B = { isMounted: function() {
    return false;
  }, enqueueForceUpdate: function() {
  }, enqueueReplaceState: function() {
  }, enqueueSetState: function() {
  } }, C = Object.assign, D = {};
  function E(a, b, e) {
    this.props = a;
    this.context = b;
    this.refs = D;
    this.updater = e || B;
  }
  E.prototype.isReactComponent = {};
  E.prototype.setState = function(a, b) {
    if ("object" !== typeof a && "function" !== typeof a && null != a) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, a, b, "setState");
  };
  E.prototype.forceUpdate = function(a) {
    this.updater.enqueueForceUpdate(this, a, "forceUpdate");
  };
  function F() {
  }
  F.prototype = E.prototype;
  function G(a, b, e) {
    this.props = a;
    this.context = b;
    this.refs = D;
    this.updater = e || B;
  }
  var H = G.prototype = new F();
  H.constructor = G;
  C(H, E.prototype);
  H.isPureReactComponent = true;
  var I = Array.isArray, J = Object.prototype.hasOwnProperty, K = { current: null }, L = { key: true, ref: true, __self: true, __source: true };
  function M(a, b, e) {
    var d, c = {}, k = null, h = null;
    if (null != b) for (d in void 0 !== b.ref && (h = b.ref), void 0 !== b.key && (k = "" + b.key), b) J.call(b, d) && !L.hasOwnProperty(d) && (c[d] = b[d]);
    var g = arguments.length - 2;
    if (1 === g) c.children = e;
    else if (1 < g) {
      for (var f = Array(g), m = 0; m < g; m++) f[m] = arguments[m + 2];
      c.children = f;
    }
    if (a && a.defaultProps) for (d in g = a.defaultProps, g) void 0 === c[d] && (c[d] = g[d]);
    return { $$typeof: l, type: a, key: k, ref: h, props: c, _owner: K.current };
  }
  function N(a, b) {
    return { $$typeof: l, type: a.type, key: b, ref: a.ref, props: a.props, _owner: a._owner };
  }
  function O(a) {
    return "object" === typeof a && null !== a && a.$$typeof === l;
  }
  function escape(a) {
    var b = { "=": "=0", ":": "=2" };
    return "$" + a.replace(/[=:]/g, function(a2) {
      return b[a2];
    });
  }
  var P = /\/+/g;
  function Q(a, b) {
    return "object" === typeof a && null !== a && null != a.key ? escape("" + a.key) : b.toString(36);
  }
  function R(a, b, e, d, c) {
    var k = typeof a;
    if ("undefined" === k || "boolean" === k) a = null;
    var h = false;
    if (null === a) h = true;
    else switch (k) {
      case "string":
      case "number":
        h = true;
        break;
      case "object":
        switch (a.$$typeof) {
          case l:
          case n:
            h = true;
        }
    }
    if (h) return h = a, c = c(h), a = "" === d ? "." + Q(h, 0) : d, I(c) ? (e = "", null != a && (e = a.replace(P, "$&/") + "/"), R(c, b, e, "", function(a2) {
      return a2;
    })) : null != c && (O(c) && (c = N(c, e + (!c.key || h && h.key === c.key ? "" : ("" + c.key).replace(P, "$&/") + "/") + a)), b.push(c)), 1;
    h = 0;
    d = "" === d ? "." : d + ":";
    if (I(a)) for (var g = 0; g < a.length; g++) {
      k = a[g];
      var f = d + Q(k, g);
      h += R(k, b, e, f, c);
    }
    else if (f = A(a), "function" === typeof f) for (a = f.call(a), g = 0; !(k = a.next()).done; ) k = k.value, f = d + Q(k, g++), h += R(k, b, e, f, c);
    else if ("object" === k) throw b = String(a), Error("Objects are not valid as a React child (found: " + ("[object Object]" === b ? "object with keys {" + Object.keys(a).join(", ") + "}" : b) + "). If you meant to render a collection of children, use an array instead.");
    return h;
  }
  function S(a, b, e) {
    if (null == a) return a;
    var d = [], c = 0;
    R(a, d, "", "", function(a2) {
      return b.call(e, a2, c++);
    });
    return d;
  }
  function T(a) {
    if (-1 === a._status) {
      var b = a._result;
      b = b();
      b.then(function(b2) {
        if (0 === a._status || -1 === a._status) a._status = 1, a._result = b2;
      }, function(b2) {
        if (0 === a._status || -1 === a._status) a._status = 2, a._result = b2;
      });
      -1 === a._status && (a._status = 0, a._result = b);
    }
    if (1 === a._status) return a._result.default;
    throw a._result;
  }
  var U = { current: null }, V = { transition: null }, W = { ReactCurrentDispatcher: U, ReactCurrentBatchConfig: V, ReactCurrentOwner: K };
  function X() {
    throw Error("act(...) is not supported in production builds of React.");
  }
  react_production_min.Children = { map: S, forEach: function(a, b, e) {
    S(a, function() {
      b.apply(this, arguments);
    }, e);
  }, count: function(a) {
    var b = 0;
    S(a, function() {
      b++;
    });
    return b;
  }, toArray: function(a) {
    return S(a, function(a2) {
      return a2;
    }) || [];
  }, only: function(a) {
    if (!O(a)) throw Error("React.Children.only expected to receive a single React element child.");
    return a;
  } };
  react_production_min.Component = E;
  react_production_min.Fragment = p;
  react_production_min.Profiler = r;
  react_production_min.PureComponent = G;
  react_production_min.StrictMode = q;
  react_production_min.Suspense = w;
  react_production_min.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = W;
  react_production_min.act = X;
  react_production_min.cloneElement = function(a, b, e) {
    if (null === a || void 0 === a) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + a + ".");
    var d = C({}, a.props), c = a.key, k = a.ref, h = a._owner;
    if (null != b) {
      void 0 !== b.ref && (k = b.ref, h = K.current);
      void 0 !== b.key && (c = "" + b.key);
      if (a.type && a.type.defaultProps) var g = a.type.defaultProps;
      for (f in b) J.call(b, f) && !L.hasOwnProperty(f) && (d[f] = void 0 === b[f] && void 0 !== g ? g[f] : b[f]);
    }
    var f = arguments.length - 2;
    if (1 === f) d.children = e;
    else if (1 < f) {
      g = Array(f);
      for (var m = 0; m < f; m++) g[m] = arguments[m + 2];
      d.children = g;
    }
    return { $$typeof: l, type: a.type, key: c, ref: k, props: d, _owner: h };
  };
  react_production_min.createContext = function(a) {
    a = { $$typeof: u, _currentValue: a, _currentValue2: a, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null };
    a.Provider = { $$typeof: t, _context: a };
    return a.Consumer = a;
  };
  react_production_min.createElement = M;
  react_production_min.createFactory = function(a) {
    var b = M.bind(null, a);
    b.type = a;
    return b;
  };
  react_production_min.createRef = function() {
    return { current: null };
  };
  react_production_min.forwardRef = function(a) {
    return { $$typeof: v, render: a };
  };
  react_production_min.isValidElement = O;
  react_production_min.lazy = function(a) {
    return { $$typeof: y, _payload: { _status: -1, _result: a }, _init: T };
  };
  react_production_min.memo = function(a, b) {
    return { $$typeof: x, type: a, compare: void 0 === b ? null : b };
  };
  react_production_min.startTransition = function(a) {
    var b = V.transition;
    V.transition = {};
    try {
      a();
    } finally {
      V.transition = b;
    }
  };
  react_production_min.unstable_act = X;
  react_production_min.useCallback = function(a, b) {
    return U.current.useCallback(a, b);
  };
  react_production_min.useContext = function(a) {
    return U.current.useContext(a);
  };
  react_production_min.useDebugValue = function() {
  };
  react_production_min.useDeferredValue = function(a) {
    return U.current.useDeferredValue(a);
  };
  react_production_min.useEffect = function(a, b) {
    return U.current.useEffect(a, b);
  };
  react_production_min.useId = function() {
    return U.current.useId();
  };
  react_production_min.useImperativeHandle = function(a, b, e) {
    return U.current.useImperativeHandle(a, b, e);
  };
  react_production_min.useInsertionEffect = function(a, b) {
    return U.current.useInsertionEffect(a, b);
  };
  react_production_min.useLayoutEffect = function(a, b) {
    return U.current.useLayoutEffect(a, b);
  };
  react_production_min.useMemo = function(a, b) {
    return U.current.useMemo(a, b);
  };
  react_production_min.useReducer = function(a, b, e) {
    return U.current.useReducer(a, b, e);
  };
  react_production_min.useRef = function(a) {
    return U.current.useRef(a);
  };
  react_production_min.useState = function(a) {
    return U.current.useState(a);
  };
  react_production_min.useSyncExternalStore = function(a, b, e) {
    return U.current.useSyncExternalStore(a, b, e);
  };
  react_production_min.useTransition = function() {
    return U.current.useTransition();
  };
  react_production_min.version = "18.3.1";
  return react_production_min;
}
var hasRequiredReact;
function requireReact() {
  if (hasRequiredReact) return react.exports;
  hasRequiredReact = 1;
  {
    react.exports = requireReact_production_min();
  }
  return react.exports;
}
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var hasRequiredReactJsxRuntime_production_min;
function requireReactJsxRuntime_production_min() {
  if (hasRequiredReactJsxRuntime_production_min) return reactJsxRuntime_production_min;
  hasRequiredReactJsxRuntime_production_min = 1;
  var f = requireReact(), k = Symbol.for("react.element"), l = Symbol.for("react.fragment"), m = Object.prototype.hasOwnProperty, n = f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, p = { key: true, ref: true, __self: true, __source: true };
  function q(c, a, g) {
    var b, d = {}, e = null, h = null;
    void 0 !== g && (e = "" + g);
    void 0 !== a.key && (e = "" + a.key);
    void 0 !== a.ref && (h = a.ref);
    for (b in a) m.call(a, b) && !p.hasOwnProperty(b) && (d[b] = a[b]);
    if (c && c.defaultProps) for (b in a = c.defaultProps, a) void 0 === d[b] && (d[b] = a[b]);
    return { $$typeof: k, type: c, key: e, ref: h, props: d, _owner: n.current };
  }
  reactJsxRuntime_production_min.Fragment = l;
  reactJsxRuntime_production_min.jsx = q;
  reactJsxRuntime_production_min.jsxs = q;
  return reactJsxRuntime_production_min;
}
var hasRequiredJsxRuntime;
function requireJsxRuntime() {
  if (hasRequiredJsxRuntime) return jsxRuntime.exports;
  hasRequiredJsxRuntime = 1;
  {
    jsxRuntime.exports = requireReactJsxRuntime_production_min();
  }
  return jsxRuntime.exports;
}
var jsxRuntimeExports = requireJsxRuntime();
var reactExports = requireReact();
const React = /* @__PURE__ */ getDefaultExportFromCjs(reactExports);
var client = {};
var reactDom = { exports: {} };
var reactDom_production_min = {};
var scheduler = { exports: {} };
var scheduler_production_min = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var hasRequiredScheduler_production_min;
function requireScheduler_production_min() {
  if (hasRequiredScheduler_production_min) return scheduler_production_min;
  hasRequiredScheduler_production_min = 1;
  (function(exports) {
    function f(a, b) {
      var c = a.length;
      a.push(b);
      a: for (; 0 < c; ) {
        var d = c - 1 >>> 1, e = a[d];
        if (0 < g(e, b)) a[d] = b, a[c] = e, c = d;
        else break a;
      }
    }
    function h(a) {
      return 0 === a.length ? null : a[0];
    }
    function k(a) {
      if (0 === a.length) return null;
      var b = a[0], c = a.pop();
      if (c !== b) {
        a[0] = c;
        a: for (var d = 0, e = a.length, w = e >>> 1; d < w; ) {
          var m = 2 * (d + 1) - 1, C = a[m], n = m + 1, x = a[n];
          if (0 > g(C, c)) n < e && 0 > g(x, C) ? (a[d] = x, a[n] = c, d = n) : (a[d] = C, a[m] = c, d = m);
          else if (n < e && 0 > g(x, c)) a[d] = x, a[n] = c, d = n;
          else break a;
        }
      }
      return b;
    }
    function g(a, b) {
      var c = a.sortIndex - b.sortIndex;
      return 0 !== c ? c : a.id - b.id;
    }
    if ("object" === typeof performance && "function" === typeof performance.now) {
      var l = performance;
      exports.unstable_now = function() {
        return l.now();
      };
    } else {
      var p = Date, q = p.now();
      exports.unstable_now = function() {
        return p.now() - q;
      };
    }
    var r = [], t = [], u = 1, v = null, y = 3, z = false, A = false, B = false, D = "function" === typeof setTimeout ? setTimeout : null, E = "function" === typeof clearTimeout ? clearTimeout : null, F = "undefined" !== typeof setImmediate ? setImmediate : null;
    "undefined" !== typeof navigator && void 0 !== navigator.scheduling && void 0 !== navigator.scheduling.isInputPending && navigator.scheduling.isInputPending.bind(navigator.scheduling);
    function G(a) {
      for (var b = h(t); null !== b; ) {
        if (null === b.callback) k(t);
        else if (b.startTime <= a) k(t), b.sortIndex = b.expirationTime, f(r, b);
        else break;
        b = h(t);
      }
    }
    function H(a) {
      B = false;
      G(a);
      if (!A) if (null !== h(r)) A = true, I(J);
      else {
        var b = h(t);
        null !== b && K(H, b.startTime - a);
      }
    }
    function J(a, b) {
      A = false;
      B && (B = false, E(L), L = -1);
      z = true;
      var c = y;
      try {
        G(b);
        for (v = h(r); null !== v && (!(v.expirationTime > b) || a && !M()); ) {
          var d = v.callback;
          if ("function" === typeof d) {
            v.callback = null;
            y = v.priorityLevel;
            var e = d(v.expirationTime <= b);
            b = exports.unstable_now();
            "function" === typeof e ? v.callback = e : v === h(r) && k(r);
            G(b);
          } else k(r);
          v = h(r);
        }
        if (null !== v) var w = true;
        else {
          var m = h(t);
          null !== m && K(H, m.startTime - b);
          w = false;
        }
        return w;
      } finally {
        v = null, y = c, z = false;
      }
    }
    var N = false, O = null, L = -1, P = 5, Q = -1;
    function M() {
      return exports.unstable_now() - Q < P ? false : true;
    }
    function R() {
      if (null !== O) {
        var a = exports.unstable_now();
        Q = a;
        var b = true;
        try {
          b = O(true, a);
        } finally {
          b ? S() : (N = false, O = null);
        }
      } else N = false;
    }
    var S;
    if ("function" === typeof F) S = function() {
      F(R);
    };
    else if ("undefined" !== typeof MessageChannel) {
      var T = new MessageChannel(), U = T.port2;
      T.port1.onmessage = R;
      S = function() {
        U.postMessage(null);
      };
    } else S = function() {
      D(R, 0);
    };
    function I(a) {
      O = a;
      N || (N = true, S());
    }
    function K(a, b) {
      L = D(function() {
        a(exports.unstable_now());
      }, b);
    }
    exports.unstable_IdlePriority = 5;
    exports.unstable_ImmediatePriority = 1;
    exports.unstable_LowPriority = 4;
    exports.unstable_NormalPriority = 3;
    exports.unstable_Profiling = null;
    exports.unstable_UserBlockingPriority = 2;
    exports.unstable_cancelCallback = function(a) {
      a.callback = null;
    };
    exports.unstable_continueExecution = function() {
      A || z || (A = true, I(J));
    };
    exports.unstable_forceFrameRate = function(a) {
      0 > a || 125 < a ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : P = 0 < a ? Math.floor(1e3 / a) : 5;
    };
    exports.unstable_getCurrentPriorityLevel = function() {
      return y;
    };
    exports.unstable_getFirstCallbackNode = function() {
      return h(r);
    };
    exports.unstable_next = function(a) {
      switch (y) {
        case 1:
        case 2:
        case 3:
          var b = 3;
          break;
        default:
          b = y;
      }
      var c = y;
      y = b;
      try {
        return a();
      } finally {
        y = c;
      }
    };
    exports.unstable_pauseExecution = function() {
    };
    exports.unstable_requestPaint = function() {
    };
    exports.unstable_runWithPriority = function(a, b) {
      switch (a) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          a = 3;
      }
      var c = y;
      y = a;
      try {
        return b();
      } finally {
        y = c;
      }
    };
    exports.unstable_scheduleCallback = function(a, b, c) {
      var d = exports.unstable_now();
      "object" === typeof c && null !== c ? (c = c.delay, c = "number" === typeof c && 0 < c ? d + c : d) : c = d;
      switch (a) {
        case 1:
          var e = -1;
          break;
        case 2:
          e = 250;
          break;
        case 5:
          e = 1073741823;
          break;
        case 4:
          e = 1e4;
          break;
        default:
          e = 5e3;
      }
      e = c + e;
      a = { id: u++, callback: b, priorityLevel: a, startTime: c, expirationTime: e, sortIndex: -1 };
      c > d ? (a.sortIndex = c, f(t, a), null === h(r) && a === h(t) && (B ? (E(L), L = -1) : B = true, K(H, c - d))) : (a.sortIndex = e, f(r, a), A || z || (A = true, I(J)));
      return a;
    };
    exports.unstable_shouldYield = M;
    exports.unstable_wrapCallback = function(a) {
      var b = y;
      return function() {
        var c = y;
        y = b;
        try {
          return a.apply(this, arguments);
        } finally {
          y = c;
        }
      };
    };
  })(scheduler_production_min);
  return scheduler_production_min;
}
var hasRequiredScheduler;
function requireScheduler() {
  if (hasRequiredScheduler) return scheduler.exports;
  hasRequiredScheduler = 1;
  {
    scheduler.exports = requireScheduler_production_min();
  }
  return scheduler.exports;
}
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var hasRequiredReactDom_production_min;
function requireReactDom_production_min() {
  if (hasRequiredReactDom_production_min) return reactDom_production_min;
  hasRequiredReactDom_production_min = 1;
  var aa = requireReact(), ca = requireScheduler();
  function p(a) {
    for (var b = "https://reactjs.org/docs/error-decoder.html?invariant=" + a, c = 1; c < arguments.length; c++) b += "&args[]=" + encodeURIComponent(arguments[c]);
    return "Minified React error #" + a + "; visit " + b + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  var da = /* @__PURE__ */ new Set(), ea = {};
  function fa(a, b) {
    ha(a, b);
    ha(a + "Capture", b);
  }
  function ha(a, b) {
    ea[a] = b;
    for (a = 0; a < b.length; a++) da.add(b[a]);
  }
  var ia = !("undefined" === typeof window || "undefined" === typeof window.document || "undefined" === typeof window.document.createElement), ja = Object.prototype.hasOwnProperty, ka = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, la = {}, ma = {};
  function oa(a) {
    if (ja.call(ma, a)) return true;
    if (ja.call(la, a)) return false;
    if (ka.test(a)) return ma[a] = true;
    la[a] = true;
    return false;
  }
  function pa(a, b, c, d) {
    if (null !== c && 0 === c.type) return false;
    switch (typeof b) {
      case "function":
      case "symbol":
        return true;
      case "boolean":
        if (d) return false;
        if (null !== c) return !c.acceptsBooleans;
        a = a.toLowerCase().slice(0, 5);
        return "data-" !== a && "aria-" !== a;
      default:
        return false;
    }
  }
  function qa(a, b, c, d) {
    if (null === b || "undefined" === typeof b || pa(a, b, c, d)) return true;
    if (d) return false;
    if (null !== c) switch (c.type) {
      case 3:
        return !b;
      case 4:
        return false === b;
      case 5:
        return isNaN(b);
      case 6:
        return isNaN(b) || 1 > b;
    }
    return false;
  }
  function v(a, b, c, d, e, f, g) {
    this.acceptsBooleans = 2 === b || 3 === b || 4 === b;
    this.attributeName = d;
    this.attributeNamespace = e;
    this.mustUseProperty = c;
    this.propertyName = a;
    this.type = b;
    this.sanitizeURL = f;
    this.removeEmptyString = g;
  }
  var z = {};
  "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(a) {
    z[a] = new v(a, 0, false, a, null, false, false);
  });
  [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(a) {
    var b = a[0];
    z[b] = new v(b, 1, false, a[1], null, false, false);
  });
  ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(a) {
    z[a] = new v(a, 2, false, a.toLowerCase(), null, false, false);
  });
  ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(a) {
    z[a] = new v(a, 2, false, a, null, false, false);
  });
  "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(a) {
    z[a] = new v(a, 3, false, a.toLowerCase(), null, false, false);
  });
  ["checked", "multiple", "muted", "selected"].forEach(function(a) {
    z[a] = new v(a, 3, true, a, null, false, false);
  });
  ["capture", "download"].forEach(function(a) {
    z[a] = new v(a, 4, false, a, null, false, false);
  });
  ["cols", "rows", "size", "span"].forEach(function(a) {
    z[a] = new v(a, 6, false, a, null, false, false);
  });
  ["rowSpan", "start"].forEach(function(a) {
    z[a] = new v(a, 5, false, a.toLowerCase(), null, false, false);
  });
  var ra = /[\-:]([a-z])/g;
  function sa(a) {
    return a[1].toUpperCase();
  }
  "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(a) {
    var b = a.replace(
      ra,
      sa
    );
    z[b] = new v(b, 1, false, a, null, false, false);
  });
  "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(a) {
    var b = a.replace(ra, sa);
    z[b] = new v(b, 1, false, a, "http://www.w3.org/1999/xlink", false, false);
  });
  ["xml:base", "xml:lang", "xml:space"].forEach(function(a) {
    var b = a.replace(ra, sa);
    z[b] = new v(b, 1, false, a, "http://www.w3.org/XML/1998/namespace", false, false);
  });
  ["tabIndex", "crossOrigin"].forEach(function(a) {
    z[a] = new v(a, 1, false, a.toLowerCase(), null, false, false);
  });
  z.xlinkHref = new v("xlinkHref", 1, false, "xlink:href", "http://www.w3.org/1999/xlink", true, false);
  ["src", "href", "action", "formAction"].forEach(function(a) {
    z[a] = new v(a, 1, false, a.toLowerCase(), null, true, true);
  });
  function ta(a, b, c, d) {
    var e = z.hasOwnProperty(b) ? z[b] : null;
    if (null !== e ? 0 !== e.type : d || !(2 < b.length) || "o" !== b[0] && "O" !== b[0] || "n" !== b[1] && "N" !== b[1]) qa(b, c, e, d) && (c = null), d || null === e ? oa(b) && (null === c ? a.removeAttribute(b) : a.setAttribute(b, "" + c)) : e.mustUseProperty ? a[e.propertyName] = null === c ? 3 === e.type ? false : "" : c : (b = e.attributeName, d = e.attributeNamespace, null === c ? a.removeAttribute(b) : (e = e.type, c = 3 === e || 4 === e && true === c ? "" : "" + c, d ? a.setAttributeNS(d, b, c) : a.setAttribute(b, c)));
  }
  var ua = aa.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, va = Symbol.for("react.element"), wa = Symbol.for("react.portal"), ya = Symbol.for("react.fragment"), za = Symbol.for("react.strict_mode"), Aa = Symbol.for("react.profiler"), Ba = Symbol.for("react.provider"), Ca = Symbol.for("react.context"), Da = Symbol.for("react.forward_ref"), Ea = Symbol.for("react.suspense"), Fa = Symbol.for("react.suspense_list"), Ga = Symbol.for("react.memo"), Ha = Symbol.for("react.lazy");
  var Ia = Symbol.for("react.offscreen");
  var Ja = Symbol.iterator;
  function Ka(a) {
    if (null === a || "object" !== typeof a) return null;
    a = Ja && a[Ja] || a["@@iterator"];
    return "function" === typeof a ? a : null;
  }
  var A = Object.assign, La;
  function Ma(a) {
    if (void 0 === La) try {
      throw Error();
    } catch (c) {
      var b = c.stack.trim().match(/\n( *(at )?)/);
      La = b && b[1] || "";
    }
    return "\n" + La + a;
  }
  var Na = false;
  function Oa(a, b) {
    if (!a || Na) return "";
    Na = true;
    var c = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      if (b) if (b = function() {
        throw Error();
      }, Object.defineProperty(b.prototype, "props", { set: function() {
        throw Error();
      } }), "object" === typeof Reflect && Reflect.construct) {
        try {
          Reflect.construct(b, []);
        } catch (l) {
          var d = l;
        }
        Reflect.construct(a, [], b);
      } else {
        try {
          b.call();
        } catch (l) {
          d = l;
        }
        a.call(b.prototype);
      }
      else {
        try {
          throw Error();
        } catch (l) {
          d = l;
        }
        a();
      }
    } catch (l) {
      if (l && d && "string" === typeof l.stack) {
        for (var e = l.stack.split("\n"), f = d.stack.split("\n"), g = e.length - 1, h = f.length - 1; 1 <= g && 0 <= h && e[g] !== f[h]; ) h--;
        for (; 1 <= g && 0 <= h; g--, h--) if (e[g] !== f[h]) {
          if (1 !== g || 1 !== h) {
            do
              if (g--, h--, 0 > h || e[g] !== f[h]) {
                var k = "\n" + e[g].replace(" at new ", " at ");
                a.displayName && k.includes("<anonymous>") && (k = k.replace("<anonymous>", a.displayName));
                return k;
              }
            while (1 <= g && 0 <= h);
          }
          break;
        }
      }
    } finally {
      Na = false, Error.prepareStackTrace = c;
    }
    return (a = a ? a.displayName || a.name : "") ? Ma(a) : "";
  }
  function Pa(a) {
    switch (a.tag) {
      case 5:
        return Ma(a.type);
      case 16:
        return Ma("Lazy");
      case 13:
        return Ma("Suspense");
      case 19:
        return Ma("SuspenseList");
      case 0:
      case 2:
      case 15:
        return a = Oa(a.type, false), a;
      case 11:
        return a = Oa(a.type.render, false), a;
      case 1:
        return a = Oa(a.type, true), a;
      default:
        return "";
    }
  }
  function Qa(a) {
    if (null == a) return null;
    if ("function" === typeof a) return a.displayName || a.name || null;
    if ("string" === typeof a) return a;
    switch (a) {
      case ya:
        return "Fragment";
      case wa:
        return "Portal";
      case Aa:
        return "Profiler";
      case za:
        return "StrictMode";
      case Ea:
        return "Suspense";
      case Fa:
        return "SuspenseList";
    }
    if ("object" === typeof a) switch (a.$$typeof) {
      case Ca:
        return (a.displayName || "Context") + ".Consumer";
      case Ba:
        return (a._context.displayName || "Context") + ".Provider";
      case Da:
        var b = a.render;
        a = a.displayName;
        a || (a = b.displayName || b.name || "", a = "" !== a ? "ForwardRef(" + a + ")" : "ForwardRef");
        return a;
      case Ga:
        return b = a.displayName || null, null !== b ? b : Qa(a.type) || "Memo";
      case Ha:
        b = a._payload;
        a = a._init;
        try {
          return Qa(a(b));
        } catch (c) {
        }
    }
    return null;
  }
  function Ra(a) {
    var b = a.type;
    switch (a.tag) {
      case 24:
        return "Cache";
      case 9:
        return (b.displayName || "Context") + ".Consumer";
      case 10:
        return (b._context.displayName || "Context") + ".Provider";
      case 18:
        return "DehydratedFragment";
      case 11:
        return a = b.render, a = a.displayName || a.name || "", b.displayName || ("" !== a ? "ForwardRef(" + a + ")" : "ForwardRef");
      case 7:
        return "Fragment";
      case 5:
        return b;
      case 4:
        return "Portal";
      case 3:
        return "Root";
      case 6:
        return "Text";
      case 16:
        return Qa(b);
      case 8:
        return b === za ? "StrictMode" : "Mode";
      case 22:
        return "Offscreen";
      case 12:
        return "Profiler";
      case 21:
        return "Scope";
      case 13:
        return "Suspense";
      case 19:
        return "SuspenseList";
      case 25:
        return "TracingMarker";
      case 1:
      case 0:
      case 17:
      case 2:
      case 14:
      case 15:
        if ("function" === typeof b) return b.displayName || b.name || null;
        if ("string" === typeof b) return b;
    }
    return null;
  }
  function Sa(a) {
    switch (typeof a) {
      case "boolean":
      case "number":
      case "string":
      case "undefined":
        return a;
      case "object":
        return a;
      default:
        return "";
    }
  }
  function Ta(a) {
    var b = a.type;
    return (a = a.nodeName) && "input" === a.toLowerCase() && ("checkbox" === b || "radio" === b);
  }
  function Ua(a) {
    var b = Ta(a) ? "checked" : "value", c = Object.getOwnPropertyDescriptor(a.constructor.prototype, b), d = "" + a[b];
    if (!a.hasOwnProperty(b) && "undefined" !== typeof c && "function" === typeof c.get && "function" === typeof c.set) {
      var e = c.get, f = c.set;
      Object.defineProperty(a, b, { configurable: true, get: function() {
        return e.call(this);
      }, set: function(a2) {
        d = "" + a2;
        f.call(this, a2);
      } });
      Object.defineProperty(a, b, { enumerable: c.enumerable });
      return { getValue: function() {
        return d;
      }, setValue: function(a2) {
        d = "" + a2;
      }, stopTracking: function() {
        a._valueTracker = null;
        delete a[b];
      } };
    }
  }
  function Va(a) {
    a._valueTracker || (a._valueTracker = Ua(a));
  }
  function Wa(a) {
    if (!a) return false;
    var b = a._valueTracker;
    if (!b) return true;
    var c = b.getValue();
    var d = "";
    a && (d = Ta(a) ? a.checked ? "true" : "false" : a.value);
    a = d;
    return a !== c ? (b.setValue(a), true) : false;
  }
  function Xa(a) {
    a = a || ("undefined" !== typeof document ? document : void 0);
    if ("undefined" === typeof a) return null;
    try {
      return a.activeElement || a.body;
    } catch (b) {
      return a.body;
    }
  }
  function Ya(a, b) {
    var c = b.checked;
    return A({}, b, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: null != c ? c : a._wrapperState.initialChecked });
  }
  function Za(a, b) {
    var c = null == b.defaultValue ? "" : b.defaultValue, d = null != b.checked ? b.checked : b.defaultChecked;
    c = Sa(null != b.value ? b.value : c);
    a._wrapperState = { initialChecked: d, initialValue: c, controlled: "checkbox" === b.type || "radio" === b.type ? null != b.checked : null != b.value };
  }
  function ab(a, b) {
    b = b.checked;
    null != b && ta(a, "checked", b, false);
  }
  function bb(a, b) {
    ab(a, b);
    var c = Sa(b.value), d = b.type;
    if (null != c) if ("number" === d) {
      if (0 === c && "" === a.value || a.value != c) a.value = "" + c;
    } else a.value !== "" + c && (a.value = "" + c);
    else if ("submit" === d || "reset" === d) {
      a.removeAttribute("value");
      return;
    }
    b.hasOwnProperty("value") ? cb(a, b.type, c) : b.hasOwnProperty("defaultValue") && cb(a, b.type, Sa(b.defaultValue));
    null == b.checked && null != b.defaultChecked && (a.defaultChecked = !!b.defaultChecked);
  }
  function db(a, b, c) {
    if (b.hasOwnProperty("value") || b.hasOwnProperty("defaultValue")) {
      var d = b.type;
      if (!("submit" !== d && "reset" !== d || void 0 !== b.value && null !== b.value)) return;
      b = "" + a._wrapperState.initialValue;
      c || b === a.value || (a.value = b);
      a.defaultValue = b;
    }
    c = a.name;
    "" !== c && (a.name = "");
    a.defaultChecked = !!a._wrapperState.initialChecked;
    "" !== c && (a.name = c);
  }
  function cb(a, b, c) {
    if ("number" !== b || Xa(a.ownerDocument) !== a) null == c ? a.defaultValue = "" + a._wrapperState.initialValue : a.defaultValue !== "" + c && (a.defaultValue = "" + c);
  }
  var eb = Array.isArray;
  function fb(a, b, c, d) {
    a = a.options;
    if (b) {
      b = {};
      for (var e = 0; e < c.length; e++) b["$" + c[e]] = true;
      for (c = 0; c < a.length; c++) e = b.hasOwnProperty("$" + a[c].value), a[c].selected !== e && (a[c].selected = e), e && d && (a[c].defaultSelected = true);
    } else {
      c = "" + Sa(c);
      b = null;
      for (e = 0; e < a.length; e++) {
        if (a[e].value === c) {
          a[e].selected = true;
          d && (a[e].defaultSelected = true);
          return;
        }
        null !== b || a[e].disabled || (b = a[e]);
      }
      null !== b && (b.selected = true);
    }
  }
  function gb(a, b) {
    if (null != b.dangerouslySetInnerHTML) throw Error(p(91));
    return A({}, b, { value: void 0, defaultValue: void 0, children: "" + a._wrapperState.initialValue });
  }
  function hb(a, b) {
    var c = b.value;
    if (null == c) {
      c = b.children;
      b = b.defaultValue;
      if (null != c) {
        if (null != b) throw Error(p(92));
        if (eb(c)) {
          if (1 < c.length) throw Error(p(93));
          c = c[0];
        }
        b = c;
      }
      null == b && (b = "");
      c = b;
    }
    a._wrapperState = { initialValue: Sa(c) };
  }
  function ib(a, b) {
    var c = Sa(b.value), d = Sa(b.defaultValue);
    null != c && (c = "" + c, c !== a.value && (a.value = c), null == b.defaultValue && a.defaultValue !== c && (a.defaultValue = c));
    null != d && (a.defaultValue = "" + d);
  }
  function jb(a) {
    var b = a.textContent;
    b === a._wrapperState.initialValue && "" !== b && null !== b && (a.value = b);
  }
  function kb(a) {
    switch (a) {
      case "svg":
        return "http://www.w3.org/2000/svg";
      case "math":
        return "http://www.w3.org/1998/Math/MathML";
      default:
        return "http://www.w3.org/1999/xhtml";
    }
  }
  function lb(a, b) {
    return null == a || "http://www.w3.org/1999/xhtml" === a ? kb(b) : "http://www.w3.org/2000/svg" === a && "foreignObject" === b ? "http://www.w3.org/1999/xhtml" : a;
  }
  var mb, nb = (function(a) {
    return "undefined" !== typeof MSApp && MSApp.execUnsafeLocalFunction ? function(b, c, d, e) {
      MSApp.execUnsafeLocalFunction(function() {
        return a(b, c, d, e);
      });
    } : a;
  })(function(a, b) {
    if ("http://www.w3.org/2000/svg" !== a.namespaceURI || "innerHTML" in a) a.innerHTML = b;
    else {
      mb = mb || document.createElement("div");
      mb.innerHTML = "<svg>" + b.valueOf().toString() + "</svg>";
      for (b = mb.firstChild; a.firstChild; ) a.removeChild(a.firstChild);
      for (; b.firstChild; ) a.appendChild(b.firstChild);
    }
  });
  function ob(a, b) {
    if (b) {
      var c = a.firstChild;
      if (c && c === a.lastChild && 3 === c.nodeType) {
        c.nodeValue = b;
        return;
      }
    }
    a.textContent = b;
  }
  var pb = {
    animationIterationCount: true,
    aspectRatio: true,
    borderImageOutset: true,
    borderImageSlice: true,
    borderImageWidth: true,
    boxFlex: true,
    boxFlexGroup: true,
    boxOrdinalGroup: true,
    columnCount: true,
    columns: true,
    flex: true,
    flexGrow: true,
    flexPositive: true,
    flexShrink: true,
    flexNegative: true,
    flexOrder: true,
    gridArea: true,
    gridRow: true,
    gridRowEnd: true,
    gridRowSpan: true,
    gridRowStart: true,
    gridColumn: true,
    gridColumnEnd: true,
    gridColumnSpan: true,
    gridColumnStart: true,
    fontWeight: true,
    lineClamp: true,
    lineHeight: true,
    opacity: true,
    order: true,
    orphans: true,
    tabSize: true,
    widows: true,
    zIndex: true,
    zoom: true,
    fillOpacity: true,
    floodOpacity: true,
    stopOpacity: true,
    strokeDasharray: true,
    strokeDashoffset: true,
    strokeMiterlimit: true,
    strokeOpacity: true,
    strokeWidth: true
  }, qb = ["Webkit", "ms", "Moz", "O"];
  Object.keys(pb).forEach(function(a) {
    qb.forEach(function(b) {
      b = b + a.charAt(0).toUpperCase() + a.substring(1);
      pb[b] = pb[a];
    });
  });
  function rb(a, b, c) {
    return null == b || "boolean" === typeof b || "" === b ? "" : c || "number" !== typeof b || 0 === b || pb.hasOwnProperty(a) && pb[a] ? ("" + b).trim() : b + "px";
  }
  function sb(a, b) {
    a = a.style;
    for (var c in b) if (b.hasOwnProperty(c)) {
      var d = 0 === c.indexOf("--"), e = rb(c, b[c], d);
      "float" === c && (c = "cssFloat");
      d ? a.setProperty(c, e) : a[c] = e;
    }
  }
  var tb = A({ menuitem: true }, { area: true, base: true, br: true, col: true, embed: true, hr: true, img: true, input: true, keygen: true, link: true, meta: true, param: true, source: true, track: true, wbr: true });
  function ub(a, b) {
    if (b) {
      if (tb[a] && (null != b.children || null != b.dangerouslySetInnerHTML)) throw Error(p(137, a));
      if (null != b.dangerouslySetInnerHTML) {
        if (null != b.children) throw Error(p(60));
        if ("object" !== typeof b.dangerouslySetInnerHTML || !("__html" in b.dangerouslySetInnerHTML)) throw Error(p(61));
      }
      if (null != b.style && "object" !== typeof b.style) throw Error(p(62));
    }
  }
  function vb(a, b) {
    if (-1 === a.indexOf("-")) return "string" === typeof b.is;
    switch (a) {
      case "annotation-xml":
      case "color-profile":
      case "font-face":
      case "font-face-src":
      case "font-face-uri":
      case "font-face-format":
      case "font-face-name":
      case "missing-glyph":
        return false;
      default:
        return true;
    }
  }
  var wb = null;
  function xb(a) {
    a = a.target || a.srcElement || window;
    a.correspondingUseElement && (a = a.correspondingUseElement);
    return 3 === a.nodeType ? a.parentNode : a;
  }
  var yb = null, zb = null, Ab = null;
  function Bb(a) {
    if (a = Cb(a)) {
      if ("function" !== typeof yb) throw Error(p(280));
      var b = a.stateNode;
      b && (b = Db(b), yb(a.stateNode, a.type, b));
    }
  }
  function Eb(a) {
    zb ? Ab ? Ab.push(a) : Ab = [a] : zb = a;
  }
  function Fb() {
    if (zb) {
      var a = zb, b = Ab;
      Ab = zb = null;
      Bb(a);
      if (b) for (a = 0; a < b.length; a++) Bb(b[a]);
    }
  }
  function Gb(a, b) {
    return a(b);
  }
  function Hb() {
  }
  var Ib = false;
  function Jb(a, b, c) {
    if (Ib) return a(b, c);
    Ib = true;
    try {
      return Gb(a, b, c);
    } finally {
      if (Ib = false, null !== zb || null !== Ab) Hb(), Fb();
    }
  }
  function Kb(a, b) {
    var c = a.stateNode;
    if (null === c) return null;
    var d = Db(c);
    if (null === d) return null;
    c = d[b];
    a: switch (b) {
      case "onClick":
      case "onClickCapture":
      case "onDoubleClick":
      case "onDoubleClickCapture":
      case "onMouseDown":
      case "onMouseDownCapture":
      case "onMouseMove":
      case "onMouseMoveCapture":
      case "onMouseUp":
      case "onMouseUpCapture":
      case "onMouseEnter":
        (d = !d.disabled) || (a = a.type, d = !("button" === a || "input" === a || "select" === a || "textarea" === a));
        a = !d;
        break a;
      default:
        a = false;
    }
    if (a) return null;
    if (c && "function" !== typeof c) throw Error(p(231, b, typeof c));
    return c;
  }
  var Lb = false;
  if (ia) try {
    var Mb = {};
    Object.defineProperty(Mb, "passive", { get: function() {
      Lb = true;
    } });
    window.addEventListener("test", Mb, Mb);
    window.removeEventListener("test", Mb, Mb);
  } catch (a) {
    Lb = false;
  }
  function Nb(a, b, c, d, e, f, g, h, k) {
    var l = Array.prototype.slice.call(arguments, 3);
    try {
      b.apply(c, l);
    } catch (m) {
      this.onError(m);
    }
  }
  var Ob = false, Pb = null, Qb = false, Rb = null, Sb = { onError: function(a) {
    Ob = true;
    Pb = a;
  } };
  function Tb(a, b, c, d, e, f, g, h, k) {
    Ob = false;
    Pb = null;
    Nb.apply(Sb, arguments);
  }
  function Ub(a, b, c, d, e, f, g, h, k) {
    Tb.apply(this, arguments);
    if (Ob) {
      if (Ob) {
        var l = Pb;
        Ob = false;
        Pb = null;
      } else throw Error(p(198));
      Qb || (Qb = true, Rb = l);
    }
  }
  function Vb(a) {
    var b = a, c = a;
    if (a.alternate) for (; b.return; ) b = b.return;
    else {
      a = b;
      do
        b = a, 0 !== (b.flags & 4098) && (c = b.return), a = b.return;
      while (a);
    }
    return 3 === b.tag ? c : null;
  }
  function Wb(a) {
    if (13 === a.tag) {
      var b = a.memoizedState;
      null === b && (a = a.alternate, null !== a && (b = a.memoizedState));
      if (null !== b) return b.dehydrated;
    }
    return null;
  }
  function Xb(a) {
    if (Vb(a) !== a) throw Error(p(188));
  }
  function Yb(a) {
    var b = a.alternate;
    if (!b) {
      b = Vb(a);
      if (null === b) throw Error(p(188));
      return b !== a ? null : a;
    }
    for (var c = a, d = b; ; ) {
      var e = c.return;
      if (null === e) break;
      var f = e.alternate;
      if (null === f) {
        d = e.return;
        if (null !== d) {
          c = d;
          continue;
        }
        break;
      }
      if (e.child === f.child) {
        for (f = e.child; f; ) {
          if (f === c) return Xb(e), a;
          if (f === d) return Xb(e), b;
          f = f.sibling;
        }
        throw Error(p(188));
      }
      if (c.return !== d.return) c = e, d = f;
      else {
        for (var g = false, h = e.child; h; ) {
          if (h === c) {
            g = true;
            c = e;
            d = f;
            break;
          }
          if (h === d) {
            g = true;
            d = e;
            c = f;
            break;
          }
          h = h.sibling;
        }
        if (!g) {
          for (h = f.child; h; ) {
            if (h === c) {
              g = true;
              c = f;
              d = e;
              break;
            }
            if (h === d) {
              g = true;
              d = f;
              c = e;
              break;
            }
            h = h.sibling;
          }
          if (!g) throw Error(p(189));
        }
      }
      if (c.alternate !== d) throw Error(p(190));
    }
    if (3 !== c.tag) throw Error(p(188));
    return c.stateNode.current === c ? a : b;
  }
  function Zb(a) {
    a = Yb(a);
    return null !== a ? $b(a) : null;
  }
  function $b(a) {
    if (5 === a.tag || 6 === a.tag) return a;
    for (a = a.child; null !== a; ) {
      var b = $b(a);
      if (null !== b) return b;
      a = a.sibling;
    }
    return null;
  }
  var ac = ca.unstable_scheduleCallback, bc = ca.unstable_cancelCallback, cc = ca.unstable_shouldYield, dc = ca.unstable_requestPaint, B = ca.unstable_now, ec = ca.unstable_getCurrentPriorityLevel, fc = ca.unstable_ImmediatePriority, gc = ca.unstable_UserBlockingPriority, hc = ca.unstable_NormalPriority, ic = ca.unstable_LowPriority, jc = ca.unstable_IdlePriority, kc = null, lc = null;
  function mc(a) {
    if (lc && "function" === typeof lc.onCommitFiberRoot) try {
      lc.onCommitFiberRoot(kc, a, void 0, 128 === (a.current.flags & 128));
    } catch (b) {
    }
  }
  var oc = Math.clz32 ? Math.clz32 : nc, pc = Math.log, qc = Math.LN2;
  function nc(a) {
    a >>>= 0;
    return 0 === a ? 32 : 31 - (pc(a) / qc | 0) | 0;
  }
  var rc = 64, sc = 4194304;
  function tc(a) {
    switch (a & -a) {
      case 1:
        return 1;
      case 2:
        return 2;
      case 4:
        return 4;
      case 8:
        return 8;
      case 16:
        return 16;
      case 32:
        return 32;
      case 64:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return a & 4194240;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
      case 67108864:
        return a & 130023424;
      case 134217728:
        return 134217728;
      case 268435456:
        return 268435456;
      case 536870912:
        return 536870912;
      case 1073741824:
        return 1073741824;
      default:
        return a;
    }
  }
  function uc(a, b) {
    var c = a.pendingLanes;
    if (0 === c) return 0;
    var d = 0, e = a.suspendedLanes, f = a.pingedLanes, g = c & 268435455;
    if (0 !== g) {
      var h = g & ~e;
      0 !== h ? d = tc(h) : (f &= g, 0 !== f && (d = tc(f)));
    } else g = c & ~e, 0 !== g ? d = tc(g) : 0 !== f && (d = tc(f));
    if (0 === d) return 0;
    if (0 !== b && b !== d && 0 === (b & e) && (e = d & -d, f = b & -b, e >= f || 16 === e && 0 !== (f & 4194240))) return b;
    0 !== (d & 4) && (d |= c & 16);
    b = a.entangledLanes;
    if (0 !== b) for (a = a.entanglements, b &= d; 0 < b; ) c = 31 - oc(b), e = 1 << c, d |= a[c], b &= ~e;
    return d;
  }
  function vc(a, b) {
    switch (a) {
      case 1:
      case 2:
      case 4:
        return b + 250;
      case 8:
      case 16:
      case 32:
      case 64:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return b + 5e3;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
      case 67108864:
        return -1;
      case 134217728:
      case 268435456:
      case 536870912:
      case 1073741824:
        return -1;
      default:
        return -1;
    }
  }
  function wc(a, b) {
    for (var c = a.suspendedLanes, d = a.pingedLanes, e = a.expirationTimes, f = a.pendingLanes; 0 < f; ) {
      var g = 31 - oc(f), h = 1 << g, k = e[g];
      if (-1 === k) {
        if (0 === (h & c) || 0 !== (h & d)) e[g] = vc(h, b);
      } else k <= b && (a.expiredLanes |= h);
      f &= ~h;
    }
  }
  function xc(a) {
    a = a.pendingLanes & -1073741825;
    return 0 !== a ? a : a & 1073741824 ? 1073741824 : 0;
  }
  function yc() {
    var a = rc;
    rc <<= 1;
    0 === (rc & 4194240) && (rc = 64);
    return a;
  }
  function zc(a) {
    for (var b = [], c = 0; 31 > c; c++) b.push(a);
    return b;
  }
  function Ac(a, b, c) {
    a.pendingLanes |= b;
    536870912 !== b && (a.suspendedLanes = 0, a.pingedLanes = 0);
    a = a.eventTimes;
    b = 31 - oc(b);
    a[b] = c;
  }
  function Bc(a, b) {
    var c = a.pendingLanes & ~b;
    a.pendingLanes = b;
    a.suspendedLanes = 0;
    a.pingedLanes = 0;
    a.expiredLanes &= b;
    a.mutableReadLanes &= b;
    a.entangledLanes &= b;
    b = a.entanglements;
    var d = a.eventTimes;
    for (a = a.expirationTimes; 0 < c; ) {
      var e = 31 - oc(c), f = 1 << e;
      b[e] = 0;
      d[e] = -1;
      a[e] = -1;
      c &= ~f;
    }
  }
  function Cc(a, b) {
    var c = a.entangledLanes |= b;
    for (a = a.entanglements; c; ) {
      var d = 31 - oc(c), e = 1 << d;
      e & b | a[d] & b && (a[d] |= b);
      c &= ~e;
    }
  }
  var C = 0;
  function Dc(a) {
    a &= -a;
    return 1 < a ? 4 < a ? 0 !== (a & 268435455) ? 16 : 536870912 : 4 : 1;
  }
  var Ec, Fc, Gc, Hc, Ic, Jc = false, Kc = [], Lc = null, Mc = null, Nc = null, Oc = /* @__PURE__ */ new Map(), Pc = /* @__PURE__ */ new Map(), Qc = [], Rc = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
  function Sc(a, b) {
    switch (a) {
      case "focusin":
      case "focusout":
        Lc = null;
        break;
      case "dragenter":
      case "dragleave":
        Mc = null;
        break;
      case "mouseover":
      case "mouseout":
        Nc = null;
        break;
      case "pointerover":
      case "pointerout":
        Oc.delete(b.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        Pc.delete(b.pointerId);
    }
  }
  function Tc(a, b, c, d, e, f) {
    if (null === a || a.nativeEvent !== f) return a = { blockedOn: b, domEventName: c, eventSystemFlags: d, nativeEvent: f, targetContainers: [e] }, null !== b && (b = Cb(b), null !== b && Fc(b)), a;
    a.eventSystemFlags |= d;
    b = a.targetContainers;
    null !== e && -1 === b.indexOf(e) && b.push(e);
    return a;
  }
  function Uc(a, b, c, d, e) {
    switch (b) {
      case "focusin":
        return Lc = Tc(Lc, a, b, c, d, e), true;
      case "dragenter":
        return Mc = Tc(Mc, a, b, c, d, e), true;
      case "mouseover":
        return Nc = Tc(Nc, a, b, c, d, e), true;
      case "pointerover":
        var f = e.pointerId;
        Oc.set(f, Tc(Oc.get(f) || null, a, b, c, d, e));
        return true;
      case "gotpointercapture":
        return f = e.pointerId, Pc.set(f, Tc(Pc.get(f) || null, a, b, c, d, e)), true;
    }
    return false;
  }
  function Vc(a) {
    var b = Wc(a.target);
    if (null !== b) {
      var c = Vb(b);
      if (null !== c) {
        if (b = c.tag, 13 === b) {
          if (b = Wb(c), null !== b) {
            a.blockedOn = b;
            Ic(a.priority, function() {
              Gc(c);
            });
            return;
          }
        } else if (3 === b && c.stateNode.current.memoizedState.isDehydrated) {
          a.blockedOn = 3 === c.tag ? c.stateNode.containerInfo : null;
          return;
        }
      }
    }
    a.blockedOn = null;
  }
  function Xc(a) {
    if (null !== a.blockedOn) return false;
    for (var b = a.targetContainers; 0 < b.length; ) {
      var c = Yc(a.domEventName, a.eventSystemFlags, b[0], a.nativeEvent);
      if (null === c) {
        c = a.nativeEvent;
        var d = new c.constructor(c.type, c);
        wb = d;
        c.target.dispatchEvent(d);
        wb = null;
      } else return b = Cb(c), null !== b && Fc(b), a.blockedOn = c, false;
      b.shift();
    }
    return true;
  }
  function Zc(a, b, c) {
    Xc(a) && c.delete(b);
  }
  function $c() {
    Jc = false;
    null !== Lc && Xc(Lc) && (Lc = null);
    null !== Mc && Xc(Mc) && (Mc = null);
    null !== Nc && Xc(Nc) && (Nc = null);
    Oc.forEach(Zc);
    Pc.forEach(Zc);
  }
  function ad(a, b) {
    a.blockedOn === b && (a.blockedOn = null, Jc || (Jc = true, ca.unstable_scheduleCallback(ca.unstable_NormalPriority, $c)));
  }
  function bd(a) {
    function b(b2) {
      return ad(b2, a);
    }
    if (0 < Kc.length) {
      ad(Kc[0], a);
      for (var c = 1; c < Kc.length; c++) {
        var d = Kc[c];
        d.blockedOn === a && (d.blockedOn = null);
      }
    }
    null !== Lc && ad(Lc, a);
    null !== Mc && ad(Mc, a);
    null !== Nc && ad(Nc, a);
    Oc.forEach(b);
    Pc.forEach(b);
    for (c = 0; c < Qc.length; c++) d = Qc[c], d.blockedOn === a && (d.blockedOn = null);
    for (; 0 < Qc.length && (c = Qc[0], null === c.blockedOn); ) Vc(c), null === c.blockedOn && Qc.shift();
  }
  var cd = ua.ReactCurrentBatchConfig, dd = true;
  function ed(a, b, c, d) {
    var e = C, f = cd.transition;
    cd.transition = null;
    try {
      C = 1, fd(a, b, c, d);
    } finally {
      C = e, cd.transition = f;
    }
  }
  function gd(a, b, c, d) {
    var e = C, f = cd.transition;
    cd.transition = null;
    try {
      C = 4, fd(a, b, c, d);
    } finally {
      C = e, cd.transition = f;
    }
  }
  function fd(a, b, c, d) {
    if (dd) {
      var e = Yc(a, b, c, d);
      if (null === e) hd(a, b, d, id, c), Sc(a, d);
      else if (Uc(e, a, b, c, d)) d.stopPropagation();
      else if (Sc(a, d), b & 4 && -1 < Rc.indexOf(a)) {
        for (; null !== e; ) {
          var f = Cb(e);
          null !== f && Ec(f);
          f = Yc(a, b, c, d);
          null === f && hd(a, b, d, id, c);
          if (f === e) break;
          e = f;
        }
        null !== e && d.stopPropagation();
      } else hd(a, b, d, null, c);
    }
  }
  var id = null;
  function Yc(a, b, c, d) {
    id = null;
    a = xb(d);
    a = Wc(a);
    if (null !== a) if (b = Vb(a), null === b) a = null;
    else if (c = b.tag, 13 === c) {
      a = Wb(b);
      if (null !== a) return a;
      a = null;
    } else if (3 === c) {
      if (b.stateNode.current.memoizedState.isDehydrated) return 3 === b.tag ? b.stateNode.containerInfo : null;
      a = null;
    } else b !== a && (a = null);
    id = a;
    return null;
  }
  function jd(a) {
    switch (a) {
      case "cancel":
      case "click":
      case "close":
      case "contextmenu":
      case "copy":
      case "cut":
      case "auxclick":
      case "dblclick":
      case "dragend":
      case "dragstart":
      case "drop":
      case "focusin":
      case "focusout":
      case "input":
      case "invalid":
      case "keydown":
      case "keypress":
      case "keyup":
      case "mousedown":
      case "mouseup":
      case "paste":
      case "pause":
      case "play":
      case "pointercancel":
      case "pointerdown":
      case "pointerup":
      case "ratechange":
      case "reset":
      case "resize":
      case "seeked":
      case "submit":
      case "touchcancel":
      case "touchend":
      case "touchstart":
      case "volumechange":
      case "change":
      case "selectionchange":
      case "textInput":
      case "compositionstart":
      case "compositionend":
      case "compositionupdate":
      case "beforeblur":
      case "afterblur":
      case "beforeinput":
      case "blur":
      case "fullscreenchange":
      case "focus":
      case "hashchange":
      case "popstate":
      case "select":
      case "selectstart":
        return 1;
      case "drag":
      case "dragenter":
      case "dragexit":
      case "dragleave":
      case "dragover":
      case "mousemove":
      case "mouseout":
      case "mouseover":
      case "pointermove":
      case "pointerout":
      case "pointerover":
      case "scroll":
      case "toggle":
      case "touchmove":
      case "wheel":
      case "mouseenter":
      case "mouseleave":
      case "pointerenter":
      case "pointerleave":
        return 4;
      case "message":
        switch (ec()) {
          case fc:
            return 1;
          case gc:
            return 4;
          case hc:
          case ic:
            return 16;
          case jc:
            return 536870912;
          default:
            return 16;
        }
      default:
        return 16;
    }
  }
  var kd = null, ld = null, md = null;
  function nd() {
    if (md) return md;
    var a, b = ld, c = b.length, d, e = "value" in kd ? kd.value : kd.textContent, f = e.length;
    for (a = 0; a < c && b[a] === e[a]; a++) ;
    var g = c - a;
    for (d = 1; d <= g && b[c - d] === e[f - d]; d++) ;
    return md = e.slice(a, 1 < d ? 1 - d : void 0);
  }
  function od(a) {
    var b = a.keyCode;
    "charCode" in a ? (a = a.charCode, 0 === a && 13 === b && (a = 13)) : a = b;
    10 === a && (a = 13);
    return 32 <= a || 13 === a ? a : 0;
  }
  function pd() {
    return true;
  }
  function qd() {
    return false;
  }
  function rd(a) {
    function b(b2, d, e, f, g) {
      this._reactName = b2;
      this._targetInst = e;
      this.type = d;
      this.nativeEvent = f;
      this.target = g;
      this.currentTarget = null;
      for (var c in a) a.hasOwnProperty(c) && (b2 = a[c], this[c] = b2 ? b2(f) : f[c]);
      this.isDefaultPrevented = (null != f.defaultPrevented ? f.defaultPrevented : false === f.returnValue) ? pd : qd;
      this.isPropagationStopped = qd;
      return this;
    }
    A(b.prototype, { preventDefault: function() {
      this.defaultPrevented = true;
      var a2 = this.nativeEvent;
      a2 && (a2.preventDefault ? a2.preventDefault() : "unknown" !== typeof a2.returnValue && (a2.returnValue = false), this.isDefaultPrevented = pd);
    }, stopPropagation: function() {
      var a2 = this.nativeEvent;
      a2 && (a2.stopPropagation ? a2.stopPropagation() : "unknown" !== typeof a2.cancelBubble && (a2.cancelBubble = true), this.isPropagationStopped = pd);
    }, persist: function() {
    }, isPersistent: pd });
    return b;
  }
  var sd = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(a) {
    return a.timeStamp || Date.now();
  }, defaultPrevented: 0, isTrusted: 0 }, td = rd(sd), ud = A({}, sd, { view: 0, detail: 0 }), vd = rd(ud), wd, xd, yd, Ad = A({}, ud, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: zd, button: 0, buttons: 0, relatedTarget: function(a) {
    return void 0 === a.relatedTarget ? a.fromElement === a.srcElement ? a.toElement : a.fromElement : a.relatedTarget;
  }, movementX: function(a) {
    if ("movementX" in a) return a.movementX;
    a !== yd && (yd && "mousemove" === a.type ? (wd = a.screenX - yd.screenX, xd = a.screenY - yd.screenY) : xd = wd = 0, yd = a);
    return wd;
  }, movementY: function(a) {
    return "movementY" in a ? a.movementY : xd;
  } }), Bd = rd(Ad), Cd = A({}, Ad, { dataTransfer: 0 }), Dd = rd(Cd), Ed = A({}, ud, { relatedTarget: 0 }), Fd = rd(Ed), Gd = A({}, sd, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), Hd = rd(Gd), Id = A({}, sd, { clipboardData: function(a) {
    return "clipboardData" in a ? a.clipboardData : window.clipboardData;
  } }), Jd = rd(Id), Kd = A({}, sd, { data: 0 }), Ld = rd(Kd), Md = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified"
  }, Nd = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta"
  }, Od = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
  function Pd(a) {
    var b = this.nativeEvent;
    return b.getModifierState ? b.getModifierState(a) : (a = Od[a]) ? !!b[a] : false;
  }
  function zd() {
    return Pd;
  }
  var Qd = A({}, ud, { key: function(a) {
    if (a.key) {
      var b = Md[a.key] || a.key;
      if ("Unidentified" !== b) return b;
    }
    return "keypress" === a.type ? (a = od(a), 13 === a ? "Enter" : String.fromCharCode(a)) : "keydown" === a.type || "keyup" === a.type ? Nd[a.keyCode] || "Unidentified" : "";
  }, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: zd, charCode: function(a) {
    return "keypress" === a.type ? od(a) : 0;
  }, keyCode: function(a) {
    return "keydown" === a.type || "keyup" === a.type ? a.keyCode : 0;
  }, which: function(a) {
    return "keypress" === a.type ? od(a) : "keydown" === a.type || "keyup" === a.type ? a.keyCode : 0;
  } }), Rd = rd(Qd), Sd = A({}, Ad, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), Td = rd(Sd), Ud = A({}, ud, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: zd }), Vd = rd(Ud), Wd = A({}, sd, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), Xd = rd(Wd), Yd = A({}, Ad, {
    deltaX: function(a) {
      return "deltaX" in a ? a.deltaX : "wheelDeltaX" in a ? -a.wheelDeltaX : 0;
    },
    deltaY: function(a) {
      return "deltaY" in a ? a.deltaY : "wheelDeltaY" in a ? -a.wheelDeltaY : "wheelDelta" in a ? -a.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), Zd = rd(Yd), $d = [9, 13, 27, 32], ae = ia && "CompositionEvent" in window, be = null;
  ia && "documentMode" in document && (be = document.documentMode);
  var ce = ia && "TextEvent" in window && !be, de = ia && (!ae || be && 8 < be && 11 >= be), ee = String.fromCharCode(32), fe = false;
  function ge(a, b) {
    switch (a) {
      case "keyup":
        return -1 !== $d.indexOf(b.keyCode);
      case "keydown":
        return 229 !== b.keyCode;
      case "keypress":
      case "mousedown":
      case "focusout":
        return true;
      default:
        return false;
    }
  }
  function he(a) {
    a = a.detail;
    return "object" === typeof a && "data" in a ? a.data : null;
  }
  var ie = false;
  function je(a, b) {
    switch (a) {
      case "compositionend":
        return he(b);
      case "keypress":
        if (32 !== b.which) return null;
        fe = true;
        return ee;
      case "textInput":
        return a = b.data, a === ee && fe ? null : a;
      default:
        return null;
    }
  }
  function ke(a, b) {
    if (ie) return "compositionend" === a || !ae && ge(a, b) ? (a = nd(), md = ld = kd = null, ie = false, a) : null;
    switch (a) {
      case "paste":
        return null;
      case "keypress":
        if (!(b.ctrlKey || b.altKey || b.metaKey) || b.ctrlKey && b.altKey) {
          if (b.char && 1 < b.char.length) return b.char;
          if (b.which) return String.fromCharCode(b.which);
        }
        return null;
      case "compositionend":
        return de && "ko" !== b.locale ? null : b.data;
      default:
        return null;
    }
  }
  var le = { color: true, date: true, datetime: true, "datetime-local": true, email: true, month: true, number: true, password: true, range: true, search: true, tel: true, text: true, time: true, url: true, week: true };
  function me(a) {
    var b = a && a.nodeName && a.nodeName.toLowerCase();
    return "input" === b ? !!le[a.type] : "textarea" === b ? true : false;
  }
  function ne(a, b, c, d) {
    Eb(d);
    b = oe(b, "onChange");
    0 < b.length && (c = new td("onChange", "change", null, c, d), a.push({ event: c, listeners: b }));
  }
  var pe = null, qe = null;
  function re(a) {
    se(a, 0);
  }
  function te(a) {
    var b = ue(a);
    if (Wa(b)) return a;
  }
  function ve(a, b) {
    if ("change" === a) return b;
  }
  var we = false;
  if (ia) {
    var xe;
    if (ia) {
      var ye = "oninput" in document;
      if (!ye) {
        var ze = document.createElement("div");
        ze.setAttribute("oninput", "return;");
        ye = "function" === typeof ze.oninput;
      }
      xe = ye;
    } else xe = false;
    we = xe && (!document.documentMode || 9 < document.documentMode);
  }
  function Ae() {
    pe && (pe.detachEvent("onpropertychange", Be), qe = pe = null);
  }
  function Be(a) {
    if ("value" === a.propertyName && te(qe)) {
      var b = [];
      ne(b, qe, a, xb(a));
      Jb(re, b);
    }
  }
  function Ce(a, b, c) {
    "focusin" === a ? (Ae(), pe = b, qe = c, pe.attachEvent("onpropertychange", Be)) : "focusout" === a && Ae();
  }
  function De(a) {
    if ("selectionchange" === a || "keyup" === a || "keydown" === a) return te(qe);
  }
  function Ee(a, b) {
    if ("click" === a) return te(b);
  }
  function Fe(a, b) {
    if ("input" === a || "change" === a) return te(b);
  }
  function Ge(a, b) {
    return a === b && (0 !== a || 1 / a === 1 / b) || a !== a && b !== b;
  }
  var He = "function" === typeof Object.is ? Object.is : Ge;
  function Ie(a, b) {
    if (He(a, b)) return true;
    if ("object" !== typeof a || null === a || "object" !== typeof b || null === b) return false;
    var c = Object.keys(a), d = Object.keys(b);
    if (c.length !== d.length) return false;
    for (d = 0; d < c.length; d++) {
      var e = c[d];
      if (!ja.call(b, e) || !He(a[e], b[e])) return false;
    }
    return true;
  }
  function Je(a) {
    for (; a && a.firstChild; ) a = a.firstChild;
    return a;
  }
  function Ke(a, b) {
    var c = Je(a);
    a = 0;
    for (var d; c; ) {
      if (3 === c.nodeType) {
        d = a + c.textContent.length;
        if (a <= b && d >= b) return { node: c, offset: b - a };
        a = d;
      }
      a: {
        for (; c; ) {
          if (c.nextSibling) {
            c = c.nextSibling;
            break a;
          }
          c = c.parentNode;
        }
        c = void 0;
      }
      c = Je(c);
    }
  }
  function Le(a, b) {
    return a && b ? a === b ? true : a && 3 === a.nodeType ? false : b && 3 === b.nodeType ? Le(a, b.parentNode) : "contains" in a ? a.contains(b) : a.compareDocumentPosition ? !!(a.compareDocumentPosition(b) & 16) : false : false;
  }
  function Me() {
    for (var a = window, b = Xa(); b instanceof a.HTMLIFrameElement; ) {
      try {
        var c = "string" === typeof b.contentWindow.location.href;
      } catch (d) {
        c = false;
      }
      if (c) a = b.contentWindow;
      else break;
      b = Xa(a.document);
    }
    return b;
  }
  function Ne(a) {
    var b = a && a.nodeName && a.nodeName.toLowerCase();
    return b && ("input" === b && ("text" === a.type || "search" === a.type || "tel" === a.type || "url" === a.type || "password" === a.type) || "textarea" === b || "true" === a.contentEditable);
  }
  function Oe(a) {
    var b = Me(), c = a.focusedElem, d = a.selectionRange;
    if (b !== c && c && c.ownerDocument && Le(c.ownerDocument.documentElement, c)) {
      if (null !== d && Ne(c)) {
        if (b = d.start, a = d.end, void 0 === a && (a = b), "selectionStart" in c) c.selectionStart = b, c.selectionEnd = Math.min(a, c.value.length);
        else if (a = (b = c.ownerDocument || document) && b.defaultView || window, a.getSelection) {
          a = a.getSelection();
          var e = c.textContent.length, f = Math.min(d.start, e);
          d = void 0 === d.end ? f : Math.min(d.end, e);
          !a.extend && f > d && (e = d, d = f, f = e);
          e = Ke(c, f);
          var g = Ke(
            c,
            d
          );
          e && g && (1 !== a.rangeCount || a.anchorNode !== e.node || a.anchorOffset !== e.offset || a.focusNode !== g.node || a.focusOffset !== g.offset) && (b = b.createRange(), b.setStart(e.node, e.offset), a.removeAllRanges(), f > d ? (a.addRange(b), a.extend(g.node, g.offset)) : (b.setEnd(g.node, g.offset), a.addRange(b)));
        }
      }
      b = [];
      for (a = c; a = a.parentNode; ) 1 === a.nodeType && b.push({ element: a, left: a.scrollLeft, top: a.scrollTop });
      "function" === typeof c.focus && c.focus();
      for (c = 0; c < b.length; c++) a = b[c], a.element.scrollLeft = a.left, a.element.scrollTop = a.top;
    }
  }
  var Pe = ia && "documentMode" in document && 11 >= document.documentMode, Qe = null, Re = null, Se = null, Te = false;
  function Ue(a, b, c) {
    var d = c.window === c ? c.document : 9 === c.nodeType ? c : c.ownerDocument;
    Te || null == Qe || Qe !== Xa(d) || (d = Qe, "selectionStart" in d && Ne(d) ? d = { start: d.selectionStart, end: d.selectionEnd } : (d = (d.ownerDocument && d.ownerDocument.defaultView || window).getSelection(), d = { anchorNode: d.anchorNode, anchorOffset: d.anchorOffset, focusNode: d.focusNode, focusOffset: d.focusOffset }), Se && Ie(Se, d) || (Se = d, d = oe(Re, "onSelect"), 0 < d.length && (b = new td("onSelect", "select", null, b, c), a.push({ event: b, listeners: d }), b.target = Qe)));
  }
  function Ve(a, b) {
    var c = {};
    c[a.toLowerCase()] = b.toLowerCase();
    c["Webkit" + a] = "webkit" + b;
    c["Moz" + a] = "moz" + b;
    return c;
  }
  var We = { animationend: Ve("Animation", "AnimationEnd"), animationiteration: Ve("Animation", "AnimationIteration"), animationstart: Ve("Animation", "AnimationStart"), transitionend: Ve("Transition", "TransitionEnd") }, Xe = {}, Ye = {};
  ia && (Ye = document.createElement("div").style, "AnimationEvent" in window || (delete We.animationend.animation, delete We.animationiteration.animation, delete We.animationstart.animation), "TransitionEvent" in window || delete We.transitionend.transition);
  function Ze(a) {
    if (Xe[a]) return Xe[a];
    if (!We[a]) return a;
    var b = We[a], c;
    for (c in b) if (b.hasOwnProperty(c) && c in Ye) return Xe[a] = b[c];
    return a;
  }
  var $e = Ze("animationend"), af = Ze("animationiteration"), bf = Ze("animationstart"), cf = Ze("transitionend"), df = /* @__PURE__ */ new Map(), ef = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
  function ff(a, b) {
    df.set(a, b);
    fa(b, [a]);
  }
  for (var gf = 0; gf < ef.length; gf++) {
    var hf = ef[gf], jf = hf.toLowerCase(), kf = hf[0].toUpperCase() + hf.slice(1);
    ff(jf, "on" + kf);
  }
  ff($e, "onAnimationEnd");
  ff(af, "onAnimationIteration");
  ff(bf, "onAnimationStart");
  ff("dblclick", "onDoubleClick");
  ff("focusin", "onFocus");
  ff("focusout", "onBlur");
  ff(cf, "onTransitionEnd");
  ha("onMouseEnter", ["mouseout", "mouseover"]);
  ha("onMouseLeave", ["mouseout", "mouseover"]);
  ha("onPointerEnter", ["pointerout", "pointerover"]);
  ha("onPointerLeave", ["pointerout", "pointerover"]);
  fa("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
  fa("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
  fa("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
  fa("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
  fa("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
  fa("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
  var lf = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), mf = new Set("cancel close invalid load scroll toggle".split(" ").concat(lf));
  function nf(a, b, c) {
    var d = a.type || "unknown-event";
    a.currentTarget = c;
    Ub(d, b, void 0, a);
    a.currentTarget = null;
  }
  function se(a, b) {
    b = 0 !== (b & 4);
    for (var c = 0; c < a.length; c++) {
      var d = a[c], e = d.event;
      d = d.listeners;
      a: {
        var f = void 0;
        if (b) for (var g = d.length - 1; 0 <= g; g--) {
          var h = d[g], k = h.instance, l = h.currentTarget;
          h = h.listener;
          if (k !== f && e.isPropagationStopped()) break a;
          nf(e, h, l);
          f = k;
        }
        else for (g = 0; g < d.length; g++) {
          h = d[g];
          k = h.instance;
          l = h.currentTarget;
          h = h.listener;
          if (k !== f && e.isPropagationStopped()) break a;
          nf(e, h, l);
          f = k;
        }
      }
    }
    if (Qb) throw a = Rb, Qb = false, Rb = null, a;
  }
  function D(a, b) {
    var c = b[of];
    void 0 === c && (c = b[of] = /* @__PURE__ */ new Set());
    var d = a + "__bubble";
    c.has(d) || (pf(b, a, 2, false), c.add(d));
  }
  function qf(a, b, c) {
    var d = 0;
    b && (d |= 4);
    pf(c, a, d, b);
  }
  var rf = "_reactListening" + Math.random().toString(36).slice(2);
  function sf(a) {
    if (!a[rf]) {
      a[rf] = true;
      da.forEach(function(b2) {
        "selectionchange" !== b2 && (mf.has(b2) || qf(b2, false, a), qf(b2, true, a));
      });
      var b = 9 === a.nodeType ? a : a.ownerDocument;
      null === b || b[rf] || (b[rf] = true, qf("selectionchange", false, b));
    }
  }
  function pf(a, b, c, d) {
    switch (jd(b)) {
      case 1:
        var e = ed;
        break;
      case 4:
        e = gd;
        break;
      default:
        e = fd;
    }
    c = e.bind(null, b, c, a);
    e = void 0;
    !Lb || "touchstart" !== b && "touchmove" !== b && "wheel" !== b || (e = true);
    d ? void 0 !== e ? a.addEventListener(b, c, { capture: true, passive: e }) : a.addEventListener(b, c, true) : void 0 !== e ? a.addEventListener(b, c, { passive: e }) : a.addEventListener(b, c, false);
  }
  function hd(a, b, c, d, e) {
    var f = d;
    if (0 === (b & 1) && 0 === (b & 2) && null !== d) a: for (; ; ) {
      if (null === d) return;
      var g = d.tag;
      if (3 === g || 4 === g) {
        var h = d.stateNode.containerInfo;
        if (h === e || 8 === h.nodeType && h.parentNode === e) break;
        if (4 === g) for (g = d.return; null !== g; ) {
          var k = g.tag;
          if (3 === k || 4 === k) {
            if (k = g.stateNode.containerInfo, k === e || 8 === k.nodeType && k.parentNode === e) return;
          }
          g = g.return;
        }
        for (; null !== h; ) {
          g = Wc(h);
          if (null === g) return;
          k = g.tag;
          if (5 === k || 6 === k) {
            d = f = g;
            continue a;
          }
          h = h.parentNode;
        }
      }
      d = d.return;
    }
    Jb(function() {
      var d2 = f, e2 = xb(c), g2 = [];
      a: {
        var h2 = df.get(a);
        if (void 0 !== h2) {
          var k2 = td, n = a;
          switch (a) {
            case "keypress":
              if (0 === od(c)) break a;
            case "keydown":
            case "keyup":
              k2 = Rd;
              break;
            case "focusin":
              n = "focus";
              k2 = Fd;
              break;
            case "focusout":
              n = "blur";
              k2 = Fd;
              break;
            case "beforeblur":
            case "afterblur":
              k2 = Fd;
              break;
            case "click":
              if (2 === c.button) break a;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              k2 = Bd;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              k2 = Dd;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              k2 = Vd;
              break;
            case $e:
            case af:
            case bf:
              k2 = Hd;
              break;
            case cf:
              k2 = Xd;
              break;
            case "scroll":
              k2 = vd;
              break;
            case "wheel":
              k2 = Zd;
              break;
            case "copy":
            case "cut":
            case "paste":
              k2 = Jd;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              k2 = Td;
          }
          var t = 0 !== (b & 4), J = !t && "scroll" === a, x = t ? null !== h2 ? h2 + "Capture" : null : h2;
          t = [];
          for (var w = d2, u; null !== w; ) {
            u = w;
            var F = u.stateNode;
            5 === u.tag && null !== F && (u = F, null !== x && (F = Kb(w, x), null != F && t.push(tf(w, F, u))));
            if (J) break;
            w = w.return;
          }
          0 < t.length && (h2 = new k2(h2, n, null, c, e2), g2.push({ event: h2, listeners: t }));
        }
      }
      if (0 === (b & 7)) {
        a: {
          h2 = "mouseover" === a || "pointerover" === a;
          k2 = "mouseout" === a || "pointerout" === a;
          if (h2 && c !== wb && (n = c.relatedTarget || c.fromElement) && (Wc(n) || n[uf])) break a;
          if (k2 || h2) {
            h2 = e2.window === e2 ? e2 : (h2 = e2.ownerDocument) ? h2.defaultView || h2.parentWindow : window;
            if (k2) {
              if (n = c.relatedTarget || c.toElement, k2 = d2, n = n ? Wc(n) : null, null !== n && (J = Vb(n), n !== J || 5 !== n.tag && 6 !== n.tag)) n = null;
            } else k2 = null, n = d2;
            if (k2 !== n) {
              t = Bd;
              F = "onMouseLeave";
              x = "onMouseEnter";
              w = "mouse";
              if ("pointerout" === a || "pointerover" === a) t = Td, F = "onPointerLeave", x = "onPointerEnter", w = "pointer";
              J = null == k2 ? h2 : ue(k2);
              u = null == n ? h2 : ue(n);
              h2 = new t(F, w + "leave", k2, c, e2);
              h2.target = J;
              h2.relatedTarget = u;
              F = null;
              Wc(e2) === d2 && (t = new t(x, w + "enter", n, c, e2), t.target = u, t.relatedTarget = J, F = t);
              J = F;
              if (k2 && n) b: {
                t = k2;
                x = n;
                w = 0;
                for (u = t; u; u = vf(u)) w++;
                u = 0;
                for (F = x; F; F = vf(F)) u++;
                for (; 0 < w - u; ) t = vf(t), w--;
                for (; 0 < u - w; ) x = vf(x), u--;
                for (; w--; ) {
                  if (t === x || null !== x && t === x.alternate) break b;
                  t = vf(t);
                  x = vf(x);
                }
                t = null;
              }
              else t = null;
              null !== k2 && wf(g2, h2, k2, t, false);
              null !== n && null !== J && wf(g2, J, n, t, true);
            }
          }
        }
        a: {
          h2 = d2 ? ue(d2) : window;
          k2 = h2.nodeName && h2.nodeName.toLowerCase();
          if ("select" === k2 || "input" === k2 && "file" === h2.type) var na = ve;
          else if (me(h2)) if (we) na = Fe;
          else {
            na = De;
            var xa = Ce;
          }
          else (k2 = h2.nodeName) && "input" === k2.toLowerCase() && ("checkbox" === h2.type || "radio" === h2.type) && (na = Ee);
          if (na && (na = na(a, d2))) {
            ne(g2, na, c, e2);
            break a;
          }
          xa && xa(a, h2, d2);
          "focusout" === a && (xa = h2._wrapperState) && xa.controlled && "number" === h2.type && cb(h2, "number", h2.value);
        }
        xa = d2 ? ue(d2) : window;
        switch (a) {
          case "focusin":
            if (me(xa) || "true" === xa.contentEditable) Qe = xa, Re = d2, Se = null;
            break;
          case "focusout":
            Se = Re = Qe = null;
            break;
          case "mousedown":
            Te = true;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            Te = false;
            Ue(g2, c, e2);
            break;
          case "selectionchange":
            if (Pe) break;
          case "keydown":
          case "keyup":
            Ue(g2, c, e2);
        }
        var $a;
        if (ae) b: {
          switch (a) {
            case "compositionstart":
              var ba = "onCompositionStart";
              break b;
            case "compositionend":
              ba = "onCompositionEnd";
              break b;
            case "compositionupdate":
              ba = "onCompositionUpdate";
              break b;
          }
          ba = void 0;
        }
        else ie ? ge(a, c) && (ba = "onCompositionEnd") : "keydown" === a && 229 === c.keyCode && (ba = "onCompositionStart");
        ba && (de && "ko" !== c.locale && (ie || "onCompositionStart" !== ba ? "onCompositionEnd" === ba && ie && ($a = nd()) : (kd = e2, ld = "value" in kd ? kd.value : kd.textContent, ie = true)), xa = oe(d2, ba), 0 < xa.length && (ba = new Ld(ba, a, null, c, e2), g2.push({ event: ba, listeners: xa }), $a ? ba.data = $a : ($a = he(c), null !== $a && (ba.data = $a))));
        if ($a = ce ? je(a, c) : ke(a, c)) d2 = oe(d2, "onBeforeInput"), 0 < d2.length && (e2 = new Ld("onBeforeInput", "beforeinput", null, c, e2), g2.push({ event: e2, listeners: d2 }), e2.data = $a);
      }
      se(g2, b);
    });
  }
  function tf(a, b, c) {
    return { instance: a, listener: b, currentTarget: c };
  }
  function oe(a, b) {
    for (var c = b + "Capture", d = []; null !== a; ) {
      var e = a, f = e.stateNode;
      5 === e.tag && null !== f && (e = f, f = Kb(a, c), null != f && d.unshift(tf(a, f, e)), f = Kb(a, b), null != f && d.push(tf(a, f, e)));
      a = a.return;
    }
    return d;
  }
  function vf(a) {
    if (null === a) return null;
    do
      a = a.return;
    while (a && 5 !== a.tag);
    return a ? a : null;
  }
  function wf(a, b, c, d, e) {
    for (var f = b._reactName, g = []; null !== c && c !== d; ) {
      var h = c, k = h.alternate, l = h.stateNode;
      if (null !== k && k === d) break;
      5 === h.tag && null !== l && (h = l, e ? (k = Kb(c, f), null != k && g.unshift(tf(c, k, h))) : e || (k = Kb(c, f), null != k && g.push(tf(c, k, h))));
      c = c.return;
    }
    0 !== g.length && a.push({ event: b, listeners: g });
  }
  var xf = /\r\n?/g, yf = /\u0000|\uFFFD/g;
  function zf(a) {
    return ("string" === typeof a ? a : "" + a).replace(xf, "\n").replace(yf, "");
  }
  function Af(a, b, c) {
    b = zf(b);
    if (zf(a) !== b && c) throw Error(p(425));
  }
  function Bf() {
  }
  var Cf = null, Df = null;
  function Ef(a, b) {
    return "textarea" === a || "noscript" === a || "string" === typeof b.children || "number" === typeof b.children || "object" === typeof b.dangerouslySetInnerHTML && null !== b.dangerouslySetInnerHTML && null != b.dangerouslySetInnerHTML.__html;
  }
  var Ff = "function" === typeof setTimeout ? setTimeout : void 0, Gf = "function" === typeof clearTimeout ? clearTimeout : void 0, Hf = "function" === typeof Promise ? Promise : void 0, Jf = "function" === typeof queueMicrotask ? queueMicrotask : "undefined" !== typeof Hf ? function(a) {
    return Hf.resolve(null).then(a).catch(If);
  } : Ff;
  function If(a) {
    setTimeout(function() {
      throw a;
    });
  }
  function Kf(a, b) {
    var c = b, d = 0;
    do {
      var e = c.nextSibling;
      a.removeChild(c);
      if (e && 8 === e.nodeType) if (c = e.data, "/$" === c) {
        if (0 === d) {
          a.removeChild(e);
          bd(b);
          return;
        }
        d--;
      } else "$" !== c && "$?" !== c && "$!" !== c || d++;
      c = e;
    } while (c);
    bd(b);
  }
  function Lf(a) {
    for (; null != a; a = a.nextSibling) {
      var b = a.nodeType;
      if (1 === b || 3 === b) break;
      if (8 === b) {
        b = a.data;
        if ("$" === b || "$!" === b || "$?" === b) break;
        if ("/$" === b) return null;
      }
    }
    return a;
  }
  function Mf(a) {
    a = a.previousSibling;
    for (var b = 0; a; ) {
      if (8 === a.nodeType) {
        var c = a.data;
        if ("$" === c || "$!" === c || "$?" === c) {
          if (0 === b) return a;
          b--;
        } else "/$" === c && b++;
      }
      a = a.previousSibling;
    }
    return null;
  }
  var Nf = Math.random().toString(36).slice(2), Of = "__reactFiber$" + Nf, Pf = "__reactProps$" + Nf, uf = "__reactContainer$" + Nf, of = "__reactEvents$" + Nf, Qf = "__reactListeners$" + Nf, Rf = "__reactHandles$" + Nf;
  function Wc(a) {
    var b = a[Of];
    if (b) return b;
    for (var c = a.parentNode; c; ) {
      if (b = c[uf] || c[Of]) {
        c = b.alternate;
        if (null !== b.child || null !== c && null !== c.child) for (a = Mf(a); null !== a; ) {
          if (c = a[Of]) return c;
          a = Mf(a);
        }
        return b;
      }
      a = c;
      c = a.parentNode;
    }
    return null;
  }
  function Cb(a) {
    a = a[Of] || a[uf];
    return !a || 5 !== a.tag && 6 !== a.tag && 13 !== a.tag && 3 !== a.tag ? null : a;
  }
  function ue(a) {
    if (5 === a.tag || 6 === a.tag) return a.stateNode;
    throw Error(p(33));
  }
  function Db(a) {
    return a[Pf] || null;
  }
  var Sf = [], Tf = -1;
  function Uf(a) {
    return { current: a };
  }
  function E(a) {
    0 > Tf || (a.current = Sf[Tf], Sf[Tf] = null, Tf--);
  }
  function G(a, b) {
    Tf++;
    Sf[Tf] = a.current;
    a.current = b;
  }
  var Vf = {}, H = Uf(Vf), Wf = Uf(false), Xf = Vf;
  function Yf(a, b) {
    var c = a.type.contextTypes;
    if (!c) return Vf;
    var d = a.stateNode;
    if (d && d.__reactInternalMemoizedUnmaskedChildContext === b) return d.__reactInternalMemoizedMaskedChildContext;
    var e = {}, f;
    for (f in c) e[f] = b[f];
    d && (a = a.stateNode, a.__reactInternalMemoizedUnmaskedChildContext = b, a.__reactInternalMemoizedMaskedChildContext = e);
    return e;
  }
  function Zf(a) {
    a = a.childContextTypes;
    return null !== a && void 0 !== a;
  }
  function $f() {
    E(Wf);
    E(H);
  }
  function ag(a, b, c) {
    if (H.current !== Vf) throw Error(p(168));
    G(H, b);
    G(Wf, c);
  }
  function bg(a, b, c) {
    var d = a.stateNode;
    b = b.childContextTypes;
    if ("function" !== typeof d.getChildContext) return c;
    d = d.getChildContext();
    for (var e in d) if (!(e in b)) throw Error(p(108, Ra(a) || "Unknown", e));
    return A({}, c, d);
  }
  function cg(a) {
    a = (a = a.stateNode) && a.__reactInternalMemoizedMergedChildContext || Vf;
    Xf = H.current;
    G(H, a);
    G(Wf, Wf.current);
    return true;
  }
  function dg(a, b, c) {
    var d = a.stateNode;
    if (!d) throw Error(p(169));
    c ? (a = bg(a, b, Xf), d.__reactInternalMemoizedMergedChildContext = a, E(Wf), E(H), G(H, a)) : E(Wf);
    G(Wf, c);
  }
  var eg = null, fg = false, gg = false;
  function hg(a) {
    null === eg ? eg = [a] : eg.push(a);
  }
  function ig(a) {
    fg = true;
    hg(a);
  }
  function jg() {
    if (!gg && null !== eg) {
      gg = true;
      var a = 0, b = C;
      try {
        var c = eg;
        for (C = 1; a < c.length; a++) {
          var d = c[a];
          do
            d = d(true);
          while (null !== d);
        }
        eg = null;
        fg = false;
      } catch (e) {
        throw null !== eg && (eg = eg.slice(a + 1)), ac(fc, jg), e;
      } finally {
        C = b, gg = false;
      }
    }
    return null;
  }
  var kg = [], lg = 0, mg = null, ng = 0, og = [], pg = 0, qg = null, rg = 1, sg = "";
  function tg(a, b) {
    kg[lg++] = ng;
    kg[lg++] = mg;
    mg = a;
    ng = b;
  }
  function ug(a, b, c) {
    og[pg++] = rg;
    og[pg++] = sg;
    og[pg++] = qg;
    qg = a;
    var d = rg;
    a = sg;
    var e = 32 - oc(d) - 1;
    d &= ~(1 << e);
    c += 1;
    var f = 32 - oc(b) + e;
    if (30 < f) {
      var g = e - e % 5;
      f = (d & (1 << g) - 1).toString(32);
      d >>= g;
      e -= g;
      rg = 1 << 32 - oc(b) + e | c << e | d;
      sg = f + a;
    } else rg = 1 << f | c << e | d, sg = a;
  }
  function vg(a) {
    null !== a.return && (tg(a, 1), ug(a, 1, 0));
  }
  function wg(a) {
    for (; a === mg; ) mg = kg[--lg], kg[lg] = null, ng = kg[--lg], kg[lg] = null;
    for (; a === qg; ) qg = og[--pg], og[pg] = null, sg = og[--pg], og[pg] = null, rg = og[--pg], og[pg] = null;
  }
  var xg = null, yg = null, I = false, zg = null;
  function Ag(a, b) {
    var c = Bg(5, null, null, 0);
    c.elementType = "DELETED";
    c.stateNode = b;
    c.return = a;
    b = a.deletions;
    null === b ? (a.deletions = [c], a.flags |= 16) : b.push(c);
  }
  function Cg(a, b) {
    switch (a.tag) {
      case 5:
        var c = a.type;
        b = 1 !== b.nodeType || c.toLowerCase() !== b.nodeName.toLowerCase() ? null : b;
        return null !== b ? (a.stateNode = b, xg = a, yg = Lf(b.firstChild), true) : false;
      case 6:
        return b = "" === a.pendingProps || 3 !== b.nodeType ? null : b, null !== b ? (a.stateNode = b, xg = a, yg = null, true) : false;
      case 13:
        return b = 8 !== b.nodeType ? null : b, null !== b ? (c = null !== qg ? { id: rg, overflow: sg } : null, a.memoizedState = { dehydrated: b, treeContext: c, retryLane: 1073741824 }, c = Bg(18, null, null, 0), c.stateNode = b, c.return = a, a.child = c, xg = a, yg = null, true) : false;
      default:
        return false;
    }
  }
  function Dg(a) {
    return 0 !== (a.mode & 1) && 0 === (a.flags & 128);
  }
  function Eg(a) {
    if (I) {
      var b = yg;
      if (b) {
        var c = b;
        if (!Cg(a, b)) {
          if (Dg(a)) throw Error(p(418));
          b = Lf(c.nextSibling);
          var d = xg;
          b && Cg(a, b) ? Ag(d, c) : (a.flags = a.flags & -4097 | 2, I = false, xg = a);
        }
      } else {
        if (Dg(a)) throw Error(p(418));
        a.flags = a.flags & -4097 | 2;
        I = false;
        xg = a;
      }
    }
  }
  function Fg(a) {
    for (a = a.return; null !== a && 5 !== a.tag && 3 !== a.tag && 13 !== a.tag; ) a = a.return;
    xg = a;
  }
  function Gg(a) {
    if (a !== xg) return false;
    if (!I) return Fg(a), I = true, false;
    var b;
    (b = 3 !== a.tag) && !(b = 5 !== a.tag) && (b = a.type, b = "head" !== b && "body" !== b && !Ef(a.type, a.memoizedProps));
    if (b && (b = yg)) {
      if (Dg(a)) throw Hg(), Error(p(418));
      for (; b; ) Ag(a, b), b = Lf(b.nextSibling);
    }
    Fg(a);
    if (13 === a.tag) {
      a = a.memoizedState;
      a = null !== a ? a.dehydrated : null;
      if (!a) throw Error(p(317));
      a: {
        a = a.nextSibling;
        for (b = 0; a; ) {
          if (8 === a.nodeType) {
            var c = a.data;
            if ("/$" === c) {
              if (0 === b) {
                yg = Lf(a.nextSibling);
                break a;
              }
              b--;
            } else "$" !== c && "$!" !== c && "$?" !== c || b++;
          }
          a = a.nextSibling;
        }
        yg = null;
      }
    } else yg = xg ? Lf(a.stateNode.nextSibling) : null;
    return true;
  }
  function Hg() {
    for (var a = yg; a; ) a = Lf(a.nextSibling);
  }
  function Ig() {
    yg = xg = null;
    I = false;
  }
  function Jg(a) {
    null === zg ? zg = [a] : zg.push(a);
  }
  var Kg = ua.ReactCurrentBatchConfig;
  function Lg(a, b, c) {
    a = c.ref;
    if (null !== a && "function" !== typeof a && "object" !== typeof a) {
      if (c._owner) {
        c = c._owner;
        if (c) {
          if (1 !== c.tag) throw Error(p(309));
          var d = c.stateNode;
        }
        if (!d) throw Error(p(147, a));
        var e = d, f = "" + a;
        if (null !== b && null !== b.ref && "function" === typeof b.ref && b.ref._stringRef === f) return b.ref;
        b = function(a2) {
          var b2 = e.refs;
          null === a2 ? delete b2[f] : b2[f] = a2;
        };
        b._stringRef = f;
        return b;
      }
      if ("string" !== typeof a) throw Error(p(284));
      if (!c._owner) throw Error(p(290, a));
    }
    return a;
  }
  function Mg(a, b) {
    a = Object.prototype.toString.call(b);
    throw Error(p(31, "[object Object]" === a ? "object with keys {" + Object.keys(b).join(", ") + "}" : a));
  }
  function Ng(a) {
    var b = a._init;
    return b(a._payload);
  }
  function Og(a) {
    function b(b2, c2) {
      if (a) {
        var d2 = b2.deletions;
        null === d2 ? (b2.deletions = [c2], b2.flags |= 16) : d2.push(c2);
      }
    }
    function c(c2, d2) {
      if (!a) return null;
      for (; null !== d2; ) b(c2, d2), d2 = d2.sibling;
      return null;
    }
    function d(a2, b2) {
      for (a2 = /* @__PURE__ */ new Map(); null !== b2; ) null !== b2.key ? a2.set(b2.key, b2) : a2.set(b2.index, b2), b2 = b2.sibling;
      return a2;
    }
    function e(a2, b2) {
      a2 = Pg(a2, b2);
      a2.index = 0;
      a2.sibling = null;
      return a2;
    }
    function f(b2, c2, d2) {
      b2.index = d2;
      if (!a) return b2.flags |= 1048576, c2;
      d2 = b2.alternate;
      if (null !== d2) return d2 = d2.index, d2 < c2 ? (b2.flags |= 2, c2) : d2;
      b2.flags |= 2;
      return c2;
    }
    function g(b2) {
      a && null === b2.alternate && (b2.flags |= 2);
      return b2;
    }
    function h(a2, b2, c2, d2) {
      if (null === b2 || 6 !== b2.tag) return b2 = Qg(c2, a2.mode, d2), b2.return = a2, b2;
      b2 = e(b2, c2);
      b2.return = a2;
      return b2;
    }
    function k(a2, b2, c2, d2) {
      var f2 = c2.type;
      if (f2 === ya) return m(a2, b2, c2.props.children, d2, c2.key);
      if (null !== b2 && (b2.elementType === f2 || "object" === typeof f2 && null !== f2 && f2.$$typeof === Ha && Ng(f2) === b2.type)) return d2 = e(b2, c2.props), d2.ref = Lg(a2, b2, c2), d2.return = a2, d2;
      d2 = Rg(c2.type, c2.key, c2.props, null, a2.mode, d2);
      d2.ref = Lg(a2, b2, c2);
      d2.return = a2;
      return d2;
    }
    function l(a2, b2, c2, d2) {
      if (null === b2 || 4 !== b2.tag || b2.stateNode.containerInfo !== c2.containerInfo || b2.stateNode.implementation !== c2.implementation) return b2 = Sg(c2, a2.mode, d2), b2.return = a2, b2;
      b2 = e(b2, c2.children || []);
      b2.return = a2;
      return b2;
    }
    function m(a2, b2, c2, d2, f2) {
      if (null === b2 || 7 !== b2.tag) return b2 = Tg(c2, a2.mode, d2, f2), b2.return = a2, b2;
      b2 = e(b2, c2);
      b2.return = a2;
      return b2;
    }
    function q(a2, b2, c2) {
      if ("string" === typeof b2 && "" !== b2 || "number" === typeof b2) return b2 = Qg("" + b2, a2.mode, c2), b2.return = a2, b2;
      if ("object" === typeof b2 && null !== b2) {
        switch (b2.$$typeof) {
          case va:
            return c2 = Rg(b2.type, b2.key, b2.props, null, a2.mode, c2), c2.ref = Lg(a2, null, b2), c2.return = a2, c2;
          case wa:
            return b2 = Sg(b2, a2.mode, c2), b2.return = a2, b2;
          case Ha:
            var d2 = b2._init;
            return q(a2, d2(b2._payload), c2);
        }
        if (eb(b2) || Ka(b2)) return b2 = Tg(b2, a2.mode, c2, null), b2.return = a2, b2;
        Mg(a2, b2);
      }
      return null;
    }
    function r(a2, b2, c2, d2) {
      var e2 = null !== b2 ? b2.key : null;
      if ("string" === typeof c2 && "" !== c2 || "number" === typeof c2) return null !== e2 ? null : h(a2, b2, "" + c2, d2);
      if ("object" === typeof c2 && null !== c2) {
        switch (c2.$$typeof) {
          case va:
            return c2.key === e2 ? k(a2, b2, c2, d2) : null;
          case wa:
            return c2.key === e2 ? l(a2, b2, c2, d2) : null;
          case Ha:
            return e2 = c2._init, r(
              a2,
              b2,
              e2(c2._payload),
              d2
            );
        }
        if (eb(c2) || Ka(c2)) return null !== e2 ? null : m(a2, b2, c2, d2, null);
        Mg(a2, c2);
      }
      return null;
    }
    function y(a2, b2, c2, d2, e2) {
      if ("string" === typeof d2 && "" !== d2 || "number" === typeof d2) return a2 = a2.get(c2) || null, h(b2, a2, "" + d2, e2);
      if ("object" === typeof d2 && null !== d2) {
        switch (d2.$$typeof) {
          case va:
            return a2 = a2.get(null === d2.key ? c2 : d2.key) || null, k(b2, a2, d2, e2);
          case wa:
            return a2 = a2.get(null === d2.key ? c2 : d2.key) || null, l(b2, a2, d2, e2);
          case Ha:
            var f2 = d2._init;
            return y(a2, b2, c2, f2(d2._payload), e2);
        }
        if (eb(d2) || Ka(d2)) return a2 = a2.get(c2) || null, m(b2, a2, d2, e2, null);
        Mg(b2, d2);
      }
      return null;
    }
    function n(e2, g2, h2, k2) {
      for (var l2 = null, m2 = null, u = g2, w = g2 = 0, x = null; null !== u && w < h2.length; w++) {
        u.index > w ? (x = u, u = null) : x = u.sibling;
        var n2 = r(e2, u, h2[w], k2);
        if (null === n2) {
          null === u && (u = x);
          break;
        }
        a && u && null === n2.alternate && b(e2, u);
        g2 = f(n2, g2, w);
        null === m2 ? l2 = n2 : m2.sibling = n2;
        m2 = n2;
        u = x;
      }
      if (w === h2.length) return c(e2, u), I && tg(e2, w), l2;
      if (null === u) {
        for (; w < h2.length; w++) u = q(e2, h2[w], k2), null !== u && (g2 = f(u, g2, w), null === m2 ? l2 = u : m2.sibling = u, m2 = u);
        I && tg(e2, w);
        return l2;
      }
      for (u = d(e2, u); w < h2.length; w++) x = y(u, e2, w, h2[w], k2), null !== x && (a && null !== x.alternate && u.delete(null === x.key ? w : x.key), g2 = f(x, g2, w), null === m2 ? l2 = x : m2.sibling = x, m2 = x);
      a && u.forEach(function(a2) {
        return b(e2, a2);
      });
      I && tg(e2, w);
      return l2;
    }
    function t(e2, g2, h2, k2) {
      var l2 = Ka(h2);
      if ("function" !== typeof l2) throw Error(p(150));
      h2 = l2.call(h2);
      if (null == h2) throw Error(p(151));
      for (var u = l2 = null, m2 = g2, w = g2 = 0, x = null, n2 = h2.next(); null !== m2 && !n2.done; w++, n2 = h2.next()) {
        m2.index > w ? (x = m2, m2 = null) : x = m2.sibling;
        var t2 = r(e2, m2, n2.value, k2);
        if (null === t2) {
          null === m2 && (m2 = x);
          break;
        }
        a && m2 && null === t2.alternate && b(e2, m2);
        g2 = f(t2, g2, w);
        null === u ? l2 = t2 : u.sibling = t2;
        u = t2;
        m2 = x;
      }
      if (n2.done) return c(
        e2,
        m2
      ), I && tg(e2, w), l2;
      if (null === m2) {
        for (; !n2.done; w++, n2 = h2.next()) n2 = q(e2, n2.value, k2), null !== n2 && (g2 = f(n2, g2, w), null === u ? l2 = n2 : u.sibling = n2, u = n2);
        I && tg(e2, w);
        return l2;
      }
      for (m2 = d(e2, m2); !n2.done; w++, n2 = h2.next()) n2 = y(m2, e2, w, n2.value, k2), null !== n2 && (a && null !== n2.alternate && m2.delete(null === n2.key ? w : n2.key), g2 = f(n2, g2, w), null === u ? l2 = n2 : u.sibling = n2, u = n2);
      a && m2.forEach(function(a2) {
        return b(e2, a2);
      });
      I && tg(e2, w);
      return l2;
    }
    function J(a2, d2, f2, h2) {
      "object" === typeof f2 && null !== f2 && f2.type === ya && null === f2.key && (f2 = f2.props.children);
      if ("object" === typeof f2 && null !== f2) {
        switch (f2.$$typeof) {
          case va:
            a: {
              for (var k2 = f2.key, l2 = d2; null !== l2; ) {
                if (l2.key === k2) {
                  k2 = f2.type;
                  if (k2 === ya) {
                    if (7 === l2.tag) {
                      c(a2, l2.sibling);
                      d2 = e(l2, f2.props.children);
                      d2.return = a2;
                      a2 = d2;
                      break a;
                    }
                  } else if (l2.elementType === k2 || "object" === typeof k2 && null !== k2 && k2.$$typeof === Ha && Ng(k2) === l2.type) {
                    c(a2, l2.sibling);
                    d2 = e(l2, f2.props);
                    d2.ref = Lg(a2, l2, f2);
                    d2.return = a2;
                    a2 = d2;
                    break a;
                  }
                  c(a2, l2);
                  break;
                } else b(a2, l2);
                l2 = l2.sibling;
              }
              f2.type === ya ? (d2 = Tg(f2.props.children, a2.mode, h2, f2.key), d2.return = a2, a2 = d2) : (h2 = Rg(f2.type, f2.key, f2.props, null, a2.mode, h2), h2.ref = Lg(a2, d2, f2), h2.return = a2, a2 = h2);
            }
            return g(a2);
          case wa:
            a: {
              for (l2 = f2.key; null !== d2; ) {
                if (d2.key === l2) if (4 === d2.tag && d2.stateNode.containerInfo === f2.containerInfo && d2.stateNode.implementation === f2.implementation) {
                  c(a2, d2.sibling);
                  d2 = e(d2, f2.children || []);
                  d2.return = a2;
                  a2 = d2;
                  break a;
                } else {
                  c(a2, d2);
                  break;
                }
                else b(a2, d2);
                d2 = d2.sibling;
              }
              d2 = Sg(f2, a2.mode, h2);
              d2.return = a2;
              a2 = d2;
            }
            return g(a2);
          case Ha:
            return l2 = f2._init, J(a2, d2, l2(f2._payload), h2);
        }
        if (eb(f2)) return n(a2, d2, f2, h2);
        if (Ka(f2)) return t(a2, d2, f2, h2);
        Mg(a2, f2);
      }
      return "string" === typeof f2 && "" !== f2 || "number" === typeof f2 ? (f2 = "" + f2, null !== d2 && 6 === d2.tag ? (c(a2, d2.sibling), d2 = e(d2, f2), d2.return = a2, a2 = d2) : (c(a2, d2), d2 = Qg(f2, a2.mode, h2), d2.return = a2, a2 = d2), g(a2)) : c(a2, d2);
    }
    return J;
  }
  var Ug = Og(true), Vg = Og(false), Wg = Uf(null), Xg = null, Yg = null, Zg = null;
  function $g() {
    Zg = Yg = Xg = null;
  }
  function ah(a) {
    var b = Wg.current;
    E(Wg);
    a._currentValue = b;
  }
  function bh(a, b, c) {
    for (; null !== a; ) {
      var d = a.alternate;
      (a.childLanes & b) !== b ? (a.childLanes |= b, null !== d && (d.childLanes |= b)) : null !== d && (d.childLanes & b) !== b && (d.childLanes |= b);
      if (a === c) break;
      a = a.return;
    }
  }
  function ch(a, b) {
    Xg = a;
    Zg = Yg = null;
    a = a.dependencies;
    null !== a && null !== a.firstContext && (0 !== (a.lanes & b) && (dh = true), a.firstContext = null);
  }
  function eh(a) {
    var b = a._currentValue;
    if (Zg !== a) if (a = { context: a, memoizedValue: b, next: null }, null === Yg) {
      if (null === Xg) throw Error(p(308));
      Yg = a;
      Xg.dependencies = { lanes: 0, firstContext: a };
    } else Yg = Yg.next = a;
    return b;
  }
  var fh = null;
  function gh(a) {
    null === fh ? fh = [a] : fh.push(a);
  }
  function hh(a, b, c, d) {
    var e = b.interleaved;
    null === e ? (c.next = c, gh(b)) : (c.next = e.next, e.next = c);
    b.interleaved = c;
    return ih(a, d);
  }
  function ih(a, b) {
    a.lanes |= b;
    var c = a.alternate;
    null !== c && (c.lanes |= b);
    c = a;
    for (a = a.return; null !== a; ) a.childLanes |= b, c = a.alternate, null !== c && (c.childLanes |= b), c = a, a = a.return;
    return 3 === c.tag ? c.stateNode : null;
  }
  var jh = false;
  function kh(a) {
    a.updateQueue = { baseState: a.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
  }
  function lh(a, b) {
    a = a.updateQueue;
    b.updateQueue === a && (b.updateQueue = { baseState: a.baseState, firstBaseUpdate: a.firstBaseUpdate, lastBaseUpdate: a.lastBaseUpdate, shared: a.shared, effects: a.effects });
  }
  function mh(a, b) {
    return { eventTime: a, lane: b, tag: 0, payload: null, callback: null, next: null };
  }
  function nh(a, b, c) {
    var d = a.updateQueue;
    if (null === d) return null;
    d = d.shared;
    if (0 !== (K & 2)) {
      var e = d.pending;
      null === e ? b.next = b : (b.next = e.next, e.next = b);
      d.pending = b;
      return ih(a, c);
    }
    e = d.interleaved;
    null === e ? (b.next = b, gh(d)) : (b.next = e.next, e.next = b);
    d.interleaved = b;
    return ih(a, c);
  }
  function oh(a, b, c) {
    b = b.updateQueue;
    if (null !== b && (b = b.shared, 0 !== (c & 4194240))) {
      var d = b.lanes;
      d &= a.pendingLanes;
      c |= d;
      b.lanes = c;
      Cc(a, c);
    }
  }
  function ph(a, b) {
    var c = a.updateQueue, d = a.alternate;
    if (null !== d && (d = d.updateQueue, c === d)) {
      var e = null, f = null;
      c = c.firstBaseUpdate;
      if (null !== c) {
        do {
          var g = { eventTime: c.eventTime, lane: c.lane, tag: c.tag, payload: c.payload, callback: c.callback, next: null };
          null === f ? e = f = g : f = f.next = g;
          c = c.next;
        } while (null !== c);
        null === f ? e = f = b : f = f.next = b;
      } else e = f = b;
      c = { baseState: d.baseState, firstBaseUpdate: e, lastBaseUpdate: f, shared: d.shared, effects: d.effects };
      a.updateQueue = c;
      return;
    }
    a = c.lastBaseUpdate;
    null === a ? c.firstBaseUpdate = b : a.next = b;
    c.lastBaseUpdate = b;
  }
  function qh(a, b, c, d) {
    var e = a.updateQueue;
    jh = false;
    var f = e.firstBaseUpdate, g = e.lastBaseUpdate, h = e.shared.pending;
    if (null !== h) {
      e.shared.pending = null;
      var k = h, l = k.next;
      k.next = null;
      null === g ? f = l : g.next = l;
      g = k;
      var m = a.alternate;
      null !== m && (m = m.updateQueue, h = m.lastBaseUpdate, h !== g && (null === h ? m.firstBaseUpdate = l : h.next = l, m.lastBaseUpdate = k));
    }
    if (null !== f) {
      var q = e.baseState;
      g = 0;
      m = l = k = null;
      h = f;
      do {
        var r = h.lane, y = h.eventTime;
        if ((d & r) === r) {
          null !== m && (m = m.next = {
            eventTime: y,
            lane: 0,
            tag: h.tag,
            payload: h.payload,
            callback: h.callback,
            next: null
          });
          a: {
            var n = a, t = h;
            r = b;
            y = c;
            switch (t.tag) {
              case 1:
                n = t.payload;
                if ("function" === typeof n) {
                  q = n.call(y, q, r);
                  break a;
                }
                q = n;
                break a;
              case 3:
                n.flags = n.flags & -65537 | 128;
              case 0:
                n = t.payload;
                r = "function" === typeof n ? n.call(y, q, r) : n;
                if (null === r || void 0 === r) break a;
                q = A({}, q, r);
                break a;
              case 2:
                jh = true;
            }
          }
          null !== h.callback && 0 !== h.lane && (a.flags |= 64, r = e.effects, null === r ? e.effects = [h] : r.push(h));
        } else y = { eventTime: y, lane: r, tag: h.tag, payload: h.payload, callback: h.callback, next: null }, null === m ? (l = m = y, k = q) : m = m.next = y, g |= r;
        h = h.next;
        if (null === h) if (h = e.shared.pending, null === h) break;
        else r = h, h = r.next, r.next = null, e.lastBaseUpdate = r, e.shared.pending = null;
      } while (1);
      null === m && (k = q);
      e.baseState = k;
      e.firstBaseUpdate = l;
      e.lastBaseUpdate = m;
      b = e.shared.interleaved;
      if (null !== b) {
        e = b;
        do
          g |= e.lane, e = e.next;
        while (e !== b);
      } else null === f && (e.shared.lanes = 0);
      rh |= g;
      a.lanes = g;
      a.memoizedState = q;
    }
  }
  function sh(a, b, c) {
    a = b.effects;
    b.effects = null;
    if (null !== a) for (b = 0; b < a.length; b++) {
      var d = a[b], e = d.callback;
      if (null !== e) {
        d.callback = null;
        d = c;
        if ("function" !== typeof e) throw Error(p(191, e));
        e.call(d);
      }
    }
  }
  var th = {}, uh = Uf(th), vh = Uf(th), wh = Uf(th);
  function xh(a) {
    if (a === th) throw Error(p(174));
    return a;
  }
  function yh(a, b) {
    G(wh, b);
    G(vh, a);
    G(uh, th);
    a = b.nodeType;
    switch (a) {
      case 9:
      case 11:
        b = (b = b.documentElement) ? b.namespaceURI : lb(null, "");
        break;
      default:
        a = 8 === a ? b.parentNode : b, b = a.namespaceURI || null, a = a.tagName, b = lb(b, a);
    }
    E(uh);
    G(uh, b);
  }
  function zh() {
    E(uh);
    E(vh);
    E(wh);
  }
  function Ah(a) {
    xh(wh.current);
    var b = xh(uh.current);
    var c = lb(b, a.type);
    b !== c && (G(vh, a), G(uh, c));
  }
  function Bh(a) {
    vh.current === a && (E(uh), E(vh));
  }
  var L = Uf(0);
  function Ch(a) {
    for (var b = a; null !== b; ) {
      if (13 === b.tag) {
        var c = b.memoizedState;
        if (null !== c && (c = c.dehydrated, null === c || "$?" === c.data || "$!" === c.data)) return b;
      } else if (19 === b.tag && void 0 !== b.memoizedProps.revealOrder) {
        if (0 !== (b.flags & 128)) return b;
      } else if (null !== b.child) {
        b.child.return = b;
        b = b.child;
        continue;
      }
      if (b === a) break;
      for (; null === b.sibling; ) {
        if (null === b.return || b.return === a) return null;
        b = b.return;
      }
      b.sibling.return = b.return;
      b = b.sibling;
    }
    return null;
  }
  var Dh = [];
  function Eh() {
    for (var a = 0; a < Dh.length; a++) Dh[a]._workInProgressVersionPrimary = null;
    Dh.length = 0;
  }
  var Fh = ua.ReactCurrentDispatcher, Gh = ua.ReactCurrentBatchConfig, Hh = 0, M = null, N = null, O = null, Ih = false, Jh = false, Kh = 0, Lh = 0;
  function P() {
    throw Error(p(321));
  }
  function Mh(a, b) {
    if (null === b) return false;
    for (var c = 0; c < b.length && c < a.length; c++) if (!He(a[c], b[c])) return false;
    return true;
  }
  function Nh(a, b, c, d, e, f) {
    Hh = f;
    M = b;
    b.memoizedState = null;
    b.updateQueue = null;
    b.lanes = 0;
    Fh.current = null === a || null === a.memoizedState ? Oh : Ph;
    a = c(d, e);
    if (Jh) {
      f = 0;
      do {
        Jh = false;
        Kh = 0;
        if (25 <= f) throw Error(p(301));
        f += 1;
        O = N = null;
        b.updateQueue = null;
        Fh.current = Qh;
        a = c(d, e);
      } while (Jh);
    }
    Fh.current = Rh;
    b = null !== N && null !== N.next;
    Hh = 0;
    O = N = M = null;
    Ih = false;
    if (b) throw Error(p(300));
    return a;
  }
  function Sh() {
    var a = 0 !== Kh;
    Kh = 0;
    return a;
  }
  function Th() {
    var a = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
    null === O ? M.memoizedState = O = a : O = O.next = a;
    return O;
  }
  function Uh() {
    if (null === N) {
      var a = M.alternate;
      a = null !== a ? a.memoizedState : null;
    } else a = N.next;
    var b = null === O ? M.memoizedState : O.next;
    if (null !== b) O = b, N = a;
    else {
      if (null === a) throw Error(p(310));
      N = a;
      a = { memoizedState: N.memoizedState, baseState: N.baseState, baseQueue: N.baseQueue, queue: N.queue, next: null };
      null === O ? M.memoizedState = O = a : O = O.next = a;
    }
    return O;
  }
  function Vh(a, b) {
    return "function" === typeof b ? b(a) : b;
  }
  function Wh(a) {
    var b = Uh(), c = b.queue;
    if (null === c) throw Error(p(311));
    c.lastRenderedReducer = a;
    var d = N, e = d.baseQueue, f = c.pending;
    if (null !== f) {
      if (null !== e) {
        var g = e.next;
        e.next = f.next;
        f.next = g;
      }
      d.baseQueue = e = f;
      c.pending = null;
    }
    if (null !== e) {
      f = e.next;
      d = d.baseState;
      var h = g = null, k = null, l = f;
      do {
        var m = l.lane;
        if ((Hh & m) === m) null !== k && (k = k.next = { lane: 0, action: l.action, hasEagerState: l.hasEagerState, eagerState: l.eagerState, next: null }), d = l.hasEagerState ? l.eagerState : a(d, l.action);
        else {
          var q = {
            lane: m,
            action: l.action,
            hasEagerState: l.hasEagerState,
            eagerState: l.eagerState,
            next: null
          };
          null === k ? (h = k = q, g = d) : k = k.next = q;
          M.lanes |= m;
          rh |= m;
        }
        l = l.next;
      } while (null !== l && l !== f);
      null === k ? g = d : k.next = h;
      He(d, b.memoizedState) || (dh = true);
      b.memoizedState = d;
      b.baseState = g;
      b.baseQueue = k;
      c.lastRenderedState = d;
    }
    a = c.interleaved;
    if (null !== a) {
      e = a;
      do
        f = e.lane, M.lanes |= f, rh |= f, e = e.next;
      while (e !== a);
    } else null === e && (c.lanes = 0);
    return [b.memoizedState, c.dispatch];
  }
  function Xh(a) {
    var b = Uh(), c = b.queue;
    if (null === c) throw Error(p(311));
    c.lastRenderedReducer = a;
    var d = c.dispatch, e = c.pending, f = b.memoizedState;
    if (null !== e) {
      c.pending = null;
      var g = e = e.next;
      do
        f = a(f, g.action), g = g.next;
      while (g !== e);
      He(f, b.memoizedState) || (dh = true);
      b.memoizedState = f;
      null === b.baseQueue && (b.baseState = f);
      c.lastRenderedState = f;
    }
    return [f, d];
  }
  function Yh() {
  }
  function Zh(a, b) {
    var c = M, d = Uh(), e = b(), f = !He(d.memoizedState, e);
    f && (d.memoizedState = e, dh = true);
    d = d.queue;
    $h(ai.bind(null, c, d, a), [a]);
    if (d.getSnapshot !== b || f || null !== O && O.memoizedState.tag & 1) {
      c.flags |= 2048;
      bi(9, ci.bind(null, c, d, e, b), void 0, null);
      if (null === Q) throw Error(p(349));
      0 !== (Hh & 30) || di(c, b, e);
    }
    return e;
  }
  function di(a, b, c) {
    a.flags |= 16384;
    a = { getSnapshot: b, value: c };
    b = M.updateQueue;
    null === b ? (b = { lastEffect: null, stores: null }, M.updateQueue = b, b.stores = [a]) : (c = b.stores, null === c ? b.stores = [a] : c.push(a));
  }
  function ci(a, b, c, d) {
    b.value = c;
    b.getSnapshot = d;
    ei(b) && fi(a);
  }
  function ai(a, b, c) {
    return c(function() {
      ei(b) && fi(a);
    });
  }
  function ei(a) {
    var b = a.getSnapshot;
    a = a.value;
    try {
      var c = b();
      return !He(a, c);
    } catch (d) {
      return true;
    }
  }
  function fi(a) {
    var b = ih(a, 1);
    null !== b && gi(b, a, 1, -1);
  }
  function hi(a) {
    var b = Th();
    "function" === typeof a && (a = a());
    b.memoizedState = b.baseState = a;
    a = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: Vh, lastRenderedState: a };
    b.queue = a;
    a = a.dispatch = ii.bind(null, M, a);
    return [b.memoizedState, a];
  }
  function bi(a, b, c, d) {
    a = { tag: a, create: b, destroy: c, deps: d, next: null };
    b = M.updateQueue;
    null === b ? (b = { lastEffect: null, stores: null }, M.updateQueue = b, b.lastEffect = a.next = a) : (c = b.lastEffect, null === c ? b.lastEffect = a.next = a : (d = c.next, c.next = a, a.next = d, b.lastEffect = a));
    return a;
  }
  function ji() {
    return Uh().memoizedState;
  }
  function ki(a, b, c, d) {
    var e = Th();
    M.flags |= a;
    e.memoizedState = bi(1 | b, c, void 0, void 0 === d ? null : d);
  }
  function li(a, b, c, d) {
    var e = Uh();
    d = void 0 === d ? null : d;
    var f = void 0;
    if (null !== N) {
      var g = N.memoizedState;
      f = g.destroy;
      if (null !== d && Mh(d, g.deps)) {
        e.memoizedState = bi(b, c, f, d);
        return;
      }
    }
    M.flags |= a;
    e.memoizedState = bi(1 | b, c, f, d);
  }
  function mi(a, b) {
    return ki(8390656, 8, a, b);
  }
  function $h(a, b) {
    return li(2048, 8, a, b);
  }
  function ni(a, b) {
    return li(4, 2, a, b);
  }
  function oi(a, b) {
    return li(4, 4, a, b);
  }
  function pi(a, b) {
    if ("function" === typeof b) return a = a(), b(a), function() {
      b(null);
    };
    if (null !== b && void 0 !== b) return a = a(), b.current = a, function() {
      b.current = null;
    };
  }
  function qi(a, b, c) {
    c = null !== c && void 0 !== c ? c.concat([a]) : null;
    return li(4, 4, pi.bind(null, b, a), c);
  }
  function ri() {
  }
  function si(a, b) {
    var c = Uh();
    b = void 0 === b ? null : b;
    var d = c.memoizedState;
    if (null !== d && null !== b && Mh(b, d[1])) return d[0];
    c.memoizedState = [a, b];
    return a;
  }
  function ti(a, b) {
    var c = Uh();
    b = void 0 === b ? null : b;
    var d = c.memoizedState;
    if (null !== d && null !== b && Mh(b, d[1])) return d[0];
    a = a();
    c.memoizedState = [a, b];
    return a;
  }
  function ui(a, b, c) {
    if (0 === (Hh & 21)) return a.baseState && (a.baseState = false, dh = true), a.memoizedState = c;
    He(c, b) || (c = yc(), M.lanes |= c, rh |= c, a.baseState = true);
    return b;
  }
  function vi(a, b) {
    var c = C;
    C = 0 !== c && 4 > c ? c : 4;
    a(true);
    var d = Gh.transition;
    Gh.transition = {};
    try {
      a(false), b();
    } finally {
      C = c, Gh.transition = d;
    }
  }
  function wi() {
    return Uh().memoizedState;
  }
  function xi(a, b, c) {
    var d = yi(a);
    c = { lane: d, action: c, hasEagerState: false, eagerState: null, next: null };
    if (zi(a)) Ai(b, c);
    else if (c = hh(a, b, c, d), null !== c) {
      var e = R();
      gi(c, a, d, e);
      Bi(c, b, d);
    }
  }
  function ii(a, b, c) {
    var d = yi(a), e = { lane: d, action: c, hasEagerState: false, eagerState: null, next: null };
    if (zi(a)) Ai(b, e);
    else {
      var f = a.alternate;
      if (0 === a.lanes && (null === f || 0 === f.lanes) && (f = b.lastRenderedReducer, null !== f)) try {
        var g = b.lastRenderedState, h = f(g, c);
        e.hasEagerState = true;
        e.eagerState = h;
        if (He(h, g)) {
          var k = b.interleaved;
          null === k ? (e.next = e, gh(b)) : (e.next = k.next, k.next = e);
          b.interleaved = e;
          return;
        }
      } catch (l) {
      } finally {
      }
      c = hh(a, b, e, d);
      null !== c && (e = R(), gi(c, a, d, e), Bi(c, b, d));
    }
  }
  function zi(a) {
    var b = a.alternate;
    return a === M || null !== b && b === M;
  }
  function Ai(a, b) {
    Jh = Ih = true;
    var c = a.pending;
    null === c ? b.next = b : (b.next = c.next, c.next = b);
    a.pending = b;
  }
  function Bi(a, b, c) {
    if (0 !== (c & 4194240)) {
      var d = b.lanes;
      d &= a.pendingLanes;
      c |= d;
      b.lanes = c;
      Cc(a, c);
    }
  }
  var Rh = { readContext: eh, useCallback: P, useContext: P, useEffect: P, useImperativeHandle: P, useInsertionEffect: P, useLayoutEffect: P, useMemo: P, useReducer: P, useRef: P, useState: P, useDebugValue: P, useDeferredValue: P, useTransition: P, useMutableSource: P, useSyncExternalStore: P, useId: P, unstable_isNewReconciler: false }, Oh = { readContext: eh, useCallback: function(a, b) {
    Th().memoizedState = [a, void 0 === b ? null : b];
    return a;
  }, useContext: eh, useEffect: mi, useImperativeHandle: function(a, b, c) {
    c = null !== c && void 0 !== c ? c.concat([a]) : null;
    return ki(
      4194308,
      4,
      pi.bind(null, b, a),
      c
    );
  }, useLayoutEffect: function(a, b) {
    return ki(4194308, 4, a, b);
  }, useInsertionEffect: function(a, b) {
    return ki(4, 2, a, b);
  }, useMemo: function(a, b) {
    var c = Th();
    b = void 0 === b ? null : b;
    a = a();
    c.memoizedState = [a, b];
    return a;
  }, useReducer: function(a, b, c) {
    var d = Th();
    b = void 0 !== c ? c(b) : b;
    d.memoizedState = d.baseState = b;
    a = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: a, lastRenderedState: b };
    d.queue = a;
    a = a.dispatch = xi.bind(null, M, a);
    return [d.memoizedState, a];
  }, useRef: function(a) {
    var b = Th();
    a = { current: a };
    return b.memoizedState = a;
  }, useState: hi, useDebugValue: ri, useDeferredValue: function(a) {
    return Th().memoizedState = a;
  }, useTransition: function() {
    var a = hi(false), b = a[0];
    a = vi.bind(null, a[1]);
    Th().memoizedState = a;
    return [b, a];
  }, useMutableSource: function() {
  }, useSyncExternalStore: function(a, b, c) {
    var d = M, e = Th();
    if (I) {
      if (void 0 === c) throw Error(p(407));
      c = c();
    } else {
      c = b();
      if (null === Q) throw Error(p(349));
      0 !== (Hh & 30) || di(d, b, c);
    }
    e.memoizedState = c;
    var f = { value: c, getSnapshot: b };
    e.queue = f;
    mi(ai.bind(
      null,
      d,
      f,
      a
    ), [a]);
    d.flags |= 2048;
    bi(9, ci.bind(null, d, f, c, b), void 0, null);
    return c;
  }, useId: function() {
    var a = Th(), b = Q.identifierPrefix;
    if (I) {
      var c = sg;
      var d = rg;
      c = (d & ~(1 << 32 - oc(d) - 1)).toString(32) + c;
      b = ":" + b + "R" + c;
      c = Kh++;
      0 < c && (b += "H" + c.toString(32));
      b += ":";
    } else c = Lh++, b = ":" + b + "r" + c.toString(32) + ":";
    return a.memoizedState = b;
  }, unstable_isNewReconciler: false }, Ph = {
    readContext: eh,
    useCallback: si,
    useContext: eh,
    useEffect: $h,
    useImperativeHandle: qi,
    useInsertionEffect: ni,
    useLayoutEffect: oi,
    useMemo: ti,
    useReducer: Wh,
    useRef: ji,
    useState: function() {
      return Wh(Vh);
    },
    useDebugValue: ri,
    useDeferredValue: function(a) {
      var b = Uh();
      return ui(b, N.memoizedState, a);
    },
    useTransition: function() {
      var a = Wh(Vh)[0], b = Uh().memoizedState;
      return [a, b];
    },
    useMutableSource: Yh,
    useSyncExternalStore: Zh,
    useId: wi,
    unstable_isNewReconciler: false
  }, Qh = { readContext: eh, useCallback: si, useContext: eh, useEffect: $h, useImperativeHandle: qi, useInsertionEffect: ni, useLayoutEffect: oi, useMemo: ti, useReducer: Xh, useRef: ji, useState: function() {
    return Xh(Vh);
  }, useDebugValue: ri, useDeferredValue: function(a) {
    var b = Uh();
    return null === N ? b.memoizedState = a : ui(b, N.memoizedState, a);
  }, useTransition: function() {
    var a = Xh(Vh)[0], b = Uh().memoizedState;
    return [a, b];
  }, useMutableSource: Yh, useSyncExternalStore: Zh, useId: wi, unstable_isNewReconciler: false };
  function Ci(a, b) {
    if (a && a.defaultProps) {
      b = A({}, b);
      a = a.defaultProps;
      for (var c in a) void 0 === b[c] && (b[c] = a[c]);
      return b;
    }
    return b;
  }
  function Di(a, b, c, d) {
    b = a.memoizedState;
    c = c(d, b);
    c = null === c || void 0 === c ? b : A({}, b, c);
    a.memoizedState = c;
    0 === a.lanes && (a.updateQueue.baseState = c);
  }
  var Ei = { isMounted: function(a) {
    return (a = a._reactInternals) ? Vb(a) === a : false;
  }, enqueueSetState: function(a, b, c) {
    a = a._reactInternals;
    var d = R(), e = yi(a), f = mh(d, e);
    f.payload = b;
    void 0 !== c && null !== c && (f.callback = c);
    b = nh(a, f, e);
    null !== b && (gi(b, a, e, d), oh(b, a, e));
  }, enqueueReplaceState: function(a, b, c) {
    a = a._reactInternals;
    var d = R(), e = yi(a), f = mh(d, e);
    f.tag = 1;
    f.payload = b;
    void 0 !== c && null !== c && (f.callback = c);
    b = nh(a, f, e);
    null !== b && (gi(b, a, e, d), oh(b, a, e));
  }, enqueueForceUpdate: function(a, b) {
    a = a._reactInternals;
    var c = R(), d = yi(a), e = mh(c, d);
    e.tag = 2;
    void 0 !== b && null !== b && (e.callback = b);
    b = nh(a, e, d);
    null !== b && (gi(b, a, d, c), oh(b, a, d));
  } };
  function Fi(a, b, c, d, e, f, g) {
    a = a.stateNode;
    return "function" === typeof a.shouldComponentUpdate ? a.shouldComponentUpdate(d, f, g) : b.prototype && b.prototype.isPureReactComponent ? !Ie(c, d) || !Ie(e, f) : true;
  }
  function Gi(a, b, c) {
    var d = false, e = Vf;
    var f = b.contextType;
    "object" === typeof f && null !== f ? f = eh(f) : (e = Zf(b) ? Xf : H.current, d = b.contextTypes, f = (d = null !== d && void 0 !== d) ? Yf(a, e) : Vf);
    b = new b(c, f);
    a.memoizedState = null !== b.state && void 0 !== b.state ? b.state : null;
    b.updater = Ei;
    a.stateNode = b;
    b._reactInternals = a;
    d && (a = a.stateNode, a.__reactInternalMemoizedUnmaskedChildContext = e, a.__reactInternalMemoizedMaskedChildContext = f);
    return b;
  }
  function Hi(a, b, c, d) {
    a = b.state;
    "function" === typeof b.componentWillReceiveProps && b.componentWillReceiveProps(c, d);
    "function" === typeof b.UNSAFE_componentWillReceiveProps && b.UNSAFE_componentWillReceiveProps(c, d);
    b.state !== a && Ei.enqueueReplaceState(b, b.state, null);
  }
  function Ii(a, b, c, d) {
    var e = a.stateNode;
    e.props = c;
    e.state = a.memoizedState;
    e.refs = {};
    kh(a);
    var f = b.contextType;
    "object" === typeof f && null !== f ? e.context = eh(f) : (f = Zf(b) ? Xf : H.current, e.context = Yf(a, f));
    e.state = a.memoizedState;
    f = b.getDerivedStateFromProps;
    "function" === typeof f && (Di(a, b, f, c), e.state = a.memoizedState);
    "function" === typeof b.getDerivedStateFromProps || "function" === typeof e.getSnapshotBeforeUpdate || "function" !== typeof e.UNSAFE_componentWillMount && "function" !== typeof e.componentWillMount || (b = e.state, "function" === typeof e.componentWillMount && e.componentWillMount(), "function" === typeof e.UNSAFE_componentWillMount && e.UNSAFE_componentWillMount(), b !== e.state && Ei.enqueueReplaceState(e, e.state, null), qh(a, c, e, d), e.state = a.memoizedState);
    "function" === typeof e.componentDidMount && (a.flags |= 4194308);
  }
  function Ji(a, b) {
    try {
      var c = "", d = b;
      do
        c += Pa(d), d = d.return;
      while (d);
      var e = c;
    } catch (f) {
      e = "\nError generating stack: " + f.message + "\n" + f.stack;
    }
    return { value: a, source: b, stack: e, digest: null };
  }
  function Ki(a, b, c) {
    return { value: a, source: null, stack: null != c ? c : null, digest: null != b ? b : null };
  }
  function Li(a, b) {
    try {
      console.error(b.value);
    } catch (c) {
      setTimeout(function() {
        throw c;
      });
    }
  }
  var Mi = "function" === typeof WeakMap ? WeakMap : Map;
  function Ni(a, b, c) {
    c = mh(-1, c);
    c.tag = 3;
    c.payload = { element: null };
    var d = b.value;
    c.callback = function() {
      Oi || (Oi = true, Pi = d);
      Li(a, b);
    };
    return c;
  }
  function Qi(a, b, c) {
    c = mh(-1, c);
    c.tag = 3;
    var d = a.type.getDerivedStateFromError;
    if ("function" === typeof d) {
      var e = b.value;
      c.payload = function() {
        return d(e);
      };
      c.callback = function() {
        Li(a, b);
      };
    }
    var f = a.stateNode;
    null !== f && "function" === typeof f.componentDidCatch && (c.callback = function() {
      Li(a, b);
      "function" !== typeof d && (null === Ri ? Ri = /* @__PURE__ */ new Set([this]) : Ri.add(this));
      var c2 = b.stack;
      this.componentDidCatch(b.value, { componentStack: null !== c2 ? c2 : "" });
    });
    return c;
  }
  function Si(a, b, c) {
    var d = a.pingCache;
    if (null === d) {
      d = a.pingCache = new Mi();
      var e = /* @__PURE__ */ new Set();
      d.set(b, e);
    } else e = d.get(b), void 0 === e && (e = /* @__PURE__ */ new Set(), d.set(b, e));
    e.has(c) || (e.add(c), a = Ti.bind(null, a, b, c), b.then(a, a));
  }
  function Ui(a) {
    do {
      var b;
      if (b = 13 === a.tag) b = a.memoizedState, b = null !== b ? null !== b.dehydrated ? true : false : true;
      if (b) return a;
      a = a.return;
    } while (null !== a);
    return null;
  }
  function Vi(a, b, c, d, e) {
    if (0 === (a.mode & 1)) return a === b ? a.flags |= 65536 : (a.flags |= 128, c.flags |= 131072, c.flags &= -52805, 1 === c.tag && (null === c.alternate ? c.tag = 17 : (b = mh(-1, 1), b.tag = 2, nh(c, b, 1))), c.lanes |= 1), a;
    a.flags |= 65536;
    a.lanes = e;
    return a;
  }
  var Wi = ua.ReactCurrentOwner, dh = false;
  function Xi(a, b, c, d) {
    b.child = null === a ? Vg(b, null, c, d) : Ug(b, a.child, c, d);
  }
  function Yi(a, b, c, d, e) {
    c = c.render;
    var f = b.ref;
    ch(b, e);
    d = Nh(a, b, c, d, f, e);
    c = Sh();
    if (null !== a && !dh) return b.updateQueue = a.updateQueue, b.flags &= -2053, a.lanes &= ~e, Zi(a, b, e);
    I && c && vg(b);
    b.flags |= 1;
    Xi(a, b, d, e);
    return b.child;
  }
  function $i(a, b, c, d, e) {
    if (null === a) {
      var f = c.type;
      if ("function" === typeof f && !aj(f) && void 0 === f.defaultProps && null === c.compare && void 0 === c.defaultProps) return b.tag = 15, b.type = f, bj(a, b, f, d, e);
      a = Rg(c.type, null, d, b, b.mode, e);
      a.ref = b.ref;
      a.return = b;
      return b.child = a;
    }
    f = a.child;
    if (0 === (a.lanes & e)) {
      var g = f.memoizedProps;
      c = c.compare;
      c = null !== c ? c : Ie;
      if (c(g, d) && a.ref === b.ref) return Zi(a, b, e);
    }
    b.flags |= 1;
    a = Pg(f, d);
    a.ref = b.ref;
    a.return = b;
    return b.child = a;
  }
  function bj(a, b, c, d, e) {
    if (null !== a) {
      var f = a.memoizedProps;
      if (Ie(f, d) && a.ref === b.ref) if (dh = false, b.pendingProps = d = f, 0 !== (a.lanes & e)) 0 !== (a.flags & 131072) && (dh = true);
      else return b.lanes = a.lanes, Zi(a, b, e);
    }
    return cj(a, b, c, d, e);
  }
  function dj(a, b, c) {
    var d = b.pendingProps, e = d.children, f = null !== a ? a.memoizedState : null;
    if ("hidden" === d.mode) if (0 === (b.mode & 1)) b.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, G(ej, fj), fj |= c;
    else {
      if (0 === (c & 1073741824)) return a = null !== f ? f.baseLanes | c : c, b.lanes = b.childLanes = 1073741824, b.memoizedState = { baseLanes: a, cachePool: null, transitions: null }, b.updateQueue = null, G(ej, fj), fj |= a, null;
      b.memoizedState = { baseLanes: 0, cachePool: null, transitions: null };
      d = null !== f ? f.baseLanes : c;
      G(ej, fj);
      fj |= d;
    }
    else null !== f ? (d = f.baseLanes | c, b.memoizedState = null) : d = c, G(ej, fj), fj |= d;
    Xi(a, b, e, c);
    return b.child;
  }
  function gj(a, b) {
    var c = b.ref;
    if (null === a && null !== c || null !== a && a.ref !== c) b.flags |= 512, b.flags |= 2097152;
  }
  function cj(a, b, c, d, e) {
    var f = Zf(c) ? Xf : H.current;
    f = Yf(b, f);
    ch(b, e);
    c = Nh(a, b, c, d, f, e);
    d = Sh();
    if (null !== a && !dh) return b.updateQueue = a.updateQueue, b.flags &= -2053, a.lanes &= ~e, Zi(a, b, e);
    I && d && vg(b);
    b.flags |= 1;
    Xi(a, b, c, e);
    return b.child;
  }
  function hj(a, b, c, d, e) {
    if (Zf(c)) {
      var f = true;
      cg(b);
    } else f = false;
    ch(b, e);
    if (null === b.stateNode) ij(a, b), Gi(b, c, d), Ii(b, c, d, e), d = true;
    else if (null === a) {
      var g = b.stateNode, h = b.memoizedProps;
      g.props = h;
      var k = g.context, l = c.contextType;
      "object" === typeof l && null !== l ? l = eh(l) : (l = Zf(c) ? Xf : H.current, l = Yf(b, l));
      var m = c.getDerivedStateFromProps, q = "function" === typeof m || "function" === typeof g.getSnapshotBeforeUpdate;
      q || "function" !== typeof g.UNSAFE_componentWillReceiveProps && "function" !== typeof g.componentWillReceiveProps || (h !== d || k !== l) && Hi(b, g, d, l);
      jh = false;
      var r = b.memoizedState;
      g.state = r;
      qh(b, d, g, e);
      k = b.memoizedState;
      h !== d || r !== k || Wf.current || jh ? ("function" === typeof m && (Di(b, c, m, d), k = b.memoizedState), (h = jh || Fi(b, c, h, d, r, k, l)) ? (q || "function" !== typeof g.UNSAFE_componentWillMount && "function" !== typeof g.componentWillMount || ("function" === typeof g.componentWillMount && g.componentWillMount(), "function" === typeof g.UNSAFE_componentWillMount && g.UNSAFE_componentWillMount()), "function" === typeof g.componentDidMount && (b.flags |= 4194308)) : ("function" === typeof g.componentDidMount && (b.flags |= 4194308), b.memoizedProps = d, b.memoizedState = k), g.props = d, g.state = k, g.context = l, d = h) : ("function" === typeof g.componentDidMount && (b.flags |= 4194308), d = false);
    } else {
      g = b.stateNode;
      lh(a, b);
      h = b.memoizedProps;
      l = b.type === b.elementType ? h : Ci(b.type, h);
      g.props = l;
      q = b.pendingProps;
      r = g.context;
      k = c.contextType;
      "object" === typeof k && null !== k ? k = eh(k) : (k = Zf(c) ? Xf : H.current, k = Yf(b, k));
      var y = c.getDerivedStateFromProps;
      (m = "function" === typeof y || "function" === typeof g.getSnapshotBeforeUpdate) || "function" !== typeof g.UNSAFE_componentWillReceiveProps && "function" !== typeof g.componentWillReceiveProps || (h !== q || r !== k) && Hi(b, g, d, k);
      jh = false;
      r = b.memoizedState;
      g.state = r;
      qh(b, d, g, e);
      var n = b.memoizedState;
      h !== q || r !== n || Wf.current || jh ? ("function" === typeof y && (Di(b, c, y, d), n = b.memoizedState), (l = jh || Fi(b, c, l, d, r, n, k) || false) ? (m || "function" !== typeof g.UNSAFE_componentWillUpdate && "function" !== typeof g.componentWillUpdate || ("function" === typeof g.componentWillUpdate && g.componentWillUpdate(d, n, k), "function" === typeof g.UNSAFE_componentWillUpdate && g.UNSAFE_componentWillUpdate(d, n, k)), "function" === typeof g.componentDidUpdate && (b.flags |= 4), "function" === typeof g.getSnapshotBeforeUpdate && (b.flags |= 1024)) : ("function" !== typeof g.componentDidUpdate || h === a.memoizedProps && r === a.memoizedState || (b.flags |= 4), "function" !== typeof g.getSnapshotBeforeUpdate || h === a.memoizedProps && r === a.memoizedState || (b.flags |= 1024), b.memoizedProps = d, b.memoizedState = n), g.props = d, g.state = n, g.context = k, d = l) : ("function" !== typeof g.componentDidUpdate || h === a.memoizedProps && r === a.memoizedState || (b.flags |= 4), "function" !== typeof g.getSnapshotBeforeUpdate || h === a.memoizedProps && r === a.memoizedState || (b.flags |= 1024), d = false);
    }
    return jj(a, b, c, d, f, e);
  }
  function jj(a, b, c, d, e, f) {
    gj(a, b);
    var g = 0 !== (b.flags & 128);
    if (!d && !g) return e && dg(b, c, false), Zi(a, b, f);
    d = b.stateNode;
    Wi.current = b;
    var h = g && "function" !== typeof c.getDerivedStateFromError ? null : d.render();
    b.flags |= 1;
    null !== a && g ? (b.child = Ug(b, a.child, null, f), b.child = Ug(b, null, h, f)) : Xi(a, b, h, f);
    b.memoizedState = d.state;
    e && dg(b, c, true);
    return b.child;
  }
  function kj(a) {
    var b = a.stateNode;
    b.pendingContext ? ag(a, b.pendingContext, b.pendingContext !== b.context) : b.context && ag(a, b.context, false);
    yh(a, b.containerInfo);
  }
  function lj(a, b, c, d, e) {
    Ig();
    Jg(e);
    b.flags |= 256;
    Xi(a, b, c, d);
    return b.child;
  }
  var mj = { dehydrated: null, treeContext: null, retryLane: 0 };
  function nj(a) {
    return { baseLanes: a, cachePool: null, transitions: null };
  }
  function oj(a, b, c) {
    var d = b.pendingProps, e = L.current, f = false, g = 0 !== (b.flags & 128), h;
    (h = g) || (h = null !== a && null === a.memoizedState ? false : 0 !== (e & 2));
    if (h) f = true, b.flags &= -129;
    else if (null === a || null !== a.memoizedState) e |= 1;
    G(L, e & 1);
    if (null === a) {
      Eg(b);
      a = b.memoizedState;
      if (null !== a && (a = a.dehydrated, null !== a)) return 0 === (b.mode & 1) ? b.lanes = 1 : "$!" === a.data ? b.lanes = 8 : b.lanes = 1073741824, null;
      g = d.children;
      a = d.fallback;
      return f ? (d = b.mode, f = b.child, g = { mode: "hidden", children: g }, 0 === (d & 1) && null !== f ? (f.childLanes = 0, f.pendingProps = g) : f = pj(g, d, 0, null), a = Tg(a, d, c, null), f.return = b, a.return = b, f.sibling = a, b.child = f, b.child.memoizedState = nj(c), b.memoizedState = mj, a) : qj(b, g);
    }
    e = a.memoizedState;
    if (null !== e && (h = e.dehydrated, null !== h)) return rj(a, b, g, d, h, e, c);
    if (f) {
      f = d.fallback;
      g = b.mode;
      e = a.child;
      h = e.sibling;
      var k = { mode: "hidden", children: d.children };
      0 === (g & 1) && b.child !== e ? (d = b.child, d.childLanes = 0, d.pendingProps = k, b.deletions = null) : (d = Pg(e, k), d.subtreeFlags = e.subtreeFlags & 14680064);
      null !== h ? f = Pg(h, f) : (f = Tg(f, g, c, null), f.flags |= 2);
      f.return = b;
      d.return = b;
      d.sibling = f;
      b.child = d;
      d = f;
      f = b.child;
      g = a.child.memoizedState;
      g = null === g ? nj(c) : { baseLanes: g.baseLanes | c, cachePool: null, transitions: g.transitions };
      f.memoizedState = g;
      f.childLanes = a.childLanes & ~c;
      b.memoizedState = mj;
      return d;
    }
    f = a.child;
    a = f.sibling;
    d = Pg(f, { mode: "visible", children: d.children });
    0 === (b.mode & 1) && (d.lanes = c);
    d.return = b;
    d.sibling = null;
    null !== a && (c = b.deletions, null === c ? (b.deletions = [a], b.flags |= 16) : c.push(a));
    b.child = d;
    b.memoizedState = null;
    return d;
  }
  function qj(a, b) {
    b = pj({ mode: "visible", children: b }, a.mode, 0, null);
    b.return = a;
    return a.child = b;
  }
  function sj(a, b, c, d) {
    null !== d && Jg(d);
    Ug(b, a.child, null, c);
    a = qj(b, b.pendingProps.children);
    a.flags |= 2;
    b.memoizedState = null;
    return a;
  }
  function rj(a, b, c, d, e, f, g) {
    if (c) {
      if (b.flags & 256) return b.flags &= -257, d = Ki(Error(p(422))), sj(a, b, g, d);
      if (null !== b.memoizedState) return b.child = a.child, b.flags |= 128, null;
      f = d.fallback;
      e = b.mode;
      d = pj({ mode: "visible", children: d.children }, e, 0, null);
      f = Tg(f, e, g, null);
      f.flags |= 2;
      d.return = b;
      f.return = b;
      d.sibling = f;
      b.child = d;
      0 !== (b.mode & 1) && Ug(b, a.child, null, g);
      b.child.memoizedState = nj(g);
      b.memoizedState = mj;
      return f;
    }
    if (0 === (b.mode & 1)) return sj(a, b, g, null);
    if ("$!" === e.data) {
      d = e.nextSibling && e.nextSibling.dataset;
      if (d) var h = d.dgst;
      d = h;
      f = Error(p(419));
      d = Ki(f, d, void 0);
      return sj(a, b, g, d);
    }
    h = 0 !== (g & a.childLanes);
    if (dh || h) {
      d = Q;
      if (null !== d) {
        switch (g & -g) {
          case 4:
            e = 2;
            break;
          case 16:
            e = 8;
            break;
          case 64:
          case 128:
          case 256:
          case 512:
          case 1024:
          case 2048:
          case 4096:
          case 8192:
          case 16384:
          case 32768:
          case 65536:
          case 131072:
          case 262144:
          case 524288:
          case 1048576:
          case 2097152:
          case 4194304:
          case 8388608:
          case 16777216:
          case 33554432:
          case 67108864:
            e = 32;
            break;
          case 536870912:
            e = 268435456;
            break;
          default:
            e = 0;
        }
        e = 0 !== (e & (d.suspendedLanes | g)) ? 0 : e;
        0 !== e && e !== f.retryLane && (f.retryLane = e, ih(a, e), gi(d, a, e, -1));
      }
      tj();
      d = Ki(Error(p(421)));
      return sj(a, b, g, d);
    }
    if ("$?" === e.data) return b.flags |= 128, b.child = a.child, b = uj.bind(null, a), e._reactRetry = b, null;
    a = f.treeContext;
    yg = Lf(e.nextSibling);
    xg = b;
    I = true;
    zg = null;
    null !== a && (og[pg++] = rg, og[pg++] = sg, og[pg++] = qg, rg = a.id, sg = a.overflow, qg = b);
    b = qj(b, d.children);
    b.flags |= 4096;
    return b;
  }
  function vj(a, b, c) {
    a.lanes |= b;
    var d = a.alternate;
    null !== d && (d.lanes |= b);
    bh(a.return, b, c);
  }
  function wj(a, b, c, d, e) {
    var f = a.memoizedState;
    null === f ? a.memoizedState = { isBackwards: b, rendering: null, renderingStartTime: 0, last: d, tail: c, tailMode: e } : (f.isBackwards = b, f.rendering = null, f.renderingStartTime = 0, f.last = d, f.tail = c, f.tailMode = e);
  }
  function xj(a, b, c) {
    var d = b.pendingProps, e = d.revealOrder, f = d.tail;
    Xi(a, b, d.children, c);
    d = L.current;
    if (0 !== (d & 2)) d = d & 1 | 2, b.flags |= 128;
    else {
      if (null !== a && 0 !== (a.flags & 128)) a: for (a = b.child; null !== a; ) {
        if (13 === a.tag) null !== a.memoizedState && vj(a, c, b);
        else if (19 === a.tag) vj(a, c, b);
        else if (null !== a.child) {
          a.child.return = a;
          a = a.child;
          continue;
        }
        if (a === b) break a;
        for (; null === a.sibling; ) {
          if (null === a.return || a.return === b) break a;
          a = a.return;
        }
        a.sibling.return = a.return;
        a = a.sibling;
      }
      d &= 1;
    }
    G(L, d);
    if (0 === (b.mode & 1)) b.memoizedState = null;
    else switch (e) {
      case "forwards":
        c = b.child;
        for (e = null; null !== c; ) a = c.alternate, null !== a && null === Ch(a) && (e = c), c = c.sibling;
        c = e;
        null === c ? (e = b.child, b.child = null) : (e = c.sibling, c.sibling = null);
        wj(b, false, e, c, f);
        break;
      case "backwards":
        c = null;
        e = b.child;
        for (b.child = null; null !== e; ) {
          a = e.alternate;
          if (null !== a && null === Ch(a)) {
            b.child = e;
            break;
          }
          a = e.sibling;
          e.sibling = c;
          c = e;
          e = a;
        }
        wj(b, true, c, null, f);
        break;
      case "together":
        wj(b, false, null, null, void 0);
        break;
      default:
        b.memoizedState = null;
    }
    return b.child;
  }
  function ij(a, b) {
    0 === (b.mode & 1) && null !== a && (a.alternate = null, b.alternate = null, b.flags |= 2);
  }
  function Zi(a, b, c) {
    null !== a && (b.dependencies = a.dependencies);
    rh |= b.lanes;
    if (0 === (c & b.childLanes)) return null;
    if (null !== a && b.child !== a.child) throw Error(p(153));
    if (null !== b.child) {
      a = b.child;
      c = Pg(a, a.pendingProps);
      b.child = c;
      for (c.return = b; null !== a.sibling; ) a = a.sibling, c = c.sibling = Pg(a, a.pendingProps), c.return = b;
      c.sibling = null;
    }
    return b.child;
  }
  function yj(a, b, c) {
    switch (b.tag) {
      case 3:
        kj(b);
        Ig();
        break;
      case 5:
        Ah(b);
        break;
      case 1:
        Zf(b.type) && cg(b);
        break;
      case 4:
        yh(b, b.stateNode.containerInfo);
        break;
      case 10:
        var d = b.type._context, e = b.memoizedProps.value;
        G(Wg, d._currentValue);
        d._currentValue = e;
        break;
      case 13:
        d = b.memoizedState;
        if (null !== d) {
          if (null !== d.dehydrated) return G(L, L.current & 1), b.flags |= 128, null;
          if (0 !== (c & b.child.childLanes)) return oj(a, b, c);
          G(L, L.current & 1);
          a = Zi(a, b, c);
          return null !== a ? a.sibling : null;
        }
        G(L, L.current & 1);
        break;
      case 19:
        d = 0 !== (c & b.childLanes);
        if (0 !== (a.flags & 128)) {
          if (d) return xj(a, b, c);
          b.flags |= 128;
        }
        e = b.memoizedState;
        null !== e && (e.rendering = null, e.tail = null, e.lastEffect = null);
        G(L, L.current);
        if (d) break;
        else return null;
      case 22:
      case 23:
        return b.lanes = 0, dj(a, b, c);
    }
    return Zi(a, b, c);
  }
  var zj, Aj, Bj, Cj;
  zj = function(a, b) {
    for (var c = b.child; null !== c; ) {
      if (5 === c.tag || 6 === c.tag) a.appendChild(c.stateNode);
      else if (4 !== c.tag && null !== c.child) {
        c.child.return = c;
        c = c.child;
        continue;
      }
      if (c === b) break;
      for (; null === c.sibling; ) {
        if (null === c.return || c.return === b) return;
        c = c.return;
      }
      c.sibling.return = c.return;
      c = c.sibling;
    }
  };
  Aj = function() {
  };
  Bj = function(a, b, c, d) {
    var e = a.memoizedProps;
    if (e !== d) {
      a = b.stateNode;
      xh(uh.current);
      var f = null;
      switch (c) {
        case "input":
          e = Ya(a, e);
          d = Ya(a, d);
          f = [];
          break;
        case "select":
          e = A({}, e, { value: void 0 });
          d = A({}, d, { value: void 0 });
          f = [];
          break;
        case "textarea":
          e = gb(a, e);
          d = gb(a, d);
          f = [];
          break;
        default:
          "function" !== typeof e.onClick && "function" === typeof d.onClick && (a.onclick = Bf);
      }
      ub(c, d);
      var g;
      c = null;
      for (l in e) if (!d.hasOwnProperty(l) && e.hasOwnProperty(l) && null != e[l]) if ("style" === l) {
        var h = e[l];
        for (g in h) h.hasOwnProperty(g) && (c || (c = {}), c[g] = "");
      } else "dangerouslySetInnerHTML" !== l && "children" !== l && "suppressContentEditableWarning" !== l && "suppressHydrationWarning" !== l && "autoFocus" !== l && (ea.hasOwnProperty(l) ? f || (f = []) : (f = f || []).push(l, null));
      for (l in d) {
        var k = d[l];
        h = null != e ? e[l] : void 0;
        if (d.hasOwnProperty(l) && k !== h && (null != k || null != h)) if ("style" === l) if (h) {
          for (g in h) !h.hasOwnProperty(g) || k && k.hasOwnProperty(g) || (c || (c = {}), c[g] = "");
          for (g in k) k.hasOwnProperty(g) && h[g] !== k[g] && (c || (c = {}), c[g] = k[g]);
        } else c || (f || (f = []), f.push(
          l,
          c
        )), c = k;
        else "dangerouslySetInnerHTML" === l ? (k = k ? k.__html : void 0, h = h ? h.__html : void 0, null != k && h !== k && (f = f || []).push(l, k)) : "children" === l ? "string" !== typeof k && "number" !== typeof k || (f = f || []).push(l, "" + k) : "suppressContentEditableWarning" !== l && "suppressHydrationWarning" !== l && (ea.hasOwnProperty(l) ? (null != k && "onScroll" === l && D("scroll", a), f || h === k || (f = [])) : (f = f || []).push(l, k));
      }
      c && (f = f || []).push("style", c);
      var l = f;
      if (b.updateQueue = l) b.flags |= 4;
    }
  };
  Cj = function(a, b, c, d) {
    c !== d && (b.flags |= 4);
  };
  function Dj(a, b) {
    if (!I) switch (a.tailMode) {
      case "hidden":
        b = a.tail;
        for (var c = null; null !== b; ) null !== b.alternate && (c = b), b = b.sibling;
        null === c ? a.tail = null : c.sibling = null;
        break;
      case "collapsed":
        c = a.tail;
        for (var d = null; null !== c; ) null !== c.alternate && (d = c), c = c.sibling;
        null === d ? b || null === a.tail ? a.tail = null : a.tail.sibling = null : d.sibling = null;
    }
  }
  function S(a) {
    var b = null !== a.alternate && a.alternate.child === a.child, c = 0, d = 0;
    if (b) for (var e = a.child; null !== e; ) c |= e.lanes | e.childLanes, d |= e.subtreeFlags & 14680064, d |= e.flags & 14680064, e.return = a, e = e.sibling;
    else for (e = a.child; null !== e; ) c |= e.lanes | e.childLanes, d |= e.subtreeFlags, d |= e.flags, e.return = a, e = e.sibling;
    a.subtreeFlags |= d;
    a.childLanes = c;
    return b;
  }
  function Ej(a, b, c) {
    var d = b.pendingProps;
    wg(b);
    switch (b.tag) {
      case 2:
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return S(b), null;
      case 1:
        return Zf(b.type) && $f(), S(b), null;
      case 3:
        d = b.stateNode;
        zh();
        E(Wf);
        E(H);
        Eh();
        d.pendingContext && (d.context = d.pendingContext, d.pendingContext = null);
        if (null === a || null === a.child) Gg(b) ? b.flags |= 4 : null === a || a.memoizedState.isDehydrated && 0 === (b.flags & 256) || (b.flags |= 1024, null !== zg && (Fj(zg), zg = null));
        Aj(a, b);
        S(b);
        return null;
      case 5:
        Bh(b);
        var e = xh(wh.current);
        c = b.type;
        if (null !== a && null != b.stateNode) Bj(a, b, c, d, e), a.ref !== b.ref && (b.flags |= 512, b.flags |= 2097152);
        else {
          if (!d) {
            if (null === b.stateNode) throw Error(p(166));
            S(b);
            return null;
          }
          a = xh(uh.current);
          if (Gg(b)) {
            d = b.stateNode;
            c = b.type;
            var f = b.memoizedProps;
            d[Of] = b;
            d[Pf] = f;
            a = 0 !== (b.mode & 1);
            switch (c) {
              case "dialog":
                D("cancel", d);
                D("close", d);
                break;
              case "iframe":
              case "object":
              case "embed":
                D("load", d);
                break;
              case "video":
              case "audio":
                for (e = 0; e < lf.length; e++) D(lf[e], d);
                break;
              case "source":
                D("error", d);
                break;
              case "img":
              case "image":
              case "link":
                D(
                  "error",
                  d
                );
                D("load", d);
                break;
              case "details":
                D("toggle", d);
                break;
              case "input":
                Za(d, f);
                D("invalid", d);
                break;
              case "select":
                d._wrapperState = { wasMultiple: !!f.multiple };
                D("invalid", d);
                break;
              case "textarea":
                hb(d, f), D("invalid", d);
            }
            ub(c, f);
            e = null;
            for (var g in f) if (f.hasOwnProperty(g)) {
              var h = f[g];
              "children" === g ? "string" === typeof h ? d.textContent !== h && (true !== f.suppressHydrationWarning && Af(d.textContent, h, a), e = ["children", h]) : "number" === typeof h && d.textContent !== "" + h && (true !== f.suppressHydrationWarning && Af(
                d.textContent,
                h,
                a
              ), e = ["children", "" + h]) : ea.hasOwnProperty(g) && null != h && "onScroll" === g && D("scroll", d);
            }
            switch (c) {
              case "input":
                Va(d);
                db(d, f, true);
                break;
              case "textarea":
                Va(d);
                jb(d);
                break;
              case "select":
              case "option":
                break;
              default:
                "function" === typeof f.onClick && (d.onclick = Bf);
            }
            d = e;
            b.updateQueue = d;
            null !== d && (b.flags |= 4);
          } else {
            g = 9 === e.nodeType ? e : e.ownerDocument;
            "http://www.w3.org/1999/xhtml" === a && (a = kb(c));
            "http://www.w3.org/1999/xhtml" === a ? "script" === c ? (a = g.createElement("div"), a.innerHTML = "<script><\/script>", a = a.removeChild(a.firstChild)) : "string" === typeof d.is ? a = g.createElement(c, { is: d.is }) : (a = g.createElement(c), "select" === c && (g = a, d.multiple ? g.multiple = true : d.size && (g.size = d.size))) : a = g.createElementNS(a, c);
            a[Of] = b;
            a[Pf] = d;
            zj(a, b, false, false);
            b.stateNode = a;
            a: {
              g = vb(c, d);
              switch (c) {
                case "dialog":
                  D("cancel", a);
                  D("close", a);
                  e = d;
                  break;
                case "iframe":
                case "object":
                case "embed":
                  D("load", a);
                  e = d;
                  break;
                case "video":
                case "audio":
                  for (e = 0; e < lf.length; e++) D(lf[e], a);
                  e = d;
                  break;
                case "source":
                  D("error", a);
                  e = d;
                  break;
                case "img":
                case "image":
                case "link":
                  D(
                    "error",
                    a
                  );
                  D("load", a);
                  e = d;
                  break;
                case "details":
                  D("toggle", a);
                  e = d;
                  break;
                case "input":
                  Za(a, d);
                  e = Ya(a, d);
                  D("invalid", a);
                  break;
                case "option":
                  e = d;
                  break;
                case "select":
                  a._wrapperState = { wasMultiple: !!d.multiple };
                  e = A({}, d, { value: void 0 });
                  D("invalid", a);
                  break;
                case "textarea":
                  hb(a, d);
                  e = gb(a, d);
                  D("invalid", a);
                  break;
                default:
                  e = d;
              }
              ub(c, e);
              h = e;
              for (f in h) if (h.hasOwnProperty(f)) {
                var k = h[f];
                "style" === f ? sb(a, k) : "dangerouslySetInnerHTML" === f ? (k = k ? k.__html : void 0, null != k && nb(a, k)) : "children" === f ? "string" === typeof k ? ("textarea" !== c || "" !== k) && ob(a, k) : "number" === typeof k && ob(a, "" + k) : "suppressContentEditableWarning" !== f && "suppressHydrationWarning" !== f && "autoFocus" !== f && (ea.hasOwnProperty(f) ? null != k && "onScroll" === f && D("scroll", a) : null != k && ta(a, f, k, g));
              }
              switch (c) {
                case "input":
                  Va(a);
                  db(a, d, false);
                  break;
                case "textarea":
                  Va(a);
                  jb(a);
                  break;
                case "option":
                  null != d.value && a.setAttribute("value", "" + Sa(d.value));
                  break;
                case "select":
                  a.multiple = !!d.multiple;
                  f = d.value;
                  null != f ? fb(a, !!d.multiple, f, false) : null != d.defaultValue && fb(
                    a,
                    !!d.multiple,
                    d.defaultValue,
                    true
                  );
                  break;
                default:
                  "function" === typeof e.onClick && (a.onclick = Bf);
              }
              switch (c) {
                case "button":
                case "input":
                case "select":
                case "textarea":
                  d = !!d.autoFocus;
                  break a;
                case "img":
                  d = true;
                  break a;
                default:
                  d = false;
              }
            }
            d && (b.flags |= 4);
          }
          null !== b.ref && (b.flags |= 512, b.flags |= 2097152);
        }
        S(b);
        return null;
      case 6:
        if (a && null != b.stateNode) Cj(a, b, a.memoizedProps, d);
        else {
          if ("string" !== typeof d && null === b.stateNode) throw Error(p(166));
          c = xh(wh.current);
          xh(uh.current);
          if (Gg(b)) {
            d = b.stateNode;
            c = b.memoizedProps;
            d[Of] = b;
            if (f = d.nodeValue !== c) {
              if (a = xg, null !== a) switch (a.tag) {
                case 3:
                  Af(d.nodeValue, c, 0 !== (a.mode & 1));
                  break;
                case 5:
                  true !== a.memoizedProps.suppressHydrationWarning && Af(d.nodeValue, c, 0 !== (a.mode & 1));
              }
            }
            f && (b.flags |= 4);
          } else d = (9 === c.nodeType ? c : c.ownerDocument).createTextNode(d), d[Of] = b, b.stateNode = d;
        }
        S(b);
        return null;
      case 13:
        E(L);
        d = b.memoizedState;
        if (null === a || null !== a.memoizedState && null !== a.memoizedState.dehydrated) {
          if (I && null !== yg && 0 !== (b.mode & 1) && 0 === (b.flags & 128)) Hg(), Ig(), b.flags |= 98560, f = false;
          else if (f = Gg(b), null !== d && null !== d.dehydrated) {
            if (null === a) {
              if (!f) throw Error(p(318));
              f = b.memoizedState;
              f = null !== f ? f.dehydrated : null;
              if (!f) throw Error(p(317));
              f[Of] = b;
            } else Ig(), 0 === (b.flags & 128) && (b.memoizedState = null), b.flags |= 4;
            S(b);
            f = false;
          } else null !== zg && (Fj(zg), zg = null), f = true;
          if (!f) return b.flags & 65536 ? b : null;
        }
        if (0 !== (b.flags & 128)) return b.lanes = c, b;
        d = null !== d;
        d !== (null !== a && null !== a.memoizedState) && d && (b.child.flags |= 8192, 0 !== (b.mode & 1) && (null === a || 0 !== (L.current & 1) ? 0 === T && (T = 3) : tj()));
        null !== b.updateQueue && (b.flags |= 4);
        S(b);
        return null;
      case 4:
        return zh(), Aj(a, b), null === a && sf(b.stateNode.containerInfo), S(b), null;
      case 10:
        return ah(b.type._context), S(b), null;
      case 17:
        return Zf(b.type) && $f(), S(b), null;
      case 19:
        E(L);
        f = b.memoizedState;
        if (null === f) return S(b), null;
        d = 0 !== (b.flags & 128);
        g = f.rendering;
        if (null === g) if (d) Dj(f, false);
        else {
          if (0 !== T || null !== a && 0 !== (a.flags & 128)) for (a = b.child; null !== a; ) {
            g = Ch(a);
            if (null !== g) {
              b.flags |= 128;
              Dj(f, false);
              d = g.updateQueue;
              null !== d && (b.updateQueue = d, b.flags |= 4);
              b.subtreeFlags = 0;
              d = c;
              for (c = b.child; null !== c; ) f = c, a = d, f.flags &= 14680066, g = f.alternate, null === g ? (f.childLanes = 0, f.lanes = a, f.child = null, f.subtreeFlags = 0, f.memoizedProps = null, f.memoizedState = null, f.updateQueue = null, f.dependencies = null, f.stateNode = null) : (f.childLanes = g.childLanes, f.lanes = g.lanes, f.child = g.child, f.subtreeFlags = 0, f.deletions = null, f.memoizedProps = g.memoizedProps, f.memoizedState = g.memoizedState, f.updateQueue = g.updateQueue, f.type = g.type, a = g.dependencies, f.dependencies = null === a ? null : { lanes: a.lanes, firstContext: a.firstContext }), c = c.sibling;
              G(L, L.current & 1 | 2);
              return b.child;
            }
            a = a.sibling;
          }
          null !== f.tail && B() > Gj && (b.flags |= 128, d = true, Dj(f, false), b.lanes = 4194304);
        }
        else {
          if (!d) if (a = Ch(g), null !== a) {
            if (b.flags |= 128, d = true, c = a.updateQueue, null !== c && (b.updateQueue = c, b.flags |= 4), Dj(f, true), null === f.tail && "hidden" === f.tailMode && !g.alternate && !I) return S(b), null;
          } else 2 * B() - f.renderingStartTime > Gj && 1073741824 !== c && (b.flags |= 128, d = true, Dj(f, false), b.lanes = 4194304);
          f.isBackwards ? (g.sibling = b.child, b.child = g) : (c = f.last, null !== c ? c.sibling = g : b.child = g, f.last = g);
        }
        if (null !== f.tail) return b = f.tail, f.rendering = b, f.tail = b.sibling, f.renderingStartTime = B(), b.sibling = null, c = L.current, G(L, d ? c & 1 | 2 : c & 1), b;
        S(b);
        return null;
      case 22:
      case 23:
        return Hj(), d = null !== b.memoizedState, null !== a && null !== a.memoizedState !== d && (b.flags |= 8192), d && 0 !== (b.mode & 1) ? 0 !== (fj & 1073741824) && (S(b), b.subtreeFlags & 6 && (b.flags |= 8192)) : S(b), null;
      case 24:
        return null;
      case 25:
        return null;
    }
    throw Error(p(156, b.tag));
  }
  function Ij(a, b) {
    wg(b);
    switch (b.tag) {
      case 1:
        return Zf(b.type) && $f(), a = b.flags, a & 65536 ? (b.flags = a & -65537 | 128, b) : null;
      case 3:
        return zh(), E(Wf), E(H), Eh(), a = b.flags, 0 !== (a & 65536) && 0 === (a & 128) ? (b.flags = a & -65537 | 128, b) : null;
      case 5:
        return Bh(b), null;
      case 13:
        E(L);
        a = b.memoizedState;
        if (null !== a && null !== a.dehydrated) {
          if (null === b.alternate) throw Error(p(340));
          Ig();
        }
        a = b.flags;
        return a & 65536 ? (b.flags = a & -65537 | 128, b) : null;
      case 19:
        return E(L), null;
      case 4:
        return zh(), null;
      case 10:
        return ah(b.type._context), null;
      case 22:
      case 23:
        return Hj(), null;
      case 24:
        return null;
      default:
        return null;
    }
  }
  var Jj = false, U = false, Kj = "function" === typeof WeakSet ? WeakSet : Set, V = null;
  function Lj(a, b) {
    var c = a.ref;
    if (null !== c) if ("function" === typeof c) try {
      c(null);
    } catch (d) {
      W(a, b, d);
    }
    else c.current = null;
  }
  function Mj(a, b, c) {
    try {
      c();
    } catch (d) {
      W(a, b, d);
    }
  }
  var Nj = false;
  function Oj(a, b) {
    Cf = dd;
    a = Me();
    if (Ne(a)) {
      if ("selectionStart" in a) var c = { start: a.selectionStart, end: a.selectionEnd };
      else a: {
        c = (c = a.ownerDocument) && c.defaultView || window;
        var d = c.getSelection && c.getSelection();
        if (d && 0 !== d.rangeCount) {
          c = d.anchorNode;
          var e = d.anchorOffset, f = d.focusNode;
          d = d.focusOffset;
          try {
            c.nodeType, f.nodeType;
          } catch (F) {
            c = null;
            break a;
          }
          var g = 0, h = -1, k = -1, l = 0, m = 0, q = a, r = null;
          b: for (; ; ) {
            for (var y; ; ) {
              q !== c || 0 !== e && 3 !== q.nodeType || (h = g + e);
              q !== f || 0 !== d && 3 !== q.nodeType || (k = g + d);
              3 === q.nodeType && (g += q.nodeValue.length);
              if (null === (y = q.firstChild)) break;
              r = q;
              q = y;
            }
            for (; ; ) {
              if (q === a) break b;
              r === c && ++l === e && (h = g);
              r === f && ++m === d && (k = g);
              if (null !== (y = q.nextSibling)) break;
              q = r;
              r = q.parentNode;
            }
            q = y;
          }
          c = -1 === h || -1 === k ? null : { start: h, end: k };
        } else c = null;
      }
      c = c || { start: 0, end: 0 };
    } else c = null;
    Df = { focusedElem: a, selectionRange: c };
    dd = false;
    for (V = b; null !== V; ) if (b = V, a = b.child, 0 !== (b.subtreeFlags & 1028) && null !== a) a.return = b, V = a;
    else for (; null !== V; ) {
      b = V;
      try {
        var n = b.alternate;
        if (0 !== (b.flags & 1024)) switch (b.tag) {
          case 0:
          case 11:
          case 15:
            break;
          case 1:
            if (null !== n) {
              var t = n.memoizedProps, J = n.memoizedState, x = b.stateNode, w = x.getSnapshotBeforeUpdate(b.elementType === b.type ? t : Ci(b.type, t), J);
              x.__reactInternalSnapshotBeforeUpdate = w;
            }
            break;
          case 3:
            var u = b.stateNode.containerInfo;
            1 === u.nodeType ? u.textContent = "" : 9 === u.nodeType && u.documentElement && u.removeChild(u.documentElement);
            break;
          case 5:
          case 6:
          case 4:
          case 17:
            break;
          default:
            throw Error(p(163));
        }
      } catch (F) {
        W(b, b.return, F);
      }
      a = b.sibling;
      if (null !== a) {
        a.return = b.return;
        V = a;
        break;
      }
      V = b.return;
    }
    n = Nj;
    Nj = false;
    return n;
  }
  function Pj(a, b, c) {
    var d = b.updateQueue;
    d = null !== d ? d.lastEffect : null;
    if (null !== d) {
      var e = d = d.next;
      do {
        if ((e.tag & a) === a) {
          var f = e.destroy;
          e.destroy = void 0;
          void 0 !== f && Mj(b, c, f);
        }
        e = e.next;
      } while (e !== d);
    }
  }
  function Qj(a, b) {
    b = b.updateQueue;
    b = null !== b ? b.lastEffect : null;
    if (null !== b) {
      var c = b = b.next;
      do {
        if ((c.tag & a) === a) {
          var d = c.create;
          c.destroy = d();
        }
        c = c.next;
      } while (c !== b);
    }
  }
  function Rj(a) {
    var b = a.ref;
    if (null !== b) {
      var c = a.stateNode;
      switch (a.tag) {
        case 5:
          a = c;
          break;
        default:
          a = c;
      }
      "function" === typeof b ? b(a) : b.current = a;
    }
  }
  function Sj(a) {
    var b = a.alternate;
    null !== b && (a.alternate = null, Sj(b));
    a.child = null;
    a.deletions = null;
    a.sibling = null;
    5 === a.tag && (b = a.stateNode, null !== b && (delete b[Of], delete b[Pf], delete b[of], delete b[Qf], delete b[Rf]));
    a.stateNode = null;
    a.return = null;
    a.dependencies = null;
    a.memoizedProps = null;
    a.memoizedState = null;
    a.pendingProps = null;
    a.stateNode = null;
    a.updateQueue = null;
  }
  function Tj(a) {
    return 5 === a.tag || 3 === a.tag || 4 === a.tag;
  }
  function Uj(a) {
    a: for (; ; ) {
      for (; null === a.sibling; ) {
        if (null === a.return || Tj(a.return)) return null;
        a = a.return;
      }
      a.sibling.return = a.return;
      for (a = a.sibling; 5 !== a.tag && 6 !== a.tag && 18 !== a.tag; ) {
        if (a.flags & 2) continue a;
        if (null === a.child || 4 === a.tag) continue a;
        else a.child.return = a, a = a.child;
      }
      if (!(a.flags & 2)) return a.stateNode;
    }
  }
  function Vj(a, b, c) {
    var d = a.tag;
    if (5 === d || 6 === d) a = a.stateNode, b ? 8 === c.nodeType ? c.parentNode.insertBefore(a, b) : c.insertBefore(a, b) : (8 === c.nodeType ? (b = c.parentNode, b.insertBefore(a, c)) : (b = c, b.appendChild(a)), c = c._reactRootContainer, null !== c && void 0 !== c || null !== b.onclick || (b.onclick = Bf));
    else if (4 !== d && (a = a.child, null !== a)) for (Vj(a, b, c), a = a.sibling; null !== a; ) Vj(a, b, c), a = a.sibling;
  }
  function Wj(a, b, c) {
    var d = a.tag;
    if (5 === d || 6 === d) a = a.stateNode, b ? c.insertBefore(a, b) : c.appendChild(a);
    else if (4 !== d && (a = a.child, null !== a)) for (Wj(a, b, c), a = a.sibling; null !== a; ) Wj(a, b, c), a = a.sibling;
  }
  var X = null, Xj = false;
  function Yj(a, b, c) {
    for (c = c.child; null !== c; ) Zj(a, b, c), c = c.sibling;
  }
  function Zj(a, b, c) {
    if (lc && "function" === typeof lc.onCommitFiberUnmount) try {
      lc.onCommitFiberUnmount(kc, c);
    } catch (h) {
    }
    switch (c.tag) {
      case 5:
        U || Lj(c, b);
      case 6:
        var d = X, e = Xj;
        X = null;
        Yj(a, b, c);
        X = d;
        Xj = e;
        null !== X && (Xj ? (a = X, c = c.stateNode, 8 === a.nodeType ? a.parentNode.removeChild(c) : a.removeChild(c)) : X.removeChild(c.stateNode));
        break;
      case 18:
        null !== X && (Xj ? (a = X, c = c.stateNode, 8 === a.nodeType ? Kf(a.parentNode, c) : 1 === a.nodeType && Kf(a, c), bd(a)) : Kf(X, c.stateNode));
        break;
      case 4:
        d = X;
        e = Xj;
        X = c.stateNode.containerInfo;
        Xj = true;
        Yj(a, b, c);
        X = d;
        Xj = e;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        if (!U && (d = c.updateQueue, null !== d && (d = d.lastEffect, null !== d))) {
          e = d = d.next;
          do {
            var f = e, g = f.destroy;
            f = f.tag;
            void 0 !== g && (0 !== (f & 2) ? Mj(c, b, g) : 0 !== (f & 4) && Mj(c, b, g));
            e = e.next;
          } while (e !== d);
        }
        Yj(a, b, c);
        break;
      case 1:
        if (!U && (Lj(c, b), d = c.stateNode, "function" === typeof d.componentWillUnmount)) try {
          d.props = c.memoizedProps, d.state = c.memoizedState, d.componentWillUnmount();
        } catch (h) {
          W(c, b, h);
        }
        Yj(a, b, c);
        break;
      case 21:
        Yj(a, b, c);
        break;
      case 22:
        c.mode & 1 ? (U = (d = U) || null !== c.memoizedState, Yj(a, b, c), U = d) : Yj(a, b, c);
        break;
      default:
        Yj(a, b, c);
    }
  }
  function ak(a) {
    var b = a.updateQueue;
    if (null !== b) {
      a.updateQueue = null;
      var c = a.stateNode;
      null === c && (c = a.stateNode = new Kj());
      b.forEach(function(b2) {
        var d = bk.bind(null, a, b2);
        c.has(b2) || (c.add(b2), b2.then(d, d));
      });
    }
  }
  function ck(a, b) {
    var c = b.deletions;
    if (null !== c) for (var d = 0; d < c.length; d++) {
      var e = c[d];
      try {
        var f = a, g = b, h = g;
        a: for (; null !== h; ) {
          switch (h.tag) {
            case 5:
              X = h.stateNode;
              Xj = false;
              break a;
            case 3:
              X = h.stateNode.containerInfo;
              Xj = true;
              break a;
            case 4:
              X = h.stateNode.containerInfo;
              Xj = true;
              break a;
          }
          h = h.return;
        }
        if (null === X) throw Error(p(160));
        Zj(f, g, e);
        X = null;
        Xj = false;
        var k = e.alternate;
        null !== k && (k.return = null);
        e.return = null;
      } catch (l) {
        W(e, b, l);
      }
    }
    if (b.subtreeFlags & 12854) for (b = b.child; null !== b; ) dk(b, a), b = b.sibling;
  }
  function dk(a, b) {
    var c = a.alternate, d = a.flags;
    switch (a.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        ck(b, a);
        ek(a);
        if (d & 4) {
          try {
            Pj(3, a, a.return), Qj(3, a);
          } catch (t) {
            W(a, a.return, t);
          }
          try {
            Pj(5, a, a.return);
          } catch (t) {
            W(a, a.return, t);
          }
        }
        break;
      case 1:
        ck(b, a);
        ek(a);
        d & 512 && null !== c && Lj(c, c.return);
        break;
      case 5:
        ck(b, a);
        ek(a);
        d & 512 && null !== c && Lj(c, c.return);
        if (a.flags & 32) {
          var e = a.stateNode;
          try {
            ob(e, "");
          } catch (t) {
            W(a, a.return, t);
          }
        }
        if (d & 4 && (e = a.stateNode, null != e)) {
          var f = a.memoizedProps, g = null !== c ? c.memoizedProps : f, h = a.type, k = a.updateQueue;
          a.updateQueue = null;
          if (null !== k) try {
            "input" === h && "radio" === f.type && null != f.name && ab(e, f);
            vb(h, g);
            var l = vb(h, f);
            for (g = 0; g < k.length; g += 2) {
              var m = k[g], q = k[g + 1];
              "style" === m ? sb(e, q) : "dangerouslySetInnerHTML" === m ? nb(e, q) : "children" === m ? ob(e, q) : ta(e, m, q, l);
            }
            switch (h) {
              case "input":
                bb(e, f);
                break;
              case "textarea":
                ib(e, f);
                break;
              case "select":
                var r = e._wrapperState.wasMultiple;
                e._wrapperState.wasMultiple = !!f.multiple;
                var y = f.value;
                null != y ? fb(e, !!f.multiple, y, false) : r !== !!f.multiple && (null != f.defaultValue ? fb(
                  e,
                  !!f.multiple,
                  f.defaultValue,
                  true
                ) : fb(e, !!f.multiple, f.multiple ? [] : "", false));
            }
            e[Pf] = f;
          } catch (t) {
            W(a, a.return, t);
          }
        }
        break;
      case 6:
        ck(b, a);
        ek(a);
        if (d & 4) {
          if (null === a.stateNode) throw Error(p(162));
          e = a.stateNode;
          f = a.memoizedProps;
          try {
            e.nodeValue = f;
          } catch (t) {
            W(a, a.return, t);
          }
        }
        break;
      case 3:
        ck(b, a);
        ek(a);
        if (d & 4 && null !== c && c.memoizedState.isDehydrated) try {
          bd(b.containerInfo);
        } catch (t) {
          W(a, a.return, t);
        }
        break;
      case 4:
        ck(b, a);
        ek(a);
        break;
      case 13:
        ck(b, a);
        ek(a);
        e = a.child;
        e.flags & 8192 && (f = null !== e.memoizedState, e.stateNode.isHidden = f, !f || null !== e.alternate && null !== e.alternate.memoizedState || (fk = B()));
        d & 4 && ak(a);
        break;
      case 22:
        m = null !== c && null !== c.memoizedState;
        a.mode & 1 ? (U = (l = U) || m, ck(b, a), U = l) : ck(b, a);
        ek(a);
        if (d & 8192) {
          l = null !== a.memoizedState;
          if ((a.stateNode.isHidden = l) && !m && 0 !== (a.mode & 1)) for (V = a, m = a.child; null !== m; ) {
            for (q = V = m; null !== V; ) {
              r = V;
              y = r.child;
              switch (r.tag) {
                case 0:
                case 11:
                case 14:
                case 15:
                  Pj(4, r, r.return);
                  break;
                case 1:
                  Lj(r, r.return);
                  var n = r.stateNode;
                  if ("function" === typeof n.componentWillUnmount) {
                    d = r;
                    c = r.return;
                    try {
                      b = d, n.props = b.memoizedProps, n.state = b.memoizedState, n.componentWillUnmount();
                    } catch (t) {
                      W(d, c, t);
                    }
                  }
                  break;
                case 5:
                  Lj(r, r.return);
                  break;
                case 22:
                  if (null !== r.memoizedState) {
                    gk(q);
                    continue;
                  }
              }
              null !== y ? (y.return = r, V = y) : gk(q);
            }
            m = m.sibling;
          }
          a: for (m = null, q = a; ; ) {
            if (5 === q.tag) {
              if (null === m) {
                m = q;
                try {
                  e = q.stateNode, l ? (f = e.style, "function" === typeof f.setProperty ? f.setProperty("display", "none", "important") : f.display = "none") : (h = q.stateNode, k = q.memoizedProps.style, g = void 0 !== k && null !== k && k.hasOwnProperty("display") ? k.display : null, h.style.display = rb("display", g));
                } catch (t) {
                  W(a, a.return, t);
                }
              }
            } else if (6 === q.tag) {
              if (null === m) try {
                q.stateNode.nodeValue = l ? "" : q.memoizedProps;
              } catch (t) {
                W(a, a.return, t);
              }
            } else if ((22 !== q.tag && 23 !== q.tag || null === q.memoizedState || q === a) && null !== q.child) {
              q.child.return = q;
              q = q.child;
              continue;
            }
            if (q === a) break a;
            for (; null === q.sibling; ) {
              if (null === q.return || q.return === a) break a;
              m === q && (m = null);
              q = q.return;
            }
            m === q && (m = null);
            q.sibling.return = q.return;
            q = q.sibling;
          }
        }
        break;
      case 19:
        ck(b, a);
        ek(a);
        d & 4 && ak(a);
        break;
      case 21:
        break;
      default:
        ck(
          b,
          a
        ), ek(a);
    }
  }
  function ek(a) {
    var b = a.flags;
    if (b & 2) {
      try {
        a: {
          for (var c = a.return; null !== c; ) {
            if (Tj(c)) {
              var d = c;
              break a;
            }
            c = c.return;
          }
          throw Error(p(160));
        }
        switch (d.tag) {
          case 5:
            var e = d.stateNode;
            d.flags & 32 && (ob(e, ""), d.flags &= -33);
            var f = Uj(a);
            Wj(a, f, e);
            break;
          case 3:
          case 4:
            var g = d.stateNode.containerInfo, h = Uj(a);
            Vj(a, h, g);
            break;
          default:
            throw Error(p(161));
        }
      } catch (k) {
        W(a, a.return, k);
      }
      a.flags &= -3;
    }
    b & 4096 && (a.flags &= -4097);
  }
  function hk(a, b, c) {
    V = a;
    ik(a);
  }
  function ik(a, b, c) {
    for (var d = 0 !== (a.mode & 1); null !== V; ) {
      var e = V, f = e.child;
      if (22 === e.tag && d) {
        var g = null !== e.memoizedState || Jj;
        if (!g) {
          var h = e.alternate, k = null !== h && null !== h.memoizedState || U;
          h = Jj;
          var l = U;
          Jj = g;
          if ((U = k) && !l) for (V = e; null !== V; ) g = V, k = g.child, 22 === g.tag && null !== g.memoizedState ? jk(e) : null !== k ? (k.return = g, V = k) : jk(e);
          for (; null !== f; ) V = f, ik(f), f = f.sibling;
          V = e;
          Jj = h;
          U = l;
        }
        kk(a);
      } else 0 !== (e.subtreeFlags & 8772) && null !== f ? (f.return = e, V = f) : kk(a);
    }
  }
  function kk(a) {
    for (; null !== V; ) {
      var b = V;
      if (0 !== (b.flags & 8772)) {
        var c = b.alternate;
        try {
          if (0 !== (b.flags & 8772)) switch (b.tag) {
            case 0:
            case 11:
            case 15:
              U || Qj(5, b);
              break;
            case 1:
              var d = b.stateNode;
              if (b.flags & 4 && !U) if (null === c) d.componentDidMount();
              else {
                var e = b.elementType === b.type ? c.memoizedProps : Ci(b.type, c.memoizedProps);
                d.componentDidUpdate(e, c.memoizedState, d.__reactInternalSnapshotBeforeUpdate);
              }
              var f = b.updateQueue;
              null !== f && sh(b, f, d);
              break;
            case 3:
              var g = b.updateQueue;
              if (null !== g) {
                c = null;
                if (null !== b.child) switch (b.child.tag) {
                  case 5:
                    c = b.child.stateNode;
                    break;
                  case 1:
                    c = b.child.stateNode;
                }
                sh(b, g, c);
              }
              break;
            case 5:
              var h = b.stateNode;
              if (null === c && b.flags & 4) {
                c = h;
                var k = b.memoizedProps;
                switch (b.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    k.autoFocus && c.focus();
                    break;
                  case "img":
                    k.src && (c.src = k.src);
                }
              }
              break;
            case 6:
              break;
            case 4:
              break;
            case 12:
              break;
            case 13:
              if (null === b.memoizedState) {
                var l = b.alternate;
                if (null !== l) {
                  var m = l.memoizedState;
                  if (null !== m) {
                    var q = m.dehydrated;
                    null !== q && bd(q);
                  }
                }
              }
              break;
            case 19:
            case 17:
            case 21:
            case 22:
            case 23:
            case 25:
              break;
            default:
              throw Error(p(163));
          }
          U || b.flags & 512 && Rj(b);
        } catch (r) {
          W(b, b.return, r);
        }
      }
      if (b === a) {
        V = null;
        break;
      }
      c = b.sibling;
      if (null !== c) {
        c.return = b.return;
        V = c;
        break;
      }
      V = b.return;
    }
  }
  function gk(a) {
    for (; null !== V; ) {
      var b = V;
      if (b === a) {
        V = null;
        break;
      }
      var c = b.sibling;
      if (null !== c) {
        c.return = b.return;
        V = c;
        break;
      }
      V = b.return;
    }
  }
  function jk(a) {
    for (; null !== V; ) {
      var b = V;
      try {
        switch (b.tag) {
          case 0:
          case 11:
          case 15:
            var c = b.return;
            try {
              Qj(4, b);
            } catch (k) {
              W(b, c, k);
            }
            break;
          case 1:
            var d = b.stateNode;
            if ("function" === typeof d.componentDidMount) {
              var e = b.return;
              try {
                d.componentDidMount();
              } catch (k) {
                W(b, e, k);
              }
            }
            var f = b.return;
            try {
              Rj(b);
            } catch (k) {
              W(b, f, k);
            }
            break;
          case 5:
            var g = b.return;
            try {
              Rj(b);
            } catch (k) {
              W(b, g, k);
            }
        }
      } catch (k) {
        W(b, b.return, k);
      }
      if (b === a) {
        V = null;
        break;
      }
      var h = b.sibling;
      if (null !== h) {
        h.return = b.return;
        V = h;
        break;
      }
      V = b.return;
    }
  }
  var lk = Math.ceil, mk = ua.ReactCurrentDispatcher, nk = ua.ReactCurrentOwner, ok = ua.ReactCurrentBatchConfig, K = 0, Q = null, Y = null, Z = 0, fj = 0, ej = Uf(0), T = 0, pk = null, rh = 0, qk = 0, rk = 0, sk = null, tk = null, fk = 0, Gj = Infinity, uk = null, Oi = false, Pi = null, Ri = null, vk = false, wk = null, xk = 0, yk = 0, zk = null, Ak = -1, Bk = 0;
  function R() {
    return 0 !== (K & 6) ? B() : -1 !== Ak ? Ak : Ak = B();
  }
  function yi(a) {
    if (0 === (a.mode & 1)) return 1;
    if (0 !== (K & 2) && 0 !== Z) return Z & -Z;
    if (null !== Kg.transition) return 0 === Bk && (Bk = yc()), Bk;
    a = C;
    if (0 !== a) return a;
    a = window.event;
    a = void 0 === a ? 16 : jd(a.type);
    return a;
  }
  function gi(a, b, c, d) {
    if (50 < yk) throw yk = 0, zk = null, Error(p(185));
    Ac(a, c, d);
    if (0 === (K & 2) || a !== Q) a === Q && (0 === (K & 2) && (qk |= c), 4 === T && Ck(a, Z)), Dk(a, d), 1 === c && 0 === K && 0 === (b.mode & 1) && (Gj = B() + 500, fg && jg());
  }
  function Dk(a, b) {
    var c = a.callbackNode;
    wc(a, b);
    var d = uc(a, a === Q ? Z : 0);
    if (0 === d) null !== c && bc(c), a.callbackNode = null, a.callbackPriority = 0;
    else if (b = d & -d, a.callbackPriority !== b) {
      null != c && bc(c);
      if (1 === b) 0 === a.tag ? ig(Ek.bind(null, a)) : hg(Ek.bind(null, a)), Jf(function() {
        0 === (K & 6) && jg();
      }), c = null;
      else {
        switch (Dc(d)) {
          case 1:
            c = fc;
            break;
          case 4:
            c = gc;
            break;
          case 16:
            c = hc;
            break;
          case 536870912:
            c = jc;
            break;
          default:
            c = hc;
        }
        c = Fk(c, Gk.bind(null, a));
      }
      a.callbackPriority = b;
      a.callbackNode = c;
    }
  }
  function Gk(a, b) {
    Ak = -1;
    Bk = 0;
    if (0 !== (K & 6)) throw Error(p(327));
    var c = a.callbackNode;
    if (Hk() && a.callbackNode !== c) return null;
    var d = uc(a, a === Q ? Z : 0);
    if (0 === d) return null;
    if (0 !== (d & 30) || 0 !== (d & a.expiredLanes) || b) b = Ik(a, d);
    else {
      b = d;
      var e = K;
      K |= 2;
      var f = Jk();
      if (Q !== a || Z !== b) uk = null, Gj = B() + 500, Kk(a, b);
      do
        try {
          Lk();
          break;
        } catch (h) {
          Mk(a, h);
        }
      while (1);
      $g();
      mk.current = f;
      K = e;
      null !== Y ? b = 0 : (Q = null, Z = 0, b = T);
    }
    if (0 !== b) {
      2 === b && (e = xc(a), 0 !== e && (d = e, b = Nk(a, e)));
      if (1 === b) throw c = pk, Kk(a, 0), Ck(a, d), Dk(a, B()), c;
      if (6 === b) Ck(a, d);
      else {
        e = a.current.alternate;
        if (0 === (d & 30) && !Ok(e) && (b = Ik(a, d), 2 === b && (f = xc(a), 0 !== f && (d = f, b = Nk(a, f))), 1 === b)) throw c = pk, Kk(a, 0), Ck(a, d), Dk(a, B()), c;
        a.finishedWork = e;
        a.finishedLanes = d;
        switch (b) {
          case 0:
          case 1:
            throw Error(p(345));
          case 2:
            Pk(a, tk, uk);
            break;
          case 3:
            Ck(a, d);
            if ((d & 130023424) === d && (b = fk + 500 - B(), 10 < b)) {
              if (0 !== uc(a, 0)) break;
              e = a.suspendedLanes;
              if ((e & d) !== d) {
                R();
                a.pingedLanes |= a.suspendedLanes & e;
                break;
              }
              a.timeoutHandle = Ff(Pk.bind(null, a, tk, uk), b);
              break;
            }
            Pk(a, tk, uk);
            break;
          case 4:
            Ck(a, d);
            if ((d & 4194240) === d) break;
            b = a.eventTimes;
            for (e = -1; 0 < d; ) {
              var g = 31 - oc(d);
              f = 1 << g;
              g = b[g];
              g > e && (e = g);
              d &= ~f;
            }
            d = e;
            d = B() - d;
            d = (120 > d ? 120 : 480 > d ? 480 : 1080 > d ? 1080 : 1920 > d ? 1920 : 3e3 > d ? 3e3 : 4320 > d ? 4320 : 1960 * lk(d / 1960)) - d;
            if (10 < d) {
              a.timeoutHandle = Ff(Pk.bind(null, a, tk, uk), d);
              break;
            }
            Pk(a, tk, uk);
            break;
          case 5:
            Pk(a, tk, uk);
            break;
          default:
            throw Error(p(329));
        }
      }
    }
    Dk(a, B());
    return a.callbackNode === c ? Gk.bind(null, a) : null;
  }
  function Nk(a, b) {
    var c = sk;
    a.current.memoizedState.isDehydrated && (Kk(a, b).flags |= 256);
    a = Ik(a, b);
    2 !== a && (b = tk, tk = c, null !== b && Fj(b));
    return a;
  }
  function Fj(a) {
    null === tk ? tk = a : tk.push.apply(tk, a);
  }
  function Ok(a) {
    for (var b = a; ; ) {
      if (b.flags & 16384) {
        var c = b.updateQueue;
        if (null !== c && (c = c.stores, null !== c)) for (var d = 0; d < c.length; d++) {
          var e = c[d], f = e.getSnapshot;
          e = e.value;
          try {
            if (!He(f(), e)) return false;
          } catch (g) {
            return false;
          }
        }
      }
      c = b.child;
      if (b.subtreeFlags & 16384 && null !== c) c.return = b, b = c;
      else {
        if (b === a) break;
        for (; null === b.sibling; ) {
          if (null === b.return || b.return === a) return true;
          b = b.return;
        }
        b.sibling.return = b.return;
        b = b.sibling;
      }
    }
    return true;
  }
  function Ck(a, b) {
    b &= ~rk;
    b &= ~qk;
    a.suspendedLanes |= b;
    a.pingedLanes &= ~b;
    for (a = a.expirationTimes; 0 < b; ) {
      var c = 31 - oc(b), d = 1 << c;
      a[c] = -1;
      b &= ~d;
    }
  }
  function Ek(a) {
    if (0 !== (K & 6)) throw Error(p(327));
    Hk();
    var b = uc(a, 0);
    if (0 === (b & 1)) return Dk(a, B()), null;
    var c = Ik(a, b);
    if (0 !== a.tag && 2 === c) {
      var d = xc(a);
      0 !== d && (b = d, c = Nk(a, d));
    }
    if (1 === c) throw c = pk, Kk(a, 0), Ck(a, b), Dk(a, B()), c;
    if (6 === c) throw Error(p(345));
    a.finishedWork = a.current.alternate;
    a.finishedLanes = b;
    Pk(a, tk, uk);
    Dk(a, B());
    return null;
  }
  function Qk(a, b) {
    var c = K;
    K |= 1;
    try {
      return a(b);
    } finally {
      K = c, 0 === K && (Gj = B() + 500, fg && jg());
    }
  }
  function Rk(a) {
    null !== wk && 0 === wk.tag && 0 === (K & 6) && Hk();
    var b = K;
    K |= 1;
    var c = ok.transition, d = C;
    try {
      if (ok.transition = null, C = 1, a) return a();
    } finally {
      C = d, ok.transition = c, K = b, 0 === (K & 6) && jg();
    }
  }
  function Hj() {
    fj = ej.current;
    E(ej);
  }
  function Kk(a, b) {
    a.finishedWork = null;
    a.finishedLanes = 0;
    var c = a.timeoutHandle;
    -1 !== c && (a.timeoutHandle = -1, Gf(c));
    if (null !== Y) for (c = Y.return; null !== c; ) {
      var d = c;
      wg(d);
      switch (d.tag) {
        case 1:
          d = d.type.childContextTypes;
          null !== d && void 0 !== d && $f();
          break;
        case 3:
          zh();
          E(Wf);
          E(H);
          Eh();
          break;
        case 5:
          Bh(d);
          break;
        case 4:
          zh();
          break;
        case 13:
          E(L);
          break;
        case 19:
          E(L);
          break;
        case 10:
          ah(d.type._context);
          break;
        case 22:
        case 23:
          Hj();
      }
      c = c.return;
    }
    Q = a;
    Y = a = Pg(a.current, null);
    Z = fj = b;
    T = 0;
    pk = null;
    rk = qk = rh = 0;
    tk = sk = null;
    if (null !== fh) {
      for (b = 0; b < fh.length; b++) if (c = fh[b], d = c.interleaved, null !== d) {
        c.interleaved = null;
        var e = d.next, f = c.pending;
        if (null !== f) {
          var g = f.next;
          f.next = e;
          d.next = g;
        }
        c.pending = d;
      }
      fh = null;
    }
    return a;
  }
  function Mk(a, b) {
    do {
      var c = Y;
      try {
        $g();
        Fh.current = Rh;
        if (Ih) {
          for (var d = M.memoizedState; null !== d; ) {
            var e = d.queue;
            null !== e && (e.pending = null);
            d = d.next;
          }
          Ih = false;
        }
        Hh = 0;
        O = N = M = null;
        Jh = false;
        Kh = 0;
        nk.current = null;
        if (null === c || null === c.return) {
          T = 1;
          pk = b;
          Y = null;
          break;
        }
        a: {
          var f = a, g = c.return, h = c, k = b;
          b = Z;
          h.flags |= 32768;
          if (null !== k && "object" === typeof k && "function" === typeof k.then) {
            var l = k, m = h, q = m.tag;
            if (0 === (m.mode & 1) && (0 === q || 11 === q || 15 === q)) {
              var r = m.alternate;
              r ? (m.updateQueue = r.updateQueue, m.memoizedState = r.memoizedState, m.lanes = r.lanes) : (m.updateQueue = null, m.memoizedState = null);
            }
            var y = Ui(g);
            if (null !== y) {
              y.flags &= -257;
              Vi(y, g, h, f, b);
              y.mode & 1 && Si(f, l, b);
              b = y;
              k = l;
              var n = b.updateQueue;
              if (null === n) {
                var t = /* @__PURE__ */ new Set();
                t.add(k);
                b.updateQueue = t;
              } else n.add(k);
              break a;
            } else {
              if (0 === (b & 1)) {
                Si(f, l, b);
                tj();
                break a;
              }
              k = Error(p(426));
            }
          } else if (I && h.mode & 1) {
            var J = Ui(g);
            if (null !== J) {
              0 === (J.flags & 65536) && (J.flags |= 256);
              Vi(J, g, h, f, b);
              Jg(Ji(k, h));
              break a;
            }
          }
          f = k = Ji(k, h);
          4 !== T && (T = 2);
          null === sk ? sk = [f] : sk.push(f);
          f = g;
          do {
            switch (f.tag) {
              case 3:
                f.flags |= 65536;
                b &= -b;
                f.lanes |= b;
                var x = Ni(f, k, b);
                ph(f, x);
                break a;
              case 1:
                h = k;
                var w = f.type, u = f.stateNode;
                if (0 === (f.flags & 128) && ("function" === typeof w.getDerivedStateFromError || null !== u && "function" === typeof u.componentDidCatch && (null === Ri || !Ri.has(u)))) {
                  f.flags |= 65536;
                  b &= -b;
                  f.lanes |= b;
                  var F = Qi(f, h, b);
                  ph(f, F);
                  break a;
                }
            }
            f = f.return;
          } while (null !== f);
        }
        Sk(c);
      } catch (na) {
        b = na;
        Y === c && null !== c && (Y = c = c.return);
        continue;
      }
      break;
    } while (1);
  }
  function Jk() {
    var a = mk.current;
    mk.current = Rh;
    return null === a ? Rh : a;
  }
  function tj() {
    if (0 === T || 3 === T || 2 === T) T = 4;
    null === Q || 0 === (rh & 268435455) && 0 === (qk & 268435455) || Ck(Q, Z);
  }
  function Ik(a, b) {
    var c = K;
    K |= 2;
    var d = Jk();
    if (Q !== a || Z !== b) uk = null, Kk(a, b);
    do
      try {
        Tk();
        break;
      } catch (e) {
        Mk(a, e);
      }
    while (1);
    $g();
    K = c;
    mk.current = d;
    if (null !== Y) throw Error(p(261));
    Q = null;
    Z = 0;
    return T;
  }
  function Tk() {
    for (; null !== Y; ) Uk(Y);
  }
  function Lk() {
    for (; null !== Y && !cc(); ) Uk(Y);
  }
  function Uk(a) {
    var b = Vk(a.alternate, a, fj);
    a.memoizedProps = a.pendingProps;
    null === b ? Sk(a) : Y = b;
    nk.current = null;
  }
  function Sk(a) {
    var b = a;
    do {
      var c = b.alternate;
      a = b.return;
      if (0 === (b.flags & 32768)) {
        if (c = Ej(c, b, fj), null !== c) {
          Y = c;
          return;
        }
      } else {
        c = Ij(c, b);
        if (null !== c) {
          c.flags &= 32767;
          Y = c;
          return;
        }
        if (null !== a) a.flags |= 32768, a.subtreeFlags = 0, a.deletions = null;
        else {
          T = 6;
          Y = null;
          return;
        }
      }
      b = b.sibling;
      if (null !== b) {
        Y = b;
        return;
      }
      Y = b = a;
    } while (null !== b);
    0 === T && (T = 5);
  }
  function Pk(a, b, c) {
    var d = C, e = ok.transition;
    try {
      ok.transition = null, C = 1, Wk(a, b, c, d);
    } finally {
      ok.transition = e, C = d;
    }
    return null;
  }
  function Wk(a, b, c, d) {
    do
      Hk();
    while (null !== wk);
    if (0 !== (K & 6)) throw Error(p(327));
    c = a.finishedWork;
    var e = a.finishedLanes;
    if (null === c) return null;
    a.finishedWork = null;
    a.finishedLanes = 0;
    if (c === a.current) throw Error(p(177));
    a.callbackNode = null;
    a.callbackPriority = 0;
    var f = c.lanes | c.childLanes;
    Bc(a, f);
    a === Q && (Y = Q = null, Z = 0);
    0 === (c.subtreeFlags & 2064) && 0 === (c.flags & 2064) || vk || (vk = true, Fk(hc, function() {
      Hk();
      return null;
    }));
    f = 0 !== (c.flags & 15990);
    if (0 !== (c.subtreeFlags & 15990) || f) {
      f = ok.transition;
      ok.transition = null;
      var g = C;
      C = 1;
      var h = K;
      K |= 4;
      nk.current = null;
      Oj(a, c);
      dk(c, a);
      Oe(Df);
      dd = !!Cf;
      Df = Cf = null;
      a.current = c;
      hk(c);
      dc();
      K = h;
      C = g;
      ok.transition = f;
    } else a.current = c;
    vk && (vk = false, wk = a, xk = e);
    f = a.pendingLanes;
    0 === f && (Ri = null);
    mc(c.stateNode);
    Dk(a, B());
    if (null !== b) for (d = a.onRecoverableError, c = 0; c < b.length; c++) e = b[c], d(e.value, { componentStack: e.stack, digest: e.digest });
    if (Oi) throw Oi = false, a = Pi, Pi = null, a;
    0 !== (xk & 1) && 0 !== a.tag && Hk();
    f = a.pendingLanes;
    0 !== (f & 1) ? a === zk ? yk++ : (yk = 0, zk = a) : yk = 0;
    jg();
    return null;
  }
  function Hk() {
    if (null !== wk) {
      var a = Dc(xk), b = ok.transition, c = C;
      try {
        ok.transition = null;
        C = 16 > a ? 16 : a;
        if (null === wk) var d = false;
        else {
          a = wk;
          wk = null;
          xk = 0;
          if (0 !== (K & 6)) throw Error(p(331));
          var e = K;
          K |= 4;
          for (V = a.current; null !== V; ) {
            var f = V, g = f.child;
            if (0 !== (V.flags & 16)) {
              var h = f.deletions;
              if (null !== h) {
                for (var k = 0; k < h.length; k++) {
                  var l = h[k];
                  for (V = l; null !== V; ) {
                    var m = V;
                    switch (m.tag) {
                      case 0:
                      case 11:
                      case 15:
                        Pj(8, m, f);
                    }
                    var q = m.child;
                    if (null !== q) q.return = m, V = q;
                    else for (; null !== V; ) {
                      m = V;
                      var r = m.sibling, y = m.return;
                      Sj(m);
                      if (m === l) {
                        V = null;
                        break;
                      }
                      if (null !== r) {
                        r.return = y;
                        V = r;
                        break;
                      }
                      V = y;
                    }
                  }
                }
                var n = f.alternate;
                if (null !== n) {
                  var t = n.child;
                  if (null !== t) {
                    n.child = null;
                    do {
                      var J = t.sibling;
                      t.sibling = null;
                      t = J;
                    } while (null !== t);
                  }
                }
                V = f;
              }
            }
            if (0 !== (f.subtreeFlags & 2064) && null !== g) g.return = f, V = g;
            else b: for (; null !== V; ) {
              f = V;
              if (0 !== (f.flags & 2048)) switch (f.tag) {
                case 0:
                case 11:
                case 15:
                  Pj(9, f, f.return);
              }
              var x = f.sibling;
              if (null !== x) {
                x.return = f.return;
                V = x;
                break b;
              }
              V = f.return;
            }
          }
          var w = a.current;
          for (V = w; null !== V; ) {
            g = V;
            var u = g.child;
            if (0 !== (g.subtreeFlags & 2064) && null !== u) u.return = g, V = u;
            else b: for (g = w; null !== V; ) {
              h = V;
              if (0 !== (h.flags & 2048)) try {
                switch (h.tag) {
                  case 0:
                  case 11:
                  case 15:
                    Qj(9, h);
                }
              } catch (na) {
                W(h, h.return, na);
              }
              if (h === g) {
                V = null;
                break b;
              }
              var F = h.sibling;
              if (null !== F) {
                F.return = h.return;
                V = F;
                break b;
              }
              V = h.return;
            }
          }
          K = e;
          jg();
          if (lc && "function" === typeof lc.onPostCommitFiberRoot) try {
            lc.onPostCommitFiberRoot(kc, a);
          } catch (na) {
          }
          d = true;
        }
        return d;
      } finally {
        C = c, ok.transition = b;
      }
    }
    return false;
  }
  function Xk(a, b, c) {
    b = Ji(c, b);
    b = Ni(a, b, 1);
    a = nh(a, b, 1);
    b = R();
    null !== a && (Ac(a, 1, b), Dk(a, b));
  }
  function W(a, b, c) {
    if (3 === a.tag) Xk(a, a, c);
    else for (; null !== b; ) {
      if (3 === b.tag) {
        Xk(b, a, c);
        break;
      } else if (1 === b.tag) {
        var d = b.stateNode;
        if ("function" === typeof b.type.getDerivedStateFromError || "function" === typeof d.componentDidCatch && (null === Ri || !Ri.has(d))) {
          a = Ji(c, a);
          a = Qi(b, a, 1);
          b = nh(b, a, 1);
          a = R();
          null !== b && (Ac(b, 1, a), Dk(b, a));
          break;
        }
      }
      b = b.return;
    }
  }
  function Ti(a, b, c) {
    var d = a.pingCache;
    null !== d && d.delete(b);
    b = R();
    a.pingedLanes |= a.suspendedLanes & c;
    Q === a && (Z & c) === c && (4 === T || 3 === T && (Z & 130023424) === Z && 500 > B() - fk ? Kk(a, 0) : rk |= c);
    Dk(a, b);
  }
  function Yk(a, b) {
    0 === b && (0 === (a.mode & 1) ? b = 1 : (b = sc, sc <<= 1, 0 === (sc & 130023424) && (sc = 4194304)));
    var c = R();
    a = ih(a, b);
    null !== a && (Ac(a, b, c), Dk(a, c));
  }
  function uj(a) {
    var b = a.memoizedState, c = 0;
    null !== b && (c = b.retryLane);
    Yk(a, c);
  }
  function bk(a, b) {
    var c = 0;
    switch (a.tag) {
      case 13:
        var d = a.stateNode;
        var e = a.memoizedState;
        null !== e && (c = e.retryLane);
        break;
      case 19:
        d = a.stateNode;
        break;
      default:
        throw Error(p(314));
    }
    null !== d && d.delete(b);
    Yk(a, c);
  }
  var Vk;
  Vk = function(a, b, c) {
    if (null !== a) if (a.memoizedProps !== b.pendingProps || Wf.current) dh = true;
    else {
      if (0 === (a.lanes & c) && 0 === (b.flags & 128)) return dh = false, yj(a, b, c);
      dh = 0 !== (a.flags & 131072) ? true : false;
    }
    else dh = false, I && 0 !== (b.flags & 1048576) && ug(b, ng, b.index);
    b.lanes = 0;
    switch (b.tag) {
      case 2:
        var d = b.type;
        ij(a, b);
        a = b.pendingProps;
        var e = Yf(b, H.current);
        ch(b, c);
        e = Nh(null, b, d, a, e, c);
        var f = Sh();
        b.flags |= 1;
        "object" === typeof e && null !== e && "function" === typeof e.render && void 0 === e.$$typeof ? (b.tag = 1, b.memoizedState = null, b.updateQueue = null, Zf(d) ? (f = true, cg(b)) : f = false, b.memoizedState = null !== e.state && void 0 !== e.state ? e.state : null, kh(b), e.updater = Ei, b.stateNode = e, e._reactInternals = b, Ii(b, d, a, c), b = jj(null, b, d, true, f, c)) : (b.tag = 0, I && f && vg(b), Xi(null, b, e, c), b = b.child);
        return b;
      case 16:
        d = b.elementType;
        a: {
          ij(a, b);
          a = b.pendingProps;
          e = d._init;
          d = e(d._payload);
          b.type = d;
          e = b.tag = Zk(d);
          a = Ci(d, a);
          switch (e) {
            case 0:
              b = cj(null, b, d, a, c);
              break a;
            case 1:
              b = hj(null, b, d, a, c);
              break a;
            case 11:
              b = Yi(null, b, d, a, c);
              break a;
            case 14:
              b = $i(null, b, d, Ci(d.type, a), c);
              break a;
          }
          throw Error(p(
            306,
            d,
            ""
          ));
        }
        return b;
      case 0:
        return d = b.type, e = b.pendingProps, e = b.elementType === d ? e : Ci(d, e), cj(a, b, d, e, c);
      case 1:
        return d = b.type, e = b.pendingProps, e = b.elementType === d ? e : Ci(d, e), hj(a, b, d, e, c);
      case 3:
        a: {
          kj(b);
          if (null === a) throw Error(p(387));
          d = b.pendingProps;
          f = b.memoizedState;
          e = f.element;
          lh(a, b);
          qh(b, d, null, c);
          var g = b.memoizedState;
          d = g.element;
          if (f.isDehydrated) if (f = { element: d, isDehydrated: false, cache: g.cache, pendingSuspenseBoundaries: g.pendingSuspenseBoundaries, transitions: g.transitions }, b.updateQueue.baseState = f, b.memoizedState = f, b.flags & 256) {
            e = Ji(Error(p(423)), b);
            b = lj(a, b, d, c, e);
            break a;
          } else if (d !== e) {
            e = Ji(Error(p(424)), b);
            b = lj(a, b, d, c, e);
            break a;
          } else for (yg = Lf(b.stateNode.containerInfo.firstChild), xg = b, I = true, zg = null, c = Vg(b, null, d, c), b.child = c; c; ) c.flags = c.flags & -3 | 4096, c = c.sibling;
          else {
            Ig();
            if (d === e) {
              b = Zi(a, b, c);
              break a;
            }
            Xi(a, b, d, c);
          }
          b = b.child;
        }
        return b;
      case 5:
        return Ah(b), null === a && Eg(b), d = b.type, e = b.pendingProps, f = null !== a ? a.memoizedProps : null, g = e.children, Ef(d, e) ? g = null : null !== f && Ef(d, f) && (b.flags |= 32), gj(a, b), Xi(a, b, g, c), b.child;
      case 6:
        return null === a && Eg(b), null;
      case 13:
        return oj(a, b, c);
      case 4:
        return yh(b, b.stateNode.containerInfo), d = b.pendingProps, null === a ? b.child = Ug(b, null, d, c) : Xi(a, b, d, c), b.child;
      case 11:
        return d = b.type, e = b.pendingProps, e = b.elementType === d ? e : Ci(d, e), Yi(a, b, d, e, c);
      case 7:
        return Xi(a, b, b.pendingProps, c), b.child;
      case 8:
        return Xi(a, b, b.pendingProps.children, c), b.child;
      case 12:
        return Xi(a, b, b.pendingProps.children, c), b.child;
      case 10:
        a: {
          d = b.type._context;
          e = b.pendingProps;
          f = b.memoizedProps;
          g = e.value;
          G(Wg, d._currentValue);
          d._currentValue = g;
          if (null !== f) if (He(f.value, g)) {
            if (f.children === e.children && !Wf.current) {
              b = Zi(a, b, c);
              break a;
            }
          } else for (f = b.child, null !== f && (f.return = b); null !== f; ) {
            var h = f.dependencies;
            if (null !== h) {
              g = f.child;
              for (var k = h.firstContext; null !== k; ) {
                if (k.context === d) {
                  if (1 === f.tag) {
                    k = mh(-1, c & -c);
                    k.tag = 2;
                    var l = f.updateQueue;
                    if (null !== l) {
                      l = l.shared;
                      var m = l.pending;
                      null === m ? k.next = k : (k.next = m.next, m.next = k);
                      l.pending = k;
                    }
                  }
                  f.lanes |= c;
                  k = f.alternate;
                  null !== k && (k.lanes |= c);
                  bh(
                    f.return,
                    c,
                    b
                  );
                  h.lanes |= c;
                  break;
                }
                k = k.next;
              }
            } else if (10 === f.tag) g = f.type === b.type ? null : f.child;
            else if (18 === f.tag) {
              g = f.return;
              if (null === g) throw Error(p(341));
              g.lanes |= c;
              h = g.alternate;
              null !== h && (h.lanes |= c);
              bh(g, c, b);
              g = f.sibling;
            } else g = f.child;
            if (null !== g) g.return = f;
            else for (g = f; null !== g; ) {
              if (g === b) {
                g = null;
                break;
              }
              f = g.sibling;
              if (null !== f) {
                f.return = g.return;
                g = f;
                break;
              }
              g = g.return;
            }
            f = g;
          }
          Xi(a, b, e.children, c);
          b = b.child;
        }
        return b;
      case 9:
        return e = b.type, d = b.pendingProps.children, ch(b, c), e = eh(e), d = d(e), b.flags |= 1, Xi(a, b, d, c), b.child;
      case 14:
        return d = b.type, e = Ci(d, b.pendingProps), e = Ci(d.type, e), $i(a, b, d, e, c);
      case 15:
        return bj(a, b, b.type, b.pendingProps, c);
      case 17:
        return d = b.type, e = b.pendingProps, e = b.elementType === d ? e : Ci(d, e), ij(a, b), b.tag = 1, Zf(d) ? (a = true, cg(b)) : a = false, ch(b, c), Gi(b, d, e), Ii(b, d, e, c), jj(null, b, d, true, a, c);
      case 19:
        return xj(a, b, c);
      case 22:
        return dj(a, b, c);
    }
    throw Error(p(156, b.tag));
  };
  function Fk(a, b) {
    return ac(a, b);
  }
  function $k(a, b, c, d) {
    this.tag = a;
    this.key = c;
    this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null;
    this.index = 0;
    this.ref = null;
    this.pendingProps = b;
    this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null;
    this.mode = d;
    this.subtreeFlags = this.flags = 0;
    this.deletions = null;
    this.childLanes = this.lanes = 0;
    this.alternate = null;
  }
  function Bg(a, b, c, d) {
    return new $k(a, b, c, d);
  }
  function aj(a) {
    a = a.prototype;
    return !(!a || !a.isReactComponent);
  }
  function Zk(a) {
    if ("function" === typeof a) return aj(a) ? 1 : 0;
    if (void 0 !== a && null !== a) {
      a = a.$$typeof;
      if (a === Da) return 11;
      if (a === Ga) return 14;
    }
    return 2;
  }
  function Pg(a, b) {
    var c = a.alternate;
    null === c ? (c = Bg(a.tag, b, a.key, a.mode), c.elementType = a.elementType, c.type = a.type, c.stateNode = a.stateNode, c.alternate = a, a.alternate = c) : (c.pendingProps = b, c.type = a.type, c.flags = 0, c.subtreeFlags = 0, c.deletions = null);
    c.flags = a.flags & 14680064;
    c.childLanes = a.childLanes;
    c.lanes = a.lanes;
    c.child = a.child;
    c.memoizedProps = a.memoizedProps;
    c.memoizedState = a.memoizedState;
    c.updateQueue = a.updateQueue;
    b = a.dependencies;
    c.dependencies = null === b ? null : { lanes: b.lanes, firstContext: b.firstContext };
    c.sibling = a.sibling;
    c.index = a.index;
    c.ref = a.ref;
    return c;
  }
  function Rg(a, b, c, d, e, f) {
    var g = 2;
    d = a;
    if ("function" === typeof a) aj(a) && (g = 1);
    else if ("string" === typeof a) g = 5;
    else a: switch (a) {
      case ya:
        return Tg(c.children, e, f, b);
      case za:
        g = 8;
        e |= 8;
        break;
      case Aa:
        return a = Bg(12, c, b, e | 2), a.elementType = Aa, a.lanes = f, a;
      case Ea:
        return a = Bg(13, c, b, e), a.elementType = Ea, a.lanes = f, a;
      case Fa:
        return a = Bg(19, c, b, e), a.elementType = Fa, a.lanes = f, a;
      case Ia:
        return pj(c, e, f, b);
      default:
        if ("object" === typeof a && null !== a) switch (a.$$typeof) {
          case Ba:
            g = 10;
            break a;
          case Ca:
            g = 9;
            break a;
          case Da:
            g = 11;
            break a;
          case Ga:
            g = 14;
            break a;
          case Ha:
            g = 16;
            d = null;
            break a;
        }
        throw Error(p(130, null == a ? a : typeof a, ""));
    }
    b = Bg(g, c, b, e);
    b.elementType = a;
    b.type = d;
    b.lanes = f;
    return b;
  }
  function Tg(a, b, c, d) {
    a = Bg(7, a, d, b);
    a.lanes = c;
    return a;
  }
  function pj(a, b, c, d) {
    a = Bg(22, a, d, b);
    a.elementType = Ia;
    a.lanes = c;
    a.stateNode = { isHidden: false };
    return a;
  }
  function Qg(a, b, c) {
    a = Bg(6, a, null, b);
    a.lanes = c;
    return a;
  }
  function Sg(a, b, c) {
    b = Bg(4, null !== a.children ? a.children : [], a.key, b);
    b.lanes = c;
    b.stateNode = { containerInfo: a.containerInfo, pendingChildren: null, implementation: a.implementation };
    return b;
  }
  function al(a, b, c, d, e) {
    this.tag = b;
    this.containerInfo = a;
    this.finishedWork = this.pingCache = this.current = this.pendingChildren = null;
    this.timeoutHandle = -1;
    this.callbackNode = this.pendingContext = this.context = null;
    this.callbackPriority = 0;
    this.eventTimes = zc(0);
    this.expirationTimes = zc(-1);
    this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0;
    this.entanglements = zc(0);
    this.identifierPrefix = d;
    this.onRecoverableError = e;
    this.mutableSourceEagerHydrationData = null;
  }
  function bl(a, b, c, d, e, f, g, h, k) {
    a = new al(a, b, c, h, k);
    1 === b ? (b = 1, true === f && (b |= 8)) : b = 0;
    f = Bg(3, null, null, b);
    a.current = f;
    f.stateNode = a;
    f.memoizedState = { element: d, isDehydrated: c, cache: null, transitions: null, pendingSuspenseBoundaries: null };
    kh(f);
    return a;
  }
  function cl(a, b, c) {
    var d = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : null;
    return { $$typeof: wa, key: null == d ? null : "" + d, children: a, containerInfo: b, implementation: c };
  }
  function dl(a) {
    if (!a) return Vf;
    a = a._reactInternals;
    a: {
      if (Vb(a) !== a || 1 !== a.tag) throw Error(p(170));
      var b = a;
      do {
        switch (b.tag) {
          case 3:
            b = b.stateNode.context;
            break a;
          case 1:
            if (Zf(b.type)) {
              b = b.stateNode.__reactInternalMemoizedMergedChildContext;
              break a;
            }
        }
        b = b.return;
      } while (null !== b);
      throw Error(p(171));
    }
    if (1 === a.tag) {
      var c = a.type;
      if (Zf(c)) return bg(a, c, b);
    }
    return b;
  }
  function el(a, b, c, d, e, f, g, h, k) {
    a = bl(c, d, true, a, e, f, g, h, k);
    a.context = dl(null);
    c = a.current;
    d = R();
    e = yi(c);
    f = mh(d, e);
    f.callback = void 0 !== b && null !== b ? b : null;
    nh(c, f, e);
    a.current.lanes = e;
    Ac(a, e, d);
    Dk(a, d);
    return a;
  }
  function fl(a, b, c, d) {
    var e = b.current, f = R(), g = yi(e);
    c = dl(c);
    null === b.context ? b.context = c : b.pendingContext = c;
    b = mh(f, g);
    b.payload = { element: a };
    d = void 0 === d ? null : d;
    null !== d && (b.callback = d);
    a = nh(e, b, g);
    null !== a && (gi(a, e, g, f), oh(a, e, g));
    return g;
  }
  function gl(a) {
    a = a.current;
    if (!a.child) return null;
    switch (a.child.tag) {
      case 5:
        return a.child.stateNode;
      default:
        return a.child.stateNode;
    }
  }
  function hl(a, b) {
    a = a.memoizedState;
    if (null !== a && null !== a.dehydrated) {
      var c = a.retryLane;
      a.retryLane = 0 !== c && c < b ? c : b;
    }
  }
  function il(a, b) {
    hl(a, b);
    (a = a.alternate) && hl(a, b);
  }
  function jl() {
    return null;
  }
  var kl = "function" === typeof reportError ? reportError : function(a) {
    console.error(a);
  };
  function ll(a) {
    this._internalRoot = a;
  }
  ml.prototype.render = ll.prototype.render = function(a) {
    var b = this._internalRoot;
    if (null === b) throw Error(p(409));
    fl(a, b, null, null);
  };
  ml.prototype.unmount = ll.prototype.unmount = function() {
    var a = this._internalRoot;
    if (null !== a) {
      this._internalRoot = null;
      var b = a.containerInfo;
      Rk(function() {
        fl(null, a, null, null);
      });
      b[uf] = null;
    }
  };
  function ml(a) {
    this._internalRoot = a;
  }
  ml.prototype.unstable_scheduleHydration = function(a) {
    if (a) {
      var b = Hc();
      a = { blockedOn: null, target: a, priority: b };
      for (var c = 0; c < Qc.length && 0 !== b && b < Qc[c].priority; c++) ;
      Qc.splice(c, 0, a);
      0 === c && Vc(a);
    }
  };
  function nl(a) {
    return !(!a || 1 !== a.nodeType && 9 !== a.nodeType && 11 !== a.nodeType);
  }
  function ol(a) {
    return !(!a || 1 !== a.nodeType && 9 !== a.nodeType && 11 !== a.nodeType && (8 !== a.nodeType || " react-mount-point-unstable " !== a.nodeValue));
  }
  function pl() {
  }
  function ql(a, b, c, d, e) {
    if (e) {
      if ("function" === typeof d) {
        var f = d;
        d = function() {
          var a2 = gl(g);
          f.call(a2);
        };
      }
      var g = el(b, d, a, 0, null, false, false, "", pl);
      a._reactRootContainer = g;
      a[uf] = g.current;
      sf(8 === a.nodeType ? a.parentNode : a);
      Rk();
      return g;
    }
    for (; e = a.lastChild; ) a.removeChild(e);
    if ("function" === typeof d) {
      var h = d;
      d = function() {
        var a2 = gl(k);
        h.call(a2);
      };
    }
    var k = bl(a, 0, false, null, null, false, false, "", pl);
    a._reactRootContainer = k;
    a[uf] = k.current;
    sf(8 === a.nodeType ? a.parentNode : a);
    Rk(function() {
      fl(b, k, c, d);
    });
    return k;
  }
  function rl(a, b, c, d, e) {
    var f = c._reactRootContainer;
    if (f) {
      var g = f;
      if ("function" === typeof e) {
        var h = e;
        e = function() {
          var a2 = gl(g);
          h.call(a2);
        };
      }
      fl(b, g, a, e);
    } else g = ql(c, b, a, e, d);
    return gl(g);
  }
  Ec = function(a) {
    switch (a.tag) {
      case 3:
        var b = a.stateNode;
        if (b.current.memoizedState.isDehydrated) {
          var c = tc(b.pendingLanes);
          0 !== c && (Cc(b, c | 1), Dk(b, B()), 0 === (K & 6) && (Gj = B() + 500, jg()));
        }
        break;
      case 13:
        Rk(function() {
          var b2 = ih(a, 1);
          if (null !== b2) {
            var c2 = R();
            gi(b2, a, 1, c2);
          }
        }), il(a, 1);
    }
  };
  Fc = function(a) {
    if (13 === a.tag) {
      var b = ih(a, 134217728);
      if (null !== b) {
        var c = R();
        gi(b, a, 134217728, c);
      }
      il(a, 134217728);
    }
  };
  Gc = function(a) {
    if (13 === a.tag) {
      var b = yi(a), c = ih(a, b);
      if (null !== c) {
        var d = R();
        gi(c, a, b, d);
      }
      il(a, b);
    }
  };
  Hc = function() {
    return C;
  };
  Ic = function(a, b) {
    var c = C;
    try {
      return C = a, b();
    } finally {
      C = c;
    }
  };
  yb = function(a, b, c) {
    switch (b) {
      case "input":
        bb(a, c);
        b = c.name;
        if ("radio" === c.type && null != b) {
          for (c = a; c.parentNode; ) c = c.parentNode;
          c = c.querySelectorAll("input[name=" + JSON.stringify("" + b) + '][type="radio"]');
          for (b = 0; b < c.length; b++) {
            var d = c[b];
            if (d !== a && d.form === a.form) {
              var e = Db(d);
              if (!e) throw Error(p(90));
              Wa(d);
              bb(d, e);
            }
          }
        }
        break;
      case "textarea":
        ib(a, c);
        break;
      case "select":
        b = c.value, null != b && fb(a, !!c.multiple, b, false);
    }
  };
  Gb = Qk;
  Hb = Rk;
  var sl = { usingClientEntryPoint: false, Events: [Cb, ue, Db, Eb, Fb, Qk] }, tl = { findFiberByHostInstance: Wc, bundleType: 0, version: "18.3.1", rendererPackageName: "react-dom" };
  var ul = { bundleType: tl.bundleType, version: tl.version, rendererPackageName: tl.rendererPackageName, rendererConfig: tl.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: ua.ReactCurrentDispatcher, findHostInstanceByFiber: function(a) {
    a = Zb(a);
    return null === a ? null : a.stateNode;
  }, findFiberByHostInstance: tl.findFiberByHostInstance || jl, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.3.1-next-f1338f8080-20240426" };
  if ("undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__) {
    var vl = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!vl.isDisabled && vl.supportsFiber) try {
      kc = vl.inject(ul), lc = vl;
    } catch (a) {
    }
  }
  reactDom_production_min.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = sl;
  reactDom_production_min.createPortal = function(a, b) {
    var c = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : null;
    if (!nl(b)) throw Error(p(200));
    return cl(a, b, null, c);
  };
  reactDom_production_min.createRoot = function(a, b) {
    if (!nl(a)) throw Error(p(299));
    var c = false, d = "", e = kl;
    null !== b && void 0 !== b && (true === b.unstable_strictMode && (c = true), void 0 !== b.identifierPrefix && (d = b.identifierPrefix), void 0 !== b.onRecoverableError && (e = b.onRecoverableError));
    b = bl(a, 1, false, null, null, c, false, d, e);
    a[uf] = b.current;
    sf(8 === a.nodeType ? a.parentNode : a);
    return new ll(b);
  };
  reactDom_production_min.findDOMNode = function(a) {
    if (null == a) return null;
    if (1 === a.nodeType) return a;
    var b = a._reactInternals;
    if (void 0 === b) {
      if ("function" === typeof a.render) throw Error(p(188));
      a = Object.keys(a).join(",");
      throw Error(p(268, a));
    }
    a = Zb(b);
    a = null === a ? null : a.stateNode;
    return a;
  };
  reactDom_production_min.flushSync = function(a) {
    return Rk(a);
  };
  reactDom_production_min.hydrate = function(a, b, c) {
    if (!ol(b)) throw Error(p(200));
    return rl(null, a, b, true, c);
  };
  reactDom_production_min.hydrateRoot = function(a, b, c) {
    if (!nl(a)) throw Error(p(405));
    var d = null != c && c.hydratedSources || null, e = false, f = "", g = kl;
    null !== c && void 0 !== c && (true === c.unstable_strictMode && (e = true), void 0 !== c.identifierPrefix && (f = c.identifierPrefix), void 0 !== c.onRecoverableError && (g = c.onRecoverableError));
    b = el(b, null, a, 1, null != c ? c : null, e, false, f, g);
    a[uf] = b.current;
    sf(a);
    if (d) for (a = 0; a < d.length; a++) c = d[a], e = c._getVersion, e = e(c._source), null == b.mutableSourceEagerHydrationData ? b.mutableSourceEagerHydrationData = [c, e] : b.mutableSourceEagerHydrationData.push(
      c,
      e
    );
    return new ml(b);
  };
  reactDom_production_min.render = function(a, b, c) {
    if (!ol(b)) throw Error(p(200));
    return rl(null, a, b, false, c);
  };
  reactDom_production_min.unmountComponentAtNode = function(a) {
    if (!ol(a)) throw Error(p(40));
    return a._reactRootContainer ? (Rk(function() {
      rl(null, null, a, false, function() {
        a._reactRootContainer = null;
        a[uf] = null;
      });
    }), true) : false;
  };
  reactDom_production_min.unstable_batchedUpdates = Qk;
  reactDom_production_min.unstable_renderSubtreeIntoContainer = function(a, b, c, d) {
    if (!ol(c)) throw Error(p(200));
    if (null == a || void 0 === a._reactInternals) throw Error(p(38));
    return rl(a, b, c, false, d);
  };
  reactDom_production_min.version = "18.3.1-next-f1338f8080-20240426";
  return reactDom_production_min;
}
var hasRequiredReactDom;
function requireReactDom() {
  if (hasRequiredReactDom) return reactDom.exports;
  hasRequiredReactDom = 1;
  function checkDCE() {
    if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ === "undefined" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE !== "function") {
      return;
    }
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(checkDCE);
    } catch (err) {
      console.error(err);
    }
  }
  {
    checkDCE();
    reactDom.exports = requireReactDom_production_min();
  }
  return reactDom.exports;
}
var hasRequiredClient;
function requireClient() {
  if (hasRequiredClient) return client;
  hasRequiredClient = 1;
  var m = requireReactDom();
  {
    client.createRoot = m.createRoot;
    client.hydrateRoot = m.hydrateRoot;
  }
  return client;
}
var clientExports = requireClient();
const ReactDOM = /* @__PURE__ */ getDefaultExportFromCjs(clientExports);
/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const toKebabCase = (string) => string.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase();
const mergeClasses = (...classes) => classes.filter((className, index, array) => {
  return Boolean(className) && className.trim() !== "" && array.indexOf(className) === index;
}).join(" ").trim();
/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var defaultAttributes = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};
/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Icon = reactExports.forwardRef(
  ({
    color = "currentColor",
    size = 24,
    strokeWidth = 2,
    absoluteStrokeWidth,
    className = "",
    children,
    iconNode,
    ...rest
  }, ref) => {
    return reactExports.createElement(
      "svg",
      {
        ref,
        ...defaultAttributes,
        width: size,
        height: size,
        stroke: color,
        strokeWidth: absoluteStrokeWidth ? Number(strokeWidth) * 24 / Number(size) : strokeWidth,
        className: mergeClasses("lucide", className),
        ...rest
      },
      [
        ...iconNode.map(([tag, attrs]) => reactExports.createElement(tag, attrs)),
        ...Array.isArray(children) ? children : [children]
      ]
    );
  }
);
/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const createLucideIcon = (iconName, iconNode) => {
  const Component = reactExports.forwardRef(
    ({ className, ...props }, ref) => reactExports.createElement(Icon, {
      ref,
      iconNode,
      className: mergeClasses(`lucide-${toKebabCase(iconName)}`, className),
      ...props
    })
  );
  Component.displayName = `${iconName}`;
  return Component;
};
/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Camera = createLucideIcon("Camera", [
  [
    "path",
    {
      d: "M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z",
      key: "1tc9qg"
    }
  ],
  ["circle", { cx: "12", cy: "13", r: "3", key: "1vg3eu" }]
]);
/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ChevronLeft = createLucideIcon("ChevronLeft", [
  ["path", { d: "m15 18-6-6 6-6", key: "1wnfg3" }]
]);
/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ChevronRight = createLucideIcon("ChevronRight", [
  ["path", { d: "m9 18 6-6-6-6", key: "mthhwq" }]
]);
/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ellipsis = createLucideIcon("Ellipsis", [
  ["circle", { cx: "12", cy: "12", r: "1", key: "41hilf" }],
  ["circle", { cx: "19", cy: "12", r: "1", key: "1wjl8i" }],
  ["circle", { cx: "5", cy: "12", r: "1", key: "1pcz8c" }]
]);
/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ExternalLink = createLucideIcon("ExternalLink", [
  ["path", { d: "M15 3h6v6", key: "1q9fwt" }],
  ["path", { d: "M10 14 21 3", key: "gplh6r" }],
  ["path", { d: "M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6", key: "a6xqqp" }]
]);
/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Globe = createLucideIcon("Globe", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20", key: "13o1zl" }],
  ["path", { d: "M2 12h20", key: "9i4pu4" }]
]);
/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const MessageCircle = createLucideIcon("MessageCircle", [
  ["path", { d: "M7.9 20A9 9 0 1 0 4 16.1L2 22Z", key: "vv11sd" }]
]);
/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Shield = createLucideIcon("Shield", [
  [
    "path",
    {
      d: "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",
      key: "oel41y"
    }
  ]
]);
/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Star = createLucideIcon("Star", [
  [
    "path",
    {
      d: "M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z",
      key: "r04s7s"
    }
  ]
]);
const MODULE_CAROUSEL = "carousel";
const MODULE_CONTROLLER = "controller";
const MODULE_NAVIGATION = "navigation";
const MODULE_NO_SCROLL = "no-scroll";
const MODULE_PORTAL = "portal";
const MODULE_ROOT = "root";
const MODULE_TOOLBAR = "toolbar";
const SLIDE_STATUS_LOADING = "loading";
const SLIDE_STATUS_ERROR = "error";
const SLIDE_STATUS_COMPLETE = "complete";
const SLIDE_STATUS_PLACEHOLDER = "placeholder";
const activeSlideStatus = (status) => `active-slide-${status}`;
const CLASS_FLEX_CENTER = "flex_center";
const CLASS_NO_SCROLL = "no_scroll";
const CLASS_NO_SCROLL_PADDING = "no_scroll_padding";
const CLASS_SLIDE = "slide";
const CLASS_SLIDE_WRAPPER = "slide_wrapper";
const ACTION_PREV = "prev";
const ACTION_NEXT = "next";
const ACTION_SWIPE = "swipe";
const ACTION_CLOSE = "close";
const EVENT_ON_POINTER_DOWN = "onPointerDown";
const EVENT_ON_POINTER_MOVE = "onPointerMove";
const EVENT_ON_POINTER_UP = "onPointerUp";
const EVENT_ON_POINTER_LEAVE = "onPointerLeave";
const EVENT_ON_POINTER_CANCEL = "onPointerCancel";
const EVENT_ON_KEY_DOWN = "onKeyDown";
const EVENT_ON_KEY_UP = "onKeyUp";
const EVENT_ON_WHEEL = "onWheel";
const VK_ESCAPE = "Escape";
const VK_ARROW_LEFT = "ArrowLeft";
const VK_ARROW_RIGHT = "ArrowRight";
const ELEMENT_BUTTON = "button";
const ELEMENT_ICON = "icon";
const IMAGE_FIT_CONTAIN = "contain";
const IMAGE_FIT_COVER = "cover";
const UNKNOWN_ACTION_TYPE = "Unknown action type";
var reactDomExports = requireReactDom();
const cssPrefix$3 = "yarl__";
function clsx(...classes) {
  return [...classes].filter(Boolean).join(" ");
}
function cssClass(name) {
  return `${cssPrefix$3}${name}`;
}
function cssVar(name) {
  return `--${cssPrefix$3}${name}`;
}
function composePrefix(base, prefix) {
  return `${base}${prefix ? `_${prefix}` : ""}`;
}
function makeComposePrefix(base) {
  return (prefix) => composePrefix(base, prefix);
}
function translateLabel(labels, defaultLabel) {
  var _a;
  return (_a = labels === null || labels === void 0 ? void 0 : labels[defaultLabel]) !== null && _a !== void 0 ? _a : defaultLabel;
}
function translateSlideCounter(labels, slides, index) {
  return translateLabel(labels, "{index} of {total}").replace(/\{index}/g, `${getSlideIndex(index, slides.length) + 1}`).replace(/\{total}/g, `${slides.length}`);
}
function cleanup(...cleaners) {
  return () => {
    cleaners.forEach((cleaner) => {
      cleaner();
    });
  };
}
function makeUseContext(name, contextName, context) {
  return () => {
    const ctx = reactExports.useContext(context);
    if (!ctx) {
      throw new Error(`${name} must be used within a ${contextName}.Provider`);
    }
    return ctx;
  };
}
function hasWindow() {
  return typeof window !== "undefined";
}
function round(value, decimals = 0) {
  const factor = 10 ** decimals;
  return Math.round((value + Number.EPSILON) * factor) / factor;
}
function isImageSlide(slide) {
  return slide.type === void 0 || slide.type === "image";
}
function isImageFitCover(image, imageFit) {
  return image.imageFit === IMAGE_FIT_COVER || image.imageFit !== IMAGE_FIT_CONTAIN && imageFit === IMAGE_FIT_COVER;
}
function parseInt$1(value) {
  return typeof value === "string" ? Number.parseInt(value, 10) : value;
}
function parseLengthPercentage(input) {
  if (typeof input === "number") {
    return { pixel: input };
  }
  if (typeof input === "string") {
    const value = parseInt$1(input);
    return input.endsWith("%") ? { percent: value } : { pixel: value };
  }
  return { pixel: 0 };
}
function computeSlideRect(containerRect, padding) {
  const paddingValue = parseLengthPercentage(padding);
  const paddingPixels = paddingValue.percent !== void 0 ? containerRect.width / 100 * paddingValue.percent : paddingValue.pixel;
  return {
    width: Math.max(containerRect.width - 2 * paddingPixels, 0),
    height: Math.max(containerRect.height - 2 * paddingPixels, 0)
  };
}
function getSlideIndex(index, slidesCount) {
  return slidesCount > 0 ? (index % slidesCount + slidesCount) % slidesCount : 0;
}
function hasSlides(slides) {
  return slides.length > 0;
}
function getSlide(slides, index) {
  return slides[getSlideIndex(index, slides.length)];
}
function getSlideIfPresent(slides, index) {
  return hasSlides(slides) ? getSlide(slides, index) : void 0;
}
function getSlideKey(slide) {
  return isImageSlide(slide) ? slide.src : void 0;
}
function calculatePreload(carousel, slides, minimum = 0) {
  return Math.min(carousel.preload, Math.max(carousel.finite ? slides.length - 1 : Math.floor(slides.length / 2), minimum));
}
const isReact19 = Number(reactExports.version.split(".")[0]) >= 19;
function makeInertWhen(condition) {
  const legacyValue = condition ? "" : void 0;
  return { inert: isReact19 ? condition : legacyValue };
}
function reflow(node) {
  node.scrollTop;
}
const LightboxDefaultProps = {
  open: false,
  close: () => {
  },
  index: 0,
  slides: [],
  render: {},
  plugins: [],
  toolbar: { buttons: [ACTION_CLOSE] },
  labels: {},
  animation: {
    fade: 250,
    swipe: 500,
    easing: {
      fade: "ease",
      swipe: "ease-out",
      navigation: "ease-in-out"
    }
  },
  carousel: {
    finite: false,
    preload: 2,
    padding: "16px",
    spacing: "30%",
    imageFit: IMAGE_FIT_CONTAIN,
    imageProps: {}
  },
  controller: {
    ref: null,
    focus: true,
    aria: false,
    touchAction: "none",
    closeOnPullUp: false,
    closeOnPullDown: false,
    closeOnBackdropClick: false,
    preventDefaultWheelX: true,
    preventDefaultWheelY: false,
    disableSwipeNavigation: false
  },
  portal: {},
  noScroll: {
    disabled: false
  },
  on: {},
  styles: {},
  className: ""
};
function createModule(name, component) {
  return { name, component };
}
function createNode(module, children) {
  return { module, children };
}
function traverseNode(node, target, apply) {
  if (node.module.name === target) {
    return apply(node);
  }
  if (node.children) {
    return [
      createNode(node.module, node.children.flatMap((n) => {
        var _a;
        return (_a = traverseNode(n, target, apply)) !== null && _a !== void 0 ? _a : [];
      }))
    ];
  }
  return [node];
}
function traverse(nodes, target, apply) {
  return nodes.flatMap((node) => {
    var _a;
    return (_a = traverseNode(node, target, apply)) !== null && _a !== void 0 ? _a : [];
  });
}
function withPlugins(root, plugins = [], augmentations = []) {
  let config = root;
  const contains = (target) => {
    const nodes = [...config];
    while (nodes.length > 0) {
      const node = nodes.pop();
      if ((node === null || node === void 0 ? void 0 : node.module.name) === target)
        return true;
      if (node === null || node === void 0 ? void 0 : node.children)
        nodes.push(...node.children);
    }
    return false;
  };
  const addParent = (target, module) => {
    if (target === "") {
      config = [createNode(module, config)];
      return;
    }
    config = traverse(config, target, (node) => [createNode(module, [node])]);
  };
  const append = (target, module) => {
    config = traverse(config, target, (node) => [createNode(node.module, [createNode(module, node.children)])]);
  };
  const addChild = (target, module, precede) => {
    config = traverse(config, target, (node) => {
      var _a;
      return [
        createNode(node.module, [
          ...precede ? [createNode(module)] : [],
          ...(_a = node.children) !== null && _a !== void 0 ? _a : [],
          ...!precede ? [createNode(module)] : []
        ])
      ];
    });
  };
  const addSibling = (target, module, precede) => {
    config = traverse(config, target, (node) => [
      ...precede ? [createNode(module)] : [],
      node,
      ...!precede ? [createNode(module)] : []
    ]);
  };
  const addModule = (module) => {
    append(MODULE_CONTROLLER, module);
  };
  const replace = (target, module) => {
    config = traverse(config, target, (node) => [createNode(module, node.children)]);
  };
  const remove = (target) => {
    config = traverse(config, target, (node) => node.children);
  };
  const augment = (augmentation) => {
    augmentations.push(augmentation);
  };
  plugins.forEach((plugin) => {
    plugin({
      contains,
      addParent,
      append,
      addChild,
      addSibling,
      addModule,
      replace,
      remove,
      augment
    });
  });
  return {
    config,
    augmentation: (props) => augmentations.reduce((acc, augmentation) => augmentation(acc), props)
  };
}
const A11yContext = reactExports.createContext(null);
const useA11yContext = makeUseContext("useA11yContext", "A11yContext", A11yContext);
function A11yContextProvider({ children }) {
  const [focusWithin, setFocusWithin] = reactExports.useState(false);
  const [autoPlaying, setAutoPlaying] = reactExports.useState(false);
  const context = reactExports.useMemo(() => {
    const trackFocusWithin = (onFocus, onBlur) => {
      const trackAndDelegate = (focusWithinValue) => (event) => {
        var _a;
        if (!event.currentTarget.contains(event.relatedTarget)) {
          setFocusWithin(focusWithinValue);
        }
        (_a = focusWithinValue ? onFocus : onBlur) === null || _a === void 0 ? void 0 : _a(event);
      };
      return {
        onFocus: trackAndDelegate(true),
        onBlur: trackAndDelegate(false)
      };
    };
    return { focusWithin, trackFocusWithin, autoPlaying, setAutoPlaying };
  }, [focusWithin, autoPlaying]);
  return reactExports.createElement(A11yContext.Provider, { value: context }, children);
}
const DocumentContext = reactExports.createContext(null);
const useDocumentContext = makeUseContext("useDocument", "DocumentContext", DocumentContext);
function DocumentContextProvider({ nodeRef, children }) {
  const context = reactExports.useMemo(() => {
    const getOwnerDocument = (node) => {
      var _a;
      return ((_a = node || nodeRef.current) === null || _a === void 0 ? void 0 : _a.ownerDocument) || document;
    };
    const getOwnerWindow = (node) => {
      var _a;
      return ((_a = getOwnerDocument(node)) === null || _a === void 0 ? void 0 : _a.defaultView) || window;
    };
    return { getOwnerDocument, getOwnerWindow };
  }, [nodeRef]);
  return reactExports.createElement(DocumentContext.Provider, { value: context }, children);
}
const EventsContext = reactExports.createContext(null);
const useEvents = makeUseContext("useEvents", "EventsContext", EventsContext);
function EventsProvider({ children }) {
  const [subscriptions] = reactExports.useState({});
  reactExports.useEffect(() => () => {
    Object.keys(subscriptions).forEach((topic) => delete subscriptions[topic]);
  }, [subscriptions]);
  const context = reactExports.useMemo(() => {
    const unsubscribe = (topic, callback) => {
      var _a;
      (_a = subscriptions[topic]) === null || _a === void 0 ? void 0 : _a.splice(0, subscriptions[topic].length, ...subscriptions[topic].filter((cb) => cb !== callback));
    };
    const subscribe = (topic, callback) => {
      if (!subscriptions[topic]) {
        subscriptions[topic] = [];
      }
      subscriptions[topic].push(callback);
      return () => unsubscribe(topic, callback);
    };
    const publish = (...[topic, event]) => {
      var _a;
      (_a = subscriptions[topic]) === null || _a === void 0 ? void 0 : _a.forEach((callback) => callback(event));
    };
    return { publish, subscribe, unsubscribe };
  }, [subscriptions]);
  return reactExports.createElement(EventsContext.Provider, { value: context }, children);
}
const LightboxPropsContext = reactExports.createContext(null);
const useLightboxProps = makeUseContext("useLightboxProps", "LightboxPropsContext", LightboxPropsContext);
function LightboxPropsProvider({ children, ...props }) {
  return reactExports.createElement(LightboxPropsContext.Provider, { value: props }, children);
}
const LightboxStateContext = reactExports.createContext(null);
const useLightboxState = makeUseContext("useLightboxState", "LightboxStateContext", LightboxStateContext);
const LightboxDispatchContext = reactExports.createContext(null);
const useLightboxDispatch = makeUseContext("useLightboxDispatch", "LightboxDispatchContext", LightboxDispatchContext);
function reducer(state, action) {
  switch (action.type) {
    case "swipe": {
      const { slides } = state;
      const increment = (action === null || action === void 0 ? void 0 : action.increment) || 0;
      const globalIndex = state.globalIndex + increment;
      const currentIndex = getSlideIndex(globalIndex, slides.length);
      const currentSlide = getSlideIfPresent(slides, currentIndex);
      const animation = increment || action.duration !== void 0 ? {
        increment,
        duration: action.duration,
        easing: action.easing
      } : void 0;
      return { slides, currentIndex, globalIndex, currentSlide, animation };
    }
    case "update":
      if (action.slides !== state.slides || action.index !== state.currentIndex) {
        return {
          slides: action.slides,
          currentIndex: action.index,
          globalIndex: action.index,
          currentSlide: getSlideIfPresent(action.slides, action.index)
        };
      }
      return state;
    default:
      throw new Error(UNKNOWN_ACTION_TYPE);
  }
}
function LightboxStateProvider({ slides, index, children }) {
  const [state, dispatch] = reactExports.useReducer(reducer, {
    slides,
    currentIndex: index,
    globalIndex: index,
    currentSlide: getSlideIfPresent(slides, index)
  });
  reactExports.useEffect(() => {
    dispatch({ type: "update", slides, index });
  }, [slides, index]);
  const context = reactExports.useMemo(() => ({ ...state, state, dispatch }), [state, dispatch]);
  return reactExports.createElement(
    LightboxDispatchContext.Provider,
    { value: dispatch },
    reactExports.createElement(LightboxStateContext.Provider, { value: context }, children)
  );
}
const TimeoutsContext = reactExports.createContext(null);
const useTimeouts = makeUseContext("useTimeouts", "TimeoutsContext", TimeoutsContext);
function TimeoutsProvider({ children }) {
  const [timeouts] = reactExports.useState([]);
  reactExports.useEffect(() => () => {
    timeouts.forEach((tid) => window.clearTimeout(tid));
    timeouts.splice(0, timeouts.length);
  }, [timeouts]);
  const context = reactExports.useMemo(() => {
    const removeTimeout = (id) => {
      timeouts.splice(0, timeouts.length, ...timeouts.filter((tid) => tid !== id));
    };
    const setTimeout2 = (fn, delay) => {
      const id = window.setTimeout(() => {
        removeTimeout(id);
        fn();
      }, delay);
      timeouts.push(id);
      return id;
    };
    const clearTimeout2 = (id) => {
      if (id !== void 0) {
        removeTimeout(id);
        window.clearTimeout(id);
      }
    };
    return { setTimeout: setTimeout2, clearTimeout: clearTimeout2 };
  }, [timeouts]);
  return reactExports.createElement(TimeoutsContext.Provider, { value: context }, children);
}
const IconButton = reactExports.forwardRef(function IconButton2({ label, className, icon: Icon2, renderIcon, onClick, style, ...rest }, ref) {
  const { styles, labels } = useLightboxProps();
  const buttonLabel = translateLabel(labels, label);
  return reactExports.createElement("button", { ref, type: "button", title: buttonLabel, "aria-label": buttonLabel, className: clsx(cssClass(ELEMENT_BUTTON), className), onClick, style: { ...style, ...styles.button }, ...rest }, renderIcon ? renderIcon() : reactExports.createElement(Icon2, { className: cssClass(ELEMENT_ICON), style: styles.icon }));
});
function svgIcon(name, children) {
  const icon = (props) => reactExports.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", width: "24", height: "24", "aria-hidden": "true", focusable: "false", ...props }, children);
  icon.displayName = name;
  return icon;
}
function createIcon(name, glyph) {
  return svgIcon(name, reactExports.createElement(
    "g",
    { fill: "currentColor" },
    reactExports.createElement("path", { d: "M0 0h24v24H0z", fill: "none" }),
    glyph
  ));
}
const CloseIcon = createIcon("Close", reactExports.createElement("path", { d: "M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" }));
const PreviousIcon = createIcon("Previous", reactExports.createElement("path", { d: "M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z" }));
const NextIcon = createIcon("Next", reactExports.createElement("path", { d: "M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" }));
const LoadingIcon = createIcon("Loading", reactExports.createElement(reactExports.Fragment, null, Array.from({ length: 8 }).map((_, index, array) => reactExports.createElement("line", { key: index, x1: "12", y1: "6.5", x2: "12", y2: "1.8", strokeLinecap: "round", strokeWidth: "2.6", stroke: "currentColor", strokeOpacity: 1 / array.length * (index + 1), transform: `rotate(${360 / array.length * index}, 12, 12)` }))));
const ErrorIcon = createIcon("Error", reactExports.createElement("path", { d: "M21.9,21.9l-8.49-8.49l0,0L3.59,3.59l0,0L2.1,2.1L0.69,3.51L3,5.83V19c0,1.1,0.9,2,2,2h13.17l2.31,2.31L21.9,21.9z M5,18 l3.5-4.5l2.5,3.01L12.17,15l3,3H5z M21,18.17L5.83,3H19c1.1,0,2,0.9,2,2V18.17z" }));
const useLayoutEffect = hasWindow() ? reactExports.useLayoutEffect : reactExports.useEffect;
function useMotionPreference() {
  const [reduceMotion, setReduceMotion] = reactExports.useState(false);
  reactExports.useEffect(() => {
    var _a, _b;
    const mediaQuery = (_a = window.matchMedia) === null || _a === void 0 ? void 0 : _a.call(window, "(prefers-reduced-motion: reduce)");
    setReduceMotion(mediaQuery === null || mediaQuery === void 0 ? void 0 : mediaQuery.matches);
    const listener = (event) => setReduceMotion(event.matches);
    (_b = mediaQuery === null || mediaQuery === void 0 ? void 0 : mediaQuery.addEventListener) === null || _b === void 0 ? void 0 : _b.call(mediaQuery, "change", listener);
    return () => {
      var _a2;
      return (_a2 = mediaQuery === null || mediaQuery === void 0 ? void 0 : mediaQuery.removeEventListener) === null || _a2 === void 0 ? void 0 : _a2.call(mediaQuery, "change", listener);
    };
  }, []);
  return reduceMotion;
}
function currentTransformation(node) {
  let x = 0;
  let y = 0;
  let z = 0;
  const matrix = window.getComputedStyle(node).transform;
  const matcher = matrix.match(/matrix.*\((.+)\)/);
  if (matcher) {
    const values = matcher[1].split(",").map(parseInt$1);
    if (values.length === 6) {
      x = values[4];
      y = values[5];
    } else if (values.length === 16) {
      x = values[12];
      y = values[13];
      z = values[14];
    }
  }
  return { x, y, z };
}
function useAnimation(nodeRef, computeAnimation) {
  const snapshot = reactExports.useRef(void 0);
  const animation = reactExports.useRef(void 0);
  const reduceMotion = useMotionPreference();
  useLayoutEffect(() => {
    var _a, _b, _c;
    if (nodeRef.current && snapshot.current !== void 0 && !reduceMotion) {
      const { keyframes, duration, easing, onfinish } = computeAnimation(snapshot.current, nodeRef.current.getBoundingClientRect(), currentTransformation(nodeRef.current)) || {};
      if (keyframes && duration) {
        (_a = animation.current) === null || _a === void 0 ? void 0 : _a.cancel();
        animation.current = void 0;
        try {
          animation.current = (_c = (_b = nodeRef.current).animate) === null || _c === void 0 ? void 0 : _c.call(_b, keyframes, { duration, easing });
        } catch (err) {
          console.error(err);
        }
        if (animation.current) {
          animation.current.onfinish = () => {
            animation.current = void 0;
            onfinish === null || onfinish === void 0 ? void 0 : onfinish();
          };
        }
      }
    }
    snapshot.current = void 0;
  });
  return {
    prepareAnimation: (currentSnapshot) => {
      snapshot.current = currentSnapshot;
    },
    isAnimationPlaying: () => {
      var _a;
      return ((_a = animation.current) === null || _a === void 0 ? void 0 : _a.playState) === "running";
    }
  };
}
function useContainerRect() {
  const containerRef = reactExports.useRef(null);
  const observerRef = reactExports.useRef(void 0);
  const [containerRect, setContainerRect] = reactExports.useState();
  const setContainerRef = reactExports.useCallback((node) => {
    containerRef.current = node;
    if (observerRef.current) {
      observerRef.current.disconnect();
      observerRef.current = void 0;
    }
    const updateContainerRect = () => {
      if (node) {
        const styles = window.getComputedStyle(node);
        const parse = (value) => parseFloat(value) || 0;
        setContainerRect({
          width: Math.round(node.clientWidth - parse(styles.paddingLeft) - parse(styles.paddingRight)),
          height: Math.round(node.clientHeight - parse(styles.paddingTop) - parse(styles.paddingBottom))
        });
      } else {
        setContainerRect(void 0);
      }
    };
    updateContainerRect();
    if (node && typeof ResizeObserver !== "undefined") {
      observerRef.current = new ResizeObserver(updateContainerRect);
      observerRef.current.observe(node);
    }
  }, []);
  return { setContainerRef, containerRef, containerRect };
}
function useDelay() {
  const timeoutId = reactExports.useRef(void 0);
  const { setTimeout: setTimeout2, clearTimeout: clearTimeout2 } = useTimeouts();
  return reactExports.useCallback((callback, delay) => {
    clearTimeout2(timeoutId.current);
    timeoutId.current = setTimeout2(callback, delay > 0 ? delay : 0);
  }, [setTimeout2, clearTimeout2]);
}
function useEventCallback(fn) {
  const ref = reactExports.useRef(fn);
  useLayoutEffect(() => {
    ref.current = fn;
  });
  return reactExports.useCallback((...args) => {
    var _a;
    return (_a = ref.current) === null || _a === void 0 ? void 0 : _a.call(ref, ...args);
  }, []);
}
function setRef(ref, value) {
  if (typeof ref === "function") {
    ref(value);
  } else if (ref) {
    ref.current = value;
  }
}
function useForkRef(refA, refB) {
  return reactExports.useMemo(() => refA == null && refB == null ? null : (refValue) => {
    setRef(refA, refValue);
    setRef(refB, refValue);
  }, [refA, refB]);
}
function useLoseFocus(focus, disabled = false) {
  const focused = reactExports.useRef(false);
  useLayoutEffect(() => {
    if (disabled && focused.current) {
      focused.current = false;
      focus();
    }
  }, [disabled, focus]);
  const onFocus = reactExports.useCallback(() => {
    focused.current = true;
  }, []);
  const onBlur = reactExports.useCallback(() => {
    focused.current = false;
  }, []);
  return { onFocus, onBlur };
}
function useRTL() {
  const [isRTL, setIsRTL] = reactExports.useState(false);
  useLayoutEffect(() => {
    setIsRTL(window.getComputedStyle(window.document.documentElement).direction === "rtl");
  }, []);
  return isRTL;
}
function useSensors() {
  const [subscribers] = reactExports.useState({});
  const notifySubscribers = reactExports.useCallback((type, event) => {
    var _a;
    (_a = subscribers[type]) === null || _a === void 0 ? void 0 : _a.forEach((listener) => {
      if (!event.isPropagationStopped())
        listener(event);
    });
  }, [subscribers]);
  const registerSensors = reactExports.useMemo(() => ({
    onPointerDown: (event) => notifySubscribers(EVENT_ON_POINTER_DOWN, event),
    onPointerMove: (event) => notifySubscribers(EVENT_ON_POINTER_MOVE, event),
    onPointerUp: (event) => notifySubscribers(EVENT_ON_POINTER_UP, event),
    onPointerLeave: (event) => notifySubscribers(EVENT_ON_POINTER_LEAVE, event),
    onPointerCancel: (event) => notifySubscribers(EVENT_ON_POINTER_CANCEL, event),
    onKeyDown: (event) => notifySubscribers(EVENT_ON_KEY_DOWN, event),
    onKeyUp: (event) => notifySubscribers(EVENT_ON_KEY_UP, event),
    onWheel: (event) => notifySubscribers(EVENT_ON_WHEEL, event)
  }), [notifySubscribers]);
  const subscribeSensors = reactExports.useCallback((type, callback) => {
    if (!subscribers[type]) {
      subscribers[type] = [];
    }
    subscribers[type].unshift(callback);
    return () => {
      const listeners = subscribers[type];
      if (listeners) {
        listeners.splice(0, listeners.length, ...listeners.filter((el) => el !== callback));
      }
    };
  }, [subscribers]);
  return { registerSensors, subscribeSensors };
}
function useThrottle(callback, delay) {
  const lastCallbackTime = reactExports.useRef(0);
  const delayCallback = useDelay();
  const executeCallback = useEventCallback((...args) => {
    lastCallbackTime.current = Date.now();
    callback(args);
  });
  return reactExports.useCallback((...args) => {
    delayCallback(() => {
      executeCallback(args);
    }, delay - (Date.now() - lastCallbackTime.current));
  }, [delay, executeCallback, delayCallback]);
}
const slidePrefix = makeComposePrefix("slide");
const slideImagePrefix = makeComposePrefix("slide_image");
function ImageSlide({ slide: image, offset, render, rect, imageFit, imageProps, onClick, onLoad, onError, style }) {
  var _a, _b, _c, _d, _e, _f, _g, _h;
  const [status, setStatus] = reactExports.useState(SLIDE_STATUS_LOADING);
  const { publish } = useEvents();
  const { setTimeout: setTimeout2 } = useTimeouts();
  const imageRef = reactExports.useRef(null);
  reactExports.useEffect(() => {
    if (offset === 0) {
      publish(activeSlideStatus(status));
    }
  }, [offset, status, publish]);
  const handleLoading = useEventCallback((img) => {
    ("decode" in img ? img.decode() : Promise.resolve()).catch(() => {
    }).then(() => {
      if (!img.parentNode) {
        return;
      }
      setStatus(SLIDE_STATUS_COMPLETE);
      setTimeout2(() => {
        onLoad === null || onLoad === void 0 ? void 0 : onLoad(img);
      }, 0);
    });
  });
  const setImageRef = reactExports.useCallback((img) => {
    imageRef.current = img;
    if (img === null || img === void 0 ? void 0 : img.complete) {
      handleLoading(img);
    }
  }, [handleLoading]);
  const handleOnLoad = reactExports.useCallback((event) => {
    handleLoading(event.currentTarget);
  }, [handleLoading]);
  const handleOnError = useEventCallback(() => {
    setStatus(SLIDE_STATUS_ERROR);
    onError === null || onError === void 0 ? void 0 : onError();
  });
  const cover = isImageFitCover(image, imageFit);
  const nonInfinite = (value, fallback) => Number.isFinite(value) ? value : fallback;
  const maxWidth = nonInfinite(Math.max(...((_b = (_a = image.srcSet) === null || _a === void 0 ? void 0 : _a.map((x) => x.width)) !== null && _b !== void 0 ? _b : []).concat(image.width ? [image.width] : []).filter(Boolean)), ((_c = imageRef.current) === null || _c === void 0 ? void 0 : _c.naturalWidth) || 0);
  const maxHeight = nonInfinite(Math.max(...((_e = (_d = image.srcSet) === null || _d === void 0 ? void 0 : _d.map((x) => x.height)) !== null && _e !== void 0 ? _e : []).concat(image.height ? [image.height] : []).filter(Boolean)), ((_f = imageRef.current) === null || _f === void 0 ? void 0 : _f.naturalHeight) || 0);
  const defaultStyle = maxWidth && maxHeight ? {
    maxWidth: `min(${maxWidth}px, 100%)`,
    maxHeight: `min(${maxHeight}px, 100%)`
  } : {
    maxWidth: "100%",
    maxHeight: "100%"
  };
  const srcSet = (_g = image.srcSet) === null || _g === void 0 ? void 0 : _g.sort((a, b) => a.width - b.width).map((item) => `${item.src} ${item.width}w`).join(", ");
  const estimateActualWidth = () => rect && !cover && image.width && image.height ? rect.height / image.height * image.width : Number.MAX_VALUE;
  const sizes = srcSet && rect && hasWindow() ? `${Math.round(Math.min(estimateActualWidth(), rect.width))}px` : void 0;
  const { style: imagePropsStyle, className: imagePropsClassName, ...restImageProps } = imageProps || {};
  return reactExports.createElement(
    reactExports.Fragment,
    null,
    reactExports.createElement("img", { ref: setImageRef, onLoad: handleOnLoad, onError: handleOnError, onClick, draggable: false, className: clsx(cssClass(slideImagePrefix()), cover && cssClass(slideImagePrefix("cover")), status !== SLIDE_STATUS_COMPLETE && cssClass(slideImagePrefix("loading")), imagePropsClassName), style: { ...defaultStyle, ...style, ...imagePropsStyle }, ...restImageProps, alt: (_h = image.alt) !== null && _h !== void 0 ? _h : "", sizes, srcSet, src: image.src }),
    status !== SLIDE_STATUS_COMPLETE && reactExports.createElement(
      "div",
      { className: cssClass(slidePrefix(SLIDE_STATUS_PLACEHOLDER)) },
      status === SLIDE_STATUS_LOADING && ((render === null || render === void 0 ? void 0 : render.iconLoading) ? render.iconLoading() : reactExports.createElement(LoadingIcon, { className: clsx(cssClass(ELEMENT_ICON), cssClass(slidePrefix(SLIDE_STATUS_LOADING))) })),
      status === SLIDE_STATUS_ERROR && ((render === null || render === void 0 ? void 0 : render.iconError) ? render.iconError() : reactExports.createElement(ErrorIcon, { className: clsx(cssClass(ELEMENT_ICON), cssClass(slidePrefix(SLIDE_STATUS_ERROR))) }))
    )
  );
}
const LightboxRoot = reactExports.forwardRef(function LightboxRoot2({ className, children, onFocus, onBlur, ...rest }, ref) {
  const nodeRef = reactExports.useRef(null);
  const { trackFocusWithin } = useA11yContext();
  return reactExports.createElement(
    DocumentContextProvider,
    { nodeRef },
    reactExports.createElement("div", { ref: useForkRef(ref, nodeRef), className: clsx(cssClass("root"), className), ...trackFocusWithin(onFocus, onBlur), ...rest }, children)
  );
});
var SwipeState;
(function(SwipeState2) {
  SwipeState2[SwipeState2["NONE"] = 0] = "NONE";
  SwipeState2[SwipeState2["SWIPE"] = 1] = "SWIPE";
  SwipeState2[SwipeState2["PULL"] = 2] = "PULL";
  SwipeState2[SwipeState2["ANIMATION"] = 3] = "ANIMATION";
})(SwipeState || (SwipeState = {}));
function usePointerEvents(subscribeSensors, onPointerDown, onPointerMove, onPointerUp, disabled) {
  reactExports.useEffect(
    () => cleanup(subscribeSensors(EVENT_ON_POINTER_DOWN, onPointerDown), subscribeSensors(EVENT_ON_POINTER_MOVE, onPointerMove), subscribeSensors(EVENT_ON_POINTER_UP, onPointerUp), subscribeSensors(EVENT_ON_POINTER_LEAVE, onPointerUp), subscribeSensors(EVENT_ON_POINTER_CANCEL, onPointerUp)),
    [subscribeSensors, onPointerDown, onPointerMove, onPointerUp, disabled]
  );
}
var Gesture;
(function(Gesture2) {
  Gesture2[Gesture2["NONE"] = 0] = "NONE";
  Gesture2[Gesture2["SWIPE"] = 1] = "SWIPE";
  Gesture2[Gesture2["PULL"] = 2] = "PULL";
})(Gesture || (Gesture = {}));
const SWIPE_THRESHOLD = 30;
function usePointerSwipe({ disableSwipeNavigation, closeOnBackdropClick }, subscribeSensors, isSwipeValid, containerWidth, swipeAnimationDuration, onSwipeStart, onSwipeProgress, onSwipeFinish, onSwipeCancel, pullUpEnabled, pullDownEnabled, onPullStart, onPullProgress, onPullFinish, onPullCancel, onClose) {
  const offset = reactExports.useRef(0);
  const pointers = reactExports.useRef([]);
  const activePointer = reactExports.useRef(void 0);
  const startTime = reactExports.useRef(0);
  const gesture = reactExports.useRef(Gesture.NONE);
  const clearPointer = reactExports.useCallback((event) => {
    if (activePointer.current === event.pointerId) {
      activePointer.current = void 0;
      gesture.current = Gesture.NONE;
    }
    const currentPointers = pointers.current;
    currentPointers.splice(0, currentPointers.length, ...currentPointers.filter((p) => p.pointerId !== event.pointerId));
  }, []);
  const addPointer = reactExports.useCallback((event) => {
    clearPointer(event);
    event.persist();
    pointers.current.push(event);
  }, [clearPointer]);
  const lookupPointer = reactExports.useCallback((event) => pointers.current.find(({ pointerId }) => event.pointerId === pointerId), []);
  const onPointerDown = useEventCallback((event) => {
    addPointer(event);
  });
  const exceedsPullThreshold = (value, threshold) => pullDownEnabled && value > threshold || pullUpEnabled && value < -threshold;
  const onPointerUp = useEventCallback((event) => {
    const pointer = lookupPointer(event);
    if (pointer) {
      if (activePointer.current === event.pointerId) {
        const duration = Date.now() - startTime.current;
        const currentOffset = offset.current;
        if (gesture.current === Gesture.SWIPE) {
          if (Math.abs(currentOffset) > 0.3 * containerWidth || Math.abs(currentOffset) > 5 && duration < swipeAnimationDuration) {
            onSwipeFinish(currentOffset, duration);
          } else {
            onSwipeCancel(currentOffset);
          }
        } else if (gesture.current === Gesture.PULL) {
          if (exceedsPullThreshold(currentOffset, 2 * SWIPE_THRESHOLD)) {
            onPullFinish(currentOffset, duration);
          } else {
            onPullCancel(currentOffset);
          }
        }
        offset.current = 0;
        gesture.current = Gesture.NONE;
      } else {
        const { target } = event;
        if (closeOnBackdropClick && target instanceof HTMLElement && target === pointer.target && (target.classList.contains(cssClass(CLASS_SLIDE)) || target.classList.contains(cssClass(CLASS_SLIDE_WRAPPER)))) {
          onClose();
        }
      }
    }
    clearPointer(event);
  });
  const onPointerMove = useEventCallback((event) => {
    const pointer = lookupPointer(event);
    if (pointer) {
      const isCurrentPointer = activePointer.current === event.pointerId;
      if (event.buttons === 0) {
        if (isCurrentPointer && offset.current !== 0) {
          onPointerUp(event);
        } else {
          clearPointer(pointer);
        }
        return;
      }
      const deltaX = event.clientX - pointer.clientX;
      const deltaY = event.clientY - pointer.clientY;
      if (activePointer.current === void 0) {
        const startGesture = (newGesture) => {
          addPointer(event);
          activePointer.current = event.pointerId;
          startTime.current = Date.now();
          gesture.current = newGesture;
        };
        if (Math.abs(deltaX) > Math.abs(deltaY) && Math.abs(deltaX) > SWIPE_THRESHOLD && isSwipeValid(deltaX)) {
          if (!disableSwipeNavigation) {
            startGesture(Gesture.SWIPE);
            onSwipeStart();
          }
        } else if (Math.abs(deltaY) > Math.abs(deltaX) && exceedsPullThreshold(deltaY, SWIPE_THRESHOLD)) {
          startGesture(Gesture.PULL);
          onPullStart();
        }
      } else if (isCurrentPointer) {
        if (gesture.current === Gesture.SWIPE) {
          offset.current = deltaX;
          onSwipeProgress(deltaX);
        } else if (gesture.current === Gesture.PULL) {
          offset.current = deltaY;
          onPullProgress(deltaY);
        }
      }
    }
  });
  usePointerEvents(subscribeSensors, onPointerDown, onPointerMove, onPointerUp);
}
function usePreventWheelDefaults({ preventDefaultWheelX, preventDefaultWheelY }) {
  const ref = reactExports.useRef(null);
  const listener = useEventCallback((event) => {
    const horizontal = Math.abs(event.deltaX) > Math.abs(event.deltaY);
    if (horizontal && preventDefaultWheelX || !horizontal && preventDefaultWheelY || event.ctrlKey) {
      event.preventDefault();
    }
  });
  return reactExports.useCallback((node) => {
    var _a;
    if (node) {
      node.addEventListener("wheel", listener, { passive: false });
    } else {
      (_a = ref.current) === null || _a === void 0 ? void 0 : _a.removeEventListener("wheel", listener);
    }
    ref.current = node;
  }, [listener]);
}
function useWheelSwipe(swipeState, subscribeSensors, isSwipeValid, containerWidth, swipeAnimationDuration, onSwipeStart, onSwipeProgress, onSwipeFinish, onSwipeCancel) {
  const offset = reactExports.useRef(0);
  const intent = reactExports.useRef(0);
  const intentCleanup = reactExports.useRef(void 0);
  const resetCleanup = reactExports.useRef(void 0);
  const wheelInertia = reactExports.useRef(0);
  const wheelInertiaCleanup = reactExports.useRef(void 0);
  const startTime = reactExports.useRef(0);
  const { setTimeout: setTimeout2, clearTimeout: clearTimeout2 } = useTimeouts();
  const cancelSwipeIntentCleanup = reactExports.useCallback(() => {
    if (intentCleanup.current) {
      clearTimeout2(intentCleanup.current);
      intentCleanup.current = void 0;
    }
  }, [clearTimeout2]);
  const cancelSwipeResetCleanup = reactExports.useCallback(() => {
    if (resetCleanup.current) {
      clearTimeout2(resetCleanup.current);
      resetCleanup.current = void 0;
    }
  }, [clearTimeout2]);
  const handleCleanup = useEventCallback(() => {
    if (swipeState !== SwipeState.SWIPE) {
      offset.current = 0;
      startTime.current = 0;
      cancelSwipeIntentCleanup();
      cancelSwipeResetCleanup();
    }
  });
  reactExports.useEffect(handleCleanup, [swipeState, handleCleanup]);
  const handleCancelSwipe = useEventCallback((currentSwipeOffset) => {
    resetCleanup.current = void 0;
    if (offset.current === currentSwipeOffset) {
      onSwipeCancel(offset.current);
    }
  });
  const onWheel = useEventCallback((event) => {
    if (event.ctrlKey) {
      return;
    }
    if (Math.abs(event.deltaY) > Math.abs(event.deltaX)) {
      return;
    }
    const setWheelInertia = (inertia) => {
      wheelInertia.current = inertia;
      clearTimeout2(wheelInertiaCleanup.current);
      wheelInertiaCleanup.current = inertia > 0 ? setTimeout2(() => {
        wheelInertia.current = 0;
        wheelInertiaCleanup.current = void 0;
      }, 300) : void 0;
    };
    if (swipeState === SwipeState.NONE) {
      if (Math.abs(event.deltaX) <= 1.2 * Math.abs(wheelInertia.current)) {
        setWheelInertia(event.deltaX);
        return;
      }
      if (!isSwipeValid(-event.deltaX)) {
        return;
      }
      intent.current += event.deltaX;
      cancelSwipeIntentCleanup();
      if (Math.abs(intent.current) > 30) {
        intent.current = 0;
        setWheelInertia(0);
        startTime.current = Date.now();
        onSwipeStart();
      } else {
        const currentSwipeIntent = intent.current;
        intentCleanup.current = setTimeout2(() => {
          intentCleanup.current = void 0;
          if (currentSwipeIntent === intent.current) {
            intent.current = 0;
          }
        }, swipeAnimationDuration);
      }
    } else if (swipeState === SwipeState.SWIPE) {
      let newSwipeOffset = offset.current - event.deltaX;
      newSwipeOffset = Math.min(Math.abs(newSwipeOffset), containerWidth) * Math.sign(newSwipeOffset);
      offset.current = newSwipeOffset;
      onSwipeProgress(newSwipeOffset);
      cancelSwipeResetCleanup();
      if (Math.abs(newSwipeOffset) > 0.2 * containerWidth) {
        setWheelInertia(event.deltaX);
        onSwipeFinish(newSwipeOffset, Date.now() - startTime.current);
        return;
      }
      resetCleanup.current = setTimeout2(() => handleCancelSwipe(newSwipeOffset), 2 * swipeAnimationDuration);
    } else {
      setWheelInertia(event.deltaX);
    }
  });
  reactExports.useEffect(() => subscribeSensors(EVENT_ON_WHEEL, onWheel), [subscribeSensors, onWheel]);
}
const cssContainerPrefix = makeComposePrefix("container");
const ControllerContext = reactExports.createContext(null);
const useController = makeUseContext("useController", "ControllerContext", ControllerContext);
function Controller({ children, ...props }) {
  var _a;
  const { carousel, animation, controller, on, styles, render } = props;
  const { closeOnPullUp, closeOnPullDown, preventDefaultWheelX, preventDefaultWheelY } = controller;
  const [toolbarWidth, setToolbarWidth] = reactExports.useState();
  const state = useLightboxState();
  const dispatch = useLightboxDispatch();
  const [swipeState, setSwipeState] = reactExports.useState(SwipeState.NONE);
  const swipeOffset = reactExports.useRef(0);
  const pullOffset = reactExports.useRef(0);
  const pullOpacity = reactExports.useRef(1);
  const { registerSensors, subscribeSensors } = useSensors();
  const { subscribe, publish } = useEvents();
  const cleanupAnimationIncrement = useDelay();
  const cleanupSwipeOffset = useDelay();
  const cleanupPullOffset = useDelay();
  const { containerRef, setContainerRef, containerRect } = useContainerRect();
  const handleContainerRef = useForkRef(usePreventWheelDefaults({ preventDefaultWheelX, preventDefaultWheelY }), setContainerRef);
  const carouselRef = reactExports.useRef(null);
  const setCarouselRef = useForkRef(carouselRef, void 0);
  const { getOwnerDocument } = useDocumentContext();
  const isRTL = useRTL();
  const rtl = (value) => (isRTL ? -1 : 1) * (typeof value === "number" ? value : 1);
  const focus = useEventCallback(() => {
    var _a2;
    return (_a2 = containerRef.current) === null || _a2 === void 0 ? void 0 : _a2.focus();
  });
  const getLightboxProps = useEventCallback(() => props);
  const getLightboxState = useEventCallback(() => state);
  const prev = reactExports.useCallback((params) => publish(ACTION_PREV, params), [publish]);
  const next = reactExports.useCallback((params) => publish(ACTION_NEXT, params), [publish]);
  const close = reactExports.useCallback(() => publish(ACTION_CLOSE), [publish]);
  const isSwipeValid = (offset) => !(carousel.finite && (rtl(offset) > 0 && state.currentIndex === 0 || rtl(offset) < 0 && state.currentIndex === state.slides.length - 1));
  const setSwipeOffset = (offset) => {
    var _a2;
    swipeOffset.current = offset;
    (_a2 = containerRef.current) === null || _a2 === void 0 ? void 0 : _a2.style.setProperty(cssVar("swipe_offset"), `${Math.round(offset)}px`);
  };
  const setPullOffset = (offset) => {
    var _a2, _b;
    pullOffset.current = offset;
    pullOpacity.current = (() => {
      const threshold = 60;
      const minOpacity = 0.5;
      const offsetValue = (() => {
        if (closeOnPullDown && offset > 0)
          return offset;
        if (closeOnPullUp && offset < 0)
          return -offset;
        return 0;
      })();
      return Math.min(Math.max(round(1 - offsetValue / threshold * (1 - minOpacity), 2), minOpacity), 1);
    })();
    (_a2 = containerRef.current) === null || _a2 === void 0 ? void 0 : _a2.style.setProperty(cssVar("pull_offset"), `${Math.round(offset)}px`);
    (_b = containerRef.current) === null || _b === void 0 ? void 0 : _b.style.setProperty(cssVar("pull_opacity"), `${pullOpacity.current}`);
  };
  const { prepareAnimation: preparePullAnimation } = useAnimation(carouselRef, (snapshot, rect, translate) => {
    if (carouselRef.current && containerRect) {
      return {
        keyframes: [
          {
            transform: `translate(0, ${snapshot.rect.y - rect.y + translate.y}px)`,
            opacity: snapshot.opacity
          },
          { transform: "translate(0, 0)", opacity: 1 }
        ],
        duration: snapshot.duration,
        easing: animation.easing.fade
      };
    }
    return void 0;
  });
  const pull = (offset, cancel) => {
    if (closeOnPullUp || closeOnPullDown) {
      setPullOffset(offset);
      let duration = 0;
      if (carouselRef.current) {
        duration = animation.fade * (cancel ? 2 : 1);
        preparePullAnimation({
          rect: carouselRef.current.getBoundingClientRect(),
          opacity: pullOpacity.current,
          duration
        });
      }
      cleanupPullOffset(() => {
        setPullOffset(0);
        setSwipeState(SwipeState.NONE);
      }, duration);
      setSwipeState(SwipeState.ANIMATION);
      if (!cancel) {
        close();
      }
    }
  };
  const { prepareAnimation, isAnimationPlaying } = useAnimation(carouselRef, (snapshot, rect, translate) => {
    var _a2;
    if (carouselRef.current && containerRect && ((_a2 = state.animation) === null || _a2 === void 0 ? void 0 : _a2.duration)) {
      const parsedSpacing = parseLengthPercentage(carousel.spacing);
      const spacingValue = (parsedSpacing.percent ? parsedSpacing.percent * containerRect.width / 100 : parsedSpacing.pixel) || 0;
      return {
        keyframes: [
          {
            transform: `translate(${rtl(state.globalIndex - snapshot.index) * (containerRect.width + spacingValue) + snapshot.rect.x - rect.x + translate.x}px, 0)`
          },
          { transform: "translate(0, 0)" }
        ],
        duration: state.animation.duration,
        easing: state.animation.easing
      };
    }
    return void 0;
  });
  const swipe = useEventCallback((action) => {
    var _a2, _b;
    const currentSwipeOffset = action.offset || 0;
    const swipeDuration = !currentSwipeOffset ? (_a2 = animation.navigation) !== null && _a2 !== void 0 ? _a2 : animation.swipe : animation.swipe;
    const swipeEasing = !currentSwipeOffset && !isAnimationPlaying() ? animation.easing.navigation : animation.easing.swipe;
    let { direction } = action;
    const count = (_b = action.count) !== null && _b !== void 0 ? _b : 1;
    let newSwipeState = SwipeState.ANIMATION;
    let newSwipeAnimationDuration = swipeDuration * count;
    if (!direction) {
      const containerWidth = containerRect === null || containerRect === void 0 ? void 0 : containerRect.width;
      const elapsedTime = action.duration || 0;
      const expectedTime = containerWidth ? swipeDuration / containerWidth * Math.abs(currentSwipeOffset) : swipeDuration;
      if (count !== 0) {
        if (elapsedTime < expectedTime) {
          newSwipeAnimationDuration = newSwipeAnimationDuration / expectedTime * Math.max(elapsedTime, expectedTime / 5);
        } else if (containerWidth) {
          newSwipeAnimationDuration = swipeDuration / containerWidth * (containerWidth - Math.abs(currentSwipeOffset));
        }
        direction = rtl(currentSwipeOffset) > 0 ? ACTION_PREV : ACTION_NEXT;
      } else {
        newSwipeAnimationDuration = swipeDuration / 2;
      }
    }
    let increment = 0;
    if (direction === ACTION_PREV) {
      if (isSwipeValid(rtl(1))) {
        increment = -count;
      } else {
        newSwipeState = SwipeState.NONE;
        newSwipeAnimationDuration = swipeDuration;
      }
    } else if (direction === ACTION_NEXT) {
      if (isSwipeValid(rtl(-1))) {
        increment = count;
      } else {
        newSwipeState = SwipeState.NONE;
        newSwipeAnimationDuration = swipeDuration;
      }
    }
    newSwipeAnimationDuration = Math.round(newSwipeAnimationDuration);
    cleanupSwipeOffset(() => {
      setSwipeOffset(0);
      setSwipeState(SwipeState.NONE);
    }, newSwipeAnimationDuration);
    if (carouselRef.current) {
      prepareAnimation({
        rect: carouselRef.current.getBoundingClientRect(),
        index: state.globalIndex
      });
    }
    setSwipeState(newSwipeState);
    publish(ACTION_SWIPE, {
      type: "swipe",
      increment,
      duration: newSwipeAnimationDuration,
      easing: swipeEasing
    });
  });
  reactExports.useEffect(() => {
    var _a2, _b;
    if (((_a2 = state.animation) === null || _a2 === void 0 ? void 0 : _a2.increment) && ((_b = state.animation) === null || _b === void 0 ? void 0 : _b.duration)) {
      cleanupAnimationIncrement(() => dispatch({ type: "swipe", increment: 0 }), state.animation.duration);
    }
  }, [state.animation, dispatch, cleanupAnimationIncrement]);
  const swipeParams = [
    subscribeSensors,
    isSwipeValid,
    (containerRect === null || containerRect === void 0 ? void 0 : containerRect.width) || 0,
    animation.swipe,
    () => setSwipeState(SwipeState.SWIPE),
    (offset) => setSwipeOffset(offset),
    (offset, duration) => swipe({ offset, duration, count: 1 }),
    (offset) => swipe({ offset, count: 0 })
  ];
  const pullParams = [
    () => {
      if (closeOnPullDown) {
        setSwipeState(SwipeState.PULL);
      }
    },
    (offset) => setPullOffset(offset),
    (offset) => pull(offset),
    (offset) => pull(offset, true)
  ];
  usePointerSwipe(controller, ...swipeParams, closeOnPullUp, closeOnPullDown, ...pullParams, close);
  useWheelSwipe(swipeState, ...swipeParams);
  const focusOnMount = useEventCallback(() => {
    if (controller.focus && getOwnerDocument().querySelector(`.${cssClass(MODULE_PORTAL)} .${cssClass(cssContainerPrefix())}`)) {
      focus();
    }
  });
  reactExports.useEffect(focusOnMount, [focusOnMount]);
  const onViewCallback = useEventCallback(() => {
    var _a2;
    (_a2 = on.view) === null || _a2 === void 0 ? void 0 : _a2.call(on, { index: state.currentIndex });
  });
  reactExports.useEffect(onViewCallback, [state.globalIndex, onViewCallback]);
  reactExports.useEffect(() => cleanup(subscribe(ACTION_PREV, (action) => swipe({ direction: ACTION_PREV, ...action })), subscribe(ACTION_NEXT, (action) => swipe({ direction: ACTION_NEXT, ...action })), subscribe(ACTION_SWIPE, (action) => dispatch(action))), [subscribe, swipe, dispatch]);
  const context = reactExports.useMemo(() => ({
    prev,
    next,
    close,
    focus,
    slideRect: containerRect ? computeSlideRect(containerRect, carousel.padding) : { width: 0, height: 0 },
    containerRect: containerRect || { width: 0, height: 0 },
    subscribeSensors,
    containerRef,
    setCarouselRef,
    toolbarWidth,
    setToolbarWidth
  }), [
    prev,
    next,
    close,
    focus,
    subscribeSensors,
    containerRect,
    containerRef,
    setCarouselRef,
    toolbarWidth,
    setToolbarWidth,
    carousel.padding
  ]);
  reactExports.useImperativeHandle(controller.ref, () => ({
    prev,
    next,
    close,
    focus,
    getLightboxProps,
    getLightboxState
  }), [prev, next, close, focus, getLightboxProps, getLightboxState]);
  return reactExports.createElement("div", { ref: handleContainerRef, className: clsx(cssClass(cssContainerPrefix()), cssClass(CLASS_FLEX_CENTER)), style: {
    ...swipeState === SwipeState.SWIPE ? { [cssVar("swipe_offset")]: `${Math.round(swipeOffset.current)}px` } : null,
    ...swipeState === SwipeState.PULL ? {
      [cssVar("pull_offset")]: `${Math.round(pullOffset.current)}px`,
      [cssVar("pull_opacity")]: `${pullOpacity.current}`
    } : null,
    ...controller.touchAction !== "none" ? { [cssVar("controller_touch_action")]: controller.touchAction } : null,
    ...styles.container
  }, tabIndex: -1, ...registerSensors }, containerRect && reactExports.createElement(
    ControllerContext.Provider,
    { value: context },
    children,
    (_a = render.controls) === null || _a === void 0 ? void 0 : _a.call(render)
  ));
}
const ControllerModule = createModule(MODULE_CONTROLLER, Controller);
function cssPrefix$2(value) {
  return composePrefix(MODULE_CAROUSEL, value);
}
function cssSlidePrefix(value) {
  return composePrefix(CLASS_SLIDE, value);
}
function CarouselSlide({ slide, offset }) {
  const containerRef = reactExports.useRef(null);
  const { currentIndex, slides } = useLightboxState();
  const { slideRect, focus } = useController();
  const { render, carousel: { imageFit, imageProps }, on: { click: onClick }, styles: { slide: style }, labels } = useLightboxProps();
  const { getOwnerDocument } = useDocumentContext();
  const offscreen = offset !== 0;
  reactExports.useEffect(() => {
    var _a;
    if (offscreen && ((_a = containerRef.current) === null || _a === void 0 ? void 0 : _a.contains(getOwnerDocument().activeElement))) {
      focus();
    }
  }, [offscreen, focus, getOwnerDocument]);
  const renderSlide = () => {
    var _a, _b, _c, _d;
    let rendered = (_a = render.slide) === null || _a === void 0 ? void 0 : _a.call(render, { slide, offset, rect: slideRect });
    if (!rendered && isImageSlide(slide)) {
      rendered = reactExports.createElement(ImageSlide, { slide, offset, render, rect: slideRect, imageFit, imageProps, onClick: !offscreen ? () => onClick === null || onClick === void 0 ? void 0 : onClick({ index: currentIndex }) : void 0 });
    }
    return rendered ? reactExports.createElement(
      reactExports.Fragment,
      null,
      (_b = render.slideHeader) === null || _b === void 0 ? void 0 : _b.call(render, { slide }),
      ((_c = render.slideContainer) !== null && _c !== void 0 ? _c : (({ children }) => children))({ slide, children: rendered }),
      (_d = render.slideFooter) === null || _d === void 0 ? void 0 : _d.call(render, { slide })
    ) : null;
  };
  return reactExports.createElement("div", { ref: containerRef, className: clsx(cssClass(cssSlidePrefix()), !offscreen && cssClass(cssSlidePrefix("current")), cssClass(CLASS_FLEX_CENTER)), ...makeInertWhen(offscreen), style, role: "group", "aria-roledescription": translateLabel(labels, "Slide"), "aria-label": translateSlideCounter(labels, slides, currentIndex + offset) }, renderSlide());
}
function Placeholder() {
  const style = useLightboxProps().styles.slide;
  return reactExports.createElement("div", { className: cssClass(CLASS_SLIDE), style });
}
function Carousel({ carousel, labels }) {
  const { slides, currentIndex, globalIndex } = useLightboxState();
  const { setCarouselRef } = useController();
  const { autoPlaying, focusWithin } = useA11yContext();
  const spacingValue = parseLengthPercentage(carousel.spacing);
  const paddingValue = parseLengthPercentage(carousel.padding);
  const preload = calculatePreload(carousel, slides, 1);
  const items = [];
  if (hasSlides(slides)) {
    for (let index = currentIndex - preload; index <= currentIndex + preload; index += 1) {
      const slide = getSlide(slides, index);
      const key = globalIndex - currentIndex + index;
      const placeholder = carousel.finite && (index < 0 || index > slides.length - 1);
      items.push(!placeholder ? {
        key: [`${key}`, getSlideKey(slide)].filter(Boolean).join("|"),
        offset: index - currentIndex,
        slide
      } : { key });
    }
  }
  return reactExports.createElement("div", { ref: setCarouselRef, className: clsx(cssClass(cssPrefix$2()), items.length > 0 && cssClass(cssPrefix$2("with_slides"))), style: {
    [`${cssVar(cssPrefix$2("slides_count"))}`]: items.length,
    [`${cssVar(cssPrefix$2("spacing_px"))}`]: spacingValue.pixel || 0,
    [`${cssVar(cssPrefix$2("spacing_percent"))}`]: spacingValue.percent || 0,
    [`${cssVar(cssPrefix$2("padding_px"))}`]: paddingValue.pixel || 0,
    [`${cssVar(cssPrefix$2("padding_percent"))}`]: paddingValue.percent || 0
  }, role: "region", "aria-live": autoPlaying && !focusWithin ? "off" : "polite", "aria-roledescription": translateLabel(labels, "Carousel"), "aria-label": translateLabel(labels, "Photo gallery") }, items.map(({ key, slide, offset }) => slide ? reactExports.createElement(CarouselSlide, { key, slide, offset }) : reactExports.createElement(Placeholder, { key })));
}
const CarouselModule = createModule(MODULE_CAROUSEL, Carousel);
function useNavigationState() {
  const { carousel } = useLightboxProps();
  const { slides, currentIndex } = useLightboxState();
  const prevDisabled = slides.length === 0 || carousel.finite && currentIndex === 0;
  const nextDisabled = slides.length === 0 || carousel.finite && currentIndex === slides.length - 1;
  return { prevDisabled, nextDisabled };
}
function useKeyboardNavigation(subscribeSensors) {
  var _a;
  const isRTL = useRTL();
  const { publish } = useEvents();
  const { animation } = useLightboxProps();
  const { prevDisabled, nextDisabled } = useNavigationState();
  const throttle = ((_a = animation.navigation) !== null && _a !== void 0 ? _a : animation.swipe) / 2;
  const prev = useThrottle(() => publish(ACTION_PREV), throttle);
  const next = useThrottle(() => publish(ACTION_NEXT), throttle);
  const handleKeyDown = useEventCallback((event) => {
    switch (event.key) {
      case VK_ESCAPE:
        publish(ACTION_CLOSE);
        break;
      case VK_ARROW_LEFT:
        if (!(isRTL ? nextDisabled : prevDisabled))
          (isRTL ? next : prev)();
        break;
      case VK_ARROW_RIGHT:
        if (!(isRTL ? prevDisabled : nextDisabled))
          (isRTL ? prev : next)();
        break;
    }
  });
  reactExports.useEffect(() => subscribeSensors(EVENT_ON_KEY_DOWN, handleKeyDown), [subscribeSensors, handleKeyDown]);
}
function NavigationButton({ label, icon, renderIcon, action, onClick, disabled, style }) {
  return reactExports.createElement(IconButton, { label, icon, renderIcon, className: cssClass(`navigation_${action}`), disabled, onClick, style, ...useLoseFocus(useController().focus, disabled) });
}
function Navigation({ render: { buttonPrev, buttonNext, iconPrev, iconNext }, styles }) {
  const { prev, next, subscribeSensors } = useController();
  const { prevDisabled, nextDisabled } = useNavigationState();
  useKeyboardNavigation(subscribeSensors);
  return reactExports.createElement(
    reactExports.Fragment,
    null,
    buttonPrev ? buttonPrev() : reactExports.createElement(NavigationButton, { label: "Previous", action: ACTION_PREV, icon: PreviousIcon, renderIcon: iconPrev, style: styles.navigationPrev, disabled: prevDisabled, onClick: prev }),
    buttonNext ? buttonNext() : reactExports.createElement(NavigationButton, { label: "Next", action: ACTION_NEXT, icon: NextIcon, renderIcon: iconNext, style: styles.navigationNext, disabled: nextDisabled, onClick: next })
  );
}
const NavigationModule = createModule(MODULE_NAVIGATION, Navigation);
const noScroll = cssClass(CLASS_NO_SCROLL);
const noScrollPadding = cssClass(CLASS_NO_SCROLL_PADDING);
function isHTMLElement(element) {
  return "style" in element;
}
function padScrollbar(element, padding, rtl) {
  const styles = window.getComputedStyle(element);
  const property = rtl ? "padding-left" : "padding-right";
  const computedValue = rtl ? styles.paddingLeft : styles.paddingRight;
  const originalValue = element.style.getPropertyValue(property);
  element.style.setProperty(property, `${(parseInt$1(computedValue) || 0) + padding}px`);
  return () => {
    if (originalValue) {
      element.style.setProperty(property, originalValue);
    } else {
      element.style.removeProperty(property);
    }
  };
}
function NoScroll({ noScroll: { disabled }, children }) {
  const rtl = useRTL();
  const { getOwnerDocument, getOwnerWindow } = useDocumentContext();
  reactExports.useEffect(() => {
    if (disabled)
      return () => {
      };
    const cleanup2 = [];
    const ownerWindow = getOwnerWindow();
    const { body, documentElement } = getOwnerDocument();
    const scrollbar = Math.round(ownerWindow.innerWidth - documentElement.clientWidth);
    if (scrollbar > 0) {
      cleanup2.push(padScrollbar(body, scrollbar, rtl));
      const elements = body.getElementsByTagName("*");
      for (let i = 0; i < elements.length; i += 1) {
        const element = elements[i];
        if (isHTMLElement(element) && ownerWindow.getComputedStyle(element).getPropertyValue("position") === "fixed" && !element.classList.contains(noScrollPadding)) {
          cleanup2.push(padScrollbar(element, scrollbar, rtl));
        }
      }
    }
    body.classList.add(noScroll);
    return () => {
      body.classList.remove(noScroll);
      cleanup2.forEach((clean) => clean());
    };
  }, [rtl, disabled, getOwnerDocument, getOwnerWindow]);
  return reactExports.createElement(reactExports.Fragment, null, children);
}
const NoScrollModule = createModule(MODULE_NO_SCROLL, NoScroll);
function cssPrefix$1(value) {
  return composePrefix(MODULE_PORTAL, value);
}
function setAttribute(element, attribute, value) {
  const previousValue = element.getAttribute(attribute);
  element.setAttribute(attribute, value);
  return () => {
    if (previousValue) {
      element.setAttribute(attribute, previousValue);
    } else {
      element.removeAttribute(attribute);
    }
  };
}
function Portal({ children, animation, styles, className, on, portal, close, labels }) {
  const [mounted, setMounted] = reactExports.useState(false);
  const [visible, setVisible] = reactExports.useState(false);
  const cleanup2 = reactExports.useRef([]);
  const restoreFocus = reactExports.useRef(null);
  const { setTimeout: setTimeout2 } = useTimeouts();
  const { subscribe } = useEvents();
  const reduceMotion = useMotionPreference();
  const animationDuration = !reduceMotion ? animation.fade : 0;
  reactExports.useEffect(() => {
    setMounted(true);
    return () => {
      setMounted(false);
      setVisible(false);
    };
  }, []);
  const handleCleanup = useEventCallback(() => {
    cleanup2.current.forEach((clean) => clean());
    cleanup2.current = [];
  });
  const handleClose = useEventCallback(() => {
    var _a;
    setVisible(false);
    handleCleanup();
    (_a = on.exiting) === null || _a === void 0 ? void 0 : _a.call(on);
    setTimeout2(() => {
      var _a2;
      (_a2 = on.exited) === null || _a2 === void 0 ? void 0 : _a2.call(on);
      close();
    }, animationDuration);
  });
  reactExports.useEffect(() => subscribe(ACTION_CLOSE, handleClose), [subscribe, handleClose]);
  const handleEnter = useEventCallback((node) => {
    var _a, _b, _c;
    reflow(node);
    setVisible(true);
    (_a = on.entering) === null || _a === void 0 ? void 0 : _a.call(on);
    const elements = (_c = (_b = node.parentNode) === null || _b === void 0 ? void 0 : _b.children) !== null && _c !== void 0 ? _c : [];
    for (let i = 0; i < elements.length; i += 1) {
      const element = elements[i];
      if (["TEMPLATE", "SCRIPT", "STYLE"].indexOf(element.tagName) === -1 && element !== node) {
        cleanup2.current.push(setAttribute(element, "inert", ""));
        cleanup2.current.push(setAttribute(element, "aria-hidden", "true"));
      }
    }
    cleanup2.current.push(() => {
      var _a2, _b2;
      (_b2 = (_a2 = restoreFocus.current) === null || _a2 === void 0 ? void 0 : _a2.focus) === null || _b2 === void 0 ? void 0 : _b2.call(_a2);
    });
    setTimeout2(() => {
      var _a2;
      (_a2 = on.entered) === null || _a2 === void 0 ? void 0 : _a2.call(on);
    }, animationDuration);
  });
  const handleRef = reactExports.useCallback((node) => {
    if (node) {
      handleEnter(node);
    } else {
      handleCleanup();
    }
  }, [handleEnter, handleCleanup]);
  return mounted ? reactDomExports.createPortal(reactExports.createElement(LightboxRoot, { ref: handleRef, className: clsx(className, cssClass(cssPrefix$1()), cssClass(CLASS_NO_SCROLL_PADDING), visible && cssClass(cssPrefix$1("open"))), "aria-modal": true, role: "dialog", "aria-label": translateLabel(labels, "Lightbox"), style: {
    ...animation.fade !== LightboxDefaultProps.animation.fade ? { [cssVar("fade_animation_duration")]: `${animationDuration}ms` } : null,
    ...animation.easing.fade !== LightboxDefaultProps.animation.easing.fade ? { [cssVar("fade_animation_timing_function")]: animation.easing.fade } : null,
    ...styles.root
  }, onFocus: (event) => {
    if (!restoreFocus.current) {
      restoreFocus.current = event.relatedTarget;
    }
  } }, children), portal.root || document.body) : null;
}
const PortalModule = createModule(MODULE_PORTAL, Portal);
function Root({ children }) {
  return reactExports.createElement(reactExports.Fragment, null, children);
}
const RootModule = createModule(MODULE_ROOT, Root);
function cssPrefix(value) {
  return composePrefix(MODULE_TOOLBAR, value);
}
function Toolbar({ toolbar: { buttons }, render: { buttonClose, iconClose }, styles }) {
  const { close, setToolbarWidth } = useController();
  const { setContainerRef, containerRect } = useContainerRect();
  useLayoutEffect(() => {
    setToolbarWidth(containerRect === null || containerRect === void 0 ? void 0 : containerRect.width);
  }, [setToolbarWidth, containerRect === null || containerRect === void 0 ? void 0 : containerRect.width]);
  const renderCloseButton = () => {
    if (buttonClose)
      return buttonClose();
    return reactExports.createElement(IconButton, { key: ACTION_CLOSE, label: "Close", icon: CloseIcon, renderIcon: iconClose, onClick: close });
  };
  return reactExports.createElement("div", { ref: setContainerRef, style: styles.toolbar, className: cssClass(cssPrefix()) }, buttons === null || buttons === void 0 ? void 0 : buttons.map((button) => button === ACTION_CLOSE ? renderCloseButton() : button));
}
const ToolbarModule = createModule(MODULE_TOOLBAR, Toolbar);
function renderNode(node, props) {
  var _a;
  return reactExports.createElement(node.module.component, { key: node.module.name, ...props }, (_a = node.children) === null || _a === void 0 ? void 0 : _a.map((child) => renderNode(child, props)));
}
function mergeAnimation(defaultAnimation, animation = {}) {
  const { easing: defaultAnimationEasing, ...restDefaultAnimation } = defaultAnimation;
  const { easing, ...restAnimation } = animation;
  return {
    easing: { ...defaultAnimationEasing, ...easing },
    ...restDefaultAnimation,
    ...restAnimation
  };
}
function Lightbox({ carousel, animation, render, toolbar, controller, noScroll: noScroll2, on, plugins, slides, index, ...restProps }) {
  const { animation: defaultAnimation, carousel: defaultCarousel, render: defaultRender, toolbar: defaultToolbar, controller: defaultController, noScroll: defaultNoScroll, on: defaultOn, slides: defaultSlides, index: defaultIndex, plugins: defaultPlugins, ...restDefaultProps } = LightboxDefaultProps;
  const { config, augmentation } = withPlugins([
    createNode(PortalModule, [
      createNode(NoScrollModule, [
        createNode(ControllerModule, [
          createNode(CarouselModule),
          createNode(ToolbarModule),
          createNode(NavigationModule)
        ])
      ])
    ])
  ], plugins || defaultPlugins);
  const props = augmentation({
    animation: mergeAnimation(defaultAnimation, animation),
    carousel: { ...defaultCarousel, ...carousel },
    render: { ...defaultRender, ...render },
    toolbar: { ...defaultToolbar, ...toolbar },
    controller: { ...defaultController, ...controller },
    noScroll: { ...defaultNoScroll, ...noScroll2 },
    on: { ...defaultOn, ...on },
    ...restDefaultProps,
    ...restProps
  });
  if (!props.open)
    return null;
  return reactExports.createElement(
    LightboxPropsProvider,
    { ...props },
    reactExports.createElement(
      LightboxStateProvider,
      { slides: slides || defaultSlides, index: parseInt$1(index || defaultIndex) },
      reactExports.createElement(
        TimeoutsProvider,
        null,
        reactExports.createElement(
          EventsProvider,
          null,
          reactExports.createElement(A11yContextProvider, null, renderNode(createNode(RootModule, config), props))
        )
      )
    )
  );
}
function getApiBaseUrl() {
  const envUrl = "http://localhost:3000";
  {
    if (!envUrl.startsWith("http://") && !envUrl.startsWith("https://")) {
      return `http://${envUrl}`;
    }
    return envUrl;
  }
}
const API_BASE_URL = getApiBaseUrl();
async function getReviewsByCmsId(cmsId, options = {}) {
  const {
    limit = 10,
    offset = 0,
    sortBy = "submitted_at",
    sortOrder = "DESC",
    hasMedia,
    minRating,
    maxRating
  } = options;
  const params = new URLSearchParams({
    limit: Math.min(Math.max(1, limit), 100).toString(),
    offset: Math.max(0, offset).toString(),
    sortBy: ["submitted_at", "rating"].includes(sortBy) ? sortBy : "submitted_at",
    sortOrder: ["ASC", "DESC"].includes(sortOrder) ? sortOrder : "DESC"
  });
  if (hasMedia !== void 0) {
    params.append("hasMedia", hasMedia.toString());
  }
  if (minRating !== void 0 && minRating >= 1 && minRating <= 5) {
    params.append("minRating", minRating.toString());
  }
  if (maxRating !== void 0 && maxRating >= 1 && maxRating <= 5) {
    params.append("maxRating", maxRating.toString());
  }
  const url = `${API_BASE_URL}/api/reviews/organization/${cmsId}?${params}`;
  let response;
  try {
    response = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      },
      mode: "cors"
    });
    if (!response.ok) {
      throw new Error(`API Error: ${response.status} ${response.statusText}`);
    }
  } catch (fetchError) {
    if (fetchError.name === "TypeError" && fetchError.message.includes("Failed to fetch")) {
      throw new Error(`Не удалось подключиться к API сервису. Проверьте, что сервер запущен на ${API_BASE_URL}`);
    }
    throw fetchError;
  }
  const result = await response.json();
  if (!result.success) {
    throw new Error(result.error || "Unknown API error");
  }
  return {
    reviews: result.data.map(mapReviewFromAPI),
    pagination: result.pagination,
    organization: result.organization,
    embedded: result.embedded
  };
}
async function getReviewsWithStats(cmsId, options = {}) {
  var _a, _b;
  const response = await getReviewsByCmsId(cmsId, options);
  if (!((_a = response.organization) == null ? void 0 : _a.reputation)) {
    return {
      ...response,
      stats: null
    };
  }
  const reputation = response.organization.reputation;
  const reviewsWithReplies = response.reviews.filter((review) => review.hasReply).length;
  const reviewsWithMedia = response.reviews.filter((review) => review.hasMedia).length;
  let totalReviewsWithMedia = reviewsWithMedia;
  try {
    const mediaStatsResponse = await getReviewsByCmsId(cmsId, {
      limit: 1,
      hasMedia: true
    });
    totalReviewsWithMedia = ((_b = mediaStatsResponse.pagination) == null ? void 0 : _b.total) || reviewsWithMedia;
  } catch {
  }
  const stats = {
    // Основная статистика из репутации API
    totalReviews: reputation.total_reviews,
    avgRating: reputation.average_rating,
    weightedRating: reputation.weighted_rating,
    ratingDistribution: reputation.rating_distribution,
    sourcesBreakdown: reputation.sources_breakdown,
    lastCalculated: reputation.last_calculated,
    algorithm: reputation.algorithm,
    sourcesCount: reputation.sources_count,
    // Дополнительная статистика по текущей выборке
    reviewsWithReplies,
    reviewsWithMedia,
    // Общая статистика медиа
    totalReviewsWithMedia,
    // Информация об организации
    organization: {
      id: response.organization.organization_id,
      name: response.organization.name,
      slug: response.organization.slug,
      cmsId: response.organization.cms_id
    }
  };
  return {
    ...response,
    stats
  };
}
function mapReviewFromAPI(apiReview) {
  var _a, _b, _c, _d, _e, _f, _g;
  return {
    id: apiReview.review_id,
    sourceReviewId: apiReview.source_review_id,
    content: apiReview.content,
    rating: apiReview.rating,
    date: apiReview.submitted_at,
    language: apiReview.language,
    source: apiReview.source,
    // Информация о госте
    guest: {
      id: (_a = apiReview.guest) == null ? void 0 : _a.guest_id,
      name: (_b = apiReview.guest) == null ? void 0 : _b.full_name,
      firstName: (_c = apiReview.guest) == null ? void 0 : _c.first_name,
      lastName: (_d = apiReview.guest) == null ? void 0 : _d.last_name,
      avatar: (_e = apiReview.guest) == null ? void 0 : _e.avatar_url,
      gender: (_f = apiReview.guest) == null ? void 0 : _f.gender,
      loyaltyLevel: (_g = apiReview.guest) == null ? void 0 : _g.loyalty_level
    },
    // Медиа контент - строгая проверка на наличие реальных медиа-файлов
    hasMedia: Boolean(
      apiReview.media_assets && Array.isArray(apiReview.media_assets) && apiReview.media_assets.length > 0 && apiReview.media_assets.some((asset) => asset && asset.source_url)
    ),
    mediaCount: apiReview.media_assets && Array.isArray(apiReview.media_assets) ? apiReview.media_assets.filter((asset) => asset && asset.source_url).length : 0,
    mediaAssets: apiReview.media_assets && Array.isArray(apiReview.media_assets) ? apiReview.media_assets.filter((asset) => asset && asset.source_url) : [],
    // Ответы организации
    hasReply: apiReview.organization_replies && apiReview.organization_replies.length > 0,
    organizationReplies: apiReview.organization_replies || [],
    // Добавляем первый ответ организации для совместимости с компонентом
    reply: apiReview.organization_replies && apiReview.organization_replies.length > 0 ? {
      text: apiReview.organization_replies[0].reply_text,
      author: apiReview.organization_replies[0].author_name || "Ответ организации",
      date: apiReview.organization_replies[0].replied_at,
      isOfficial: apiReview.organization_replies[0].is_official || false
    } : null,
    // Метаданные
    isBlocked: apiReview.is_blocked,
    currentStatus: apiReview.current_status,
    orderId: apiReview.order_id,
    bookingId: apiReview.booking_id,
    organizationId: apiReview.organization_id,
    guestId: apiReview.guest_id,
    sourceId: apiReview.source_id
  };
}
function scrollToReviewsList() {
  requestAnimationFrame(() => {
    const selectors = [
      ".reviews-list",
      // Основной список отзывов
      ".snx-reviews-widget",
      // Весь виджет
      "[data-snx-reviews-widget]",
      // Альтернативный селектор
      ".widget-summary"
      // Заголовок виджета
    ];
    let target = null;
    for (const selector of selectors) {
      target = document.querySelector(selector);
      if (target) break;
    }
    if (target) {
      const targetRect = target.getBoundingClientRect();
      const offsetTop = window.pageYOffset + targetRect.top - 20;
      if (Math.abs(window.pageYOffset - offsetTop) > 10) {
        window.scrollTo({
          top: offsetTop,
          behavior: "smooth"
        });
      }
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  });
}
function useReviews(cmsId, options = {}) {
  const [reviews, setReviews] = reactExports.useState([]);
  const [pagination, setPagination] = reactExports.useState(null);
  const [organization, setOrganization] = reactExports.useState(null);
  const [stats, setStats] = reactExports.useState(null);
  const [isLoading, setIsLoading] = reactExports.useState(true);
  const [isError, setIsError] = reactExports.useState(false);
  const [error, setError] = reactExports.useState(null);
  const [isTransitioning, setIsTransitioning] = reactExports.useState(false);
  const [currentFilters, setCurrentFilters] = reactExports.useState({
    sortBy: "submitted_at",
    sortOrder: "DESC",
    hasMedia: void 0
  });
  const [currentPage, setCurrentPage] = reactExports.useState(1);
  const loadReviews = reactExports.useCallback(async (filters = currentFilters, page = 1, isInitialLoad = false) => {
    if (!cmsId) return;
    if (isInitialLoad) {
      setIsLoading(true);
    } else {
      setIsTransitioning(true);
    }
    setIsError(false);
    setError(null);
    try {
      const requestOptions = {
        ...options,
        ...filters,
        limit: options.limit || 10,
        offset: (page - 1) * (options.limit || 10)
      };
      const data = await getReviewsWithStats(cmsId, requestOptions);
      setReviews(data.reviews);
      setPagination(data.pagination);
      if (isInitialLoad || !organization) {
        setOrganization(data.organization);
        setStats(data.stats);
      }
      if (isInitialLoad) {
        setIsLoading(false);
      } else {
        setIsTransitioning(false);
      }
    } catch (err) {
      console.error("[useReviews] Error loading reviews:", err);
      setIsError(true);
      setError(err.message);
      setIsLoading(false);
      setIsTransitioning(false);
    }
  }, [cmsId, options, organization]);
  const applyFilters = reactExports.useCallback(async (newFilters) => {
    const updatedFilters = { ...currentFilters, ...newFilters };
    setCurrentFilters(updatedFilters);
    setCurrentPage(1);
    await loadReviews(updatedFilters, 1, false);
  }, [currentFilters, loadReviews]);
  const goToPage = reactExports.useCallback(async (page) => {
    if (page === currentPage) return;
    scrollToReviewsList();
    setCurrentPage(page);
    await loadReviews(currentFilters, page, false);
  }, [currentPage, currentFilters, loadReviews]);
  reactExports.useEffect(() => {
    if (cmsId) {
      loadReviews(currentFilters, 1, true);
    }
  }, [cmsId]);
  reactExports.useEffect(() => {
    if (cmsId) {
      setCurrentPage(1);
      loadReviews(currentFilters, 1, false);
    }
  }, [options.limit, options.media, options.replies, options.minRating, options.maxRating, options.hasReply]);
  const mediaStats = reactExports.useMemo(() => {
    if (stats && stats.totalReviewsWithMedia !== void 0) {
      return {
        totalReviewsWithMedia: stats.totalReviewsWithMedia
      };
    }
    const currentWithMedia = reviews.filter((review) => review.hasMedia).length;
    return {
      totalReviewsWithMedia: currentWithMedia
    };
  }, [stats, reviews]);
  return {
    reviews,
    // Отзывы с сервера
    pagination,
    organization,
    stats: stats ? {
      ...stats,
      ...mediaStats
      // Добавляем статистику медиа
    } : null,
    isLoading,
    isError,
    error,
    currentPage,
    isTransitioning,
    currentFilters,
    // Добавляем текущие фильтры
    goToPage,
    applyFilters
  };
}
const millisecondsInWeek = 6048e5;
const millisecondsInDay = 864e5;
const minutesInMonth = 43200;
const minutesInDay = 1440;
const constructFromSymbol = Symbol.for("constructDateFrom");
function constructFrom(date, value) {
  if (typeof date === "function") return date(value);
  if (date && typeof date === "object" && constructFromSymbol in date)
    return date[constructFromSymbol](value);
  if (date instanceof Date) return new date.constructor(value);
  return new Date(value);
}
function toDate(argument, context) {
  return constructFrom(context || argument, argument);
}
let defaultOptions = {};
function getDefaultOptions() {
  return defaultOptions;
}
function startOfWeek(date, options) {
  var _a, _b, _c, _d;
  const defaultOptions2 = getDefaultOptions();
  const weekStartsOn = (options == null ? void 0 : options.weekStartsOn) ?? ((_b = (_a = options == null ? void 0 : options.locale) == null ? void 0 : _a.options) == null ? void 0 : _b.weekStartsOn) ?? defaultOptions2.weekStartsOn ?? ((_d = (_c = defaultOptions2.locale) == null ? void 0 : _c.options) == null ? void 0 : _d.weekStartsOn) ?? 0;
  const _date = toDate(date, options == null ? void 0 : options.in);
  const day = _date.getDay();
  const diff = (day < weekStartsOn ? 7 : 0) + day - weekStartsOn;
  _date.setDate(_date.getDate() - diff);
  _date.setHours(0, 0, 0, 0);
  return _date;
}
function startOfISOWeek(date, options) {
  return startOfWeek(date, { ...options, weekStartsOn: 1 });
}
function getISOWeekYear(date, options) {
  const _date = toDate(date, options == null ? void 0 : options.in);
  const year = _date.getFullYear();
  const fourthOfJanuaryOfNextYear = constructFrom(_date, 0);
  fourthOfJanuaryOfNextYear.setFullYear(year + 1, 0, 4);
  fourthOfJanuaryOfNextYear.setHours(0, 0, 0, 0);
  const startOfNextYear = startOfISOWeek(fourthOfJanuaryOfNextYear);
  const fourthOfJanuaryOfThisYear = constructFrom(_date, 0);
  fourthOfJanuaryOfThisYear.setFullYear(year, 0, 4);
  fourthOfJanuaryOfThisYear.setHours(0, 0, 0, 0);
  const startOfThisYear = startOfISOWeek(fourthOfJanuaryOfThisYear);
  if (_date.getTime() >= startOfNextYear.getTime()) {
    return year + 1;
  } else if (_date.getTime() >= startOfThisYear.getTime()) {
    return year;
  } else {
    return year - 1;
  }
}
function getTimezoneOffsetInMilliseconds(date) {
  const _date = toDate(date);
  const utcDate = new Date(
    Date.UTC(
      _date.getFullYear(),
      _date.getMonth(),
      _date.getDate(),
      _date.getHours(),
      _date.getMinutes(),
      _date.getSeconds(),
      _date.getMilliseconds()
    )
  );
  utcDate.setUTCFullYear(_date.getFullYear());
  return +date - +utcDate;
}
function normalizeDates(context, ...dates) {
  const normalize = constructFrom.bind(
    null,
    context || dates.find((date) => typeof date === "object")
  );
  return dates.map(normalize);
}
function startOfDay(date, options) {
  const _date = toDate(date, options == null ? void 0 : options.in);
  _date.setHours(0, 0, 0, 0);
  return _date;
}
function differenceInCalendarDays(laterDate, earlierDate, options) {
  const [laterDate_, earlierDate_] = normalizeDates(
    options == null ? void 0 : options.in,
    laterDate,
    earlierDate
  );
  const laterStartOfDay = startOfDay(laterDate_);
  const earlierStartOfDay = startOfDay(earlierDate_);
  const laterTimestamp = +laterStartOfDay - getTimezoneOffsetInMilliseconds(laterStartOfDay);
  const earlierTimestamp = +earlierStartOfDay - getTimezoneOffsetInMilliseconds(earlierStartOfDay);
  return Math.round((laterTimestamp - earlierTimestamp) / millisecondsInDay);
}
function startOfISOWeekYear(date, options) {
  const year = getISOWeekYear(date, options);
  const fourthOfJanuary = constructFrom(date, 0);
  fourthOfJanuary.setFullYear(year, 0, 4);
  fourthOfJanuary.setHours(0, 0, 0, 0);
  return startOfISOWeek(fourthOfJanuary);
}
function compareAsc(dateLeft, dateRight) {
  const diff = +toDate(dateLeft) - +toDate(dateRight);
  if (diff < 0) return -1;
  else if (diff > 0) return 1;
  return diff;
}
function constructNow(date) {
  return constructFrom(date, Date.now());
}
function isDate(value) {
  return value instanceof Date || typeof value === "object" && Object.prototype.toString.call(value) === "[object Date]";
}
function isValid(date) {
  return !(!isDate(date) && typeof date !== "number" || isNaN(+toDate(date)));
}
function differenceInCalendarMonths(laterDate, earlierDate, options) {
  const [laterDate_, earlierDate_] = normalizeDates(
    options == null ? void 0 : options.in,
    laterDate,
    earlierDate
  );
  const yearsDiff = laterDate_.getFullYear() - earlierDate_.getFullYear();
  const monthsDiff = laterDate_.getMonth() - earlierDate_.getMonth();
  return yearsDiff * 12 + monthsDiff;
}
function getRoundingMethod(method) {
  return (number) => {
    const round2 = method ? Math[method] : Math.trunc;
    const result = round2(number);
    return result === 0 ? 0 : result;
  };
}
function differenceInMilliseconds(laterDate, earlierDate) {
  return +toDate(laterDate) - +toDate(earlierDate);
}
function endOfDay(date, options) {
  const _date = toDate(date, options == null ? void 0 : options.in);
  _date.setHours(23, 59, 59, 999);
  return _date;
}
function endOfMonth(date, options) {
  const _date = toDate(date, options == null ? void 0 : options.in);
  const month = _date.getMonth();
  _date.setFullYear(_date.getFullYear(), month + 1, 0);
  _date.setHours(23, 59, 59, 999);
  return _date;
}
function isLastDayOfMonth(date, options) {
  const _date = toDate(date, options == null ? void 0 : options.in);
  return +endOfDay(_date, options) === +endOfMonth(_date, options);
}
function differenceInMonths(laterDate, earlierDate, options) {
  const [laterDate_, workingLaterDate, earlierDate_] = normalizeDates(
    options == null ? void 0 : options.in,
    laterDate,
    laterDate,
    earlierDate
  );
  const sign = compareAsc(workingLaterDate, earlierDate_);
  const difference = Math.abs(
    differenceInCalendarMonths(workingLaterDate, earlierDate_)
  );
  if (difference < 1) return 0;
  if (workingLaterDate.getMonth() === 1 && workingLaterDate.getDate() > 27)
    workingLaterDate.setDate(30);
  workingLaterDate.setMonth(workingLaterDate.getMonth() - sign * difference);
  let isLastMonthNotFull = compareAsc(workingLaterDate, earlierDate_) === -sign;
  if (isLastDayOfMonth(laterDate_) && difference === 1 && compareAsc(laterDate_, earlierDate_) === 1) {
    isLastMonthNotFull = false;
  }
  const result = sign * (difference - +isLastMonthNotFull);
  return result === 0 ? 0 : result;
}
function differenceInSeconds(laterDate, earlierDate, options) {
  const diff = differenceInMilliseconds(laterDate, earlierDate) / 1e3;
  return getRoundingMethod(options == null ? void 0 : options.roundingMethod)(diff);
}
function startOfYear(date, options) {
  const date_ = toDate(date, options == null ? void 0 : options.in);
  date_.setFullYear(date_.getFullYear(), 0, 1);
  date_.setHours(0, 0, 0, 0);
  return date_;
}
const formatDistanceLocale$1 = {
  lessThanXSeconds: {
    one: "less than a second",
    other: "less than {{count}} seconds"
  },
  xSeconds: {
    one: "1 second",
    other: "{{count}} seconds"
  },
  halfAMinute: "half a minute",
  lessThanXMinutes: {
    one: "less than a minute",
    other: "less than {{count}} minutes"
  },
  xMinutes: {
    one: "1 minute",
    other: "{{count}} minutes"
  },
  aboutXHours: {
    one: "about 1 hour",
    other: "about {{count}} hours"
  },
  xHours: {
    one: "1 hour",
    other: "{{count}} hours"
  },
  xDays: {
    one: "1 day",
    other: "{{count}} days"
  },
  aboutXWeeks: {
    one: "about 1 week",
    other: "about {{count}} weeks"
  },
  xWeeks: {
    one: "1 week",
    other: "{{count}} weeks"
  },
  aboutXMonths: {
    one: "about 1 month",
    other: "about {{count}} months"
  },
  xMonths: {
    one: "1 month",
    other: "{{count}} months"
  },
  aboutXYears: {
    one: "about 1 year",
    other: "about {{count}} years"
  },
  xYears: {
    one: "1 year",
    other: "{{count}} years"
  },
  overXYears: {
    one: "over 1 year",
    other: "over {{count}} years"
  },
  almostXYears: {
    one: "almost 1 year",
    other: "almost {{count}} years"
  }
};
const formatDistance$2 = (token, count, options) => {
  let result;
  const tokenValue = formatDistanceLocale$1[token];
  if (typeof tokenValue === "string") {
    result = tokenValue;
  } else if (count === 1) {
    result = tokenValue.one;
  } else {
    result = tokenValue.other.replace("{{count}}", count.toString());
  }
  if (options == null ? void 0 : options.addSuffix) {
    if (options.comparison && options.comparison > 0) {
      return "in " + result;
    } else {
      return result + " ago";
    }
  }
  return result;
};
function buildFormatLongFn(args) {
  return (options = {}) => {
    const width = options.width ? String(options.width) : args.defaultWidth;
    const format2 = args.formats[width] || args.formats[args.defaultWidth];
    return format2;
  };
}
const dateFormats$1 = {
  full: "EEEE, MMMM do, y",
  long: "MMMM do, y",
  medium: "MMM d, y",
  short: "MM/dd/yyyy"
};
const timeFormats$1 = {
  full: "h:mm:ss a zzzz",
  long: "h:mm:ss a z",
  medium: "h:mm:ss a",
  short: "h:mm a"
};
const dateTimeFormats$1 = {
  full: "{{date}} 'at' {{time}}",
  long: "{{date}} 'at' {{time}}",
  medium: "{{date}}, {{time}}",
  short: "{{date}}, {{time}}"
};
const formatLong$1 = {
  date: buildFormatLongFn({
    formats: dateFormats$1,
    defaultWidth: "full"
  }),
  time: buildFormatLongFn({
    formats: timeFormats$1,
    defaultWidth: "full"
  }),
  dateTime: buildFormatLongFn({
    formats: dateTimeFormats$1,
    defaultWidth: "full"
  })
};
const formatRelativeLocale$1 = {
  lastWeek: "'last' eeee 'at' p",
  yesterday: "'yesterday at' p",
  today: "'today at' p",
  tomorrow: "'tomorrow at' p",
  nextWeek: "eeee 'at' p",
  other: "P"
};
const formatRelative$1 = (token, _date, _baseDate, _options) => formatRelativeLocale$1[token];
function buildLocalizeFn(args) {
  return (value, options) => {
    const context = (options == null ? void 0 : options.context) ? String(options.context) : "standalone";
    let valuesArray;
    if (context === "formatting" && args.formattingValues) {
      const defaultWidth = args.defaultFormattingWidth || args.defaultWidth;
      const width = (options == null ? void 0 : options.width) ? String(options.width) : defaultWidth;
      valuesArray = args.formattingValues[width] || args.formattingValues[defaultWidth];
    } else {
      const defaultWidth = args.defaultWidth;
      const width = (options == null ? void 0 : options.width) ? String(options.width) : args.defaultWidth;
      valuesArray = args.values[width] || args.values[defaultWidth];
    }
    const index = args.argumentCallback ? args.argumentCallback(value) : value;
    return valuesArray[index];
  };
}
const eraValues$1 = {
  narrow: ["B", "A"],
  abbreviated: ["BC", "AD"],
  wide: ["Before Christ", "Anno Domini"]
};
const quarterValues$1 = {
  narrow: ["1", "2", "3", "4"],
  abbreviated: ["Q1", "Q2", "Q3", "Q4"],
  wide: ["1st quarter", "2nd quarter", "3rd quarter", "4th quarter"]
};
const monthValues$1 = {
  narrow: ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"],
  abbreviated: [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec"
  ],
  wide: [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ]
};
const dayValues$1 = {
  narrow: ["S", "M", "T", "W", "T", "F", "S"],
  short: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
  abbreviated: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  wide: [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ]
};
const dayPeriodValues$1 = {
  narrow: {
    am: "a",
    pm: "p",
    midnight: "mi",
    noon: "n",
    morning: "morning",
    afternoon: "afternoon",
    evening: "evening",
    night: "night"
  },
  abbreviated: {
    am: "AM",
    pm: "PM",
    midnight: "midnight",
    noon: "noon",
    morning: "morning",
    afternoon: "afternoon",
    evening: "evening",
    night: "night"
  },
  wide: {
    am: "a.m.",
    pm: "p.m.",
    midnight: "midnight",
    noon: "noon",
    morning: "morning",
    afternoon: "afternoon",
    evening: "evening",
    night: "night"
  }
};
const formattingDayPeriodValues$1 = {
  narrow: {
    am: "a",
    pm: "p",
    midnight: "mi",
    noon: "n",
    morning: "in the morning",
    afternoon: "in the afternoon",
    evening: "in the evening",
    night: "at night"
  },
  abbreviated: {
    am: "AM",
    pm: "PM",
    midnight: "midnight",
    noon: "noon",
    morning: "in the morning",
    afternoon: "in the afternoon",
    evening: "in the evening",
    night: "at night"
  },
  wide: {
    am: "a.m.",
    pm: "p.m.",
    midnight: "midnight",
    noon: "noon",
    morning: "in the morning",
    afternoon: "in the afternoon",
    evening: "in the evening",
    night: "at night"
  }
};
const ordinalNumber$1 = (dirtyNumber, _options) => {
  const number = Number(dirtyNumber);
  const rem100 = number % 100;
  if (rem100 > 20 || rem100 < 10) {
    switch (rem100 % 10) {
      case 1:
        return number + "st";
      case 2:
        return number + "nd";
      case 3:
        return number + "rd";
    }
  }
  return number + "th";
};
const localize$1 = {
  ordinalNumber: ordinalNumber$1,
  era: buildLocalizeFn({
    values: eraValues$1,
    defaultWidth: "wide"
  }),
  quarter: buildLocalizeFn({
    values: quarterValues$1,
    defaultWidth: "wide",
    argumentCallback: (quarter) => quarter - 1
  }),
  month: buildLocalizeFn({
    values: monthValues$1,
    defaultWidth: "wide"
  }),
  day: buildLocalizeFn({
    values: dayValues$1,
    defaultWidth: "wide"
  }),
  dayPeriod: buildLocalizeFn({
    values: dayPeriodValues$1,
    defaultWidth: "wide",
    formattingValues: formattingDayPeriodValues$1,
    defaultFormattingWidth: "wide"
  })
};
function buildMatchFn(args) {
  return (string, options = {}) => {
    const width = options.width;
    const matchPattern = width && args.matchPatterns[width] || args.matchPatterns[args.defaultMatchWidth];
    const matchResult = string.match(matchPattern);
    if (!matchResult) {
      return null;
    }
    const matchedString = matchResult[0];
    const parsePatterns = width && args.parsePatterns[width] || args.parsePatterns[args.defaultParseWidth];
    const key = Array.isArray(parsePatterns) ? findIndex(parsePatterns, (pattern) => pattern.test(matchedString)) : (
      // [TODO] -- I challenge you to fix the type
      findKey(parsePatterns, (pattern) => pattern.test(matchedString))
    );
    let value;
    value = args.valueCallback ? args.valueCallback(key) : key;
    value = options.valueCallback ? (
      // [TODO] -- I challenge you to fix the type
      options.valueCallback(value)
    ) : value;
    const rest = string.slice(matchedString.length);
    return { value, rest };
  };
}
function findKey(object, predicate) {
  for (const key in object) {
    if (Object.prototype.hasOwnProperty.call(object, key) && predicate(object[key])) {
      return key;
    }
  }
  return void 0;
}
function findIndex(array, predicate) {
  for (let key = 0; key < array.length; key++) {
    if (predicate(array[key])) {
      return key;
    }
  }
  return void 0;
}
function buildMatchPatternFn(args) {
  return (string, options = {}) => {
    const matchResult = string.match(args.matchPattern);
    if (!matchResult) return null;
    const matchedString = matchResult[0];
    const parseResult = string.match(args.parsePattern);
    if (!parseResult) return null;
    let value = args.valueCallback ? args.valueCallback(parseResult[0]) : parseResult[0];
    value = options.valueCallback ? options.valueCallback(value) : value;
    const rest = string.slice(matchedString.length);
    return { value, rest };
  };
}
const matchOrdinalNumberPattern$1 = /^(\d+)(th|st|nd|rd)?/i;
const parseOrdinalNumberPattern$1 = /\d+/i;
const matchEraPatterns$1 = {
  narrow: /^(b|a)/i,
  abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
  wide: /^(before christ|before common era|anno domini|common era)/i
};
const parseEraPatterns$1 = {
  any: [/^b/i, /^(a|c)/i]
};
const matchQuarterPatterns$1 = {
  narrow: /^[1234]/i,
  abbreviated: /^q[1234]/i,
  wide: /^[1234](th|st|nd|rd)? quarter/i
};
const parseQuarterPatterns$1 = {
  any: [/1/i, /2/i, /3/i, /4/i]
};
const matchMonthPatterns$1 = {
  narrow: /^[jfmasond]/i,
  abbreviated: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
  wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i
};
const parseMonthPatterns$1 = {
  narrow: [
    /^j/i,
    /^f/i,
    /^m/i,
    /^a/i,
    /^m/i,
    /^j/i,
    /^j/i,
    /^a/i,
    /^s/i,
    /^o/i,
    /^n/i,
    /^d/i
  ],
  any: [
    /^ja/i,
    /^f/i,
    /^mar/i,
    /^ap/i,
    /^may/i,
    /^jun/i,
    /^jul/i,
    /^au/i,
    /^s/i,
    /^o/i,
    /^n/i,
    /^d/i
  ]
};
const matchDayPatterns$1 = {
  narrow: /^[smtwf]/i,
  short: /^(su|mo|tu|we|th|fr|sa)/i,
  abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,
  wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i
};
const parseDayPatterns$1 = {
  narrow: [/^s/i, /^m/i, /^t/i, /^w/i, /^t/i, /^f/i, /^s/i],
  any: [/^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i]
};
const matchDayPeriodPatterns$1 = {
  narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
  any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i
};
const parseDayPeriodPatterns$1 = {
  any: {
    am: /^a/i,
    pm: /^p/i,
    midnight: /^mi/i,
    noon: /^no/i,
    morning: /morning/i,
    afternoon: /afternoon/i,
    evening: /evening/i,
    night: /night/i
  }
};
const match$1 = {
  ordinalNumber: buildMatchPatternFn({
    matchPattern: matchOrdinalNumberPattern$1,
    parsePattern: parseOrdinalNumberPattern$1,
    valueCallback: (value) => parseInt(value, 10)
  }),
  era: buildMatchFn({
    matchPatterns: matchEraPatterns$1,
    defaultMatchWidth: "wide",
    parsePatterns: parseEraPatterns$1,
    defaultParseWidth: "any"
  }),
  quarter: buildMatchFn({
    matchPatterns: matchQuarterPatterns$1,
    defaultMatchWidth: "wide",
    parsePatterns: parseQuarterPatterns$1,
    defaultParseWidth: "any",
    valueCallback: (index) => index + 1
  }),
  month: buildMatchFn({
    matchPatterns: matchMonthPatterns$1,
    defaultMatchWidth: "wide",
    parsePatterns: parseMonthPatterns$1,
    defaultParseWidth: "any"
  }),
  day: buildMatchFn({
    matchPatterns: matchDayPatterns$1,
    defaultMatchWidth: "wide",
    parsePatterns: parseDayPatterns$1,
    defaultParseWidth: "any"
  }),
  dayPeriod: buildMatchFn({
    matchPatterns: matchDayPeriodPatterns$1,
    defaultMatchWidth: "any",
    parsePatterns: parseDayPeriodPatterns$1,
    defaultParseWidth: "any"
  })
};
const enUS = {
  code: "en-US",
  formatDistance: formatDistance$2,
  formatLong: formatLong$1,
  formatRelative: formatRelative$1,
  localize: localize$1,
  match: match$1,
  options: {
    weekStartsOn: 0,
    firstWeekContainsDate: 1
  }
};
function getDayOfYear(date, options) {
  const _date = toDate(date, options == null ? void 0 : options.in);
  const diff = differenceInCalendarDays(_date, startOfYear(_date));
  const dayOfYear = diff + 1;
  return dayOfYear;
}
function getISOWeek(date, options) {
  const _date = toDate(date, options == null ? void 0 : options.in);
  const diff = +startOfISOWeek(_date) - +startOfISOWeekYear(_date);
  return Math.round(diff / millisecondsInWeek) + 1;
}
function getWeekYear(date, options) {
  var _a, _b, _c, _d;
  const _date = toDate(date, options == null ? void 0 : options.in);
  const year = _date.getFullYear();
  const defaultOptions2 = getDefaultOptions();
  const firstWeekContainsDate = (options == null ? void 0 : options.firstWeekContainsDate) ?? ((_b = (_a = options == null ? void 0 : options.locale) == null ? void 0 : _a.options) == null ? void 0 : _b.firstWeekContainsDate) ?? defaultOptions2.firstWeekContainsDate ?? ((_d = (_c = defaultOptions2.locale) == null ? void 0 : _c.options) == null ? void 0 : _d.firstWeekContainsDate) ?? 1;
  const firstWeekOfNextYear = constructFrom((options == null ? void 0 : options.in) || date, 0);
  firstWeekOfNextYear.setFullYear(year + 1, 0, firstWeekContainsDate);
  firstWeekOfNextYear.setHours(0, 0, 0, 0);
  const startOfNextYear = startOfWeek(firstWeekOfNextYear, options);
  const firstWeekOfThisYear = constructFrom((options == null ? void 0 : options.in) || date, 0);
  firstWeekOfThisYear.setFullYear(year, 0, firstWeekContainsDate);
  firstWeekOfThisYear.setHours(0, 0, 0, 0);
  const startOfThisYear = startOfWeek(firstWeekOfThisYear, options);
  if (+_date >= +startOfNextYear) {
    return year + 1;
  } else if (+_date >= +startOfThisYear) {
    return year;
  } else {
    return year - 1;
  }
}
function startOfWeekYear(date, options) {
  var _a, _b, _c, _d;
  const defaultOptions2 = getDefaultOptions();
  const firstWeekContainsDate = (options == null ? void 0 : options.firstWeekContainsDate) ?? ((_b = (_a = options == null ? void 0 : options.locale) == null ? void 0 : _a.options) == null ? void 0 : _b.firstWeekContainsDate) ?? defaultOptions2.firstWeekContainsDate ?? ((_d = (_c = defaultOptions2.locale) == null ? void 0 : _c.options) == null ? void 0 : _d.firstWeekContainsDate) ?? 1;
  const year = getWeekYear(date, options);
  const firstWeek = constructFrom((options == null ? void 0 : options.in) || date, 0);
  firstWeek.setFullYear(year, 0, firstWeekContainsDate);
  firstWeek.setHours(0, 0, 0, 0);
  const _date = startOfWeek(firstWeek, options);
  return _date;
}
function getWeek(date, options) {
  const _date = toDate(date, options == null ? void 0 : options.in);
  const diff = +startOfWeek(_date, options) - +startOfWeekYear(_date, options);
  return Math.round(diff / millisecondsInWeek) + 1;
}
function addLeadingZeros(number, targetLength) {
  const sign = number < 0 ? "-" : "";
  const output = Math.abs(number).toString().padStart(targetLength, "0");
  return sign + output;
}
const lightFormatters = {
  // Year
  y(date, token) {
    const signedYear = date.getFullYear();
    const year = signedYear > 0 ? signedYear : 1 - signedYear;
    return addLeadingZeros(token === "yy" ? year % 100 : year, token.length);
  },
  // Month
  M(date, token) {
    const month = date.getMonth();
    return token === "M" ? String(month + 1) : addLeadingZeros(month + 1, 2);
  },
  // Day of the month
  d(date, token) {
    return addLeadingZeros(date.getDate(), token.length);
  },
  // AM or PM
  a(date, token) {
    const dayPeriodEnumValue = date.getHours() / 12 >= 1 ? "pm" : "am";
    switch (token) {
      case "a":
      case "aa":
        return dayPeriodEnumValue.toUpperCase();
      case "aaa":
        return dayPeriodEnumValue;
      case "aaaaa":
        return dayPeriodEnumValue[0];
      case "aaaa":
      default:
        return dayPeriodEnumValue === "am" ? "a.m." : "p.m.";
    }
  },
  // Hour [1-12]
  h(date, token) {
    return addLeadingZeros(date.getHours() % 12 || 12, token.length);
  },
  // Hour [0-23]
  H(date, token) {
    return addLeadingZeros(date.getHours(), token.length);
  },
  // Minute
  m(date, token) {
    return addLeadingZeros(date.getMinutes(), token.length);
  },
  // Second
  s(date, token) {
    return addLeadingZeros(date.getSeconds(), token.length);
  },
  // Fraction of second
  S(date, token) {
    const numberOfDigits = token.length;
    const milliseconds = date.getMilliseconds();
    const fractionalSeconds = Math.trunc(
      milliseconds * Math.pow(10, numberOfDigits - 3)
    );
    return addLeadingZeros(fractionalSeconds, token.length);
  }
};
const dayPeriodEnum = {
  midnight: "midnight",
  noon: "noon",
  morning: "morning",
  afternoon: "afternoon",
  evening: "evening",
  night: "night"
};
const formatters = {
  // Era
  G: function(date, token, localize2) {
    const era = date.getFullYear() > 0 ? 1 : 0;
    switch (token) {
      // AD, BC
      case "G":
      case "GG":
      case "GGG":
        return localize2.era(era, { width: "abbreviated" });
      // A, B
      case "GGGGG":
        return localize2.era(era, { width: "narrow" });
      // Anno Domini, Before Christ
      case "GGGG":
      default:
        return localize2.era(era, { width: "wide" });
    }
  },
  // Year
  y: function(date, token, localize2) {
    if (token === "yo") {
      const signedYear = date.getFullYear();
      const year = signedYear > 0 ? signedYear : 1 - signedYear;
      return localize2.ordinalNumber(year, { unit: "year" });
    }
    return lightFormatters.y(date, token);
  },
  // Local week-numbering year
  Y: function(date, token, localize2, options) {
    const signedWeekYear = getWeekYear(date, options);
    const weekYear = signedWeekYear > 0 ? signedWeekYear : 1 - signedWeekYear;
    if (token === "YY") {
      const twoDigitYear = weekYear % 100;
      return addLeadingZeros(twoDigitYear, 2);
    }
    if (token === "Yo") {
      return localize2.ordinalNumber(weekYear, { unit: "year" });
    }
    return addLeadingZeros(weekYear, token.length);
  },
  // ISO week-numbering year
  R: function(date, token) {
    const isoWeekYear = getISOWeekYear(date);
    return addLeadingZeros(isoWeekYear, token.length);
  },
  // Extended year. This is a single number designating the year of this calendar system.
  // The main difference between `y` and `u` localizers are B.C. years:
  // | Year | `y` | `u` |
  // |------|-----|-----|
  // | AC 1 |   1 |   1 |
  // | BC 1 |   1 |   0 |
  // | BC 2 |   2 |  -1 |
  // Also `yy` always returns the last two digits of a year,
  // while `uu` pads single digit years to 2 characters and returns other years unchanged.
  u: function(date, token) {
    const year = date.getFullYear();
    return addLeadingZeros(year, token.length);
  },
  // Quarter
  Q: function(date, token, localize2) {
    const quarter = Math.ceil((date.getMonth() + 1) / 3);
    switch (token) {
      // 1, 2, 3, 4
      case "Q":
        return String(quarter);
      // 01, 02, 03, 04
      case "QQ":
        return addLeadingZeros(quarter, 2);
      // 1st, 2nd, 3rd, 4th
      case "Qo":
        return localize2.ordinalNumber(quarter, { unit: "quarter" });
      // Q1, Q2, Q3, Q4
      case "QQQ":
        return localize2.quarter(quarter, {
          width: "abbreviated",
          context: "formatting"
        });
      // 1, 2, 3, 4 (narrow quarter; could be not numerical)
      case "QQQQQ":
        return localize2.quarter(quarter, {
          width: "narrow",
          context: "formatting"
        });
      // 1st quarter, 2nd quarter, ...
      case "QQQQ":
      default:
        return localize2.quarter(quarter, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // Stand-alone quarter
  q: function(date, token, localize2) {
    const quarter = Math.ceil((date.getMonth() + 1) / 3);
    switch (token) {
      // 1, 2, 3, 4
      case "q":
        return String(quarter);
      // 01, 02, 03, 04
      case "qq":
        return addLeadingZeros(quarter, 2);
      // 1st, 2nd, 3rd, 4th
      case "qo":
        return localize2.ordinalNumber(quarter, { unit: "quarter" });
      // Q1, Q2, Q3, Q4
      case "qqq":
        return localize2.quarter(quarter, {
          width: "abbreviated",
          context: "standalone"
        });
      // 1, 2, 3, 4 (narrow quarter; could be not numerical)
      case "qqqqq":
        return localize2.quarter(quarter, {
          width: "narrow",
          context: "standalone"
        });
      // 1st quarter, 2nd quarter, ...
      case "qqqq":
      default:
        return localize2.quarter(quarter, {
          width: "wide",
          context: "standalone"
        });
    }
  },
  // Month
  M: function(date, token, localize2) {
    const month = date.getMonth();
    switch (token) {
      case "M":
      case "MM":
        return lightFormatters.M(date, token);
      // 1st, 2nd, ..., 12th
      case "Mo":
        return localize2.ordinalNumber(month + 1, { unit: "month" });
      // Jan, Feb, ..., Dec
      case "MMM":
        return localize2.month(month, {
          width: "abbreviated",
          context: "formatting"
        });
      // J, F, ..., D
      case "MMMMM":
        return localize2.month(month, {
          width: "narrow",
          context: "formatting"
        });
      // January, February, ..., December
      case "MMMM":
      default:
        return localize2.month(month, { width: "wide", context: "formatting" });
    }
  },
  // Stand-alone month
  L: function(date, token, localize2) {
    const month = date.getMonth();
    switch (token) {
      // 1, 2, ..., 12
      case "L":
        return String(month + 1);
      // 01, 02, ..., 12
      case "LL":
        return addLeadingZeros(month + 1, 2);
      // 1st, 2nd, ..., 12th
      case "Lo":
        return localize2.ordinalNumber(month + 1, { unit: "month" });
      // Jan, Feb, ..., Dec
      case "LLL":
        return localize2.month(month, {
          width: "abbreviated",
          context: "standalone"
        });
      // J, F, ..., D
      case "LLLLL":
        return localize2.month(month, {
          width: "narrow",
          context: "standalone"
        });
      // January, February, ..., December
      case "LLLL":
      default:
        return localize2.month(month, { width: "wide", context: "standalone" });
    }
  },
  // Local week of year
  w: function(date, token, localize2, options) {
    const week = getWeek(date, options);
    if (token === "wo") {
      return localize2.ordinalNumber(week, { unit: "week" });
    }
    return addLeadingZeros(week, token.length);
  },
  // ISO week of year
  I: function(date, token, localize2) {
    const isoWeek = getISOWeek(date);
    if (token === "Io") {
      return localize2.ordinalNumber(isoWeek, { unit: "week" });
    }
    return addLeadingZeros(isoWeek, token.length);
  },
  // Day of the month
  d: function(date, token, localize2) {
    if (token === "do") {
      return localize2.ordinalNumber(date.getDate(), { unit: "date" });
    }
    return lightFormatters.d(date, token);
  },
  // Day of year
  D: function(date, token, localize2) {
    const dayOfYear = getDayOfYear(date);
    if (token === "Do") {
      return localize2.ordinalNumber(dayOfYear, { unit: "dayOfYear" });
    }
    return addLeadingZeros(dayOfYear, token.length);
  },
  // Day of week
  E: function(date, token, localize2) {
    const dayOfWeek = date.getDay();
    switch (token) {
      // Tue
      case "E":
      case "EE":
      case "EEE":
        return localize2.day(dayOfWeek, {
          width: "abbreviated",
          context: "formatting"
        });
      // T
      case "EEEEE":
        return localize2.day(dayOfWeek, {
          width: "narrow",
          context: "formatting"
        });
      // Tu
      case "EEEEEE":
        return localize2.day(dayOfWeek, {
          width: "short",
          context: "formatting"
        });
      // Tuesday
      case "EEEE":
      default:
        return localize2.day(dayOfWeek, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // Local day of week
  e: function(date, token, localize2, options) {
    const dayOfWeek = date.getDay();
    const localDayOfWeek = (dayOfWeek - options.weekStartsOn + 8) % 7 || 7;
    switch (token) {
      // Numerical value (Nth day of week with current locale or weekStartsOn)
      case "e":
        return String(localDayOfWeek);
      // Padded numerical value
      case "ee":
        return addLeadingZeros(localDayOfWeek, 2);
      // 1st, 2nd, ..., 7th
      case "eo":
        return localize2.ordinalNumber(localDayOfWeek, { unit: "day" });
      case "eee":
        return localize2.day(dayOfWeek, {
          width: "abbreviated",
          context: "formatting"
        });
      // T
      case "eeeee":
        return localize2.day(dayOfWeek, {
          width: "narrow",
          context: "formatting"
        });
      // Tu
      case "eeeeee":
        return localize2.day(dayOfWeek, {
          width: "short",
          context: "formatting"
        });
      // Tuesday
      case "eeee":
      default:
        return localize2.day(dayOfWeek, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // Stand-alone local day of week
  c: function(date, token, localize2, options) {
    const dayOfWeek = date.getDay();
    const localDayOfWeek = (dayOfWeek - options.weekStartsOn + 8) % 7 || 7;
    switch (token) {
      // Numerical value (same as in `e`)
      case "c":
        return String(localDayOfWeek);
      // Padded numerical value
      case "cc":
        return addLeadingZeros(localDayOfWeek, token.length);
      // 1st, 2nd, ..., 7th
      case "co":
        return localize2.ordinalNumber(localDayOfWeek, { unit: "day" });
      case "ccc":
        return localize2.day(dayOfWeek, {
          width: "abbreviated",
          context: "standalone"
        });
      // T
      case "ccccc":
        return localize2.day(dayOfWeek, {
          width: "narrow",
          context: "standalone"
        });
      // Tu
      case "cccccc":
        return localize2.day(dayOfWeek, {
          width: "short",
          context: "standalone"
        });
      // Tuesday
      case "cccc":
      default:
        return localize2.day(dayOfWeek, {
          width: "wide",
          context: "standalone"
        });
    }
  },
  // ISO day of week
  i: function(date, token, localize2) {
    const dayOfWeek = date.getDay();
    const isoDayOfWeek = dayOfWeek === 0 ? 7 : dayOfWeek;
    switch (token) {
      // 2
      case "i":
        return String(isoDayOfWeek);
      // 02
      case "ii":
        return addLeadingZeros(isoDayOfWeek, token.length);
      // 2nd
      case "io":
        return localize2.ordinalNumber(isoDayOfWeek, { unit: "day" });
      // Tue
      case "iii":
        return localize2.day(dayOfWeek, {
          width: "abbreviated",
          context: "formatting"
        });
      // T
      case "iiiii":
        return localize2.day(dayOfWeek, {
          width: "narrow",
          context: "formatting"
        });
      // Tu
      case "iiiiii":
        return localize2.day(dayOfWeek, {
          width: "short",
          context: "formatting"
        });
      // Tuesday
      case "iiii":
      default:
        return localize2.day(dayOfWeek, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // AM or PM
  a: function(date, token, localize2) {
    const hours = date.getHours();
    const dayPeriodEnumValue = hours / 12 >= 1 ? "pm" : "am";
    switch (token) {
      case "a":
      case "aa":
        return localize2.dayPeriod(dayPeriodEnumValue, {
          width: "abbreviated",
          context: "formatting"
        });
      case "aaa":
        return localize2.dayPeriod(dayPeriodEnumValue, {
          width: "abbreviated",
          context: "formatting"
        }).toLowerCase();
      case "aaaaa":
        return localize2.dayPeriod(dayPeriodEnumValue, {
          width: "narrow",
          context: "formatting"
        });
      case "aaaa":
      default:
        return localize2.dayPeriod(dayPeriodEnumValue, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // AM, PM, midnight, noon
  b: function(date, token, localize2) {
    const hours = date.getHours();
    let dayPeriodEnumValue;
    if (hours === 12) {
      dayPeriodEnumValue = dayPeriodEnum.noon;
    } else if (hours === 0) {
      dayPeriodEnumValue = dayPeriodEnum.midnight;
    } else {
      dayPeriodEnumValue = hours / 12 >= 1 ? "pm" : "am";
    }
    switch (token) {
      case "b":
      case "bb":
        return localize2.dayPeriod(dayPeriodEnumValue, {
          width: "abbreviated",
          context: "formatting"
        });
      case "bbb":
        return localize2.dayPeriod(dayPeriodEnumValue, {
          width: "abbreviated",
          context: "formatting"
        }).toLowerCase();
      case "bbbbb":
        return localize2.dayPeriod(dayPeriodEnumValue, {
          width: "narrow",
          context: "formatting"
        });
      case "bbbb":
      default:
        return localize2.dayPeriod(dayPeriodEnumValue, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // in the morning, in the afternoon, in the evening, at night
  B: function(date, token, localize2) {
    const hours = date.getHours();
    let dayPeriodEnumValue;
    if (hours >= 17) {
      dayPeriodEnumValue = dayPeriodEnum.evening;
    } else if (hours >= 12) {
      dayPeriodEnumValue = dayPeriodEnum.afternoon;
    } else if (hours >= 4) {
      dayPeriodEnumValue = dayPeriodEnum.morning;
    } else {
      dayPeriodEnumValue = dayPeriodEnum.night;
    }
    switch (token) {
      case "B":
      case "BB":
      case "BBB":
        return localize2.dayPeriod(dayPeriodEnumValue, {
          width: "abbreviated",
          context: "formatting"
        });
      case "BBBBB":
        return localize2.dayPeriod(dayPeriodEnumValue, {
          width: "narrow",
          context: "formatting"
        });
      case "BBBB":
      default:
        return localize2.dayPeriod(dayPeriodEnumValue, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // Hour [1-12]
  h: function(date, token, localize2) {
    if (token === "ho") {
      let hours = date.getHours() % 12;
      if (hours === 0) hours = 12;
      return localize2.ordinalNumber(hours, { unit: "hour" });
    }
    return lightFormatters.h(date, token);
  },
  // Hour [0-23]
  H: function(date, token, localize2) {
    if (token === "Ho") {
      return localize2.ordinalNumber(date.getHours(), { unit: "hour" });
    }
    return lightFormatters.H(date, token);
  },
  // Hour [0-11]
  K: function(date, token, localize2) {
    const hours = date.getHours() % 12;
    if (token === "Ko") {
      return localize2.ordinalNumber(hours, { unit: "hour" });
    }
    return addLeadingZeros(hours, token.length);
  },
  // Hour [1-24]
  k: function(date, token, localize2) {
    let hours = date.getHours();
    if (hours === 0) hours = 24;
    if (token === "ko") {
      return localize2.ordinalNumber(hours, { unit: "hour" });
    }
    return addLeadingZeros(hours, token.length);
  },
  // Minute
  m: function(date, token, localize2) {
    if (token === "mo") {
      return localize2.ordinalNumber(date.getMinutes(), { unit: "minute" });
    }
    return lightFormatters.m(date, token);
  },
  // Second
  s: function(date, token, localize2) {
    if (token === "so") {
      return localize2.ordinalNumber(date.getSeconds(), { unit: "second" });
    }
    return lightFormatters.s(date, token);
  },
  // Fraction of second
  S: function(date, token) {
    return lightFormatters.S(date, token);
  },
  // Timezone (ISO-8601. If offset is 0, output is always `'Z'`)
  X: function(date, token, _localize) {
    const timezoneOffset = date.getTimezoneOffset();
    if (timezoneOffset === 0) {
      return "Z";
    }
    switch (token) {
      // Hours and optional minutes
      case "X":
        return formatTimezoneWithOptionalMinutes(timezoneOffset);
      // Hours, minutes and optional seconds without `:` delimiter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `XX`
      case "XXXX":
      case "XX":
        return formatTimezone(timezoneOffset);
      // Hours, minutes and optional seconds with `:` delimiter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `XXX`
      case "XXXXX":
      case "XXX":
      // Hours and minutes with `:` delimiter
      default:
        return formatTimezone(timezoneOffset, ":");
    }
  },
  // Timezone (ISO-8601. If offset is 0, output is `'+00:00'` or equivalent)
  x: function(date, token, _localize) {
    const timezoneOffset = date.getTimezoneOffset();
    switch (token) {
      // Hours and optional minutes
      case "x":
        return formatTimezoneWithOptionalMinutes(timezoneOffset);
      // Hours, minutes and optional seconds without `:` delimiter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `xx`
      case "xxxx":
      case "xx":
        return formatTimezone(timezoneOffset);
      // Hours, minutes and optional seconds with `:` delimiter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `xxx`
      case "xxxxx":
      case "xxx":
      // Hours and minutes with `:` delimiter
      default:
        return formatTimezone(timezoneOffset, ":");
    }
  },
  // Timezone (GMT)
  O: function(date, token, _localize) {
    const timezoneOffset = date.getTimezoneOffset();
    switch (token) {
      // Short
      case "O":
      case "OO":
      case "OOO":
        return "GMT" + formatTimezoneShort(timezoneOffset, ":");
      // Long
      case "OOOO":
      default:
        return "GMT" + formatTimezone(timezoneOffset, ":");
    }
  },
  // Timezone (specific non-location)
  z: function(date, token, _localize) {
    const timezoneOffset = date.getTimezoneOffset();
    switch (token) {
      // Short
      case "z":
      case "zz":
      case "zzz":
        return "GMT" + formatTimezoneShort(timezoneOffset, ":");
      // Long
      case "zzzz":
      default:
        return "GMT" + formatTimezone(timezoneOffset, ":");
    }
  },
  // Seconds timestamp
  t: function(date, token, _localize) {
    const timestamp = Math.trunc(+date / 1e3);
    return addLeadingZeros(timestamp, token.length);
  },
  // Milliseconds timestamp
  T: function(date, token, _localize) {
    return addLeadingZeros(+date, token.length);
  }
};
function formatTimezoneShort(offset, delimiter = "") {
  const sign = offset > 0 ? "-" : "+";
  const absOffset = Math.abs(offset);
  const hours = Math.trunc(absOffset / 60);
  const minutes = absOffset % 60;
  if (minutes === 0) {
    return sign + String(hours);
  }
  return sign + String(hours) + delimiter + addLeadingZeros(minutes, 2);
}
function formatTimezoneWithOptionalMinutes(offset, delimiter) {
  if (offset % 60 === 0) {
    const sign = offset > 0 ? "-" : "+";
    return sign + addLeadingZeros(Math.abs(offset) / 60, 2);
  }
  return formatTimezone(offset, delimiter);
}
function formatTimezone(offset, delimiter = "") {
  const sign = offset > 0 ? "-" : "+";
  const absOffset = Math.abs(offset);
  const hours = addLeadingZeros(Math.trunc(absOffset / 60), 2);
  const minutes = addLeadingZeros(absOffset % 60, 2);
  return sign + hours + delimiter + minutes;
}
const dateLongFormatter = (pattern, formatLong2) => {
  switch (pattern) {
    case "P":
      return formatLong2.date({ width: "short" });
    case "PP":
      return formatLong2.date({ width: "medium" });
    case "PPP":
      return formatLong2.date({ width: "long" });
    case "PPPP":
    default:
      return formatLong2.date({ width: "full" });
  }
};
const timeLongFormatter = (pattern, formatLong2) => {
  switch (pattern) {
    case "p":
      return formatLong2.time({ width: "short" });
    case "pp":
      return formatLong2.time({ width: "medium" });
    case "ppp":
      return formatLong2.time({ width: "long" });
    case "pppp":
    default:
      return formatLong2.time({ width: "full" });
  }
};
const dateTimeLongFormatter = (pattern, formatLong2) => {
  const matchResult = pattern.match(/(P+)(p+)?/) || [];
  const datePattern = matchResult[1];
  const timePattern = matchResult[2];
  if (!timePattern) {
    return dateLongFormatter(pattern, formatLong2);
  }
  let dateTimeFormat;
  switch (datePattern) {
    case "P":
      dateTimeFormat = formatLong2.dateTime({ width: "short" });
      break;
    case "PP":
      dateTimeFormat = formatLong2.dateTime({ width: "medium" });
      break;
    case "PPP":
      dateTimeFormat = formatLong2.dateTime({ width: "long" });
      break;
    case "PPPP":
    default:
      dateTimeFormat = formatLong2.dateTime({ width: "full" });
      break;
  }
  return dateTimeFormat.replace("{{date}}", dateLongFormatter(datePattern, formatLong2)).replace("{{time}}", timeLongFormatter(timePattern, formatLong2));
};
const longFormatters = {
  p: timeLongFormatter,
  P: dateTimeLongFormatter
};
const dayOfYearTokenRE = /^D+$/;
const weekYearTokenRE = /^Y+$/;
const throwTokens = ["D", "DD", "YY", "YYYY"];
function isProtectedDayOfYearToken(token) {
  return dayOfYearTokenRE.test(token);
}
function isProtectedWeekYearToken(token) {
  return weekYearTokenRE.test(token);
}
function warnOrThrowProtectedError(token, format2, input) {
  const _message = message(token, format2, input);
  console.warn(_message);
  if (throwTokens.includes(token)) throw new RangeError(_message);
}
function message(token, format2, input) {
  const subject = token[0] === "Y" ? "years" : "days of the month";
  return `Use \`${token.toLowerCase()}\` instead of \`${token}\` (in \`${format2}\`) for formatting ${subject} to the input \`${input}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`;
}
const formattingTokensRegExp = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g;
const longFormattingTokensRegExp = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g;
const escapedStringRegExp = /^'([^]*?)'?$/;
const doubleQuoteRegExp = /''/g;
const unescapedLatinCharacterRegExp = /[a-zA-Z]/;
function format(date, formatStr, options) {
  var _a, _b, _c, _d, _e, _f, _g, _h;
  const defaultOptions2 = getDefaultOptions();
  const locale = (options == null ? void 0 : options.locale) ?? defaultOptions2.locale ?? enUS;
  const firstWeekContainsDate = (options == null ? void 0 : options.firstWeekContainsDate) ?? ((_b = (_a = options == null ? void 0 : options.locale) == null ? void 0 : _a.options) == null ? void 0 : _b.firstWeekContainsDate) ?? defaultOptions2.firstWeekContainsDate ?? ((_d = (_c = defaultOptions2.locale) == null ? void 0 : _c.options) == null ? void 0 : _d.firstWeekContainsDate) ?? 1;
  const weekStartsOn = (options == null ? void 0 : options.weekStartsOn) ?? ((_f = (_e = options == null ? void 0 : options.locale) == null ? void 0 : _e.options) == null ? void 0 : _f.weekStartsOn) ?? defaultOptions2.weekStartsOn ?? ((_h = (_g = defaultOptions2.locale) == null ? void 0 : _g.options) == null ? void 0 : _h.weekStartsOn) ?? 0;
  const originalDate = toDate(date, options == null ? void 0 : options.in);
  if (!isValid(originalDate)) {
    throw new RangeError("Invalid time value");
  }
  let parts = formatStr.match(longFormattingTokensRegExp).map((substring) => {
    const firstCharacter = substring[0];
    if (firstCharacter === "p" || firstCharacter === "P") {
      const longFormatter = longFormatters[firstCharacter];
      return longFormatter(substring, locale.formatLong);
    }
    return substring;
  }).join("").match(formattingTokensRegExp).map((substring) => {
    if (substring === "''") {
      return { isToken: false, value: "'" };
    }
    const firstCharacter = substring[0];
    if (firstCharacter === "'") {
      return { isToken: false, value: cleanEscapedString(substring) };
    }
    if (formatters[firstCharacter]) {
      return { isToken: true, value: substring };
    }
    if (firstCharacter.match(unescapedLatinCharacterRegExp)) {
      throw new RangeError(
        "Format string contains an unescaped latin alphabet character `" + firstCharacter + "`"
      );
    }
    return { isToken: false, value: substring };
  });
  if (locale.localize.preprocessor) {
    parts = locale.localize.preprocessor(originalDate, parts);
  }
  const formatterOptions = {
    firstWeekContainsDate,
    weekStartsOn,
    locale
  };
  return parts.map((part) => {
    if (!part.isToken) return part.value;
    const token = part.value;
    if (!(options == null ? void 0 : options.useAdditionalWeekYearTokens) && isProtectedWeekYearToken(token) || !(options == null ? void 0 : options.useAdditionalDayOfYearTokens) && isProtectedDayOfYearToken(token)) {
      warnOrThrowProtectedError(token, formatStr, String(date));
    }
    const formatter = formatters[token[0]];
    return formatter(originalDate, token, locale.localize, formatterOptions);
  }).join("");
}
function cleanEscapedString(input) {
  const matched = input.match(escapedStringRegExp);
  if (!matched) {
    return input;
  }
  return matched[1].replace(doubleQuoteRegExp, "'");
}
function formatDistance$1(laterDate, earlierDate, options) {
  const defaultOptions2 = getDefaultOptions();
  const locale = (options == null ? void 0 : options.locale) ?? defaultOptions2.locale ?? enUS;
  const minutesInAlmostTwoDays = 2520;
  const comparison = compareAsc(laterDate, earlierDate);
  if (isNaN(comparison)) throw new RangeError("Invalid time value");
  const localizeOptions = Object.assign({}, options, {
    addSuffix: options == null ? void 0 : options.addSuffix,
    comparison
  });
  const [laterDate_, earlierDate_] = normalizeDates(
    options == null ? void 0 : options.in,
    ...comparison > 0 ? [earlierDate, laterDate] : [laterDate, earlierDate]
  );
  const seconds = differenceInSeconds(earlierDate_, laterDate_);
  const offsetInSeconds = (getTimezoneOffsetInMilliseconds(earlierDate_) - getTimezoneOffsetInMilliseconds(laterDate_)) / 1e3;
  const minutes = Math.round((seconds - offsetInSeconds) / 60);
  let months;
  if (minutes < 2) {
    if (options == null ? void 0 : options.includeSeconds) {
      if (seconds < 5) {
        return locale.formatDistance("lessThanXSeconds", 5, localizeOptions);
      } else if (seconds < 10) {
        return locale.formatDistance("lessThanXSeconds", 10, localizeOptions);
      } else if (seconds < 20) {
        return locale.formatDistance("lessThanXSeconds", 20, localizeOptions);
      } else if (seconds < 40) {
        return locale.formatDistance("halfAMinute", 0, localizeOptions);
      } else if (seconds < 60) {
        return locale.formatDistance("lessThanXMinutes", 1, localizeOptions);
      } else {
        return locale.formatDistance("xMinutes", 1, localizeOptions);
      }
    } else {
      if (minutes === 0) {
        return locale.formatDistance("lessThanXMinutes", 1, localizeOptions);
      } else {
        return locale.formatDistance("xMinutes", minutes, localizeOptions);
      }
    }
  } else if (minutes < 45) {
    return locale.formatDistance("xMinutes", minutes, localizeOptions);
  } else if (minutes < 90) {
    return locale.formatDistance("aboutXHours", 1, localizeOptions);
  } else if (minutes < minutesInDay) {
    const hours = Math.round(minutes / 60);
    return locale.formatDistance("aboutXHours", hours, localizeOptions);
  } else if (minutes < minutesInAlmostTwoDays) {
    return locale.formatDistance("xDays", 1, localizeOptions);
  } else if (minutes < minutesInMonth) {
    const days = Math.round(minutes / minutesInDay);
    return locale.formatDistance("xDays", days, localizeOptions);
  } else if (minutes < minutesInMonth * 2) {
    months = Math.round(minutes / minutesInMonth);
    return locale.formatDistance("aboutXMonths", months, localizeOptions);
  }
  months = differenceInMonths(earlierDate_, laterDate_);
  if (months < 12) {
    const nearestMonth = Math.round(minutes / minutesInMonth);
    return locale.formatDistance("xMonths", nearestMonth, localizeOptions);
  } else {
    const monthsSinceStartOfYear = months % 12;
    const years = Math.trunc(months / 12);
    if (monthsSinceStartOfYear < 3) {
      return locale.formatDistance("aboutXYears", years, localizeOptions);
    } else if (monthsSinceStartOfYear < 9) {
      return locale.formatDistance("overXYears", years, localizeOptions);
    } else {
      return locale.formatDistance("almostXYears", years + 1, localizeOptions);
    }
  }
}
function formatDistanceToNow(date, options) {
  return formatDistance$1(date, constructNow(date), options);
}
function isSameWeek(laterDate, earlierDate, options) {
  const [laterDate_, earlierDate_] = normalizeDates(
    options == null ? void 0 : options.in,
    laterDate,
    earlierDate
  );
  return +startOfWeek(laterDate_, options) === +startOfWeek(earlierDate_, options);
}
function declension(scheme, count) {
  if (scheme.one !== void 0 && count === 1) {
    return scheme.one;
  }
  const rem10 = count % 10;
  const rem100 = count % 100;
  if (rem10 === 1 && rem100 !== 11) {
    return scheme.singularNominative.replace("{{count}}", String(count));
  } else if (rem10 >= 2 && rem10 <= 4 && (rem100 < 10 || rem100 > 20)) {
    return scheme.singularGenitive.replace("{{count}}", String(count));
  } else {
    return scheme.pluralGenitive.replace("{{count}}", String(count));
  }
}
function buildLocalizeTokenFn(scheme) {
  return (count, options) => {
    if (options == null ? void 0 : options.addSuffix) {
      if (options.comparison && options.comparison > 0) {
        if (scheme.future) {
          return declension(scheme.future, count);
        } else {
          return "через " + declension(scheme.regular, count);
        }
      } else {
        if (scheme.past) {
          return declension(scheme.past, count);
        } else {
          return declension(scheme.regular, count) + " назад";
        }
      }
    } else {
      return declension(scheme.regular, count);
    }
  };
}
const formatDistanceLocale = {
  lessThanXSeconds: buildLocalizeTokenFn({
    regular: {
      one: "меньше секунды",
      singularNominative: "меньше {{count}} секунды",
      singularGenitive: "меньше {{count}} секунд",
      pluralGenitive: "меньше {{count}} секунд"
    },
    future: {
      one: "меньше, чем через секунду",
      singularNominative: "меньше, чем через {{count}} секунду",
      singularGenitive: "меньше, чем через {{count}} секунды",
      pluralGenitive: "меньше, чем через {{count}} секунд"
    }
  }),
  xSeconds: buildLocalizeTokenFn({
    regular: {
      singularNominative: "{{count}} секунда",
      singularGenitive: "{{count}} секунды",
      pluralGenitive: "{{count}} секунд"
    },
    past: {
      singularNominative: "{{count}} секунду назад",
      singularGenitive: "{{count}} секунды назад",
      pluralGenitive: "{{count}} секунд назад"
    },
    future: {
      singularNominative: "через {{count}} секунду",
      singularGenitive: "через {{count}} секунды",
      pluralGenitive: "через {{count}} секунд"
    }
  }),
  halfAMinute: (_count, options) => {
    if (options == null ? void 0 : options.addSuffix) {
      if (options.comparison && options.comparison > 0) {
        return "через полминуты";
      } else {
        return "полминуты назад";
      }
    }
    return "полминуты";
  },
  lessThanXMinutes: buildLocalizeTokenFn({
    regular: {
      one: "меньше минуты",
      singularNominative: "меньше {{count}} минуты",
      singularGenitive: "меньше {{count}} минут",
      pluralGenitive: "меньше {{count}} минут"
    },
    future: {
      one: "меньше, чем через минуту",
      singularNominative: "меньше, чем через {{count}} минуту",
      singularGenitive: "меньше, чем через {{count}} минуты",
      pluralGenitive: "меньше, чем через {{count}} минут"
    }
  }),
  xMinutes: buildLocalizeTokenFn({
    regular: {
      singularNominative: "{{count}} минута",
      singularGenitive: "{{count}} минуты",
      pluralGenitive: "{{count}} минут"
    },
    past: {
      singularNominative: "{{count}} минуту назад",
      singularGenitive: "{{count}} минуты назад",
      pluralGenitive: "{{count}} минут назад"
    },
    future: {
      singularNominative: "через {{count}} минуту",
      singularGenitive: "через {{count}} минуты",
      pluralGenitive: "через {{count}} минут"
    }
  }),
  aboutXHours: buildLocalizeTokenFn({
    regular: {
      singularNominative: "около {{count}} часа",
      singularGenitive: "около {{count}} часов",
      pluralGenitive: "около {{count}} часов"
    },
    future: {
      singularNominative: "приблизительно через {{count}} час",
      singularGenitive: "приблизительно через {{count}} часа",
      pluralGenitive: "приблизительно через {{count}} часов"
    }
  }),
  xHours: buildLocalizeTokenFn({
    regular: {
      singularNominative: "{{count}} час",
      singularGenitive: "{{count}} часа",
      pluralGenitive: "{{count}} часов"
    }
  }),
  xDays: buildLocalizeTokenFn({
    regular: {
      singularNominative: "{{count}} день",
      singularGenitive: "{{count}} дня",
      pluralGenitive: "{{count}} дней"
    }
  }),
  aboutXWeeks: buildLocalizeTokenFn({
    regular: {
      singularNominative: "около {{count}} недели",
      singularGenitive: "около {{count}} недель",
      pluralGenitive: "около {{count}} недель"
    },
    future: {
      singularNominative: "приблизительно через {{count}} неделю",
      singularGenitive: "приблизительно через {{count}} недели",
      pluralGenitive: "приблизительно через {{count}} недель"
    }
  }),
  xWeeks: buildLocalizeTokenFn({
    regular: {
      singularNominative: "{{count}} неделя",
      singularGenitive: "{{count}} недели",
      pluralGenitive: "{{count}} недель"
    }
  }),
  aboutXMonths: buildLocalizeTokenFn({
    regular: {
      singularNominative: "около {{count}} месяца",
      singularGenitive: "около {{count}} месяцев",
      pluralGenitive: "около {{count}} месяцев"
    },
    future: {
      singularNominative: "приблизительно через {{count}} месяц",
      singularGenitive: "приблизительно через {{count}} месяца",
      pluralGenitive: "приблизительно через {{count}} месяцев"
    }
  }),
  xMonths: buildLocalizeTokenFn({
    regular: {
      singularNominative: "{{count}} месяц",
      singularGenitive: "{{count}} месяца",
      pluralGenitive: "{{count}} месяцев"
    }
  }),
  aboutXYears: buildLocalizeTokenFn({
    regular: {
      singularNominative: "около {{count}} года",
      singularGenitive: "около {{count}} лет",
      pluralGenitive: "около {{count}} лет"
    },
    future: {
      singularNominative: "приблизительно через {{count}} год",
      singularGenitive: "приблизительно через {{count}} года",
      pluralGenitive: "приблизительно через {{count}} лет"
    }
  }),
  xYears: buildLocalizeTokenFn({
    regular: {
      singularNominative: "{{count}} год",
      singularGenitive: "{{count}} года",
      pluralGenitive: "{{count}} лет"
    }
  }),
  overXYears: buildLocalizeTokenFn({
    regular: {
      singularNominative: "больше {{count}} года",
      singularGenitive: "больше {{count}} лет",
      pluralGenitive: "больше {{count}} лет"
    },
    future: {
      singularNominative: "больше, чем через {{count}} год",
      singularGenitive: "больше, чем через {{count}} года",
      pluralGenitive: "больше, чем через {{count}} лет"
    }
  }),
  almostXYears: buildLocalizeTokenFn({
    regular: {
      singularNominative: "почти {{count}} год",
      singularGenitive: "почти {{count}} года",
      pluralGenitive: "почти {{count}} лет"
    },
    future: {
      singularNominative: "почти через {{count}} год",
      singularGenitive: "почти через {{count}} года",
      pluralGenitive: "почти через {{count}} лет"
    }
  })
};
const formatDistance = (token, count, options) => {
  return formatDistanceLocale[token](count, options);
};
const dateFormats = {
  full: "EEEE, d MMMM y 'г.'",
  long: "d MMMM y 'г.'",
  medium: "d MMM y 'г.'",
  short: "dd.MM.y"
};
const timeFormats = {
  full: "H:mm:ss zzzz",
  long: "H:mm:ss z",
  medium: "H:mm:ss",
  short: "H:mm"
};
const dateTimeFormats = {
  any: "{{date}}, {{time}}"
};
const formatLong = {
  date: buildFormatLongFn({
    formats: dateFormats,
    defaultWidth: "full"
  }),
  time: buildFormatLongFn({
    formats: timeFormats,
    defaultWidth: "full"
  }),
  dateTime: buildFormatLongFn({
    formats: dateTimeFormats,
    defaultWidth: "any"
  })
};
const accusativeWeekdays = [
  "воскресенье",
  "понедельник",
  "вторник",
  "среду",
  "четверг",
  "пятницу",
  "субботу"
];
function lastWeek(day) {
  const weekday = accusativeWeekdays[day];
  switch (day) {
    case 0:
      return "'в прошлое " + weekday + " в' p";
    case 1:
    case 2:
    case 4:
      return "'в прошлый " + weekday + " в' p";
    case 3:
    case 5:
    case 6:
      return "'в прошлую " + weekday + " в' p";
  }
}
function thisWeek(day) {
  const weekday = accusativeWeekdays[day];
  if (day === 2) {
    return "'во " + weekday + " в' p";
  } else {
    return "'в " + weekday + " в' p";
  }
}
function nextWeek(day) {
  const weekday = accusativeWeekdays[day];
  switch (day) {
    case 0:
      return "'в следующее " + weekday + " в' p";
    case 1:
    case 2:
    case 4:
      return "'в следующий " + weekday + " в' p";
    case 3:
    case 5:
    case 6:
      return "'в следующую " + weekday + " в' p";
  }
}
const formatRelativeLocale = {
  lastWeek: (date, baseDate, options) => {
    const day = date.getDay();
    if (isSameWeek(date, baseDate, options)) {
      return thisWeek(day);
    } else {
      return lastWeek(day);
    }
  },
  yesterday: "'вчера в' p",
  today: "'сегодня в' p",
  tomorrow: "'завтра в' p",
  nextWeek: (date, baseDate, options) => {
    const day = date.getDay();
    if (isSameWeek(date, baseDate, options)) {
      return thisWeek(day);
    } else {
      return nextWeek(day);
    }
  },
  other: "P"
};
const formatRelative = (token, date, baseDate, options) => {
  const format2 = formatRelativeLocale[token];
  if (typeof format2 === "function") {
    return format2(date, baseDate, options);
  }
  return format2;
};
const eraValues = {
  narrow: ["до н.э.", "н.э."],
  abbreviated: ["до н. э.", "н. э."],
  wide: ["до нашей эры", "нашей эры"]
};
const quarterValues = {
  narrow: ["1", "2", "3", "4"],
  abbreviated: ["1-й кв.", "2-й кв.", "3-й кв.", "4-й кв."],
  wide: ["1-й квартал", "2-й квартал", "3-й квартал", "4-й квартал"]
};
const monthValues = {
  narrow: ["Я", "Ф", "М", "А", "М", "И", "И", "А", "С", "О", "Н", "Д"],
  abbreviated: [
    "янв.",
    "фев.",
    "март",
    "апр.",
    "май",
    "июнь",
    "июль",
    "авг.",
    "сент.",
    "окт.",
    "нояб.",
    "дек."
  ],
  wide: [
    "январь",
    "февраль",
    "март",
    "апрель",
    "май",
    "июнь",
    "июль",
    "август",
    "сентябрь",
    "октябрь",
    "ноябрь",
    "декабрь"
  ]
};
const formattingMonthValues = {
  narrow: ["Я", "Ф", "М", "А", "М", "И", "И", "А", "С", "О", "Н", "Д"],
  abbreviated: [
    "янв.",
    "фев.",
    "мар.",
    "апр.",
    "мая",
    "июн.",
    "июл.",
    "авг.",
    "сент.",
    "окт.",
    "нояб.",
    "дек."
  ],
  wide: [
    "января",
    "февраля",
    "марта",
    "апреля",
    "мая",
    "июня",
    "июля",
    "августа",
    "сентября",
    "октября",
    "ноября",
    "декабря"
  ]
};
const dayValues = {
  narrow: ["В", "П", "В", "С", "Ч", "П", "С"],
  short: ["вс", "пн", "вт", "ср", "чт", "пт", "сб"],
  abbreviated: ["вск", "пнд", "втр", "срд", "чтв", "птн", "суб"],
  wide: [
    "воскресенье",
    "понедельник",
    "вторник",
    "среда",
    "четверг",
    "пятница",
    "суббота"
  ]
};
const dayPeriodValues = {
  narrow: {
    am: "ДП",
    pm: "ПП",
    midnight: "полн.",
    noon: "полд.",
    morning: "утро",
    afternoon: "день",
    evening: "веч.",
    night: "ночь"
  },
  abbreviated: {
    am: "ДП",
    pm: "ПП",
    midnight: "полн.",
    noon: "полд.",
    morning: "утро",
    afternoon: "день",
    evening: "веч.",
    night: "ночь"
  },
  wide: {
    am: "ДП",
    pm: "ПП",
    midnight: "полночь",
    noon: "полдень",
    morning: "утро",
    afternoon: "день",
    evening: "вечер",
    night: "ночь"
  }
};
const formattingDayPeriodValues = {
  narrow: {
    am: "ДП",
    pm: "ПП",
    midnight: "полн.",
    noon: "полд.",
    morning: "утра",
    afternoon: "дня",
    evening: "веч.",
    night: "ночи"
  },
  abbreviated: {
    am: "ДП",
    pm: "ПП",
    midnight: "полн.",
    noon: "полд.",
    morning: "утра",
    afternoon: "дня",
    evening: "веч.",
    night: "ночи"
  },
  wide: {
    am: "ДП",
    pm: "ПП",
    midnight: "полночь",
    noon: "полдень",
    morning: "утра",
    afternoon: "дня",
    evening: "вечера",
    night: "ночи"
  }
};
const ordinalNumber = (dirtyNumber, options) => {
  const number = Number(dirtyNumber);
  const unit = options == null ? void 0 : options.unit;
  let suffix;
  if (unit === "date") {
    suffix = "-е";
  } else if (unit === "week" || unit === "minute" || unit === "second") {
    suffix = "-я";
  } else {
    suffix = "-й";
  }
  return number + suffix;
};
const localize = {
  ordinalNumber,
  era: buildLocalizeFn({
    values: eraValues,
    defaultWidth: "wide"
  }),
  quarter: buildLocalizeFn({
    values: quarterValues,
    defaultWidth: "wide",
    argumentCallback: (quarter) => quarter - 1
  }),
  month: buildLocalizeFn({
    values: monthValues,
    defaultWidth: "wide",
    formattingValues: formattingMonthValues,
    defaultFormattingWidth: "wide"
  }),
  day: buildLocalizeFn({
    values: dayValues,
    defaultWidth: "wide"
  }),
  dayPeriod: buildLocalizeFn({
    values: dayPeriodValues,
    defaultWidth: "any",
    formattingValues: formattingDayPeriodValues,
    defaultFormattingWidth: "wide"
  })
};
const matchOrdinalNumberPattern = /^(\d+)(-?(е|я|й|ое|ье|ая|ья|ый|ой|ий|ый))?/i;
const parseOrdinalNumberPattern = /\d+/i;
const matchEraPatterns = {
  narrow: /^((до )?н\.?\s?э\.?)/i,
  abbreviated: /^((до )?н\.?\s?э\.?)/i,
  wide: /^(до нашей эры|нашей эры|наша эра)/i
};
const parseEraPatterns = {
  any: [/^д/i, /^н/i]
};
const matchQuarterPatterns = {
  narrow: /^[1234]/i,
  abbreviated: /^[1234](-?[ыои]?й?)? кв.?/i,
  wide: /^[1234](-?[ыои]?й?)? квартал/i
};
const parseQuarterPatterns = {
  any: [/1/i, /2/i, /3/i, /4/i]
};
const matchMonthPatterns = {
  narrow: /^[яфмаисонд]/i,
  abbreviated: /^(янв|фев|март?|апр|ма[йя]|июн[ья]?|июл[ья]?|авг|сент?|окт|нояб?|дек)\.?/i,
  wide: /^(январ[ья]|феврал[ья]|марта?|апрел[ья]|ма[йя]|июн[ья]|июл[ья]|августа?|сентябр[ья]|октябр[ья]|октябр[ья]|ноябр[ья]|декабр[ья])/i
};
const parseMonthPatterns = {
  narrow: [
    /^я/i,
    /^ф/i,
    /^м/i,
    /^а/i,
    /^м/i,
    /^и/i,
    /^и/i,
    /^а/i,
    /^с/i,
    /^о/i,
    /^н/i,
    /^я/i
  ],
  any: [
    /^я/i,
    /^ф/i,
    /^мар/i,
    /^ап/i,
    /^ма[йя]/i,
    /^июн/i,
    /^июл/i,
    /^ав/i,
    /^с/i,
    /^о/i,
    /^н/i,
    /^д/i
  ]
};
const matchDayPatterns = {
  narrow: /^[впсч]/i,
  short: /^(вс|во|пн|по|вт|ср|чт|че|пт|пя|сб|су)\.?/i,
  abbreviated: /^(вск|вос|пнд|пон|втр|вто|срд|сре|чтв|чет|птн|пят|суб).?/i,
  wide: /^(воскресень[ея]|понедельника?|вторника?|сред[аы]|четверга?|пятниц[аы]|суббот[аы])/i
};
const parseDayPatterns = {
  narrow: [/^в/i, /^п/i, /^в/i, /^с/i, /^ч/i, /^п/i, /^с/i],
  any: [/^в[ос]/i, /^п[он]/i, /^в/i, /^ср/i, /^ч/i, /^п[ят]/i, /^с[уб]/i]
};
const matchDayPeriodPatterns = {
  narrow: /^([дп]п|полн\.?|полд\.?|утр[оа]|день|дня|веч\.?|ноч[ьи])/i,
  abbreviated: /^([дп]п|полн\.?|полд\.?|утр[оа]|день|дня|веч\.?|ноч[ьи])/i,
  wide: /^([дп]п|полночь|полдень|утр[оа]|день|дня|вечера?|ноч[ьи])/i
};
const parseDayPeriodPatterns = {
  any: {
    am: /^дп/i,
    pm: /^пп/i,
    midnight: /^полн/i,
    noon: /^полд/i,
    morning: /^у/i,
    afternoon: /^д[ен]/i,
    evening: /^в/i,
    night: /^н/i
  }
};
const match = {
  ordinalNumber: buildMatchPatternFn({
    matchPattern: matchOrdinalNumberPattern,
    parsePattern: parseOrdinalNumberPattern,
    valueCallback: (value) => parseInt(value, 10)
  }),
  era: buildMatchFn({
    matchPatterns: matchEraPatterns,
    defaultMatchWidth: "wide",
    parsePatterns: parseEraPatterns,
    defaultParseWidth: "any"
  }),
  quarter: buildMatchFn({
    matchPatterns: matchQuarterPatterns,
    defaultMatchWidth: "wide",
    parsePatterns: parseQuarterPatterns,
    defaultParseWidth: "any",
    valueCallback: (index) => index + 1
  }),
  month: buildMatchFn({
    matchPatterns: matchMonthPatterns,
    defaultMatchWidth: "wide",
    parsePatterns: parseMonthPatterns,
    defaultParseWidth: "any"
  }),
  day: buildMatchFn({
    matchPatterns: matchDayPatterns,
    defaultMatchWidth: "wide",
    parsePatterns: parseDayPatterns,
    defaultParseWidth: "any"
  }),
  dayPeriod: buildMatchFn({
    matchPatterns: matchDayPeriodPatterns,
    defaultMatchWidth: "wide",
    parsePatterns: parseDayPeriodPatterns,
    defaultParseWidth: "any"
  })
};
const ru = {
  code: "ru",
  formatDistance,
  formatLong,
  formatRelative,
  localize,
  match,
  options: {
    weekStartsOn: 1,
    firstWeekContainsDate: 1
  }
};
function formatRelativeDate(dateStr) {
  const date = new Date(dateStr);
  const now = /* @__PURE__ */ new Date();
  const currentYear = now.getFullYear();
  const reviewYear = date.getFullYear();
  if (now - date < 30 * 24 * 60 * 60 * 1e3) {
    return formatDistanceToNow(date, { addSuffix: true, locale: ru });
  } else if (reviewYear === currentYear) {
    return format(date, "d MMMM", { locale: ru });
  } else {
    return format(date, "d MMMM yyyy", { locale: ru });
  }
}
const YaIcon = (props) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 2 24 20",
    fill: "none",
    ...props,
    children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "path",
        {
          fill: "#FC3F1D",
          d: "M2.04 12c0-5.523 4.476-10 10-10 5.522 0 10 4.477 10 10s-4.478 10-10 10c-5.524 0-10-4.477-10-10z"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "path",
        {
          fill: "#fff",
          d: "M13.32 7.666h-.924c-1.694 0-2.585.858-2.585 2.123 0 1.43.616 2.1 1.881 2.959l1.045.704-3.003 4.487H7.49l2.695-4.014c-1.55-1.111-2.42-2.19-2.42-4.015 0-2.288 1.595-3.85 4.62-3.85h3.003v11.868H13.32V7.666z"
        }
      )
    ]
  }
);
function Pagination({
  currentPage = 1,
  totalPages = 1,
  onPageChange,
  showFirstLast: _showFirstLast = true,
  maxVisiblePages = 7,
  className = ""
}) {
  if (totalPages <= 1) return null;
  const getVisiblePages = () => {
    const pages = [];
    if (totalPages <= maxVisiblePages) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      const halfVisible = Math.floor(maxVisiblePages / 2);
      if (currentPage <= halfVisible + 1) {
        for (let i = 1; i <= maxVisiblePages - 2; i++) {
          pages.push(i);
        }
        pages.push("ellipsis-end");
        pages.push(totalPages);
      } else if (currentPage >= totalPages - halfVisible) {
        pages.push(1);
        pages.push("ellipsis-start");
        for (let i = totalPages - (maxVisiblePages - 3); i <= totalPages; i++) {
          pages.push(i);
        }
      } else {
        pages.push(1);
        pages.push("ellipsis-start");
        for (let i = currentPage - 1; i <= currentPage + 1; i++) {
          pages.push(i);
        }
        pages.push("ellipsis-end");
        pages.push(totalPages);
      }
    }
    return pages;
  };
  const visiblePages = getVisiblePages();
  const handlePageClick = (page) => {
    if (page !== currentPage && page >= 1 && page <= totalPages) {
      onPageChange(page);
    }
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "nav",
    {
      className: `tw:flex tw:items-center tw:justify-center tw:gap-1 tw:sm:gap-2 ${className}`,
      "aria-label": "Пагинация",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "button",
          {
            onClick: () => handlePageClick(currentPage - 1),
            disabled: currentPage === 1,
            className: "pagination-button pagination-nav-button",
            "aria-label": "Предыдущая страница",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronLeft, { size: 16 }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "tw:hidden tw:sm:inline tw:ml-1", children: "Назад" })
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "tw:flex tw:items-center tw:gap-1", children: visiblePages.map((page, index) => {
          if (page === "ellipsis-start" || page === "ellipsis-end") {
            return /* @__PURE__ */ jsxRuntimeExports.jsx(
              "div",
              {
                className: "pagination-ellipsis",
                "aria-hidden": "true",
                children: /* @__PURE__ */ jsxRuntimeExports.jsx(Ellipsis, { size: 16 })
              },
              `ellipsis-${index}`
            );
          }
          const isActive = page === currentPage;
          return /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              onClick: () => handlePageClick(page),
              className: `pagination-button ${isActive ? "pagination-button-active" : "pagination-button-default"}`,
              "aria-label": `Страница ${page}`,
              "aria-current": isActive ? "page" : void 0,
              children: page
            },
            page
          );
        }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "button",
          {
            onClick: () => handlePageClick(currentPage + 1),
            disabled: currentPage === totalPages,
            className: "pagination-button pagination-nav-button",
            "aria-label": "Следующая страница",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "tw:hidden tw:sm:inline tw:mr-1", children: "Вперед" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { size: 16 })
            ]
          }
        )
      ]
    }
  );
}
function PaginationInfo({
  currentPage,
  itemsPerPage,
  totalItems,
  className = ""
}) {
  if (totalItems === 0) return null;
  const startItem = (currentPage - 1) * itemsPerPage + 1;
  const endItem = Math.min(currentPage * itemsPerPage, totalItems);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `tw:text-sm tw:text-slate-600 tw:text-center ${className}`, children: [
    "Показано ",
    /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "tw:font-medium tw:text-slate-900", children: [
      startItem,
      "–",
      endItem
    ] }),
    " из",
    " ",
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "tw:font-medium tw:text-slate-900", children: totalItems }),
    " отзывов"
  ] });
}
function getOptimalImageSize(originalUrl, containerSize = "thumbnail") {
  if (!originalUrl || !originalUrl.includes("avatars.mds.yandex.net")) {
    return originalUrl;
  }
  const sizeMap = {
    thumbnail: "M",
    // ~300px для миниатюр
    gallery: "L",
    // ~600px для галереи
    lightbox: "XXL"
    // ~1200px для лайтбокса
  };
  const targetSize = sizeMap[containerSize] || "M";
  return originalUrl.replace(/\/[SMLX]+$/, `/${targetSize}`);
}
function createYandexSrcSet(originalUrl) {
  if (!originalUrl || !originalUrl.includes("avatars.mds.yandex.net")) {
    return "";
  }
  const sizes = [
    { suffix: "S", width: "150w" },
    { suffix: "M", width: "300w" },
    { suffix: "L", width: "600w" },
    { suffix: "XL", width: "900w" },
    { suffix: "XXL", width: "1200w" }
  ];
  return sizes.map(({ suffix, width }) => {
    const url = originalUrl.replace(/\/[SMLX]+$/, `/${suffix}`);
    return `${url} ${width}`;
  }).join(", ");
}
function getImageSizes(containerType = "thumbnail") {
  const sizesMap = {
    thumbnail: "(max-width: 640px) 150px, (max-width: 768px) 200px, 250px",
    gallery: "(max-width: 640px) 45vw, (max-width: 768px) 30vw, 200px",
    lightbox: "100vw"
  };
  return sizesMap[containerType] || sizesMap.thumbnail;
}
function SmoothImage({
  src,
  alt,
  className = "",
  skeletonClassName = "",
  containerType = "thumbnail",
  // 'thumbnail', 'gallery', 'lightbox'
  onLoad,
  preload = false,
  ...props
}) {
  const [isLoaded, setIsLoaded] = reactExports.useState(false);
  const [isError, setIsError] = reactExports.useState(false);
  const [isPreloading, setIsPreloading] = reactExports.useState(preload);
  const imgRef = reactExports.useRef(null);
  const preloadRef = reactExports.useRef(null);
  const optimizedSrc = getOptimalImageSize(src, containerType);
  const srcSet = createYandexSrcSet(src);
  const sizes = getImageSizes(containerType);
  reactExports.useEffect(() => {
    if (!optimizedSrc || !preload) return;
    const preloadImg = new Image();
    preloadRef.current = preloadImg;
    preloadImg.onload = () => {
      setIsPreloading(false);
      setIsLoaded(true);
      onLoad == null ? void 0 : onLoad();
    };
    preloadImg.onerror = () => {
      setIsPreloading(false);
      setIsError(true);
    };
    preloadImg.src = optimizedSrc;
    return () => {
      if (preloadRef.current) {
        preloadRef.current.onload = null;
        preloadRef.current.onerror = null;
      }
    };
  }, [optimizedSrc, preload, onLoad]);
  const handleLoad = () => {
    if (!preload) {
      setIsLoaded(true);
      onLoad == null ? void 0 : onLoad();
    }
  };
  const handleError = () => {
    if (!preload) {
      setIsError(true);
    }
  };
  if (preload && isPreloading) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        className: `image-skeleton ${skeletonClassName} ${className}`,
        ...props
      }
    );
  }
  if (isError) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        className: `tw:bg-slate-200 tw:flex tw:items-center tw:justify-center ${className}`,
        ...props,
        children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "tw:text-slate-400 tw:text-xs", children: "Фото недоступно" })
      }
    );
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "img",
    {
      ref: imgRef,
      src: optimizedSrc,
      srcSet,
      sizes,
      alt,
      className: `image-fade-in ${isLoaded ? "loaded" : ""} ${className}`,
      onLoad: handleLoad,
      onError: handleError,
      loading: "lazy",
      ...props
    }
  );
}
function FilterPanel({
  onFiltersChange,
  totalReviews = 0,
  reviewsWithPhotos = 0,
  className = "",
  isLoading = false,
  currentFilters = {}
}) {
  const sortOptions = [
    {
      id: "submitted_at-desc",
      label: "По новизне",
      shortLabel: "По новизне",
      description: "Новые → старые",
      sortBy: "submitted_at",
      sortOrder: "DESC",
      icon: "🕐"
    },
    {
      id: "rating-asc",
      label: "Сначала отрицательные",
      shortLabel: "Отрицательные",
      description: "Низкий → высокий рейтинг",
      sortBy: "rating",
      sortOrder: "ASC",
      icon: "👎"
    },
    {
      id: "rating-desc",
      label: "Сначала положительные",
      shortLabel: "Положительные",
      description: "Высокий → низкий рейтинг",
      sortBy: "rating",
      sortOrder: "DESC",
      icon: "👍"
    }
  ];
  const currentSortId = reactExports.useMemo(() => {
    if (currentFilters.sortBy && currentFilters.sortOrder) {
      return `${currentFilters.sortBy}-${String(currentFilters.sortOrder).toLowerCase()}`;
    }
    return "submitted_at-desc";
  }, [currentFilters.sortBy, currentFilters.sortOrder]);
  const onlyWithMedia = currentFilters.hasMedia === true;
  const currentOption = sortOptions.find((o) => o.id === currentSortId);
  const handleSortChange = (sortId) => {
    if (isLoading) return;
    const option = sortOptions.find((o) => o.id === sortId);
    if (!option) return;
    onFiltersChange({
      sortBy: option.sortBy,
      sortOrder: option.sortOrder,
      hasMedia: onlyWithMedia
    });
  };
  const handleMediaToggle = () => {
    if (isLoading) return;
    onFiltersChange({
      sortBy: (currentOption == null ? void 0 : currentOption.sortBy) || "submitted_at",
      sortOrder: (currentOption == null ? void 0 : currentOption.sortOrder) || "DESC",
      hasMedia: !onlyWithMedia
    });
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `tw:hidden tw:sm:flex tw:items-center tw:justify-between tw:gap-4 ${className}`, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "tw:flex tw:items-center tw:gap-1", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "tw:text-xs tw:text-slate-500 tw:mr-2", children: "Сортировка:" }),
        sortOptions.map((option) => /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            onClick: () => handleSortChange(option.id),
            disabled: isLoading,
            className: `
                tw:px-2 tw:py-1 tw:text-xs tw:font-medium tw:transition-colors tw:duration-200 tw:rounded
                ${currentSortId === option.id ? "tw:bg-slate-200 tw:text-slate-900" : "tw:text-slate-500 hover:tw:text-slate-700 hover:tw:bg-slate-100"}
                disabled:tw:opacity-50 disabled:tw:cursor-not-allowed
              `,
            children: option.shortLabel
          },
          option.id
        ))
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "tw:flex tw:items-center tw:gap-2", children: reviewsWithPhotos > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "button",
        {
          onClick: handleMediaToggle,
          disabled: isLoading,
          "aria-pressed": onlyWithMedia,
          "aria-label": `Показать только отзывы с фото и видео (${reviewsWithPhotos} из ${totalReviews})`,
          className: `
                tw:flex tw:items-center tw:gap-1.5 tw:px-2 tw:py-1 tw:text-xs tw:font-medium tw:transition-colors tw:duration-200 tw:rounded
                ${onlyWithMedia ? "tw:bg-slate-200 tw:text-slate-900" : "tw:text-slate-500 hover:tw:text-slate-700 hover:tw:bg-slate-100"}
                disabled:tw:opacity-50 disabled:tw:cursor-not-allowed
              `,
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Camera, { size: 12 }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Только с фото и видео" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `
                tw:text-xs tw:px-1 tw:py-0.5 tw:rounded tw:font-medium
                ${onlyWithMedia ? "tw:bg-slate-300 tw:text-slate-800" : "tw:bg-slate-200 tw:text-slate-600"}
              `, children: reviewsWithPhotos })
          ]
        }
      ) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `tw:sm:hidden tw:flex tw:justify-end tw:items-center ${className}`, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      "select",
      {
        value: currentSortId,
        onChange: (e) => handleSortChange(e.target.value),
        disabled: isLoading,
        className: "tw:appearance-none tw:bg-transparent tw:border-none tw:text-blue-600 tw:text-xs tw:font-medium tw:text-right focus:tw:outline-none tw:disabled:opacity-50 tw:cursor-pointer tw:pr-4 tw:py-0.5 tw:-mr-1",
        style: {
          backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%234f46e5' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e")`,
          backgroundPosition: "right center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "14px"
        },
        children: sortOptions.map((option) => /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: option.id, children: option.label }, option.id))
      }
    ) })
  ] });
}
function StatsHeader({ stats, organization }) {
  if (!stats || !organization) return null;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "widget-summary tw:p-3 tw:sm:p-8 tw:mb-8 tw:sm:mb-10", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "tw:block tw:sm:hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "tw:bg-white/95 tw:backdrop-blur-md tw:border tw:border-slate-200/50 tw:rounded-2xl tw:px-4 tw:py-3.5 tw:shadow-lg tw:shadow-slate-200/20 tw:overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "tw:flex tw:items-center tw:gap-2 tw:text-sm tw:whitespace-nowrap tw:min-w-0", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "tw:flex tw:items-center tw:gap-1.5 tw:flex-shrink-0", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "tw:w-5 tw:h-5 tw:bg-gradient-to-br tw:from-amber-50/90 tw:to-amber-100/70 tw:backdrop-blur-sm tw:rounded-md tw:flex tw:items-center tw:justify-center tw:shadow-sm tw:ring-1 tw:ring-amber-200/40", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Star, { size: 10, className: "tw:text-amber-500 tw:fill-amber-400 tw:drop-shadow-sm", strokeWidth: 1.5 }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "tw:font-bold tw:text-slate-900 tw:text-sm", children: Math.floor(stats.avgRating * 10) / 10 })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "tw:text-slate-400/70 tw:flex-shrink-0 tw:font-light", children: "•" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "tw:text-slate-700 tw:font-medium tw:flex-shrink-0 tw:text-xs", children: [
        stats.totalReviews > 999 ? `${Math.floor(stats.totalReviews / 1e3)}k` : stats.totalReviews,
        " отзывов"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "tw:text-slate-400/70 tw:flex-shrink-0 tw:font-light", children: "•" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "tw:flex tw:items-center tw:gap-1.5 tw:min-w-0 tw:flex-shrink", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "tw:w-1.5 tw:h-1.5 tw:bg-emerald-500 tw:rounded-full tw:flex-shrink-0 tw:shadow-sm" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "tw:text-emerald-700 tw:font-semibold tw:text-xs tw:truncate", children: [
          stats.ratingDistribution ? Math.round(((stats.ratingDistribution[5] || 0) + (stats.ratingDistribution[4] || 0)) / stats.totalReviews * 100) : 0,
          "% рекомендуют"
        ] })
      ] })
    ] }) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "tw:hidden tw:sm:flex tw:items-center tw:justify-between tw:gap-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "tw:flex tw:items-center tw:gap-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "tw:w-18 tw:h-18 tw:bg-gradient-to-br tw:from-amber-50/90 tw:to-amber-100/70 tw:backdrop-blur-md tw:rounded-3xl tw:flex tw:items-center tw:justify-center tw:shadow-lg tw:shadow-amber-200/25 tw:ring-1 tw:ring-amber-200/40 tw:border tw:border-white/20", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Star, { size: 28, className: "tw:text-amber-500 tw:fill-amber-400 tw:drop-shadow-sm", strokeWidth: 1.5 }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "tw:text-5xl tw:font-bold tw:text-amber-900 tw:leading-none tw:tracking-tight", children: Math.floor(stats.avgRating * 10) / 10 }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "tw:text-sm tw:text-amber-700 tw:font-semibold", children: "из 5 звёзд" })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "tw:text-left", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "tw:text-2xl tw:font-bold tw:text-slate-900 tw:tracking-tight", children: [
          stats.totalReviews,
          " отзывов"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "tw:text-sm tw:text-slate-600 tw:font-medium", children: "от гостей" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "tw:relative", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "tw:bg-gradient-to-r tw:from-emerald-50 tw:to-green-50 tw:border tw:border-emerald-200/50 tw:rounded-2xl tw:px-4 tw:py-3 tw:shadow-sm tw:backdrop-blur-sm", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "tw:flex tw:items-center tw:gap-2 tw:mb-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "tw:w-2 tw:h-2 tw:bg-emerald-500 tw:rounded-full tw:animate-pulse" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "tw:text-xs tw:text-emerald-700 tw:font-semibold tw:uppercase tw:tracking-wide", children: "Рекомендуют" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "tw:text-xl tw:font-bold tw:text-emerald-800", children: [
          stats.ratingDistribution ? Math.round(((stats.ratingDistribution[5] || 0) + (stats.ratingDistribution[4] || 0)) / stats.totalReviews * 100) : 0,
          "% гостей"
        ] })
      ] }) })
    ] })
  ] });
}
const formatTextWithLineBreaks = (text) => {
  if (!text) return "";
  return text.split("\n").map((line, index, array) => /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
    line,
    index < array.length - 1 && /* @__PURE__ */ jsxRuntimeExports.jsx("br", {})
  ] }, index));
};
function ReviewsWidget({
  cmsId,
  maxReviews = 10,
  showHeader = true,
  showFilters = true,
  includeMedia = true,
  includeReplies = true,
  showPagination = true,
  minRating,
  maxRating,
  hasReply
}) {
  const apiOptions = {
    limit: maxReviews,
    media: includeMedia,
    replies: includeReplies,
    minRating,
    maxRating,
    hasReply
  };
  const { reviews, pagination, organization, stats, isLoading, isError, error, currentPage, isTransitioning, currentFilters, goToPage, applyFilters } = useReviews(cmsId, apiOptions);
  const displayedReviews = reactExports.useMemo(() => reviews, [reviews]);
  const totalPages = reactExports.useMemo(
    () => pagination ? Math.ceil(pagination.total / (apiOptions.limit || 10)) : 1,
    [pagination, apiOptions.limit]
  );
  const handlePageChange = (page) => {
    goToPage(page);
  };
  const handleFiltersChange = (newFilters) => {
    applyFilters(newFilters);
  };
  const reviewsWithPhotos = reactExports.useMemo(() => {
    if (!stats) return 0;
    return stats.totalReviewsWithMedia || 0;
  }, [stats]);
  if (isLoading) {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "tw:w-full", children: [
      showHeader && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "widget-summary tw:p-6 tw:sm:p-8 tw:mb-8 tw:sm:mb-10 tw:animate-pulse", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "tw:text-center tw:sm:text-left", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "tw:mb-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "tw:h-8 tw:bg-slate-200 tw:rounded-lg tw:w-48 tw:mb-2 tw:mx-auto tw:sm:mx-0" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "tw:h-4 tw:bg-slate-200 tw:rounded tw:w-32 tw:mx-auto tw:sm:mx-0" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "tw:flex tw:flex-col tw:sm:flex-row tw:items-center tw:justify-center tw:sm:justify-start tw:gap-6 tw:sm:gap-10", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "tw:flex tw:items-center tw:gap-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "tw:w-16 tw:h-16 tw:sm:w-18 tw:sm:h-18 tw:bg-slate-200 tw:rounded-3xl" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "tw:h-10 tw:bg-slate-200 tw:rounded tw:w-16 tw:mb-1" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "tw:h-4 tw:bg-slate-200 tw:rounded tw:w-20" })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "tw:text-center tw:sm:text-left", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "tw:h-6 tw:bg-slate-200 tw:rounded tw:w-24 tw:mb-1" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "tw:h-4 tw:bg-slate-200 tw:rounded tw:w-16" })
          ] })
        ] })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "widget-spacing-lg", children: [...Array(maxReviews)].map((_, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "widget-card tw:p-4 tw:sm:p-6 tw:animate-pulse", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "tw:flex tw:items-start tw:gap-3 tw:mb-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "tw:w-12 tw:h-12 tw:sm:w-14 tw:sm:h-14 tw:bg-slate-200 tw:rounded-2xl tw:flex-shrink-0" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "tw:flex-1 tw:min-w-0", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "tw:flex tw:items-start tw:justify-between tw:mb-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "tw:h-5 tw:bg-slate-200 tw:rounded tw:w-32" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "tw:h-6 tw:bg-slate-200 tw:rounded-full tw:w-20" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "tw:flex tw:items-center tw:justify-between tw:mb-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "tw:flex tw:gap-1", children: [...Array(5)].map((_2, j) => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "tw:w-4 tw:h-4 tw:bg-slate-200 tw:rounded" }, j)) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "tw:h-4 tw:bg-slate-200 tw:rounded tw:w-16" })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "tw:space-y-2 tw:mb-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "tw:h-4 tw:bg-slate-200 tw:rounded tw:w-full" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "tw:h-4 tw:bg-slate-200 tw:rounded tw:w-5/6" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "tw:h-4 tw:bg-slate-200 tw:rounded tw:w-4/6" })
        ] })
      ] }, i)) })
    ] });
  }
  if (isError) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "tw:text-sm tw:text-gray-500 tw:text-center tw:py-8", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "tw:bg-red-50 tw:border tw:border-red-200 tw:rounded-lg tw:p-4 tw:max-w-md tw:mx-auto", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "tw:text-red-800 tw:font-semibold tw:mb-2", children: "Ошибка загрузки отзывов" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "tw:text-red-700 tw:text-sm", children: error || "Не удалось загрузить отзывы" }),
      error && error.includes("API сервису") && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "tw:mt-3 tw:text-xs tw:text-red-600", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Возможные причины:" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "tw:list-disc tw:list-inside tw:mt-1 tw:space-y-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "API сервер не запущен на localhost:3000" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Проблемы с CORS настройками" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Блокировка браузером смешанного контента" })
        ] })
      ] })
    ] }) });
  }
  if (!cmsId) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "tw:text-sm tw:text-gray-500 tw:text-center tw:py-4", children: "Укажите CMS ID организации для отображения отзывов" });
  }
  if (!reviews.length && !isLoading) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "tw:text-sm tw:text-gray-500 tw:text-center tw:py-4", children: "Отзывы для организации не найдены" });
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "snx-reviews-widget", "data-snx-reviews-widget": true, children: [
    showHeader && stats && organization && /* @__PURE__ */ jsxRuntimeExports.jsx(StatsHeader, { stats, organization }),
    showFilters && !isLoading && !isError && reviews.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx(
      FilterPanel,
      {
        onFiltersChange: handleFiltersChange,
        totalReviews: (pagination == null ? void 0 : pagination.total) || reviews.length,
        reviewsWithPhotos,
        isLoading: isTransitioning,
        currentFilters,
        className: "tw:mb-4 tw:border-b tw:border-slate-100 tw:pb-3"
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `widget-spacing-lg reviews-list tw:transition-opacity tw:duration-300 ${isTransitioning ? "tw:opacity-50" : "tw:opacity-100"}`, children: displayedReviews.map((review) => /* @__PURE__ */ jsxRuntimeExports.jsx(ReviewCard, { review }, review.id)) }),
    showPagination && pagination && totalPages > 1 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "tw:mt-8 tw:sm:mt-10 tw:space-y-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        PaginationInfo,
        {
          currentPage,
          itemsPerPage: apiOptions.limit || 10,
          totalItems: pagination.total,
          className: "tw:mb-4"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Pagination,
        {
          currentPage,
          totalPages,
          onPageChange: handlePageChange,
          className: "tw:justify-center"
        }
      )
    ] })
  ] });
}
const ExpandedMediaGallery = reactExports.memo(function ExpandedMediaGallery2({ mediaAssets, preloadImages = true }) {
  const [lightboxOpen, setLightboxOpen] = reactExports.useState(false);
  const [lightboxIndex, setLightboxIndex] = reactExports.useState(0);
  const photoAssets = mediaAssets.filter((asset) => asset.media_type === "photo" && asset.source_url);
  if (photoAssets.length === 0) return null;
  const slides = photoAssets.map((asset) => ({
    src: asset.source_url,
    alt: asset.alt_text || "Фото отзыва"
  }));
  const openLightbox = (index) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "tw:grid tw:gap-2 tw:w-full", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `tw:grid tw:gap-2 ${photoAssets.length === 1 ? "tw:grid-cols-1 tw:max-w-md" : photoAssets.length === 2 ? "tw:grid-cols-2 tw:max-w-lg" : photoAssets.length === 3 ? "tw:grid-cols-3 tw:max-w-2xl" : photoAssets.length === 4 ? "tw:grid-cols-2 tw:sm:grid-cols-4 tw:max-w-3xl" : "tw:grid-cols-2 tw:sm:grid-cols-3 tw:md:grid-cols-4 tw:lg:grid-cols-5 tw:xl:grid-cols-6"}`, children: photoAssets.map((asset, index) => /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        className: "tw:relative tw:rounded-lg tw:overflow-hidden tw:bg-slate-100 tw:cursor-pointer tw:group tw:transition-all tw:duration-200 hover:tw:shadow-md hover:tw:ring-2 hover:tw:ring-amber-200/50",
        style: { aspectRatio: "1" },
        onClick: () => openLightbox(index),
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          SmoothImage,
          {
            src: asset.source_url,
            alt: `Фото ${index + 1}`,
            className: "tw:w-full tw:h-full group-hover:tw:opacity-90 tw:transition-opacity tw:duration-200",
            skeletonClassName: "tw:w-full tw:h-full",
            containerType: "gallery",
            preload: preloadImages && index < 12
          }
        )
      },
      asset.asset_id || index
    )) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      Lightbox,
      {
        open: lightboxOpen,
        close: () => setLightboxOpen(false),
        index: lightboxIndex,
        slides,
        animation: { fade: 300, swipe: 500 },
        carousel: {
          finite: photoAssets.length <= 3,
          preload: 2
        },
        controller: {
          closeOnBackdropClick: true,
          closeOnPullDown: true,
          closeOnPullUp: false
        },
        render: {
          buttonPrev: photoAssets.length <= 1 ? () => null : void 0,
          buttonNext: photoAssets.length <= 1 ? () => null : void 0
        }
      }
    )
  ] });
});
const MediaThumbnails = reactExports.memo(function MediaThumbnails2({ mediaAssets }) {
  const [lightboxOpen, setLightboxOpen] = reactExports.useState(false);
  const [lightboxIndex, setLightboxIndex] = reactExports.useState(0);
  const [photoCount, setPhotoCount] = reactExports.useState(5);
  const containerRef = reactExports.useRef(null);
  const photoAssets = (mediaAssets == null ? void 0 : mediaAssets.filter((asset) => asset.media_type === "photo" && asset.source_url)) || [];
  const calculatePhotoCount = reactExports.useCallback(() => {
    if (!containerRef.current) return 5;
    const containerWidth = containerRef.current.offsetWidth;
    if (containerWidth >= 720) return 5;
    if (containerWidth >= 540) return 4;
    if (containerWidth >= 380) return 3;
    return 2;
  }, []);
  reactExports.useEffect(() => {
    const updatePhotoCount = () => {
      const newCount = calculatePhotoCount();
      setPhotoCount(newCount);
    };
    updatePhotoCount();
    const resizeObserver = new ResizeObserver(updatePhotoCount);
    if (containerRef.current) {
      resizeObserver.observe(containerRef.current);
    }
    return () => resizeObserver.disconnect();
  }, [calculatePhotoCount]);
  if (photoAssets.length === 0) return null;
  const slides = photoAssets.map((asset) => ({
    src: asset.source_url,
    alt: asset.alt_text || "Фото отзыва"
  }));
  const openLightbox = (index) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
  };
  const getPhotoSize = () => {
    switch (photoCount) {
      case 5:
        return { width: "140px", height: "140px" };
      case 4:
        return { width: "130px", height: "130px" };
      case 3:
        return { width: "120px", height: "120px" };
      default:
        return { width: "110px", height: "110px" };
    }
  };
  const photoSize = getPhotoSize();
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { ref: containerRef, className: "tw:flex tw:gap-2 tw:flex-nowrap tw:overflow-hidden tw:mt-4", children: photoAssets.slice(0, photoCount).map((asset, index) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        className: "tw:relative tw:rounded-lg tw:overflow-hidden tw:bg-slate-100 tw:cursor-pointer tw:group tw:shadow-sm hover:tw:shadow-md hover:tw:ring-2 hover:tw:ring-amber-200/50 tw:transition-all tw:duration-200",
        style: {
          aspectRatio: "1",
          width: photoSize.width,
          height: photoSize.height,
          flexShrink: 0
        },
        onClick: () => openLightbox(index),
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            SmoothImage,
            {
              src: asset.source_url,
              alt: `Фото ${index + 1}`,
              className: "tw:w-full tw:h-full group-hover:tw:opacity-90 tw:transition-opacity tw:duration-200",
              skeletonClassName: "tw:w-full tw:h-full",
              containerType: "thumbnail",
              preload: true
            }
          ),
          index === photoCount - 1 && photoAssets.length > photoCount && /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              className: "tw:absolute tw:inset-0 tw:bg-black/60 tw:flex tw:items-center tw:justify-center tw:cursor-pointer",
              onClick: (e) => {
                e.stopPropagation();
                openLightbox(index);
              },
              children: /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "tw:text-white tw:font-semibold tw:text-sm", children: [
                "+",
                photoAssets.length - photoCount
              ] })
            }
          )
        ]
      },
      asset.asset_id || index
    )) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      Lightbox,
      {
        open: lightboxOpen,
        close: () => setLightboxOpen(false),
        index: lightboxIndex,
        slides,
        animation: { fade: 300, swipe: 500 },
        carousel: {
          finite: photoAssets.length <= 3,
          preload: 2
        },
        controller: {
          closeOnBackdropClick: true,
          closeOnPullDown: true,
          closeOnPullUp: false
        },
        render: {
          buttonPrev: photoAssets.length <= 1 ? () => null : void 0,
          buttonNext: photoAssets.length <= 1 ? () => null : void 0
        }
      }
    )
  ] });
});
const ReviewCard = reactExports.memo(function ReviewCard2({ review }) {
  var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n, _o, _p;
  const [isExpanded, setIsExpanded] = reactExports.useState(false);
  const [isAnimating, setIsAnimating] = reactExports.useState(false);
  reactExports.useRef(null);
  const TRUNCATE_LENGTH = 280;
  const MIN_HIDDEN_LENGTH = 60;
  const exceedsLength = review.content.length > TRUNCATE_LENGTH;
  const hiddenLength = review.content.length - TRUNCATE_LENGTH;
  const shouldTruncate = exceedsLength && hiddenLength >= MIN_HIDDEN_LENGTH;
  const displayContent = isExpanded || !shouldTruncate ? review.content : review.content.substring(0, TRUNCATE_LENGTH) + "...";
  const guestName = ((_a = review.guest) == null ? void 0 : _a.name) || ((_c = (_b = review.guest) == null ? void 0 : _b.sourceProfile) == null ? void 0 : _c.username) || "Гость";
  const capitalizedName = guestName.charAt(0).toUpperCase() + guestName.slice(1);
  const avatar = (_d = review.guest) == null ? void 0 : _d.avatar;
  const toggleExpanded = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setIsExpanded(!isExpanded);
    setTimeout(() => {
      setIsAnimating(false);
    }, 300);
  };
  const handleBusinessReplyClick = () => {
    if (review.hasReply && !isExpanded) {
      toggleExpanded();
      setTimeout(() => {
        const element = document.querySelector(`[data-review-id="${review.id}"] .business-reply`);
        if (element) {
          element.scrollIntoView({ behavior: "smooth", block: "center" });
        }
      }, 350);
    }
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "widget-card tw:p-4 tw:sm:p-6", "data-review-id": review.id, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "tw:flex tw:items-start tw:gap-3 tw:mb-4", children: [
      avatar ? /* @__PURE__ */ jsxRuntimeExports.jsx(
        "img",
        {
          src: avatar,
          alt: capitalizedName,
          className: "tw:w-12 tw:h-12 tw:sm:w-14 tw:sm:h-14 tw:rounded-2xl tw:object-cover tw:flex-shrink-0 tw:ring-2 tw:ring-white/50 tw:shadow-sm"
        }
      ) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "tw:w-12 tw:h-12 tw:sm:w-14 tw:sm:h-14 tw:rounded-2xl tw:bg-gradient-to-br tw:from-slate-100/80 tw:to-slate-200/80 tw:backdrop-blur-sm tw:flex tw:items-center tw:justify-center tw:text-slate-600 tw:font-semibold tw:flex-shrink-0 tw:ring-2 tw:ring-white/50 tw:shadow-sm tw:text-sm", children: (capitalizedName == null ? void 0 : capitalizedName[0]) || "?" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "tw:flex-1 tw:min-w-0", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "tw:flex tw:items-center tw:justify-between tw:mb-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "tw:flex tw:items-center tw:gap-2 tw:min-w-0 tw:flex-1", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "tw:font-semibold tw:text-slate-900 tw:text-xl tw:sm:text-xl tw:leading-tight tw:truncate", children: capitalizedName }),
            ((_f = (_e = review.guest) == null ? void 0 : _e.sourceProfile) == null ? void 0 : _f.isVerified) && /* @__PURE__ */ jsxRuntimeExports.jsx(Shield, { size: 14, className: "tw:text-blue-500 tw:flex-shrink-0", title: "Верифицированный пользователь" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "tw:flex tw:items-center tw:gap-2 tw:ml-3 tw:flex-shrink-0", children: [
            review.source && /* @__PURE__ */ jsxRuntimeExports.jsx(Globe, { size: 12, className: "tw:text-slate-400", title: review.source }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "tw:text-sm tw:text-slate-500 tw:font-medium", children: formatRelativeDate(review.date) })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "tw:flex tw:items-center tw:gap-0.5", children: [1, 2, 3, 4, 5].map((star) => /* @__PURE__ */ jsxRuntimeExports.jsx(
          Star,
          {
            size: 16,
            className: `${star <= review.rating ? "tw:text-amber-500 tw:fill-amber-400" : "tw:text-slate-300"} tw:transition-colors tw:duration-200`,
            strokeWidth: 1.5
          },
          star
        )) }),
        ((_g = review.organization) == null ? void 0 : _g.sourceName) && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "tw:flex tw:items-center tw:gap-2 tw:flex-shrink-0 tw:mb-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "tw:flex tw:items-center tw:gap-1.5 tw:px-2.5 tw:py-1.5 tw:bg-slate-50/80 tw:rounded-full tw:border tw:border-slate-200/40", children: [
            review.organization.sourceName === "Яндекс.Карты" ? /* @__PURE__ */ jsxRuntimeExports.jsx(YaIcon, { className: "tw:w-5 tw:h-5 tw:sm:w-4 tw:sm:h-4" }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "tw:w-5 tw:h-5 tw:sm:w-4 tw:sm:h-4 tw:bg-slate-300 tw:rounded-sm tw:flex tw:items-center tw:justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "tw:text-[9px] tw:sm:text-[8px] tw:font-bold tw:text-slate-600", children: review.organization.sourceName.charAt(0) }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "tw:text-sm tw:font-medium tw:text-slate-600", children: review.organization.sourceName })
          ] }),
          ((_h = review.organization) == null ? void 0 : _h.externalUrl) && /* @__PURE__ */ jsxRuntimeExports.jsx(
            "a",
            {
              href: review.organization.externalUrl,
              target: "_blank",
              rel: "noopener noreferrer",
              className: "tw:flex-shrink-0 tw:p-1.5 hover:tw:bg-slate-100 tw:rounded-lg tw:transition-all tw:duration-200 tw:cursor-pointer",
              title: `Посмотреть оригинальный отзыв на ${review.organization.sourceName}`,
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(ExternalLink, { size: 16, className: "tw:text-slate-400 hover:tw:text-slate-600", strokeWidth: 1.5 })
            }
          )
        ] })
      ] })
    ] }),
    ((_j = (_i = review.guest) == null ? void 0 : _i.sourceProfile) == null ? void 0 : _j.authorLevel) && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "tw:text-xs tw:text-slate-500 tw:mb-3 tw:flex tw:items-center tw:gap-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "tw:px-2 tw:py-0.5 tw:bg-slate-100/60 tw:rounded-full", children: review.guest.sourceProfile.authorLevel }),
      review.guest.sourceProfile.reputationScore && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "tw:text-slate-400", children: [
        review.guest.sourceProfile.reputationScore,
        " баллов"
      ] })
    ] }),
    (review.language !== "ru" || review.hasMedia || ((_l = (_k = review.guest) == null ? void 0 : _k.sourceProfile) == null ? void 0 : _l.totalReviews) > 1 || review.isModerated) && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "tw:mb-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "tw:flex tw:flex-wrap tw:gap-1.5", children: [
      review.language && review.language !== "ru" && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "widget-badge tw:text-xs", children: [
        "🌐 ",
        review.language.toUpperCase()
      ] }),
      ((_n = (_m = review.guest) == null ? void 0 : _m.sourceProfile) == null ? void 0 : _n.totalReviews) > 1 && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "widget-badge tw:text-xs", children: [
        "📝 ",
        review.guest.sourceProfile.totalReviews
      ] }),
      review.isModerated && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "widget-badge tw:text-xs", children: "✅ Проверен" })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "tw:mb-5", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "tw:text-slate-800 tw:leading-relaxed tw:text-lg tw:sm:text-lg tw:font-normal tw:break-words tw:hyphens-auto", style: { wordBreak: "break-word", overflowWrap: "break-word" }, children: formatTextWithLineBreaks(displayContent) }),
      shouldTruncate && /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          onClick: toggleExpanded,
          disabled: isAnimating,
          className: "tw:text-lg tw:sm:text-base tw:mt-3 tw:inline-flex tw:items-center tw:gap-1 tw:cursor-pointer tw:text-slate-600 hover:tw:text-slate-800 tw:font-medium tw:transition-colors tw:duration-200 tw:disabled:opacity-50 tw:disabled:cursor-not-allowed",
          children: isExpanded ? /* @__PURE__ */ jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment, { children: "Свернуть" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment, { children: "Читать полностью" })
        }
      )
    ] }),
    isExpanded && review.mediaAssets && review.mediaAssets.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "tw:mb-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ExpandedMediaGallery, { mediaAssets: review.mediaAssets, preloadImages: true }) }),
    isExpanded && review.hasReply && review.reply && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "tw:bg-slate-50/80 tw:border tw:border-slate-200/40 tw:rounded-2xl tw:p-4 tw:mt-4 business-reply", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "tw:flex tw:gap-3 tw:mb-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "tw:w-8 tw:h-8 tw:bg-gradient-to-br tw:from-slate-100 tw:to-slate-200 tw:rounded-xl tw:flex tw:items-center tw:justify-center tw:flex-shrink-0 tw:shadow-sm", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "tw:text-slate-600 tw:font-bold tw:text-xs", children: ((_p = (_o = review.organization) == null ? void 0 : _o.name) == null ? void 0 : _p[0]) || "О" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "tw:min-w-0 tw:flex-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "tw:flex tw:items-center tw:gap-2 tw:mb-1", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "tw:font-semibold tw:text-slate-900 tw:text-sm tw:truncate", children: review.reply.author || "Ответ организации" }),
            review.reply.isOfficial && /* @__PURE__ */ jsxRuntimeExports.jsx(Shield, { size: 12, className: "tw:text-green-500 tw:flex-shrink-0", title: "Официальный ответ" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "tw:text-xs tw:text-slate-500", children: formatRelativeDate(review.reply.date) })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "tw:text-slate-700 tw:leading-relaxed tw:text-base tw:sm:text-base tw:break-words tw:hyphens-auto tw:pl-0 tw:sm:pl-11", style: { wordBreak: "break-word", overflowWrap: "break-word" }, children: formatTextWithLineBreaks(review.reply.text) })
    ] }),
    !isExpanded && (review.hasReply || review.hasMedia) && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "tw:mt-4 tw:pt-4 tw:border-t tw:border-slate-200/30", children: [
      review.hasMedia && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "tw:mb-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        MediaThumbnails,
        {
          mediaAssets: review.mediaAssets
        }
      ) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "tw:flex tw:flex-col tw:sm:flex-row tw:gap-2", children: review.hasReply && /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "button",
        {
          onClick: handleBusinessReplyClick,
          disabled: isAnimating,
          className: "tw:inline-flex tw:items-center tw:gap-1.5 tw:text-lg tw:sm:text-base tw:text-slate-600 hover:tw:text-slate-800 hover:tw:bg-slate-50 tw:font-medium tw:cursor-pointer tw:px-4 tw:py-2.5 tw:sm:px-3 tw:sm:py-2 tw:rounded-xl tw:border tw:border-slate-200/40 tw:flex-shrink-0 tw:transition-all tw:duration-200 tw:disabled:opacity-50 tw:disabled:cursor-not-allowed",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(MessageCircle, { size: 16, className: "tw:sm:w-[14px] tw:sm:h-[14px]" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Ответ организации" })
          ]
        }
      ) })
    ] })
  ] });
});
window.createSNXReviewsWidget = function(containerId, options = {}) {
  const container = document.getElementById(containerId);
  if (!container) {
    console.error(`Container with id "${containerId}" not found`);
    return;
  }
  container.setAttribute("data-snx-reviews-widget", "");
  container.classList.add("snx-reviews-widget");
  const root = ReactDOM.createRoot(container);
  root.render(
    /* @__PURE__ */ jsxRuntimeExports.jsx(React.StrictMode, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(ReviewsWidget, { ...options }) })
  );
  return root;
};
document.addEventListener("DOMContentLoaded", function() {
  const widgets = document.querySelectorAll("[data-snx-reviews-widget]");
  widgets.forEach((widget) => {
    const cmsId = widget.getAttribute("data-cms-id");
    const maxReviews = parseInt(widget.getAttribute("data-max-reviews")) || 10;
    const showHeader = widget.getAttribute("data-show-header") !== "false";
    const showFilters = widget.getAttribute("data-show-filters") !== "false";
    const showPagination = widget.getAttribute("data-show-pagination") !== "false";
    const includeMedia = widget.getAttribute("data-include-media") !== "false";
    const includeReplies = widget.getAttribute("data-include-replies") !== "false";
    if (cmsId) {
      widget.classList.add("snx-reviews-widget");
      const root = ReactDOM.createRoot(widget);
      root.render(
        /* @__PURE__ */ jsxRuntimeExports.jsx(React.StrictMode, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          ReviewsWidget,
          {
            cmsId,
            maxReviews,
            showHeader,
            showFilters,
            showPagination,
            includeMedia,
            includeReplies
          }
        ) })
      );
    }
  });
});
export {
  ReviewsWidget,
  ReviewsWidget as default
};
//# sourceMappingURL=snx-reviews-widget.es.js.map
