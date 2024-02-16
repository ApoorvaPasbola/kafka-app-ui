import {
  ChevronRightIcon,
  PlusIcon
} from "./chunk-NWORTTRL.js";
import {
  ChevronDownIcon,
  Scroller,
  ScrollerModule,
  SearchIcon
} from "./chunk-XEJLX2ZZ.js";
import {
  CheckIcon
} from "./chunk-6UPC6KDT.js";
import {
  SpinnerIcon
} from "./chunk-56GZT6QR.js";
import {
  BaseIcon
} from "./chunk-2GICR3ZQ.js";
import {
  Ripple,
  RippleModule
} from "./chunk-V52UBVZY.js";
import {
  DomHandler
} from "./chunk-3SQF7L7O.js";
import {
  ObjectUtils,
  PrimeNGConfig,
  PrimeTemplate,
  SharedModule,
  TranslationKeys,
  TreeDragDropService
} from "./chunk-KHPSCMWF.js";
import {
  CommonModule,
  NgClass,
  NgForOf,
  NgIf,
  NgStyle,
  NgTemplateOutlet
} from "./chunk-42MLWHQO.js";
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ContentChildren,
  ElementRef,
  EventEmitter,
  Inject,
  Input,
  NgModule,
  Optional,
  Output,
  ViewChild,
  ViewEncapsulation$1,
  forwardRef,
  setClassMetadata,
  ɵɵInheritDefinitionFeature,
  ɵɵNgOnChangesFeature,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassMap,
  ɵɵcontentQuery,
  ɵɵdefineComponent,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementContainer,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵgetInheritedFactory,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵpureFunction1,
  ɵɵpureFunction2,
  ɵɵpureFunction3,
  ɵɵpureFunction4,
  ɵɵqueryRefresh,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵstyleMap,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵviewQuery
} from "./chunk-MUPCDZEB.js";
import {
  __spreadValues
} from "./chunk-SXIXOCJ4.js";

// node_modules/primeng/fesm2022/primeng-icons-minus.mjs
var MinusIcon = class _MinusIcon extends BaseIcon {
  static ɵfac = /* @__PURE__ */ (() => {
    let ɵMinusIcon_BaseFactory;
    return function MinusIcon_Factory(t) {
      return (ɵMinusIcon_BaseFactory || (ɵMinusIcon_BaseFactory = ɵɵgetInheritedFactory(_MinusIcon)))(t || _MinusIcon);
    };
  })();
  static ɵcmp = ɵɵdefineComponent({
    type: _MinusIcon,
    selectors: [["MinusIcon"]],
    standalone: true,
    features: [ɵɵInheritDefinitionFeature, ɵɵStandaloneFeature],
    decls: 2,
    vars: 5,
    consts: [["width", "14", "height", "14", "viewBox", "0 0 14 14", "fill", "none", "xmlns", "http://www.w3.org/2000/svg"], ["d", "M13.2222 7.77778H0.777778C0.571498 7.77778 0.373667 7.69584 0.227806 7.54998C0.0819442 7.40412 0 7.20629 0 7.00001C0 6.79373 0.0819442 6.5959 0.227806 6.45003C0.373667 6.30417 0.571498 6.22223 0.777778 6.22223H13.2222C13.4285 6.22223 13.6263 6.30417 13.7722 6.45003C13.9181 6.5959 14 6.79373 14 7.00001C14 7.20629 13.9181 7.40412 13.7722 7.54998C13.6263 7.69584 13.4285 7.77778 13.2222 7.77778Z", "fill", "currentColor"]],
    template: function MinusIcon_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵnamespaceSVG();
        ɵɵelementStart(0, "svg", 0);
        ɵɵelement(1, "path", 1);
        ɵɵelementEnd();
      }
      if (rf & 2) {
        ɵɵclassMap(ctx.getClassNames());
        ɵɵattribute("aria-label", ctx.ariaLabel)("aria-hidden", ctx.ariaHidden)("role", ctx.role);
      }
    },
    dependencies: [CommonModule],
    encapsulation: 2
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MinusIcon, [{
    type: Component,
    args: [{
      selector: "MinusIcon",
      standalone: true,
      imports: [CommonModule, BaseIcon],
      template: `
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg" [attr.aria-label]="ariaLabel" [attr.aria-hidden]="ariaHidden" [attr.role]="role" [class]="getClassNames()">
            <path
                d="M13.2222 7.77778H0.777778C0.571498 7.77778 0.373667 7.69584 0.227806 7.54998C0.0819442 7.40412 0 7.20629 0 7.00001C0 6.79373 0.0819442 6.5959 0.227806 6.45003C0.373667 6.30417 0.571498 6.22223 0.777778 6.22223H13.2222C13.4285 6.22223 13.6263 6.30417 13.7722 6.45003C13.9181 6.5959 14 6.79373 14 7.00001C14 7.20629 13.9181 7.40412 13.7722 7.54998C13.6263 7.69584 13.4285 7.77778 13.2222 7.77778Z"
                fill="currentColor"
            />
        </svg>
    `
    }]
  }], null, null);
})();

