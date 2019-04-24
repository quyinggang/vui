# 返回值非0（即未成功）就停止执行脚本
set -e
echo "[Vui UI for Vue 2.0] Enter release version:"
read VERSION

# 再次确认
read -p "Releasing $VERSION - are you sure?（y/n）" 
echo
# 确定就执行相关命令，$REPLY是保存read命令的默认变量
if [[ $REPLY =~ ^[Yy]$ ]]
then
  echo "Releasing v$VERSION ..."
  npm run build

  # 提交编译后的当前分支代码
  git add -A
  git commit -m "build: release v$VERSION"
  # 回写版本号到package.json
  npm version $VERSION --message "build: change version to v$VERSION"
  git push origin master

  # 发布npm包
  npm publish

  # 发布新版本后更新CHANGELOG
  npm run changelog
  git add -A
  git commit -m 'docs: CHANGELOG.md'
  git push origin master
  
  echo "Release complete"
fi
