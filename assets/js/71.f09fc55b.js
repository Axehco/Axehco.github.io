(window.webpackJsonp=window.webpackJsonp||[]).push([[71],{484:function(t,s,a){t.exports=a.p+"assets/img/0021_001.2b038dbe.jpg"},781:function(t,s,a){"use strict";a.r(s);var n=a(25),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h1",{attrs:{id:"_21-合并两个有序链表"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_21-合并两个有序链表"}},[t._v("#")]),t._v(" 21. 合并两个有序链表")]),t._v(" "),n("Valine"),t._v(" "),n("h2",{attrs:{id:"题目描述"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#题目描述"}},[t._v("#")]),t._v(" 题目描述")]),t._v(" "),n("p",[t._v("题目传送门："),n("a",{attrs:{href:"https://leetcode-cn.com/problems/merge-two-sorted-lists/",target:"_blank",rel:"noopener noreferrer"}},[t._v("21. 合并两个有序链表"),n("OutboundLink")],1)]),t._v(" "),n("p",[t._v("将两个升序链表合并为一个新的 "),n("strong",[t._v("升序")]),t._v(" 链表并返回。新链表是通过拼接给定的两个链表的所有节点组成的。")]),t._v(" "),n("div",{attrs:{align:"center"}},[n("img",{staticClass:"zoom-custom-imgs",attrs:{src:a(484),width:"400px"}})]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("输入：l1 = [1,2,4], l2 = [1,3,4]\n输出：[1,1,2,3,4,4]\n")])])]),n("p",[n("strong",[t._v("示例 2：")])]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("输入：l1 = [], l2 = []\n输出：[]\n")])])]),n("p",[n("strong",[t._v("示例 3：")])]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("输入：l1 = [], l2 = [0]\n输出：[0]\n")])])]),n("p",[n("strong",[t._v("提示：")])]),t._v(" "),n("ul",[n("li",[t._v("两个链表的节点数目范围是 "),n("code",[t._v("[0, 50]")])]),t._v(" "),n("li",[n("code",[t._v("-100 <= Node.val <= 100")])]),t._v(" "),n("li",[n("code",[t._v("l1")]),t._v(" 和 "),n("code",[t._v("l2")]),t._v(" 均按 "),n("strong",[t._v("非递减顺序")]),t._v(" 排列")])]),t._v(" "),n("h2",{attrs:{id:"题解"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#题解"}},[t._v("#")]),t._v(" 题解")]),t._v(" "),n("h3",{attrs:{id:"迭代思路"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#迭代思路"}},[t._v("#")]),t._v(" 迭代思路")]),t._v(" "),n("p",[t._v("当 "),n("code",[t._v("l1")]),t._v(" 和"),n("code",[t._v("l2")]),t._v(" 都不是空链表时，判断 "),n("code",[t._v("l1")]),t._v(" 和 "),n("code",[t._v("l2")]),t._v(" 哪一个链表的头节点的值更小，将较小值的节点添加到结果里，右移指针，当一个节点被添加到结果里之后，将对应链表中的节点向后移一位，重复直到其中一个链表指向"),n("code",[t._v("Null")]),t._v("。\n在循环终止的时候， "),n("code",[t._v("l1")]),t._v(" 和 "),n("code",[t._v("l2")]),t._v(" 至多有一个是非空的。由于输入的两个链表都是有序的，所以不管哪个链表是非空的，它包含的所有元素都比前面已经合并链表中的所有元素都要大。因此只需要简单地将非空链表接在合并链表的后面，并返回合并链表即可。")]),t._v(" "),n("h3",{attrs:{id:"代码"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#代码"}},[t._v("#")]),t._v(" 代码")]),t._v(" "),n("div",{staticClass:"language-CPP extra-class"},[n("pre",{pre:!0,attrs:{class:"language-cpp"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/**\n * Definition for singly-linked list.\n * struct ListNode {\n *     int val;\n *     ListNode *next;\n *     ListNode() : val(0), next(nullptr) {}\n *     ListNode(int x) : val(x), next(nullptr) {}\n *     ListNode(int x, ListNode *next) : val(x), next(next) {}\n * };\n */")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Solution")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("\n    ListNode"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("mergeTwoLists")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ListNode"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" l1"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" ListNode"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" l2"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        ListNode"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" head "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" ListNode"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("  "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 注意这个结点初始化调用构造函数也是有值的，返回的时候应该返回head.next")]),t._v("\n        ListNode"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" cur "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" head"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("while")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("l1 "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token constant"}},[t._v("NULL")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" l2 "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token constant"}},[t._v("NULL")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("l1"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),t._v("val "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<=")]),t._v(" l2"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),t._v("val"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                cur"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),t._v("next "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" l1"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n                l1 "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" l1"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),t._v("next"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                cur"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),t._v("next "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" l2"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n                l2 "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" l2"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),t._v("next"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n            cur "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" cur"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),t._v("next"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 合并后 l1 和 l2 最多只有一个还未被合并完，我们直接将链表末尾指向未合并完的链表即可")]),t._v("\n        cur"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),t._v("next "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("l1 "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token constant"}},[t._v("NULL")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),t._v(" l1 "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" l2"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("  "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 0 1 1 2 3 4 4 5 6 7")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" head"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),t._v("next"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])],1)}),[],!1,null,null,null);s.default=e.exports}}]);