
const chalk = require('chalk');
const msgPath = process.env.GIT_PARAMS;
const fs = require('fs');
const msg = fs.readFileSync(msgPath, 'utf-8').trim();
/**
 * feat: 新增
 * fix: 修复
 * docs: 文档相关
 * refactor: 重构
 * perf: 优化
 * test: 测试相关
 * ci: 自动化构建文件
 * chore: 依赖相关
 * build: 编译相关
 * revert: 回退版本
 */
const commitRegex = /^(feat|fix|docs|refactor|perf|test|ci|chore|build|revert)(\(.+\))?:.{1,50}/;

if (!commitRegex.test(msg)) {
  console.log();
  console.error(
    `${chalk.bgRed.white(' ERROR ')} ${chalk.red(`invalid commit message format.`)}\n\n` +
    chalk.red(`  Proper commit message format is required for automated changelog generation. Examples:\n\n`) +
    `    ${chalk.green(`feat(compiler): add option`)}\n` +
    `    ${chalk.green(`fix(v-model): handle events on blur`)}\n\n` +
    chalk.red(`  See .github/COMMIT_CONVENTION.md for more details.\n`) +
    chalk.red(`  You can also use ${chalk.cyan(`npm run commit`)} to interactively generate a commit message.\n`)
  );
  process.exit(1);
}