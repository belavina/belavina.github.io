prod_dir=public
prod_branch=gh-pages

echo "-> cleaning old prod stuff"
git worktree prune
rm -rf $prod_dir
mkdir $prod_dir

echo "-> adding worktree"
git worktree add -f $prod_dir $prod_branch;
npm run build:prod

echo "-> pushing changes"
cd $prod_dir;
   git add --all;
   PRE_COMMIT_ALLOW_NO_CONFIG=1 git commit -m 'pages deploy';
   git push origin $prod_branch --force
