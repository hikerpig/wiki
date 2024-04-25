git
===

## Meta

Related:


## 文章

- [How to create and apply a patch with Git Diff and Git Apply commands for your Drupal website | Specbee](https://www.specbee.com/blogs/how-create-and-apply-patch-git-diff-and-git-apply-commands-your-drupal-website)
- [When to Use Each of the Git Diff Algorithms – Technical Scratchpad](https://luppeng.wordpress.com/2020/10/10/when-to-use-each-of-the-git-diff-algorithms/)

## 小 tip

- 使用 cherrypick 时带上 `-x` 参数，可以在 commit message 最后生成一行 (cherry picked from sha) 这样的信息 
- `git -c core.editor=true rebase --continue` rebase continue 的时候去掉编辑器确认步骤 [How to suppress the editor for `git rebase --continue`](https://stackoverflow.com/questions/43489971/how-to-suppress-the-editor-for-git-rebase-continue)
- 或者 `GIT_EDITOR=true git rebase --continue`

- [Git Tips 3: Really Large Repositories](https://blog.gitbutler.com/git-tips-3-really-large-repositories/)
```
git config core.untrackedCache true
git config core.fsmonitor true # 这个在 windows 上的 2.33.0 git 似乎不支持？
```

## 排查问题

### git connection slow

[really-verbose-way-to-test-git-connection-over-ssh](https://askubuntu.com/questions/336907/really-verbose-way-to-test-git-connection-over-ssh)

```
GIT_SSH_COMMAND="ssh -v" git clone example

# or extra verbose
GIT_SSH_COMMAND="ssh -vvv" git clone example
```