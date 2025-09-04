-- javawebdemo.sql
use javawebdemo;
Drop table if exists dept;
Create table dept
(
    id          INT UNSIGNED PRIMARY KEY AUTO_INCREMENT NOT NULL COMMENT '主键ID',
    name        VARCHAR(10)                             NOT NULL COMMENT '部门名称',
    create_time DATETIME                                NOT NULL COMMENT '创建时间',
    update_time DATETIME                                NOT NULL COMMENT '修改时间'
) COMMENT ='部门表';
DROP TABLE IF EXISTS emp;
Create table emp
(
    id          INT UNSIGNED PRIMARY KEY AUTO_INCREMENT NOT NULL COMMENT 'ID',
    username    VARCHAR(20)                             NOT NULL COMMENT '用户名',
    password    VARCHAR(32) default '123456' COMMENT '密码',
    name        VARCHAR(10)                             NOT NULL COMMENT '姓名',
    gender      TINYINT UNSIGNED                        NOT NULL COMMENT '性别, 1 男  2 女',
    image       VARCHAR(300) COMMENT '图像',
    job         TINYINT UNSIGNED COMMENT '职位, 1 班主任  2 讲师  3 学工主管  4 教研主管',
    entrydate   DATE COMMENT '入职时间',
    create_time DATETIME                                NOT NULL COMMENT '创建时间',
    update_time DATETIME                                NOT NULL COMMENT '修改时间'
) COMMENT ='员工表';
INSERT INTO dept
VALUES (1, '开发部', '2020-01-01 00:00:00', '2020-01-01 00:00:00'),
       (2, '测试部', '2020-01-01 00:00:00', '2020-01-01 00:00:00'),
       (3, '财务部', '2020-01-01 00:00:00', '2020-01-01 00:00:00'),
       (4, '销售部', '2020-01-01 00:00:00', '2020-01-01 00:00:00'),
       (5, ' Marketing', '2020-01-01 00:00:00', '2020-01-01 00:00:00');
INSERT INTO emp
VALUES (1, 'admin', '123456', '管理员', 1, 'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif', 1,
        '2020-01-01', '2020-01-01 00:00:00', '2020-01-01 00:00:00'),
       (2, 'user', '123456', '用户', 1, 'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif', 1,
        '2020-01-01', '2020-01-01 00:00:00', '2020-01-01 00:00'),
       (3, 'user1', '123456', '用户1', 1, 'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif', 1,
        '2020-01-01', '2020-01-01 00:00:00', '2020-01-01 00:00'),
       (4, 'user2', '123456', '用户2', 1, 'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif', 1,
        '2020-01-01', '2020-01-01 00:00:00', '2020-01-01 00:00'),
       (5, 'user3', '123456', '用户3', 1, 'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif', 1,
        '2020-01-01', '2020-01-01 00:00:00', '2020-01-01 00:00');

