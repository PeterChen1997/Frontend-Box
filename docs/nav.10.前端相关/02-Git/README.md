# Git

git 在 2005 年被创造，Git 的第一个提交源码仅有约1000行，但是已经实现了Git的基本设计原理，比如初始化仓库、提交代码、查看代码diff、读取提交信息等，Git 定义了三个区：工作区（workspace）、暂存区（index）、版本库（commit history），也实现了三类重要的 Git 对象：blob、tree、commit

## 设计思想

Git 从一开始就设计成了去中心化的分布式系统，每个开发者本地工作区都是一个完整的版本库，拥有本地的代码仓库。另外，Git 的设计初衷是为了让更多的开发者一起开发软件

### 三种对象

该版本 Git 定义了三种对象：

- blob 对象：保存着文件快照
- tree 对象：记录着目录结构和 blob 对象索引
- commit 对象：包含着指向前述 tree 对象的指针和所有提交信息

![图 3](https://peterchen97.coding.net/p/img2/d/test/git/raw/master/d8f24280a190467cfd4e57ee238ad4a5a5a78f578eff4160846336f871ca0bd9.png)  

### 三个区

Git 也定义了三个区，工作区（workspace），暂存区（index）和版本库（commit history）：

- 工作区（workspace）：我们直接修改代码的地方。
- 暂存区（index）：数据暂时存放的区域，用于在工作区和版本库之间进行数据交流。
- 版本库（commit history）：存放已经提交的数据

![图 5](https://peterchen97.coding.net/p/img2/d/test/git/raw/master/693258466be9a36149b0d5b87f4da83bd0fea3c53accafeb9880eba44ee9132b.png)  
