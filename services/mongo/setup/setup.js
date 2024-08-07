db = db.getSiblingDB('test'); // 创建一个名为"test"的DB

// 创建一个名为"test"的用户，设置密码和权限

db.createUser(
    {
        user: "test",
        pwd: "123456",
        roles: [
            { role: "dbOwner", db: "test"}
        ]
    }
);

//db.createCollection("test1");  // 在"test"中创建一个名为"test1"的Collection