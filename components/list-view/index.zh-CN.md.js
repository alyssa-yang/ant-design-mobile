webpackJsonp([121],{1030:function(t,e){t.exports={content:["section",["p","\u9002\u7528\u4e8e\u663e\u793a\u540c\u7c7b\u7684\u957f\u5217\u8868\u6570\u636e\u7c7b\u578b\uff0c\u5bf9\u6e32\u67d3\u6027\u80fd\u6709\u4e00\u5b9a\u7684\u4f18\u5316\u6548\u679c\u3002"]],meta:{category:"Components",type:"Combination",title:"ListView",subtitle:"\u957f\u5217\u8868",filename:"components/list-view/index.zh-CN.md"},toc:["ul",["li",["a",{className:"bisheng-toc-h2",href:"#API",title:"API"},"API"]],["li",["a",{className:"bisheng-toc-h2",href:"#ListView.IndexedList",title:"ListView.IndexedList"},"ListView.IndexedList"]],["li",["a",{className:"bisheng-toc-h2",href:"#\u63d0\u793a",title:"\u63d0\u793a"},"\u63d0\u793a"]]],api:["section",["h2","API"],["p","\u9002\u7528\u5e73\u53f0\uff1aWEB"],["blockquote",["p","\u6ce8\u610f: \u6211\u4eec\u4f7f\u7528 ",["a",{title:null,href:"http://facebook.github.io/react-native/releases/0.26/docs/listview.html"},"react-native@0.26 ListView"]," \u7684\u4e00\u4e9b API\uff0c\u5c3d\u7ba1 react-native ListView \u5df2\u7ecf\u88ab\u5b98\u65b9\u6807\u8bb0\u4e3a ",["code","DEPRECATED"],"\uff0c\u4f46\u6211\u4eec\u7684 ",["code","WEB"]," \u7248\u672c\u4ecd\u7136\u6b63\u5e38\u5de5\u4f5c\u3002"]],["table",["thead",["tr",["th","\u5c5e\u6027"],["th","\u8bf4\u660e"],["th","\u7c7b\u578b"],["th","\u9ed8\u8ba4\u503c"]]],["tbody",["tr",["td","dataSource"],["td",["a",{title:null,href:"https://reactnative.cn/docs/0.26/listviewdatasource.html"},"ListView.DataSource (cn)"]," / ",["a",{title:null,href:"http://facebook.github.io/react-native/releases/0.26/docs/listviewdatasource.html"},"ListView.DataSource (us)"]," \u5b9e\u4f8b"],["td","ListViewDataSource"],["td","-"]],["tr",["td","initialListSize"],["td","\u6307\u5b9a\u5728\u7ec4\u4ef6\u521a\u6302\u8f7d\u7684\u65f6\u5019\u6e32\u67d3\u591a\u5c11\u884c\u6570\u636e\uff0c\u7528\u8fd9\u4e2a\u5c5e\u6027\u6765\u786e\u4fdd\u9996\u5c4f\u663e\u793a\u5408\u9002\u6570\u91cf\u7684\u6570\u636e"],["td","number"],["td","-"]],["tr",["td","onEndReached"],["td","\u5f53\u6240\u6709\u7684\u6570\u636e\u90fd\u5df2\u7ecf\u6e32\u67d3\u8fc7\uff0c\u5e76\u4e14\u5217\u8868\u88ab\u6eda\u52a8\u5230\u8ddd\u79bb\u6700\u5e95\u90e8\u4e0d\u8db3",["code","onEndReachedThreshold"],"\u4e2a\u50cf\u7d20\u7684\u8ddd\u79bb\u65f6\u8c03\u7528"],["td","(event?) => {}"],["td","-"]],["tr",["td","onEndReachedThreshold"],["td","\u8c03\u7528",["code","onEndReached"],"\u4e4b\u524d\u7684\u4e34\u754c\u503c\uff0c\u5355\u4f4d\u662f\u50cf\u7d20"],["td","number"],["td","1000"]],["tr",["td","pageSize"],["td","\u6bcf\u6b21\u4e8b\u4ef6\u5faa\u73af\uff08\u6bcf\u5e27\uff09\u6e32\u67d3\u7684\u884c\u6570"],["td","number"],["td","1"]],["tr",["td","renderHeader / renderFooter"],["td","\u9875\u5934\u4e0e\u9875\u811a\uff08\u5982\u679c\u63d0\u4f9b\uff09\u4f1a\u5728\u6bcf\u6b21\u6e32\u67d3\u8fc7\u7a0b\u4e2d\u90fd\u91cd\u65b0\u6e32\u67d3\u3002\u5982\u679c\u5b83\u4eec\u91cd\u7ed8\u7684\u6027\u80fd\u5f00\u9500\u5f88\u5927\uff0c\u628a\u4ed6\u4eec\u5305\u88c5\u5230\u4e00\u4e2aStaticContainer\u6216\u8005\u5176\u5b83\u6070\u5f53\u7684\u7ed3\u6784\u4e2d\u3002\u9875\u811a\u5728\u5217\u8868\u7684\u6700\u5e95\u90e8\uff0c\u800c\u9875\u5934\u4f1a\u5728\u6700\u9876\u90e8"],["td","() => renderable"],["td","-"]],["tr",["td","renderRow"],["td","\u4ece\u6570\u636e\u6e90(data source)\u4e2d\u63a5\u53d7\u4e00\u6761\u6570\u636e\uff0c\u4ee5\u53ca\u5b83\u548c\u5b83\u6240\u5728section\u7684ID\u3002\u8fd4\u56de\u4e00\u4e2a\u53ef\u6e32\u67d3\u7684\u7ec4\u4ef6\u6765\u4e3a\u8fd9\u884c\u6570\u636e\u8fdb\u884c\u6e32\u67d3\u3002\u9ed8\u8ba4\u60c5\u51b5\u4e0b\u53c2\u6570\u4e2d\u7684\u6570\u636e\u5c31\u662f\u653e\u8fdb\u6570\u636e\u6e90\u4e2d\u7684\u6570\u636e\u672c\u8eab\uff0c\u4e0d\u8fc7\u4e5f\u53ef\u4ee5\u63d0\u4f9b\u4e00\u4e9b\u8f6c\u6362\u5668\u3002\u5982\u679c\u67d0\u4e00\u884c\u6b63\u5728\u88ab\u9ad8\u4eae\uff08\u901a\u8fc7\u8c03\u7528highlightRow\u51fd\u6570\uff09\uff0cListView\u4f1a\u5f97\u5230\u76f8\u5e94\u7684\u901a\u77e5\u3002"],["td","(rowData, sectionID, rowID, highlightRow) => renderable"],["td","-"]],["tr",["td","renderScrollComponent"],["td","\u6307\u5b9a\u4e00\u4e2a\u51fd\u6570\uff0c\u5728\u5176\u4e2d\u8fd4\u56de\u4e00\u4e2a\u53ef\u4ee5\u6eda\u52a8\u7684\u7ec4\u4ef6\uff0cListView\u5c06\u4f1a\u5728\u8be5\u7ec4\u4ef6\u5185\u90e8\u8fdb\u884c\u6e32\u67d3\u3002\u9ed8\u8ba4\u60c5\u51b5\u4e0b\u4f1a\u8fd4\u56de\u4e00\u4e2a\u5305\u542b\u6307\u5b9a\u5c5e\u6027\u7684ScrollView\u3002"],["td","(props) => renderable"],["td","-"]],["tr",["td","renderSectionHeader"],["td","\u5982\u679c\u63d0\u4f9b\u4e86\u6b64\u51fd\u6570\uff0c\u4f1a\u4e3a\u6bcf\u4e2a\u5c0f\u8282(section)\u6e32\u67d3\u4e00\u4e2a\u6807\u9898"],["td","(sectionData, sectionID) => renderable"],["td","-"]],["tr",["td","renderSeparator"],["td","\u5982\u679c\u63d0\u4f9b\u4e86\u6b64\u5c5e\u6027\uff0c\u4e00\u4e2a\u53ef\u6e32\u67d3\u7684\u7ec4\u4ef6\u4f1a\u88ab\u6e32\u67d3\u5728\u6bcf\u4e00\u884c\u4e0b\u9762\uff0c\u9664\u4e86\u5c0f\u8282\u6807\u9898\u7684\u524d\u9762\u7684\u6700\u540e\u4e00\u884c\u3002\u5728\u5176\u4e0a\u65b9\u7684\u5c0f\u8282ID\u548c\u884cID\uff0c\u4ee5\u53ca\u90bb\u8fd1\u7684\u884c\u662f\u5426\u88ab\u9ad8\u4eae\u4f1a\u4f5c\u4e3a\u53c2\u6570\u4f20\u9012\u8fdb\u6765\u3002"],["td","(sectionID, rowID, adjacentRowHighlighted) => renderable"],["td","-"]],["tr",["td","scrollRenderAheadDistance"],["td","\u5f53\u4e00\u4e2a\u884c\u63a5\u8fd1\u5c4f\u5e55\u8303\u56f4\u591a\u5c11\u50cf\u7d20\u4e4b\u5185\u7684\u65f6\u5019\uff0c\u5c31\u5f00\u59cb\u6e32\u67d3\u8fd9\u4e00\u884c"],["td","number"],["td","1000"]],["tr",["td","contentContainerStyle"],["td","\u8fd9\u4e9b\u6837\u5f0f\u4f1a\u5e94\u7528\u5230\u4e00\u4e2a\u5185\u5c42\u7684\u5185\u5bb9\u5bb9\u5668\u4e0a\uff0c\u6240\u6709\u7684\u5b50\u89c6\u56fe\u90fd\u4f1a\u5305\u88f9\u5728\u5185\u5bb9\u5bb9\u5668\u5185"],["td","Object"],["td","-"]],["tr",["td","horizontal"],["td","\u5f53\u6b64\u5c5e\u6027\u4e3atrue\u7684\u65f6\u5019\uff0c\u6240\u6709\u7684\u7684\u5b50\u89c6\u56fe\u4f1a\u5728\u6c34\u5e73\u65b9\u5411\u4e0a\u6392\u6210\u4e00\u884c\uff0c\u800c\u4e0d\u662f\u9ed8\u8ba4\u7684\u5728\u5782\u76f4\u65b9\u5411\u4e0a\u6392\u6210\u4e00\u5217"],["td","bool"],["td","false"]],["tr",["td","onContentSizeChange"],["td","\u6b64\u51fd\u6570\u4f1a\u5728 ScrollView \u5185\u90e8\u53ef\u6eda\u52a8\u5185\u5bb9\u7684\u89c6\u56fe\u53d1\u751f\u53d8\u5316\u65f6\u8c03\u7528\u3002"],["td","(contentWidth, contentHeight) => {}"],["td","-"]],["tr",["td","onScroll"],["td","\u5728\u6eda\u52a8\u7684\u8fc7\u7a0b\u4e2d\uff0c\u6bcf\u5e27\u6700\u591a\u8c03\u7528\u4e00\u6b21\u6b64\u56de\u8c03\u51fd\u6570\u3002\u8c03\u7528\u7684\u9891\u7387\u53ef\u4ee5\u7528",["code","scrollEventThrottle"],"\u5c5e\u6027\u6765\u63a7\u5236\u3002"],["td","e => {}"],["td","-"]],["tr",["td","scrollEventThrottle"],["td","\u63a7\u5236\u5728\u6eda\u52a8\u8fc7\u7a0b\u4e2d\uff0cscroll\u4e8b\u4ef6\u88ab\u8c03\u7528\u7684\u9891\u7387"],["td","number"],["td","50"]],["tr",["td","onLayout"],["td","\u5f53\u7ec4\u4ef6\u6302\u8f7d\u6216\u8005\u5e03\u5c40\u53d8\u5316\u7684\u65f6\u5019\u8c03\u7528"],["td","({nativeEvent:{ layout:{ width, height }}}) => {}"],["td","-"]],["tr",["td","----"]],["tr",["td","renderBodyComponent (",["code","web only"],")"],["td","\u81ea\u5b9a\u4e49 body \u7684\u5305\u88f9\u7ec4\u4ef6"],["td","() => renderable"],["td","-"]],["tr",["td","renderSectionWrapper (",["code","web only"],")"],["td","\u6e32\u67d3\u81ea\u5b9a\u4e49\u7684\u533a\u5757\u5305\u88f9\u7ec4\u4ef6"],["td","(sectionID) => renderable"],["td","-"]],["tr",["td","renderSectionBodyWrapper (",["code","web only"],")"],["td","\u6e32\u67d3\u81ea\u5b9a\u4e49\u7684\u533a\u5757 body \u5305\u88f9\u7ec4\u4ef6"],["td","(sectionID) => renderable"],["td","-"]],["tr",["td","useBodyScroll (",["code","web only"],")"],["td","\u4f7f\u7528 html \u7684 ",["code","body"]," \u4f5c\u4e3a\u6eda\u52a8\u5bb9\u5668"],["td","bool"],["td","false"]],["tr",["td","pullToRefresh (",["code","web only"],")"],["td","\u4f7f\u7528 pullToRefresh\uff0c \u4f60\u9700\u8981\u548c ",["code","PullToRefresh"]," \u7ec4\u4ef6\u4e00\u8d77\u4f7f\u7528"],["td","bool"],["td","false"]]]],["h3","\u65b9\u6cd5"],["ul",["li",["p","getMetrics() - \u5bfc\u51fa\u4e00\u4e9b\u7528\u4e8e\u6027\u80fd\u5206\u6790\u7684\u6570\u636e\u3002"]],["li",["p","scrollTo(...args) - \u6eda\u52a8\u5230\u6307\u5b9a\u7684x, y\u504f\u79fb\u5904(\u6682\u4e0d\u652f\u6301\u8fc7\u6e21\u52a8\u753b)\u3002"]]],["h2","ListView.IndexedList"],["p","\u9002\u7528\u5e73\u53f0\uff1aWEB\u3002"],["p","\u6b64\u7ec4\u4ef6\u5e38\u7528\u4e8e \u201c\u901a\u8baf\u5f55\u201d/\u201c\u57ce\u5e02\u5217\u8868\u201d \u7b49\u573a\u666f\u4e2d\uff0c\u652f\u6301\u7d22\u5f15\u5bfc\u822a\u529f\u80fd\u3002"],["blockquote",["p","\u4f60\u53ef\u4ee5\u4f7f\u7528 ListView \u4e0a\u7684\u51e0\u4e4e\u6240\u6709 APIs\u3002"],["p","\u6ce8\u610f\uff1a\u7531\u4e8e\u7d22\u5f15\u5217\u8868\u53ef\u4ee5\u70b9\u51fb\u4efb\u4e00\u9879\u7d22\u5f15\u6765\u5b9a\u4f4d\u5176\u5185\u5bb9\u3001\u5373\u5185\u5bb9\u9700\u8981\u76f4\u63a5\u6eda\u52a8\u5230\u4efb\u610f\u4f4d\u7f6e\uff0c\u8fd9\u6837\u5c31\u96be\u4ee5\u505a\u5230\u50cf ListView \u4e00\u6837\u80fd\u5728\u6eda\u52a8\u65f6\u81ea\u52a8\u61d2\u6e32\u67d3\u3002\u76ee\u524d\u5b9e\u73b0\u4e0a\u53ea\u652f\u6301\u5206\u4e24\u6b65\u6e32\u67d3\uff0c\u80fd\u501f\u6b64\u8fbe\u5230\u9996\u5c4f\u4f18\u5148\u663e\u793a\u76ee\u7684\uff0c\u4f46\u5982\u679c\u5217\u8868\u6570\u636e\u91cf\u8fc7\u5927\u65f6\u3001\u6574\u4f53\u6027\u80fd\u4ecd\u4f1a\u6709\u5f71\u54cd\u3002"]],["table",["thead",["tr",["th","\u5c5e\u6027"],["th","\u8bf4\u660e"],["th","\u7c7b\u578b"],["th","\u9ed8\u8ba4\u503c"]]],["tbody",["tr",["td","quickSearchBarTop"],["td","\u5feb\u6377\u5bfc\u822a\u680f\u6700\u9876\u90e8\u6309\u94ae\u3001\u5e38\u7528\u4e8e\u56de\u5230\u9876\u90e8"],["td","object{value:string, label:string}"],["td",["code","{ value: '#', label: '#' }"]]],["tr",["td","quickSearchBarStyle"],["td","quickSearchBar \u7684 style"],["td","object"],["td","-"]],["tr",["td","onQuickSearch"],["td","\u5feb\u6377\u5bfc\u822a\u5207\u6362\u65f6\u8c03\u7528"],["td","(sectionID: any, topId?:any) => void"],["td","-"]],["tr",["td","showQuickSearchIndicator"],["td","whether show quick search indicator"],["td","bool"],["td","false"]],["tr",["td","delayTime"],["td","\u5ef6\u8fdf\u6e32\u67d3\u65f6\u95f4\u8bbe\u7f6e\uff08\u7528\u4e8e\u9996\u5c4f\u4f18\u5316\uff0c\u4e00\u5f00\u59cb\u6e32\u67d3",["code","initialListSize"],"\u6570\u91cf\u7684\u6570\u636e\uff0c\u5728\u6b64\u65f6\u95f4\u540e\u3001\u5ef6\u8fdf\u6e32\u67d3\u5269\u4f59\u7684\u6570\u636e\u9879\u3001\u5373",["code","totalRowCount - initialListSize"],"\uff09"],["td","number"],["td",["code","100ms"]]],["tr",["td","delayActivityIndicator"],["td","\u5ef6\u8fdf\u6e32\u67d3\u7684 loading \u6307\u793a\u5668"],["td","react node"],["td","-"]]]],["h2","\u63d0\u793a"],["p","ListView \u6709\u4e24\u79cd\u7c7b\u578b\u7684\u6eda\u52a8\u5bb9\u5668\uff1a"],["ol",["li",["p","\u5c40\u90e8 div \u5bb9\u5668"],["ul",["li",["p","\u9ed8\u8ba4\uff0c\u6ce8\u610f\uff1a",["strong","\u9700\u8981\u624b\u52a8\u7ed9 ListView \u8bbe\u7f6e\u9ad8\u5ea6"]]]]],["li",["p","html \u7684 body \u5bb9\u5668"],["ul",["li",["p","\u8bbe\u7f6e",["code","useBodyScroll"],"\u540e\u751f\u6548 (\u4e0d\u9700\u8981\u8bbe\u7f6e\u9ad8\u5ea6)"]]]]],["p",["br"]],["p","\u5bf9 dataSource \u5bf9\u8c61\u53d8\u5316\u65f6\u7684\u5904\u7406\u65b9\u5f0f\u662f\u4ec0\u4e48\uff1f\u4f55\u65f6\u8c03\u7528 onEndReached \u65b9\u6cd5\uff1f"],["p","ListView \u5728 componentWillReceiveProps \u91cc\u4f1a\u76d1\u542c dataSource \u5bf9\u8c61\u7684\u53d8\u5316\uff0c\u5e76\u505a\u4e00\u6b21\n",["a",{title:null,href:"https://github.com/react-component/m-list-view/blob/90badfdb6e94093136c86e5874ce6054eae88a0d/src/ListView.js#L156"},["code","this._renderMoreRowsIfNeeded()"]]," \uff0c\n\u7531\u4e8e\u6b64\u65f6",["a",{title:null,href:"https://github.com/react-component/m-list-view/blob/90badfdb6e94093136c86e5874ce6054eae88a0d/src/ListView.js#L348"},["code","this.state.curRenderedRowsCount === this.props.dataSource.getRowCount()"]],"\n\u5373\u5df2\u7ecf\u6e32\u67d3\u7684\u6570\u636e\u4e0e dataSource \u91cc\u5df2\u6709\u7684\u6570\u636e\u9879\u4e2a\u6570\u76f8\u540c\uff0c\u6240\u4ee5 ListView \u8ba4\u4e3a\u5e94\u8be5\u518d\u8c03\u7528 onEndReached \u65b9\u6cd5\u3002"],["p","onEndReached \u4e3a\u4ec0\u4e48\u4f1a\u4e0d\u505c\u8c03\u7528\uff1f",["a",{title:null,href:"https://github.com/ant-design/ant-design-mobile/issues/520#issuecomment-263510596"},"520#issuecomment-263510596"]],["p",["br"]],["p","\u5176\u4ed6\u95ee\u9898\uff1a",["a",{title:null,href:"https://github.com/ant-design/ant-design-mobile/issues/633"},"#633"]," ",["a",{title:null,href:"https://github.com/ant-design/ant-design-mobile/issues/573"},"#573"]," ",["a",{title:null,href:"https://github.com/ant-design/ant-design-mobile/issues/541"},"#541"]]]}}});