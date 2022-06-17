(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{553:function(t,s,a){t.exports=a.p+"assets/img/0160_001.07181499.png"},554:function(t,s,a){t.exports=a.p+"assets/img/0160_002.15c39891.png"},555:function(t,s,a){t.exports=a.p+"assets/img/0160_003.a889844f.png"},556:function(t,s,a){t.exports=a.p+"assets/img/0160_004.c3bf8503.png"},557:function(t,s,a){t.exports=a.p+"assets/img/0160_005.e98f9c9f.png"},856:function(t,s,a){"use strict";a.r(s);var n=a(25),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h1",{attrs:{id:"_160-相交链表"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_160-相交链表"}},[t._v("#")]),t._v(" 160. 相交链表")]),t._v(" "),n("Valine"),t._v(" "),n("h2",{attrs:{id:"题目描述"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#题目描述"}},[t._v("#")]),t._v(" 题目描述")]),t._v(" "),n("p",[t._v("题目传送门："),n("a",{attrs:{href:"https://leetcode-cn.com/problems/intersection-of-two-linked-lists/",target:"_blank",rel:"noopener noreferrer"}},[t._v("160. 相交链表"),n("OutboundLink")],1)]),t._v(" "),n("p",[t._v("给你两个单链表的头节点 "),n("code",[t._v("headA")]),t._v(" 和 "),n("code",[t._v("headB")]),t._v(" ，请你找出并返回两个单链表相交的起始节点。如果两个链表没有交点，返回 "),n("code",[t._v("null")]),t._v(" 。")]),t._v(" "),n("p",[t._v("图示两个链表在节点 "),n("code",[t._v("c1")]),t._v(" 开始相交：")]),t._v(" "),n("div",{attrs:{align:"center"}},[n("img",{staticClass:"zoom-custom-imgs",attrs:{src:a(553),width:"400px"}})]),t._v(" "),n("p",[t._v("题目数据 "),n("strong",[t._v("保证")]),t._v(" 整个链式结构中不存在环。")]),t._v(" "),n("p",[n("strong",[t._v("注意")]),t._v("，函数返回结果后，链表必须 "),n("strong",[t._v("保持其原始结构")]),t._v(" 。")]),t._v(" "),n("p",[n("strong",[t._v("示例 1：")])]),t._v(" "),n("div",{attrs:{align:"center"}},[n("img",{staticClass:"zoom-custom-imgs",attrs:{src:a(554),width:"400px"}})]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("输入：intersectVal = 8, listA = [4,1,8,4,5], listB = [5,0,1,8,4,5], skipA = 2, skipB = 3\n输出：Intersected at '8'\n解释：相交节点的值为 8 （注意，如果两个链表相交则不能为 0）。\n从各自的表头开始算起，链表 A 为 [4,1,8,4,5]，链表 B 为 [5,0,1,8,4,5]。\n在 A 中，相交节点前有 2 个节点；在 B 中，相交节点前有 3 个节点。\n")])])]),n("p",[n("strong",[t._v("示例 2：")])]),t._v(" "),n("div",{attrs:{align:"center"}},[n("img",{staticClass:"zoom-custom-imgs",attrs:{src:a(555),width:"400px"}})]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("输入：intersectVal = 2, listA = [0,9,1,2,4], listB = [3,2,4], skipA = 3, skipB = 1\n输出：Intersected at '2'\n解释：相交节点的值为 2 （注意，如果两个链表相交则不能为 0）。\n从各自的表头开始算起，链表 A 为 [0,9,1,2,4]，链表 B 为 [3,2,4]。\n在 A 中，相交节点前有 3 个节点；在 B 中，相交节点前有 1 个节点。\n")])])]),n("p",[n("strong",[t._v("示例 3：")])]),t._v(" "),n("div",{attrs:{align:"center"}},[n("img",{staticClass:"zoom-custom-imgs",attrs:{src:a(556),width:"300px"}})]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("输入：intersectVal = 0, listA = [2,6,4], listB = [1,5], skipA = 3, skipB = 2\n输出：null\n解释：从各自的表头开始算起，链表 A 为 [2,6,4]，链表 B 为 [1,5]。\n由于这两个链表不相交，所以 intersectVal 必须为 0，而 skipA 和 skipB 可以是任意值。\n这两个链表不相交，因此返回 null 。\n")])])]),n("p",[n("strong",[t._v("提示：")])]),t._v(" "),n("ul",[n("li",[n("code",[t._v("listA")]),t._v(" 中节点数目为 "),n("code",[t._v("m")])]),t._v(" "),n("li",[n("code",[t._v("listB")]),t._v(" 中节点数目为 "),n("code",[t._v("n")])]),t._v(" "),n("li",[n("code",[t._v("0 <= m, n <= 3 * 10^4")])]),t._v(" "),n("li",[n("code",[t._v("1 <= Node.val <= 10^5")])]),t._v(" "),n("li",[n("code",[t._v("0 <= skipA <= m")])]),t._v(" "),n("li",[n("code",[t._v("0 <= skipB <= n")])]),t._v(" "),n("li",[t._v("如果 "),n("code",[t._v("listA")]),t._v(" 和 "),n("code",[t._v("listB")]),t._v(" 没有交点，"),n("code",[t._v("intersectVal")]),t._v(" 为 "),n("code",[t._v("0")])]),t._v(" "),n("li",[t._v("如果 "),n("code",[t._v("listA")]),t._v(" 和 "),n("code",[t._v("listB")]),t._v(" 有交点，"),n("code",[t._v("intersectVal == listA[skipA + 1] == listB[skipB + 1]")])])]),t._v(" "),n("p",[t._v("**进阶：**你能否设计一个时间复杂度 "),n("code",[t._v("O(n)")]),t._v(" 、仅用 "),n("code",[t._v("O(1)")]),t._v(" 内存的解决方案？")]),t._v(" "),n("h2",{attrs:{id:"题解"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#题解"}},[t._v("#")]),t._v(" 题解")]),t._v(" "),n("h4",{attrs:{id:"双指针"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#双指针"}},[t._v("#")]),t._v(" 双指针")]),t._v(" "),n("p",[t._v("先求出链表"),n("code",[t._v("headA")]),t._v("和"),n("code",[t._v("headB")]),t._v("的长度，移动长度较长的链表，使定义的"),n("code",[t._v("curA")]),t._v("和"),n("code",[t._v("curB")]),t._v("对齐，然后遍历到末尾，看其结点是否相等。注意这里的判断是交点处的指针相等，不是结点的数值相等。")]),t._v(" "),n("p",[t._v("还有一个隐藏条件是：两个相交链表的最后节点始终相同。一旦它们相交，之后的所有节点将相等。因此找到第一个相等的结点，就返回此结点，后面结点的必然是相等的。")]),t._v(" "),n("div",{attrs:{align:"center"}},[n("img",{staticClass:"zoom-custom-imgs",attrs:{src:a(557)}})]),t._v(" "),n("div",{staticClass:"language-CPP extra-class"},[n("pre",{pre:!0,attrs:{class:"language-cpp"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/**\n * Definition for singly-linked list.\n * struct ListNode {\n *     int val;\n *     ListNode *next;\n *     ListNode(int x) : val(x), next(NULL) {}\n * };\n */")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Solution")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("\n    ListNode "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("getIntersectionNode")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ListNode "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("headA"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" ListNode "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("headB"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        ListNode"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" curA "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" headA"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        ListNode"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" curB "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" headB"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 统计两个链表的长度")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" lenA "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" lenB "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("while")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("curA "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token constant"}},[t._v("NULL")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            lenA"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            curA "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" curA"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),t._v("next"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("while")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("curB "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token constant"}},[t._v("NULL")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            lenB"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            curB "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" curB"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),t._v("next"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 使长度较长的链表移动前面多余的指针")]),t._v("\n        curA "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" headA"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        curB "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" headB"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("lenA "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<=")]),t._v(" lenB"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" i "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" i "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" lenB "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" lenA"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),t._v("i"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                curB "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" curB"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),t._v("next"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" i "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" i "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" lenA "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" lenB"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),t._v("i"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                curA "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" curA"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),t._v("next"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 开始遍历其中一个链表，看指针是否相同")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("while")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("curA "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token constant"}},[t._v("NULL")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("curA "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" curB"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" curA"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n            curA "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" curA"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),t._v("next"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            curB "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" curB"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),t._v("next"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token constant"}},[t._v("NULL")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])],1)}),[],!1,null,null,null);s.default=e.exports}}]);