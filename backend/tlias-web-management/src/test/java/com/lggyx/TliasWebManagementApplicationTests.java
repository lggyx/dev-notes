package com.lggyx;

import com.lggyx.controller.DeptController;
import com.lggyx.pojo.Result;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import java.util.List;

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

}
