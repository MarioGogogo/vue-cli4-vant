/**
 *
 * @param {当前上下文} context  哪个组件来向上寻找
 * @param {要找的组件的 `name`} componentName
 * @returns
 */
function findComponentUpward(context, componentName) {
  let parent = context.$parent;
  let name = parent.$options.name;
  //  while 语句里不断向上覆盖当前的 `parent` 对象
  while (parent && (!name || [componentName].indexOf(name) < 0)) {
    parent = parent.$parent;
    if (parent) name = parent.$options.name;
  }
  return parent;
}

/**
 *
 * @param {当前上下文} context  向上找到所有指定组件
 * @param {要找的组件的 `name`} componentName
 * @returns
 */

function findComponentsUpward(context, componentName) {
  let parents = [];
  const parent = context.$parent;

  if (parent) {
    if (parent.$options.name === componentName) parents.push(parent);
    return parents.concat(findComponentsUpward(parent, componentName));
  } else {
    return [];
  }
}

/**
 *
 * @param {当前上下文} context  向下找到最近的指定组件
 * @param {要找的组件的 `name`} componentName
 * @returns
 */
function findComponentDownward(context, componentName) {
  // `context.$children` 得到的是当前组件的全部子组件
  const childrens = context.$children;
  let children = null;

  if (childrens.length) {
    for (const child of childrens) {
      const name = child.$options.name;
      if (name === componentName) {
        children = child;
        break;
      } else {
        //递归
        children = findComponentDownward(child, componentName);
        if (child) break;
      }
    }
  }
  return children;
}

/**
 *
 * @param {当前上下文} context  向下找所有指定组件
 * @param {要找的组件的 `name`} componentName
 * @returns
 */
function findComponentsDownward(context, componentName) {
  // reduce 递归向下 components初始为【】
  return context.$children.reduce((components, child) => {
    if (child.$options.name === componentName) components.push(child);
    const foundChilds = findComponentsDownward(child, componentName);
    return components.concat(foundChilds);
  }, []);
}

/**
 *
 * @param {当前上下文} context  找到指定组件的兄弟组件
 * @param {要找的组件的 `name`} componentName
 * @param {是否把本身除外，默认是 true} exceptMe 
 * @returns
 */
 function findBrothersComponents (context, componentName, exceptMe = true) {
  let res = context.$parent.$children.filter(item => {
    return item.$options.name === componentName;
  });
  let index = res.findIndex(item => item._uid === context._uid);
  if (exceptMe) res.splice(index, 1);
  return res;
}



function typeOf(obj) {
  const toString = Object.prototype.toString;
  const map = {
    '[object Boolean]'  : 'boolean',
    '[object Number]'   : 'number',
    '[object String]'   : 'string',
    '[object Function]' : 'function',
    '[object Array]'    : 'array',
    '[object Date]'     : 'date',
    '[object RegExp]'   : 'regExp',
    '[object Undefined]': 'undefined',
    '[object Null]'     : 'null',
    '[object Object]'   : 'object'
  };
  return map[toString.call(obj)];
}
// deepCopy
function deepCopy(data) {
  const t = typeOf(data);
  let o;

  if (t === 'array') {
    o = [];
  } else if ( t === 'object') {
    o = {};
  } else {
    return data;
  }

  if (t === 'array') {
    for (let i = 0; i < data.length; i++) {
      o.push(deepCopy(data[i]));
    }
  } else if ( t === 'object') {
    for (let i in data) {
      o[i] = deepCopy(data[i]);
    }
  }
  return o;
}

export {deepCopy, findComponentUpward, findComponentsUpward, findComponentDownward, findComponentsDownward,findBrothersComponents };
