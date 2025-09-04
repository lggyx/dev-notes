package com.lggyx;

import com.lggyx.controller.DeptController;
import com.lggyx.pojo.Dept;
import com.lggyx.pojo.Result;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

@SpringBootTest
class TliasWebManagementApplicationTests {

    @Autowired
    DeptController deptController;

    @Test
    void deptList(){
        //获取部门列表
        Result rs = deptController.list();
        System.out.println(rs);
    }
    @Test
    void deptDelete(){
        //获取部门列表
        Result rs = deptController.list();
        System.out.println(rs);
        //删除部门
        rs = deptController.delete(1);
        System.out.println(rs);
        //获取部门列表
        rs = deptController.list();
        System.out.println(rs);
    }
    @Test
    void deptAdd(){
        //获取部门列表
        Result rs = deptController.list();
        System.out.println(rs);
        //添加部门
        rs = deptController.add(new Dept(){
            {
                setName("测试部");
            }
        });
        System.out.println(rs);
        //获取部门列表
        rs = deptController.list();
        System.out.println(rs);
    }
    @Test
    void deptGet(){
        //获取部门列表
        Result rs = deptController.list();
        System.out.println(rs);
        //获取部门
        rs = deptController.get(1);
        System.out.println(rs);
    }
    @Test
    void deptUpdate(){
        //获取部门列表
        Result rs = deptController.list();
        System.out.println(rs);
        //修改部门
        rs = deptController.update(new Dept(){
            {
                setId(1);
                setName("测试部");
            }
        });
        System.out.println(rs);
        //获取部门列表
        rs = deptController.list();
        System.out.println(rs);
    }

}
