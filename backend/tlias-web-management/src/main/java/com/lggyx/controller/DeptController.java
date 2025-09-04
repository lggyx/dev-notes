package com.lggyx.controller;

import com.lggyx.pojo.Dept;
import com.lggyx.pojo.Result;
import com.lggyx.service.DeptService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

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
    @DeleteMapping("/{id}")
    public Result delete(@PathVariable Integer  id){
        log.debug("删除部门");
        return deptService.delete(id)?Result.success():Result.error("删除失败");
    }
    @PostMapping
    public Result add(@RequestBody Dept dept){
        log.debug("添加部门");
        return deptService.add(dept)?Result.success():Result.error("添加失败");
    }
    @GetMapping("/{id}")
    public Result get(@PathVariable Integer id){
        log.debug("根据ID查询部门");
        return Result.success(deptService.get(id));
    }
    @PutMapping
    public Result update(@RequestBody Dept dept){
        log.debug("更新部门");
        return deptService.update(dept)?Result.success():Result.error("更新失败");
    }
}
