shell
===

Related: [[terminal]]

- [zsh-completions/zsh-completions-howto.org at master · zsh-users/zsh-completions](https://github.com/zsh-users/zsh-completions/blob/master/zsh-completions-howto.org)
- [Zsh 自动补全脚本入门 楚权的世界](http://chuquan.me/2020/10/02/zsh-completion-tutorial/)



## 常见 Bash 写法

### 判断上个任务是否成功

```
if [[ $? -ne 0 ]]; then
    echo "faild"
else
    echo "success"
fi
```

### 使用 bool 值

```
bool=true
if [[ "$bool" = true ]]; then
if [[ "$bool" = "true" ]]; then
if [[ "$bool" == true ]]; then
if [[ "$bool" == "true" ]]; then
if test "$bool" = true; then
if test "$bool" = "true"; then
```

### 判断变量是否存在

```
#!/bin/bash
#emptyEnviroment.sh
if [ $ORACLE_HOME ];then
	echo "ORACLE_HOME = $ORACLE_HOME"
else
	echo "ORACLE IS NOT EXISTS"
fi
```