// node_modules/primeng/fesm2022/primeng-tree.mjs
var _c0 = (a0) => ({
  "p-treenode-droppoint-active": a0
});
function UITreeNode_ng_template_0_li_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "li", 4);
    ɵɵlistener("drop", function UITreeNode_ng_template_0_li_0_Template_li_drop_0_listener($event) {
      ɵɵrestoreView(_r6);
      const ctx_r5 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r5.onDropPoint($event, -1));
    })("dragover", function UITreeNode_ng_template_0_li_0_Template_li_dragover_0_listener($event) {
      ɵɵrestoreView(_r6);
      const ctx_r7 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r7.onDropPointDragOver($event));
    })("dragenter", function UITreeNode_ng_template_0_li_0_Template_li_dragenter_0_listener($event) {
      ɵɵrestoreView(_r6);
      const ctx_r8 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r8.onDropPointDragEnter($event, -1));
    })("dragleave", function UITreeNode_ng_template_0_li_0_Template_li_dragleave_0_listener($event) {
      ɵɵrestoreView(_r6);
      const ctx_r9 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r9.onDropPointDragLeave($event));
    });
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(2);
    ɵɵproperty("ngClass", ɵɵpureFunction1(1, _c0, ctx_r1.draghoverPrev));
  }
}
function UITreeNode_ng_template_0_li_1_ng_container_3_ChevronRightIcon_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "ChevronRightIcon", 14);
  }
  if (rf & 2) {
    ɵɵproperty("styleClass", "p-tree-toggler-icon");
  }
}
function UITreeNode_ng_template_0_li_1_ng_container_3_ChevronDownIcon_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "ChevronDownIcon", 14);
  }
  if (rf & 2) {
    ɵɵproperty("styleClass", "p-tree-toggler-icon");
  }
}
function UITreeNode_ng_template_0_li_1_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, UITreeNode_ng_template_0_li_1_ng_container_3_ChevronRightIcon_1_Template, 1, 1, "ChevronRightIcon", 13)(2, UITreeNode_ng_template_0_li_1_ng_container_3_ChevronDownIcon_2_Template, 1, 1, "ChevronDownIcon", 13);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r10 = ɵɵnextContext(3);
    ɵɵadvance();
    ɵɵproperty("ngIf", !ctx_r10.node.expanded);
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r10.node.expanded);
  }
}
function UITreeNode_ng_template_0_li_1_span_4_1_ng_template_0_Template(rf, ctx) {
}
function UITreeNode_ng_template_0_li_1_span_4_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, UITreeNode_ng_template_0_li_1_span_4_1_ng_template_0_Template, 0, 0, "ng-template");
  }
}
var _c1 = (a0) => ({
  $implicit: a0
});
function UITreeNode_ng_template_0_li_1_span_4_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span", 15);
    ɵɵtemplate(1, UITreeNode_ng_template_0_li_1_span_4_1_Template, 1, 0, null, 16);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r11 = ɵɵnextContext(3);
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", ctx_r11.tree.togglerIconTemplate)("ngTemplateOutletContext", ɵɵpureFunction1(2, _c1, ctx_r11.node.expanded));
  }
}
function UITreeNode_ng_template_0_li_1_div_5_ng_container_2_CheckIcon_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "CheckIcon", 14);
  }
  if (rf & 2) {
    ɵɵproperty("styleClass", "p-checkbox-icon");
  }
}
function UITreeNode_ng_template_0_li_1_div_5_ng_container_2_MinusIcon_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "MinusIcon", 14);
  }
  if (rf & 2) {
    ɵɵproperty("styleClass", "p-checkbox-icon");
  }
}
function UITreeNode_ng_template_0_li_1_div_5_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, UITreeNode_ng_template_0_li_1_div_5_ng_container_2_CheckIcon_1_Template, 1, 1, "CheckIcon", 13)(2, UITreeNode_ng_template_0_li_1_div_5_ng_container_2_MinusIcon_2_Template, 1, 1, "MinusIcon", 13);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r21 = ɵɵnextContext(4);
    ɵɵadvance();
    ɵɵproperty("ngIf", !ctx_r21.node.partialSelected && ctx_r21.isSelected());
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r21.node.partialSelected);
  }
}
function UITreeNode_ng_template_0_li_1_div_5_3_ng_template_0_Template(rf, ctx) {
}
function UITreeNode_ng_template_0_li_1_div_5_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, UITreeNode_ng_template_0_li_1_div_5_3_ng_template_0_Template, 0, 0, "ng-template");
  }
}
var _c2 = (a0) => ({
  "p-checkbox-disabled p-disabled": a0
});
var _c3 = (a0, a1) => ({
  "p-highlight": a0,
  "p-indeterminate": a1
});
var _c4 = (a0, a1) => ({
  $implicit: a0,
  partialSelected: a1
});
function UITreeNode_ng_template_0_li_1_div_5_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 17)(1, "div", 18);
    ɵɵtemplate(2, UITreeNode_ng_template_0_li_1_div_5_ng_container_2_Template, 3, 2, "ng-container", 8)(3, UITreeNode_ng_template_0_li_1_div_5_3_Template, 1, 0, null, 16);
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const ctx_r12 = ɵɵnextContext(3);
    ɵɵproperty("ngClass", ɵɵpureFunction1(5, _c2, ctx_r12.node.selectable === false));
    ɵɵadvance();
    ɵɵproperty("ngClass", ɵɵpureFunction2(7, _c3, ctx_r12.isSelected(), ctx_r12.node.partialSelected));
    ɵɵadvance();
    ɵɵproperty("ngIf", !ctx_r12.tree.checkboxIconTemplate);
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", ctx_r12.tree.checkboxIconTemplate)("ngTemplateOutletContext", ɵɵpureFunction2(10, _c4, ctx_r12.isSelected(), ctx_r12.node.partialSelected));
  }
}
function UITreeNode_ng_template_0_li_1_span_6_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "span");
  }
  if (rf & 2) {
    const ctx_r13 = ɵɵnextContext(3);
    ɵɵclassMap(ctx_r13.getIcon());
  }
}
function UITreeNode_ng_template_0_li_1_span_8_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span");
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r14 = ɵɵnextContext(3);
    ɵɵadvance();
    ɵɵtextInterpolate(ctx_r14.node.label);
  }
}
function UITreeNode_ng_template_0_li_1_span_9_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function UITreeNode_ng_template_0_li_1_span_9_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span");
    ɵɵtemplate(1, UITreeNode_ng_template_0_li_1_span_9_ng_container_1_Template, 1, 0, "ng-container", 16);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r15 = ɵɵnextContext(3);
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", ctx_r15.tree.getTemplateForNode(ctx_r15.node))("ngTemplateOutletContext", ɵɵpureFunction1(2, _c1, ctx_r15.node));
  }
}
function UITreeNode_ng_template_0_li_1_ul_10_p_treeNode_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "p-treeNode", 21);
  }
  if (rf & 2) {
    const childNode_r28 = ctx.$implicit;
    const firstChild_r29 = ctx.first;
    const lastChild_r30 = ctx.last;
    const index_r31 = ctx.index;
    const ctx_r27 = ɵɵnextContext(4);
    ɵɵproperty("node", childNode_r28)("parentNode", ctx_r27.node)("firstChild", firstChild_r29)("lastChild", lastChild_r30)("index", index_r31)("itemSize", ctx_r27.itemSize)("level", ctx_r27.level + 1);
  }
}
function UITreeNode_ng_template_0_li_1_ul_10_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "ul", 19);
    ɵɵtemplate(1, UITreeNode_ng_template_0_li_1_ul_10_p_treeNode_1_Template, 1, 7, "p-treeNode", 20);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r16 = ɵɵnextContext(3);
    ɵɵstyleProp("display", ctx_r16.node.expanded ? "block" : "none");
    ɵɵadvance();
    ɵɵproperty("ngForOf", ctx_r16.node.children)("ngForTrackBy", ctx_r16.tree.trackBy);
  }
}
var _c5 = (a1, a2) => ["p-treenode", a1, a2];
var _c6 = (a0) => ({
  height: a0
});
var _c7 = (a0, a1, a2) => ({
  "p-treenode-selectable": a0,
  "p-treenode-dragover": a1,
  "p-highlight": a2
});
function UITreeNode_ng_template_0_li_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r33 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "li", 5);
    ɵɵlistener("keydown", function UITreeNode_ng_template_0_li_1_Template_li_keydown_0_listener($event) {
      ɵɵrestoreView(_r33);
      const ctx_r32 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r32.onKeyDown($event));
    });
    ɵɵelementStart(1, "div", 6);
    ɵɵlistener("click", function UITreeNode_ng_template_0_li_1_Template_div_click_1_listener($event) {
      ɵɵrestoreView(_r33);
      const ctx_r34 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r34.onNodeClick($event));
    })("contextmenu", function UITreeNode_ng_template_0_li_1_Template_div_contextmenu_1_listener($event) {
      ɵɵrestoreView(_r33);
      const ctx_r35 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r35.onNodeRightClick($event));
    })("touchend", function UITreeNode_ng_template_0_li_1_Template_div_touchend_1_listener() {
      ɵɵrestoreView(_r33);
      const ctx_r36 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r36.onNodeTouchEnd());
    })("drop", function UITreeNode_ng_template_0_li_1_Template_div_drop_1_listener($event) {
      ɵɵrestoreView(_r33);
      const ctx_r37 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r37.onDropNode($event));
    })("dragover", function UITreeNode_ng_template_0_li_1_Template_div_dragover_1_listener($event) {
      ɵɵrestoreView(_r33);
      const ctx_r38 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r38.onDropNodeDragOver($event));
    })("dragenter", function UITreeNode_ng_template_0_li_1_Template_div_dragenter_1_listener($event) {
      ɵɵrestoreView(_r33);
      const ctx_r39 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r39.onDropNodeDragEnter($event));
    })("dragleave", function UITreeNode_ng_template_0_li_1_Template_div_dragleave_1_listener($event) {
      ɵɵrestoreView(_r33);
      const ctx_r40 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r40.onDropNodeDragLeave($event));
    })("dragstart", function UITreeNode_ng_template_0_li_1_Template_div_dragstart_1_listener($event) {
      ɵɵrestoreView(_r33);
      const ctx_r41 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r41.onDragStart($event));
    })("dragend", function UITreeNode_ng_template_0_li_1_Template_div_dragend_1_listener($event) {
      ɵɵrestoreView(_r33);
      const ctx_r42 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r42.onDragStop($event));
    });
    ɵɵelementStart(2, "button", 7);
    ɵɵlistener("click", function UITreeNode_ng_template_0_li_1_Template_button_click_2_listener($event) {
      ɵɵrestoreView(_r33);
      const ctx_r43 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r43.toggle($event));
    });
    ɵɵtemplate(3, UITreeNode_ng_template_0_li_1_ng_container_3_Template, 3, 2, "ng-container", 8)(4, UITreeNode_ng_template_0_li_1_span_4_Template, 2, 4, "span", 9);
    ɵɵelementEnd();
    ɵɵtemplate(5, UITreeNode_ng_template_0_li_1_div_5_Template, 4, 13, "div", 10)(6, UITreeNode_ng_template_0_li_1_span_6_Template, 1, 2, "span", 3);
    ɵɵelementStart(7, "span", 11);
    ɵɵtemplate(8, UITreeNode_ng_template_0_li_1_span_8_Template, 2, 1, "span", 8)(9, UITreeNode_ng_template_0_li_1_span_9_Template, 2, 4, "span", 8);
    ɵɵelementEnd()();
    ɵɵtemplate(10, UITreeNode_ng_template_0_li_1_ul_10_Template, 2, 4, "ul", 12);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext(2);
    ɵɵstyleMap(ctx_r2.node.style);
    ɵɵproperty("ngClass", ɵɵpureFunction2(24, _c5, ctx_r2.node.styleClass || "", ctx_r2.isLeaf() ? "p-treenode-leaf" : ""))("ngStyle", ɵɵpureFunction1(27, _c6, ctx_r2.itemSize + "px"));
    ɵɵattribute("aria-label", ctx_r2.node.label)("aria-checked", ctx_r2.ariaChecked)("aria-setsize", ctx_r2.node.children ? ctx_r2.node.children.length : 0)("aria-selected", ctx_r2.ariaSelected)("aria-expanded", ctx_r2.node.expanded)("aria-posinset", ctx_r2.index + 1)("aria-level", ctx_r2.level)("tabindex", ctx_r2.index === 0 ? 0 : -1);
    ɵɵadvance();
    ɵɵstyleProp("padding-left", ctx_r2.level * ctx_r2.indentation + "rem");
    ɵɵproperty("draggable", ctx_r2.tree.draggableNodes)("ngClass", ɵɵpureFunction3(29, _c7, ctx_r2.tree.selectionMode && ctx_r2.node.selectable !== false, ctx_r2.draghoverNode, ctx_r2.isSelected()));
    ɵɵadvance();
    ɵɵattribute("data-pc-section", "toggler");
    ɵɵadvance();
    ɵɵproperty("ngIf", !ctx_r2.tree.togglerIconTemplate);
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r2.tree.togglerIconTemplate);
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r2.tree.selectionMode == "checkbox");
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r2.node.icon || ctx_r2.node.expandedIcon || ctx_r2.node.collapsedIcon);
    ɵɵadvance(2);
    ɵɵproperty("ngIf", !ctx_r2.tree.getTemplateForNode(ctx_r2.node));
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r2.tree.getTemplateForNode(ctx_r2.node));
    ɵɵadvance();
    ɵɵproperty("ngIf", !ctx_r2.tree.virtualScroll && ctx_r2.node.children && ctx_r2.node.expanded);
  }
}
function UITreeNode_ng_template_0_li_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r45 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "li", 4);
    ɵɵlistener("drop", function UITreeNode_ng_template_0_li_2_Template_li_drop_0_listener($event) {
      ɵɵrestoreView(_r45);
      const ctx_r44 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r44.onDropPoint($event, 1));
    })("dragover", function UITreeNode_ng_template_0_li_2_Template_li_dragover_0_listener($event) {
      ɵɵrestoreView(_r45);
      const ctx_r46 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r46.onDropPointDragOver($event));
    })("dragenter", function UITreeNode_ng_template_0_li_2_Template_li_dragenter_0_listener($event) {
      ɵɵrestoreView(_r45);
      const ctx_r47 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r47.onDropPointDragEnter($event, 1));
    })("dragleave", function UITreeNode_ng_template_0_li_2_Template_li_dragleave_0_listener($event) {
      ɵɵrestoreView(_r45);
      const ctx_r48 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r48.onDropPointDragLeave($event));
    });
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r3 = ɵɵnextContext(2);
    ɵɵproperty("ngClass", ɵɵpureFunction1(1, _c0, ctx_r3.draghoverNext));
  }
}
var _c8 = (a0) => ({
  "p-treenode-connector-line": a0
});
function UITreeNode_ng_template_0_table_3_td_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "td", 27)(1, "table", 28)(2, "tbody")(3, "tr");
    ɵɵelement(4, "td", 29);
    ɵɵelementEnd();
    ɵɵelementStart(5, "tr");
    ɵɵelement(6, "td", 29);
    ɵɵelementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r49 = ɵɵnextContext(3);
    ɵɵadvance(4);
    ɵɵproperty("ngClass", ɵɵpureFunction1(2, _c8, !ctx_r49.firstChild));
    ɵɵadvance(2);
    ɵɵproperty("ngClass", ɵɵpureFunction1(4, _c8, !ctx_r49.lastChild));
  }
}
function UITreeNode_ng_template_0_table_3_span_6_ng_container_1_PlusIcon_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "PlusIcon", 32);
  }
  if (rf & 2) {
    const ctx_r57 = ɵɵnextContext(5);
    ɵɵproperty("styleClass", "p-tree-toggler-icon")("ariaLabel", ctx_r57.tree.togglerAriaLabel);
  }
}
function UITreeNode_ng_template_0_table_3_span_6_ng_container_1_MinusIcon_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "MinusIcon", 32);
  }
  if (rf & 2) {
    const ctx_r58 = ɵɵnextContext(5);
    ɵɵproperty("styleClass", "p-tree-toggler-icon")("ariaLabel", ctx_r58.tree.togglerAriaLabel);
  }
}
function UITreeNode_ng_template_0_table_3_span_6_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, UITreeNode_ng_template_0_table_3_span_6_ng_container_1_PlusIcon_1_Template, 1, 2, "PlusIcon", 31)(2, UITreeNode_ng_template_0_table_3_span_6_ng_container_1_MinusIcon_2_Template, 1, 2, "MinusIcon", 31);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r55 = ɵɵnextContext(4);
    ɵɵadvance();
    ɵɵproperty("ngIf", !ctx_r55.node.expanded);
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r55.node.expanded);
  }
}
function UITreeNode_ng_template_0_table_3_span_6_span_2_1_ng_template_0_Template(rf, ctx) {
}
function UITreeNode_ng_template_0_table_3_span_6_span_2_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, UITreeNode_ng_template_0_table_3_span_6_span_2_1_ng_template_0_Template, 0, 0, "ng-template");
  }
}
function UITreeNode_ng_template_0_table_3_span_6_span_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span", 15);
    ɵɵtemplate(1, UITreeNode_ng_template_0_table_3_span_6_span_2_1_Template, 1, 0, null, 16);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r56 = ɵɵnextContext(4);
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", ctx_r56.tree.togglerIconTemplate)("ngTemplateOutletContext", ɵɵpureFunction1(2, _c1, ctx_r56.node.expanded));
  }
}
function UITreeNode_ng_template_0_table_3_span_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r62 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "span", 30);
    ɵɵlistener("click", function UITreeNode_ng_template_0_table_3_span_6_Template_span_click_0_listener($event) {
      ɵɵrestoreView(_r62);
      const ctx_r61 = ɵɵnextContext(3);
      return ɵɵresetView(ctx_r61.toggle($event));
    });
    ɵɵtemplate(1, UITreeNode_ng_template_0_table_3_span_6_ng_container_1_Template, 3, 2, "ng-container", 8)(2, UITreeNode_ng_template_0_table_3_span_6_span_2_Template, 2, 4, "span", 9);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r50 = ɵɵnextContext(3);
    ɵɵproperty("ngClass", "p-tree-toggler");
    ɵɵadvance();
    ɵɵproperty("ngIf", !ctx_r50.tree.togglerIconTemplate);
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r50.tree.togglerIconTemplate);
  }
}
function UITreeNode_ng_template_0_table_3_span_7_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "span");
  }
  if (rf & 2) {
    const ctx_r51 = ɵɵnextContext(3);
    ɵɵclassMap(ctx_r51.getIcon());
  }
}
function UITreeNode_ng_template_0_table_3_span_9_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span");
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r52 = ɵɵnextContext(3);
    ɵɵadvance();
    ɵɵtextInterpolate(ctx_r52.node.label);
  }
}
function UITreeNode_ng_template_0_table_3_span_10_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function UITreeNode_ng_template_0_table_3_span_10_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span");
    ɵɵtemplate(1, UITreeNode_ng_template_0_table_3_span_10_ng_container_1_Template, 1, 0, "ng-container", 16);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r53 = ɵɵnextContext(3);
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", ctx_r53.tree.getTemplateForNode(ctx_r53.node))("ngTemplateOutletContext", ɵɵpureFunction1(2, _c1, ctx_r53.node));
  }
}
function UITreeNode_ng_template_0_table_3_td_11_p_treeNode_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "p-treeNode", 36);
  }
  if (rf & 2) {
    const childNode_r65 = ctx.$implicit;
    const firstChild_r66 = ctx.first;
    const lastChild_r67 = ctx.last;
    ɵɵproperty("node", childNode_r65)("firstChild", firstChild_r66)("lastChild", lastChild_r67);
  }
}
function UITreeNode_ng_template_0_table_3_td_11_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "td", 33)(1, "div", 34);
    ɵɵtemplate(2, UITreeNode_ng_template_0_table_3_td_11_p_treeNode_2_Template, 1, 3, "p-treeNode", 35);
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const ctx_r54 = ɵɵnextContext(3);
    ɵɵstyleProp("display", ctx_r54.node.expanded ? "table-cell" : "none");
    ɵɵadvance(2);
    ɵɵproperty("ngForOf", ctx_r54.node.children)("ngForTrackBy", ctx_r54.tree.trackBy);
  }
}
var _c9 = (a0) => ({
  "p-treenode-collapsed": a0
});
var _c10 = (a0, a1) => ({
  "p-treenode-selectable": a0,
  "p-highlight": a1
});
function UITreeNode_ng_template_0_table_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r69 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "table")(1, "tbody")(2, "tr");
    ɵɵtemplate(3, UITreeNode_ng_template_0_table_3_td_3_Template, 7, 6, "td", 22);
    ɵɵelementStart(4, "td", 23)(5, "div", 24);
    ɵɵlistener("click", function UITreeNode_ng_template_0_table_3_Template_div_click_5_listener($event) {
      ɵɵrestoreView(_r69);
      const ctx_r68 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r68.onNodeClick($event));
    })("contextmenu", function UITreeNode_ng_template_0_table_3_Template_div_contextmenu_5_listener($event) {
      ɵɵrestoreView(_r69);
      const ctx_r70 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r70.onNodeRightClick($event));
    })("touchend", function UITreeNode_ng_template_0_table_3_Template_div_touchend_5_listener() {
      ɵɵrestoreView(_r69);
      const ctx_r71 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r71.onNodeTouchEnd());
    })("keydown", function UITreeNode_ng_template_0_table_3_Template_div_keydown_5_listener($event) {
      ɵɵrestoreView(_r69);
      const ctx_r72 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r72.onNodeKeydown($event));
    });
    ɵɵtemplate(6, UITreeNode_ng_template_0_table_3_span_6_Template, 3, 3, "span", 25)(7, UITreeNode_ng_template_0_table_3_span_7_Template, 1, 2, "span", 3);
    ɵɵelementStart(8, "span", 11);
    ɵɵtemplate(9, UITreeNode_ng_template_0_table_3_span_9_Template, 2, 1, "span", 8)(10, UITreeNode_ng_template_0_table_3_span_10_Template, 2, 4, "span", 8);
    ɵɵelementEnd()()();
    ɵɵtemplate(11, UITreeNode_ng_template_0_table_3_td_11_Template, 3, 4, "td", 26);
    ɵɵelementEnd()()();
  }
  if (rf & 2) {
    const ctx_r4 = ɵɵnextContext(2);
    ɵɵclassMap(ctx_r4.node.styleClass);
    ɵɵadvance(3);
    ɵɵproperty("ngIf", !ctx_r4.root);
    ɵɵadvance();
    ɵɵproperty("ngClass", ɵɵpureFunction1(10, _c9, !ctx_r4.node.expanded));
    ɵɵadvance();
    ɵɵproperty("ngClass", ɵɵpureFunction2(12, _c10, ctx_r4.tree.selectionMode, ctx_r4.isSelected()));
    ɵɵadvance();
    ɵɵproperty("ngIf", !ctx_r4.isLeaf());
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r4.node.icon || ctx_r4.node.expandedIcon || ctx_r4.node.collapsedIcon);
    ɵɵadvance(2);
    ɵɵproperty("ngIf", !ctx_r4.tree.getTemplateForNode(ctx_r4.node));
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r4.tree.getTemplateForNode(ctx_r4.node));
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r4.node.children && ctx_r4.node.expanded);
  }
}
function UITreeNode_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, UITreeNode_ng_template_0_li_0_Template, 1, 3, "li", 1)(1, UITreeNode_ng_template_0_li_1_Template, 11, 33, "li", 2)(2, UITreeNode_ng_template_0_li_2_Template, 1, 3, "li", 1)(3, UITreeNode_ng_template_0_table_3_Template, 12, 15, "table", 3);
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵproperty("ngIf", ctx_r0.tree.droppableNodes);
    ɵɵadvance();
    ɵɵproperty("ngIf", !ctx_r0.tree.horizontal);
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r0.tree.droppableNodes && ctx_r0.lastChild);
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r0.tree.horizontal);
  }
}
var _c11 = ["filter"];
var _c12 = ["scroller"];
var _c13 = ["wrapper"];
function Tree_div_0_div_1_i_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "i");
  }
  if (rf & 2) {
    const ctx_r9 = ɵɵnextContext(3);
    ɵɵclassMap("p-tree-loading-icon pi-spin " + ctx_r9.loadingIcon);
  }
}
function Tree_div_0_div_1_ng_container_2_SpinnerIcon_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "SpinnerIcon", 13);
  }
  if (rf & 2) {
    ɵɵproperty("spin", true)("styleClass", "p-tree-loading-icon");
  }
}
function Tree_div_0_div_1_ng_container_2_span_2_1_ng_template_0_Template(rf, ctx) {
}
function Tree_div_0_div_1_ng_container_2_span_2_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, Tree_div_0_div_1_ng_container_2_span_2_1_ng_template_0_Template, 0, 0, "ng-template");
  }
}
function Tree_div_0_div_1_ng_container_2_span_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span", 14);
    ɵɵtemplate(1, Tree_div_0_div_1_ng_container_2_span_2_1_Template, 1, 0, null, 4);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r12 = ɵɵnextContext(4);
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", ctx_r12.loadingIconTemplate);
  }
}
function Tree_div_0_div_1_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, Tree_div_0_div_1_ng_container_2_SpinnerIcon_1_Template, 1, 2, "SpinnerIcon", 11)(2, Tree_div_0_div_1_ng_container_2_span_2_Template, 2, 1, "span", 12);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r10 = ɵɵnextContext(3);
    ɵɵadvance();
    ɵɵproperty("ngIf", !ctx_r10.loadingIconTemplate);
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r10.loadingIconTemplate);
  }
}
function Tree_div_0_div_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 9);
    ɵɵtemplate(1, Tree_div_0_div_1_i_1_Template, 1, 2, "i", 10)(2, Tree_div_0_div_1_ng_container_2_Template, 3, 2, "ng-container", 7);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext(2);
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r2.loadingIcon);
    ɵɵadvance();
    ɵɵproperty("ngIf", !ctx_r2.loadingIcon);
  }
}
function Tree_div_0_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function Tree_div_0_div_3_SearchIcon_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "SearchIcon", 20);
  }
  if (rf & 2) {
    ɵɵproperty("styleClass", "p-tree-filter-icon");
  }
}
function Tree_div_0_div_3_span_4_1_ng_template_0_Template(rf, ctx) {
}
function Tree_div_0_div_3_span_4_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, Tree_div_0_div_3_span_4_1_ng_template_0_Template, 0, 0, "ng-template");
  }
}
function Tree_div_0_div_3_span_4_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span", 21);
    ɵɵtemplate(1, Tree_div_0_div_3_span_4_1_Template, 1, 0, null, 4);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r17 = ɵɵnextContext(3);
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", ctx_r17.filterIconTemplate);
  }
}
function Tree_div_0_div_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r22 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 15)(1, "input", 16, 17);
    ɵɵlistener("keydown.enter", function Tree_div_0_div_3_Template_input_keydown_enter_1_listener($event) {
      return $event.preventDefault();
    })("input", function Tree_div_0_div_3_Template_input_input_1_listener($event) {
      ɵɵrestoreView(_r22);
      const ctx_r21 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r21._filter($event.target.value));
    });
    ɵɵelementEnd();
    ɵɵtemplate(3, Tree_div_0_div_3_SearchIcon_3_Template, 1, 1, "SearchIcon", 18)(4, Tree_div_0_div_3_span_4_Template, 2, 1, "span", 19);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r4 = ɵɵnextContext(2);
    ɵɵadvance();
    ɵɵattribute("placeholder", ctx_r4.filterPlaceholder);
    ɵɵadvance(2);
    ɵɵproperty("ngIf", !ctx_r4.filterIconTemplate);
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r4.filterIconTemplate);
  }
}
function Tree_div_0_p_scroller_4_ng_template_2_ul_0_p_treeNode_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "p-treeNode", 28, 29);
  }
  if (rf & 2) {
    const rowNode_r30 = ctx.$implicit;
    const firstChild_r31 = ctx.first;
    const lastChild_r32 = ctx.last;
    const index_r33 = ctx.index;
    const scrollerOptions_r27 = ɵɵnextContext(2).options;
    const ctx_r29 = ɵɵnextContext(3);
    ɵɵproperty("level", rowNode_r30.level)("rowNode", rowNode_r30)("node", rowNode_r30.node)("firstChild", firstChild_r31)("lastChild", lastChild_r32)("index", ctx_r29.getIndex(scrollerOptions_r27, index_r33))("itemSize", scrollerOptions_r27.itemSize)("indentation", ctx_r29.indentation);
  }
}
function Tree_div_0_p_scroller_4_ng_template_2_ul_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "ul", 26);
    ɵɵtemplate(1, Tree_div_0_p_scroller_4_ng_template_2_ul_0_p_treeNode_1_Template, 2, 8, "p-treeNode", 27);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r36 = ɵɵnextContext();
    const scrollerOptions_r27 = ctx_r36.options;
    const items_r26 = ctx_r36.$implicit;
    const ctx_r28 = ɵɵnextContext(3);
    ɵɵstyleMap(scrollerOptions_r27.contentStyle);
    ɵɵproperty("ngClass", scrollerOptions_r27.contentStyleClass);
    ɵɵattribute("aria-label", ctx_r28.ariaLabel)("aria-labelledby", ctx_r28.ariaLabelledBy);
    ɵɵadvance();
    ɵɵproperty("ngForOf", items_r26)("ngForTrackBy", ctx_r28.trackBy);
  }
}
function Tree_div_0_p_scroller_4_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, Tree_div_0_p_scroller_4_ng_template_2_ul_0_Template, 2, 7, "ul", 25);
  }
  if (rf & 2) {
    const items_r26 = ctx.$implicit;
    ɵɵproperty("ngIf", items_r26);
  }
}
function Tree_div_0_p_scroller_4_ng_container_3_ng_template_1_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
var _c14 = (a0) => ({
  options: a0
});
function Tree_div_0_p_scroller_4_ng_container_3_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, Tree_div_0_p_scroller_4_ng_container_3_ng_template_1_ng_container_0_Template, 1, 0, "ng-container", 31);
  }
  if (rf & 2) {
    const scrollerOptions_r38 = ctx.options;
    const ctx_r37 = ɵɵnextContext(4);
    ɵɵproperty("ngTemplateOutlet", ctx_r37.loaderTemplate)("ngTemplateOutletContext", ɵɵpureFunction1(2, _c14, scrollerOptions_r38));
  }
}
function Tree_div_0_p_scroller_4_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, Tree_div_0_p_scroller_4_ng_container_3_ng_template_1_Template, 1, 4, "ng-template", 30);
    ɵɵelementContainerEnd();
  }
}
function Tree_div_0_p_scroller_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r41 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "p-scroller", 22, 23);
    ɵɵlistener("onScroll", function Tree_div_0_p_scroller_4_Template_p_scroller_onScroll_0_listener($event) {
      ɵɵrestoreView(_r41);
      const ctx_r40 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r40.onScroll.emit($event));
    })("onScrollIndexChange", function Tree_div_0_p_scroller_4_Template_p_scroller_onScrollIndexChange_0_listener($event) {
      ɵɵrestoreView(_r41);
      const ctx_r42 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r42.onScrollIndexChange.emit($event));
    })("onLazyLoad", function Tree_div_0_p_scroller_4_Template_p_scroller_onLazyLoad_0_listener($event) {
      ɵɵrestoreView(_r41);
      const ctx_r43 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r43.onLazyLoad.emit($event));
    });
    ɵɵtemplate(2, Tree_div_0_p_scroller_4_ng_template_2_Template, 1, 1, "ng-template", 24)(3, Tree_div_0_p_scroller_4_ng_container_3_Template, 2, 0, "ng-container", 7);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r5 = ɵɵnextContext(2);
    ɵɵstyleMap(ɵɵpureFunction1(9, _c6, ctx_r5.scrollHeight !== "flex" ? ctx_r5.scrollHeight : void 0));
    ɵɵproperty("items", ctx_r5.serializedValue)("tabindex", -1)("scrollHeight", ctx_r5.scrollHeight !== "flex" ? void 0 : "100%")("itemSize", ctx_r5.virtualScrollItemSize || ctx_r5._virtualNodeHeight)("lazy", ctx_r5.lazy)("options", ctx_r5.virtualScrollOptions);
    ɵɵadvance(3);
    ɵɵproperty("ngIf", ctx_r5.loaderTemplate);
  }
}
function Tree_div_0_ng_container_5_ul_3_p_treeNode_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "p-treeNode", 37);
  }
  if (rf & 2) {
    const node_r47 = ctx.$implicit;
    const firstChild_r48 = ctx.first;
    const lastChild_r49 = ctx.last;
    const index_r50 = ctx.index;
    ɵɵproperty("node", node_r47)("firstChild", firstChild_r48)("lastChild", lastChild_r49)("index", index_r50)("level", 0);
  }
}
function Tree_div_0_ng_container_5_ul_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "ul", 35);
    ɵɵtemplate(1, Tree_div_0_ng_container_5_ul_3_p_treeNode_1_Template, 1, 5, "p-treeNode", 36);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r45 = ɵɵnextContext(3);
    ɵɵattribute("aria-label", ctx_r45.ariaLabel)("aria-labelledby", ctx_r45.ariaLabelledBy);
    ɵɵadvance();
    ɵɵproperty("ngForOf", ctx_r45.getRootNode())("ngForTrackBy", ctx_r45.trackBy);
  }
}
function Tree_div_0_ng_container_5_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵelementStart(1, "div", 32, 33);
    ɵɵtemplate(3, Tree_div_0_ng_container_5_ul_3_Template, 2, 4, "ul", 34);
    ɵɵelementEnd();
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r6 = ɵɵnextContext(2);
    ɵɵadvance();
    ɵɵstyleProp("max-height", ctx_r6.scrollHeight);
    ɵɵadvance(2);
    ɵɵproperty("ngIf", ctx_r6.getRootNode());
  }
}
function Tree_div_0_div_6_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtext(1);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r51 = ɵɵnextContext(3);
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", ctx_r51.emptyMessageLabel, " ");
  }
}
function Tree_div_0_div_6_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0, null, 40);
  }
}
function Tree_div_0_div_6_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 38);
    ɵɵtemplate(1, Tree_div_0_div_6_ng_container_1_Template, 2, 1, "ng-container", 39)(2, Tree_div_0_div_6_ng_container_2_Template, 2, 0, "ng-container", 4);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r7 = ɵɵnextContext(2);
    ɵɵadvance();
    ɵɵproperty("ngIf", !ctx_r7.emptyMessageTemplate)("ngIfElse", ctx_r7.emptyFilter);
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", ctx_r7.emptyMessageTemplate);
  }
}
function Tree_div_0_ng_container_7_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
var _c15 = (a1, a2, a3, a4) => ({
  "p-tree p-component": true,
  "p-tree-selectable": a1,
  "p-treenode-dragover": a2,
  "p-tree-loading": a3,
  "p-tree-flex-scrollable": a4
});
function Tree_div_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r55 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 2);
    ɵɵlistener("drop", function Tree_div_0_Template_div_drop_0_listener($event) {
      ɵɵrestoreView(_r55);
      const ctx_r54 = ɵɵnextContext();
      return ɵɵresetView(ctx_r54.onDrop($event));
    })("dragover", function Tree_div_0_Template_div_dragover_0_listener($event) {
      ɵɵrestoreView(_r55);
      const ctx_r56 = ɵɵnextContext();
      return ɵɵresetView(ctx_r56.onDragOver($event));
    })("dragenter", function Tree_div_0_Template_div_dragenter_0_listener() {
      ɵɵrestoreView(_r55);
      const ctx_r57 = ɵɵnextContext();
      return ɵɵresetView(ctx_r57.onDragEnter());
    })("dragleave", function Tree_div_0_Template_div_dragleave_0_listener($event) {
      ɵɵrestoreView(_r55);
      const ctx_r58 = ɵɵnextContext();
      return ɵɵresetView(ctx_r58.onDragLeave($event));
    });
    ɵɵtemplate(1, Tree_div_0_div_1_Template, 3, 2, "div", 3)(2, Tree_div_0_ng_container_2_Template, 1, 0, "ng-container", 4)(3, Tree_div_0_div_3_Template, 5, 3, "div", 5)(4, Tree_div_0_p_scroller_4_Template, 4, 11, "p-scroller", 6)(5, Tree_div_0_ng_container_5_Template, 4, 3, "ng-container", 7)(6, Tree_div_0_div_6_Template, 3, 3, "div", 8)(7, Tree_div_0_ng_container_7_Template, 1, 0, "ng-container", 4);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵclassMap(ctx_r0.styleClass);
    ɵɵproperty("ngClass", ɵɵpureFunction4(11, _c15, ctx_r0.selectionMode, ctx_r0.dragHover, ctx_r0.loading, ctx_r0.scrollHeight === "flex"))("ngStyle", ctx_r0.style);
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r0.loading);
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", ctx_r0.headerTemplate);
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r0.filter);
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r0.virtualScroll);
    ɵɵadvance();
    ɵɵproperty("ngIf", !ctx_r0.virtualScroll);
    ɵɵadvance();
    ɵɵproperty("ngIf", !ctx_r0.loading && (ctx_r0.getRootNode() == null || ctx_r0.getRootNode().length === 0));
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", ctx_r0.footerTemplate);
  }
}
function Tree_div_1_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function Tree_div_1_div_2_i_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "i");
  }
  if (rf & 2) {
    const ctx_r64 = ɵɵnextContext(3);
    ɵɵclassMap("p-tree-loading-icon pi-spin " + ctx_r64.loadingIcon);
  }
}
function Tree_div_1_div_2_ng_container_2_SpinnerIcon_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "SpinnerIcon", 13);
  }
  if (rf & 2) {
    ɵɵproperty("spin", true)("styleClass", "p-tree-loading-icon");
  }
}
function Tree_div_1_div_2_ng_container_2_span_2_1_ng_template_0_Template(rf, ctx) {
}
function Tree_div_1_div_2_ng_container_2_span_2_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, Tree_div_1_div_2_ng_container_2_span_2_1_ng_template_0_Template, 0, 0, "ng-template");
  }
}
function Tree_div_1_div_2_ng_container_2_span_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span", 14);
    ɵɵtemplate(1, Tree_div_1_div_2_ng_container_2_span_2_1_Template, 1, 0, null, 4);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r67 = ɵɵnextContext(4);
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", ctx_r67.loadingIconTemplate);
  }
}
function Tree_div_1_div_2_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, Tree_div_1_div_2_ng_container_2_SpinnerIcon_1_Template, 1, 2, "SpinnerIcon", 11)(2, Tree_div_1_div_2_ng_container_2_span_2_Template, 2, 1, "span", 12);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r65 = ɵɵnextContext(3);
    ɵɵadvance();
    ɵɵproperty("ngIf", !ctx_r65.loadingIconTemplate);
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r65.loadingIconTemplate);
  }
}
function Tree_div_1_div_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 43);
    ɵɵtemplate(1, Tree_div_1_div_2_i_1_Template, 1, 2, "i", 10)(2, Tree_div_1_div_2_ng_container_2_Template, 3, 2, "ng-container", 7);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r60 = ɵɵnextContext(2);
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r60.loadingIcon);
    ɵɵadvance();
    ɵɵproperty("ngIf", !ctx_r60.loadingIcon);
  }
}
function Tree_div_1_table_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "table");
    ɵɵelement(1, "p-treeNode", 44);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r61 = ɵɵnextContext(2);
    ɵɵadvance();
    ɵɵproperty("node", ctx_r61.value[0])("root", true);
  }
}
function Tree_div_1_div_4_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtext(1);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r70 = ɵɵnextContext(3);
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", ctx_r70.emptyMessageLabel, " ");
  }
}
function Tree_div_1_div_4_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0, null, 40);
  }
}
function Tree_div_1_div_4_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 38);
    ɵɵtemplate(1, Tree_div_1_div_4_ng_container_1_Template, 2, 1, "ng-container", 39)(2, Tree_div_1_div_4_ng_container_2_Template, 2, 0, "ng-container", 4);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r62 = ɵɵnextContext(2);
    ɵɵadvance();
    ɵɵproperty("ngIf", !ctx_r62.emptyMessageTemplate)("ngIfElse", ctx_r62.emptyFilter);
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", ctx_r62.emptyMessageTemplate);
  }
}
function Tree_div_1_ng_container_5_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
var _c16 = (a1) => ({
  "p-tree p-tree-horizontal p-component": true,
  "p-tree-selectable": a1
});
function Tree_div_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 41);
    ɵɵtemplate(1, Tree_div_1_ng_container_1_Template, 1, 0, "ng-container", 4)(2, Tree_div_1_div_2_Template, 3, 2, "div", 42)(3, Tree_div_1_table_3_Template, 2, 2, "table", 7)(4, Tree_div_1_div_4_Template, 3, 3, "div", 8)(5, Tree_div_1_ng_container_5_Template, 1, 0, "ng-container", 4);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵclassMap(ctx_r1.styleClass);
    ɵɵproperty("ngClass", ɵɵpureFunction1(9, _c16, ctx_r1.selectionMode))("ngStyle", ctx_r1.style);
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", ctx_r1.headerTemplate);
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r1.loading);
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r1.value && ctx_r1.value[0]);
    ɵɵadvance();
    ɵɵproperty("ngIf", !ctx_r1.loading && (ctx_r1.getRootNode() == null || ctx_r1.getRootNode().length === 0));
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", ctx_r1.footerTemplate);
  }
}
var UITreeNode = class _UITreeNode {
  static ICON_CLASS = "p-treenode-icon ";
  rowNode;
  node;
  parentNode;
  root;
  index;
  firstChild;
  lastChild;
  level;
  indentation;
  itemSize;
  tree;
  timeout;
  draghoverPrev;
  draghoverNext;
  draghoverNode;
  get ariaSelected() {
    return this.tree.selectionMode === "single" || this.tree.selectionMode === "multiple" ? this.isSelected() : void 0;
  }
  get ariaChecked() {
    return this.tree.selectionMode === "checkbox" ? this.isSelected() : void 0;
  }
  constructor(tree) {
    this.tree = tree;
  }
  ngOnInit() {
    this.node.parent = this.parentNode;
    if (this.parentNode) {
      this.setAllNodesTabIndexes();
      this.tree.syncNodeOption(this.node, this.tree.value, "parent", this.tree.getNodeWithKey(this.parentNode.key, this.tree.value));
    }
  }
  getIcon() {
    let icon;
    if (this.node.icon)
      icon = this.node.icon;
    else
      icon = this.node.expanded && this.node.children && this.node.children?.length ? this.node.expandedIcon : this.node.collapsedIcon;
    return _UITreeNode.ICON_CLASS + " " + icon;
  }
  isLeaf() {
    return this.tree.isNodeLeaf(this.node);
  }
  toggle(event) {
    if (this.node.expanded)
      this.collapse(event);
    else
      this.expand(event);
    event.stopPropagation();
  }
  expand(event) {
    this.node.expanded = true;
    if (this.tree.virtualScroll) {
      this.tree.updateSerializedValue();
      this.focusVirtualNode();
    }
    this.tree.onNodeExpand.emit({
      originalEvent: event,
      node: this.node
    });
  }
  collapse(event) {
    this.node.expanded = false;
    if (this.tree.virtualScroll) {
      this.tree.updateSerializedValue();
      this.focusVirtualNode();
    }
    this.tree.onNodeCollapse.emit({
      originalEvent: event,
      node: this.node
    });
  }
  onNodeClick(event) {
    this.tree.onNodeClick(event, this.node);
  }
  onNodeKeydown(event) {
    if (event.key === "Enter") {
      this.tree.onNodeClick(event, this.node);
    }
  }
  onNodeTouchEnd() {
    this.tree.onNodeTouchEnd();
  }
  onNodeRightClick(event) {
    this.tree.onNodeRightClick(event, this.node);
  }
  isSelected() {
    return this.tree.isSelected(this.node);
  }
  isSameNode(event) {
    return event.currentTarget && (event.currentTarget.isSameNode(event.target) || event.currentTarget.isSameNode(event.target.closest('[role="treeitem"]')));
  }
  onDropPoint(event, position) {
    event.preventDefault();
    let dragNode = this.tree.dragNode;
    let dragNodeIndex = this.tree.dragNodeIndex;
    let dragNodeScope = this.tree.dragNodeScope;
    let isValidDropPointIndex = this.tree.dragNodeTree === this.tree ? position === 1 || dragNodeIndex !== this.index - 1 : true;
    if (this.tree.allowDrop(dragNode, this.node, dragNodeScope) && isValidDropPointIndex) {
      let dropParams = __spreadValues({}, this.createDropPointEventMetadata(position));
      if (this.tree.validateDrop) {
        this.tree.onNodeDrop.emit({
          originalEvent: event,
          dragNode,
          dropNode: this.node,
          index: this.index,
          accept: () => {
            this.processPointDrop(dropParams);
          }
        });
      } else {
        this.processPointDrop(dropParams);
        this.tree.onNodeDrop.emit({
          originalEvent: event,
          dragNode,
          dropNode: this.node,
          index: this.index
        });
      }
    }
    this.draghoverPrev = false;
    this.draghoverNext = false;
  }
  processPointDrop(event) {
    let newNodeList = event.dropNode.parent ? event.dropNode.parent.children : this.tree.value;
    event.dragNodeSubNodes.splice(event.dragNodeIndex, 1);
    let dropIndex = this.index;
    if (event.position < 0) {
      dropIndex = event.dragNodeSubNodes === newNodeList ? event.dragNodeIndex > event.index ? event.index : event.index - 1 : event.index;
      newNodeList.splice(dropIndex, 0, event.dragNode);
    } else {
      dropIndex = newNodeList.length;
      newNodeList.push(event.dragNode);
    }
    this.tree.dragDropService.stopDrag({
      node: event.dragNode,
      subNodes: event.dropNode.parent ? event.dropNode.parent.children : this.tree.value,
      index: event.dragNodeIndex
    });
  }
  createDropPointEventMetadata(position) {
    return {
      dragNode: this.tree.dragNode,
      dragNodeIndex: this.tree.dragNodeIndex,
      dragNodeSubNodes: this.tree.dragNodeSubNodes,
      dropNode: this.node,
      index: this.index,
      position
    };
  }
  onDropPointDragOver(event) {
    event.dataTransfer.dropEffect = "move";
    event.preventDefault();
  }
  onDropPointDragEnter(event, position) {
    if (this.tree.allowDrop(this.tree.dragNode, this.node, this.tree.dragNodeScope)) {
      if (position < 0)
        this.draghoverPrev = true;
      else
        this.draghoverNext = true;
    }
  }
  onDropPointDragLeave(event) {
    this.draghoverPrev = false;
    this.draghoverNext = false;
  }
  onDragStart(event) {
    if (this.tree.draggableNodes && this.node.draggable !== false) {
      event.dataTransfer.setData("text", "data");
      this.tree.dragDropService.startDrag({
        tree: this,
        node: this.node,
        subNodes: this.node?.parent ? this.node.parent.children : this.tree.value,
        index: this.index,
        scope: this.tree.draggableScope
      });
    } else {
      event.preventDefault();
    }
  }
  onDragStop(event) {
    this.tree.dragDropService.stopDrag({
      node: this.node,
      subNodes: this.node?.parent ? this.node.parent.children : this.tree.value,
      index: this.index
    });
  }
  onDropNodeDragOver(event) {
    event.dataTransfer.dropEffect = "move";
    if (this.tree.droppableNodes) {
      event.preventDefault();
      event.stopPropagation();
    }
  }
  onDropNode(event) {
    if (this.tree.droppableNodes && this.node?.droppable !== false) {
      let dragNode = this.tree.dragNode;
      if (this.tree.allowDrop(dragNode, this.node, this.tree.dragNodeScope)) {
        let dropParams = __spreadValues({}, this.createDropNodeEventMetadata());
        if (this.tree.validateDrop) {
          this.tree.onNodeDrop.emit({
            originalEvent: event,
            dragNode,
            dropNode: this.node,
            index: this.index,
            accept: () => {
              this.processNodeDrop(dropParams);
            }
          });
        } else {
          this.processNodeDrop(dropParams);
          this.tree.onNodeDrop.emit({
            originalEvent: event,
            dragNode,
            dropNode: this.node,
            index: this.index
          });
        }
      }
    }
    event.preventDefault();
    event.stopPropagation();
    this.draghoverNode = false;
  }
  createDropNodeEventMetadata() {
    return {
      dragNode: this.tree.dragNode,
      dragNodeIndex: this.tree.dragNodeIndex,
      dragNodeSubNodes: this.tree.dragNodeSubNodes,
      dropNode: this.node
    };
  }
  processNodeDrop(event) {
    let dragNodeIndex = event.dragNodeIndex;
    event.dragNodeSubNodes.splice(dragNodeIndex, 1);
    if (event.dropNode.children)
      event.dropNode.children.push(event.dragNode);
    else
      event.dropNode.children = [event.dragNode];
    this.tree.dragDropService.stopDrag({
      node: event.dragNode,
      subNodes: event.dropNode.parent ? event.dropNode.parent.children : this.tree.value,
      index: dragNodeIndex
    });
  }
  onDropNodeDragEnter(event) {
    if (this.tree.droppableNodes && this.node?.droppable !== false && this.tree.allowDrop(this.tree.dragNode, this.node, this.tree.dragNodeScope)) {
      this.draghoverNode = true;
    }
  }
  onDropNodeDragLeave(event) {
    if (this.tree.droppableNodes) {
      let rect = event.currentTarget.getBoundingClientRect();
      if (event.x > rect.left + rect.width || event.x < rect.left || event.y >= Math.floor(rect.top + rect.height) || event.y < rect.top) {
        this.draghoverNode = false;
      }
    }
  }
  onKeyDown(event) {
    if (!this.isSameNode(event) || this.tree.contextMenu && this.tree.contextMenu.containerViewChild?.nativeElement.style.display === "block") {
      return;
    }
    switch (event.code) {
      case "ArrowDown":
        this.onArrowDown(event);
        break;
      case "ArrowUp":
        this.onArrowUp(event);
        break;
      case "ArrowRight":
        this.onArrowRight(event);
        break;
      case "ArrowLeft":
        this.onArrowLeft(event);
        break;
      case "Enter":
      case "Space":
        this.onEnter(event);
        break;
      case "Tab":
        this.setAllNodesTabIndexes();
        break;
      default:
        break;
    }
  }
  onArrowUp(event) {
    const nodeElement = event.target.getAttribute("data-pc-section") === "toggler" ? event.target.closest('[role="treeitem"]') : event.target.parentElement;
    if (nodeElement.previousElementSibling) {
      this.focusRowChange(nodeElement, nodeElement.previousElementSibling, this.findLastVisibleDescendant(nodeElement.previousElementSibling));
    } else {
      let parentNodeElement = this.getParentNodeElement(nodeElement);
      if (parentNodeElement) {
        this.focusRowChange(nodeElement, parentNodeElement);
      }
    }
    event.preventDefault();
  }
  onArrowDown(event) {
    const nodeElement = event.target.getAttribute("data-pc-section") === "toggler" ? event.target.closest('[role="treeitem"]') : event.target;
    const listElement = nodeElement.children[1];
    if (listElement && listElement.children.length > 0) {
      this.focusRowChange(nodeElement, listElement.children[0]);
    } else {
      if (nodeElement.parentElement.nextElementSibling) {
        this.focusRowChange(nodeElement, nodeElement.parentElement.nextElementSibling);
      } else {
        let nextSiblingAncestor = this.findNextSiblingOfAncestor(nodeElement.parentElement);
        if (nextSiblingAncestor) {
          this.focusRowChange(nodeElement, nextSiblingAncestor);
        }
      }
    }
    event.preventDefault();
  }
  onArrowRight(event) {
    if (!this.node?.expanded && !this.tree.isNodeLeaf(this.node)) {
      this.expand(event);
      event.currentTarget.tabIndex = -1;
      setTimeout(() => {
        this.onArrowDown(event);
      }, 1);
    }
    event.preventDefault();
  }
  onArrowLeft(event) {
    const nodeElement = event.target.getAttribute("data-pc-section") === "toggler" ? event.target.closest('[role="treeitem"]') : event.target;
    if (this.level === 0 && !this.node?.expanded) {
      return false;
    }
    if (this.node?.expanded) {
      this.collapse(event);
      return;
    }
    let parentNodeElement = this.getParentNodeElement(nodeElement.parentElement);
    if (parentNodeElement) {
      this.focusRowChange(event.currentTarget, parentNodeElement);
    }
    event.preventDefault();
  }
  onEnter(event) {
    this.tree.onNodeClick(event, this.node);
    this.setTabIndexForSelectionMode(event, this.tree.nodeTouched);
    event.preventDefault();
  }
  setAllNodesTabIndexes() {
    const nodes = DomHandler.find(this.tree.el.nativeElement, ".p-treenode");
    const hasSelectedNode = [...nodes].some((node) => node.getAttribute("aria-selected") === "true" || node.getAttribute("aria-checked") === "true");
    [...nodes].forEach((node) => {
      node.tabIndex = -1;
    });
    if (hasSelectedNode) {
      const selectedNodes = [...nodes].filter((node) => node.getAttribute("aria-selected") === "true" || node.getAttribute("aria-checked") === "true");
      selectedNodes[0].tabIndex = 0;
      return;
    }
    [...nodes][0].tabIndex = 0;
  }
  setTabIndexForSelectionMode(event, nodeTouched) {
    if (this.tree.selectionMode !== null) {
      const elements = [...DomHandler.find(this.tree.el.nativeElement, ".p-treenode")];
      event.currentTarget.tabIndex = nodeTouched === false ? -1 : 0;
      if (elements.every((element) => element.tabIndex === -1)) {
        elements[0].tabIndex = 0;
      }
    }
  }
  findNextSiblingOfAncestor(nodeElement) {
    let parentNodeElement = this.getParentNodeElement(nodeElement);
    if (parentNodeElement) {
      if (parentNodeElement.nextElementSibling)
        return parentNodeElement.nextElementSibling;
      else
        return this.findNextSiblingOfAncestor(parentNodeElement);
    } else {
      return null;
    }
  }
  findLastVisibleDescendant(nodeElement) {
    const listElement = Array.from(nodeElement.children).find((el) => DomHandler.hasClass(el, "p-treenode"));
    const childrenListElement = listElement.children[1];
    if (childrenListElement && childrenListElement.children.length > 0) {
      const lastChildElement = childrenListElement.children[childrenListElement.children.length - 1];
      return this.findLastVisibleDescendant(lastChildElement);
    } else {
      return nodeElement;
    }
  }
  getParentNodeElement(nodeElement) {
    const parentNodeElement = nodeElement.parentElement?.parentElement?.parentElement;
    return parentNodeElement?.tagName === "P-TREENODE" ? parentNodeElement : null;
  }
  focusNode(element) {
    if (this.tree.droppableNodes)
      element.children[1].focus();
    else
      element.children[0].focus();
  }
  focusRowChange(firstFocusableRow, currentFocusedRow, lastVisibleDescendant) {
    firstFocusableRow.tabIndex = "-1";
    currentFocusedRow.children[0].tabIndex = "0";
    this.focusNode(lastVisibleDescendant || currentFocusedRow);
  }
  focusVirtualNode() {
    this.timeout = setTimeout(() => {
      let node = DomHandler.findSingle(document.body, `[data-id="${this.node?.key ?? this.node?.data}"]`);
      DomHandler.focus(node);
    }, 1);
  }
  static ɵfac = function UITreeNode_Factory(t) {
    return new (t || _UITreeNode)(ɵɵdirectiveInject(forwardRef(() => Tree)));
  };
  static ɵcmp = ɵɵdefineComponent({
    type: _UITreeNode,
    selectors: [["p-treeNode"]],
    hostAttrs: [1, "p-element"],
    hostVars: 1,
    hostBindings: function UITreeNode_HostBindings(rf, ctx) {
      if (rf & 2) {
        ɵɵattribute("role", "treeitem");
      }
    },
    inputs: {
      rowNode: "rowNode",
      node: "node",
      parentNode: "parentNode",
      root: "root",
      index: "index",
      firstChild: "firstChild",
      lastChild: "lastChild",
      level: "level",
      indentation: "indentation",
      itemSize: "itemSize"
    },
    decls: 1,
    vars: 1,
    consts: [[3, "ngIf"], ["class", "p-treenode-droppoint", 3, "ngClass", "drop", "dragover", "dragenter", "dragleave", 4, "ngIf"], ["role", "treeitem", 3, "ngClass", "ngStyle", "style", "keydown", 4, "ngIf"], [3, "class", 4, "ngIf"], [1, "p-treenode-droppoint", 3, "ngClass", "drop", "dragover", "dragenter", "dragleave"], ["role", "treeitem", 3, "ngClass", "ngStyle", "keydown"], [1, "p-treenode-content", 3, "draggable", "ngClass", "click", "contextmenu", "touchend", "drop", "dragover", "dragenter", "dragleave", "dragstart", "dragend"], ["type", "button", "pRipple", "", "tabindex", "-1", "aria-hidden", "true", 1, "p-tree-toggler", "p-link", 3, "click"], [4, "ngIf"], ["class", "p-tree-toggler-icon", 4, "ngIf"], ["class", "p-checkbox p-component", "aria-hidden", "true", 3, "ngClass", 4, "ngIf"], [1, "p-treenode-label"], ["class", "p-treenode-children", "style", "display: none;", "role", "tree", 3, "display", 4, "ngIf"], [3, "styleClass", 4, "ngIf"], [3, "styleClass"], [1, "p-tree-toggler-icon"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], ["aria-hidden", "true", 1, "p-checkbox", "p-component", 3, "ngClass"], ["role", "checkbox", 1, "p-checkbox-box", 3, "ngClass"], ["role", "tree", 1, "p-treenode-children", 2, "display", "none"], [3, "node", "parentNode", "firstChild", "lastChild", "index", "itemSize", "level", 4, "ngFor", "ngForOf", "ngForTrackBy"], [3, "node", "parentNode", "firstChild", "lastChild", "index", "itemSize", "level"], ["class", "p-treenode-connector", 4, "ngIf"], [1, "p-treenode", 3, "ngClass"], ["tabindex", "0", 1, "p-treenode-content", 3, "ngClass", "click", "contextmenu", "touchend", "keydown"], [3, "ngClass", "click", 4, "ngIf"], ["class", "p-treenode-children-container", 3, "display", 4, "ngIf"], [1, "p-treenode-connector"], [1, "p-treenode-connector-table"], [3, "ngClass"], [3, "ngClass", "click"], [3, "styleClass", "ariaLabel", 4, "ngIf"], [3, "styleClass", "ariaLabel"], [1, "p-treenode-children-container"], [1, "p-treenode-children"], [3, "node", "firstChild", "lastChild", 4, "ngFor", "ngForOf", "ngForTrackBy"], [3, "node", "firstChild", "lastChild"]],
    template: function UITreeNode_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵtemplate(0, UITreeNode_ng_template_0_Template, 4, 4, "ng-template", 0);
      }
      if (rf & 2) {
        ɵɵproperty("ngIf", ctx.node);
      }
    },
    dependencies: () => [NgClass, NgForOf, NgIf, NgTemplateOutlet, NgStyle, Ripple, CheckIcon, ChevronDownIcon, ChevronRightIcon, MinusIcon, PlusIcon, _UITreeNode],
    encapsulation: 2
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(UITreeNode, [{
    type: Component,
    args: [{
      selector: "p-treeNode",
      template: `
        <ng-template [ngIf]="node">
            <li
                *ngIf="tree.droppableNodes"
                class="p-treenode-droppoint"
                [ngClass]="{ 'p-treenode-droppoint-active': draghoverPrev }"
                (drop)="onDropPoint($event, -1)"
                (dragover)="onDropPointDragOver($event)"
                (dragenter)="onDropPointDragEnter($event, -1)"
                (dragleave)="onDropPointDragLeave($event)"
            ></li>
            <li
                *ngIf="!tree.horizontal"
                [ngClass]="['p-treenode', node.styleClass || '', isLeaf() ? 'p-treenode-leaf' : '']"
                [ngStyle]="{ height: itemSize + 'px' }"
                [style]="node.style"
                [attr.aria-label]="node.label"
                [attr.aria-checked]="ariaChecked"
                [attr.aria-setsize]="node.children ? node.children.length : 0"
                [attr.aria-selected]="ariaSelected"
                [attr.aria-expanded]="node.expanded"
                [attr.aria-posinset]="index + 1"
                [attr.aria-level]="level"
                [attr.tabindex]="index === 0 ? 0 : -1"
                role="treeitem"
                (keydown)="onKeyDown($event)"
            >
                <div
                    class="p-treenode-content"
                    [style.paddingLeft]="level * indentation + 'rem'"
                    (click)="onNodeClick($event)"
                    (contextmenu)="onNodeRightClick($event)"
                    (touchend)="onNodeTouchEnd()"
                    (drop)="onDropNode($event)"
                    (dragover)="onDropNodeDragOver($event)"
                    (dragenter)="onDropNodeDragEnter($event)"
                    (dragleave)="onDropNodeDragLeave($event)"
                    [draggable]="tree.draggableNodes"
                    (dragstart)="onDragStart($event)"
                    (dragend)="onDragStop($event)"
                    [ngClass]="{ 'p-treenode-selectable': tree.selectionMode && node.selectable !== false, 'p-treenode-dragover': draghoverNode, 'p-highlight': isSelected() }"
                >
                    <button type="button" [attr.data-pc-section]="'toggler'" class="p-tree-toggler p-link" (click)="toggle($event)" pRipple tabindex="-1" aria-hidden="true">
                        <ng-container *ngIf="!tree.togglerIconTemplate">
                            <ChevronRightIcon *ngIf="!node.expanded" [styleClass]="'p-tree-toggler-icon'" />
                            <ChevronDownIcon *ngIf="node.expanded" [styleClass]="'p-tree-toggler-icon'" />
                        </ng-container>
                        <span *ngIf="tree.togglerIconTemplate" class="p-tree-toggler-icon">
                            <ng-template *ngTemplateOutlet="tree.togglerIconTemplate; context: { $implicit: node.expanded }"></ng-template>
                        </span>
                    </button>
                    <div class="p-checkbox p-component" [ngClass]="{ 'p-checkbox-disabled p-disabled': node.selectable === false }" *ngIf="tree.selectionMode == 'checkbox'" aria-hidden="true">
                        <div class="p-checkbox-box" [ngClass]="{ 'p-highlight': isSelected(), 'p-indeterminate': node.partialSelected }" role="checkbox">
                            <ng-container *ngIf="!tree.checkboxIconTemplate">
                                <CheckIcon *ngIf="!node.partialSelected && isSelected()" [styleClass]="'p-checkbox-icon'" />
                                <MinusIcon *ngIf="node.partialSelected" [styleClass]="'p-checkbox-icon'" />
                            </ng-container>
                            <ng-template *ngTemplateOutlet="tree.checkboxIconTemplate; context: { $implicit: isSelected(), partialSelected: node.partialSelected }"></ng-template>
                        </div>
                    </div>
                    <span [class]="getIcon()" *ngIf="node.icon || node.expandedIcon || node.collapsedIcon"></span>
                    <span class="p-treenode-label">
                        <span *ngIf="!tree.getTemplateForNode(node)">{{ node.label }}</span>
                        <span *ngIf="tree.getTemplateForNode(node)">
                            <ng-container *ngTemplateOutlet="tree.getTemplateForNode(node); context: { $implicit: node }"></ng-container>
                        </span>
                    </span>
                </div>
                <ul class="p-treenode-children" style="display: none;" *ngIf="!tree.virtualScroll && node.children && node.expanded" [style.display]="node.expanded ? 'block' : 'none'" role="tree">
                    <p-treeNode
                        *ngFor="let childNode of node.children; let firstChild = first; let lastChild = last; let index = index; trackBy: tree.trackBy"
                        [node]="childNode"
                        [parentNode]="node"
                        [firstChild]="firstChild"
                        [lastChild]="lastChild"
                        [index]="index"
                        [itemSize]="itemSize"
                        [level]="level + 1"
                    ></p-treeNode>
                </ul>
            </li>
            <li
                *ngIf="tree.droppableNodes && lastChild"
                class="p-treenode-droppoint"
                [ngClass]="{ 'p-treenode-droppoint-active': draghoverNext }"
                (drop)="onDropPoint($event, 1)"
                (dragover)="onDropPointDragOver($event)"
                (dragenter)="onDropPointDragEnter($event, 1)"
                (dragleave)="onDropPointDragLeave($event)"
            ></li>
            <table *ngIf="tree.horizontal" [class]="node.styleClass">
                <tbody>
                    <tr>
                        <td class="p-treenode-connector" *ngIf="!root">
                            <table class="p-treenode-connector-table">
                                <tbody>
                                    <tr>
                                        <td [ngClass]="{ 'p-treenode-connector-line': !firstChild }"></td>
                                    </tr>
                                    <tr>
                                        <td [ngClass]="{ 'p-treenode-connector-line': !lastChild }"></td>
                                    </tr>
                                </tbody>
                            </table>
                        </td>
                        <td class="p-treenode" [ngClass]="{ 'p-treenode-collapsed': !node.expanded }">
                            <div
                                class="p-treenode-content"
                                tabindex="0"
                                [ngClass]="{ 'p-treenode-selectable': tree.selectionMode, 'p-highlight': isSelected() }"
                                (click)="onNodeClick($event)"
                                (contextmenu)="onNodeRightClick($event)"
                                (touchend)="onNodeTouchEnd()"
                                (keydown)="onNodeKeydown($event)"
                            >
                                <span *ngIf="!isLeaf()" [ngClass]="'p-tree-toggler'" (click)="toggle($event)">
                                    <ng-container *ngIf="!tree.togglerIconTemplate">
                                        <PlusIcon *ngIf="!node.expanded" [styleClass]="'p-tree-toggler-icon'" [ariaLabel]="tree.togglerAriaLabel" />
                                        <MinusIcon *ngIf="node.expanded" [styleClass]="'p-tree-toggler-icon'" [ariaLabel]="tree.togglerAriaLabel" />
                                    </ng-container>
                                    <span *ngIf="tree.togglerIconTemplate" class="p-tree-toggler-icon">
                                        <ng-template *ngTemplateOutlet="tree.togglerIconTemplate; context: { $implicit: node.expanded }"></ng-template>
                                    </span>
                                </span>
                                <span [class]="getIcon()" *ngIf="node.icon || node.expandedIcon || node.collapsedIcon"></span>
                                <span class="p-treenode-label">
                                    <span *ngIf="!tree.getTemplateForNode(node)">{{ node.label }}</span>
                                    <span *ngIf="tree.getTemplateForNode(node)">
                                        <ng-container *ngTemplateOutlet="tree.getTemplateForNode(node); context: { $implicit: node }"></ng-container>
                                    </span>
                                </span>
                            </div>
                        </td>
                        <td class="p-treenode-children-container" *ngIf="node.children && node.expanded" [style.display]="node.expanded ? 'table-cell' : 'none'">
                            <div class="p-treenode-children">
                                <p-treeNode *ngFor="let childNode of node.children; let firstChild = first; let lastChild = last; trackBy: tree.trackBy" [node]="childNode" [firstChild]="firstChild" [lastChild]="lastChild"></p-treeNode>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
        </ng-template>
    `,
      encapsulation: ViewEncapsulation$1.None,
      host: {
        class: "p-element",
        "[attr.role]": '"treeitem"'
      }
    }]
  }], () => [{
    type: Tree,
    decorators: [{
      type: Inject,
      args: [forwardRef(() => Tree)]
    }]
  }], {
    rowNode: [{
      type: Input
    }],
    node: [{
      type: Input
    }],
    parentNode: [{
      type: Input
    }],
    root: [{
      type: Input
    }],
    index: [{
      type: Input
    }],
    firstChild: [{
      type: Input
    }],
    lastChild: [{
      type: Input
    }],
    level: [{
      type: Input
    }],
    indentation: [{
      type: Input
    }],
    itemSize: [{
      type: Input
    }]
  });
})();
var Tree = class _Tree {
  el;
  dragDropService;
  config;
  cd;
  /**
   * An array of treenodes.
   * @group Props
   */
  value;
  /**
   * Defines the selection mode.
   * @group Props
   */
  selectionMode;
  /**
   * A single treenode instance or an array to refer to the selections.
   * @group Props
   */
  selection;
  /**
   * Inline style of the component.
   * @group Props
   */
  style;
  /**
   * Style class of the component.
   * @group Props
   */
  styleClass;
  /**
   * Context menu instance.
   * @group Props
   */
  contextMenu;
  /**
   * Defines the orientation of the tree, valid values are 'vertical' and 'horizontal'.
   * @group Props
   */
  layout = "vertical";
  /**
   * Scope of the draggable nodes to match a droppableScope.
   * @group Props
   */
  draggableScope;
  /**
   * Scope of the droppable nodes to match a draggableScope.
   * @group Props
   */
  droppableScope;
  /**
   * Whether the nodes are draggable.
   * @group Props
   */
  draggableNodes;
  /**
   * Whether the nodes are droppable.
   * @group Props
   */
  droppableNodes;
  /**
   * Defines how multiple items can be selected, when true metaKey needs to be pressed to select or unselect an item and when set to false selection of each item can be toggled individually. On touch enabled devices, metaKeySelection is turned off automatically.
   * @group Props
   */
  metaKeySelection = false;
  /**
   * Whether checkbox selections propagate to ancestor nodes.
   * @group Props
   */
  propagateSelectionUp = true;
  /**
   * Whether checkbox selections propagate to descendant nodes.
   * @group Props
   */
  propagateSelectionDown = true;
  /**
   * Displays a loader to indicate data load is in progress.
   * @group Props
   */
  loading;
  /**
   * The icon to show while indicating data load is in progress.
   * @group Props
   */
  loadingIcon;
  /**
   * Text to display when there is no data.
   * @group Props
   */
  emptyMessage = "";
  /**
   * Used to define a string that labels the tree.
   * @group Props
   */
  ariaLabel;
  /**
   * Defines a string that labels the toggler icon for accessibility.
   * @group Props
   */
  togglerAriaLabel;
  /**
   * Establishes relationships between the component and label(s) where its value should be one or more element IDs.
   * @group Props
   */
  ariaLabelledBy;
  /**
   * When enabled, drop can be accepted or rejected based on condition defined at onNodeDrop.
   * @group Props
   */
  validateDrop;
  /**
   * When specified, displays an input field to filter the items.
   * @group Props
   */
  filter;
  /**
   * When filtering is enabled, filterBy decides which field or fields (comma separated) to search against.
   * @group Props
   */
  filterBy = "label";
  /**
   * Mode for filtering valid values are "lenient" and "strict". Default is lenient.
   * @group Props
   */
  filterMode = "lenient";
  /**
   * Placeholder text to show when filter input is empty.
   * @group Props
   */
  filterPlaceholder;
  /**
   * Values after the tree nodes are filtered.
   * @group Props
   */
  filteredNodes;
  /**
   * Locale to use in filtering. The default locale is the host environment's current locale.
   * @group Props
   */
  filterLocale;
  /**
   * Height of the scrollable viewport.
   * @group Props
   */
  scrollHeight;
  /**
   * Defines if data is loaded and interacted with in lazy manner.
   * @group Props
   */
  lazy = false;
  /**
   * Whether the data should be loaded on demand during scroll.
   * @group Props
   */
  virtualScroll;
  /**
   * Height of an item in the list for VirtualScrolling.
   * @group Props
   */
  virtualScrollItemSize;
  /**
   * Whether to use the scroller feature. The properties of scroller component can be used like an object in it.
   * @group Props
   */
  virtualScrollOptions;
  /**
   * Indentation factor for spacing of the nested node when virtual scrolling is enabled.
   * @group Props
   */
  indentation = 1.5;
  /**
   * Custom templates of the component.
   * @group Props
   */
  _templateMap;
  /**
   * Function to optimize the node list rendering, default algorithm checks for object identity.
   * @group Props
   */
  trackBy = (index, item) => item;
  /**
   * Height of the node.
   * @group Props
   * @deprecated use virtualScrollItemSize property instead.
   */
  _virtualNodeHeight;
  get virtualNodeHeight() {
    return this._virtualNodeHeight;
  }
  set virtualNodeHeight(val) {
    this._virtualNodeHeight = val;
    console.warn("The virtualNodeHeight property is deprecated, use virtualScrollItemSize property instead.");
  }
  /**
   * Callback to invoke on selection change.
   * @param {(TreeNode<any> | TreeNode<any>[] | null)} event - Custom selection change event.
   * @group Emits
   */
  selectionChange = new EventEmitter();
  /**
   * Callback to invoke when a node is selected.
   * @param {TreeNodeSelectEvent} event - Node select event.
   * @group Emits
   */
  onNodeSelect = new EventEmitter();
  /**
   * Callback to invoke when a node is unselected.
   * @param {TreeNodeUnSelectEvent} event - Node unselect event.
   * @group Emits
   */
  onNodeUnselect = new EventEmitter();
  /**
   * Callback to invoke when a node is expanded.
   * @param {TreeNodeExpandEvent} event - Node expand event.
   * @group Emits
   */
  onNodeExpand = new EventEmitter();
  /**
   * Callback to invoke when a node is collapsed.
   * @param {TreeNodeCollapseEvent} event - Node collapse event.
   * @group Emits
   */
  onNodeCollapse = new EventEmitter();
  /**
   * Callback to invoke when a node is selected with right click.
   * @param {onNodeContextMenuSelect} event - Node context menu select event.
   * @group Emits
   */
  onNodeContextMenuSelect = new EventEmitter();
  /**
   * Callback to invoke when a node is dropped.
   * @param {TreeNodeDropEvent} event - Node drop event.
   * @group Emits
   */
  onNodeDrop = new EventEmitter();
  /**
   * Callback to invoke in lazy mode to load new data.
   * @param {TreeLazyLoadEvent} event - Custom lazy load event.
   * @group Emits
   */
  onLazyLoad = new EventEmitter();
  /**
   * Callback to invoke in virtual scroll mode when scroll position changes.
   * @param {TreeScrollEvent} event - Custom scroll event.
   * @group Emits
   */
  onScroll = new EventEmitter();
  /**
   * Callback to invoke in virtual scroll mode when scroll position and item's range in view changes.
   * @param {TreeScrollIndexChangeEvent} event - Scroll index change event.
   * @group Emits
   */
  onScrollIndexChange = new EventEmitter();
  /**
   * Callback to invoke when data is filtered.
   * @param {TreeFilterEvent} event - Custom filter event.
   * @group Emits
   */
  onFilter = new EventEmitter();
  templates;
  filterViewChild;
  scroller;
  wrapperViewChild;
  serializedValue;
  headerTemplate;
  footerTemplate;
  loaderTemplate;
  emptyMessageTemplate;
  togglerIconTemplate;
  checkboxIconTemplate;
  loadingIconTemplate;
  filterIconTemplate;
  nodeTouched;
  dragNodeTree;
  dragNode;
  dragNodeSubNodes;
  dragNodeIndex;
  dragNodeScope;
  dragHover;
  dragStartSubscription;
  dragStopSubscription;
  constructor(el, dragDropService, config, cd) {
    this.el = el;
    this.dragDropService = dragDropService;
    this.config = config;
    this.cd = cd;
  }
  ngOnInit() {
    if (this.droppableNodes) {
      this.dragStartSubscription = this.dragDropService.dragStart$.subscribe((event) => {
        this.dragNodeTree = event.tree;
        this.dragNode = event.node;
        this.dragNodeSubNodes = event.subNodes;
        this.dragNodeIndex = event.index;
        this.dragNodeScope = event.scope;
      });
      this.dragStopSubscription = this.dragDropService.dragStop$.subscribe((event) => {
        this.dragNodeTree = null;
        this.dragNode = null;
        this.dragNodeSubNodes = null;
        this.dragNodeIndex = null;
        this.dragNodeScope = null;
        this.dragHover = false;
      });
    }
  }
  ngOnChanges(simpleChange) {
    if (simpleChange.value) {
      this.updateSerializedValue();
    }
  }
  get horizontal() {
    return this.layout == "horizontal";
  }
  get emptyMessageLabel() {
    return this.emptyMessage || this.config.getTranslation(TranslationKeys.EMPTY_MESSAGE);
  }
  ngAfterContentInit() {
    if (this.templates.length) {
      this._templateMap = {};
    }
    this.templates.forEach((item) => {
      switch (item.getType()) {
        case "header":
          this.headerTemplate = item.template;
          break;
        case "empty":
          this.emptyMessageTemplate = item.template;
          break;
        case "footer":
          this.footerTemplate = item.template;
          break;
        case "loader":
          this.loaderTemplate = item.template;
          break;
        case "togglericon":
          this.togglerIconTemplate = item.template;
          break;
        case "checkboxicon":
          this.checkboxIconTemplate = item.template;
          break;
        case "loadingicon":
          this.loadingIconTemplate = item.template;
          break;
        case "filtericon":
          this.filterIconTemplate = item.template;
          break;
        default:
          this._templateMap[item.name] = item.template;
          break;
      }
    });
  }
  updateSerializedValue() {
    this.serializedValue = [];
    this.serializeNodes(null, this.getRootNode(), 0, true);
  }
  serializeNodes(parent, nodes, level, visible) {
    if (nodes && nodes.length) {
      for (let node of nodes) {
        node.parent = parent;
        const rowNode = {
          node,
          parent,
          level,
          visible: visible && (parent ? parent.expanded : true)
        };
        this.serializedValue.push(rowNode);
        if (rowNode.visible && node.expanded) {
          this.serializeNodes(node, node.children, level + 1, rowNode.visible);
        }
      }
    }
  }
  onNodeClick(event, node) {
    let eventTarget = event.target;
    if (DomHandler.hasClass(eventTarget, "p-tree-toggler") || DomHandler.hasClass(eventTarget, "p-tree-toggler-icon")) {
      return;
    } else if (this.selectionMode) {
      if (node.selectable === false) {
        return;
      }
      if (this.hasFilteredNodes()) {
        node = this.getNodeWithKey(node.key, this.value);
        if (!node) {
          return;
        }
      }
      let index = this.findIndexInSelection(node);
      let selected = index >= 0;
      if (this.isCheckboxSelectionMode()) {
        if (selected) {
          if (this.propagateSelectionDown)
            this.propagateDown(node, false);
          else
            this.selection = this.selection.filter((val, i) => i != index);
          if (this.propagateSelectionUp && node.parent) {
            this.propagateUp(node.parent, false);
          }
          this.selectionChange.emit(this.selection);
          this.onNodeUnselect.emit({
            originalEvent: event,
            node
          });
        } else {
          if (this.propagateSelectionDown)
            this.propagateDown(node, true);
          else
            this.selection = [...this.selection || [], node];
          if (this.propagateSelectionUp && node.parent) {
            this.propagateUp(node.parent, true);
          }
          this.selectionChange.emit(this.selection);
          this.onNodeSelect.emit({
            originalEvent: event,
            node
          });
        }
      } else {
        let metaSelection = this.nodeTouched ? false : this.metaKeySelection;
        if (metaSelection) {
          let metaKey = event.metaKey || event.ctrlKey;
          if (selected && metaKey) {
            if (this.isSingleSelectionMode()) {
              this.selectionChange.emit(null);
            } else {
              this.selection = this.selection.filter((val, i) => i != index);
              this.selectionChange.emit(this.selection);
            }
            this.onNodeUnselect.emit({
              originalEvent: event,
              node
            });
          } else {
            if (this.isSingleSelectionMode()) {
              this.selectionChange.emit(node);
            } else if (this.isMultipleSelectionMode()) {
              this.selection = !metaKey ? [] : this.selection || [];
              this.selection = [...this.selection, node];
              this.selectionChange.emit(this.selection);
            }
            this.onNodeSelect.emit({
              originalEvent: event,
              node
            });
          }
        } else {
          if (this.isSingleSelectionMode()) {
            if (selected) {
              this.selection = null;
              this.onNodeUnselect.emit({
                originalEvent: event,
                node
              });
            } else {
              this.selection = node;
              this.onNodeSelect.emit({
                originalEvent: event,
                node
              });
            }
          } else {
            if (selected) {
              this.selection = this.selection.filter((val, i) => i != index);
              this.onNodeUnselect.emit({
                originalEvent: event,
                node
              });
            } else {
              this.selection = [...this.selection || [], node];
              this.onNodeSelect.emit({
                originalEvent: event,
                node
              });
            }
          }
          this.selectionChange.emit(this.selection);
        }
      }
    }
    this.nodeTouched = false;
  }
  onNodeTouchEnd() {
    this.nodeTouched = true;
  }
  onNodeRightClick(event, node) {
    if (this.contextMenu) {
      let eventTarget = event.target;
      if (eventTarget.className && eventTarget.className.indexOf("p-tree-toggler") === 0) {
        return;
      } else {
        let index = this.findIndexInSelection(node);
        let selected = index >= 0;
        if (!selected) {
          if (this.isSingleSelectionMode())
            this.selectionChange.emit(node);
          else
            this.selectionChange.emit([node]);
        }
        this.contextMenu.show(event);
        this.onNodeContextMenuSelect.emit({
          originalEvent: event,
          node
        });
      }
    }
  }
  findIndexInSelection(node) {
    let index = -1;
    if (this.selectionMode && this.selection) {
      if (this.isSingleSelectionMode()) {
        let areNodesEqual = this.selection.key && this.selection.key === node.key || this.selection == node;
        index = areNodesEqual ? 0 : -1;
      } else {
        for (let i = 0; i < this.selection.length; i++) {
          let selectedNode = this.selection[i];
          let areNodesEqual = selectedNode.key && selectedNode.key === node.key || selectedNode == node;
          if (areNodesEqual) {
            index = i;
            break;
          }
        }
      }
    }
    return index;
  }
  syncNodeOption(node, parentNodes, option, value) {
    const _node = this.hasFilteredNodes() ? this.getNodeWithKey(node.key, parentNodes) : null;
    if (_node) {
      _node[option] = value || node[option];
    }
  }
  hasFilteredNodes() {
    return this.filter && this.filteredNodes && this.filteredNodes.length;
  }
  getNodeWithKey(key, nodes) {
    for (let node of nodes) {
      if (node.key === key) {
        return node;
      }
      if (node.children) {
        let matchedNode = this.getNodeWithKey(key, node.children);
        if (matchedNode) {
          return matchedNode;
        }
      }
    }
  }
  propagateUp(node, select) {
    if (node.children && node.children.length) {
      let selectedCount = 0;
      let childPartialSelected = false;
      for (let child of node.children) {
        if (this.isSelected(child)) {
          selectedCount++;
        } else if (child.partialSelected) {
          childPartialSelected = true;
        }
      }
      if (select && selectedCount == node.children.length) {
        this.selection = [...this.selection || [], node];
        node.partialSelected = false;
      } else {
        if (!select) {
          let index = this.findIndexInSelection(node);
          if (index >= 0) {
            this.selection = this.selection.filter((val, i) => i != index);
          }
        }
        if (childPartialSelected || selectedCount > 0 && selectedCount != node.children.length)
          node.partialSelected = true;
        else
          node.partialSelected = false;
      }
      this.syncNodeOption(node, this.filteredNodes, "partialSelected");
    }
    let parent = node.parent;
    if (parent) {
      this.propagateUp(parent, select);
    }
  }
  propagateDown(node, select) {
    let index = this.findIndexInSelection(node);
    if (select && index == -1) {
      this.selection = [...this.selection || [], node];
    } else if (!select && index > -1) {
      this.selection = this.selection.filter((val, i) => i != index);
    }
    node.partialSelected = false;
    this.syncNodeOption(node, this.filteredNodes, "partialSelected");
    if (node.children && node.children.length) {
      for (let child of node.children) {
        this.propagateDown(child, select);
      }
    }
  }
  isSelected(node) {
    return this.findIndexInSelection(node) != -1;
  }
  isSingleSelectionMode() {
    return this.selectionMode && this.selectionMode == "single";
  }
  isMultipleSelectionMode() {
    return this.selectionMode && this.selectionMode == "multiple";
  }
  isCheckboxSelectionMode() {
    return this.selectionMode && this.selectionMode == "checkbox";
  }
  isNodeLeaf(node) {
    return node.leaf == false ? false : !(node.children && node.children.length);
  }
  getRootNode() {
    return this.filteredNodes ? this.filteredNodes : this.value;
  }
  getTemplateForNode(node) {
    if (this._templateMap)
      return node.type ? this._templateMap[node.type] : this._templateMap["default"];
    else
      return null;
  }
  onDragOver(event) {
    if (this.droppableNodes && (!this.value || this.value.length === 0)) {
      event.dataTransfer.dropEffect = "move";
      event.preventDefault();
    }
  }
  onDrop(event) {
    if (this.droppableNodes && (!this.value || this.value.length === 0)) {
      event.preventDefault();
      let dragNode = this.dragNode;
      if (this.allowDrop(dragNode, null, this.dragNodeScope)) {
        let dragNodeIndex = this.dragNodeIndex;
        this.value = this.value || [];
        if (this.validateDrop) {
          this.onNodeDrop.emit({
            originalEvent: event,
            dragNode,
            dropNode: null,
            index: dragNodeIndex,
            accept: () => {
              this.processTreeDrop(dragNode, dragNodeIndex);
            }
          });
        } else {
          this.onNodeDrop.emit({
            originalEvent: event,
            dragNode,
            dropNode: null,
            index: dragNodeIndex
          });
          this.processTreeDrop(dragNode, dragNodeIndex);
        }
      }
    }
  }
  processTreeDrop(dragNode, dragNodeIndex) {
    this.dragNodeSubNodes.splice(dragNodeIndex, 1);
    this.value.push(dragNode);
    this.dragDropService.stopDrag({
      node: dragNode
    });
  }
  onDragEnter() {
    if (this.droppableNodes && this.allowDrop(this.dragNode, null, this.dragNodeScope)) {
      this.dragHover = true;
    }
  }
  onDragLeave(event) {
    if (this.droppableNodes) {
      let rect = event.currentTarget.getBoundingClientRect();
      if (event.x > rect.left + rect.width || event.x < rect.left || event.y > rect.top + rect.height || event.y < rect.top) {
        this.dragHover = false;
      }
    }
  }
  allowDrop(dragNode, dropNode, dragNodeScope) {
    if (!dragNode) {
      return false;
    } else if (this.isValidDragScope(dragNodeScope)) {
      let allow = true;
      if (dropNode) {
        if (dragNode === dropNode) {
          allow = false;
        } else {
          let parent = dropNode.parent;
          while (parent != null) {
            if (parent === dragNode) {
              allow = false;
              break;
            }
            parent = parent.parent;
          }
        }
      }
      return allow;
    } else {
      return false;
    }
  }
  isValidDragScope(dragScope) {
    let dropScope = this.droppableScope;
    if (dropScope) {
      if (typeof dropScope === "string") {
        if (typeof dragScope === "string")
          return dropScope === dragScope;
        else if (Array.isArray(dragScope))
          return dragScope.indexOf(dropScope) != -1;
      } else if (Array.isArray(dropScope)) {
        if (typeof dragScope === "string") {
          return dropScope.indexOf(dragScope) != -1;
        } else if (Array.isArray(dragScope)) {
          for (let s of dropScope) {
            for (let ds of dragScope) {
              if (s === ds) {
                return true;
              }
            }
          }
        }
      }
      return false;
    } else {
      return true;
    }
  }
  _filter(value) {
    let filterValue = value;
    if (filterValue === "") {
      this.filteredNodes = null;
    } else {
      this.filteredNodes = [];
      const searchFields = this.filterBy.split(",");
      const filterText = ObjectUtils.removeAccents(filterValue).toLocaleLowerCase(this.filterLocale);
      const isStrictMode = this.filterMode === "strict";
      for (let node of this.value) {
        let copyNode = __spreadValues({}, node);
        let paramsWithoutNode = {
          searchFields,
          filterText,
          isStrictMode
        };
        if (isStrictMode && (this.findFilteredNodes(copyNode, paramsWithoutNode) || this.isFilterMatched(copyNode, paramsWithoutNode)) || !isStrictMode && (this.isFilterMatched(copyNode, paramsWithoutNode) || this.findFilteredNodes(copyNode, paramsWithoutNode))) {
          this.filteredNodes.push(copyNode);
        }
      }
    }
    this.updateSerializedValue();
    this.onFilter.emit({
      filter: filterValue,
      filteredValue: this.filteredNodes
    });
  }
  /**
   * Resets filter.
   * @group Method
   */
  resetFilter() {
    this.filteredNodes = null;
    if (this.filterViewChild && this.filterViewChild.nativeElement) {
      this.filterViewChild.nativeElement.value = "";
    }
  }
  /**
   * Scrolls to virtual index.
   * @param {number} number - Index to be scrolled.
   * @group Method
   */
  scrollToVirtualIndex(index) {
    this.virtualScroll && this.scroller?.scrollToIndex(index);
  }
  /**
   * Scrolls to virtual index.
   * @param {ScrollToOptions} options - Scroll options.
   * @group Method
   */
  scrollTo(options) {
    if (this.virtualScroll) {
      this.scroller?.scrollTo(options);
    } else if (this.wrapperViewChild && this.wrapperViewChild.nativeElement) {
      if (this.wrapperViewChild.nativeElement.scrollTo) {
        this.wrapperViewChild.nativeElement.scrollTo(options);
      } else {
        this.wrapperViewChild.nativeElement.scrollLeft = options.left;
        this.wrapperViewChild.nativeElement.scrollTop = options.top;
      }
    }
  }
  findFilteredNodes(node, paramsWithoutNode) {
    if (node) {
      let matched = false;
      if (node.children) {
        let childNodes = [...node.children];
        node.children = [];
        for (let childNode of childNodes) {
          let copyChildNode = __spreadValues({}, childNode);
          if (this.isFilterMatched(copyChildNode, paramsWithoutNode)) {
            matched = true;
            node.children.push(copyChildNode);
          }
        }
      }
      if (matched) {
        node.expanded = true;
        return true;
      }
    }
  }
  isFilterMatched(node, params) {
    let {
      searchFields,
      filterText,
      isStrictMode
    } = params;
    let matched = false;
    for (let field of searchFields) {
      let fieldValue = ObjectUtils.removeAccents(String(ObjectUtils.resolveFieldData(node, field))).toLocaleLowerCase(this.filterLocale);
      if (fieldValue.indexOf(filterText) > -1) {
        matched = true;
      }
    }
    if (!matched || isStrictMode && !this.isNodeLeaf(node)) {
      matched = this.findFilteredNodes(node, {
        searchFields,
        filterText,
        isStrictMode
      }) || matched;
    }
    return matched;
  }
  getIndex(options, index) {
    const getItemOptions = options["getItemOptions"];
    return getItemOptions ? getItemOptions(index).index : index;
  }
  getBlockableElement() {
    return this.el.nativeElement.children[0];
  }
  ngOnDestroy() {
    if (this.dragStartSubscription) {
      this.dragStartSubscription.unsubscribe();
    }
    if (this.dragStopSubscription) {
      this.dragStopSubscription.unsubscribe();
    }
  }
  static ɵfac = function Tree_Factory(t) {
    return new (t || _Tree)(ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(TreeDragDropService, 8), ɵɵdirectiveInject(PrimeNGConfig), ɵɵdirectiveInject(ChangeDetectorRef));
  };
  static ɵcmp = ɵɵdefineComponent({
    type: _Tree,
    selectors: [["p-tree"]],
    contentQueries: function Tree_ContentQueries(rf, ctx, dirIndex) {
      if (rf & 1) {
        ɵɵcontentQuery(dirIndex, PrimeTemplate, 4);
      }
      if (rf & 2) {
        let _t;
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.templates = _t);
      }
    },
    viewQuery: function Tree_Query(rf, ctx) {
      if (rf & 1) {
        ɵɵviewQuery(_c11, 5);
        ɵɵviewQuery(_c12, 5);
        ɵɵviewQuery(_c13, 5);
      }
      if (rf & 2) {
        let _t;
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.filterViewChild = _t.first);
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.scroller = _t.first);
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.wrapperViewChild = _t.first);
      }
    },
    hostAttrs: [1, "p-element"],
    inputs: {
      value: "value",
      selectionMode: "selectionMode",
      selection: "selection",
      style: "style",
      styleClass: "styleClass",
      contextMenu: "contextMenu",
      layout: "layout",
      draggableScope: "draggableScope",
      droppableScope: "droppableScope",
      draggableNodes: "draggableNodes",
      droppableNodes: "droppableNodes",
      metaKeySelection: "metaKeySelection",
      propagateSelectionUp: "propagateSelectionUp",
      propagateSelectionDown: "propagateSelectionDown",
      loading: "loading",
      loadingIcon: "loadingIcon",
      emptyMessage: "emptyMessage",
      ariaLabel: "ariaLabel",
      togglerAriaLabel: "togglerAriaLabel",
      ariaLabelledBy: "ariaLabelledBy",
      validateDrop: "validateDrop",
      filter: "filter",
      filterBy: "filterBy",
      filterMode: "filterMode",
      filterPlaceholder: "filterPlaceholder",
      filteredNodes: "filteredNodes",
      filterLocale: "filterLocale",
      scrollHeight: "scrollHeight",
      lazy: "lazy",
      virtualScroll: "virtualScroll",
      virtualScrollItemSize: "virtualScrollItemSize",
      virtualScrollOptions: "virtualScrollOptions",
      indentation: "indentation",
      _templateMap: "_templateMap",
      trackBy: "trackBy",
      virtualNodeHeight: "virtualNodeHeight"
    },
    outputs: {
      selectionChange: "selectionChange",
      onNodeSelect: "onNodeSelect",
      onNodeUnselect: "onNodeUnselect",
      onNodeExpand: "onNodeExpand",
      onNodeCollapse: "onNodeCollapse",
      onNodeContextMenuSelect: "onNodeContextMenuSelect",
      onNodeDrop: "onNodeDrop",
      onLazyLoad: "onLazyLoad",
      onScroll: "onScroll",
      onScrollIndexChange: "onScrollIndexChange",
      onFilter: "onFilter"
    },
    features: [ɵɵNgOnChangesFeature],
    decls: 2,
    vars: 2,
    consts: [[3, "ngClass", "ngStyle", "class", "drop", "dragover", "dragenter", "dragleave", 4, "ngIf"], [3, "ngClass", "ngStyle", "class", 4, "ngIf"], [3, "ngClass", "ngStyle", "drop", "dragover", "dragenter", "dragleave"], ["class", "p-tree-loading-overlay p-component-overlay", 4, "ngIf"], [4, "ngTemplateOutlet"], ["class", "p-tree-filter-container", 4, "ngIf"], ["styleClass", "p-tree-wrapper", 3, "items", "tabindex", "style", "scrollHeight", "itemSize", "lazy", "options", "onScroll", "onScrollIndexChange", "onLazyLoad", 4, "ngIf"], [4, "ngIf"], ["class", "p-tree-empty-message", 4, "ngIf"], [1, "p-tree-loading-overlay", "p-component-overlay"], [3, "class", 4, "ngIf"], [3, "spin", "styleClass", 4, "ngIf"], ["class", "p-tree-loading-icon", 4, "ngIf"], [3, "spin", "styleClass"], [1, "p-tree-loading-icon"], [1, "p-tree-filter-container"], ["type", "text", "autocomplete", "off", 1, "p-tree-filter", "p-inputtext", "p-component", 3, "keydown.enter", "input"], ["filter", ""], [3, "styleClass", 4, "ngIf"], ["class", "p-tree-filter-icon", 4, "ngIf"], [3, "styleClass"], [1, "p-tree-filter-icon"], ["styleClass", "p-tree-wrapper", 3, "items", "tabindex", "scrollHeight", "itemSize", "lazy", "options", "onScroll", "onScrollIndexChange", "onLazyLoad"], ["scroller", ""], ["pTemplate", "content"], ["class", "p-tree-container", "role", "tree", 3, "ngClass", "style", 4, "ngIf"], ["role", "tree", 1, "p-tree-container", 3, "ngClass"], [3, "level", "rowNode", "node", "firstChild", "lastChild", "index", "itemSize", "indentation", 4, "ngFor", "ngForOf", "ngForTrackBy"], [3, "level", "rowNode", "node", "firstChild", "lastChild", "index", "itemSize", "indentation"], ["treeNode", ""], ["pTemplate", "loader"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], [1, "p-tree-wrapper"], ["wrapper", ""], ["class", "p-tree-container", "role", "tree", 4, "ngIf"], ["role", "tree", 1, "p-tree-container"], [3, "node", "firstChild", "lastChild", "index", "level", 4, "ngFor", "ngForOf", "ngForTrackBy"], [3, "node", "firstChild", "lastChild", "index", "level"], [1, "p-tree-empty-message"], [4, "ngIf", "ngIfElse"], ["emptyFilter", ""], [3, "ngClass", "ngStyle"], ["class", "p-tree-loading-mask p-component-overlay", 4, "ngIf"], [1, "p-tree-loading-mask", "p-component-overlay"], [3, "node", "root"]],
    template: function Tree_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵtemplate(0, Tree_div_0_Template, 8, 16, "div", 0)(1, Tree_div_1_Template, 6, 11, "div", 1);
      }
      if (rf & 2) {
        ɵɵproperty("ngIf", !ctx.horizontal);
        ɵɵadvance();
        ɵɵproperty("ngIf", ctx.horizontal);
      }
    },
    dependencies: () => [NgClass, NgForOf, NgIf, NgTemplateOutlet, NgStyle, PrimeTemplate, Scroller, SearchIcon, SpinnerIcon, UITreeNode],
    styles: ["@layer primeng{.p-tree-container{margin:0;padding:0;list-style-type:none;overflow:auto}.p-treenode-children{margin:0;padding:0;list-style-type:none}.p-tree-wrapper{overflow:auto}.p-treenode-selectable{cursor:pointer;-webkit-user-select:none;user-select:none}.p-tree-toggler{cursor:pointer;-webkit-user-select:none;user-select:none;display:inline-flex;align-items:center;justify-content:center;overflow:hidden;position:relative;flex-shrink:0}.p-treenode-leaf>.p-treenode-content .p-tree-toggler{visibility:hidden}.p-treenode-content{display:flex;align-items:center}.p-tree-filter{width:100%}.p-tree-filter-container{position:relative;display:block;width:100%}.p-tree-filter-icon{position:absolute;top:50%;margin-top:-.5rem}.p-tree-loading{position:relative;min-height:4rem}.p-tree .p-tree-loading-overlay{position:absolute;display:flex;align-items:center;justify-content:center;z-index:2}.p-tree-flex-scrollable{display:flex;flex:1;height:100%;flex-direction:column}.p-tree-flex-scrollable .p-tree-wrapper{flex:1}.p-tree .p-treenode-droppoint{height:4px;list-style-type:none}.p-tree .p-treenode-droppoint-active{border:0 none}.p-tree-horizontal{width:auto;padding-left:0;padding-right:0;overflow:auto}.p-tree.p-tree-horizontal table,.p-tree.p-tree-horizontal tr,.p-tree.p-tree-horizontal td{border-collapse:collapse;margin:0;padding:0;vertical-align:middle}.p-tree-horizontal .p-treenode-content{font-weight:400;padding:.4em 1em .4em .2em;display:flex;align-items:center}.p-tree-horizontal .p-treenode-parent .p-treenode-content{font-weight:400;white-space:nowrap}.p-tree.p-tree-horizontal .p-treenode{background:url(data:image/gif;base64,R0lGODlhAQABAIAAALGxsf///yH/C1hNUCBEYXRhWE1QPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4KPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNC4xLWMwMzQgNDYuMjcyOTc2LCBTYXQgSmFuIDI3IDIwMDcgMjI6Mzc6MzcgICAgICAgICI+CiAgIDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+CiAgICAgIDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiCiAgICAgICAgICAgIHhtbG5zOnhhcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyI+CiAgICAgICAgIDx4YXA6Q3JlYXRvclRvb2w+QWRvYmUgRmlyZXdvcmtzIENTMzwveGFwOkNyZWF0b3JUb29sPgogICAgICAgICA8eGFwOkNyZWF0ZURhdGU+MjAxMC0wMy0xMVQxMDoxNjo0MVo8L3hhcDpDcmVhdGVEYXRlPgogICAgICAgICA8eGFwOk1vZGlmeURhdGU+MjAxMC0wMy0xMVQxMjo0NDoxOVo8L3hhcDpNb2RpZnlEYXRlPgogICAgICA8L3JkZjpEZXNjcmlwdGlvbj4KICAgICAgPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIKICAgICAgICAgICAgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIj4KICAgICAgICAgPGRjOmZvcm1hdD5pbWFnZS9naWY8L2RjOmZvcm1hdD4KICAgICAgPC9yZGY6RGVzY3JpcHRpb24+CiAgIDwvcmRmOlJERj4KPC94OnhtcG1ldGE+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgCjw/eHBhY2tldCBlbmQ9InciPz4B//79/Pv6+fj39vX08/Lx8O/u7ezr6uno5+bl5OPi4eDf3t3c29rZ2NfW1dTT0tHQz87NzMvKycjHxsXEw8LBwL++vby7urm4t7a1tLOysbCvrq2sq6qpqKempaSjoqGgn56dnJuamZiXlpWUk5KRkI+OjYyLiomIh4aFhIOCgYB/fn18e3p5eHd2dXRzcnFwb25tbGtqaWhnZmVkY2JhYF9eXVxbWllYV1ZVVFNSUVBPTk1MS0pJSEdGRURDQkFAPz49PAA6OTg3NjU0MzIxMC8uLSwrKikoJyYlJCMiISAfHh0cGxoZGBcWFRQTEhEQDw4NDAsKCQgHBgUEAwIBAAAh+QQABwD/ACwAAAAAAQABAAACAkQBADs=) repeat-x scroll center center transparent;padding:.25rem 2.5rem}.p-tree.p-tree-horizontal .p-treenode.p-treenode-leaf,.p-tree.p-tree-horizontal .p-treenode.p-treenode-collapsed{padding-right:0}.p-tree.p-tree-horizontal .p-treenode-children{padding:0;margin:0}.p-tree.p-tree-horizontal .p-treenode-connector{width:1px}.p-tree.p-tree-horizontal .p-treenode-connector-table{height:100%;width:1px}.p-tree.p-tree-horizontal .p-treenode-connector-line{background:url(data:image/gif;base64,R0lGODlhAQABAIAAALGxsf///yH/C1hNUCBEYXRhWE1QPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4KPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNC4xLWMwMzQgNDYuMjcyOTc2LCBTYXQgSmFuIDI3IDIwMDcgMjI6Mzc6MzcgICAgICAgICI+CiAgIDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+CiAgICAgIDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiCiAgICAgICAgICAgIHhtbG5zOnhhcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyI+CiAgICAgICAgIDx4YXA6Q3JlYXRvclRvb2w+QWRvYmUgRmlyZXdvcmtzIENTMzwveGFwOkNyZWF0b3JUb29sPgogICAgICAgICA8eGFwOkNyZWF0ZURhdGU+MjAxMC0wMy0xMVQxMDoxNjo0MVo8L3hhcDpDcmVhdGVEYXRlPgogICAgICAgICA8eGFwOk1vZGlmeURhdGU+MjAxMC0wMy0xMVQxMjo0NDoxOVo8L3hhcDpNb2RpZnlEYXRlPgogICAgICA8L3JkZjpEZXNjcmlwdGlvbj4KICAgICAgPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIKICAgICAgICAgICAgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIj4KICAgICAgICAgPGRjOmZvcm1hdD5pbWFnZS9naWY8L2RjOmZvcm1hdD4KICAgICAgPC9yZGY6RGVzY3JpcHRpb24+CiAgIDwvcmRmOlJERj4KPC94OnhtcG1ldGE+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgCjw/eHBhY2tldCBlbmQ9InciPz4B//79/Pv6+fj39vX08/Lx8O/u7ezr6uno5+bl5OPi4eDf3t3c29rZ2NfW1dTT0tHQz87NzMvKycjHxsXEw8LBwL++vby7urm4t7a1tLOysbCvrq2sq6qpqKempaSjoqGgn56dnJuamZiXlpWUk5KRkI+OjYyLiomIh4aFhIOCgYB/fn18e3p5eHd2dXRzcnFwb25tbGtqaWhnZmVkY2JhYF9eXVxbWllYV1ZVVFNSUVBPTk1MS0pJSEdGRURDQkFAPz49PAA6OTg3NjU0MzIxMC8uLSwrKikoJyYlJCMiISAfHh0cGxoZGBcWFRQTEhEQDw4NDAsKCQgHBgUEAwIBAAAh+QQABwD/ACwAAAAAAQABAAACAkQBADs=) repeat-y scroll 0 0 transparent;width:1px}.p-tree.p-tree-horizontal table{height:0}.p-scroller .p-tree-container{overflow:visible}}\n"],
    encapsulation: 2
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Tree, [{
    type: Component,
    args: [{
      selector: "p-tree",
      template: `
        <div
            [ngClass]="{ 'p-tree p-component': true, 'p-tree-selectable': selectionMode, 'p-treenode-dragover': dragHover, 'p-tree-loading': loading, 'p-tree-flex-scrollable': scrollHeight === 'flex' }"
            [ngStyle]="style"
            [class]="styleClass"
            *ngIf="!horizontal"
            (drop)="onDrop($event)"
            (dragover)="onDragOver($event)"
            (dragenter)="onDragEnter()"
            (dragleave)="onDragLeave($event)"
        >
            <div class="p-tree-loading-overlay p-component-overlay" *ngIf="loading">
                <i *ngIf="loadingIcon" [class]="'p-tree-loading-icon pi-spin ' + loadingIcon"></i>
                <ng-container *ngIf="!loadingIcon">
                    <SpinnerIcon *ngIf="!loadingIconTemplate" [spin]="true" [styleClass]="'p-tree-loading-icon'" />
                    <span *ngIf="loadingIconTemplate" class="p-tree-loading-icon">
                        <ng-template *ngTemplateOutlet="loadingIconTemplate"></ng-template>
                    </span>
                </ng-container>
            </div>
            <ng-container *ngTemplateOutlet="headerTemplate"></ng-container>
            <div *ngIf="filter" class="p-tree-filter-container">
                <input #filter type="text" autocomplete="off" class="p-tree-filter p-inputtext p-component" [attr.placeholder]="filterPlaceholder" (keydown.enter)="$event.preventDefault()" (input)="_filter($event.target.value)" />
                <SearchIcon *ngIf="!filterIconTemplate" [styleClass]="'p-tree-filter-icon'" />
                <span *ngIf="filterIconTemplate" class="p-tree-filter-icon">
                    <ng-template *ngTemplateOutlet="filterIconTemplate"></ng-template>
                </span>
            </div>

            <p-scroller
                #scroller
                *ngIf="virtualScroll"
                [items]="serializedValue"
                [tabindex]="-1"
                styleClass="p-tree-wrapper"
                [style]="{ height: scrollHeight !== 'flex' ? scrollHeight : undefined }"
                [scrollHeight]="scrollHeight !== 'flex' ? undefined : '100%'"
                [itemSize]="virtualScrollItemSize || _virtualNodeHeight"
                [lazy]="lazy"
                (onScroll)="onScroll.emit($event)"
                (onScrollIndexChange)="onScrollIndexChange.emit($event)"
                (onLazyLoad)="onLazyLoad.emit($event)"
                [options]="virtualScrollOptions"
            >
                <ng-template pTemplate="content" let-items let-scrollerOptions="options">
                    <ul *ngIf="items" class="p-tree-container" [ngClass]="scrollerOptions.contentStyleClass" [style]="scrollerOptions.contentStyle" role="tree" [attr.aria-label]="ariaLabel" [attr.aria-labelledby]="ariaLabelledBy">
                        <p-treeNode
                            #treeNode
                            *ngFor="let rowNode of items; let firstChild = first; let lastChild = last; let index = index; trackBy: trackBy"
                            [level]="rowNode.level"
                            [rowNode]="rowNode"
                            [node]="rowNode.node"
                            [firstChild]="firstChild"
                            [lastChild]="lastChild"
                            [index]="getIndex(scrollerOptions, index)"
                            [itemSize]="scrollerOptions.itemSize"
                            [indentation]="indentation"
                        ></p-treeNode>
                    </ul>
                </ng-template>
                <ng-container *ngIf="loaderTemplate">
                    <ng-template pTemplate="loader" let-scrollerOptions="options">
                        <ng-container *ngTemplateOutlet="loaderTemplate; context: { options: scrollerOptions }"></ng-container>
                    </ng-template>
                </ng-container>
            </p-scroller>
            <ng-container *ngIf="!virtualScroll">
                <div #wrapper class="p-tree-wrapper" [style.max-height]="scrollHeight">
                    <ul class="p-tree-container" *ngIf="getRootNode()" role="tree" [attr.aria-label]="ariaLabel" [attr.aria-labelledby]="ariaLabelledBy">
                        <p-treeNode
                            *ngFor="let node of getRootNode(); let firstChild = first; let lastChild = last; let index = index; trackBy: trackBy"
                            [node]="node"
                            [firstChild]="firstChild"
                            [lastChild]="lastChild"
                            [index]="index"
                            [level]="0"
                        ></p-treeNode>
                    </ul>
                </div>
            </ng-container>

            <div class="p-tree-empty-message" *ngIf="!loading && (getRootNode() == null || getRootNode().length === 0)">
                <ng-container *ngIf="!emptyMessageTemplate; else emptyFilter">
                    {{ emptyMessageLabel }}
                </ng-container>
                <ng-container #emptyFilter *ngTemplateOutlet="emptyMessageTemplate"></ng-container>
            </div>
            <ng-container *ngTemplateOutlet="footerTemplate"></ng-container>
        </div>
        <div [ngClass]="{ 'p-tree p-tree-horizontal p-component': true, 'p-tree-selectable': selectionMode }" [ngStyle]="style" [class]="styleClass" *ngIf="horizontal">
            <ng-container *ngTemplateOutlet="headerTemplate"></ng-container>
            <div class="p-tree-loading-mask p-component-overlay" *ngIf="loading">
                <i *ngIf="loadingIcon" [class]="'p-tree-loading-icon pi-spin ' + loadingIcon"></i>
                <ng-container *ngIf="!loadingIcon">
                    <SpinnerIcon *ngIf="!loadingIconTemplate" [spin]="true" [styleClass]="'p-tree-loading-icon'" />
                    <span *ngIf="loadingIconTemplate" class="p-tree-loading-icon">
                        <ng-template *ngTemplateOutlet="loadingIconTemplate"></ng-template>
                    </span>
                </ng-container>
            </div>
            <table *ngIf="value && value[0]">
                <p-treeNode [node]="value[0]" [root]="true"></p-treeNode>
            </table>
            <div class="p-tree-empty-message" *ngIf="!loading && (getRootNode() == null || getRootNode().length === 0)">
                <ng-container *ngIf="!emptyMessageTemplate; else emptyFilter">
                    {{ emptyMessageLabel }}
                </ng-container>
                <ng-container #emptyFilter *ngTemplateOutlet="emptyMessageTemplate"></ng-container>
            </div>
            <ng-container *ngTemplateOutlet="footerTemplate"></ng-container>
        </div>
    `,
      changeDetection: ChangeDetectionStrategy.Default,
      encapsulation: ViewEncapsulation$1.None,
      host: {
        class: "p-element"
      },
      styles: ["@layer primeng{.p-tree-container{margin:0;padding:0;list-style-type:none;overflow:auto}.p-treenode-children{margin:0;padding:0;list-style-type:none}.p-tree-wrapper{overflow:auto}.p-treenode-selectable{cursor:pointer;-webkit-user-select:none;user-select:none}.p-tree-toggler{cursor:pointer;-webkit-user-select:none;user-select:none;display:inline-flex;align-items:center;justify-content:center;overflow:hidden;position:relative;flex-shrink:0}.p-treenode-leaf>.p-treenode-content .p-tree-toggler{visibility:hidden}.p-treenode-content{display:flex;align-items:center}.p-tree-filter{width:100%}.p-tree-filter-container{position:relative;display:block;width:100%}.p-tree-filter-icon{position:absolute;top:50%;margin-top:-.5rem}.p-tree-loading{position:relative;min-height:4rem}.p-tree .p-tree-loading-overlay{position:absolute;display:flex;align-items:center;justify-content:center;z-index:2}.p-tree-flex-scrollable{display:flex;flex:1;height:100%;flex-direction:column}.p-tree-flex-scrollable .p-tree-wrapper{flex:1}.p-tree .p-treenode-droppoint{height:4px;list-style-type:none}.p-tree .p-treenode-droppoint-active{border:0 none}.p-tree-horizontal{width:auto;padding-left:0;padding-right:0;overflow:auto}.p-tree.p-tree-horizontal table,.p-tree.p-tree-horizontal tr,.p-tree.p-tree-horizontal td{border-collapse:collapse;margin:0;padding:0;vertical-align:middle}.p-tree-horizontal .p-treenode-content{font-weight:400;padding:.4em 1em .4em .2em;display:flex;align-items:center}.p-tree-horizontal .p-treenode-parent .p-treenode-content{font-weight:400;white-space:nowrap}.p-tree.p-tree-horizontal .p-treenode{background:url(data:image/gif;base64,R0lGODlhAQABAIAAALGxsf///yH/C1hNUCBEYXRhWE1QPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4KPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNC4xLWMwMzQgNDYuMjcyOTc2LCBTYXQgSmFuIDI3IDIwMDcgMjI6Mzc6MzcgICAgICAgICI+CiAgIDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+CiAgICAgIDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiCiAgICAgICAgICAgIHhtbG5zOnhhcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyI+CiAgICAgICAgIDx4YXA6Q3JlYXRvclRvb2w+QWRvYmUgRmlyZXdvcmtzIENTMzwveGFwOkNyZWF0b3JUb29sPgogICAgICAgICA8eGFwOkNyZWF0ZURhdGU+MjAxMC0wMy0xMVQxMDoxNjo0MVo8L3hhcDpDcmVhdGVEYXRlPgogICAgICAgICA8eGFwOk1vZGlmeURhdGU+MjAxMC0wMy0xMVQxMjo0NDoxOVo8L3hhcDpNb2RpZnlEYXRlPgogICAgICA8L3JkZjpEZXNjcmlwdGlvbj4KICAgICAgPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIKICAgICAgICAgICAgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIj4KICAgICAgICAgPGRjOmZvcm1hdD5pbWFnZS9naWY8L2RjOmZvcm1hdD4KICAgICAgPC9yZGY6RGVzY3JpcHRpb24+CiAgIDwvcmRmOlJERj4KPC94OnhtcG1ldGE+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgCjw/eHBhY2tldCBlbmQ9InciPz4B//79/Pv6+fj39vX08/Lx8O/u7ezr6uno5+bl5OPi4eDf3t3c29rZ2NfW1dTT0tHQz87NzMvKycjHxsXEw8LBwL++vby7urm4t7a1tLOysbCvrq2sq6qpqKempaSjoqGgn56dnJuamZiXlpWUk5KRkI+OjYyLiomIh4aFhIOCgYB/fn18e3p5eHd2dXRzcnFwb25tbGtqaWhnZmVkY2JhYF9eXVxbWllYV1ZVVFNSUVBPTk1MS0pJSEdGRURDQkFAPz49PAA6OTg3NjU0MzIxMC8uLSwrKikoJyYlJCMiISAfHh0cGxoZGBcWFRQTEhEQDw4NDAsKCQgHBgUEAwIBAAAh+QQABwD/ACwAAAAAAQABAAACAkQBADs=) repeat-x scroll center center transparent;padding:.25rem 2.5rem}.p-tree.p-tree-horizontal .p-treenode.p-treenode-leaf,.p-tree.p-tree-horizontal .p-treenode.p-treenode-collapsed{padding-right:0}.p-tree.p-tree-horizontal .p-treenode-children{padding:0;margin:0}.p-tree.p-tree-horizontal .p-treenode-connector{width:1px}.p-tree.p-tree-horizontal .p-treenode-connector-table{height:100%;width:1px}.p-tree.p-tree-horizontal .p-treenode-connector-line{background:url(data:image/gif;base64,R0lGODlhAQABAIAAALGxsf///yH/C1hNUCBEYXRhWE1QPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4KPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNC4xLWMwMzQgNDYuMjcyOTc2LCBTYXQgSmFuIDI3IDIwMDcgMjI6Mzc6MzcgICAgICAgICI+CiAgIDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+CiAgICAgIDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiCiAgICAgICAgICAgIHhtbG5zOnhhcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyI+CiAgICAgICAgIDx4YXA6Q3JlYXRvclRvb2w+QWRvYmUgRmlyZXdvcmtzIENTMzwveGFwOkNyZWF0b3JUb29sPgogICAgICAgICA8eGFwOkNyZWF0ZURhdGU+MjAxMC0wMy0xMVQxMDoxNjo0MVo8L3hhcDpDcmVhdGVEYXRlPgogICAgICAgICA8eGFwOk1vZGlmeURhdGU+MjAxMC0wMy0xMVQxMjo0NDoxOVo8L3hhcDpNb2RpZnlEYXRlPgogICAgICA8L3JkZjpEZXNjcmlwdGlvbj4KICAgICAgPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIKICAgICAgICAgICAgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIj4KICAgICAgICAgPGRjOmZvcm1hdD5pbWFnZS9naWY8L2RjOmZvcm1hdD4KICAgICAgPC9yZGY6RGVzY3JpcHRpb24+CiAgIDwvcmRmOlJERj4KPC94OnhtcG1ldGE+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgCjw/eHBhY2tldCBlbmQ9InciPz4B//79/Pv6+fj39vX08/Lx8O/u7ezr6uno5+bl5OPi4eDf3t3c29rZ2NfW1dTT0tHQz87NzMvKycjHxsXEw8LBwL++vby7urm4t7a1tLOysbCvrq2sq6qpqKempaSjoqGgn56dnJuamZiXlpWUk5KRkI+OjYyLiomIh4aFhIOCgYB/fn18e3p5eHd2dXRzcnFwb25tbGtqaWhnZmVkY2JhYF9eXVxbWllYV1ZVVFNSUVBPTk1MS0pJSEdGRURDQkFAPz49PAA6OTg3NjU0MzIxMC8uLSwrKikoJyYlJCMiISAfHh0cGxoZGBcWFRQTEhEQDw4NDAsKCQgHBgUEAwIBAAAh+QQABwD/ACwAAAAAAQABAAACAkQBADs=) repeat-y scroll 0 0 transparent;width:1px}.p-tree.p-tree-horizontal table{height:0}.p-scroller .p-tree-container{overflow:visible}}\n"]
    }]
  }], () => [{
    type: ElementRef
  }, {
    type: TreeDragDropService,
    decorators: [{
      type: Optional
    }]
  }, {
    type: PrimeNGConfig
  }, {
    type: ChangeDetectorRef
  }], {
    value: [{
      type: Input
    }],
    selectionMode: [{
      type: Input
    }],
    selection: [{
      type: Input
    }],
    style: [{
      type: Input
    }],
    styleClass: [{
      type: Input
    }],
    contextMenu: [{
      type: Input
    }],
    layout: [{
      type: Input
    }],
    draggableScope: [{
      type: Input
    }],
    droppableScope: [{
      type: Input
    }],
    draggableNodes: [{
      type: Input
    }],
    droppableNodes: [{
      type: Input
    }],
    metaKeySelection: [{
      type: Input
    }],
    propagateSelectionUp: [{
      type: Input
    }],
    propagateSelectionDown: [{
      type: Input
    }],
    loading: [{
      type: Input
    }],
    loadingIcon: [{
      type: Input
    }],
    emptyMessage: [{
      type: Input
    }],
    ariaLabel: [{
      type: Input
    }],
    togglerAriaLabel: [{
      type: Input
    }],
    ariaLabelledBy: [{
      type: Input
    }],
    validateDrop: [{
      type: Input
    }],
    filter: [{
      type: Input
    }],
    filterBy: [{
      type: Input
    }],
    filterMode: [{
      type: Input
    }],
    filterPlaceholder: [{
      type: Input
    }],
    filteredNodes: [{
      type: Input
    }],
    filterLocale: [{
      type: Input
    }],
    scrollHeight: [{
      type: Input
    }],
    lazy: [{
      type: Input
    }],
    virtualScroll: [{
      type: Input
    }],
    virtualScrollItemSize: [{
      type: Input
    }],
    virtualScrollOptions: [{
      type: Input
    }],
    indentation: [{
      type: Input
    }],
    _templateMap: [{
      type: Input
    }],
    trackBy: [{
      type: Input
    }],
    virtualNodeHeight: [{
      type: Input
    }],
    selectionChange: [{
      type: Output
    }],
    onNodeSelect: [{
      type: Output
    }],
    onNodeUnselect: [{
      type: Output
    }],
    onNodeExpand: [{
      type: Output
    }],
    onNodeCollapse: [{
      type: Output
    }],
    onNodeContextMenuSelect: [{
      type: Output
    }],
    onNodeDrop: [{
      type: Output
    }],
    onLazyLoad: [{
      type: Output
    }],
    onScroll: [{
      type: Output
    }],
    onScrollIndexChange: [{
      type: Output
    }],
    onFilter: [{
      type: Output
    }],
    templates: [{
      type: ContentChildren,
      args: [PrimeTemplate]
    }],
    filterViewChild: [{
      type: ViewChild,
      args: ["filter"]
    }],
    scroller: [{
      type: ViewChild,
      args: ["scroller"]
    }],
    wrapperViewChild: [{
      type: ViewChild,
      args: ["wrapper"]
    }]
  });
})();
var TreeModule = class _TreeModule {
  static ɵfac = function TreeModule_Factory(t) {
    return new (t || _TreeModule)();
  };
  static ɵmod = ɵɵdefineNgModule({
    type: _TreeModule,
    declarations: [Tree, UITreeNode],
    imports: [CommonModule, SharedModule, RippleModule, ScrollerModule, CheckIcon, ChevronDownIcon, ChevronRightIcon, MinusIcon, SearchIcon, SpinnerIcon, PlusIcon],
    exports: [Tree, SharedModule, ScrollerModule]
  });
  static ɵinj = ɵɵdefineInjector({
    imports: [CommonModule, SharedModule, RippleModule, ScrollerModule, CheckIcon, ChevronDownIcon, ChevronRightIcon, MinusIcon, SearchIcon, SpinnerIcon, PlusIcon, SharedModule, ScrollerModule]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TreeModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule, SharedModule, RippleModule, ScrollerModule, CheckIcon, ChevronDownIcon, ChevronRightIcon, MinusIcon, SearchIcon, SpinnerIcon, PlusIcon],
      exports: [Tree, SharedModule, ScrollerModule],
      declarations: [Tree, UITreeNode]
    }]
  }], null, null);
})();
export {
  Tree,
  TreeModule,
  UITreeNode
};
//# sourceMappingURL=primeng_tree.js.map
