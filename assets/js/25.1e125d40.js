(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{379:function(e,t,s){"use strict";s.r(t);var a=s(6),o=Object(a.a)({},(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h1",{attrs:{id:"prefix-search"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#prefix-search"}},[e._v("#")]),e._v(" Prefix Search")]),e._v(" "),s("p",[e._v("In MeiliSearch, "),s("strong",[e._v("the search is possible even with a single letter sent")]),e._v(".")]),e._v(" "),s("p",[e._v("A prefix search is when the documents sorting starts by comparing your search query with the start of each word in your dataset.")]),e._v(" "),s("p",[e._v("All words beginning with this letter are added to the "),s("RouterLink",{attrs:{to:"/guides/advanced_guides/bucket_sort.html"}},[e._v("bucket sort")]),e._v(", and then the other "),s("RouterLink",{attrs:{to:"/guides/main_concepts/relevancy.html"}},[e._v("ranking rules")]),e._v(" are applied.")],1),e._v(" "),s("div",{staticClass:"custom-block note"},[s("p",{staticClass:"custom-block-title"},[e._v("NOTE")]),e._v(" "),s("p",[e._v("Searching by prefix has a significant impact on search time. The shorter the word, the more possible matches in the documents increase.")])]),e._v(" "),s("h3",{attrs:{id:"example"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#example"}},[e._v("#")]),e._v(" Example")]),e._v(" "),s("p",[e._v("Given a set of words in a dataset:")]),e._v(" "),s("p",[s("code",[e._v("film")]),e._v(" "),s("code",[e._v("cinema")]),e._v(" "),s("code",[e._v("movies")]),e._v(" "),s("code",[e._v("show")]),e._v(" "),s("code",[e._v("harry")]),e._v(" "),s("code",[e._v("potter")]),e._v(" "),s("code",[e._v("shine")]),e._v(" "),s("code",[e._v("musical")])]),e._v(" "),s("p",[e._v("query: "),s("code",[e._v("s")]),e._v(":"),s("br"),e._v("\nresponse:")]),e._v(" "),s("ul",[s("li",[s("code",[e._v("show")])]),e._v(" "),s("li",[s("code",[e._v("shine")])])]),e._v(" "),s("p",[e._v("but not")]),e._v(" "),s("ul",[s("li",[s("code",[e._v("movies")])]),e._v(" "),s("li",[s("code",[e._v("musical")])])]),e._v(" "),s("p",[e._v("query: "),s("code",[e._v("sho")]),e._v(":"),s("br"),e._v("\nresponse:")]),e._v(" "),s("ul",[s("li",[s("code",[e._v("show")])])]),e._v(" "),s("p",[e._v("Notice that a prefix search is only done for the last word of a query, other words must be of the same length but can contain typos.")]),e._v(" "),s("p",[e._v("MeiliSearch also handles typos while performing the prefix search. You can "),s("RouterLink",{attrs:{to:"/guides/advanced_guides/typotolerance.html#typo-tolerance-rules"}},[e._v("read more about the typo rules on the dedicated page")]),e._v(".")],1),e._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[e._v("TIP")]),e._v(" "),s("p",[e._v("We also "),s("RouterLink",{attrs:{to:"/guides/advanced_guides/concat.html"}},[e._v("apply splitting and concatenating on search queries")]),e._v(".")],1)])])}),[],!1,null,null,null);t.default=o.exports}}]);