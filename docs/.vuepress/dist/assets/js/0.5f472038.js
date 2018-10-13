(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{158:function(t,s,a){"use strict";a.r(s);var n=a(0),e=Object(n.a)({},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"content"},[t._m(0),a("p",[t._v("Cronhub Public API is a REST API that supports basic CRUD operations on top of Cronhub monitors. Our API uses HTTP response codes to indicate any API errors. All API responses are JSON objects.")]),a("p",[t._v("If you have any ideas or suggestions about the API "),a("a",{attrs:{href:"https://github.com/cronhub-app/backlog/issues",target:"_blank",rel:"noopener noreferrer"}},[t._v("let us know on Github"),a("OutboundLink")],1),t._v(".")]),a("p",[t._v("We reserve the right to rate-limit any access key if we feel you're not using the api fairly.")]),a("p"),t._m(1),a("p"),t._m(2),a("p",[t._v("All API requests must be authenticated by the API key that Cronhub provides. When you "),a("a",{attrs:{href:"https://cronhub.io/register",target:"_blank",rel:"noopener noreferrer"}},[t._v("create a new Cronhub account"),a("OutboundLink")],1),t._v(' you will get an API key. You can find it on the "Settings" page of the site. Here is an example how it may look '),a("code",[t._v("ch_5b73b46baf0c00.55022502")]),t._v(".")]),t._m(3),t._m(4),t._m(5),t._m(6),a("p",[t._v("Example Request")]),t._m(7),a("p",[t._v("Example Response")]),t._m(8),t._m(9),t._m(10),t._m(11),a("p",[t._v("Example Request")]),t._m(12),a("p",[t._v("Example Response")]),t._m(13),t._m(14),a("p",[t._v("Create a new monitor with the given arguments.")]),t._m(15),t._m(16),t._m(17),a("p",[t._v("Example Request")]),t._m(18),a("p",[t._v("Example Response")]),t._m(19),t._m(20),t._m(21),t._m(22),a("p",[t._v("Example Request")]),t._m(23),a("p",[t._v("Example Response")]),t._m(24),t._m(25),t._m(26),a("p",[t._v("Example request")]),t._m(27),a("p",[t._v("Example response")]),t._m(28),t._m(29),t._m(30),a("p",[t._v("Example request")]),t._m(31),a("p",[t._v("Example response")]),t._m(32)])},[function(){var t=this.$createElement,s=this._self._c||t;return s("h1",{attrs:{id:"public-api"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#public-api","aria-hidden":"true"}},[this._v("#")]),this._v(" Public API")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"table-of-contents"},[a("ul",[a("li",[a("a",{attrs:{href:"#authentication"}},[t._v("Authentication")])]),a("li",[a("a",{attrs:{href:"#api-endpoints"}},[t._v("API Endpoints")]),a("ul",[a("li",[a("a",{attrs:{href:"#list-all-monitors"}},[t._v("List all monitors")])]),a("li",[a("a",{attrs:{href:"#get-an-existing-monitor"}},[t._v("Get an existing monitor")])]),a("li",[a("a",{attrs:{href:"#create-a-new-monitor"}},[t._v("Create a new monitor")])]),a("li",[a("a",{attrs:{href:"#update-an-existing-monitor"}},[t._v("Update an existing monitor")])]),a("li",[a("a",{attrs:{href:"#delete-a-monitor"}},[t._v("Delete a monitor")])]),a("li",[a("a",{attrs:{href:"#pause-a-monitor"}},[t._v("Pause a monitor")])])])])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"authentication"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#authentication","aria-hidden":"true"}},[this._v("#")]),this._v(" Authentication")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("strong",[this._v("You can authenticate your requests by sending the API key in your HTTP request header. The name of the header should be "),s("code",[this._v("X-Api-Key")]),this._v(" and the value should be your key.")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"api-endpoints"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#api-endpoints","aria-hidden":"true"}},[this._v("#")]),this._v(" API Endpoints")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"list-all-monitors"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#list-all-monitors","aria-hidden":"true"}},[this._v("#")]),this._v(" List all monitors")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("code",[this._v("GET https://cronhub.io/api/v1/monitors")]),this._v(" Get the list of all your existing monitors.")])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{attrs:{class:"token function"}},[this._v("curl")]),this._v(" --header "),s("span",{attrs:{class:"token string"}},[this._v('"X-Api-Key: api-key"')]),this._v(" https://cronhub.io/api/v1/monitors\n")])])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{attrs:{class:"token property"}},[t._v('"success"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token boolean"}},[t._v("true")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{attrs:{class:"token property"}},[t._v('"response"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),a("span",{attrs:{class:"token property"}},[t._v('"name"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"Daily database backup"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),a("span",{attrs:{class:"token property"}},[t._v('"code"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"cbe02bb0-9e72-11e8-ba9d-2bd49279e066"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),a("span",{attrs:{class:"token property"}},[t._v('"schedule"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"0 0 * * *"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),a("span",{attrs:{class:"token property"}},[t._v('"grace_period"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("2")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),a("span",{attrs:{class:"token property"}},[t._v('"timezone"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"UTC"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),a("span",{attrs:{class:"token property"}},[t._v('"status"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"up"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),a("span",{attrs:{class:"token property"}},[t._v('"last_ping"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"2018-08-12T21:01:08+00:00"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),a("span",{attrs:{class:"token property"}},[t._v('"running_time"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("1")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),a("span",{attrs:{class:"token property"}},[t._v('"running_time_unit"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"minutes"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),a("span",{attrs:{class:"token property"}},[t._v('"created_at"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"2018-08-21T21:00:51+00:00"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),a("span",{attrs:{class:"token property"}},[t._v('"name"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"My Daily Cron Monitor"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),a("span",{attrs:{class:"token property"}},[t._v('"code"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"b5e5e820-9945-11e8-8dd4-23e5bbe40518"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),a("span",{attrs:{class:"token property"}},[t._v('"schedule"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"0 0 * * *"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),a("span",{attrs:{class:"token property"}},[t._v('"grace_period"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("20")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),a("span",{attrs:{class:"token property"}},[t._v('"timezone"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"UTC"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),a("span",{attrs:{class:"token property"}},[t._v('"status"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"up"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),a("span",{attrs:{class:"token property"}},[t._v('"last_ping"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"2018-08-12T21:01:08+00:00"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),a("span",{attrs:{class:"token property"}},[t._v('"running_time"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("2")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),a("span",{attrs:{class:"token property"}},[t._v('"running_time_unit"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"minutes"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),a("span",{attrs:{class:"token property"}},[t._v('"created_at"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"2018-08-21T21:00:51+00:00"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"get-an-existing-monitor"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#get-an-existing-monitor","aria-hidden":"true"}},[this._v("#")]),this._v(" Get an existing monitor")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("code",[this._v("GET https://cronhub.io/api/v1/monitors/<monitor-uuid>")]),this._v(" Get an existing monitor by its uuid.")])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"tip custom-block"},[s("p",{staticClass:"custom-block-title"},[this._v("TIP")]),s("p",[s("code",[this._v("<monitor-uuid>")]),this._v(' is the unique id that identifies your monitor. You can find it if you go to the monitor\'s\n"How to Integrate" page.')])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{attrs:{class:"token function"}},[this._v("curl")]),this._v(" --header "),s("span",{attrs:{class:"token string"}},[this._v('"X-Api-Key: api-key"')]),this._v(" https://cronhub.io/api/v1/monitors/b531e120-a018-11e8-93de-5b0f21d9156d\n")])])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{attrs:{class:"token property"}},[t._v('"success"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token boolean"}},[t._v("true")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{attrs:{class:"token property"}},[t._v('"response"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{attrs:{class:"token property"}},[t._v('"name"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"Cronhub minutely monitor"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{attrs:{class:"token property"}},[t._v('"code"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"b531e120-a018-11e8-93de-5b0f21d9156d"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{attrs:{class:"token property"}},[t._v('"schedule"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"* * * * *"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{attrs:{class:"token property"}},[t._v('"grace_period"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("5")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{attrs:{class:"token property"}},[t._v('"timezone"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"UTC"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{attrs:{class:"token property"}},[t._v('"status"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"up"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{attrs:{class:"token property"}},[t._v('"last_ping"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"2018-08-12T21:01:08+00:00"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{attrs:{class:"token property"}},[t._v('"running_time"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token null"}},[t._v("null")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{attrs:{class:"token property"}},[t._v('"running_time_unit"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token null"}},[t._v("null")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{attrs:{class:"token property"}},[t._v('"created_at"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"2018-08-21T21:00:51+00:00"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"create-a-new-monitor"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#create-a-new-monitor","aria-hidden":"true"}},[this._v("#")]),this._v(" Create a new monitor")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{attrs:{class:"token function"}},[t._v("curl")]),t._v(" -X "),a("span",{attrs:{class:"token string"}},[t._v('"POST"')]),t._v(" --header "),a("span",{attrs:{class:"token string"}},[t._v('"X-Api-Key: api-key"')]),t._v(" \\\n  -d name"),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token string"}},[t._v("'Cronhub monitor example'")]),t._v(" \\\n  -d schedule"),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token string"}},[t._v("'* * * * *'")]),t._v(" \\\n  -d grace_period"),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v("1 \\\n  -d timezone"),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v("UTC \\\n  https://cronhub.io/api/v1/monitors\n")])])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("table",[a("thead",[a("tr",[a("th",[t._v("Argument")]),a("th",{staticStyle:{"text-align":"center"}},[t._v("Description")]),a("th",{staticStyle:{"text-align":"right"}})])]),a("tbody",[a("tr",[a("td",[a("code",[t._v("name")])]),a("td",{staticStyle:{"text-align":"center"}},[t._v("The name of the monitor you want to create")]),a("td",{staticStyle:{"text-align":"right"}},[t._v("Required")])]),a("tr",[a("td",[a("code",[t._v("schedule")])]),a("td",{staticStyle:{"text-align":"center"}},[t._v("The cron schedule (e.g. 0 0 * * *)")]),a("td",{staticStyle:{"text-align":"right"}},[t._v("Required")])]),a("tr",[a("td",[a("code",[t._v("timezone")])]),a("td",{staticStyle:{"text-align":"center"}},[t._v("Your server timezone (e.g. UTC)")]),a("td",{staticStyle:{"text-align":"right"}},[t._v("Required")])]),a("tr",[a("td",[a("code",[t._v("grace_period")])]),a("td",{staticStyle:{"text-align":"center"}},[t._v("Grace period by minutes. The value should be between 1 and 60.")]),a("td",{staticStyle:{"text-align":"right"}},[t._v("Required")])]),a("tr",[a("td",[a("code",[t._v("running_time")])]),a("td",{staticStyle:{"text-align":"center"}},[t._v("The running time threshold. The value should be an integer.")]),a("td",{staticStyle:{"text-align":"right"}},[t._v("Optional")])]),a("tr",[a("td",[a("code",[t._v("running_time_unit")])]),a("td",{staticStyle:{"text-align":"center"}},[t._v("The running time unit. The value should be any of the following time units: "),a("code",[t._v("seconds")]),t._v(", "),a("code",[t._v("minutes")]),t._v(", "),a("code",[t._v("hours")]),t._v(", "),a("code",[t._v("days")]),t._v(", "),a("code",[t._v("weeks")])]),a("td",{staticStyle:{"text-align":"right"}},[t._v("Required only if "),a("code",[t._v("running_time")]),t._v(" is present.")])])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"warning custom-block"},[s("p",{staticClass:"custom-block-title"},[this._v("WARNING")]),s("p",[this._v("By default we will set "),s("code",[this._v("E-mail")]),this._v(" as the only notification channel for your monitor. You can always change it on Cronhub.")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{attrs:{class:"token function"}},[t._v("curl")]),t._v(" -X "),a("span",{attrs:{class:"token string"}},[t._v('"POST"')]),t._v(" --header "),a("span",{attrs:{class:"token string"}},[t._v('"X-Api-Key: ch_5b67f0d9ee835"')]),t._v("   -d  name"),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token string"}},[t._v("'Cronhub monitor example'")]),t._v("   -d  schedule"),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token string"}},[t._v("'* * * * *'")]),t._v("   -d grace_period"),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v("1   -d timezone"),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token string"}},[t._v("'UTC'")]),t._v(" https://cronhub.io/api/v1/monitors\n")])])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{attrs:{class:"token property"}},[t._v('"success"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token boolean"}},[t._v("true")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{attrs:{class:"token property"}},[t._v('"response"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{attrs:{class:"token property"}},[t._v('"name"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"Cronhub monitor example"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{attrs:{class:"token property"}},[t._v('"code"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"24b70a00-9fef-11e8-aec8-258e1cb2dfaa"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{attrs:{class:"token property"}},[t._v('"schedule"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"* * * * *"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{attrs:{class:"token property"}},[t._v('"grace_period"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("1")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{attrs:{class:"token property"}},[t._v('"timezone"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"UTC"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{attrs:{class:"token property"}},[t._v('"status"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token null"}},[t._v("null")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{attrs:{class:"token property"}},[t._v('"running_time"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token null"}},[t._v("null")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{attrs:{class:"token property"}},[t._v('"running_time_unit"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token null"}},[t._v("null")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{attrs:{class:"token property"}},[t._v('"created_at"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"2018-08-21T21:00:51+00:00"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"update-an-existing-monitor"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#update-an-existing-monitor","aria-hidden":"true"}},[this._v("#")]),this._v(" Update an existing monitor")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{attrs:{class:"token function"}},[t._v("curl")]),t._v(" -X "),a("span",{attrs:{class:"token string"}},[t._v('"PUT"')]),t._v(" --header "),a("span",{attrs:{class:"token string"}},[t._v('"X-Api-Key: api-key"')]),t._v(" \\\n  -d name"),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token string"}},[t._v("'Daily Email Report'")]),t._v(" \\\n  -d schedule"),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token string"}},[t._v("'0 0 * * *'")]),t._v(" \\\n  -d grace_period"),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v("20 \\\n  -d timezone"),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v("UTC \\\n  https://cronhub.io/api/v1/monitors/ff722460-a026-11e8-b4f1-f5e50b7346a6\n")])])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("table",[a("thead",[a("tr",[a("th",[t._v("Argument")]),a("th",{staticStyle:{"text-align":"center"}},[t._v("Description")]),a("th",{staticStyle:{"text-align":"right"}})])]),a("tbody",[a("tr",[a("td",[a("code",[t._v("name")])]),a("td",{staticStyle:{"text-align":"center"}},[t._v("The name of the monitor you want to create")]),a("td",{staticStyle:{"text-align":"right"}},[t._v("Required")])]),a("tr",[a("td",[a("code",[t._v("schedule")])]),a("td",{staticStyle:{"text-align":"center"}},[t._v("The cron schedule (e.g. 0 0 * * *)")]),a("td",{staticStyle:{"text-align":"right"}},[t._v("Required")])]),a("tr",[a("td",[a("code",[t._v("timezone")])]),a("td",{staticStyle:{"text-align":"center"}},[t._v("Your server timezone (e.g. UTC)")]),a("td",{staticStyle:{"text-align":"right"}},[t._v("Required")])]),a("tr",[a("td",[a("code",[t._v("grace_period")])]),a("td",{staticStyle:{"text-align":"center"}},[t._v("Grace period by minutes. The value should be between 1 and 60.")]),a("td",{staticStyle:{"text-align":"right"}},[t._v("Required")])]),a("tr",[a("td",[a("code",[t._v("running_time")])]),a("td",{staticStyle:{"text-align":"center"}},[t._v("The running time threshold. The value should be an integer.")]),a("td",{staticStyle:{"text-align":"right"}},[t._v("Optional")])]),a("tr",[a("td",[a("code",[t._v("running_time_unit")])]),a("td",{staticStyle:{"text-align":"center"}},[t._v("The running time unit. The value should be any of the following time units: "),a("code",[t._v("seconds")]),t._v(", "),a("code",[t._v("minutes")]),t._v(", "),a("code",[t._v("hours")]),t._v(", "),a("code",[t._v("days")]),t._v(", "),a("code",[t._v("weeks")])]),a("td",{staticStyle:{"text-align":"right"}},[t._v("Required only if "),a("code",[t._v("running_time")]),t._v(" is present.")])])])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("curl")]),t._v(" -X "),a("span",{attrs:{class:"token string"}},[t._v('"PUT"')]),t._v(" --header "),a("span",{attrs:{class:"token string"}},[t._v('"X-Api-Key: ch_5b67f0d9ee835"')]),t._v("   -d name"),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token string"}},[t._v("'Daily Email Report'")]),t._v("   -d schedule"),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token string"}},[t._v("'0 0 * * *'")]),t._v("   -d grace_period"),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v("20   -d timezone"),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v("UTC   https://cronhub.io/api/v1/monitors/ff722460-a026-11e8-b4f1-f5e50b7346a6\n")])])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{attrs:{class:"token property"}},[t._v('"success"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token boolean"}},[t._v("true")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{attrs:{class:"token property"}},[t._v('"response"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{attrs:{class:"token property"}},[t._v('"name"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"Daily Email Report"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{attrs:{class:"token property"}},[t._v('"code"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"ff722460-a026-11e8-b4f1-f5e50b7346a6"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{attrs:{class:"token property"}},[t._v('"schedule"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"0 0 * * *"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{attrs:{class:"token property"}},[t._v('"grace_period"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("20")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{attrs:{class:"token property"}},[t._v('"timezone"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"UTC"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{attrs:{class:"token property"}},[t._v('"status"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"new"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{attrs:{class:"token property"}},[t._v('"running_time"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token null"}},[t._v("null")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{attrs:{class:"token property"}},[t._v('"running_time_unit"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token null"}},[t._v("null")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{attrs:{class:"token property"}},[t._v('"created_at"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"2018-08-21T21:00:51+00:00"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"delete-a-monitor"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#delete-a-monitor","aria-hidden":"true"}},[this._v("#")]),this._v(" Delete a monitor")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("code",[this._v("DELETE https://cronhub.io/api/v1/monitors/<monitor-uuid>")]),this._v(" Delete an existing monitor.")])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{attrs:{class:"token function"}},[this._v("curl")]),this._v(" -X "),s("span",{attrs:{class:"token string"}},[this._v('"DELETE"')]),this._v(" --header "),s("span",{attrs:{class:"token string"}},[this._v('"X-Api-Key: api-key"')]),this._v(" https://cronhub.io/api/v1/monitors/4aa80130-995a-11e8-b107-1992dc48b7c2\n")])])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),a("span",{attrs:{class:"token property"}},[t._v('"success"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token boolean"}},[t._v("true")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token property"}},[t._v('"response"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"pause-a-monitor"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#pause-a-monitor","aria-hidden":"true"}},[this._v("#")]),this._v(" Pause a monitor")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("code",[this._v("PUT https://cronhub.io/api/v1/monitors/<monitor-uuid>/pause")]),this._v(" Pause an existing monitor.")])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{attrs:{class:"token function"}},[this._v("curl")]),this._v(" -X "),s("span",{attrs:{class:"token string"}},[this._v('"PUT"')]),this._v(" --header "),s("span",{attrs:{class:"token string"}},[this._v('"X-Api-Key: api-key"')]),this._v(" https://cronhub.io/api/v1/monitors/b5e5e820-9945-11e8-8dd4-23e5bbe40518/pause\n")])])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{attrs:{class:"token property"}},[t._v('"success"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token boolean"}},[t._v("true")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{attrs:{class:"token property"}},[t._v('"response"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{attrs:{class:"token property"}},[t._v('"name"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"My Daily Cron Monitor"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{attrs:{class:"token property"}},[t._v('"code"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"b5e5e820-9945-11e8-8dd4-23e5bbe40518"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{attrs:{class:"token property"}},[t._v('"schedule"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"0 0 * * *"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{attrs:{class:"token property"}},[t._v('"timezone"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"UTC"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{attrs:{class:"token property"}},[t._v('"status"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"paused"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{attrs:{class:"token property"}},[t._v('"last_ping"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"2018-08-12T21:01:08+00:00"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{attrs:{class:"token property"}},[t._v('"running_time"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("2")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{attrs:{class:"token property"}},[t._v('"running_time_unit"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"minutes"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{attrs:{class:"token property"}},[t._v('"created_at"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"2018-08-21T21:00:51+00:00"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])}],!1,null,null,null);s.default=e.exports}}]);