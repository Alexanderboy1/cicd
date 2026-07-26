/**
 * commitlint 配置文件
 * ---------------------------------------------------------------
 * 作用：校验「提交信息（commit message）」的格式是否规范。
 *      它由 .husky/commit-msg 这个钩子来触发调用。
 *
 * 我们采用业界最流行的 Conventional Commits（约定式提交）规范。
 * 提交信息格式要求为：  <type>: <描述>
 *   例如：  feat: 新增登录功能
 *           fix: 修复用户名不能为空的问题
 *
 * type（类型）常用取值含义：
 *   feat     ：新功能
 *   fix      ：修复 bug
 *   docs     ：只改文档（如 README）
 *   style    ：不影响代码逻辑的格式改动（空格、分号等）
 *   refactor ：重构（既不是新功能也不是修 bug）
 *   perf     ：性能优化
 *   test     ：增加或修改测试
 *   build    ：构建系统或依赖变更（如 vite、pnpm）
 *   ci       ：CI 配置变更（如 .github/workflows）
 *   chore    ：其他杂项（不改源码或测试）
 *   revert   ：回滚某次提交
 * ---------------------------------------------------------------
 */
export default {
  // extends：继承一套现成的规则。@commitlint/config-conventional
  // 已经内置了上面所有 type 的校验规则，我们直接用即可。
  extends: ['@commitlint/config-conventional'],

  // rules：如果想在默认规则上做个性化调整，写在这里。
  // 规则格式为：[等级, 是否启用, 参数]
  //   等级：0=关闭  1=警告(不挡提交)  2=报错(挡住提交)
  rules: {
    // 描述部分（冒号后面的内容）不能为空
    'subject-empty': [2, 'never'],
    // type 部分不能为空
    'type-empty': [2, 'never'],
    // 限制 type 只能是下面列出的这些值，写错会报错
    'type-enum': [
      2,
      'always',
      [
        'feat',
        'fix',
        'docs',
        'style',
        'refactor',
        'perf',
        'test',
        'build',
        'ci',
        'chore',
        'revert',
      ],
    ],
  },
}
