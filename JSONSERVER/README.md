//获取所有用户信息
http://localhost:3000/users

//获取id为1的用户信息
http://localhost:3000/users/1

//获取所有公司的信息
http://localhost:3000/companies

//获取id为1的公司信息
http://localhost:3000/companies/1

//获取所有公司id为3的用户信息
http://localhost:3000/companies/3/users

//获取公司name=Apple的信息
http://localhost:3000/companies?name=Apple

//获取公司 name=Apple 和 name=Microsoft 的信息
http://localhost:3000/companies?name=Apple&name=Microsoft

//获取一页中只有两条信息 _page _limit
http://localhost:3000/companies?_page=1&_limit=2

//升序排序 asc升序 desc降序 _sort排序
http://localhost:3000/companies?_sort=name&_order=asc

//获取年龄大于20的
http://localhost:3000/users?age_gte=20

//获取年龄25-40的
http://localhost:3000/users?age_gte=25&age_lte=40

//搜索用户信息 q
http://localhost:3000/users?q=30