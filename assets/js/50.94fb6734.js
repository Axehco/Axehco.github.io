(window.webpackJsonp=window.webpackJsonp||[]).push([[50],{563:function(t,s,a){t.exports=a.p+"assets/img/0203_001.0150c713.jpg"},564:function(t,s,a){t.exports=a.p+"assets/img/0203_002.e03e0261.jpg"},866:function(t,s,a){"use strict";a.r(s);var e=a(25),n=Object(e.a)({},(function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"_203-移除链表元素"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_203-移除链表元素"}},[t._v("#")]),t._v(" 203. 移除链表元素")]),t._v(" "),e("Valine"),t._v(" "),e("h2",{attrs:{id:"题目描述"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#题目描述"}},[t._v("#")]),t._v(" 题目描述")]),t._v(" "),e("p",[t._v("题目传送门："),e("a",{attrs:{href:"https://leetcode-cn.com/problems/remove-linked-list-elements/",target:"_blank",rel:"noopener noreferrer"}},[t._v("203. 移除链表元素"),e("OutboundLink")],1)]),t._v(" "),e("p",[t._v("给你一个链表的头节点 "),e("code",[t._v("head")]),t._v(" 和一个整数 "),e("code",[t._v("val")]),t._v(" ，请你删除链表中所有满足 "),e("code",[t._v("Node.val == val")]),t._v(" 的节点，并返回 "),e("strong",[t._v("新的头节点")]),t._v(" 。")]),t._v(" "),e("p",[e("strong",[t._v("示例 1：")])]),t._v(" "),e("div",{attrs:{align:"center"}},[e("img",{staticClass:"zoom-custom-imgs",attrs:{src:a(563),width:"400px"}})]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("输入：head = [1,2,6,3,4,5,6], val = 6\n输出：[1,2,3,4,5]\n")])])]),e("p",[e("strong",[t._v("示例 2：")])]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("输入：head = [], val = 1\n输出：[]\n")])])]),e("p",[e("strong",[t._v("示例 3：")])]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("输入：head = [7,7,7,7], val = 7\n输出：[]\n")])])]),e("p",[e("strong",[t._v("提示：")])]),t._v(" "),e("ul",[e("li",[e("p",[t._v("列表中的节点数目在范围 "),e("code",[t._v("[0, 10^4]")]),t._v(" 内")])]),t._v(" "),e("li",[e("p",[e("code",[t._v("1 <= Node.val <= 50")])])]),t._v(" "),e("li",[e("p",[e("code",[t._v("0 <= val <= 50")])])])]),t._v(" "),e("h2",{attrs:{id:"题解"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#题解"}},[t._v("#")]),t._v(" 题解")]),t._v(" "),e("h3",{attrs:{id:"虚拟头结点"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#虚拟头结点"}},[t._v("#")]),t._v(" 虚拟头结点")]),t._v(" "),e("p",[t._v("由于删除头结点和删除中间结点的操作方式不一样，为了避免单独讨论，可以建立一个虚拟头结点"),e("code",[t._v("virhead")]),t._v("来指向"),e("code",[t._v("head")]),t._v("，这样原来的头结点都变成了普通结点，这样原链表的所有节点就都可以按照统一的方式进行移除了。")]),t._v(" "),e("div",{attrs:{align:"center"}},[e("img",{staticClass:"zoom-custom-imgs",attrs:{src:a(564),width:"500px"}})]),t._v(" "),e("div",{staticClass:"language-CPP extra-class"},[e("pre",{pre:!0,attrs:{class:"language-cpp"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/**\n * Definition for singly-linked list.\n * struct ListNode {\n *     int val;\n *     ListNode *next;\n *     ListNode() : val(0), next(nullptr) {}\n *     ListNode(int x) : val(x), next(nullptr) {}\n *     ListNode(int x, ListNode *next) : val(x), next(next) {}\n * };\n */")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Solution")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("\n    ListNode"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("removeElements")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ListNode"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" head"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" val"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        ListNode"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" virhead "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" ListNode"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("  "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// virtual head")]),t._v("\n        virhead"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),t._v("next "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" head"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        ListNode"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" cp "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" virhead"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("  "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// current point")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("while")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("cp"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),t._v("next "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token constant"}},[t._v("NULL")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("cp"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),t._v("next"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),t._v("val "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" val"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                ListNode"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" temp "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" cp"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),t._v("next"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("  "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 临时存储待删除的结点")]),t._v("\n                cp"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),t._v("next "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" cp"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),t._v("next"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),t._v("next"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n                "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("delete")]),t._v(" temp"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                cp "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" cp"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),t._v("next"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        head "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" virhead"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),t._v("next"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("delete")]),t._v(" virhead"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" head"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])],1)}),[],!1,null,null,null);s.default=n.exports}}]);