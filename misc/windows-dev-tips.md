windows-dev-tips
===

Related

- [[windows]]

##  常用命令

### 编辑 hosts

```sh
 code 'C:\WINDOWS\system32\drivers\etc\hosts'
```

### 类似 open

- https://github.com/4U6U57/wsl-open

### 编辑 powershell profile

```
code $Profile
```

- [WSL2通过挂载虚拟磁盘解决磁盘读写性能问题](https://zhuanlan.zhihu.com/p/432865918)
- [Fixing WSL2 localhost access issue](https://abdus.dev/posts/fixing-wsl2-localhost-access-issue)
- [wls2 ubuntu设置固定IP地址，并实现一键启动jupyter-lab](https://zhuanlan.zhihu.com/p/510264016)

## 开发环境问题
- [WSL2通过挂载虚拟磁盘解决磁盘读写性能问题](https://zhuanlan.zhihu.com/p/432865918)
- [Fixing WSL2 localhost access issue](https://abdus.dev/posts/fixing-wsl2-localhost-access-issue)
- [wls2 ubuntu设置固定IP地址，并实现一键启动jupyter-lab](https://zhuanlan.zhihu.com/p/510264016)
- https://github.com/kelleyma49/PSFzf , PSFzf is a PowerShell module that wraps [fzf](https://github.com/junegunn/fzf), a fuzzy file finder for the command line.
- [Installing fnm (Fast Node Manager) and Git Bash for Windows](https://9to5tutorial.com/installing-fnm-fast-node-manager-and-git-bash-for-windows)

### 经常使用的功能安装

```powershell
scoop install starship
scoop install zoxide
scopp install fzf

scoop install chezmoi

Install-Module -Name PSFzf -RequiredVersion 2.4.9
```