(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{158:function(t,e,s){"use strict";s.r(e);var n=s(0),r=Object(n.a)({},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"content"},[t._m(0),s("p",[t._v("Use Cronhub command-line tool to manage your monitors on Cronhub. Using the CLI, you can list all your monitors, get a specific monitor and easily make pings to your Cronhub monitors.")]),s("p",[t._v("Very soon, we plan to make the CLI the easiest way to integrate your system cron jobs with Cronhub monitors and keep them in sync. It means less manual work and more automation. Cool eh?")]),s("p"),t._m(1),s("p"),t._m(2),t._m(3),t._m(4),t._m(5),t._m(6),t._m(7),t._m(8),t._m(9),t._m(10),t._m(11),t._m(12),t._m(13),t._m(14),t._m(15),t._m(16),t._m(17),t._m(18),s("p",[t._v("After installing the CLI you should configure it using your Cronhub "),s("a",{attrs:{href:"https://docs.cronhub.io/public-api.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Public API"),s("OutboundLink")],1),t._v(" key. The key is located in your "),s("a",{attrs:{href:"https://cronhub.io/settings/api",target:"_blank",rel:"noopener noreferrer"}},[t._v("account settings"),s("OutboundLink")],1),t._v(" page.")]),t._m(19),t._m(20),t._m(21),s("p",[t._v("Cronhub CLI is an open source project and accepts contributions. If you use Cronhub and want to contribute then feel free to open a new pull request. You can find the "),s("a",{attrs:{href:"https://github.com/cronhub-app/cli",target:"_blank",rel:"noopener noreferrer"}},[t._v("source code"),s("OutboundLink")],1),t._v(" on Github.")])])},[function(){var t=this.$createElement,e=this._self._c||t;return e("h1",{attrs:{id:"cronhub-cli-🆕"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#cronhub-cli-🆕","aria-hidden":"true"}},[this._v("#")]),this._v(" Cronhub CLI 🆕")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"table-of-contents"},[e("ul",[e("li",[e("a",{attrs:{href:"#install-the-cli-binary-using-curl"}},[this._v("Install the CLI binary using curl")]),e("ul",[e("li",[e("a",{attrs:{href:"#linux"}},[this._v("Linux")])]),e("li",[e("a",{attrs:{href:"#macos"}},[this._v("macOS")])])])]),e("li",[e("a",{attrs:{href:"#configure-the-cli"}},[this._v("Configure the CLI")])]),e("li",[e("a",{attrs:{href:"#contribute"}},[this._v("Contribute")])])])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"language-sh line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("Usage: cronhub [OPTIONS] COMMAND [ARGS]...\n\n  A CLI interface that works with Cronhub.\n\nOptions:\n  --version  Show the version and exit.\n  --help     Show this message and exit.\n\nCommands:\n  config    Save your Cronhub API key in $HOME/.cronhub.\n  monitor   Get the monitor by its UUID.\n  monitors  List all your existing monitors.\n  ping      Ping the monitor using its UUID.\n")])]),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br"),s("span",{staticClass:"line-number"},[t._v("9")]),s("br"),s("span",{staticClass:"line-number"},[t._v("10")]),s("br"),s("span",{staticClass:"line-number"},[t._v("11")]),s("br"),s("span",{staticClass:"line-number"},[t._v("12")]),s("br"),s("span",{staticClass:"line-number"},[t._v("13")]),s("br")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"install-the-cli-binary-using-curl"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#install-the-cli-binary-using-curl","aria-hidden":"true"}},[this._v("#")]),this._v(" Install the CLI binary using curl")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"linux"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#linux","aria-hidden":"true"}},[this._v("#")]),this._v(" Linux")])},function(){var t=this.$createElement,e=this._self._c||t;return e("ol",[e("li",[this._v("Download the latest release")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language-sh line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("curl -LO https://s3.amazonaws.com/ch-cli-releases/release/v1.0.0/linux/cronhub\n")])]),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[this._v("1")]),e("br")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("ol",{attrs:{start:"2"}},[e("li",[this._v("Make the cronhub binary executable")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language-sh line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("chmod +x ./cronhub\n")])]),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[this._v("1")]),e("br")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("ol",{attrs:{start:"3"}},[e("li",[this._v("Move the binary in to your PATH.")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language-sh line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("sudo mv cronhub /usr/local/bin/cronhub\n")])]),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[this._v("1")]),e("br")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"macos"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#macos","aria-hidden":"true"}},[this._v("#")]),this._v(" macOS")])},function(){var t=this.$createElement,e=this._self._c||t;return e("ol",[e("li",[this._v("Download the latest release")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language-sh line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("curl -LO https://s3.amazonaws.com/ch-cli-releases/release/v1.0.0/macos/cronhub\n")])]),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[this._v("1")]),e("br")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("ol",{attrs:{start:"2"}},[e("li",[this._v("Make the cronhub binary executable")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language-sh line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("chmod +x ./cronhub\n")])]),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[this._v("1")]),e("br")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("ol",{attrs:{start:"3"}},[e("li",[this._v("Move the binary in to your PATH.")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language-sh line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("sudo mv cronhub /usr/local/bin/cronhub\n")])]),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[this._v("1")]),e("br")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"configure-the-cli"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#configure-the-cli","aria-hidden":"true"}},[this._v("#")]),this._v(" Configure the CLI")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("Run the following command to permanently save the API key in "),e("code",[this._v("$HOME/.cronhub")]),this._v(" file. You will\nneed to run this command only once!")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language-sh line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("cronhub configure --api-key=<your-api-key>\n")])]),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[this._v("1")]),e("br")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"contribute"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#contribute","aria-hidden":"true"}},[this._v("#")]),this._v(" Contribute")])}],!1,null,null,null);e.default=r.exports}}]);