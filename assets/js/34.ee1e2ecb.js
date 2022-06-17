(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{626:function(t,s,a){t.exports=a.p+"assets/img/1143_002.d30037f5.png"},627:function(t,s,a){t.exports=a.p+"assets/img/1143_003.ea20010d.png"},628:function(t,s,a){t.exports=a.p+"assets/img/1143_001.8555b292.png"},968:function(t,s,a){"use strict";a.r(s);var n=a(25),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h1",{attrs:{id:"_1143-最长公共子序列"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_1143-最长公共子序列"}},[t._v("#")]),t._v(" 1143. 最长公共子序列")]),t._v(" "),n("Valine"),t._v(" "),n("h2",{attrs:{id:"题目描述"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#题目描述"}},[t._v("#")]),t._v(" 题目描述")]),t._v(" "),n("p",[t._v("题目传送门："),n("a",{attrs:{href:"https://leetcode-cn.com/problems/longest-common-subsequence/",target:"_blank",rel:"noopener noreferrer"}},[t._v("1143. 最长公共子序列"),n("OutboundLink")],1)]),t._v(" "),n("p",[t._v("给定两个字符串 "),n("code",[t._v("text1")]),t._v(" 和 "),n("code",[t._v("text2")]),t._v("，返回这两个字符串的最长 "),n("strong",[t._v("公共子序列")]),t._v(" 的长度。如果不存在 "),n("strong",[t._v("公共子序列")]),t._v(" ，返回 "),n("code",[t._v("0")]),t._v(" 。")]),t._v(" "),n("p",[t._v("一个字符串的 "),n("strong",[t._v("子序列")]),t._v(" 是指这样一个新的字符串：它是由原字符串在不改变字符的相对顺序的情况下删除某些字符（也可以不删除任何字符）后组成的新字符串。")]),t._v(" "),n("ul",[n("li",[t._v("例如，"),n("code",[t._v('"ace"')]),t._v(" 是 "),n("code",[t._v('"abcde"')]),t._v(" 的子序列，但 "),n("code",[t._v('"aec"')]),t._v(" 不是 "),n("code",[t._v('"abcde"')]),t._v(" 的子序列。")])]),t._v(" "),n("p",[t._v("两个字符串的 "),n("strong",[t._v("公共子序列")]),t._v(" 是这两个字符串所共同拥有的子序列。")]),t._v(" "),n("p",[n("strong",[t._v("示例 1：")])]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v('输入：text1 = "abcde", text2 = "ace" \n输出：3  \n解释：最长公共子序列是 "ace" ，它的长度为 3 。\n')])])]),n("p",[n("strong",[t._v("示例 2：")])]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v('输入：text1 = "abc", text2 = "abc"\n输出：3\n解释：最长公共子序列是 "abc" ，它的长度为 3 。\n')])])]),n("p",[n("strong",[t._v("示例 3：")])]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v('输入：text1 = "abc", text2 = "def"\n输出：0\n解释：两个字符串没有公共子序列，返回 0 。\n')])])]),n("p",[n("strong",[t._v("提示：")])]),t._v(" "),n("ul",[n("li",[n("code",[t._v("1 <= text1.length, text2.length <= 1000")])]),t._v(" "),n("li",[n("code",[t._v("text1")]),t._v(" 和 "),n("code",[t._v("text2")]),t._v(" 仅由小写英文字符组成。")])]),t._v(" "),n("h2",{attrs:{id:"题解"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#题解"}},[t._v("#")]),t._v(" 题解")]),t._v(" "),n("p",[t._v("经典的动态规划问题。")]),t._v(" "),n("p",[t._v("做题之前要注意两个概念，一个是 "),n("strong",[t._v("子序列")]),t._v(" 另一个是 "),n("strong",[t._v("子字符串")]),t._v("  ，子序列可以不连续，但是子字符串是连续的， "),n("RouterLink",{attrs:{to:"/views/LeetCode/0718. 最长重复子数组.html"}},[t._v("718. 最长重复子数组")]),t._v(" 这个题求得最长重复子数组其实就是最长子字符串。")],1),t._v(" "),n("blockquote",[n("p",[t._v("1、定义"),n("code",[t._v("dp数组")])])]),t._v(" "),n("p",[n("code",[t._v("dp[i][j]")]),t._v(" ：表示 "),n("code",[t._v("text1")]),t._v("中下标为"),n("code",[t._v("[1:i]")]),t._v(" 和 "),n("code",[t._v("text2")]),t._v("中下标为"),n("code",[t._v("[1:j]")]),t._v(" 的最长公共子序列长度。 注意是要包含两端的，注意下标从"),n("code",[t._v("1")]),t._v("开始。")]),t._v(" "),n("blockquote",[n("p",[t._v("2、确定状态转移方程")])]),t._v(" "),n("ul",[n("li",[t._v("当"),n("code",[t._v("text1[i] == text2[j]")]),t._v("时，也就是说两个字符串的最后一位"),n("code",[t._v("text1[i]")]),t._v("和"),n("code",[t._v("text2[j]")]),t._v(" "),n("strong",[t._v("相等")]),t._v(" ，那么问题就转化成了 字符串"),n("code",[t._v("text1")]),t._v("的"),n("code",[t._v("text1[1,i-1]")]),t._v("区间 和 字符串"),n("code",[t._v("text2")]),t._v("的"),n("code",[t._v("text2[1,j-1]")]),t._v("区间 的最长公共子序列长度再加"),n("code",[t._v("1")]),t._v("，就有："),n("code",[t._v("dp[i][j] = dp[i-1][j-1] + 1")]),t._v(" 。比如"),n("code",[t._v("abc")]),t._v("和"),n("code",[t._v("dec")]),t._v("的最长公共子序列长度等于"),n("code",[t._v("ab")]),t._v("和"),n("code",[t._v("de")]),t._v("的最长公共子序列长度加"),n("code",[t._v("1")]),t._v("， 即"),n("code",[t._v("0 + 1 = 1")])])]),t._v(" "),n("div",{attrs:{align:"center"}},[n("img",{staticClass:"zoom-custom-imgs",attrs:{src:a(626),width:"500px"}})]),t._v(" "),n("ul",[n("li",[t._v("当"),n("code",[t._v("text1[i] != text2[j]")]),t._v("时，也就是说两个字符串的最后一位"),n("code",[t._v("text1[i]")]),t._v("和"),n("code",[t._v("text2[j]")]),t._v(" "),n("strong",[t._v("不相等")]),t._v(" ，那么此时"),n("code",[t._v("dp[i][j]")]),t._v("应该是"),n("code",[t._v("dp[i-1][j]")]),t._v("和"),n("code",[t._v("dp[i][j-1]")]),t._v("的最大值。比如"),n("code",[t._v("acf")]),t._v("和"),n("code",[t._v("cfe")]),t._v("，他们的最长公共子序列长度 "),n("strong",[t._v("等于")]),t._v(" "),n("code",[t._v("acf")]),t._v("与"),n("code",[t._v("cf")]),t._v("的最长公共子序列长度"),n("code",[t._v("2")]),t._v(" 和 "),n("code",[t._v("ac")]),t._v("与"),n("code",[t._v("cf")]),t._v("的最长公共子序列长度为"),n("code",[t._v("1")]),t._v(" 的最大值，即"),n("code",[t._v("2")]),t._v(" 。")])]),t._v(" "),n("div",{attrs:{align:"center"}},[n("img",{staticClass:"zoom-custom-imgs",attrs:{src:a(627),width:"600px"}})]),t._v(" "),n("p",[t._v("于是得到状态转移方程为：")]),t._v(" "),n("div",{attrs:{align:"center"}},[n("img",{staticClass:"zoom-custom-imgs",attrs:{src:a(628)}})]),t._v(" "),n("blockquote",[n("p",[t._v("3、边界条件")])]),t._v(" "),n("p",[t._v("因为"),n("code",[t._v("dp[i][j]")]),t._v("的推导依赖于"),n("code",[t._v("dp[i-1][j-1]")]),t._v("，虽然下标从1开始，但是也要从"),n("code",[t._v("0")]),t._v("开始初始化。")]),t._v(" "),n("p",[t._v("当"),n("code",[t._v("i==0 || j==0")]),t._v("时，其中一个为空串，此时最长公共子序列长度为"),n("code",[t._v("0")])]),t._v(" "),n("p",[t._v("因此当"),n("code",[t._v("i==0 || j==0")]),t._v("时， "),n("code",[t._v("dp[i][j]")]),t._v("都为"),n("code",[t._v("0")]),t._v(" 。")]),t._v(" "),n("blockquote",[n("p",[t._v("4、确定dp数组的计算顺序")])]),t._v(" "),n("p",[n("code",[t._v("dp[i][j]")]),t._v("依赖于"),n("code",[t._v("dp[i-1][j-1]")]),t._v(" 、 "),n("code",[t._v("dp[i-1][j]")]),t._v(" 、 "),n("code",[t._v("dp[i][j-1]")]),t._v(" ，因此"),n("code",[t._v("i")]),t._v("和"),n("code",[t._v("j")]),t._v("都从小到大即可。")]),t._v(" "),n("p",[t._v("代码如下：")]),t._v(" "),n("div",{staticClass:"language-java extra-class"},[n("pre",{pre:!0,attrs:{class:"language-java"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Solution")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("longestCommonSubsequence")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),t._v(" text1"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),t._v(" text2"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" dp "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("text1"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("length")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("text2"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("length")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" i "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" i "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<=")]),t._v(" text1"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("length")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" i"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" j "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" j "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<=")]),t._v(" text2"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("length")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" j"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("text1"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("charAt")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("i "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" text2"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("charAt")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("j "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                    dp"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("i"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("j"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" dp"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("i "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("j "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n                "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                    dp"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("i"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("j"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Math")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("max")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("dp"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("i"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("j "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" dp"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("i "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("j"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n                "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" dp"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("text1"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("length")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("text2"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("length")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])],1)}),[],!1,null,null,null);s.default=e.exports}}]);