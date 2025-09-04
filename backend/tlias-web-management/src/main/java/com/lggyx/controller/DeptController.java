package com.lggyx.controller;

import com.lggyx.pojo.Dept;
import com.lggyx.pojo.Result;
import com.lggyx.service.DeptService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@Slf4j
@RestController
@RequestMapping("/depts")
public class DeptController {
    @Autowired
    DeptService deptService;
    @GetMapping
    public Result list(){
        log.debug("查询所有部门");
        List<Dept> deptList = deptService.list();
        return Result.success(deptList);
    }
}
